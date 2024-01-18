import { View, Text } from 'react-native'
import React from 'react'
import VehicleSeeOrderComp from '../../../../components/mainComp/VehiclesComp/VehicleSeeOrderComp'
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const VehicleSeeOrderScreen = () => {
  const navigation = useNavigation();
  const SeeOrderheetRef = React.useRef(null);
  const height = 775;

  const closeSeeOrderSheet = () => {
    if (SeeOrderheetRef.current) {
      SeeOrderheetRef.current.close();
    }
  };
  const openSeeOrderSheet = () => {
    if (SeeOrderheetRef.current) {
      SeeOrderheetRef.current.open();
    }
  };
   const VehiclesData = [
     {
       name: "Toyota RAV- Yamaha",
       image: require("../../../../../assets/images/car1.png"),
       model: "KR-SRUDBA",
       features: [
         {
           title: " 6 seats",
         },
         {
           title: " Sienna",
         },
         {
           title: " ford",
         },
       ],
     },
     {
       name: "Toyota RAV- Yamaha",
       image: require("../../../../../assets/images/car1.png"),
       model: "KR-SRUDBA",
       features: [
         {
           title: " 4 seats",
         },
         {
           title: " Sienna",
         },
         {
           title: " ford",
         },
       ],
     },
     {
       name: "Toyota RAV- Yamaha",
       image: require("../../../../../assets/images/car1.png"),
       model: "KR-SRUDBA",
       features: [
         {
           title: "  8 seats",
         },
         {
           title: " Sienna",
         },
         {
           title: " ford",
         },
       ],
     },
     {
       name: "Toyota RAV- Yamaha",
       image: require("../../../../../assets/images/car1.png"),
       model: "KR-SRUDBA",
       features: [
         {
           title: " 6 seats",
         },
         {
           title: " Sienna",
         },
         {
           title: " ford",
         },
       ],
     },
   ];

   const pickUpAndDestination = [
     {
       icon: <Octicons name="dot-fill" size={12} color="#009B5A" />,
       venue: "Festac Access Rd Lagos, LA, Nigeria",
       time: "Tue, Mar 28 2023 | 11:01:00",
     },
     {
       icon: <Octicons name="dot-fill" size={12} color="red" />,
       venue: "Festac Access Rd Lagos, LA, Nigeria",
       time: "Tue, Mar 28 2023 | 11:01:00",
     },
   ];
    const tripInformation = [
      {
        icon: <Octicons name="dot-fill" size={12} color="#009B5A" />,
        venue: "Asset Assigned",
        time: "Tue, Mar 28 2023 | 11:01:00",
      },
      {
        icon: <Octicons name="dot-fill" size={12} color="red" />,
        venue: "Asset On route to Pick up",
        time: "Tue, Mar 28 2023 | 11:01:00",
      },
      {
        icon: <Octicons name="dot-fill" size={12} color="red" />,
        venue: "Goods Pick up",
        time: "Tue, Mar 28 2023 | 11:01:00",
      },
    ];
  return (
    <VehicleSeeOrderComp
      VehiclesData={VehiclesData}
      openSeeOrderSheet={openSeeOrderSheet}
      height={height}
      SeeOrderheetRef={SeeOrderheetRef}
      closeSeeOrderSheet={closeSeeOrderSheet}
      pickUpAndDestination={pickUpAndDestination}
      tripInformation={tripInformation}
    />
  );
}

export default VehicleSeeOrderScreen