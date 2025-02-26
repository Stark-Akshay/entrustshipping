//warehousing page accordion data
export interface warehousingAccordionDataType {
  accordionTitle: string;
  accordionDescription: string;
  bullets: string[];
}

export const warehousingAccordionData: warehousingAccordionDataType[] = [
  {
    accordionTitle: "Inventory Management System",
    accordionDescription:
      "Our advanced inventory management system provides real-time tracking and control.",
    bullets: [
      "Real-time inventory tracking",
      "Automated stock alerts",
      "Batch and lot tracking",
      "Expiry date management",
    ],
  },
  {
    accordionTitle: "Security & Surveillance",
    accordionDescription:
      "State-of-the-art security systems to protect your valuable inventory.",
    bullets: [
      "24/7 CCTV surveillance",
      "Access control systems",
      "Security personnel",
      "Fire protection systems",
    ],
  },
  {
    accordionTitle: "Quality Control",
    accordionDescription:
      "Comprehensive quality control measures to maintain product integrity.",
    bullets: [
      "Temperature monitoring",
      "Humidity control",
      "Regular inspections",
      "Damage prevention protocols",
    ],
  },
];
