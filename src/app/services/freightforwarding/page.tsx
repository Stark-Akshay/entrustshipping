import Banner from '@/app/(components)/Banner'
import NonLinkCard from '@/app/(components)/NonLinkCard'
import SecondaryCTA from '@/app/(components)/SecondaryCTA'
import { features } from '@/app/utils/cardData'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Plane, Ship, Truck } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

type Props = {}

export const metadata: Metadata = {
    title: "Freight Forwarding Services",
    description: "Entrust Shipping provides comprehensive freight forwarding solutions, including sea, air, and land transport. Efficient, secure, and seamless logistics for global shipping.",
    keywords: "Freight Forwarding, global logistics, sea freight, air freight, land freight, cargo transportation, supply chain management, Entrust Shipping",
    openGraph: {
        title: "Freight Forwarding Services | Entrust Shipping",
        description: "End-to-end freight forwarding solutions across sea, air, and land transport. Secure, reliable, and efficient global shipping with Entrust Shipping.",
        url: "https://www.entrustshipping.com/freight-forwarding",
        siteName: "Entrust Shipping",
        type: "article",
    },
    robots: "index, follow",
};

const frieghtforwarding = (props: Props) => {
    return (
        <div>
            <Banner titleOne='Freight Forwarding Services' description='End-to-End Logistics Solutions for Your Global Supply Chain' bgImage='bg-frieghtforwardingBanner' />
            <section className='py-5 px-5 flex flex-col w-full gap-5 lg:flex-row md:px-20 md:justify-between items-center'>
                <div id='detailsToTheLeft' className='w-[100%] lg:w-[70%] flex flex-col justify-center lg:justify-self-auto'>
                    <h3 className='text-xl md:text-2xl text-entrustBlue font-bold pb-2'>Complete Freight Forwarding Solutions</h3>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>As a leading freight forwarding service provider, we offer comprehensive logistics solutions that streamline your supply chain. Our expertise spans across sea, air, and land transport, ensuring your cargo reaches its destination efficiently and securely.</p>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>With our global network and experienced team, we handle everything from documentation to customs clearance, making international shipping seamless for our clients.</p>
                    <div className='flex flex-row justify-center md:justify-start'>
                        <SecondaryCTA location='/branches'>Get a Quote</SecondaryCTA>
                    </div>
                </div>
                <div className='rounded-[60px] w-full lg:w-auto'>
                    <Image src="/images/freightforwardingImageOne.webp" className='rounded-[40px]' height={1000} width={1000} alt={`Container ship at port representing Entrust Shipping's liner agency services`} />
                </div>
            </section>
            {/* Services Tabs */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-entrustBlue">Our Freight Services</h2>
                    <Tabs defaultValue="sea" className="w-full">
                        <TabsList className="text-[#004F81] grid w-full md:w-[400px] grid-cols-3 mx-auto mb-8">
                            <TabsTrigger value="sea" className='rounded-2xl data-[state=active]:shadow-2xl data-[state=active]:drop-shadow-xl data-[state=active]:text-[#004F81]'>Sea Freight</TabsTrigger>
                            <TabsTrigger value="air" className='rounded-2xl data-[state=active]:shadow-2xl data-[state=active]:drop-shadow-xl data-[state=active]:text-[#004F81]'>Air Freight</TabsTrigger>
                            <TabsTrigger value="land" className='rounded-2xl data-[state=active]:shadow-2xl data-[state=active]:drop-shadow-xl data-[state=active]:text-[#004F81]'>Land Freight</TabsTrigger>
                        </TabsList>
                        <TabsContent value="sea" className="mt-0">
                            <Card className='border-2 border-[rgba(0, 79, 129, 0.38)]'>
                                <CardContent className="p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Ship className="h-12 w-12 text-entrustBlue mb-4" />
                                            <h3 className="text-xl font-bold mb-4 text-[#004F81]">Sea Freight Solutions</h3>
                                            <ul className="space-y-2 text-[#004F81]">
                                                <li>• FCL (Full Container Load) shipping</li>
                                                <li>• LCL (Less than Container Load) consolidation</li>
                                                <li>• Break bulk and project cargo</li>
                                                <li>• Over Dimensional Cargo</li>
                                                <li>• Temperature-controlled containers</li>
                                                <li>• Global port coverage</li>
                                            </ul>
                                        </div>
                                        <div className="relative h-[300px]">
                                            <Image
                                                src="/images/seafreightImage.webp"
                                                alt="Sea freight"
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="air" className="mt-0">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Plane className="h-12 w-12 text-entrustBlue mb-4" />
                                            <h3 className="text-xl font-bold mb-4 text-[#004F81]">Air Freight Services</h3>
                                            <ul className="space-y-2 text-[#004F81]">
                                                <li>• Express air freight</li>
                                                <li>• Consolidated air freight</li>
                                                <li>• Charter services</li>
                                                <li>• Door-to-door delivery</li>
                                                <li>• Worldwide coverage</li>
                                            </ul>
                                        </div>
                                        <div className="relative h-[300px]">
                                            <Image
                                                src="/images/airfreightImage.webp"
                                                alt="Air freight"
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="land" className="mt-0">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <Truck className="h-12 w-12 text-entrustBlue mb-4" />
                                            <h3 className="text-xl font-bold mb-4 text-[#004F81]">Land Transportation</h3>
                                            <ul className="space-y-2 text-[#004F81]">
                                                <li>• FTL (Full Truck Load) services</li>
                                                <li>• LTL (Less than Truck Load) services</li>
                                                <li>• Cross-border transportation</li>
                                                <li>• Specialized equipment</li>
                                                <li>• Track and trace capability</li>
                                            </ul>
                                        </div>
                                        <div className="relative h-[300px]">
                                            <Image
                                                src="/images/landfreightImage.webp"
                                                alt="Land freight"
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12 text-entrustBlue">Why Choose Our Freight Forwarding</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="border-none shadow-lg rounded-[30px] flex flex-col items-center text-center w-80 ">
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
        </div>
    )
}

export default frieghtforwarding