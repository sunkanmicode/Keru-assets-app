import { View, Text } from 'react-native'
import React from 'react'
import VehicleDetailsComp from '../../../../components/mainComp/VehiclesComp/VehicleDetailsComp/Fleets'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Ionicons } from '@expo/vector-icons';

const VehicleDetailsScreen = () => {
  const [rating, setRating] = React.useState(0);
  const detailsData = [
    {
      name: "Seat Size",
      Desc: "6 Seat",
    },
    {
      name: "Seat Size",
      Desc: "6 Seat",
    },
    {
      name: "Asset Code",
      Desc: "KR-LLZKNE",
    },
    {
      name: "Asset Class (Seat)",
      Desc: "Sennia",
    },
    {
      name: "Condition",
      Desc: "Fit",
    },
    {
      name: "Drivers",
      Desc: "2",
    },
    {
      name: "Asset Maker",
      Desc: "Ford",
    },
  ];

  const capacityInfo = [
    {
      name: "Vehicle Registration Number",
      aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
      preview: "preview",
    },
    {
      name: "Certificate of Ownership",
      aprovedIcon:  <Ionicons name="ios-checkmark" size={24} color="#007443" />,
      preview: "Upload",
    },
    {
      name: "Certificate of Roadworthiness",
      aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
      preview: "preview",
    },
    {
      name: "Insurance Policy Number",
      aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
      preview: "preview",
    },
    {
      name: "Hackney Permit",
      aprovedIcon: <Ionicons name="ios-checkmark" size={24} color="#007443" />,
      preview: "preview",
    },
  ];

  const reviewData = [
    {
      image: require("../../../../../assets/images/person1.png"),
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
      image: require("../../../../../assets/images/person1.png"),
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
    <VehicleDetailsComp
      detailsData={detailsData}
      reviewData={reviewData}
      capacityInfo={capacityInfo}
    />
  );
}

export default VehicleDetailsScreen