window.BENCHMARK_DATA = {
  "lastUpdate": 1744354396704,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "vfs_read_lat": [
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
        "date": 1744354389909,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of read (/dev/zero)",
        "description": "lat_syscall read",
        "display": true,
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1272",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1021",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_write_lat": [
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
        "date": 1744354357025,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1074",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.0999",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_stat_lat": [
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
        "date": 1744354365018,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of stat",
        "description": "lat_syscall stat",
        "display": true,
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3209",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.4407",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_read_pagecache_bw": [
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
        "date": 1744354381035,
        "tool": "customBiggerIsBetter",
        "title": "[VFS] The bandwidth of file reads via page cache",
        "description": "bw_file_rd",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9570.57",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "9468.46",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_select_lat": [
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
        "date": 1744354373065,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of select (file fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select file latency on Linux",
            "value": "1.3221",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select file latency on Asterinas",
            "value": "1.7616",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}