import React from 'react'

interface User{
  id: number;
  name: string;
}

const UsersPage = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users', {next: {revalidate: 10}});  // refresh after 10s
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'}); // refresh 
  // const res = await fetch('https://jsonplaceholder.typicode.com/users'); // no cached
  const users: User[] = await res.json();
  // console.log(users);
  return (
   <div>
    <p>{new Date().toLocaleTimeString()}</p>
    {
      users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
        </div>
      ))

    }
   </div>
  )
}

export default UsersPage