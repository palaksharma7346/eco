
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchApiProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, fetchApiProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData =()=>useContext(DataContext)