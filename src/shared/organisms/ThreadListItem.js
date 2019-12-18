import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import MemePostHeader from '../mulecules/MemePostHeader';
import MemePostFooter from '../mulecules/MemePostFooter';
import ScaledImage from '../atoms/ScaledImage';
import Chance from 'chance';
const chance = new Chance();

const ThreadItem = ({ navigation }) => (
    <Grid style={{ marginBottom: 15 }}>
        <Row>
            <TouchableOpacity onPress={() => navigation.navigate('Memes')} style={{ flex: 1 }}>
                <MemePostHeader />
            </TouchableOpacity>
        </Row>
    </Grid>
);

export default withNavigation(ThreadItem);
