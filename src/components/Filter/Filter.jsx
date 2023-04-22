function Filter({filter, onChangeFilter}) {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
};

export default Filter;