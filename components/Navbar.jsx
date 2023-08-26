import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ background: "lightblue" }}>
      <h1>
        <Link href="/">esta es la barra de navegacion que va al home</Link>
      </h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/showroom">ShowRoom</Link>
        </li>
        <li>
          <Link href="/showroom/laptops">Laptops</Link>
        </li>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
