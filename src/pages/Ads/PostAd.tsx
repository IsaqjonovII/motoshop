/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppSelector } from "hooks";
import { useUploadAdMutation } from "services/ad";
import { Text } from "components/Text";
import { StyledPostAd } from "./style";
import { Input } from "components/Input";
import { IPostAd } from "interfaces/forms";
import { Button } from "components/Button";
import { StyledInput } from "components/Input/style";
import { InputFile, InputSelect } from "components/Input/CustomInput";
import { bikeTypes } from "constants";
import { IServerError } from "interfaces";
import { Spinner } from "components/Loader";

const PostAd = () => {
  // const navigate = useNavigate();
  const [fileList, setFileList] = useState<string[]>([]);
  const [uploadAd, { data, isLoading, error }] = useUploadAdMutation();
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const [adForm, setAdForm] = useState<IPostAd>({
    name: "",
    description: "",
    price: 0,
    location: "",
    images: fileList,
    category: "",
    owner: userId!,
  });

  useEffect(() => {
    setAdForm({
      ...adForm,
      images: fileList,
    });
  }, [fileList, adForm]);

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
      category: category.split(" ")[0],
    });
  };
  const handleSubmit = async () => {
    await uploadAd(adForm);
    if ("ad" in data!) {
      toast.success(data.message);
    }
  };
  useEffect(() => {
    if (error) {
      const { status, data } = error as IServerError;
      if (status === "FETCH_ERROR") {
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
      if (data?.message) {
        toast.error(data?.message);
      }
    } 
  }, [error]);
  return (
    <StyledPostAd>
      {isLoading && (
        <Spinner isLoading={isLoading} loadingText="E'lon joylanmoqda" />
      )}
      <Text size="xl" bold={600} className="ad__title">
        E'lon joylash
      </Text>
      <br />
      <form className="post__form" autoComplete="off" onSubmit={handleSubmit}>
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
            className="inp__select"
            value={adForm.category}
            onChange={onSelectChange}
            options={bikeTypes}
          />
          <InputFile fileList={fileList} setFileList={setFileList} />
        </div>
        <Button type="submit" className="ad__btn">
          E&apos;lonni joylash
        </Button>
      </form>
    </StyledPostAd>
  );
};
export default PostAd;
