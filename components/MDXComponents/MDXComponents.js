import styled from "styled-components";

export const HeadingThreeWithHighlight = ({ header, type }) => {
  if (header.split(" ").length > 1) {
    // Get the last word
    let lastWord = header.split(" ")[header.split(" ").length - 1];
    // turn the header into an array
    let headerArr = header.split(" ");
    // pop off that little man

    headerArr.pop();
    return (
      <h3>
        {headerArr.map((word) => word + " ")}{" "}
        <span className="hl">{lastWord}</span>
      </h3>
    );
  } else {
    return <h3>{header}</h3>;
  }
};

export const HeadingTwoWithHighlight = ({ header, type }) => {
  if (header.split(" ").length > 1) {
    // Get the last word
    let lastWord = header.split(" ")[header.split(" ").length - 1];
    // turn the header into an array
    let headerArr = header.split(" ");
    // pop off that little man

    headerArr.pop();
    return (
      <h2>
        {headerArr.map((word) => word + " ")}{" "}
        <span className="hl">{lastWord}</span>
      </h2>
    );
  } else {
    return <h2>{header}</h2>;
  }
};
export const HeadingOneWithHighlight = ({ header, type }) => {
  if (header.split(" ").length > 1) {
    // Get the last word
    let lastWord = header.split(" ")[header.split(" ").length - 1];
    // turn the header into an array
    let headerArr = header.split(" ");
    // pop off that little man

    headerArr.pop();
    return (
      <h1>
        {headerArr.map((word) => word + " ")}{" "}
        <span className="hl">{lastWord}</span>
      </h1>
    );
  } else {
    return <h1>{header}</h1>;
  }
};
