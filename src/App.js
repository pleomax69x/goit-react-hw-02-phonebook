import './App.css';
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
// import PropTypes from "prop-types";

// const unicId = uuidv4();
// console.log(unicId);

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    const isUnicContact = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isUnicContact) {
      alert(`${name} is alredy in contacts.`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getvisibleContacts = () => {
    const { contacts, filter } = this.state;
    const lowText = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowText),
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    const webContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(webContacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter onChange={this.changeFilter} filter={filter} />

        <ContactList
          visibleContacts={this.getvisibleContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
