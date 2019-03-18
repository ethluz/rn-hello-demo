import React from 'react';
import {
    AsyncStorage,
    // Button,
    StyleSheet,
} from 'react-native';

import {
    ScrollView,
    Icon,
    Row,
    Subtitle,
    Text,
    // Button,
    View,
    Divider,
    Spinner,
    Screen,
    Caption,
    Image,
    TouchableOpacity
} from '@shoutem/ui';

import Blockies from 'react-native-blockies';
// import { observer } from 'mobx-react/native';
// import { USER_KEY } from '../config'
// import userModel from '../model/userModel';
// import { asyncStorageLoad } from '../helpers/asyncStorage';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'scan',
    };

    constructor(props) {
        super(props);

        this.state = {
            address: 'ox343435454545454m435456565656556565656556565',
            username: 'liu3550361',
            telephone: '17316222905',
            loading: false
        };
        // Navigation.events().bindComponent(this); // <== Will be automatically unregistered when unmounted
    }

    async componentDidMount() {
        // const user = await asyncStorageLoad(USER_KEY);
        // if (user) {
        //     userModel.allSet(user);
        //     this.setState({
        //         address:user.address,
        //         username:user.username,
        //         telephone:user.telephone
        //     })
        // } else {
        //     this.setState({
        //         address:userModel.address,
        //         username:userModel.username,
        //         telephone:userModel.telephone
        //     })
        // }
    }

    render() {
        const { address, username, telephone } = this.state;
        return (
            <Screen >
                <Screen >
                    <View style={styles.usercard} >
                        <Row styleName="small"
                            style={styles.userinfo}
                        >
                            <Blockies
                                blockies={address} //string content to generate icon
                                size={60} // blocky icon size
                                style={{ width: 60, height: 60, marginRight: 20, }} // style of the view will wrap the icon
                                color="#dfe"
                                bgColor="#ffe"
                                spotColor="#abc"
                            />
                            <View
                                styleName="vertical"
                            >
                                <Subtitle>{username}</Subtitle>
                                <Text numberOfLines={1}>{telephone}</Text>
                            </View>
                            <Icon styleName="disclosure" name="right-arrow" />
                        </Row>
                        <Divider
                            styleName="line"
                            style={styles.inputLine}
                        />
                        <Row styleName="small"
                            style={{
                                width: '95%',
                                height: 30,
                                // margin:'auto'
                            }}
                        >
                            <View styleName="horizontal">
                                <Subtitle styleName="md-gutter-right">地址:</Subtitle>
                                <Caption >{address.slice(0, 28)}......</Caption>
                            </View>
                            {/* <Button styleName="right-icon" name="right-arrow"><Icon name="receipt" /></Button> */}
                        </Row>
                    </View>
                    <View style={styles.scancontainer}>
                        <TouchableOpacity
                            style={{ alignItems: 'center' }}
                            onPress={() => {
                                Navigation.push(this.props.componentId, {
                                    component: {
                                        name: 'QRCodeScannerScreen',
                                    }
                                });
                            }}
                        >
                            <Image
                                styleName="medium-square"
                                style={styles.scanicon}
                                source={{ uri: 'https://blockluz-1253389096.cos.ap-beijing.myqcloud.com/blockman/scanicon3-1.png' }}
                            />
                            <Text style={styles.scantext}>扫一扫</Text>
                        </TouchableOpacity>
                        <Caption
                            styleName="bold"
                            style={styles.footertext}
                        >
                            安全、便捷的区块链身份授权系统
                        </Caption>
                    </View>
                   
                </Screen>
            </Screen>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
    },
    container2: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center'
    },
    usercard: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 140,
        width: '100%',
        // alignItems: 'center',
        // flex: 1,
    },
    inputLine: {
        width: '90%',
        height: 1,
        backgroundColor: '#EEEEEE',
        margin: 'auto',
        paddingLeft: 5,
        marginBottom: 0,
    },
    userinfo: {
        height: 90,
    },
    scancontainer: {
        marginTop: '80%',
        height: '100%',
        padding: 'auto',
        alignItems: 'center',
    },
    scanicon: {
        width: 90,
        height: 90,
    },
    scantext: {
        fontSize: 13,
        color: '#000000'
    },

    footertext: {
        alignItems: 'center',
        height: 20,
        marginTop: 25,
        color: '#999999'
    },
    footer: {
        margin: 'auto',
        marginTop: 5,
    },
});


