import { Button, Input, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Delete = () => {
  const [id, setId] = useState("");
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
      })
      .catch((error) => console.log("error", error));
  }, []);
  function handleDelete() {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:3000/employees/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      <h1>Delete User </h1>
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
        <Button variant="outlined" type="submit" onClick={handleDelete}>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default Delete;
