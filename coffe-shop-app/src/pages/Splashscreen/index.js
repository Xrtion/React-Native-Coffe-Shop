import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackgroundSS, SplashS } from '../../assets/image'

const Splashscreen = ({navigation}) => {
  return (
    <View style={{ flex: 1}}>
      <ImageBackground source={BackgroundSS} style={{ flex: 1 }}>
        <View style={{ marginTop: 120}}>
          <Image source={SplashS}/>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 24, fontWeight: '500', color:'white', paddingHorizontal: 100, textAlign: "center" }}>
            Coffee so good,your taste buds will love it
          </Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 14, color:'white', textAlign: "center", paddingHorizontal: 90}}>
            The best grain, the finest roas, the most powerful flavor.          
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor:"#00512C", alignItems: "center", paddingHorizontal: 30, paddingVertical: 15, borderRadius: 30, marginHorizontal: 60, marginTop: 30 }} onPress={() => navigation.navigate('MainApp')}>
          <Text style={{ fontSize: 16, fontWeight:"600", color:'white' }}>
            Get Started
          </Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({})