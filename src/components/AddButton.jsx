// AddButton.jsx
import React from "react";
import { IoAddCircleOutline } from "react-icons/io5"; // เปลี่ยนตรงนี้


function AddButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backgroundColor: "#8fc076",
        color: "#fff",
        border: "none",
        padding: "0 10px",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "transform 0.2s ease ",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.11)";
        
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <IoAddCircleOutline size={20} />
      Add
    </button>
  );
}

export default AddButton;
