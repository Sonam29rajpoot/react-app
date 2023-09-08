import { useEffect, useState } from "react";
import { products } from "../ProductIist/data";
import ProductItem from "../ProductIist/ProductItem";
import { useParams } from "react-router-dom";
const homeData = [
  {
    id: 1,
    name: "Accessories",
    // href: "/Accessories",
    shopNow: "Shop Now",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MR2U3ref_FV442_GEO_IN?wid=1420&hei=930&fmt=png-alpha&.v=1677267704914",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    category: "accessories",
  },
  {
    id: 2,
    name: "Women T-Shirts",
    // href: "/WomenTShirts",
    shopNow: "Shop Now",
    imageSrc:
      "https://assets.ajio.com/medias/sys_master/root/20221004/xOtJ/633b32f1aeb269659c22ee3a/-473Wx593H-441147534-lilac-MODEL.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    category: "women",
  },
  {
    id: 3,
    name: "Men's T-shirts",
    // href: "/MenTShirts",
    imageSrc:
      "https://imagescdn.louisphilippe.com/img/app/product/8/885817-10658214.jpg?q=75&auto=format&w=342",
    imageAlt: "Front of men's Basic Tee in black.",
    shopNow: "Shop Now",
    color: "Black",
    category: "man",
  },
  {
    id: 4,
    name: "Kid's Clothes",
    // href: "/Kids",
    imageSrc:
      "https://mamaandpeaches.com/cdn/shop/files/DSC_8219.jpg?v=1683718648&width=750",
    imageAlt: "Front of men's Basic Tee in black.",
    shopNow: "Shop Now",
    color: "Black",
    category: "kids",
  },
];

export default function CategoryProducts() {
  const [data, setData] = useState(products);
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    const newProductList = products.filter(
      (item) => item.category === productId
    );
    setData(newProductList);
  }, []);

  //from url get product id; and apply the data according to it.

  const filteredresult = (cartItem) => {
    const productResult = products.filter((currentData) => {
      return currentData.category === cartItem;
    });
    setData(productResult);
    console.log("productResult", productResult);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <h1>Shop By Categories</h1>
        <button
          style={{
            border: "1px solid black",
            padding: "3px",
            margin: "2px",
            backgroundColor: "cadetblue",
          }}
          onClick={() => filteredresult("Men")}
        >
          Man
        </button>
        <button
          style={{
            border: "1px solid black",
            padding: "3px",
            margin: "2px",
            backgroundColor: "cadetblue",
          }}
          onClick={() => filteredresult("women")}
        >
          Women
        </button>
        <button
          style={{
            border: "1px solid black",
            padding: "3px",
            margin: "2px",
            backgroundColor: "cadetblue",
          }}
          onClick={() => filteredresult("accessories")}
        >
          Accessories
        </button>
        <button
          style={{
            border: "1px solid black",
            padding: "3px",
            margin: "2px",
            backgroundColor: "cadetblue",
          }}
          onClick={() => filteredresult("kids")}
        >
          Kids
        </button>

        <div className="">
          {/* {homeData.map((productVal) => {
            const { id, imageSrc, imageAlt, name, shopNow } = productVal;
            return (
              // <a key={product.id} href={product.href} className="group">
              <a key={id} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
                <button className="mt-1 text-lg font-medium text-gray-900">
                  {shopNow}
                </button>
              </a>
            );
          })} */}
          <ProductItem products={data} />
        </div>
      </div>
    </div>
  );
}
