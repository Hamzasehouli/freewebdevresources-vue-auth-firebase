<template>
  <section class="auth">
    <base-card
      content="spinner"
      v-if="$store.getters.isPending"
      title="loading..."
    >
    </base-card>
    <base-card v-if="error" title="Error"> {{ errorMessage }} </base-card>
    <form v-else class="form" @submit.prevent="submitForm">
      <h1 v-if="mode === 'login'">Login</h1>
      <h1 v-else>Signup</h1>
      <div v-if="mode === 'signup'" class="form__entity">
        <label for="firstname"> First name </label>
        <input
          :class="{ invalid: !firstNameValid }"
          id="firstname"
          v-model.trim="firstName"
          type="text"
        />
        <span class="invalid" v-if="!firstNameValid"
          >Please enter your first name</span
        >
      </div>
      <div v-if="mode === 'signup'" class="form__entity">
        <label for="lastname"> Last name </label>
        <input
          :class="{ invalid: !lastNameValid }"
          id="lastname"
          v-model.trim="lastName"
          type="text"
        />
        <span class="invalid" v-if="!lastNameValid"
          >Please enter your last name</span
        >
      </div>
      <div class="form__entity">
        <label for="email"> Email </label>
        <input
          :class="{ invalid: !emailValid }"
          v-model.trim="email"
          id="email"
          type="email"
        />
        <span class="invalid" v-if="!emailValid"
          >Please enter a valid email</span
        >
      </div>
      <div class="form__entity">
        <label for="password"> Password </label>
        <input
          :class="{ invalid: !passwordValid }"
          v-model.trim="password"
          id="password"
          min="8"
          type="password"
        />
        <span class="invalid" v-if="!passwordValid"
          >Password must have at least 8 char</span
        >
      </div>
      <div v-if="mode === 'signup'" class="form__entity">
        <label for="confirm"> Coonfirm password </label>
        <input
          :class="{ invalid: !confirmPasswordValid }"
          v-model.trim="confirmPassword"
          id="confirm"
          min="8"
          type="password"
        /><span class="invalid" v-if="!confirmPasswordValid"
          >Please confirm your password</span
        >
      </div>

      <base-press class="anchor" mode="flat" type="submit">Submit</base-press>
      <base-press
        class="anchor"
        type="button"
        mode="empty"
        @click="changeMode('login')"
        v-if="mode === 'signup'"
      >
        Login
      </base-press>
      <base-press
        class="anchor"
        @click="changeMode('signup')"
        v-else
        mode="empty"
        type="button"
        >Signup</base-press
      >
    </form>
  </section>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { ref, onMounted, watch } from "vue";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const mode = ref("login");
    const firstName = ref("");
    const lastName = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const formIsInvalid = ref(false);
    const error = ref(false);
    const errorMessage = ref("Something went wrong, please try again later");

    const firstNameValid = ref(true);
    const lastNameValid = ref(true);
    const emailValid = ref(true);
    const passwordValid = ref(true);
    const confirmPasswordValid = ref(true);

    onMounted(function () {
      document.title = "Authentication";
      if (route.query.auth !== "login" && route.query.auth !== "signup") return;

      mode.value = route.query.auth || "login";
    });

    const replaceMain = function () {
      router.replace({ name: "Main" });
    };

    const submitForm = async function () {
      firstNameValid.value = firstName.value === "" ? false : true;
      lastNameValid.value = lastName.value === "" ? false : true;
      if (email.value === "" || !email.value.split("@")[1].includes(".")) {
        emailValid.value = false;
      } else {
        emailValid.value = true;
      }
      if (
        password.value === "" ||
        password.value === "" ||
        password.value.length < 8
      ) {
        passwordValid.value = false;
      } else {
        passwordValid.value = true;
      }
      if (
        confirmPassword.value === "" ||
        confirmPassword.value === "" ||
        confirmPassword.value.length < 8 ||
        password.value !== confirmPassword.value
      ) {
        confirmPasswordValid.value = false;
      } else {
        confirmPasswordValid.value = true;
      }
      if (
        email.value === "" ||
        !email.value.includes("@") ||
        !email.value.split("@")[1].includes(".") ||
        password.value === "" ||
        password.value.length < 8
      ) {
        formIsInvalid.value = true;
        return;
      }

      if (mode.value === "signup") {
        if (
          firstName.value === "" ||
          lastName.value === "" ||
          confirmPassword.value === "" ||
          confirmPassword.value.length < 8 ||
          password.value !== confirmPassword.value
        ) {
          formIsInvalid.value = true;
          return;
        }
      }

      if (mode.value === "login") {
        await store.dispatch("auth/login", {
          email: email.value,
          password: password.value,
        });
        if (!store.getters["auth/isLoggedIn"]) {
          error.value = true;

          errorMessage.value = store.getters["auth/getErrorMessage"]
            .split("_")
            .join(" ");
          setTimeout(() => {
            error.value = false;
          }, 3000);
          return;
        }

        replaceMain();
      }
      if (mode.value === "signup") {
        await store.dispatch("auth/signup", {
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          password: password.value,
        });

        if (!store.getters["auth/isLoggedIn"]) {
          error.value = true;
          errorMessage.value = store.getters["auth/getErrorMessage"];
          setTimeout(() => {
            error.value = false;
          }, 3000);
          return;
        }
        replaceMain();
      }
    };

    const changeMode = function (state) {
      mode.value = state;
      router.replace(`/auth?auth=${mode.value}`);
    };

    watch(route, () => {
      if (route.query.auth !== "login" && route.query.auth !== "signup") return;

      mode.value = route.query.auth || "login";
    });

    return {
      mode,
      submitForm,
      changeMode,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      error,
      errorMessage,
      firstNameValid,
      lastNameValid,
      emailValid,
      passwordValid,
      confirmPasswordValid,
    };
  },
};
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7rem 0;
}

.form {
  h1 {
    margin-bottom: 3rem;
  }
  border-radius: 5px;
  box-shadow: 2px 2px 20px rgba(95, 94, 94, 0.425);
  border: 2px solid var(--color-main-black);
  padding: 2rem;
  min-width: 50rem;
  @media only screen and (max-width: 34rem) {
    min-width: 80% !important;
  }

  &__entity {
    margin-bottom: 2rem;
    label,
    input {
      display: block;
    }
    label {
      margin-bottom: 1rem;
    }
    input {
      padding: 1rem 0.5rem;
      outline: none;
      border: none;
      border: 2px solid var(--color-main-black);
      width: 100%;
    }
  }
}

.invalid {
  border: 2px solid red !important;
}

.anchor {
  @media only screen and (max-width: 19rem) {
    display: block;
    text-align: center;
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>
