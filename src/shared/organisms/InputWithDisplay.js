import React from 'react';
import { StatusBar, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import SquaredCircle from '../atoms/SquaredCircle';
import { Ionicons } from '@expo/vector-icons';
import ScaledImage from '../atoms/ScaledImage';
import InputControl from '../organisms/input-controls/InputControl';

const InputWithDisplay = ({ children, onPressEdit, style, editable,  ...inputProps }) => (
    <Grid style={style}>
        <Row>
            <Col>
                <InputControl {...inputProps}>
                    {children}
                </InputControl>
            </Col>
            {!!editable && (<Col
                style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40
                }}
            >
                <TouchableOpacity onPress={() => onPressEdit(!!inputProps.editing)}>
                    <Ionicons
                        name={`md-${!!inputProps.editing ? 'close' : 'create'}`}
                        size={28}
                        style={{ color: '#65318f' }}
                    />
                </TouchableOpacity>
            </Col>)}
        </Row>
    </Grid>
);

const styles = StyleSheet.create({
    text: {
        fontFamily: 'campton_semibold',
		fontSize: 20,
    },
    centered: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default InputWithDisplay