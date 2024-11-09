window.BENCHMARK_DATA = {
  "lastUpdate": 1731183003861,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "ext2_seq_read_bw": [
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
          "id": "1f612e45f7fccb4caa3901ee26605f828ec64a06",
          "message": "Remove unnecessary page table items",
          "timestamp": "2024-11-09T11:22:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/1f612e45f7fccb4caa3901ee26605f828ec64a06"
        },
        "date": 1731182983158,
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
            "value": "3400",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_iommu_seq_write_bw": [
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
          "id": "1f612e45f7fccb4caa3901ee26605f828ec64a06",
          "message": "Remove unnecessary page table items",
          "timestamp": "2024-11-09T11:22:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/1f612e45f7fccb4caa3901ee26605f828ec64a06"
        },
        "date": 1731182703746,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU enabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "2325",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1861",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}