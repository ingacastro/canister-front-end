<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
            <label for="title">Canister Name</label>
            <input
                type="text"
                class="form-control"
                id="name"
                required
                v-model="canister.canister_name"
                name="title"
            />
            </div>

            <div class="form-group">
            <label for="description">Description</label>
            <input
                class="form-control"
                id="description"
                required
                v-model="canister.description"
                name="description"
            />
            </div>

            <button @click="saveCanister" class="btn btn-success">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newCanister">Add</button>
        </div>
    </div>
</template>
  
<script lang="ts">
    import CanisterDataService from "../services/CanisterDataService";

    export default {
        name: "add-canister",
        data() {
            return {
                canister: {
                    id: null,
                    canister_name: "",
                    description: "",
                    published: false
                },
                submitted: false
            };
        },
        methods: {
            saveCanister() {
            var data = {
                title: this.canister.canister_name,
                description: this.canister.description
            };

            CanisterDataService.create(data)
                .then(response => {
                    this.canister.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
            },
            
            newCanister() {
                this.submitted = false;
                this.canister = {};
            }
        }
    };
</script>
  
  <style>
  .submit-form {
    max-width: 300px;
    margin: auto;
  }
  </style>