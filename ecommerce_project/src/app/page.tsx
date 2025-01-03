import Image from "next/image";
import Header from "./components/Header";
import Link from "next/link";

// Define types for Product and Category
interface Product {
  id: number;
  name: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  discount: string;
  price: number;
  originalPrice: number;
}

interface Category {
  id: number;
  name: string;
  image: string;
  bgColor: string;
  textColor?: string;
}

export default async function Home() {

  const categories: Category[] = [
    { id: 1 , name: 'Phones', image: '/Category-CellPhone.svg', bgColor: '' },
    { id: 2 , name: 'Computers', image: '/Category-Computer.svg', bgColor: '' },
    { id: 3 , name: 'Smart Watches', image: '/Category-SmartWatch.svg', bgColor: '' },
    { id: 4 , name: 'Camera', image: '/Category-Camera.svg', bgColor: 'bg-[#DB4444]', textColor: 'text-white' },
    { id: 5 , name: 'Head Phones', image: '/Category-Headphone.svg', bgColor: '' },
    { id: 6 , name: 'Gaming', image: '/Category-Gamepad.svg', bgColor: '' }
  ];

  let products: Product[] = [];

  let a = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/products`);
  let b = await a.json();
  products = b;  

  return (
    <div className="Main mx-6 md:mx-28">

      {/* products section */}
      <div className="Month mt-20">
        <div className="flex items-center">
          <div className="w-5 h-10 rounded-md bg-[#DB4444] flex items-center"></div>
          <p className="ml-3 text-[#DB4444] font-semibold">This Month</p>
        </div>

        <div className="Today's mt-6 mb-14 flex justify-between gap-6 md:gap-20 items-baseline">
          <div className="text-3xl font-semibold">Best Selling Products</div>
          <div className="">
            {/* <button className="border-[1px] py-4 px-12 rounded text-white bg-[#DB4444]">View All</button> */}
          </div>
        </div>
      </div>

      <div className="BestProducts flex justify-between flex-wrap gap-6">
        {products.map((product: Product) => (
          <Link href={`${product.name}`} key={product.id}>
            <div className="Product w-full sm:w-[270px] h-[350px] flex flex-col gap-3 items-center text-center">
              <div className="w-full sm:w-[270px] h-[250px] hover:scale-105 bg-[#F5F5F5] rounded relative">
                <div className="h-[26px] w-[55px] bg-[#DB4444] absolute top-3 left-3 text-white flex items-center justify-center">
                  {product.discount}
                </div>
                <div className="w-full sm:w-[270px] h-[200px] flex justify-center items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={product.imageWidth}
                    height={product.imageHeight}
                  />
                </div>
              </div>
              <div>
                <p className="font-semibold">{product.name}</p>
                <p className="flex gap-5 justify-center">
                  <span className="text-[#DB4444] text-[18px] font-semibold">${product.price}</span>
                  <span className="text-gray-500 font-semibold">
                    <s>${product.originalPrice}</s>
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Category Section */}
      <div className="py-10">
        <div className="categories">
          <div className="mt-20 w-5 h-10 rounded-md bg-[#DB4444] font-semibold flex items-center">
            <span className="ml-8 text-[#DB4444]">Categories</span>
          </div>

          <div className="Today's mb-14 mt-6 flex justify-between gap-6 md:gap-20 items-baseline">
            <div className="text-3xl font-semibold">Browse By Category</div>
          </div>
        </div>

        <div className="flex justify-between mb-6 flex-wrap gap-4">
          {categories.map((category: Category) => (
            <div
              key={category.id}
              className={`product1 w-full sm:w-[170px] h-[145px] border-2 border-slate-300 flex flex-col justify-center items-center gap-3 ${category.bgColor}`}
            >
              <div>
                <Image src={category.image} alt={category.name} width={56} height={56} />
              </div>
              <div>
                <p className={category.textColor || ''}>{category.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
