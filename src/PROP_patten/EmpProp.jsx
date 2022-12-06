import React from "react";

const EmployeePropsPatern = ({
  state,
  changeHandler,
  submitHandler,
  nibba
}) => {
  return (
    <div>
      <h4>NAME : {nibba}</h4>
      <input type={"text"} value={state} onChange={changeHandler} name="name" />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};
export default EmployeePropsPatern;
