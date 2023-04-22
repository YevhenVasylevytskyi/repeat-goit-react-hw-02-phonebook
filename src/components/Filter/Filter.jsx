import PropTypes from 'prop-types';

function Filter({ filter, onChangeFilter }) {
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

Filter.protoType = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

export default Filter;