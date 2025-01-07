import { useState } from "react"
import { Link } from "react-router-dom"
import imageProfile from "/image/IMG_6478.jpg"

export default function AppHeader() {
    const [isFocused, setIsFocused] = useState(false)
    const [labelShow, setLableShow] = useState(false)

    function HandleToggle() {
        setLableShow(!labelShow)
    }

    return (
        <header>
            <div className="row justify-content-between">
                {/* logo */}
                <div className="col-3 ps-4">
                    <Link to="/">
                        <i className="bi bi-spotify"></i>
                    </Link>
                </div>

                {/* center header */}
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <Link to="/">
                        <div className="icon-header zoom d-flex justify-content-center align-items-center me-3">
                            <i className="bi bi-house-door-fill"></i>
                        </div>
                    </Link>

                    {/* search bar static */}
                    <div className={`d-flex align-items-center search-box ${isFocused ? "focus" : ""}`}>
                        <i className="bi bi-search me-3"></i>
                        <input type="text" placeholder="Cosa vuoi ascoltare?" className="search-bar" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />

                        <Link to="/">
                            <i className="bi bi-collection"></i>
                        </Link>
                    </div>
                </div>

                {/* other controls */}
                <div className="col-3 pe-2 d-flex controls-header align-items-center justify-content-end">
                    <div className="me-4 zoom pointer d-none d-lg-block">
                        <i className="bi bi-arrow-down-circle me-2 zoom"></i>
                        <span>Installa app</span>
                    </div>
                    <div className="d-flex align-items-center " >
                        <i className="bi bi-bell me-4 pointer"></i>
                        <div className="zoom profile-header d-flex justify-content-center align-items-center pointer" onClick={HandleToggle}>
                            <img src={imageProfile} alt="" />
                        </div>
                    </div>

                    {labelShow &&
                        <div className="profile-label">
                            <ul className="p-0 m-0">
                                <li>
                                    <a href="#">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>
                                                Account
                                            </span>
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </div>
                                    </a>

                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            Profilo
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span>
                                                Effettua l'upgrade a Premium
                                            </span>
                                            <i className="bi bi-box-arrow-up-right"></i>
                                        </div>
                                    </a>

                                </li>
                                <li className="border-b">
                                    <a href="#">
                                        <span>
                                            Impostazioni
                                        </span>
                                    </a>

                                </li>
                                <li>
                                    <a href="#">
                                        <span>
                                            Esci
                                        </span>
                                    </a>

                                </li>
                            </ul>
                        </div>
                    }

                </div>
            </div>
        </header>
    )
}