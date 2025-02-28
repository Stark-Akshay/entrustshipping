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

export const benefits: BenefitsDataType[] = [
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
