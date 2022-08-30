import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    Image,
    ScrollView
} from 'react-native'
import Home_Screen from '../../src/Steps_App/Home_step'


const Login_Screen = (navigation) => {
    const [userinput, setuserinput] = React.useState("")
    const [passinput, setpassinput] = React.useState("")
    const [GoToward, setGoToward] = React.useState(false)

    const appear_page = () => {
        setGoToward(true)
    }

    return (

        GoToward == false ? (
            <View style={styles.Container}>
                <ImageBackground
                    source={require('../../images/background.png')}
                    resizeMode="stretch"
                    style={styles.up_image}>
                    <ScrollView style={{ paddingVertical: 20 }}>
                        <Image
                            source={require('../../images/logo1.png')}
                            style={styles.low_image}
                        />
                        <Text style={styles.text}>Login to your account</Text>
                        <TextInput
                            style={styles.user_input}
                            value={userinput}
                            onChangeText={setuserinput}
                            placeholder="UserName"
                            placeholderTextColor={"#CCCCCC"}

                        />
                        <TextInput
                            style={styles.pass_input}
                            value={passinput}
                            onChangeText={setpassinput}
                            placeholder="Password"
                            placeholderTextColor={"#CCCCCC"}
                        />
                        <TouchableOpacity
                            style={styles.Login_Btn}
                            activeOpacity={0.8}
                            onPress={appear_page}
                        >
                            <Text style={styles.text_login}>Login</Text>
                        </TouchableOpacity>

                    </ScrollView>

                </ImageBackground>

            </View>
        ) : (
            <Home_Screen />
        )

    )
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        overflow: "hidden"
    },
    text: {
        fontSize: 25,
        textAlign: "center",
        color: "#000000",
        marginTop: 10,
    },
    text_login: {
        fontSize: 20,
        textAlign: "center",
        color: "#FFFFFF",
    },
    up_image: {
        flex: 1,
        paddingVertical: 50
    },
    low_image: {
        alignSelf: 'center',
        width: 150,
        height: 150,
    },
    user_input: {
        width: "85%",
        height: 50,
        backgroundColor: "#FFFFFF",
        borderColor: "#CCCCCC",
        borderRadius: 15,
        borderWidth: 2,
        alignSelf: "center",
        marginTop: 70,
        paddingHorizontal: 20,
        color: "#000000"
    },
    pass_input: {
        width: "85%",
        height: 50,
        backgroundColor: "#FFFFFF",
        borderColor: "#CCCCCC",
        borderRadius: 15,
        borderWidth: 2,
        alignSelf: "center",
        marginTop: 25,
        paddingHorizontal: 20,
        color: "#000000",
    },
    Login_Btn: {
        width: "40%",
        height: 50,
        backgroundColor: "#3cbf1c",
        alignSelf: "center",
        borderRadius: 10,
        // marginTop: 80,
        justifyContent: "center",
        marginVertical: 80
    }
})

export default Login_Screen;