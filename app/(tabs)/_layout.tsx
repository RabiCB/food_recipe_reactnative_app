import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, TextInput, View, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';
import { EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

import { useSearchStore } from '../../store/Searchstore';
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const router=useRouter()


const {searchText,setSearchText}=useSearchStore()



const handleSearch=()=>{

  router.push(`/search/${searchText}`)
 

}
  return (
    <>
    
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
     

      
      >
      <Tabs.Screen
        name="index"

        



        options={{
          title:'Home',
          tabBarIcon: ({ color }) => <FontAwesome name="home" color={color} size={24} />,
          headerTitle:'',
          headerLeft: () => (
          
            <View style={{
              paddingLeft:8,
              flexDirection:'row',

            }}> 
              <Pressable onPress={()=>{
                alert('hello')
              }}>
                {({ pressed }) => (

                  <View style={{
                    marginRight:4
                  }}>
                    <View>
                      <Text style={{
                        color:colorScheme==="dark"?'#fff':'#000',
                        fontWeight:'500',
                        fontSize:16
                      }}>Recipebins</Text>

                      </View>


                  </View>
                )}
              </Pressable>
              

            </View>
              
          ),
          headerRight:()=>(
            <View style={{
              paddingRight:8
            }} >
              <FontAwesome name="shopping-bag" color={colorScheme==="dark"?'#fff':'#000'} size={24}/>
            </View>
          ),
          headerShadowVisible:false
        }}
      />
      <Tabs.Screen
        name="two"
        
        options={{

          
        headerLeft:()=>{
          return <View style={{
            marginLeft:8,
          
          }}>
            <TouchableOpacity activeOpacity={1}  style={styles.Backtitle} onPress={()=>router.back()}>
                <Ionicons name="chevron-back" size={24} color={colorScheme==="dark"?'#fff':'#000'} />
               
            </TouchableOpacity>
          </View>
        },
          headerTitle: ()=>{
            return<View style={{
              borderWidth:1,
              borderColor:'gray',
          minWidth:260,
          position:'relative',
              borderRadius:4,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:"space-between",
              padding:Platform.OS=="android"?2:6,
              

           }}  >
            
             <TextInput style={{
                
            color:colorScheme==="dark"?'#fff':'#000',
            paddingLeft:6,
            outline:'none'
             }}
            
          returnKeyType='search' placeholder='search for recipes..' value={searchText} onChangeText={(text)=>setSearchText(text)}
              onSubmitEditing={
              handleSearch
             } />
             {searchText &&<Entypo name="cross" onPress={()=>{
              setSearchText('')
             }} style={{
              
            
         
              color:colorScheme==="dark"?'#fff':'#000',

             }}   size={18}/>}
             {
              !searchText &&(
                <EvilIcons name="search"  style={{
              
            
         
                  color:colorScheme==="dark"?'#fff':'#000',
    
                 }} size={24}/>
              )
               
              
            }
            </View>
          },
          
          tabBarIcon: ({ color }) => <FontAwesome name="search" size={24} color={color} />,
          title:'Search'
        }}
      />
    </Tabs>
    </>
  );
}


const styles=StyleSheet.create({
  
  Backtitle:{
    flexDirection:'row',
    alignItems:'center',
    gap:4
    

}
})
