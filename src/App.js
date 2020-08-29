import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const FamilyName = ['Sajal Khan', 'Munna Khan', 'Ratul Islam', 'Jannat Islam', 'Ratry Islam', 'Shimul', 'Samira Khan', 'Shahinur Islam']

      const products = [
        {name: 'Photoshop', price: '$90.99'},
        {name: 'Illustrator', price: '$60.99'},
        {name: 'PDF Reader', price: '$6.99'},
        {name: 'Adobe Reader', price: '$20.99'},
      ]
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            FamilyName.map(name => <li>{name}</li>)
          }
        </ul>

      <Product products={products[0]}></Product>
      <Product products={products[1]}></Product>
      <Product products={products[2]}></Product>
      <Product products={products[3]}></Product>

        <Person name={FamilyName[0]} job="Facebook" age="5"></Person>
        <Person name={FamilyName[1]} job="Designer"></Person>
        <Person name={FamilyName[2]} job="Toto "></Person>
        <Person name={FamilyName[3]} job="Toto "></Person>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => { setCount(count + 1);
  }
  return (
    <div>
      <h1> Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}> Decrease</button>
      <button onClick={handleIncrease}> Increase</button>
    </div>
  )  
}


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3> Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map( users => <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){

  const productStyle={
    border: '1px solid gery',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    height: '250px',
    width: '250px',
    float: 'left',
    padding: '10px',
  }

  const {name, price} = props.products;
  return (
      <div style={productStyle}>
        <h4>{name}</h4>
        <h2>{price}</h2>
        <button> Buy Now</button>
</div>
  )

}


function Person(props) {

    const personStyle = {
      border: '5px solid yellow',
      borderRadius: '15px',
      margin: '10px',
      padding: '20px',
      textAlign: 'center',
      color: 'green',
    }

  return ( <div style={personStyle}>

  <h2>My Name: {props.name}</h2>
    <h4> I am doing job {props.job} last {props.age || 2} years</h4>

  </div>

  );

  }

export default App;
