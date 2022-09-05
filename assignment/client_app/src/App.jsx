import React, { useEffect, useState } from "react";
import "./App.css";
import { mostFrequent, recursive, sortWords } from "./utils/helpers";
import AppLayout from "./components/Layout";
import User from "./pages/User";

function App() {
  useEffect(() => {
    var fruits = ["apple", "pie", "apple", "red", "red", "red"];
    const words = [
      "aaaasd",
      "a",
      "aab",
      "aaabcd",
      "ef",
      "cssssssd",
      "fdz",
      "kf",
      "zc",
      "lklklklklklklklkl",
      "l",
    ];
    // const res = mostFrequent(fruits);

    // const wordRes = sortWords(words);

    // console.log("recursive :>> ", recursive(9));
  }, []);

  return (
    <div className="App">
      <AppLayout>
        <main style={{ minHeight: "80vh" }}>
          <User />
        </main>
      </AppLayout>
    </div>
  );
}

export default App;
