<template>
  <div class="block">
    <form class="bg-white">
      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 uppercase"
          for="email"
        >
          E-mail
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Enter e-mail address"
          v-model.trim="$v.email.$model"
          :class="$v.email.$error ? 'is-invalid' : ''"
        />
        <div>
          <span
            v-if="$v.email.$error && !$v.email.required"
            class="error-msg"
          >
            Email field is required
          </span>
          <span
            v-else-if="$v.email.$error && !$v.email.email"
            class="error-msg"
          >
            Please enter a valid email address
          </span>
        </div>
      </div>
      <div class="mb-6">
        <div class="flex justify-between mb-2">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold mb-2 uppercase"
            >Password</label
          >
          <a href="#" class="text-sm text-gray-500 font-semi-bold"
            >Forgot your password?</a
          >
        </div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter Password"
          v-model.trim="$v.password.$model"
          :class="$v.password.$error ? 'is-invalid' : ''"
        />
        <div v-if="$v.password.$error">
          <span
            v-if="!$v.password.required"
            class="error-msg"
          >
            Password field is required
          </span>
          <span
            v-else-if="!$v.password.minLength"
            class="error-msg"
          >
            Password field must contain 8 characters.
          </span>
        </div>
      </div>
      <div class="flex items-center justify-between mt-40">
        <button
          class="button w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6
            rounded focus:outline-none focus:shadow-outline"
          type="button"
          :disabled="$v.$invalid || isLoading"
          @click="onSubmit"
        >
          <span class="button__text"> Sign In </span>
          
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import Toasters from "./../mixins/toasters";
import axios from 'axios';

export default {
  name: "LoginComponent",
  mixins: [Toasters],
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      this.isLoading = true;
      await axios.post('http://127.0.0.1:3000/', {}, {
        auth: {
          username: this.email,
          password: this.password
        }
      }).then(response => {
        localStorage.setItem('token', response.data?.access_token)
        this.resetData();
        this.success("LoggedIn successfully.");
      }).catch(() => {
        this.error('Oops, something went wrong.')
      })
      this.isLoading = false;
    },
    resetData() {
      this.email = '';
      this.password = '';
      this.$v.$reset();
    }
  },
};
</script>

<style scoped>

</style>