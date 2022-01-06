import React, { ChangeEvent, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import SingUp from "../components/SingUp";
import Message from "../components/Message";
import { useApp } from "../context/appContext";

const usersManagement: NextPage = () => {
  const [messageText, setMessageText] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(false);
  const [userType, setUserType] = useState("student");
  const { user } = useApp();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserType(e.target.value);
  };
  return (
    <Layout>
      <Head>
        <title>Admin Users</title>
      </Head>
      {user.role === "admin" ? (
        <>
          <h1 className="text-center">Creación de usuarios</h1>
          {visibility && <Message message={messageText} />}
          <select
            onChange={handleChange}
            className={"form-control"}
            defaultValue={"student"}
          >
            <option value="admin">Administrador</option>
            <option value="student">Estudiante</option>
            <option value="professor">Profesor</option>
          </select>
          <SingUp
            type={userType}
            setVisibility={setVisibility}
            setMessageText={setMessageText}
          />{" "}
        </>
      ) : (
        <h1 className="text-center text-danger mt-3">Accesso denegado</h1>
      )}
    </Layout>
  );
};

export default usersManagement;
