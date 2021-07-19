import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Usuario from "../assets/icons/userCircle.svg";
import authContext from "../context/auth/authContext";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  // Extraer del context de autenticacion
  const authsContext = useContext(authContext);
  const { usuarioAutenticado } = authsContext;

  // State de mensajes
  const [mensaje, SetMensaje] = useState({});
  const [spinner, setSpinner] = useState(false);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      usuario: "",
      password: "",
    },
    validationSchema: Yup.object({
      usuario: Yup.string().required("El usuario es obligatorio"),
      password: Yup.string().required("La contraseña es obligatoria"),
    }),
    onSubmit: async valores => {
      const { usuario, password } = valores;

      try {
        const res = await axios.post(
          "https://oishicanete.herokuapp.com/api/v1/auth/iniciarSesion",
          valores,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          },
        );

        setSpinner(true);
        SetMensaje({
          estado: true,
          mensaje: "Bienvenido al sistema",
        });

        setTimeout(() => {
          if (res.data.access_token) {
            localStorage.setItem("token", res.data.access_token);
            router.push("/ventas/crearventas/enlocal");
          }
        }, 2000);
      } catch (e) {
        console.log(e);
        SetMensaje({
          estado: false,
          mensaje: "Error al iniciar sesion",
        });
      }
      setTimeout(() => {
        SetMensaje({
          estado: null,
          mensaje: null,
        });
      }, 3000);
    },
  });

  const mostrarMensaje = () => {
    if (mensaje.estado) {
      return (
        <div className="bg-green-200 px-3 my-5 mx-3 py-4 max-w-sm text-center  rounded shadow text-xl text-green-700">
          <p>{mensaje.mensaje}</p>
        </div>
      );
    }
    return (
      <div className="bg-red-200 px-3 my-5 mx-3 py-4 max-w-sm text-center  rounded shadow text-xl text-red-700">
        <p>{mensaje.mensaje}</p>
      </div>
    );
  };

  return (
    <Layout>
      <div className="m-5">
        <Image src="/groutse.png" width={300} height={80} quality={100} />

        <div className="bg-white pt-2 mt-12 rounded-md shadow">
          {mensaje.mensaje && mostrarMensaje()}
          <div className="flex justify-center mt-4">
            {spinner ? <Spinner /> : <Usuario className="w-16" />}
          </div>
          <h1 className=" my-3 text-center text-blue-900 font-medium text-xl">
            Iniciar Sesión
          </h1>
          <form onSubmit={formik.handleSubmit} className="px-5 py-2">
            <div className="mb-3">
              <label
                htmlFor="email"
                className="block text-gray-700 text-md font-normal "
              >
                Usuario:
              </label>
              <input
                id="usuario"
                type="text"
                placeholder="Nombre de usuario"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.usuario}
                className="border-b-2 border-red-900 appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-mone focus:shadow-outline"
              />
              {formik.touched.usuario && formik.errors.usuario ? (
                <div className=" mt-1 text-red-700  leading-4 rounded">
                  <p>{formik.errors.usuario}</p>
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="block text-gray-700 text-md font-normal"
              >
                Contraseña:
              </label>
              <input
                id="password"
                type="password"
                placeholder="Contraseña de usuario"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="border-b-2 border-red-900 appearance-none w-full py-2 text-gray-700 leading-tight focus:outline-mone focus:shadow-outline"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className=" mt-1  text-red-700 leading-4 rounded">
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
            </div>

            <div className="flex justify-center">
              <button
                className="my-4 rounded-full bg-blue-900 text-lg font-medium text-white shadow w-4/5 h-10 hover:bg-blue-800"
                type="submit"
              >
                Iniciar Sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
