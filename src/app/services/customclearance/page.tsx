import Banner from '@/app/(components)/Banner'
import SecondaryCTA from '@/app/(components)/SecondaryCTA'
import { customclearanceAccordionData } from '@/app/utils/accordionData'
import { customclearanceCardData } from '@/app/utils/cardData'
import { benefits } from '@/app/utils/extraDetails'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

export const metadata: Metadata = {
    title: "Custom Clearance",
    description: "Entrust Shipping offers seamless customs clearance services, ensuring smooth and efficient processing of international shipments with regulatory compliance.",
    keywords: "Custom Clearance, Customs Brokerage, Duty Payment, Import Export, Freight Forwarding, Cargo Documentation, Entrust Shipping",
    openGraph: {
        title: "Custom Clearance | Hassle-Free Customs Solutions",
        description: "Expert customs clearance services with document preparation, legal compliance, and seamless cargo delivery. Let Entrust Shipping simplify your global trade.",
        url: "https://www.entrustshipping.com/customclearance",
        siteName: "Entrust Shipping",
        type: "article",

    },
    robots: "index, follow",
};

const customclearance = () => {
    return (
        <>
            <Banner titleOne='Custom Clearance' description='Effortless Customs Solutions for Your Global Trade' bgImage='bg-customclearanceBanner' />
            <section className='py-5 px-5 flex flex-col w-full gap-5 lg:flex-row md:px-20 md:justify-between items-center'>
                <div id='detailsToTheLeft' className='w-[100%] lg:w-[70%] flex flex-col justify-center lg:justify-self-auto'>
                    <h3 className='text-xl md:text-2xl text-entrustBlue font-bold pb-2'>Experienced Custom Clearance Agents</h3>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>At Entrust Shipping, we have an experienced team of custom clearance agents with about two decades of expertise.</p>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>Our tie-ups with all ports across the globe help us confidently assure our clients of an effortless customs clearance experience.</p>
                    <div className='flex flex-row justify-center md:justify-start'>
                        <SecondaryCTA location='/contactus'>Contact Us</SecondaryCTA>
                    </div>
                </div>
                <div className='rounded-[60px] w-full lg:w-auto'>
                    <Image src="/images/customclearanceImage.webp" className='rounded-[40px]' height={1000} width={1000} alt={`Container ship at port representing Entrust Shipping's liner agency services`} />
                </div>
            </section>
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-entrustBlue">Warehouse Management Features</h2>
                    <Accordion type="single" collapsible className="w-full text-entrustBlue">
                        {customclearanceAccordionData.map((feature, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-semibold">{feature.accordionTitle}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-entrustBlue">{feature.accordionDescription}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-entrustBlue">Our Warehousing Services</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {customclearanceCardData.map((feature, index) => (
                            <Card key={index} className="border-none shadow-lg rounded-[30px] flex flex-col items-center text-center w-80">
                                <CardContent className="pt-6">
                                    <div className="rounded-full bg-entrustBlue p-3 w-12 h-12 flex items-center justify-center mb-4">
                                        {<feature.Icon className='text-white' />}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-entrustBlue">{feature.cardTitle}</h3>
                                    <p className="text-entrustBlue">{feature.cardDescription}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            <section className=" py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-entrustBlue">Additional Benefits</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-start gap-4 text-entrustBlue">
                                <CheckCircle className="text-entrustBlue h-6 w-6 mt-1 flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                                    <p>{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default customclearance