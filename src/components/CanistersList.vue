<template>
    <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search by Canister Name"
                v-model="canister_name"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button"
                    @click="searchName"
                    >
                    Search
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Canisters List</h4>
            <ul class="list-group">
                <li class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(canister, index) in canisters"
                    :key="index"
                    @click="setActiveCanister(canister, index)"
                >
                    {{ canister.canister_name }}
                </li>
            </ul>
    
            <button class="m-3 btn btn-sm btn-danger" @click="removeAllCanisters">
                Remove All
            </button>
        </div>
        <div class="col-md-6">
            <div v-if="currentCanister">
                <h4>Canister</h4>
                <div>
                    <label><strong>Name:</strong></label> {{ currentCanister.canister_name }}
                    
                </div>
                <div>
                    <label><strong>Description:</strong></label> {{ currentCanister.canister_description }}
                </div>
                <div>
                    <label><strong>NDC 9 Digits:</strong></label> {{ currentCanister.ndc_9_digits }}
                </div>
                <div>
                    <label><strong>Status:</strong></label> {{ currentCanister.status == 1 ? "Activo" : "Inactivo" }}
                </div>

                <routerLink :to="'/canisters/' + currentCanister.id" class="badge badge-warning">Edit</routerLink>
            </div>
            <div v-else>
                <br />
                <p>Please click on a Canister...</p>
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
    import CanisterDataService from "../services/CanisterDataService";
  
    export default {
        name: "canisters-list",
        data() {
            return {
                canisters: [],
                currentCanister: null,
                currentIndex: -1,
                canister_name: ""
            };
        },
        methods: {
            retrieveCanisters() {
                CanisterDataService.getAll()
                .then(response => {
                    this.canisters = response.data;
                })
                .catch(e => {
                    console.log(e);
                });
            },

            refreshList() {
                this.retrieveCanisters();
                this.currentCanister = null;
                this.currentIndex = -1;
            },

            setActiveCanister(canister, index) {
                this.currentCanister = canister;
                this.currentIndex = canister ? index : -1;
            },

            removeAllCanisters() {
                CanisterDataService.deleteAll()
                .then(response => {
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });
            },
            
            searchName() {
                CanisterDataService.findByName(this.canister_name)
                .then(response => {
                    this.canisters = response.data;
                    this.setActiveCanister(null, null);
                })
                .catch(e => {
                    console.log(e);
                });
            }
        },
        mounted() {
            this.retrieveCanisters();
        }
    };
</script>
  
<style>
    .list {
        text-align: left;
        max-width: 750px;
        margin: auto;
    }
</style>