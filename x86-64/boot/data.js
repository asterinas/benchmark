window.BENCHMARK_DATA = {
  "lastUpdate": 1791591303401,
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
        "date": 1788388867164,
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
        "date": 1788471196763,
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
        "date": 1788557605279,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.79",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643455787,
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730144167,
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
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816315053,
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
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903442304,
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
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989695622,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.78",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075834886,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.78",
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
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162101064,
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
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248877671,
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
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334891713,
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
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421124769,
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
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507997376,
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594482473,
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683216714,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.33",
            "unit": "sec",
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
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769864133,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.36",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855835347,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942111644,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.80",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.30",
            "unit": "sec",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029631957,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114289778,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.80",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200882860,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.32",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288040338,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374843480,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.32",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461325148,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549421463,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
            "unit": "sec",
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
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635934425,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.30",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721986290,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.30",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809643415,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.32",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895520331,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984155425,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074095586,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159771148,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.30",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243579154,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329476709,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.83",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
            "unit": "sec",
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
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416406982,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505039562,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.31",
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
        "date": 1788388866960,
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
        "date": 1788471196456,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.78",
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
        "date": 1788557605042,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.76",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.32",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643455469,
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730143929,
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
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816314864,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.76",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.32",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903442104,
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
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989695412,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.76",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075834732,
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
            "value": "0.32",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162100809,
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
            "value": "0.32",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248877384,
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
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334891413,
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
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421124491,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.78",
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
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507997163,
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594482315,
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
            "value": "0.32",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683216529,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.35",
            "unit": "sec",
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
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769863883,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.37",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855835091,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.37",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942111410,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.84",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.36",
            "unit": "sec",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029631647,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.37",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114289617,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.35",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200882562,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.83",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.35",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288040052,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.85",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.37",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374843190,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.35",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461324899,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.35",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549421298,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.36",
            "unit": "sec",
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
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635934123,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.83",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.36",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721986155,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.35",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809643090,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.81",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.35",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895520126,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.36",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984155188,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.34",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074095141,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.34",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159770891,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.36",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243578910,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.84",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.36",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329476530,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.34",
            "unit": "sec",
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
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416406775,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.83",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.36",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505039309,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.84",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.35",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591303400,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "0.82",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.36",
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
        "date": 1788471196184,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.91",
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
        "date": 1788557604635,
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
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788643455270,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.94",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e60f6de4e991d3ad66fc61d0340a363a2096bd85",
          "message": "Revert the temporary fix since dev containers are updated",
          "timestamp": "2026-09-04T13:41:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60f6de4e991d3ad66fc61d0340a363a2096bd85"
        },
        "date": 1788730143678,
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
            "name": "Mike Solar",
            "username": "Mike-Solar",
            "email": "iam@mikesolar.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "1601bf53792fd81420a4f3c1da3119e84d5b36ef",
          "message": "Improve doc comments for Either\n\nSigned-off-by: Mike Solar <iam@mikesolar.cn>",
          "timestamp": "2026-09-07T11:26:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/1601bf53792fd81420a4f3c1da3119e84d5b36ef"
        },
        "date": 1788816314679,
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
            "value": "0.49",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jia Qingtong",
            "email": "jiaqingtong@huawei.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "819d6628c882eab21b0074720b47af8ded042107",
          "message": "Add AArch64 QEMU scheme support\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-05-05T00:23:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/819d6628c882eab21b0074720b47af8ded042107"
        },
        "date": 1788903441940,
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
            "name": "li041",
            "username": "li041",
            "email": "lxh050013@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "414f27702dee7c2f25672295c7aa9b83f247877e",
          "message": "Support virtiofs symbolic links",
          "timestamp": "2026-09-08T03:20:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/414f27702dee7c2f25672295c7aa9b83f247877e"
        },
        "date": 1788989695154,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.95",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789075834512,
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
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789162100557,
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
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789248877112,
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
      },
      {
        "commit": {
          "author": {
            "name": "androidAppGuard",
            "username": "androidAppGuard",
            "email": "guohui.study@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a5449e62b0a5a0affccb6087ea3543a2fdf66052",
          "message": "Add seven problems for aster-code-review benchmark (400-406)",
          "timestamp": "2026-08-28T10:52:18Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5449e62b0a5a0affccb6087ea3543a2fdf66052"
        },
        "date": 1789334891007,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.94",
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
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789421124218,
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
            "name": "WX Chen",
            "username": "zhenbaii",
            "email": "wxchen0913@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4b407ca87de203f79c27c9a83ada1d8223fe280",
          "message": "Fix `getcwd` panic after unmounting a parent with child mounts\n\nTreat a dead parent mount as unreachable instead of unwrapping it.",
          "timestamp": "2026-09-12T08:28:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4b407ca87de203f79c27c9a83ada1d8223fe280"
        },
        "date": 1789507996968,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.94",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "15c0fb29bd7ff585237c13ea16ea1aba2d7f8964",
          "message": "Fix partial socket option reads and writes\n\nCo-authored-by: 123123213weqw <1939455790@qq.com>",
          "timestamp": "2026-09-14T07:14:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/15c0fb29bd7ff585237c13ea16ea1aba2d7f8964"
        },
        "date": 1789594482143,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "0.94",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.50",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789683216264,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.01",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.53",
            "unit": "sec",
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
          "id": "415851eb38dec4fd2674149a85ccd7ec1f81b77a",
          "message": "Add aster-code-review benchmark: 508-521",
          "timestamp": "2026-08-19T05:07:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/415851eb38dec4fd2674149a85ccd7ec1f81b77a"
        },
        "date": 1789769863649,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.01",
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
            "name": "Zhouqi Jiang",
            "username": "luojia65",
            "email": "luojia@rustsbi.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0fa78e6012c80acc8f03caf49f89e231a9c61cee",
          "message": "Set accessed and dirty bits eagerly for RISC-V kernel mappings\n\nKernel mappings do not track accessed or dirty state. Leaving A/D bits\nclear can cause page faults on systems that manage these bits in\nsoftware (Svade), including during early boot.\n\nSet both bits in the Sv39 and Sv48 boot leaf entries and in non-user\nleaf entries created by `PageTableEntry::new_page`. This also avoids\nhardware PTE updates on systems that manage A/D bits in hardware.\nKeep user mappings and non-leaf entries unchanged.\n\nSigned-off-by: Zhouqi Jiang <luojia@rustsbi.com>",
          "timestamp": "2026-09-16T09:21:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/0fa78e6012c80acc8f03caf49f89e231a9c61cee"
        },
        "date": 1789855834826,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.09",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.53",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f9f784e3e04b09468012e8b50b167f3e8c872b3",
          "message": "Use shared DMA arena in BIO",
          "timestamp": "2026-08-25T10:19:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f9f784e3e04b09468012e8b50b167f3e8c872b3"
        },
        "date": 1789942111081,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.13",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.55",
            "unit": "sec",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c3fc8a5409ce337b3e0d6666b66462f8a8021cdc",
          "message": "Introduce `PartitionManager` to serialize partition updates",
          "timestamp": "2026-09-08T08:45:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/c3fc8a5409ce337b3e0d6666b66462f8a8021cdc"
        },
        "date": 1790029631286,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.03",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.54",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Bitter127",
            "username": "Bitter127",
            "email": "1571681846@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ac790aa89b2f39e700d263882e1a1301e0a77a25",
          "message": "Initialize RISC-V BSS for flat-binary boot",
          "timestamp": "2026-09-14T05:02:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac790aa89b2f39e700d263882e1a1301e0a77a25"
        },
        "date": 1790114289448,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.56",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c27a1ab9b7108ea1a44e5090bc580a92405f787c",
          "message": "Configure managed virtio-fs services for QEMU",
          "timestamp": "2026-09-21T04:24:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/c27a1ab9b7108ea1a44e5090bc580a92405f787c"
        },
        "date": 1790200882263,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.02",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.56",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790288039764,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.02",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.53",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e01871f0c9fd73052a77cc3009c5d608861cff25",
          "message": "Integrate virtio-fs into `xfstests` runs",
          "timestamp": "2026-08-17T10:56:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/e01871f0c9fd73052a77cc3009c5d608861cff25"
        },
        "date": 1790374842856,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.08",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.52",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790461324562,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.02",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.58",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "98e71727529efdbe87f35c20bcaceb0fc2e6e8f3",
          "message": "Register cached fio benchmarks",
          "timestamp": "2026-09-02T02:13:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/98e71727529efdbe87f35c20bcaceb0fc2e6e8f3"
        },
        "date": 1790549421117,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.02",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.54",
            "unit": "sec",
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
          "id": "be72e21f4a993e09064d6eff91147c47196e092d",
          "message": "Add Firecracker boot documentation to the book\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-09-08T08:56:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/be72e21f4a993e09064d6eff91147c47196e092d"
        },
        "date": 1790635933897,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.05",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.53",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790721986017,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.01",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.52",
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
          "id": "a5238eb6a965a4616ce07a48f5dfbc8042c4cd44",
          "message": "Avoid an `expect()`",
          "timestamp": "2026-09-29T09:37:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/a5238eb6a965a4616ce07a48f5dfbc8042c4cd44"
        },
        "date": 1790809642762,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.01",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.52",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "harry",
            "username": "Cosh-y",
            "email": "ambition0316@126.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "577826860f5ebca1210fbe27d261b2327a0ae60f",
          "message": "Add guest physical memory management with EPT",
          "timestamp": "2026-09-09T13:29:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/577826860f5ebca1210fbe27d261b2327a0ae60f"
        },
        "date": 1790895519908,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.03",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.52",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1790984154955,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.02",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.53",
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
          "id": "0c60537098f4c2949ad2d382aaf499de72263d76",
          "message": "Refactor sigset size validation into `RequireFullSize` and `AllowTruncSize`\n\nalso fix `rt_sigpending` rejecting sigsetsize smaller than 8",
          "timestamp": "2026-09-21T11:59:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/0c60537098f4c2949ad2d382aaf499de72263d76"
        },
        "date": 1791074094835,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.03",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.54",
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
          "id": "73ef2b9b5fd7b1a8d9583525d8824ef31985e179",
          "message": "Enhance UART console in AArch64",
          "timestamp": "2026-07-03T17:41:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/73ef2b9b5fd7b1a8d9583525d8824ef31985e179"
        },
        "date": 1791159770698,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.01",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.51",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791243578676,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.05",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.52",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "QcN3ep",
            "username": "QcN3ep",
            "email": "qc_n3ep@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "3d85cb44263808723ee46c5dbbd06b330a2b3204",
          "message": "Reserve device tree memory on ARM",
          "timestamp": "2026-10-05T12:51:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/3d85cb44263808723ee46c5dbbd06b330a2b3204"
        },
        "date": 1791329476329,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.54",
            "unit": "sec",
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
          "id": "c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff",
          "message": "Move the i8042 component to `kernel/comps`\n\nRegister i8042 as a fallback restart provider and let each architecture define the system power policy injected into OSTD. Keep ACPI ahead of i8042 without making aster-core depend on the high-level component.",
          "timestamp": "2026-09-21T12:48:26Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4c0d992bd0fc93fa4558ca63fa7a2937b5c87ff"
        },
        "date": 1791416406536,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.05",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.50",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d3f5595ca213feb9c7fa3005976de7bd9b518da6",
          "message": "Fix VirtioFS setup in FIO benchmarks\n\nPass separate work directories to the Asterinas and Linux benchmark paths, use an absolute virtiofsd helper path for qemu-with-daemon, and make FIO result parsing robust for slash-containing patterns. Remove obsolete VirtioFS paths from benchmark YAML files.",
          "timestamp": "2026-09-30T05:16:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3f5595ca213feb9c7fa3005976de7bd9b518da6"
        },
        "date": 1791505039028,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.01",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.51",
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
          "id": "7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d",
          "message": "Remove the stale `@boterinas codex` command from the Book",
          "timestamp": "2026-10-09T06:01:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/7cf6fb02d097d0c9c9b1969d51fb112e2e060b1d"
        },
        "date": 1791591303099,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "1.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.50",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}