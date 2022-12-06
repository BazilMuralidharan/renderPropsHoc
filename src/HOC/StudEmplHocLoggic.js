import React, { useState } from "react";

const StudEmpHoc = (OriginalComponent) => (props) => {
  const [state, setState] = useState("");
  const changeHandler = (e) => setState(e.target.value);
  const submitHandler = () => console.log("Hoc", state);
  return (
    <OriginalComponent
      state={state}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
      {...props}
    />
  );
};
export default StudEmpHoc;
