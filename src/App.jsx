import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  return (
    <>
      {/* 外側の{}はjavascriptを書く時の宣言内側の{}はjavascriptのオブジェクトの宣言 */}
      <h1 style={contentStyle}>こんにちわ！</h1>
      <p>お元気ですか？</p>
      {/* ボタンにクリックイベントを設定する場合は、キャメルケースでonClick={javascriptが適用できる} */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
