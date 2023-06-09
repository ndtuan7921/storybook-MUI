import {
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  Checkbox,
  TableBody,
} from "@mui/material";
import React, { useState } from "react";
import Row, { RowProps } from "./Row";
import Typography from "../DataDisplay/Typography";

const initialRows: RowProps[] = [
  {
    id: "123",
    content: "123", // todo: need to be breakdown
    source: "123",
    category: "123",
    status: "123",
    date: "123",
    expired: "123",
  },
  {
    id: "456",
    content: "123", // todo: need to be breakdown
    source: "123",
    category: "123",
    status: "123",
    date: "123",
    expired: "123",
  },
  {
    id: "567",
    content: "123", // todo: need to be breakdown
    source: "123",
    category: "123",
    status: "123",
    date: "123",
    expired: "123",
  },
];

const tableHeadings = [
  {
    id: "content",
    label: "Nội dung",
  },
  {
    id: "source",
    label: "Nguồn",
  },
  {
    id: "category",
    label: "Danh mục",
  },
  {
    id: "status",
    label: "Trạng thái",
  },
  {
    id: "date",
    label: "Ngày",
  },
  {
    id: "expired",
    label: "Hết hạn",
  },
];

const Table: React.FC = () => {
  const [rows, setRows] = useState(initialRows);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleCheckboxChange = (id: string) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selectedRows, id];
    } else {
      newSelected = selectedRows.filter((rowId) => rowId !== id);
    }

    setSelectedRows(newSelected);
  };

  return (
    <MuiTable>
      <TableHead sx={{ background: "#f9fafb" }}>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              checked={selectedRows.length === rows.length}
              indeterminate={
                selectedRows.length > 0 && selectedRows.length < rows.length
              }
              onChange={() =>
                selectedRows.length === rows.length
                  ? setSelectedRows([])
                  : setSelectedRows(rows.map((row) => row.id))
              }
            />
          </TableCell>
          {tableHeadings.map((heading) => (
            <TableCell key={heading.id} align="left">
              <Typography
                color={"#687083"}
                text={heading.label}
                variant="subtitle1"
              />
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          return (
            <TableRow key={row.id}>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </TableCell>
              <Row {...row} />
            </TableRow>
          );
        })}
      </TableBody>
    </MuiTable>
  );
};

export default Table;
