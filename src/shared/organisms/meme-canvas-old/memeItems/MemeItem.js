import React from 'react';
import PropTypes from 'prop-types';

import BackgroundImage from './background-image/BackgroundImage';
import TopText from './top-text/TopText';
import BottomText from './bottom-text/BottomText';

const templateMapping = {
    BACKGROUND_IMAGE: BackgroundImage,
    TOP_TEXT: TopText,
    BOTTOM_TEXT: BottomText
};

const MemeItem = (props) => {
    const Template = templateMapping[props.template];
    return (<Template {...props} />);
};

MemeItem.propTypes = {
    template: PropTypes.string.isRequired
};

export default MemeItem;
