import {graphql,GraphQLSchema} from "graphql"

export async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return res.json();
}

export async function getWidgets() {
 
  return {
    a: 1,
  };
}
