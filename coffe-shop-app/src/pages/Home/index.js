import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PhotoCoffe, PhotoProfile } from '../../assets/image'
import { AddButton, Coffe, Coffe2, FavoriteOff, Filter, Location, Notification, Search } from '../../assets/icon'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

function Home() {
  return (
    <View style={{ flex: 1 }}>
      {/* Bagian atas */}
      <View style={{ flexDirection: 'row', marginTop: 30, marginHorizontal: 30, justifyContent: 'space-between',alignItems: 'center'}}>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={PhotoProfile}/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={Location}/>
          <Text style={{ fontWeight: '500', fontSize: 12, marginLeft: 5 }}>Jakarta, Indonesia</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Image source={Notification}/>
        </TouchableOpacity>
      </View>
      {/* Teks */}
      <View style={{ marginHorizontal: 30, marginTop: 15 }}>
        <Text style={{ fontWeight:'500', fontSize:14 }}>
          Good Morning, Grace
        </Text>
      </View>
      {/* bagian search */}
      <View style={{ flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 30, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 30,justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={Search}/>
          <TextInput placeholder='Search Coffe' style={{marginLeft: 15}}/>
        </View>
        <View>
          <Image source={Filter}/>
        </View>
      </View>
      {/* bagian Category */}
      <View style={{ marginLeft: 30, marginTop: 30 }}>
        <Text style={{ marginBottom: 15 }}>
           Category
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: '#00582F', paddingVertical: 5, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 30, marginHorizontal: 10}}>
            <Image source={Coffe}/>
            <Text style={{ color: 'white', marginLeft: 5 }}>
              Cappucino
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 30, elevation: 1, shadowColor: 'black',marginHorizontal: 5 }}>
            <Image source={Coffe2}/>
            <Text style={{ color: '#00582F', marginLeft: 5 }}>
              Coffe
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 30, elevation: 1, shadowColor: 'black',marginHorizontal: 5 }}>
            <Image source={Coffe2}/>
            <Text style={{ color: '#00582F', marginLeft: 5 }}>
              Expresso
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center', borderRadius: 30, elevation: 1, shadowColor: 'black',marginHorizontal: 5 }}>
            <Image source={Coffe2}/>
            <Text style={{ color: '#00582F', marginLeft: 5 }}>
              Frapucino
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* Show Product */}
      <ScrollView>
        <Image source={PhotoCoffe} style={{width: 144, height: 105, borderRadius: 20}}/>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text>
              Cappucino
            </Text>
            <Text>
              With Sugar
            </Text>
            <View>
              <Image source={FavoriteOff}/>
            </View>
          </View>
          <View>
            <Text>
              Rp50.000 
            </Text>
            <Image source={AddButton}/>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
