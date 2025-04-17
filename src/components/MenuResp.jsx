import React , { useState }  from "react";

const MenuResp = () => {

    const [menuOpen, setMenuOpen] = useState(false); 

    return (
    
        <div>
              
            <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>

                <li><a href="/">Home</a></li>
                <li><a href="/sobre">Sobre</a></li>
                <li><a href="/servicos">Serviços</a></li>
                <li><a href="/contato">Contato</a></li>
            
            </ul>
      
        </div>

    );

};

export default MenuResp;