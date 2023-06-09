import { ThemeProvider } from "@mui/material";
import "./App.css";
import Pagination from "./components/Navigation/Pagination";
import typography from "./assets/overrides/typography";
import Typography from "./components/DataDisplay/Typography";
import Table from "./components/Table";
import Heading from "./components/DataDisplay/Heading";

function App() {
  return (
    <>
      <ThemeProvider theme={typography}>
        <Heading text={"Heading"} variant="h1" />
        <Heading text={"Heading"} variant="h2" />
        <Heading text={"Heading"} variant="h3" />
        <Heading text={"Heading"} variant="h4" />
        <Heading text={"Heading"} variant="h5" />
        <Heading text={"Heading"} variant="h6" />
      </ThemeProvider>
      <Table />
    </>
  );
}

export default App;
