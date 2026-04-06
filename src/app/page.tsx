import PageMobile from "./PageMobile";
import PageDesktop from "./PageDesktop";

export default function Home() {
  return (
    <>
      <div className="lg:hidden">
        <PageMobile />
      </div>
      <div className="hidden lg:block">
        <PageDesktop />
      </div>
    </>
  );
}
