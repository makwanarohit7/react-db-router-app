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
import { Fragment } from "react";
import { Box } from "@mui/system";
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

const App = () => {
  const isAuthenticated = true;
  const drawerWidth = 240;
  let navigate = useNavigate();
  return (
    <Fragment>
      <main>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
            style={{ backgroundColor: "orange" }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
                This Is DataBase And Router App In React
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <Toolbar style={{ backgroundColor: "orange" }} />
            <Divider />
            <List>
              <ListItem
                disablePadding
                onClick={() => {
                  navigate("/");
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem
                disablePadding
                onClick={() => {
                  navigate("/get");
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary={"User"} />
                </ListItemButton>
              </ListItem>
            </List>

            <Divider />
          </Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Toolbar />
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
                path="/update/:userId"
                element={isAuthenticated ? <Update /> : <Navigate to="/" />}
              />

              <Route
                path="/delete/:userId"
                element={isAuthenticated ? <Delete /> : <Navigate to="/" />}
              />
            </Routes>
          </Box>
        </Box>
      </main>
    </Fragment>
  );
};

export default App;
