/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    NativeModules,
    TouchableOpacity
} from 'react-native';

export default class IOS_ReactNative_communication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'First Example'
        }
        console.log("NativeModules", NativeModules);
    }

    buttonClick = () => {
        NativeModules.GetData.replaceString(this.state.text, (text) => {
            this.setState({text});
        });
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>{this.state.text}</Text>
              <TouchableOpacity>
                <View style={styles.button}>
                    <Text style={styles.buttonText}
                          onPress={() => { this.buttonClick()}}>Change Text.</Text>
                </View>
              </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#ff8000',
        borderRadius: 4,
        padding:10
    },
    buttonText : {
        color : '#fff',
        textAlign:'center',
        fontWeight: 'bold'
    },
});


AppRegistry.registerComponent('IOS_ReactNative_communication', () => IOS_ReactNative_communication);


