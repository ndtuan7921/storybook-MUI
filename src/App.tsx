import "./App.css";
import Pagination from "./components/Navigation/Pagination";

function App() {
  return (
    <>
      <Pagination count={100} rowsPerPageOptions={[10, 20, 30]} />
    </>
  );
}

export default App;
