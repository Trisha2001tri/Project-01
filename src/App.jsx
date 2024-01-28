import UserForm from './components/UserForm.jsx';
import FilterForm from './components/FilterForm.jsx';
import Card from './components/Card.jsx';
import { useState } from 'react';
   
export default function App() {
 

  const [users, setUsers] = useState([]);
  const [ageFilter , setAgeFilter ] = useState('');
  const [genderFilter , setGenderFilter] = useState('');
  const [filterUsers , setFilterUsers] = useState([]);
 


  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  function handleFilter(){
    let filteredList = users;
    if(ageFilter){
      filteredList = filteredList.filter(user => user.age === parseInt(ageFilter)) ;
    }
    if(genderFilter){
      filteredList = filteredList.filter(user => user.gender === genderFilter );
    }

    setFilterUsers(filteredList);
    console.log(filteredList);
  }

  return (
    <>
      
      <UserForm onAddUser={handleAddUser}/>
       
       <FilterForm 
         ageFilter ={ageFilter}
         genderFilter={genderFilter}
         onApplyFilter = {handleFilter}
         onAgeChange={(event)=> setAgeFilter(event.target.value)}
         onGenderChange = {(event)=> setGenderFilter(event.target.value)}
       />
       <div>
         {filterUsers.length > 0 ? (
            filterUsers.map((user , index) => (
              <Card key = {index} user={user} />
            ))
         ) : (
           <p>No useres match the Criteria.</p>
         )}
       </div>
    </>
  );
}
