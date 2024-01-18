export type TypeSlider = {
  id: string;
  img: string;
  logo: string | null;
  text: string;
  title: string | null;
};

export const sliderdata: TypeSlider[] = [
  {
    id: "1",
    logo: require("../../../../../assets/images/keru_logo.png"),
    title: null,
    text: "A marketplace that links the very best of the logistic industry’s Vehicles and equipment, experience, and people, all to serve the transportation needs in Nigeria.",
    img: require("../../../../../assets/images/splash_one.png"),
  },
  {
    id: "2",
    title: null,
    logo: require("../../../../../assets/images/keru_logo.png"),
    text: "Your one stop shop for moving goods",
    img: require("../../../../../assets/images/splash_two.png"),
  },
  // {
  //   id: "3",
  //   logo: null,
  //   title: "Welcome to Keru",
  //   text: "A marketplace that links the very best of the logistic industry’s Vehicles and equipment, experience, and people, all to serve the transportation needs in Nigeria.",
  //   img: require("../../../../../assets/images/splash_three.png"),
  // },
];
