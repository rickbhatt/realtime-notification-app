import React, { useState } from "react";
import { userLoginAction } from "../redux/action/authenticationAction";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      let response = await dispatch(
        userLoginAction({ email, password })
      ).unwrap();
      console.log(Cookies.get("rememberMe"));
    } catch (error) {}
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-5 border border-slate-400 rounded-lg gap-5 w-96"
    >
      <div className="flex flex-col gap-3">
        <label htmlFor="email">Email</label>
        <Input
          name="email"
          id="email"
          value={formData.email}
          onChange={handleFormChange}
          type="email"
        />
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="password">Password</label>
        <Input
          name="password"
          id="password"
          value={formData.password}
          onChange={handleFormChange}
          type="password"
        />
      </div>
      <div className="flex justify-center">
        <Button className="w-full" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
};

export default Login;
