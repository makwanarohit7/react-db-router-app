import { useState } from "react";

const Delete = () => {
  const [id, setId] = useState("");

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
      <h1>Delete</h1>
      <h3>Enter Id Number Which You Went To Detele</h3>
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
        <br />
        <button type="submit" onClick={handleDelete}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Delete;
