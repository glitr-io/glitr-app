import React from 'react';
import { Image , View } from 'react-native';
import { Button, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import { withNavigation } from 'react-navigation';
import LikeButton from '../atoms/LikeButton';
import DislikeButton from '../atoms/DislikeButton';
import CommentsButton from '../atoms/CommentsButton';
import ShareButton from '../atoms/ShareButton';
import Tags from '../mulecules/Tags';
import Chance from 'chance';
const chance = new Chance();

const MemePostFooter = ({ navigation }) => (
    <Grid
        style={{
            backgroundColor: '#fff',
            marginHorizontal: 15,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            shadowColor: '#f00',
            shadowOffset: {
                width: 10,
                height: 10
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
            overflow: 'hidden'
        }}
    >
        <Row style={{ padding: 5 }}>
            <Tags tags={[
                chance.animal(),
                chance.animal(),
                chance.animal(),
                chance.animal()
            ]} />
        </Row>
        <Row>
            <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                <LikeButton count={chance.integer({ min: 0, max: 50 })} />
                <DislikeButton count={chance.integer({ min: 0, max: 50 })} />
            </Col>
            <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                <CommentsButton
                    count={chance.integer({ min: 0, max: 200 })}
                    onPress={() => navigation.navigate('Comments')}
                />
                <ShareButton />
            </Col>
        </Row>
    </Grid>
);

export default withNavigation(MemePostFooter);
