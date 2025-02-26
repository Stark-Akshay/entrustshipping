import {
  LucideProps,
  Ship,
  Truck,
  Scale,
  Anchor,
  Globe,
  Clock,
  Shield,
  Building2,
  Users,
  BarChart,
  Package,
  ClipboardCheck,
  BarChart3,
} from "lucide-react";

export type featuresDataType = Omit<cardDataType, "location" | "id">;

export interface cardDataType {
  id: number;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  cardTitle: string;
  cardDescription: string;
  location: string;
}
//home page card data
export const cardData: cardDataType[] = [
  {
    id: 1,
    Icon: Ship,
    cardTitle: "Liner Agency",
    cardDescription:
      "Entrust Shipping has built a huge amount of goodwill and established itself as a trustworthy and reputed liner agency. We are agents for some of the renowned container lines providing services in various cities across the world.",
    location: "/services/lineragency",
  },
  {
    id: 2,
    Icon: Truck,
    cardTitle: "Freight Forwarding",
    cardDescription:
      "As a freight forwarding service provider, we offer a logistics service that provides tailored solutions for ocean freight, air freight, rail and road transport. We are equipped to meet local, national and global customer requirements.",
    location: "/services/freightforwarding",
  },
  {
    id: 3,
    Icon: Scale,
    cardTitle: "Custom Clearance",
    cardDescription:
      "Our experience of more than two decades as well as our tie ups with all ports across the globe helps us confidently assure our clients of an effortless customs clearance.",
    location: "/services/customclearance",
  },
];

//liner agency page data.
export const agencyServicesData: Omit<cardDataType, "location">[] = [
  {
    id: 1,
    Icon: Anchor,
    cardTitle: "Port Operations",
    cardDescription:
      "Comprehensive port operations management including vessel handling, cargo operations, and documentation.",
  },
  {
    id: 2,
    Icon: Globe,
    cardTitle: "Global Network",
    cardDescription:
      "Access to our extensive network of ports and partners worldwide for seamless shipping solutions.",
  },
  {
    id: 3,
    Icon: Clock,
    cardTitle: "24/7 Support",
    cardDescription:
      "Round-the-clock assistance and monitoring of vessel operations and cargo movement.",
  },
  {
    id: 4,
    Icon: Shield,
    cardTitle: "Compliance Management",
    cardDescription:
      "Ensuring all operations comply with local and international maritime regulations.",
  },
  {
    id: 5,
    Icon: Building2,
    cardTitle: "Port Coordination",
    cardDescription:
      "Efficient coordination with port authorities and terminal operators for smooth operations.",
  },
  {
    id: 6,
    Icon: Users,
    cardTitle: "Customer Service",
    cardDescription:
      "Dedicated customer service team providing personalized attention to clients.",
  },
];

//freight forwarding page card data
export const features: featuresDataType[] = [
  {
    Icon: Globe,
    cardTitle: "Global Network",
    cardDescription: "Access to worldwide logistics network and partners",
  },
  {
    Icon: BarChart,
    cardTitle: "Cost Effective",
    cardDescription: "Competitive rates and optimized routing solutions",
  },
  {
    Icon: Clock,
    cardTitle: "24/7 Support",
    cardDescription: "Round-the-clock customer service and cargo tracking",
  },
  {
    Icon: Shield,
    cardTitle: "Secure Handling",
    cardDescription: "Advanced cargo protection and insurance options",
  },
];

//warehousing page card data

export const warehousingCardInfo: featuresDataType[] = [
  {
    Icon: Package,
    cardTitle: "Storage Solutions",
    cardDescription:
      "Secure storage facilities with modern inventory management systems",
  },
  {
    Icon: ClipboardCheck,
    cardTitle: "Inventory Management",
    cardDescription: "Real-time tracking and inventory control systems",
  },
  {
    Icon: Truck,
    cardTitle: "Distribution",
    cardDescription: "Seamless distribution and logistics services",
  },
  {
    Icon: Shield,
    cardTitle: "Security",
    cardDescription: "24/7 security monitoring and access control",
  },
  {
    Icon: BarChart3,
    cardTitle: "Reporting",
    cardDescription: "Detailed analytics and performance reporting",
  },
];
