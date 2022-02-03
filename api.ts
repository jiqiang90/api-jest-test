import { ApiPromise, WsProvider } from "@polkadot/api"
const provider = new WsProvider('wss://polkadot.api.onfinality.io/public-ws');

export async function apiService() : Promise<ApiPromise>{
    return ApiPromise.create({provider});
}
