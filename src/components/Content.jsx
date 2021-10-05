import axios from "axios";
import React, { useEffect, useRef, useState, useCallback } from "react";
import useStore from "../store";
import BackBtn from "./BackBtn";
import ContentBlock from "./ContentBlock";

const Content = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const json = useStore((state) => state.rawJSON);
  const setJSON = useStore((state) => state.setJSON);
  const contentList = useRef();

  // observer --->
  const observer = useRef();
  const lastElementRef = useCallback(node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
          if(entries[0].isIntersecting) {
              setPageNumber(prvPgNo => prvPgNo + 1);
          }
      });
      if(node) observer.current.observe(node);
  });

  useEffect(async () => {
    setLoading(true)
    try {
      // I directly gave the client id and secrete here, but I would be making a production version of this app I would most probably use environment variables to store them.
      const res = await axios.get(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=office&client_id=MrsptAEkuNtiOj9sakWFD9PmsE7roU5qo4Zub6CQgSk&client_secret=F19zKmUGoRQy1QY-FfEodfvh6jKPORIaDZLM7GHL_Nw`);
      console.log(res.data);
      if (json) setJSON([...json, ...res.data.results]);
      else setJSON(res.data.results);
      console.log("images loaded 📷");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [pageNumber]);

  const scrollUp = () => {
    contentList.current.scroll(0, 0);
  }

  return (
    <div className="content-box">
      <BackBtn scrollUp={scrollUp} />
      <div className="content-list" ref={contentList}>
        {json.map((item, index) => {
            return <ContentBlock item={item} key={index} index={index} length={json.length} lastElementRef={lastElementRef} />
        })}
      </div>
    </div>
  );
};

export default Content;
