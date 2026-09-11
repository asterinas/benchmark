window.BENCHMARK_DATA = {
  "lastUpdate": 1789163645326,
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
        "date": 1788301922209,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.13",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
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
        "date": 1788388974639,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.11",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
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
        "date": 1788472833958,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.24",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
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
        "date": 1788558828709,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.25",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
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
        "date": 1788645455679,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.11",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.62",
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
        "date": 1788731355218,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.08",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.63",
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
        "date": 1788817984802,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.11",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.62",
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
        "date": 1788904178425,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.61",
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
        "date": 1789077080661,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency",
        "description": "Boot latency with a minimal initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency on Linux",
            "value": "5.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency on Asterinas",
            "value": "0.61",
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
        "date": 1788301921877,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.65",
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
        "date": 1788388974323,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.16",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.65",
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
        "date": 1788472833736,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.65",
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
        "date": 1788558828521,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.08",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.66",
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
        "date": 1788645455456,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.07",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.65",
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
        "date": 1788731354913,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.05",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.65",
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
        "date": 1788817984586,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.08",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.66",
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
        "date": 1788904178190,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.05",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.64",
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
        "date": 1788990302152,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.10",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.66",
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
        "date": 1789077080355,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.04",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.64",
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
        "date": 1789163645325,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~100MB pad)",
        "description": "Boot latency with a ~100MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~100MB pad) on Linux",
            "value": "5.05",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~100MB pad) on Asterinas",
            "value": "0.64",
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
        "date": 1788301921545,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.14",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.78",
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
        "date": 1788388973923,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.16",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.81",
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
        "date": 1788472833561,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.21",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.80",
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
        "date": 1788558828304,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.20",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.78",
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
        "date": 1788645455265,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.15",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.81",
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
        "date": 1788817984255,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.20",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.80",
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
        "date": 1788904177956,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.25",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.79",
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
        "date": 1788990301983,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.30",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.78",
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
        "date": 1789077080061,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.16",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.77",
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
        "date": 1789163645038,
        "tool": "customSmallerIsBetter",
        "title": "[Boot] Boot latency (~500MB pad)",
        "description": "Boot latency with a ~500MB-padded initramfs (measured via /proc/uptime)",
        "display": true,
        "benches": [
          {
            "name": "Boot latency (~500MB pad) on Linux",
            "value": "5.21",
            "unit": "sec",
            "extra": "linux_result"
          },
          {
            "name": "Boot latency (~500MB pad) on Asterinas",
            "value": "0.79",
            "unit": "sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}