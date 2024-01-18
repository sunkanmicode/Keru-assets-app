import { View, Text, Dimensions, Image, FlatList } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { sliderdata } from "./sliderdata";
import Footer from "./Footer";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  const ref = React.useRef<number | any>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    //  console.log(currentIndex, "currentIndex");
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != sliderdata.length) {
      const offset = nextSlideIndex * width;
      ref?.current?.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    } else {
      
      navigation.navigate("GetStartedScreen");

    }
  };

  return (
    <>
      <View className=" flex-1 bg-white p-7">
        <View className={` mt-[71px] w-[122px] h-[54px] self-center mb-3`}>
          <Image
            source={require("../../../../assets/images/keru_logo.png")}
            style={{
              width: "100%",
              height: "100%",
              // borderRadius: 100,
            }}
          />
        </View>
        <View className="">
          <FlatList
            ref={ref}
            horizontal
            pagingEnabled
            // contentContainerStyle={{ height: height * 0.75 }}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            showsHorizontalScrollIndicator={false}
            data={sliderdata}
            renderItem={({ item }) => (
              <View className="">
                <View className=" justify-center items-center">
                  {/* <View className={` w-[122px] h-[54px] mb-[15px]}`}>
                    <Image
                      source={item.logo}
                      style={{
                        width: "100%",
                        height: "100%",
                        // borderRadius: 100,
                      }}
                    />
                  </View> */}
                  <View className="w-[335px] h-[54px] ">
                    <Text className="text-center text-[13px] font-[400] font-[Archivo] leading-[18px]">
                      {item.text}
                    </Text>
                  </View>
                  <View>
                    <View className="w-[290px] h-[330px] shrink-0 self-center mt-5">
                      <Image
                        source={item.img}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: 20,
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
          <Footer
            currentSlideIndex={currentSlideIndex}
            goNextSlide={goNextSlide}
          />
        </View>
      </View>
    </>
  );
};

export default OnboardingScreen;
