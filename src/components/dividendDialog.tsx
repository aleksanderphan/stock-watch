"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import DividendDataTable from "./dividendDataTable";

type DividendDetail = {
  id: number;
  ticker: string;
  exDate: string;
  yield: string;
  dividend: string;
  price: number;
};

interface DialogComponentProps {
  selected: Date | undefined;
  loading: boolean;
  dividendDetails: DividendDetail[];
  onClose: () => void;
}

function DividendDialog({ selected, loading, dividendDetails, onClose }: DialogComponentProps) {
  const [timeoutReached, setTimeoutReached] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setTimeoutReached(true), 5000);
      return () => clearTimeout(timer);
    } else {
      setTimeoutReached(false); 
    }
  }, [loading]);

  return (
    <Dialog open={!!selected} onOpenChange={onClose}>
      <DialogTrigger asChild>
        <button className="hidden" aria-hidden="true" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dividend Date Details</DialogTitle>
        </DialogHeader>
        {loading && !timeoutReached ? (
          <div className="space-y-4">
            <Skeleton className="w-full h-12 rounded-xl" />
          </div>
        ) : dividendDetails.length > 0 ? (
          <DividendDataTable data={dividendDetails} />
        ) : (
          <p className="text-center">No dividend data available yet for this date.</p>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default DividendDialog;
