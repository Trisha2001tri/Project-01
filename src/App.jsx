/** @format */

import UserForm from './components/UserForm.jsx';
import FilterForm from './components/FilterForm.jsx';
import Card from './components/Card.jsx';
import { useState } from 'react';

export default function App() {
  const [users, setUsers] = useState([]);
  const [ageFilter, setAgeFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [filterUsers, setFilterUsers] = useState([]);

  // Filter state can be an object
  // const [filter, setFilter] = useState({
  //   age: "",
  //   gender: ""
  // })

  const handleAddUser = (user) => {
    setUsers([...users, user]);

    // setUsers(prev => [...prev, user])  // Always use a callback if the new state is dependent on previous state
  };

  function handleFilter() {
    let filteredList = users;
    if (ageFilter) {
      filteredList = filteredList.filter(
        (user) => user.age === parseInt(ageFilter)
      );
    }
    if (genderFilter) {
      filteredList = filteredList.filter(
        (user) => user.gender === genderFilter
      );
    }

    setFilterUsers(filteredList);
    console.log(filteredList);
  }

  // If you are only filtering out a state then you can use a constant instead of a whole separate state to show the filtered out data
  // const filteredUser = users.filter(
  //   (user) => user.age === parseInt(filter.age) && user.gender === filter.gender
  // );

  return (
    <>
      <UserForm onAddUser={handleAddUser} />
      <FilterForm
        ageFilter={ageFilter}
        genderFilter={genderFilter}
        onApplyFilter={handleFilter}
        onAgeChange={(event) => setAgeFilter(event.target.value)}
        onGenderChange={(event) => setGenderFilter(event.target.value)}
      />
      <div>
        {filterUsers.length > 0 ? (
          filterUsers.map((user, index) => <Card key={index} user={user} />)
        ) : (
          <p>No useres match the Criteria.</p>
        )}
      </div>
    </>
  );
}
