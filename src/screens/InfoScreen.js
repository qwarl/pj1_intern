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
import hover from '../img/hover.png'
import unavailableNoodles from '../img/unavailableNoodles.png'
import comeLater from '../img/comeLater.png'
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
            {/* cham do khi cham vao ly my */}
            <View style={styles.css_hover}>
                <Image style={styles.hover} source={hover} />
                <Image style={styles.hover} source={hover} />
                <Image style={styles.hover} source={hover} />
            </View>
            {/* ly my khi con */}
            <View style={styles.css_noodles}>
                <Image style={styles.noodles1} source={noodles1} />
                <Image style={styles.noodles2} source={noodles2} />
                <Image style={styles.noodles3} source={noodles3} />
            </View>
            {/* ly my khi da het */}
            <View style={styles.css_unavailableNoodles}>
                <Image style={styles.unavailableNoodles} source={unavailableNoodles} />
                <Image style={styles.unavailableNoodles} source={unavailableNoodles} />
                <Image style={styles.unavailableNoodles} source={unavailableNoodles} />
            </View>
            <View style={styles.unavailableText}>
                <Text style={styles.css_unavailableText}>Unavailable</Text>
                <Text style={styles.css_unavailableText}>Unavailable</Text>
                <Text style={styles.css_unavailableText}>Unavailable</Text>
            </View>
            <View style={{ flexDirection: 'row',marginTop:8 }}>
                <Text style={styles.css_number}>3 </Text>
                <Text style={styles.css_noti}>cups of noodles left this month</Text>
            </View>
            <Image style={styles.GetNoodles} source={GetNoodles} />
            <Image style={styles.comeLater} source={comeLater} />
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
        marginTop: 30,
    },
    comeLater:{
        width: 180,
        height: 30,
        marginTop:-30,
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
        fontSize:9,
    },
    css_number: {
        color: '#D91313',
        fontFamily: 'PaytoneOne-Regular',
        fontSize:9,

    },
    hover: {
        width: 80,
        height: 80,
    },
    css_hover: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-around',
        position: 'absolute',
        marginTop: 325,
    },
    css_unavailableNoodles: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-around',
        position: 'absolute',
        marginTop: 285,
    },
    unavailableNoodles: {
        marginTop: 10,
        width: 60,
        height: 120,
    },
    css_unavailableText:{
        fontFamily:'PaytoneOne-Regular',
        fontWeight:'400',
        fontSize:10,
        width: 90,
        // marginLeft:
    },
    unavailableText:{
         flexDirection: 'row' ,
        justifyContent: 'space-around',
        marginLeft:40,
        marginTop:-10,
    }
})
