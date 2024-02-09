// import React from "react";
// import {
//   HomeActiveIcon,
//   HomeIcon,
//   VehicleIcon,
//   VehicleActiveIcon,
//   StoreIcon,
//   StoreActiveIcon,
//   BillsIcon,
//   BillSActiveIcon,
//   TransactionsIcon,
//   TransactionsActiveIcon,
// } from "../Icons";

// const getIconFont = (type) => {
//   switch (type) {
//     case "HomeIcon":
//       return HomeIcon;
//     case "HomeActiveIcon":
//       return HomeActiveIcon;
//     case "VehicleIcon":
//       return VehicleIcon;
//     case "VehicleActiveIcon":
//       return VehicleActiveIcon;
//     case "StoreIcon":
//       return StoreIcon;
//     case "StoreActiveIcon":
//       return StoreActiveIcon;
//     case "BillsIcon":
//       return BillsIcon;
//     case "BillSActiveIcon":
//       return BillSActiveIcon;
//     case "TransactionsIcon":
//       return TransactionsIcon;
//     case "TransactionsActiveIcon":
//       return TransactionsActiveIcon;

//     default:
//       return HomeIcon;
//   }
// };
// const Icon2 = ({ type, ...props }) => {
//   const IconFont = getIconFont(type);
//   return <IconFont {...props} />;
// };
// export default Icon2;

import {
   HomeActiveIcon,
   HomeIcon,
   VehicleIcon,
   VehicleActiveIcon,
   StoreIcon,
   StoreActiveIcon,
   BillsIcon,
   BillSActiveIcon,
   TransactionsIcon,
  TransactionsActiveIcon,
} from "./Icons";
const iconComponents = {
  HomeActiveIcon,
  HomeIcon,
  VehicleIcon,
  VehicleActiveIcon,
  StoreIcon,
  StoreActiveIcon,
  BillsIcon,
  BillSActiveIcon,
  TransactionsIcon,
  TransactionsActiveIcon,
};

const TabIcon = ({ type, ...props }) => {
  const IconComponent = iconComponents[type] || HomeIcon;
  return <IconComponent {...props} />;
};

export default TabIcon;
