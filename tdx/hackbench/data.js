window.BENCHMARK_DATA = {
  "lastUpdate": 1781132249702,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "group8_smp1": [
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
        "date": 1759105011057,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.399",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.819",
            "unit": "sec",
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
        "date": 1759193561589,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.243",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.197",
            "unit": "sec",
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
        "date": 1759276824272,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.178",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.720",
            "unit": "sec",
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
        "date": 1759364083176,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.375",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.794",
            "unit": "sec",
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
        "date": 1759452771096,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.231",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.779",
            "unit": "sec",
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
        "date": 1759539716520,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.439",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.971",
            "unit": "sec",
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
        "date": 1759625306711,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.252",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.739",
            "unit": "sec",
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
        "date": 1759712592093,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.472",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.719",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1759796563276,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.167",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.711",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1759884647660,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.224",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.842",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1759973657763,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.297",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.798",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760058856585,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.413",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.043",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760145415770,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.184",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.992",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760228555055,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.219",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.745",
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
          "id": "d2b46640782d7b0f5002cae819c115096cb84add",
          "message": "Add a configfs usage example in ktest",
          "timestamp": "2025-10-09T05:05:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/d2b46640782d7b0f5002cae819c115096cb84add"
        },
        "date": 1760315799647,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.282",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.855",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1760403604794,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.221",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.830",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "257b0c63b1f039e1ec4fd94c2c7bd549f8db2830",
          "message": "Fix ext2 block groups count",
          "timestamp": "2025-10-14T03:53:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/257b0c63b1f039e1ec4fd94c2c7bd549f8db2830"
        },
        "date": 1760491719098,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.404",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.281",
            "unit": "sec",
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
        "date": 1760574744923,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.253",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.756",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1760664536101,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.239",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.929",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "782301c2399f18865035fcb966777c164d915afa",
          "message": "Remove open-related APIs from FsResolver",
          "timestamp": "2025-10-16T09:50:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/782301c2399f18865035fcb966777c164d915afa"
        },
        "date": 1760753034268,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.412",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.806",
            "unit": "sec",
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
        "date": 1760839053048,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.182",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.959",
            "unit": "sec",
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
        "date": 1760921024706,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.231",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.789",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761007996707,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.257",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.719",
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
          "id": "857424de52c8a1d344c7d23353fa5bdf80ea794e",
          "message": "Test the case where pidfd is negative in the test",
          "timestamp": "2025-10-20T02:30:27Z",
          "url": "https://github.com/asterinas/asterinas/commit/857424de52c8a1d344c7d23353fa5bdf80ea794e"
        },
        "date": 1761097016579,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.246",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.903",
            "unit": "sec",
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
        "date": 1761178899420,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.292",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.806",
            "unit": "sec",
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
        "date": 1761268494673,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.326",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.753",
            "unit": "sec",
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
        "date": 1761352601268,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.150",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.729",
            "unit": "sec",
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
        "date": 1761443369323,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.252",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.827",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1761529934228,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.180",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.774",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1761616240239,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.236",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.729",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1762432433764,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.182",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.300",
            "unit": "sec",
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
        "date": 1762493058045,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.210",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.116",
            "unit": "sec",
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
          "id": "0615e6f6424ead8e12d73670428149fa7270571f",
          "message": "Unify all syscall titles in SCML to level 3",
          "timestamp": "2025-11-11T02:09:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/0615e6f6424ead8e12d73670428149fa7270571f"
        },
        "date": 1762980544702,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.422",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.942",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1763002760732,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.221",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.881",
            "unit": "sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "73c0f34947e37216500ad6166f10b579d00b850a",
          "message": "Remove `Arc` guards of locks that have no users",
          "timestamp": "2025-02-05T01:50:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/73c0f34947e37216500ad6166f10b579d00b850a"
        },
        "date": 1763090118333,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.374",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.900",
            "unit": "sec",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763300855963,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.195",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.270",
            "unit": "sec",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763325678553,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.245",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.931",
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
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763610495642,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.174",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.138",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763692367123,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.253",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.905",
            "unit": "sec",
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
          "id": "2034055f90607f67f04de044ee88dd52a488d612",
          "message": "Bump the Docker image version",
          "timestamp": "2025-11-21T06:53:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/2034055f90607f67f04de044ee88dd52a488d612"
        },
        "date": 1763782752452,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.241",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.036",
            "unit": "sec",
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
          "id": "2034055f90607f67f04de044ee88dd52a488d612",
          "message": "Bump the Docker image version",
          "timestamp": "2025-11-21T06:53:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/2034055f90607f67f04de044ee88dd52a488d612"
        },
        "date": 1763871186211,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.238",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.114",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775447594582,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.885",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.254",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775535014218,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.272",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.880",
            "unit": "sec",
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
          "id": "c2ea64841a56953ac4c1b815b341dad44457ca27",
          "message": "Update book to document `init` fallback paths when `init` parameter is omitted",
          "timestamp": "2026-04-07T08:04:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2ea64841a56953ac4c1b815b341dad44457ca27"
        },
        "date": 1775626751468,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.500",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.899",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "ac432d5f147df65249f4f89d0edd24db2bfa98af",
          "message": "Make rootfs display the correct fs_type",
          "timestamp": "2026-04-08T09:48:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac432d5f147df65249f4f89d0edd24db2bfa98af"
        },
        "date": 1775710812305,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.255",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.963",
            "unit": "sec",
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
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775797209784,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.331",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.879",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1776049509442,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.287",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.969",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776133498851,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.423",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.934",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "18b1fb6255456808b5b42867344f7216179a1cc5",
          "message": "Check privileged ports in `bind()`",
          "timestamp": "2026-04-15T15:51:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/18b1fb6255456808b5b42867344f7216179a1cc5"
        },
        "date": 1776400584580,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.274",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.842",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "408db891aac95e8b765df90a61bfe06dcbdb99aa",
          "message": "Fix several other minor problems",
          "timestamp": "2026-04-20T05:57:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/408db891aac95e8b765df90a61bfe06dcbdb99aa"
        },
        "date": 1776913555945,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.306",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.019",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777083322531,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.206",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.096",
            "unit": "sec",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "7bcb2fe3849b64788a945d1b916c52a16bce8a0c",
          "message": "Add basic ptrace tests",
          "timestamp": "2026-03-24T15:35:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/7bcb2fe3849b64788a945d1b916c52a16bce8a0c"
        },
        "date": 1777254094453,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.199",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.985",
            "unit": "sec",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780192969845,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.211",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.044",
            "unit": "sec",
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
          "id": "866d050736f3c19ffe3e8cba759fffa50c138e4e",
          "message": "Add 0.18.0 release notes",
          "timestamp": "2026-06-04T09:25:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/866d050736f3c19ffe3e8cba759fffa50c138e4e"
        },
        "date": 1780623650478,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.376",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.041",
            "unit": "sec",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "356dd6e71bc6f980f7ebb883728f2e912553bb12",
          "message": "Refine store and push benchmark results processes",
          "timestamp": "2026-05-28T08:41:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/356dd6e71bc6f980f7ebb883728f2e912553bb12"
        },
        "date": 1780699684125,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.222",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.914",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1780787877947,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.312",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.075",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1780870870991,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.347",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "1.954",
            "unit": "sec",
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
        "date": 1780959545327,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.231",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.405",
            "unit": "sec",
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
        "date": 1781045164955,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.227",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.039",
            "unit": "sec",
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
        "date": 1781132249701,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] Turnaround time of 8 groups using 1 CPU",
        "description": "hackbench -g 8 -l 1000 -p -T",
        "display": false,
        "benches": [
          {
            "name": "Turnaround time of hackbench on Linux",
            "value": "1.402",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Turnaround time of hackbench on Asterinas",
            "value": "2.293",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}