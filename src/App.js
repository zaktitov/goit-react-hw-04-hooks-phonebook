import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import contactsData from "./json/contactsData.json";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";

export default function App(props) {
  const [contacts, setContacts] = useState(props.contacts);
  const [filter, setFilter] = useState(props.filter);

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
    parsedContacts && setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) =>
    contacts.some((contact) => name === contact.name)
      ? alert(`${name} is already in contacts`)
      : setContacts((prevState) => [
          ...prevState,
          { id: nanoid(5), name, number },
        ]);

  const deleteContact = (contactId) =>
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );

  const findContactsByName = (event) => setFilter(event.currentTarget.value);

  const filterContactList = () =>
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <main className={s.App}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />

      <h2 className={s.contactsTitle}>Contacts</h2>
      <Filter contactName={filter} onFindContact={findContactsByName} />
      <Contacts
        contacts={filterContactList()}
        onDeleteContact={deleteContact}
      />
    </main>
  );
}

App.defaultProps = {
  contacts: contactsData,
  filter: "",
};

// class App extends Component {
//   state = {
//     contacts: contactsData,
//     filter: "",
//   };

//   componentDidMount() {
//     const phoneBook = localStorage.getItem("contacts");
//     const parsedPhonebook = JSON.parse(phoneBook);

//     if (parsedPhonebook) {
//       this.setState({ contacts: parsedPhonebook });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const { contacts } = this.state;

//     contacts.some((contact) => name === contact.name)
//       ? alert(`${name} is already in contacts`)
//       : this.setState(({ contacts }) => ({
//           contacts: [...contacts, { name, number, id: shortid() }],
//         }));
//   };

//   changeFilter = (e) => {
//     this.setState({ filter: e.target.value });
//   };

//   getFiltredElem = () => {
//     const filterToLowerCase = this.state.filter.toLowerCase();

//     return this.state.contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filterToLowerCase)
//     );
//   };

//   deleteContact = (contactId) => {
//     this.setState((prevState) => ({
//       contacts: prevState.contacts.filter(
//         (contact) => contact.id !== contactId
//       ),
//     }));
//   };

//   render() {
//     return (
//       <div className={s.App}>
//         <h1>PhoonebooK</h1>
//         <ContactForm submit={this.addContact} />
//         <h2 className={s.contactsTitle}>Contacts 📞</h2>
//         <Filter filter={this.state.filter} onChangeFilter={this.changeFilter} />
//         <Contacts
//           contacts={this.getFiltredElem()}
//           deleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }

// export default App;
