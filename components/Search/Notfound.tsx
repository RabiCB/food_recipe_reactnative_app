import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import { useSearchStore } from '../../store/Searchstore'
import { memo } from 'react'
const Notfound = () => {
    const {searchText}=useSearchStore()

    const colorScheme=useColorScheme()
  return (
    <View style={{
        marginTop:6
    }}>
      <Text style={{
        color:colorScheme==="dark"?'#fff':'#000',
        fontSize:18,
        fontWeight:'400'

      }}>No result found for {searchText.toLowerCase()}</Text>
    </View>
  )
}

export default memo(Notfound)