import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import LogsList from "./components/logs/Logs";
import Timer from "./components/Timer/Timer";

function App() {
  const logs = useSelector((state) => state.logs);

  return (
    <>
      <Stack
        padding="30px"
        boxShadow="4px 0px 10px 0px rgba(0, 0, 0, 0.75)"
        sx={(theme) => ({
          [theme.breakpoints.up("md")]: {
            mb: "80px",
          },
          [theme.breakpoints.down("md")]: {
            mb: "30px",
          },
        })}
      >
        <Timer />
      </Stack>
      <Stack mt="50px" justifyContent="center" alignItems="center">
        <Typography
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize: "24px",
              marginBottom: "15px",
            },
          })}
          variant="h4"
          mb="25px"
        >
          Log list
        </Typography>
        {logs.length === 0 ? (
          <>
            <Typography
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: { fontSize: "18px" },
              })}
              variant="h5"
            >
              Sorry, your list is empty:(
            </Typography>
            <Typography
              sx={(theme) => ({
                [theme.breakpoints.down("sm")]: { fontSize: "18px" },
              })}
              variant="h5"
            >
              Click any button above to fill it up!
            </Typography>
          </>
        ) : (
          <LogsList />
        )}
      </Stack>
    </>
  );
}

export default App;
