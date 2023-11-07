export const Filter = ({ filter, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Search"
        value={filter.value}
        onChange={e => onFilter(e.target.value)}
      />
    </label>
  );
};
