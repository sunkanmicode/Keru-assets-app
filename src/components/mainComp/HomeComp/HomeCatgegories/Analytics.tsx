import { View, Text, ScrollView, Dimensions } from "react-native";
import React from 'react'
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit"
// const {screenWidth} = Dimensions.get("window");
const { width, height } = Dimensions.get("window");

const Analytics = () => {

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        data: [350, 500, 600, 900, 500],
        colors: [
          () => "#95A4FC",
          () => "#B1E3FF",
          () => "#1C1C1C",
          () => "#C6C7F8",
          () => "#BAEDBD",
        ],
      },
    ],
    // legend: ["Rainy Days"], // optional
  };

  const data2 = [
    {
      name: "Seoul",
      population: 21500000,
      color: "#95A4FC",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#B1E3FF",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    // {
    //   name: "Beijing",
    //   population: 527612,
    //   color: "red",
    //   legendFontColor: "#7F7F7F",
    //   legendFontSize: 15,
    // },
    {
      name: "New York",
      population: 8538000,
      color: "#1C1C1C",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "#C6C7F8",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];

const chartConfig = {
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0,
  color: () => "#1C1C1C",
  // color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  // strokeWidth: 2, // optional, default 3
  barPercentage: 0.6,
  // useShadowColorFromDataset: false, // optional
};



  return (
    <View className=" flex-1 bg-white p-5">
      <View className="self-center items-center">
        <Text className="text-[12px] font-[300] font-[Archivo] leading-[13px]">
          Total Vehicles
        </Text>
        <Text className="text-[16px] font-[600] font-[Archivo] leading-[17px] mt-2">
          400 VEHICLES
        </Text>
      </View>
      <ScrollView className="my-10">
        <Text className="text-[16px] font-[500] font-[Archivo] leading-[20px]">
          Sales/Month
        </Text>
        <View className={`my-10 w-${width}`}>
          <BarChart
            data={data}
            width={width}
            height={220}
            yAxisLabel=""
            chartConfig={chartConfig}
            // verticalLabelRotation={30}
            // style={{ borderBottomColor: "#1C1C1C",borderBottomWidth:1 }}
            withInnerLines={false}
            fromZero={true}
            showBarTops={false}
            withCustomBarColorFromData
            flatColor
          />
        </View>
        <View className=" pb-11 ">
          <Text className="text-[16px] font-[500] font-[Archivo] leading-[20px]">
            Trips by Region
          </Text>
          <PieChart
            data={data2}
            width={width}
            height={220}
            // hasLegend={false}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            paddingLeft={"15"}
            center={[50, 20]}
            absolute
          />
          {/* <View className=" flex-row justify-around ">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[10px]">
              Canada
            </Text>
            <Text>Canada</Text>
            <Text>Canada</Text>
            <Text>Canada</Text>
          </View> */}
        </View>
      </ScrollView>
    </View>
  );
}

export default Analytics