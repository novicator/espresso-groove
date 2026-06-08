import MenuMobile from "./MenuMobile";
import MenuTablet from "./MenuTablet";
import MenuDesktop from "./MenuDesktop";
import MenuXL from "./MenuXL";

export default function MenuPage() {
  return (
    <>
      <div className="show-on-mobile-only">
        <MenuMobile />
      </div>
      <div className="show-on-tablet">
        <MenuTablet />
      </div>
      <div className="hidden lg:block hide-on-xl">
        <MenuDesktop />
      </div>
      <div className="show-on-xl">
        <MenuXL />
      </div>
    </>
  );
}
