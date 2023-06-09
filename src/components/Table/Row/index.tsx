import { TableRow, TableCell, Checkbox } from "@mui/material";
import Select from "../../Input/Select";

export interface RowProps {
  id: string;
  content: any; // todo: need to be breakdown
  source: string;
  category: string;
  status: string;
  date: string;
  expired: string;
}

function Row(props: RowProps) {
  const { id, content, source, category, status, date, expired } = props;
  return (
    <>
      <TableCell sx={{ width: "30%" }}>{content}</TableCell>
      <TableCell>{source}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell sx={{ width: "20%" }}>
        <Select />
      </TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{expired}</TableCell>
    </>
  );
}

export default Row;
