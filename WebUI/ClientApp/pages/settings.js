import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import SettingsForm from "../components/Forms/SettingsForm";

const Container = styled.div``;

const Settings = () => {
  const user = useSelector(({ user }) => user);
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && !JSON.parse(user)?.token) router.push("/");
  }, [router, user]);

  return <Container>{user.isAuthenticated && <SettingsForm />}</Container>;
};

export default Settings;
