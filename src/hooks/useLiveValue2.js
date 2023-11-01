import { useChannel } from "ably/react";
import { useCallback, useState } from "react";

export const useLiveValue = (componentName, self) => {
  const [value, setValue] = useState("");

  const url = new URL(window.location.href);
  const spaceNameInParams = url.searchParams.get("space");
  

  /** 💡 Use rewind to get the last message from the channel. See https://ably.com/docs/channels/options/rewind 💡 */
  const channelName = `[?rewind=1]${spaceNameInParams}-${componentName}`;
  const { channel } = useChannel(channelName, (message) => {
    if (message.connectionId === self?.connectionId) return;
    setValue(message.data);
  });

  const handleChange = useCallback(
    (nextValue) => {
      setValue(nextValue);
      channel.publish("update", nextValue);
    },
    [channel],
  );

  return [value, handleChange];
};
