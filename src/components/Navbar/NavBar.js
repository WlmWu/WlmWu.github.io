import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { IconContext } from "react-icons";
import { AiOutlineUser } from "react-icons/ai";
import { useState, useEffect } from "react";
import useRate from "../../hooks/useRate";

import "bootstrap/dist/css/bootstrap.min.css";

const navItems = [
  { href: "#about", itemName: "About" },
  { href: "#project", itemName: "Projects" },
  { href: "#skill", itemName: "Skills" },
  { href: "#resume", itemName: "Resume" },
  { href: "#contact", itemName: "Contact" },
];

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [moveNav, setMoveNav] = useState(0);
  const navTop = useRate(moveNav);
  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    var lastScrollTop = 0;
    const handleScroll = () => {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop < 30) {
        setMoveNav(0);
      } else if (scrollTop > lastScrollTop) {
        setCollapsed(true);
        setMoveNav(-80);
      } else {
        setMoveNav(0);
      }
      lastScrollTop = scrollTop;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        light
        expand="md"
        color="white"
        fixed="top"
        className="px-3 container"
        style={{ top: `${navTop}px` }}
      >
        <NavbarBrand
          href="/"
          className="mr-auto"
          style={{ fontWeight: "bold" }}
        >
          <IconContext.Provider
            value={{
              style: {
                verticalAlign: "middle",
                fontSize: "40px",
                marginBottom: "6px",
              },
            }}
          >
            <AiOutlineUser />
          </IconContext.Provider>{" "}
          W
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className="mr-2"
          aria-expanded={!collapsed}
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className={`mx-auto pe-md-0 pe-lg-5`}>
            {navItems.map((nItem, i) => (
              <NavItem key={`nav-${i}`} className="px-3 fw-bold">
                <NavLink href={`${nItem.href}`} onClick={toggleNavbar}>
                  {nItem.itemName}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
