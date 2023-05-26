import "./Contacts.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { customTheme } from "../../assets/styleMUI";
import { ThemeProvider } from "@mui/material/styles";

const validationSchema = yup.object({
  firstname: yup
    .string("Enter your name")
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  secondname: yup
    .string("Enter your second name"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
   organizationName: yup
    .string("Enter your message"),
  message: yup
    .string("Enter your message")
});

const Contacts = () => {
  const contactUs = `Contact us`;
  const formik = useFormik({
    initialValues: {
      firstname: "",
      secondname:"",
      email: "",
      organizationName:"",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="contacts">
      <div className="contacts_block_img">
        <div className="contacts_block_title">{contactUs}</div>
        <div className="contacts_img"></div>
      </div>

      <form className="contact_form" onSubmit={formik.handleSubmit}>
        <ThemeProvider theme={customTheme}>
          <div className="contact_form_input">
            <TextField
              fullWidth
              id="firstname"
              name="firstname"
              label="First Name"
              type="firstname"
              variant="filled"
              value={formik.values.firstname}
              onChange={formik.handleChange}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
            <TextField
              fullWidth
              id="secondname"
              name="secondname"
              label="Second Name"
              type="secondname"
              variant="filled"
              value={formik.values.secondname}
              onChange={formik.handleChange}
              error={
                formik.touched.secondname && Boolean(formik.errors.secondname)
              }
              helperText={formik.touched.secondname && formik.errors.secondname}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="filled"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="organizationName"
              name="organizationName"
              label="Organization Name"
              type="organizationName"
              variant="filled"
              value={formik.values.organizationName}
              onChange={formik.handleChange}
              error={
                formik.touched.organizationName &&
                Boolean(formik.errors.organizationName)
              }
              helperText={
                formik.touched.organizationName &&
                formik.errors.organizationName
              }
            />
          </div>
          <div className="contact_form_input_area">
            <TextField
              fullWidth
              multiline
              rows={8}
              id="message"
              name="message"
              label="Message"
              type="message"
              variant="filled"
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </ThemeProvider>
      </form>
    </div>
  );
};
export default Contacts;