import LocationButton from "./LocationButton";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="w-[100%] bg-white shadow-header pt-[40px] pb-[38px]">
      <div className="container mx-auto max-w-screen-sm pl-[32px]">
        <h1 className="text-sub3 text-neutral9 mb-[10px] font-medium">
          Browse our providers
        </h1>
        <h2 className="text-input3 text-neutral7 mb-[20px]">Mental Wellness</h2>
        <LocationButton />
        <NavMenu />
      </div>
    </div>
  );
}

export default Header;
