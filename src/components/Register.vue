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
        <div v-if="$v.email.$error">
          <span
            v-if="!$v.email.required"
            class="error-msg"
          >
            Email field is required
          </span>
          <span
            v-else-if="!$v.email.email"
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
            class="block text-gray-700 text-sm font-bold uppercase"
            >Create A Password</label
          >
        </div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter password"
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
      <div class="mb-6">
        <div class="flex justify-between mb-2">
          <label
            for="password"
            class="block text-gray-700 text-sm font-bold uppercase"
            >Confirm Password</label
          >
        </div>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="confirmPassword"
          type="password"
          placeholder="Confirm password"
          v-model.trim="$v.confirmPassword.$model"
          :class="$v.confirmPassword.$error ? 'is-invalid' : ''"
        />
        <div v-if="$v.confirmPassword.$error">
          <span
            v-if="!$v.confirmPassword.required"
            class="error-msg"
          >
            Password field is required
          </span>
          <span
            v-else-if="!$v.confirmPassword.sameAsPassword"
            class="error-msg"
          >
            Password and Confirm Password should match
          </span>
        </div>
      </div>
      <div class="flex items-start mt-40">
        <div class="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            v-model="termsCondition"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="terms" class="font-light text-gray-500 dark:text-gray-300"
            >I accept the
            <a
              class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              href="#"
              >Terms and Conditions</a
            ></label
          >
        </div>
      </div>
      <div class="flex items-center justify-between mt-5">
        <button
          class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          :disabled="$v.$invalid"
          @click="register"
        >
          Register
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "RegisterComponent",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      termsCondition: false
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
    confirmPassword: {
      required,
      sameAsPassword: sameAs('password')
    },
    termsCondition: {
      sameAs: sameAs( () => true ) 
    }
  },
  methods: {
    register() {
      console.log('registered successfully');
    }
  }
};
</script>
