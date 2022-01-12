import { Component } from "react/cjs/react.production.min";
import s from "./Contact.form.module.css";
import shortid from "shortid";
import PropTypes from "prop-types";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameId = shortid.generate();
  numberId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    const { submit } = this.props;
    alert("Contact has been saved:" + this.state.name);
    e.preventDefault();

    submit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label className={s.labelName} htmlFor={this.nameId}>
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
          id={this.nameId}
        />

        <label className={s.labelNumber} htmlFor={this.numberId}>
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
          id={this.numberId}
        />

        <button type="submit" className={s.btnSubmit}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  submit: PropTypes.func,
};
