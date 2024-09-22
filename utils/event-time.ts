import { DateTime, LocaleOptions } from "luxon";

export const formatEventTime = (
  startTime: DateTime,
  endTime: DateTime | null,
  locale?: LocaleOptions
): string => {
  return `${startTime.toLocaleString({
    dateStyle: "medium",
    timeStyle: "short",
  })}${
    endTime
      ? ` - ${endTime?.toLocaleString({
          dateStyle: endTime > startTime.endOf("day") ? "medium" : undefined,
          timeStyle: "short",
        })}`
      : ""
  }`;
};
