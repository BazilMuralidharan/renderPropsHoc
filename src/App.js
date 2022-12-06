import EmpHOC from "./HOC/Employee";
import Student from "./HOC/Student";
import EmployeePropsPatern from "./PROP_patten/EmpProp";
import StudEmpPropsPattern from "./PROP_patten/StudEmpPropRender";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <div className="HocPatter">
        <EmpHOC nibba={"EMP_HOC"} />
        <Student nibba={"STUD_HOC"} />
      </div> */}

      <div className="PropsRenderPattern">
        {/* StudEmpPropsPattern ----> patern Logic 
          EmployePropsPatern ----> JSx return using the logic 
      */}
        <StudEmpPropsPattern
          nibba={"I'm a Props pattern"}
          render={(state, changeHandler, submitHandler, rest) => (
            <EmployeePropsPatern
              state={state}
              changeHandler={changeHandler}
              submitHandler={submitHandler}
              {...rest}
            />
          )}
        />
      </div>
    </div>
  );
}
