import React from "react";

// コンポーネントの引数はpropsとする。
const ColorfulMessage = (props) => {
  // 分割代入で引数を取ることで、引数の記載を短くできる。！！
  const { color, children } = props;
  const contentStyle = {
    // javascriptでは、オブジェクトの名称が引数を同じ場合は、color:を省略できる。
    color,
    fontSize: "18px"
  };

  // html構文内のjavascriptを記入する場合は{}でくくる。
  // また、propsの引数にしなくてもchildrenを指定することで、
  // メッセージを表示することができる。
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
