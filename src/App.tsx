import { Pagination as MuiPagination } from "@mui/material";
import "./App.css";
import Pagination from "./components/Navigation/Pagination";

function App() {
  return (
    <>
      <Pagination />
      <br />
      <br />
      <br />
      <br />
      <br />
      <MuiPagination count={10} showFirstButton showLastButton />
    </>
  );
}

export default App;
