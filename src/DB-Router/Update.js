import { useState } from "react";

const Update = () => {
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);
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
      <h1>Update</h1>
      <h3>Enter Data Which You Went To Update.</h3>
      <div>
        <label>
          Enter Employee Id
          <input
            type="number"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Enter Employee Name
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Enter Employee Designation
          <input
            type="text"
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Enter Employee City
          <input
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Enter Employee ContactNo
          <input
            type="number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </label>
        <br />
        <br />
        <button type="submit" onClick={handleUpdate}>
          UPDATE
        </button>
      </div>
    </div>
  );
};

export default Update;
