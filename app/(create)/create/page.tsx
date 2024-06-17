import CreateForm from "../components/CreateForm";

const page = () => {
  return (
    <div className="max-w-[1450px] w-[90%] mx-auto">
      <div className="w-full mt-3 text-center">
        <h1 className="md:text-6xl text-4xl font-extrabold capitalize mb-1">
          Create <span className="text-purple-600">job</span>
        </h1>
        <span className="w-full text-center text-bold text-lg capitalize">
          Create a job which have flexible work hours
        </span>
      </div>
      <CreateForm />
    </div>
  );
};

export default page;
