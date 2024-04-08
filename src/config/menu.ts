import { Icons } from "@/components/icons";

interface NavItem {
 title: string;
 to?: string;
 href?: string;
 disabled?: boolean;
 external?: boolean;
 icon?: keyof typeof Icons;
 label?: string;
}

interface NavItemWithChildren extends NavItem {
 items?: NavItemWithChildren[];
}

export const menuItem: NavItemWithChildren[] = [
 {
  title: "Home",
  to: "",
 },
 {
  title: "Year",
  to: "/sample",
 },
 {
  title: "Genre",
  items: [
   {
    title: "Action",
    to: "/#",
   },
   {
    title: "Romance",
    to: "/#",
   },
  ],
 },
];

export const sideMenu: NavItemWithChildren[] = [];
