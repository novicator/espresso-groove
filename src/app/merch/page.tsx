import MerchMobile from "./MerchMobile";
import MerchDesktop from "./MerchDesktop";
import MerchXL from "./MerchXL";

export default function MerchPage() {
  return (
    <>
      <div className="lg:hidden">
        <MerchMobile />
      </div>
      <div className="hidden lg:block xl:hidden">
        <MerchDesktop />
      </div>
      <div className="hidden xl:block">
        <MerchXL />
      </div>
    </>
  );
}
