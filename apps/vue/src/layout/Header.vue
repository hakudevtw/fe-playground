<template>
  <header class="py-3 border-b">
    <nav class="flex justify-center space-x-4">
      <router-link
        to="/"
        class="text-gray-500 hover:text-gray-900"
        active-class="text-blue-500 font-bold"
      >
        Home
      </router-link>
      <router-link
        to="/todos"
        class="text-gray-500 hover:text-gray-900"
        active-class="text-blue-500 font-bold"
      >
        Todo List
      </router-link>
    </nav>
  </header>
</template>
