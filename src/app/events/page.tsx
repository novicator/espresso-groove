import EventsMobile from "./EventsMobile";
import EventsDesktop from "./EventsDesktop";
import EventsXL from "./EventsXL";

export default function EventsPage() {
  return (
    <>
      <div className="lg:hidden">
        <EventsMobile />
      </div>
      <div className="hidden lg:block xl:hidden">
        <EventsDesktop />
      </div>
      <div className="hidden xl:block">
        <EventsXL />
      </div>
    </>
  );
}
