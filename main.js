// To-Do
// 1. Ending count
// 2. Entity
// 3. Checkpoint
// 4. Invetory
// 5. Func Time Travel

/*
      Kelompok 3 Tugas Besar PBO
      Anggota Kelompok  : Erie Sudewo
                          I.P. Restu I.
                          Raihan Iqbal Pasya
      Jenis Software    : Game
      Nama Software     : Time Rift
*/

var prompt = require('prompt-sync')();

class entity {
    constructor(name, hitPoint, experience, atk) {
        this.name = name
        this.hitPoint = hitPoint
        this.experience = experience
        this.atk = atk
    }
}

class player extends entity {
    constructor(name, hitPoint, experience, atk, choice, inventory) {
        super(name, hitPoint, experience, atk)
        this.choice = choice
        this.inventory = inventory
    }
}

class boss extends entity {
    constructor(hitPoint, experience, atk) {
        super(name, hitPoint, experience, atk)
    }
}

class item extends entity {
    constructor(regen, hitPoint, expBoost, experience, atkBoost, atk) {
        super(hitPoint, experience, atk)
        this.regen = regen
        this.expBoost = expBoost
        this.atkBoost = atkBoost
    }
}

class weapon {
    constructor(wpAtk, wpExp) {
        this.wpAtk = wpAtk
        this.wpExp = wpExp
    }
}

console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log('***************************[Time Rift]*******************************');
console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
console.log();
console.log('.');
console.log('..');
console.log('...');

const player
