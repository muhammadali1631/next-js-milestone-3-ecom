import { FiTruck } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { CiCreditCard1 } from "react-icons/ci";


const Services = () => {
    const services = [
      {
        title: "Free Shipping & Return",
        description: "On all order over $99.00",
        icon: FiTruck,
        bgColor: "bg-orange-100",
      },
      {
        title: "Customer Support 24/7",
        description: "Instant access to support",
        icon: BiSupport,
        bgColor: "bg-lime-100",
      },
      {
        title: "100% Secure Payment",
        description: "We ensure secure payment!",
        icon: CiCreditCard1,
        bgColor: "bg-pink-100",
      },
    ];
  
    return (
      <div className="flex justify-center flex-wrap gap-6 py-10 px-4 md:px-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`text-xl flex flex-wrap min-h-40 items-center space-x-4 p-6 rounded-lg w-[90vw] sm:w-[30%] justify-center ${service.bgColor}`}
          >
            <div className="text-blue-900 text-4xl"><service.icon/></div>
            <div>
              <h3 className="font-bold text-blue-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Services;
  