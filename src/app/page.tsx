import PageMobile from "./PageMobile";
import PageDesktop from "./PageDesktop";
import PageXL from "./PageXL";

export default function Home() {
  return (
    <>
      <div className="lg:hidden">
        <PageMobile />
      </div>
      <div className="hidden lg:block xl:hidden">
        <PageDesktop />
      </div>
      <div className="hidden xl:block">
        <PageXL />
      </div>
    </>
  );
}
