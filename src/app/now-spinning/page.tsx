import NowSpinningMobile from "./NowSpinningMobile";
import NowSpinningDesktop from "./NowSpinningDesktop";
import NowSpinningXL from "./NowSpinningXL";

export default function NowSpinningPage() {
  return (
    <>
      <div className="lg:hidden">
        <NowSpinningMobile />
      </div>
      <div className="hidden lg:block xl:hidden">
        <NowSpinningDesktop />
      </div>
      <div className="hidden xl:block">
        <NowSpinningXL />
      </div>
    </>
  );
}
