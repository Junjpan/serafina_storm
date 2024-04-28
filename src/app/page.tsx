"use client";
import { useEffect, useContext } from "react";
import { Metadata } from "next";
import { themeContext } from "./context/themeContext";
import { HomePage } from "./pages";
import axios from "axios";
import "./page.scss";
import { Theme } from "./context/type";

const Home = () => {
  const { theme, setTheme } = useContext(themeContext);
  useEffect(() => {
    axios({ method: "get", url: "/api" }).then((res) => {
      console.log(res);
    });
  }, []);

  /**
   * Add theme to html,
   */
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark-mode");
    } else {
      document.documentElement.classList.add("dark-mode");
    }
  }, [theme]);

  const changeTheme = (): void => {
    let currentTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme && setTheme(currentTheme);
  };

  return <HomePage />;
};

export default Home;

// I can use next_app_text_version13 repo setup as a referemce/
