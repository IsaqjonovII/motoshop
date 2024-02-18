import { useState } from "react";
import { GoSearch } from "react-icons/go";
import StyledSearch from "./style";

export const Search = () => {
  const [searchVal, setSearchVal] = useState("");
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <StyledSearch $isInputActive={isInputActive}>
      <div className="search__wrp">
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
        <GoSearch className="search__icon" />
      </div>
    </StyledSearch>
  );
};
