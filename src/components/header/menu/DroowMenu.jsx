import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import Brand from "../../brand/Brand";
import MenuContent from "./MenuContent";


const menuContent = [
    {
        name: "Products",
        dropdownMenu: [
            {name: "Dtech Asistant", to: "/"},
            {name: "Dtech Brain", to: "/demo-2"},
            {name: "Dtech Token", to: "/demo-3"},
        ]
    },
    {
        name: "Documents",
        dropdownMenu: [
            {name: "Whitepaper", to: "/slider"},
            {name: "Roadmap", to: "/slider-2"},
            {name: "Tokenomics", to: "/slider-3"}
        ]
    },
    {
        name: "Socials",
        dropdownMenu: [
            { name: "Twitter", too: "https://twitter.com" },
            {name: "Instagram", too: "https://instagram.com"},
            {name: "Telegram", too: "https://telegram.com"},
        ]
    },
    {
        name: "Prizes",
        dropdownMenu: [
            {name: "State", to: "/portfolio/time-tag-watch"},
            {name: "Air Drop", to: '/portfolio/under-armour'},
            {name: "Data Sharing", to: '/portfolio/re-styling'}
        ]
    },
    {
        name: "Others",
        dropdownMenu: [
            {name: "Team", to: "/portfolio/time-tag-watch"},
            {name: "Partners", to: '/portfolio/under-armour'},
            {name: "As Seen On", to: '/portfolio/re-styling'}
        ]
    },
    {name: "About", to: "/about"},
    {name: "Contact", to: "/contact"},
];

const DroowMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        if (items.too) {
            return (
        <li key={$key} className="nav-item">
               <a  href={items.too} target="_blank" rel="noopener noreferrer"> <span className="overflow"> {items.name}</span></a>
             </li>
            );
          }
        return (
            <Nav.Link to={items.to} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand to={"/"}>
                <Brand width="80px" height="26px"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

DroowMenu.defaultProps = {
    hamburger: false
}


export default DroowMenu;