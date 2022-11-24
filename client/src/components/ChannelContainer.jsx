import { Channel, useChatContext, MessageText } from "stream-chat-react";
import { ChannelInner } from "./ChannelInner";
import { CreateChannel } from "./CreateChannel";
import { EditChannel } from "./EditChannel";
import { TeamMessage } from "./TeamMessage";

export const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  const channel = useChatContext();

  if (isCreating) {
    return (
      <div className="channel_container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }

  if (isEditing) {
    return (
      <div className="channel_container">
        <EditChannel isEditing={isEditing} />
      </div>
    );
  }

  const EmptyState = () => (
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        This is the beginning of your chat history
      </p>
      <p className="channel-empty__second">
        Send Messages, attachments, links, emojis, and more!
      </p>
    </div>
  );
  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => <MessageText key={i} {...messageProps} />}
      >
        <ChannelInner setIsEditing={setIsEditing} />
      </Channel>
    </div>
  );
};
