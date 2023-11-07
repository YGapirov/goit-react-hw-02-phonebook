import {Component} from "react";
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid'; 


export class App extends Component {
 state = {
  contacts: [],
  name: ''
}


  handleChange = (e) => {
    this.setState({ name: e.target.value }); 
  };

  handleSubmit = (e) => {
    e.preventDefault(); // 

    const addContact = {
      name: this.state.name, // Створtyyz нового об'єкта
      id: nanoid(), 
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, addContact], // Додаємо новий контакт до списку контактів у стані
      name: '', // Очищаємо поле вводу після додавання контакту
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              required
              value={this.state.name} // Встановлюємо значення поля вводу зі стану
              onChange={this.handleChange} // Додаємо обробник події зміни введеного тексту
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li> // Відображаємо список контактів зі стану
          ))}
        </ul>
        <GlobalStyle />
      </div>
    );
  }
}