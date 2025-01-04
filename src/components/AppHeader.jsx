import { useState } from "react"
import { Link } from "react-router-dom"
import imageProfile from "../../public/image/IMG_6478.jpg"

export default function AppHeader() {
    const [isFocused, setIsFocused] = useState(false)


    return (
        <header className="px-4">
            <div className="row justify-content-between">
                {/* logo */}
                <div className="col-3">
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
                <div className="col-3 d-flex controls-header align-items-center justify-content-end">
                    <div className="me-4 zoom">
                        <i className="bi bi-arrow-down-circle me-2"></i>
                        <span>Installa app</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <i class="bi bi-bell me-4"></i>
                        <div className="zoom profile-header d-flex justify-content-center align-items-center">
                            <img src={imageProfile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}