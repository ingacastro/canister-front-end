<script setup lang="ts">
    import { useRoute } from 'vue-router';
    import axios from "axios";
    import {onMounted, ref} from 'vue';
    
    const route = useRoute();  
    const id = route.params.id;
    console.log(id);
    let canister = ref([]);
    axios.get('http://localhost:8000/api/canisters/'+id)
        .then((res) => {
        // assign state users with response data
            canister.value = res.data;
            console.log(canister);
        })
        .catch((error) => {
            console.log(error.res.data);
        });

    
    
</script>

<template>
    <div class="edit-form">
        <h4>Tutorial</h4>
            <form>
                <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title"
                    v-model="canister.canister_name"
                />
                </div>
                <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description"
                    v-model="canister.canister_description"
                />
                </div>
        
                <div class="form-group">
                <label><strong>Status:</strong></label>
                {{ canister.status == 1 ? "Published" : "Pending" }}
                </div>
            </form>
  
        <button class="badge badge-primary mr-2"
            
            @click=""
        >
            UnPublish
        </button>
        
  
        <button class="badge badge-danger mr-2"
            @click=""
        >
            Delete
        </button>
  
        <button type="submit" class="badge badge-success"
            @click=""
        >
            Update
        </button>
        <p>{{ canister.ndc_9_digits }}</p>
    </div>
</template>
  
