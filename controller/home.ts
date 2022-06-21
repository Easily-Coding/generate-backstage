export async function getData(){
  const res =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return res.json()
}