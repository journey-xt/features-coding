import React, { useRef } from "react";

class SingleClass {
  // static 为静态属性  只有 原型上可以使用
  static instance: SingleClass | undefined;

  constructor() {
    if (!SingleClass.instance) {
      SingleClass.instance = this;
    }

    return SingleClass.instance;
  }

  // static 为静态方法  只有 原型上可以使用
  static getInstance() {
    if (SingleClass.instance) {
      return SingleClass.instance;
    }

    SingleClass.instance = new SingleClass();

    return SingleClass.instance;
  }
}

const Single = () => {
  const instanceRef = useRef(SingleClass.getInstance());

  const instance1Ref = useRef(SingleClass.getInstance());

  console.log(instanceRef.current === instance1Ref.current);

  return (
    <div>
      111111111111
      <div>{instanceRef.current === instance1Ref.current}</div>
    </div>
  );
};

export default Single;
