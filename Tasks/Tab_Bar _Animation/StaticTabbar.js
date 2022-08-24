import * as React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Animated,
    Dimensions
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather'

const { width } = Dimensions.get("window");

class StaticTabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text> StaticTabbar </Text>
            </View>
        );
    }
}

export default StaticTabbar;
