import axiosClient from "./apiClient";


// get users data from jsonPlaceHolder 
export const getUsers = () => {
  return axiosClient.get("/users");
}


