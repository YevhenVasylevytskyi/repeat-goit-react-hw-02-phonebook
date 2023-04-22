function ContactList({contacts, deleteContact}) {
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

export default ContactList;