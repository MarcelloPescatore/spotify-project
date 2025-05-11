import { usePlayer } from "../context/PlayerContext";

export default function AppPlayerConsole() {
    const { currentTrack } = usePlayer();

    return (
        <div className="py-2 d-flex align-items-center" id="player_console">
            <div className="d-flex align-items-center justify-content-between px-2 col-12">
                <div className="d-flex justify-content-start align-items-center col-3">
                    <div>
                        <img src={currentTrack.img} alt={currentTrack.name} className="image_song" />
                    </div>
                    <div>
                        <div>
                            <span className="text-white fw-bold">{currentTrack.name}</span>
                        </div>
                        <div className="text-white fw-light">
                            <span>{currentTrack.type}</span>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center col-6">
                    <div className="d-flex align-items-center gap-4" id="controler_console">
                        <span><i className="bi bi-shuffle"></i></span>
                        <span><i className="bi bi-skip-backward-fill"></i></span>
                        <span><i className="bi bi-play-circle-fill play"></i></span>
                        <span><i className="bi bi-skip-forward-fill"></i></span>
                        <span><i className="bi bi-repeat"></i></span>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="text-white">2:33</div>
                        <div className="mx-3 rounded" id="line">
                            <div className="rounded d-flex justify-content-end align-items-center" id="line_up">
                                <div id="circle"></div>
                            </div>
                        </div>
                        <div className="text-white">5:42</div>
                    </div>
                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    )
}