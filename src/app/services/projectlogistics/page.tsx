import Banner from '@/app/(components)/Banner'
import SecondaryCTA from '@/app/(components)/SecondaryCTA'
import { projectlogisticCardInfo } from '@/app/utils/cardData'
import { Card, CardContent } from '@/components/ui/card'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tabs } from '@radix-ui/react-tabs'
import { ChartGantt, FileCog, MonitorCog } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const projectlogistics = (props: Props) => {
    return (
        <>
            <Banner titleOne='Project Logistics' description='Tailored Solutions for Complex Logistics Challenges' bgImage='bg-projectlogisticsBanner' />
            <section className='py-5 px-5 flex flex-col w-full gap-5 lg:flex-row md:px-20 md:justify-between items-center'>
                <div id='detailsToTheLeft' className='w-[100%] lg:w-[70%] flex flex-col justify-center lg:justify-self-auto'>
                    <h3 className='text-xl md:text-2xl text-entrustBlue font-bold pb-2'>Project Logistic Leaders Across Continents</h3>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>Project freight is always different and requires a tailored approach. At Entrust Shipping, we excel at providing highly qualified project logistics services for project cargo mobilization and delivery.</p>
                    <p className='text-md md:text-lg text-entrustBlue font-light pb-2'>Our team possesses the technical know-how, versatility, and commitment to work around the clock, managing the complexities involved in large-scale projects.</p>
                    <div className='flex flex-row justify-center md:justify-start'>
                        <SecondaryCTA location='/contactus'>Contact Us</SecondaryCTA>
                    </div>
                </div>
                <div className='rounded-[60px] w-full lg:w-auto'>
                    <Image src="/images/projectlogisticsImage.webp" className='rounded-[40px]' height={1000} width={1000} alt={`Container ship at port representing Entrust Shipping's liner agency services`} />
                </div>
            </section>

            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-entrustBlue">Our Project Logistics Services</h2>
                    <Tabs defaultValue="planning" className="w-full">
                        <TabsList className="text-[#004F81] grid w-full md:w-[400px] grid-cols-3 mx-auto mb-8">
                            <TabsTrigger value="planning" className='rounded-2xl data-[state=active]:shadow-2xl data-[state=active]:drop-shadow-xl data-[state=active]:text-[#004F81]'>Planning</TabsTrigger>
                            <TabsTrigger value="execution" className='rounded-2xl data-[state=active]:shadow-2xl data-[state=active]:drop-shadow-xl data-[state=active]:text-[#004F81]'>Excecution</TabsTrigger>
                            <TabsTrigger value="monitoring" className='rounded-2xl data-[state=active]:shadow-2xl data-[state=active]:drop-shadow-xl data-[state=active]:text-[#004F81]'>Monitoring</TabsTrigger>
                        </TabsList>
                        <TabsContent value="planning" className="mt-0">
                            <Card className='border-2 border-[rgba(0, 79, 129, 0.38)]'>
                                <CardContent className="p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <ChartGantt className="h-12 w-12 text-entrustBlue mb-4" />
                                            <h3 className="text-xl font-bold mb-4 text-[#004F81]">Strategic Project Planning</h3>
                                            <ul className="space-y-2 text-[#004F81]">
                                                <li>• Customized and cost-effective solutions</li>
                                                <li>• Expertise & advice on ways to minimize freight costs</li>
                                                <li>• Global route optimization and planning</li>
                                            </ul>
                                        </div>
                                        <div className="relative h-[300px]">
                                            <Image
                                                src="/images/planningImage.webp"
                                                alt="Image of Planning"
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="execution" className="mt-0">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <FileCog className="h-12 w-12 text-entrustBlue mb-4" />
                                            <h3 className="text-xl font-bold mb-4 text-[#004F81]">Efficient Project Execution</h3>
                                            <ul className="space-y-2 text-[#004F81]">
                                                <li>• Specialized equipment for heavy and oversized cargo</li>
                                                <li>• On-site management & co-ordination with customers</li>
                                                <li>• Safety and security for movement of cargo</li>
                                            </ul>
                                        </div>
                                        <div className="relative h-[300px]">
                                            <Image
                                                src="/images/executionImage.webp"
                                                alt="Image of Execution"
                                                fill
                                                className="object-cover rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="monitoring" className="mt-0">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <MonitorCog className="h-12 w-12 text-entrustBlue mb-4" />
                                            <h3 className="text-xl font-bold mb-4 text-[#004F81]">Monitoring</h3>
                                            <ul className="space-y-2 text-[#004F81]">
                                                <li>• Real-time tracking and status updates</li>
                                                <li>• Monitoring cargo load to ensure proper loading/unloading</li>
                                                <li>• Optimization of cargo for movement and safe delivery</li>
                                            </ul>
                                        </div>
                                        <div className="relative h-[300px]">
                                            <Image
                                                src="/images/monitoringImage.webp"
                                                alt="Image of Monitoring"
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
                        {projectlogisticCardInfo.map((feature, index) => (
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
        </>
    )
}

export default projectlogistics