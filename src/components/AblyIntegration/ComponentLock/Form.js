import React from "react";
import { entries } from "../../../utils/data";
import { AblyPoweredInput } from "./AblyPoweredInput";


const FormComponent = ({space, self}) => {
  console.log(self);
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      width: "60v",
      position:"absolute",
      bottom: "10px",
      left: 0,
      right: 0
    }}>
      {space && self && entries.map((entry) => {
        return (
          <div></div>
          // <AblyPoweredInput
          //   key={entry.name}
          //   label={entry.label}
          //   name={entry.name}
          //   space = {space}
          //   self = {self}
          // />
        );
      })}
      <div></div>
    </div>
  );
};

export default FormComponent;
