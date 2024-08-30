// import React from "react";
import "./Pill.css";


export const Pill = (props: any) => {
  const { item } = props
  return <div className="pill">{item}</div>;
};
