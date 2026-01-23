window.BENCHMARK_DATA = {
  "lastUpdate": 1769208839386,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "t8_conc32_window10k": [
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
        "date": 1761353552334,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5317702",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5419986",
            "unit": "operations per second",
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
        "date": 1761432169666,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5992410",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5555573",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518696866,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5944622",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4876112",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761604858771,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4655766",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5102859",
            "unit": "operations per second",
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
        "date": 1761691479012,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5888696",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4668489",
            "unit": "operations per second",
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
        "date": 1761778456828,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5331931",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5433233",
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
          "id": "9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0",
          "message": "Mark `sync_dma_range` as `unsafe`",
          "timestamp": "2025-10-30T05:12:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0"
        },
        "date": 1761864884002,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5501491",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "44518",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1761951266468,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5286135",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4892569",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1762037838792,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4783250",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5213358",
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
          "id": "b447a605ed8566bbdca39a490881cd49e2cccaf6",
          "message": "Introduce PerMountFlags and support MS_REMOUNT",
          "timestamp": "2025-10-31T08:42:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/b447a605ed8566bbdca39a490881cd49e2cccaf6"
        },
        "date": 1762124686108,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5722381",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4636591",
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
          "id": "9b0b445e4a1a7d43f0542b95fa85b3d8554785d2",
          "message": "Enable some mount givsor tests",
          "timestamp": "2025-11-03T06:13:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/9b0b445e4a1a7d43f0542b95fa85b3d8554785d2"
        },
        "date": 1762214844299,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5452069",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5749087",
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
          "id": "ff021e0b89811c92069950a5a96ef41f9860de0b",
          "message": "Make `memfd` a sub module of `ramfs`",
          "timestamp": "2025-11-03T06:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/ff021e0b89811c92069950a5a96ef41f9860de0b"
        },
        "date": 1762301027348,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5510063",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5526402",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762419175117,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4545004",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5229999",
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
          "id": "e336882eee9d556480caafa267d097b7116c02c2",
          "message": "Do not drop `Arc<dyn FileLike>` in an incorrect context",
          "timestamp": "2025-11-06T11:31:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/e336882eee9d556480caafa267d097b7116c02c2"
        },
        "date": 1762481792830,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5814022",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4663146",
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
        "date": 1762968506547,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5861848",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5400902",
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
        "date": 1762990801714,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5837594",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4343543",
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
        "date": 1763080626336,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3721399",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4658462",
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
        "date": 1763233446856,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6417703",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5601436",
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
        "date": 1763315994957,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5675935",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5676392",
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
        "date": 1763598269907,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5409637",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5419795",
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
        "date": 1763684132562,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5632339",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5321004",
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
        "date": 1763770591018,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5818642",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5620710",
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
        "date": 1763857235443,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5771940",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5762440",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766011362455,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5690792",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5250550",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766096735974,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4554008",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3852823",
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
          "id": "cc0609bc81dfe4bec1767f4f5bf500f80210fdb2",
          "message": "Add 0.17.0 release notes",
          "timestamp": "2025-12-17T15:32:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cc0609bc81dfe4bec1767f4f5bf500f80210fdb2"
        },
        "date": 1766182017269,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5714474",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5488552",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766268300597,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3522712",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4741231",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766354690958,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3646749",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4325116",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766441524867,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3973029",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5642065",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766528048523,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5733906",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5106731",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766615160366,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4987004",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4347421",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766700379584,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3526506",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4074928",
            "unit": "operations per second",
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
        "date": 1766786932836,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4962440",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2835718",
            "unit": "operations per second",
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
        "date": 1766873400415,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5674117",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5394021",
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
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961853173,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5729221",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5749630",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767048352667,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4565201",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5328876",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767132436633,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4702327",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3608223",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767219016054,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5357870",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4451032",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767308604468,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4992629",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4113411",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767396121135,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3855618",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5229067",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767478384966,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5700401",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "1863235",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767565227618,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5493954",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4273155",
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
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652922222,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5501800",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5170795",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738984296,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5428298",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5522525",
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
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767825282758,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4043063",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3404484",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767912288542,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5717184",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3774648",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996809901,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3668365",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4612734",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082762267,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3409155",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4541109",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768169259053,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5540782",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2024217",
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
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768256047682,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5784374",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5428619",
            "unit": "operations per second",
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
        "date": 1768344709323,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5612797",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5336059",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768521278045,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5113775",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5236075",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768604317122,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4696185",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4462632",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689873912,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4231366",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5367009",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768776308426,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5303614",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5660305",
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
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768866608636,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5576004",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4608221",
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
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768949577124,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4937898",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5226716",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769037098348,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5655215",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5436952",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769122456075,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3471090",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5158312",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769208740845,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4014728",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4979019",
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
        "date": 1761353459613,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5755824",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5423304",
            "unit": "operations per second",
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
        "date": 1761432092843,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5593985",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5072508",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518618415,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5695053",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4766771",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761604780850,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5753849",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5600356",
            "unit": "operations per second",
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
        "date": 1761691399897,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5907849",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5483227",
            "unit": "operations per second",
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
        "date": 1761778377367,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5646003",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5545831",
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
          "id": "9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0",
          "message": "Mark `sync_dma_range` as `unsafe`",
          "timestamp": "2025-10-30T05:12:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0"
        },
        "date": 1761864803661,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3861560",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5072296",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1761951187221,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5832620",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5518669",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1762037759558,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5620268",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5046794",
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
          "id": "b447a605ed8566bbdca39a490881cd49e2cccaf6",
          "message": "Introduce PerMountFlags and support MS_REMOUNT",
          "timestamp": "2025-10-31T08:42:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/b447a605ed8566bbdca39a490881cd49e2cccaf6"
        },
        "date": 1762124588156,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4328606",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3196374",
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
          "id": "9b0b445e4a1a7d43f0542b95fa85b3d8554785d2",
          "message": "Enable some mount givsor tests",
          "timestamp": "2025-11-03T06:13:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/9b0b445e4a1a7d43f0542b95fa85b3d8554785d2"
        },
        "date": 1762214763769,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5419021",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4652525",
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
          "id": "ff021e0b89811c92069950a5a96ef41f9860de0b",
          "message": "Make `memfd` a sub module of `ramfs`",
          "timestamp": "2025-11-03T06:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/ff021e0b89811c92069950a5a96ef41f9860de0b"
        },
        "date": 1762300946684,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5332597",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4675415",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762419093370,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3439512",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5036458",
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
          "id": "e336882eee9d556480caafa267d097b7116c02c2",
          "message": "Do not drop `Arc<dyn FileLike>` in an incorrect context",
          "timestamp": "2025-11-06T11:31:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/e336882eee9d556480caafa267d097b7116c02c2"
        },
        "date": 1762481710807,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4389862",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3848139",
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
        "date": 1762968424240,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6085338",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5461105",
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
        "date": 1762990718323,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5582825",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3409527",
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
        "date": 1763080457637,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4881649",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4822156",
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
        "date": 1763233361777,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6258870",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5815835",
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
        "date": 1763315909202,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6151029",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5571648",
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
        "date": 1763598184437,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5066862",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5519019",
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
        "date": 1763684045476,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5630066",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3474773",
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
        "date": 1763770503574,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5729101",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5209575",
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
        "date": 1763857147159,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5546839",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4612783",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766011272726,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5102725",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5203327",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766096645830,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4530664",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5441588",
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
          "id": "cc0609bc81dfe4bec1767f4f5bf500f80210fdb2",
          "message": "Add 0.17.0 release notes",
          "timestamp": "2025-12-17T15:32:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cc0609bc81dfe4bec1767f4f5bf500f80210fdb2"
        },
        "date": 1766181927056,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5307223",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4993355",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766268210735,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5717956",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5274980",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766354599983,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5892389",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5413495",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766441430089,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5655485",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4933322",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766527956876,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5532400",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5423580",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766615068403,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3798547",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3926819",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766700284665,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5666432",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5364607",
            "unit": "operations per second",
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
        "date": 1766786841295,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4556576",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5159427",
            "unit": "operations per second",
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
        "date": 1766873307754,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3498996",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5243648",
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
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961761720,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5622293",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5165871",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767048254276,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5610671",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5282838",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767132344368,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5420703",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5429959",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767218922689,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5022610",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4287239",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767308512165,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5755283",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3698207",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767396026365,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5145674",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5312408",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767478291434,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5911892",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5225839",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767565113166,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5472190",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5200946",
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
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767652826553,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5299926",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5420018",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767738890046,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5452823",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5415049",
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
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767825188453,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5563811",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4920373",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767912172903,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3251742",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5495264",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996715131,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5694655",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5595589",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082666090,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4028704",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4309340",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768169163239,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4851004",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3330075",
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
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768255951887,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4018666",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4661135",
            "unit": "operations per second",
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
        "date": 1768344612067,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5738084",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5103222",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768521180697,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5709944",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5365578",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768604220157,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4834019",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4902642",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689776775,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5041578",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5423572",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768776210206,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5190074",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4872907",
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
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768866509514,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3555444",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3732677",
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
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768949478990,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4069305",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4590472",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769036996386,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5056477",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4795412",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769122357449,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4657789",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5427954",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769208641029,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 8 client threads, 32 concurrency, 20k window)",
        "description": "memaslap -t 30s -T 8 -c 32 -w 20k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4065945",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3680776",
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
        "date": 1761259708035,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4270211",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3608521",
            "unit": "operations per second",
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
        "date": 1761353645033,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5729046",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3758074",
            "unit": "operations per second",
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
        "date": 1761432246822,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4476821",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3478517",
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
          "id": "8a16aa3b860e17956ecae24396a2169477cb830b",
          "message": "Refine the `ProcessVm` structure",
          "timestamp": "2025-10-24T14:56:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/8a16aa3b860e17956ecae24396a2169477cb830b"
        },
        "date": 1761518775099,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5500468",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5131900",
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
          "id": "2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6",
          "message": "Add KDGKBMODE and KDSKBMODE ioctl support",
          "timestamp": "2025-10-23T13:28:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/2d74e69b4b7c294438cd4d1ac22bb87ee5edcca6"
        },
        "date": 1761604937922,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3676356",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5453647",
            "unit": "operations per second",
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
        "date": 1761691558206,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4764645",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3833981",
            "unit": "operations per second",
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
        "date": 1761778536013,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4925589",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5651929",
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
          "id": "9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0",
          "message": "Mark `sync_dma_range` as `unsafe`",
          "timestamp": "2025-10-30T05:12:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c70ac0f0a9f7411f5f136ce2f1b3db723f01ef0"
        },
        "date": 1761864964240,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4425284",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4609875",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1761951345861,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6092022",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5007597",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "63efd4891b36e49c466c8a5137820e4dcb878143",
          "message": "Fix Linux TDX network performance by unifying virtio-net-pci parameters",
          "timestamp": "2025-10-28T22:33:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/63efd4891b36e49c466c8a5137820e4dcb878143"
        },
        "date": 1762037917703,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3470201",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5531727",
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
          "id": "b447a605ed8566bbdca39a490881cd49e2cccaf6",
          "message": "Introduce PerMountFlags and support MS_REMOUNT",
          "timestamp": "2025-10-31T08:42:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/b447a605ed8566bbdca39a490881cd49e2cccaf6"
        },
        "date": 1762124782672,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5393024",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5529607",
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
          "id": "9b0b445e4a1a7d43f0542b95fa85b3d8554785d2",
          "message": "Enable some mount givsor tests",
          "timestamp": "2025-11-03T06:13:31Z",
          "url": "https://github.com/asterinas/asterinas/commit/9b0b445e4a1a7d43f0542b95fa85b3d8554785d2"
        },
        "date": 1762214924699,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5585896",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3337911",
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
          "id": "ff021e0b89811c92069950a5a96ef41f9860de0b",
          "message": "Make `memfd` a sub module of `ramfs`",
          "timestamp": "2025-11-03T06:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/ff021e0b89811c92069950a5a96ef41f9860de0b"
        },
        "date": 1762301107813,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4726868",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4986666",
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
          "id": "d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4",
          "message": "Update APICs' MMIO region sizes",
          "timestamp": "2025-10-28T15:53:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/d447fe0ca8ae25ceafcb30cdbe7559250be4fcb4"
        },
        "date": 1762419256133,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3828762",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "461153",
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
          "id": "e336882eee9d556480caafa267d097b7116c02c2",
          "message": "Do not drop `Arc<dyn FileLike>` in an incorrect context",
          "timestamp": "2025-11-06T11:31:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/e336882eee9d556480caafa267d097b7116c02c2"
        },
        "date": 1762481874412,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6114282",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5209592",
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
        "date": 1762968588771,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5544124",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4875754",
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
        "date": 1762990884904,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3561110",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5174889",
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
        "date": 1763080795361,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5595963",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4104361",
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
        "date": 1763233531757,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6316693",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "1348323",
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
        "date": 1763316080982,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5625050",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3252428",
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
        "date": 1763598355433,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6059375",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5346605",
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
        "date": 1763684219122,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3991770",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3412340",
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
        "date": 1763770678347,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5774475",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4631801",
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
        "date": 1763857323590,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5869552",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4161917",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766011451741,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5253710",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5668724",
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
          "id": "b8654ed1b9786c2bc088e3a7102aebbd6276433d",
          "message": "Add SCML for faccessat2",
          "timestamp": "2025-12-17T06:53:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/b8654ed1b9786c2bc088e3a7102aebbd6276433d"
        },
        "date": 1766096826722,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6036755",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "1884256",
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
          "id": "cc0609bc81dfe4bec1767f4f5bf500f80210fdb2",
          "message": "Add 0.17.0 release notes",
          "timestamp": "2025-12-17T15:32:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cc0609bc81dfe4bec1767f4f5bf500f80210fdb2"
        },
        "date": 1766182108301,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5953592",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4983770",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766268391369,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5851926",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "33845",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766354782530,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4447271",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3373345",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "9c4f644bd9287da1815a13115fbdfa914d8426f0",
          "message": "Replace caps_lock's load+store by fetch_xor\n\nIt's a bit less efficient, but solves atomic violation.",
          "timestamp": "2025-12-20T06:03:28Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c4f644bd9287da1815a13115fbdfa914d8426f0"
        },
        "date": 1766441621648,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3859231",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5081356",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766528140333,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5924086",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5691558",
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
          "id": "2c80e0c3a4bfcd3b877790e50b4f27d52613629b",
          "message": "Fix reachable unwrap in sys_arch_prctl by using the ? operator",
          "timestamp": "2025-12-22T06:43:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2c80e0c3a4bfcd3b877790e50b4f27d52613629b"
        },
        "date": 1766615252413,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4946196",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3053078",
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
          "id": "08be9252402cf14e14000035f2e9ad40fc2a6a1d",
          "message": "Update outdated compatibility data",
          "timestamp": "2025-12-21T15:25:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/08be9252402cf14e14000035f2e9ad40fc2a6a1d"
        },
        "date": 1766700471093,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3564289",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4007493",
            "unit": "operations per second",
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
        "date": 1766787025212,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6071961",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "26667",
            "unit": "operations per second",
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
        "date": 1766873492375,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4837915",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4187362",
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
          "id": "545efaa15516e62775d382406acc8091755eb1e3",
          "message": "Validate futex address alignment when waking robust futexes",
          "timestamp": "2025-12-28T02:55:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/545efaa15516e62775d382406acc8091755eb1e3"
        },
        "date": 1766961945046,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5545780",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3691550",
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
          "id": "033c240d8f52b4fae58801d8088c68d717c4194b",
          "message": "Fix madvise behavior",
          "timestamp": "2025-12-15T12:51:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/033c240d8f52b4fae58801d8088c68d717c4194b"
        },
        "date": 1767048446387,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5341391",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5892317",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "c91d383c91a5dccb057fa7f315657ed73ff8e0e6",
          "message": "Fix `offset: *mut Self` by `offset: usize` in SingleInstruction traits",
          "timestamp": "2025-12-30T03:05:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/c91d383c91a5dccb057fa7f315657ed73ff8e0e6"
        },
        "date": 1767132529299,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "6048028",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3504866",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1",
          "message": "Refactor the implementation of prlimit64",
          "timestamp": "2025-12-30T09:35:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/82ccfcd4c6f69d538e3fd62153d7245b7d2fcaa1"
        },
        "date": 1767219109305,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4076098",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5214462",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767308697075,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4189402",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5622463",
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
          "id": "26ac77c3713b79cc96508d83586d6434d5f173b7",
          "message": "Fix overflow panic in syscall `fcntl`",
          "timestamp": "2026-01-01T14:14:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/26ac77c3713b79cc96508d83586d6434d5f173b7"
        },
        "date": 1767396213383,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5451617",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2381330",
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
          "id": "eb76ded5fc4f56b6ebc469728acbc87bf56aec35",
          "message": "Simplify/Clarify `notify/mod.rs` code",
          "timestamp": "2025-12-26T03:28:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/eb76ded5fc4f56b6ebc469728acbc87bf56aec35"
        },
        "date": 1767478479272,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4519392",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4451082",
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
          "id": "4f62f2db8e355b67da71e6ac164e41fc727fc1ec",
          "message": "Use correct GPA range when accepting pages in `protect_gpa_tdvm_call()`",
          "timestamp": "2026-01-04T03:20:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/4f62f2db8e355b67da71e6ac164e41fc727fc1ec"
        },
        "date": 1767565341295,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5795622",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5301454",
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
          "id": "d7cefdb761de7ec55929fbb733104315a48b6b9d",
          "message": "Fix the DMA debug assertion regression",
          "timestamp": "2026-01-05T09:06:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/d7cefdb761de7ec55929fbb733104315a48b6b9d"
        },
        "date": 1767653016870,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5439071",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5312755",
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
          "id": "bb9b9795865c1ed7533b72c24265a6e2c736ec17",
          "message": "Support allocating inodes from `PseudoFs`",
          "timestamp": "2025-12-24T08:50:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb9b9795865c1ed7533b72c24265a6e2c736ec17"
        },
        "date": 1767739078000,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5682362",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "1435075",
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
          "id": "922b204280440203d0e5f9d6a06040df64d1e7e5",
          "message": "Move `Pipe` from `InodeImpl` to `Inode`",
          "timestamp": "2026-01-06T15:51:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/922b204280440203d0e5f9d6a06040df64d1e7e5"
        },
        "date": 1767825377596,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5598914",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5182613",
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
          "id": "8ace76978eadd74dd2952866c269ac88b41c577b",
          "message": "Add unit tests for DMA `alloc` and `alloc_uninit()`",
          "timestamp": "2026-01-07T11:30:57Z",
          "url": "https://github.com/asterinas/asterinas/commit/8ace76978eadd74dd2952866c269ac88b41c577b"
        },
        "date": 1767912403303,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3548655",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3359049",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1767996905509,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4770522",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "4296213",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768082858064,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3705919",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5479033",
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
          "id": "184e803869d93f7793d33dabcab508f0bec8b5e9",
          "message": "Use accurate build time only when publishing",
          "timestamp": "2026-01-08T09:49:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/184e803869d93f7793d33dabcab508f0bec8b5e9"
        },
        "date": 1768169354652,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5298306",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5580613",
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
          "id": "8335ba22d9973c64900013fd613bedb312bdcb80",
          "message": "Fix stack overflow handling in InitStackWriter by validating positions before writing",
          "timestamp": "2026-01-11T16:16:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/8335ba22d9973c64900013fd613bedb312bdcb80"
        },
        "date": 1768256143962,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4932778",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2989685",
            "unit": "operations per second",
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
        "date": 1768344806987,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5755844",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5538716",
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
          "id": "815cbf061b6d8ef0871f47f6237dda4eb32fe0d6",
          "message": "Switch to a new Docker image 0.17.0-20260114",
          "timestamp": "2026-01-15T03:55:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/815cbf061b6d8ef0871f47f6237dda4eb32fe0d6"
        },
        "date": 1768521374113,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5708068",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2862284",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768604414105,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5682982",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5479770",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768689970556,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "3772395",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2984000",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "2219e83f8e13e3f139b1120e8f46e76da61bcec1",
          "message": "Fix invalid mapping in mremap fast path",
          "timestamp": "2026-01-15T15:48:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/2219e83f8e13e3f139b1120e8f46e76da61bcec1"
        },
        "date": 1768776406652,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5723294",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "406446",
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
          "id": "77f0b0e746ce2df0066b007fb050fc5be0e86e47",
          "message": "Add missing safety comments in `boot_pt`",
          "timestamp": "2025-11-18T03:27:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/77f0b0e746ce2df0066b007fb050fc5be0e86e47"
        },
        "date": 1768866707176,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5728781",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "3508661",
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
          "id": "43f570730c852208a3160b6cfe3f98e0e29d995c",
          "message": "Fix new_fd validation to use resource limits in `do_dup3`",
          "timestamp": "2026-01-20T07:25:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/43f570730c852208a3160b6cfe3f98e0e29d995c"
        },
        "date": 1768949675131,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "4072001",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5398288",
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
          "id": "5792b497224e383feff3e17fbaec619c028e27d6",
          "message": "Fix error handling in OverlayFsType by propagating lookup errors",
          "timestamp": "2026-01-21T05:14:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5792b497224e383feff3e17fbaec619c028e27d6"
        },
        "date": 1769037197676,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5682226",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "2896614",
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
          "id": "b7ae7383102800529a079f00f92178511d35b8f3",
          "message": "Cleanup: Only maintain children for directory dentries",
          "timestamp": "2026-01-08T09:48:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/b7ae7383102800529a079f00f92178511d35b8f3"
        },
        "date": 1769122555762,
        "tool": "customBiggerIsBetter",
        "title": "Memaslap 10% SET and 90% GET throughput (virtio-net, 16 client threads, 64 concurrency, 10k window)",
        "description": "memaslap -t 30s -T 16 -c 64 -w 10k -S 1s",
        "display": true,
        "benches": [
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Linux",
            "value": "5600717",
            "unit": "operations per second",
            "extra": "linux_result"
          },
          {
            "name": "Average OPS of SET and GET over virtio-net between Host Linux and Guest Asterinas",
            "value": "5603389",
            "unit": "operations per second",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}