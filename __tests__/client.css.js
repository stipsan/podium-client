'use strict';

const Client = require('../');
const Faker = require('../test/faker');

/**
 * .css()
 */

test('client.css() - get all registered css assets - should return array with all css assets defined in manifests', async () => {
    const serverA = new Faker({ name: 'aa', assets: { css: 'a.css' } });
    const serverB = new Faker({ name: 'bb', assets: { css: 'b.css' } });
    const serviceA = await serverA.listen();
    const serviceB = await serverB.listen();

    const client = new Client();
    const a = client.register(serviceA.options);
    const b = client.register(serviceB.options);

    await Promise.all([a.fetch(), b.fetch()]);

    expect(client.css()).toEqual(['a.css', 'b.css']);

    await serverA.close();
    await serverB.close();
});

test('client.css() - one manifest does not hold css asset - should return array where non defined css asset is omitted', async () => {
    const serverA = new Faker({ name: 'aa', assets: { css: 'a.css' } });
    const serverB = new Faker({ name: 'bb', assets: { css: 'b.css' } });
    const serverC = new Faker({ name: 'cc' });
    const serviceA = await serverA.listen();
    const serviceB = await serverB.listen();
    const serviceC = await serverC.listen();

    const client = new Client();
    const a = client.register(serviceA.options);
    const b = client.register(serviceB.options);
    const c = client.register(serviceC.options);

    await Promise.all([a.fetch(), b.fetch(), c.fetch()]);

    expect(client.css()).toEqual(['a.css', 'b.css']);

    await serverA.close();
    await serverB.close();
    await serverC.close();
});
