import { ChangeEvent, useState } from "react";
import { Text } from "components/Text";
import { StyledPostAd } from "./style";
import { Input } from "components/Input";
import { IPostAd } from "interfaces/forms";
import { Button } from "components/Button";
import { StyledInput } from "components/Input/style";
import { InputFile, InputSelect } from "components/Input/CustomInput";
import { toast } from "react-toastify";

const PostAd = () => {
  const [fileList, setFileList] = useState<string[]>([]);
  const [adForm, setAdForm] = useState<IPostAd>({
    name: "",
    description: "",
    price: 0,
    location: "",
    images: [],
    category: "",
  });
  const onInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAdForm({
      ...adForm,
      [name]: value,
    });
  };
  const onSelectChange = (category: string | any) => {
    setAdForm({
      ...adForm,
      category,
    });
  };
  async function uploadToCloudinary(file: string) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_present", "motoshop");
    formData.append("cloud_name", "doswy0zdn");
    return fetch("https://api.cloudinary.com/v1_1/doswy0zdn/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }

  const handleImgUpload = async () => {
    try {
      const cloudinaryResponses = await Promise.all(
        fileList.map((file) => uploadToCloudinary(file))
      );

      const imageUrls = cloudinaryResponses.map((res) => res.secure_url);
      setAdForm({
        ...adForm,
        images: imageUrls,
      });
    } catch (error) {
      toast.error(
        "Rasmlarni yuklashda xatolik bo'ldi. Iltimos qaytadan urinib ko'ring"
      );
      console.log(error);
    }
  };
  const handleSubmit = () => {
    handleImgUpload();
    console.log(adForm);
  };
  return (
    <StyledPostAd>
      <Text size="xl" bold={600}>
        E'lon joylash
      </Text>
      <br />
      <form className="post__form" autoComplete="off">
        <div>
          <Input
            id="name"
            name="name"
            label="Mototsikl nomi/rusumi"
            value={adForm.name}
            onChange={onInputChange}
          />
          <StyledInput>
            <label className="inp__label" htmlFor="moto-info-descriptionF">
              Izoh
            </label>
            <textarea
              name="description"
              id="moto-info-description"
              cols={76}
              rows={10}
              value={adForm.description}
              onChange={onInputChange}
            ></textarea>
          </StyledInput>
          <Input
            id="price"
            name="price"
            type="number"
            label="Mototsikl narxi(so'm)"
            value={adForm.price}
            onChange={onInputChange}
          />
          <Input
            id="moto-localtion"
            name="location"
            label="Manzil"
            value={adForm.location}
            onChange={onInputChange}
          />
        </div>
        <div>
          <InputSelect
            id="moto-type"
            name="category"
            label="Mototsikl turini tanlang"
            placeholder="Masalan sportbike"
            value={adForm.category}
            onChange={onSelectChange}
          />
          <InputFile fileList={fileList} setFileList={setFileList} />

          <Button onClick={handleSubmit}>E&apos;lonni joylash</Button>
        </div>
      </form>
    </StyledPostAd>
  );
};
export default PostAd;
