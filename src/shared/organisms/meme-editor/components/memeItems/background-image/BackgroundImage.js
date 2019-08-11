import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Gestures from 'react-native-easy-gestures';

class BackgroundImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: 0,
            width: 0
        };
    }

    componentDidMount() {
        this.calculateSize();
    }

    componentDidUpdate(newProps) {
        if (newProps.value !== this.props.value) this.calculateSize();
    }

    calculateSize() {
        const { value, setCanvasSize } = this.props;
        const { width } = Dimensions.get('window');

        Image.getSize(value, (targetW, targetH) => {
            const size = {
                width,
                height: (width / targetW) * targetH
            };
            console.log('size>>>>>>>>>>>>>', size)
            // this.setState(size, () => setCanvasSize(size));
            this.setState(size);
        });
    }

    render() {
        const {
            value,
            onSelect,
            style,
            isFocused,
            onUpdate
        } = this.props;

        const {
            height,
            width
        } = this.state; 

        const borderStyle = !!isFocused
            ? {
                borderWidth: 3,
                borderColor: 'blue',
                borderStyle: 'solid' 
            }
            : {}

        console.log('state>>>>>>>>>>>>>', this.state)

        return !!isFocused 
            ? (
                <Gestures
                    draggable
                    scalable
                    rotatable
                    style={{
                        ...borderStyle,
                        ...style,
                        position: 'absolute',
                        height,
                        width
                    }}
                    onEnd={(event, styles) => {
                        console.log(styles);
                        onUpdate({ style: styles })
                    }}
                >
                    <TouchableWithoutFeedback
                        onPress={() => onSelect('back ground image')}
                    >
                        <Image
                            source={{ uri: value }}
                            style={{
                                ...(isFocused ? { height: height-6, width: width-6 } : { height, width })
                            }}
                        />
                    </TouchableWithoutFeedback>
                </Gestures>
            )
            : (
                <TouchableWithoutFeedback
                        onPress={() => onSelect('back ground image')}
                >
                    <Image source={{ uri: value }} style={{ position: 'absolute', ...style, height, width }} />
                </TouchableWithoutFeedback>
            );
    }
}

BackgroundImage.propTypes = {
    value: PropTypes.string.isRequired,
    setCanvasSize: PropTypes.func.isRequired
    // height: PropTypes.number,
    // width: PropTypes.number.isRequired
};

// BackgroundImage.defaultProps = {
//     height: null
// };

export default BackgroundImage;
