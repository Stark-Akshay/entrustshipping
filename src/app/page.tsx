import Image from "next/image";
import "./globals.css";
import Button from "./(components)/Button";
import Badge from "./(components)/Badge";
import Card from "./(components)/Card";
import { cardData, coreValuesData } from "./utils/cardData";
import { Card as UICard, CardContent } from "@/components/ui/card";
import { Accordion } from "@radix-ui/react-accordion";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { timelineData, whyUsDetails } from "./utils/extraDetails";
import { CheckCircle, Circle } from "lucide-react";
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
        <div className="flex flex-col sm:flex-row justify-between md:items-center w-full pb-2">
          <h3 className="text-xl font-semibold px-4">Our Services</h3>
        </div>
        <div id="servicesCards" className="flex flex-col pb-5 gap-5 md:flex-row md:justify-center lg:justify-around flex-wrap flex-1 w-full h-max items-center">
          {cardData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 ">
        <div className="w-full mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-entrustBlue">Our Core Values</h2>
          <div>
            <Accordion type="single" collapsible className="w-full text-entrustBlue md:hidden">
              {coreValuesData.map((feature, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-semibold">{feature.cardTitle}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-entrustBlue">{feature.cardDescription}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="hidden flex-wrap justify-center gap-8 md:flex">
            {coreValuesData.map((feature, index) => (
              <UICard key={index} className="border-none shadow-lg rounded-[30px] flex flex-col items-center text-center w-80">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-entrustBlue p-3 w-12 h-12 flex items-center justify-center mb-4">
                    {<feature.Icon className='text-white' />}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-entrustBlue">{feature.cardTitle}</h3>
                  <p className="text-entrustBlue">{feature.cardDescription}</p>
                </CardContent>
              </UICard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl font-bold text-entrustBlue mb-2">25+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl font-bold text-entrustBlue mb-2">1000+</div>
              <p className="text-gray-600">Global Clients</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl font-bold text-entrustBlue mb-2">50+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="flex-1 min-w-[150px]">
              <div className="text-4xl font-bold text-entrustBlue mb-2">100%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-entrustBlue text-center">Our Journey</h2>
        <div className="relative border-l-4 border-entrustBlue pl-6">
          {timelineData.map((event, index) => (
            <div key={index} className="mb-8 flex items-start">
              <Circle className="w-6 h-6 text-entrustBlue -ml-[37px] bg-white rounded-full" />
              <UICard className="ml-6 w-full">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-entrustBlue">{event.title}</h3>
                  <span className="text-sm text-gray-500">{event.year}</span>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </CardContent>
              </UICard>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-entrustBlue mb-6">Why Choose Entrust Shipping</h2>
          {/* <p className="text-lg text-gray-700 max-w-7xl mx-auto mb-8">
            At <span className="font-semibold text-entrustBlue">Entrust Shipping</span>, we provide comprehensive logistics solutions that prioritize <span className="font-semibold text-entrustBlue">safety, efficiency, and customer satisfaction</span>. With a strong global network, advanced tracking systems, and a team of industry experts, we ensure a seamless supply chain experience for our clients.
          </p> */}
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {whyUsDetails.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 text-entrustBlue">
                <CheckCircle className="text-entrustBlue h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
