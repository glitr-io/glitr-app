import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Avatar from '../mulecules/Avatar';
import Indicator from '../atoms/Indicator';
import ScaledImage from '../atoms/ScaledImage';
import Chance from 'chance';

const chance = new Chance();

const MessageRecieved = () => (
    <Grid style={{ padding: 10 }}>
        <Row>
            <Col style={{ width: 90 }}>
                <Avatar icon={`http://thecatapi.com/api/images/get?format=src&type=png&size=small&salt=${chance.word({ syllables: 3 })}`} />
            </Col>
            <Col>
                <Grid>
                    <Row style={{ height: 30 }}>
                        <Text style={styles.text}>display name</Text>
                    </Row>
                    <Row style={{ padding: 10, backgroundColor: '#eee', borderRadius: 10, borderTopLeftRadius: 0 }}>
                        <View style={{ flex: 1, borderRadius: 5, overflow: 'hidden' }}>
                            <ScaledImage
                                source={{ uri: `http://thecatapi.com/api/images/get?format=src&type=png&size=small&salt=${chance.word({ syllables: 3 })}` }}
                                style={{ width: '100%' }}
                            />
                        </View>
                    </Row>
                    <Row>
                        <Text style={styles.date}>12:34 PM</Text>
                    </Row>
                </Grid>
            </Col>
            <Col
                style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40
                }}
            >
                {/* <Indicator text="888" /> */}
            </Col>
        </Row>
    </Grid>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_semibold',
        fontSize: 15,
        color: '#65318f'
    },
    date: {
        fontFamily: 'campton_light',
        fontSize: 10,
        color: '#aaa',
        marginTop: 5
    }
});

export default MessageRecieved;
