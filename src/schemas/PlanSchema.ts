import * as yup from "yup";

const PlanSchema = yup.object().shape({
  plan_choice: yup
    .string()
 
    .required()
    .oneOf(["arcade", "advanced", "pro"]),
});

export default PlanSchema;
