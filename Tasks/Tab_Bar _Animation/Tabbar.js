import * as React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Animated,
    Dimensions
} from 'react-native';

import * as shape from "d3-shape";
import Svg from 'react-native-svg';

class Tabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text style={{ textAlign: "center", fontSize: 20 }}> Tabbar </Text>
            </View>
        );
    }
}

export default Tabbar;
