import Link from "next/link"

export const Footer = () => {
  return (
    <footer>
      <Link href="/news">
        <p>See all news</p>
      </Link>
      <p>Powered by New York Times</p>
      <small>Copyright, 2022 News List</small>
    </footer>
  );
}
