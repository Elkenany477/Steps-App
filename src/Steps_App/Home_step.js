import * as React from 'react'
import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import Login_Screen from '../../src/Steps_App/Login_step'

import Entropy from 'react-native-vector-icons/Entypo'
const Home_Screen = () => {
    const [logout, setlogout] = React.useState(false)
    const goback = () => {
        setlogout(true)
    }
    return (
        logout == false ? (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../images/background.png')}
                    resizeMode="stretch"
                    style={styles.up_image}>
                    <ScrollView style={{ paddingVertical: 20 }} >
                        <Image
                            source={require('../../images/logo1.png')}
                            style={styles.low_image}
                        />
                        <Text style={styles.text}>Welcome to your account!</Text>
                        <View style={styles.view_card}>
                            <Text style={styles.text_card}>Your Health Card</Text>
                            <Text style={styles.text_Name}>Name:   Mohamed Hamdy</Text>
                            <Text style={styles.text_Age}>Age:       36</Text>
                            <Image
                                source={require('../../images/p.png')}
                                style={styles.step_image}
                                resizeMode="contain"
                            />


                        </View>
                        <TouchableOpacity
                            onPress={goback}
                            activeOpacity={.7}
                        >
                            <Entropy name='log-out' style={[styles.log_out, { transform: [{ rotateZ: "180deg" }] }]} />
                        </TouchableOpacity>
                    </ScrollView>
                </ImageBackground>


            </View>
        ) : (
            <Login_Screen />
        )

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        color: "#000000",
        marginTop: 15,
    },
    text_card: {
        fontSize: 16,
        color: "#3cbf1c"
    },
    text_Name: {
        fontSize: 17,
        color: "#000000",
        marginTop: 25
    },
    text_Age: {
        fontSize: 17,
        color: "#000000",
        marginTop: 10
    },
    up_image: {
        flex: 1,
        paddingTop: 40,
    },
    low_image: {
        alignSelf: 'center',
        width: 100,
        height: 100,
    },
    step_image: {
        alignSelf: 'center',
        width: 200,
        height: 260,
        marginTop: 15,
        borderRadius: 30,
        // backgroundColor: "#000f",
    },
    view_card: {
        width: "90%",
        height: "60%",
        backgroundColor: "#FFFFFF",
        alignSelf: "center",
        marginVertical: 30,
        borderRadius: 20,
        padding: 15,
    },
    log_out: {
        fontSize: 30,
        color: "#f00",
        marginLeft: 25,
        alignSelf: "flex-start",
        marginBottom: 25
    }
})


export default Home_Screen;