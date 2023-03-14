import React, { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

type BlogsProviderProps = {
  children: ReactNode;
};

type BlogsContext = {
  blogItems: BlogItem[];
  addBlog: (id: number) => void;
  removeFromBlog: (id: number) => void;
};
type BlogItem = {
  id: number;
};

const BlogsContext = createContext({} as BlogsContext);

export function useBlogsContext() {
  return useContext(BlogsContext);
}

export function BlogsProvider({ children }: BlogsProviderProps) {
  const [blogItems, setBlogItems] = useLocalStorage<BlogItem[]>("shopping-cart",[]);

  function addBlog(id: number) {
    setBlogItems([])
    setBlogItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, {id}];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromBlog(id: number) {
    setBlogItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <BlogsContext.Provider value={{ blogItems, addBlog, removeFromBlog }}>
      {children}
    </BlogsContext.Provider>
  );
}
