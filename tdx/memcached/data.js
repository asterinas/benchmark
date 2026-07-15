window.BENCHMARK_DATA = {
  "lastUpdate": 1784153414526,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "t8_conc32_window10k": [
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
        "date": 1763082820455,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4699826",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5108530",
            "unit": "operations per second",
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
        "date": 1763321566348,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5592290",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5402698",
            "unit": "operations per second",
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
        "date": 1763606152159,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4824386",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4163802",
            "unit": "operations per second",
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
        "date": 1763687849602,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4676921",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5387437",
            "unit": "operations per second",
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
        "date": 1763778447645,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5080929",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4308159",
            "unit": "operations per second",
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
        "date": 1763865931807,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4708173",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3912151",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775399242841,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4223467",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59578",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "a54202ac023104ec9876521d6b81afa4d10aa2ce",
          "message": "Remove `TryFrom<u32> for FileDesc`",
          "timestamp": "2026-04-02T17:36:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a54202ac023104ec9876521d6b81afa4d10aa2ce"
        },
        "date": 1775404189396,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4918034",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61427",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775441372553,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4810384",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57812",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775528643660,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5042284",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "43863",
            "unit": "operations per second",
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
        "date": 1775620272092,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4985408",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55242",
            "unit": "operations per second",
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
        "date": 1775704289897,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5132335",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60100",
            "unit": "operations per second",
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
        "date": 1775790663351,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4957501",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "46754",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775876908743,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4693100",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "50372",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775962904806,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5105187",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58138",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776042989732,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4674137",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54181",
            "unit": "operations per second",
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
        "date": 1776127047809,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4986822",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "40420",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776393986462,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4824140",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "48595",
            "unit": "operations per second",
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
          "id": "5b93972e6fd61efcca18772431a92313005d2d6a",
          "message": "Remove all manually-written log prefixes\n\nRemove bracket-style prefixes ([IOAPIC], [sys_getpid], [Task entry],\netc.) and text prefixes that duplicate what __log_prefix already\nprovides (VirtIO Input:, IOMMU, PCI device, etc.) across the kernel\nsyscalls, virtio, PCI, IOMMU, IRQ, UART, ACPI, timer, mlsdisk, input,\nand rootfs subsystems.",
          "timestamp": "2026-04-16T03:42:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b93972e6fd61efcca18772431a92313005d2d6a"
        },
        "date": 1776483542242,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5088318",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54524",
            "unit": "operations per second",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776569638231,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4936596",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55601",
            "unit": "operations per second",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776654267507,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4946575",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61166",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776742488767,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3991488",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "46860",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776828941079,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4738651",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53660",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776906750929,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5206081",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57954",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1777000428866,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5228271",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55588",
            "unit": "operations per second",
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
        "date": 1777076466588,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5321518",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54633",
            "unit": "operations per second",
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
        "date": 1777171633441,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4982284",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61587",
            "unit": "operations per second",
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
        "date": 1777247215540,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5365618",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57680",
            "unit": "operations per second",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779937227722,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5404360",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61115",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780023952913,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5595104",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "70924",
            "unit": "operations per second",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780110357927,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5570275",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73312",
            "unit": "operations per second",
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
        "date": 1780185678836,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5072750",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "52933",
            "unit": "operations per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "7f3a096428b9607793c312e065c8c778b73c9748",
          "message": "Fix block-mapping writeback: persist allocations made by `BlockAsPageCacheBackend::submit_write_bio`",
          "timestamp": "2026-05-27T09:07:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/7f3a096428b9607793c312e065c8c778b73c9748"
        },
        "date": 1780370077702,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3983596",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73595",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "456271b977256b0e9fe7bebb90da1bf9da57ae20",
          "message": "Update Kata networking guide",
          "timestamp": "2026-06-02T07:22:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/456271b977256b0e9fe7bebb90da1bf9da57ae20"
        },
        "date": 1780452715396,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5394876",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "77205",
            "unit": "operations per second",
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
        "date": 1780617906622,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2634167",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73037",
            "unit": "operations per second",
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
        "date": 1780699660351,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2520286",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "70071",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1780787862385,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2554730",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61382",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1780870858173,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2568257",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59847",
            "unit": "operations per second",
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
        "date": 1780959531859,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2515141",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "74343",
            "unit": "operations per second",
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
        "date": 1781045150183,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2534734",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "69035",
            "unit": "operations per second",
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
        "date": 1781132235773,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2727354",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72334",
            "unit": "operations per second",
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
        "date": 1781220130252,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2583415",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "50961",
            "unit": "operations per second",
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
        "date": 1781305839840,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2570763",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53794",
            "unit": "operations per second",
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
        "date": 1781390208637,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2564207",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "62231",
            "unit": "operations per second",
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
        "date": 1781476621116,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2320957",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57989",
            "unit": "operations per second",
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
        "date": 1781567115539,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2296035",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "49360",
            "unit": "operations per second",
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
        "date": 1781653731224,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2658629",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "76675",
            "unit": "operations per second",
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
          "id": "c6284a9106f5a4c87deb7c8a990af6211dc5f540",
          "message": "Switch to a new Docker image at 0.18.0-20260618",
          "timestamp": "2026-06-18T08:39:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/c6284a9106f5a4c87deb7c8a990af6211dc5f540"
        },
        "date": 1782146649297,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4474351",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "74049",
            "unit": "operations per second",
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
        "date": 1782593639751,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4024632",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72963",
            "unit": "operations per second",
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
        "date": 1782767589088,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4280417",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "69694",
            "unit": "operations per second",
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
        "date": 1782944315210,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4117818",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "75202",
            "unit": "operations per second",
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
        "date": 1783026527657,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4400891",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67146",
            "unit": "operations per second",
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
        "date": 1783283281206,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4255702",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "75031",
            "unit": "operations per second",
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
        "date": 1783372500242,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4426646",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72603",
            "unit": "operations per second",
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
        "date": 1783725031965,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3990747",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "75322",
            "unit": "operations per second",
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
        "date": 1783806375908,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4326533",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55574",
            "unit": "operations per second",
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
        "date": 1783893022429,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4259330",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73392",
            "unit": "operations per second",
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
        "date": 1783982337979,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3843404",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67604",
            "unit": "operations per second",
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
        "date": 1784066190947,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4340541",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54901",
            "unit": "operations per second",
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
        "date": 1784153414524,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4385290",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "74070",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "t8_conc32_window20k": [
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
        "date": 1763082736187,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4990150",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4919151",
            "unit": "operations per second",
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
        "date": 1763296731342,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5046104",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5428928",
            "unit": "operations per second",
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
        "date": 1763321481145,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5496981",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5233428",
            "unit": "operations per second",
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
        "date": 1763606062492,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4620383",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5322119",
            "unit": "operations per second",
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
        "date": 1763687763492,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4599133",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5154630",
            "unit": "operations per second",
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
        "date": 1763778362709,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4755626",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3985902",
            "unit": "operations per second",
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
        "date": 1763865825436,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4664121",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5021241",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775399122555,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4827989",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59896",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "a54202ac023104ec9876521d6b81afa4d10aa2ce",
          "message": "Remove `TryFrom<u32> for FileDesc`",
          "timestamp": "2026-04-02T17:36:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a54202ac023104ec9876521d6b81afa4d10aa2ce"
        },
        "date": 1775404069698,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3967572",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60905",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775441251403,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5179097",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "49762",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775528518861,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5259367",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "42955",
            "unit": "operations per second",
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
        "date": 1775620144988,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4946647",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "48850",
            "unit": "operations per second",
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
        "date": 1775704161939,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4898019",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60123",
            "unit": "operations per second",
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
        "date": 1775790536409,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4854696",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "46552",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775876778124,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5009190",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "42493",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775962774560,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5160241",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59569",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776042862129,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4761795",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59682",
            "unit": "operations per second",
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
        "date": 1776126922136,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5040787",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59384",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776393858216,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4066854",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "47558",
            "unit": "operations per second",
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
          "id": "5b93972e6fd61efcca18772431a92313005d2d6a",
          "message": "Remove all manually-written log prefixes\n\nRemove bracket-style prefixes ([IOAPIC], [sys_getpid], [Task entry],\netc.) and text prefixes that duplicate what __log_prefix already\nprovides (VirtIO Input:, IOMMU, PCI device, etc.) across the kernel\nsyscalls, virtio, PCI, IOMMU, IRQ, UART, ACPI, timer, mlsdisk, input,\nand rootfs subsystems.",
          "timestamp": "2026-04-16T03:42:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b93972e6fd61efcca18772431a92313005d2d6a"
        },
        "date": 1776483410451,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5056521",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57299",
            "unit": "operations per second",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776569482367,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4643155",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "46136",
            "unit": "operations per second",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776654137394,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3574750",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "43218",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776742356911,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4979543",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58360",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776828807190,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4902679",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58375",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776906618712,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5211209",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59820",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1777000268472,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4815299",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "50057",
            "unit": "operations per second",
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
        "date": 1777076332745,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5467356",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60188",
            "unit": "operations per second",
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
        "date": 1777171494166,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5492661",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "45836",
            "unit": "operations per second",
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
        "date": 1777247081345,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5515328",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61150",
            "unit": "operations per second",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779937084113,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5810883",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "62976",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780023806767,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5566065",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73348",
            "unit": "operations per second",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780110209062,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5464771",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "69727",
            "unit": "operations per second",
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
        "date": 1780185536789,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4965429",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "68969",
            "unit": "operations per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "7f3a096428b9607793c312e065c8c778b73c9748",
          "message": "Fix block-mapping writeback: persist allocations made by `BlockAsPageCacheBackend::submit_write_bio`",
          "timestamp": "2026-05-27T09:07:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/7f3a096428b9607793c312e065c8c778b73c9748"
        },
        "date": 1780369936247,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5237064",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "62263",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "456271b977256b0e9fe7bebb90da1bf9da57ae20",
          "message": "Update Kata networking guide",
          "timestamp": "2026-06-02T07:22:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/456271b977256b0e9fe7bebb90da1bf9da57ae20"
        },
        "date": 1780452574332,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5694003",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54316",
            "unit": "operations per second",
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
        "date": 1780617794077,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2354058",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "49740",
            "unit": "operations per second",
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
        "date": 1780699660047,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2544628",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67923",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1780787862171,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2413547",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "70936",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1780870858016,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2495786",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "66923",
            "unit": "operations per second",
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
        "date": 1780959531699,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2448664",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "76051",
            "unit": "operations per second",
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
        "date": 1781045150025,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2455980",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "70545",
            "unit": "operations per second",
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
        "date": 1781132235586,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2186674",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "66882",
            "unit": "operations per second",
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
        "date": 1781220130061,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2580153",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72556",
            "unit": "operations per second",
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
        "date": 1781305839606,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2147256",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73718",
            "unit": "operations per second",
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
        "date": 1781390208317,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2572923",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73473",
            "unit": "operations per second",
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
        "date": 1781476620977,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2717964",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "65446",
            "unit": "operations per second",
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
        "date": 1781567115376,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2393018",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "74088",
            "unit": "operations per second",
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
        "date": 1781653730300,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2665177",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "47360",
            "unit": "operations per second",
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
        "date": 1782593639451,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4295105",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73374",
            "unit": "operations per second",
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
        "date": 1782767588757,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3977217",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67913",
            "unit": "operations per second",
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
        "date": 1782944314992,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4347051",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73197",
            "unit": "operations per second",
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
        "date": 1783026527299,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4314400",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "70576",
            "unit": "operations per second",
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
        "date": 1783283280959,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4225423",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "76476",
            "unit": "operations per second",
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
        "date": 1783372500036,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4235280",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73249",
            "unit": "operations per second",
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
        "date": 1783725031601,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4201767",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72108",
            "unit": "operations per second",
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
        "date": 1783806375574,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3966478",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "70048",
            "unit": "operations per second",
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
        "date": 1783893022241,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4345245",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59050",
            "unit": "operations per second",
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
        "date": 1783982337650,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4468637",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67594",
            "unit": "operations per second",
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
        "date": 1784066190710,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4326133",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "77448",
            "unit": "operations per second",
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
        "date": 1784153414282,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4362401",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72857",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "t16_conc64_window10k": [
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
        "date": 1762489197123,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5449438",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5628384",
            "unit": "operations per second",
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
        "date": 1762976428735,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6140799",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "6040457",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1762998575388,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5475445",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5501737",
            "unit": "operations per second",
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
        "date": 1763082904607,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5270824",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4739638",
            "unit": "operations per second",
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
        "date": 1763296817003,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5513398",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5382003",
            "unit": "operations per second",
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
        "date": 1763321651700,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5809937",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5958570",
            "unit": "operations per second",
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
        "date": 1763606239204,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5518055",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5093883",
            "unit": "operations per second",
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
        "date": 1763687935856,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5313828",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5557657",
            "unit": "operations per second",
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
        "date": 1763778532920,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5596308",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5427675",
            "unit": "operations per second",
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
        "date": 1763866038438,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5740773",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5300011",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775399362642,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5480254",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "56816",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "a54202ac023104ec9876521d6b81afa4d10aa2ce",
          "message": "Remove `TryFrom<u32> for FileDesc`",
          "timestamp": "2026-04-02T17:36:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a54202ac023104ec9876521d6b81afa4d10aa2ce"
        },
        "date": 1775404310034,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4147191",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60985",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775441493554,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5359938",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59770",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775528767992,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5077468",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53374",
            "unit": "operations per second",
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
        "date": 1775620398953,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5491018",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60225",
            "unit": "operations per second",
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
        "date": 1775704417763,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5596501",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58324",
            "unit": "operations per second",
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
        "date": 1775790792329,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5767199",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "52507",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775877039191,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5781417",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59225",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1775963033709,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5536669",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "44645",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776043116592,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5638948",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "56686",
            "unit": "operations per second",
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
        "date": 1776127173703,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5545882",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55838",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776394114828,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5549704",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "49326",
            "unit": "operations per second",
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
          "id": "5b93972e6fd61efcca18772431a92313005d2d6a",
          "message": "Remove all manually-written log prefixes\n\nRemove bracket-style prefixes ([IOAPIC], [sys_getpid], [Task entry],\netc.) and text prefixes that duplicate what __log_prefix already\nprovides (VirtIO Input:, IOMMU, PCI device, etc.) across the kernel\nsyscalls, virtio, PCI, IOMMU, IRQ, UART, ACPI, timer, mlsdisk, input,\nand rootfs subsystems.",
          "timestamp": "2026-04-16T03:42:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b93972e6fd61efcca18772431a92313005d2d6a"
        },
        "date": 1776483674265,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5597962",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "45868",
            "unit": "operations per second",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776569793955,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5517114",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59869",
            "unit": "operations per second",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776654783737,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5883242",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "47777",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776742620208,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5849803",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57833",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776829076012,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5612620",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53795",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1776906883300,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5484269",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59353",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1777000588388,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5369930",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58043",
            "unit": "operations per second",
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
        "date": 1777076600195,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5859737",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61600",
            "unit": "operations per second",
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
        "date": 1777171773487,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6013014",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "62345",
            "unit": "operations per second",
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
        "date": 1777247350442,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6059913",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "49603",
            "unit": "operations per second",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779937371425,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6106604",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "62439",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780024098824,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5877855",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60284",
            "unit": "operations per second",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780110506826,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6245966",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "71572",
            "unit": "operations per second",
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
        "date": 1780185821348,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6084913",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73519",
            "unit": "operations per second",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "7f3a096428b9607793c312e065c8c778b73c9748",
          "message": "Fix block-mapping writeback: persist allocations made by `BlockAsPageCacheBackend::submit_write_bio`",
          "timestamp": "2026-05-27T09:07:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/7f3a096428b9607793c312e065c8c778b73c9748"
        },
        "date": 1780370219794,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6159851",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "74044",
            "unit": "operations per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "456271b977256b0e9fe7bebb90da1bf9da57ae20",
          "message": "Update Kata networking guide",
          "timestamp": "2026-06-02T07:22:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/456271b977256b0e9fe7bebb90da1bf9da57ae20"
        },
        "date": 1780452856162,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6078090",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72114",
            "unit": "operations per second",
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
        "date": 1780618019010,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2063404",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "71724",
            "unit": "operations per second",
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
        "date": 1780699660641,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2169368",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "50074",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1780787862596,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2283185",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73184",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
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
        "date": 1780870858316,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2124606",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72516",
            "unit": "operations per second",
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
        "date": 1780959531998,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2592572",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67819",
            "unit": "operations per second",
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
        "date": 1781045150379,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2152609",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72451",
            "unit": "operations per second",
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
        "date": 1781132235986,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "1909466",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57838",
            "unit": "operations per second",
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
        "date": 1781220130844,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2210743",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "48848",
            "unit": "operations per second",
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
        "date": 1781305840115,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2333750",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "50886",
            "unit": "operations per second",
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
        "date": 1781390208922,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "1961822",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "74002",
            "unit": "operations per second",
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
        "date": 1781476621280,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2688085",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "59957",
            "unit": "operations per second",
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
        "date": 1781567115702,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2379876",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73486",
            "unit": "operations per second",
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
        "date": 1781653731532,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2011143",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54577",
            "unit": "operations per second",
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
        "date": 1782151226854,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4838714",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "74014",
            "unit": "operations per second",
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
        "date": 1782767589406,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4828996",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73420",
            "unit": "operations per second",
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
        "date": 1783026528009,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4786613",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "72467",
            "unit": "operations per second",
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
        "date": 1783372500456,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4795832",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73285",
            "unit": "operations per second",
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
        "date": 1783725032315,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4450440",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "73854",
            "unit": "operations per second",
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
        "date": 1783806376748,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4755256",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "75035",
            "unit": "operations per second",
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
        "date": 1783893022628,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4712691",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "60404",
            "unit": "operations per second",
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
        "date": 1783982338327,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4415011",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67448",
            "unit": "operations per second",
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
        "date": 1784066191737,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4333401",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "55171",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}