import { useRef, useState, useEffect } from "react";

export default function CategoriesComponent({ isCollapsed, onCategorySelect }) {
    const flagsRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isTabletOrLaptop, setIsTabletOrLaptop] = useState(false);

    // Effettua il check della larghezza dello schermo
    useEffect(() => {
        function updateDeviceType() {
            const width = window.innerWidth;
            setIsTabletOrLaptop(width >= 768 && width <= 1100); 
        }

        // Aggiunge un listener per il resize della finestra
        window.addEventListener("resize", updateDeviceType);
        updateDeviceType();

        return () => window.removeEventListener("resize", updateDeviceType);
    }, []);

    useEffect(() => {
        // Esegue il calcolo delle frecce al termine del rendering
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

    // Funzione per gestire le categorie
    function handleCategoryClick(category) {
        setActiveCategory(category === activeCategory ? null : category);
        if (onCategorySelect) {
            onCategorySelect(category);
        }
    }

    // Elenco delle categorie
    const categories = ["Playlist", "Artista", "Album", "Podcast e show"];

    return (
        <div className="flags">
            {/* Contenuto scrollabile */}
            <div
                className="flags-contents"
                ref={flagsRef}
                onScroll={handleScroll}
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={activeCategory === category ? "active-categories" : ""}
                    >
                        <span>{category}</span>
                    </button>
                ))}
            </div>

            <div className="scroller">
                {/* Freccia sinistra */}
                <div>
                    {(isCollapsed && showLeft) || (isTabletOrLaptop && showLeft) ? (
                        <i
                            className="bi bi-arrow-left-circle"
                            onClick={scrollLeft}
                            style={{ visibility: "visible" }}
                        ></i>
                    ) : null}
                </div>

                <div>
                    {/* Freccia destra */}
                    {(isCollapsed && showRight) || (isTabletOrLaptop && showRight) ? (
                        <i
                            className="bi bi-arrow-right-circle"
                            onClick={scrollRight}
                            style={{ visibility: "visible" }}
                        ></i>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
