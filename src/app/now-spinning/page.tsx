import NowSpinningMobile from "./NowSpinningMobile";
import NowSpinningTablet from "./NowSpinningTablet";
import NowSpinningDesktop from "./NowSpinningDesktop";
import NowSpinningXL from "./NowSpinningXL";

export default function NowSpinningPage() {
  return (
    <>
      <div className="show-on-mobile-only">
        <NowSpinningMobile />
      </div>
      <div className="show-on-tablet">
        <NowSpinningTablet />
      </div>
      <div className="hidden lg:block hide-on-xl">
        <NowSpinningDesktop />
      </div>
      <div className="show-on-xl">
        <NowSpinningXL />
      </div>
    </>
  );
}
