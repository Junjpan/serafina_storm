"use client";
import { useEffect } from "react";
import { Metadata } from "next";
import axios from "axios";
import "./page.scss";

export default function Home() {
  useEffect(() => {
    axios({ method: "get", url: "/api" }).then((res) => {
      console.log(res);
    });
  }, []);
  return <main className="main">Serafina storm sims</main>;
}

// I can use next_app_text_version13 as a referemce/
