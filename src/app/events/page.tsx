import EventsMobile from "./EventsMobile";
import EventsDesktop from "./EventsDesktop";

export default function EventsPage() {
  return (
    <>
      <div className="lg:hidden">
        <EventsMobile />
      </div>
      <div className="hidden lg:block">
        <EventsDesktop />
      </div>
    </>
  );
}
