import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { WatchT } from "../types";

interface CartItemT {
  item: WatchT;
  quantity: number;
}
[];

export interface ShoppingCartContextT<T> {
  items: CartItemT[];
  total: number;
  addItem: (watch: WatchT) => void;
  removeItem: (watch: WatchT) => void;
  totalItems: number;
  clear: () => void;
}

export const ShoppingCartContext = createContext<ShoppingCartContextT<WatchT>>({
  items: [],
  total: 0,
  /* eslint-disable @typescript-eslint/no-empty-function */
  addItem: () => {},
  clear: () => {},
  removeItem: () => {},
  /* eslint-enable @typescript-eslint/no-empty-function */
  totalItems: 0,
});

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<CartItemT[]>(() => {
    const shoppingCart = localStorage.getItem("shopping-cart");
    return shoppingCart
      ? (JSON.parse(shoppingCart) as unknown as CartItemT[])
      : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(items));
  }, [items]);

  const addItem = (watch: WatchT) => {
    const existingItem = items.find((item) => item.item.id === watch.id);

    if (existingItem) {
      const updatedItems = items.map((item) =>
        item.item.id === watch.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, { item: watch, quantity: 1 }]);
    }
  };

  const removeItem = (watch: WatchT) => {
    const existingItem = items.find((item) => item.item.id === watch.id);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        const updatedItems = items.filter((item) => item.item.id !== watch.id);
        setItems(updatedItems);
      } else {
        const updatedItems = items.map((item) =>
          item.item.id === watch.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        setItems(updatedItems);
      }
    }
  };

  const totalItems = useMemo(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const total = useMemo(() => {
    return items.reduce(
      (total, item) => total + item.quantity * item.item.price,
      0
    );
  }, [items]);

  const clear = () => setItems([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        items: items,
        addItem: addItem,
        removeItem: removeItem,
        totalItems: totalItems,
        total: total,
        clear: clear,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
