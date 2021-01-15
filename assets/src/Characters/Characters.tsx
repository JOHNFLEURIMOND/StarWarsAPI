import React, { useState, useEffect } from "react";
import axios from "axios";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Animated } from "react-animated-css";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { space, flexbox, typography } from "styled-system";

import { fleurimondColors } from "../theme";

const ScheduleStyles = css({
  boxSizing: "border-box",
  minWidth: 0,
  fontSize: "1rem",
  color: fleurimondColors.black,
  lineHeight: "normal",
  fontWeight: 600,
  margin: 0,
  padding: "0",
  height: "700px",
  width: "100%",
  backgroundColor: fleurimondColors.white,

  img: {
    width: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "right",
    paddingLeft: "250px",
  },

  ".leftHalf": {
    width: "50%",
    display: "inline-block",
  },
  ".rightHalf": {
    width: "50%",
    display: "inline-block",
  },
  "*": {
    fontFamily: "Montserrat, sans-serif",
  },
});

const JFSchedule = (): JSX.Element => {
  const [message, setMessage] = useState<string>("Frontend");
  console.log(setMessage);
  useEffect(() => {
    const fetchData = async () => {
      axios.get("http swapi.dev/api/planets/1/").then((result) => {
        setMessage(result.data);
      });
    };
    fetchData();
  });

  return (
    <div>
      <Animated
        animationInDelay={0}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        isVisible
      >
        <pre>
          <code>{message && JSON.stringify(message, null, 4)}</code>
        </pre>
      </Animated>
    </div>
  );
};

const JFScheduleWithStyle = styled(JFSchedule, {
  shouldForwardProp,
})(ScheduleStyles, space, flexbox, typography);

export default JFScheduleWithStyle;
