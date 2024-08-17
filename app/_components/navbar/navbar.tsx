import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../../../components/ui/navigation-menu";
import NavbarElement from "./navbarElement";
import NavbarGroup from "./navbarGroup";
import { NavbarGroupData, navigations } from "./navigation";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigations?.map((navigation) =>
            <NavigationMenuItem>
              (navigation as NavigationElementGroup)?
              .elements
              ? (
              <NavbarGroup
                key={navigation.name}
                data={(navigation as NavbarGroupData)} />
              )
              :
              <NavbarElement
                key={navigation.name}
                data={navigation} />
            </NavigationMenuItem>
          )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
