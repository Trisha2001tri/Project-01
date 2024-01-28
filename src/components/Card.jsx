export default function Card({user}){
   return (
      <div className="user-card">
        <img src={user.image} alt="Image" />
        <h3>{user.name}</h3>
        <p>Age : {user.age} </p>
        <p>Gender : {user.gender} </p>
      </div>
   );
}