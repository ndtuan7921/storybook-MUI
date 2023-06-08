import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { Pagination, PaginationItem } from "@mui/material";

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      sx={{
        "& .MuiToolbar-root": {
          columnGap: "0.75rem",
        },
        "& .css-16c50h-MuiInputBase-root-MuiTablePagination-select": {
          marginRight: "8px",
        },
        "& .MuiTablePagination-spacer": {
          flex: "0",
        },
        ".css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected": {
          color: "#3662ce",
          backgroundColor: "#e2e8f7",
          border: "1px solid #3662ce",
        },
      }}
      component={"div"}
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      labelRowsPerPage={"Số hàng trên mỗi trang"}
      labelDisplayedRows={({ from, to, count }) => {
        return `${from}–${to} / ${count !== -1 ? count : `more than ${to}`}`;
      }}
      ActionsComponent={() => {
        return (
          <>
            <Pagination
              variant="outlined"
              shape="rounded"
              count={100 / rowsPerPage}
              page={page}
              showFirstButton
              showLastButton
              onChange={(e: any) => {
                console.log("page:\t", page);
                console.log(e);
                // handleChangePage(e, parseInt(e.target.innerText));
              }}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    last: (props) => <button {...props}>Last</button>,
                    next: (props) => <button {...props}>Next</button>,
                    first: (props) => <button {...props}>First</button>,
                    previous: (props) => <button {...props}>Previous</button>,
                  }}
                  {...item}
                />
              )}
            />
          </>
        );
      }}
    />
  );
}
/*
first/last button
last page
pagination items quality
*/
