import VinylMobile from "./VinylMobile";
import VinylDesktop from "./VinylDesktop";
import VinylXL from "./VinylXL";

export default function VinylPage() {
  return (
    <>
      <div className="lg:hidden">
        <VinylMobile />
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
