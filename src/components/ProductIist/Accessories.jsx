import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/action";
import { useNavigate } from "react-router";
import Addbutton from "../AddButton/Addbutton";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MR2U3ref_FV442_GEO_IN?wid=1420&hei=930&fmt=png-alpha&.v=1677267704914",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MNWP3_GEO_IN?wid=532&hei=582&fmt=png-alpha&.v=1678377335734",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQU73?wid=532&hei=582&fmt=png-alpha&.v=1676920930838",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK0C2?wid=532&hei=582&fmt=png-alpha&.v=1564075356758",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU862?wid=532&hei=582&fmt=png-alpha&.v=1591824860000",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export default function Accessories() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/AddToCart");
    console.log("object656565", product);
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
              <Addbutton product={product} onclick={handleAddToCart} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
