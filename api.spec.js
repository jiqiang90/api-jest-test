"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0
const api_1 = require("./api");
const TEST_BLOCKHASH = '0x70070f6c1ad5b9ce3d0a09e94086e22b8d4f08a18491183de96614706bf59600'; // kusama #6721189
jest.setTimeout(90000);
describe('ApiService', () => {
    it('can spy on get metdata', async () => {
        const api = await (0, api_1.apiService)();
        const getMetaSpy = jest.spyOn(api._rpcCore.state.getMetadata, 'raw');
        const apiAt = await api.at(TEST_BLOCKHASH);
        await apiAt.query.system.events();
        // expect(getMetaSpy).toBeCalledTimes(1);
    });
});
