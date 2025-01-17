import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PhotoCoffe, PhotoProfile } from '../../assets/image'
import { AddButton, Coffe, Coffe2, FavoriteOff, FavoriteOn, Filter, Location, Notification, Search } from '../../assets/icon'
import { ScrollView, TextInput } from 'react-native-gesture-handler'

function Home() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {/* Bagian atas */}
        <View style={{ flexDirection: 'row', marginTop: 40, marginHorizontal: 20, justifyContent: 'space-between',alignItems: 'center'}}>
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
        <View style={{ marginHorizontal: 10, marginTop: 15 }}>
          <Text style={{ fontWeight:'500', fontSize:14 }}>
            Good Morning, Grace
          </Text>
        </View>
        {/* bagian search */}
        <View style={{ flexDirection: 'row', backgroundColor: 'white', marginHorizontal: 10, paddingHorizontal: 20, paddingVertical: 5, borderRadius: 30,justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={Search}/>
            <TextInput placeholder='Search Coffe' style={{marginLeft: 15}}/>
          </View>
          <View>
            <Image source={Filter}/>
          </View>
        </View>
        {/* bagian Category */}
        <View style={{ marginLeft: 10, marginTop: 30 }}>
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
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5, elevation: 10, shadowColor: 'black', marginHorizontal: 5 }}>
              <Image source={PhotoCoffe} style={{width: 144, height: 105, borderRadius: 20}}/>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontSize: 14,  fontWeight: '500' }}>
                    Cappucino
                  </Text>
                  <Text style={{ fontSize: 14,  marginTop: 5 }}>
                    With Sugar
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Image source={FavoriteOff}/>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>
                  Rp50.000 
                </Text>
                <Image source={AddButton}/>
              </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5, elevation: 10, shadowColor: 'black', marginHorizontal: 5 }}>
              <Image source={PhotoCoffe} style={{width: 144, height: 105, borderRadius: 20}}/>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontSize: 14,  fontWeight: '500' }}>
                    Cappucino
                  </Text>
                  <Text style={{ fontSize: 14,  marginTop: 5 }}>
                    With Sugar
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Image source={FavoriteOff}/>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>
                  Rp50.000 
                </Text>
                <Image source={AddButton}/>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5, elevation: 10, shadowColor: 'black', marginHorizontal: 5 }}>
              <Image source={PhotoCoffe} style={{width: 144, height: 105, borderRadius: 20}}/>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ marginTop: 10 }}>
                  <Text style={{ fontSize: 14,  fontWeight: '500' }}>
                    Cappucino
                  </Text>
                  <Text style={{ fontSize: 14,  marginTop: 5 }}>
                    With Sugar
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Image source={FavoriteOff}/>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text>
                  Rp50.000 
                </Text>
                <Image source={AddButton}/>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* Special Offer */}
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <Text style={{ fontWeight: '500', marginBottom: 10}}>
            Special Offer
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5, elevation: 10, shadowColor: 'black', marginHorizontal: 10 }}>
                <Image source={PhotoCoffe} style={{width: 144, height: 105, borderRadius: 20}}/>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 14,  fontWeight: '500' }}>
                      Cappucino
                    </Text>
                    <Text style={{ fontSize: 14,  marginTop: 5 }}>
                      With Sugar
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Image source={FavoriteOff}/>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text>
                    Rp50.000 
                  </Text>
                  <Image source={AddButton}/>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5, elevation: 10, shadowColor: 'black', marginHorizontal: 5 }}>
                <Image source={PhotoCoffe} style={{width: 144, height: 105, borderRadius: 20}}/>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 14,  fontWeight: '500' }}>
                      Cappucino
                    </Text>
                    <Text style={{ fontSize: 14,  marginTop: 5 }}>
                      With Sugar
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Image source={FavoriteOn}/>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text>
                    Rp50.000 
                  </Text>
                  <Image source={AddButton}/>
                </View>
              </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginLeft: 10, marginTop: 20 }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5, elevation: 10, shadowColor: 'black', marginHorizontal: 10 }}>
                <Image source={PhotoCoffe} style={{width: 144, height: 105, borderRadius: 20}}/>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 14,  fontWeight: '500' }}>
                      Cappucino
                    </Text>
                    <Text style={{ fontSize: 14,  marginTop: 5 }}>
                      With Sugar
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Image source={FavoriteOff}/>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text>
                    Rp50.000 
                  </Text>
                  <Image source={AddButton}/>
                </View>
              </TouchableOpacity>

              <TouchableOpacity activeOpacity={0.7} style={{ backgroundColor: 'white', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 5, elevation: 10, shadowColor: 'black', marginHorizontal: 5 }}>
                <Image source={PhotoCoffe} style={{width: 144, height: 105, borderRadius: 20}}/>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ fontSize: 14,  fontWeight: '500' }}>
                      Cappucino
                    </Text>
                    <Text style={{ fontSize: 14,  marginTop: 5 }}>
                      With Sugar
                    </Text>
                  </View>
                  <View style={{ marginTop: 10 }}>
                    <Image source={FavoriteOn}/>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text>
                    Rp50.000 
                  </Text>
                  <Image source={AddButton}/>
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home
