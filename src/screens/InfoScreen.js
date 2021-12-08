import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar } from 'react-native'
const { width, height } = Dimensions.get('window');
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import info from '../img/Information.png'
import frameInfo from '../img/FrameInfo.png'
import noodles2 from '../img/noodles2.png'
import noodles3 from '../img/noodles3.png'
import noodles1 from '../img/noodles1.png'
import _3CupsLeft from '../img/3CupsLeft.png'
import GetNoodles from '../img/GetNoodles.png'
import avatar from '../img/Rosamundpike.jpg'
const InfoScreen = () => {
    return (
        <ImageBackground source={bg} resizeMode='cover' style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.image} source={logo} />
            <Image style={styles.info} source={info} />
            <ImageBackground style={styles.frameInfo} source={frameInfo} >
                <Image style={styles.avatar} source={avatar} />
                <View style={styles.css_view}>
                    <Text style={styles.css_text}>
                        Fullname:
                    </Text>
                    <Text style={styles.css_text}>
                        Birthday:
                    </Text>
                    <Text style={styles.css_text}>
                        Gender:
                    </Text>
                    <Text style={styles.css_text}>
                        Department:
                    </Text>
                </View>
                <View style={styles.css_viewFill}>
                    <Text style={styles.css_textFill}>
                        Alice Mie
                    </Text>
                    <Text style={styles.css_textFill}>
                        12/10/1999
                    </Text>
                    <Text style={styles.css_textFill}>
                        Female
                    </Text>
                    <Text style={styles.css_textFill}>
                        Design
                    </Text>
                </View>
            </ImageBackground>
            <View style={styles.css_noodles}>
                <Image style={styles.noodles1} source={noodles1} />
                <Image style={styles.noodles2} source={noodles2} />
                <Image style={styles.noodles3} source={noodles3} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.css_number}>3 </Text>
                <Text style={styles.css_noti}>cups of noodles left this month</Text>
            </View>
            <Image style={styles.GetNoodles} source={GetNoodles} />
        </ImageBackground>
    )
}

export default InfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    image: {
        width: 90,
        height: 70,
        marginTop: 25,
    },
    info: {
        width: 280,
        height: 25,
        marginTop: 30,
    },
    frameInfo: {
        width: 310,
        height: 115,
        marginTop: 20,
        flexDirection: 'row',
    },
    noodles2: {
        marginTop: 10,
        width: 60,
        height: 120,
    },
    noodles3: {
        marginTop: 10,
        width: 60,
        height: 120,
    },
    noodles1: {
        marginTop: 10,
        width: 60,
        height: 120,
        marginLeft: -10,
    },
    css_noodles: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-around'
    },
    _3CupsLeft: {
        height: 10,
        width: 150,
        marginTop: 10,
    },
    GetNoodles: {
        width: 180,
        height: 30,
        marginTop: 40,
    },
    avatar: {
        borderRadius: width / 2,
        height: 80,
        width: 80,
        marginTop: 15,
        marginLeft: 20,
    },
    css_text: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '800',
        color: '#880B0B',
    },
    css_view: {
        marginTop: 15,
        marginLeft: 10,
    },
    css_textFill: {
        fontFamily: 'Nunito-Regular',
        fontWeight: 'normal',
        color: '#880B0B',
    },
    css_viewFill: {
        marginTop: 15,
        marginLeft: 25,
    },
    css_noti: {
        fontFamily: 'PaytoneOne-Regular',
    },
    css_number: {
         color: '#D91313',
         fontFamily: 'PaytoneOne-Regular' ,
    }
})
