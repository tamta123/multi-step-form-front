import styled from "styled-components";
import { NextStep, WhiteBoard } from "../../components/Mutual";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InfoSchema from "../../schemas/PersonalInfoSchema";
import { updateData } from "../../store/customerSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const FormData = useSelector((state) => state.customer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InfoSchema),
  });

  const onSubmit = (data) => {
    navigate("/Plan");
  };

  return (
    <div
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <WhiteBoard
        title="Personal info"
        description="Please provide your name, email address, and phone number."
      >
        <Form>
          <div>
            <Tittle htmlFor="name">Name:</Tittle>
            <br />
            <Input
              {...register("name", {
                onChange: (e) =>
                  dispatch(
                    updateData({
                      property: "name",
                      value: e.target.value,
                    })
                  ),
              })}
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              style={{
                borderColor: errors.name ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.name?.message}</Error>
          </div>
          <div>
            <Tittle htmlFor="email">Email Address:</Tittle>
            <br />
            <Input
              type="email"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              {...register("email", {
                onChange: (e) =>
                  dispatch(
                    updateData({
                      property: "email",
                      value: e.target.value,
                    })
                  ),
              })}
              style={{
                borderColor: errors.email ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.email?.message}</Error>
          </div>
          <div>
            <Tittle htmlFor="mobile">Mobile:</Tittle>
            <br />
            <Input
              type="text"
              id="mobile"
              placeholder="e.g. +1 234 567 890"
              {...register("mobile", {
                onChange: (e) =>
                  dispatch(
                    updateData({
                      property: "mobile",
                      value: e.target.value,
                    })
                  ),
              })}
              style={{
                borderColor: errors.mobile ? "#ee374a" : "#d6d9e6",
              }}
            />
            <Error>{errors.mobile?.message}</Error>
          </div>
        </Form>
      </WhiteBoard>
      <NextStep
        type="button"
        onSubmit={handleSubmit(onSubmit)}
        nextPage={"/Plan"}
      />
    </div>
  );
};
export default Info;

const Form = styled.form`
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

const Error = styled.p`
  color: #ee374a;
  text-align: right;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
