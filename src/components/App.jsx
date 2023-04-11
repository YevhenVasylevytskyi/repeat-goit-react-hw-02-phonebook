import { Component } from "react";
import { nanoid } from "nanoid";
// import s from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
      name: '',
      number: ''
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const fomData = {
      id: nanoid(),
      name: name,
      number: number
    }
    console.log(fomData)
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, fomData] }
    });
  
    form.reset();
  };

  handleChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  

  render() {   
    const { contacts } = this.state;
    const { filter } = this.state;
    const normalizeFilterInput = filter.toLocaleLowerCase()

    const filteredNameContact = contacts.filter(contact => {
      const normalizeName = contact.name.toLocaleLowerCase()

      if (normalizeName.includes(normalizeFilterInput)) {
        return contact
      }
    })

    return (      
      <>
        <h1>Phonebook</h1>

        <ContactForm
          handleSubmit={this.handleSubmit}
        />        

        <h2>Conatcts</h2>
        <p>Find contacts by name</p>
        <input type="text" value={filter} onChange={this.handleChange} />
        <ul>
          {filteredNameContact.map(contact => (
            <li key={contact.id}>{contact.name}: {contact.number}</li>
          ))}
        </ul>
      </>        
    );
  }
}

