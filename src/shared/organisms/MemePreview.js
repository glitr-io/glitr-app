import React from 'react';
import { Image } from 'react-native';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import MemePostHeader from '../mulecules/MemePostHeader';
import MemePostFooter from '../mulecules/MemePostFooter';
import ScaledImage from '../atoms/ScaledImage';
import Chance from 'chance';
const chance = new Chance();

const MemePreview = ({
    base64
}) => (
    <Grid style={{ marginBottom: 15 }}>
        <Row>
            <ScaledImage
                source={{
                    uri: base64
                }}
                style={{ width: '30%' }}
            />
        </Row>
    </Grid>
);

export default MemePreview;
