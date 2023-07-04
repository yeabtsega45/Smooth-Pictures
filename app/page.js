import Home from "./home/page";
import Gallery from "./gallery/page";
import Work from "./work/page";
import Contact from "./contact/page";

export default function allPages() {
  return (
    <>
      <div className="bg-fixed bg-center bg-cover custom-img">
        <Home />
        <Gallery />
        <Work />
        <Contact />
      </div>
    </>
  );
}
