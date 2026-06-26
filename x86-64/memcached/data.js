window.BENCHMARK_DATA = {
  "lastUpdate": 1782508126996,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "t8_conc32_window10k": [
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
          "id": "30cb622701490622d218618a969e3d2d4d09fd27",
          "message": "Switch to a new Docker image 0.17.1-20260308",
          "timestamp": "2026-03-16T01:59:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/30cb622701490622d218618a969e3d2d4d09fd27"
        },
        "date": 1773706762692,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5608612",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "174843",
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
          "id": "cef80ffa56d85e546144aa1747485ff2bc406da0",
          "message": "Add OSTD soundness analysis section to the book\n\nAdd 8 new pages to the mdBook under \"Soundness Analysis\" covering the\nsystematic soundness argument for OSTD: what soundness means, sensitivity\nclassification, safe physical memory management, safe user-kernel\ninteractions, safe kernel-peripheral interactions, safe kernel logic,\nand safe policy injection.",
          "timestamp": "2026-03-17T08:20:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/cef80ffa56d85e546144aa1747485ff2bc406da0"
        },
        "date": 1775294989311,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4831696",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "71973",
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
          "id": "e4bcaabb395dae631e41797383125b52ad3d2eb2",
          "message": "Add `Memcpy`/`Memset` trait framework for typed memory copies\n\nIntroduce `Memcpy` and `Memset` traits that generalize the classic C\n`memcpy` and `memset` for typed memory categories (`KernelMem`,\n`UserMem`). The compiler resolves the correct implementation at\nmonomorphization time, making it straightforward to add new memory\ncategories (e.g., `IoMem` for TDX-aware I/O memory in #2958) without\na combinatorial explosion of function names.\n\nReplace the four ad-hoc private functions (`memcpy`, `memcpy_fallible`,\n`memset`, `memset_fallible`) in `mm/io/mod.rs` with trait-dispatched\nfree functions `memcpy::<Dst, Src>()` and `memset::<Dst>()`, and\nupdate all call sites including `io_util` imports across the kernel\ncrate.",
          "timestamp": "2026-03-10T07:19:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4bcaabb395dae631e41797383125b52ad3d2eb2"
        },
        "date": 1775302067253,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5762703",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37543",
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
          "id": "36b3d34a924db299e7c9955d0d6f7439f41c69f3",
          "message": "Bumped Docker image version to 0.17.1-20260319",
          "timestamp": "2026-03-19T05:52:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/36b3d34a924db299e7c9955d0d6f7439f41c69f3"
        },
        "date": 1775310782642,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5702797",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "34246",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775319031024,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4483523",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "40149",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775327658795,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6015552",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "32690",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775342080834,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3941426",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "125873",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775354048360,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5760382",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "52184",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "36c47a260a7d8a08bed978128f9cd6eef21c9ed8",
          "message": "Add the regression test for mountstats",
          "timestamp": "2026-03-19T10:54:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/36c47a260a7d8a08bed978128f9cd6eef21c9ed8"
        },
        "date": 1775359793002,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4825740",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38211",
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
          "id": "6f23eaa160d4c0813438295844a7530eae59d4db",
          "message": "Enable more futex tests of ltp/gvisor",
          "timestamp": "2026-03-20T10:59:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f23eaa160d4c0813438295844a7530eae59d4db"
        },
        "date": 1775368303388,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6255614",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "52884",
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
        "date": 1775388914699,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6044251",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "142947",
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
        "date": 1775392392936,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5780369",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "23870",
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
        "date": 1775430715810,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5790162",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "28773",
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
        "date": 1775517736955,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4684038",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "299117",
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
        "date": 1775609611956,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5879254",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57632",
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
        "date": 1775693196840,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5679642",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "133100",
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
        "date": 1775779465172,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5558034",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "21346",
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
        "date": 1775865582865,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5953163",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "41151",
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
        "date": 1775951572656,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5283392",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "185394",
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
        "date": 1776138068371,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5262851",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "57382",
            "unit": "operations per second",
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
          "id": "72e395b5f10d6f87e28b813adb40370c7b54cbb4",
          "message": "Bump libflate to 2.3.0 and replace core2",
          "timestamp": "2026-04-15T11:25:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/72e395b5f10d6f87e28b813adb40370c7b54cbb4"
        },
        "date": 1776300220104,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3904922",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37294",
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
        "date": 1776385184185,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5460098",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "290010",
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
        "date": 1776472564611,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5796924",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "595396",
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
        "date": 1776557333406,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5459364",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "39833",
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
        "date": 1776643785640,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6036108",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "91114",
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
        "date": 1776730792295,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6189289",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "32548",
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
        "date": 1776816920443,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5713610",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "112961",
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
        "date": 1776915645758,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5837307",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "48235",
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
        "date": 1776987409252,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6515707",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "177273",
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
        "date": 1777087690832,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6681366",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "43957",
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
        "date": 1777159375926,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6165405",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "135557",
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
        "date": 1777257807309,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6874962",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "114559",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "0f367b7f899b76fb2a9d718d56875f16280f9fde",
          "message": "Fix `make ktest` regression",
          "timestamp": "2026-04-27T02:47:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/0f367b7f899b76fb2a9d718d56875f16280f9fde"
        },
        "date": 1777333379048,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6657811",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "40123",
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
        "date": 1779924730723,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5838086",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "29030",
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
        "date": 1780011218933,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6219595",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5738209",
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
        "date": 1780097609049,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6170651",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5992173",
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
        "date": 1780194232243,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6725730",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "6226210",
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
        "date": 1780268677181,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6213554",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5561808",
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
        "date": 1780358866668,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6688279",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5815411",
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
        "date": 1780443963223,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6414554",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "6309040",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00",
          "message": "Update 0.18.0 demo video link in README.md",
          "timestamp": "2026-06-03T14:26:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00"
        },
        "date": 1780532216769,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2132498",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2016797",
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
        "date": 1780628407402,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2593675",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2790579",
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
        "date": 1780697577255,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2310768",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2113843",
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
        "date": 1780783461358,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2713665",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "1935502",
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
        "date": 1780869720594,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2952000",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2788176",
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
        "date": 1780957934886,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2714436",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2172239",
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
        "date": 1781043320942,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2891843",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2742277",
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
        "date": 1781130725952,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2418225",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2659269",
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
        "date": 1781217347242,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2945905",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2679651",
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
        "date": 1781302799261,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2847601",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2745887",
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
        "date": 1781388396849,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3010981",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2837352",
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
        "date": 1781474807911,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2824438",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2358849",
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
        "date": 1781565252327,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "1980681",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2537372",
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
        "date": 1781651295360,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2817062",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2816577",
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
        "date": 1782145828468,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5030514",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4505227",
            "unit": "operations per second",
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
        "date": 1782147675795,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4925549",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4380108",
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
        "date": 1782166605928,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4884705",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4485082",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhihang Shao",
            "username": "BattiestStone4",
            "email": "dio_ro@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "42d38f9af388c28c2dda8cb4d6e62de465f23e8e",
          "message": "Add regression test for `O_PATH` notification suppression\n\nVerify that opening a file with `O_PATH` does not generate inotify\nevents (`IN_OPEN` / `IN_CLOSE_NOWRITE`), matching the Linux behavior\nwhere `FMODE_NONOTIFY` is set on `O_PATH` file descriptors. A sanity\ncheck confirms that normal opens still produce events.\n\nRegister the test in `run_test.sh` so it runs alongside the other\ninotify regression tests.\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>\nSigned-off-by: Zhihang Shao <dio_ro@outlook.com>",
          "timestamp": "2026-06-18T11:51:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/42d38f9af388c28c2dda8cb4d6e62de465f23e8e"
        },
        "date": 1782249717743,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4898735",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4320188",
            "unit": "operations per second",
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
        "date": 1782336091472,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5209577",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4734219",
            "unit": "operations per second",
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
        "date": 1782508126994,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4685948",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4517659",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "36b3d34a924db299e7c9955d0d6f7439f41c69f3",
          "message": "Bumped Docker image version to 0.17.1-20260319",
          "timestamp": "2026-03-19T05:52:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/36b3d34a924db299e7c9955d0d6f7439f41c69f3"
        },
        "date": 1775310664805,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4559536",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "97784",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775318911943,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4215917",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "150722",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775327539003,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4280927",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67745",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775341960736,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4303069",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "22024",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775353929348,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5703072",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "233812",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "36c47a260a7d8a08bed978128f9cd6eef21c9ed8",
          "message": "Add the regression test for mountstats",
          "timestamp": "2026-03-19T10:54:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/36c47a260a7d8a08bed978128f9cd6eef21c9ed8"
        },
        "date": 1775359672423,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4556996",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "69521",
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
          "id": "6f23eaa160d4c0813438295844a7530eae59d4db",
          "message": "Enable more futex tests of ltp/gvisor",
          "timestamp": "2026-03-20T10:59:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f23eaa160d4c0813438295844a7530eae59d4db"
        },
        "date": 1775368183123,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4741323",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "54454",
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
        "date": 1775388556974,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5847900",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "64138",
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
        "date": 1775392272815,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5659617",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "24799",
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
        "date": 1775430595303,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4181121",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "79530",
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
        "date": 1775517613949,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5771410",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "39556",
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
        "date": 1775609488486,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5912239",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "39096",
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
        "date": 1775693073871,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5997462",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38540",
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
        "date": 1775779342159,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5739021",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "45677",
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
        "date": 1775865457592,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6113226",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "29894",
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
        "date": 1775951448587,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5976634",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "136342",
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
        "date": 1776038025254,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6024578",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "87208",
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
        "date": 1776137942642,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5724913",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "230136",
            "unit": "operations per second",
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
          "id": "72e395b5f10d6f87e28b813adb40370c7b54cbb4",
          "message": "Bump libflate to 2.3.0 and replace core2",
          "timestamp": "2026-04-15T11:25:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/72e395b5f10d6f87e28b813adb40370c7b54cbb4"
        },
        "date": 1776300092294,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5761193",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "474066",
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
        "date": 1776385054597,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6214366",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "35440",
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
        "date": 1776472431487,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5743442",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "25402",
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
        "date": 1776557205081,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5867899",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "80576",
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
        "date": 1776643656933,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5899571",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "58013",
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
        "date": 1776730662145,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5862869",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "615982",
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
        "date": 1776816785532,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6072764",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "132719",
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
        "date": 1776915510415,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5788789",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "45060",
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
        "date": 1776987271954,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6850707",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "30570",
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
        "date": 1777087550223,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6631842",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "30125",
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
        "date": 1777159239419,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6635820",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "31309",
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
        "date": 1777257667403,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6670136",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "32653",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "0f367b7f899b76fb2a9d718d56875f16280f9fde",
          "message": "Fix `make ktest` regression",
          "timestamp": "2026-04-27T02:47:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/0f367b7f899b76fb2a9d718d56875f16280f9fde"
        },
        "date": 1777333240746,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6507259",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "47444",
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
        "date": 1779924591988,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6304101",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "22609",
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
        "date": 1780011079298,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6538714",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "6121889",
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
        "date": 1780097470744,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6561320",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "6296424",
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
        "date": 1780194085732,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6730554",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3673042",
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
        "date": 1780268530745,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6419598",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5936228",
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
        "date": 1780358751869,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6026074",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5783138",
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
        "date": 1780443822443,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6667709",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "6307812",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00",
          "message": "Update 0.18.0 demo video link in README.md",
          "timestamp": "2026-06-03T14:26:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00"
        },
        "date": 1780532074450,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2731165",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2758375",
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
        "date": 1780628235101,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3039596",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2703128",
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
        "date": 1780697576623,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2151462",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2267234",
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
        "date": 1780783461039,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2359695",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2003171",
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
        "date": 1780869720423,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2766299",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2611712",
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
        "date": 1780957934736,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2762498",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2255139",
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
        "date": 1781043320262,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2421073",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2059055",
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
        "date": 1781130725796,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2927442",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2664590",
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
        "date": 1781217347000,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2898626",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2649510",
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
        "date": 1781302799061,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3060008",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2779370",
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
        "date": 1781388396499,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3085657",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2607807",
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
        "date": 1781474807567,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3000371",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2589387",
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
        "date": 1781565252121,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2816315",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2682421",
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
        "date": 1781651295200,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2936331",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2838983",
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
        "date": 1782144328981,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5263959",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4778035",
            "unit": "operations per second",
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
        "date": 1782144770678,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5305449",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4693248",
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
        "date": 1782145828147,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5460164",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4861877",
            "unit": "operations per second",
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
        "date": 1782147675596,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4953305",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4834043",
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
        "date": 1782166605738,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4951571",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4200738",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhihang Shao",
            "username": "BattiestStone4",
            "email": "dio_ro@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "42d38f9af388c28c2dda8cb4d6e62de465f23e8e",
          "message": "Add regression test for `O_PATH` notification suppression\n\nVerify that opening a file with `O_PATH` does not generate inotify\nevents (`IN_OPEN` / `IN_CLOSE_NOWRITE`), matching the Linux behavior\nwhere `FMODE_NONOTIFY` is set on `O_PATH` file descriptors. A sanity\ncheck confirms that normal opens still produce events.\n\nRegister the test in `run_test.sh` so it runs alongside the other\ninotify regression tests.\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>\nSigned-off-by: Zhihang Shao <dio_ro@outlook.com>",
          "timestamp": "2026-06-18T11:51:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/42d38f9af388c28c2dda8cb4d6e62de465f23e8e"
        },
        "date": 1782249717390,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4729402",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4841519",
            "unit": "operations per second",
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
        "date": 1782336091203,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4823320",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4414735",
            "unit": "operations per second",
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
        "date": 1782508126807,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4800040",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4581785",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "cef80ffa56d85e546144aa1747485ff2bc406da0",
          "message": "Add OSTD soundness analysis section to the book\n\nAdd 8 new pages to the mdBook under \"Soundness Analysis\" covering the\nsystematic soundness argument for OSTD: what soundness means, sensitivity\nclassification, safe physical memory management, safe user-kernel\ninteractions, safe kernel-peripheral interactions, safe kernel logic,\nand safe policy injection.",
          "timestamp": "2026-03-17T08:20:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/cef80ffa56d85e546144aa1747485ff2bc406da0"
        },
        "date": 1775295133119,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4461280",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38300",
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
          "id": "e4bcaabb395dae631e41797383125b52ad3d2eb2",
          "message": "Add `Memcpy`/`Memset` trait framework for typed memory copies\n\nIntroduce `Memcpy` and `Memset` traits that generalize the classic C\n`memcpy` and `memset` for typed memory categories (`KernelMem`,\n`UserMem`). The compiler resolves the correct implementation at\nmonomorphization time, making it straightforward to add new memory\ncategories (e.g., `IoMem` for TDX-aware I/O memory in #2958) without\na combinatorial explosion of function names.\n\nReplace the four ad-hoc private functions (`memcpy`, `memcpy_fallible`,\n`memset`, `memset_fallible`) in `mm/io/mod.rs` with trait-dispatched\nfree functions `memcpy::<Dst, Src>()` and `memset::<Dst>()`, and\nupdate all call sites including `io_util` imports across the kernel\ncrate.",
          "timestamp": "2026-03-10T07:19:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4bcaabb395dae631e41797383125b52ad3d2eb2"
        },
        "date": 1775302185289,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6066474",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "30749",
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
          "id": "36b3d34a924db299e7c9955d0d6f7439f41c69f3",
          "message": "Bumped Docker image version to 0.17.1-20260319",
          "timestamp": "2026-03-19T05:52:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/36b3d34a924db299e7c9955d0d6f7439f41c69f3"
        },
        "date": 1775310899940,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4072360",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "61500",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775319150398,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5793480",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "34489",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775327778511,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5978958",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "67897",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775342199380,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4722451",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "24205",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775345297159,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5787504",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "68161",
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
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775354286924,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4634308",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37926",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "36c47a260a7d8a08bed978128f9cd6eef21c9ed8",
          "message": "Add the regression test for mountstats",
          "timestamp": "2026-03-19T10:54:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/36c47a260a7d8a08bed978128f9cd6eef21c9ed8"
        },
        "date": 1775359913521,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5132702",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "44420",
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
          "id": "6f23eaa160d4c0813438295844a7530eae59d4db",
          "message": "Enable more futex tests of ltp/gvisor",
          "timestamp": "2026-03-20T10:59:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f23eaa160d4c0813438295844a7530eae59d4db"
        },
        "date": 1775368423939,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4031878",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "33401",
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
        "date": 1775389033783,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5793688",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "35527",
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
        "date": 1775392513076,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4825290",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "74856",
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
        "date": 1775430836884,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5995998",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "41956",
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
        "date": 1775517859725,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5985731",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "79554",
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
        "date": 1775609735703,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6056331",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37347",
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
        "date": 1775693319919,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6057814",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "30473",
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
        "date": 1775779588966,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5597325",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "30092",
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
        "date": 1775865706977,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4626212",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "44708",
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
        "date": 1775951696719,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5850624",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "81170",
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
        "date": 1776138194202,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5044613",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53909",
            "unit": "operations per second",
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
          "id": "72e395b5f10d6f87e28b813adb40370c7b54cbb4",
          "message": "Bump libflate to 2.3.0 and replace core2",
          "timestamp": "2026-04-15T11:25:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/72e395b5f10d6f87e28b813adb40370c7b54cbb4"
        },
        "date": 1776300348423,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5610522",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "38058",
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
        "date": 1776385313244,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4547639",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "46163",
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
        "date": 1776472697083,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6053082",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "37913",
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
        "date": 1776557461547,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4756279",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "29204",
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
        "date": 1776643914865,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6107225",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "24072",
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
        "date": 1776730922133,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6089633",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "53236",
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
        "date": 1776817056383,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5033321",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "75037",
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
        "date": 1776915780932,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5963075",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "33559",
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
        "date": 1776987545586,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6669935",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "22499",
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
        "date": 1777087831560,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6620686",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "22439",
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
        "date": 1777159513194,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6648527",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "32061",
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
        "date": 1777257946855,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6487941",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "40935",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "0f367b7f899b76fb2a9d718d56875f16280f9fde",
          "message": "Fix `make ktest` regression",
          "timestamp": "2026-04-27T02:47:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/0f367b7f899b76fb2a9d718d56875f16280f9fde"
        },
        "date": 1777333518369,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6369822",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "22303",
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
        "date": 1779924868268,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6230112",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "29912",
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
        "date": 1780011358106,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6617573",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3577502",
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
        "date": 1780097747686,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6350196",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5204796",
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
        "date": 1780194378404,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6678554",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "29455",
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
        "date": 1780268823158,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6438814",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "26713",
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
        "date": 1780358977258,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6405610",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "16257",
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
        "date": 1780444104078,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6418733",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "24490",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00",
          "message": "Update 0.18.0 demo video link in README.md",
          "timestamp": "2026-06-03T14:26:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00"
        },
        "date": 1780532358964,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2600077",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2378762",
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
        "date": 1780628579796,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3042491",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2415798",
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
        "date": 1780697577828,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2400511",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2269850",
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
        "date": 1780783461643,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2345169",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2027681",
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
        "date": 1780869720755,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3030013",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2374728",
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
        "date": 1780957935470,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2916989",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2378293",
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
        "date": 1781043321139,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2077034",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "1937849",
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
        "date": 1781130726127,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2196617",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2255707",
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
        "date": 1781217347463,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2956061",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2166491",
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
        "date": 1781302799453,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2943939",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2484613",
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
        "date": 1781388397122,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2912063",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2200370",
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
        "date": 1781474808203,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2921933",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2438853",
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
        "date": 1781565253030,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2747044",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2080377",
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
        "date": 1781651295542,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "2774038",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2546880",
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
        "date": 1782144329245,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5570010",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4712155",
            "unit": "operations per second",
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
        "date": 1782144770925,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5396594",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5014179",
            "unit": "operations per second",
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
        "date": 1782147676021,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5314332",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4983870",
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
        "date": 1782166606136,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5343678",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4782115",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhihang Shao",
            "username": "BattiestStone4",
            "email": "dio_ro@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "42d38f9af388c28c2dda8cb4d6e62de465f23e8e",
          "message": "Add regression test for `O_PATH` notification suppression\n\nVerify that opening a file with `O_PATH` does not generate inotify\nevents (`IN_OPEN` / `IN_CLOSE_NOWRITE`), matching the Linux behavior\nwhere `FMODE_NONOTIFY` is set on `O_PATH` file descriptors. A sanity\ncheck confirms that normal opens still produce events.\n\nRegister the test in `run_test.sh` so it runs alongside the other\ninotify regression tests.\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>\nSigned-off-by: Zhihang Shao <dio_ro@outlook.com>",
          "timestamp": "2026-06-18T11:51:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/42d38f9af388c28c2dda8cb4d6e62de465f23e8e"
        },
        "date": 1782249718079,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4954537",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4628571",
            "unit": "operations per second",
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
        "date": 1782336091717,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4880219",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4465515",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}