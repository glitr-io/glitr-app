import React from 'react';
import { TextInput, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import RightArrowIcon from '../images/right-arrow.png';

const CommentInput = ({ text }) => (
    <Grid>
        <Row style={{ height: 60 }}>
            <Col>
                <TextInput
                    style={{ fontFamily: 'campton_light', height: 60, borderColor: '#eee', borderWidth: 1, padding: 10 }}
                    value="this is some text!!"
                />
            </Col>
            <Col
                style={{
                    width: 60,
                    backgroundColor: '#65318f',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                <Image
                    source={RightArrowIcon}
                    style={{ height: 30, width: 30 }}
                    resizeMode="contain"
                />
            </Col>
        </Row>
    </Grid>
);

export default CommentInput;
