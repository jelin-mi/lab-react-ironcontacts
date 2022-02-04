import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const [contactsList, setContacts] = useState(contacts.slice(0, 5));
  console.log(contactsList);
  // console.log(contacts);

  const addRandomContact = (id) => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)]; // contacts[random Index]

   /*  if (contactsList.includes(id !== contactsList.id) ) {
      console.log(randomContact.id);
      console.log(contactsList);
      console.log(contactsList.id);
      setContacts([randomContact, ...contactsList]);
    } */

    
    setContacts([randomContact, ...contactsList]);

    /* if (randomContact.id !== contactsList.id) {
      console.log(randomContact.id);
      console.log(contactsList);
      console.log(contactsList.id);
      setContacts([randomContact, ...contactsList]);
    } */

    /* const removeDuplicity = randomContact.id !== contactsList.id
    
    console.log(randomContact);


    const mergeLists = [randomContact, ...contactsList]
    const mergedListsWithoutDuplicatedItems = mergeLists.filter((item) => item.id !== id); */

    
    // console.log(mergeLists);
    
    /* setContacts([randomContact, ...contactsList]); */ // I want to change a state = add a 'randomContact' to my 'contactsList of 5 contacts'
    // const mergedListsWithoutDuplicatedItems = mergeLists.filter((item) => item.id !== id);
    // console.log(mergedListsWithoutDuplicatedItems);
    // setContacts(mergedListsWithoutDuplicatedItems);
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
