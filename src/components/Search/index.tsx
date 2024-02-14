import { useState } from "react";
import { GoSearch } from "react-icons/go";
import StyledSearch from "./style";
import { Button } from "components/Button";

export const SearchNavbar = () => {
  const [searchVal, setSearchVal] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <StyledSearch $isInputActive={isInputActive}>
      <div className="search__wrp">
        <GoSearch className="search__icon" />
        <input
          id="search-input"
          type="text"
          minLength={3}
          name="search-input"
          placeholder="Qidirish..."
          onFocus={() => setIsInputActive(true)}
          onBlur={() => setIsInputActive(false)}
          value={searchVal}
          onChange={({ target }) => setSearchVal(target.value)}
        />
        <Button className="search__btn">Qidirish</Button>
      </div>
    </StyledSearch>
  );
};
