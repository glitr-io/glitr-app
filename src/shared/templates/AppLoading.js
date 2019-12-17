import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import Logo from '../atoms/Logo';

const AppLoading = ({
    loggedIn,
    navigation
}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Auth')
        }, 3000);
    });
    return (
        <Grid style={{ padding: 10 }}>
            <Row style={{ height: 200 }}>
                <Col />
                <Col style={styles.centered}>
                    <Logo style={{ width: '100%' }} />
                </Col>
                <Col/>
              </Row>
    
            <Row style={{ height: 350 }}>
                <Col>
                    <Grid style={{ height: 350 }}>
                        <Row>
                            <Col style={styles.centered}>
                                <Text style={styles.text}>App Loading!</Text>
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        </Grid>
    );
};

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

export default AppLoading;
