import React, { Component } from 'react';
import { Keyboard } from 'react-native';
import { Grid } from "react-native-easy-grid";

class KeyboardGrid extends Component {
    constructor (props) {
        super(props);
        this.state = {
            paddingBottom: 0
        };
    }
    
    componentDidMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => this._keyboardDidShow(e));
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => this._keyboardDidHide());
    }
    
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
    _keyboardDidShow (e) {
        this.setState({ paddingBottom: e.endCoordinates.height });
      }
    
    _keyboardDidHide () {
        this.setState({ paddingBottom: 0 });
    }

    render() {
        const { children } = this.props;
        const { paddingBottom } = this.state;
        return (
            <Grid {...this.props} style={{ ...this.props.style, paddingBottom }}>
                {children}
            </Grid>
        );
    }
}

export default KeyboardGrid;
