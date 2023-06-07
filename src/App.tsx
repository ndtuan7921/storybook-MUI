import "./App.css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import FeatherIcon from "feather-icons-react";
import FileUpload from "./components/Input/FileUpload";
import Typography from "./components/DataDisplay/Typography";
import SearchField from "./components/Input/SearchField";
import Select from "./components/Input/Select";
import Tabs from "./components/Navigation/Tabs";
const options = [
  {
    id: "unpublished",
    label: "Chưa phát hành",
    backgroundColor: "#f2f4f7",
    textColor: "#364052",
  },
  {
    id: "published",
    label: "Đã phát hành",
    backgroundColor: "#f1f8fe",
    textColor: "#2d5bcc",
  },
  {
    id: "expired",
    label: "Hết hạn",
    backgroundColor: "#FDF6EE",
    textColor: "#A84E20",
  },
];

const tabOptions = [
  {
    id: "story",
    label: "Story",
    icon: "clock",
  },
  {
    id: "event",
    label: "Event",
    icon: "clock",
  },
  {
    id: "short",
    label: "Short",
    icon: "clock",
  },
  {
    id: "single-VOD",
    label: "VOD Lẻ",
    icon: "clock",
  },
  {
    id: "series-VOD",
    label: "VOD Lẻ",
    icon: "clock",
  },
];
function App() {
  return (
    <>
      <Typography variant="h1" text="Hello world" />
      <FileUpload label={"Nhập File"} />
      <SearchField />
      <Select options={options} />
      <Tabs tabOptions={tabOptions} />
      <FeatherIcon size="22" icon={"clock"} color={"#ca3631"} />
    </>
  );
}

export default App;
