import { useParams, useLocation } from "react-router-dom";

// URLパラメータではuseParamsを使用することで、
// 上位階層から渡されたパラメータを受け取ることができる
export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  console.log(query);

  return (
    <div>
      <h1>UrlParameterページです。</h1>
      <p>パラメータは {id} です</p>
      <p>クエリパラメータは {query.get("name")} です</p>
    </div>
  );
};
