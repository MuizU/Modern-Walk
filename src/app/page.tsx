import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/services/products";
import { getFlashSales } from "../../utils/sales";
import { CategoryCard } from "@/components/CategoryCard";

export default async function Home() {
  const productData = await getProducts() || [];
  const flashSales = getFlashSales(productData);
  const buttonOptions = [
    {
      id: `men's clothing`,
      label: 'Men\'s Clothing',
      href: '/mens-clothing'
    },
    {
      id: `women's clothing`,
      label: 'Women\'s Clothing',
      href: '/womens-clothing'
    }
  ]
  return (
    <div className="font-sans min-h-screen px-8 sm:p-20 bg-[#f5f5f5]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-center sm:items-start">
          <h3 className="text-3xl font-bold text-[#0E0E0E] p-0">Flash Sale</h3>
          <div className="flex flex-row gap-10 justify-start flex-wrap">
            {flashSales.map(item => (
              <ProductCard
                key={item.id}
                category={item.category as `men's clothing` | `women's clothing`}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start w-full">
          <h3 className="text-3xl font-bold text-[#0E0E0E] p-0">Categories</h3>
          <div className="grid grid-cols-2 gap-8 w-full">
            {buttonOptions.map((btn) => (
              <CategoryCard
                key={btn.label}
                category={btn.id}
                label={btn.label}
                href={btn.href}
              />
            ))
            }
          </div>
        </div>
      </main>
    </div>
  );
}
