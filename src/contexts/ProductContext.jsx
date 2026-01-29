import { createContext, useState } from "react";
import { data } from "../data"; // Data dosyanın yolundan emin ol

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products] = useState(data);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}