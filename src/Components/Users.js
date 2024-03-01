import React, { useEffect, useState } from "react";
import { Alert, Container, Spinner, Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState("online");

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) =>
        response.json().then((result) => {
          setData(result);
          setLoading(false); // Set loading to false when data is fetched
          localStorage.setItem("users", JSON.stringify(result));
        })
      )
      .catch((error) => {
        setMode("offline");
        setLoading(false); // Set loading to false in case of an error
        let collection = localStorage.getItem("users");
        setData(JSON.parse(collection));
      });
  }, []);

  return (
    <Container className="mt-3">
      <h1>Users</h1>
      <div>
        {mode === "offline" && (
          <Alert key="warning" variant="warning">
            You're in offline mode or there's an issue with the connection.
          </Alert>
        )}
      </div>
      {loading ? ( // Render a spinner while loading is true
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{`${item.address.street}, ${item.address.suite}, ${item.address.zipcode}`}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Users;
