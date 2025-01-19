import { useState } from "react";
import { dataList } from "../db/data";
import FlagsComponent from "./FlagsComponent";

export default function AppMain() {
    const [searchTerm, setSearchTerm] = useState('');
    const [inputSearch, setInputSearch] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false); 

    const filteredData = dataList.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function HandleToggle() {
        setInputSearch(!inputSearch);
    }

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed); 
    }

    return (
        <div className="row">
            {/* sidebar */}
            <div className={`px-1 ${isCollapsed ? "col-2" : "col-4"}`} id="library">
                <div className="box">
                    <div className="title d-flex">
                        <div className="col-7 d-flex align-items-center">
                            <button className="d-flex align-items-center gap-2">
                                <i className="bi bi-collection"></i>
                                <span>La tua libreria</span>
                            </button>
                        </div>
                        <div className="col-5 justify-content-end d-flex align-items-center">
                            <button>
                                <i className="bi bi-plus"></i>
                            </button>
                            <button onClick={toggleSidebar}>
                                <i className={`bi ${isCollapsed ? "bi-arrow-right-short" : "bi-arrow-left-short"}`}></i>
                            </button>
                        </div>
                    </div>

                    {/* fi */}
                    <FlagsComponent isCollapsed={isCollapsed}/>

                    {/* search */}
                    <div className="second-part d-flex flex-column justify-content-between gap-3 ">
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
                            <div className="filters d-flex align-items-center gap-2">
                                <span>Autore</span>
                                <button>
                                    <i className="bi bi-list-ul"></i>
                                </button>
                            </div>
                        </div>
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
                    </div>
                </div>
            </div>

            {/* right */}
            <div className={`ps-1 pe-2 ${isCollapsed ? "col-10" : "col-8"}`} id="contents">
                <div className="box">
                    <span>Tutto</span>
                </div>
            </div>
        </div>
    );
}
