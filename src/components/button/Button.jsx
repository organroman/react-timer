import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addToLogs, clearLogs } from "../../store/actions";

const TimerButton = ({ text, id, colorType, handleClick }) => {
  //   const dispatch = useDispatch();
  //   //   const logs = useSelector((state) => state.logs);

  //   const setTimeStep = (clickedBtn) => {
  //     const clickDate = new Date();
  //     const clickTime = clickDate.getTime();

  //     setTimeout(() => {
  //       const logDate = new Date();
  //       const logTime = new Date().getTime();

  //       const timeStep =
  //         "Button #:" +
  //         clickedBtn +
  //         " " +
  //         logDate.toLocaleTimeString() +
  //         " " +
  //         clickDate.toLocaleTimeString() +
  //         " " +
  //         `(${(logTime - clickTime) / 1000} sec)`;
  //       console.log(timeStep);
  //       dispatch(addToLogs(timeStep));
  //     }, clickedBtn * 1000);
  //   };

  //   const handleClick = (e) => {
  //     const clickedBtn = e.target.id;
  //     clickedBtn === "clear" ? dispatch(clearLogs()) : setTimeStep(clickedBtn);
  //   };

  return (
    <Button
      variant="contained"
      size="large"
      color={colorType}
      id={id}
      onClick={handleClick}
    >
      {text}
    </Button>
  );
};

export default TimerButton;
