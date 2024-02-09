import axiosInstance from "../../helper/axiosInstance";

export interface createtransactionData {
  pin: string;
}

//  Create Wallet
export const createPin = async (data: createtransactionData) => {
  console.log(data, "dataTransaction");
  try {
    const res = await axiosInstance.post("/user/create-pin", data);
    return res.data;
  } catch (error) {
    console.error("Error Create Transaction :", error);
    throw error;
  }
};
