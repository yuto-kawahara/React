import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
// memoを使用することでpropsが変更されない限り再レンダリングを行わない宣言
// 基本的にはmemo化した方が他のコンポーネントの影響を受けないのでおすすめ
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  const data = [...Array(2000).keys()];

  data.forEach(() => {
    console.log("...");
  });
  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネントです</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
