import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import MenuXL from "./MenuXL";

export default function MenuPage() {
  return (
    <>
      <div className="lg:hidden">
        <MenuMobile />
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
