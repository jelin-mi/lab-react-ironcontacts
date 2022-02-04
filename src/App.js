/* import { useState } from "react"; */
import "./App.css";
import contacts from "./contacts.json";

let firstFive = contacts.slice(0, 5);

function App() {
  /* const [contacts, setContacts] = useState(); */

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="titles">
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Popularity</h2>
        <h2>Won an Oscar</h2>
        <h2>Won an Emmy</h2>
      </div>
      {firstFive.map((contact) => {
        return (
          <table key={contact.id} className="list">
            <tr >
              <td><img src={contact.pictureUrl} alt=""/></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar === true && "🏆"}</td>
              <td>{contact.wonEmmy === true && "🏆"}</td>
            </tr>
          </table>
        );
      })}
    </div>
  );
}

export default App;
