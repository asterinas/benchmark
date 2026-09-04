window.BENCHMARK_DATA = {
  "lastUpdate": 1788558828710,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "boot_lat": [
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "29b0f4bcf111efb590ee14768c624ecf1e81bbd7",
          "message": "Bump Docker image version to 0.18.1-20260901",
          "timestamp": "2026-09-01T07:37:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/29b0f4bcf111efb590ee14768c624ecf1e81bbd7"
        },
        "date": 1788301922209,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.13",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388974639,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.11",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788472833958,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.24",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788558828709,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.25",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "boot_lat_100MB": [
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "29b0f4bcf111efb590ee14768c624ecf1e81bbd7",
          "message": "Bump Docker image version to 0.18.1-20260901",
          "timestamp": "2026-09-01T07:37:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/29b0f4bcf111efb590ee14768c624ecf1e81bbd7"
        },
        "date": 1788301921877,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.65",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388974323,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.16",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.65",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788472833736,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.65",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788558828521,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.08",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.66",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "boot_lat_500MB": [
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "29b0f4bcf111efb590ee14768c624ecf1e81bbd7",
          "message": "Bump Docker image version to 0.18.1-20260901",
          "timestamp": "2026-09-01T07:37:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/29b0f4bcf111efb590ee14768c624ecf1e81bbd7"
        },
        "date": 1788301921545,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.14",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.78",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388973923,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.16",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.81",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788472833561,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.21",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.80",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2de6b07ee933a033081029f940f741bec678a3c2",
          "message": "Clear IOPL in RFLAGS before returning to user space",
          "timestamp": "2026-09-03T08:49:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2de6b07ee933a033081029f940f741bec678a3c2"
        },
        "date": 1788558828304,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.20",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.78",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}