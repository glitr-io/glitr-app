import React from 'react';
import { StyleSheet, Image , View } from 'react-native';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import SquaredCircle from '../atoms/SquaredCircle';
import ScaledImage from '../atoms/ScaledImage';
import Chance from 'chance';
const chance = new Chance();

const MemePostHeader = () => (
    <Grid style={{ backgroundColor: '#fff', marginHorizontal: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
        <Row>
            <Col
                style={{
                    width: 70,
                    padding: 10,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <SquaredCircle size={50}>
                    <ScaledImage
                        source={{ uri: `http://thecatapi.com/api/images/get?format=src&type=png&size=small&salt=${chance.word({ syllables: 3 })}` }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </SquaredCircle>
            </Col>
            <Col>
                <Grid style={{ padding: 10 }}>
                    <Row>
                        <Text style={styles.text}>{chance.animal()}</Text>
                    </Row>
                </Grid>
            </Col>
        </Row>
    </Grid>
);

const styles = StyleSheet.create({
    text: {
      fontFamily: 'campton_semibold',
      fontSize: 20,
  },
  centered: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default MemePostHeader;
