window.BENCHMARK_DATA = {
  "lastUpdate": 1747137597919,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ramfs_benchmarks_vacuum": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354144852,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": false,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ramfs)",
            "value": "0.861",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ramfs)",
            "value": "0.902",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137415629,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": false,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ramfs)",
            "value": "0.842",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ramfs)",
            "value": "2.838",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_updates_individual": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354153677,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 UPDATES of individual rows",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-individual on Linux (Ramfs)",
            "value": "1.279",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-individual on Asterinas (Ramfs)",
            "value": "1.426",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137432310,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 UPDATES of individual rows",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-individual on Linux (Ramfs)",
            "value": "1.266",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-individual on Asterinas (Ramfs)",
            "value": "4.865",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_updates_big_one": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354161387,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-big-one result of sqlite speedtest",
        "description": "sqlite-speed-test: One big UPDATE of the whole 50000-row table",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-big-one on Linux (Ramfs)",
            "value": "0.082",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-big-one on Asterinas (Ramfs)",
            "value": "0.093",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137450137,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-big-one result of sqlite speedtest",
        "description": "sqlite-speed-test: One big UPDATE of the whole 50000-row table",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-big-one on Linux (Ramfs)",
            "value": "0.082",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-big-one on Asterinas (Ramfs)",
            "value": "0.307",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_updates_between": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354169311,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 UPDATES, numeric BETWEEN, indexed",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-between on Linux (Ramfs)",
            "value": "1.660",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-between on Asterinas (Ramfs)",
            "value": "1.792",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137466881,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The updates-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 UPDATES, numeric BETWEEN, indexed",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-between on Linux (Ramfs)",
            "value": "1.656",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-between on Asterinas (Ramfs)",
            "value": "6.290",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_total": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354177219,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The total result of sqlite speedtest",
        "description": "sqlite-speed-test: total",
        "display": false,
        "benches": [
          {
            "name": "Total speed on Linux (Ramfs)",
            "value": "56.423",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "Total speed on Asterinas (Ramfs)",
            "value": "62.529",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137483559,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The total result of sqlite speedtest",
        "description": "sqlite-speed-test: total",
        "display": false,
        "benches": [
          {
            "name": "Total speed on Linux (Ramfs)",
            "value": "55.947",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "Total speed on Asterinas (Ramfs)",
            "value": "217.685",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_selects_text_pk": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354185029,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The selects-text-pk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on a TEXT PK",
        "display": false,
        "benches": [
          {
            "name": "The speed of selects-text-pk on Linux (Ramfs)",
            "value": "3.280",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-text-pk on Asterinas (Ramfs)",
            "value": "3.309",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137500062,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The selects-text-pk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on a TEXT PK",
        "display": false,
        "benches": [
          {
            "name": "The speed of selects-text-pk on Linux (Ramfs)",
            "value": "3.267",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-text-pk on Asterinas (Ramfs)",
            "value": "11.746",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_selects_ipk": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354193865,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The selects-ipk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on an IPK",
        "display": false,
        "benches": [
          {
            "name": "The speed of selects-ipk on Linux (Ramfs)",
            "value": "2.940",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-ipk on Asterinas (Ramfs)",
            "value": "2.972",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137516708,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The selects-ipk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on an IPK",
        "display": false,
        "benches": [
          {
            "name": "The speed of selects-ipk on Linux (Ramfs)",
            "value": "2.935",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-ipk on Asterinas (Ramfs)",
            "value": "10.264",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_refill_replace": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354202168,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The refill-replace result of sqlite speedtest",
        "description": "sqlite-speed-test: Refill two 50000-row tables using REPLACE",
        "display": false,
        "benches": [
          {
            "name": "The speed of refill-replace on Linux (Ramfs)",
            "value": "3.871",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of refill-replace on Asterinas (Ramfs)",
            "value": "4.406",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137533118,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The refill-replace result of sqlite speedtest",
        "description": "sqlite-speed-test: Refill two 50000-row tables using REPLACE",
        "display": false,
        "benches": [
          {
            "name": "The speed of refill-replace on Linux (Ramfs)",
            "value": "3.836",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of refill-replace on Asterinas (Ramfs)",
            "value": "14.929",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_deletes_individual": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354210697,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The deletes-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 DELETEs of individual rows",
        "display": false,
        "benches": [
          {
            "name": "The speed of deletes-individual on Linux (Ramfs)",
            "value": "2.066",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-individual on Asterinas (Ramfs)",
            "value": "2.409",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137549593,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The deletes-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 DELETEs of individual rows",
        "display": false,
        "benches": [
          {
            "name": "The speed of deletes-individual on Linux (Ramfs)",
            "value": "2.035",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-individual on Asterinas (Ramfs)",
            "value": "8.970",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_benchmarks_deletes_between": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354218633,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The deletes-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 DELETEs, numeric BETWEEN, indexed",
        "display": false,
        "benches": [
          {
            "name": "The speed of deletes-between on Linux (Ramfs)",
            "value": "2.275",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-between on Asterinas (Ramfs)",
            "value": "2.650",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137566090,
        "tool": "customSmallerIsBetter",
        "title": "[Ramfs] The deletes-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 DELETEs, numeric BETWEEN, indexed",
        "display": false,
        "benches": [
          {
            "name": "The speed of deletes-between on Linux (Ramfs)",
            "value": "2.240",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-between on Asterinas (Ramfs)",
            "value": "8.535",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_vacuum": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354226544,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": false,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ext2)",
            "value": "3.704",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ext2)",
            "value": "0.901",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747137582492,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The 'VACUUM' result of sqlite speedtest",
        "description": "sqlite-speed-test: repacking database file into a minimal amount of disk space",
        "display": false,
        "benches": [
          {
            "name": "The speed of VACUUM on Linux (Ext2)",
            "value": "2.406",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of VACUUM on Asterinas (Ext2)",
            "value": "2.466",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_updates_individual": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354234868,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 UPDATES of individual rows",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-individual on Linux (Ext2)",
            "value": "1.695",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-individual on Asterinas (Ext2)",
            "value": "1.433",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_updates_big_one": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354242605,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-big-one result of sqlite speedtest",
        "description": "sqlite-speed-test: One big UPDATE of the whole 50000-row table",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-big-one on Linux (Ext2)",
            "value": "0.507",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-big-one on Asterinas (Ext2)",
            "value": "0.093",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_updates_between": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354250482,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The updates-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 UPDATES, numeric BETWEEN, indexed",
        "display": false,
        "benches": [
          {
            "name": "The speed of updates-between on Linux (Ext2)",
            "value": "1.999",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of updates-between on Asterinas (Ext2)",
            "value": "1.792",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_total": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354258467,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The total result of sqlite speedtest",
        "description": "sqlite-speed-test: total",
        "display": false,
        "benches": [
          {
            "name": "Total speed on Linux (Ext2)",
            "value": "65.870",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "Total speed on Asterinas (Ext2)",
            "value": "62.757",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_selects_text_pk": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354267044,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The selects-text-pk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on a TEXT PK",
        "display": false,
        "benches": [
          {
            "name": "The speed of selects-text-pk on Linux (Ext2)",
            "value": "2.860",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-text-pk on Asterinas (Ext2)",
            "value": "3.318",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_selects_ipk": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354277261,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The selects-ipk result of sqlite speedtest",
        "description": "sqlite-speed-test: 70000 SELECTS on an IPK",
        "display": false,
        "benches": [
          {
            "name": "The speed of selects-ipk on Linux (Ext2)",
            "value": "2.531",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of selects-ipk on Asterinas (Ext2)",
            "value": "2.985",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_refill_replace": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354285227,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The refill-replace result of sqlite speedtest",
        "description": "sqlite-speed-test: Refill two 50000-row tables using REPLACE",
        "display": false,
        "benches": [
          {
            "name": "The speed of refill-replace on Linux (Ext2)",
            "value": "5.336",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of refill-replace on Asterinas (Ext2)",
            "value": "4.422",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_deletes_individual": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354293038,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-individual result of sqlite speedtest",
        "description": "sqlite-speed-test: 50000 DELETEs of individual rows",
        "display": false,
        "benches": [
          {
            "name": "The speed of deletes-individual on Linux (Ext2)",
            "value": "2.907",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-individual on Asterinas (Ext2)",
            "value": "2.418",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_benchmarks_deletes_between": [
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744354300958,
        "tool": "customSmallerIsBetter",
        "title": "[Ext2] The deletes-between result of sqlite speedtest",
        "description": "sqlite-speed-test: 10000 DELETEs, numeric BETWEEN, indexed",
        "display": false,
        "benches": [
          {
            "name": "The speed of deletes-between on Linux (Ext2)",
            "value": "2.983",
            "unit": "second",
            "extra": "linux_result"
          },
          {
            "name": "The speed of deletes-between on Asterinas (Ext2)",
            "value": "2.663",
            "unit": "second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}