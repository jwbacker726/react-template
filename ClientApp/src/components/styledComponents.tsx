import styled from "styled-components";

export const OrangeDiv = styled.div`
  padding: 0 10px;
  background-color: orange;
  transition: color 1s 1.5s, background-color 2s, border-radius 2s;
  margin-top: 4em;

  :hover {
    background-color: blue;
    border-radius: 10px;
    color: white;
  }
`;

export const PrettyBorder = styled.div`
  padding: 1em;
  border: 2px solid purple;
  border-radius: 5px;
  margin: 2em;
`;

export const MyMessage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

export const AnimationHost = styled.div`
    position: relative;
    border: 1px solid gray;
    border-radius: 10px;
    height: 300px;
    width: 150px;
`;


export const MyButton = styled.button`
  border-radius: 10px;
  background-color: steelblue;
  color: white;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  border: 1px solid black;
  transition: background-color 0.5s;

  :hover {
    background-color: midnightblue;
  }
`;

export const RemoveButton = styled.button`
  background-color: red;
  cursor: pointer;
  margin-left: 2em;
`;
