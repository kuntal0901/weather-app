import logo from "./assets/images/logo.svg";
import UnitsDropdown from "./UnitsDropdown";

export default function WeatherAppHeader() {
  return (
    <div className=" flex px-[64px] justify-between gap-2">
      <img src={logo} alt="image-logo" className="" />
      <UnitsDropdown />
    </div>
  );
}
