import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, View, Text, Animated } from 'react-native';
import { Button, Icon } from 'native-base';
// import ScaledView from '../../atoms/ScaledView';
import Draggable from '../../atoms/Draggable';
import Gestures from 'react-native-easy-gestures';

class Canvas extends Component {
    state = {
        style: {
            top: 100,
            left: 100
        }
    };

    render() {
        const {
            memeItems,
            onSelect,
            onUpdate
        } = this.props;

        const { style } = this.state;

        const screenWidth = Dimensions.get('window').width + 1;

        return (
            <View style={{ position: 'relative', height: screenWidth, width: screenWidth, backgroundColor: 'yellow', top: 50, left: 1 }}>
                <View style={{ height: 100, width: 100, backgroundColor: 'red', position: 'absolute', top: 50 }}></View>
                    {/* <Gestures
                        draggable
                        scalable
                        rotatable
                        style={{
                            width: 100,
                            height: 100,
                            position: 'absolute'
                        }}
                        onEnd={(event, styles) => {
                            console.log(styles);
                        }}
                    >
                        <Image
                            source={{ uri: 'http://www.catholic-ew.org.uk/var/storage/images/cbcew2/cbcew-media-library/images/cbcew-images/test-image-200px/154252-1-eng-GB/Test-image-200px_large.jpg' }}
                            style={{
                                width: 100,
                                height: 100,
                            }}
                            resizeMode="contain"
                        />
                    </Gestures> */}

                    <Draggable
                        onMove={() => console.log('moving!!!')}
                        pressDragRelease={(a, b, c) => {
                            // console.log({ style: a });
                            this.setState({
                                style: {
                                    top: (c.top),
                                    left: (c.left)
                                }
                            });
                        }}
                        style={style}
                    >
                        <Image
                            source={{ uri: 'http://www.catholic-ew.org.uk/var/storage/images/cbcew2/cbcew-media-library/images/cbcew-images/test-image-200px/154252-1-eng-GB/Test-image-200px_large.jpg' }}
                            style={{
                                width: 200,
                                height: 200,
                            }}
                            resizeMode="contain"
                        />
                    </Draggable>
            </View>
        );
    }
}

Canvas.propTypes = {
    memeItems: PropTypes.array
};

export default Canvas;
