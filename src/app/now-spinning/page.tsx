import NowSpinningMobile from "./NowSpinningMobile";
import NowSpinningDesktop from "./NowSpinningDesktop";
import NowSpinningXL from "./NowSpinningXL";

export default function NowSpinningPage() {
  return (
    <>
      <div className="lg:hidden">
        <NowSpinningMobile />
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
