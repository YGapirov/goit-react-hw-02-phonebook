import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';

import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = values => {
    const contact = { ...values, id: nanoid() };
    const { contacts } = this.state;
    if (contacts.some(contact => contact.name === values.name)) {
      alert(`${values.name} is already on contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };

  updateFilter = values => {
    this.setState({
      filter: values,
    });
  };

  handleDelete = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;

    const visibleContacts = contacts.filter(contact => {
      const hasName = contact.name.toLowerCase().includes(filter.toLowerCase());
      return hasName;
    });
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={this.updateFilter} />
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onDelete={this.handleDelete}
          />
        )}
        <GlobalStyle />
      </div>
    );
  }
}
