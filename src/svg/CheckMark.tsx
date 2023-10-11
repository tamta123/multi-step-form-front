import styled from "styled-components";

const CheckMark = () => {
  return (
    <Svg>
      <path
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        d="m1 4 3.433 3.433L10.866 1"
      />
    </Svg>
  );
};

export default CheckMark;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 12px;
  height: 9px;
  cursor: pointer;
`;
