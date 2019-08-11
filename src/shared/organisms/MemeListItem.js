import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Ionicons } from '@expo/vector-icons';
import Avatar from '../mulecules/Avatar';
import MultiAvatar from '../mulecules/MultiAvatar';
import Indicator from '../atoms/Indicator';

const MemeListItem = ({ navigation, onMemeSelect }) => (
    <TouchableOpacity onPress={() => navigation.navigate('MemeEditor', { onMemeSelect })}>
        <Grid style={{ height: 90, backgroundColor: '#fff', padding: 10, borderBottomColor: '#eee', borderBottomWidth: 1 }}>
            <Row>
                <Col style={{ width: 90 }}>
                    <MultiAvatar icons={[
                        "http://thecatapi.com/api/images/get?format=src&type=gif&size=small",
                        "http://thecatapi.com/api/images/get?format=src&type=gif&size=small",
                        "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
                    ]} />
                </Col>
                <Col
                    style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'flex-start'
                    }}
                >
                    <Text style={styles.text}>Classic Meme</Text>
                </Col>
                <Col
                    style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 40
                    }}
                >
                    <Ionicons
                        name="ios-arrow-forward-outline"
                        size={28}
                        style={{ color: '#65318f' }}
                    />
                </Col>
            </Row>
        </Grid>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_semibold',
        fontSize: 20,
    },
    message: {
        fontFamily: 'campton_light',
        fontSize: 15,
        color: '#999'
    },
    date: {
        fontFamily: 'campton_light',
        fontSize: 10,
        color: '#aaa'
    },
    centered: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default withNavigation(MemeListItem);
