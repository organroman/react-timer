import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const LogsList = () => {
  const logs = useSelector((state) => state.logs);
  return (
    <>
      <Stack>
        {logs.map((log) => {
          return <Typography key={log.index}>{log}</Typography>;
        })}
      </Stack>
    </>
  );
};
export default LogsList;
