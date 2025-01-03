import Image from "next/image"
import Link from "next/link"

function Footer() {
    return (
        <div className="bg-black">
            <div className="flex flex-col md:flex-row justify-between bg-black text-[#FAFAFA] px-6 md:px-28 pt-5 pb-20">
                {/* Subscribe Section */}
                <div className="flex flex-col gap-4">
                    <div>
                        <Image src={"/logo.png"} alt="" width={60} height={60} />
                    </div>
                    <div className="text-xl">Subscribe</div>
                    <div>Get 10% off your first order</div>
                    <div>
                        <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            className="bg-black text-[#FAFAFA] border-[#FAFAFA] border-2 rounded p-2 w-full md:w-auto"
                        />
                    </div>
                </div>

                {/* Support Section */}
                <div className="flex flex-col gap-4 mt-6 md:mt-0">
                    <div className="text-xl">Support</div>
                    <div>Phase 2, DHA, Karachi,<br /> Pakistan</div>
                    <div>exclusive@gmail.com</div>
                    <div>+92-000-1234567</div>
                </div>

                {/* Account Section */}
                <div className="flex flex-col gap-4 mt-6 md:mt-0">
                    <div className="text-xl">Account</div>
                    <div>My Account</div>
                    <div>Login / Register</div>
                    <div>Cart</div>
                    <div>Wishlist</div>
                    <div>Shop</div>
                </div>

                {/* Quick Links Section */}
                <div className="flex flex-col gap-4 mt-6 md:mt-0">
                    <div className="text-xl">Quick Link</div>
                    <div>Privacy Policy</div>
                    <div>Terms of Use</div>
                    <div>FAQ</div>
                    <div>Contact</div>
                </div>

                {/* Download App Section */}
                <div className="flex flex-col gap-4 mt-6 md:mt-0">
                    <div className="text-xl">Download App</div>
                    <div className="text-xs">Save $3 with App New User Only</div>
                    <div><Image src={"/Footer code.svg"} alt="" width={150} height={50} /></div>
                    <div className="flex gap-6 md:gap-7">
                        <div><Link href={"#"}><Image src={"/fb.svg"} alt="" width={10} height={10} /></Link></div>
                        <div><Link href={"#"}><Image src={"/twitter.svg"} alt="" width={18} height={10} /></Link></div>
                        <div><Link href={"#"}><Image src={"/insta.svg"} alt="" width={18} height={10} /></Link></div>
                        <div><Link href={"#"}><Image src={"/linkedin.svg"} alt="" width={16} height={10} /></Link></div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t-[1px] flex items-center justify-center gap-1 text-slate-300 border-t-slate-200 py-2 w-full text-center">
                <span className="text-[24px]">&copy;</span> Copyright Owais 2024. All rights reserved
            </div>
        </div>
    );
}

export default Footer;
