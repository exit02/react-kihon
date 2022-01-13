import React from "react";

// ファイル名の拡張子は.js または、.jsxとする。
// .jsxはReact専用の拡張子となる。
// また、ファイル名はApp, SsampleFile等、_を使わないファイル名とする。
// パスカルケースと言うらしい。。。

// 関数を使って画面の要素のコンポーネントを表現する。
// 関数の中にhtmlを記載する方法をJSX技法と言うらしい。。。
const App = () => {
  // ボタンイベントの関数
  // <button>内のイベント名はキャメルケースの書き方をする。onClick 途中に大文字が入る。
  const onClickButton = () => alert();
  // オブジェクトを定義できる
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    // returnするhtmlは１つのタグで返却しなくてはいけない。
    // また、タグを記載する場合divタグを使用すると返却先のhtmlに反映されてしまうため、
    // 不要なdivタグを反映させない方法として、React.fragmentを使用する。
    // または、React.fragmentの代わりに空のタグ<>を記載するとこで同じ動作をする。
    //
    // スタイルの変更は、styleとタグ内に書き、1つ目の{}はjavascriptで書きます宣言で、
    // ２つ目の{}はオブジェクトを指定する宣言となる。
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>おげんきですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他のファイルから参照されるよの宣言
export default App;
