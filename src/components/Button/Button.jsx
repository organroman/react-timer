import { Button } from "@mui/material";

const TimerButton = ({ text, id, colorType, handleClick }) => {
  return (
    <Button
      variant="contained"
      color={colorType}
      id={id}
      onClick={handleClick}
      sx={(theme) => ({
        [theme.breakpoints.down("sm")]: {
          fontSize: "12px",
          padding: "5px 10px",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "14px",
          padding: "10px 20px",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "16px",
          padding: "15px 30px",
        },
      })}
    >
      {text}
    </Button>
  );
};

export default TimerButton;
