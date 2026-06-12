window.BENCHMARK_DATA = {
  "lastUpdate": 1781302816687,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_seq_write_bw": [
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1772155060083,
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
            "value": "1358",
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
          "id": "e94a000b1193238b8e8e0ee237451c0fcf13150b",
          "message": "Enable regression tests",
          "timestamp": "2026-02-12T14:40:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e94a000b1193238b8e8e0ee237451c0fcf13150b"
        },
        "date": 1772240681802,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1031",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1362",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772329718859,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1303",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1305",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772414573069,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1819",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1339",
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
          "id": "232b269a4d91bb06dc53c0cb386705b3c17ef102",
          "message": "Fetch Codex output schema from upstream default branch via API\n\nThe previous approach used `git checkout \"$BASE_SHA\"` to restore the\nschema file, which fails when the PR's base SHA predates the addition\nof the schema file. Instead, fetch it from the upstream default branch\nvia the GitHub Contents API. This always works regardless of git\nhistory and ensures the schema matches the workflow version on main.",
          "timestamp": "2026-03-02T09:47:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/232b269a4d91bb06dc53c0cb386705b3c17ef102"
        },
        "date": 1772502522856,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1328",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1397",
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
          "id": "6f684acdc934c8a2342ea7e00421b770f04d3cf1",
          "message": "Accept should panic expected string as a substring",
          "timestamp": "2026-03-03T07:05:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f684acdc934c8a2342ea7e00421b770f04d3cf1"
        },
        "date": 1772595923978,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
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
            "value": "1261",
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
          "id": "b205cacbf5e5406172e5c7216179c2559c091885",
          "message": "Adjust some comments in OSTD",
          "timestamp": "2026-01-29T11:15:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/b205cacbf5e5406172e5c7216179c2559c091885"
        },
        "date": 1772673311928,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1241",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1213",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772765528906,
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
            "value": "1338",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772845439230,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1086",
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
            "name": "Wang Siyuan",
            "username": "vvvvsv",
            "email": "wsy@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1772935058861,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
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
            "value": "1338",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1773017857705,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1020",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1341",
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
          "id": "c2edfe05cb3f7edc161a305f097139c6791a30a9",
          "message": "Modify the related import paths",
          "timestamp": "2026-03-09T04:51:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2edfe05cb3f7edc161a305f097139c6791a30a9"
        },
        "date": 1773105261449,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1018",
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
            "name": "Chengjun Chen",
            "username": "cchanging",
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773191621704,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1176",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1307",
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
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773279644558,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1297",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1179",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773367925151,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1944",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773453075145,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1342",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1286",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773537098287,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1291",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1315",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773623290716,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1324",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1320",
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
          "id": "30cb622701490622d218618a969e3d2d4d09fd27",
          "message": "Switch to a new Docker image 0.17.1-20260308",
          "timestamp": "2026-03-16T01:59:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/30cb622701490622d218618a969e3d2d4d09fd27"
        },
        "date": 1773713064843,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1319",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1233",
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
          "id": "e4bcaabb395dae631e41797383125b52ad3d2eb2",
          "message": "Add `Memcpy`/`Memset` trait framework for typed memory copies\n\nIntroduce `Memcpy` and `Memset` traits that generalize the classic C\n`memcpy` and `memset` for typed memory categories (`KernelMem`,\n`UserMem`). The compiler resolves the correct implementation at\nmonomorphization time, making it straightforward to add new memory\ncategories (e.g., `IoMem` for TDX-aware I/O memory in #2958) without\na combinatorial explosion of function names.\n\nReplace the four ad-hoc private functions (`memcpy`, `memcpy_fallible`,\n`memset`, `memset_fallible`) in `mm/io/mod.rs` with trait-dispatched\nfree functions `memcpy::<Dst, Src>()` and `memset::<Dst>()`, and\nupdate all call sites including `io_util` imports across the kernel\ncrate.",
          "timestamp": "2026-03-10T07:19:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4bcaabb395dae631e41797383125b52ad3d2eb2"
        },
        "date": 1775305368895,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1199",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1486",
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
          "id": "cef80ffa56d85e546144aa1747485ff2bc406da0",
          "message": "Add OSTD soundness analysis section to the book\n\nAdd 8 new pages to the mdBook under \"Soundness Analysis\" covering the\nsystematic soundness argument for OSTD: what soundness means, sensitivity\nclassification, safe physical memory management, safe user-kernel\ninteractions, safe kernel-peripheral interactions, safe kernel logic,\nand safe policy injection.",
          "timestamp": "2026-03-17T08:20:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/cef80ffa56d85e546144aa1747485ff2bc406da0"
        },
        "date": 1775307528394,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1066",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1470",
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
          "id": "36b3d34a924db299e7c9955d0d6f7439f41c69f3",
          "message": "Bumped Docker image version to 0.17.1-20260319",
          "timestamp": "2026-03-19T05:52:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/36b3d34a924db299e7c9955d0d6f7439f41c69f3"
        },
        "date": 1775314276760,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1018",
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
        "date": 1775322615616,
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
            "value": "1322",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775331497755,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1122",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775346122186,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1279",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1440",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775350084011,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1272",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1462",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "36c47a260a7d8a08bed978128f9cd6eef21c9ed8",
          "message": "Add the regression test for mountstats",
          "timestamp": "2026-03-19T10:54:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/36c47a260a7d8a08bed978128f9cd6eef21c9ed8"
        },
        "date": 1775366140738,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1202",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1254",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6f23eaa160d4c0813438295844a7530eae59d4db",
          "message": "Enable more futex tests of ltp/gvisor",
          "timestamp": "2026-03-20T10:59:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f23eaa160d4c0813438295844a7530eae59d4db"
        },
        "date": 1775373005761,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1228",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fb002a5760024554aa8f23f3c73b1ea513cde724",
          "message": "Update comments and variable orders",
          "timestamp": "2026-03-29T15:17:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/fb002a5760024554aa8f23f3c73b1ea513cde724"
        },
        "date": 1775381320826,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1126",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1154",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775437118516,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1316",
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
        "date": 1775524268800,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1220",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1501",
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
          "id": "c2ea64841a56953ac4c1b815b341dad44457ca27",
          "message": "Update book to document `init` fallback paths when `init` parameter is omitted",
          "timestamp": "2026-04-07T08:04:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2ea64841a56953ac4c1b815b341dad44457ca27"
        },
        "date": 1775616152756,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1333",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1225",
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
          "id": "ac432d5f147df65249f4f89d0edd24db2bfa98af",
          "message": "Make rootfs display the correct fs_type",
          "timestamp": "2026-04-08T09:48:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac432d5f147df65249f4f89d0edd24db2bfa98af"
        },
        "date": 1775699779814,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2141",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1397",
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
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775786009115,
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
            "value": "1215",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775872193061,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1324",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1474",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775958183644,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2116",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1350",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776144646100,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
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
            "value": "1231",
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
          "id": "72e395b5f10d6f87e28b813adb40370c7b54cbb4",
          "message": "Bump libflate to 2.3.0 and replace core2",
          "timestamp": "2026-04-15T11:25:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/72e395b5f10d6f87e28b813adb40370c7b54cbb4"
        },
        "date": 1776306970404,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1309",
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
        "date": 1776484334590,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2182",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1268",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776563903108,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1857",
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
        "date": 1776654912792,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1294",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1260",
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
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776737690215,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2141",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1177",
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
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776824093169,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1265",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1236",
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1776994683987,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2182",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2873",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777166693465,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1994",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2611",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "0f367b7f899b76fb2a9d718d56875f16280f9fde",
          "message": "Fix `make ktest` regression",
          "timestamp": "2026-04-27T02:47:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/0f367b7f899b76fb2a9d718d56875f16280f9fde"
        },
        "date": 1777340456833,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2175",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2132",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779932045078,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2150",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2126",
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780018614244,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1589",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2100",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780104989031,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1617",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2504",
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
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780276462426,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2007",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3017",
            "unit": "MB/s",
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
        "date": 1780364808462,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2802",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3046",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00",
          "message": "Update 0.18.0 demo video link in README.md",
          "timestamp": "2026-06-03T14:26:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00"
        },
        "date": 1780539758586,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2017",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1424",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "356dd6e71bc6f980f7ebb883728f2e912553bb12",
          "message": "Refine store and push benchmark results processes",
          "timestamp": "2026-05-28T08:41:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/356dd6e71bc6f980f7ebb883728f2e912553bb12"
        },
        "date": 1780697593999,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1051",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1305",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780783484694,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2205",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1364",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780869735126,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1142",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1411",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780957949499,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
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
            "value": "1436",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781043338471,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1861",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1303",
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
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781130742741,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1334",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1274",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781217367637,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1283",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1380",
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
          "id": "5e0f46c2bf979aa764528b0767fd6893c65d3739",
          "message": "Increase LTP timeout multiplier for slow CI machines",
          "timestamp": "2026-06-11T09:31:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e0f46c2bf979aa764528b0767fd6893c65d3739"
        },
        "date": 1781302816685,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1098",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1398",
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
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771808093305,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1801",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1328",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771896817679,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1813",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1258",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771983610153,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1884",
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
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1772072402248,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2122",
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
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1772155285561,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "998",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1343",
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
          "id": "e94a000b1193238b8e8e0ee237451c0fcf13150b",
          "message": "Enable regression tests",
          "timestamp": "2026-02-12T14:40:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e94a000b1193238b8e8e0ee237451c0fcf13150b"
        },
        "date": 1772240908955,
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
            "value": "1341",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772329943799,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2183",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1246",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772414858884,
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
            "value": "1293",
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
          "id": "232b269a4d91bb06dc53c0cb386705b3c17ef102",
          "message": "Fetch Codex output schema from upstream default branch via API\n\nThe previous approach used `git checkout \"$BASE_SHA\"` to restore the\nschema file, which fails when the PR's base SHA predates the addition\nof the schema file. Instead, fetch it from the upstream default branch\nvia the GitHub Contents API. This always works regardless of git\nhistory and ensures the schema matches the workflow version on main.",
          "timestamp": "2026-03-02T09:47:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/232b269a4d91bb06dc53c0cb386705b3c17ef102"
        },
        "date": 1772502751382,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1835",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f684acdc934c8a2342ea7e00421b770f04d3cf1",
          "message": "Accept should panic expected string as a substring",
          "timestamp": "2026-03-03T07:05:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f684acdc934c8a2342ea7e00421b770f04d3cf1"
        },
        "date": 1772596197394,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2080",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1228",
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
          "id": "b205cacbf5e5406172e5c7216179c2559c091885",
          "message": "Adjust some comments in OSTD",
          "timestamp": "2026-01-29T11:15:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/b205cacbf5e5406172e5c7216179c2559c091885"
        },
        "date": 1772673548510,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "879",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772765838865,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1835",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1289",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772845667293,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1944",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1206",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1773018090787,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2112",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1199",
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
          "id": "c2edfe05cb3f7edc161a305f097139c6791a30a9",
          "message": "Modify the related import paths",
          "timestamp": "2026-03-09T04:51:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2edfe05cb3f7edc161a305f097139c6791a30a9"
        },
        "date": 1773105494853,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
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
            "value": "1341",
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
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773191853814,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2089",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1264",
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
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773279877741,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1759",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773453354390,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1499",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773537333678,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1775",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1285",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773623526560,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "889",
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
        "date": 1773713302091,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2229",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1241",
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
          "id": "e4bcaabb395dae631e41797383125b52ad3d2eb2",
          "message": "Add `Memcpy`/`Memset` trait framework for typed memory copies\n\nIntroduce `Memcpy` and `Memset` traits that generalize the classic C\n`memcpy` and `memset` for typed memory categories (`KernelMem`,\n`UserMem`). The compiler resolves the correct implementation at\nmonomorphization time, making it straightforward to add new memory\ncategories (e.g., `IoMem` for TDX-aware I/O memory in #2958) without\na combinatorial explosion of function names.\n\nReplace the four ad-hoc private functions (`memcpy`, `memcpy_fallible`,\n`memset`, `memset_fallible`) in `mm/io/mod.rs` with trait-dispatched\nfree functions `memcpy::<Dst, Src>()` and `memset::<Dst>()`, and\nupdate all call sites including `io_util` imports across the kernel\ncrate.",
          "timestamp": "2026-03-10T07:19:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4bcaabb395dae631e41797383125b52ad3d2eb2"
        },
        "date": 1775305605317,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2165",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1331",
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
          "id": "cef80ffa56d85e546144aa1747485ff2bc406da0",
          "message": "Add OSTD soundness analysis section to the book\n\nAdd 8 new pages to the mdBook under \"Soundness Analysis\" covering the\nsystematic soundness argument for OSTD: what soundness means, sensitivity\nclassification, safe physical memory management, safe user-kernel\ninteractions, safe kernel-peripheral interactions, safe kernel logic,\nand safe policy injection.",
          "timestamp": "2026-03-17T08:20:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/cef80ffa56d85e546144aa1747485ff2bc406da0"
        },
        "date": 1775307815249,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1477",
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
        "date": 1775314511289,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1328",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1359",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775322853655,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2209",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1401",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775331737418,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1268",
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
        "date": 1775346359204,
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
            "value": "1389",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775350322948,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2103",
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
        "date": 1775366380383,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2261",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1368",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6f23eaa160d4c0813438295844a7530eae59d4db",
          "message": "Enable more futex tests of ltp/gvisor",
          "timestamp": "2026-03-20T10:59:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f23eaa160d4c0813438295844a7530eae59d4db"
        },
        "date": 1775373246780,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1366",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1401",
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
          "id": "fb002a5760024554aa8f23f3c73b1ea513cde724",
          "message": "Update comments and variable orders",
          "timestamp": "2026-03-29T15:17:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/fb002a5760024554aa8f23f3c73b1ea513cde724"
        },
        "date": 1775381563461,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1866",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1385",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775437360132,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1103",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1393",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775524513506,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1806",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1412",
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
          "id": "ac432d5f147df65249f4f89d0edd24db2bfa98af",
          "message": "Make rootfs display the correct fs_type",
          "timestamp": "2026-04-08T09:48:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac432d5f147df65249f4f89d0edd24db2bfa98af"
        },
        "date": 1775700028135,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2096",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
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
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775786255613,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1879",
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
        "date": 1775872441803,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2093",
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
        "date": 1775958432847,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1379",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1403",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776144898176,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1706",
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
        "date": 1776307224351,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2043",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1350",
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
          "id": "5b93972e6fd61efcca18772431a92313005d2d6a",
          "message": "Remove all manually-written log prefixes\n\nRemove bracket-style prefixes ([IOAPIC], [sys_getpid], [Task entry],\netc.) and text prefixes that duplicate what __log_prefix already\nprovides (VirtIO Input:, IOMMU, PCI device, etc.) across the kernel\nsyscalls, virtio, PCI, IOMMU, IRQ, UART, ACPI, timer, mlsdisk, input,\nand rootfs subsystems.",
          "timestamp": "2026-04-16T03:42:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b93972e6fd61efcca18772431a92313005d2d6a"
        },
        "date": 1776484598468,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1422",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1226",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776564159599,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1416",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1222",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776655430141,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1746",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1332",
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
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776737950192,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "960",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1273",
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
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776824362737,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2031",
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
        "date": 1776994956769,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3048",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1985",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777166968378,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3016",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2241",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "0f367b7f899b76fb2a9d718d56875f16280f9fde",
          "message": "Fix `make ktest` regression",
          "timestamp": "2026-04-27T02:47:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/0f367b7f899b76fb2a9d718d56875f16280f9fde"
        },
        "date": 1777340734712,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3024",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2408",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779932319885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3329",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2442",
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780018893276,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3159",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2082",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780105266124,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1911",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2490",
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
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780276754910,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3130",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2381",
            "unit": "MB/s",
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
        "date": 1780365030649,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3089",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2318",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00",
          "message": "Update 0.18.0 demo video link in README.md",
          "timestamp": "2026-06-03T14:26:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00"
        },
        "date": 1780540042891,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1748",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1284",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "356dd6e71bc6f980f7ebb883728f2e912553bb12",
          "message": "Refine store and push benchmark results processes",
          "timestamp": "2026-05-28T08:41:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/356dd6e71bc6f980f7ebb883728f2e912553bb12"
        },
        "date": 1780697594780,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2013",
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
        "date": 1780783485772,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2277",
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
        "date": 1780869735787,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1484",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1332",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780957949791,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1481",
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
        "date": 1781043338853,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2032",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1372",
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
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781130743540,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2192",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1294",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781217368572,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2131",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1324",
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
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1772154947236,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "970",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1372",
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
          "id": "e94a000b1193238b8e8e0ee237451c0fcf13150b",
          "message": "Enable regression tests",
          "timestamp": "2026-02-12T14:40:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e94a000b1193238b8e8e0ee237451c0fcf13150b"
        },
        "date": 1772240569522,
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
            "value": "1389",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772329606292,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1054",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1473",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772414439741,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1504",
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
          "id": "232b269a4d91bb06dc53c0cb386705b3c17ef102",
          "message": "Fetch Codex output schema from upstream default branch via API\n\nThe previous approach used `git checkout \"$BASE_SHA\"` to restore the\nschema file, which fails when the PR's base SHA predates the addition\nof the schema file. Instead, fetch it from the upstream default branch\nvia the GitHub Contents API. This always works regardless of git\nhistory and ensures the schema matches the workflow version on main.",
          "timestamp": "2026-03-02T09:47:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/232b269a4d91bb06dc53c0cb386705b3c17ef102"
        },
        "date": 1772502409164,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "995",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1381",
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
          "id": "6f684acdc934c8a2342ea7e00421b770f04d3cf1",
          "message": "Accept should panic expected string as a substring",
          "timestamp": "2026-03-03T07:05:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f684acdc934c8a2342ea7e00421b770f04d3cf1"
        },
        "date": 1772595787380,
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
            "value": "1543",
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
          "id": "b205cacbf5e5406172e5c7216179c2559c091885",
          "message": "Adjust some comments in OSTD",
          "timestamp": "2026-01-29T11:15:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/b205cacbf5e5406172e5c7216179c2559c091885"
        },
        "date": 1772673193627,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1326",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772765413519,
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
            "value": "1525",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772845324378,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1590",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1772934943707,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1170",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1457",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1773017741402,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1263",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1462",
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
          "id": "c2edfe05cb3f7edc161a305f097139c6791a30a9",
          "message": "Modify the related import paths",
          "timestamp": "2026-03-09T04:51:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2edfe05cb3f7edc161a305f097139c6791a30a9"
        },
        "date": 1773105145266,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1798",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1529",
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
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773191505593,
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
            "value": "1366",
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
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773279361797,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1419",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773367805780,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1825",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1397",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773452934868,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "963",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1470",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773536980776,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1432",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773623172049,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1293",
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
        "date": 1773712945565,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1289",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1502",
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
          "id": "e4bcaabb395dae631e41797383125b52ad3d2eb2",
          "message": "Add `Memcpy`/`Memset` trait framework for typed memory copies\n\nIntroduce `Memcpy` and `Memset` traits that generalize the classic C\n`memcpy` and `memset` for typed memory categories (`KernelMem`,\n`UserMem`). The compiler resolves the correct implementation at\nmonomorphization time, making it straightforward to add new memory\ncategories (e.g., `IoMem` for TDX-aware I/O memory in #2958) without\na combinatorial explosion of function names.\n\nReplace the four ad-hoc private functions (`memcpy`, `memcpy_fallible`,\n`memset`, `memset_fallible`) in `mm/io/mod.rs` with trait-dispatched\nfree functions `memcpy::<Dst, Src>()` and `memset::<Dst>()`, and\nupdate all call sites including `io_util` imports across the kernel\ncrate.",
          "timestamp": "2026-03-10T07:19:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4bcaabb395dae631e41797383125b52ad3d2eb2"
        },
        "date": 1775305251113,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1095",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1447",
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
          "id": "cef80ffa56d85e546144aa1747485ff2bc406da0",
          "message": "Add OSTD soundness analysis section to the book\n\nAdd 8 new pages to the mdBook under \"Soundness Analysis\" covering the\nsystematic soundness argument for OSTD: what soundness means, sensitivity\nclassification, safe physical memory management, safe user-kernel\ninteractions, safe kernel-peripheral interactions, safe kernel logic,\nand safe policy injection.",
          "timestamp": "2026-03-17T08:20:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/cef80ffa56d85e546144aa1747485ff2bc406da0"
        },
        "date": 1775307386043,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1076",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1649",
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
          "id": "36b3d34a924db299e7c9955d0d6f7439f41c69f3",
          "message": "Bumped Docker image version to 0.17.1-20260319",
          "timestamp": "2026-03-19T05:52:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/36b3d34a924db299e7c9955d0d6f7439f41c69f3"
        },
        "date": 1775314159503,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2048",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1378",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775322495151,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1116",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1515",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775331378340,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1092",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1630",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775346003932,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "975",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1341",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775349964831,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2174",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1655",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "36c47a260a7d8a08bed978128f9cd6eef21c9ed8",
          "message": "Add the regression test for mountstats",
          "timestamp": "2026-03-19T10:54:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/36c47a260a7d8a08bed978128f9cd6eef21c9ed8"
        },
        "date": 1775366021206,
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
            "value": "1602",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6f23eaa160d4c0813438295844a7530eae59d4db",
          "message": "Enable more futex tests of ltp/gvisor",
          "timestamp": "2026-03-20T10:59:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f23eaa160d4c0813438295844a7530eae59d4db"
        },
        "date": 1775372885109,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1187",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1424",
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
          "id": "fb002a5760024554aa8f23f3c73b1ea513cde724",
          "message": "Update comments and variable orders",
          "timestamp": "2026-03-29T15:17:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/fb002a5760024554aa8f23f3c73b1ea513cde724"
        },
        "date": 1775381200101,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2132",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1607",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775436998213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2035",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1496",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775524146258,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1054",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1564",
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
          "id": "c2ea64841a56953ac4c1b815b341dad44457ca27",
          "message": "Update book to document `init` fallback paths when `init` parameter is omitted",
          "timestamp": "2026-04-07T08:04:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2ea64841a56953ac4c1b815b341dad44457ca27"
        },
        "date": 1775616029985,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2009",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1295",
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
          "id": "ac432d5f147df65249f4f89d0edd24db2bfa98af",
          "message": "Make rootfs display the correct fs_type",
          "timestamp": "2026-04-08T09:48:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac432d5f147df65249f4f89d0edd24db2bfa98af"
        },
        "date": 1775699655444,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1263",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775785886099,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2049",
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
        "date": 1775872067662,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1294",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1369",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775958058427,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1276",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1309",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776144520409,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1292",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1293",
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
          "id": "72e395b5f10d6f87e28b813adb40370c7b54cbb4",
          "message": "Bump libflate to 2.3.0 and replace core2",
          "timestamp": "2026-04-15T11:25:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/72e395b5f10d6f87e28b813adb40370c7b54cbb4"
        },
        "date": 1776306843816,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "960",
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
        "date": 1776484203852,
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
            "value": "1469",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776563774736,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1046",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1507",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776654654319,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1452",
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
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776737560280,
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
            "value": "1525",
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
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776823957885,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
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
            "value": "1439",
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1776994546109,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "4541",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2346",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777166554835,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2178",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3205",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "0f367b7f899b76fb2a9d718d56875f16280f9fde",
          "message": "Fix `make ktest` regression",
          "timestamp": "2026-04-27T02:47:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/0f367b7f899b76fb2a9d718d56875f16280f9fde"
        },
        "date": 1777340318826,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2184",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3316",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779931907645,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "3400",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3399",
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780018474375,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1800",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2251",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780104850381,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1614",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "3276",
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
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780276315778,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1563",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2984",
            "unit": "MB/s",
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
        "date": 1780364696544,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1603",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "2561",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00",
          "message": "Update 0.18.0 demo video link in README.md",
          "timestamp": "2026-06-03T14:26:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00"
        },
        "date": 1780539616480,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2021",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1761",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "356dd6e71bc6f980f7ebb883728f2e912553bb12",
          "message": "Refine store and push benchmark results processes",
          "timestamp": "2026-05-28T08:41:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/356dd6e71bc6f980f7ebb883728f2e912553bb12"
        },
        "date": 1780697593334,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1285",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1416",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780783484432,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1747",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1693",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780869734941,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1074",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1681",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780957949346,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1150",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1547",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781043338262,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1130",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1457",
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
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781130742536,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2074",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1718",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781217366987,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "984",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1622",
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
          "id": "5e0f46c2bf979aa764528b0767fd6893c65d3739",
          "message": "Increase LTP timeout multiplier for slow CI machines",
          "timestamp": "2026-06-11T09:31:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/5e0f46c2bf979aa764528b0767fd6893c65d3739"
        },
        "date": 1781302816487,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1124",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1420",
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
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1771983499767,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1827",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1384",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Xinyi Wan",
            "username": "rikosellic",
            "email": "64517311+rikosellic@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "97bc17fa58ff2d3be555c48be8973e4d1c924b94",
          "message": "Fix typos in ostd documentation",
          "timestamp": "2026-02-18T22:48:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/97bc17fa58ff2d3be555c48be8973e4d1c924b94"
        },
        "date": 1772155172915,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1813",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "e94a000b1193238b8e8e0ee237451c0fcf13150b",
          "message": "Enable regression tests",
          "timestamp": "2026-02-12T14:40:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/e94a000b1193238b8e8e0ee237451c0fcf13150b"
        },
        "date": 1772240795245,
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
            "value": "1441",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772329831112,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2108",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1426",
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
          "id": "ad90114bbc9b581673b46589c52248f108480676",
          "message": "Bump docker version references to 0.17.0-20260227",
          "timestamp": "2026-02-28T06:11:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad90114bbc9b581673b46589c52248f108480676"
        },
        "date": 1772414710980,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
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
            "value": "1401",
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
          "id": "232b269a4d91bb06dc53c0cb386705b3c17ef102",
          "message": "Fetch Codex output schema from upstream default branch via API\n\nThe previous approach used `git checkout \"$BASE_SHA\"` to restore the\nschema file, which fails when the PR's base SHA predates the addition\nof the schema file. Instead, fetch it from the upstream default branch\nvia the GitHub Contents API. This always works regardless of git\nhistory and ensures the schema matches the workflow version on main.",
          "timestamp": "2026-03-02T09:47:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/232b269a4d91bb06dc53c0cb386705b3c17ef102"
        },
        "date": 1772502637057,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "855",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1542",
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
          "id": "6f684acdc934c8a2342ea7e00421b770f04d3cf1",
          "message": "Accept should panic expected string as a substring",
          "timestamp": "2026-03-03T07:05:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f684acdc934c8a2342ea7e00421b770f04d3cf1"
        },
        "date": 1772596060708,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1675",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b205cacbf5e5406172e5c7216179c2559c091885",
          "message": "Adjust some comments in OSTD",
          "timestamp": "2026-01-29T11:15:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/b205cacbf5e5406172e5c7216179c2559c091885"
        },
        "date": 1772673430462,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2010",
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
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772765644573,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2264",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1412",
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
          "id": "670ce782c2732b10da6d7d2e060f93a4fd6b29b0",
          "message": "Bump docker image version to 0.17.1",
          "timestamp": "2026-03-05T04:20:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/670ce782c2732b10da6d7d2e060f93a4fd6b29b0"
        },
        "date": 1772845552788,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1725",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1487",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1772935174097,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1177",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d4c092f9ad08489b06b0cf236e711b1137fa92ef",
          "message": "Rename `Vmar::access_remote` to `Vmar::access_alien`",
          "timestamp": "2026-03-05T09:17:17Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4c092f9ad08489b06b0cf236e711b1137fa92ef"
        },
        "date": 1773017974033,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1912",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1418",
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
          "id": "c2edfe05cb3f7edc161a305f097139c6791a30a9",
          "message": "Modify the related import paths",
          "timestamp": "2026-03-09T04:51:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/c2edfe05cb3f7edc161a305f097139c6791a30a9"
        },
        "date": 1773105378172,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1359",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1376",
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
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773191738218,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2022",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1376",
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
            "email": "33800552+cchanging@users.noreply.github.com"
          },
          "id": "417d58dbac51a71cbe02b5615a7198184371ebd6",
          "message": "Remove duplicate re-exports",
          "timestamp": "2026-03-09T12:25:37Z",
          "url": "https://github.com/asterinas/asterinas/commit/417d58dbac51a71cbe02b5615a7198184371ebd6"
        },
        "date": 1773279761031,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1727",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1339",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773368044675,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
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
            "value": "1472",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773453214750,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1694",
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
            "name": "Tao Su",
            "username": "taosue",
            "email": "st498824@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773537216232,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2129",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1379",
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
          "id": "3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5",
          "message": "Bumped Docker image version to 0.17.1-20260308",
          "timestamp": "2026-03-08T05:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/3f3ad398cd8ec9016aa4f32cd18e44a56cc4a2c5"
        },
        "date": 1773623408893,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1916",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1413",
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
          "id": "30cb622701490622d218618a969e3d2d4d09fd27",
          "message": "Switch to a new Docker image 0.17.1-20260308",
          "timestamp": "2026-03-16T01:59:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/30cb622701490622d218618a969e3d2d4d09fd27"
        },
        "date": 1773713183619,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1671",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1465",
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
          "id": "e4bcaabb395dae631e41797383125b52ad3d2eb2",
          "message": "Add `Memcpy`/`Memset` trait framework for typed memory copies\n\nIntroduce `Memcpy` and `Memset` traits that generalize the classic C\n`memcpy` and `memset` for typed memory categories (`KernelMem`,\n`UserMem`). The compiler resolves the correct implementation at\nmonomorphization time, making it straightforward to add new memory\ncategories (e.g., `IoMem` for TDX-aware I/O memory in #2958) without\na combinatorial explosion of function names.\n\nReplace the four ad-hoc private functions (`memcpy`, `memcpy_fallible`,\n`memset`, `memset_fallible`) in `mm/io/mod.rs` with trait-dispatched\nfree functions `memcpy::<Dst, Src>()` and `memset::<Dst>()`, and\nupdate all call sites including `io_util` imports across the kernel\ncrate.",
          "timestamp": "2026-03-10T07:19:03Z",
          "url": "https://github.com/asterinas/asterinas/commit/e4bcaabb395dae631e41797383125b52ad3d2eb2"
        },
        "date": 1775305487206,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2234",
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
        "date": 1775307671686,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2129",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1505",
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
          "id": "36b3d34a924db299e7c9955d0d6f7439f41c69f3",
          "message": "Bumped Docker image version to 0.17.1-20260319",
          "timestamp": "2026-03-19T05:52:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/36b3d34a924db299e7c9955d0d6f7439f41c69f3"
        },
        "date": 1775314394102,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1983",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1427",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775322734758,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2270",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1523",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775331618103,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2215",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1571",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c19ab3fa98f66459ff166ee5ab013ee550e671d2",
          "message": "Add `SKIP_TEST_IF` to the general test framework",
          "timestamp": "2026-03-19T12:59:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/c19ab3fa98f66459ff166ee5ab013ee550e671d2"
        },
        "date": 1775346240801,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1760",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1440",
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
          "id": "f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3",
          "message": "Block flaky gVisor epoll_pwait2 timeout test",
          "timestamp": "2026-03-20T09:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/f05e89b615c5dcb3f7c74accf24bdc23f96fcfc3"
        },
        "date": 1775350203680,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2160",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1493",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "36c47a260a7d8a08bed978128f9cd6eef21c9ed8",
          "message": "Add the regression test for mountstats",
          "timestamp": "2026-03-19T10:54:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/36c47a260a7d8a08bed978128f9cd6eef21c9ed8"
        },
        "date": 1775366260959,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2237",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1530",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6f23eaa160d4c0813438295844a7530eae59d4db",
          "message": "Enable more futex tests of ltp/gvisor",
          "timestamp": "2026-03-20T10:59:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f23eaa160d4c0813438295844a7530eae59d4db"
        },
        "date": 1775373126020,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1863",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1446",
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
          "id": "fb002a5760024554aa8f23f3c73b1ea513cde724",
          "message": "Update comments and variable orders",
          "timestamp": "2026-03-29T15:17:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/fb002a5760024554aa8f23f3c73b1ea513cde724"
        },
        "date": 1775381441786,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2018",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1479",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775437239636,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2234",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1388",
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
          "id": "f6fb67e78d5babf48939793ddb273db7048bf76c",
          "message": "Fix `poll` behavior about invalid entries",
          "timestamp": "2026-04-03T11:36:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/f6fb67e78d5babf48939793ddb273db7048bf76c"
        },
        "date": 1775524391388,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2090",
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
        "date": 1775616274477,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1462",
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
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "id": "ac432d5f147df65249f4f89d0edd24db2bfa98af",
          "message": "Make rootfs display the correct fs_type",
          "timestamp": "2026-04-08T09:48:05Z",
          "url": "https://github.com/asterinas/asterinas/commit/ac432d5f147df65249f4f89d0edd24db2bfa98af"
        },
        "date": 1775699903766,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1143",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1502",
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
          "id": "0896044646a8c4ddd745479482a49d8edf0f50f3",
          "message": "Fix fork and vfork panic on pids.max exhaustion",
          "timestamp": "2026-04-09T08:48:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/0896044646a8c4ddd745479482a49d8edf0f50f3"
        },
        "date": 1775786132755,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1803",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1470",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775872317589,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
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
            "value": "1519",
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
          "id": "9e961e07d414a44be3e8ccb82681fc9f79f9a3ba",
          "message": "Reorder methods in `process/exit.rs`",
          "timestamp": "2026-04-10T08:12:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e961e07d414a44be3e8ccb82681fc9f79f9a3ba"
        },
        "date": 1775958307686,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1103",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1536",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "974ca574a90ceb11a56a2057c397398387693e65",
          "message": "Add tests for cgroup namespace\n\nCo-authored-by: Ruihan Li <lrh2000@pku.edu.cn>",
          "timestamp": "2026-04-13T02:29:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/974ca574a90ceb11a56a2057c397398387693e65"
        },
        "date": 1776144772460,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1343",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1544",
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
          "id": "72e395b5f10d6f87e28b813adb40370c7b54cbb4",
          "message": "Bump libflate to 2.3.0 and replace core2",
          "timestamp": "2026-04-15T11:25:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/72e395b5f10d6f87e28b813adb40370c7b54cbb4"
        },
        "date": 1776307098169,
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
            "value": "1367",
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
          "id": "5b93972e6fd61efcca18772431a92313005d2d6a",
          "message": "Remove all manually-written log prefixes\n\nRemove bracket-style prefixes ([IOAPIC], [sys_getpid], [Task entry],\netc.) and text prefixes that duplicate what __log_prefix already\nprovides (VirtIO Input:, IOMMU, PCI device, etc.) across the kernel\nsyscalls, virtio, PCI, IOMMU, IRQ, UART, ACPI, timer, mlsdisk, input,\nand rootfs subsystems.",
          "timestamp": "2026-04-16T03:42:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/5b93972e6fd61efcca18772431a92313005d2d6a"
        },
        "date": 1776484465814,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
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
            "value": "1485",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776564031335,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2188",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1246",
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
          "id": "c1e6cfe448508b93aef4e2d6bcdbc644e102b719",
          "message": "overlayfs: Add regression test `readdir_small_buffer`",
          "timestamp": "2026-04-17T08:35:49Z",
          "url": "https://github.com/asterinas/asterinas/commit/c1e6cfe448508b93aef4e2d6bcdbc644e102b719"
        },
        "date": 1776655301190,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2146",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1511",
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
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776737820091,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1506",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1435",
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
          "id": "aa44d6e4975b86427e686b1996cbd0967da7b264",
          "message": "Add IPC namespace support",
          "timestamp": "2026-03-05T08:19:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa44d6e4975b86427e686b1996cbd0967da7b264"
        },
        "date": 1776824228847,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2201",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1347",
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
          "id": "34ff028f4c79dcc643decc18811a33219ead7ae8",
          "message": "Reimplement vsock sockets",
          "timestamp": "2026-04-06T15:14:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/34ff028f4c79dcc643decc18811a33219ead7ae8"
        },
        "date": 1776994820674,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3061",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2615",
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
          "id": "233f8699fe5a49a367b6b04f635ed7fb47e344ce",
          "message": "Add Linux kernel selftest (kselftest) support",
          "timestamp": "2026-04-24T05:54:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/233f8699fe5a49a367b6b04f635ed7fb47e344ce"
        },
        "date": 1777166831533,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1839",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2510",
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
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "0f367b7f899b76fb2a9d718d56875f16280f9fde",
          "message": "Fix `make ktest` regression",
          "timestamp": "2026-04-27T02:47:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/0f367b7f899b76fb2a9d718d56875f16280f9fde"
        },
        "date": 1777340596093,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3108",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1975",
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
          "id": "cdf412ed25b62afe811cdbc19b157be532cc729a",
          "message": "Add QEMU virtiofs options",
          "timestamp": "2026-05-25T12:40:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/cdf412ed25b62afe811cdbc19b157be532cc729a"
        },
        "date": 1779932182482,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3272",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2354",
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
          "id": "5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf",
          "message": "Check `high_watermark` against `avail_pages`",
          "timestamp": "2026-05-26T15:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/5831c49a9a1c9c7d512fe12f200dd1c7575fd0bf"
        },
        "date": 1780018753755,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3068",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2014",
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
          "id": "d1d3b85229eb86979631fc911d76fc78ed039974",
          "message": "Fix linux-legacy32 boot with stripped payload",
          "timestamp": "2026-05-27T14:55:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/d1d3b85229eb86979631fc911d76fc78ed039974"
        },
        "date": 1780105127566,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3341",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2009",
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
          "id": "ba344a4cc532186ac1b8ab5468001f7ef3f388fd",
          "message": "Add regression test for clock_nanosleep unknown flags bits",
          "timestamp": "2026-05-29T08:23:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/ba344a4cc532186ac1b8ab5468001f7ef3f388fd"
        },
        "date": 1780276609127,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3088",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2478",
            "unit": "MB/s",
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
        "date": 1780364919647,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "3381",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2182",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00",
          "message": "Update 0.18.0 demo video link in README.md",
          "timestamp": "2026-06-03T14:26:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/cb1dbc55c62c0fd76783abf2e42f89f39ea5fd00"
        },
        "date": 1780539900792,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1471",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1546",
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
            "name": "Qingsong Chen",
            "username": "cqs21",
            "email": "changxian.cqs@antgroup.com"
          },
          "id": "356dd6e71bc6f980f7ebb883728f2e912553bb12",
          "message": "Refine store and push benchmark results processes",
          "timestamp": "2026-05-28T08:41:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/356dd6e71bc6f980f7ebb883728f2e912553bb12"
        },
        "date": 1780697594623,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2216",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1506",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780783484963,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1201",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1399",
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
          "id": "b23e91b8873ac818c56eec3ad95e90bdfccf5e9b",
          "message": "Report real RSP before the trap in `TrapFrame`",
          "timestamp": "2026-06-04T05:03:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/b23e91b8873ac818c56eec3ad95e90bdfccf5e9b"
        },
        "date": 1780869735305,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1324",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1533",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1780957949645,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1422",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1563",
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
          "id": "dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824",
          "message": "Implement `rename` in virtio-fs",
          "timestamp": "2026-06-08T03:45:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/dde91f0ccbe8d3fb0b239d2ed30da1053a3a8824"
        },
        "date": 1781043338666,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "2200",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1622",
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
          "id": "9c8359219ae4827a0e55e478f17252b1bc3c7d72",
          "message": "Reject `MAP_SHARED_VALIDATE` for anonymous mappings",
          "timestamp": "2026-06-10T01:51:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/9c8359219ae4827a0e55e478f17252b1bc3c7d72"
        },
        "date": 1781130743374,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1943",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1600",
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
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "6965be7de8d1eaef699dbe459fc54b55f0134cf2",
          "message": "Fix inotify_poll test race on SMP",
          "timestamp": "2026-06-11T08:50:09Z",
          "url": "https://github.com/asterinas/asterinas/commit/6965be7de8d1eaef699dbe459fc54b55f0134cf2"
        },
        "date": 1781217367872,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU disabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1415",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "1320",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}