import { Text } from "components/Text";
import { StyledPostAd } from "./style";
import { Input } from "components/Input";
import { ChangeEvent, useState } from "react";

const PostAd = () => {
  const [adForm, setAdForm] = useState({
    name: "",
    description: "",
    price: null,
    location: "",
    images: [],
    category: [],
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdForm({
      ...adForm,
      [name]: value,
    });
  };

  return (
    <StyledPostAd>
      <Text size="xl" bold={600}>
        E'lon joylash
      </Text>
      <form>
        <Input
          id="name"
          name="name"
          label="Mototsikl nomi/rusumi"
          value={adForm.name}
          onChange={onInputChange}
        />
      </form>
    </StyledPostAd>
  );
};
export default PostAd;
