import React, { useState, useRef, useEffect } from 'react';
import { captureRef as takeSnapshotAsync } from 'react-native-view-shot'
import { Text, TouchableOpacity, View } from 'react-native';
import { Grid, Col, Row } from "react-native-easy-grid";
import { debounce } from 'underscore'
import MemeEditorStyle from './MemeEditorStyle';
import MemeItem from './components/memeItems';
import Draggable from './components/draggable/Draggable';
import Input from '../../organisms/input-controls/InputControl';


export default ({
    id,
    metadata,
    memeItems,
    updateMemeItems: propsUpdateMemeItems,
    addMemeItem,
    resetCanvas,
    updateMetadata,
    onSave
}) => {
    // const [memeItems, setMemeItems] = useState(propsMemeItems);
    const canvasRef = useRef(null);
    const canvas = memeItems.find(({ type }) => type === 'CANVAS');
    const updateMemeItems = debounce(propsUpdateMemeItems, 1000, { maxWait: 1000 });

    // useEffect(() => {
    //     setMemeItems(propsMemeItems)
    // }, [propsMemeItems]);
    
    return (
        <MemeEditorStyle>
            <Grid>
                <Row>
                    <Col>
                        <TouchableOpacity
                            onPress={() => addMemeItem({
                                type: 'IMAGE',
                                value: 'http://thecatapi.com/api/images/get?format=src&type=gif&size=small' + Math.random()
                                // value: 'data:image/png;base64,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'
                            })}
                        >
                            <Text style={{ backgroundColor: 'red', height: 40 }}>{'add image'}</Text>
                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity
                            onPress={() => addMemeItem({
                                type: 'TEXT',
                                value: 'next text added here and it could be pretty long'
                            })}
                        >
                            <Text style={{ backgroundColor: 'green', height: 40 }}>{'add text'}</Text>
                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <TouchableOpacity
                            onPress={() => takeSnapshotAsync(canvasRef, {
                                    result: 'base64',
                                    quality: 1,
                                    format: 'jpg',
                                }).then((response) => {
                                    onSave({
                                        id,
                                        metadata: {
                                            ...metadata,
                                            thumbnail: `data:image/jpeg;base64,${response}`
                                        },
                                        memeItems,
                                    })
                                }).catch(console.log)
                            }
                        >
                            <Text style={{ backgroundColor: 'red', height: 40 }}>{'save'}</Text>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Grid>
            <View
                key={`canvas-${id}`}
                ref={canvasRef}
                collapsable={false}
                style={{ paddingBottom: 0, marginBottom: 0 }}
            >
                <MemeItem
                    key={0}
                    type={canvas.type}
                    value={canvas.value}
                    style={canvas.style}
                    onChange={update => updateMemeItems(
                        memeItems.map((item) => item.type === 'CANVAS'
                            ? { ...item, ...update }
                            : item
                        )
                    )}
                >
                    {memeItems
                        // .filter(({ type }) => type !== 'CANVAS')
                        .map(({ type, value, style }, index) => type !== 'CANVAS' && (
                            <MemeItem
                                key={index}
                                type={type}
                                value={value}
                                style={style}
                                onChange={update => updateMemeItems(
                                    memeItems.map((item, itemIndex) => itemIndex === index
                                        ? { ...item, ...update }
                                        : item
                                    )
                                )}
                            />
                        ))
                    }
                </MemeItem>
            </View>

        
            <Draggable
                    key={id}
                    draggable={{
                        x: false,
                        y: true
                    }}
                    style={{
                        height: 40,
                        width: '100%',
                        backgroundColor: 'lightblue',
                        top: memeItems
                            .find((item) => item.type === 'CANVAS')
                            .style.height + 40,
                        position: 'absolute',
                    }}
                    onStyle={update => updateMemeItems(
                        memeItems.map(item => item.type === 'CANVAS'
                            ? {
                                ...item,
                                style: {
                                    ...item.style,
                                    height: update.top - 40
                                }

                            }
                            : item
                        )
                    )}
                >
                    <Text>up and down</Text>
                </Draggable>
                <Grid style={{ marginTop: 40 }}>
                    <Row>
                        <Col>
                            <Input
                                type="text"
                                value={metadata.name}
                                onChange={newName => updateMetadata({
                                    name: newName
                                })}
                            />
                        </Col>
                    </Row>
                </Grid>
        </MemeEditorStyle>
    );
}
