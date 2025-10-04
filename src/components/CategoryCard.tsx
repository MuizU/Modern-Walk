import Link from "next/link";
import { getBackgroundColor } from "../../utils/style";

type TCategoryCardProps = {
    category: string;
    label: string;
    href: string;
};
export function CategoryCard({ category, label, href }: TCategoryCardProps) {
    return (
        <Link
            href={href}
            className={`flex items-center justify-center text-white font-semibold text-lg rounded-xl h-40 w-full sm:w-64 transition-transform duration-200 hover:scale-105 shadow-[10px_15px_20px_0px_#00000026] ${getBackgroundColor(
                category
            )}`}
        >
            {label}
        </Link>
    );
}
