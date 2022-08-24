import *as React from 'react'
import {
    SafeAreaView,
    useColorScheme,
    Text,
    StyleSheet,
    View,
    Image,
    ImageBackground,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Modal,
    TouchableHighlight,
    ActivityIndicator,
    DrawerLayoutAndroid,
    Dimensions,
    RefreshControl,
    Keyboard,
    Platform,
    LogBox,
    FlatList,
    ScrollView,
    Animated
} from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';
import FontAwesomeIcons5 from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const { width, height } = Dimensions.get('window');
import Slide, { SLIDE_HIEGHT } from './Slide'




{/*const slide = [
    { Title: "Relaxed", subtitle: "", description: "", color: "#BEFAF5" },
    { Title: "Playful", subtitle: "", description: "", color: "#BEECC4" },
    { Title: "Excentric", subtitle: "", description: "", color: "#FFE4D9" },
    { Title: "Funky", subtitle: "", description: "", color: "#FFDDDD" },
]*/}

const Onboardring = () => {

    return (
        <View style={styles.Container}>
            <View style={[styles.slider]}>
                <ScrollView
                    horizontal
                    snapToInterval={width}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    decelerationRate="fast">
                    <Slide label={"Relaxed"} />
                    <Slide label={"Playful"} right />
                    <Slide label={"Excentric"} />
                    <Slide label={"Funky"} right />
                </ScrollView>
            </View>
            <View style={styles.footer}>
                <View style={{
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: "cyan"
                }} />
                <View style={{
                    flex: 1,
                    backgroundColor: "white",
                    borderTopLeftRadius: 75
                }}>

                </View>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,

    },
    slider: {
        height: SLIDE_HIEGHT,
        backgroundColor: "cyan",
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1
    },
})

export default Onboardring;
