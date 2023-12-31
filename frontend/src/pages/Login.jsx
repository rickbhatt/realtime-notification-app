import React from "react";
import { userLoginAction } from "../redux/action/authenticationAction";
import { useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await dispatch(userLoginAction()).unwrap();
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-96">
      <Input type="email" />
      <Input type="password" />
    </form>
  );
};

export default Login;
