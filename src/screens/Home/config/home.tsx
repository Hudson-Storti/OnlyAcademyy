import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, SafeAreaView, StyleSheet, Image, ScrollView, Animated, Text, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export default function App() {
    const [ScrollY, setScrollY] = useState(new Animated.Value(0));
    return (
        <SafeAreaView>
            <Animated.View
                style={[styles.header, {
                    height: ScrollY.interpolate({
                        inputRange: [10, 160, 185],
                        outputRange: [140, 20, 0],
                        extrapolate: 'clamp'
                    }),
                    opacity: ScrollY.interpolate({
                        inputRange: [1, 75, 170],
                        outputRange: [1, 1, 0],
                        extrapolate: 'clamp'
                    }),
                }]}>
                <TouchableOpacity>
                    <Image
                    source={require('./src/assets/cam.png')}
                    style={{ width: 30, height: 30 }}
                        resizeMode="contain"
                        
                    />
                </TouchableOpacity>
                <Animated.Image
                    source={require('./src/assets/logobranca.png')}
                    style={{
                        width: ScrollY.interpolate({
                            inputRange: [0, 120],
                            outputRange: [200, 120],
                            extrapolate: 'clamp'
                        }),
                        height: 90
                    }}
                    resizeMode="contain"
                />
                <Image
                    source={require('./src/assets/send.png')}
                    style={{ width: 30, height: 30 }}
                    resizeMode="contain"
                />
            </Animated.View>

            <ScrollView
                scrollEventThrottle={16}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: { y: ScrollY}
                    },
                }],
            { useNativeDriver: false })}
            >

                <View style={styles.box}></View>
                <Image
            source={require('./src/assets/img01.jpg')}
            style={{
              height: 300,
              width: 400,
              margin: 7,
              borderRadius: 5,
            }}
                    
                />
                <View style={styles.box}></View>
                <Image
            source={require('./src/assets/img02.jpg')}
            style={{
              height: 300,
              width: 400,
              margin: 7,
              borderRadius: 5,
            }}
                    
                />
                <View style={styles.box}></View>
                <Image
            source={require('./src/assets/img03.jpg')}
            style={{
              height: 300,
              width: 400,
              margin: 7,
              borderRadius: 5,
            }}
                    
                />
                <View style={styles.box}></View>
                <Image
            source={require('./src/assets/img04.jpg')}
            style={{
              height: 300,
              width: 400,
              margin: 7,
              borderRadius: 5,
            }}
                    
                />
                <View style={styles.box}></View>
                <Image
            source={require('./src/assets/img05.jpg')}
            style={{
              height: 300,
              width: 400,
              margin: 7,
              borderRadius: 5,
            }}
                    
                />
                <View style={styles.box}></View>
                <Image
            source={require('./src/assets/img06.jpg')}
            style={{
              height: 300,
              width: 400,
              margin: 7,
              borderRadius: 5,
            }}
                  
                />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#FFF'
    },
    box: {
        
    }
    
 });