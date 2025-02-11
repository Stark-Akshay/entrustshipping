import { LucideProps, Ship, Truck, Scale } from "lucide-react";

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
