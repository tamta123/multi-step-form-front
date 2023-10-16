import * as yup from "yup";

const InfoSchema = yup.object().shape({name:yup.string().min(2).max(25).required("This field is required"),
email:yup.string().email().required("This field is required"),
mobile:yup.string()
.matches(/^\d{6,}$/, 'Invalid mobile number')
.required("This field is required")});

export default InfoSchema;
