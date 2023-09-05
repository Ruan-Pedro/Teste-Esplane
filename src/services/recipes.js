import axios from "axios";
const apiKey = process.env.REACT_APP_SPOONACULAR;
const API_URL = `https://api.spoonacular.com`;

const api = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getRecipeById = async (id) => {
  const response = await api.get(`/recipes/${id}/information?apiKey=${apiKey}`)
  return response.data;
}

export const getRecipesByName = async (name) => {
  const response = await api.get(`/recipes/complexSearch?apiKey=${apiKey}&query=${name}`)
  return response.data;
  
}

