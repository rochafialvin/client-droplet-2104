import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://api.rochafi-bootcamp.my.id/users"
      );
      setUsers(response.data.data.result);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const renderUsers = () =>
    users.map((user) => (
      <li>
        {user.user_id}. {user.username}
      </li>
    ));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>List of candidate</p>
        <ul>{renderUsers()}</ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
