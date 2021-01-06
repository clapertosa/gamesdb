import PropTypes from "prop-types";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background: ${({ imagePath }) => (imagePath ? `url(${imagePath})` : "gray")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;

  span {
    color: white;
    font-weight: bold;
    font-size: 24px;
  }
`;

const Cross = styled.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: salmon;
  font-size: 1.5rem;
  font-weight: bold;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
`;

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const Avatar = ({ imagePath, onImageChange }) => {
  const [image, setImage] = useState(imagePath);
  const onChange = (e) => {
    const unit = 1024;
    const { files } = e.target;
    if (files[0].size / unit / unit > 1.5)
      toast.error("Image too big, max file size 1.5mb");
    else
      toBase64(files[0]).then((res) => {
        setImage(URL.createObjectURL(files[0]));
        onImageChange(res);
      });
  };

  return (
    <div style={{ position: "relative" }}>
      {(imagePath || image) && (
        <Cross
          onClick={(e) => {
            e.stopPropagation();
            setImage(null);
          }}
        >
          X
        </Cross>
      )}
      <label htmlFor="file-input">
        <Container imagePath={imagePath || image}>
          {!imagePath && !image && <span>Select Avatar</span>}
        </Container>
      </label>
      <input
        id="file-input"
        type="file"
        accept="image/x-png,image/gif,image/jpeg"
        style={{ display: "none" }}
        onChange={onChange}
      />
    </div>
  );
};

Avatar.propTypes = {
  imagePath: PropTypes.string,
  onImageChange: PropTypes.func.isRequired,
};

Avatar.defaultProps = {
  imagePath: "",
};

export default Avatar;
