import VinylMobile from "./VinylMobile";
import VinylDesktop from "./VinylDesktop";
import VinylXL from "./VinylXL";

export default function VinylPage() {
  return (
    <>
      <div className="lg:hidden">
        <VinylMobile />
      </div>
      <div className="hidden lg:block xl:hidden">
        <VinylDesktop />
      </div>
      <div className="hidden xl:block">
        <VinylXL />
      </div>
    </>
  );
}
