import PageMobile from "./PageMobile";
import PageDesktop from "./PageDesktop";
import PageXL from "./PageXL";

export default function Home() {
  return (
    <>
      <div className="lg:hidden">
        <PageMobile />
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
