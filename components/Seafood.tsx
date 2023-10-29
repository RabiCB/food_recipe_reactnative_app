import { View, Text, FlatList, Image, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Itemcard from './Itemcard';
const api="https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
 function Seafood() {

   

    const [Foods,setFoods] = useState([]);


  useEffect(() => {
    axios.get(api).then((response) => {
      setFoods(response?.data?.meals);
    });
  }, []);

  const renderItem = ({ item }:any) => (

    <Itemcard id={item?.idMeal} imgsrc={item?.strMealThumb} mealname={item?.strMeal}/>
    
  );

  const colorScheme=useColorScheme()

  return (
    <View style={{
        marginTop:12,
        paddingHorizontal:8,
       
        paddingVertical:6
        
      }} >
  
        <Text style={{
          marginBottom:6,
          fontWeight:'600',
          fontSize:14,
          color:colorScheme==="dark"?'#fff':'#000'
        
        }}>Seafood</Text>
        
  
       
            <FlatList style={{
              backgroundColor:'none',
           
            }} data={Foods} ItemSeparatorComponent={() => <View style={{width:16}} />}  renderItem={renderItem}   horizontal={true} showsHorizontalScrollIndicator={false} />
            
              
  
         
      </View>
  )
}


export default Seafood