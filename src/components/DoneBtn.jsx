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
                color: "#6f9e58ff",
                border: "none",
                width: "50px",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "white",
                // transition: "transform 0.2s ease",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.11)";
                
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            <FaRegCheckCircle size={18} />
            Done
        </button>
    )
}
export default DoneBtn;