class ApiService {
    async fetchJson(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Помилка запиту до ${url}: ${res.status}`);
        }
        return res.json();
    }
}

module.exports = ApiService;
