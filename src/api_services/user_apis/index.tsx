import axiosInstance from "../../helper/axiosInstance";


//  USER INFO
export const getMeUser = async () => {
  try {
    const res = await axiosInstance.get("/user/me");
    const result = res.data;

    return result.data
  } catch (error) {
    console.error("Error Get me  user:", error);
    throw error;
  }
};

//  USER INFO DASHBOARD
export const getDashboard = async () => {
  try {
    const res = await axiosInstance.get("/user/owner-dashboard");
    const result = res.data;

    return result.data
  } catch (error) {
    console.error("Error dashboard:", error);
    throw error;
  }
};
