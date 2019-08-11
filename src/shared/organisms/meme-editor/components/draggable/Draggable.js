import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Gestures from 'react-native-easy-gestures';
import { Col, Row, Grid } from "react-native-easy-grid";

class Draggable extends Component {
    state = {
        controlling: false
    }

    

    render () {
        const { children, onStyle, style, draggable, controllable } = this.props;
        const { controlling } = this.state;

        return (
            // <View
            //     style={{
            //         position: 'relative',
            //         height: 100,
            //         width: 100,
            //         borderWidth: 1,
            //         borderColor: 'blue',
            //     }}
            // >
                <Gestures
                    key={!!controllable && !controlling ? new Date().valueOf() : null}
                    // key={JSON.stringify(style)}
                    draggable={draggable}
                    scalable={{ min: 0.2, max: 10 }}
                    rotatable
                    style={{ ...style }}
                    // onStart={() => this.setState({ controlling: true }, () => onStyle(style))}
                    // onChange={() => this.setState({ controlling: true }, () => onStyle(style))}
                    // onEnd={() => this.setState({ controlling: false }, () => onStyle(style))}
                    onStart={((event, style) => {
                        this.setState({ controlling: true });
                        onStyle(style);
                    })}
                    onChange={((event, style) => {
                        // this.setState({ controlling: true });
                        onStyle(style);
                    })}
                    onEnd={((event, style) => {
                        this.setState({ controlling: false });
                        onStyle(style);
                    })}
                >
                    {children}
                </Gestures>
            // </View>
        );
    }
}

export default Draggable;
