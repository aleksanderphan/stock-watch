"use client";
import React from "react";
import { DataTable } from "@/components/ui/data-table";

interface DataTableProps {
  data: { id: number; ticker: string; exDate: string, divYield: string, dividend: string, price: number }[];
}

const DividendDataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <DataTable
      data={data}
      columns={[
        { header: "ID", accessorKey: "id" },
        { header: "Ticker", accessorKey: "ticker" },
        { header: "Ex Date", accessorKey: "exDate" },
        { header: "Yield", accessorKey: "divYield" },
        { header: "Dividend", accessorKey: "dividend" },
        { header: "Price", accessorKey: "price" },
      ]}
    />
  );
};

export default DividendDataTable;
