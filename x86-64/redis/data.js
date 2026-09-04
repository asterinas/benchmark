window.BENCHMARK_DATA = {
  "lastUpdate": 1788557581678,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ping_inline_100k_conc20_rps": [
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "546e32e231429bbb0b5b40ba0fe9e75f38387c9f",
          "message": "Rename Asterinas NixOS installer command\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-06-11T05:35:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/546e32e231429bbb0b5b40ba0fe9e75f38387c9f"
        },
        "date": 1782144769349,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "22ca7ccf30757c8ece7dcffbe933b8e1072f052a",
          "message": "Fix virtiofs request queue descriptor exhaustion",
          "timestamp": "2026-06-03T07:04:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/22ca7ccf30757c8ece7dcffbe933b8e1072f052a"
        },
        "date": 1782145826477,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "170357.75",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "546e32e231429bbb0b5b40ba0fe9e75f38387c9f",
          "message": "Rename Asterinas NixOS installer command\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-06-11T05:35:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/546e32e231429bbb0b5b40ba0fe9e75f38387c9f"
        },
        "date": 1782147674366,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "161812.31",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WaterWhisperer",
            "username": "WaterWhisperer",
            "email": "waterwhisperer24@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e80904666fcc97085605f1e8118b86bc738c13c8",
          "message": "Fix fallocate errno for special files",
          "timestamp": "2026-06-22T08:49:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e80904666fcc97085605f1e8118b86bc738c13c8"
        },
        "date": 1782423403094,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "165016.50",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "WaterWhisperer",
            "username": "WaterWhisperer",
            "email": "waterwhisperer24@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e80904666fcc97085605f1e8118b86bc738c13c8",
          "message": "Fix fallocate errno for special files",
          "timestamp": "2026-06-22T08:49:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e80904666fcc97085605f1e8118b86bc738c13c8"
        },
        "date": 1782508126410,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "159489.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "145137.88",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a19974df7f48dda7d1f6540350d787f5d7df7860",
          "message": "Restructure the Design subcategory around design principles\n\nReplace the For Maintainability \"Design\" guidelines with eight design\nprinciples (single-responsibility, dry, information-hiding, open-closed,\nleast-surprise, coupling-cohesion, consistency, rust-native), relocated\nfrom the \"How Guidelines Are Written\" page. Fold the former design and\nlayout rules (familiar-conventions, hide-impl-details, small-functions,\none-concept-per-file) into the principles as worked examples, and move\nDesign ahead of Process in the index.",
          "timestamp": "2026-06-26T10:17:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/a19974df7f48dda7d1f6540350d787f5d7df7860"
        },
        "date": 1782594613896,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166666.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783720978962,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "171526.58",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783805208915,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783892174086,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "169491.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "165289.25",
            "unit": "request per second",
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
          "id": "b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d",
          "message": "Remove redundant empty-path checks",
          "timestamp": "2026-07-13T03:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d"
        },
        "date": 1783980488175,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "165562.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "148809.53",
            "unit": "request per second",
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
          "id": "b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d",
          "message": "Remove redundant empty-path checks",
          "timestamp": "2026-07-13T03:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d"
        },
        "date": 1784065036568,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "165016.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "435916bf0714a61e0fd1ebab5f6486532dedd8e4",
          "message": "Update linux kernel binary for benchmark",
          "timestamp": "2026-07-13T09:58:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/435916bf0714a61e0fd1ebab5f6486532dedd8e4"
        },
        "date": 1784151140858,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "162074.56",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "c08cd16e3d59ff36f6e4765a006bae963b44cc6e",
          "message": "Format RTC code",
          "timestamp": "2026-07-15T05:24:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/c08cd16e3d59ff36f6e4765a006bae963b44cc6e"
        },
        "date": 1784238268103,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166666.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "171232.88",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784323996137,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "164744.64",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784410397243,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784496429306,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "168350.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "157728.70",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e155c3b6d8a03d08129edcc73de4ab02d38fc37a",
          "message": "Document sysinfo compatibility",
          "timestamp": "2026-07-15T03:23:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/e155c3b6d8a03d08129edcc73de4ab02d38fc37a"
        },
        "date": 1784584371642,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "161290.33",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
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
          "id": "1b22aab02a161013cf11d200c9a28a2e58d4737b",
          "message": "Enforce no trailing whitespace",
          "timestamp": "2026-07-17T10:44:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/1b22aab02a161013cf11d200c9a28a2e58d4737b"
        },
        "date": 1784669904287,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166666.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "5c05f837d9bcdcdc8b4bf3ba8a837e5df0eb9749",
          "message": "Use `map_untracked` to simplify code",
          "timestamp": "2026-07-21T01:23:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/5c05f837d9bcdcdc8b4bf3ba8a837e5df0eb9749"
        },
        "date": 1784755990131,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166666.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "171526.58",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "276552ed5ea09fe019d391e24aebd0980a80b1d6",
          "message": "Rewrite safety comments for `KVirtArea::drop`",
          "timestamp": "2026-07-22T11:25:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/276552ed5ea09fe019d391e24aebd0980a80b1d6"
        },
        "date": 1784842906144,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "170940.17",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1784929341134,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "148367.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1785014943280,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168918.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1785101078961,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168350.17",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "6e57d226d3b3db6d733aaa6ad05cc80c207f96c6",
          "message": "Refine virtiofs attr revalidation",
          "timestamp": "2026-07-22T13:16:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e57d226d3b3db6d733aaa6ad05cc80c207f96c6"
        },
        "date": 1785188781645,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "168918.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "169779.30",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a95431093609ed1ecca15b13e4568118513fe06",
          "message": "Adjust signalfd method signatures and comments",
          "timestamp": "2026-07-28T08:41:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a95431093609ed1ecca15b13e4568118513fe06"
        },
        "date": 1785275345502,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168350.17",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "07ae890cef4380273464e0748e9fa17b6e831f28",
          "message": "Adjust blank lines and error messages",
          "timestamp": "2026-07-30T03:08:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/07ae890cef4380273464e0748e9fa17b6e831f28"
        },
        "date": 1785447397725,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168634.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Holovsky",
            "email": "coding@probably.group"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "397ee46b2cf8413c8a30083362526d607e82d6e7",
          "message": "Stop hardcoding the pinned nightly version in docs\n\nBoth references had drifted to nightly-2025-12-06 while rust-toolchain.toml\npins nightly-2026-07-21. Point at the manifest instead, so they cannot go\nstale again.",
          "timestamp": "2026-07-29T18:44:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/397ee46b2cf8413c8a30083362526d607e82d6e7"
        },
        "date": 1785735282709,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "173310.22",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2e2b3468f07815be2c372fd5cd103bb37664ad5c",
          "message": "Remove `FileLike::status_flags`",
          "timestamp": "2026-07-31T01:57:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2e2b3468f07815be2c372fd5cd103bb37664ad5c"
        },
        "date": 1785735721173,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "169491.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "173913.05",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Holovsky",
            "email": "coding@probably.group"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "397ee46b2cf8413c8a30083362526d607e82d6e7",
          "message": "Stop hardcoding the pinned nightly version in docs\n\nBoth references had drifted to nightly-2025-12-06 while rust-toolchain.toml\npins nightly-2026-07-21. Point at the manifest instead, so they cannot go\nstale again.",
          "timestamp": "2026-07-29T18:44:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/397ee46b2cf8413c8a30083362526d607e82d6e7"
        },
        "date": 1785736611131,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168350.17",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "3389b533f894f855e946e975daa29f7a46b54171",
          "message": "Pass `&mut FsCreationCtx` to `FsType`",
          "timestamp": "2026-08-03T09:15:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3389b533f894f855e946e975daa29f7a46b54171"
        },
        "date": 1785793158053,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "170068.03",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4f0a3fccd6d24522a4d5280fa7dd84eba9895c6d",
          "message": "Fix OSDK panic trace and coverage utils",
          "timestamp": "2026-08-04T12:01:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f0a3fccd6d24522a4d5280fa7dd84eba9895c6d"
        },
        "date": 1785879423930,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "149253.73",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "ab59d29891f1505267f22f0d1626311a96514525",
          "message": "Refine the safety condition of `drop_meta_in_place`",
          "timestamp": "2026-08-05T08:34:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab59d29891f1505267f22f0d1626311a96514525"
        },
        "date": 1785965846155,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "163666.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "166389.34",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786053436385,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786138220092,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "156985.86",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "161812.31",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786223881596,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "171232.88",
            "unit": "request per second",
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
          "id": "027fa64d7e85619324f6ad1f0de19d2e59bfee2e",
          "message": "Remove duplicate titles in `kernel-parameters.md`",
          "timestamp": "2026-07-06T04:20:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/027fa64d7e85619324f6ad1f0de19d2e59bfee2e"
        },
        "date": 1786310535723,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "160771.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168350.17",
            "unit": "request per second",
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
          "id": "c8ac7e4cfb64d7336f331aa7654b71281b6acf4d",
          "message": "Remove `CachePolicy` from `activate_page_table`",
          "timestamp": "2026-07-02T02:16:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8ac7e4cfb64d7336f331aa7654b71281b6acf4d"
        },
        "date": 1786397177844,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "163666.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4ba4abbe8cb3f2892129d67b0301cf247bbdda0f",
          "message": "Isolate the dormant `controlled` crate",
          "timestamp": "2026-07-19T12:26:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/4ba4abbe8cb3f2892129d67b0301cf247bbdda0f"
        },
        "date": 1786484368050,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "171821.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Duck Ran",
            "username": "laipuran",
            "email": "puranlai@qq.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "76dac6f5524fe9477ce0df9535ba837cc853e32e",
          "message": "Add ktest for kernel slab allocation counter\n\nVerify that allocating enough slots forces new slab pages and increases\nthe counter, that freeing them releases some slabs back, and that\ndropping the cache returns the counter to its original value.",
          "timestamp": "2026-08-06T08:23:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/76dac6f5524fe9477ce0df9535ba837cc853e32e"
        },
        "date": 1786570004060,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "163132.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "158730.16",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b9cfb5ccf845feb40303627d23086de235534268",
          "message": "Restrict visibility of internal `aster-core` items",
          "timestamp": "2026-08-12T08:35:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/b9cfb5ccf845feb40303627d23086de235534268"
        },
        "date": 1786656460237,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "159489.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "169779.30",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "437365615c653bb0ad3993fd3c4afc30d033af46",
          "message": "Add some regression tests",
          "timestamp": "2026-08-07T05:20:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/437365615c653bb0ad3993fd3c4afc30d033af46"
        },
        "date": 1786743547235,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168350.17",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "437365615c653bb0ad3993fd3c4afc30d033af46",
          "message": "Add some regression tests",
          "timestamp": "2026-08-07T05:20:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/437365615c653bb0ad3993fd3c4afc30d033af46"
        },
        "date": 1786828855742,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "169779.30",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "9503fbdb07ec6d5e8470de9956348c660261b487",
          "message": "Clean up some visibility marks and comments",
          "timestamp": "2026-08-16T11:23:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/9503fbdb07ec6d5e8470de9956348c660261b487"
        },
        "date": 1786914937829,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "170648.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Endlia",
            "username": "EndlIa",
            "email": "endlia@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9636662ba3161f6131a7950f6eacf92f4cdcf2b3",
          "message": "Add CI coverage for cargo-component",
          "timestamp": "2026-08-15T18:07:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/9636662ba3161f6131a7950f6eacf92f4cdcf2b3"
        },
        "date": 1787001698971,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "160513.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "165016.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d924a9635a66c7c3bb43e563eaafa2c61d6ee9d5",
          "message": "Update version refs in docs",
          "timestamp": "2026-08-18T12:33:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/d924a9635a66c7c3bb43e563eaafa2c61d6ee9d5"
        },
        "date": 1787088115653,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "165016.50",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "163132.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c823cc6bca468c28fc8a24fd49d2df39011fb384",
          "message": "Add `clang` back to the OSDK dev image",
          "timestamp": "2026-08-19T02:49:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c823cc6bca468c28fc8a24fd49d2df39011fb384"
        },
        "date": 1787174378626,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "163666.12",
            "unit": "request per second",
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
          "id": "1d5dad707a0b6356923d6f08a95e372a42ac69d6",
          "message": "Drop `not same fs` errors from `fs_impls`",
          "timestamp": "2026-08-20T09:21:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1d5dad707a0b6356923d6f08a95e372a42ac69d6"
        },
        "date": 1787260753400,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "161290.33",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787347293130,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787433312492,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "170357.75",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787519929128,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168350.17",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2bcd1ae127794d2d5c49019cd8ace1ff4dbf8e98",
          "message": "Reorder NVMe block_device for top-down reading",
          "timestamp": "2026-08-21T13:00:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/2bcd1ae127794d2d5c49019cd8ace1ff4dbf8e98"
        },
        "date": 1787606314273,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "161290.33",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "169779.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "09e169786f5f65bb3a126454216108fe1bdda7d0",
          "message": "Add devtmpfs ktests",
          "timestamp": "2026-08-22T13:03:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/09e169786f5f65bb3a126454216108fe1bdda7d0"
        },
        "date": 1787692739805,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "160513.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "170068.03",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "556d4e78375adcf0eb46a4c4f2ede2eca63eef64",
          "message": "Fix xAPIC ID extraction",
          "timestamp": "2026-08-26T07:18:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/556d4e78375adcf0eb46a4c4f2ede2eca63eef64"
        },
        "date": 1787782517844,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "161290.33",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "168634.06",
            "unit": "request per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "083f98c3ccad0ae3b44ca1bbe3c861b4e59df560",
          "message": "Fix user buffer validation for iovec entries\n\nValidate all iovec lengths before their buffer ranges, and add an\n`is_in_user_space` helper to check each original buffer range before\ntruncating the total length.",
          "timestamp": "2026-08-27T07:27:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/083f98c3ccad0ae3b44ca1bbe3c861b4e59df560"
        },
        "date": 1787890294310,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "159235.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "165837.48",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "0a9a110690e3faec02d496840c064c9a817e4ff1",
          "message": "Simplify the implementation of the corresponding APIs in the filesystem layer",
          "timestamp": "2026-08-21T08:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a9a110690e3faec02d496840c064c9a817e4ff1"
        },
        "date": 1787978270541,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "158478.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788163800159,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "159744.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "172413.80",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788172662803,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "158478.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c8935f97b1c857ebf2756467ae09b388a759baa1",
          "message": "Skip invalid I/O APIC entries from the MADT\n\nFirmware may report invalid I/O APIC entries. Probing them can hang the\nboot. Follow Linux's mp_register_ioapic and reject entries with zero or\nduplicate addresses, registers return all ones, or conflicting GSI\nranges.",
          "timestamp": "2026-08-28T05:04:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8935f97b1c857ebf2756467ae09b388a759baa1"
        },
        "date": 1788223178641,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "159235.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "170940.17",
            "unit": "request per second",
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
        "date": 1788338151190,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "155038.77",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "167224.08",
            "unit": "request per second",
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
        "date": 1788388845887,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING INLINE performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_inline",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Linux",
            "value": "160771.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_INLINE over virtio-net between Host Linux and Guest Asterinas",
            "value": "150150.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ping_mbulk_100k_conc20_rps": [
      {
        "commit": {
          "author": {
            "name": "刘景宇",
            "username": "liulog",
            "email": "2537738252@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a34935ba3ebdfbc96472e992acda5a74d3b9352",
          "message": "Add cmdline to disable earlycon",
          "timestamp": "2026-07-04T09:08:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a34935ba3ebdfbc96472e992acda5a74d3b9352"
        },
        "date": 1783305088764,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "刘景宇",
            "username": "liulog",
            "email": "2537738252@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a34935ba3ebdfbc96472e992acda5a74d3b9352",
          "message": "Add cmdline to disable earlycon",
          "timestamp": "2026-07-04T09:08:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a34935ba3ebdfbc96472e992acda5a74d3b9352"
        },
        "date": 1783305611219,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "刘景宇",
            "username": "liulog",
            "email": "2537738252@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a34935ba3ebdfbc96472e992acda5a74d3b9352",
          "message": "Add cmdline to disable earlycon",
          "timestamp": "2026-07-04T09:08:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a34935ba3ebdfbc96472e992acda5a74d3b9352"
        },
        "date": 1783320364939,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "afe922d16ee72357f4b05a6c5c1bf8919e5883ee",
          "message": "Fix VirtioFS stale status flags in read paths",
          "timestamp": "2026-07-06T06:55:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/afe922d16ee72357f4b05a6c5c1bf8919e5883ee"
        },
        "date": 1783372881659,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "169204.73",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3864a759e3ae54352b2657df4ff2fcbc6f152d3",
          "message": "Fix virtio device initialization sequence\n\nFollow the VirtIO initialization sequence more closely by setting\nACKNOWLEDGE and DRIVER separately, rechecking FEATURES_OK after feature\nnegotiation, and marking the device as FAILED if any of the steps go wrong.\n\nMove initial receive and event queue notifications until after DRIVER_OK\nfor console, input, network, and vsock devices, so buffers are not\nannounced before the device becomes live.\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-06-26T08:54:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3864a759e3ae54352b2657df4ff2fcbc6f152d3"
        },
        "date": 1783632041307,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "168350.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "169779.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783720978704,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "136798.91",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783805208611,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "161290.33",
            "unit": "request per second",
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
          "id": "b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d",
          "message": "Remove redundant empty-path checks",
          "timestamp": "2026-07-13T03:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d"
        },
        "date": 1783980487946,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "159489.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "169491.53",
            "unit": "request per second",
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
          "id": "b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d",
          "message": "Remove redundant empty-path checks",
          "timestamp": "2026-07-13T03:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d"
        },
        "date": 1784065036392,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163398.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "162074.56",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "435916bf0714a61e0fd1ebab5f6486532dedd8e4",
          "message": "Update linux kernel binary for benchmark",
          "timestamp": "2026-07-13T09:58:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/435916bf0714a61e0fd1ebab5f6486532dedd8e4"
        },
        "date": 1784151140619,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "171232.88",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "c08cd16e3d59ff36f6e4765a006bae963b44cc6e",
          "message": "Format RTC code",
          "timestamp": "2026-07-15T05:24:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/c08cd16e3d59ff36f6e4765a006bae963b44cc6e"
        },
        "date": 1784238267820,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163398.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164473.69",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784323995965,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "165016.50",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "165289.25",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784410396948,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784496429082,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163666.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e155c3b6d8a03d08129edcc73de4ab02d38fc37a",
          "message": "Document sysinfo compatibility",
          "timestamp": "2026-07-15T03:23:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/e155c3b6d8a03d08129edcc73de4ab02d38fc37a"
        },
        "date": 1784584371407,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163132.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "163934.42",
            "unit": "request per second",
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
          "id": "1b22aab02a161013cf11d200c9a28a2e58d4737b",
          "message": "Enforce no trailing whitespace",
          "timestamp": "2026-07-17T10:44:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/1b22aab02a161013cf11d200c9a28a2e58d4737b"
        },
        "date": 1784669903947,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "168918.92",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "5c05f837d9bcdcdc8b4bf3ba8a837e5df0eb9749",
          "message": "Use `map_untracked` to simplify code",
          "timestamp": "2026-07-21T01:23:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/5c05f837d9bcdcdc8b4bf3ba8a837e5df0eb9749"
        },
        "date": 1784755989815,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "168634.06",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "276552ed5ea09fe019d391e24aebd0980a80b1d6",
          "message": "Rewrite safety comments for `KVirtArea::drop`",
          "timestamp": "2026-07-22T11:25:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/276552ed5ea09fe019d391e24aebd0980a80b1d6"
        },
        "date": 1784842905902,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1784929340764,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "169491.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "167504.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1785014943027,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1785101078734,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "154798.75",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "6e57d226d3b3db6d733aaa6ad05cc80c207f96c6",
          "message": "Refine virtiofs attr revalidation",
          "timestamp": "2026-07-22T13:16:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e57d226d3b3db6d733aaa6ad05cc80c207f96c6"
        },
        "date": 1785188781297,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "167224.08",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a95431093609ed1ecca15b13e4568118513fe06",
          "message": "Adjust signalfd method signatures and comments",
          "timestamp": "2026-07-28T08:41:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a95431093609ed1ecca15b13e4568118513fe06"
        },
        "date": 1785275345266,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "166666.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "165016.50",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a95431093609ed1ecca15b13e4568118513fe06",
          "message": "Adjust signalfd method signatures and comments",
          "timestamp": "2026-07-28T08:41:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a95431093609ed1ecca15b13e4568118513fe06"
        },
        "date": 1785361122511,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "161550.89",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "07ae890cef4380273464e0748e9fa17b6e831f28",
          "message": "Adjust blank lines and error messages",
          "timestamp": "2026-07-30T03:08:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/07ae890cef4380273464e0748e9fa17b6e831f28"
        },
        "date": 1785447397424,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "170068.03",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Holovsky",
            "email": "coding@probably.group"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "397ee46b2cf8413c8a30083362526d607e82d6e7",
          "message": "Stop hardcoding the pinned nightly version in docs\n\nBoth references had drifted to nightly-2025-12-06 while rust-toolchain.toml\npins nightly-2026-07-21. Point at the manifest instead, so they cannot go\nstale again.",
          "timestamp": "2026-07-29T18:44:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/397ee46b2cf8413c8a30083362526d607e82d6e7"
        },
        "date": 1785735282432,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "170068.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "171821.30",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2e2b3468f07815be2c372fd5cd103bb37664ad5c",
          "message": "Remove `FileLike::status_flags`",
          "timestamp": "2026-07-31T01:57:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2e2b3468f07815be2c372fd5cd103bb37664ad5c"
        },
        "date": 1785735720980,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "168634.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Holovsky",
            "email": "coding@probably.group"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "397ee46b2cf8413c8a30083362526d607e82d6e7",
          "message": "Stop hardcoding the pinned nightly version in docs\n\nBoth references had drifted to nightly-2025-12-06 while rust-toolchain.toml\npins nightly-2026-07-21. Point at the manifest instead, so they cannot go\nstale again.",
          "timestamp": "2026-07-29T18:44:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/397ee46b2cf8413c8a30083362526d607e82d6e7"
        },
        "date": 1785736610931,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "170648.45",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "3389b533f894f855e946e975daa29f7a46b54171",
          "message": "Pass `&mut FsCreationCtx` to `FsType`",
          "timestamp": "2026-08-03T09:15:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3389b533f894f855e946e975daa29f7a46b54171"
        },
        "date": 1785793157772,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "149253.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4f0a3fccd6d24522a4d5280fa7dd84eba9895c6d",
          "message": "Fix OSDK panic trace and coverage utils",
          "timestamp": "2026-08-04T12:01:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f0a3fccd6d24522a4d5280fa7dd84eba9895c6d"
        },
        "date": 1785879423681,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "169779.30",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "ab59d29891f1505267f22f0d1626311a96514525",
          "message": "Refine the safety condition of `drop_meta_in_place`",
          "timestamp": "2026-08-05T08:34:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab59d29891f1505267f22f0d1626311a96514525"
        },
        "date": 1785965845952,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163398.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786053436031,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "166389.34",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786138219892,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "169491.53",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786223881275,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "168350.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "171821.30",
            "unit": "request per second",
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
          "id": "027fa64d7e85619324f6ad1f0de19d2e59bfee2e",
          "message": "Remove duplicate titles in `kernel-parameters.md`",
          "timestamp": "2026-07-06T04:20:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/027fa64d7e85619324f6ad1f0de19d2e59bfee2e"
        },
        "date": 1786310535539,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
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
          "id": "c8ac7e4cfb64d7336f331aa7654b71281b6acf4d",
          "message": "Remove `CachePolicy` from `activate_page_table`",
          "timestamp": "2026-07-02T02:16:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8ac7e4cfb64d7336f331aa7654b71281b6acf4d"
        },
        "date": 1786397177637,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161290.33",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "169491.53",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4ba4abbe8cb3f2892129d67b0301cf247bbdda0f",
          "message": "Isolate the dormant `controlled` crate",
          "timestamp": "2026-07-19T12:26:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/4ba4abbe8cb3f2892129d67b0301cf247bbdda0f"
        },
        "date": 1786484367727,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "169779.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Duck Ran",
            "username": "laipuran",
            "email": "puranlai@qq.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "76dac6f5524fe9477ce0df9535ba837cc853e32e",
          "message": "Add ktest for kernel slab allocation counter\n\nVerify that allocating enough slots forces new slab pages and increases\nthe counter, that freeing them releases some slabs back, and that\ndropping the cache returns the counter to its original value.",
          "timestamp": "2026-08-06T08:23:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/76dac6f5524fe9477ce0df9535ba837cc853e32e"
        },
        "date": 1786570003827,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163132.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "170068.03",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b9cfb5ccf845feb40303627d23086de235534268",
          "message": "Restrict visibility of internal `aster-core` items",
          "timestamp": "2026-08-12T08:35:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/b9cfb5ccf845feb40303627d23086de235534268"
        },
        "date": 1786656459673,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "437365615c653bb0ad3993fd3c4afc30d033af46",
          "message": "Add some regression tests",
          "timestamp": "2026-08-07T05:20:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/437365615c653bb0ad3993fd3c4afc30d033af46"
        },
        "date": 1786743547023,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161812.31",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "163666.12",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "437365615c653bb0ad3993fd3c4afc30d033af46",
          "message": "Add some regression tests",
          "timestamp": "2026-08-07T05:20:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/437365615c653bb0ad3993fd3c4afc30d033af46"
        },
        "date": 1786828855505,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "163398.70",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "9503fbdb07ec6d5e8470de9956348c660261b487",
          "message": "Clean up some visibility marks and comments",
          "timestamp": "2026-08-16T11:23:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/9503fbdb07ec6d5e8470de9956348c660261b487"
        },
        "date": 1786914937513,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161812.31",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "173010.38",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Endlia",
            "username": "EndlIa",
            "email": "endlia@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9636662ba3161f6131a7950f6eacf92f4cdcf2b3",
          "message": "Add CI coverage for cargo-component",
          "timestamp": "2026-08-15T18:07:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/9636662ba3161f6131a7950f6eacf92f4cdcf2b3"
        },
        "date": 1787001698728,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "160771.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d924a9635a66c7c3bb43e563eaafa2c61d6ee9d5",
          "message": "Update version refs in docs",
          "timestamp": "2026-08-18T12:33:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/d924a9635a66c7c3bb43e563eaafa2c61d6ee9d5"
        },
        "date": 1787088115294,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c823cc6bca468c28fc8a24fd49d2df39011fb384",
          "message": "Add `clang` back to the OSDK dev image",
          "timestamp": "2026-08-19T02:49:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c823cc6bca468c28fc8a24fd49d2df39011fb384"
        },
        "date": 1787174378283,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163398.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "166666.66",
            "unit": "request per second",
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
          "id": "1d5dad707a0b6356923d6f08a95e372a42ac69d6",
          "message": "Drop `not same fs` errors from `fs_impls`",
          "timestamp": "2026-08-20T09:21:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1d5dad707a0b6356923d6f08a95e372a42ac69d6"
        },
        "date": 1787260753190,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "160256.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787347292850,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "154559.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787433312258,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787519928755,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "165562.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2bcd1ae127794d2d5c49019cd8ace1ff4dbf8e98",
          "message": "Reorder NVMe block_device for top-down reading",
          "timestamp": "2026-08-21T13:00:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/2bcd1ae127794d2d5c49019cd8ace1ff4dbf8e98"
        },
        "date": 1787606314079,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "160513.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "155279.50",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "09e169786f5f65bb3a126454216108fe1bdda7d0",
          "message": "Add devtmpfs ktests",
          "timestamp": "2026-08-22T13:03:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/09e169786f5f65bb3a126454216108fe1bdda7d0"
        },
        "date": 1787692739631,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "556d4e78375adcf0eb46a4c4f2ede2eca63eef64",
          "message": "Fix xAPIC ID extraction",
          "timestamp": "2026-08-26T07:18:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/556d4e78375adcf0eb46a4c4f2ede2eca63eef64"
        },
        "date": 1787782517640,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "167224.08",
            "unit": "request per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "083f98c3ccad0ae3b44ca1bbe3c861b4e59df560",
          "message": "Fix user buffer validation for iovec entries\n\nValidate all iovec lengths before their buffer ranges, and add an\n`is_in_user_space` helper to check each original buffer range before\ntruncating the total length.",
          "timestamp": "2026-08-27T07:27:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/083f98c3ccad0ae3b44ca1bbe3c861b4e59df560"
        },
        "date": 1787890294068,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161290.33",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164744.64",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "0a9a110690e3faec02d496840c064c9a817e4ff1",
          "message": "Simplify the implementation of the corresponding APIs in the filesystem layer",
          "timestamp": "2026-08-21T08:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a9a110690e3faec02d496840c064c9a817e4ff1"
        },
        "date": 1787978270348,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161550.89",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788163799926,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "163398.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788172662547,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161550.89",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "168918.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c8935f97b1c857ebf2756467ae09b388a759baa1",
          "message": "Skip invalid I/O APIC entries from the MADT\n\nFirmware may report invalid I/O APIC entries. Probing them can hang the\nboot. Follow Linux's mp_register_ioapic and reject entries with zero or\nduplicate addresses, registers return all ones, or conflicting GSI\nranges.",
          "timestamp": "2026-08-28T05:04:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8935f97b1c857ebf2756467ae09b388a759baa1"
        },
        "date": 1788223178454,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "170648.45",
            "unit": "request per second",
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
        "date": 1788338150935,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "160513.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
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
        "date": 1788388845631,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "172413.80",
            "unit": "request per second",
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
        "date": 1788471171007,
        "tool": "customBiggerIsBetter",
        "title": "Redis PING MBULK performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t ping_mbulk",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Linux",
            "value": "160771.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of PING_MBULK over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "get_100k_conc20_rps": [
      {
        "commit": {
          "author": {
            "name": "刘景宇",
            "username": "liulog",
            "email": "2537738252@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a34935ba3ebdfbc96472e992acda5a74d3b9352",
          "message": "Add cmdline to disable earlycon",
          "timestamp": "2026-07-04T09:08:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a34935ba3ebdfbc96472e992acda5a74d3b9352"
        },
        "date": 1783320365147,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "165016.50",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "afe922d16ee72357f4b05a6c5c1bf8919e5883ee",
          "message": "Fix VirtioFS stale status flags in read paths",
          "timestamp": "2026-07-06T06:55:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/afe922d16ee72357f4b05a6c5c1bf8919e5883ee"
        },
        "date": 1783372881913,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "bf8e15eff0877954deba68c4bf188f700d501572",
          "message": "Add `/proc/sys/vm/mmap_min_addr`",
          "timestamp": "2026-07-07T04:46:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf8e15eff0877954deba68c4bf188f700d501572"
        },
        "date": 1783459159422,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "167504.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3864a759e3ae54352b2657df4ff2fcbc6f152d3",
          "message": "Fix virtio device initialization sequence\n\nFollow the VirtIO initialization sequence more closely by setting\nACKNOWLEDGE and DRIVER separately, rechecking FEATURES_OK after feature\nnegotiation, and marking the device as FAILED if any of the steps go wrong.\n\nMove initial receive and event queue notifications until after DRIVER_OK\nfor console, input, network, and vsock devices, so buffers are not\nannounced before the device becomes live.\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-06-26T08:54:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3864a759e3ae54352b2657df4ff2fcbc6f152d3"
        },
        "date": 1783632041610,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170357.75",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783720979214,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162074.56",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783805209261,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783892174259,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "168350.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "140252.45",
            "unit": "request per second",
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
          "id": "b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d",
          "message": "Remove redundant empty-path checks",
          "timestamp": "2026-07-13T03:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d"
        },
        "date": 1783980488419,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "171232.88",
            "unit": "request per second",
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
          "id": "b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d",
          "message": "Remove redundant empty-path checks",
          "timestamp": "2026-07-13T03:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d"
        },
        "date": 1784065036750,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "151515.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170940.17",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "435916bf0714a61e0fd1ebab5f6486532dedd8e4",
          "message": "Update linux kernel binary for benchmark",
          "timestamp": "2026-07-13T09:58:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/435916bf0714a61e0fd1ebab5f6486532dedd8e4"
        },
        "date": 1784151141096,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165562.92",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "c08cd16e3d59ff36f6e4765a006bae963b44cc6e",
          "message": "Format RTC code",
          "timestamp": "2026-07-15T05:24:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/c08cd16e3d59ff36f6e4765a006bae963b44cc6e"
        },
        "date": 1784238268349,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "161812.31",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168350.17",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784323996323,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168067.22",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784410397556,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784496429540,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168918.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e155c3b6d8a03d08129edcc73de4ab02d38fc37a",
          "message": "Document sysinfo compatibility",
          "timestamp": "2026-07-15T03:23:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/e155c3b6d8a03d08129edcc73de4ab02d38fc37a"
        },
        "date": 1784584371877,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164744.64",
            "unit": "request per second",
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
          "id": "1b22aab02a161013cf11d200c9a28a2e58d4737b",
          "message": "Enforce no trailing whitespace",
          "timestamp": "2026-07-17T10:44:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/1b22aab02a161013cf11d200c9a28a2e58d4737b"
        },
        "date": 1784669904626,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167224.08",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "5c05f837d9bcdcdc8b4bf3ba8a837e5df0eb9749",
          "message": "Use `map_untracked` to simplify code",
          "timestamp": "2026-07-21T01:23:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/5c05f837d9bcdcdc8b4bf3ba8a837e5df0eb9749"
        },
        "date": 1784755990450,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "166666.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166666.66",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "276552ed5ea09fe019d391e24aebd0980a80b1d6",
          "message": "Rewrite safety comments for `KVirtArea::drop`",
          "timestamp": "2026-07-22T11:25:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/276552ed5ea09fe019d391e24aebd0980a80b1d6"
        },
        "date": 1784842906397,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "167504.19",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1784929341513,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "150150.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1785014943559,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "169204.73",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1785101079183,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169491.53",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "6e57d226d3b3db6d733aaa6ad05cc80c207f96c6",
          "message": "Refine virtiofs attr revalidation",
          "timestamp": "2026-07-22T13:16:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e57d226d3b3db6d733aaa6ad05cc80c207f96c6"
        },
        "date": 1785188781985,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168067.22",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a95431093609ed1ecca15b13e4568118513fe06",
          "message": "Adjust signalfd method signatures and comments",
          "timestamp": "2026-07-28T08:41:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a95431093609ed1ecca15b13e4568118513fe06"
        },
        "date": 1785275345733,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "159744.41",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a95431093609ed1ecca15b13e4568118513fe06",
          "message": "Adjust signalfd method signatures and comments",
          "timestamp": "2026-07-28T08:41:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a95431093609ed1ecca15b13e4568118513fe06"
        },
        "date": 1785361122730,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "159489.64",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "07ae890cef4380273464e0748e9fa17b6e831f28",
          "message": "Adjust blank lines and error messages",
          "timestamp": "2026-07-30T03:08:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/07ae890cef4380273464e0748e9fa17b6e831f28"
        },
        "date": 1785447397949,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169779.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Holovsky",
            "email": "coding@probably.group"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "397ee46b2cf8413c8a30083362526d607e82d6e7",
          "message": "Stop hardcoding the pinned nightly version in docs\n\nBoth references had drifted to nightly-2025-12-06 while rust-toolchain.toml\npins nightly-2026-07-21. Point at the manifest instead, so they cannot go\nstale again.",
          "timestamp": "2026-07-29T18:44:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/397ee46b2cf8413c8a30083362526d607e82d6e7"
        },
        "date": 1785735283025,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "169204.73",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2e2b3468f07815be2c372fd5cd103bb37664ad5c",
          "message": "Remove `FileLike::status_flags`",
          "timestamp": "2026-07-31T01:57:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2e2b3468f07815be2c372fd5cd103bb37664ad5c"
        },
        "date": 1785735721375,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Holovsky",
            "email": "coding@probably.group"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "397ee46b2cf8413c8a30083362526d607e82d6e7",
          "message": "Stop hardcoding the pinned nightly version in docs\n\nBoth references had drifted to nightly-2025-12-06 while rust-toolchain.toml\npins nightly-2026-07-21. Point at the manifest instead, so they cannot go\nstale again.",
          "timestamp": "2026-07-29T18:44:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/397ee46b2cf8413c8a30083362526d607e82d6e7"
        },
        "date": 1785736611302,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "147929.00",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "3389b533f894f855e946e975daa29f7a46b54171",
          "message": "Pass `&mut FsCreationCtx` to `FsType`",
          "timestamp": "2026-08-03T09:15:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3389b533f894f855e946e975daa29f7a46b54171"
        },
        "date": 1785793158318,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4f0a3fccd6d24522a4d5280fa7dd84eba9895c6d",
          "message": "Fix OSDK panic trace and coverage utils",
          "timestamp": "2026-08-04T12:01:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f0a3fccd6d24522a4d5280fa7dd84eba9895c6d"
        },
        "date": 1785879424163,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "158982.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "171821.30",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "ab59d29891f1505267f22f0d1626311a96514525",
          "message": "Refine the safety condition of `drop_meta_in_place`",
          "timestamp": "2026-08-05T08:34:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab59d29891f1505267f22f0d1626311a96514525"
        },
        "date": 1785965846339,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786053436698,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "168918.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "160256.41",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786138220270,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169491.53",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786223881927,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "171821.30",
            "unit": "request per second",
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
          "id": "027fa64d7e85619324f6ad1f0de19d2e59bfee2e",
          "message": "Remove duplicate titles in `kernel-parameters.md`",
          "timestamp": "2026-07-06T04:20:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/027fa64d7e85619324f6ad1f0de19d2e59bfee2e"
        },
        "date": 1786310535903,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168067.22",
            "unit": "request per second",
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
          "id": "c8ac7e4cfb64d7336f331aa7654b71281b6acf4d",
          "message": "Remove `CachePolicy` from `activate_page_table`",
          "timestamp": "2026-07-02T02:16:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8ac7e4cfb64d7336f331aa7654b71281b6acf4d"
        },
        "date": 1786397178067,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4ba4abbe8cb3f2892129d67b0301cf247bbdda0f",
          "message": "Isolate the dormant `controlled` crate",
          "timestamp": "2026-07-19T12:26:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/4ba4abbe8cb3f2892129d67b0301cf247bbdda0f"
        },
        "date": 1786484368348,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "161290.33",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Duck Ran",
            "username": "laipuran",
            "email": "puranlai@qq.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "76dac6f5524fe9477ce0df9535ba837cc853e32e",
          "message": "Add ktest for kernel slab allocation counter\n\nVerify that allocating enough slots forces new slab pages and increases\nthe counter, that freeing them releases some slabs back, and that\ndropping the cache returns the counter to its original value.",
          "timestamp": "2026-08-06T08:23:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/76dac6f5524fe9477ce0df9535ba837cc853e32e"
        },
        "date": 1786570004283,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "163666.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169491.53",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b9cfb5ccf845feb40303627d23086de235534268",
          "message": "Restrict visibility of internal `aster-core` items",
          "timestamp": "2026-08-12T08:35:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/b9cfb5ccf845feb40303627d23086de235534268"
        },
        "date": 1786656460845,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165016.50",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "437365615c653bb0ad3993fd3c4afc30d033af46",
          "message": "Add some regression tests",
          "timestamp": "2026-08-07T05:20:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/437365615c653bb0ad3993fd3c4afc30d033af46"
        },
        "date": 1786743547435,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "160000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170357.75",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "437365615c653bb0ad3993fd3c4afc30d033af46",
          "message": "Add some regression tests",
          "timestamp": "2026-08-07T05:20:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/437365615c653bb0ad3993fd3c4afc30d033af46"
        },
        "date": 1786828855941,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "157728.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "171821.30",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "9503fbdb07ec6d5e8470de9956348c660261b487",
          "message": "Clean up some visibility marks and comments",
          "timestamp": "2026-08-16T11:23:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/9503fbdb07ec6d5e8470de9956348c660261b487"
        },
        "date": 1786914938117,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Endlia",
            "username": "EndlIa",
            "email": "endlia@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9636662ba3161f6131a7950f6eacf92f4cdcf2b3",
          "message": "Add CI coverage for cargo-component",
          "timestamp": "2026-08-15T18:07:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/9636662ba3161f6131a7950f6eacf92f4cdcf2b3"
        },
        "date": 1787001699208,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "173010.38",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d924a9635a66c7c3bb43e563eaafa2c61d6ee9d5",
          "message": "Update version refs in docs",
          "timestamp": "2026-08-18T12:33:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/d924a9635a66c7c3bb43e563eaafa2c61d6ee9d5"
        },
        "date": 1787088116016,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "160000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c823cc6bca468c28fc8a24fd49d2df39011fb384",
          "message": "Add `clang` back to the OSDK dev image",
          "timestamp": "2026-08-19T02:49:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c823cc6bca468c28fc8a24fd49d2df39011fb384"
        },
        "date": 1787174378967,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "148367.95",
            "unit": "request per second",
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
          "id": "1d5dad707a0b6356923d6f08a95e372a42ac69d6",
          "message": "Drop `not same fs` errors from `fs_impls`",
          "timestamp": "2026-08-20T09:21:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/1d5dad707a0b6356923d6f08a95e372a42ac69d6"
        },
        "date": 1787260753630,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "159744.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170940.17",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787347293402,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "163398.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787433312735,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "163132.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787519929501,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170068.03",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2bcd1ae127794d2d5c49019cd8ace1ff4dbf8e98",
          "message": "Reorder NVMe block_device for top-down reading",
          "timestamp": "2026-08-21T13:00:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/2bcd1ae127794d2d5c49019cd8ace1ff4dbf8e98"
        },
        "date": 1787606314465,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169491.53",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "09e169786f5f65bb3a126454216108fe1bdda7d0",
          "message": "Add devtmpfs ktests",
          "timestamp": "2026-08-22T13:03:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/09e169786f5f65bb3a126454216108fe1bdda7d0"
        },
        "date": 1787692739993,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "556d4e78375adcf0eb46a4c4f2ede2eca63eef64",
          "message": "Fix xAPIC ID extraction",
          "timestamp": "2026-08-26T07:18:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/556d4e78375adcf0eb46a4c4f2ede2eca63eef64"
        },
        "date": 1787782518043,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "158982.52",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "171821.30",
            "unit": "request per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "083f98c3ccad0ae3b44ca1bbe3c861b4e59df560",
          "message": "Fix user buffer validation for iovec entries\n\nValidate all iovec lengths before their buffer ranges, and add an\n`is_in_user_space` helper to check each original buffer range before\ntruncating the total length.",
          "timestamp": "2026-08-27T07:27:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/083f98c3ccad0ae3b44ca1bbe3c861b4e59df560"
        },
        "date": 1787890294591,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "157480.31",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170068.03",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "0a9a110690e3faec02d496840c064c9a817e4ff1",
          "message": "Simplify the implementation of the corresponding APIs in the filesystem layer",
          "timestamp": "2026-08-21T08:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a9a110690e3faec02d496840c064c9a817e4ff1"
        },
        "date": 1787978270717,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "159489.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788163800420,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "159235.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788172663037,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c8935f97b1c857ebf2756467ae09b388a759baa1",
          "message": "Skip invalid I/O APIC entries from the MADT\n\nFirmware may report invalid I/O APIC entries. Probing them can hang the\nboot. Follow Linux's mp_register_ioapic and reject entries with zero or\nduplicate addresses, registers return all ones, or conflicting GSI\nranges.",
          "timestamp": "2026-08-28T05:04:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8935f97b1c857ebf2756467ae09b388a759baa1"
        },
        "date": 1788223178835,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "160771.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
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
        "date": 1788338151456,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "158478.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "163934.42",
            "unit": "request per second",
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
        "date": 1788388846162,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "158730.16",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165837.48",
            "unit": "request per second",
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
        "date": 1788471171261,
        "tool": "customBiggerIsBetter",
        "title": "Redis GET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t get",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Linux",
            "value": "159744.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165562.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "set_100k_conc20_rps": [
      {
        "commit": {
          "author": {
            "name": "刘景宇",
            "username": "liulog",
            "email": "2537738252@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a34935ba3ebdfbc96472e992acda5a74d3b9352",
          "message": "Add cmdline to disable earlycon",
          "timestamp": "2026-07-04T09:08:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a34935ba3ebdfbc96472e992acda5a74d3b9352"
        },
        "date": 1783305088468,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "刘景宇",
            "username": "liulog",
            "email": "2537738252@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a34935ba3ebdfbc96472e992acda5a74d3b9352",
          "message": "Add cmdline to disable earlycon",
          "timestamp": "2026-07-04T09:08:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a34935ba3ebdfbc96472e992acda5a74d3b9352"
        },
        "date": 1783305611026,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "刘景宇",
            "username": "liulog",
            "email": "2537738252@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a34935ba3ebdfbc96472e992acda5a74d3b9352",
          "message": "Add cmdline to disable earlycon",
          "timestamp": "2026-07-04T09:08:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a34935ba3ebdfbc96472e992acda5a74d3b9352"
        },
        "date": 1783320364719,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "afe922d16ee72357f4b05a6c5c1bf8919e5883ee",
          "message": "Fix VirtioFS stale status flags in read paths",
          "timestamp": "2026-07-06T06:55:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/afe922d16ee72357f4b05a6c5c1bf8919e5883ee"
        },
        "date": 1783372881454,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170648.45",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "bf8e15eff0877954deba68c4bf188f700d501572",
          "message": "Add `/proc/sys/vm/mmap_min_addr`",
          "timestamp": "2026-07-07T04:46:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf8e15eff0877954deba68c4bf188f700d501572"
        },
        "date": 1783459159220,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "161812.31",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ray Lee",
            "username": "hburaylee",
            "email": "hburaylee@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3864a759e3ae54352b2657df4ff2fcbc6f152d3",
          "message": "Fix virtio device initialization sequence\n\nFollow the VirtIO initialization sequence more closely by setting\nACKNOWLEDGE and DRIVER separately, rechecking FEATURES_OK after feature\nnegotiation, and marking the device as FAILED if any of the steps go wrong.\n\nMove initial receive and event queue notifications until after DRIVER_OK\nfor console, input, network, and vsock devices, so buffers are not\nannounced before the device becomes live.\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-06-26T08:54:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3864a759e3ae54352b2657df4ff2fcbc6f152d3"
        },
        "date": 1783632040983,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783720978407,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "163666.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783805208307,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "168350.17",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168634.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "37411049265056135a5e18c8c75a0c3d16b18579",
          "message": "Add more procfs kernel compatibility files",
          "timestamp": "2026-07-07T07:08:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/37411049265056135a5e18c8c75a0c3d16b18579"
        },
        "date": 1783892173916,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
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
          "id": "b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d",
          "message": "Remove redundant empty-path checks",
          "timestamp": "2026-07-13T03:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d"
        },
        "date": 1783980487734,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "149925.03",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
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
          "id": "b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d",
          "message": "Remove redundant empty-path checks",
          "timestamp": "2026-07-13T03:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/b91ce0947fa3cc5af74d6a1cadd8745cca48dc1d"
        },
        "date": 1784065036191,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "163666.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "435916bf0714a61e0fd1ebab5f6486532dedd8e4",
          "message": "Update linux kernel binary for benchmark",
          "timestamp": "2026-07-13T09:58:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/435916bf0714a61e0fd1ebab5f6486532dedd8e4"
        },
        "date": 1784151140382,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "163398.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162074.56",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "c08cd16e3d59ff36f6e4765a006bae963b44cc6e",
          "message": "Format RTC code",
          "timestamp": "2026-07-15T05:24:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/c08cd16e3d59ff36f6e4765a006bae963b44cc6e"
        },
        "date": 1784238267581,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "168067.22",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169779.30",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784323995775,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784410396653,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "163934.42",
            "unit": "request per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2b34b10513172de67b69502fe68df5774f6d0cb4",
          "message": "Add regression tests",
          "timestamp": "2026-07-16T06:46:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/2b34b10513172de67b69502fe68df5774f6d0cb4"
        },
        "date": 1784496428790,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168634.06",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bet4",
            "username": "bet4it",
            "email": "0xbet4@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e155c3b6d8a03d08129edcc73de4ab02d38fc37a",
          "message": "Document sysinfo compatibility",
          "timestamp": "2026-07-15T03:23:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/e155c3b6d8a03d08129edcc73de4ab02d38fc37a"
        },
        "date": 1784584371158,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169491.53",
            "unit": "request per second",
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
          "id": "1b22aab02a161013cf11d200c9a28a2e58d4737b",
          "message": "Enforce no trailing whitespace",
          "timestamp": "2026-07-17T10:44:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/1b22aab02a161013cf11d200c9a28a2e58d4737b"
        },
        "date": 1784669903627,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164744.64",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "5c05f837d9bcdcdc8b4bf3ba8a837e5df0eb9749",
          "message": "Use `map_untracked` to simplify code",
          "timestamp": "2026-07-21T01:23:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/5c05f837d9bcdcdc8b4bf3ba8a837e5df0eb9749"
        },
        "date": 1784755989426,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "276552ed5ea09fe019d391e24aebd0980a80b1d6",
          "message": "Rewrite safety comments for `KVirtArea::drop`",
          "timestamp": "2026-07-22T11:25:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/276552ed5ea09fe019d391e24aebd0980a80b1d6"
        },
        "date": 1784842905617,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "153139.36",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "163132.14",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1784929340384,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "165289.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167504.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1785014942784,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "169491.53",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167504.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "yao",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6c314ef6da150a9ce394642bbb0d89c81b045da6",
          "message": "Fix aster-code-review total_defects to nreal",
          "timestamp": "2026-07-21T02:58:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6c314ef6da150a9ce394642bbb0d89c81b045da6"
        },
        "date": 1785101078555,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "6e57d226d3b3db6d733aaa6ad05cc80c207f96c6",
          "message": "Refine virtiofs attr revalidation",
          "timestamp": "2026-07-22T13:16:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/6e57d226d3b3db6d733aaa6ad05cc80c207f96c6"
        },
        "date": 1785188780966,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168634.06",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a95431093609ed1ecca15b13e4568118513fe06",
          "message": "Adjust signalfd method signatures and comments",
          "timestamp": "2026-07-28T08:41:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a95431093609ed1ecca15b13e4568118513fe06"
        },
        "date": 1785275345017,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "146198.83",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "8a95431093609ed1ecca15b13e4568118513fe06",
          "message": "Adjust signalfd method signatures and comments",
          "timestamp": "2026-07-28T08:41:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a95431093609ed1ecca15b13e4568118513fe06"
        },
        "date": 1785361122282,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166389.34",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "07ae890cef4380273464e0748e9fa17b6e831f28",
          "message": "Adjust blank lines and error messages",
          "timestamp": "2026-07-30T03:08:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/07ae890cef4380273464e0748e9fa17b6e831f28"
        },
        "date": 1785447397178,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "161030.59",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Holovsky",
            "email": "coding@probably.group"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "397ee46b2cf8413c8a30083362526d607e82d6e7",
          "message": "Stop hardcoding the pinned nightly version in docs\n\nBoth references had drifted to nightly-2025-12-06 while rust-toolchain.toml\npins nightly-2026-07-21. Point at the manifest instead, so they cannot go\nstale again.",
          "timestamp": "2026-07-29T18:44:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/397ee46b2cf8413c8a30083362526d607e82d6e7"
        },
        "date": 1785735282096,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170068.03",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2e2b3468f07815be2c372fd5cd103bb37664ad5c",
          "message": "Remove `FileLike::status_flags`",
          "timestamp": "2026-07-31T01:57:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/2e2b3468f07815be2c372fd5cd103bb37664ad5c"
        },
        "date": 1785735720812,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "168918.92",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167504.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Martin Holovsky",
            "email": "coding@probably.group"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "397ee46b2cf8413c8a30083362526d607e82d6e7",
          "message": "Stop hardcoding the pinned nightly version in docs\n\nBoth references had drifted to nightly-2025-12-06 while rust-toolchain.toml\npins nightly-2026-07-21. Point at the manifest instead, so they cannot go\nstale again.",
          "timestamp": "2026-07-29T18:44:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/397ee46b2cf8413c8a30083362526d607e82d6e7"
        },
        "date": 1785736610748,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170068.03",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "3389b533f894f855e946e975daa29f7a46b54171",
          "message": "Pass `&mut FsCreationCtx` to `FsType`",
          "timestamp": "2026-08-03T09:15:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3389b533f894f855e946e975daa29f7a46b54171"
        },
        "date": 1785793157499,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "166389.34",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4f0a3fccd6d24522a4d5280fa7dd84eba9895c6d",
          "message": "Fix OSDK panic trace and coverage utils",
          "timestamp": "2026-08-04T12:01:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f0a3fccd6d24522a4d5280fa7dd84eba9895c6d"
        },
        "date": 1785879423444,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "163934.42",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "170648.45",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "ab59d29891f1505267f22f0d1626311a96514525",
          "message": "Refine the safety condition of `drop_meta_in_place`",
          "timestamp": "2026-08-05T08:34:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab59d29891f1505267f22f0d1626311a96514525"
        },
        "date": 1785965845745,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786053435662,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168067.22",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786138219651,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "164744.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164744.64",
            "unit": "request per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "a110dfc73da00191d58ed62defaf6a5b3a12045e",
          "message": "Update page cache tests",
          "timestamp": "2026-06-18T02:14:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/a110dfc73da00191d58ed62defaf6a5b3a12045e"
        },
        "date": 1786223880962,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "166112.95",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "169204.73",
            "unit": "request per second",
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
          "id": "c8ac7e4cfb64d7336f331aa7654b71281b6acf4d",
          "message": "Remove `CachePolicy` from `activate_page_table`",
          "timestamp": "2026-07-02T02:16:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8ac7e4cfb64d7336f331aa7654b71281b6acf4d"
        },
        "date": 1786397177447,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "159744.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4ba4abbe8cb3f2892129d67b0301cf247bbdda0f",
          "message": "Isolate the dormant `controlled` crate",
          "timestamp": "2026-07-19T12:26:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/4ba4abbe8cb3f2892129d67b0301cf247bbdda0f"
        },
        "date": 1786484367449,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "163666.12",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Duck Ran",
            "username": "laipuran",
            "email": "puranlai@qq.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "76dac6f5524fe9477ce0df9535ba837cc853e32e",
          "message": "Add ktest for kernel slab allocation counter\n\nVerify that allocating enough slots forces new slab pages and increases\nthe counter, that freeing them releases some slabs back, and that\ndropping the cache returns the counter to its original value.",
          "timestamp": "2026-08-06T08:23:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/76dac6f5524fe9477ce0df9535ba837cc853e32e"
        },
        "date": 1786570003581,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "160771.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167785.23",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "le-monde-bleu",
            "username": "le-monde-bleu",
            "email": "2301110750@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b9cfb5ccf845feb40303627d23086de235534268",
          "message": "Restrict visibility of internal `aster-core` items",
          "timestamp": "2026-08-12T08:35:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/b9cfb5ccf845feb40303627d23086de235534268"
        },
        "date": 1786656459090,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "142653.36",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "146627.56",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "437365615c653bb0ad3993fd3c4afc30d033af46",
          "message": "Add some regression tests",
          "timestamp": "2026-08-07T05:20:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/437365615c653bb0ad3993fd3c4afc30d033af46"
        },
        "date": 1786743546752,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "157728.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166112.95",
            "unit": "request per second",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "9503fbdb07ec6d5e8470de9956348c660261b487",
          "message": "Clean up some visibility marks and comments",
          "timestamp": "2026-08-16T11:23:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/9503fbdb07ec6d5e8470de9956348c660261b487"
        },
        "date": 1786914937195,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "161812.31",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Endlia",
            "username": "EndlIa",
            "email": "endlia@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9636662ba3161f6131a7950f6eacf92f4cdcf2b3",
          "message": "Add CI coverage for cargo-component",
          "timestamp": "2026-08-15T18:07:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/9636662ba3161f6131a7950f6eacf92f4cdcf2b3"
        },
        "date": 1787001698480,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "159489.64",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164473.69",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d924a9635a66c7c3bb43e563eaafa2c61d6ee9d5",
          "message": "Update version refs in docs",
          "timestamp": "2026-08-18T12:33:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/d924a9635a66c7c3bb43e563eaafa2c61d6ee9d5"
        },
        "date": 1787088114966,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "162601.62",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c823cc6bca468c28fc8a24fd49d2df39011fb384",
          "message": "Add `clang` back to the OSDK dev image",
          "timestamp": "2026-08-19T02:49:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c823cc6bca468c28fc8a24fd49d2df39011fb384"
        },
        "date": 1787174377956,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "160000.00",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787347292537,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "160771.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "160513.64",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787433311976,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "161550.89",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "168918.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ya0rk",
            "username": "Ya0rk",
            "email": "yoohoo1287@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "604948581512d83734377974d4c34adb4530f2d7",
          "message": "Add aster-code-review benchmark problem:500-508",
          "timestamp": "2026-08-08T01:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/604948581512d83734377974d4c34adb4530f2d7"
        },
        "date": 1787519928361,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "164203.61",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cautreoxit",
            "username": "Cautreoxit",
            "email": "huk@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2bcd1ae127794d2d5c49019cd8ace1ff4dbf8e98",
          "message": "Reorder NVMe block_device for top-down reading",
          "timestamp": "2026-08-21T13:00:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/2bcd1ae127794d2d5c49019cd8ace1ff4dbf8e98"
        },
        "date": 1787606313876,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "160771.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167224.08",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "09e169786f5f65bb3a126454216108fe1bdda7d0",
          "message": "Add devtmpfs ktests",
          "timestamp": "2026-08-22T13:03:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/09e169786f5f65bb3a126454216108fe1bdda7d0"
        },
        "date": 1787692739432,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "162866.44",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "143266.47",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "556d4e78375adcf0eb46a4c4f2ede2eca63eef64",
          "message": "Fix xAPIC ID extraction",
          "timestamp": "2026-08-26T07:18:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/556d4e78375adcf0eb46a4c4f2ede2eca63eef64"
        },
        "date": 1787782517426,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "163132.14",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "171232.88",
            "unit": "request per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "083f98c3ccad0ae3b44ca1bbe3c861b4e59df560",
          "message": "Fix user buffer validation for iovec entries\n\nValidate all iovec lengths before their buffer ranges, and add an\n`is_in_user_space` helper to check each original buffer range before\ntruncating the total length.",
          "timestamp": "2026-08-27T07:27:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/083f98c3ccad0ae3b44ca1bbe3c861b4e59df560"
        },
        "date": 1787890293738,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "154320.98",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166389.34",
            "unit": "request per second",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "0a9a110690e3faec02d496840c064c9a817e4ff1",
          "message": "Simplify the implementation of the corresponding APIs in the filesystem layer",
          "timestamp": "2026-08-21T08:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a9a110690e3faec02d496840c064c9a817e4ff1"
        },
        "date": 1787978270139,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "157977.88",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "165837.48",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788163799695,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "151057.41",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "166944.92",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788172662322,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "157728.70",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "167504.19",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fan Jie",
            "username": "f-jye",
            "email": "fanjie@uniontech.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c8935f97b1c857ebf2756467ae09b388a759baa1",
          "message": "Skip invalid I/O APIC entries from the MADT\n\nFirmware may report invalid I/O APIC entries. Probing them can hang the\nboot. Follow Linux's mp_register_ioapic and reject entries with zero or\nduplicate addresses, registers return all ones, or conflicting GSI\nranges.",
          "timestamp": "2026-08-28T05:04:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/c8935f97b1c857ebf2756467ae09b388a759baa1"
        },
        "date": 1788223178282,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "156006.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162866.44",
            "unit": "request per second",
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
        "date": 1788338150650,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "156006.25",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "138312.59",
            "unit": "request per second",
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
        "date": 1788388845437,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "155279.50",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "160513.64",
            "unit": "request per second",
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
        "date": 1788471170774,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "154559.50",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "161812.31",
            "unit": "request per second",
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
        "date": 1788557581676,
        "tool": "customBiggerIsBetter",
        "title": "Redis SET performance (virtio-net, 20 concurrency, 100K requests)",
        "description": "redis-benchmark -n 100000 -c 20 -t set",
        "display": true,
        "benches": [
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Linux",
            "value": "154798.75",
            "unit": "request per second",
            "extra": "linux_result"
          },
          {
            "name": "Average RPS of SET over virtio-net between Host Linux and Guest Asterinas",
            "value": "162337.66",
            "unit": "request per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}