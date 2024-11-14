import "./Values.css"

export default function Values({ title, icon, text }) {
    return (
        <div className="feature-item">
            <img src={icon} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    );
}

