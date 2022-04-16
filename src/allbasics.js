import { useState } from "react";

// const handleCounter=(e)=>{
//     console.log('count++',e.target);
// }
// Here in this arrow function the first parameter automatically stores the event
// properties.

// const handleName=(name)=>{
//     console.log(name);
// }

const Home = () => {
    // name is default value and setName is used to change value of name
  const [name, setName] = useState("Arth");
  const [age,setAge]=useState(21);

  const changeName = () => {
    setName("Attu");
    setAge(22);
  };

  return (
    <div className="content">
      {/* <button onClick={handleCounter} >Countered</button>
                            {/* No parameters in handleCounter */}
      {/* <button onClick={()=>{handleName("Arth")}}>Click me</button> */}
      {/* Passes Parameters in handleName */}
      {/* <button onClick={(event)=>{handleName("Arth",event)}}>Click me</button> */}

      <p id="box">{name} is {age} years old</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default Home;
