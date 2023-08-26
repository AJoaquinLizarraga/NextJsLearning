import Navbar from "../components/Navbar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "La app de Abel",
  description: "Generated by Next.js en una noche",
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
