export interface BenefitsDataType {
  title: string;
  description: string;
}

export interface BranchDataType {
  city: string;
  address: string;
  email: string;
  phone: string;
}

export interface TimeLineDataType {
  year: string;
  title: string;
  description: string;
}

export const additionalBenefits: BenefitsDataType[] = [
  {
    title: "Superior Customer Experience",
    description:
      "We prioritize client satisfaction with our trustworthy, reliable, and efficient services.",
  },
  {
    title: "Single Point of Contact",
    description:
      "Enjoy seamless customs clearance with a dedicated point of contact throughout the process.",
  },
  {
    title: "Tailored Assistance",
    description:
      "Our services are customized to the size of your consignment and tailored to suit your requirements",
  },
  {
    title: "Proactive Problem Solving",
    description:
      "We anticipate and rectify potential issues to minimize delays in clearance.",
  },
  {
    title: "Advanced Technology Integration",
    description:
      "We combine our extensive experience with the latest in information technology for optimal results.",
  },
];

export const branchesData: BranchDataType[] = [
  {
    city: "Mumbai",
    address:
      "Shelton Saphire, A wing, Office No. 907,Palm beach Road, Near Sessions Court, Sector 15, CBD Belapur, Navi Mumbai - 400614",
    email: "deepesh@entrustshipping.com",
    phone: "+91 9167851284",
  },
  {
    city: "Chennai",
    address:
      "New No. 49, Old No. 26, Moula Manor, 4th Floor, Coral Merchant Street, Chennai - 600 001",
    email: "info@entrustshipping.com",
    phone: "+91 9446586714",
  },
  {
    city: "Tuticorin",
    address: "97G/2D, Teachers Colony, 7Th Street, Tuticorin - 628008",
    email: "vijay@entrustshipping.com",
    phone: "+91 9600212933",
  },
  {
    city: "Cochin",
    address:
      "39/5109, 2nd Floor, Church Landing Road Pallimukku, Cochin - 682016",
    email: "shaiju@entrustshipping.com",
    phone: "+91 9446586714",
  },
  {
    city: "Dubai",
    address:
      "office 104, Al Tawhidi Building, Bank Street,Al Mankhool Rd,Bur Dubai, Dubai PO Box 123238.",
    email: "info.dxb@entrustshipping.com",
    phone: "+971 4 393 0250",
  },
  {
    city: "Delhi",
    address:
      "401, 4th floor, Skyline building, 85 Nehru place,> New Delhi - 110019.",
    email: "jaya@entrustshipping.com",
    phone: "+91 9873699888",
  },
];

export const timelineData: TimeLineDataType[] = [
  {
    year: "2020",
    title: "Company Founded",
    description:
      "Entrust Shipping was established with a vision to revolutionize global logistics.",
  },
  {
    year: "2021",
    title: "Expanded to 10+ Countries",
    description:
      "We grew our network to serve clients in over 10 countries worldwide.",
  },
  {
    year: "2022",
    title: "Technology Integration",
    description:
      "Implemented AI-driven tracking and management systems for enhanced efficiency.",
  },
  {
    year: "2023",
    title: "Sustainability Initiatives",
    description:
      "Launched eco-friendly shipping solutions to reduce our carbon footprint.",
  },
];

export const whyUsDetails: BenefitsDataType[] = [
  {
    title: "Reliable & Safe Deliveries",
    description:
      "We ensure your goods are transported with utmost safety and efficiency from pick-up to drop-off.",
  },
  {
    title: "End-to-End Logistics Solutions",
    description:
      "From freight forwarding to customs clearance, warehousing, and express deliveries, we handle it all.",
  },
  {
    title: "Global Network & Infrastructure",
    description:
      "Our worldwide partnerships and infrastructure ensure seamless movement of goods across borders.",
  },
  {
    title: "Cost-Effective Operations",
    description:
      "We provide value-for-money logistics solutions through strategic partnerships and economies of scale.",
  },
  {
    title: "Fast & Expedited Deliveries",
    description:
      "We offer air and express transport to meet your urgent shipping requirements.",
  },
  {
    title: "Customer-Centric Approach",
    description:
      "Our service-driven culture ensures personalized and hassle-free logistics solutions tailored to your needs.",
  },
  {
    title: "Advanced Tracking & Information Systems",
    description:
      "Stay updated with real-time tracking and a seamless online information management system.",
  },
  {
    title: "Expert Team & Industry Experience",
    description:
      "Our core management team brings rich professional experience in global logistics and supply chain management.",
  },
  {
    title: "Sustainable & Ethical Practices",
    description:
      "We uphold environmental responsibility and business ethics in all our operations.",
  },
  {
    title: "Comprehensive Customs & Legal Assistance",
    description:
      "We handle all necessary documentation and legal requirements for hassle-free global shipping.",
  },
];
