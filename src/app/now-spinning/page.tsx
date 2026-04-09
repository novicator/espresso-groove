import NowSpinningMobile from "./NowSpinningMobile";
import NowSpinningDesktop from "./NowSpinningDesktop";

export default function NowSpinningPage() {
  return (
    <>
      <div className="lg:hidden">
        <NowSpinningMobile />
      </div>
      <div className="hidden lg:block">
        <NowSpinningDesktop />
      </div>
    </>
  );
}
