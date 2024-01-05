import { Text } from "components/Text";
import { StyledPostAd } from "./style";
import { Input } from "components/Input";
import { ChangeEvent, useState } from "react";
import { IPostAd } from "interfaces/forms";
import { StyledInput } from "components/Input/style";
import { InputFile, InputSelect } from "components/Input/CustomInput";
import { Button } from "components/Button";

const PostAd = () => {
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

  return (
    <StyledPostAd>
      <Text size="xl" bold={600}>
        E'lon joylash
      </Text>
      <br />
      <form className="post__form">
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
          <InputFile />

          <Button>E&apos;lonni joylash</Button>
        </div>
      </form>
    </StyledPostAd>
  );
};
export default PostAd;