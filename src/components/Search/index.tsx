import { GoSearch } from "react-icons/go";
import { type Dispatch, type SetStateAction, useState } from "react";
import StyledSearch from "./style";

export const Search = ({
  searchedVal,
  setSearchedVal
}: {
  searchedVal: string;
  setSearchedVal: Dispatch<SetStateAction<string>>;
}) => {
  const [isInputActive, setIsInputActive] = useState(false);

  return (
    <StyledSearch $isInputActive={isInputActive}>
      <div className="search__wrp">
        <input
          id="search-input"
          type="text"
          minLength={3}
          required
          placeholder="Qidirish..."
          onFocus={() => setIsInputActive(true)}
          onBlur={() => setIsInputActive(false)}
          value={searchedVal}
          onChange={({ target }) => setSearchedVal(target.value)}
        />
        <GoSearch className="search__icon" />
      </div>
    </StyledSearch>
  );
};
