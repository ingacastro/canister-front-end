<script setup lang="ts">
    //import TheWelcome from '../components/TheWelcome.vue'
    import axios from 'axios';
    import {onMounted, ref} from 'vue';
    
    let canisters = ref([]);
    // mounted
    onMounted(() => {
        // get api from laravel backend
        axios
            .get('http://localhost:8000/api/canisters')
            .then((res) => {
            // assign state users with response data
            canisters.value = res.data;
            })
            .catch((error) => {
            console.log(error.res.data);
            });
    });
    
</script>

<template>
    <main class="container flex items-center justify-center h-screen">
        <div class="flex flex-col">
            <div class="overflow-x-auto">
                <div class="p-1.5 w-full inline-block align-middle">
                    <div class="overflow-hidden border rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                    >
                                        NDC 9 Digits
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                                    >
                                        Created At
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr v-for="canister in canisters" :key="canister.id">
                                    <td
                                        class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                                    >
                                        {{ canister.id }}
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <RouterLink :to="'/canister/'+canister.id">{{ canister.canister_name }}</RouterLink>
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {{ canister.ndc_9_digits }}
                                    </td>
                                    <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {{ canister.created_at }}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
