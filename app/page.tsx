import Banner from "./components/Banner";
import Choose from "./components/Choose";
import FAQ from "./components/FAQ";
import Review from "./components/Review";
import Service from "./components/Service";
import Stats from "./components/Stats";
import Team from "./components/Team";

export default function Home() {
  return (
    <div>
      <Banner />
      <Service />
      <Choose />
      <Review />
      <Stats />
      <Team />
      <FAQ />
    </div>
  );
}
