import logo from "../../assets/img/argentBankLogo.webp";
import { useSelector } from "react-redux";
import "../Header/Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    const userName = useSelector(state => state.user.userName)

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {!userName ?
                    (
                        <a className="main-nav-item" href="/sign-in">Sign In</a>
                    )
                    :
                    (
                        <div className="main-nav-item">
                            <div className="main-nav-items">
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                <a className="main-nav-item" href="/sign-in" > Sign out</a>
                            </div>

                            <div className="main-nav-items">
                                <FontAwesomeIcon icon={faCircleUser} />
                                <p>{userName}</p>
                            </div>
                        </div>

                    )}
            </div>
        </nav >
    );
}


