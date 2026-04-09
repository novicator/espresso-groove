import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

export default function MenuPage() {
  return (
    <>
      <div className="lg:hidden">
        <MenuMobile />
      </div>
      <div className="hidden lg:block">
        <MenuDesktop />
      </div>
    </>
  );
}
