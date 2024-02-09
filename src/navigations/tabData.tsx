
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
} from "../helper/CustomIcon/Icons";

export const tabData = [
  {
    name: "HomeStackNavigation",
    label: "Home",
    type: { active: "HomeActiveIcon", inactive: "HomeIcon" },
    icon: { active: <HomeActiveIcon />, inactive: <HomeIcon /> },
  },
  {
    name: "VehicleStackNavigation",
    label: "Applications",
    type: { active: "VehicleActiveIcon", inactive: "VehicleIcon" },
    icon: { active: <VehicleActiveIcon />, inactive: <VehicleIcon /> },
  },
  {
    name: "StoreStackNavigation",
    label: "Trips",
    type: { active: "StoreActiveIcon", inactive: "StoreIcon" },
    icon: { active: <StoreActiveIcon />, inactive: <StoreIcon /> },
  },
  {
    name: "BillsStackNavigation",
    label: "Bill",
    type: { active: "BillSActiveIcon", inactive: "BillsIcon" },
    icon: { active: <BillSActiveIcon />, inactive: <BillsIcon /> },
  },
  {
    name: "TransactionsStackNav",
    label: "Transactions",
    type: { active: "TransactionsActiveIcon", inactive: "TransactionsIcon" },
    icon: {
      active: <TransactionsActiveIcon />,
      inactive: <TransactionsIcon />,
    },
  },
];