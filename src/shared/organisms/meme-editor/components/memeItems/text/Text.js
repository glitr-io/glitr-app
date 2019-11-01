import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, WebView, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import Draggable from '../../draggable/Draggable';
import Selectable from '../../selectable/Selectable';

class TextItem extends Component {
    state = {
        isEditing: false,
    }

    componentDidMount() {
        this.requestHeight();
        setTimeout(() => this.requestHeight(), 1000);

        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          () => this._keyboardDidShow(),
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          () => this._keyboardDidHide(),
        );
      }
    
      componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
      }
    
      _keyboardDidShow() {
        // alert('Keyboard Shown');
      }
    
      _keyboardDidHide() {
        // alert('Keyboard Hidden');

        this.setState({ isEditing: false });
      }

    requestHeight () {
        this.webview.injectJavaScript(`
            var body = document.body,
                html = document.documentElement;

            var height = Math.max( body.scrollHeight, body.offsetHeight, 
                                html.clientHeight, html.scrollHeight, html.offsetHeight );
            window.postMessage(JSON.stringify({height:height}),"*");
        `);
        this.input.focus();
    }

    handleFocus () {
        this.props.onSelect();
        this.input.focus();
        this.webview.injectJavaScript(`
            (function() {
                this.cursorToggle = setInterval(function() {
                    this.cursorVisible = !this.cursorVisible;
                    var newVisbility = !!this.cursorVisible ? 'visible' : 'hidden';
                    document.querySelectorAll('.cursor')[0].style.visibility = newVisbility;
                }, 500);
            })()
        `);
        this.setState({ isEditing: true });
    }

    handleBlur () {
        this.setState({ isEditing: false });
        this.input.blur();
        this.webview.injectJavaScript(`
            clearInterval(this.cursorToggle);
            document.querySelectorAll('.cursor')[0].style.visibility = 'hidden';
        `)
    }

    handleOnMessage (data) {
        const { onChange, style } = this.props;
        onChange({
            style: {
                ...style,
                webviewHeight: data.height
            }
        });
    }

    render () {
        const { value, style, onChange } = this.props;
        const { isEditing = false } = this.state;

        const webView = true;

        return (
            <Draggable
                key={JSON.stringify((style.transform || [{ scale: 0 }, { rotate: '0deg' }]))}
                style={{
                    ...style,
                    position: 'absolute'
                }}
                onStyle={newStyle => {
                    onChange({ style: {
                        ...style,
                        ...newStyle
                    } });
                }}
            >
                <Selectable
                    // onPress={() => this.requestHeight(' text onPressed called')}
                    onPress={() => this.handleFocus()}
                >
                    <View style={{ position: 'relative' }}>
                        {!!webView ? (
                                <WebView
                                    ref={c => this.webview = c}
                                    javaScriptEnabled={true}
                                    onMessage={({ nativeEvent: data }) => this.handleOnMessage(JSON.parse(data.data))}
                                    source={{
                                        html: `
                                            <body>
                                                <div
                                                    style="
                                                        font-family: 'Impact';
                                                        color: white;
                                                        font-size: 25px;
                                                        text-align: center;
                                                        letter-spacing: 1px;
                                                        -webkit-text-stroke-width: 1px;
                                                        -webkit-text-stroke-color: black;
                                                    "
                                                >
                                                    <span>${value}</span>
                                                    <span
                                                        class="cursor"
                                                        style="margin-left: -5px; visibility: hidden;"
                                                    >|</span>
                                                </div>
                                                <script>
                                                    (function() {
                                                        this.cursorVisible = ${isEditing};
                                                        var newVisbility = !!this.cursorVisible ? 'visible' : 'hidden';
                                                        document.querySelectorAll('.cursor')[0].style.visibility = newVisbility;


                                                        if (!!${isEditing}) {
                                                            this.cursorToggle = setInterval(function() {
                                                                this.cursorVisible = !this.cursorVisible;
                                                                var newVisbility = !!this.cursorVisible ? 'visible' : 'hidden';
                                                                document.querySelectorAll('.cursor')[0].style.visibility = newVisbility;
                                                            }, 500);
                                                        }
                                                    })()
                                                </script>
                                            </body>
                                        `
                                    }}
                                    useWebKit
                                    style={{
                                        backgroundColor: 'transparent',
                                        width: 300,
                                        height: style.webviewHeight || 0
                                    }}
                                />)
                            : (<Text>hello world</Text>)
                        }
                        <View style={{ height: style.webviewHeight, width: 200, position: 'absolute' }} />
                        <TextInput
                            ref={c => this.input = c}
                            style={{height: 40, borderColor: 'gray', borderWidth: 0, display: 'none', opacity: 0}}
                            onChangeText={(value) => {
                                onChange({ value });
                                this.requestHeight();
                            }}
                            onBlur={() => this.handleBlur()}
                            value={value}
                        />
                    </View>
                </Selectable>
            </Draggable>
        );
    }
}

export default TextItem;
