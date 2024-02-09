
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";

/*
  1. Create the config
*/
export const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      className=" bg-green-300 border-l-green-800"
      //   style={{ borderLeftColor: "pink",backgroundColor:"green" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "black",
      }}
      text2Style={{
        fontSize: 10,
        fontWeight: "700",
        color: "black",
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      className=" bg-red-300 border-l-red-800"
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "black",
      }}
      text2Style={{
        fontSize: 10,
        fontWeight: "700",
        color: "black",
      }}
    
    />
  ),
 
};
