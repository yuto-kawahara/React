import classes from "./CssModules.module.scss";
// CSSモジュールを使用した適用方法
// (モジュール名(任意)).module.scssを作成
// importし、CSSを適用させたいタグの中で
// className={(モジュール名(任意)).(セレクタ)}とすることで適用される
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.btn}>FIGHT</button>
    </div>
  );
};
