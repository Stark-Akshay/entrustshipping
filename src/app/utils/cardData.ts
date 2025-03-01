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
  Cog,
  FileText,
  Target,
  Award,
  Lightbulb,
  Handshake,
  Leaf,
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

export const projectlogisticCardInfo: featuresDataType[] = [
  {
    Icon: Globe,
    cardTitle: "Global Expertise",
    cardDescription:
      "Broad domestic and international experience in handling complex logistics projects.",
  },
  {
    Icon: Cog,
    cardTitle: "Tailored Solutions",
    cardDescription:
      "Customized approach for each project, no matter how big, bulky, or non-standard.",
  },
  {
    Icon: Shield,
    cardTitle: "Safety First",
    cardDescription:
      "Rigorous safety and security measures for all cargo movements.",
  },
  {
    Icon: BarChart3,
    cardTitle: "Cost Optimization",
    cardDescription:
      "Strategic planning to minimize freight costs without compromising quality.",
  },
  {
    Icon: Truck,
    cardTitle: "Specialized Equipment",
    cardDescription:
      "Access to a wide range of equipment for handling oversized and heavy cargo.",
  },
];

//customclearance page card data

export const customclearanceCardData: featuresDataType[] = [
  {
    Icon: Globe,
    cardTitle: "Global Expertise",
    cardDescription:
      "Two decades of experience with customs regulations worldwide.",
  },
  {
    Icon: Clock,
    cardTitle: "Timely Processing",
    cardDescription:
      "Efficient handling for quick and hassle-free customs clearance.",
  },
  {
    Icon: Shield,
    cardTitle: "Compliance Assurance",
    cardDescription:
      "Strict adherence to all customs laws and regulations across the globe.",
  },
  {
    Icon: FileText,
    cardTitle: "Documentation Experts",
    cardDescription:
      "Meticulous preparation and management of all required paperwork.",
  },
  {
    Icon: Scale,
    cardTitle: "Cost-Effective Solutions",
    cardDescription:
      "Optimized processes to minimize your expenses and provide value for money.",
  },
  {
    Icon: Truck,
    cardTitle: "Comprehensive Services",
    cardDescription:
      "Handling shipments by sea, air, rail, and road efficiently.",
  },
];

export const coreValuesData: featuresDataType[] = [
  {
    Icon: Users,
    cardTitle: "Customer First",
    cardDescription:
      "We prioritize our customers' needs and provide tailored solutions for their success.",
  },
  {
    Icon: Target,
    cardTitle: "Excellence",
    cardDescription:
      "We strive for excellence in every aspect of our operations and service delivery.",
  },
  {
    Icon: Award,
    cardTitle: "Integrity",
    cardDescription:
      "We conduct our business with the highest standards of integrity and transparency.",
  },
  {
    Icon: Globe,
    cardTitle: "Global Reach",
    cardDescription:
      "Leveraging our extensive global network to deliver seamless logistics solutions worldwide.",
  },
  {
    Icon: Lightbulb,
    cardTitle: "Innovation",
    cardDescription:
      "Investing in the latest infrastructure and technology to provide cutting-edge services.",
  },
  {
    Icon: Leaf,
    cardTitle: "Environmental Responsibility",
    cardDescription:
      "Committed to sustainable practices that minimize our environmental footprint.",
  },
  {
    Icon: Handshake,
    cardTitle: "Collaboration",
    cardDescription:
      "Fostering strong partnerships and a collaborative culture to achieve mutual success.",
  },
  {
    Icon: Shield,
    cardTitle: "Safety",
    cardDescription:
      "Ensuring the utmost safety and security in all our operations and services.",
  },
];
