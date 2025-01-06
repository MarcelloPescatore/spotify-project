export default function AppMain() {
    return (

        <div className="row">
            {/* sidebar */}
            <div className="col-3 px-1" id="library">
                <div className="box">
                    <div className="title d-flex">
                        <div className="col-6 d-flex align-items-center">
                            <button className="d-flex align-items-center gap-2">
                                <i className="bi bi-collection"></i>
                                <span>La tua libreria</span>
                            </button>
                        </div>
                        <div className="col-6 justify-content-end d-flex align-items-center">
                            <button>
                                <i className="bi bi-plus"></i>
                            </button>
                            <button>
                                <i className="bi bi-arrow-right-short"></i>
                            </button>
                        </div>
                    </div>

                    {/* fi */}
                    <div className="flags">
                        <button>
                            <span>Playlist</span>
                        </button>
                        <button>
                            <span>Artisti</span>
                        </button>
                        <button>
                            <span>Album</span>
                        </button>
                        <button>
                            <span>Podcast e show</span>
                        </button>
                    </div>

                    {/* search */}
                    <div className="search d-flex justify-content-between">
                        <div>
                            <button>
                                <i className="bi bi-search"></i>
                            </button>
                        </div>

                        {/* Ordina per */}
                        <div className="filters">
                            <span></span>
                            <button>
                                <i className="bi bi-list-ul"></i>
                            </button>
                        </div>
                    </div>
                    <div className="results">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>

            {/* right */}
            <div className="col-9 ps-1 pe-2" id="contents">
                <div className="box">
                    <span>Tutto</span>
                </div>
            </div>
        </div>

    )
}