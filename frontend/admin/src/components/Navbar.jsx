import NavbarDropdown from "./Navbar/NavbarDropdown";
import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarWrapper from "./Navbar/NavbarWrapper";

export default function Navbar({ onToggle }) {
  const menuItems = [];
  const dropdownItems = [
    { label: "Profile", link: "#" },
    { label: "Inbox", link: "#" },
    { label: "Settings", link: "#" },
    { label: "---", link: "#" },
    { label: "Sign out", link: "/signout" },
  ];

  return (
    <NavbarWrapper>
      <NavbarMenu title="Admin" onToggle={onToggle} />
      <NavbarDropdown
        items={dropdownItems}
        img="https://avatars.githubusercontent.com/u/81268891?s=200&v=4"
      />
    </NavbarWrapper>
  );
}
