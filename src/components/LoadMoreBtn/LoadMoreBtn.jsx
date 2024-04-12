import css from "./LoadMoreBtn.module.css";

export const LoadMoreBtn = ({ onClick }) => (
    <div>
      <button className={css.button} onClick={onClick}>Load more</button>
    </div>
  );
  
  export default LoadMoreBtn;