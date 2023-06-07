// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import { InputBase, styled } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  borderRadius: "6px",
  border: "1px solid #d1d5dc",
  maxWidth: "300px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

interface SearchFieldProps {
  placeholder?: string;
}

function SearchField({ placeholder = "Tìm kiếm ..." }: SearchFieldProps) {
  return (
    <>
      <Search>
        <SearchIconWrapper>
          <FeatherIcon size="20" icon={"search"} color={"#747474"} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          inputProps={{
            style: { color: "#9a9ca3" },
          }}
        />
      </Search>
    </>
  );
}

export default SearchField;
