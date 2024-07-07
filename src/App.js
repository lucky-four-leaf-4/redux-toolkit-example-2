import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prePage } from "./feature/currentPageSlice";
import { fetchData } from "./feature/dataSlice";

import "./styles.css";

export default function App() {
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage.value);
  const dataStatus = useSelector((state) => state.data.status);
  const resourceData = useSelector((state) => state.data.data);
  const isEnableButton = useSelector((state) => {
    if (state.data.status === "succeeded") {
      return false;
    }
    return true;
  });

  useEffect(() => {
    dispatch(fetchData(currentPage));
  }, [currentPage, dispatch]);

  const onClickPre = () => {
    dispatch(prePage());
  };
  const onClickNext = () => {
    dispatch(nextPage());
  };
  return (
    <section className="App">
      <section>
        <p>id : {resourceData.id}</p>
        <p>userId : {resourceData.userId}</p>
        <p>title : {resourceData.title}</p>
        <p>body : {resourceData.body}</p>
      </section>
      <section>
        <button onClick={onClickPre} disabled={isEnableButton}>
          pre
        </button>
        <button onClick={onClickNext} disabled={isEnableButton}>
          next
        </button>
      </section>
    </section>
  );
}
