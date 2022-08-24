import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');


export const SLIDE_HIEGHT = height * 0.61;

//(paramter) بنضع فيها العناصر المهمه الى هنستخدمها كا(state)واجهه لتعريف العناصر مثل ال//




const Slide = ({ label, right }) => {
    const transform = [
        { translateY: (SLIDE_HIEGHT - 100) / 2 },
        { translateX: right ? (width / 2 - 50) : (-width / 2 + 50) },
        { rotate: right ? "-90deg" : "90deg" }
    ]
    return (
        <View style={styles.container}>
            <View style={[styles.TitleContainer, { transform }]}>
                <Text style={styles.Title}>{label}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width
    },
    TitleContainer: {
        justifyContent: "center",
        height: 100
    },
    Title: {
        fontSize: 80,
        lineHeight: 80,
        fontFamily: "SFProText-Bold",
        color: 'white',
        textAlign: "center"
    }
})

export default Slide;
