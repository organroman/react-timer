import { Box, Divider, Stack } from "@mui/material";
import TimerButton from "../button/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToLogs, clearLogs } from "../../store/actions";

const Timer = () => {
  const dispatch = useDispatch();
  //   const logs = useSelector((state) => state.logs);

  const setTimeStep = (clickedBtn) => {
    const clickDate = new Date();
    const clickTime = clickDate.getTime();

    setTimeout(() => {
      const logDate = new Date();
      const logTime = new Date().getTime();

      const timeStep =
        "Button #:" +
        clickedBtn +
        " " +
        logDate.toLocaleTimeString() +
        " " +
        clickDate.toLocaleTimeString() +
        " " +
        `(${(logTime - clickTime) / 1000} sec)`;
      console.log(timeStep);
      dispatch(addToLogs(timeStep));
    }, clickedBtn * 1000);
  };

  const handleClick = (e) => {
    const clickedBtn = e.target.id;
    clickedBtn === "clear" ? dispatch(clearLogs()) : setTimeStep(clickedBtn);
  };
  return (
    <>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        spacing={3}
      >
        <TimerButton
          colorType="primary"
          text="1 sec"
          id="1"
          handleClick={handleClick}
        />
        <TimerButton
          colorType="primary"
          text="2 sec"
          id="2"
          handleClick={handleClick}
        />
        <TimerButton
          colorType="primary"
          text="3 sec"
          id="3"
          handleClick={handleClick}
        />
        <TimerButton
          colorType="error"
          text="clear"
          id="clear"
          handleClick={handleClick}
        />
      </Stack>

      <Box></Box>
    </>
  );
};
export default Timer;
