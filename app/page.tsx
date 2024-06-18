import About from "@/components/shared/About";
import Hero from "@/components/shared/Hero";
import Jobs from "@/components/shared/Jobs";
import Sponsors from "@/components/shared/Sponsors";
import { prisma } from "@/lib/prisma";
const Home = async () => {
  const jobs = await prisma.jobPosting.findMany({});

  return (
    <>
      <Hero jobs={jobs} />
      <Jobs/>
      <Sponsors />
      <About />
    </>
  );
};
export default Home;
