window.BENCHMARK_DATA = {
  "lastUpdate": 1783806371073,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "smp8_p99_wakeup_latency": [
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
        "date": 1761173681067,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "134",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "9744",
            "unit": "µs",
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
        "date": 1761263235403,
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
            "value": "9744",
            "unit": "µs",
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
        "date": 1761346693347,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "113",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "9776",
            "unit": "µs",
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
        "date": 1761437925844,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "147",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761524420584,
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
            "value": "191",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761610856191,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "105",
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
        "date": 1762425799984,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "120",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "177",
            "unit": "µs",
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
        "date": 1762487644736,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "115",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "180",
            "unit": "µs",
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
        "date": 1762974843288,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "135",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762996962955,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "126",
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
        "date": 1763081301204,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "141",
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
        "date": 1763295275186,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "127",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "185",
            "unit": "µs",
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
        "date": 1763320031612,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "127",
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
        "date": 1763604595755,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "140",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "142",
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763686295620,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "121",
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
        "date": 1763776911361,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "146",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "170",
            "unit": "µs",
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
        "date": 1763864014059,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "133",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "146",
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
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775788359613,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "145",
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
        "date": 1775874564911,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "124",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775960572148,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "120",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1019",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1776040703634,
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
            "value": "1058",
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
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776124780643,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "125",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "18b1fb6255456808b5b42867344f7216179a1cc5",
          "message": "Check privileged ports in `bind()`",
          "timestamp": "2026-04-15T15:51:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/18b1fb6255456808b5b42867344f7216179a1cc5"
        },
        "date": 1776391665301,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "127",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1054",
            "unit": "µs",
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
        "date": 1776481034013,
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
            "value": "1017",
            "unit": "µs",
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
        "date": 1776566836449,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "111",
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
        "date": 1776651551042,
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
            "value": "142",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776740121865,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "106",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "129",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776826521164,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "133",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "138",
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
          "id": "408db891aac95e8b765df90a61bfe06dcbdb99aa",
          "message": "Fix several other minor problems",
          "timestamp": "2026-04-20T05:57:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/408db891aac95e8b765df90a61bfe06dcbdb99aa"
        },
        "date": 1776904359309,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "120",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "145",
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1776997548676,
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
            "value": "1046",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777074057474,
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
            "value": "156",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777169106160,
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
            "value": "1030",
            "unit": "µs",
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
        "date": 1777244790998,
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
            "value": "1070",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779934637966,
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780021327678,
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
            "value": "235",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780107677941,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "93",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "151",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780183120290,
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
        "date": 1780367532839,
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
            "value": "154",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "456271b977256b0e9fe7bebb90da1bf9da57ae20",
          "message": "Update Kata networking guide",
          "timestamp": "2026-06-02T07:22:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/456271b977256b0e9fe7bebb90da1bf9da57ae20"
        },
        "date": 1780450037724,
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
            "value": "1098",
            "unit": "µs",
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
        "date": 1780615891158,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "106",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1017",
            "unit": "µs",
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
        "date": 1780699652391,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "112",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1026",
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
        "date": 1780787858550,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 wakeup latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 wakeup latency of schbench on Linux",
            "value": "115",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 wakeup latency of schbench on Asterinas",
            "value": "1038",
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
      }
    ],
    "smp8_p99_request_latency": [
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
        "date": 1761173756255,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4424",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "93824",
            "unit": "µs",
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
        "date": 1761263311253,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3852",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "103040",
            "unit": "µs",
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
        "date": 1761346770470,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4648",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "101248",
            "unit": "µs",
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
        "date": 1761438004683,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4952",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "152320",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761524499191,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4872",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "166656",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761610934799,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3668",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "154880",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762425898487,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4616",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "160000",
            "unit": "µs",
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
        "date": 1762487726375,
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
            "value": "154880",
            "unit": "µs",
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
        "date": 1762974926455,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4616",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762997047364,
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
            "value": "148736",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "73c0f34947e37216500ad6166f10b579d00b850a",
          "message": "Remove `Arc` guards of locks that have no users",
          "timestamp": "2025-02-05T01:50:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/73c0f34947e37216500ad6166f10b579d00b850a"
        },
        "date": 1763081385722,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4808",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "140032",
            "unit": "µs",
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
        "date": 1763295361329,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "5880",
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
        "date": 1763320117653,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "5656",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "146176",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763604681834,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4696",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "146176",
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763686381797,
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
            "value": "153856",
            "unit": "µs",
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
        "date": 1763776996397,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "5624",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "153344",
            "unit": "µs",
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
        "date": 1763864121085,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4248",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "141056",
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
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775788488105,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "5640",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "143104",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775874695217,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4808",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "136448",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775960700977,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4392",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "134912",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1776040831089,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4696",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "170752",
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
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776124906569,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4328",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "143616",
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
          "id": "18b1fb6255456808b5b42867344f7216179a1cc5",
          "message": "Check privileged ports in `bind()`",
          "timestamp": "2026-04-15T15:51:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/18b1fb6255456808b5b42867344f7216179a1cc5"
        },
        "date": 1776391794333,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "5208",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "149248",
            "unit": "µs",
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
        "date": 1776481166517,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4696",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "172800",
            "unit": "µs",
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
        "date": 1776566992382,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3748",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "148224",
            "unit": "µs",
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
        "date": 1776651809950,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4664",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "151296",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776740253330,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3836",
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
        "date": 1776826655480,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4728",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "162048",
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
          "id": "408db891aac95e8b765df90a61bfe06dcbdb99aa",
          "message": "Fix several other minor problems",
          "timestamp": "2026-04-20T05:57:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/408db891aac95e8b765df90a61bfe06dcbdb99aa"
        },
        "date": 1776904492789,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "4376",
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
        "date": 1776997709257,
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
            "value": "53952",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777074191007,
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
            "value": "53952",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777169245474,
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
            "value": "54208",
            "unit": "µs",
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
        "date": 1777244925485,
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
            "value": "53952",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779934782139,
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
            "value": "55360",
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780021473787,
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
            "value": "54976",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780107827298,
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
            "value": "53696",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780183262137,
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
            "value": "51520",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "7f3a096428b9607793c312e065c8c778b73c9748",
          "message": "Fix block-mapping writeback: persist allocations made by `BlockAsPageCacheBackend::submit_write_bio`",
          "timestamp": "2026-05-27T09:07:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/7f3a096428b9607793c312e065c8c778b73c9748"
        },
        "date": 1780367673854,
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
            "value": "53824",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "456271b977256b0e9fe7bebb90da1bf9da57ae20",
          "message": "Update Kata networking guide",
          "timestamp": "2026-06-02T07:22:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/456271b977256b0e9fe7bebb90da1bf9da57ae20"
        },
        "date": 1780450178821,
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
            "value": "53952",
            "unit": "µs",
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
        "date": 1780616002981,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3684",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "139520",
            "unit": "µs",
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
        "date": 1780699652696,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=8)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3868",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "152832",
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
      }
    ],
    "smp8_p50_rps": [
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
        "date": 1761263386822,
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
        "date": 1761346847672,
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
        "date": 1761438083400,
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761524578240,
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761611013544,
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762425997169,
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
        "date": 1762487808115,
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
        "date": 1762975009925,
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
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762997132036,
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "73c0f34947e37216500ad6166f10b579d00b850a",
          "message": "Remove `Arc` guards of locks that have no users",
          "timestamp": "2025-02-05T01:50:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/73c0f34947e37216500ad6166f10b579d00b850a"
        },
        "date": 1763081469854,
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
        "date": 1763295447699,
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
        "date": 1763320203045,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763604768077,
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763686468039,
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
        "date": 1763777081045,
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
        "date": 1763864227594,
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
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775788615305,
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775874825109,
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775960830073,
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1776040957826,
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
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776125032364,
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
        "date": 1776296750951,
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
          "id": "18b1fb6255456808b5b42867344f7216179a1cc5",
          "message": "Check privileged ports in `bind()`",
          "timestamp": "2026-04-15T15:51:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/18b1fb6255456808b5b42867344f7216179a1cc5"
        },
        "date": 1776391923938,
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
        "date": 1776481298714,
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
        "date": 1776567148190,
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
        "date": 1776651939595,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776740384663,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776826789218,
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
          "id": "408db891aac95e8b765df90a61bfe06dcbdb99aa",
          "message": "Fix several other minor problems",
          "timestamp": "2026-04-20T05:57:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/408db891aac95e8b765df90a61bfe06dcbdb99aa"
        },
        "date": 1776904626885,
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1776997869048,
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777074324624,
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777169384812,
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
        "date": 1777245059270,
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779934925928,
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780021619297,
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780107975360,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780183404303,
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "7f3a096428b9607793c312e065c8c778b73c9748",
          "message": "Fix block-mapping writeback: persist allocations made by `BlockAsPageCacheBackend::submit_write_bio`",
          "timestamp": "2026-05-27T09:07:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/7f3a096428b9607793c312e065c8c778b73c9748"
        },
        "date": 1780367815234,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "456271b977256b0e9fe7bebb90da1bf9da57ae20",
          "message": "Update Kata networking guide",
          "timestamp": "2026-06-02T07:22:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/456271b977256b0e9fe7bebb90da1bf9da57ae20"
        },
        "date": 1780450319559,
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
        "date": 1780616114800,
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
        "date": 1780699653001,
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
      }
    ],
    "smp1_p99_wakeup_latency": [
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
        "date": 1761611091951,
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
        "date": 1762426095300,
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
        "date": 1762487890087,
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
        "date": 1762975093226,
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
        "date": 1762997216106,
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
        "date": 1763081554393,
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
        "date": 1763295533376,
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
        "date": 1763320287877,
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
        "date": 1763604854472,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763686554360,
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
        "date": 1763777166032,
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
        "date": 1763864334635,
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
        "date": 1775439549484,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775526776025,
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
        "date": 1775618370579,
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
        "date": 1775702380846,
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775788742078,
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775874955097,
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775960959019,
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
        "date": 1776041085184,
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
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776125158065,
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
        "date": 1776297159550,
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
        "date": 1776392052100,
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
        "date": 1776481430677,
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
        "date": 1776567303397,
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
        "date": 1776652068485,
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
        "date": 1776740515822,
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
        "date": 1776826924477,
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
        "date": 1776904760152,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1776998028414,
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
            "value": "1",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777074458993,
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777169524119,
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
        "date": 1777245194205,
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
            "value": "1",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779935069804,
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780021764874,
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780108123502,
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
            "value": "1",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780183546134,
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
            "value": "1",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "7f3a096428b9607793c312e065c8c778b73c9748",
          "message": "Fix block-mapping writeback: persist allocations made by `BlockAsPageCacheBackend::submit_write_bio`",
          "timestamp": "2026-05-27T09:07:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/7f3a096428b9607793c312e065c8c778b73c9748"
        },
        "date": 1780367956511,
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
            "value": "1",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "456271b977256b0e9fe7bebb90da1bf9da57ae20",
          "message": "Update Kata networking guide",
          "timestamp": "2026-06-02T07:22:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/456271b977256b0e9fe7bebb90da1bf9da57ae20"
        },
        "date": 1780450601547,
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
            "value": "1",
            "unit": "µs",
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
        "date": 1780616226697,
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
      }
    ],
    "smp1_p99_request_latency": [
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
        "date": 1761611171036,
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
            "value": "10416",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762426193414,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2684",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "10384",
            "unit": "µs",
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
        "date": 1762487971577,
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
            "value": "9296",
            "unit": "µs",
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
        "date": 1762975176884,
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
            "value": "10384",
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
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762997300485,
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
            "value": "10352",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "73c0f34947e37216500ad6166f10b579d00b850a",
          "message": "Remove `Arc` guards of locks that have no users",
          "timestamp": "2025-02-05T01:50:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/73c0f34947e37216500ad6166f10b579d00b850a"
        },
        "date": 1763081639402,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2772",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "10448",
            "unit": "µs",
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
        "date": 1763295619095,
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
            "value": "10416",
            "unit": "µs",
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
        "date": 1763320373519,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2948",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "10448",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763604940708,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3884",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "10352",
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763686640510,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2684",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "10384",
            "unit": "µs",
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
        "date": 1763777256051,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2668",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "10384",
            "unit": "µs",
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
        "date": 1763864441869,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2940",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "10352",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775439670781,
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
            "value": "7416",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775526899883,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2676",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5112",
            "unit": "µs",
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
        "date": 1775618497635,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2684",
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
        "date": 1775702508847,
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
        "date": 1775788870741,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2684",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "7048",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775875085381,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2668",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5192",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775961088690,
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
            "value": "8976",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1776041211851,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2652",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "5000",
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
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776125284259,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2676",
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
        "date": 1776297262571,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2668",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "9936",
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
          "id": "18b1fb6255456808b5b42867344f7216179a1cc5",
          "message": "Check privileged ports in `bind()`",
          "timestamp": "2026-04-15T15:51:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/18b1fb6255456808b5b42867344f7216179a1cc5"
        },
        "date": 1776392181244,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "3188",
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
        "date": 1776481561806,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2676",
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
        "date": 1776567459105,
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
            "value": "10000",
            "unit": "µs",
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
        "date": 1776652197919,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2676",
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
        "date": 1776740647353,
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
        "date": 1776827058850,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2676",
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
        "date": 1776904892609,
        "tool": "customSmallerIsBetter",
        "title": "[Scheduler] P99 request latency while max-loading all CPUs (SMP=1)",
        "description": "schbench -F 256 -n 5 -r 90",
        "display": false,
        "benches": [
          {
            "name": "P99 request latency of schbench on Linux",
            "value": "2988",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "P99 request latency of schbench on Asterinas",
            "value": "7976",
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1776998187537,
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
            "value": "3020",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777074593027,
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
        "date": 1777169664268,
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
        "date": 1777245328582,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779935214321,
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780021910306,
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
        "date": 1780108272067,
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
        "date": 1780183688320,
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
        "date": 1780368097885,
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
        "date": 1780450742572,
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
            "value": "3020",
            "unit": "µs",
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
        "date": 1780616338436,
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
            "value": "9968",
            "unit": "µs",
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
      }
    ],
    "smp1_p50_rps": [
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
        "date": 1761438320027,
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761524815392,
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761611249835,
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762426291825,
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
        "date": 1762488053439,
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
        "date": 1762975259849,
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
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762997384984,
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "73c0f34947e37216500ad6166f10b579d00b850a",
          "message": "Remove `Arc` guards of locks that have no users",
          "timestamp": "2025-02-05T01:50:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/73c0f34947e37216500ad6166f10b579d00b850a"
        },
        "date": 1763081723791,
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
        "date": 1763295704524,
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
        "date": 1763320458717,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763605027376,
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763686726982,
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
        "date": 1763777341057,
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
        "date": 1763864548556,
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775439792241,
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775527023940,
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
        "date": 1775618624938,
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "ac432d5f147df65249f4f89d0edd24db2bfa98af",
          "message": "Make rootfs display the correct fs_type",
          "timestamp": "2026-04-08T09:48:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac432d5f147df65249f4f89d0edd24db2bfa98af"
        },
        "date": 1775702635478,
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
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775788997925,
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775875215704,
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775961217752,
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1776041339224,
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
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776125411169,
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
          "id": "18b1fb6255456808b5b42867344f7216179a1cc5",
          "message": "Check privileged ports in `bind()`",
          "timestamp": "2026-04-15T15:51:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/18b1fb6255456808b5b42867344f7216179a1cc5"
        },
        "date": 1776392309917,
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
        "date": 1776481693515,
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
        "date": 1776567614423,
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
        "date": 1776652327101,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776740778291,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776827194715,
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
          "id": "408db891aac95e8b765df90a61bfe06dcbdb99aa",
          "message": "Fix several other minor problems",
          "timestamp": "2026-04-20T05:57:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/408db891aac95e8b765df90a61bfe06dcbdb99aa"
        },
        "date": 1776905025657,
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1776998347167,
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777074726516,
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777169803368,
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
        "date": 1777245463770,
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779935357958,
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780022058306,
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780108420567,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780183830852,
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "7f3a096428b9607793c312e065c8c778b73c9748",
          "message": "Fix block-mapping writeback: persist allocations made by `BlockAsPageCacheBackend::submit_write_bio`",
          "timestamp": "2026-05-27T09:07:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/7f3a096428b9607793c312e065c8c778b73c9748"
        },
        "date": 1780368239717,
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "456271b977256b0e9fe7bebb90da1bf9da57ae20",
          "message": "Update Kata networking guide",
          "timestamp": "2026-06-02T07:22:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/456271b977256b0e9fe7bebb90da1bf9da57ae20"
        },
        "date": 1780450883600,
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
        "date": 1780616450147,
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
      }
    ]
  }
}