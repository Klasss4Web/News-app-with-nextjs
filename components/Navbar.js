import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <Image width={40} height={40} src="/newsFeed.jpg" alt="logo" />
        </div>
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/news">News Listing</Link>
        <Link href="/categories">All Categories</Link>
      </nav>
    </header>
  );
};
