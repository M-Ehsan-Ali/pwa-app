import React, { useEffect, useState } from "react";
import { Alert, Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("online");
  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) =>
        response.json().then((result) => {
          console.warn(result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        })
      )
      .catch((error) => {
        setMode("offline");
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
      });
  }, []);

  return (
    <div>
      <div>
        {mode === "offline" ? (
          <Alert key="warning" variant="warning">
            You're in offline mode or some issue with connection
          </Alert>
        ) : null}
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Email Address</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{`${item.address.street}, ${item.address.suite}, ${item.address.zipcode}`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
