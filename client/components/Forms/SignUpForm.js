import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import * as Yup from "yup";
import Avatar from "../Avatar/Avatar";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Username must be between 4 and 16 characterss")
    .max(16, "Username must be between 4 and 16 characters")
    .required("Required"),
  email: Yup.string().email("Email not valid").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .test(
      "Password and confirm password are the same",
      "Password and confirm password must be the same",
      (value, context) => value === context.parent.password
    )
    .required("Required"),
});

const SignUpForm = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      avatar: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form style={{ marginTop: 20 }}>
      <Form.Group style={{ display: "flex", justifyContent: "center" }}>
        <Avatar imagePath="" onClick={() => console.log("avatar")} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="username"
          placeholder="Enter username"
          value={values.username}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.username && touched.username && (
          <Form.Text className="text-danger">{errors.username}</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.email && touched.email && (
          <Form.Text className="text-danger">{errors.email}</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.password && touched.password && (
          <Form.Text className="text-danger">{errors.password}</Form.Text>
        )}
      </Form.Group>

      <Form.Group>
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <Form.Text className="text-danger">
            {errors.confirmPassword}
          </Form.Text>
        )}
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
