import Image from "next/image";

const Sponsors = () => {
  return (
    <section className="py-16">
      <div className="max-w-[1450px] w-[90%] mx-auto">
        <div className="w-full font-bold text-center">
          <h2 className="text-3xl">
            Some Big{" "}
            <span className="text-purple-600 font-bold">Giant Companies</span>{" "}
            Are Partnering Us
          </h2>
        </div>

        <div className="flex cursor-pointer justify-between items-center mt-8 flex-wrap gap-10">
          <Image
            src={"/airbnb.png"}
            alt="Airbnb logo"
            width={144}
            height={144}
          />
          <Image
            src={"/Discord.png"}
            alt="Discord logo"
            width={144}
            height={144}
          />
          <Image src={"/Slack.png"} alt="slack logo" width={144} height={144} />
          <Image
            src={"/Capitalone.png"}
            alt="CapitalOne logo"
            width={144}
            height={144}
          />
          <Image
            src={"/Dropbox.png"}
            alt="DropBox logo"
            width={144}
            height={144}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
