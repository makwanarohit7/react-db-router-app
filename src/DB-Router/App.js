import Get from "./Get";
import Put from "./Put";
import Delete from "./Delete";
import Update from "./Update";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
const App = () => {
  const isAuthenticated = true;
  // let navigate = useNavigate();
  return (
    <Router>
      <main>
        <h1>This Is DataBase And Router App In React</h1>
        <header>
          {/* <button onClick={() => navigate(-1)}>Home</button> */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/get">Get</Link>
          </li>
          <li>
            <Link to="/put">Put</Link>
          </li>
          <li>
            <Link to="/update">Update</Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
        </header>
        <hr />
      </main>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/get"
          element={isAuthenticated ? <Get /> : <Navigate to="/" />}
        />
        <Route
          path="/put"
          element={isAuthenticated ? <Put /> : <Navigate to="/" />}
        />

        <Route
          path="/update"
          element={isAuthenticated ? <Update /> : <Navigate to="/" />}
        />

        <Route
          path="/delete"
          element={isAuthenticated ? <Delete /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
