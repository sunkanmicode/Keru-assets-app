import { View, Text, TouchableOpacity, Image } from "react-native";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const ReviewServiceComp = () => {
    const navigation =  useNavigation()
  const [rating, setRating] = React.useState(0);

  return (
    <View className="flex-1 p-10 bg-white ">
      <View className="mb-5 flex-row items-center justify-between">
        
        <View />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("VehiclesScreen");
          }}
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className=" mx-auto">
        <Text className="text-[18px] font-[600] font-[Archivo] leading-[20px] text-center">
          Rate our Service
        </Text>
        <View className="w-[210px] h-[105] my-11 self-center">
          <Image
            source={require("../../../../../assets/images/car1.png")}
            style={{
              width: "100%",
              height: "100%",
              //   borderRadius: 20,
            }}
          />
        </View>
        <Text className="text-[16px] font-[600] font-[Archivo] leading-[20px] text-center">
          Rate the asset used
        </Text>
        <View className="mt-5">
          <StarRating
            starSize={30}
            rating={rating}
            color="#000"
            onChange={setRating}
            starStyle={{ width: 50 }}
          />
        </View>

      
        <View className="w-[104px] h-[104px] my-11 self-center">
          <Image
            source={require("../../../../../assets/images/home-img.png")}
            style={{
              width: "100%",
              height: "100%",
                borderRadius: 100,
            }}
          />
        </View>
        <Text className="text-[16px] font-[600] font-[Archivo] leading-[20px] text-center">
          Rate the driver
        </Text>
        <View className="mt-5">
          <StarRating
            starSize={30}
            rating={rating}
            color="#000"
            onChange={setRating}
            starStyle={{ width: 50 }}
          />
        </View>
      </View>
    </View>
  );
}

export default ReviewServiceComp