import React, { useRef, useCallback } from "react";
import useStore from "../store";
import BackBtn from "./BackBtn";
import ContentBlock from "./ContentBlock";

const Content = () => {
  const json = useStore((state) => state.rawJSON);
  const setPageNumber = useStore((state) => state.setPageNumber);
  const loading = useStore((state) => state.loading);
  const contentList = useRef();

  // observer --->
  const observer = useRef();
  const lastElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prvPgNo) => prvPgNo + 1);
      }
    });
    if (node) observer.current.observe(node);
  });

  const scrollUp = () => {
    contentList.current.scroll(0, 0);
  };

  return (
    <>
      <h1>Infinite Scroll</h1>
      <div className="content-box">
        <BackBtn func={scrollUp} />
        <div className="content-list" ref={contentList}>
          {json.map((item, index) => {
            return (
              <ContentBlock
                item={item}
                key={index}
                index={index}
                length={json.length}
                lastElementRef={lastElementRef}
              />
            );
          })}
        </div>
      </div>
      <h4>
        Infinite scroll example, by Dewansh. Images loaded via unsplash api
      </h4>
    </>
  );
};

export default Content;
