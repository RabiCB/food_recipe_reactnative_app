import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'expo-router'
import { Stack } from 'expo-router'
import axios from 'axios'
import Detailpage from '../../components/Detailpage/Detailpage'
import {useQuery} from "@tanstack/react-query"
import { useRouter } from 'expo-router'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
interface Itemtype{
    meals:{
        strMeal:string
        strArea?:string|null
        strCategory?:string|null
        strIngredient1?:string|null
        strIngredient2?:string|null
        strIngredient3?:string|null
        strIngredient4?:string|null
        strIngredient5?:string|null
        strIngredient6?:string|null
        strIngredient7?:string|null
        strIngredient8?:string|null
        strIngredient9?:string|null
        strIngredient10?:string|null
        strIngredient11?:string|null
        strIngredient12?:string|null
        strInstruction?:string|null

    }[]
}

interface Itemdeailtype{
  
        strMeal:string
        strArea?:string|null
        strCategory?:string|null
        strIngredient1?:string|null
        strIngredient2?:string|null
        strIngredient3?:string|null
        strIngredient4?:string|null
        strIngredient5?:string|null
        strIngredient6?:string|null
        strIngredient7?:string|null
        strIngredient8?:string|null
        strIngredient9?:string|null
        strIngredient10?:string|null
        strIngredient11?:string|null
        strIngredient12?:string|null
        strMealThumb?:string
        strInstructions?:string|null

    
}
const api="https://www.themealdb.com/api/json/v1/1/lookup.php?i="

const Page = () => {

    const {slug}=useSearchParams()

    

    const getDetail=async()=>{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`);
        
        return res?.json()
        
    }
    const {data,isLoading}=useQuery({queryKey:['getDetail',slug],queryFn:getDetail})



const router=useRouter()

const colorScheme=useColorScheme()

  return (
    <SafeAreaView style={{flex:1}}>
        <Stack.Screen options={{
            
           headerTitle:'',
           headerShadowVisible:false,

           

        

            
            
           

           headerLeft:()=>{
            return <View style={styles.header}><TouchableOpacity activeOpacity={1} accessibilityIgnoresInvertColors style={styles.Backtitle} onPress={()=>router.back()}>
                <Ionicons name="chevron-back" size={24} color={colorScheme==="dark"?'#fff':'#000'} />
               
            </TouchableOpacity>
            {
                data?.meals?.map((d:Itemdeailtype,index:string)=>{
                    return<View style={styles.headeropt} key={index}>
                        
                        <Image source={{
                            uri:d?.strMealThumb
                        }} height={42} width={42} borderRadius={21}/>
                        <Text style={{
                            marginTop:4,
                            color:colorScheme==="dark"?'#fff':'#000'
                        }}>{d?.strMeal}</Text>


                    </View>
                })
            }
            </View>
           }
          

           
           


        }}

        
        />
       
         <ScrollView  showsVerticalScrollIndicator={false} >
            {
                data?.meals?.map((d:Itemdeailtype,index:string)=>{
                    return<Detailpage key={index} name={d?.strMeal} area={d?.strArea ??''} strInstruction={d?.strInstructions} category={d?.strCategory}  ing1={d?.strIngredient1} ing2={d?.strIngredient2} ing3={d?.strIngredient3} ing4={d?.strIngredient4} ing5={d?.strIngredient5} ing6={d?.strIngredient6} ing7={d?.strIngredient7} strMealthumb={d?.strMealThumb}  />
                })
            }

            {
                isLoading &&<View>
                    <Text>hhhh</Text>
                </View>
            } 
         </ScrollView>

    </SafeAreaView>
   
  )
}

export default Page


const styles=StyleSheet.create({
    header:{

        flexDirection:'row',
        gap:12,
        alignItems:'center'

    },
    headeropt:{
        flexDirection:'row',
        gap:6,
      

    },
    Backtitle:{
        flexDirection:'row',
        alignItems:'center',
        gap:4
        

    }
})