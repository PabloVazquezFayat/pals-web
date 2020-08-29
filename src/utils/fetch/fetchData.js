import axios from "axios";
import tokenConfig from "../token/tokenConfig";

export default function () {
  return {
    fetchUserData: {
      create: (data, cb) => {
        axios
          .post("http://localhost:4000/api/user/create", data)
          .then((res) => {
            cb(res.data);
          })
          .catch((error) => {
            return error;
          });
      },
      read: (cb) => {
        axios
          .get("http://localhost:4000/api/user/read", tokenConfig())
          .then((res) => {
            cb(res.data);
          })
          .catch((error) => {
            return error;
          });
      },
      update: (data, cb) => {
        axios
          .post("http://localhost:4000/api/user/update", tokenConfig(), data)
          .then((res) => {
            cb(res.data);
          })
          .catch((error) => {
            return error;
          });
      },
      delete: (data, cb) => {
        axios
          .delete("http://localhost:4000/api/user/delete", tokenConfig(), data)
          .then((res) => {
            cb(res.data);
          })
          .catch((error) => {
            return error;
          });
      },
      login: (data, cb) => {
        if (data.email && data.password) {
          axios
            .post("http://localhost:4000/api/user/login", {
              email: data.email,
              password: data.password,
            })
            .then((res) => {
              if (res.data.auth === true) {
                sessionStorage.setItem("psAuth_token", res.data.token);
                cb();
              } else if (res.data.auth === false) {
                console.log(res.data.message);
              }
            })
            .catch((error) => {
              console.log(error.message);
              return error;
            });
        } else {
          return { error: "Email or password not valid" };
        }
      },
    },
  };
}
