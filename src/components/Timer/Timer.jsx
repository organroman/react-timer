import { Container, Divider, Stack } from "@mui/material";
import TimerButton from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToLogs, clearLogs } from "../../store/actions";

const Timer = () => {
  const dispatch = useDispatch();

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

      dispatch(addToLogs(timeStep));
    }, clickedBtn * 1000);
  };

  const handleClick = (e) => {
    const clickedBtn = e.target.id;
    clickedBtn === "clear" ? dispatch(clearLogs()) : setTimeStep(clickedBtn);
  };
  return (
    <>
      <Container>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          justifyContent="space-evenly"
          m="0 15px"
        >
          <TimerButton
            colorType="primary"
            text="1 sec"
            id="1"
            handleClick={handleClick}
            sx={(theme) => ({
              [theme.breakpoints.down("sm")]: { padding: "10px 15px" },
            })}
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
      </Container>
    </>
  );
};
export default Timer;
