import * as Antd from "antd";

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

export async function getComponentNames() {
  return [...Object.keys(Antd)];
}
