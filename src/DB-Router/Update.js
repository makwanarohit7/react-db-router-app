import { Button, Input, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Update = () => {
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");

  let { userId } = useParams();

  useEffect(() => {
    console.log(userId);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://localhost:3000/employees/" + userId, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        setId(data[0].Id);
        setDesignation(data[0].Designation);
        setName(data[0].Name);
        setCity(data[0].City);
        setNumber(data[0].ContactNo);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function handleUpdate() {
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
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/employees/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      <h1>Update User Data</h1>

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
          value={designation}
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
          value={city}
          label="City*"
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          value={number}
          variant="outlined"
          label="Contact Number*"
          type="text"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <br />
        <br />
        <Button variant="outlined" type="submit" onClick={handleUpdate}>
          UPDATE
        </Button>
      </div>
    </div>
  );
};

export default Update;
