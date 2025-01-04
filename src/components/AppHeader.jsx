import { Link } from "react-router-dom"

export default function AppHeader() {

    return (
        <header className="px-4">
            <div className="row justify-content-between">
                {/* logo */}
                <div className="col-1">
                    <Link to="/">
                        <i className="bi bi-spotify"></i>
                    </Link>
                </div>

                {/* center header */}
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <div className="icon-header d-flex justify-content-center align-items-center me-3">
                        <i className="bi bi-house-door-fill"></i>
                    </div>

                    {/* search bar static */}
                    <div className="d-flex align-items-center search-box ">
                        <i className="bi bi-search me-3"></i>
                        <input type="text" placeholder="Cosa vuoi ascoltare?" className="search-bar"/>

                    </div>
                </div>

                {/* other controls */}
                <div className="col-3"></div>
            </div>
        </header>
    )
}