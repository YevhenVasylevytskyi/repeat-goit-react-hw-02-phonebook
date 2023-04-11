function Filter({filter, handleChange}) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </>
  );
};


export default Filter;