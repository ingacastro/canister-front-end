import http from "../http-common";

class CanisterDataService {
    getAll() {
        return http.get("/canisters");
    }

    get(id) {
        return http.get(`/canisters/${id}`);
    }

    create(data) {
        return http.post("/canisters", data);
    }

    update(id, data) {
        return http.put(`/canisters/${id}`, data);
    }

    updateStatus(id, status) {
        return http.put(`/canister_status/${id}`, status);
    }


    delete(id) {
        return http.delete(`/canisters/${id}`);
    }
    
    deleteAll() {
        return http.delete(`/canisters`);
    }

    findByName(canister_name) {
        return http.get(`/canister_name/${canister_name}`);
    }
}

export default new CanisterDataService();