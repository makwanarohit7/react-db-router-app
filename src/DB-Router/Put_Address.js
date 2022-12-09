import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Put_Address = () => {
  const [id, setId] = useState("");
  const [address, setAddress] = useState("");

  function handlePost_Address() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      AID: id,
      Address: address,
    });

    var requestOptions = {
      method: "POST",
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
      <h1>Create New Address</h1>

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
      </div>
      <Button variant="outlined" type="submit" onClick={handlePost_Address}>
        Create Address
      </Button>
    </div>
  );
};
export default Put_Address;
