import { Select, Upload } from "antd";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { StyledInput } from "./style";
import { IInput } from "interfaces/components";
import { bikeTypes } from "constants";
import { useState } from "react";

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
export const InputFile = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <StyledInput>
      <Upload
        action=""
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {" "}
        {fileList.length < 5 && "+ Upload"}
      </Upload>
    </StyledInput>
  );
};
