import React from 'react';

const Hel = (props) => {
  document.title = props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Hel;
