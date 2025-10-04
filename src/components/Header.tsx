import Link from "next/link"

const Header = ({ title, loc }: { title?: string, loc?: string }) => {
    return (
        <header className="w-full py-6 text-[#0E0E0E] text-center text-6xl font-bold border border-[#D9D9D9] border-b-4 border">
            <Link href={loc || '/'}>
                {title || 'Modern Walk'}
            </Link>

        </header>
    )
}

export default Header;