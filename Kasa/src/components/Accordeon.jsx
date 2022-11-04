const Accordeon = ({ question }) => {
const { title } = question;
return (
        <div className="accordeon">
            <header className="accordeon-header">
                <h3>{title}</h3>
                <button></button>
            </header>
        </div>
    )
}
export default Accordeon
