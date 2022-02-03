// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0
import {apiService} from './api';

jest.setTimeout(90000);
Error.stackTraceLimit = Infinity;
describe('ApiService', () => {
    it('can spy on get metdata', async () => {
        const api = await apiService();
        const blockHash = await api.rpc.chain.getBlockHash(2);
        const getMetaSpy = jest.spyOn((api as any)._rpcCore.state.getMetadata, 'raw');
        const apiAt = await api.at(blockHash.toString());
        await apiAt.query.system.events()
        expect(getMetaSpy).toBeCalledTimes(1);
        await api.disconnect()
    });
});
