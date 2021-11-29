import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();
  return (
    <>
      {/* 外側の{}はjavascriptを書く時の宣言内側の{}はjavascriptのオブジェクトの宣言 */}
      <h1 style={{ color: "red" }}>こんにちわ！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      {/* ボタンにクリックイベントを設定する場合は、キャメルケースでonClick={javascriptが適用できる} */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
