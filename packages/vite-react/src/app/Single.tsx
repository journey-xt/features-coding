import React, { useRef } from "react";

class SingleClass {
  static instance: SingleClass | undefined;

  name: string;

  constructor(name = "单例模式") {
    this.name = name;

    throw new Error("该类只能重getInstance方法调用");
  }

  static getInstance() {
    if (SingleClass.instance) {
      return SingleClass.instance;
    }

    SingleClass.instance = new SingleClass();

    return SingleClass.instance;
  }

  getvalue() {
    return this.name;
  }
}

const Single = () => {
  const instanceRef = useRef(SingleClass.getInstance());

  const instance1Ref = useRef(SingleClass.getInstance());

  console.log(instanceRef.current.getvalue());

  console.log(instance1Ref.current.getvalue());

  console.log(instanceRef.current === instance1Ref.current);

  return (
    <div>
      111111111111
      <div>{instanceRef.current === instance1Ref.current}</div>
    </div>
  );
};

export default Single;
