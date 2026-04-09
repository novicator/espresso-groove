import MerchMobile from "./MerchMobile";
import MerchDesktop from "./MerchDesktop";

export default function MerchPage() {
  return (
    <>
      <div className="lg:hidden">
        <MerchMobile />
      </div>
      <div className="hidden lg:block">
        <MerchDesktop />
      </div>
    </>
  );
}
