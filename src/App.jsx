// useEffectの記述でeslintから警告が出ている場合、問題がなければ
// 以下のコメントの記載で警告をoffすることができる。
/* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// ファイル名の拡張子は.js または、.jsxとする。
// .jsxはReact専用の拡張子となる。
// また、ファイル名はApp, SsampleFile等、_を使わないファイル名とする。
// パスカルケースと言うらしい。。。

// 関数を使って画面の要素のコンポーネントを表現する。
// 関数の中にhtmlを記載する方法をJSX技法と言うらしい。。。
const App = () => {
  console.log("最初！！");
  // useStateの指定（状態変化の取得、設定？が行える）
  // 配列で変数と関数名を取得する。変数名、関数名は自分で決められる。
  // useStateの引数は初期値を指定する。
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // ボタンイベントの関数
  // <button>内のイベント名はキャメルケースの書き方をする。onClick 途中に大文字が入る。
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // numが更新されると再レンダリングが走り、顔文字が表示されない
  // 顔文字を表示させるにはnumの関心の分離を行いuseEfectを使用する。
  //
  // useEfectの第2引数に関数を指定すると最初のみが実行される。
  // （最初の１回のみの初期化処理などを行う場合に用いられる。）
  // また、第2引数の配列に変数を指定するとその変数が変化した時に処理を走らせる
  // ことができる。(num)
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    // returnするhtmlは１つのタグで返却しなくてはいけない。<>
    // また、タグを記載する場合divタグを使用すると返却先のhtmlに反映されてしまうため、
    // 不要なdivタグを反映させない方法として、React.fragmentを使用する。
    // または、React.fragmentの代わりに空のタグ<>を記載するとこで同じ動作をする。
    //
    // スタイルの変更は、styleとタグ内に書き、1つ目の{}はjavascriptで書きます宣言で、
    // ２つ目の{}はオブジェクトを指定する宣言となる。
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

// 他のファイルから参照されるよの宣言
export default App;
