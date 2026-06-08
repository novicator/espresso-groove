import VinylMobile from "./VinylMobile";
import VinylTablet from "./VinylTablet";
import VinylDesktop from "./VinylDesktop";
import VinylXL from "./VinylXL";

export default function VinylPage() {
  return (
    <>
      <div className="show-on-mobile-only">
        <VinylMobile />
      </div>
      <div className="show-on-tablet">
        <VinylTablet />
      </div>
      <div className="hidden lg:block hide-on-xl">
        <VinylDesktop />
      </div>
      <div className="show-on-xl">
        <VinylXL />
      </div>
    </>
  );
}
