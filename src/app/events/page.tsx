import EventsMobile from "./EventsMobile";
import EventsTablet from "./EventsTablet";
import EventsDesktop from "./EventsDesktop";
import EventsXL from "./EventsXL";

export default function EventsPage() {
  return (
    <>
      <div className="show-on-mobile-only">
        <EventsMobile />
      </div>
      <div className="show-on-tablet">
        <EventsTablet />
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
