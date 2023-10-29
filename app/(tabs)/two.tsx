import { FlatList, StyleSheet, useColorScheme } from 'react-native';
import {useQuery} from "@tanstack/react-query"
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useSearchStore } from '../../store/Searchstore';
import { useRouter } from 'expo-router';

const api="https://www.themealdb.com/api/json/v1/1/filter.php?a=indian"


export default function TabTwoScreen() {
  const {searchText,setSearchText}=useSearchStore()

  const router=useRouter()
  const getData=async()=>{
    const res = await fetch(api);
    
    return res?.json()
    
}
const {data,isLoading}=useQuery({queryKey:['getData'],queryFn:getData})

const getSearchData=async()=>{
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`);
  
  return res?.json()
  
}
const {data:searchData,isLoading:searching}=useQuery({queryKey:['getSearchData',searchText],queryFn:getSearchData})

const colorScheme=useColorScheme()







const renderItem=({item}:any)=>(

    <Text onPress={()=>{
      router.push(`/fooditem/${item?.idMeal}`)
    }} style={{
      color:colorScheme=="dark"?'#fff':'#000',
      marginTop:4
    }}>
      {item?.strMeal}
    </Text>
 
)
  return (
    <View style={{
      flex:1,
      paddingLeft:12
      
    }} >

     

    
          {Boolean(!searchText) &&<FlatList keyExtractor={item => item?.idMeal}   data={data?.meals}  ItemSeparatorComponent={() => <View style={{width:20}} />}  renderItem={renderItem}    showsVerticalScrollIndicator={false} />}
          

           {Boolean(searchText) && <FlatList  keyExtractor={item => item?.idMeal} data={searchData?.meals}ItemSeparatorComponent={() => <View style={{width:20}} />}  renderItem={renderItem}    showsVerticalScrollIndicator={false}/>}

       
    </View>
  );
}


