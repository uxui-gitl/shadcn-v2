import Image from "next/image";

function Navbar() {
  return (
    <>
      <div className="navbar-wrapper bg-[#04192d] mt-4">
        <div className="container flex justify-between items-center">
          <div className="">
            <Image
              src={"/godrejLogoWhite.svg"}
              alt="Godrej Infotech Logo"
              width={232}
              height={78}
              priority={true}
            />
          </div>
          <div className="flex-row justify-center items-center hidden sm:flex">
            <div className="mr-8 text-sm">Solutions</div>
            <div className="mr-8 text-sm">Services</div>
            <div className="mr-8 text-sm">Industry Focus</div>
            <div className="mr-8 text-sm">About us</div>
            <div className="mr-8 text-sm">Careers</div>
            <button className="rounded-full">Save Changes</button>
          </div>
          <div className="flex sm:hidden">
            <Image
              src={"/icon/side-menu.svg"}
              alt="Godrej Infotech Logo"
              width={50}
              height={50}
              priority={true}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
