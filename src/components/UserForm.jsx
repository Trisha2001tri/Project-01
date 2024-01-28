
import { useState } from 'react';
import logo from '../assets/logo.png';

export default function UserForm({onAddUser}){
   
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  
  

  function handleInputChange(identifier, value) {
    if (identifier === 'image') {
      setImage(value);
    } else if(identifier === 'name') {
      setName(value);
    } else if(identifier === 'age') {
      setAge(value);
    } else{
      setGender(value);
    }
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      imge:image,
      name:name,
      age: parseInt(age),
      gender:gender,
    };

    onAddUser(user);

    // Clear form fields
    setImage('');
    setName('');
    setAge('');
    setGender('');
  };

    return (
        <div className="info-container">
          <form action="" className="info-left" onSubmit={handleSubmit}>
             <div className="info-left-title">
                <h2>Enter User Information</h2>
                <hr />
              </div>
              <label>Image Link</label>
                <input
                 type="url"
                 className="info-inputs"
                 required
                 value={image}
                 onChange={(event) => handleInputChange('image', event.target.value)}
                 />
              <label>Name</label>
                 <input
                   type="text"
                   className="info-inputs"
                   required
                   value={name}
                   onChange={(event) => handleInputChange('name', event.target.value)}
                 />
              <label>Age</label>
                 <input
                   type="number"
                   className="info-inputs"
                    required
                    value={age}
                    onChange={(event) => handleInputChange('age', event.target.value)}
                 />

              <label>Gender</label>
                <select 
                   className="info-inputs"
                   required
                   value={gender}
                   onChange={(event) => handleInputChange('gender', event.target.value)}
                >
                   <option value="">Select Gender</option>
                   <option value="Male">Male</option>
                   <option value="Female">Female</option>
               </select>


              <button
               type="submit"
              >
                Save
              </button>
            </form>


            <div className="info-right">
              <img src={logo} alt="A canvas" />
            </div>
          </div>
    );
}