window.BENCHMARK_DATA = {
  "lastUpdate": 1734407475289,
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
      }
    ]
  }
}