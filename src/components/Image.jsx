import React from "react";
import { useHistory, useParams } from "react-router";
import BackBtn from "./BackBtn";
import useStore from "../store";

const Image = () => {
  const { id } = useParams();
  const currentItem = useStore((state) => state.currentItem);
  const history = useHistory();

  const back = () => {
    history.push("/");
  };

  return (
    <div className="image-container">
      <BackBtn func={back} />
      hello bois, here's your id {id}
      <img src={currentItem.urls ? currentItem.urls.regular : ""} />
    </div>
  );
};

export default Image;
