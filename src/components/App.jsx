import { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      name: ''
    };
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const fomData = {
      id: nanoid(),
      name: name
    }

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
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
        </form>

        <h2>Conatcts</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </>        
    );
  }
}

