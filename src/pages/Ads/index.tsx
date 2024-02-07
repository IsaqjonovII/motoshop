import { useState } from "react";
import { bikeColors, bikeState, bikeTypes, engineCC, mileage } from "constants";
import StyledAds from "./style";
import CustomSelect from "components/Select";
import { Select } from "antd";

const Ads = () => {
  const [selectedBikeTypes, setSelectedBikeTypes] = useState<string[]>([]);
  const [selectedEngine, setSelectedEngine] = useState("");

  const handleEngine = (val: string | any) => {
    setSelectedEngine(val);
  };
  const handleBikeTypesChange = (value: string[]) =>
    setSelectedBikeTypes(value);
  console.log(selectedEngine, selectedBikeTypes);

  return (
    <StyledAds>
      <div className="filters__wrp">
        <CustomSelect
          mode="multiple"
          onChange={handleBikeTypesChange}
          options={bikeTypes}
          placeholder="Mototsikl turlarini tanlang"
        />
        <div className="filter">
          <Select
            defaultValue="barchasi"
            options={bikeState}
            onChange={handleEngine}
            placeholder="Mototsikl holati"
          />
        </div>
        <div className="filter">
          <Select
            defaultValue="50-250"
            options={engineCC}
            onChange={handleEngine}
            placeholder="Dvigatel hajmi"
          />
        </div>
        <div className="filter">
          <Select
            defaultValue="0-1000"
            options={mileage}
            onChange={handleEngine}
            placeholder="Dvigatel hajmi"
          />
        </div>
        <CustomSelect
          mode="multiple"
          onChange={handleBikeTypesChange}
          options={bikeColors}
          placeholder="Mototsikl turlarini tanlang"
        />
        <CustomSelect
          onChange={handleBikeTypesChange}
          mode="multiple"
          options={bikeTypes}
          placeholder="Mototsikl turlarini tanlang"
        />
      </div>
    </StyledAds>
  );
};
export default Ads;
