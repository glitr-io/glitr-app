import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SquaredCircle from '../atoms/SquaredCircle';
import { Col, Row, Grid } from "react-native-easy-grid";
const SIZE = 70;
const MINI_AVATAR_SIZE = SIZE*0.40;

const MultiAvatar = ({ icons }) => (
    <Grid style={{ height: SIZE, width: SIZE }}>
        <Row>
            {!!icons[0] && icons.length === 1
                ? (<Col style={styles.centered}>
                    <SquaredCircle size={SIZE}>
                        <Image
                            source={{ uri: icons[0] }}
                            style={{ height: SIZE, width: SIZE }}
                        />
                    </SquaredCircle>
                </Col>)
                : !!icons[0] && (<Col style={styles.centered}>
                    <SquaredCircle size={MINI_AVATAR_SIZE}>
                        <Image
                            source={{ uri: icons[0] }}
                            style={{ height: MINI_AVATAR_SIZE, width: MINI_AVATAR_SIZE }}
                        />
                    </SquaredCircle>
                </Col>)
            }
            {!!icons[1] &&< Col style={styles.centered}>
                <SquaredCircle size={MINI_AVATAR_SIZE}>
                    <Image
                        source={{ uri: icons[1] }}
                        style={{ height: MINI_AVATAR_SIZE, width: MINI_AVATAR_SIZE }}
                    />
                </SquaredCircle>
            </Col>}
        </Row>
        {!!icons[2] && <Row>
            <Col style={styles.centered}>
                <SquaredCircle size={MINI_AVATAR_SIZE}>
                    <Image
                        source={{ uri: icons[2] }}
                        style={{ height: MINI_AVATAR_SIZE, width: MINI_AVATAR_SIZE }}
                    />
                </SquaredCircle>
            </Col>
            {icons.length !== 3 && <Col style={styles.centered}>
                {!!icons[3] && <SquaredCircle size={MINI_AVATAR_SIZE}>
                    {icons.length === 4
                        ? (<Image
                            source={{ uri: icons[3] }}
                            style={{ height: MINI_AVATAR_SIZE, width: MINI_AVATAR_SIZE }}
                        />)
                        : (<View style={[styles.centered, { backgroundColor: '#65318f', height: MINI_AVATAR_SIZE, width: MINI_AVATAR_SIZE }]}>
                            <Text style={styles.text}>+{icons.length -3}</Text>
                        </View>)
                    }
                </SquaredCircle>}
            </Col>}
        </Row>}
    </Grid>
);

const styles = StyleSheet.create({
    text: {
      fontFamily: 'campton_semibold',
    //   fontSize: 20,
    //   backgroundColor: '#65318f',
      color: '#fff'
  },
  centered: {
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default MultiAvatar;