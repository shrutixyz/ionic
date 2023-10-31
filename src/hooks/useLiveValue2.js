import { useChannel } from "ably/react";
import { useCallback, useState } from "react";

import { getSpaceNameFromUrl } from "../utils/helper";

export const useLiveValue = (componentName, self) => {
  const [value, setValue] = useState("");

  /** 💡 Use rewind to get the last message from the channel. See https://ably.com/docs/channels/options/rewind 💡 */
  const channelName = `[?rewind=1]probably-still-could-${componentName}`;
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
