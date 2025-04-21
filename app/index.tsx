import { View, Text, FlatList } from 'react-native'
import React from 'react'
import products from '../assets/products.json'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button, ButtonText } from "@/components/ui/button";
const HomeSCreen = () => {
  return (
    <SafeAreaView>
    <FlatList
      data={products}
      renderItem={({item}) => <Text>{item.name}</Text>}
      />

<Text className='text-red-500'>testing</Text>
	
<Button size="sm" variant="solid" action="positive">
      <ButtonText>Hello World!</ButtonText>
    </Button>

      </SafeAreaView>

  )
} 

export default HomeSCreen