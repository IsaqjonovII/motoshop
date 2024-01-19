/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { RadioChangeEvent } from "antd";
import { useAppSelector } from "hooks";
import { useUploadAdMutation } from "services/ad";
import { Text } from "components/Text";
import { StyledPostAd } from "./style";
import { Input } from "components/Input";
import { IPostAd } from "interfaces/forms";
import { Button, RadioButton } from "components/Button";
import { StyledInput } from "components/Input/style";
import { InputFile, InputSelect } from "components/Input/CustomInput";
import { adTypes, bikeTypes } from "constants";
import { IServerError } from "interfaces";
import { Spinner } from "components/Loader";

const PostAd = () => {
  const [selectedAdType, setSelectedAdType] = useState<
    string | null | undefined
  >("moto");
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
    engineSize: "",
    mileage: "",
    manufacturedAt: "",
    contactLinks: [],
  });

  useEffect(() => {
    setAdForm({
      ...adForm,
      images: fileList,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileList]);

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
  const onChange = (e: RadioChangeEvent) => setSelectedAdType(e.target.value);
  return (
    <StyledPostAd>
      {isLoading && (
        <Spinner isLoading={isLoading} loadingText="E'lon joylanmoqda" />
      )}
      <Text size="xl" bold={600} className="ad__title">
        E'lon joylashtirish
      </Text>
      <br />

      <form className="post__form" autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <div className="flex">
            <StyledInput>
              <label className="inp__label">E&apos;lon turini tanlang</label>
              <RadioButton chilren={adTypes} onChange={onChange} />
            </StyledInput>
          </div>
          <Input
            id="name"
            name="name"
            label="E'longa nom bering"
            placeholder="Masalan Yamaha R1"
            value={adForm.name}
            onChange={onInputChange}
          />
          <InputFile fileList={fileList} setFileList={setFileList} />

          <StyledInput>
            <label className="inp__label" htmlFor="moto-info-description">
              Izoh
            </label>
            <textarea
              name="description"
              id="moto-info-description"
              cols={76}
              rows={10}
              minLength={40}
              placeholder="Eng kamida 40 ta belgi yozing"
              value={adForm.description}
              onChange={onInputChange}
            ></textarea>
          </StyledInput>
          <Input
            id="price"
            name="price"
            type="number"
            label="Narxi(so'm)"
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
          {selectedAdType?.includes("moto") && (
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
          )}
          {selectedAdType?.includes("helmet") && <h1>Shlm</h1>}
        </div>
        <Button type="submit" className="ad__btn">
          E&apos;lonni joylash
        </Button>
      </form>
    </StyledPostAd>
  );
};
export default PostAd;
