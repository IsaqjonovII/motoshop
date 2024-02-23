import { GoSearch } from "react-icons/go";
import { type Dispatch, type SetStateAction, useState } from "react";
import StyledSearch from "./style";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";
import { routes } from "constants/routes";

const { MOTOCYCLES } = routes;
export const Search = ({
  searchedVal,
  setSearchedVal,
  hasButton,
}: {
  searchedVal: string;
  setSearchedVal: Dispatch<SetStateAction<string>>;
  hasButton?: boolean;
}) => {
  const navigate = useNavigate();
  const [isInputActive, setIsInputActive] = useState(false);
  const navigateToAds = () => {
    if (searchedVal.length) {
      navigate(`${MOTOCYCLES}?query=${searchedVal}`);
    }
  };

  return (
    <StyledSearch $isInputActive={isInputActive}>
      <div className="search__wrp">
        <input
          id="search-input"
          type="text"
          minLength={3}
          required
          placeholder="E'lon nomi yoki turi bilan qidiring..."
          onFocus={() => setIsInputActive(true)}
          onBlur={() => setIsInputActive(false)}
          value={searchedVal}
          onChange={({ target }) => setSearchedVal(target.value)}
        />
        <GoSearch className="search__icon" />
      </div>
      {hasButton && (
        <Button type="submit" onClick={navigateToAds}>
          Qidirish
        </Button>
      )}
    </StyledSearch>
  );
};
