import Image from "next/image";
import "./globals.css";
import Button from "./(components)/Button";
import Badge from "./(components)/Badge";
import Card from "./(components)/Card";
import { cardData } from "./utils/cardData";
export default function Home() {
  return (
    <>
      <section id="welcomeSection" className="scroll-smooth pt-[7rem]">
        <div className="flex flex-col justify-center items-center w-full">
          <div role="img" aria-label="Entrust Home Page Image Banner" className="bg-homeBanner bg-entrustBannerFadeBlue bg-blend-soft-light bg-cover w-[90%] h-fit rounded-[60px] flex flex-row justify-center items-center px-10 md:justify-start">
            <div className="flex flex-col h-[30em] md:h-[35em] justify-center">
              <h1 className="text-entrustSubtleWhite text-3xl md:text-6xl font-bold drop-shadow-titleShadow">Welcome to</h1>
              <h1 className="text-entrustSubtleWhite text-4xl md:text-7xl font-bold drop-shadow-titleShadow pb-2">Entrust Shipping</h1>
              <h2 className="text-entrustSubtleWhite text-xl md:text-2xl font-bold drop-shadow-titleShadow pb-2">Your One-Stop Shop for Global Shipping and Logistics</h2>
              <Button className="lg:hidden items-center flex flex-col justify-center min-w-1/4 w-1/4 bg-entrustBlue text-white  hover:text-entrustBlue hover:bg-entrustSubtleWhite hover:border-entrustBlue">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>

      <section id="ourServices" className="py-5 px-5 md:px-20 text-entrustBlue">
        {/* <Badge className="">Our Services</Badge> */}
        <div className="flex flex-col sm:flex-row justify-between md:items-center w-full">
          <h3 className="text-lg font-semibold px-4">Our Services</h3>
          <div className="flex flex-col py-1 px-4">
            <h4 className="text-xl">Effortless Shipping, Seamless Logistics</h4>
            <h5 className="text-md">—We Move Your World.</h5>
          </div>
        </div>
        <div id="servicesCards" className="flex flex-col pb-5 gap-5 md:flex-row md:justify-center lg:justify-around flex-wrap flex-1 w-full h-max items-center">
          {cardData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>


    </>
  );
}
