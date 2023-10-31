import { useChannel } from "ably/react";
import { useCallback, useEffect, useState } from "react";

import { getSpaceNameFromUrl } from "../utils/helper";

export const useLiveValue = (componentName, self) => {
  const [value, setValue] = useState("");

  /** 💡 Use rewind to get the last message from the channel. See https://ably.com/docs/channels/options/rewind 💡 */
  const channelName = `[?rewind=1]${getSpaceNameFromUrl()}-${componentName}`;

  const [didSetOption, setDidSetOption] = useState(false);
  const [channel] = useChannel(
    didSetOption
      ? { 
        
        channelName:channelName ,
        callbackOnMessage: (message) => {
          if (message.connectionId === self?.connectionId) return;
          setValue(message.data);
        },

      }
      : {
            channelName:channelName ,
        callbackOnMessage: (message) => {
          if (message.connectionId === self?.connectionId) return;
          setValue(message.data);
        },
          options: {
            params: { occupancy: "metrics" },
            modes: ["SUBSCRIBE"],
          },
        },
  );



  // const { channel } = useChannel(channelName, (message) => {
  //   if (message.connectionId === self?.connectionId) return;
  //   setValue(message.data);
  // });

    useEffect(() => {
    setDidSetOption(true);
  }, [channel]);

  const handleChange = useCallback(
    (nextValue) => {
      setValue(nextValue);
      channel.publish("update", nextValue);
    },
    [channel],
  );

  console.log(value, "value live")

  return [value, handleChange];
};
