import MerchMobile from "./MerchMobile";
import MerchTablet from "./MerchTablet";
import MerchDesktop from "./MerchDesktop";
import MerchXL from "./MerchXL";

export default function MerchPage() {
  return (
    <>
      <div className="show-on-mobile-only">
        <MerchMobile />
      </div>
      <div className="show-on-tablet">
        <MerchTablet />
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
