<template>
    <div v-if="currentCanister" class="edit-form">
        <h4>Canister</h4>
        <form>
            <div class="form-group">
                <label for="canister_name">Canister Name</label>
                <input type="text" class="form-control" id="canister_name"
                    v-model="currentCanister.canister_name"
                />
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description"
                    v-model="currentCanister.canister_description"
                />
            </div>

            <div class="form-group">
                <label for="ndc_9_digits">NDC 9 Digits</label>
                <input type="text" class="form-control" id="ndc_9_digits"
                    v-model="currentCanister.ndc_9_digits"
                />
            </div>
    
            <div class="form-group">
                <label><strong>Status:</strong></label>
                {{ currentCanister.status == 1 ? "Activo" : "Inactivo" }}
            </div>
        </form>
  
        <button class="badge badge-primary mr-2"
            v-if="currentCanister.status == 0"
            @click="updateStatus(1)"
        >
            Activar
        </button>
        <button v-else class="badge badge-primary mr-2"
            @click="updateStatus(0)"
        >
            Desactivar
        </button>
    
        <button class="badge badge-danger mr-2"
            @click="deleteCanister"
        >
            Delete
        </button>
    
        <button type="submit" class="badge badge-success"
            @click="updateCanister"
        >
            Update
        </button>
        <p>{{ message }}</p>
    </div>
  
    <div v-else>
        <br />
        <p>Please click on a Canister...</p>
    </div>
</template>
  
<script lang="ts">
    import CanisterDataService from "../services/CanisterDataService";
    
    export default {
        name: "canister",
        data() {
            return {
                currentCanister: null,
                message: ''
            };
        },
        methods: {
            getCanister(id) {
                CanisterDataService.get(id)
                .then(response => {
                    this.currentCanister = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
            },
    
            updateStatus(status) {
                var data = {
                    id: this.currentCanister.id,
                    status: status
                };
    
                CanisterDataService.updateStatus(this.currentCanister.id, {"status":status})
                .then(response => {
                    this.currentCanister.status = status;
                    this.message = 'The status was updated successfully!';
                })
                .catch(e => {
                    console.log(e);
                });
            },
    
            updateCanister() {
                CanisterDataService.update(this.currentCanister.id, this.currentCanister)
                .then(response => {
                    this.message = 'The Canister was updated successfully!';
                })
                .catch(e => {
                    console.log(e);
                });
            },
    
            deleteCanister() {
                CanisterDataService.delete(this.currentCanister.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({ name: "Canisters" });
                })
                .catch(e => {
                    console.log(e);
                });
            }
        },
        mounted() {
        this.message = '';
        this.getCanister(this.$route.params.id);
        }
    };
</script>
  
<style>
    .edit-form {
        max-width: 300px;
        margin: auto;
    }
</style>