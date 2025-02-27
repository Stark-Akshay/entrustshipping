//warehousing page accordion data
export interface warehousingAccordionDataType {
  accordionTitle: string;
  accordionDescription: string;
  bullets: string[];
}

export const customclearanceAccordionData: Omit<
  warehousingAccordionDataType,
  "bullets"
>[] = [
  {
    accordionTitle: "Safety and Legal Compliance",
    accordionDescription:
      "We ensure all customs processes adhere to local and international regulations.",
  },
  {
    accordionTitle: "Document Preparation and Assessment",
    accordionDescription:
      "Our team handles all necessary paperwork, ensuring accuracy and completeness.",
  },
  {
    accordionTitle: "Procedural Assistance and Duty Payment",
    accordionDescription:
      "We guide you through customs procedures and handle duty payments on your behalf.",
  },
  {
    accordionTitle: "Representation During Customs Examination",
    accordionDescription:
      "Our agents represent your interests during any required customs inspections.",
  },
  {
    accordionTitle: "Preparation and Submission of Required Documents",
    accordionDescription:
      "We prepare and submit all necessary documentation to relevant authorities.",
  },
  {
    accordionTitle: "Safe Cargo Delivery After Clearance",
    accordionDescription:
      "We ensure your cargo is safely delivered after clearing customs, along with all required documents.",
  },
];

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
