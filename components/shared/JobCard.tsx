"use client";

import Link from "next/link";
import { jobType } from "@/types/jobTypes";
import Image from "next/image";

interface JobsCardProps {
  job: jobType;
}

const JobCard = ({ job }: JobsCardProps) => {
  return (
    <Link href={`/job/${job.id}`}>
      <div className="border w-[20rem] h-[17rem] p-3 font-bold rounded-md flex flex-col hover:bg-purple-600 outline-purple-600 outline transition duration-700 hover:text-white">
        <div className="flex flex-col gap-1 justify-between">
          <div className="gap-4">
            <Image
              src={job.img ? job.img : "/fallbackimage.png"}
              height={60}
              width={60}
              alt={`${job.author} logo`}
            />
          </div>
          <div>
            <h2>Recruiter : {job.author}</h2>
          </div>
          <div>
            <h2>Salary Per Month : {job.salary}</h2>
          </div>
          <div>
            <h2>Contact : {job.contact}</h2>
          </div>
          <div>
            <h2>Job Role : {job.name}</h2>
          </div>
          <div>
            <h2>Location : {job.location}</h2>
          </div>
        </div>

        <div className="py-2">
          <span className="bg-purple-800 text-sm font-bold my-[1rem] px-3 rounded-md text-white">
            {job.employmentType}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
