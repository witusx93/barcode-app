db.createUser(
    {
        user: "patryk",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "frontwit"
            }
        ]
    }
);

db.user.insert({
    "_id": ObjectId("5d8c654890f5443c5e721ff1"),
    "username": "patryk",
    "password": "$2a$10$purbCrPMhLECPuLg4o5G6eaQgIYI7GfGsbFzYI8oryhlf6FSlFifC",
    "roles": [
        "USER"
    ],
    "_class": "com.frontwit.barcodeapp.administration.infrastructure.security.User"
});
//
// db.order.insertMany([
//     {
//         "_id": 100094000,
//         "name": "85",
//         "isCompleted": false,
//         "fronts": [
//             {
//                 "barcode": 100094001,
//                 "height": 945,
//                 "width": 446,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "POLISHING",
//                         "date": ISODate("2019-01-18T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100094002,
//                 "height": 945,
//                 "width": 446,
//                 "comment": "",
//                 "quantity": 2,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "POLISHING",
//                         "date": ISODate("2019-01-18T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100094003,
//                 "height": 945,
//                 "width": 446,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "POLISHING",
//                         "date": ISODate("2019-01-18T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100094004,
//                 "isCompleted": false,
//                 "height": 713,
//                 "width": 446,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "POLISHING",
//                         "date": ISODate("2019-01-18T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100094005,
//                 "height": 713,
//                 "width": 296,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "POLISHING",
//                         "date": ISODate("2019-01-18T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100094006,
//                 "height": 713,
//                 "width": 596,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "POLISHING",
//                         "date": ISODate("2019-01-18T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             }
//         ],
//         "orderedAt": ISODate("2017-05-07"),
//         "stage": "MILLING",
//         "color": "BIAŁY POŁYSK",
//         "size": "18MM",
//         "cutter": "F21",
//         "comment": "expres",
//         "customer": "Customer 1",
//         "extId": 99
//     },
//     {
//         "_id": 100026000,
//         "name": "22",
//         "isCompleted": false,
//         "fronts": [
//             {
//                 "barcode": 100026001,
//                 "height": 713,
//                 "width": 396,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026002,
//                 "height": 713,
//                 "width": 396,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026003,
//                 "height": 713,
//                 "width": 396,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026004,
//                 "height": 140,
//                 "width": 796,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026005,
//                 "height": 350,
//                 "width": 866,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026006,
//                 "height": 713,
//                 "width": 396,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026007,
//                 "height": 713,
//                 "width": 396,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026008,
//                 "height": 713,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026009,
//                 "height": 400,
//                 "width": 316,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026010,
//                 "height": 350,
//                 "width": 520,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026011,
//                 "height": 350,
//                 "width": 636,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026012,
//                 "height": 713,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026013,
//                 "height": 590,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026014,
//                 "height": 590,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026015,
//                 "height": 720,
//                 "width": 50,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026016,
//                 "height": 713,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026017,
//                 "height": 713,
//                 "width": 396,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026018,
//                 "height": 720,
//                 "width": 50,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026019,
//                 "height": 355,
//                 "width": 866,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026020,
//                 "height": 713,
//                 "width": 300,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026021,
//                 "height": 713,
//                 "width": 300,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026022,
//                 "height": 400,
//                 "width": 316,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026023,
//                 "height": 350,
//                 "width": 796,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026024,
//                 "height": 355,
//                 "width": 866,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026025,
//                 "height": 350,
//                 "width": 866,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026026,
//                 "height": 350,
//                 "width": 796,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026027,
//                 "height": 713,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026028,
//                 "height": 350,
//                 "width": 496,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026029,
//                 "height": 450,
//                 "width": 496,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026030,
//                 "height": 590,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026031,
//                 "height": 590,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026032,
//                 "height": 350,
//                 "width": 866,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026033,
//                 "height": 590,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026034,
//                 "height": 590,
//                 "width": 431,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026035,
//                 "height": 283,
//                 "width": 796,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             },
//             {
//                 "barcode": 100026036,
//                 "height": 283,
//                 "width": 796,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             }
//         ],
//         "orderedAt": ISODate("2017-05-03"),
//         "stage": "MILLING",
//         "color": "NCS S 1510 Y70R MAT",
//         "size": "18MM",
//         "cutter": "F21",
//         "comment": "przy pakowaniu porownac z probka w biurze; 26",
//         "customer": "Customer 2",
//         "extId": 31
//     },
//     {
//         "_id": 100016000,
//         "name": "4",
//         "isCompleted": true,
//         "fronts": [
//             {
//                 "barcode": 100016001,
//                 "height": 659,
//                 "width": 596,
//                 "comment": "",
//                 "quantity": 1,
//                 "processingHistory": [
//                     {
//                         "stage": "PAINTING",
//                         "date": ISODate("2019-01-18T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "PACKING",
//                         "date": ISODate("2019-01-19T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "BASE",
//                         "date": ISODate("2019-01-16T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "SENT",
//                         "date": ISODate("2019-01-20T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "POLISHING",
//                         "date": ISODate("2019-01-15T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "MILLING",
//                         "date": ISODate("2019-01-14T23:00:00.000+0000")
//                     },
//                     {
//                         "stage": "GRINDING",
//                         "date": ISODate("2019-01-17T23:00:00.000+0000")
//                     }
//                 ],
//                 "lastModification": ISODate("2019-01-17T23:00:00.000+0000"),
//                 "damaged": false
//             }
//         ],
//         "orderedAt": ISODate("2017-05-03"),
//         "stage": "MILLING",
//         "color": "BIAŁY POŁYSK",
//         "size": "18MM",
//         "cutter": "F21",
//         "comment": "paprochy na uchwycie i przepolerowania; powierzona",
//         "customer": "Customer 3",
//         "extId": 21,
//     }
// ]);