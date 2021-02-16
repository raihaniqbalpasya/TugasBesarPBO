/*
      Kelompok 3 Tugas Besar PBO
      Anggota Kelompok  : Erie Sudewo
                          I.P. Restu I.
                          Raihan Iqbal Pasya
      Jenis Software    : Manajemen
      Nama Software     : Money Management
*/

var prompt = require('prompt-sync')();

let incList = []
let expList = []
let history = []

class user {
    constructor(name, money) {
        this.name = name
        this.money = money
    }
}

class expense {
    constructor(stuff, exp) {
        this.stuff = stuff
        this.exp = exp
    }
}

class income {
    constructor(_from, inc) {
        this._from = _from
        this.inc = inc
    }
}

function check(exp) {
}

function sum() {
    for (let i of incList)
        total += i.inc

    incList = []
}

function min() {
    for (let i of expList)
        total -= i.exp

    expList = []
}

function showHistory() {
    for (let log of history) {
        if (log.constructor === income) {
            console.log('Aktifitas Pemasukan');
            console.log(`Keterangan : ${log._from}`);
            console.log(`Jumlah     : ${log.inc}`);
            console.log();
        } else if (log.constructor === expense) {
            console.log('Aktifitas Pengeluaran');
            console.log(`Keterangan : ${log.stuff}`);
            console.log(`Jumlah     : ${log.exp}`);
            console.log();
        }
    }
}

function addInc() {
    console.log();
    const _from = prompt('Asal Pemasukkan   : ')
    const inc = Number(prompt('Jumlah Pemasukkan : '))

    incList.push(new income(_from, inc))
    history.push(new income(_from, inc))
    console.log()
    console.log('Data berhasil diupdate')
    console.log()
    console.log('================================')
}

function addExp() {
    console.log();
    const stuff = prompt('Asal Pengeluaran    : ')
    const exp = Number(prompt('Jumlah Pengeluaran  : '))

    let result = total - exp
    if (result < 0) {
        console.log('Error')
        return;
    }

    expList.push(new expense(stuff, exp))
    history.push(new expense(stuff, exp))
    console.log()
    console.log('Data berhasil diupdate')
    console.log()
    console.log('================================')
    min()
}

console.log('***********************[Money Management]****************************');
const Person = new user(
    prompt('Masukkan Nama         : '),
    Number(prompt('Masukkan Jumlah Uang  : '))
)
console.log();

let total = Person.money

let opt = false

do {
    console.log('*********************************************************************');
    console.log(`Selamat datang ${Person.name}`);
    console.log(`Total uang anda sebesar Rp.${total}`);
    console.log();
    console.log('1. Input Pemasukan');
    console.log('2. Input Pengeluaran');
    console.log('3. Tampilkan Aktifitas keuangan');
    console.log('4. Keluar Aplikasi');
    console.log();
    let choice = prompt('Masukkan pilihan anda  : ')
    switch (choice) {
        case '1':
            addInc()
            sum()
            break;
        case '2':
            addExp()
            break;
        case '3':
            showHistory()
            break;
        case '4':
            opt = true
            break;
    }
} while (opt != true);
