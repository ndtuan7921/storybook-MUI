import { styled, InputBase } from "@mui/material";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#9a9ca3",
  borderRadius: "6px",
  border: "1px solid #d1d5dc",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    width: "100%",
  },
}));
function TextField() {
  return (
    <>
      <StyledInputBase />
    </>
  );
}

export default TextField;
