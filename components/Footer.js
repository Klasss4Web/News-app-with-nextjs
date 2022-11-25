import Link from "next/link"

export const Footer = () => {
  return (
    <footer>
      <Link href="/news">
        <p>See all news</p>
      </Link>
      <small>Copyright, 2022 News List</small>
    </footer>
  );
}
