export const ContactCard = ({ contact: { id, name, number }, onDelete }) => {
  return (
    <li key={id}>
      <span>{name}:</span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};
