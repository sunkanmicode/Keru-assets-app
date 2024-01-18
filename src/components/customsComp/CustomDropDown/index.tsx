import { View, Text } from "react-native";
import React from "react";
import {
  SelectList,
  MultipleSelectList,
} from "react-native-dropdown-select-list";

type DropDownProp = {
  data: object[];
  setSelected: (val: string) => void;
};

const CustomDropdown = ({ data, setSelected }: DropDownProp) => {
  return (
    <SelectList
      setSelected={(val: string) => setSelected(val)}
      //   onSelect={}
      data={data}
      //   boxStyles={{ backgroundColor: "#E8E8E8" }}
    />
  );
};

export default CustomDropdown;
