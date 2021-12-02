import { useLocation, useHistory } from "react-router-dom";
export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  // 画面遷移は多くの場合、historyを使用する
  const onClickBack = () => history.goBack();
  console.log(state);
  return (
    <div>
      <h1>Page1DetailAページです。</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
