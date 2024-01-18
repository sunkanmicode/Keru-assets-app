import { View, Text } from 'react-native'
import React from 'react'
import StoreDetailsComp from '../../../../components/mainComp/StoreComp/StoreDetailsComp'
import { Entypo } from '@expo/vector-icons';

type DetailsType ={
  icon: React.ReactNode,
  title: string,
}[]


const DetailsScreen = () => {

  const detailsData:DetailsType = [
    {
      icon: <Entypo name="dot-single" size={24} color="black" />,
      title:"Model: T372",

    },
    {
      icon: <Entypo name="dot-single" size={24} color="black" />,
      title:"Triple SIM",
    },
    {
      icon: <Entypo name="dot-single" size={24} color="black" />,
      title:"2.4” Screen Display",
    },
    {
      icon: <Entypo name="dot-single" size={24} color="black" />,
      title:"Memory: 4MB Rom + 4MB RAM Expandable up to 64GB",
    },
    {
      icon: <Entypo name="dot-single" size={24} color="black" />,
      title:"Back camera with Flash",
    },
    {
      icon: <Entypo name="dot-single" size={24} color="black" />,
      title:"FM Loud Speaker",
    },
  ]

  





  return (
   
    <StoreDetailsComp detailsData={detailsData} />
  )
}

export default DetailsScreen;