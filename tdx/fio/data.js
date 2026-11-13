window.BENCHMARK_DATA = {
  "lastUpdate": 1794611750602,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_seq_write_bw_no_iommu": [
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
        "date": 1788166769823,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3296",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3200",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788177154582,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2752",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2874",
            "unit": "MB/s",
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
        "date": 1788224709562,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3131",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3275",
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
          "id": "29b0f4bcf111efb590ee14768c624ecf1e81bbd7",
          "message": "Bump Docker image version to 0.18.1-20260901",
          "timestamp": "2026-09-01T07:37:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/29b0f4bcf111efb590ee14768c624ecf1e81bbd7"
        },
        "date": 1788301919816,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2414",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3419",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388973258,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2654",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3247",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788472833173,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2674",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2619",
            "unit": "MB/s",
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
        "date": 1788558827902,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3034",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2231",
            "unit": "MB/s",
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
        "date": 1788645454596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2700",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3277",
            "unit": "MB/s",
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
        "date": 1788731354345,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2787",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3132",
            "unit": "MB/s",
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
        "date": 1788817983147,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2617",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1943",
            "unit": "MB/s",
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
        "date": 1788904177468,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3159",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2975",
            "unit": "MB/s",
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
        "date": 1788990301702,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3411",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3272",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789077078724,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2352",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2101",
            "unit": "MB/s",
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
        "date": 1789163644351,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2805",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3128",
            "unit": "MB/s",
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
        "date": 1789250413721,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3192",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3213",
            "unit": "MB/s",
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
        "date": 1789336184715,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2156",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3212",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789422470974,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2613",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3233",
            "unit": "MB/s",
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
        "date": 1789509118535,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2781",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2912",
            "unit": "MB/s",
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
        "date": 1789595597708,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2692",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2592",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789685650295,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1486",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1728",
            "unit": "MB/s",
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
        "date": 1789771731234,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1388",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1623",
            "unit": "MB/s",
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
        "date": 1789857367955,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1458",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1512",
            "unit": "MB/s",
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
        "date": 1789943896652,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1396",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1535",
            "unit": "MB/s",
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
        "date": 1790030759089,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1489",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1651",
            "unit": "MB/s",
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
        "date": 1790116819583,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1529",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1311",
            "unit": "MB/s",
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
        "date": 1790202243850,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1482",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1476",
            "unit": "MB/s",
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
        "date": 1790289762747,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1430",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1579",
            "unit": "MB/s",
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
        "date": 1790376261335,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1375",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1535",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790462636610,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1511",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1703",
            "unit": "MB/s",
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809673933,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2030.077313",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5670.796624",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791848804315,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2059.740043",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5520.383796",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791850449966,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2059.740043",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5520.383796",
            "unit": "MB/s",
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
        "date": 1791931824966,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2037.100985",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5143.964065",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019995738,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2153.129892",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5716.707825",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105922284,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2160.748307",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5201.499956",
            "unit": "MB/s",
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
        "date": 1792192476049,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2254.604701",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5414.078858",
            "unit": "MB/s",
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
        "date": 1792277880646,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2127.736619",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5852.915318",
            "unit": "MB/s",
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
        "date": 1792365270131,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2273.250689",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "6000.425989",
            "unit": "MB/s",
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
        "date": 1792451670336,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2062.847854",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5060.205955",
            "unit": "MB/s",
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
        "date": 1792538075947,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2208.35169",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5727.890832",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792620521133,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2137.42073",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5550.124602",
            "unit": "MB/s",
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
        "date": 1792710613237,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2099.455977",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5437.085581",
            "unit": "MB/s",
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
        "date": 1792797345826,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2133.950625",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5193.257987",
            "unit": "MB/s",
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
        "date": 1792882050108,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2065.661107",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5380.426214",
            "unit": "MB/s",
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
        "date": 1792969589081,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2036.765595",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "4979.405044",
            "unit": "MB/s",
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
        "date": 1793057797570,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2269.958126",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5222.24013",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143811127,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "1964.73713",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5287.377168",
            "unit": "MB/s",
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
        "date": 1793231400176,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "1956.086123",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5532.675556",
            "unit": "MB/s",
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
        "date": 1793317200801,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2132.616236",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5097.426761",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407016785,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2191.900993",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5161.584155",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491706411,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2318.935445",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5730.601093",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577437307,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2294.263921",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5393.233411",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664965671,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2349.25321",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5796.432238",
            "unit": "MB/s",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747237747,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2174.112834",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "4952.376723",
            "unit": "MB/s",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839548092,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2069.270717",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5977.122609",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923524023,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2093.097395",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5049.367257",
            "unit": "MB/s",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354181357,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2048.339569",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5750.720531",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441356949,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2242.790969",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "4833.327594",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526492491,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2085.803552",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5239.742391",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611750101,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file write bandwidth on Linux",
            "value": "2160.874725",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file write bandwidth on Asterinas",
            "value": "5158.618867",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788166770015,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1105",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2194",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8976e39d3d8201b3d86c4081e0bf6192dd030548",
          "message": "Check access permissions with one call\n\n`sys_faccessat` used to invoke `Inode::check_permission` once per\nrequested access mode bit, repeating the credential and metadata\nlookups up to three times. Convert the `AccessMode` to a `Permission`\nfirst, then check all the required permissions in a single call.",
          "timestamp": "2026-08-28T09:20:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8976e39d3d8201b3d86c4081e0bf6192dd030548"
        },
        "date": 1788177154809,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1002",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2497",
            "unit": "MB/s",
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
        "date": 1788224709704,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1020",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2493",
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
          "id": "29b0f4bcf111efb590ee14768c624ecf1e81bbd7",
          "message": "Bump Docker image version to 0.18.1-20260901",
          "timestamp": "2026-09-01T07:37:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/29b0f4bcf111efb590ee14768c624ecf1e81bbd7"
        },
        "date": 1788301921213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1014",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2040",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e60087be133ce30657ca648415fa48f7d8d0c310",
          "message": "Fix Redis cross-compilation on ARM64 builders",
          "timestamp": "2026-09-02T06:20:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/e60087be133ce30657ca648415fa48f7d8d0c310"
        },
        "date": 1788388973544,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1020",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2535",
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
          "id": "864b9138be22d5436ef30692c0b2e5d35dafaef4",
          "message": "Adjust the symlink implementation for other file systems",
          "timestamp": "2026-09-02T02:12:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/864b9138be22d5436ef30692c0b2e5d35dafaef4"
        },
        "date": 1788472833378,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1021",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2517",
            "unit": "MB/s",
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
        "date": 1788558828111,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1023",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2512",
            "unit": "MB/s",
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
        "date": 1788645454989,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1009",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2507",
            "unit": "MB/s",
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
        "date": 1788731354637,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1010",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2532",
            "unit": "MB/s",
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
        "date": 1788817983913,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1012",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2501",
            "unit": "MB/s",
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
        "date": 1788904177728,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1062",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2521",
            "unit": "MB/s",
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
        "date": 1788990301838,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1016",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2524",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "ee1e5d12aa4104d1d0a02dc42be56ee684935c14",
          "message": "Fix various broadcast behavior",
          "timestamp": "2026-08-11T01:34:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/ee1e5d12aa4104d1d0a02dc42be56ee684935c14"
        },
        "date": 1789077079744,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1009",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2496",
            "unit": "MB/s",
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
        "date": 1789163644671,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1129",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2469",
            "unit": "MB/s",
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
        "date": 1789250414018,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1008",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2506",
            "unit": "MB/s",
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
        "date": 1789336184888,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1132",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2326",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "ab90d2941875c619a430fa6fa3b65df6d25e8bc7",
          "message": "Fix TDX retry issue",
          "timestamp": "2026-08-13T06:14:58Z",
          "url": "https://github.com/asterinas/asterinas/commit/ab90d2941875c619a430fa6fa3b65df6d25e8bc7"
        },
        "date": 1789422471202,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1159",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2309",
            "unit": "MB/s",
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
        "date": 1789509118781,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1009",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2215",
            "unit": "MB/s",
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
        "date": 1789595597922,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1142",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2521",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "id": "1ccefe036e97eb5026683c30f1b9872bb47dfe19",
          "message": "Temporarily disable the `gen_quote` regression test",
          "timestamp": "2026-09-17T10:47:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/1ccefe036e97eb5026683c30f1b9872bb47dfe19"
        },
        "date": 1789685651171,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "829",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2030",
            "unit": "MB/s",
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
        "date": 1789771731491,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "906",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2099",
            "unit": "MB/s",
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
        "date": 1789857368143,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "793",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1948",
            "unit": "MB/s",
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
        "date": 1789943896814,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "843",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2049",
            "unit": "MB/s",
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
        "date": 1790030759449,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "868",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2092",
            "unit": "MB/s",
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
        "date": 1790116820558,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "904",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2151",
            "unit": "MB/s",
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
        "date": 1790202244126,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "905",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2230",
            "unit": "MB/s",
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
        "date": 1790289762953,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "902",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2159",
            "unit": "MB/s",
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
        "date": 1790376261610,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "913",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2099",
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
          "id": "3eb661e12ebd7989db6fce53ca91bbfe97edda23",
          "message": "Bumped Docker image version to 0.18.1-20260926",
          "timestamp": "2026-09-25T15:23:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/3eb661e12ebd7989db6fce53ca91bbfe97edda23"
        },
        "date": 1790462636858,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "825",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2036",
            "unit": "MB/s",
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809674433,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10219.413873",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9926.843123",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791848805034,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10130.254348",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9784.0285",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791850450596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10130.254348",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9784.0285",
            "unit": "MB/s",
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
        "date": 1791931825646,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9810.74595",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9981.148331",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019996343,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9496.396494",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9361.771168",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105923328,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10191.647858",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9729.754749",
            "unit": "MB/s",
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
        "date": 1792192476464,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9857.375658",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9767.073196",
            "unit": "MB/s",
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
        "date": 1792277881033,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9722.530133",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9555.965501",
            "unit": "MB/s",
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
        "date": 1792365270806,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10234.764872",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9889.90216",
            "unit": "MB/s",
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
        "date": 1792451670962,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10214.810671",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9518.542198",
            "unit": "MB/s",
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
        "date": 1792538076421,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9290.1122",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9699.021294",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "f40d6222dc140cc278bd110757b52f3f0fb496aa",
          "message": "Add missing `.PHONY`",
          "timestamp": "2026-10-18T15:44:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/f40d6222dc140cc278bd110757b52f3f0fb496aa"
        },
        "date": 1792620521326,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10305.480131",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9644.967742",
            "unit": "MB/s",
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
        "date": 1792710613861,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10240.259356",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9732.837532",
            "unit": "MB/s",
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
        "date": 1792797346443,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9955.311677",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9706.266882",
            "unit": "MB/s",
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
        "date": 1792882050681,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10016.621303",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9689.080893",
            "unit": "MB/s",
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
        "date": 1792969589533,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9742.148794",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9717.004193",
            "unit": "MB/s",
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
        "date": 1793057798212,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9973.315547",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9679.612346",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143811763,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9033.287049",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9507.626631",
            "unit": "MB/s",
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
        "date": 1793231400601,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10205.258239",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9799.536784",
            "unit": "MB/s",
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
        "date": 1793317202336,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9778.271876",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9223.486348",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407017392,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10192.94808",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "10028.57495",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491707073,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9500.076959",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9981.829899",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577437796,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9999.949111",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9733.068216",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664966310,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10199.344329",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9875.410985",
            "unit": "MB/s",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747238254,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9932.610234",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9919.964534",
            "unit": "MB/s",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839549545,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9665.299427",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9422.619425",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923524715,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "9557.758548",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9478.308739",
            "unit": "MB/s",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354181988,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10089.255436",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9963.710687",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441357295,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10448.567381",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9451.654204",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526493265,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10475.756684",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9928.814427",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611750600,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (buffered I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=0",
        "display": true,
        "benches": [
          {
            "name": "Average buffered I/O file read bandwidth on Linux",
            "value": "10043.810607",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average buffered I/O file read bandwidth on Asterinas",
            "value": "9869.864073",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_write_bw_direct_no_iommu": [
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
        "date": 1790552560931,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1351",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1533",
            "unit": "MB/s",
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
        "date": 1790636549275,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1452",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1503",
            "unit": "MB/s",
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809674184,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1487.898018",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1627.854942",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791848804712,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1523.753894",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1581.406099",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791850450192,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1523.753894",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1581.406099",
            "unit": "MB/s",
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
        "date": 1791931825280,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1304.154859",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1701.563174",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019996015,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1358.381148",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1482.498513",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105922494,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1427.280466",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1314.358295",
            "unit": "MB/s",
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
        "date": 1792192476252,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1301.351118",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1664.326967",
            "unit": "MB/s",
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
        "date": 1792277880844,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1504.556739",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1528.434727",
            "unit": "MB/s",
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
        "date": 1792365270376,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1409.276481",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1575.233965",
            "unit": "MB/s",
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
        "date": 1792451670640,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1329.085534",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1509.05213",
            "unit": "MB/s",
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
        "date": 1792538076196,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1523.955883",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1643.740891",
            "unit": "MB/s",
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
        "date": 1792710613543,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1443.532507",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1646.978169",
            "unit": "MB/s",
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
        "date": 1792797346106,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1511.643246",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1464.140864",
            "unit": "MB/s",
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
        "date": 1792882050374,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1451.503695",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1395.199101",
            "unit": "MB/s",
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
        "date": 1792969589305,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1471.683445",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1431.156385",
            "unit": "MB/s",
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
        "date": 1793057797889,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1491.292541",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1504.927136",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143811442,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1553.574303",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1622.162607",
            "unit": "MB/s",
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
        "date": 1793231400382,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1654.816947",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1645.088707",
            "unit": "MB/s",
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
        "date": 1793317201030,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1300.836761",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1613.953356",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407017083,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1439.486386",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1458.009093",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491706742,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1449.058952",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1635.995632",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577437540,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1389.689845",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1509.712796",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664965973,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1572.582968",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1586.113747",
            "unit": "MB/s",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747238023,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1592.595075",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "2261.08621",
            "unit": "MB/s",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839548312,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1565.141666",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1680.716327",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923524351,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1579.17141",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1599.247418",
            "unit": "MB/s",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354181648,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1562.734744",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1463.045776",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441357119,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1500.895863",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1479.690189",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526492904,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1522.181098",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1447.396613",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611750322,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file write bandwidth on Linux",
            "value": "1590.582103",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file write bandwidth on Asterinas",
            "value": "1560.855838",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_read_bw_direct_no_iommu": [
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
        "date": 1790552561185,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "915",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2203",
            "unit": "MB/s",
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
        "date": 1790636549519,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "900",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2146",
            "unit": "MB/s",
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809674671,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "939.90267",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2291.094677",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791848805350,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "1048.492114",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2367.577046",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791850450848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "1048.492114",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2367.577046",
            "unit": "MB/s",
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
        "date": 1791931825979,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "898.201219",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2328.402638",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019996652,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "862.654848",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2335.050543",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105923605,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "954.456759",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2431.235458",
            "unit": "MB/s",
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
        "date": 1792192476677,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "970.027957",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2259.585283",
            "unit": "MB/s",
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
        "date": 1792277881236,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "941.433575",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2182.106777",
            "unit": "MB/s",
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
        "date": 1792365271064,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "1017.999829",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2440.169236",
            "unit": "MB/s",
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
        "date": 1792451671239,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "963.862392",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2228.327545",
            "unit": "MB/s",
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
        "date": 1792538076706,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "960.737666",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2211.057671",
            "unit": "MB/s",
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
        "date": 1792710614173,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "902.594709",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2246.666956",
            "unit": "MB/s",
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
        "date": 1792797346796,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "872.364565",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2530.188586",
            "unit": "MB/s",
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
        "date": 1792882050918,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "925.243724",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2202.113407",
            "unit": "MB/s",
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
        "date": 1792969589820,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "847.293363",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2217.024009",
            "unit": "MB/s",
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
        "date": 1793057798497,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "953.523536",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2401.246484",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143812175,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "887.747021",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2169.450592",
            "unit": "MB/s",
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
        "date": 1793231400816,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "948.123423",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2116.707746",
            "unit": "MB/s",
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
        "date": 1793317202561,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "844.147667",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2199.953363",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407017727,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "930.245381",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2208.184602",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491707410,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "985.116815",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2105.760722",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577438051,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "925.453437",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2229.44951",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664966596,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "935.603551",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2253.36729",
            "unit": "MB/s",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747238466,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "966.652395",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2210.176876",
            "unit": "MB/s",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839549730,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "949.140532",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2201.809323",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923525068,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "952.537884",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2269.211115",
            "unit": "MB/s",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354182337,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "872.742048",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2102.961052",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441357463,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "871.013691",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2173.707768",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526493621,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O file read bandwidth on Linux",
            "value": "952.139429",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O file read bandwidth on Asterinas",
            "value": "2257.309896",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "nvme_seq_write_bw_direct_no_iommu": [
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809673450,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1699.861236",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7393.34107",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791848803584,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1765.430081",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6498.170205",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791850449510,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1765.430081",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6498.170205",
            "unit": "MB/s",
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
        "date": 1791931824302,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1585.067991",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6435.91687",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019995106,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1764.3552",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7032.917646",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105921830,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1709.168509",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6824.011939",
            "unit": "MB/s",
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
        "date": 1792192475615,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1585.184508",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7722.118787",
            "unit": "MB/s",
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
        "date": 1792277880227,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1681.527172",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7430.31349",
            "unit": "MB/s",
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
        "date": 1792365269625,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1839.256683",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6473.507944",
            "unit": "MB/s",
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
        "date": 1792451668492,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1442.838032",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6608.793867",
            "unit": "MB/s",
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
        "date": 1792538075479,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1685.286375",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7633.483544",
            "unit": "MB/s",
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
        "date": 1792710612311,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1718.941852",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7547.448744",
            "unit": "MB/s",
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
        "date": 1792797345227,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1636.013908",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6401.974805",
            "unit": "MB/s",
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
        "date": 1792882049529,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "2008.986316",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6953.667064",
            "unit": "MB/s",
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
        "date": 1792969588446,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1759.396271",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6142.224155",
            "unit": "MB/s",
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
        "date": 1793057797013,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1691.423958",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6336.890343",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143810451,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1872.627076",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6291.592313",
            "unit": "MB/s",
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
        "date": 1793231399725,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1764.935899",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7270.826676",
            "unit": "MB/s",
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
        "date": 1793317200365,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1607.135674",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6540.951678",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407016180,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1829.614975",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7735.708196",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491705741,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "2083.504924",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7873.521162",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577436828,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1886.313615",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7282.392353",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664963841,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1415.800184",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7154.341533",
            "unit": "MB/s",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747237327,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1534.372099",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6657.34245",
            "unit": "MB/s",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839547665,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1985.886658",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6283.004561",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923523242,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1670.92986",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "7294.943682",
            "unit": "MB/s",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354180670,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1724.868344",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6874.982708",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441356599,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1711.235782",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6610.628856",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526491733,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1735.214385",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6504.849567",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611749560,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential writes (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O write bandwidth on Linux",
            "value": "1620.779756",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O write bandwidth on Asterinas",
            "value": "6801.54118",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "nvme_seq_read_bw_direct_no_iommu": [
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
          "id": "d3da4ffcf46e56f2fac39017dee98889a6cb7fc9",
          "message": "Test aarch64 on both x86 and ARM runners",
          "timestamp": "2026-10-12T03:17:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/d3da4ffcf46e56f2fac39017dee98889a6cb7fc9"
        },
        "date": 1791809673698,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1750.768867",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10190.913863",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791848803979,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1809.834563",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10251.017638",
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
          "id": "99d0495cc2ebcfa263de5c4e2073b56312e48cee",
          "message": "Polish the wording of the README introduction",
          "timestamp": "2026-10-12T12:09:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/99d0495cc2ebcfa263de5c4e2073b56312e48cee"
        },
        "date": 1791850449742,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1809.834563",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10251.017638",
            "unit": "MB/s",
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
        "date": 1791931824655,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1770.943268",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10302.082778",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792019995431,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1837.359408",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10259.070621",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "01acaa7eeed755a32fc658e7d732b080061b4872",
          "message": "Add regression tests",
          "timestamp": "2026-10-13T12:44:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/01acaa7eeed755a32fc658e7d732b080061b4872"
        },
        "date": 1792105922051,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1749.856615",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "9847.4038",
            "unit": "MB/s",
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
        "date": 1792192475833,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1804.119881",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "9812.455111",
            "unit": "MB/s",
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
        "date": 1792277880442,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1830.050906",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10446.648506",
            "unit": "MB/s",
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
        "date": 1792365269873,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1782.823515",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10258.273711",
            "unit": "MB/s",
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
        "date": 1792451670027,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1680.273808",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10353.79803",
            "unit": "MB/s",
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
        "date": 1792538075718,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1768.374282",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10450.674997",
            "unit": "MB/s",
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
        "date": 1792710612868,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1827.460949",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10287.256062",
            "unit": "MB/s",
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
        "date": 1792797345532,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1752.09006",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10325.518218",
            "unit": "MB/s",
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
        "date": 1792882049800,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1787.709831",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10199.533071",
            "unit": "MB/s",
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
        "date": 1792969588740,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1798.950453",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "9897.881744",
            "unit": "MB/s",
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
        "date": 1793057797282,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1842.077952",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10125.210747",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "5a55fa2264a589c115f39b1dafc402c49e26090a",
          "message": "Correct `chown`/`chgrp`'s `impl` block",
          "timestamp": "2026-10-27T05:31:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/5a55fa2264a589c115f39b1dafc402c49e26090a"
        },
        "date": 1793143810799,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1785.769984",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10394.094402",
            "unit": "MB/s",
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
        "date": 1793231399924,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1862.713722",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10290.915556",
            "unit": "MB/s",
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
        "date": 1793317200577,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1829.264482",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "9905.515301",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793407016479,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1773.396911",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10634.142505",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793491706075,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1743.638622",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10150.984488",
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
            "email": "344789491@qq.com"
          },
          "id": "7861bff17133b941cf89329917033541d14813ab",
          "message": "Fix some format issues in `time`",
          "timestamp": "2026-10-30T03:55:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/7861bff17133b941cf89329917033541d14813ab"
        },
        "date": 1793577437067,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1702.199313",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10367.943178",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Lei Li",
            "username": "hburaylee",
            "email": "lilei@tlaic.ac.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5fa2457fa8ffb20d4ac16accfeea0e6278b596a5",
          "message": "Fix virtio-mmio to skip unrecognized devices\n\nSigned-off-by: Lei Li <lilei@tlaic.ac.cn>",
          "timestamp": "2026-10-26T08:21:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/5fa2457fa8ffb20d4ac16accfeea0e6278b596a5"
        },
        "date": 1793664965363,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1868.879287",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10414.7092",
            "unit": "MB/s",
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
          "id": "2ea21cd392606e83760d470b5ed04ea136312f8d",
          "message": "Free disk space before running OSDK tests\n\nMount and remove unused host SDK directories in both OSDK test containers, matching the cleanup used by the other x86 CI jobs. This provides more disk space for OSDK builds and tests on GitHub-hosted runners.",
          "timestamp": "2026-11-02T07:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/2ea21cd392606e83760d470b5ed04ea136312f8d"
        },
        "date": 1793747237538,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1766.539293",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10284.141822",
            "unit": "MB/s",
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
          "id": "925f829a3e64bd91bd9b48435b81173dfbc2860c",
          "message": "Fix the development cache workflow path filter\n\nWatch the workflow itself instead of the old push_cachix_pkgs.yml path.\n\nSigned-off-by: Ruowen Qin <qinruowen@tlaic.ac.cn>",
          "timestamp": "2026-11-04T06:44:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/925f829a3e64bd91bd9b48435b81173dfbc2860c"
        },
        "date": 1793839547882,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1786.50398",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "9801.780714",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "6ea3fd644298cd4827f2c9f9c3018138bf9c03fa",
          "message": "Enforce the `noexec`, `nodev`, and `nosymfollow` mount flags\n\nThe three flags were parsed into `PerMountFlags` and reported to user\nspace through `Display` and `statfs`, but nothing consulted them:\n\n- `execve` of a file on a `noexec` mount succeeded, and so did an\n  executable `mmap` of it, a later `mprotect` that added the execute\n  permission, and an `X_OK` probe through the `access` family.\n- Opening a device special file on a `nodev` mount succeeded.\n- Path resolution followed symlinks on a `nosymfollow` mount.\n\nAdd the checks at the enforcement points: the executable open path, the\nnon-`O_PATH` device-node open funnel, the symlink following branch of the\npath resolver, the `X_OK` check of the `access` family, and the\nfile-backed `mmap` path.\n\nAn executable mapping of a file on a `noexec` mount is refused with\n`EPERM`. The other mappings do not get the execute permission, so a later\n`mprotect` cannot grant it either and fails with `EACCES`.\n\nPreserve `mmap` error precedence for `O_PATH` descriptors and update the\nexisting I/O tests to expect `EBADF`. Update the mount flag coverage in\nthe Linux Compatibility documentation.\n\nAdd a regression test that covers the three flags, including the mapping\nand access paths, and that removes its fixtures afterwards. Unblocklist\nthe gVisor tests that cover the `execve`, `mmap`, and `mprotect`\nbehavior.\n\nFixes #4062\n\nSigned-off-by: 1sh1ro <2855020996@qq.com>",
          "timestamp": "2026-10-29T16:11:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/6ea3fd644298cd4827f2c9f9c3018138bf9c03fa"
        },
        "date": 1793923523646,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1776.144153",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10479.940461",
            "unit": "MB/s",
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
          "id": "6da091ce419013c8cb0a982c992de274e3e26132",
          "message": "Make 'gpm_space.rs' architecture-agnostic",
          "timestamp": "2026-11-03T09:56:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/6da091ce419013c8cb0a982c992de274e3e26132"
        },
        "date": 1794354181027,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1712.0768",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "9998.145578",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "dragon",
            "username": "eternalcomet",
            "email": "mydragonos@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "344789491@qq.com"
          },
          "id": "37a5972d141a6799d80b23ceeaa8d2e6bcae883f",
          "message": "Check visible mountpoints without holding the `children` lock\n\nChecking whether a mountpoint is under the resolver's root walks its\nancestor dentries. After a concurrent rename and rmdir, one of these\ntemporary references may be the last one, and dropping it may sleep while\nreclaiming the inode. Clone the child mounts first and check them after\nreleasing the spin lock.\n\nFixes #4181",
          "timestamp": "2026-11-04T05:29:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/37a5972d141a6799d80b23ceeaa8d2e6bcae883f"
        },
        "date": 1794441356782,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1768.384768",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10291.009927",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "831edaa368c3a766ad581138750174cfc783525d",
          "message": "Prefer `device ID` over `device id`",
          "timestamp": "2026-11-10T09:31:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/831edaa368c3a766ad581138750174cfc783525d"
        },
        "date": 1794526492105,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1740.576811",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10250.430441",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4",
          "message": "Fix error checks in `set_priority`",
          "timestamp": "2026-11-13T06:07:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/a0de2258c56b03ba1a6aa417a05f10bdc0f54ff4"
        },
        "date": 1794611749761,
        "tool": "customBiggerIsBetter",
        "title": "[NVMe] The bandwidth of sequential reads (direct I/O, w/o IOMMU)",
        "description": "fio -filename=/dev/nvme0n1 -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average direct I/O read bandwidth on Linux",
            "value": "1833.437773",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average direct I/O read bandwidth on Asterinas",
            "value": "10436.026537",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}