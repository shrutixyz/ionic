import React from "react";
import { entries } from "../../../utils/data";
import { AblyPoweredInput } from "./AblyPoweredInput";


const FormComponent = ({space, self}) => {
  console.log(self);
  return (
    <>
      {space && self && entries.map((entry) => {
        return (
          <AblyPoweredInput
            key={entry.name}
            label={entry.label}
            name={entry.name}
            space = {space}
            self = {self}
          />
        );
      })}
    </>
  );
};

export default FormComponent;
