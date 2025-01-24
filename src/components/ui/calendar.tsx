import React from "react";
import { DayPicker } from "react-day-picker";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  className?: string;
  modifiers?: Record<string, Date[]>;
};

function Calendar({ className, modifiers, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={className}
      {...props}
      modifiers={modifiers}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
