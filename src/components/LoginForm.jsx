import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "sonner";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://127.0.0.1:5000/api/login", values);
        toast.success("Login Successful");
      } catch (err) {
        toast.error("Login Failed");
      }
    },
  });

  return (
    <div className="flex justify-center mt-[50px]">
    <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 dark:bg-violet-200 text-gray-100 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Sign in</h1>
        <p className="text-sm text-gray-600 dark:text-gray-800">
          Sign in to access your account
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="leroy@jenkins.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="#"
                className="text-xs hover:underline text-gray-400 dark:text-gray-600"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
            >
              Sign in
            </button>
          </div>
          <p className="px-6 text-sm text-center text-gray-400 dark:text-gray-600">
            Don't have an account yet?
            <a
              rel="noopener noreferrer"
              href="#"
              className="hover:underline text-violet-400 dark:text-violet-600"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </form>
    </div></div>
  );
};

export default LoginForm;
