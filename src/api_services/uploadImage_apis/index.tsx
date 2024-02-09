import axiosInstance from "../../helper/axiosInstance";

export const uploadImageApi = async (data) => {
  console.log(data, "dataTransaction");
  try {
    const res = await axiosInstance.post("/shared/auth/upload-image", data, {
      headers: {
        "Content-Type": "multipart/form-data", // This is important for form data
      },
       transformRequest: () => {
          // Return the form data as it is
         
          return data;
        },
      
    });
    return res.data;
  } catch (error) {
    console.error("Error upload Image Transaction :", error);
    throw error;
  }
};

// Create a function to upload the form data
// export const uploadImageApi = async (formData) => {
//   console.log(formData, "formDataAPi")
//   try {
//     // Use the axios instance to send a POST request with the form data
//     const response = await axiosInstance.post(
//       "/shared/auth/upload-image",
//       formData,
//       {
//         transformRequest: (data) => {
//           // Return the form data as it is
//           return data;
//         },
//       }
//     );

//     // Check the status of the response
//     if (response.status === 200) {
//       // The upload was successful
//       console.log("File uploaded successfully");
//     } else {
//       // The upload failed
//       console.log("File upload failed");
//     }
//   } catch (error) {
//     // There was an error in the request
//     console.error("Error in file upload", error);
//   }
// };
