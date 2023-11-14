/* eslint-disable react/no-unescaped-entities */
// @ts-nocheck
import "./App.css";
import BasicComponent from "./proptypes/BasicComponent";
import { AdvancedComponent } from "./proptypes/AdvancedComponent";
import { ComponentsWithChildren } from "./proptypes/ComponentsWithChildren";

const list = [
  { id: 1, name: "React" },
  { id: 2, name: "Vue" },
  { id: 3, name: "Angular" },
];

const App = () => {
  return (
    <>
      Proptypes
      <br />
      <br />
      <BasicComponent text={"Hello"} />
      <BasicComponent number={4} />
      <BasicComponent data={true} />
      <BasicComponent array={[1, 2, 3]} />
      <AdvancedComponent list={list} title={"Technologies: "} />
      <ComponentsWithChildren title={"Header"}>
        <p>I'm a paragraph</p>
      </ComponentsWithChildren>
    </>
  );
};

export default App;
