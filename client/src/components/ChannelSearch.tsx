import { useEffect, useState } from "react";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../assets";

export const ChannelSearch = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannel = async (text: any) => {
    try {
      //TODO: fetch Channels
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event: any) => {
    event.preventDefault();
    setLoading(true);
    setQuery(event.target.value);
    getChannel(event.target.value);
  };
  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};
