import { Fragment } from "react";
import { environment } from "../../environment";
import "./SideMenu.css";

interface Props {
    menuOpen: boolean;
    setMenuOpen: Function;
}

export default function SideMenu(props: Props) {
    let className = props.menuOpen ? "sidemenu active" : "sidemenu";

    const listItems = [
        {
            url: "#introduction",
            text: "Introduction"
        },
        {
            url: "#projects",
            text: "Projects"
        },
        {
            url: environment.resumeLink,
            text: "Resume",
            target: "blank"
        },
        {
            url: "#about-me-contact",
            text: "About Me | Contact"
        }
    ].map(listItem => {
        return (
            <Fragment key={listItem.url}>
                <li onClick={() => { props.setMenuOpen(false); }}>
                    <a href={`${listItem.url}`} target={listItem.target && listItem.target.length > 0 ? listItem.target : ""}>{listItem.text}</a>
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
