import { DateTime } from "luxon";
import { Event } from "@/utils/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { formatEventTime } from "@/utils/event-time";
import Link from "next/link";

export const EventCard = ({ event }: { event: Event }) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
        {`@ ${event.location}`}

        <CardDescription>
          {formatEventTime(
            DateTime.fromISO(event.scheduled_time),
            event.end_time ? DateTime.fromISO(event.end_time) : null
          )}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
