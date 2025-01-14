import { Links } from "../../consts/links.const";

export interface NavbarElementData {
  link?: string;
  name: string;
  disabled?: boolean;
}

export interface NavbarGroupData extends NavbarElementData {
  elements: NavbarElementData[];
}



export const navigations: NavbarElementData[] = [
  {
    name: "Pytania",
    link: Links.FAQ,
  },
  {
    name: "Kontakt",
    link: Links.CONTACT,
  },
  {
    name: "Wsparcie Finału",
    link: Links.SUPPORT,
  },
  {
    name: "Strona główna",
    link: Links.HOME,
  },
  {
    name: "Aktualności",
    elements: [
      {
        name: "Strona Facebook",
        link: Links.NEWS,
      },
    ],
  } as NavbarGroupData,
  {
    name: "Wsparcie Finału",
    elements: [
      {
        name: "Formy wsparcia",
        link: Links.SUPPORT,
      },
      {
        name: "Dołącz do Sztabu",
        link: Links.COLLABORATION,
      },
      {
        name: "Puszka stacjonarna",
        link: Links.MONEY_BOX,
      },
    ],
  } as NavbarGroupData,
  {
    name: "Wydarzenia",
    elements: [
      {
        name: "Maratony",
        link: Links.MARATHONS,
      },
      {
        name: "Koncerty",
        link: Links.CONCERTS,
      },
    ],
  } as NavbarGroupData,
  {
    name: "Patnerzy",
    link: Links.PARTNERS,
  },
  {
    name: "Galeria",
    link: Links.GALLERY,
  },
  {
    name: "Aktualności - Facebook",
    link: Links.NEWS,
  },
];
export { Links };

