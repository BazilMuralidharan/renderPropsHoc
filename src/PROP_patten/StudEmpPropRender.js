import React, { useState } from "react";

const StudEmpPropsPattern = ({ render: Component, ...rest }) => {
  const [state, setState] = useState("");
  const changeHandler = (e) => setState(e.target.value);
  const submitHandler = () => console.log("propsPattern", state);

  return Component(state, changeHandler, submitHandler, rest);
};
export default StudEmpPropsPattern;
