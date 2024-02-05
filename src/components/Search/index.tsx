import React, { useCallback, useState } from "react";
import { useFetchSuggestions } from "@/hooks/use-fetch-suggestions";
import {
  InputCss,
  ListItemCss,
  ListItemLabelCss,
  SearchWrapperCss,
  UnorderedListCss,
} from "./Search.styles";
import { LocationSuggestion } from "@/api/fetch-suggestions";
import { Loading } from "@/components/Shared";

interface SearchLocationProps {
  onLocationSelected: (location: any) => void;
}

export const SearchLocation: React.FC<SearchLocationProps> = ({
  onLocationSelected,
}) => {
  const [query, setQuery] = useState("");
  const { suggestions, isLoading } = useFetchSuggestions(query);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onSuggestionClick = useCallback(
    (location: LocationSuggestion) => () => {
      onLocationSelected({
        lat: location.lat,
        lon: location.lon,
      });
      setShowSuggestions(false);
    },
    [onLocationSelected]
  );

  const onFocusHandler = () => {
    setShowSuggestions(true);
  };

  return (
    <SearchWrapperCss>
      <InputCss
        type="text"
        value={query}
        onChange={onChangeHandler}
        placeholder="Enter a location"
        onFocus={onFocusHandler}
      />
      {isLoading && <Loading />}

      {showSuggestions && (
        <UnorderedListCss>
          {suggestions.map((suggestion, index) => (
            <ListItemCss key={index} onClick={onSuggestionClick(suggestion)}>
              <ListItemLabelCss>{suggestion.display_name}</ListItemLabelCss>
            </ListItemCss>
          ))}
        </UnorderedListCss>
      )}
    </SearchWrapperCss>
  );
};
