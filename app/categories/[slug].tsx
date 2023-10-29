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

    

const colorScheme=useColorScheme()
    const getCategoriesdata=async()=>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${slug}`);
        
        return res?.json()
        
      }
      const {data,isLoading:searching}=useQuery({queryKey:['getCategoriesdata',slug],queryFn:getCategoriesdata})

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
          <TouchableOpacity activeOpacity={1} accessibilityIgnoresInvertColors style={styles.Backtitle} onPress={()=>router.back()}>
              <Ionicons name="chevron-back" size={24} color={colorScheme==="dark"?'#fff':'#000'} />
             
          </TouchableOpacity>
        </View>
      },

      headerTitle:`${slug}`
       
        

    }}
    />
    <FlatList ItemSeparatorComponent={()=><View style={{
        width:16
    }}></View>} data={data?.meals} renderItem={renderItem} showsVerticalScrollIndicator={false} ListEmptyComponent={Nodata} ListFooterComponent={footercomp} />
       
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