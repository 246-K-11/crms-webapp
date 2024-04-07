import HomeLayout from "./components/HomepageCards/HomeLayout";
import Carousel from "./components/HomepageCards/HomeCarousel";

export default function Home() {
  return (
    <main>
      <div>
        <Carousel />
      </div>
      <HomeLayout />
    </main>
  );
}
