import { Select } from "antd";
import { ChangeEvent } from "react";
import { StyledInput } from "./style";
import { getBase64 } from "utils";
import { FiTrash } from "react-icons/fi";
import { IInput } from "interfaces/components";

interface IFileInput {
  fileList: string[];
  setFileList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const InputSelect = ({
  id,
  className,
  label,
  placeholder,
  value,
  options,
  onChange,
}: IInput) => {
  return (
    <StyledInput>
      <label className="inp__label" htmlFor={id}>
        {label}
      </label>
      <Select
        id={id}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        tokenSeparators={[" "]}
        getPopupContainer={(trigger) => trigger.parentElement}
        options={options}
      />
    </StyledInput>
  );
};

export const InputFile = ({ fileList, setFileList }: IFileInput) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newFiles: File[] = Array.from(files);

      Promise.all(newFiles.map((file) => getBase64(file)))
        .then((base64Strings) => {
          setFileList((prev) => [...prev, ...base64Strings]);
        })
        .catch((error) => console.error("Error converting to base64:", error));
    }
  };

  const handleRemoveImage = (index: number) => {
    setFileList((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <StyledInput>
      <label className="inp__label">Rasm Yuklash</label>
      <div className="container">
        <label htmlFor="inputfile" className="add__image">
          <span>+</span>
          Rasm yuklash
        </label>
        <input
          id="inputfile"
          type="file"
          accept="image/*"
          disabled={fileList.length >= 10}
          onChange={handleInputChange}
          multiple
        />
        <div className="selected__images">
          {fileList.map((base64String, index) => (
            <div key={index} className="image__container">
              <img
                className="preview__image"
                src={base64String}
                alt={`Image ${index + 1}`}
              />
              <button
                type="button"
                className="remove__image"
                onClick={() => handleRemoveImage(index)}
              >
                <FiTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </StyledInput>
  );
};
