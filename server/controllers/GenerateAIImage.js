import * as dotenv from "dotenv";
import { createError } from "../error.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

// Setup open ai api key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Controller to generate Image

export const generateImage = async (req, res, next) => {
  try {
    console.log("API Key:", process.env.OPENAI_API_KEY); // <--- ADD THIS LINE HERE
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // ... rest of your image generation code ...

 

  }  catch (error) {
    console.log("Error object:", error); // <--- ADD THIS LINE HERE
    console.error("OpenAI API Error:", error);
    if (error.response && error.response.data) {
      console.error("OpenAI API Error Response Data:", error.response.data);
    }
    next(
      createError(
        error.status,
        error?.response?.data?.error?.message || error?.message
      )
    );
  }}