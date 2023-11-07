import { ContactCard } from '../ContactCard/ContactCard';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};
