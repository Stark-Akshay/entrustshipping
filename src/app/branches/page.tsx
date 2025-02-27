import { Metadata } from 'next'
import React from 'react'
import Banner from '../(components)/Banner'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'
import { branchesData } from '../utils/extraDetails'


export const metadata: Metadata = {
    title: "Our Branches",
    description: "Locate Entrust Shipping's offices in Mumbai, Chennai, Dubai, and more. Get in touch with our expert team for seamless logistics and shipping solutions.",
    keywords: "Entrust Shipping Branches, Logistics Offices, Shipping Company Locations, Contact Entrust Shipping, Dubai, Mumbai, Chennai, Delhi",
    openGraph: {
        title: "Entrust Shipping Branches | Find Our Offices Worldwide",
        description: "Entrust Shipping operates across multiple locations globally. Contact us at our offices in Mumbai, Dubai, Chennai, Cochin, and more.",
        url: "https://www.entrustshipping.com/branches",
        siteName: "Entrust Shipping",
        type: "article",
    },
    robots: "index, follow",
};

const branches = () => {
    return (
        <>
            <Banner titleOne='Our Branches' description='Serving You Across Multiple Locations' bgImage='bg-branchesBanner' />
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {branchesData.map((branch, index) => (
                            <Card key={index} className="overflow-hidden">
                                <CardHeader className="bg-entrustBlue text-white">
                                    <CardTitle className="text-xl">{branch.city}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3 text-entrustBlue">
                                            <MapPin className="w-5 h-5  mt-1 flex-shrink-0" />
                                            <p className="text-sm">{branch.address}</p>
                                        </div>
                                        <div className="flex items-center gap-3 text-entrustBlue">
                                            <Mail className="w-5 h-5  flex-shrink-0" />
                                            <a href={`mailto:${branch.email}`} className="text-sm  hover:underline">
                                                {branch.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3 text-entrustBlue">
                                            <Phone className="w-5 h-5  flex-shrink-0" />
                                            <a href={`tel:${branch.phone}`} className="text-sm  hover:underline">
                                                {branch.phone}
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </>

    )
}

export default branches