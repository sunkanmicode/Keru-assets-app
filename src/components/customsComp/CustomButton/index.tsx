import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

type ButtonType = {
  title: string;
  disabled?: boolean;
  loading?: boolean;
  primary?: boolean;
  danger?: boolean;
  whiteBg?: boolean;
  icon?: React.ReactNode;
  iconPostion?: string;
  onPress?: () => void;
  style?: any;
};
export const CustomButton = ({
  title,
  disabled,
  primary,
  danger,
  loading,
  whiteBg,
  onPress,
  icon,
  iconPostion,
  style,
}: ButtonType) => {
  const rowDirection = "flex-row justify-between items-center bg-red-400";
  const getFlexDirection = () => {
    if (!icon && !iconPostion) {
      return "flex-row";
    }
    if (icon && iconPostion) {
      if (iconPostion === "left") {
        return "flex-row";
      } else {
        if (iconPostion === "right") {
          return "flex-row-reverse";
        }
      }
    }
  };

  const getBgColor = () => {
    if (disabled) return "bg-slate-300";
    if (primary) return "bg-[#BAAFE9]";
    if (danger) return "bg-[#FD5042]";
    if (whiteBg) return "bg-white text-black";
  };

  const disabledTextBtn = disabled ? "text-black" : "text-white";
  return (
    <TouchableOpacity
      className={`px-2 h-12  border border-gray-300 rounded-full items-center justify-center  mt-1 py-3 ${getBgColor()}`}
      disabled={disabled}
      onPress={onPress}
      style={style}
    >
      <View className={` flex-row `}>
        {/* <View>{icon && icon}</View> */}
        {title && (
          <>
            <Text
              className={`${disabledTextBtn} font-[Archivo] font-[500] text-[14px] leading-[15px] ${getBgColor()}`}
            >
              {loading ? <ActivityIndicator /> : title}
            </Text>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};
