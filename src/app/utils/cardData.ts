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
} from "lucide-react";

export interface cardDataType {
  id: number;
  Icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  cardTitle: string;
  cardDescription: string;
  location: string;
}

export const cardData: cardDataType[] = [
  {
    id: 1,
    Icon: Ship,
    cardTitle: "Shipper Liner Agency",
    cardDescription:
      "Entrust Shipping has built a huge amount of goodwill and established itself as a trustworthy and reputed shipping liner agency. We are agents for some of the renowned container lines providing services in various cities across the world.",
    location: "/services/shipperlineragency",
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
      "Our experience of about two decades as well as our tie ups with all ports and Container Freight Stations (CFS) across India helps us confidently assure our clients of an effortless customs clearance.",
    location: "/services/customclearance",
  },
];

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
