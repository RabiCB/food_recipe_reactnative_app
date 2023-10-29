import { View, Text, FlatList, useColorScheme, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router'
import { Stack } from 'expo-router'
import { useQuery } from '@tanstack/react-query'
import Itemcard from '../../components/Itemcard'
import Searchcard from '../../components/Search/Searchcard'
import Notfound from '../../components/Search/Notfound'
import { useSearchStore } from '../../store/Searchstore'
import Skeletonsearch from '../../components/Search/Skeleton'
import { Entypo, Ionicons } from '@expo/vector-icons'

const Page = () => {
    const {slug}=useSearchParams()

    

    const {searchText,setSearchText}=useSearchStore()
const colorScheme=useColorScheme()
    const getSearchData=async()=>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
        
        return res?.json()
        
      }
      const {data:searchData,isLoading:searching}=useQuery({queryKey:['getSearchData2',searchText],queryFn:getSearchData})

      const renderItem=({item}:any)=>(

        <Searchcard id={item?.idMeal} name={item?.strMeal}  image={item?.strMealThumb} ing1={item?.strIngredient1} ing2={item?.strIngredient2} key={item?.strMeal}/>
      )

      const Nodata=()=>(
        <>
       {!searching && <Notfound/>}
       </>
      )
      const footercomp=(
        <>
        {searching && <View style={{
            overflowY:"hidden"
        }}>
            <Skeletonsearch/>
            <Skeletonsearch/>
            <Skeletonsearch/>
        </View>
        }
        </>
      )
      

      const router=useRouter()

   

      const handleSearch=()=>{

        router.push(`/search/${searchText}`)
       
      
      }
       
  return (
    <View style={{
        flex:1,
        paddingHorizontal:8,
        paddingBottom:10

    }}>
    <Stack.Screen

    
    options={{
      headerLeft:()=>{
        return <View style={{
          marginLeft:8,
        
        }}>
          <TouchableOpacity activeOpacity={1} accessibilityIgnoresInvertColors style={styles.Backtitle} onPress={()=>router.push('/two')}>
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
       
       
        
        maxWidth:340,
            borderRadius:4,
            padding:6,
            

         }}  >
           <TextInput style={{
              
          color:colorScheme==="dark"?'#fff':'#000',
          outline:'nones'
           }}
          
        returnKeyType='search' placeholder='search for recipe..' value={searchText} onChangeText={(text)=>setSearchText(text)}
            onSubmitEditing={
            handleSearch
           } />
           {searchText &&<Entypo name="cross" onPress={()=>{
            setSearchText('')
            router.push('/two')
           }} style={{
            
            position:'absolute',
            right:4,
            alignSelf:'center',
            color:colorScheme==="dark"?'#fff':'#000',

           }}   size={24}/>}
          </View>
        },

    }}
    />
    <FlatList ItemSeparatorComponent={()=><View style={{
        width:16
    }}></View>} data={searchData?.meals} renderItem={renderItem} showsVerticalScrollIndicator={false} ListEmptyComponent={Nodata} ListFooterComponent={footercomp} />
       
    </View>
  )
}

export default Page

const styles=StyleSheet.create({
  input:{

    borderWidth:1,
    borderColor:'red',
minWidth:260,


maxWidth:340,
    borderRadius:4,
    padding:4,
    
  },
  Backtitle:{
    flexDirection:'row',
    alignItems:'center',
    gap:4
    

}
})