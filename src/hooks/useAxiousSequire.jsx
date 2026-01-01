import axios from "axios";
import React from "react";

const axiousSequire = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiousSequire = () => {
  return axiousSequire;
};

export default useAxiousSequire;
