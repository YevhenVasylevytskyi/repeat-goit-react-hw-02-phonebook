import PropTypes from 'prop-types';

function ContactList({ contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name}: {contact.number}

          <button
              type="button"
              id={contact.id}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
          </button>
        </li>
        
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ContactList;