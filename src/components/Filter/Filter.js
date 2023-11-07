export const Filter = ({ filters, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Search"
        value={filters.value}
        onChange={onChangeFilter}
      ></input>
    </label>
  );
};
