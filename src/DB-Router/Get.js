import { useState } from "react";

const Get = () => {
  const [id, setId] = useState("");
  const [data, setData] = useState([]);
  function handleGet() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://localhost:3000/employees", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
    setId("");
  }
  return (
    <div>
      <h1>Get</h1>
      <p>This is DB App in React </p>
      <button type="submit" onClick={handleGet}>
        GET Data
      </button>
      <p>
        <b>Data Come From DataBase : </b>
      </p>
      <table border={1}>
        <th>Id</th>
        <th>Name</th>
        <th>Designation</th>
        <th>City</th>
        <th>ContactNo</th>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Designation}</td>
              <td>{item.City}</td>
              <td>{item.ContactNo}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Get;
