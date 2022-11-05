import React, {useState} from 'react'
import ChevronDown from "../assets/Chevron_Down.svg";
import ChevronUp from "../assets/Chevron_Up.svg";

const Accordeon = ({ question }) => {
    // Si montrer texte alors setShowReply, position de départ "faalse"
    const [showReply, setShowReply] = useState(false);
    const { title } = question;


    return (
        <div className="accordeon">
            <header className="accordeon-header">
                <h3>{title}</h3>
                <button 
                    className="btn-chevron" 
                    onClick={() => setShowReply(!showReply)}
                >
                    <img src={showReply ? ChevronUp : ChevronDown} alt="close/open"/>
                </button>
            </header>
        </div>
    )
}

export default Accordeon
