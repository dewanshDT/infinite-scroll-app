import React from "react";

const ContentBlock = ({ item, index, lastElementRef, length }) => {
  if (index + 1 === length)
    return (
      <div className="image" key={index} ref={lastElementRef}>
        <h4>{item.alt_description}</h4>
        <img src={item.urls.small} />
      </div>
    );
  else
    return (
      <div className="image" key={index}>
        <h4>{item.alt_description}</h4>
        <img src={item.urls.small} />
      </div>
    );
};

export default ContentBlock;
