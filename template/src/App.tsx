import "./App.css";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

import { UserList } from "@/components/user";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
      <Resource name="users2" list={UserList} />
 {/* template */}
    </Admin>
  );
}

export default App;
