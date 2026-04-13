import EventsMobile from "./EventsMobile";
import EventsDesktop from "./EventsDesktop";
import EventsXL from "./EventsXL";

export default function EventsPage() {
  return (
    <>
      <div className="lg:hidden">
        <EventsMobile />
      </div>
      <div className="hidden lg:block hide-on-xl">
        <EventsDesktop />
      </div>
      <div className="show-on-xl">
        <EventsXL />
      </div>
    </>
  );
}
