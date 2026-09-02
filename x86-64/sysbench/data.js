window.BENCHMARK_DATA = {
  "lastUpdate": 1788388837635,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "cpu_lat": [
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "f7ff85597d892ec7476489216672b0ad61b7090f",
          "message": "Fix `pidfd_open` accepting pid=0 instead of returning EINVAL",
          "timestamp": "2026-06-11T07:43:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/f7ff85597d892ec7476489216672b0ad61b7090f"
        },
        "date": 1781565240625,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.13",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.13",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e4f8507720924b42e04dfa40b8b10e2c0bf11941",
          "message": "Fix `memfd_create` returning wrong errno for too-long name",
          "timestamp": "2026-06-11T07:00:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4f8507720924b42e04dfa40b8b10e2c0bf11941"
        },
        "date": 1781651286235,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.15",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.14",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "co63oc",
            "username": "co63oc",
            "email": "4617245+co63oc@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "56bf21533b4278663e817b124f4dc9f4afcdc7d5",
          "message": "Update `birth_at` field type from `Duration` to `Option<Duration>`",
          "timestamp": "2026-06-29T06:18:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/56bf21533b4278663e817b124f4dc9f4afcdc7d5"
        },
        "date": 1782767780767,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.05",
            "unit": "ms",
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
          "id": "1192a330ce31302e829f17168120d13500f9d40a",
          "message": "Add a code-review benchmark problem",
          "timestamp": "2026-07-04T05:41:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/1192a330ce31302e829f17168120d13500f9d40a"
        },
        "date": 1783199911834,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1783320358097,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1783372875840,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1783720968703,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.05",
            "unit": "ms",
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
        "date": 1783805198254,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1783892167435,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1783980479856,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784065029430,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784151131944,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784238259230,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784323989297,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784410390435,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784496420978,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784584362918,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784669893049,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784755979376,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.06",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1784842897088,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1784929328824,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.06",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1785014933788,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1785101072216,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1785188769709,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.05",
            "unit": "ms",
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
        "date": 1785275337214,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1785361114309,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1785447388733,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1785736604192,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1785793148567,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1785879415180,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1785965838855,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.06",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.05",
            "unit": "ms",
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
        "date": 1786053429004,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1786138212588,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1786223870748,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1786310528902,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1786397170108,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1786484361330,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1786569995242,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1786656441817,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1786743539616,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1786828848554,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.06",
            "unit": "ms",
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
        "date": 1786914927017,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1787001690322,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1787088103744,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.05",
            "unit": "ms",
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
        "date": 1787174367530,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1787260746376,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1787347283039,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.05",
            "unit": "ms",
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
        "date": 1787433303815,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1787519917671,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1787606306375,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1787692732481,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1787782510442,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1787890285441,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.05",
            "unit": "ms",
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
        "date": 1787978263521,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1788163791470,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.05",
            "unit": "ms",
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
        "date": 1788172653829,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.04",
            "unit": "ms",
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
        "date": 1788223171605,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.06",
            "unit": "ms",
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
          "id": "29b0f4bcf111efb590ee14768c624ecf1e81bbd7",
          "message": "Bump Docker image version to 0.18.1-20260901",
          "timestamp": "2026-09-01T07:37:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/29b0f4bcf111efb590ee14768c624ecf1e81bbd7"
        },
        "date": 1788299790371,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.05",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1788338141778,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
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
        "date": 1788388837633,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "4.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "4.03",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "thread_lat": [
      {
        "commit": {
          "author": {
            "name": "Xinyi Yu",
            "username": "Fischer0522",
            "email": "1809327837@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0167ca19f34b5ccf960b6e9e5296ed25c97fc04b",
          "message": "Implement `BLKSSZGET` ioctl",
          "timestamp": "2026-05-28T04:35:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/0167ca19f34b5ccf960b6e9e5296ed25c97fc04b"
        },
        "date": 1781474793633,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.47",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "5.09",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "f7ff85597d892ec7476489216672b0ad61b7090f",
          "message": "Fix `pidfd_open` accepting pid=0 instead of returning EINVAL",
          "timestamp": "2026-06-11T07:43:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/f7ff85597d892ec7476489216672b0ad61b7090f"
        },
        "date": 1781565240337,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.51",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "5.37",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e4f8507720924b42e04dfa40b8b10e2c0bf11941",
          "message": "Fix `memfd_create` returning wrong errno for too-long name",
          "timestamp": "2026-06-11T07:00:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4f8507720924b42e04dfa40b8b10e2c0bf11941"
        },
        "date": 1781651286002,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.42",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.91",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "co63oc",
            "username": "co63oc",
            "email": "4617245+co63oc@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "56bf21533b4278663e817b124f4dc9f4afcdc7d5",
          "message": "Update `birth_at` field type from `Duration` to `Option<Duration>`",
          "timestamp": "2026-06-29T06:18:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/56bf21533b4278663e817b124f4dc9f4afcdc7d5"
        },
        "date": 1782767779707,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "30.88",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.84",
            "unit": "ms",
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
        "date": 1783320357805,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.96",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.62",
            "unit": "ms",
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
        "date": 1783372875520,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.44",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.84",
            "unit": "ms",
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
        "date": 1783805197863,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.82",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.67",
            "unit": "ms",
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
        "date": 1783892167195,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.55",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.63",
            "unit": "ms",
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
        "date": 1783980479524,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.41",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.85",
            "unit": "ms",
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
        "date": 1784065029140,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.80",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.63",
            "unit": "ms",
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
        "date": 1784151131637,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.95",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.93",
            "unit": "ms",
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
        "date": 1784238258879,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.69",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.63",
            "unit": "ms",
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
        "date": 1784323989041,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.04",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.76",
            "unit": "ms",
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
        "date": 1784410390096,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.68",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.83",
            "unit": "ms",
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
        "date": 1784496420644,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.53",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.81",
            "unit": "ms",
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
        "date": 1784584361929,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "30.68",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.67",
            "unit": "ms",
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
        "date": 1784669892628,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.93",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.72",
            "unit": "ms",
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
        "date": 1784755979036,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.12",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.70",
            "unit": "ms",
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
        "date": 1784842896729,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.81",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.82",
            "unit": "ms",
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
        "date": 1784929328411,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.14",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.65",
            "unit": "ms",
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
        "date": 1785014933476,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.80",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.74",
            "unit": "ms",
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
        "date": 1785101071930,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.62",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.73",
            "unit": "ms",
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
        "date": 1785188769268,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.96",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.66",
            "unit": "ms",
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
        "date": 1785275336949,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.90",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.84",
            "unit": "ms",
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
        "date": 1785361114039,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.55",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.76",
            "unit": "ms",
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
        "date": 1785447388419,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.82",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.75",
            "unit": "ms",
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
        "date": 1785735271075,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.29",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.83",
            "unit": "ms",
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
        "date": 1785736603955,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "19.91",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.75",
            "unit": "ms",
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
        "date": 1785793148254,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.64",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.79",
            "unit": "ms",
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
        "date": 1785879414822,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.27",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "5.00",
            "unit": "ms",
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
        "date": 1785965838547,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.35",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.81",
            "unit": "ms",
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
        "date": 1786053428572,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.00",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.81",
            "unit": "ms",
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
        "date": 1786138212369,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.14",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.85",
            "unit": "ms",
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
        "date": 1786223870333,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.72",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.69",
            "unit": "ms",
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
        "date": 1786310528628,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.03",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.56",
            "unit": "ms",
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
        "date": 1786397169541,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.74",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.52",
            "unit": "ms",
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
        "date": 1786484360947,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.84",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.62",
            "unit": "ms",
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
        "date": 1786569994888,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.53",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.95",
            "unit": "ms",
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
        "date": 1786656441133,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.93",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.81",
            "unit": "ms",
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
        "date": 1786743539358,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "19.91",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.95",
            "unit": "ms",
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
        "date": 1786828848303,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.11",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.83",
            "unit": "ms",
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
        "date": 1786914926627,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.95",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.69",
            "unit": "ms",
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
        "date": 1787001689938,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.31",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.79",
            "unit": "ms",
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
        "date": 1787088103266,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.53",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.55",
            "unit": "ms",
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
        "date": 1787174367144,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.91",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.76",
            "unit": "ms",
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
        "date": 1787260746138,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.42",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.62",
            "unit": "ms",
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
        "date": 1787347282711,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.29",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.82",
            "unit": "ms",
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
        "date": 1787433303476,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.25",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.57",
            "unit": "ms",
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
        "date": 1787519917248,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.63",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.57",
            "unit": "ms",
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
        "date": 1787606306087,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.22",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.58",
            "unit": "ms",
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
        "date": 1787692732233,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.94",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.91",
            "unit": "ms",
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
        "date": 1787782510181,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.72",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.76",
            "unit": "ms",
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
        "date": 1787890285122,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "22.01",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.65",
            "unit": "ms",
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
        "date": 1787978263289,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.01",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.94",
            "unit": "ms",
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
        "date": 1788163790549,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "30.81",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.82",
            "unit": "ms",
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
        "date": 1788172653501,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.44",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.56",
            "unit": "ms",
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
        "date": 1788223171363,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.44",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.68",
            "unit": "ms",
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
          "id": "29b0f4bcf111efb590ee14768c624ecf1e81bbd7",
          "message": "Bump Docker image version to 0.18.1-20260901",
          "timestamp": "2026-09-01T07:37:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/29b0f4bcf111efb590ee14768c624ecf1e81bbd7"
        },
        "date": 1788299789951,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "21.37",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.63",
            "unit": "ms",
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
        "date": 1788338141422,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.74",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.92",
            "unit": "ms",
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
        "date": 1788388837304,
        "tool": "customSmallerIsBetter",
        "title": "[Threads] Threads performance",
        "description": "sysbench threads",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per Thread on Linux",
            "value": "20.98",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per Thread on Asterinas",
            "value": "4.71",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}