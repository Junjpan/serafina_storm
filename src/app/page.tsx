"use client";
import { useEffect, useContext } from "react";
import { Metadata } from "next";
import { themeContext } from "./context/themeContext";
import axios from "axios";
import "./page.scss";

export default function Home() {
  const { theme, setTheme } = useContext(themeContext);
  useEffect(() => {
    axios({ method: "get", url: "/api" }).then((res) => {
      console.log(res);
    });
  }, []);

  console.log(theme);

  return (
    <main className="main">
      <button onClick={() => setTheme && setTheme("dark")}>Change Theme</button>
    </main>
  );
}

// I can use next_app_text_version13 repo setup as a referemce/
