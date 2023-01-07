// import { writable, derived } from 'svelte/store';
import { localStore } from '../data/localStore.js'
export const _clicker = localStore('nwp_clicker', {
    money: 0,
    moneyup: 1,
    msec: 0,
    upcost: 15,
    catcost: 25,
    workercost: 250,
    upown: 0,
    catown: 0,
    workerown: 0,
    catadd: 1,
    workadd: 15,
    cboost: 1,
    wboost: 1,
    catmax: 0,
    workmax: 0
});

export const _settings = localStore('nwp_settings', {
    op1: false,
    op2: false,
    op3: false,
    op4: false
});

const addcomma = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");