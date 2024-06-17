"use client";

import { useState } from "react";
import useJobStore from "@/store/useJobStore";
import JobCard from "./JobCard";
import Button from "../ui/Button";

const Jobs = () => {
  const { filteredJobs } = useJobStore();
  const [visibleJobs, setvisibleJobs] = useState(8);
  const jobsIncrement = 4;

  const handleShowMore = () => {
    setvisibleJobs((prev) => prev + jobsIncrement);
  };
  return (
    <div id="jobs" className="py-10 w-full">
      <div className="w-full text-center mb-10 text-2xl font-extrabold capitalize text-black">
        <h2 className="text-3xl">Available <span className="text-purple-700">Jobs</span> For You</h2>
      </div>

      {filteredJobs.length < 1 ? (
        <div className="w-full text-center">
          <h1 className="text-2xl">No Jobs Found</h1>
          <span className="text-lg capitalize">Check back later</span>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 max-h-[1400px] gap-10 w-[90%] mx-auto max-w-[1450px]">
          {filteredJobs.slice(0, visibleJobs).map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}

      {filteredJobs.length > visibleJobs && (
        <div className="text-center mt-10 text-sm">
          <Button onClick={handleShowMore}>Show More</Button>
        </div>
      )}
    </div>
  );
};

export default Jobs;



// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis, ante eu laoreet imperdiet, erat sem vulputate nulla, ac ultrices lorem diam in sapien. Integer pulvinar, eros vitae accumsan auctor, quam dolor placerat lacus, sed mollis massa leo et diam. Duis tristique metus nec risus pretium maximus. Duis ullamcorper tincidunt ipsum at vulputate. Quisque leo risus, sollicitudin in orci nec, venenatis interdum lectus. Quisque iaculis commodo rutrum. Ut eros lectus, pellentesque a feugiat et, tincidunt et arcu. Quisque sit amet orci aliquet, cursus massa in, facilisis lectus. Nam fermentum orci nec quam iaculis, in fringilla tellus sagittis. Aliquam erat volutpat. Donec sit amet erat ut arcu posuere dapibus. Cras felis leo, laoreet id volutpat non, lobortis a orci. Donec sapien ex, congue sed ultrices vitae, facilisis placerat odio. Morbi sed dolor aliquet arcu semper mattis vitae et tortor. Vivamus nisi dolor, sodales ut ipsum at, sollicitudin tincidunt purus. Nam fringilla turpis ac dolor pulvinar, sit amet rutrum enim faucibus.In bibendum, velit eget aliquam finibus, massa turpis efficitur ligula, nec imperdiet lorem diam et massa. Nam sit amet faucibus metus, at vulputate felis. Nam sagittis maximus augue eget volutpat. Suspendisse posuere at elit nec suscipit. Sed quis magna non massa dapibus interdum et eget ligula. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ut tempus lectus. Sed fermentum placerat vulputate. Quisque sed condimentum tortor. Mauris id ullamcorper metus. Nullam vitae cursus lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies urna arcu, ac dapibus massa vestibulum sed. Morbi ut accumsan ligula.