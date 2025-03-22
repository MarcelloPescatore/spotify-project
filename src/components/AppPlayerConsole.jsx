import imageSong from "/image/geolier.jpg"

export default function AppPlayerConsole() {
    return (
        <div className="py-2 d-flex align-items-center" id="player_console">
            <div class="d-flex align-items-center justify-content-between px-2">
                <div class="col-4 d-flex justify-content-start align-items-center">
                    <div>
                        <img src={imageSong} alt="" className="image_song"/>
                    </div>
                    <div>
                        <div>
                            <span className="text-white">Geolier</span>
                        </div>
                        <div>
                            <span>Brano Nome</span>
                        </div>
                    </div>
                </div>
                <div className="">

                </div>
                
            </div>
        </div>
    )
}