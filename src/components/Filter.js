const Filter = ({ onChange, filter }) => {
  return (
    <>
      <p>Find contact by name</p>
      <label>
        <input
          type="text"
          value={filter}
          onChange={onChange}
          placeholder="Enter name to find"
        />
      </label>
    </>
  );
};

export default Filter;
