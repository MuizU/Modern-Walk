import Image from "next/image";

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
        <div className="bg-white w-2xs h-120">
            <div className="flex flex-col align-center p-4 justify-center gap-2">
                <h6 className="text-center">{title}</h6>
                <Image src={image} alt={title} width={200} height={200} />
            </div>
            <div className="border border-transparent rounded-md flex flex-col justify-start  px-12 h-60 ">
                <p>{price}</p>
                <p className="multi-line-ellipsis text-sm h-20">{description}</p>
            </div>
        </div>
    )
}

export default ProductCard;