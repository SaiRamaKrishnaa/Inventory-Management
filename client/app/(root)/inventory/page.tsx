"use client";

import { useGetProductsQuery } from "@/state/api";
import Header from "@/components/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", minWidth: 50, flex: 1 , maxWidth:250, 
   headerClassName:"bg-white", headerAlign: "center"},
  { field: "name", headerName: "Product Name", width: 200, maxWidth:250, flex:1, headerClassName:"bg-white", headerAlign: "center" },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    maxWidth:250,
    type: "number",
    flex:1,
    headerAlign: "center",headerClassName:"bg-white", 
    align:"center",
    valueGetter: (value, row) => `$${row.price}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    maxWidth:200,
    type: "number",
    flex:1,
    headerAlign: "center",headerClassName:"bg-white", 
    align:"center",
    valueGetter: (value, row) => (row.rating ? row.rating : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    maxWidth:200,
    flex:1,
    headerAlign: "center",headerClassName:"bg-white", 
    align:"center",
    type: "number",
  },
];

const Inventory = () => {
  const { data: products, isError, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !products) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to fetch products
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Header name="Inventory" />
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row.productId}
        checkboxSelection
        className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700 text-center"
        sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'white',
            },
          }}
      />
    </div>
  );
};

export default Inventory;