import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div>
      {/* Main Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-20 mt-6">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href={"/"}>
            <Image src={"/logo.png"} alt="logo" width={68} height={48} />
          </Link>
        </div>


        {/* Search and Icons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center mt-4 md:mt-0">
          

          {/* Wishlist and Cart */}
          <div className="flex gap-5">
            
            <Link href='/shop/cart'>
              <button>
                <Image
                  src={"/cart.svg"}
                  alt="cart"
                  width={20}
                  height={16}
                />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t-[1px] border-t-slate-200 my-4 md:mx-28 mx-8" />
    </div>
  );
}
