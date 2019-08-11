import React from 'react';
import PropTypes from 'prop-types';

// import BackgroundImage from './background-image/BackgroundImage';
// import TopText from './top-text/TopText';
// import BottomText from './bottom-text/BottomText';
import CanvasItem from './canvas/Canvas';
import ImageItem from './image/Image';
import TextItem from './text/Text';

const templateMapping = {
    // BACKGROUND_IMAGE: BackgroundImage,
    // TOP_TEXT: TopText,
    // BOTTOM_TEXT: BottomText,
    CANVAS: CanvasItem,
    IMAGE: ImageItem,
    TEXT: TextItem
};

const MemeItem = (props) => {
    const Template = templateMapping[props.type];
    return (<Template {...props} />);
};

MemeItem.propTypes = {
    type: PropTypes.string.isRequired
};

export default MemeItem;
