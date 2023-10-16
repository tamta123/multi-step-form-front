import { useState } from "react";
import styled from "styled-components";

const PersonalInfo = ({ register, errors }) => {
  return (
    <div>
      <Form>
        <div>
          <Tittle htmlFor="name">Name:</Tittle>
          <br />
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            ref={register}
          />
          <p>{errors.name?.message}</p>
        </div>
        <div>
          <Tittle htmlFor="email">Email Address:</Tittle>
          <br />
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            ref={register}
          />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <Tittle htmlFor="mobile">Mobile:</Tittle>
          <br />
          <Input
            type="text"
            id="mobile"
            name="mobile"
            value={mobile}
            onChange={handleMobileChange}
            ref={register}
          />
          <p>{errors.mobile?.message}</p>
        </div>
      </Form>
    </div>
  );
};

export default PersonalInfo;

const Form = styled.label`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Tittle = styled.label`
  color: #022959;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #d6d9e6;
  background: #fff;
  padding-left: 16px;
  color: #9699aa;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
