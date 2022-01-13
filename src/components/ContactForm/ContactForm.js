// import { Component } from "react/cjs/react.production.min";
// import shortid from "shortid";
import s from "./ContactForm.module.css";
import PropTypes from "prop-types";
import FORM_CONFIG from "../../json/formConfig.json";
import { useState } from "react";

export default function Phonebook({ onAddContact }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    name === "name" && setName(value);
    name === "number" && setNumber(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onAddContact({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <ul className={s.list}>
        {FORM_CONFIG.map(({ type, name, pattern, title }) => (
          <li key={name} className={s.Item}>
            <label className={s.labelName}>
              {name}
              <input
                className={s.input}
                type={type}
                name={name}
                pattern={pattern}
                title={title}
                value={name[name]}
                onChange={handleChange}
                required
              />
            </label>
          </li>
        ))}
      </ul>

      <button type="submit" className={s.btnSubmit}>
        add contact
      </button>
    </form>
  );
}

FORM_CONFIG.PropTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Phonebook.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

// export default class ContactForm {
//   state = {
//     name: "",
//     number: "",
//   };

//   nameId = shortid.generate();
//   numberId = shortid.generate();

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     const { submit } = this.props;
//     alert("Contact has been saved:" + this.state.name);
//     e.preventDefault();

//     submit(this.state);

//     this.reset();
//   };

//   reset = () => {
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <form className={s.form} onSubmit={this.handleSubmit}>
//         <label className={s.labelName} htmlFor={this.nameId}>
//           Name
//         </label>
//         <input
//           className={s.input}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={this.state.name}
//           onChange={this.handleChange}
//           id={this.nameId}
//         />

//         <label className={s.labelNumber} htmlFor={this.numberId}>
//           Number
//         </label>
//         <input
//           className={s.input}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={this.state.number}
//           onChange={this.handleChange}
//           id={this.numberId}
//         />

//         <button type="submit" className={s.btnSubmit}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// ContactForm.propTypes = {
//   submit: PropTypes.func,
// };
