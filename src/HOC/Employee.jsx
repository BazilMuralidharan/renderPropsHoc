import React from "react";

import StudEmpHoc from "./StudEmplHocLoggic";

const Employee = ({ state, changeHandler, submitHandler, nibba }) => {
  return (
    <div>
      <h4>NAME : {nibba}</h4>
      <input type={"text"} value={state} onChange={changeHandler} name="name" />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};
export default StudEmpHoc(Employee);
