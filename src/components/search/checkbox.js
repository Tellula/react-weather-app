import React from "react";

const Checkbox = ({ onChange }) => {
  return (
    <div className="checkbox">
      Include small cities
      <input type="checkbox" onChange={onChange}></input>
    </div>
  );
};

export default Checkbox;
