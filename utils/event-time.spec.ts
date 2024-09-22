import { DateTime } from "luxon";
import { formatEventTime } from "./event-time";

describe("event-time", () => {
  describe("formatEventTime", () => {
    it("should format event without end time", () => {
      // GIVEN
      const startTime = DateTime.fromISO("2024-10-01T19:00+01:00");
      const endTime = null;

      // WHEN
      const result = formatEventTime(startTime, endTime, {
        locale: "en-GB",
        outputCalendar: "iso8601",
      });

      // THEN
      expect(result).toBe("1 Oct 2024, 19:00");
    });

    it("should format event on same day", () => {
      // GIVEN
      const startTime = DateTime.fromISO("2024-10-01T19:00+01:00");
      const endTime = DateTime.fromISO("2024-10-01T20:00+01:00");

      // WHEN
      const result = formatEventTime(startTime, endTime, {
        locale: "en-GB",
        outputCalendar: "iso8601",
      });

      // THEN
      expect(result).toBe("1 Oct 2024, 19:00 - 20:00");
    });

    it("should format event with end date on a different day", () => {
      // GIVEN
      const startTime = DateTime.fromISO("2024-10-01T19:00Z");
      const endTime = DateTime.fromISO("2024-11-01T20:00Z");

      // WHEN
      const result = formatEventTime(startTime, endTime, {
        locale: "en-GB",
        outputCalendar: "iso8601",
      });

      // THEN
      expect(result).toBe("1 Oct 2024, 20:00 - 1 Nov 2024, 20:00");
    });
  });
});
