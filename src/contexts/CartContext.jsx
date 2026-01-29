import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const CartContext = createContext(); 

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useLocalStorage('s11d1', []);

  const addItem = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
 
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}