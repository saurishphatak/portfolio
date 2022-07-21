import { Fragment } from "react";
import "./SideMenu.css";

interface Props {
    menuOpen: boolean;
    setMenuOpen: Function;
}

export default function SideMenu(props: Props) {
    let className = props.menuOpen ? "sidemenu active" : "sidemenu";

    const listItems = [
        {
            link: "introduction",
            text: "Introduction"
        },
        {
            link: "projects",
            text: "Projects"
        },
        {
            link: "about-me-contact",
            text: "About Me | Contact"
        }
    ].map(listItem => {
        return (
            <Fragment key={listItem.link}>
                <li onClick={() => { props.setMenuOpen(false); }}>
                    <a href={`#${listItem.link}`}>{listItem.text}</a>
                </li>
            </Fragment>
        )
    })

    return (
        <div className={className}>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}
