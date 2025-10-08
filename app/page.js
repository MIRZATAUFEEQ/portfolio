import About from "./components/About";
import Blogs from "./components/Blog";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Projects from "./components/Project";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Blogs />
      <Newsletter />
    </main>
  );
} 