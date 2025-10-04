import Link from "next/link";
import { getBackgroundColor } from "../../utils/style";

type TProps = {
    category: string;
    label: string;
    href: string;
};
export function CategoryCard({ category, label, href }: TProps) {
    return (
        <Link
            href={href}
            className={`flex items-center justify-center text-white font-semibold text-xl sm:text-2xl rounded-2xl min-h-72 sm:h-48 transition-transform duration-200 hover:scale-[1.02] shadow-[10px_15px_20px_0px_#00000026] ${getBackgroundColor(
                category
            )}`}

        >
            {label}
        </Link>
    );
}

