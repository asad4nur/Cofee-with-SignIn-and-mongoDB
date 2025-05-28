import one from '../assets/images/icons/1.png';
import two from '../assets/images/icons/2.png';
import three from '../assets/images/icons/3.png';
import four from '../assets/images/icons/4.png';

const features = [
  { img: one, title: "Awesome Aroma", desc: "You will definitely be a fan of the design & aroma of your coffee." },
  { img: two, title: "High Quality", desc: "We serve the best quality coffee made with premium beans." },
  { img: three, title: "Pure Grades", desc: "Our coffee beans are sorted with great precision and care." },
  { img: four, title: "Proper Roasting", desc: "We ensure perfect roasting to enhance flavor and aroma." }
];

const Feature = () => {
  return (
    <div className=" bg-[#ECEAE3]/70">
      <div className="flex flex-wrap justify-between gap-6 max-w-10/12 mx-auto py-12 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-start w-full sm:w-[48%] lg:w-[23%] p-4"
          >
            <img src={feature.img} alt={feature.title} className="w-20 mb-4" />
            <h2 className="text-[#331A15] text-xl font-bold">{feature.title}</h2>
            <p className="text-sm text-[#1B1A1A]/70 mt-2">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
