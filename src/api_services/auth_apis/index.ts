import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "../../helper/axiosInstance";

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  nin: string;
}

export interface LoginFormData {
  email: string;
  password: string;
  type: string;
}

export interface OtpCodeData {
  code: string;
  email: string;
  type: string;
}

export interface registerDriverVehicleData {
  email: string;
  pin: string;
  vehicle_type: string;
}

interface ResendOtpData {
  code: string;
}

// REGISTER USER
export const registerUser = async (form: RegisterFormData) => {
  try {
    const requestPayload = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone_number: form.phoneNumber,
      user_role: "OWNER",
      password: form.password,
      nin: form.nin,
    };

    const res = await axiosInstance.post(
      "/shared/auth/register",
      requestPayload
    );
    return res.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

// VERIFY EMAIL
export const verifyEmail = async (otpCode: OtpCodeData) => {
  console.log(otpCode, "otpCode");
  try {
    const res = await axiosInstance.post(
      "/shared/auth/verify-account",
      otpCode
    );
    return res.data;
  } catch (error) {
    console.error("Error verifying email:", error);
    throw error;
  }
};

//  Driver Registration
export const registerDriverVehicle = async (
  data: registerDriverVehicleData
) => {
  // console.log(data, "dataVehicle");
  try {
    const res = await axiosInstance.post(
      "/shared/auth/update-driver-registration",
      data
    );
    return res.data;
  } catch (error) {
    console.error("Error register Driver Vehicle:", error);
    throw error;
  }
};

// LOGIN USER
export const loginUser = async (data: LoginFormData) => {
  try {
    const res = await axiosInstance.post("shared/auth/login", data);
    const result = res.data;
    AsyncStorage.setItem("token", result.data.token.token);

    return result;
  } catch (error) {
    console.error("Error login user:", error);
    throw error;
  }
};

// RESET ACCOUNT
export const resetPassword = async (data) => {
  // console.log(data, "888")
  try {
    const res = await axiosInstance.post("/shared/auth/reset-password", data);
    const result = res.data;
    return result;
  } catch (error) {
    console.error("Error login user:", error);
    throw error;
  }
};

// CHANGE PASSWORD
export const changePassword = async (data) => {
  // console.log(data, "888000")
  try {
    const res = await axiosInstance.post("/shared/auth/change-password", data);
    const result = res.data;
    return result;
  } catch (error) {
    console.error("Error login user:", error);
    throw error;
  }
};
