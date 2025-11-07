window.BENCHMARK_DATA = {
  "lastUpdate": 1762485921147,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_seq_write_bw": [
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756255832710,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2072",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1284",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756339482009,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2019",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1151",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756425930848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1007",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1401",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757129378470,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "996",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1317",
            "unit": "MB/s",
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
          "id": "d4d84f18b7288f7251c779aad5749de9ffbe368f",
          "message": "Remove the outdated Github issue template for RFC",
          "timestamp": "2025-09-05T09:37:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4d84f18b7288f7251c779aad5749de9ffbe368f"
        },
        "date": 1757159394596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1032",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1248",
            "unit": "MB/s",
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
          "id": "d4d84f18b7288f7251c779aad5749de9ffbe368f",
          "message": "Remove the outdated Github issue template for RFC",
          "timestamp": "2025-09-05T09:37:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4d84f18b7288f7251c779aad5749de9ffbe368f"
        },
        "date": 1757282218061,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1730",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1350",
            "unit": "MB/s",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757375127423,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1270",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1223",
            "unit": "MB/s",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757463234860,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "928",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1181",
            "unit": "MB/s",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757547770827,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1159",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1364",
            "unit": "MB/s",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757719100986,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1071",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1376",
            "unit": "MB/s",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757806418511,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1003",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1112",
            "unit": "MB/s",
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
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757896372125,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1819",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1218",
            "unit": "MB/s",
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
          "id": "d73890c6b94b2ff9e1c5216fd7b9191c5c76688e",
          "message": "Keep the list of NON_OSDK_CRATES sorted in Makefile",
          "timestamp": "2025-09-13T07:10:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d73890c6b94b2ff9e1c5216fd7b9191c5c76688e"
        },
        "date": 1758148360224,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1793",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1209",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "70b26f824d8beddcfd559fe3cac26ecc5caa6c88",
          "message": "Support `RUSAGE_CHILDREN` option for `getrusage`",
          "timestamp": "2025-09-18T08:28:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/70b26f824d8beddcfd559fe3cac26ecc5caa6c88"
        },
        "date": 1758233674814,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1054",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1279",
            "unit": "MB/s",
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
          "id": "4b87dab86e8c9940f7713369edcbe74cc9d9bad9",
          "message": "Unify CPU arch-specific logic that determines if the kernel is interrupted",
          "timestamp": "2025-09-17T14:38:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b87dab86e8c9940f7713369edcbe74cc9d9bad9"
        },
        "date": 1758320075956,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1156",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1240",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758671002495,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1227",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1405",
            "unit": "MB/s",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758759461848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1850",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1259",
            "unit": "MB/s",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758846502903,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1271",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1226",
            "unit": "MB/s",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758930526411,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "589",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1375",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759015115485,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1037",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "962",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759107078652,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "648",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1389",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759188037596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1181",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1383",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759280564885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1004",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1159",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759366345446,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1268",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1209",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759450514024,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "906",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1214",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759539078722,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "949",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1171",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759626151533,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "902",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "974",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759706784397,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1996",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1042",
            "unit": "MB/s",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759799431656,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "968",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1361",
            "unit": "MB/s",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759887264635,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1077",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1331",
            "unit": "MB/s",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759966297160,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1220",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1138",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760052840253,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1127",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1052",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760139354933,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1188",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1202",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760231869381,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "839",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1013",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760318487095,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1005",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1010",
            "unit": "MB/s",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760404462718,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1173",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1114",
            "unit": "MB/s",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760485397467,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1734",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1279",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760578299729,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1929",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1179",
            "unit": "MB/s",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760660895672,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1038",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1202",
            "unit": "MB/s",
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
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760753476196,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "971",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1314",
            "unit": "MB/s",
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
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760831101411,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1162",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1176",
            "unit": "MB/s",
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
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760924031036,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1109",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1097",
            "unit": "MB/s",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761010489192,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1214",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1141",
            "unit": "MB/s",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761095432725,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1760",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1200",
            "unit": "MB/s",
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
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761185791194,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1186",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1128",
            "unit": "MB/s",
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
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761270037029,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "644",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1353",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761358518208,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1186",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1166",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761436294936,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1821",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1287",
            "unit": "MB/s",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761522885559,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1065",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1180",
            "unit": "MB/s",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761609040034,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1159",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1419",
            "unit": "MB/s",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "43fc98dc77e4171035bb7e35c6100d577660acc1",
          "message": "Migrate virtio-input to input subsystem API",
          "timestamp": "2025-08-22T09:02:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/43fc98dc77e4171035bb7e35c6100d577660acc1"
        },
        "date": 1761695723097,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "931",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1220",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "39a541fdeba53dd90cc85d13dcdd3fee916bb53a",
          "message": "Add RISC-V FPU support",
          "timestamp": "2025-08-07T20:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/39a541fdeba53dd90cc85d13dcdd3fee916bb53a"
        },
        "date": 1761782697040,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "849",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1236",
            "unit": "MB/s",
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
          "id": "9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0",
          "message": "Mark `sync_dma_range` as `unsafe`",
          "timestamp": "2025-10-30T05:12:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0"
        },
        "date": 1761869151781,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "799",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1209",
            "unit": "MB/s",
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
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1761955494629,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1457",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1067",
            "unit": "MB/s",
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
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1762042067742,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1082",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1209",
            "unit": "MB/s",
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
          "id": "b447a605ed8566bbdca39a490881cd49e2cccaf6",
          "message": "Introduce PerMountFlags and support MS_REMOUNT",
          "timestamp": "2025-10-31T08:42:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/b447a605ed8566bbdca39a490881cd49e2cccaf6"
        },
        "date": 1762129847129,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "788",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1173",
            "unit": "MB/s",
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
          "id": "9b0b445e4a1a7d43f0542b95fa85b3d8554785d2",
          "message": "Enable some mount givsor tests",
          "timestamp": "2025-11-03T06:13:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/9b0b445e4a1a7d43f0542b95fa85b3d8554785d2"
        },
        "date": 1762219534269,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1741",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1267",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ff021e0b89811c92069950a5a96ef41f9860de0b",
          "message": "Make `memfd` a sub module of `ramfs`",
          "timestamp": "2025-11-03T06:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/ff021e0b89811c92069950a5a96ef41f9860de0b"
        },
        "date": 1762305264813,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "919",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1175",
            "unit": "MB/s",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762423265906,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "924",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1296",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "e336882eee9d556480caafa267d097b7116c02c2",
          "message": "Do not drop `Arc<dyn FileLike>` in an incorrect context",
          "timestamp": "2025-11-06T11:31:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/e336882eee9d556480caafa267d097b7116c02c2"
        },
        "date": 1762485758151,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "947",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1245",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_read_bw": [
      {
        "commit": {
          "author": {
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756339584691,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1247",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1336",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756426036563,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1526",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1102",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757127737853,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1517",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1291",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "4b26eb05aa14f66d40b7c75cd4063aba3f310c13",
          "message": "Configure kernel stack size for release build based on architecture",
          "timestamp": "2025-08-28T14:58:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b26eb05aa14f66d40b7c75cd4063aba3f310c13"
        },
        "date": 1757129431497,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1416",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1346",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f4b05597cdca58695458d38507172b2e3fc2aa76",
          "message": "Init vDSO singleton in the first kthread",
          "timestamp": "2025-08-30T20:00:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4b05597cdca58695458d38507172b2e3fc2aa76"
        },
        "date": 1757130927790,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1422",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1292",
            "unit": "MB/s",
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
          "id": "d4d84f18b7288f7251c779aad5749de9ffbe368f",
          "message": "Remove the outdated Github issue template for RFC",
          "timestamp": "2025-09-05T09:37:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4d84f18b7288f7251c779aad5749de9ffbe368f"
        },
        "date": 1757159501175,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1542",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1288",
            "unit": "MB/s",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757375235964,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1513",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1200",
            "unit": "MB/s",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757463342959,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1345",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1321",
            "unit": "MB/s",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757547880561,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1583",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1297",
            "unit": "MB/s",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757719155669,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2090",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1268",
            "unit": "MB/s",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757806473983,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1444",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1220",
            "unit": "MB/s",
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
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757896484056,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1901",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1356",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "46aa437c8738e72a47510e764cb2b6eed8032706",
          "message": "Add `/proc/pid/oom_score_adj`",
          "timestamp": "2025-09-13T06:37:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/46aa437c8738e72a47510e764cb2b6eed8032706"
        },
        "date": 1758061548054,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2089",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1270",
            "unit": "MB/s",
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
          "id": "d73890c6b94b2ff9e1c5216fd7b9191c5c76688e",
          "message": "Keep the list of NON_OSDK_CRATES sorted in Makefile",
          "timestamp": "2025-09-13T07:10:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d73890c6b94b2ff9e1c5216fd7b9191c5c76688e"
        },
        "date": 1758148416834,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1033",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1319",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "70b26f824d8beddcfd559fe3cac26ecc5caa6c88",
          "message": "Support `RUSAGE_CHILDREN` option for `getrusage`",
          "timestamp": "2025-09-18T08:28:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/70b26f824d8beddcfd559fe3cac26ecc5caa6c88"
        },
        "date": 1758233731349,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2260",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1147",
            "unit": "MB/s",
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
          "id": "4b87dab86e8c9940f7713369edcbe74cc9d9bad9",
          "message": "Unify CPU arch-specific logic that determines if the kernel is interrupted",
          "timestamp": "2025-09-17T14:38:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b87dab86e8c9940f7713369edcbe74cc9d9bad9"
        },
        "date": 1758320132094,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1935",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1299",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758671121151,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2189",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1368",
            "unit": "MB/s",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758759577421,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2307",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1421",
            "unit": "MB/s",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758846621596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2219",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1414",
            "unit": "MB/s",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758930645143,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2222",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1417",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759015234559,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2031",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1267",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759107199448,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2160",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1414",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759188158788,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1406",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1325",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759280689002,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1208",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1339",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759366469937,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1416",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1323",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759450701610,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1992",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1405",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759539205800,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1794",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1376",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759626281285,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1938",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1403",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759706912232,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1515",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1309",
            "unit": "MB/s",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759799564105,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1939",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1343",
            "unit": "MB/s",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759887396897,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1963",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1347",
            "unit": "MB/s",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759966431044,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1549",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1244",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760052974411,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1784",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1378",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760139489530,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2177",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1370",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760232007284,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2010",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1275",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760318626621,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1795",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1394",
            "unit": "MB/s",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760404605253,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2046",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1293",
            "unit": "MB/s",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760485539409,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1473",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1273",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760578446880,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2207",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1233",
            "unit": "MB/s",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760661039784,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2233",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1318",
            "unit": "MB/s",
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
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760753623855,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2234",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1268",
            "unit": "MB/s",
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
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760831248752,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1914",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1338",
            "unit": "MB/s",
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
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760924182660,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1864",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1331",
            "unit": "MB/s",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761010637817,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2196",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1340",
            "unit": "MB/s",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761095582939,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2005",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1280",
            "unit": "MB/s",
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
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761185974373,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2133",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1227",
            "unit": "MB/s",
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
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761270191341,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2210",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1415",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761358705349,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2050",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1257",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761436450157,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1989",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1224",
            "unit": "MB/s",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761523043580,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2046",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1392",
            "unit": "MB/s",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761609197170,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1431",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1271",
            "unit": "MB/s",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "43fc98dc77e4171035bb7e35c6100d577660acc1",
          "message": "Migrate virtio-input to input subsystem API",
          "timestamp": "2025-08-22T09:02:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/43fc98dc77e4171035bb7e35c6100d577660acc1"
        },
        "date": 1761695882735,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2168",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1224",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "39a541fdeba53dd90cc85d13dcdd3fee916bb53a",
          "message": "Add RISC-V FPU support",
          "timestamp": "2025-08-07T20:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/39a541fdeba53dd90cc85d13dcdd3fee916bb53a"
        },
        "date": 1761782856749,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1878",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1165",
            "unit": "MB/s",
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
          "id": "9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0",
          "message": "Mark `sync_dma_range` as `unsafe`",
          "timestamp": "2025-10-30T05:12:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0"
        },
        "date": 1761869311745,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1018",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1092",
            "unit": "MB/s",
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
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1761955653794,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1657",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1165",
            "unit": "MB/s",
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
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1762042226875,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2246",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1211",
            "unit": "MB/s",
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
          "id": "b447a605ed8566bbdca39a490881cd49e2cccaf6",
          "message": "Introduce PerMountFlags and support MS_REMOUNT",
          "timestamp": "2025-10-31T08:42:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/b447a605ed8566bbdca39a490881cd49e2cccaf6"
        },
        "date": 1762130042308,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1681",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1072",
            "unit": "MB/s",
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
          "id": "9b0b445e4a1a7d43f0542b95fa85b3d8554785d2",
          "message": "Enable some mount givsor tests",
          "timestamp": "2025-11-03T06:13:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/9b0b445e4a1a7d43f0542b95fa85b3d8554785d2"
        },
        "date": 1762219695883,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1738",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1282",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ff021e0b89811c92069950a5a96ef41f9860de0b",
          "message": "Make `memfd` a sub module of `ramfs`",
          "timestamp": "2025-11-03T06:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/ff021e0b89811c92069950a5a96ef41f9860de0b"
        },
        "date": 1762305433552,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1764",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1180",
            "unit": "MB/s",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762423429450,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1502",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1287",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_write_bw_no_iommu": [
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755995958881,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1519",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1350",
            "unit": "MB/s",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756083837241,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "786",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1507",
            "unit": "MB/s",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756166579191,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1018",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1553",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756255780381,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1024",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1514",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756339430254,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1019",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1269",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756425878043,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1171",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1253",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f4b05597cdca58695458d38507172b2e3fc2aa76",
          "message": "Init vDSO singleton in the first kthread",
          "timestamp": "2025-08-30T20:00:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/f4b05597cdca58695458d38507172b2e3fc2aa76"
        },
        "date": 1757130874764,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2033",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1422",
            "unit": "MB/s",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757463180705,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "755",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1297",
            "unit": "MB/s",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757547716468,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "657",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1350",
            "unit": "MB/s",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757719046671,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1015",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1314",
            "unit": "MB/s",
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
          "id": "c2a224e7571e32a8fb294019910f0bbbe561cfb9",
          "message": "Fix the bug in is_mount_root method",
          "timestamp": "2025-09-09T08:24:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2a224e7571e32a8fb294019910f0bbbe561cfb9"
        },
        "date": 1757806363301,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1689",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1318",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "46aa437c8738e72a47510e764cb2b6eed8032706",
          "message": "Add `/proc/pid/oom_score_adj`",
          "timestamp": "2025-09-13T06:37:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/46aa437c8738e72a47510e764cb2b6eed8032706"
        },
        "date": 1758061435962,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "860",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1486",
            "unit": "MB/s",
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
          "id": "d73890c6b94b2ff9e1c5216fd7b9191c5c76688e",
          "message": "Keep the list of NON_OSDK_CRATES sorted in Makefile",
          "timestamp": "2025-09-13T07:10:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d73890c6b94b2ff9e1c5216fd7b9191c5c76688e"
        },
        "date": 1758148294974,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "916",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1283",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "70b26f824d8beddcfd559fe3cac26ecc5caa6c88",
          "message": "Support `RUSAGE_CHILDREN` option for `getrusage`",
          "timestamp": "2025-09-18T08:28:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/70b26f824d8beddcfd559fe3cac26ecc5caa6c88"
        },
        "date": 1758233618904,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1737",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1451",
            "unit": "MB/s",
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
          "id": "4b87dab86e8c9940f7713369edcbe74cc9d9bad9",
          "message": "Unify CPU arch-specific logic that determines if the kernel is interrupted",
          "timestamp": "2025-09-17T14:38:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/4b87dab86e8c9940f7713369edcbe74cc9d9bad9"
        },
        "date": 1758320019277,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "967",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1334",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758670944322,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1052",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1354",
            "unit": "MB/s",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758759404049,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1167",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1529",
            "unit": "MB/s",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758846423791,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "936",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1496",
            "unit": "MB/s",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758930467037,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "950",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1510",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759015056131,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1187",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1292",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759107018449,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "964",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1511",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759187976976,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "927",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1353",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759280502879,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1043",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1299",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759366282949,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1716",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1517",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759450451726,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1975",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1340",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759539015597,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1167",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1441",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759626086979,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1229",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1250",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759706721595,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "904",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1530",
            "unit": "MB/s",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759799365208,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1950",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1251",
            "unit": "MB/s",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759887197878,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1040",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1405",
            "unit": "MB/s",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759966229736,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "892",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1548",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760052773198,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1233",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1317",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760139287883,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "845",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1456",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760231800443,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1173",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1307",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760318417176,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "982",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1288",
            "unit": "MB/s",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760404390941,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "956",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1466",
            "unit": "MB/s",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760485326108,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1848",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1452",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760578226591,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1617",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1482",
            "unit": "MB/s",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760660824140,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1572",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1548",
            "unit": "MB/s",
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
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760753402320,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1157",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1240",
            "unit": "MB/s",
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
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760831027917,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1105",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1388",
            "unit": "MB/s",
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
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760923955426,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1772",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1355",
            "unit": "MB/s",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761010414855,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1592",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1414",
            "unit": "MB/s",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761095357805,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1646",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1483",
            "unit": "MB/s",
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
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761185699141,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "851",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1541",
            "unit": "MB/s",
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
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761269959752,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1029",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1461",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761358425166,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "972",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1495",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761436217477,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1184",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1536",
            "unit": "MB/s",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761522806009,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1033",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1205",
            "unit": "MB/s",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761608960620,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1073",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1306",
            "unit": "MB/s",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "43fc98dc77e4171035bb7e35c6100d577660acc1",
          "message": "Migrate virtio-input to input subsystem API",
          "timestamp": "2025-08-22T09:02:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/43fc98dc77e4171035bb7e35c6100d577660acc1"
        },
        "date": 1761695643260,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1493",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1403",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "39a541fdeba53dd90cc85d13dcdd3fee916bb53a",
          "message": "Add RISC-V FPU support",
          "timestamp": "2025-08-07T20:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/39a541fdeba53dd90cc85d13dcdd3fee916bb53a"
        },
        "date": 1761782617337,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1664",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1344",
            "unit": "MB/s",
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
          "id": "9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0",
          "message": "Mark `sync_dma_range` as `unsafe`",
          "timestamp": "2025-10-30T05:12:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0"
        },
        "date": 1761869071530,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1620",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1320",
            "unit": "MB/s",
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
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1761955414687,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "760",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1280",
            "unit": "MB/s",
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
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1762041988091,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1359",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1229",
            "unit": "MB/s",
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
          "id": "b447a605ed8566bbdca39a490881cd49e2cccaf6",
          "message": "Introduce PerMountFlags and support MS_REMOUNT",
          "timestamp": "2025-10-31T08:42:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/b447a605ed8566bbdca39a490881cd49e2cccaf6"
        },
        "date": 1762129749617,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "894",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1389",
            "unit": "MB/s",
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
          "id": "9b0b445e4a1a7d43f0542b95fa85b3d8554785d2",
          "message": "Enable some mount givsor tests",
          "timestamp": "2025-11-03T06:13:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/9b0b445e4a1a7d43f0542b95fa85b3d8554785d2"
        },
        "date": 1762219453562,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1022",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1304",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ff021e0b89811c92069950a5a96ef41f9860de0b",
          "message": "Make `memfd` a sub module of `ramfs`",
          "timestamp": "2025-11-03T06:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/ff021e0b89811c92069950a5a96ef41f9860de0b"
        },
        "date": 1762305183312,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "723",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1252",
            "unit": "MB/s",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762423184403,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1104",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1250",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "e336882eee9d556480caafa267d097b7116c02c2",
          "message": "Do not drop `Arc<dyn FileLike>` in an incorrect context",
          "timestamp": "2025-11-06T11:31:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/e336882eee9d556480caafa267d097b7116c02c2"
        },
        "date": 1762485675751,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1222",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1251",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_read_bw_no_iommu": [
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
          "id": "9ab035c65491676d4ef46e52ede31ce6998a0b59",
          "message": "Rename the docs directory to book",
          "timestamp": "2025-08-21T10:40:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/9ab035c65491676d4ef46e52ede31ce6998a0b59"
        },
        "date": 1755826791877,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1308",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1383",
            "unit": "MB/s",
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
          "id": "7fad653992e7d9cbbe4c572f7ba339a779ef8025",
          "message": "Use 6.16.0 Linux kernel for benchmark tests & Add Linux TDX benchmark tests",
          "timestamp": "2025-07-07T14:19:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7fad653992e7d9cbbe4c572f7ba339a779ef8025"
        },
        "date": 1755912426143,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1593",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1387",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0a126a0c8c3d05e5d55132500d47dadec1605011",
          "message": "Set correct default value for VdsoData::mask",
          "timestamp": "2025-08-22T12:08:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/0a126a0c8c3d05e5d55132500d47dadec1605011"
        },
        "date": 1755996061851,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1451",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1277",
            "unit": "MB/s",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756083941241,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1413",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1388",
            "unit": "MB/s",
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
          "id": "3882eb40000826020c6ffe5026e0f8d6ecb3b902",
          "message": "Update docker version reference",
          "timestamp": "2025-08-22T13:31:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/3882eb40000826020c6ffe5026e0f8d6ecb3b902"
        },
        "date": 1756166684229,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1431",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1572",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "888eecb3509dac97ca739dabafbb5777d269a154",
          "message": "Patch a futex vulnerability\n\nIf the futex wait operation was interrupted by a signal or timed out, the\n`FutexItem` must be dequeued and dropped. Otherwise, malicious user programs\ncould repeatedly issue futex wait operations to exhaust kernel memory.\n\nDue to asynchronicity, this removal can't be done by queue position nor by\nfutex key match up:\n* The position might have changed during the pause as some earlier futex might\n  have been dequeued\n* If two futexes with the same key are enqueued and then one of them times out\n  or is interrupted, a removal by key would likely dequeue the wrong futex\n\nTherefore, we need to perform a removal by unique global futex ID.",
          "timestamp": "2025-08-26T08:43:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/888eecb3509dac97ca739dabafbb5777d269a154"
        },
        "date": 1756255885445,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1408",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1547",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2098b11b6830b4e923474eb777c7070b08346476",
          "message": "Unify the implementation of /proc/[pid] and /proc/[pid]/task/[tid]",
          "timestamp": "2025-08-18T11:03:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/2098b11b6830b4e923474eb777c7070b08346476"
        },
        "date": 1756339533155,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1480",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1453",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d3e27ae03a41e7e3dd51293d722ea91fefd44218",
          "message": "Use vDSO for fallback of user-provided sa_restorer on RISC-V platforms",
          "timestamp": "2025-08-28T03:20:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3e27ae03a41e7e3dd51293d722ea91fefd44218"
        },
        "date": 1756425983979,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1437",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1268",
            "unit": "MB/s",
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
          "id": "45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f",
          "message": "Disable I/O APIC entries in initialization",
          "timestamp": "2025-08-08T07:44:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/45b5bd39f1aa61bfc6f00c509913b7ec10a3a68f"
        },
        "date": 1757140240896,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1477",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1366",
            "unit": "MB/s",
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
          "id": "d4d84f18b7288f7251c779aad5749de9ffbe368f",
          "message": "Remove the outdated Github issue template for RFC",
          "timestamp": "2025-09-05T09:37:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4d84f18b7288f7251c779aad5749de9ffbe368f"
        },
        "date": 1757159447945,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2104",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1443",
            "unit": "MB/s",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757375181599,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "984",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1327",
            "unit": "MB/s",
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
          "id": "c1b80f0f0f42be5f9be90e0d2e5d7314895185f2",
          "message": "Use `'static` for FS types",
          "timestamp": "2025-09-05T02:49:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1b80f0f0f42be5f9be90e0d2e5d7314895185f2"
        },
        "date": 1757463288885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1163",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1363",
            "unit": "MB/s",
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
          "id": "8c36964bb940494cd8d1ad14cab0a93b0fd77598",
          "message": "Introduce VmPrinter to write kernel generated data",
          "timestamp": "2025-09-10T11:59:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8c36964bb940494cd8d1ad14cab0a93b0fd77598"
        },
        "date": 1757547825477,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "879",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1466",
            "unit": "MB/s",
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
          "id": "bf6efbabc749167ea46b915d1ccac3871e8a0215",
          "message": "Remove unused `has_guard_page` boolean",
          "timestamp": "2025-09-11T15:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/bf6efbabc749167ea46b915d1ccac3871e8a0215"
        },
        "date": 1757896428471,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1321",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1400",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "46aa437c8738e72a47510e764cb2b6eed8032706",
          "message": "Add `/proc/pid/oom_score_adj`",
          "timestamp": "2025-09-13T06:37:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/46aa437c8738e72a47510e764cb2b6eed8032706"
        },
        "date": 1758061492069,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "933",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1378",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "eb9edbd67f5da8f2dd5f58f18a397650b0e4d187",
          "message": "Bump the Docker image to 0.16.1",
          "timestamp": "2025-09-22T11:14:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb9edbd67f5da8f2dd5f58f18a397650b0e4d187"
        },
        "date": 1758671063361,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2325",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1384",
            "unit": "MB/s",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758759519490,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2125",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1617",
            "unit": "MB/s",
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
          "id": "4c26a7a7c53e516a20643315bf4706184b56dbe3",
          "message": "Fix a typo in the PCI bar detection",
          "timestamp": "2025-09-20T15:51:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/4c26a7a7c53e516a20643315bf4706184b56dbe3"
        },
        "date": 1758846562515,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1997",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1522",
            "unit": "MB/s",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "2c456709b6f6c058b1a68ee05f99b2b6119df1a9",
          "message": "Block a setuid ltp test for exfat test",
          "timestamp": "2025-09-26T08:19:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c456709b6f6c058b1a68ee05f99b2b6119df1a9"
        },
        "date": 1758930586017,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2103",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1479",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yang Zhichao",
            "username": "IfReturn",
            "email": "yzc2004.12@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "66356e133db8eee843bdffae29303e3e62fc4e7e",
          "message": "Add support for `/proc/stat` and `/proc/uptime`",
          "timestamp": "2025-09-19T13:55:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/66356e133db8eee843bdffae29303e3e62fc4e7e"
        },
        "date": 1759015175182,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2349",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1426",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "899db770f62234e89590ce1ae35067f7082107a5",
          "message": "Fix parameter passing of `preadv/pwritev`-family syscalls",
          "timestamp": "2025-09-27T17:35:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/899db770f62234e89590ce1ae35067f7082107a5"
        },
        "date": 1759107139139,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2162",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1396",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "294c55d0dfa5e5784729548f9764b26e608c18ff",
          "message": "Fix `semid_ds`'s layout on non-x86_64 platforms",
          "timestamp": "2025-09-27T18:01:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/294c55d0dfa5e5784729548f9764b26e608c18ff"
        },
        "date": 1759188098088,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1351",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1535",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759280627178,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2252",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1370",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759366407653,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1374",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1531",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759450639286,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2307",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1366",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759539141990,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2298",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1341",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759626216508,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2214",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1437",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee",
          "message": "Remove `RwLock.downgrade` due to potential contention with `RwLock.read`",
          "timestamp": "2025-05-24T14:28:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/50eaffc7314d5ef2f4a16cb0e2437cc0010c01ee"
        },
        "date": 1759706848373,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2288",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1507",
            "unit": "MB/s",
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
          "id": "56d78ab64965194ad03cb6cde07fd5d98b17129d",
          "message": "Fix some minor style issues",
          "timestamp": "2025-09-27T15:55:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/56d78ab64965194ad03cb6cde07fd5d98b17129d"
        },
        "date": 1759799497982,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2207",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1429",
            "unit": "MB/s",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759887330894,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2175",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1368",
            "unit": "MB/s",
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
          "id": "cded205535e176963dc49bf40f4c8492c2289c6c",
          "message": "Retire the LTP SMP blocklist",
          "timestamp": "2025-10-03T11:50:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/cded205535e176963dc49bf40f4c8492c2289c6c"
        },
        "date": 1759966363999,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1561",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1372",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760052907305,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2339",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1391",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760139422158,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2341",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1381",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760231938597,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1427",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1468",
            "unit": "MB/s",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760318556733,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2229",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1423",
            "unit": "MB/s",
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
          "id": "0be36ee2c1ad03686bb1150ed15003d374c6aee2",
          "message": "Fix virtio-mmio interrupt handling",
          "timestamp": "2025-10-07T15:42:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/0be36ee2c1ad03686bb1150ed15003d374c6aee2"
        },
        "date": 1760404533856,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2294",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1357",
            "unit": "MB/s",
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
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760485468375,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2055",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1399",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "f69d39e9c16db9295f89c084376244d7265612de",
          "message": "Add a regression test for `/proc/[pid]/mem`",
          "timestamp": "2025-09-28T14:53:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/f69d39e9c16db9295f89c084376244d7265612de"
        },
        "date": 1760578373480,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2007",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1546",
            "unit": "MB/s",
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
          "id": "384e5bc70da4fcc7d150140a0ae3706b6a33a91a",
          "message": "Fix an off-by-one bug in the trap frame",
          "timestamp": "2025-10-15T15:38:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/384e5bc70da4fcc7d150140a0ae3706b6a33a91a"
        },
        "date": 1760660967512,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2311",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1479",
            "unit": "MB/s",
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
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760753550117,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2020",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1585",
            "unit": "MB/s",
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
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760831174823,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1237",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1300",
            "unit": "MB/s",
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
          "id": "a7e45201e739ab20d43418fb6dd3839e3c326b1d",
          "message": "Update README.md for ICSE 2026 paper acceptance",
          "timestamp": "2025-10-18T09:58:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a7e45201e739ab20d43418fb6dd3839e3c326b1d"
        },
        "date": 1760924106731,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1413",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1314",
            "unit": "MB/s",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761010563306,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2192",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1472",
            "unit": "MB/s",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761095507669,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2356",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1396",
            "unit": "MB/s",
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
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761185883257,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2238",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1444",
            "unit": "MB/s",
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
          "id": "79d737c268efc8ba22a35539127bb2b385aae72c",
          "message": "Support arrays with multiple element types in SCML",
          "timestamp": "2025-10-10T11:43:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/79d737c268efc8ba22a35539127bb2b385aae72c"
        },
        "date": 1761270114577,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1897",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1528",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "8251d48bf26f169c2c0b14825b2721472e8159cf",
          "message": "Add RISC-V PLIC support",
          "timestamp": "2025-05-28T07:35:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/8251d48bf26f169c2c0b14825b2721472e8159cf"
        },
        "date": 1761358611223,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1388",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1300",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Arthur Paulino",
            "username": "arthurpaulino",
            "email": "arthurleonardo.ap@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6a67807fd003692a75abbf7f86085eba16bc25d1",
          "message": "Implement `IdSet::iter_in`\n\nThis patch enables more expressive ways to slice and iterate over\nthe `Id`s in an `IdSet` with `IdSet::iter_in`, which takes an arbitrary\n`IdSetSlicer`.\n\n`IdSet::iter_in` efficiently slices out unintended inner parts and\nthen, within the remaining parts, skips inactive bits by using\n`BitSlice::iter_ones` from the `bitvec` crate.\n\nIt also delivers several implementations of `IdSetSlicer` so OSTD\nconsumers can represent `Id` ranges ergonomically.\n\nIn the Asterinas kernel, `CpuSet::iter_in` enables a cleaner way to\ndefine an interator that cycles over the CPUs.",
          "timestamp": "2025-10-22T18:57:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/6a67807fd003692a75abbf7f86085eba16bc25d1"
        },
        "date": 1761436372637,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2326",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1380",
            "unit": "MB/s",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761522964946,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2351",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1411",
            "unit": "MB/s",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761609118385,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2062",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1424",
            "unit": "MB/s",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "43fc98dc77e4171035bb7e35c6100d577660acc1",
          "message": "Migrate virtio-input to input subsystem API",
          "timestamp": "2025-08-22T09:02:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/43fc98dc77e4171035bb7e35c6100d577660acc1"
        },
        "date": 1761695802974,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2219",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1325",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zejun Zhao",
            "username": "jellllly420",
            "email": "jelly.zhao.42@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "39a541fdeba53dd90cc85d13dcdd3fee916bb53a",
          "message": "Add RISC-V FPU support",
          "timestamp": "2025-08-07T20:53:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/39a541fdeba53dd90cc85d13dcdd3fee916bb53a"
        },
        "date": 1761782776799,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1148",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1348",
            "unit": "MB/s",
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
          "id": "9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0",
          "message": "Mark `sync_dma_range` as `unsafe`",
          "timestamp": "2025-10-30T05:12:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0"
        },
        "date": 1761869231738,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1004",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1266",
            "unit": "MB/s",
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
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1761955574664,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1025",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1325",
            "unit": "MB/s",
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
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1762042147257,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2125",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1398",
            "unit": "MB/s",
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
          "id": "b447a605ed8566bbdca39a490881cd49e2cccaf6",
          "message": "Introduce PerMountFlags and support MS_REMOUNT",
          "timestamp": "2025-10-31T08:42:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/b447a605ed8566bbdca39a490881cd49e2cccaf6"
        },
        "date": 1762129944901,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1960",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1301",
            "unit": "MB/s",
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
          "id": "9b0b445e4a1a7d43f0542b95fa85b3d8554785d2",
          "message": "Enable some mount givsor tests",
          "timestamp": "2025-11-03T06:13:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/9b0b445e4a1a7d43f0542b95fa85b3d8554785d2"
        },
        "date": 1762219614828,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1871",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1439",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ff021e0b89811c92069950a5a96ef41f9860de0b",
          "message": "Make `memfd` a sub module of `ramfs`",
          "timestamp": "2025-11-03T06:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/ff021e0b89811c92069950a5a96ef41f9860de0b"
        },
        "date": 1762305351176,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1114",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1362",
            "unit": "MB/s",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762423347472,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1226",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1583",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "e336882eee9d556480caafa267d097b7116c02c2",
          "message": "Do not drop `Arc<dyn FileLike>` in an incorrect context",
          "timestamp": "2025-11-06T11:31:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/e336882eee9d556480caafa267d097b7116c02c2"
        },
        "date": 1762485840120,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2255",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1290",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}