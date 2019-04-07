const DB = {
    balance: 10200,
    id: 415,
    users: [
        {
            id : 37512,
            name: 'Deodat Lawson',
            bank_account: '13-441156-44466',
            rank: 2, //2 เหรัญญิก 1 นร.
            password: "deletethis"
        },
        {
            id : 37513,
            name: 'DeJohn',
            bank_account: '13-441156-44466',
            rank: 1,
            password: "deletethis"
        },
        {
            id : 37514,
            name: 'Detergent',
            bank_account: '13-441156-44466',
            rank: 1,
            password: "deletethis"
        },
        {
            id : 37515,
            name: 'Werewolf',
            bank_account: '13-441156-44466',
            rank: 1,
            password: "deletethis"
        },
        {
            id : 37516,
            name: 'Lawson',
            bank_account: '13-441156-44466',
            rank: 1,
            password: "deletethis"
        },
    ],
    histories: [
        {
            id: 1289,
            amount: 30,
            title: 'ค่าไม้กวาด',
            issuedUserId: 37513,
            type: 1 // 1 เงินออก 0 เงินเข้า
        },
        {
            id: 1288,
            amount: 800,
            title: 'ชำระค่าห้อง',
            type: 0,
            issuedUserId: 37512
        },
        {
            id: 1287,
            amount: 10,
            title: 'ค่าไม้ถู',
            type: 1,
            issuedUserId: 37516
        }
    ]
}

export default DB