import s from "./Contacts.module.css";
import PropTypes from "prop-types";

const Contacts = ({ contacts, onDeleteContact }) => (
  <div>
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contactsItem}>
          <p className={s.contactsParagraph}>{name}:</p>
          <p className={s.contactsNumber}>{number}</p>
          <button
            type="button"
            onClick={() => {
              onDeleteContact(id);
            }}
            className={s.contactsBtn}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
