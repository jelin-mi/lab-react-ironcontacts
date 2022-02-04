import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

let firstFive = contacts.slice(0, 5);

function App() {
  const [contacts, setContacts] = useState();

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <tr>
        <td>Picture</td>
        <td>Name</td>
        <td>Popularity</td>
      </tr>
      {firstFive.map((contact) => {
        return (
          <table key={contact.id} className="list">
          
            <tr >
              <td><img src={contact.pictureUrl} alt=""/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default App;
