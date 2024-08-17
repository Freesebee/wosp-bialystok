import { NavigationMenuContent, NavigationMenuTrigger } from "../../../components/ui/navigation-menu";
import NavbarElement from "./navbarElement";
import { NavbarGroupData } from "./navigation";

type NavGroupElementProps = { data: NavbarGroupData };

export default function NavbarGroup({ data }: NavGroupElementProps) {
	return (
		<div>
			<NavigationMenuTrigger>{data.name}</NavigationMenuTrigger>
			<NavigationMenuContent>
				<ul>
					{data.elements.map((element) => (
						<li key={element.name}>
							<NavbarElement data={element}></NavbarElement>
						</li>
					))}
				</ul>
			</NavigationMenuContent>
		</div>
	);
}
