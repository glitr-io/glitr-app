import React from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from './background-image/BackgroundImage';
import TopText from './top-text/TopText';
import BottomText from './bottom-text/BottomText';
import Canvas from './canvas/Canvas';

const templateMapping = {
    CANVAS: Canvas,
    BACKGROUND_IMAGE: BackgroundImage,
    IMAGE: BackgroundImage,
    TOP_TEXT: TopText,
    BOTTOM_TEXT: BottomText,
    TEXT: BottomText,
};

const PanelItem = (props) => {
    const Template = templateMapping[props.template];
    return !!Template && (<Template {...props} />);
};

PanelItem.propTypes = {
    template: PropTypes.string.isRequired
};

export default PanelItem;
