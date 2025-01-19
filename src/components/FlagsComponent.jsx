import { useRef, useState, useEffect } from "react";

export default function FlagsComponent({ isCollapsed }) {
    const flagsRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);

    useEffect(() => {
        // Eseguo il calcolo delle frecce al termine del rendering
        const timer = setTimeout(() => {
            if (flagsRef.current) {
                handleScroll();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [isCollapsed]);

    // Funzione per calcolare la visibilità delle frecce
    function handleScroll() {
        if (!flagsRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = flagsRef.current;

        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft + clientWidth < scrollWidth);
    }

    // Funzione per scorrere a sinistra
    function scrollLeft() {
        if (flagsRef.current) {
            flagsRef.current.scrollBy({ left: -200, behavior: "smooth" });
            setTimeout(handleScroll, 300);
        }
    }

    // Funzione per scorrere a destra
    function scrollRight() {
        if (flagsRef.current) {
            flagsRef.current.scrollBy({ left: 200, behavior: "smooth" });
            setTimeout(handleScroll, 300);
        }
    }

    return (
        <div className="flags">

            {/* Contenuto scrollabile */}
            <div
                className="flags-contents"
                ref={flagsRef}
                onScroll={handleScroll}
            >
                <button><span>Playlist</span></button>
                <button><span>Artisti</span></button>
                <button><span>Album</span></button>
                <button><span>Podcast e show</span></button>
            </div>

            <div className="scroller">
                {/* Freccia sinistra */}
                <div>
                    {isCollapsed && showLeft && (
                        <i
                            className="bi bi-arrow-left-circle"
                            onClick={scrollLeft}
                            style={{ visibility: "visible" }}
                        ></i>
                    )}
                </div>

                <div>
                    {/* Freccia destra */}
                    {isCollapsed && showRight && (
                        <i
                            className="bi bi-arrow-right-circle"
                            onClick={scrollRight}
                            style={{ visibility: "visible" }}
                        ></i>
                    )}
                </div>
            </div>
        </div>
    );
}
