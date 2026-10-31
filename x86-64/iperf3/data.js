window.BENCHMARK_DATA = {
  "lastUpdate": 1793408019268,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "tcp_virtio_bw": [
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
        "date": 1788223194708,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14167",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6269",
            "unit": "Mbits/sec",
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
        "date": 1788338174504,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14131",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6201",
            "unit": "Mbits/sec",
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
        "date": 1788388864731,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14122",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6111",
            "unit": "Mbits/sec",
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
        "date": 1788471193780,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14161",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4937",
            "unit": "Mbits/sec",
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
        "date": 1788557603233,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14308",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5005",
            "unit": "Mbits/sec",
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
        "date": 1788643452572,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10332",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5783",
            "unit": "Mbits/sec",
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
        "date": 1788730141511,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14149",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6126",
            "unit": "Mbits/sec",
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
        "date": 1788816312916,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14204",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5967",
            "unit": "Mbits/sec",
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
        "date": 1788903439430,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10522",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5273",
            "unit": "Mbits/sec",
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
        "date": 1788989693800,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12778",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5976",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1789075831649,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13743",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5359",
            "unit": "Mbits/sec",
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
        "date": 1789162097606,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14300",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5417",
            "unit": "Mbits/sec",
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
        "date": 1789248874834,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13709",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5308",
            "unit": "Mbits/sec",
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
        "date": 1789334889018,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12373",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5805",
            "unit": "Mbits/sec",
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
        "date": 1789421121515,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13813",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5369",
            "unit": "Mbits/sec",
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
        "date": 1789507995137,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13984",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5208",
            "unit": "Mbits/sec",
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
        "date": 1789594480842,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14279",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5202",
            "unit": "Mbits/sec",
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
        "date": 1789683213448,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9426",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5244",
            "unit": "Mbits/sec",
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
        "date": 1789769862062,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8965",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5385",
            "unit": "Mbits/sec",
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
        "date": 1789855832109,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9249",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6015",
            "unit": "Mbits/sec",
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
        "date": 1789942109550,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10106",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6311",
            "unit": "Mbits/sec",
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
        "date": 1790029628585,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10018",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6217",
            "unit": "Mbits/sec",
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
        "date": 1790114288531,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9845",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6010",
            "unit": "Mbits/sec",
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
        "date": 1790200879478,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8732",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5439",
            "unit": "Mbits/sec",
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
        "date": 1790288037282,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10459",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5954",
            "unit": "Mbits/sec",
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
        "date": 1790374840944,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9972",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6210",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790461322247,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9570",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5056",
            "unit": "Mbits/sec",
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
        "date": 1790549420058,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10313",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6401",
            "unit": "Mbits/sec",
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
        "date": 1790635932264,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10069",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6420",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790721984401,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10507",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6222",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790809640051,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9321",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6276",
            "unit": "Mbits/sec",
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
        "date": 1790895517578,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10422",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6289",
            "unit": "Mbits/sec",
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
        "date": 1790984151988,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9504",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5300",
            "unit": "Mbits/sec",
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
        "date": 1791074092160,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10277",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6228",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1791159768453,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9930",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6263",
            "unit": "Mbits/sec",
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
        "date": 1791243576318,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9414",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5896",
            "unit": "Mbits/sec",
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
        "date": 1791329474019,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9904",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6588",
            "unit": "Mbits/sec",
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
        "date": 1791416403287,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8785",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5964",
            "unit": "Mbits/sec",
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
        "date": 1791505033339,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10084",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6083",
            "unit": "Mbits/sec",
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
        "date": 1791591295924,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9947",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5384",
            "unit": "Mbits/sec",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675734249,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9253",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6252",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762593091,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9643",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5714",
            "unit": "Mbits/sec",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852450904,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8778",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5292",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935809190,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9081",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5386",
            "unit": "Mbits/sec",
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
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022105460,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9507",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5888",
            "unit": "Mbits/sec",
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
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107555233,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8477",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5324",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194021029,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9564",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5152",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281048023,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10105",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6477",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367587218,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9013",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5222",
            "unit": "Mbits/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453979263,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9668",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6103",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540107373,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9934",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6228",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626477643,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10222",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6191",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713245850,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9296",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6081",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799781118,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9128",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6313",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883754740,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9074",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5256",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972348679,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10472",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5866",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059694059,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9735",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6459",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145747305,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9442",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6341",
            "unit": "Mbits/sec",
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
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233600146,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8761",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5208",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318622337,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using TCP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9888",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5871",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "udp_virtio_bw_rx": [
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
        "date": 1788338174226,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5065",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4243",
            "unit": "Mbits/sec",
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
        "date": 1788388864479,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4534",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3712",
            "unit": "Mbits/sec",
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
        "date": 1788471193529,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6557",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4374",
            "unit": "Mbits/sec",
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
        "date": 1788557602942,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7604",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4109",
            "unit": "Mbits/sec",
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
        "date": 1788643452310,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7013",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4183",
            "unit": "Mbits/sec",
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
        "date": 1788730141311,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7313",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4326",
            "unit": "Mbits/sec",
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
        "date": 1788816312608,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7604",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4938",
            "unit": "Mbits/sec",
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
        "date": 1788903439225,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7664",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4296",
            "unit": "Mbits/sec",
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
        "date": 1788989693612,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7506",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3864",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1789075830777,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4760",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4361",
            "unit": "Mbits/sec",
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
        "date": 1789162097379,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4720",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4227",
            "unit": "Mbits/sec",
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
        "date": 1789248874547,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4707",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4769",
            "unit": "Mbits/sec",
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
        "date": 1789334888659,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7708",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4985",
            "unit": "Mbits/sec",
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
        "date": 1789421120637,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5026",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4192",
            "unit": "Mbits/sec",
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
        "date": 1789507994948,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7500",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4295",
            "unit": "Mbits/sec",
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
        "date": 1789594480141,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4729",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4892",
            "unit": "Mbits/sec",
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
        "date": 1789683212715,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5836",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3206",
            "unit": "Mbits/sec",
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
        "date": 1789769861781,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5882",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3414",
            "unit": "Mbits/sec",
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
        "date": 1789855831836,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5757",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3411",
            "unit": "Mbits/sec",
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
        "date": 1789942109294,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5644",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3115",
            "unit": "Mbits/sec",
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
        "date": 1790029628213,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5969",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3443",
            "unit": "Mbits/sec",
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
        "date": 1790114288373,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5893",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3511",
            "unit": "Mbits/sec",
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
        "date": 1790200879171,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5796",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3374",
            "unit": "Mbits/sec",
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
        "date": 1790288036981,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5864",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3567",
            "unit": "Mbits/sec",
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
        "date": 1790374840639,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5786",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3214",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790461321968,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5683",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3280",
            "unit": "Mbits/sec",
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
        "date": 1790549419872,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5876",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3311",
            "unit": "Mbits/sec",
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
        "date": 1790635931993,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5942",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3382",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790721984206,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5835",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3253",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790809639681,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5665",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3335",
            "unit": "Mbits/sec",
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
        "date": 1790895517322,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5799",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3411",
            "unit": "Mbits/sec",
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
        "date": 1790984151637,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5917",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3196",
            "unit": "Mbits/sec",
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
        "date": 1791074091899,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5846",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3325",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1791159768305,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5928",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3273",
            "unit": "Mbits/sec",
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
        "date": 1791243576097,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6438",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3377",
            "unit": "Mbits/sec",
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
        "date": 1791329473833,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5902",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3287",
            "unit": "Mbits/sec",
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
        "date": 1791416403039,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5865",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3353",
            "unit": "Mbits/sec",
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
        "date": 1791505033058,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5751",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3288",
            "unit": "Mbits/sec",
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
        "date": 1791591295613,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5768",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3388",
            "unit": "Mbits/sec",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675734005,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5906",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3367",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762592834,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5965",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3273",
            "unit": "Mbits/sec",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852450602,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5738",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3500",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935808887,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5738",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3589",
            "unit": "Mbits/sec",
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
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022105140,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5867",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3357",
            "unit": "Mbits/sec",
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
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107554954,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5981",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3241",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194020819,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5924",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3384",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281047703,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5782",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3307",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367586955,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5864",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3405",
            "unit": "Mbits/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453979007,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5719",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3270",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540107099,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5850",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3298",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626477344,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5808",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3313",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713245633,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5906",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3408",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799780858,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5999",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3277",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883754525,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5673",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3368",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972348415,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5843",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3302",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059693752,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5717",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3257",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145747092,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5810",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3328",
            "unit": "Mbits/sec",
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
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233599982,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5790",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3297",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318621996,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5796",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3398",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793408019266,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 receiver performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5792",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3357",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "udp_virtio_bw_tx": [
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
        "date": 1788338173985,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4394",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9191",
            "unit": "Mbits/sec",
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
        "date": 1788388864246,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9989",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9592",
            "unit": "Mbits/sec",
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
        "date": 1788471193243,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10209",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8056",
            "unit": "Mbits/sec",
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
        "date": 1788557602686,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10210",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9382",
            "unit": "Mbits/sec",
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
        "date": 1788643452061,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9809",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9002",
            "unit": "Mbits/sec",
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
        "date": 1788730140666,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5542",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6640",
            "unit": "Mbits/sec",
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
        "date": 1788816312370,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5138",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9546",
            "unit": "Mbits/sec",
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
        "date": 1788903438423,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8507",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6800",
            "unit": "Mbits/sec",
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
        "date": 1788989692706,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5316",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6504",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1789075830565,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9876",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9353",
            "unit": "Mbits/sec",
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
        "date": 1789162096431,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4772",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9511",
            "unit": "Mbits/sec",
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
        "date": 1789248873634,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10238",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6575",
            "unit": "Mbits/sec",
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
        "date": 1789334888310,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9627",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9055",
            "unit": "Mbits/sec",
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
        "date": 1789421119539,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4328",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7205",
            "unit": "Mbits/sec",
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
        "date": 1789507994747,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10166",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8617",
            "unit": "Mbits/sec",
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
        "date": 1789594479947,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9887",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9211",
            "unit": "Mbits/sec",
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
        "date": 1789683211968,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6457",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5.27",
            "unit": "Mbits/sec",
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
        "date": 1789769861506,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6367",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "25.0",
            "unit": "Mbits/sec",
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
        "date": 1789855830478,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6362",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3.49",
            "unit": "Mbits/sec",
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
        "date": 1789942109045,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6430",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "16.4",
            "unit": "Mbits/sec",
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
        "date": 1790029627875,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6366",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3369",
            "unit": "Mbits/sec",
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
        "date": 1790114287426,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6367",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "258",
            "unit": "Mbits/sec",
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
        "date": 1790200878205,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6480",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "28.6",
            "unit": "Mbits/sec",
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
        "date": 1790288035994,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6416",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "12.0",
            "unit": "Mbits/sec",
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
        "date": 1790374839705,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6298",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9.57",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790461321646,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6412",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "19.1",
            "unit": "Mbits/sec",
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
        "date": 1790549419670,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6398",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3765",
            "unit": "Mbits/sec",
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
        "date": 1790635930814,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6560",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "38.4",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790721983980,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6497",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3617",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1790809639310,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6331",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4395",
            "unit": "Mbits/sec",
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
        "date": 1790895516307,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6474",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "307",
            "unit": "Mbits/sec",
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
        "date": 1790984150771,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6304",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9.22",
            "unit": "Mbits/sec",
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
        "date": 1791074091626,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6413",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1354",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
        "date": 1791159768111,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6456",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4406",
            "unit": "Mbits/sec",
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
        "date": 1791243575843,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6289",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3648",
            "unit": "Mbits/sec",
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
        "date": 1791329473145,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6066",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3209",
            "unit": "Mbits/sec",
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
        "date": 1791416401959,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6550",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3.50",
            "unit": "Mbits/sec",
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
        "date": 1791505032777,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6216",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "17.7",
            "unit": "Mbits/sec",
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
        "date": 1791591295301,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6442",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "29.3",
            "unit": "Mbits/sec",
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
          "id": "3a670449aa1ef6933c34c74b47eb4551c7aa5126",
          "message": "Add 0.19.0 release notes",
          "timestamp": "2026-10-10T10:22:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a670449aa1ef6933c34c74b47eb4551c7aa5126"
        },
        "date": 1791675733747,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6202",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "31.1",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "af0b77c8f11db24ba59b8d2cf29a189281b8e270",
          "message": "Fix stale frame metadata access via empty `Segment`s",
          "timestamp": "2026-10-11T06:55:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/af0b77c8f11db24ba59b8d2cf29a189281b8e270"
        },
        "date": 1791762592545,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6282",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1720",
            "unit": "Mbits/sec",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791852449506,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6439",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3.91",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "bmalum",
            "username": "bmalum",
            "email": "support@bmalum.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "745ebe54e63c35c8b8c49971b581e62e5d5ed569",
          "message": "Fix stale `IN` readiness of `TimerfdFile` after `set_time` and `read`\n\n`TimerfdFile::set_time` and `TimerfdFile::try_read` reset the expiration\ncounter but left the `Pollee`'s cached readiness untouched, so `epoll_wait`\nkept reporting a disarmed or drained timerfd as readable. ERTS arms a\ntimerfd before every `epoll_wait` and disarms it afterwards without\nreading it; on Asterinas its poll thread therefore spun at 100%.\n\nInvalidate the pollee wherever the counter is reset, so that the cached\nreadiness stays consistent with `check_io_events`. Add a regression test\nthat covers disarming, reading and rearming.",
          "timestamp": "2026-10-12T07:23:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ebe54e63c35c8b8c49971b581e62e5d5ed569"
        },
        "date": 1791935808609,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6395",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4.50",
            "unit": "Mbits/sec",
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
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792022104798,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6420",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2339",
            "unit": "Mbits/sec",
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
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792107554682,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6289",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "36.9",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792194020018,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6259",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "14.3",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792281046524,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6243",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "27.8",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "26cb04660e20053b7fb7a91cfd7ffd21b372839f",
          "message": "Unblocklist the gVisor chown permission-check test cases\n\n`ChownFilePermissionDenied` expects chown(2) to fail with `EPERM` when the\ncaller neither owns the file nor has `CAP_CHOWN`.  The preceding commit\nmakes the syscall enforce that, so the cases can be enabled.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-15T06:32:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/26cb04660e20053b7fb7a91cfd7ffd21b372839f"
        },
        "date": 1792367586721,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6270",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4493",
            "unit": "Mbits/sec",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3",
          "message": "Fix parent of dynamically created SysTree inodes",
          "timestamp": "2026-10-14T09:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/586d02fb8fea5e5a78680e46e3cb6a4611c4f4b3"
        },
        "date": 1792453977531,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6299",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "15.4",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "chinqrw@gmail.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "00a4842d976db6723b8224be2e57ac8105f13ee2",
          "message": "Show why `cargo osdk run --coverage` failed in `basic_coverage`\n\nSigned-off-by: Ruowen Qin <chinqrw@gmail.com>",
          "timestamp": "2026-10-18T05:30:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/00a4842d976db6723b8224be2e57ac8105f13ee2"
        },
        "date": 1792540106860,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6379",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2046",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792626477054,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6330",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3361",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Tonyyang0606",
            "username": "Tonyyang0606",
            "email": "146299767+Tonyyang0606@users.noreply.github.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600",
          "message": "Fix `F_DUPFD` to check `RLIMIT_NOFILE`\n\n`fcntl(F_DUPFD)` and `fcntl(F_DUPFD_CLOEXEC)` accepted any minimum FD.\nThey returned descriptors above the soft `RLIMIT_NOFILE` limit, and a\nlarge minimum such as `INT_MAX` grew the FD table until the heap\nallocation failed and the kernel aborted. Linux rejects a minimum FD\nthat is not below the limit with `EINVAL`, as `do_dup3` already does.",
          "timestamp": "2026-10-17T03:49:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/b6c7d55ce6552b4aa85d0b6d866f50cb9ce62600"
        },
        "date": 1792713244207,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6296",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2.07",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792799780591,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6354",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "886",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792883754330,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6637",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3037",
            "unit": "Mbits/sec",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ceb65e3f850096d30283137845ac01ad51dfcdaf",
          "message": "Fix PVH boot to parse VMM records without assuming alignment\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-21T02:06:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/ceb65e3f850096d30283137845ac01ad51dfcdaf"
        },
        "date": 1792972348131,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6417",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2701",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruowen Qin",
            "username": "chinrw",
            "email": "qinruowen@tlaic.ac.cn"
          },
          "committer": {
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "3ed4fc4374065dbee49a6c93f96703d1a3e9aad2",
          "message": "Remove the ineffective /github/home symlinks from the Docker images\n\nGitHub mounts a runner directory over /github/home in container jobs,\nso these links are never visible there, and nothing else uses them.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-10-26T09:27:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/3ed4fc4374065dbee49a6c93f96703d1a3e9aad2"
        },
        "date": 1793059692465,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6360",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "14.4",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793145746875,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6372",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2608",
            "unit": "Mbits/sec",
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
          "id": "e0d8b839f95f608c8a7e9c8942e01614a3b3b260",
          "message": "Fix vDSO realtime clock to keep sub-second offset\n\nSigned-off-by: Ray Lee <hburaylee@gmail.com>",
          "timestamp": "2026-10-06T14:33:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/e0d8b839f95f608c8a7e9c8942e01614a3b3b260"
        },
        "date": 1793233598920,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6237",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "463",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "1sh1ro",
            "username": "1sh1ro",
            "email": "2855020996@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "986c709158bfdc7bce535f0d03a5d93f7465dfe6",
          "message": "Allow `CAP_SYS_ADMIN` to remove another user's semaphore set\n\n`semctl(IPC_RMID)` only accepts a caller whose effective UID matches the\nowner or the creator of the set, so a privileged process cannot remove a\nset that another user created. The call site marks the check as\nincomplete:\n\n    // TODO: Consider capabilities in addition to UIDs.\n\nMove the decision into `IpcNamespace` and also accept a caller holding\n`CAP_SYS_ADMIN` in the IPC namespace's owning user namespace. `EPERM` is\nstill returned when neither the UID nor the capability allows removal.\n\nAdd a regression test that a privileged process removes a set owned by\nanother user, and that a user which is neither the owner nor privileged\nstill gets `EPERM`. The test also requires that a child which keeps root's\nother capabilities but drops `CAP_SYS_ADMIN` is refused, so the capability\ncannot stand in for a UID-zero bypass, and that the unprivileged owner can\nstill remove its own set.\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-26T09:26:10Z",
          "url": "https://github.com/asterinas/asterinas/commit/986c709158bfdc7bce535f0d03a5d93f7465dfe6"
        },
        "date": 1793318620418,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6509",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "39.5",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793408019012,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance using UDP (virtio-net)",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6497",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4292",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}