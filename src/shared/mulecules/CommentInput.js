import React, { useState } from 'react';
import { TextInput, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import RightArrowIcon from '../images/right-arrow.png';

const CommentInput = ({
    value: propsValue = '',
    onChange,
    onSubmit
}) => {
    const [value, setValue] = useState(propsValue);
    const handleTextChange = value => {
        setValue(value);
        if (!!onChange) onChange(value);
    };
    return (
        <Grid>
            <Row style={{ height: 60 }}>
                <Col>
                    <TextInput
                        style={{ fontFamily: 'campton_light', height: 60, borderColor: '#eee', borderWidth: 1, padding: 10 }}
                        value={value}
                        onChangeText={handleTextChange}
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
                    <TouchableOpacity
                        onPress={() => !!onSubmit && onSubmit(value)}
                    >
                        <Image
                            source={RightArrowIcon}
                            style={{ height: 30, width: 30 }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </Col>
            </Row>
        </Grid>
    );
};

export default CommentInput;
