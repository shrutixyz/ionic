import * as React from "react";
import Spaces from "@ably/spaces";
import { useAbly } from "ably/react";
import { useState } from "react";
import { getSpaceNameFromUrl } from "../../utils/helper";

const SpacesContext = React.createContext(undefined);

const SpaceContextProvider = ({ example, children }) => {
  const [space, setSpace] = useState(undefined);
  const client = useAbly();

  const spaces = React.useMemo(() => {
    return new Spaces(client);
  }, [example]);

  React.useEffect(() => {
    let ignore = false;
    const spaceName = getSpaceNameFromUrl();

    const init = async () => {
      const spaceInstance = await spaces.get(spaceName, {
        offlineTimeout: 10_000,
      });

      if (spaceInstance && !space && !ignore) {
        setSpace(spaceInstance);
      }
    };

    init();

    return () => {
      ignore = true;
    };
  }, [spaces]);

  return (
    <SpacesContext.Provider value={space}>{children}</SpacesContext.Provider>
  );
};

export { SpaceContextProvider, SpacesContext };
