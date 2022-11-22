import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelContainer } from "./components/ChannelContainer";
import { ChannelListContainer } from "./components/ChannelListContainer";

import "./App.css";
import { Auth } from "./components/Auth";

const apiKey = "wkgpqm3anwcp";
const client = StreamChat.getInstance(apiKey);
const authToken = false;

export const App = () => {
  if (!authToken) return <Auth />;
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team dark">
        <ChannelListContainer />

        <ChannelContainer />
      </Chat>
    </div>
  );
};
