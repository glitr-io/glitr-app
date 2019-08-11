import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, View, Text, Animated } from 'react-native';
import { Button, Icon } from 'native-base';
// import ScaledView from '../../atoms/ScaledView';
import MemeItem from './memeItems/MemeItem';
import Draggable from '../../atoms/Draggable';
import Gestures from 'react-native-easy-gestures';

class Canvas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: null,
            width: null,
            layout: {
                backgroundColor: 'green',
                position: 'absolute',
                width: 150,
                height: 150,
                top: 150,
                left: 150
            }
        };
    }

    componentWillMount () {
        this.canvasHeight = new Animated.Value(500);
    }

    changeHeight (newHeight) {
        Animated.spring(this.canvasHeight, {
            toValue: newHeight
        }).start(); 
        // this.resize.reset(console.log);
    }

    render() {
        const {
            memeItems,
            onSelect,
            onUpdate
        } = this.props;
        const {
            height,
            width,
            layout
        } = this.state;

        const selectedEditorIndex = memeItems
            .findIndex(memeItem => !!memeItem.isFocused);

        return (
            <View style={{ paddingBottom: 50, backgroundColor: 'red', position: 'relative' }}>
                <Animated.View
                    style={{
                        backgroundColor: 'white',
                        position: 'relative',
                        height: this.canvasHeight,
                        width: !!memeItems ? width : Dimensions.get('window').width
                    }}
                >
                    {/* {!memeItems && <Button transparent style={{ flex: 1, width: '100%', justifyContent: 'center' }}><Icon name="md-add" style={{ fontSize: 60 }} /></Button>} */}
                    {!!memeItems && memeItems.map((memeItem, index) => (
                        <MemeItem
                            key={index}
                            width={width}
                            height={height}
                            {...memeItem}
                            onSelect={() => onSelect(index)}
                            setCanvasSize={(size) => {
                                // this.setState({
                                //     height: size.height || height,
                                //     width: size.width || width
                                // });
                                this.changeHeight(size.height || height);
                            }}
                            onUpdate={update => onUpdate(
                                memeItems
                                    .map((memeItem, index) => index === selectedEditorIndex
                                        ? { ...memeItem, ...update }
                                        : memeItem
                                    )
                            )}
                        />
                    ))}
                    {/* <View
                        style={{
                            flex: 1,
                            backgroundColor: 'red',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    > */}
                        <Gestures
                            draggable
                            scalable
                            rotatable
                            style={{
                                width: 150,
                                height: 150
                            }}
                            onEnd={(event, styles) => {
                                console.log(styles);
                            }}
                        >
                            <Image
                                source={{ uri: 'http://www.catholic-ew.org.uk/var/storage/images/cbcew2/cbcew-media-library/images/cbcew-images/test-image-200px/154252-1-eng-GB/Test-image-200px_large.jpg' }}
                                style={{
                                    width: 150,
                                    height: 150,
                                }}
                                resizeMode="contain"
                            />
                        </Gestures>
                    {/* </View> */}
                </Animated.View>
                <View style={{ position: !!height ? 'relative' : 'absolute', marginTop: height }}>
                    <Gestures
                        ref={e => this.resizer = e}
                        draggable={{
                            y: true
                        }}
                        scalable={false}
                        rotatable={false}
                        style={{
                            position: 'absolute',
                            left: 100,
                            top: 100
                        }}
                        onChange={(event, styles) => {
                            console.log(styles.top);
                            this.changeHeight(styles.top);
                            // this.setState({styles});
                        }}
                    >
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                backgroundColor: 'blue'
                            }}
                        />
                    </Gestures>
                </View>
            </View>
        );
    }
}

Canvas.propTypes = {
    memeItems: PropTypes.array
};

export default Canvas;
