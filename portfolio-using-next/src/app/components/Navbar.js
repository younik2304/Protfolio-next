import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function NavBar(){
    return (
        <Navbar id="navbar">
            <NavbarBrand>
                <p></p>
            </NavbarBrand>
            <NavbarContent justify="center">
                <NavbarItem>
                    <Link className="text-amber-100" href="about">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link className="text-amber-100"  href="projects" >
                        Projects
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="text-amber-100"   href="contact">
                        Contact me
                    </Link>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    );
}