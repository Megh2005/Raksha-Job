import Image from "next/image";

const About = () => {
  return (
    <div className="py-16 bg-gray-50/50 mt-10" id="about">
      <div className="w-[90%] mx-auto max-w-[1450px]">
        <h2 className="w-full text-4xl text-center mb-7 font-extrabold capitalize text-purple-700">
          About Raksha
        </h2>

        <div className="mt-2 w-full flex flex-col justify-center items-center">
          <p className="leading-loose font-bold text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
            dignissimos culpa beatae ducimus eligendi perspiciatis est, enim
            accusamus, fugit dicta natus a, ipsa dolores praesentium at
            voluptatibus aliquam ipsam incidunt dolorem repudiandae. Atque quam
            laborum dolore, nobis adipisci voluptatum aperiam dolores rem
            libero! Commodi impedit nesciunt labore adipisci eaque numquam vel
            vitae qui et doloremque explicabo iure odio perspiciatis aspernatur
            ut cupiditate, laudantium nam nisi quo doloribus asperiores deserunt
            ad accusamus laborum. Consequatur blanditiis quidem nostrum autem!
            Eum neque laborum ex ut fugit exercitationem in ab repudiandae,
            ratione maxime voluptas numquam fuga expedita fugiat maiores eius
            suscipit. Vero quos quae ullam expedita nam ut autem accusamus eius
            possimus doloremque deleniti aspernatur commodi quo voluptatum,
            neque reprehenderit dolores delectus, maxime aliquam quidem
            obcaecati accusantium labore molestias? Atque ut velit consequatur
            tempore beatae commodi harum, placeat saepe minus aliquid minima
            ratione praesentium, quod cupiditate, non reiciendis aut sequi
            voluptatem repellat! Accusamus officiis quod non omnis saepe
            perspiciatis eligendi iste labore, tenetur eveniet voluptate natus
            distinctio eos minima fugiat, recusandae unde! Cumque debitis libero
            dolor itaque minus aliquam laboriosam voluptatem magni quidem
            praesentium ipsam aspernatur repellat soluta vel fugiat omnis ipsum,
            fugit, enim beatae perspiciatis error facere et. Facere perspiciatis
            laboriosam odio blanditiis?
          </p>

          <Image
            src={"/sign.png"}
            width={300}
            height={300}
            alt="Raksha"
            className="py-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
