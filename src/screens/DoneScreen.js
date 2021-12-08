import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ImageBackground, StatusBar } from 'react-native'
const { width, height } = Dimensions.get('window');
import bg from '../img/bg.png'
import logo from '../img/logo.png'
import Done from '../img/Done.png'
import altaNoodle from '../img/altaNoodle.png'
import heart from '../img/heart.png'
import backHome from '../img/backHome.png'
const DoneScreen = () => {
    return (
        <ImageBackground source={bg} resizeMode='cover' style={styles.container}>
            <StatusBar translucent backgroundColor="transparent" />
            <Image style={styles.logo} source={logo} />
            <Image style={styles.Done} source={Done} />
            <Image style={styles.altaNoodle} source={altaNoodle} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.css_text}>Enjoy your noodles</Text>
                <Image style={styles.heart} source={heart} />
            </View>
            <Image style={styles.backHome} source={backHome} />
            <Text style={styles.css_textBelow}>Get them below</Text>
        </ImageBackground>

    )
}

export default DoneScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    logo: {
        width: 90,
        height: 70,
        marginTop: 25,
    },
    Done: {
        width: 105,
        height: 25,
        marginTop: 30,
    },
    altaNoodle: {
        width: 166,
        height: 190,
        marginTop: 25,
    },
    css_text: {
        fontFamily: 'PaytoneOne-Regular',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#C71A1A',
        marginTop: 5,
    },
    heart: {
        width: 19,
        height: 15,
        marginLeft: 5,
        marginTop: 9,
    },
    backHome:{
        width: 180,
        height: 32,
        marginTop: 80,
    },
    css_textBelow:{
        
    }
})
