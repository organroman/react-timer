import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const LogsList = () => {
  const logs = useSelector((state) => state.logs);
  return (
    <>
      <Stack>
        {logs.map((log, index) => {
          return (
            <Typography
              variant="h6"
              sx={(theme) => (
                { color: "#404258" },
                {
                  [theme.breakpoints.down("sm")]: { fontSize: "16px" },
                }
              )}
              key={index}
            >
              {log}
            </Typography>
          );
        })}
      </Stack>
    </>
  );
};
export default LogsList;
