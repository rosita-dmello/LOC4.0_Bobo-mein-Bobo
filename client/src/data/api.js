import axios from "axios";

const apiUrl = "https://mypersonalcoach.pythonanywhere.com/";

export const signupPost = async (formData) => {
  try {
    const {data} = await axios.post(apiUrl + "register/", formData);
    console.log(data);
    if (data) {
        return (data);
    }
   
    
  } catch (err) {
    throw err;
  }
};

export const loginPost = async (formData) => {
    try {
      const { data } = await axios.post(apiUrl + "login/", formData);
      console.log(data);
  
      if (data) {
        return data;
      }
  
    } catch (err) {
      throw err;
    }
  };