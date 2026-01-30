window.BENCHMARK_DATA = {
  "lastUpdate": 1769741821340,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_seq_write_bw": [
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
      },
      {
        "commit": {
          "author": {
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "cef527f372afeb78b5648048f7aaa631207e59bc",
          "message": "Open /dev/tty should also increase pty slave count",
          "timestamp": "2025-11-07T10:04:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/cef527f372afeb78b5648048f7aaa631207e59bc"
        },
        "date": 1762931196957,
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
            "value": "1308",
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
          "id": "0615e6f6424ead8e12d73670428149fa7270571f",
          "message": "Unify all syscall titles in SCML to level 3",
          "timestamp": "2025-11-11T02:09:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/0615e6f6424ead8e12d73670428149fa7270571f"
        },
        "date": 1762972824832,
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
            "value": "1152",
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
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762995065705,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1146",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1160",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "73c0f34947e37216500ad6166f10b579d00b850a",
          "message": "Remove `Arc` guards of locks that have no users",
          "timestamp": "2025-02-05T01:50:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/73c0f34947e37216500ad6166f10b579d00b850a"
        },
        "date": 1763091396342,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1864",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1373",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763237718894,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1636",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1148",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763327173064,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1113",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1351",
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
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763602773391,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
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
            "value": "1329",
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763695961940,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1158",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1262",
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
          "id": "2034055f90607f67f04de044ee88dd52a488d612",
          "message": "Bump the Docker image version",
          "timestamp": "2025-11-21T06:53:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/2034055f90607f67f04de044ee88dd52a488d612"
        },
        "date": 1763775705298,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1191",
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
        "date": 1763861839453,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "983",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1336",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766016117923,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1249",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1357",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766101608735,
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
            "value": "1351",
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
          "id": "cc0609bc81dfe4bec1767f4f5bf500f80210fdb2",
          "message": "Add 0.17.0 release notes",
          "timestamp": "2025-12-17T15:32:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cc0609bc81dfe4bec1767f4f5bf500f80210fdb2"
        },
        "date": 1766187165052,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1810",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1316",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766273123814,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1108",
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
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766359544800,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1008",
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
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766446415056,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1070",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1278",
            "unit": "MB/s",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766532935972,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "998",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766620049402,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1829",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766705305062,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1044",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1219",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766791815993,
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
            "value": "1328",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766878309849,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "980",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1391",
            "unit": "MB/s",
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
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766966743997,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1050",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1239",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767053377079,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1256",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1174",
            "unit": "MB/s",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767137355682,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "989",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1330",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767223972569,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1714",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1437",
            "unit": "MB/s",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767313538825,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "978",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "326",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767483386453,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1189",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "327",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767571267523,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1312",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "328",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767658007848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1035",
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
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767743997503,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1016",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1206",
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
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767830329727,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "983",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1273",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767918310994,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1813",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1390",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768001865474,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1323",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768087810383,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1332",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1368",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768174343260,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1206",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768261170115,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1129",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1312",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768349869331,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1329",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1345",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768526324902,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "981",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768609841752,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1814",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1285",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768695023443,
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
            "value": "1344",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768781520029,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1135",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1222",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768872119233,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1304",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1348",
            "unit": "MB/s",
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
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768954803957,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1299",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1326",
            "unit": "MB/s",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769042665063,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1185",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1467",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769127729192,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1840",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1346",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769214036319,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1267",
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
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769300172986,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1001",
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
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769386723152,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "985",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1332",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769473522207,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1000",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1328",
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
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769561471410,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1794",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769647733142,
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
            "value": "1404",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769741399771,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1797",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1255",
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
        "date": 1762485922271,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2118",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1283",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "cef527f372afeb78b5648048f7aaa631207e59bc",
          "message": "Open /dev/tty should also increase pty slave count",
          "timestamp": "2025-11-07T10:04:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/cef527f372afeb78b5648048f7aaa631207e59bc"
        },
        "date": 1762931279159,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2284",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1386",
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
          "id": "0615e6f6424ead8e12d73670428149fa7270571f",
          "message": "Unify all syscall titles in SCML to level 3",
          "timestamp": "2025-11-11T02:09:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/0615e6f6424ead8e12d73670428149fa7270571f"
        },
        "date": 1762972991032,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
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
            "value": "1129",
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
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762995232246,
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
            "value": "1204",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "73c0f34947e37216500ad6166f10b579d00b850a",
          "message": "Remove `Arc` guards of locks that have no users",
          "timestamp": "2025-02-05T01:50:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/73c0f34947e37216500ad6166f10b579d00b850a"
        },
        "date": 1763091566069,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2095",
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
        "date": 1763237890573,
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
            "value": "1218",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763327346812,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1975",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1261",
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
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763602945288,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
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
            "value": "1300",
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763696136804,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2155",
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
        "date": 1763775880827,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2139",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1139",
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
          "id": "2034055f90607f67f04de044ee88dd52a488d612",
          "message": "Bump the Docker image version",
          "timestamp": "2025-11-21T06:53:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/2034055f90607f67f04de044ee88dd52a488d612"
        },
        "date": 1763862015712,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2377",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1134",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766016297649,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2116",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766101788841,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1100",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1315",
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
          "id": "cc0609bc81dfe4bec1767f4f5bf500f80210fdb2",
          "message": "Add 0.17.0 release notes",
          "timestamp": "2025-12-17T15:32:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cc0609bc81dfe4bec1767f4f5bf500f80210fdb2"
        },
        "date": 1766187345694,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1692",
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
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766273305468,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
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
            "value": "1286",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766359727528,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2172",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1298",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766446596216,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1774",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766533118933,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1903",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766620232553,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "992",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1207",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766705489150,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2197",
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
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766791999368,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "994",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1243",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766878493532,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1127",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1175",
            "unit": "MB/s",
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
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766966928882,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1945",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767053590056,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2026",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1245",
            "unit": "MB/s",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767137540702,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2111",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1312",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767224158859,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2147",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767658198612,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "956",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1307",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767744185497,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1344",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1329",
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
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767830521529,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2153",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1184",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767918543131,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1770",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1353",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768002056128,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2251",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1274",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768088000944,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1491",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1283",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768174534753,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1752",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1322",
            "unit": "MB/s",
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
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768261362862,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2066",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1249",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768350062954,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
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
            "value": "1375",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768526519540,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2247",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768610038376,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2225",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768695218775,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1435",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1202",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768781716264,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "993",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768955000725,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1696",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1209",
            "unit": "MB/s",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769042867065,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1851",
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
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769127927066,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2123",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1333",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769214235853,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1845",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1311",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769300374928,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1750",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1281",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769386923203,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2244",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1313",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769473723327,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2250",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769561674123,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2240",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1333",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769647936848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1804",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1308",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769741720100,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1714",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1298",
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
      },
      {
        "commit": {
          "author": {
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "cef527f372afeb78b5648048f7aaa631207e59bc",
          "message": "Open /dev/tty should also increase pty slave count",
          "timestamp": "2025-11-07T10:04:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/cef527f372afeb78b5648048f7aaa631207e59bc"
        },
        "date": 1762931114784,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1155",
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
          "id": "0615e6f6424ead8e12d73670428149fa7270571f",
          "message": "Unify all syscall titles in SCML to level 3",
          "timestamp": "2025-11-11T02:09:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/0615e6f6424ead8e12d73670428149fa7270571f"
        },
        "date": 1762972742072,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "739",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1204",
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
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762994982365,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1106",
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
        "date": 1763091311471,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1895",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763237633078,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1444",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1554",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763327086246,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1434",
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
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763602687670,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1898",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1197",
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763695874479,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1034",
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
        "date": 1763775616518,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "795",
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
        "date": 1763861751454,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1667",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766016028114,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "992",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1415",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766101513705,
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
            "value": "1384",
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
          "id": "cc0609bc81dfe4bec1767f4f5bf500f80210fdb2",
          "message": "Add 0.17.0 release notes",
          "timestamp": "2025-12-17T15:32:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cc0609bc81dfe4bec1767f4f5bf500f80210fdb2"
        },
        "date": 1766187074720,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "999",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1450",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766273033439,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1012",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1312",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766359453541,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1495",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766446324689,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1085",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1562",
            "unit": "MB/s",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766532844917,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1010",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1465",
            "unit": "MB/s",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766619948798,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1799",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1377",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766705212003,
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
            "value": "1367",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766791724294,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "992",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1519",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766878217555,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1777",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1458",
            "unit": "MB/s",
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
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766966651663,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1310",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767053283305,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1698",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1478",
            "unit": "MB/s",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767137262720,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1281",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767223878920,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1001",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1359",
            "unit": "MB/s",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767313445559,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1792",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "620",
            "unit": "MB/s",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767401493047,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1298",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "570",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767483292667,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1307",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "552",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767571153290,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "976",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "590",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767657912826,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1804",
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
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767743903512,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1791",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1523",
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
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767830234383,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1806",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1455",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767918194373,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1797",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1455",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768001770139,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "983",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1499",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768087715335,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1017",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768174247367,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "999",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1543",
            "unit": "MB/s",
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
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768261071921,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1308",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1437",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768349772330,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1057",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1546",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768526228390,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1392",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768609744213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1803",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768694926312,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "978",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1427",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768781421765,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1140",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768872019457,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1089",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1545",
            "unit": "MB/s",
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
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768954705676,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1799",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1336",
            "unit": "MB/s",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769042565848,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1795",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1450",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769127629717,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1300",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769213936142,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "999",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1508",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769300071438,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1026",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1484",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769386622906,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "945",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1371",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769473421549,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1352",
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
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769561369277,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1232",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769647631962,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1796",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769741297405,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1796",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1491",
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
        "date": 1762972907825,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1503",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1404",
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
          "id": "f57a54aa0dce4905b70023077a68a0b32cd6ab04",
          "message": "Remove `AccessMode` from `InodeHandle`",
          "timestamp": "2025-11-12T09:47:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/f57a54aa0dce4905b70023077a68a0b32cd6ab04"
        },
        "date": 1762995148964,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2154",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1486",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "73c0f34947e37216500ad6166f10b579d00b850a",
          "message": "Remove `Arc` guards of locks that have no users",
          "timestamp": "2025-02-05T01:50:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/73c0f34947e37216500ad6166f10b579d00b850a"
        },
        "date": 1763091481373,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2098",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1549",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763237804466,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1404",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1481",
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
          "id": "35ab40057a50c587fcfca9a13110e2db55178b45",
          "message": "Support stopping states in `proc/pid/stat`",
          "timestamp": "2025-11-13T13:32:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/35ab40057a50c587fcfca9a13110e2db55178b45"
        },
        "date": 1763327260177,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1867",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1447",
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
          "id": "623fbb5e5b44dd25110fc18c43f9bf70a42548bc",
          "message": "Enable some givsor tests",
          "timestamp": "2025-11-17T02:52:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/623fbb5e5b44dd25110fc18c43f9bf70a42548bc"
        },
        "date": 1763602859489,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2285",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1303",
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
          "id": "76c7752130316e9ce605aada13d49a09463ac0f7",
          "message": "Separate inode and opened file types for BlockFile",
          "timestamp": "2025-11-20T10:55:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/76c7752130316e9ce605aada13d49a09463ac0f7"
        },
        "date": 1763696049387,
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
            "value": "1341",
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
          "id": "2034055f90607f67f04de044ee88dd52a488d612",
          "message": "Bump the Docker image version",
          "timestamp": "2025-11-21T06:53:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/2034055f90607f67f04de044ee88dd52a488d612"
        },
        "date": 1763775793112,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2301",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1175",
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
          "id": "2034055f90607f67f04de044ee88dd52a488d612",
          "message": "Bump the Docker image version",
          "timestamp": "2025-11-21T06:53:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/2034055f90607f67f04de044ee88dd52a488d612"
        },
        "date": 1763861927657,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2042",
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
            "name": "jiangjianfeng",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766016207350,
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
            "value": "1424",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766101698877,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1876",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tate.thl@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "cc0609bc81dfe4bec1767f4f5bf500f80210fdb2",
          "message": "Add 0.17.0 release notes",
          "timestamp": "2025-12-17T15:32:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cc0609bc81dfe4bec1767f4f5bf500f80210fdb2"
        },
        "date": 1766187255397,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1658",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1402",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766273214887,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1974",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1337",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766359636509,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1702",
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
            "name": "zjp",
            "username": "zjp-CN",
            "email": "jiping_zhou@foxmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766446506034,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1701",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1441",
            "unit": "MB/s",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766533027018,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1842",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766620141087,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1837",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1438",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766705397451,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2250",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1441",
            "unit": "MB/s",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766791907740,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1804",
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
            "name": "rikosellic",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e",
          "message": "Remove WeakRef and NonNullPtr impl for Weak<T>",
          "timestamp": "2025-12-26T08:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/c4e8bf2c21aa8ad4b272dbc1d68461fa3b42004e"
        },
        "date": 1766878401524,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2044",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1477",
            "unit": "MB/s",
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
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766966836366,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1079",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1433",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767053496979,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1767",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1539",
            "unit": "MB/s",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767137448560,
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
            "value": "1438",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767224065654,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1978",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767658103409,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1252",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1456",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767744091548,
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
            "value": "1438",
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
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767830425377,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1909",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1438",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767918427257,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2169",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1527",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768001960998,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1771",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1409",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768087905608,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1043",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1480",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768174438885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1880",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1382",
            "unit": "MB/s",
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
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768261266400,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1737",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1454",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "wyt8",
            "username": "wyt8",
            "email": "2253457010@qq.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "4fa2b55e47884bb53b2048cb2fa55c10ba7b1716",
          "message": "Place the heap after bss segment",
          "timestamp": "2026-01-12T03:21:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/4fa2b55e47884bb53b2048cb2fa55c10ba7b1716"
        },
        "date": 1768349966243,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1952",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1431",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768526422794,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1682",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1456",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768609940454,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1430",
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
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768695121108,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2231",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1354",
            "unit": "MB/s",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768781618271,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1948",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768872219414,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2120",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1438",
            "unit": "MB/s",
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
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768954902213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2077",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1355",
            "unit": "MB/s",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769042764779,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2208",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1409",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769127827928,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1823",
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
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769214135992,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2132",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1455",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769300273669,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1433",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1478",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769386823311,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2138",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1422",
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
          "id": "e44d7e2b12d25e5928670f976fd085bcb1888c8b",
          "message": "Update the intro section of README",
          "timestamp": "2026-01-24T01:42:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/e44d7e2b12d25e5928670f976fd085bcb1888c8b"
        },
        "date": 1769473622947,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2035",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1451",
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
          "id": "5499436807f423e4d0cffce4afce303008ea95c2",
          "message": "Add regression tests for recent issues",
          "timestamp": "2026-01-25T17:37:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/5499436807f423e4d0cffce4afce303008ea95c2"
        },
        "date": 1769561572685,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1692",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1317",
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
          "id": "a599a2c563b857c8c69ab512d3405c8fa6a12932",
          "message": "Disable BAR decoding when sizing PCI BARs",
          "timestamp": "2026-01-23T06:52:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/a599a2c563b857c8c69ab512d3405c8fa6a12932"
        },
        "date": 1769647835505,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1847",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1436",
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
          "id": "6d2ff13a639b9fff72842869cfd78f78ff21bbf2",
          "message": "Redirect serial output if `hvc0` is on",
          "timestamp": "2026-01-29T02:31:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/6d2ff13a639b9fff72842869cfd78f78ff21bbf2"
        },
        "date": 1769741615149,
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
            "value": "1345",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}