<template>
  <div class="flex items-center justify-center mt-20">
    <div
      class="
        flex flex-col
        w-full
        p-20
        m-8
        bg-white
        rounded-md
        lg:m-0 lg:w-1/3
        sm:p-10
      "
    >
      <div class="flex flex-wrap">
        <div class="w-full">
          <div
            class="
              shadow
              rounded
              border
              h-12
              mt-4
              flex
              p-1
              relative
              items-center
              bg-gray-200
            "
          >
            <ul class="w-full flex mb-0 list-none flex-wrap flex-row">
              <li class="cursor-pointer last:mr-0 flex-auto text-center">
                <router-link
                  style="padding: 8px 0"
                  class="text-md rounded block leading-normal text-slate-600"
                  to="/login"
                  :class="{'bg-white' : $route.name === 'login'}"
                >
                  <i class="fas fa-space-shuttle text-base mr-1"></i> Sign in
                </router-link>
              </li>
              <li class="cursor-pointer last:mr-0 flex-auto text-center">
                <router-link
                  style="padding: 8px 0"
                  class="text-md rounded block leading-normal text-slate-600"
                  to="/register"
                  :class="{'bg-white' : $route.name === 'register'}"
                >
                  <i class="fas fa-cog text-base mr-1"></i> Register
                </router-link>
              </li>
            </ul>
          </div>
          <div
            class="
              relative
              flex flex-col
              min-w-0
              break-words
              bg-white
              w-full
              mb-6
              rounded
            "
          >
            <div class="py-5 flex-auto">
              <div class="tab-content tab-space">
                <router-view></router-view>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 500ms ease-out;
}
.error-msg {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: #dc3545;
  font-weight: 500 !important;
}
</style>

