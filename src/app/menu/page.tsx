import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";
import MenuXL from "./MenuXL";

export default function MenuPage() {
  return (
    <>
      <div className="lg:hidden">
        <MenuMobile />
      </div>
      <div className="hidden lg:block xl:hidden">
        <MenuDesktop />
      </div>
      <div className="hidden xl:block">
        <MenuXL />
      </div>
    </>
  );
}
