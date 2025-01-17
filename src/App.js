import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  // Iteration 1 | Display 5 Contacts
  const [contactsList, setContacts] = useState(contacts.slice(0, 5));

  // Iteration 3 | Add New Random Contacts
  const addRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * (contacts.length - 1));
    const randomContact = contacts[randomIndex];
    const newContactList = [randomContact, ...contactsList];

    !contactsList.includes(randomContact)
      ? setContacts(newContactList)
      : addRandomContact();

    /*  if (!contactsList.includes(randomContact)) {
      setContacts(newContactList);
    } else {
      addRandomContact();
    } */
  };

  // Iteration 4 | Sort Contacts by Name and Popularity
  const sortByPopularity = () => {
    const popularitySorted = contactsList.sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts([...popularitySorted]);
  };

  const sortByName = () => {
    const nameSorted = contactsList.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts([...nameSorted]);
  };
 
// Iteration 5 | Remove Contacts
  const deleteContact = (contactId) => {
    const filteredContacts = contactsList.filter(contact => {
      return contact.id !== contactId;
    });
    setContacts([...filteredContacts]);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by popularity</button>
      <button onClick={sortByName}>Sort by name</button>
      </div>
      
      <table>
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
            <td>Won an Oscar</td>
            <td>Won an Emmy</td>
            <td>Actions</td>
          </tr>
        </thead>
        {contactsList.map((contact) => {
          return (
            <tbody key={contact.id}>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>

{/* Iteration 2 | Conditionally Display Awards Info */}
                <td className="won">{contact.wonOscar === true && "🏆"}</td>
                <td className="won">{contact.wonEmmy === true && "🏆"}</td>          
                <td><button className="btn-delete" onClick={() => deleteContact(contact.id)}>Delete</button></td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default App;