import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

// Компонент списка контактов
const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button type="button" onClick={() => onDelete(contact.id)}>
              delete
            </button>
          </li>
        );
      })}
    </List>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
