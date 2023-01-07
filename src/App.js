// import logo from './logo.svg';
// import { Button } from "@mui/material";
import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import "./App.scss";

import TimerButton from "./components/button/Button";
import LogsList from "./components/logs/logs";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <Stack padding="20px" boxShadow="10px 10px 10px 0px rgba(0, 0, 0, 0.75)">
        <Timer />
      </Stack>
      <Box>
        <LogsList />
      </Box>
    </>
  );
}

export default App;
