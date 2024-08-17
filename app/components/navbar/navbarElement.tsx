import Link from "next/link";
import { NavigationMenuLink, navigationMenuTriggerStyle } from "../../../components/ui/navigation-menu";
import { NavbarElementData } from "./navigation";

type NavElementProps = { data: NavbarElementData }

export default function NavbarElement({ data }: NavElementProps) {

    return (
        <Link href={data.link} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {data.name}
            </NavigationMenuLink>
        </Link>
    )
}
