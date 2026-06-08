import PageMobile from "./PageMobile";
import PageTablet from "./PageTablet";
import PageDesktop from "./PageDesktop";
import PageXL from "./PageXL";

export default function Home() {
  return (
    <>
      <div className="show-on-mobile-only">
        <PageMobile />
      </div>
      <div className="show-on-tablet">
        <PageTablet />
      </div>
      <div className="hidden lg:block hide-on-xl">
        <PageDesktop />
      </div>
      <div className="show-on-xl">
        <PageXL />
      </div>
    </>
  );
}
