import React from "react";
import { Link, useHistory } from "react-router-dom";
import useStore from "../store";

const ContentBlock = ({ item, index, lastElementRef, length }) => {
  const history = useHistory();
  const setCurrentItem = useStore(state => state.setCurrentItem);
  
  const onClick = (item) => {
    setCurrentItem(item);
    history.push(`/image/${item.id}`);
  }

  if (index + 1 === length)
    return (
        <div className="image" key={index} ref={lastElementRef} onClick={() => onClick(item)}>
          <h4>{item.alt_description}</h4>
          <img src={item.urls.small} />
        </div>
    );
  else
    return (
        <div className="image" key={index} onClick={() => onClick(item)}>
          <h4>{item.alt_description}</h4>
          <img src={item.urls.small} />
        </div>
    );
};

export default ContentBlock;
