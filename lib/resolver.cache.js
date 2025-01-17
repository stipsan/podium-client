/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

'use strict';

const clonedeep = require('lodash.clonedeep');
const abslog = require('abslog');
const assert = require('assert');

module.exports = class PodletClientCacheResolver {
    constructor(registry, options = {}) {
        assert(
            registry,
            'you must pass a "registry" object to the PodletClientCacheResolver constructor',
        );

        Object.defineProperty(this, 'registry', {
            value: registry,
        });

        Object.defineProperty(this, 'log', {
            value: abslog(options.logger),
        });
    }

    get [Symbol.toStringTag]() {
        return 'PodletClientCacheResolver';
    }

    load(state) {
        return new Promise(resolve => {
            if (state.status !== 'stale') {
                const cached = this.registry.get(state.resourceName);
                if (cached) {
                    state.manifest = clonedeep(cached);
                    state.status = 'cached';
                    this.log.debug(
                        `loaded manifest from cache - resource: ${
                            state.resourceName
                        }`,
                    );
                }
            }
            resolve(state);
        });
    }

    save(state) {
        return new Promise(resolve => {
            if (state.status === 'fresh') {
                this.registry.set(
                    state.resourceName,
                    state.manifest,
                    state.maxAge,
                );
                this.log.debug(
                    `saved manifest to cache - resource: ${state.resourceName}`,
                );
            }

            state.killRecursions++;

            resolve(state);
        });
    }
};
