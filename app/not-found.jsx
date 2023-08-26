import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>404</h1>
      <h3>Esta pagina no existe, capo</h3>
      <Link href="/">Volver</Link>
    </>
  );
}
