import React from "react";
import { useFormik } from "formik";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { signIn } from "../../store/actions/signInActions";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email not valid").required("Required"),
  password: Yup.string().required("Required")
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: (values) => {
      dispatch(signIn(values));
    }
  });

  return (
    <Form style={{ marginTop: 20 }}>
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
      <Button
        variant="primary"
        type="submit"
        disabled={useSelector(({ signIn: { loading } }) => loading)}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default SignInForm;
