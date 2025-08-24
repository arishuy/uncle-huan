import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Contact } from "@/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <About />
        <Menu />
        <Contact />
      </main>
    </div>
  );
}