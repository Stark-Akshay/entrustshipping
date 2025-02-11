export interface navDataType {
  id: number;
  location: string;
  pageName: string;
  subLinks?: Omit<navDataType, "subLinks">[];
}

export type subLinks = Omit<navDataType, "subLinks">;

export const navData: navDataType[] = [
  { id: 1, location: "/", pageName: "Home" },
  {
    id: 2,
    location: "#",
    pageName: "Services",
    subLinks: [
      {
        id: 1,
        location: "/services/shipperlineragency",
        pageName: "Shipper Liner Agency",
      },
      {
        id: 2,
        location: "/services/freightforwarding",
        pageName: "Frieght Forwarding",
      },
      {
        id: 3,
        location: "/services/warehousing",
        pageName: "Warehousing",
      },
      {
        id: 4,
        location: "/services/projectlogistics",
        pageName: "Project Logistics",
      },
      {
        id: 5,
        location: "/services/customclearance",
        pageName: "Custom Clearance",
      },
    ],
  },
  { id: 3, location: "/branches", pageName: "Branches" },
  { id: 4, location: "/career", pageName: "Career" },
  { id: 5, location: "/tariff", pageName: "Tariff" },
];
