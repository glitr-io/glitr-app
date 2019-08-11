import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import ScaledImage from '../atoms/ScaledImage';
import SquaredCircle from '../atoms/SquaredCircle';
import ReplyButton from '../atoms/ReplyButton';
import LikeButton from '../atoms/LikeButton';
import DislikeButton from '../atoms/DislikeButton';
import ReportButton from '../atoms/ReportButton';

const CommentPost = () => (
    <Grid style={{ marginBottom: 15, padding: 10 }}>
        <Row>
            <Col
                style={{
                    width: 70,
                    padding: 10
                }}
            >
                <SquaredCircle size={50}>
                    <ScaledImage
                        source={{ uri: 'https://thumbs.dreamstime.com/t/gray-fluffy-cat-toy-lies-yellow-background-56173920.jpg' }}
                        style={{ width: '100%', height: '100%' }}
                    />
                </SquaredCircle>
            </Col>
            <Col>
                <Grid>
                    <Row>
                        <Col><Text style={styles.displayName}>display name</Text></Col>
                        <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={styles.time}>12:34 PM</Text>
                        </Col>
                    </Row>
                    <Row><Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text></Row>
                    <Row>
                        <Col style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
                            <LikeButton count={12} />
                            <DislikeButton count={12} />
                            <ReplyButton />
                        </Col>
                        <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <ReportButton />
                        </Col>
                    </Row>
                </Grid>
            </Col>
        </Row>
    </Grid>
);

const styles = StyleSheet.create({
    displayName: {
        fontFamily: 'campton_semibold',
        fontSize: 20,
    },
    text: {
        fontFamily: 'campton_light',
        color: '#555'
    },
    time: {
        fontFamily: 'campton_semibold',
        fontSize: 10,
        color: '#999'
    },
});

export default CommentPost;
