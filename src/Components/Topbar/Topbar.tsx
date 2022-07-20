import "./Topbar.css";
import { Close, Mail, Menu } from "@mui/icons-material";

interface Props {
    menuOpen: boolean;
    setMenuOpen: Function;
}
export default function Topbar(props: Props) {
    return (
        <div className={"topbar " + (props.menuOpen && "active")}>
            <div className="wrapper">

                <div className="left">
                    <a href="#introduction" className="logo">
                        dev.
                    </a>

                    <div className="itemContainer">
                        <Mail className="icon" />
                        <span>saurishphatak@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => { props.setMenuOpen(!props.menuOpen) }}>
                        {
                            !props.menuOpen ?
                                <Menu className='menuIcon' /> : <Close className='menuIcon' />
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
