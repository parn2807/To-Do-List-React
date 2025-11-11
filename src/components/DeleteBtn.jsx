import { AiOutlineDelete } from "react-icons/ai";

function DeleteBtn({ onClick }) {
    return (
        <button
            onClick={onClick}
            style={{
                display: "flex",
                flexDirection: "column",
                border: "none",
                cursor: "pointer",
                alignItems: "center",
                borderRadius: "10px",
                width: "50px",
                backgroundColor: "white",
                color:"#d66161ff",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.11)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
            }}

        >
            <AiOutlineDelete size={18} />
            Delete
        </button>
    )
}
export default DeleteBtn;