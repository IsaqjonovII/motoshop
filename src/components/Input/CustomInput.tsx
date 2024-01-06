import { Select } from "antd";
import { StyledInput } from "./style";
import { bikeTypes } from "constants";
import { IInput } from "interfaces/components";

export const InputSelect = ({
  id,
  className,
  label,
  placeholder,
  value,
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
        showSearch
        placeholder={placeholder}
        onChange={onChange}
        getPopupContainer={(trigger) => trigger.parentElement}
        options={bikeTypes}
      />
    </StyledInput>
  );
};

import { ChangeEvent } from "react";

interface IFileInput {
  fileList: string[];
  setFileList: React.Dispatch<React.SetStateAction<string[]>>;
}

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

  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
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
                X
              </button>
            </div>
          ))}
        </div>
      </div>
    </StyledInput>
  );
};
