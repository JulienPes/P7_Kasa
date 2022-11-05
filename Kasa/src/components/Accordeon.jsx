import React, {useState} from 'react'
import ChevronDown from "../assets/Chevron_Down.svg";
import ChevronUp from "../assets/Chevron_Up.svg";

const Accordeon = ({ question }) => {
    // Si montrer texte alors setShowReply, position de départ "faalse"
    const [showReply, setShowReply] = useState(false);
    const { title, reply } = question;


    return (
        <div className="accordeon">
            <header className="accordeon-header">
                <h3>{title}</h3>
                <button 
                    className="btn-chevron" 
                    // ??
                    onClick={() => setShowReply(!showReply)}
                    // Si montrer texte alors ChevronUp
                >
                    <img src={showReply ? ChevronUp : ChevronDown} alt="close/open"/>
                </button>
            </header>
            {showReply && <div className="about-reply">
                <p>{reply}</p>
                </div>}
        </div>
    )
}

export default Accordeon
