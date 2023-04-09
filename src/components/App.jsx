import { Component } from "react";
import { nanoid } from "nanoid";
import s from "./App.module.css";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
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

  render() {   
    const {contacts} = this.state

    return (      
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
                />
          </label>
        <button type="submit">Add contact</button>
        </form>

        <h2>Conatcts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}: {contact.number}</li>
          ))}
        </ul>
      </>        
    );
  }
}

