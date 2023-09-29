import enpoints from "./endpoints";
import axios from "axios";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(enpoints.products);
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
