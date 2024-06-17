import Hero from "@/components/shared/Hero";
import Jobs from "@/components/shared/Jobs";
import { prisma } from "@/lib/prisma";
const Home = async () => {
  const jobs = await prisma.jobPosting.findMany({});

  return (
    <>
      <Hero jobs={jobs} />
      <Jobs/>
    </>
  );
};
export default Home;
