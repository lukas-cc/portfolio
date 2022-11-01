import Clock from "react-live-clock";

import React from "react";

export const ClockTimer = () => {
  return (
    <Clock
      date={"1999-05-05T00:00:00"}
      format={"dddd, MMMM Mo, YYYY, h:mm:ss"}
      ticking={true}
      timezone={"DE/Berlin"}
    />
  );
};
