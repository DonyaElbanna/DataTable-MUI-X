import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { darken, lighten } from "@mui/material/styles";

function DataTable() {
  const rows: GridRowsProp = [
    {
      id: 1,
      col1: "Mark",
      col2: "Hudson",
      col3: "23",
      col4: "Mark Hudson",
      col5: "True",
    },
    {
      id: 2,
      col1: "Ashley",
      col2: "Wimperg",
      col3: "46",
      col4: "Ashley Wimperg",
      col5: "True",
    },
    {
      id: 3,
      col1: "Sue",
      col2: "Tomayko",
      col3: "17",
      col4: "Sue Tomayko",
      col5: "False",
    },
    {
      id: 4,
      col1: "David",
      col2: "Gilbert",
      col3: "34",
      col4: "David Gilbert",
      col5: "True",
    },
    {
      id: 5,
      col1: "Eric",
      col2: "Cartman",
      col3: "11",
      col4: "Eric Cartman",
      col5: "False",
    },
    {
      id: 6,
      col1: "Stan",
      col2: "Marsh",
      col3: "27",
      col4: "Stan Marsh",
      col5: "True",
    },
    {
      id: 7,
      col1: "Wendy",
      col2: "Testaburger",
      col3: "32",
      col4: "Wendy Testaburger",
      col5: "True",
    },
    {
      id: 8,
      col1: "Kenny",
      col2: "McCormick",
      col3: "09",
      col4: "Kenny McCormick",
      col5: "False",
    },
    {
      id: 9,
      col1: "Kyle",
      col2: "Broflovski",
      col3: "43",
      col4: "Kyle Broflovski",
      col5: "True",
    },
    {
      id: 10,
      col1: "Bebe",
      col2: "Stevens",
      col3: "22",
      col4: "Bebe Stevens",
      col5: "True",
    },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "First Name ", width: 150 },
    { field: "col2", headerName: "Last Name", width: 150 },
    { field: "col3", headerName: "Age", width: 150 },
    { field: "col4", headerName: "Full Name", width: 150 },
    { field: "col5", headerName: "Valid", width: 150 },
  ];

  const getBackgroundColor = (color: string, mode: string) =>
    mode === "dark" ? darken(color, 0.6) : lighten(color, 0.6);

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        "& .super-app-theme--True": {
          bgcolor: (theme) =>
            getBackgroundColor(theme.palette.success.main, theme.palette.mode),
        },
        "& .super-app-theme--False": {
          bgcolor: (theme) =>
            getBackgroundColor(theme.palette.error.main, theme.palette.mode),
        },
      }}
    >
      <div className="table">
        <DataGrid
          rows={rows}
          columns={columns}
          getRowClassName={(params) => `super-app-theme--${params.row.col5}`}
        />
      </div>
    </Box>
  );
}

export default DataTable;
