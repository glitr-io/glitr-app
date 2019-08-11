import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, View } from 'react-native';
import { Button, Icon, Content, Container } from 'native-base';
// import ScaledView from '../../atoms/ScaledView';
import LayerItem from './layer-item/LayerItem';

class Layers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            height: null,
            width: null
        };
    }

    render() {
        const {
            memeItems,
            onSelect
        } = this.props;
        const {
            height,
            width
        } = this.state;

        return (
            <Container style={{ width: '100%' }}>
                <Content
                    style={{
                        backgroundColor: 'white'
                    }}
                >
                    {!!memeItems && memeItems.map((memeItem, index) => (
                        <LayerItem
                            key={index}
                            width={width}
                            height={height}
                            {...memeItem}
                            onSelect={() => onSelect(index)}
                        />
                    ))}
                </Content>
            </Container>
        );
    }
}

Layers.propTypes = {
    memeItems: PropTypes.array
};

export default Layers;
