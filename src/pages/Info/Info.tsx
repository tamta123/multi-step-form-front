import styled from "styled-components";
import { NextStep, WhiteBoard } from "../../components/Mutual";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InfoSchema from "../../schemas/PersonalInfoSchema";
import { updateData } from "../../store/customerSlice";
import { useDispatch, useSelector } from "react-redux";

const Info = () => {
  const dispatch = useDispatch();
  const FormData = useSelector((state) => state.customer);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(InfoSchema),
  });
  const onSubmit = (data) => {};
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
              placeholder={FormData.name}
            />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <Tittle htmlFor="email">Email Address:</Tittle>
            <br />
            <Input
              type="email"
              id="email"
              placeholder={FormData.email}
              {...register("email", {
                onChange: (e) =>
                  dispatch(
                    updateData({
                      property: "email",
                      value: e.target.value,
                    })
                  ),
              })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <Tittle htmlFor="mobile">Mobile:</Tittle>
            <br />
            <Input
              type="text"
              id="mobile"
              placeholder={FormData.mobile}
              {...register("mobile", {
                onChange: (e) =>
                  dispatch(
                    updateData({
                      property: "mobile",
                      value: e.target.value,
                    })
                  ),
              })}
            />
            <p>{errors.mobile?.message}</p>
          </div>
        </Form>
      </WhiteBoard>
      <NextStep type="button" onSubmit={handleSubmit(onSubmit)} />
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
