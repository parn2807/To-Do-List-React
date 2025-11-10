import { FaRegCheckCircle } from "react-icons/fa";
function DoneBtn({ onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "none",
                // color: "#fff",
                border: "none",
                width: "50px",
                borderRadius: "10px",
                cursor: "pointer",
                // transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.11)";
                e.currentTarget.style.backgroundColor = "#8cbf72ff";
                
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.backgroundColor = "#b6d8a5ff";
            }}
        >
            <FaRegCheckCircle size={18} />
            Done
        </button>
    )
}
export default DoneBtn;