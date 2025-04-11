window.BENCHMARK_DATA = {
  "lastUpdate": 1744354217479,
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
      }
    ]
  }
}