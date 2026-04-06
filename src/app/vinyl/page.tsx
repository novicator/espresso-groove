import VinylMobile from "./VinylMobile";
import VinylDesktop from "./VinylDesktop";

export default function VinylPage() {
  return (
    <>
      <div className="lg:hidden">
        <VinylMobile />
      </div>
      <div className="hidden lg:block">
        <VinylDesktop />
      </div>
    </>
  );
}
