import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


const Icons = ({label, focus}) => {
  switch(label) {
    case 'Home' :
      return focus ? <Ionicons name="home" size={24} color="#00512C" /> : <Ionicons name="home-outline" size={24} color="#00512C" />
    case 'Favorite' :
      return focus ? <MaterialIcons name="favorite" size={24} color="#00512C" /> : <MaterialIcons name="favorite-border" size={24} color="#00512C" />
    case 'Cart' :
      return focus ? <Ionicons name="cart" size={24} color="#00512C" /> : <Ionicons name="cart-outline" size={24} color="#00512C" />
    case 'Profile' :
      return focus ? <Ionicons name="people" size={24} color="#00512C" /> : <Ionicons name="people-outline" size={24} color="#00512C" /> 
  }
}



const ButtonTabs = ({ state, descriptors, navigation }) => {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={{ flexDirection: 'row', backgroundColor:"white", paddingVertical: 15, paddingHorizontal: 50, justifyContent: 'space-between'}}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icons label={label} focus={isFocused}/>
          </PlatformPressable>
        );
      })}
    </View>
  )
}

export default ButtonTabs

const styles = StyleSheet.create({})