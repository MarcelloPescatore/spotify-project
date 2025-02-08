import { useState, useRef, useEffect } from "react";
import { dataList } from "../db/data";
import CategoriesComponent from "./CategoriesComponent";

export default function AppMain() {
    const [searchTerm, setSearchTerm] = useState('');
    const [inputSearch, setInputSearch] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [labelShow, setLabelShow] = useState(false)
    const [selectedLabel, setSelectedLabel] = useState('Autore')
    const [selectedIcon, setSelectedIcon] = useState('bi-list-task')
    const [squeezeMenu, setSqueezeMenu] = useState(false)
    // scroller card
    const scrollRef = useRef(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Logica per filtrare i dati
    const filteredData = dataList.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory
            ? item.type.toLowerCase() === selectedCategory.toLowerCase()
            : true;
        return matchesSearch && matchesCategory;
    });

    function HandleToggle() {
        setInputSearch(!inputSearch);
    }

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    function handleCategorySelect(category) {
        setSelectedCategory(category === selectedCategory ? null : category);
    }

    function handleToggleLabel() {
        setLabelShow(!labelShow)
    }

    const handleLabelClick = (label, icon) => {
        setSelectedLabel(label);
        setSelectedIcon(icon);
        setLabelShow(false);
    };

    function HandleSqueezeMenu() {
        setSqueezeMenu(!squeezeMenu)
    }

    //scroller card 
    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setShowLeft(scrollLeft > 0);
            setShowRight(scrollLeft + clientWidth < scrollWidth);
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener("scroll", handleScroll);
            handleScroll();
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -312, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 312, behavior: "smooth" });
        }
    };

    return (
        <div className="row">
            {/* sidebar */}
            {squeezeMenu ? (
                <div className="squeezeMenu px-1" id="library">
                    <div className="sideMenuSqueeze box">
                        <div className="title">
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <button className="d-flex align-items-center">
                                    <i className={`bi ${squeezeMenu ? "bi-collection-fill" : "bi-collection"}`} onClick={HandleSqueezeMenu}></i>
                                </button>

                            </div>
                        </div>
                        <div className="results search-part" style={{ maxHeight: "705px" }}>
                            <div className="px-2 d-flex flex-wrap">
                                {filteredData.map((item) => (
                                    <div key={item.id} className="d-flex flex-column p-2 col-12">
                                        <img src={item.img} className="w-100" alt="" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`px-1 ${isCollapsed ? "col-4 col-lg-3" : "col-4 col-lg-4"}`} id="library">
                    <div className="box sideMenu">
                        <div className="title d-flex pe-1 pe-xl-3">
                            <div className="col-7 d-flex align-items-center">
                                <button className="d-flex align-items-center gap-2">
                                    <i className={`bi ${squeezeMenu ? "bi-collection-fill" : "bi-collection"}`} onClick={HandleSqueezeMenu}></i>
                                    <span className={`${isCollapsed ? "d-none d-xl-block" : "d-md-none d-lg-block"}`}>La tua libreria</span>
                                </button>
                            </div>
                            <div className="col-5 justify-content-end d-flex align-items-center">
                                <button>
                                    <i className="bi bi-plus"></i>
                                </button>
                                <button onClick={toggleSidebar} className="d-md-none d-lg-block">
                                    <i className={`bi  ${isCollapsed ? "bi-arrow-right-short" : "bi-arrow-left-short"}`}></i>
                                </button>
                            </div>
                        </div>

                        {/* Categories */}
                        <CategoriesComponent
                            isCollapsed={isCollapsed}
                            onCategorySelect={handleCategorySelect}
                        />

                        {/* search */}
                        <div className="search-part d-flex flex-column gap-3 ">
                            <div className="search d-flex justify-content-between align-items-center">
                                {inputSearch ? (
                                    <div className="input-search d-flex align-items-center">
                                        <button>
                                            <i className="bi bi-search" onClick={HandleToggle}></i>
                                        </button>
                                        <input
                                            className="ms-1"
                                            type="text"
                                            placeholder="Cerca in La tua libreria"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                    </div>
                                ) : (
                                    <button>
                                        <i className="bi bi-search" onClick={HandleToggle}></i>
                                    </button>
                                )}

                                {/* Ordina per */}
                                <div className="filters d-flex align-items-center gap-2 position-relative pe-1 pe-xl-3">
                                    <span className={`text-truncate-laptop ${isCollapsed ? "d-none d-xl-block" : "d-md-none d-lg-block"}`} onClick={handleToggleLabel}>
                                        {selectedLabel}
                                    </span>
                                    <button>
                                        <i className={`bi ${selectedIcon}`} onClick={handleToggleLabel}></i>
                                    </button>

                                    {/* label */}
                                    {labelShow && (
                                        <div className="order-label">
                                            <ul className="p-0 m-0">
                                                <span>Ordina per</span>
                                                <li onClick={() => handleLabelClick('Recenti', `${selectedIcon}`)}>
                                                    <span>Recenti</span>
                                                </li>
                                                <li onClick={() => handleLabelClick('Autore', `${selectedIcon}`)}>
                                                    <span>Autore</span>
                                                </li>
                                                <li onClick={() => handleLabelClick('Ordine Alfabetico', `${selectedIcon}`)}>
                                                    <span>Ordine Alfabetico</span>
                                                </li>
                                                <hr className="my-2 border-light" />
                                                <span>Visualizza come</span>
                                                <li
                                                    className="d-flex align-items-center gap-2"
                                                    onClick={() => handleLabelClick(`${selectedLabel}`, 'bi-grid')}
                                                >
                                                    <i className="bi bi-grid"></i>
                                                    <span>Griglia</span>
                                                </li>
                                                <li
                                                    className="d-flex align-items-center gap-2"
                                                    onClick={() => handleLabelClick(`${selectedLabel}`, 'bi-list-task')}
                                                >
                                                    <i className="bi bi-list-task"></i>
                                                    <span>Elenco</span>
                                                </li>
                                                <li
                                                    className="d-flex align-items-center gap-2"
                                                    onClick={() => handleLabelClick(`${selectedLabel}`, 'bi-list')}
                                                >
                                                    <i className="bi bi-list"></i>
                                                    <span>Compatta</span>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {selectedIcon === 'bi-grid' ? (
                                <div className="results">
                                    <div className="px-2 d-flex flex-wrap">
                                        {filteredData.map((item) => (
                                            <div key={item.id} className={`d-flex flex-column p-2 ${isCollapsed ? "col-12 col-xl-6" : "col-xl-3 col-lg-6 col-12"}`}>
                                                <img src={item.img} className="w-100" alt="" />
                                                <div className="info d-flex justify-content-start flex-column mt-2">
                                                    <span className="title-item">{item.name}</span>
                                                    <span className="subtitle-item">{item.type}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : selectedIcon === 'bi-list-task' ? (
                                <div className="results">
                                    <ul className="m-0 p-0">
                                        {filteredData.map((item) => (
                                            <li key={item.id} className="d-flex">
                                                <img src={item.img} alt="" />
                                                <div className="info d-flex flex-column ms-3">
                                                    <span className="title-item">{item.name}</span>
                                                    <span className="subtitle-item">{item.type}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : selectedIcon === 'bi-list' ? (
                                <div className="results">
                                    <ul className="m-0 p-0">
                                        {filteredData.map((item) => (
                                            <li key={item.id} className="d-flex">
                                                <div className="info d-flex align-items-center">
                                                    <span className="title-item me-2">{item.name}</span>
                                                    <i className="bi bi-dot align-middle"></i>
                                                    <span className="subtitle-item align-middle">{item.type}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            )}


            {/* right */}
            <div className={`ps-1 pe-2 ${isCollapsed ? "col-8 col-lg-9" : "col-8 col-lg-8"} flex-grow-1`} id="contents">
                <div className="box px-4 py-2 content-part">
                    <div className="recently-played">
                        <h2 className="text-light">Ascoltati di recente</h2>
                        <div
                            className="scroller-container mt-3"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {showLeft && <div className="fade-left"></div>}
                            <div className="scroller">
                                { isHovered && showLeft && (
                                    <button className="scroll-button left" onClick={scrollLeft}>
                                        <i className="bi bi-arrow-left-circle"></i>
                                    </button>
                                )}
                                <div className="scroll-container" ref={scrollRef}>
                                    {dataList.map((item) => (
                                        <div key={item.id} className="myCard">
                                            <img src={item.img} alt={item.name} draggable="false" />
                                            <span className="title-item">{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                                { isHovered && showRight && (
                                    <button className="scroll-button right" onClick={scrollRight}>
                                        <i className="bi bi-arrow-right-circle"></i>
                                    </button>
                                )}
                            </div>
                            {showRight && <div className="fade-right"></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
