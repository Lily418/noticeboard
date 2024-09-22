import { TypographyH2 } from "@/components/typography/TypographyH2";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EventCard } from "@/components/ui/event-card";
import { createClient } from "@/utils/supabase/server";
import { DateTime } from "luxon";

export default async function Index() {
  const supabase = createClient();

  const { data, error } = await supabase.from("events").select();

  const upcomingEvents = data?.filter(
    (event) => DateTime.fromISO(event.scheduled_time) > DateTime.now()
  );

  const pastEvents = data?.filter(
    (event) => DateTime.fromISO(event.scheduled_time) <= DateTime.now()
  );

  return (
    <div>
      {upcomingEvents && upcomingEvents?.length > 0 && (
        <div className="my-8">
          <TypographyH2>Upcoming Events</TypographyH2>
          <div className="flex flex-row flex-wrap gap-4">
            {upcomingEvents?.map((event) => <EventCard event={event} />)}
          </div>
        </div>
      )}

      {pastEvents && pastEvents?.length > 0 && (
        <div className="my-8">
          <TypographyH2>Past Events</TypographyH2>
          <div className="flex flex-row flex-wrap gap-4">
            {pastEvents?.map((event) => <EventCard event={event} />)}
          </div>
        </div>
      )}
    </div>
  );
}
