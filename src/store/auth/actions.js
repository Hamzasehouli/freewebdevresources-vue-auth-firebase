import router from "../../router/index.js";

let timer;
const authenticate = async function (context, payload, mode) {
  try {
    const res = await fetch(
      `${
        mode === "login"
          ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBM0dhrKQAhhlrry8s6uAXGVz9CbTjHAzU"
          : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBM0dhrKQAhhlrry8s6uAXGVz9CbTjHAzU"
      }
    `,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: payload.email,
          password: payload.password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      throw { code: data.error.code, message: data.error.message };
    }

    return {
      email: data.email,
      expiresIn: data.expiresIn,
      localId: data.localId,
      idToken: data.idToken,
      date: Date.now() + 60 * 60 * 1000,
    };
  } catch (err) {
    return err;
  }
};
const addDataToLocalStorage = async function (context, payload, mode) {
  context.commit("isLoggedIn", false);
  context.commit("setPending", true, { root: true });
  const data = await authenticate(context, payload, mode);
  context.commit("setPending", false, { root: true });

  if (!data.idToken) {
    context.commit("setErrorMessage", data.message);
    return;
  }
  await context.commit("isLoggedIn", true);

  await context.commit("setUser", data);
  window.localStorage.setItem("token", data.idToken);
  window.localStorage.setItem("email", data.email);
  window.localStorage.setItem("localId", data.localId);
  window.localStorage.setItem("date", data.date);
};
export default {
  async login(context, payload) {
    await addDataToLocalStorage(context, payload, "login");
  },
  async signup(context, payload) {
    await addDataToLocalStorage(context, payload, "signup");
  },
  fetchUserData(context, payload) {
    context.commit("setUser", payload);
  },
  checkLogged(context, mode) {
    context.commit("isLoggedIn", mode);
  },
  setTimer(context) {
    const expireIn = window.localStorage.getItem("date") - Date.now();
    if (expireIn < 0) return;
    timer = setTimeout(() => {
      context.commit("isLoggedIn", false);
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("localId");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("date");
      context.commit("setUser", {});
      router.replace({ name: "Auth" });
    }, expireIn);
  },
  clearSetTimer() {
    clearTimeout(timer);
  },
};
