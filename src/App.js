import { Component } from "react/cjs/react.production.min";
import s from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import contactsData from "./json/contactsData.json";
import shortid from "shortid";
import Filter from "./components/Filter/Filter";
import Contacts from "./components/Contacts/Contacts";

class App extends Component {
  state = {
    contacts: contactsData,
    filter: "",
  };

  componentDidMount() {
    const phoneBook = localStorage.getItem("contacts");
    const parsedPhonebook = JSON.parse(phoneBook);

    if (parsedPhonebook) {
      this.setState({ contacts: parsedPhonebook });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    contacts.some((contact) => name === contact.name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, { name, number, id: shortid() }],
        }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFiltredElem = () => {
    const filterToLowerCase = this.state.filter.toLowerCase();

    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    return (
      <div className={s.App}>
        <h1>PhoonebooK</h1>
        <ContactForm submit={this.addContact} />
        <h2 className={s.contactsTitle}>Contacts 📞</h2>
        <Filter filter={this.state.filter} onChangeFilter={this.changeFilter} />
        <Contacts
          contacts={this.getFiltredElem()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
