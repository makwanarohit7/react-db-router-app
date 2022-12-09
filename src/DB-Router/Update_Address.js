import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update_Address = () => {
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");
  let { userId } = useParams();

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3005/addresses/" + userId, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0]);
        setId(data[0].AID);
        setAddress(data[0].Address);
      })
      .catch((error) => console.log("error", error));
  }, []);

  function handleUpdate_Address() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      AID: id,
      Address: address,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3005/addresses/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  return (
    <div>
      <h1>Update Address</h1>

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
          label="Address*"
          type="text"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <br />
        <br />

        <Button variant="outlined" type="submit" onClick={handleUpdate_Address}>
          UPDATE
        </Button>
      </div>
    </div>
  );
};
export default Update_Address;
