import { View, Text } from 'react-native'
import React from 'react'
import VehiclesComp from '../../../components/mainComp/VehiclesComp'

export type FleetsCategoriesType = {
  name: string;
  onPress: () => void;
}[];

const VehiclesScreen = () => {
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);
   const fleetSheetRef = React.useRef(null);
   const driverSheetRef = React.useRef(null);


   const FleetHeight = 775;
   const driverHeight = 775;


   const fleetCloseSheet = () => {
     if (fleetSheetRef.current) {
       fleetSheetRef.current.close();
     }
   };
   const fleetOpenSheet = () => {
     if (fleetSheetRef.current) {
       fleetSheetRef.current.open();
     }
   };
    const driverCloseSheet = () => {
      if (driverSheetRef.current) {
        driverSheetRef.current.close();
      }
    };
    const driverOpenSheet = () => {
      if (driverSheetRef.current) {
        driverSheetRef.current.open();
      }
    };

   const fleetsCategories: FleetsCategoriesType = [
     {
       name: "All Fleets",
       onPress: () => {},
     },
     {
       name: "Drivers",
       onPress: () => {},
     },
   ];


  const VehiclesData = [
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),

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
      image: require("../../../../assets/images/car1.png"),

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
      image: require("../../../../assets/images/car1.png"),

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
      image: require("../../../../assets/images/car1.png"),

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
      image: require("../../../../assets/images/car1.png"),

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
      image: require("../../../../assets/images/car1.png"),

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
      image: require("../../../../assets/images/car1.png"),

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
      image: require("../../../../assets/images/car1.png"),

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


  return (
    <VehiclesComp
      VehiclesData={VehiclesData}
      setCategoriesIndex={setCategoriesIndex}
      categoriesIndex={categoriesIndex}
      fleetsCategories={fleetsCategories}
      FleetHeight={FleetHeight}
      fleetSheetRef={fleetSheetRef}
      fleetCloseSheet={fleetCloseSheet}
      fleetOpenSheet={fleetOpenSheet}
      driverSheetRef={driverSheetRef}
      driverHeight={driverHeight}
      driverCloseSheet={driverCloseSheet}
      driverOpenSheet={driverOpenSheet}
    />
  );
}

export default VehiclesScreen