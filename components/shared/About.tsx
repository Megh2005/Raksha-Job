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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            quasi sed tempora sequi nemo ipsa non rerum, quaerat ratione
            reprehenderit vitae nobis animi impedit. Eos reiciendis nisi
            adipisci? In, optio! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Illum odio et magnam tempora quod voluptatibus
            nihil, modi doloremque laborum iusto ducimus nulla ad eligendi
            architecto totam quaerat repellendus fugit fugiat. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Possimus sint tempora
            voluptas sed consequuntur delectus, excepturi cupiditate nam
            doloribus provident atque id eligendi iure reiciendis vitae
            voluptatem nesciunt perferendis assumenda.
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
