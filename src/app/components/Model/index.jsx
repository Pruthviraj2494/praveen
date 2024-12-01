"use client";

import Image from "next/image";

import closeIcon from "@/images/close.svg";

import "./styles.scss";

const ImageModal = (props) => {
  const { onClose, children, style } = props;

  return (
    <div className="image-modal-overlay" onClick={onClose}>
      <div
        className="image-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-icons">
          <button className="close-button" onClick={onClose}>
            <Image src={closeIcon} alt="close icon" />
          </button>
        </div>
        <div className="image-modal-content" style={style ? style : {}}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
