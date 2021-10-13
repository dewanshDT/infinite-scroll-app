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

  if (currentItem)
    return (
      <div>
        hello bois, here's your id {id}
        <img src={currentItem.urls.regular} />
        <BackBtn func={back} />
      </div>
    );
  else history.push("/");
};

export default Image;
