import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";

type BottomType = {
  message: React.ReactNode;
  height: number;
  // ref: RBSheetProps;
};

const CustomBottomSheet = React.forwardRef(
  ({ message, height }: BottomType, ref) => {
    return (
      <RBSheet
        ref={ref}
        height={height}
        openDuration={250}
        closeOnDragDown
        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
          },
        }}
      >
        {message}
        {/* <TimelineBottomSheet /> */}
      </RBSheet>
    );
  }
);
export default CustomBottomSheet;
