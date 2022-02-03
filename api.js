"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiService = void 0;
const api_1 = require("@polkadot/api");
const provider = new api_1.WsProvider('wss://polkadot.api.onfinality.io/public-ws');
async function apiService() {
    return api_1.ApiPromise.create({ provider });
}
exports.apiService = apiService;
