<script setup lang="ts"></script>
<template>
  <div class="container-fluid">
    <div class="row vh-100">
      <div id="bgImageLogin" class="col-md-6"></div>
      <div class="col-md-6 align-self-md-center">
        <p class="mx-auto w-75 mt-2 title">ConcertHub</p>
        <form>
          <div class="form-group mx-auto w-75">
            <label for="username" class="mt-3"> Username: </label>
            <input type="text" name="username" class="form-control" />
          </div>
          <div class="form-group mx-auto w-75">
            <label for="password" class="mt-3"> Password: </label>
            <input type="password" name="password" class="form-control" />
          </div>
          <div class="form-group mx-auto w-75">
            <label for="password" class="mt-3"> Confirm password: </label>
            <input type="password" name="password" class="form-control" />
          </div>
          <div class="form-group mx-auto w-75">
            <button type="button" class="btn btn-primary mt-5 form-control">Register</button>
          </div>
        </form>
        <p class="mx-auto w-75 mt-2">Already have an account? <RouterLink to="/">Log in here!</RouterLink></p>
      </div>
    </div>
  </div>
</template>
