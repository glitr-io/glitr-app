import React from 'react';
import { Image } from 'react-native';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import MemePostHeader from '../mulecules/MemePostHeader';
import MemePostFooter from '../mulecules/MemePostFooter';
import ScaledImage from '../atoms/ScaledImage';
import Chance from 'chance';
const chance = new Chance();

const MemePost = () => (
    <Grid style={{ marginBottom: 15 }}>
        <Row>
            <MemePostHeader />
        </Row>
        <Row>
            <ScaledImage
                source={{
                    uri: chance.bool()
                        ? `http://thecatapi.com/api/images/get?format=src&type=gif&size=small&salt=${chance.word({ syllables: 3 })}`
                        : `https://www.randomdoggiegenerator.com/randomdoggie.php?salt=${chance.word({ syllables: 3 })}`
                }}
                style={{ width: '100%' }}
            />
        </Row>
        <Row>
            <MemePostFooter />
        </Row>
    </Grid>
);

export default MemePost;
