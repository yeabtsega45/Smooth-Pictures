import Home from "./home/page";
import Gallery from "./gallery/page";
import Work from "./work/page";
import Contact from "./contact/page";

export default function allPages() {
  return (
    <>
      <Home />
      <Gallery />
      <Work />
      <Contact />
    </>
  );
}
