import axiosInstance from "../../helper/axiosInstance";

export interface createWalletData {
  bvn: string;
}

//  Create Wallet
export const createWallet = async (data: createWalletData) => {
  console.log(data, "walletData");
  try {
    const res = await axiosInstance.post(
      "/payment/generate-virtual-account",
      data
    );
    return res.data;
  } catch (error) {
    console.error("Error Create Wallet :", error);
    throw error;
  }
};
