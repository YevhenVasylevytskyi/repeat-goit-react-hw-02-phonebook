function ContactList({filteredNameContact}) {
  return (
    <ul>
      {filteredNameContact.map(contact => (
        <li key={contact.id}>{contact.name}: {contact.number}</li>
      ))}
    </ul>
  );
};


export default ContactList;