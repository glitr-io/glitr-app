import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, Dimensions } from 'react-native';

class ScaledImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: null,
            width: null,
            layoutWidth: null
        };
    }

    componentDidMount() {
        this.calculateSize();
    }

    componentWillReceiveProps(nextProps) {
        const { height, width } = this.props;
        if (height !== nextProps.height || width !== nextProps.width) this.calculateSize();
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.layoutWidth !== this.state.layoutWidth || prevProps.source !== this.props.source) this.calculateSize();
    }

    calculateSize() {
        const { source: { uri }, height: targetHeight, width: targetWidth, onSizeChange } = this.props;
        const { layoutWidth } = this.state;

        if (!!targetHeight && !!targetWidth) {
            this.setState({ width: targetWidth, height: targetHeight });
            return;
        }

        Image.getSize(uri, (imageWidth, imageHeight) => {
            if (targetWidth && !targetHeight) {
                this.setState({ width: targetWidth, height: imageHeight * (targetWidth / imageWidth) });
            } else if (!targetWidth && targetHeight) {
                this.setState({ width: imageWidth * (targetHeight / imageHeight), height: targetHeight });
            } else if (!targetWidth && !targetHeight && layoutWidth) {
                this.setState({ width: layoutWidth, height: imageHeight * (layoutWidth / imageWidth) });
            } else {
                this.setState({ width: imageWidth, height: imageHeight });
            }
        });
    }

    render() {
        const {
            style
        } = this.props;
        const {
            height,
            width
        } = this.state;

        return (
            <Image
                onLayout={({ nativeEvent: {layout: {width}}}) => !this.state.layoutWidth && this.setState({ layoutWidth: width })}
                resizeMethod="resize"
                resizeMode="contain"
                {...this.props}
                style={{ height, width, ...style }}
            />
        );
    }
}

ScaledImage.propTypes = {
    source: PropTypes.object.isRequired,
    style: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
};

ScaledImage.defaultProps = {
    style: {}
};

export default ScaledImage;