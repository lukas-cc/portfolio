import Clock from "react-live-clock";

import React from "react";

export const ClockTimer = () => {
  return (
    <Clock
      format={"dddd, MMMM Mo, YYYY, h:mm:ss"}
      ticking={true}
      timezone={"Europe/Berlin"}
    />
  );
};
