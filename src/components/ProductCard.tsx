import Image from "next/image";
import { getBackgroundColor } from "../../utils/style";

export type TProps = {
    category: `men's clothing` | `women's clothing`;
    price: number;
    title: string;
    description: string;
    image: string;
}
const ProductCard = ({
    category,
    price,
    title,
    description,
    image
}: TProps) => {
    return (
        <div className="bg-white w-2xs h-100 rounded-lg flex flex-col card-shadow">
            <div className="flex flex-col gap-2 items-center p-4 ">
                <h6 className="text-center">{title}</h6>
                <Image src={image} alt={title} width={100} height={100} />
            </div>
            <div className={`border border-transparent rounded-lg flex flex-col align-center justify-start  px-12 py-4 max-h-100 gap-2 ${getBackgroundColor(category)} mt-auto`}>
                <p className="text-center text-lg font-bold text-[#0E42FD]">Rs {price}</p>
                <p className="line-clamp-4  text-ellipsis text-sm h-20">{description}</p>
            </div>
        </div>
    )
}

export default ProductCard;