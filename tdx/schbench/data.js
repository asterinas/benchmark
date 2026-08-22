window.BENCHMARK_DATA = {
  "lastUpdate": 1787437751903,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "smp8_p99_wakeup_latency": [
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780870854604,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "108",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "125",
            "unit": "µs",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780959528275,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "107",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "156",
            "unit": "µs",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781045144789,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "107",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "128",
            "unit": "µs",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781132232095,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "138",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1034",
            "unit": "µs",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781220125844,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "130",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "181",
            "unit": "µs",
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
          "id": "5e0f46c2bf979aa764528b0767fd6893c65d3739",
          "message": "Increase LTP timeout multiplier for slow CI machines",
          "timestamp": "2026-06-11T09:31:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e0f46c2bf979aa764528b0767fd6893c65d3739"
        },
        "date": 1781305834194,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "138",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "135",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781390201074,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "144",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "127",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781476616645,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "137",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1058",
            "unit": "µs",
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
        "date": 1781567111846,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "119",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "154",
            "unit": "µs",
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
        "date": 1781653723912,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "117",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1058",
            "unit": "µs",
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
        "date": 1782767586202,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "92",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1102",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5b46e566dee52a836b0189082d88e0bb208b549e",
          "message": "Switch to a new Docker image 0.18.0-20260701",
          "timestamp": "2026-07-01T14:16:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b46e566dee52a836b0189082d88e0bb208b549e"
        },
        "date": 1782944310803,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "94",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "157",
            "unit": "µs",
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
          "id": "fd5d02d1b7730ad67df182eea7841c27d56c3df1",
          "message": "Support RENAME_NOREPLACE and RENAME_EXCHANGE for ramfs",
          "timestamp": "2026-07-02T10:50:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/fd5d02d1b7730ad67df182eea7841c27d56c3df1"
        },
        "date": 1783026523560,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "88",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "160",
            "unit": "µs",
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
        "date": 1783372497620,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "88",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1078",
            "unit": "µs",
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
        "date": 1783457177788,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "162",
            "unit": "µs",
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
        "date": 1783633838248,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "157",
            "unit": "µs",
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
        "date": 1783725026251,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "160",
            "unit": "µs",
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
        "date": 1783806369660,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "160",
            "unit": "µs",
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
        "date": 1783893019355,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "172",
            "unit": "µs",
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
        "date": 1783982332725,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "83",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "160",
            "unit": "µs",
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
        "date": 1784066186779,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "169",
            "unit": "µs",
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
        "date": 1784153411257,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "92",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "161",
            "unit": "µs",
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
        "date": 1784239434373,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1013",
            "unit": "µs",
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
        "date": 1784325784025,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "89",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "156",
            "unit": "µs",
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
        "date": 1784411617175,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "88",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1034",
            "unit": "µs",
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
        "date": 1784497722945,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1074",
            "unit": "µs",
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
        "date": 1784591668475,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "91",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "161",
            "unit": "µs",
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
        "date": 1784672213931,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "89",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "159",
            "unit": "µs",
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
        "date": 1784757351416,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "88",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1042",
            "unit": "µs",
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
        "date": 1784844440941,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "87",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1098",
            "unit": "µs",
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
        "date": 1784930416994,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "91",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "161",
            "unit": "µs",
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
        "date": 1785016339376,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "92",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "158",
            "unit": "µs",
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
        "date": 1785102789129,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "88",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1034",
            "unit": "µs",
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
        "date": 1785190927015,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "91",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "157",
            "unit": "µs",
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
        "date": 1785279731883,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "164",
            "unit": "µs",
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
        "date": 1785362750943,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "88",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1013",
            "unit": "µs",
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
        "date": 1785449340854,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "91",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1066",
            "unit": "µs",
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
        "date": 1785739445600,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "95",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "161",
            "unit": "µs",
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
        "date": 1785740000447,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "87",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "152",
            "unit": "µs",
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
        "date": 1785740512176,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "87",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1003",
            "unit": "µs",
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
        "date": 1785795560212,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "89",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "156",
            "unit": "µs",
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
        "date": 1785881608176,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "89",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "158",
            "unit": "µs",
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
        "date": 1785970792168,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "89",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "163",
            "unit": "µs",
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
        "date": 1786058929981,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "89",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "157",
            "unit": "µs",
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
        "date": 1786139760016,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "91",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1106",
            "unit": "µs",
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
        "date": 1786225339926,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "87",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "8624",
            "unit": "µs",
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
        "date": 1786311489167,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "164",
            "unit": "µs",
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
        "date": 1786398382270,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "88",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "161",
            "unit": "µs",
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
        "date": 1786485347702,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "158",
            "unit": "µs",
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
        "date": 1786571308708,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "92",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1074",
            "unit": "µs",
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
        "date": 1786657549901,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "158",
            "unit": "µs",
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
        "date": 1786744509540,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "92",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1074",
            "unit": "µs",
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
        "date": 1786830126426,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "84",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1070",
            "unit": "µs",
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
        "date": 1786916521152,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "89",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "150",
            "unit": "µs",
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
        "date": 1787002091732,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1070",
            "unit": "µs",
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
        "date": 1787090409783,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "158",
            "unit": "µs",
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
        "date": 1787175472235,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "79",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1106",
            "unit": "µs",
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
        "date": 1787262381393,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "89",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1078",
            "unit": "µs",
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
        "date": 1787351547018,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "90",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1074",
            "unit": "µs",
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
        "date": 1787437751900,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "91",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "160",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "smp8_p99_request_latency": [
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780787858780,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4136",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "144640",
            "unit": "µs",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780870854774,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3820",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "155392",
            "unit": "µs",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780959528431,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4312",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "153856",
            "unit": "µs",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781045144989,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4084",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "148736",
            "unit": "µs",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781132232732,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "5032",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "138496",
            "unit": "µs",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781220126033,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4920",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "164608",
            "unit": "µs",
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
          "id": "5e0f46c2bf979aa764528b0767fd6893c65d3739",
          "message": "Increase LTP timeout multiplier for slow CI machines",
          "timestamp": "2026-06-11T09:31:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e0f46c2bf979aa764528b0767fd6893c65d3739"
        },
        "date": 1781305834479,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "5288",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "161024",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781390201401,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4296",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "158464",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781476617211,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4792",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "172288",
            "unit": "µs",
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
        "date": 1781567112027,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3948",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "149760",
            "unit": "µs",
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
        "date": 1781653724871,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4360",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "165632",
            "unit": "µs",
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
        "date": 1782767586527,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53312",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5b46e566dee52a836b0189082d88e0bb208b549e",
          "message": "Switch to a new Docker image 0.18.0-20260701",
          "timestamp": "2026-07-01T14:16:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b46e566dee52a836b0189082d88e0bb208b549e"
        },
        "date": 1782944311043,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "49088",
            "unit": "µs",
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
          "id": "fd5d02d1b7730ad67df182eea7841c27d56c3df1",
          "message": "Support RENAME_NOREPLACE and RENAME_EXCHANGE for ramfs",
          "timestamp": "2026-07-02T10:50:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/fd5d02d1b7730ad67df182eea7841c27d56c3df1"
        },
        "date": 1783026524018,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "54848",
            "unit": "µs",
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
        "date": 1783372498433,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53056",
            "unit": "µs",
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
        "date": 1783457178086,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52160",
            "unit": "µs",
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
        "date": 1783633838647,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "51648",
            "unit": "µs",
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
        "date": 1783725026584,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "51392",
            "unit": "µs",
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
        "date": 1783806370029,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52800",
            "unit": "µs",
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
        "date": 1783893019518,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52544",
            "unit": "µs",
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
        "date": 1783982333053,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2444",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "50752",
            "unit": "µs",
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
        "date": 1784066187008,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "56128",
            "unit": "µs",
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
        "date": 1784153411428,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "50752",
            "unit": "µs",
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
        "date": 1784239435234,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52800",
            "unit": "µs",
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
        "date": 1784325784321,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52928",
            "unit": "µs",
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
        "date": 1784411617487,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52928",
            "unit": "µs",
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
        "date": 1784497723275,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52672",
            "unit": "µs",
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
        "date": 1784591668667,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "54592",
            "unit": "µs",
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
        "date": 1784672214218,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53056",
            "unit": "µs",
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
        "date": 1784757352470,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53184",
            "unit": "µs",
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
        "date": 1784844441124,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "55104",
            "unit": "µs",
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
        "date": 1784930417210,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52800",
            "unit": "µs",
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
        "date": 1785016339652,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "50240",
            "unit": "µs",
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
        "date": 1785102789444,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "48704",
            "unit": "µs",
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
        "date": 1785190927221,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "56512",
            "unit": "µs",
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
        "date": 1785279732278,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "54208",
            "unit": "µs",
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
        "date": 1785362751619,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2444",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53312",
            "unit": "µs",
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
        "date": 1785449341205,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53056",
            "unit": "µs",
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
        "date": 1785739445871,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2580",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53568",
            "unit": "µs",
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
        "date": 1785740000663,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2484",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52928",
            "unit": "µs",
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
        "date": 1785740513151,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2444",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53184",
            "unit": "µs",
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
        "date": 1785795560448,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "54720",
            "unit": "µs",
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
        "date": 1785881608430,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52928",
            "unit": "µs",
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
        "date": 1785970792485,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53568",
            "unit": "µs",
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
        "date": 1786058930196,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52800",
            "unit": "µs",
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
        "date": 1786139760837,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2476",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "51008",
            "unit": "µs",
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
        "date": 1786225340830,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "60096",
            "unit": "µs",
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
        "date": 1786311489390,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52800",
            "unit": "µs",
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
        "date": 1786398382622,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "48704",
            "unit": "µs",
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
        "date": 1786485348021,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2476",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53440",
            "unit": "µs",
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
        "date": 1786571309444,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53568",
            "unit": "µs",
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
        "date": 1786657550345,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53056",
            "unit": "µs",
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
        "date": 1786744510593,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "52544",
            "unit": "µs",
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
        "date": 1786830127660,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "54080",
            "unit": "µs",
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
        "date": 1786916521350,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "51904",
            "unit": "µs",
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
        "date": 1787002092759,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "50496",
            "unit": "µs",
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
        "date": 1787090410045,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "51648",
            "unit": "µs",
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
        "date": 1787175472919,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2436",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53696",
            "unit": "µs",
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
        "date": 1787262381691,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "55104",
            "unit": "µs",
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
        "date": 1787351547318,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "53312",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "smp8_p50_rps": [
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780787859020,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780870854963,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780959528572,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781045145206,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781132232889,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781220126218,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "5e0f46c2bf979aa764528b0767fd6893c65d3739",
          "message": "Increase LTP timeout multiplier for slow CI machines",
          "timestamp": "2026-06-11T09:31:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e0f46c2bf979aa764528b0767fd6893c65d3739"
        },
        "date": 1781305834764,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781390201796,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781476617396,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1781567112191,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1781653725177,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1782767586838,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5b46e566dee52a836b0189082d88e0bb208b549e",
          "message": "Switch to a new Docker image 0.18.0-20260701",
          "timestamp": "2026-07-01T14:16:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b46e566dee52a836b0189082d88e0bb208b549e"
        },
        "date": 1782944311268,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "fd5d02d1b7730ad67df182eea7841c27d56c3df1",
          "message": "Support RENAME_NOREPLACE and RENAME_EXCHANGE for ramfs",
          "timestamp": "2026-07-02T10:50:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/fd5d02d1b7730ad67df182eea7841c27d56c3df1"
        },
        "date": 1783026524424,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783372498652,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783457178347,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783633839031,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783725026891,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783806370389,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783893019672,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783982333368,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784066187236,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784153411608,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784239435594,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784325784601,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784411617789,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784497723592,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784591668854,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784672214487,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784757352789,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784844441305,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784930417404,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785016339895,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785102789841,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785190927411,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785279732589,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785362751776,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785449341520,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785739446161,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785740000864,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785740513522,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785795560634,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785881608616,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785970792780,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786058930411,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786139761027,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786225341135,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786311489574,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786398382956,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786485348267,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786571309600,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786657550689,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786744510878,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786830127960,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786916521578,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787002093059,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787090410355,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787175473105,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787262382018,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787351547615,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "smp1_p99_wakeup_latency": [
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "356dd6e71bc6f980f7ebb883728f2e912553bb12",
          "message": "Refine store and push benchmark results processes",
          "timestamp": "2026-05-28T08:41:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/356dd6e71bc6f980f7ebb883728f2e912553bb12"
        },
        "date": 1780699653298,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "2",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "3",
            "unit": "µs",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780787859254,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "3",
            "unit": "µs",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780870855144,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "3",
            "unit": "µs",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780959528721,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "4",
            "unit": "µs",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781045145405,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "2",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "4",
            "unit": "µs",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781132233055,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "2",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "4",
            "unit": "µs",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781220126426,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "4",
            "unit": "µs",
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
          "id": "5e0f46c2bf979aa764528b0767fd6893c65d3739",
          "message": "Increase LTP timeout multiplier for slow CI machines",
          "timestamp": "2026-06-11T09:31:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e0f46c2bf979aa764528b0767fd6893c65d3739"
        },
        "date": 1781305835056,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "4",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781390202159,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "2",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "4",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781476617538,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "4",
            "unit": "µs",
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
        "date": 1781567112352,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "4",
            "unit": "µs",
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
        "date": 1781653725490,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "3",
            "unit": "µs",
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
        "date": 1782151224081,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1782767587172,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5b46e566dee52a836b0189082d88e0bb208b549e",
          "message": "Switch to a new Docker image 0.18.0-20260701",
          "timestamp": "2026-07-01T14:16:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b46e566dee52a836b0189082d88e0bb208b549e"
        },
        "date": 1782944311502,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
          "id": "fd5d02d1b7730ad67df182eea7841c27d56c3df1",
          "message": "Support RENAME_NOREPLACE and RENAME_EXCHANGE for ramfs",
          "timestamp": "2026-07-02T10:50:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/fd5d02d1b7730ad67df182eea7841c27d56c3df1"
        },
        "date": 1783026524782,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1783372498890,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1783633839337,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1783725027203,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1783806370739,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1783893019860,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1783982333721,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784066187458,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784153411785,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784239436011,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "2",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784325784889,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784411618080,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784497723883,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784591669031,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784672214771,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784757353117,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784844441459,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1784930417608,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785102790247,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785190927636,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785279732921,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785362751928,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785449341830,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785739446391,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785740001052,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785740513833,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785795560853,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785881608817,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1785970793075,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786058930588,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786139761238,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786225341439,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786311489804,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786398383304,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786485348516,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786571309841,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786657551074,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786744511143,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786830128242,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1786916521756,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1787002093369,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1787090410689,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1787175473260,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1787262382306,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
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
        "date": 1787351547932,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "1",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "2",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "smp1_p99_request_latency": [
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "356dd6e71bc6f980f7ebb883728f2e912553bb12",
          "message": "Refine store and push benchmark results processes",
          "timestamp": "2026-05-28T08:41:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/356dd6e71bc6f980f7ebb883728f2e912553bb12"
        },
        "date": 1780699654120,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2708",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5224",
            "unit": "µs",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780787859466,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2660",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5224",
            "unit": "µs",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780870855328,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2372",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "7368",
            "unit": "µs",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780959529362,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "9008",
            "unit": "µs",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781045146000,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2876",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "8976",
            "unit": "µs",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781132233240,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2708",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "9968",
            "unit": "µs",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781220126620,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "8976",
            "unit": "µs",
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
          "id": "5e0f46c2bf979aa764528b0767fd6893c65d3739",
          "message": "Increase LTP timeout multiplier for slow CI machines",
          "timestamp": "2026-06-11T09:31:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e0f46c2bf979aa764528b0767fd6893c65d3739"
        },
        "date": 1781305835352,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2716",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "10000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781390203041,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2708",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "8944",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781476617694,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "8976",
            "unit": "µs",
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
        "date": 1781567112497,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "9968",
            "unit": "µs",
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
        "date": 1781653725781,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2660",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5992",
            "unit": "µs",
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
        "date": 1782151224479,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3092",
            "unit": "µs",
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
        "date": 1782767587482,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5b46e566dee52a836b0189082d88e0bb208b549e",
          "message": "Switch to a new Docker image 0.18.0-20260701",
          "timestamp": "2026-07-01T14:16:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b46e566dee52a836b0189082d88e0bb208b549e"
        },
        "date": 1782944311771,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3028",
            "unit": "µs",
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
          "id": "fd5d02d1b7730ad67df182eea7841c27d56c3df1",
          "message": "Support RENAME_NOREPLACE and RENAME_EXCHANGE for ramfs",
          "timestamp": "2026-07-02T10:50:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/fd5d02d1b7730ad67df182eea7841c27d56c3df1"
        },
        "date": 1783026525132,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1783372499105,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3076",
            "unit": "µs",
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
        "date": 1783633839650,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1783725027561,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1783806371070,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2388",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3036",
            "unit": "µs",
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
        "date": 1783893020010,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2404",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1783982334137,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3028",
            "unit": "µs",
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
        "date": 1784066187681,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3028",
            "unit": "µs",
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
        "date": 1784153411947,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1784239436912,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4200",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3028",
            "unit": "µs",
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
        "date": 1784325785167,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2372",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1784411618369,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3036",
            "unit": "µs",
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
        "date": 1784497724188,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3036",
            "unit": "µs",
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
        "date": 1784591669228,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1784672215025,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3028",
            "unit": "µs",
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
        "date": 1784757353405,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3036",
            "unit": "µs",
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
        "date": 1784844441628,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2372",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3036",
            "unit": "µs",
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
        "date": 1784930417806,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1785102790604,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1785190927819,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1785279733255,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1785362752085,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1785449342118,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2404",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1785739446608,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3044",
            "unit": "µs",
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
        "date": 1785740001246,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1785740514171,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2372",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3036",
            "unit": "µs",
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
        "date": 1785795561060,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2556",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1785881609003,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2380",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1785970793387,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1786058930811,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2380",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1786139761443,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2340",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1786225341737,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3068",
            "unit": "µs",
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
        "date": 1786311489994,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2380",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1786398383626,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2364",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3044",
            "unit": "µs",
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
        "date": 1786485348787,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3028",
            "unit": "µs",
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
        "date": 1786571310096,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1786657551420,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1786744511428,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1786830128451,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1786916522039,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2340",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3012",
            "unit": "µs",
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
        "date": 1787002093690,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2340",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
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
        "date": 1787090410991,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2356",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3028",
            "unit": "µs",
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
        "date": 1787175473445,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "4856",
            "unit": "µs",
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
        "date": 1787262382597,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2372",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3028",
            "unit": "µs",
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
        "date": 1787351548230,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2484",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "3020",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "smp1_p50_rps": [
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "356dd6e71bc6f980f7ebb883728f2e912553bb12",
          "message": "Refine store and push benchmark results processes",
          "timestamp": "2026-05-28T08:41:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/356dd6e71bc6f980f7ebb883728f2e912553bb12"
        },
        "date": 1780699654400,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780787859712,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780870855858,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780959529517,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781045146172,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781132233416,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781220126806,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "5e0f46c2bf979aa764528b0767fd6893c65d3739",
          "message": "Increase LTP timeout multiplier for slow CI machines",
          "timestamp": "2026-06-11T09:31:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e0f46c2bf979aa764528b0767fd6893c65d3739"
        },
        "date": 1781305835672,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781390203372,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      },
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
        "date": 1781476617848,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1781567112643,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1781653726094,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1782151224838,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1782767587763,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5b46e566dee52a836b0189082d88e0bb208b549e",
          "message": "Switch to a new Docker image 0.18.0-20260701",
          "timestamp": "2026-07-01T14:16:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b46e566dee52a836b0189082d88e0bb208b549e"
        },
        "date": 1782944311986,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
          "id": "fd5d02d1b7730ad67df182eea7841c27d56c3df1",
          "message": "Support RENAME_NOREPLACE and RENAME_EXCHANGE for ramfs",
          "timestamp": "2026-07-02T10:50:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/fd5d02d1b7730ad67df182eea7841c27d56c3df1"
        },
        "date": 1783026525499,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783372499319,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783633839959,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783725027885,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783806371453,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783893020187,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1783982334486,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784066187922,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784153412103,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784239437879,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784325785416,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784411618656,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784497724504,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784591669426,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784672215274,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784757353687,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784844441780,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1784930418020,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785102790960,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785190928010,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785279733576,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785362752242,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785449342420,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785739446836,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785740001426,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785740514486,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785795561262,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785881609197,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1785970793708,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786058931017,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786139761631,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786225342045,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786311490173,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786398383954,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786485349088,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786571310297,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786657551755,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786744511731,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786830128658,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1786916522287,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787002093921,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787090411286,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787175474145,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787262382889,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
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
        "date": 1787351548487,
        "tool": "customBiggerIsBetter",
        "title": "[Scheduler] P50 RPS while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P50 RPS of schbench on Linux",
            "value": "0",
            "unit": "requests per second",
            "extra": "linux_result"
          },
          {
            "name": "P50 RPS of schbench on Asterinas",
            "value": "0",
            "unit": "requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}