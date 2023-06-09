import {
  Box,
  Pagination as MuiPagination,
  TablePagination as MuiTablePagination,
} from "@mui/material";
import { useState } from "react";
import Typography from "../../DataDisplay/Typography";
import TextField from "../../Input/TextField";

interface PaginationProps {
  count: number;
  labelRowsPerPage?: string;
  rowsPerPageOptions?: number[];
}

export default function Pagination(props: PaginationProps) {
  const {
    count,
    labelRowsPerPage = "Số hàng mỗi trang",
    rowsPerPageOptions,
  } = props;
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
    <Box sx={{ display: "flex", columnGap: "10px" }}>
      <MuiTablePagination
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
          ".css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
            {
              color: "#3662ce",
              backgroundColor: "#e2e8f7",
              border: "1px solid #3662ce",
            },
        }}
        component={"div"}
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={rowsPerPageOptions}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={
          <>
            <Typography text={labelRowsPerPage} />
          </>
        }
        labelDisplayedRows={({ from, to, count }) => (
          <Typography
            text={`${from}–${to} / ${count !== -1 ? count : `more than ${to}`}`}
          />
        )}
        ActionsComponent={() => {
          return (
            <>
              <MuiPagination
                variant="outlined"
                shape="rounded"
                count={Math.ceil(count / rowsPerPage)}
                page={page + 1}
                showFirstButton
                showLastButton
                onChange={(e: any, current: number) =>
                  handleChangePage(e, current - 1)
                }
              />
            </>
          );
        }}
      />
      <Box
        sx={{
          display: "flex",

          alignItems: "center",
          columnGap: "8px",
        }}
      >
        <Typography text={"Đến trang"} />
        <TextField />
      </Box>
    </Box>
  );
}
