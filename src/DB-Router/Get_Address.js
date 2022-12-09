import { Button } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Get_Address = () => {
  const [data, setData] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3005/addresses", requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }, []);
  //   console.log(data);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Fragment>
      <h1>Get Addresses</h1>
      <Button
        variant="contained"
        onClick={() => {
          navigate(`/put_Address`);
        }}
      >
        Add New Address
      </Button>
      <p>
        <b>Data Come From DataBase : </b>
      </p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Edit</StyledTableCell>
              <StyledTableCell>Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <StyledTableRow key={item.AID}>
                <StyledTableCell>{item.AID}</StyledTableCell>
                <StyledTableCell>{item.Address}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate(`/Update_Address/${item.AID}`);
                    }}
                  >
                    Edit
                  </Button>
                </StyledTableCell>
                <StyledTableCell>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate(`/Delete_Address/${item.AID}`);
                    }}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Get_Address;
