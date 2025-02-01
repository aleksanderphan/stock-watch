"use client";
import React from "react";
import { DataTable } from "@/components/ui/data-table";

interface DataTableProps {
  data: { id: number; ticker: string; exDate: string, yield: string, dividend: string, price: number }[];
}

const DividendDataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <DataTable
      data={data}
      columns={[
        { header: "Ticker", accessorKey: "ticker" },
        { header: "Ex Date", accessorKey: "exDate" },
        { header: "Yield", accessorKey: "yield" },
        { header: "Dividend", accessorKey: "dividend" },
        { header: "Price", accessorKey: "price" },
      ]}
    />
  );
};

export default DividendDataTable;
