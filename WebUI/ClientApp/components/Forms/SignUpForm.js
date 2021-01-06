import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { signUp } from "../../store/actions/signUpActions";
import Avatar from "../Avatar/Avatar";

const validationSchema = Yup.object().shape({
  userName: Yup.string()
    .min(4, "Username must be between 4 and 16 characterss")
    .max(16, "Username must be between 4 and 16 characters")
    .required("Required"),
  email: Yup.string().email("Email not valid").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be between 8 and 16 characters")
    .max(16, "Password must be between 8 and 16 characters"),
  confirmPassword: Yup.string()
    .test(
      "Password and confirm password are the same",
      "Password and confirm password must be the same",
      (value, context) => value === context.parent.password
    )
    .required("Required"),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      avatar: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(signUp(values));
    },
  });

  return (
    <Form style={{ marginTop: 20 }}>
      <Form.Group style={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          imagePath=""
          onImageChange={(value) => setFieldValue("avatar", value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="userName"
          type="username"
          placeholder="Enter username"
          value={values.userName}
          onBlur={handleBlur}
          onChange={({ target: { value } }) =>
            setFieldValue("userName", value.toLowerCase())
          }
        />
        {errors.userName && touched.userName && (
          <Form.Text className="text-danger">{errors.userName}</Form.Text>
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
      <Button
        variant="primary"
        type="submit"
        disabled={useSelector(({ signUp: { loading } }) => loading)}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SignUpForm;
