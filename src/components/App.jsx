import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = values => {
    const contact = { ...values, id: nanoid() };

    // console.log('addContact');

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  // handleChange = e => {
  //   this.setState({ name: e.target.value });
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} />
        <GlobalStyle />
      </div>
    );
  }
}
