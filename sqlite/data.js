window.BENCHMARK_DATA = {
  "lastUpdate": 1734492669961,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_deletes_between": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046447519,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 DELETEs, numeric BETWEEN, indexed",
        "display": true,
        "benches": [
          {
            "name": "The speed of deletes-between on Linux (Ext2)",
            "value": "2.903",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-between on Asterinas (Ext2)",
            "value": "3.341",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407180083,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 DELETEs, numeric BETWEEN, indexed",
        "display": true,
        "benches": [
          {
            "name": "The speed of deletes-between on Linux (Ext2)",
            "value": "2.954",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-between on Asterinas (Ext2)",
            "value": "3.391",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492274668,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 DELETEs, numeric BETWEEN, indexed",
        "display": true,
        "benches": [
          {
            "name": "The speed of deletes-between on Linux (Ext2)",
            "value": "2.892",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-between on Asterinas (Ext2)",
            "value": "3.514",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_deletes_individual": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046484253,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 DELETEs of individual rows",
        "display": true,
        "benches": [
          {
            "name": "The speed of deletes-individual on Linux (Ext2)",
            "value": "2.739",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-individual on Asterinas (Ext2)",
            "value": "3.149",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407216428,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 DELETEs of individual rows",
        "display": true,
        "benches": [
          {
            "name": "The speed of deletes-individual on Linux (Ext2)",
            "value": "2.871",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-individual on Asterinas (Ext2)",
            "value": "3.337",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492313296,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 DELETEs of individual rows",
        "display": true,
        "benches": [
          {
            "name": "The speed of deletes-individual on Linux (Ext2)",
            "value": "2.729",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-individual on Asterinas (Ext2)",
            "value": "3.356",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_refill_replace": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046521463,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The refill-replace result of sqlite speedtest",
        "description": "sqlite-speed-test: Refill two 50000-row tables using REPLACE",
        "display": true,
        "benches": [
          {
            "name": "The speed of refill-replace on Linux (Ext2)",
            "value": "5.133",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of refill-replace on Asterinas (Ext2)",
            "value": "5.829",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407255231,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The refill-replace result of sqlite speedtest",
        "description": "sqlite-speed-test: Refill two 50000-row tables using REPLACE",
        "display": true,
        "benches": [
          {
            "name": "The speed of refill-replace on Linux (Ext2)",
            "value": "5.113",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of refill-replace on Asterinas (Ext2)",
            "value": "5.925",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492351147,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The refill-replace result of sqlite speedtest",
        "description": "sqlite-speed-test: Refill two 50000-row tables using REPLACE",
        "display": true,
        "benches": [
          {
            "name": "The speed of refill-replace on Linux (Ext2)",
            "value": "5.055",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of refill-replace on Asterinas (Ext2)",
            "value": "5.908",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_selects_ipk": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046559458,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The selects-ipk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on an IPK",
        "display": true,
        "benches": [
          {
            "name": "The speed of selects-ipk on Linux (Ext2)",
            "value": "2.525",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-ipk on Asterinas (Ext2)",
            "value": "6.099",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407293930,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The selects-ipk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on an IPK",
        "display": true,
        "benches": [
          {
            "name": "The speed of selects-ipk on Linux (Ext2)",
            "value": "2.524",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-ipk on Asterinas (Ext2)",
            "value": "6.122",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492390819,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The selects-ipk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on an IPK",
        "display": true,
        "benches": [
          {
            "name": "The speed of selects-ipk on Linux (Ext2)",
            "value": "2.517",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-ipk on Asterinas (Ext2)",
            "value": "6.129",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_selects_text_pk": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046593669,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The selects-text-pk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on a TEXT PK",
        "display": true,
        "benches": [
          {
            "name": "The speed of selects-text-pk on Linux (Ext2)",
            "value": "2.843",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-text-pk on Asterinas (Ext2)",
            "value": "6.454",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407330778,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The selects-text-pk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on a TEXT PK",
        "display": true,
        "benches": [
          {
            "name": "The speed of selects-text-pk on Linux (Ext2)",
            "value": "2.863",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-text-pk on Asterinas (Ext2)",
            "value": "6.495",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492432275,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The selects-text-pk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on a TEXT PK",
        "display": true,
        "benches": [
          {
            "name": "The speed of selects-text-pk on Linux (Ext2)",
            "value": "2.836",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-text-pk on Asterinas (Ext2)",
            "value": "6.461",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_updates_between": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046671050,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 UPDATES, numeric BETWEEN, indexed",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-between on Linux (Ext2)",
            "value": "1.987",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-between on Asterinas (Ext2)",
            "value": "2.161",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407407164,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 UPDATES, numeric BETWEEN, indexed",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-between on Linux (Ext2)",
            "value": "2.005",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-between on Asterinas (Ext2)",
            "value": "2.196",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492511661,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 UPDATES, numeric BETWEEN, indexed",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-between on Linux (Ext2)",
            "value": "1.994",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-between on Asterinas (Ext2)",
            "value": "2.180",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_updates_individual": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046747358,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 UPDATES of individual rows",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-individual on Linux (Ext2)",
            "value": "1.640",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-individual on Asterinas (Ext2)",
            "value": "1.967",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407486608,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 UPDATES of individual rows",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-individual on Linux (Ext2)",
            "value": "1.712",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-individual on Asterinas (Ext2)",
            "value": "2.080",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492599237,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 UPDATES of individual rows",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-individual on Linux (Ext2)",
            "value": "1.546",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-individual on Asterinas (Ext2)",
            "value": "1.974",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_updates_big_one": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046709112,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-big-one result of sqlite speedtest",
        "description": "sqlite-speed-test: One big UPDATE of the whole 50000-row table",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-big-one on Linux (Ext2)",
            "value": "0.409",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-big-one on Asterinas (Ext2)",
            "value": "0.471",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407450950,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-big-one result of sqlite speedtest",
        "description": "sqlite-speed-test: One big UPDATE of the whole 50000-row table",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-big-one on Linux (Ext2)",
            "value": "0.316",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-big-one on Asterinas (Ext2)",
            "value": "0.475",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492557030,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-big-one result of sqlite speedtest",
        "description": "sqlite-speed-test: One big UPDATE of the whole 50000-row table",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-big-one on Linux (Ext2)",
            "value": "0.317",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-big-one on Asterinas (Ext2)",
            "value": "0.460",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_vacuum": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046783852,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": true,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ext2)",
            "value": "4.065",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ext2)",
            "value": "3.718",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407521755,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": true,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ext2)",
            "value": "3.905",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ext2)",
            "value": "4.018",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492642616,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": true,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ext2)",
            "value": "3.704",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ext2)",
            "value": "3.898",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_total": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bbbde4ccb9d31ed48ae99f209538c16d14016bb",
          "message": "Use `Ordering::Relaxed` for `is_nonblocking`",
          "timestamp": "2024-12-08T08:26:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bbbde4ccb9d31ed48ae99f209538c16d14016bb"
        },
        "date": 1734046632753,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The total result of sqlite speedtest",
        "description": "sqlite-speed-test: total",
        "display": true,
        "benches": [
          {
            "name": "Total speed on Linux (Ext2)",
            "value": "66.072",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "Total speed on Asterinas (Ext2)",
            "value": "79.516",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407369604,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The total result of sqlite speedtest",
        "description": "sqlite-speed-test: total",
        "display": true,
        "benches": [
          {
            "name": "Total speed on Linux (Ext2)",
            "value": "65.946",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "Total speed on Asterinas (Ext2)",
            "value": "81.344",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "lab-pc-wtj",
            "email": "wangtaojie2004@hotmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e",
          "message": "Improve /proc/{PID}/stat",
          "timestamp": "2024-12-17T12:10:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e4a4c58d050a8b42c43e06d42e7b54ec1bd400e"
        },
        "date": 1734492471918,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The total result of sqlite speedtest",
        "description": "sqlite-speed-test: total",
        "display": true,
        "benches": [
          {
            "name": "Total speed on Linux (Ext2)",
            "value": "64.991",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "Total speed on Asterinas (Ext2)",
            "value": "80.735",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_deletes_between": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407556862,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The deletes-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 DELETEs, numeric BETWEEN, indexed",
        "display": true,
        "benches": [
          {
            "name": "The speed of deletes-between on Linux (Ramfs)",
            "value": "2.251",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-between on Asterinas (Ramfs)",
            "value": "2.454",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_deletes_individual": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407592201,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The deletes-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 DELETEs of individual rows",
        "display": true,
        "benches": [
          {
            "name": "The speed of deletes-individual on Linux (Ramfs)",
            "value": "2.046",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-individual on Asterinas (Ramfs)",
            "value": "2.240",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_refill_replace": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407628180,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The refill-replace result of sqlite speedtest",
        "description": "sqlite-speed-test: Refill two 50000-row tables using REPLACE",
        "display": true,
        "benches": [
          {
            "name": "The speed of refill-replace on Linux (Ramfs)",
            "value": "3.832",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of refill-replace on Asterinas (Ramfs)",
            "value": "4.065",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_selects_ipk": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407662361,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The selects-ipk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on an IPK",
        "display": true,
        "benches": [
          {
            "name": "The speed of selects-ipk on Linux (Ramfs)",
            "value": "2.924",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-ipk on Asterinas (Ramfs)",
            "value": "2.983",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_selects_text_pk": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407698717,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The selects-text-pk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on a TEXT PK",
        "display": true,
        "benches": [
          {
            "name": "The speed of selects-text-pk on Linux (Ramfs)",
            "value": "3.269",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-text-pk on Asterinas (Ramfs)",
            "value": "3.315",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_updates_between": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407771472,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 UPDATES, numeric BETWEEN, indexed",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-between on Linux (Ramfs)",
            "value": "1.662",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-between on Asterinas (Ramfs)",
            "value": "1.718",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_updates_individual": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407850434,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 UPDATES of individual rows",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-individual on Linux (Ramfs)",
            "value": "1.272",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-individual on Asterinas (Ramfs)",
            "value": "1.354",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_updates_big_one": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407814987,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-big-one result of sqlite speedtest",
        "description": "sqlite-speed-test: One big UPDATE of the whole 50000-row table",
        "display": true,
        "benches": [
          {
            "name": "The speed of updates-big-one on Linux (Ramfs)",
            "value": "0.082",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-big-one on Asterinas (Ramfs)",
            "value": "0.090",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_vacuum": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407885877,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": true,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ramfs)",
            "value": "0.855",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ramfs)",
            "value": "0.926",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_total": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bf91551de124e4d674d18695312fedd37d6ec23f",
          "message": "Fix a typo in Dockerfile",
          "timestamp": "2024-12-17T02:59:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf91551de124e4d674d18695312fedd37d6ec23f"
        },
        "date": 1734407733765,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The total result of sqlite speedtest",
        "description": "sqlite-speed-test: total",
        "display": true,
        "benches": [
          {
            "name": "Total speed on Linux (Ramfs)",
            "value": "56.107",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "Total speed on Asterinas (Ramfs)",
            "value": "59.307",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}