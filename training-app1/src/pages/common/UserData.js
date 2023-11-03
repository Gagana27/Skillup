

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

    const UserDetails = () => {
  const [users, setUsers] = useState([]);
   console.log("data",users);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/user/userdata");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("Deleting user with ID:", id);
      await axios.delete(`http://localhost:9000/api/v1/users/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      alert("Deleted user");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Error deleting user");
    }
  };

  return (
    <div >
      <div className="col-md-6" >
        <div style={{ fontSize: "1.5rem", textAlign: "center",color:"blue" }}>
      <h1 >User Data</h1>
      <>--------------</>
      </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">FirstName</th>
              <th scope="col">LasttName</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Addresss</th>
              <th scope="col">Contact</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.password.substring(0,25)}</td>
                <td>{user.addres}</td>
                <td>{user.contact}</td>
                <td>
                  <Link to={`/edit/${user._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    style={{ marginLeft: "1rem" }}
                    onClick={() => handleDelete(user._id)} // Pass user ID to handleDelete
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserDetails;
