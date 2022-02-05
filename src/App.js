import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsList, setContacts] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 1));
    const randomContact = contacts[randomIndex];
    const newContactList = [randomContact, ...contactsList];

    if (!contactsList.includes(randomContact)) {
      setContacts(newContactList);
    } else {
      addRandomContact();
    }

    

    
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <div className="titles">
        <h2>Picture</h2>
        <h2>Name</h2>
        <h2>Popularity</h2>
        <h2>Won an Oscar</h2>
        <h2>Won an Emmy</h2>
      </div>
      {contactsList.map((contact) => {
        return (
          <table key={contact.id} className="list">
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar === true && "🏆"}</td>
                <td>{contact.wonEmmy === true && "🏆"}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
