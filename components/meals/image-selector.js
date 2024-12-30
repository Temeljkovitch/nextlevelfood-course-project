"use client";
import { useRef, useState } from "react";
import styles from "./image-selector.module.css";
import Image from "next/image";

const ImageSelector = ({ label, name }) => {
  const [image, setImage] = useState();
  const imageInput = useRef();
  const handleSelectorClick = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = (url) => {
      setImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.selector}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!image && <p>No image selected yet.</p>}
          {image && <Image src={image} alt="image selected by the user" fill />}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          type="button"
          onClick={handleSelectorClick}
          className={styles.button}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImageSelector;
