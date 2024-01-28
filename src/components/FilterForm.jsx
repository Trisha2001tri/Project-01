/** @format */

export default function FilterForm({
  onAgeChange,
  onGenderChange,
  ageFilter,
  genderFilter,
  onApplyFilter,
}) {
  // You can maintain a local state for filter here
  // Then on Applyfilter send the local state data to it's parent state

  return (
    <div className='filter-form'>
      <label>
        Filter by Age:
        <input
          type='number'
          value={ageFilter}
          onChange={onAgeChange}
          className='info-inputs'
        />
      </label>
      <label>
        Filter by Gender:
        <select
          className='info-inputs'
          value={genderFilter}
          onChange={onGenderChange}
        >
          <option value=''>All Genders</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </label>
      <button type='button' onClick={onApplyFilter}>
        Apply Filter
      </button>
    </div>
  );
}
