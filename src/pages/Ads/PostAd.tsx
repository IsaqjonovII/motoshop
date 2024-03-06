/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, Form, Switch } from "antd";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { type ChangeEvent, useEffect, useState } from "react";
import type { DatePickerProps, RadioChangeEvent } from "antd";
import { StyledPostAd } from "./style";
import { useAppSelector } from "hooks";
import { IServerError } from "interfaces";
import { IGearAd, IMotoAd } from "interfaces/forms";
import {
  adTypes,
  bikeColors,
  bikeTypes,
  condition,
  currencies,
  gearSizes,
} from "constants";
import { useUploadAdMutation } from "services/ad";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Spinner } from "components/Loader";
import { StyledInput } from "components/Input/style";
import { Button, RadioButton } from "components/Button";
import { InputFile, InputSelect } from "components/Input/CustomInput";
import CustomSelect from "components/Select";

const PostAd = () => {
  const navigate = useNavigate();
  const [selectedAdType, setSelectedAdType] = useState<string>("moto");
  const [fileList, setFileList] = useState<string[]>([]);
  const [uploadAd, { data, isLoading, error }] = useUploadAdMutation();
  const userId = useAppSelector(({ auth }) => auth.user?._id);
  const [adForm, setAdForm] = useState<IMotoAd | IGearAd>({
    title: "",
    description: "",
    price: {
      amount: "",
      currency: "",
      canBargain: false,
    },
    location: "",
    images: fileList,
    category: "",
    owner: userId!,
    engineSize: "",
    mileage: "",
    manufacturedAt: "",
    color: [],
    size: "",
    brand: "",
    condition: "",
    adType: selectedAdType,
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
  const onSelectChange = (fieldName: string, value: any) => {
    console.log(value);

    setAdForm({
      ...adForm,
      [fieldName]: value,
    });
  };

  const onDateChange: DatePickerProps["onChange"] = (_, dateString) => {
    setAdForm({
      ...adForm,
      manufacturedAt: dateString,
    });
  };
  const handleSubmit = async () => {
    const description = adForm.description.replace(/\n/g, "<br />");
    await uploadAd({
      ...adForm,
      description,
    });
  };
  useEffect(() => {
    if (data) {
      toast.success(data.message);
      navigate("/");
    }
  }, [data, navigate]);
  useEffect(() => {
    if (error) {
      console.log(error);
      const { data, status } = error as IServerError;
      if (data?.message) {
        toast.error(data.message);
      }
      if (isNaN(parseInt(status))) {
        toast.error("Serverda xatolik. Iltimos birozdan so'ng urinib ko'ring");
      }
      console.log(error);
    }
  }, [error]);

  const onChange = (e: RadioChangeEvent) => {
    setSelectedAdType(e.target.value);
    setAdForm({
      ...adForm,
      adType: e.target.value,
    });
  };
  const onPriceChange = (fieldName: string, value: any) => {
    setAdForm({
      ...adForm,
      price: {
        ...adForm.price,
        [fieldName]: value,
      },
    });
  };
  const checkFormIsValid = () => {
    const requiredFields = [
      "title",
      "description",
      "price.amount",
      "price.currency",
      "location",
      "images",
    ];
    return requiredFields.every((field) => {
      const value = getNestedValue(adForm, field);
      return value !== undefined && value !== "";
    });
  };

  function getNestedValue(object: any, path: string) {
    const keys = path.split(".");
    return keys.reduce(
      (val, key) => (val && val[key] !== "undefined" ? val[key] : undefined),
      object
    );
  }
  return (
    <StyledPostAd>
      {isLoading && <Spinner isLoading={isLoading} fixed />}
      <Text size="xl" bold={600} className="ad__title">
        E'lon joylashtirish
      </Text>
      <br />

      <Form className="post__form" autoComplete="off">
        <div>
          <div className="flex">
            <StyledInput>
              <label className="inp__label">E&apos;lon turini tanlang</label>
              <RadioButton chilren={adTypes} onChange={onChange} />
            </StyledInput>
          </div>
          <Input
            id="title"
            name="title"
            label="E'longa nom bering"
            placeholder="Masalan Yamaha R6"
            value={adForm.title}
            onChange={onInputChange}
          />
          <InputFile fileList={fileList} setFileList={setFileList} />
          <small>Maksimal 10 tagacha rasm joylash mumkin</small>
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
              placeholder="E'longa tushunarli va batafsil tarif bering"
              value={adForm.description}
              onChange={onInputChange}
            ></textarea>
          </StyledInput>
          <div>
            <div className="price__wrp">
              <Input
                id="price-amount"
                name="amount"
                type="number"
                label="Narxi"
                min={0}
                value={adForm.price.amount}
                onChange={({ target }) => onPriceChange("amount", target.value)}
              />
              <InputSelect
                id="currency"
                name="currency"
                label="Pul birligini tanlang"
                value={adForm.price.currency}
                onChange={(e: any) => onPriceChange("currency", e)}
                options={currencies}
              />
            </div>
            <div className="switch__wrp">
              <span>Kelishuv asosida</span>
              <Switch onChange={(e: any) => onPriceChange("canBargain", e)} />
            </div>
          </div>
          <Input
            id="moto-localtion"
            name="location"
            label="Manzil"
            value={adForm.location}
            onChange={onInputChange}
          />
        </div>
        <div>
          {selectedAdType !== "gear" && (
            <StyledInput>
              <label className="inp__label">Rangini tanlang</label>
              <CustomSelect
                mode="tags"
                placeholder=""
                onChange={(e: any) => onSelectChange("color", e)}
                options={bikeColors}
              />
            </StyledInput>
          )}
          {selectedAdType === "moto" && (
            <>
              <InputSelect
                id="moto-type"
                name="category"
                label="Turini tanlang"
                placeholder="Masalan sportbike"
                className="inp__select"
                value={(adForm as IMotoAd)?.category || ""}
                onChange={(e: any) => onSelectChange("category", e)}
                options={bikeTypes}
              />
              <Input
                id="moto-cc"
                name="engineSize"
                label="Dvigatel hajmi"
                placeholder="Masalan 600 cm³"
                type="number"
                min={0}
                value={(adForm as IMotoAd)?.engineSize || ""}
                onChange={onInputChange}
              />
              <Input
                id="moto-mileage"
                name="mileage"
                label="Bosgan yo'li"
                placeholder="0 km"
                minLength={0}
                min={0}
                type="number"
                value={(adForm as IMotoAd)?.mileage || ""}
                onChange={onInputChange}
              />
              <StyledInput>
                <label className="inp__label">Ishlab chiqarilgan sana</label>
                <DatePicker
                  className="date__input"
                  onChange={onDateChange}
                  picker="year"
                  disabledDate={(current) => current.year() > 2024}
                />
              </StyledInput>
            </>
          )}
          {selectedAdType === "helmet" && (
            <>
              <InputSelect
                id="helmet-size"
                name="size"
                label="O'lchami"
                value={(adForm as IGearAd)?.size}
                onChange={(e: any) => onSelectChange("size", e)}
                options={gearSizes}
              />
              <InputSelect
                id="condition"
                name="condition"
                label="Holati"
                value={(adForm as IGearAd)?.condition}
                onChange={(e: any) => onSelectChange("condition", e)}
                options={condition}
              />
              <Input
                id="brand"
                name="brand"
                label="Brand"
                value={(adForm as IGearAd)?.brand}
                onChange={onInputChange}
              />
            </>
          )}
        </div>
        {isLoading ? (
          <Button type="button">E&apos;lon joylanmoqda</Button>
        ) : (
          <button
            type="submit"
            className="ad__btn"
            onClick={handleSubmit}
            disabled={!checkFormIsValid()}
          >
            E&apos;lonni joylash
          </button>
        )}
      </Form>
    </StyledPostAd>
  );
};
export default PostAd;
