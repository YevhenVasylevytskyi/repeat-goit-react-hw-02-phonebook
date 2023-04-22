import { Component } from "react";
// import s from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export class App extends Component {
  state = {
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
  
  addContact = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data] };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value.toLocaleLowerCase() });
  };

  onFilter = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter),
    );
  };

  render() {   
    
    return (      
      <>
        <h1>Phonebook</h1>

        <ContactForm
          onSubmit={this.addContact} 
        />        

        <h2>Conatcts</h2>
        <Filter
          filter={this.state.filter}
          onChangeFilter={this.changeFilter}
        />
        {this.state.filter === '' ? (
            <ContactList
              contacts={this.state.contacts}
            />
          ) : (
            <ContactList
              contacts={this.onFilter()}
            />
          )}
      </>        
    );
  }
}

