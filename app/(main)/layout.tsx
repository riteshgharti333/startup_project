// app/(main)/layout.tsx
import Navbar from "../components/Navbar";
import Backgrounds from "../components/Backgrounds";
import Footer from "../components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Backgrounds />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}