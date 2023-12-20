<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
    name: "app";
</script>


<template>
    <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <routerLink to="/" class="navbar-brand">Canister Menu</routerLink>
            <div class="navbar-nav mr-auto">
                <li class="nav-item">
                    <routerLink to="/canisters" class="nav-link">Canisters</routerLink>
                </li>
                <li class="nav-item">
                    <routerLink to="/add" class="nav-link">Add Canister</routerLink>
                </li>
            </div>
        </nav>

        <div class="container mt-3">
            <RouterView />
        </div>
    </div>
</template>
