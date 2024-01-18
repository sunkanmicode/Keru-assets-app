import { View, Text, Image } from "react-native";
import React from "react";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { Ionicons } from "@expo/vector-icons";

export const FleetDetails = () => {
  const detailsData = [
    {
      name: "Name",
      Desc: "Softamos Joseph",
    },
    {
      name: "Assigned Vehicle",
      Desc: "Toyata RAV 4",
    },
    {
      name: "Phone Number",
      Desc: "090808656788",
    },
    {
      name: "Email Address",
      Desc: "softamons@gmail.com",
    },
    {
      name: "Age",
      Desc: "23",
    },
    {
      name: "Location",
      Desc: "Lagos",
    },
    {
      name: "Status",
      Desc: "Ford",
    },
  ];
  return (
    <>
      {detailsData.map((d, index) => (
        <>
          <View className="flex-row justify-between" key={index}>
            <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
              {d.name}
            </Text>
            {d.name === "Asset Code" ? (
              <Text className="w-[85px] text-[10px] rounded-full text-[#7065A0] p-[8]  bg-[#F2EFFE] font-[500] font-[Archivo] leading-[10px]">
                {d.Desc}
              </Text>
            ) : (
              <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                {d.Desc}
              </Text>
            )}
          </View>
          <View className="h-0.5 bg-[#F1F0F0]  my-4" />
        </>
      ))}
    </>
  );
};
export const CapacityInformation = () => {
  const capacityInfo = [
    {
      name: "Means of Identification",
      aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
      preview: "preview",
    },
    {
      name: "Driver’s License",
      aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
      preview: "preview",
    },
    // {
    //   name: "Vehicle Registration Number",
    //   aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
    //   preview: "preview",
    // },
    // {
    //   name: "Certificate of Ownership",
    //   aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
    //   preview: "Upload",
    // },
    // {
    //   name: "Certificate of Roadworthiness",
    //   aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
    //   preview: "preview",
    // },
    // {
    //   name: "Insurance Policy Number",
    //   aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
    //   preview: "preview",
    // },
    // {
    //   name: "Hackney Permit",
    //   aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
    //   preview: "preview",
    // },
  ];
  return (
    <>
      {capacityInfo.map((d, index) => (
        <>
          <View className="flex-row justify-between items-center" key={index}>
            <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
              {d.name}
            </Text>
            {d.aprovedIcon}
            <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
              {d.preview}
            </Text>
          </View>
          <View className="h-0.5 bg-[#F1F0F0]  my-4" />
        </>
      ))}
    </>
  );
};

export const Review = () => {
  const [rating, setRating] = React.useState(0);
  const reviewData = [
    {
      image: require("../../../../../../../assets/images/person1.png"),
      name: "AdeKunle John",
      date: "16th June 2023",
      ratings: (
        <StarRatingDisplay
          starSize={15}
          rating={rating}
          color="#BAAFE9"
          // onChange={setRating}
          starStyle={{ width: 5 }}
        />
      ),
      text: "heeeleeel",
    },
    {
      image: require("../../../../../../../assets/images/person1.png"),
      name: "AdeKunle Salmen",
      date: "16th June 2023",
      ratings: (
        <StarRatingDisplay
          starSize={15}
          rating={rating}
          color="#BAAFE9"
          // onChange={setRating}
          starStyle={{ width: 5 }}
        />
      ),
      text: "heeeleeel",
    },
  ];

  return (
    <>
      {reviewData.map((item, index) => (
        <View
          className="h-[100] bg-[#F9F9F9] py-3 px-4 rounded-lg my-2"
          key={index}
        >
          <View className=" flex-row justify-between">
            <View className=" flex-row justify-between items-center">
              <View className=" w-[40px] h-[40px] bg-[#BAAFE9] rounded-full ">
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
              <View className="mx-3">
                <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] my-1">
                  {item.name}
                </Text>
                <Text className="text-[10px] font-[500] font-[Archivo] leading-[10px]">
                  {item.date}
                </Text>
              </View>
            </View>
            <View>{item.ratings}</View>
          </View>
          <Text className="mx-5 my-2 text-[10px] font-[500] font-[Archivo] leading-[10px]">
            {item.text}
          </Text>
        </View>
      ))}
    </>
  );
};
