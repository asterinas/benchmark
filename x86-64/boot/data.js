window.BENCHMARK_DATA = {
  "lastUpdate": 1788388866741,
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
        "date": 1788299822201,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.77",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.29",
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
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338178055,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.76",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.29",
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
        "date": 1788299821908,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.77",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.33",
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
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338177847,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.77",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.33",
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
        "date": 1788299821607,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.93",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.48",
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
          "id": "51c59734ee59da113ce5272b18761cb133d0470b",
          "message": "Fix host/guest benchmark initramfs rebuild",
          "timestamp": "2026-09-02T03:03:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/51c59734ee59da113ce5272b18761cb133d0470b"
        },
        "date": 1788338177619,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.93",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.49",
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
        "date": 1788388866740,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.92",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.48",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}