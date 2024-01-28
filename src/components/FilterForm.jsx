

export default function FilterForm({ onAgeChange , onGenderChange , ageFilter , genderFilter , onApplyFilter }){
    return (
       <div className='filter-form'>
          <label>
            Filter by Age:
            <input type="number" value={ageFilter} onChange={onAgeChange} className='info-inputs'/>
          </label>
          <label>
            Filter by Gender:
          <select className='info-inputs' value={genderFilter} onChange={onGenderChange} >
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
      </label>
         <button type="button" onClick={onApplyFilter} >Apply Filter</button>
       </div>
    );
}

