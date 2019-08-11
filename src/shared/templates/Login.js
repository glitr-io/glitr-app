import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Logo from '../atoms/Logo';
import FacebookButton from '../atoms/FacebookButton';
import GoogleButton from '../atoms/GoogleButton';
import Input from '../organisms/input-controls/InputControl';

const Login = ({
	loginForm,
	register,
	loginWithPassword,
	updateLoginForm
}) => (
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
							<Text style={styles.text}>email</Text>
						</Col>
					</Row>
					<Row>
						<Col>
							<Input
								type="text"
								value={loginForm.email}
								onChange={email => updateLoginForm({ email })}
							/>
						</Col>
					</Row>
					<Row>
						<Col style={styles.centered}>
							<Text style={styles.text}>password</Text>
						</Col>
					</Row>
					<Row>
						<Col>
							<Input
								type="text"
								secureTextEntry
								value={loginForm.password}
								onChange={password => updateLoginForm({ password })}
							/>
						</Col>
					</Row>
					<Row>
						<Col style={styles.centered}>
							<Text style={styles.text}>confirm password</Text>
						</Col>
					</Row>
					<Row>
						<Col>
							<Input
								type="text"
								secureTextEntry
								value={loginForm.confirmPassword}
								onChange={confirmPassword => updateLoginForm({ confirmPassword })}
							/>
						</Col>
					</Row>
							
					<Row style={{ marginTop: 20 }}>
						<Col>
							<Button
								full
								style={{ marginLeft: 5, backgroundColor: '#65318f' }}
								onPress={() => loginWithPassword(loginForm.email, loginForm.password)}
							>
								<Text style={[styles.text, { color: 'white', marginHorizontal: 10 }]}>login</Text>
							</Button>
						</Col>
						<Col>
							<Button
								full
								style={{ marginLeft: 5, backgroundColor: '#65318f' }}
								onPress={() => register(loginForm.email, loginForm.password)}
							>
								<Text style={[styles.text, { color: 'white' }]}>register</Text>
							</Button>
						</Col>
					</Row>
				</Grid>
			</Col>
		</Row>
		<Row>
			<Grid>
				<Row style={styles.centered}>
					<Col>
						<Text style={styles.text}>...or login with social media.</Text>
					</Col>
				</Row>
				<Row style={styles.centered}>
					<Col>
						<FacebookButton onPress={loginWithPassword} />
					</Col>
				</Row>
				<Row style={styles.centered}>
					<Col>
						<GoogleButton onPress={() => register('user1@test.com', 'test')} />
					</Col>
				</Row>
			</Grid>
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

export default Login;
