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

  export const generateMeal = async (calories) => {
    try {
      const { data } = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=1639eb1cb45247cc978dc79cf7194167&targetCalories=${calories}&timeFrame=week`);
      console.log(data);
  
      if (data) {
        return data;
      }
  
    } catch (err) {
      throw err;
    }
  };
//   GET https://api.spoonacular.com/mealplanner/generate?timeFrame=day