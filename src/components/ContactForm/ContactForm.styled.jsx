import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgb(253, 253, 253);
  border: 3px solid #1f1b1b;

  Label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    color: #1f1b1b;
    font-size: 20px;
  }

  Input {
    padding: 8px 12px;
    font: inherit;
    cursor: pointer;
  }

  Button {
    padding: 8px 12px;
    font: inherit;
    cursor: pointer;
    border-radius: 4px;
    border: 3px solid #1f1b1b;
    color: #1f1b1b;
    font-size: 20px;
  }
`;

export { Form };
