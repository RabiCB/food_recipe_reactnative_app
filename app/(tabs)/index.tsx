import { FlatListComponent, Image, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import Card from '../../components/Card';
import { FlatList } from 'react-native';
import Catogories from '../../components/Catogories';
import { RefreshControl } from 'react-native-gesture-handler';
import { useQueryClient } from '@tanstack/react-query';
import Seafood from '../../components/Seafood';
import Allitem from '../../components/Allitem';
interface Iprops{
  strMeal:string
  strMealThumb:string

  idMeal:string
}







export default function TabOneScreen() {
  const [refreshing, setRefreshing] = useState(false);
const query=useQueryClient()
  const onRefresh =useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      query.invalidateQueries()
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false}  refreshControl={
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    }>
   <Card  />
   <Catogories/>
   <Allitem/>
   <Seafood/>

   </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
