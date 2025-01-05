export default function AppMain() {
    return (

        <div className="row">
            <div className="col-3 ps-1 pe-1" id="library">
                <div className="box">
                    <div className="title d-flex">
                        <div className="col-6">
                            <i className="bi bi-collection"></i>
                            <span>La tua libreria</span>
                        </div>
                        <div className="col-6 text-end">
                            <i className="bi bi-plus"></i>
                            <i className="bi bi-arrow-right-short"></i>
                        </div>
                    </div>
                    <div className="flags">
                        <span>Playlist</span>
                        <span>Artisti</span>
                        <span>Album</span>
                        <span>Podcast e show</span>
                    </div>
                    <div className="search">
                        <div>
                            cerca
                        </div>
                        <div className="filters">
                            Recenti
                        </div>
                    </div>
                    <div className="contents">
                        <ul cl>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-9 ps-1 pe-2" id="contents">
                <div className="box">
                    <span>Tutto</span>
                </div>
            </div>
        </div>

    )
}