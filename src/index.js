import React from "react";
import ReactDom from "react-dom";

// App関数を呼ぶための記述
import App from "./App";

// 画面にApp関数を反映する。
ReactDom.render(<App />, document.getElementById("root"));
