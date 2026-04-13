import MerchMobile from "./MerchMobile";
import MerchDesktop from "./MerchDesktop";
import MerchXL from "./MerchXL";

export default function MerchPage() {
  return (
    <>
      <div className="lg:hidden">
        <MerchMobile />
      </div>
      <div className="hidden lg:block hide-on-xl">
        <MerchDesktop />
      </div>
      <div className="show-on-xl">
        <MerchXL />
      </div>
    </>
  );
}
