import Banner from '@/app/(components)/Banner'
import SecondaryCTA from '@/app/(components)/SecondaryCTA'
import { warehousingAccordionData } from '@/app/utils/accordionData'
import { warehousingCardInfo } from '@/app/utils/cardData'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

type Props = {}

const warehousing = (props: Props) => {
    return (
        <>
            <Banner titleOne='Warehousing Solutions' description='State-of-the-Art Storage and Distribution Facilities' bgImage='bg-warehousingBanner' />
            <section className='py-5 px-5 flex flex-col w-full gap-5 lg:flex-row md:px-20 md:justify-between items-center'>
                <div id='detailsToTheLeft' className='w-[100%] lg:w-[70%] flex flex-col justify-center lg:justify-self-auto'>
                    <h3 className='text-xl md:text-2xl text-entrustBlue font-bold pb-2'>Best-in-Class Warehousing Services</h3>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>Entrust Shipping provides comprehensive warehousing solutions through our well-managed distribution centers that seamlessly integrate with your supply chain operations.</p>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>Our warehouse management practices include overseeing all staff, training, inventory, equipment, safety and security, relationships with shipping carriers, and much more.</p>
                    <div className='flex flex-row justify-center md:justify-start'>
                        <SecondaryCTA location='/contactus'>Contact Us</SecondaryCTA>
                    </div>
                </div>
                <div className='rounded-[60px] w-full lg:w-auto'>
                    <Image src="/images/warehousingImage.webp" className='rounded-[40px]' height={1000} width={1000} alt={`Container ship at port representing Entrust Shipping's liner agency services`} />
                </div>
            </section>
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-entrustBlue">Our Warehousing Services</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {warehousingCardInfo.map((feature, index) => (
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

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-entrustBlue">Warehouse Management Features</h2>
                    <Accordion type="single" collapsible className="w-full text-entrustBlue">
                        {warehousingAccordionData.map((feature, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-semibold">{feature.accordionTitle}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-entrustBlue">{feature.accordionDescription}</p>
                                    <ul className="mt-4 space-y-2">
                                        {feature.bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-2">
                                                <div className="rounded-full bg-[#003366] p-1 mt-1">
                                                    <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                                                        <circle cx="4" cy="4" r="3" />
                                                    </svg>
                                                </div>
                                                <span className="text-entrustBlue">{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
        </>
    )
}

export default warehousing