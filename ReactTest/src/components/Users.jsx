import React from "react";

const userList = [
  {
    Name: "Rohan Tarte",
    id: 1,
    email: "rohan@gmail.com",
  },
  {
    Name: "Aditay Mandre",
    id: 2,
    email: "aditya@gmail.com",
  },
  {
    Name: "Zahir",
    id: 3,
    email: "zahir@gmail.com",
  },
];

function Users() {
  return (
    <main>
      {userList.map(({ id, Name, email }) => (
        <ul key={id}>
          <li>{id}</li>
          <li>{Name}</li>
          <li>{email}</li>
        </ul>
      ))}
    </main>
  );
}

export default Users;
