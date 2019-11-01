import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, CameraRoll, Dimensions, Image, Text, TouchableOpacity, Alert } from 'react-native';
import { Button, Icon } from 'native-base';
import * as ImgPicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import Carousel from 'react-native-snap-carousel';
import { withNavigation } from 'react-navigation';
import { Col, Row, Grid } from "react-native-easy-grid";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SquaredCircle from '../../../atoms/SquaredCircle';
import ScaledImage from '../../../atoms/ScaledImage';
import RightArrowIcon from '../../../images/right-arrow.png';
import { updateMemeItems } from '../../../../redux/meme-editor/memeEditorActions';

class ImagePicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [],
            currentValue: props.defaultValue
        };
    }

    componentWillMount() {
        Permissions.askAsync(Permissions.CAMERA_ROLL)
        .then(() => CameraRoll.getPhotos({
            first: 5,
            assetType: 'All'
        }))
        .then(r => {
            this.setState({ images: r.edges.map(item => item.node) });
        })
        .catch(r => console.error(r))
    }

    componentDidMount() {
        Permissions.getAsync(Permissions.CAMERA_ROLL)
            .then(({ status }) => {
                if (status !== 'granted') {
                    Alert.alert(
                        'Device Gallery',
                        'Grant Glitr access to photos',
                        [
                            {
                                text: 'Ok',
                                onPress: () => Permissions
                                    .askAsync(Permissions.CAMERA_ROLL)
                                    .then(({ status }) => {
                                        if (status === 'granted') console.log('access granted')
                                    })
                            },
                            {text: 'cancel', onPress: () => console.log('ok2 pressed')}
                        ]
                    );
                }
                
            });
        Permissions.getAsync(Permissions.CAMERA)
            .then(({ status }) => {
                if (status !== 'granted') {
                    Alert.alert(
                        'Device Gallery',
                        'Grant Glitr access to the camera',
                        [
                            {
                                text: 'Ok',
                                onPress: () => Permissions
                                    .askAsync(Permissions.CAMERA)
                                    .then(({ status }) => {
                                        if (status === 'granted') console.log('access granted')
                                    })
                            },
                            {text: 'cancel', onPress: () => console.log('cancel pressed')}
                        ]
                    );
                }
                
            });
    }

    getImageFromDevice(type) {
        const { onChange, config: { advanced }, navigation } = this.props;
        if (type === 'camera') {
            ImgPicker.launchCameraAsync({ allowsEditing: true, base64: true })
                .then(result => {
                    if (!result.cancelled) {
                        this.setState({ currentValue: `data:image/jpeg;base64,${result.base64}` });
                    }
                    if (!advanced) onChange(`data:image/jpeg;base64,${result.base64}`);
                })
                .catch(console.log);
        } else if (type === 'library') {
            ImgPicker.launchImageLibraryAsync({ allowsEditing: true, base64: true })
                .then(result => {
                    if (!result.cancelled) {
                        this.setState({ currentValue: `data:image/jpeg;base64,${result.base64}` });
                    }
                    if (!advanced) onChange(`data:image/jpeg;base64,${result.base64}`);
                })
                .catch(console.log);;
        } else if (type === 'memeTypes') {
            navigation.navigate('MemeTypesFullScreen', {
                onMemeSelect: (meme) => this.setState({ currentValue: meme })
            });
        }

    }

    render() {
        const {
            navigation,
            updateMemeItems,
            value,
            defaultValue,
            onChange,
            config: {
                size,
                advanced
            },
            style
        } = this.props;
        const {
            currentValue
        } = this.state;

        const dataList = [
            { image: { uri: defaultValue } },
            { type: 'camera' },
            { type: 'library' },
            ...this.state.images
        ];
        if (!!advanced) dataList.splice(2,0, { type: 'memeTypes' });

        const carousel = (<Carousel
            data={dataList}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={size*1.5}
            enableSnap={false}
            renderItem={({ item }) => {
                return !!item.image
                    ? (
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({ currentValue: item.image.uri });
                                if (!advanced) onChange(item.image.uri)
                            }}
                            style={{ marginHorizontal: size*0.25 }}
                        >
                            <SquaredCircle size={size}>
                                <Image
                                    source={{ uri: item.image.uri }}
                                    style={{ height: size, width: size }}
                                />
                            </SquaredCircle>
                        </TouchableOpacity>
                    )
                    : !!item.type && (
                        <TouchableOpacity
                            onPress={() => this.getImageFromDevice(item.type)}
                            style={{ marginHorizontal: size*0.25 }}
                        >
                            <SquaredCircle size={size} style={{ backgroundColor: '#65318f' }} >
                                <View style={{ flex: 1, alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                    {item.type === 'camera' && (<Icon name='md-camera' style={{ color: 'white' }} />)}
                                    {item.type === 'library' && (<Icon name='md-images' style={{ color: 'white' }} />)}
                                    {item.type === 'search' && (<Icon name='md-search' style={{ color: 'white' }} />)}
                                    {item.type === 'memeTypes' && (<Icon name='md-menu' style={{ color: 'white' }} />)}
                                </View>
                            </SquaredCircle>
                        </TouchableOpacity>
                    )
            }}
        />);

        return (
            <View>
                <View style={{ position: 'relative', backgroundColor: '#eee', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    {!!advanced && (<TouchableOpacity
                        onPress={() => {
                            updateMemeItems([
                                {
                                    template: 'BACKGROUND_IMAGE',
                                    value: currentValue,
                                    isFocused: true
                                },
                                {
                                    template: 'TOP_TEXT',
                                    value: 'aaa',
                                    color: '#FFFFFF',
                                    scale: 60,
                                    isFocused: false
                                },
                                {
                                    template: 'BOTTOM_TEXT',
                                    value: 'bbb',
                                    color: '#FFFFFF',
                                    scale: 60,
                                    isFocused: false
                                }
                            ]);
                            navigation.navigate('MemeEditor', {
                                onMemeSelect: (meme) => this.setState({ currentValue: meme })
                            });
                        }
                    }>
                        <ScaledImage
                            source={{ uri: value || currentValue }}
                            style={{ height: 200, borderRadius: 5, margin: 5, marginBottom: 80, ...style }}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>)}
                    {!!advanced
                        ? (
                            <Row style={{ position: 'absolute', bottom: 5 }}>
                                <Col>{carousel}</Col>
                                <Col
                                    style={{
                                        width: 60,
                                        alignContent: 'center',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <TouchableOpacity onPress={() => onChange(currentValue)}>
                                        <SquaredCircle size={size} style={{ backgroundColor: '#65318f', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} >
                                            <Image
                                                source={RightArrowIcon}
                                                style={{ height: 30, width: 30 }}
                                                resizeMode="contain"
                                            />
                                        </SquaredCircle>
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        )
                        : carousel
                    }
                </View>
            </View>
        );
    }
}

ImagePicker.propTypes = {
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    config: PropTypes.shape({
        heading: PropTypes.string
    })
};

ImagePicker.defaultProps = {
    value: undefined,
    defaultValue: undefined,
    config: {
        heading: undefined,
        placeholder: undefined
    }
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    updateMemeItems
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(ImagePicker));
