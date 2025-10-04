import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/products"

const WomensPage = async () => {
    const productData = await getProducts() || [];
    const mensClothing = productData.filter(item => item.category === `women's clothing`);
    return (
        <div className="font-sans min-h-screen px-8 sm:p-20 bg-[#f5f5f5]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="flex flex-col gap-4 items-center sm:items-start w-full">
                    <h3 className="text-3xl font-bold text-[#0E0E0E] p-4">
                        Women&#39;s Clothing
                    </h3>
                    <div className="flex flex-row gap-10 justify-center flex-wrap sm:justify-start">
                        {mensClothing.map(item => (
                            <ProductCard
                                key={item.id}
                                category={item.category as `men's clothing`}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default WomensPage;