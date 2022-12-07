import { Button, Input, TextField } from "@mui/material";
import { useState } from "react";

const Put = () => {
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  function handlePost() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      EmpID: id,
      Name: name,
      Designation: designation,
      City: city,
      ContactNo: number,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch("http://localhost:3000/employees", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <h1>Create New User</h1>

      <div>
        <TextField
          variant="outlined"
          label="Id Number*"
          type="number"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          label="Name*"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          label="Designation*"
          type="text"
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          label="City*"
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          variant="outlined"
          label="Contact Number*"
          type="text"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit" onClick={handlePost}>
          Create
        </Button>
      </div>
    </div>
  );
};

export default Put;
