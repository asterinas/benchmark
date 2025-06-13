window.BENCHMARK_DATA = {
  "lastUpdate": 1749775502659,
  "repoUrl": "https://github.com/asterinas/asterinas",
  "entries": {
    "http_file4KB_bw": [
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
          "id": "8b5a6f0d588d1addb4fd497d143e993ab045fa5b",
          "message": "Add a lint expectation",
          "timestamp": "2025-03-25T09:38:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b5a6f0d588d1addb4fd497d143e993ab045fa5b"
        },
        "date": 1743128067686,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16288.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9397.24",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "166a0588c703b2b7238a4b515a601458c75901cb",
          "message": "Reconstruct the integration/OSDK tests for flexible arch support",
          "timestamp": "2025-03-28T06:13:08Z",
          "url": "https://github.com/grief8/asterinas/commit/166a0588c703b2b7238a4b515a601458c75901cb"
        },
        "date": 1743221200557,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16475.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9467.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "865003738ab733eec4c3a72842e7f95553d89b6b",
          "message": "Enable gvisor xattr syscall test",
          "timestamp": "2025-03-28T06:04:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/865003738ab733eec4c3a72842e7f95553d89b6b"
        },
        "date": 1743229525649,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10404.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6791.89",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3c73672f52a8e41cfa948ecf68519067f8990cc6",
          "message": "Rename Benchmark Asterinas to Benchmark x86-64",
          "timestamp": "2025-03-29T01:49:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c73672f52a8e41cfa948ecf68519067f8990cc6"
        },
        "date": 1743246170626,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16441.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8365.61",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2cfb470789077917180da7baca8af9017b0ed9f4",
          "message": "Fix lmbench/ramfs_create_delete_files_0k_ops",
          "timestamp": "2025-03-28T07:20:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/2cfb470789077917180da7baca8af9017b0ed9f4"
        },
        "date": 1743308051832,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12995.22",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9420.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81780e64f87f9f80ee02dbe6db6bc5c7a7904afc",
          "message": "Update test_x86.yml",
          "timestamp": "2025-03-29T06:39:26Z",
          "url": "https://github.com/grief8/asterinas/commit/81780e64f87f9f80ee02dbe6db6bc5c7a7904afc"
        },
        "date": 1743316794722,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16372.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8437.54",
            "unit": "Requests per second",
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
          "id": "83b9ebf87d783abdde3ffbb73f12256d77906670",
          "message": "Avoid repetitive locking for clearing cache",
          "timestamp": "2025-03-20T12:22:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/83b9ebf87d783abdde3ffbb73f12256d77906670"
        },
        "date": 1743394718837,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13061.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6943.55",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743473777186,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12899.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6867.68",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743475843045,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16399.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9485.69",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743564069368,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16351.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9439.15",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743566241541,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10404.87",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7585.27",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743647858417,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16213.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7556.37",
            "unit": "Requests per second",
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
          "id": "600f13ef78a32c185f6b4f891d6d5aec4b6b1a98",
          "message": "Enforce a task not switched to multiple CPUs",
          "timestamp": "2025-03-31T04:06:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/600f13ef78a32c185f6b4f891d6d5aec4b6b1a98"
        },
        "date": 1743650717821,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10305.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7693.78",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743737365685,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16270.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8383.32",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743820503124,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16470.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9285.82",
            "unit": "Requests per second",
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
          "id": "d378dc51ff289387707f60cda10a4dced9fe5f25",
          "message": "Enable `IA32_EFER.NXE` earlier in AP",
          "timestamp": "2025-04-04T08:52:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/d378dc51ff289387707f60cda10a4dced9fe5f25"
        },
        "date": 1743910221408,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11627.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6934.11",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6",
          "message": "Update outdated comments near `switch_to_task`",
          "timestamp": "2025-04-02T14:33:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6"
        },
        "date": 1744010321942,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10397.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7744.69",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744073764488,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10376.68",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6758.89",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744160230634,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10268.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6783.90",
            "unit": "Requests per second",
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
          "id": "b833ec6ede869b9dbf16863744b9441702d979bd",
          "message": "Implement ReadCString for MultiRead",
          "timestamp": "2025-04-09T06:36:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/b833ec6ede869b9dbf16863744b9441702d979bd"
        },
        "date": 1744245689771,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16313.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6915.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744364275002,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10306.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7702.51",
            "unit": "Requests per second",
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
          "id": "961ad738478518c084bd1d1c560dac56b9c72a81",
          "message": "Poll the correct iface in irq handler",
          "timestamp": "2025-04-22T03:26:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/961ad738478518c084bd1d1c560dac56b9c72a81"
        },
        "date": 1745376300124,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7379.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4891.87",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhenchen Wang",
            "username": "Plucky923",
            "email": "m202372036@hust.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a5f270ee96e77dfc0f54f6b9db945d88260ff89",
          "message": "Made some minor improvements to syscall statx\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>",
          "timestamp": "2025-04-23T08:33:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a5f270ee96e77dfc0f54f6b9db945d88260ff89"
        },
        "date": 1745470669298,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5565.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4879.95",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "764e3afa7c9a04b15afbaeb30f2bfa9df891176e",
          "message": "Add a simple test case for OverlayFS",
          "timestamp": "2025-04-24T07:58:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/764e3afa7c9a04b15afbaeb30f2bfa9df891176e"
        },
        "date": 1745552929232,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6442.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4351.02",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745635161345,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6559.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4319.37",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745719305755,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4744.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4654.23",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745808165765,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6958.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4349.18",
            "unit": "Requests per second",
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
          "id": "88f08de3af80641194f8afbf47c98648e8db3e5a",
          "message": "Refactor framebuffer",
          "timestamp": "2025-04-29T08:45:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/88f08de3af80641194f8afbf47c98648e8db3e5a"
        },
        "date": 1745981932564,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7208.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2469.20",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746067331688,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5847.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2827.97",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746152780474,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6480.58",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4233.27",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746242562943,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5252.32",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3549.94",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746325596000,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6119.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4642.47",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746411749137,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4417.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3387.41",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746503394983,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5759.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4746.16",
            "unit": "Requests per second",
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
          "id": "18df0f6ec94f018e3fc14b4bded6257d507611c4",
          "message": "Fix the linear mapping size if the IO range is high",
          "timestamp": "2025-05-06T09:26:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/18df0f6ec94f018e3fc14b4bded6257d507611c4"
        },
        "date": 1746584815962,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5590.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3009.00",
            "unit": "Requests per second",
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
          "id": "2961b89caa380f049766020b01e2c1af7930ec3d",
          "message": "Bump Docker image version to 0.14.1-20250507",
          "timestamp": "2025-05-07T08:34:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2961b89caa380f049766020b01e2c1af7930ec3d"
        },
        "date": 1746672441020,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7340.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3763.14",
            "unit": "Requests per second",
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
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747103290347,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5606.45",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3942.85",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747194426165,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4442.87",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4310.97",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747276078712,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7174.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4453.44",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747449595691,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5469.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4312.83",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747534713890,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6503.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5224.95",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747623572789,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6035.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3338.16",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747714640803,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6399.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4643.57",
            "unit": "Requests per second",
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
          "id": "12d693d7b4618b12f1617fa03dc2ce514226cc43",
          "message": "Optimize Docker builds by skipping existing images",
          "timestamp": "2025-05-19T11:50:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/12d693d7b4618b12f1617fa03dc2ce514226cc43"
        },
        "date": 1747799416269,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5960.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4458.67",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "e81053b9dcfba903be8395b1987883a058f5c486",
          "message": "Remove unnecessary `_rdtsc` uses",
          "timestamp": "2025-05-21T07:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e81053b9dcfba903be8395b1987883a058f5c486"
        },
        "date": 1747884295095,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6502.98",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3688.65",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908",
          "message": "Refactor interrupt remapping in OSTD",
          "timestamp": "2025-05-21T05:12:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908"
        },
        "date": 1747965188940,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5736.31",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4872.60",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "d4afe3a035481f3a36d4c4f930ac8794690c87dc",
          "message": "Avoid Rust references of IRT entries",
          "timestamp": "2025-05-09T03:39:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4afe3a035481f3a36d4c4f930ac8794690c87dc"
        },
        "date": 1748054993503,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7386.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4808.60",
            "unit": "Requests per second",
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
          "id": "79b3f6889262bc606e38f0f3f313b3cbe8933d41",
          "message": "Make the RCU lifetime of page tables explicit",
          "timestamp": "2025-05-20T03:39:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/79b3f6889262bc606e38f0f3f313b3cbe8933d41"
        },
        "date": 1748146150845,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5638.68",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4709.59",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748230603306,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5931.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3308.23",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748319499783,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7322.42",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4899.41",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748401304545,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7154.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4531.05",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748486384612,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6354.09",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4675.70",
            "unit": "Requests per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffb40974364c74ee3adaffdf8a7063b575233807",
          "message": "Add RISC-V timer support",
          "timestamp": "2025-04-28T03:04:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffb40974364c74ee3adaffdf8a7063b575233807"
        },
        "date": 1748578007018,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5881.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4547.61",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "6dc0189e432add7a5acea9f5615bc8c31461e6e2",
          "message": "Remove unnecssary overflow checks",
          "timestamp": "2025-05-27T03:08:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/6dc0189e432add7a5acea9f5615bc8c31461e6e2"
        },
        "date": 1748665474225,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7584.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4190.38",
            "unit": "Requests per second",
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
          "id": "58e4f45bb17dff6ea0dbe266f9045155ee54edb8",
          "message": "Add per-CPU counters and track RSS for each `Vmar`",
          "timestamp": "2025-06-03T14:05:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/58e4f45bb17dff6ea0dbe266f9045155ee54edb8"
        },
        "date": 1749024226890,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5045.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3289.03",
            "unit": "Requests per second",
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
          "id": "38c9ab06150e2fc322357705f8c40c13b1915648",
          "message": "Add LTP syscall tests",
          "timestamp": "2025-06-04T02:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/38c9ab06150e2fc322357705f8c40c13b1915648"
        },
        "date": 1749093840820,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5773.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4095.67",
            "unit": "Requests per second",
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
          "id": "01328ee4040930274dcd30725be7b223198c18cc",
          "message": "Fix panic when mount with invalid file system type",
          "timestamp": "2025-06-06T09:52:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/01328ee4040930274dcd30725be7b223198c18cc"
        },
        "date": 1749640010674,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14840.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8737.55",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5f28b48ca4afc7cece79d004370f3174b1ba4bda",
          "message": "Assign framebuffer code owners",
          "timestamp": "2025-06-10T05:24:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f28b48ca4afc7cece79d004370f3174b1ba4bda"
        },
        "date": 1749642502394,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "12209.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9162.85",
            "unit": "Requests per second",
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
          "id": "3e32a38316a9b134bea3121fb89887c41eb93dc8",
          "message": "Add sys_close_range",
          "timestamp": "2025-06-01T10:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/3e32a38316a9b134bea3121fb89887c41eb93dc8"
        },
        "date": 1749687664984,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11374.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2635.43",
            "unit": "Requests per second",
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
          "id": "b605bed5764ec21ec847f0357ed564329f165762",
          "message": "Fix some typos",
          "timestamp": "2025-06-12T03:13:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/b605bed5764ec21ec847f0357ed564329f165762"
        },
        "date": 1749775451509,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 4KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15010.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "9101.19",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file8KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "166a0588c703b2b7238a4b515a601458c75901cb",
          "message": "Reconstruct the integration/OSDK tests for flexible arch support",
          "timestamp": "2025-03-28T06:13:08Z",
          "url": "https://github.com/grief8/asterinas/commit/166a0588c703b2b7238a4b515a601458c75901cb"
        },
        "date": 1743221540285,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15117.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8658.99",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "865003738ab733eec4c3a72842e7f95553d89b6b",
          "message": "Enable gvisor xattr syscall test",
          "timestamp": "2025-03-28T06:04:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/865003738ab733eec4c3a72842e7f95553d89b6b"
        },
        "date": 1743229849391,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11617.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6588.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3c73672f52a8e41cfa948ecf68519067f8990cc6",
          "message": "Rename Benchmark Asterinas to Benchmark x86-64",
          "timestamp": "2025-03-29T01:49:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c73672f52a8e41cfa948ecf68519067f8990cc6"
        },
        "date": 1743246414452,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9098.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7090.03",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2cfb470789077917180da7baca8af9017b0ed9f4",
          "message": "Fix lmbench/ramfs_create_delete_files_0k_ops",
          "timestamp": "2025-03-28T07:20:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/2cfb470789077917180da7baca8af9017b0ed9f4"
        },
        "date": 1743308536380,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10562.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6316.69",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81780e64f87f9f80ee02dbe6db6bc5c7a7904afc",
          "message": "Update test_x86.yml",
          "timestamp": "2025-03-29T06:39:26Z",
          "url": "https://github.com/grief8/asterinas/commit/81780e64f87f9f80ee02dbe6db6bc5c7a7904afc"
        },
        "date": 1743317037729,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14878.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8843.45",
            "unit": "Requests per second",
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
          "id": "83b9ebf87d783abdde3ffbb73f12256d77906670",
          "message": "Avoid repetitive locking for clearing cache",
          "timestamp": "2025-03-20T12:22:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/83b9ebf87d783abdde3ffbb73f12256d77906670"
        },
        "date": 1743394972894,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15012.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7989.05",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743473841836,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14709.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8497.33",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743475923613,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11594.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7498.69",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743564145497,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14553.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7010.87",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743566310054,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10335.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8655.12",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743647924864,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9258.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7744.40",
            "unit": "Requests per second",
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
          "id": "600f13ef78a32c185f6b4f891d6d5aec4b6b1a98",
          "message": "Enforce a task not switched to multiple CPUs",
          "timestamp": "2025-03-31T04:06:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/600f13ef78a32c185f6b4f891d6d5aec4b6b1a98"
        },
        "date": 1743650843969,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9109.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7066.45",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743737355934,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15000.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7619.88",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743820493012,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14885.09",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8376.99",
            "unit": "Requests per second",
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
          "id": "d378dc51ff289387707f60cda10a4dced9fe5f25",
          "message": "Enable `IA32_EFER.NXE` earlier in AP",
          "timestamp": "2025-04-04T08:52:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/d378dc51ff289387707f60cda10a4dced9fe5f25"
        },
        "date": 1743910210066,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9129.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6429.11",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6",
          "message": "Update outdated comments near `switch_to_task`",
          "timestamp": "2025-04-02T14:33:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6"
        },
        "date": 1744010308514,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9233.58",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6436.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744073751693,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14795.68",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6508.37",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744160217024,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7574.31",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6471.45",
            "unit": "Requests per second",
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
          "id": "b833ec6ede869b9dbf16863744b9441702d979bd",
          "message": "Implement ReadCString for MultiRead",
          "timestamp": "2025-04-09T06:36:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/b833ec6ede869b9dbf16863744b9441702d979bd"
        },
        "date": 1744245675670,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9174.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6426.74",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744364258441,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7694.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7094.50",
            "unit": "Requests per second",
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
          "id": "961ad738478518c084bd1d1c560dac56b9c72a81",
          "message": "Poll the correct iface in irq handler",
          "timestamp": "2025-04-22T03:26:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/961ad738478518c084bd1d1c560dac56b9c72a81"
        },
        "date": 1745376278432,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4460.06",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4412.39",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhenchen Wang",
            "username": "Plucky923",
            "email": "m202372036@hust.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a5f270ee96e77dfc0f54f6b9db945d88260ff89",
          "message": "Made some minor improvements to syscall statx\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>",
          "timestamp": "2025-04-23T08:33:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a5f270ee96e77dfc0f54f6b9db945d88260ff89"
        },
        "date": 1745470646677,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5014.88",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4336.38",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "764e3afa7c9a04b15afbaeb30f2bfa9df891176e",
          "message": "Add a simple test case for OverlayFS",
          "timestamp": "2025-04-24T07:58:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/764e3afa7c9a04b15afbaeb30f2bfa9df891176e"
        },
        "date": 1745552906192,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6759.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4840.35",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745635137687,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4751.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3142.81",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745719281373,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3900.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3934.49",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745808141062,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5714.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3724.99",
            "unit": "Requests per second",
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
          "id": "88f08de3af80641194f8afbf47c98648e8db3e5a",
          "message": "Refactor framebuffer",
          "timestamp": "2025-04-29T08:45:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/88f08de3af80641194f8afbf47c98648e8db3e5a"
        },
        "date": 1745981908252,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5077.21",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3193.99",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746067306547,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6334.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3581.88",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746152754386,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5272.79",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2727.63",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746242535330,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5310.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2833.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746325567879,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5035.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4039.71",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746411718745,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6521.57",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4027.00",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746503363136,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3977.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2917.40",
            "unit": "Requests per second",
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
          "id": "18df0f6ec94f018e3fc14b4bded6257d507611c4",
          "message": "Fix the linear mapping size if the IO range is high",
          "timestamp": "2025-05-06T09:26:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/18df0f6ec94f018e3fc14b4bded6257d507611c4"
        },
        "date": 1746584784445,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5166.59",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3569.00",
            "unit": "Requests per second",
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
          "id": "2961b89caa380f049766020b01e2c1af7930ec3d",
          "message": "Bump Docker image version to 0.14.1-20250507",
          "timestamp": "2025-05-07T08:34:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2961b89caa380f049766020b01e2c1af7930ec3d"
        },
        "date": 1746672409994,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4637.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3095.12",
            "unit": "Requests per second",
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
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747103258845,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4275.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4341.17",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747194391091,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6731.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4743.93",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747276044206,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6034.18",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4401.31",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf",
          "message": "Assign some library code owners",
          "timestamp": "2025-05-14T04:28:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf"
        },
        "date": 1747364102533,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5266.87",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3575.96",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747449560662,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4844.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4627.71",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747534677228,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6557.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4264.22",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747623535913,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5830.45",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3254.15",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747714602804,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6349.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4349.89",
            "unit": "Requests per second",
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
          "id": "12d693d7b4618b12f1617fa03dc2ce514226cc43",
          "message": "Optimize Docker builds by skipping existing images",
          "timestamp": "2025-05-19T11:50:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/12d693d7b4618b12f1617fa03dc2ce514226cc43"
        },
        "date": 1747799377223,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6544.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4084.43",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "e81053b9dcfba903be8395b1987883a058f5c486",
          "message": "Remove unnecessary `_rdtsc` uses",
          "timestamp": "2025-05-21T07:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e81053b9dcfba903be8395b1987883a058f5c486"
        },
        "date": 1747884255589,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6501.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5222.68",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908",
          "message": "Refactor interrupt remapping in OSTD",
          "timestamp": "2025-05-21T05:12:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908"
        },
        "date": 1747965148366,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6611.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4197.32",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "d4afe3a035481f3a36d4c4f930ac8794690c87dc",
          "message": "Avoid Rust references of IRT entries",
          "timestamp": "2025-05-09T03:39:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4afe3a035481f3a36d4c4f930ac8794690c87dc"
        },
        "date": 1748054950444,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6507.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4291.84",
            "unit": "Requests per second",
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
          "id": "79b3f6889262bc606e38f0f3f313b3cbe8933d41",
          "message": "Make the RCU lifetime of page tables explicit",
          "timestamp": "2025-05-20T03:39:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/79b3f6889262bc606e38f0f3f313b3cbe8933d41"
        },
        "date": 1748146108327,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5688.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5001.09",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748230559954,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4008.30",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3143.37",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748319454978,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5232.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3315.13",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748401258733,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5678.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4575.00",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748486337718,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6595.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3621.56",
            "unit": "Requests per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffb40974364c74ee3adaffdf8a7063b575233807",
          "message": "Add RISC-V timer support",
          "timestamp": "2025-04-28T03:04:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffb40974364c74ee3adaffdf8a7063b575233807"
        },
        "date": 1748577958318,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6041.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4854.48",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "6dc0189e432add7a5acea9f5615bc8c31461e6e2",
          "message": "Remove unnecssary overflow checks",
          "timestamp": "2025-05-27T03:08:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/6dc0189e432add7a5acea9f5615bc8c31461e6e2"
        },
        "date": 1748665424913,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5631.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3471.04",
            "unit": "Requests per second",
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
          "id": "58e4f45bb17dff6ea0dbe266f9045155ee54edb8",
          "message": "Add per-CPU counters and track RSS for each `Vmar`",
          "timestamp": "2025-06-03T14:05:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/58e4f45bb17dff6ea0dbe266f9045155ee54edb8"
        },
        "date": 1749024176600,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6556.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4302.94",
            "unit": "Requests per second",
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
          "id": "38c9ab06150e2fc322357705f8c40c13b1915648",
          "message": "Add LTP syscall tests",
          "timestamp": "2025-06-04T02:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/38c9ab06150e2fc322357705f8c40c13b1915648"
        },
        "date": 1749093790741,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6286.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4747.39",
            "unit": "Requests per second",
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
          "id": "01328ee4040930274dcd30725be7b223198c18cc",
          "message": "Fix panic when mount with invalid file system type",
          "timestamp": "2025-06-06T09:52:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/01328ee4040930274dcd30725be7b223198c18cc"
        },
        "date": 1749639959431,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11140.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8856.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5f28b48ca4afc7cece79d004370f3174b1ba4bda",
          "message": "Assign framebuffer code owners",
          "timestamp": "2025-06-10T05:24:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f28b48ca4afc7cece79d004370f3174b1ba4bda"
        },
        "date": 1749642449769,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13684.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8780.06",
            "unit": "Requests per second",
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
          "id": "3e32a38316a9b134bea3121fb89887c41eb93dc8",
          "message": "Add sys_close_range",
          "timestamp": "2025-06-01T10:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/3e32a38316a9b134bea3121fb89887c41eb93dc8"
        },
        "date": 1749687611968,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9934.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8755.64",
            "unit": "Requests per second",
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
          "id": "b605bed5764ec21ec847f0357ed564329f165762",
          "message": "Fix some typos",
          "timestamp": "2025-06-12T03:13:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/b605bed5764ec21ec847f0357ed564329f165762"
        },
        "date": 1749775399585,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 8KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/8192bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10110.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "8712.66",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file16KB_bw": [
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
          "id": "7d3b49c4d616b0e59ed68a239e3844577856c914",
          "message": "Bump Docker image version to 0.14.1-20250326",
          "timestamp": "2025-03-26T09:26:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/7d3b49c4d616b0e59ed68a239e3844577856c914"
        },
        "date": 1743051652949,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8384.87",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7309.67",
            "unit": "Requests per second",
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
          "id": "8b5a6f0d588d1addb4fd497d143e993ab045fa5b",
          "message": "Add a lint expectation",
          "timestamp": "2025-03-25T09:38:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/8b5a6f0d588d1addb4fd497d143e993ab045fa5b"
        },
        "date": 1743127824565,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11031.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6258.95",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "166a0588c703b2b7238a4b515a601458c75901cb",
          "message": "Reconstruct the integration/OSDK tests for flexible arch support",
          "timestamp": "2025-03-28T06:13:08Z",
          "url": "https://github.com/grief8/asterinas/commit/166a0588c703b2b7238a4b515a601458c75901cb"
        },
        "date": 1743220781970,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6684.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6260.86",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "865003738ab733eec4c3a72842e7f95553d89b6b",
          "message": "Enable gvisor xattr syscall test",
          "timestamp": "2025-03-28T06:04:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/865003738ab733eec4c3a72842e7f95553d89b6b"
        },
        "date": 1743229230349,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7810.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5707.51",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3c73672f52a8e41cfa948ecf68519067f8990cc6",
          "message": "Rename Benchmark Asterinas to Benchmark x86-64",
          "timestamp": "2025-03-29T01:49:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c73672f52a8e41cfa948ecf68519067f8990cc6"
        },
        "date": 1743245938482,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6634.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5635.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2cfb470789077917180da7baca8af9017b0ed9f4",
          "message": "Fix lmbench/ramfs_create_delete_files_0k_ops",
          "timestamp": "2025-03-28T07:20:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/2cfb470789077917180da7baca8af9017b0ed9f4"
        },
        "date": 1743307698531,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8385.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6868.19",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81780e64f87f9f80ee02dbe6db6bc5c7a7904afc",
          "message": "Update test_x86.yml",
          "timestamp": "2025-03-29T06:39:26Z",
          "url": "https://github.com/grief8/asterinas/commit/81780e64f87f9f80ee02dbe6db6bc5c7a7904afc"
        },
        "date": 1743316472397,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6353.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6107.01",
            "unit": "Requests per second",
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
          "id": "83b9ebf87d783abdde3ffbb73f12256d77906670",
          "message": "Avoid repetitive locking for clearing cache",
          "timestamp": "2025-03-20T12:22:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/83b9ebf87d783abdde3ffbb73f12256d77906670"
        },
        "date": 1743394460262,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6687.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6256.21",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743473707536,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9483.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6253.60",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743475760411,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11172.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6174.76",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743563991554,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10922.32",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7741.24",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743566174221,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6675.31",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6786.58",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743647738963,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11133.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6771.62",
            "unit": "Requests per second",
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
          "id": "600f13ef78a32c185f6b4f891d6d5aec4b6b1a98",
          "message": "Enforce a task not switched to multiple CPUs",
          "timestamp": "2025-03-31T04:06:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/600f13ef78a32c185f6b4f891d6d5aec4b6b1a98"
        },
        "date": 1743650607581,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6580.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5758.14",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743737375325,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11220.69",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7995.41",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743820513453,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6530.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5695.27",
            "unit": "Requests per second",
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
          "id": "d378dc51ff289387707f60cda10a4dced9fe5f25",
          "message": "Enable `IA32_EFER.NXE` earlier in AP",
          "timestamp": "2025-04-04T08:52:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/d378dc51ff289387707f60cda10a4dced9fe5f25"
        },
        "date": 1743910232754,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6673.25",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5790.02",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6",
          "message": "Update outdated comments near `switch_to_task`",
          "timestamp": "2025-04-02T14:33:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6"
        },
        "date": 1744010335339,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6622.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5646.18",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744073777960,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "10895.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6201.15",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744160245121,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6620.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6749.52",
            "unit": "Requests per second",
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
          "id": "b833ec6ede869b9dbf16863744b9441702d979bd",
          "message": "Implement ReadCString for MultiRead",
          "timestamp": "2025-04-09T06:36:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/b833ec6ede869b9dbf16863744b9441702d979bd"
        },
        "date": 1744245703980,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "11155.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6883.98",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744364292027,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6607.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5716.76",
            "unit": "Requests per second",
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
          "id": "961ad738478518c084bd1d1c560dac56b9c72a81",
          "message": "Poll the correct iface in irq handler",
          "timestamp": "2025-04-22T03:26:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/961ad738478518c084bd1d1c560dac56b9c72a81"
        },
        "date": 1745376322306,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4921.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2904.87",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhenchen Wang",
            "username": "Plucky923",
            "email": "m202372036@hust.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a5f270ee96e77dfc0f54f6b9db945d88260ff89",
          "message": "Made some minor improvements to syscall statx\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>",
          "timestamp": "2025-04-23T08:33:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a5f270ee96e77dfc0f54f6b9db945d88260ff89"
        },
        "date": 1745470692474,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4174.13",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3279.46",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "764e3afa7c9a04b15afbaeb30f2bfa9df891176e",
          "message": "Add a simple test case for OverlayFS",
          "timestamp": "2025-04-24T07:58:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/764e3afa7c9a04b15afbaeb30f2bfa9df891176e"
        },
        "date": 1745552952480,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3817.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3067.38",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745635185253,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4206.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3993.28",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745719330077,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5019.85",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3936.41",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745808189905,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3799.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2575.74",
            "unit": "Requests per second",
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
          "id": "88f08de3af80641194f8afbf47c98648e8db3e5a",
          "message": "Refactor framebuffer",
          "timestamp": "2025-04-29T08:45:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/88f08de3af80641194f8afbf47c98648e8db3e5a"
        },
        "date": 1745981957764,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3827.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2080.12",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746067356711,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2938.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2911.58",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746152806752,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5195.80",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2768.97",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746242590491,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4041.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2935.43",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746325623488,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3246.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2851.49",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746411779284,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3538.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2983.00",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746503425892,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3657.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4049.30",
            "unit": "Requests per second",
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
          "id": "18df0f6ec94f018e3fc14b4bded6257d507611c4",
          "message": "Fix the linear mapping size if the IO range is high",
          "timestamp": "2025-05-06T09:26:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/18df0f6ec94f018e3fc14b4bded6257d507611c4"
        },
        "date": 1746584849779,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5412.78",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4305.24",
            "unit": "Requests per second",
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
          "id": "2961b89caa380f049766020b01e2c1af7930ec3d",
          "message": "Bump Docker image version to 0.14.1-20250507",
          "timestamp": "2025-05-07T08:34:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2961b89caa380f049766020b01e2c1af7930ec3d"
        },
        "date": 1746672472211,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4053.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3116.25",
            "unit": "Requests per second",
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
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747103322747,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4330.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4374.80",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747194463589,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3919.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3494.36",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747276113576,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3920.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3970.25",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf",
          "message": "Assign some library code owners",
          "timestamp": "2025-05-14T04:28:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf"
        },
        "date": 1747364153976,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5103.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3825.95",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747449631452,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5185.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3931.22",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747534750009,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4254.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3933.41",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747623609558,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3815.42",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2759.56",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747714678526,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3319.11",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4614.76",
            "unit": "Requests per second",
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
          "id": "12d693d7b4618b12f1617fa03dc2ce514226cc43",
          "message": "Optimize Docker builds by skipping existing images",
          "timestamp": "2025-05-19T11:50:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/12d693d7b4618b12f1617fa03dc2ce514226cc43"
        },
        "date": 1747799455326,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3259.87",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3567.19",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "e81053b9dcfba903be8395b1987883a058f5c486",
          "message": "Remove unnecessary `_rdtsc` uses",
          "timestamp": "2025-05-21T07:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e81053b9dcfba903be8395b1987883a058f5c486"
        },
        "date": 1747884334516,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3173.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2513.02",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908",
          "message": "Refactor interrupt remapping in OSTD",
          "timestamp": "2025-05-21T05:12:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908"
        },
        "date": 1747965229272,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3833.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3663.11",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "d4afe3a035481f3a36d4c4f930ac8794690c87dc",
          "message": "Avoid Rust references of IRT entries",
          "timestamp": "2025-05-09T03:39:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4afe3a035481f3a36d4c4f930ac8794690c87dc"
        },
        "date": 1748055036422,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5036.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3514.14",
            "unit": "Requests per second",
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
          "id": "79b3f6889262bc606e38f0f3f313b3cbe8933d41",
          "message": "Make the RCU lifetime of page tables explicit",
          "timestamp": "2025-05-20T03:39:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/79b3f6889262bc606e38f0f3f313b3cbe8933d41"
        },
        "date": 1748146193519,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4471.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2539.58",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748230646907,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4082.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3566.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748319544341,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4357.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3763.44",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748401349159,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4961.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3840.88",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748486430560,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4257.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2513.86",
            "unit": "Requests per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffb40974364c74ee3adaffdf8a7063b575233807",
          "message": "Add RISC-V timer support",
          "timestamp": "2025-04-28T03:04:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffb40974364c74ee3adaffdf8a7063b575233807"
        },
        "date": 1748578056129,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4971.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4064.93",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "6dc0189e432add7a5acea9f5615bc8c31461e6e2",
          "message": "Remove unnecssary overflow checks",
          "timestamp": "2025-05-27T03:08:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/6dc0189e432add7a5acea9f5615bc8c31461e6e2"
        },
        "date": 1748665522269,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4159.57",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2737.73",
            "unit": "Requests per second",
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
          "id": "38c9ab06150e2fc322357705f8c40c13b1915648",
          "message": "Add LTP syscall tests",
          "timestamp": "2025-06-04T02:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/38c9ab06150e2fc322357705f8c40c13b1915648"
        },
        "date": 1749093890438,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3148.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3965.92",
            "unit": "Requests per second",
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
          "id": "01328ee4040930274dcd30725be7b223198c18cc",
          "message": "Fix panic when mount with invalid file system type",
          "timestamp": "2025-06-06T09:52:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/01328ee4040930274dcd30725be7b223198c18cc"
        },
        "date": 1749640061906,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9899.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7810.21",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5f28b48ca4afc7cece79d004370f3174b1ba4bda",
          "message": "Assign framebuffer code owners",
          "timestamp": "2025-06-10T05:24:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f28b48ca4afc7cece79d004370f3174b1ba4bda"
        },
        "date": 1749642554674,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9952.52",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6367.88",
            "unit": "Requests per second",
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
          "id": "3e32a38316a9b134bea3121fb89887c41eb93dc8",
          "message": "Add sys_close_range",
          "timestamp": "2025-06-01T10:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/3e32a38316a9b134bea3121fb89887c41eb93dc8"
        },
        "date": 1749687718797,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7620.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "7854.31",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file32KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "166a0588c703b2b7238a4b515a601458c75901cb",
          "message": "Reconstruct the integration/OSDK tests for flexible arch support",
          "timestamp": "2025-03-28T06:13:08Z",
          "url": "https://github.com/grief8/asterinas/commit/166a0588c703b2b7238a4b515a601458c75901cb"
        },
        "date": 1743220999710,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5224.90",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4584.01",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "865003738ab733eec4c3a72842e7f95553d89b6b",
          "message": "Enable gvisor xattr syscall test",
          "timestamp": "2025-03-28T06:04:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/865003738ab733eec4c3a72842e7f95553d89b6b"
        },
        "date": 1743229354101,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5090.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4597.81",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3c73672f52a8e41cfa948ecf68519067f8990cc6",
          "message": "Rename Benchmark Asterinas to Benchmark x86-64",
          "timestamp": "2025-03-29T01:49:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c73672f52a8e41cfa948ecf68519067f8990cc6"
        },
        "date": 1743246050567,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5085.70",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4916.36",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2cfb470789077917180da7baca8af9017b0ed9f4",
          "message": "Fix lmbench/ramfs_create_delete_files_0k_ops",
          "timestamp": "2025-03-28T07:20:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/2cfb470789077917180da7baca8af9017b0ed9f4"
        },
        "date": 1743307828833,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6091.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4426.35",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81780e64f87f9f80ee02dbe6db6bc5c7a7904afc",
          "message": "Update test_x86.yml",
          "timestamp": "2025-03-29T06:39:26Z",
          "url": "https://github.com/grief8/asterinas/commit/81780e64f87f9f80ee02dbe6db6bc5c7a7904afc"
        },
        "date": 1743316667612,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5092.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4896.02",
            "unit": "Requests per second",
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
          "id": "83b9ebf87d783abdde3ffbb73f12256d77906670",
          "message": "Avoid repetitive locking for clearing cache",
          "timestamp": "2025-03-20T12:22:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/83b9ebf87d783abdde3ffbb73f12256d77906670"
        },
        "date": 1743394588706,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6161.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6294.66",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743473739778,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5114.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6027.49",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743475799547,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8989.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4545.87",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743564025350,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8837.72",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4489.24",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743566205620,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6067.56",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4532.88",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743647824751,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6881.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4641.57",
            "unit": "Requests per second",
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
          "id": "600f13ef78a32c185f6b4f891d6d5aec4b6b1a98",
          "message": "Enforce a task not switched to multiple CPUs",
          "timestamp": "2025-03-31T04:06:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/600f13ef78a32c185f6b4f891d6d5aec4b6b1a98"
        },
        "date": 1743650680256,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5146.12",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4522.63",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743737370440,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8875.23",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6163.34",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743820508238,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8874.09",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5626.85",
            "unit": "Requests per second",
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
          "id": "d378dc51ff289387707f60cda10a4dced9fe5f25",
          "message": "Enable `IA32_EFER.NXE` earlier in AP",
          "timestamp": "2025-04-04T08:52:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/d378dc51ff289387707f60cda10a4dced9fe5f25"
        },
        "date": 1743910227015,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5151.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5000.12",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6",
          "message": "Update outdated comments near `switch_to_task`",
          "timestamp": "2025-04-02T14:33:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6"
        },
        "date": 1744010328647,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8850.40",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5605.68",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744073770965,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5117.99",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5776.55",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744160238218,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8889.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4516.35",
            "unit": "Requests per second",
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
          "id": "b833ec6ede869b9dbf16863744b9441702d979bd",
          "message": "Implement ReadCString for MultiRead",
          "timestamp": "2025-04-09T06:36:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/b833ec6ede869b9dbf16863744b9441702d979bd"
        },
        "date": 1744245696730,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5127.07",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6100.51",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744364283723,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8921.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5519.75",
            "unit": "Requests per second",
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
          "id": "961ad738478518c084bd1d1c560dac56b9c72a81",
          "message": "Poll the correct iface in irq handler",
          "timestamp": "2025-04-22T03:26:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/961ad738478518c084bd1d1c560dac56b9c72a81"
        },
        "date": 1745376311282,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3063.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2056.46",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhenchen Wang",
            "username": "Plucky923",
            "email": "m202372036@hust.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a5f270ee96e77dfc0f54f6b9db945d88260ff89",
          "message": "Made some minor improvements to syscall statx\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>",
          "timestamp": "2025-04-23T08:33:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a5f270ee96e77dfc0f54f6b9db945d88260ff89"
        },
        "date": 1745470681136,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3307.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2392.67",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "764e3afa7c9a04b15afbaeb30f2bfa9df891176e",
          "message": "Add a simple test case for OverlayFS",
          "timestamp": "2025-04-24T07:58:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/764e3afa7c9a04b15afbaeb30f2bfa9df891176e"
        },
        "date": 1745552940872,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3125.94",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2125.15",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745635173447,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3190.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2153.86",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745719318096,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3971.48",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2420.86",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745808177794,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3364.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2883.97",
            "unit": "Requests per second",
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
          "id": "88f08de3af80641194f8afbf47c98648e8db3e5a",
          "message": "Refactor framebuffer",
          "timestamp": "2025-04-29T08:45:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/88f08de3af80641194f8afbf47c98648e8db3e5a"
        },
        "date": 1745981945241,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3082.54",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1699.75",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746067344145,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3597.44",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1717.81",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746152793835,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2468.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2175.66",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746242576956,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2892.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2115.10",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746325609720,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3160.29",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2923.16",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746411764209,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3167.42",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2482.22",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746503410448,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2963.83",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2881.66",
            "unit": "Requests per second",
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
          "id": "18df0f6ec94f018e3fc14b4bded6257d507611c4",
          "message": "Fix the linear mapping size if the IO range is high",
          "timestamp": "2025-05-06T09:26:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/18df0f6ec94f018e3fc14b4bded6257d507611c4"
        },
        "date": 1746584832747,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4909.08",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3305.17",
            "unit": "Requests per second",
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
          "id": "2961b89caa380f049766020b01e2c1af7930ec3d",
          "message": "Bump Docker image version to 0.14.1-20250507",
          "timestamp": "2025-05-07T08:34:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2961b89caa380f049766020b01e2c1af7930ec3d"
        },
        "date": 1746672456477,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2722.97",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3082.30",
            "unit": "Requests per second",
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
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747103306557,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2673.15",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2158.37",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747194443808,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3726.22",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2485.69",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747276095934,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2044.84",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2390.12",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf",
          "message": "Assign some library code owners",
          "timestamp": "2025-05-14T04:28:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf"
        },
        "date": 1747364137054,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3399.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3239.02",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747449613530,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3988.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3374.67",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747534732008,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4044.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2610.51",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747623591382,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3323.32",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2875.82",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747714659640,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3788.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2830.31",
            "unit": "Requests per second",
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
          "id": "12d693d7b4618b12f1617fa03dc2ce514226cc43",
          "message": "Optimize Docker builds by skipping existing images",
          "timestamp": "2025-05-19T11:50:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/12d693d7b4618b12f1617fa03dc2ce514226cc43"
        },
        "date": 1747799435786,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3459.71",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2466.88",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "e81053b9dcfba903be8395b1987883a058f5c486",
          "message": "Remove unnecessary `_rdtsc` uses",
          "timestamp": "2025-05-21T07:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e81053b9dcfba903be8395b1987883a058f5c486"
        },
        "date": 1747884314815,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4086.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3003.22",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908",
          "message": "Refactor interrupt remapping in OSTD",
          "timestamp": "2025-05-21T05:12:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908"
        },
        "date": 1747965209094,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3508.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2731.35",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "d4afe3a035481f3a36d4c4f930ac8794690c87dc",
          "message": "Avoid Rust references of IRT entries",
          "timestamp": "2025-05-09T03:39:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4afe3a035481f3a36d4c4f930ac8794690c87dc"
        },
        "date": 1748055014925,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3933.61",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3075.97",
            "unit": "Requests per second",
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
          "id": "79b3f6889262bc606e38f0f3f313b3cbe8933d41",
          "message": "Make the RCU lifetime of page tables explicit",
          "timestamp": "2025-05-20T03:39:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/79b3f6889262bc606e38f0f3f313b3cbe8933d41"
        },
        "date": 1748146172272,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3930.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2855.51",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748230625198,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2537.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2422.62",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748319522032,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3986.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2801.87",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748401326696,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4030.64",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2730.58",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748486407578,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3968.05",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3015.85",
            "unit": "Requests per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffb40974364c74ee3adaffdf8a7063b575233807",
          "message": "Add RISC-V timer support",
          "timestamp": "2025-04-28T03:04:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffb40974364c74ee3adaffdf8a7063b575233807"
        },
        "date": 1748578031162,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2349.95",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2332.45",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "6dc0189e432add7a5acea9f5615bc8c31461e6e2",
          "message": "Remove unnecssary overflow checks",
          "timestamp": "2025-05-27T03:08:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/6dc0189e432add7a5acea9f5615bc8c31461e6e2"
        },
        "date": 1748665498116,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3981.31",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2869.32",
            "unit": "Requests per second",
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
          "id": "58e4f45bb17dff6ea0dbe266f9045155ee54edb8",
          "message": "Add per-CPU counters and track RSS for each `Vmar`",
          "timestamp": "2025-06-03T14:05:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/58e4f45bb17dff6ea0dbe266f9045155ee54edb8"
        },
        "date": 1749024252932,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3375.73",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2536.17",
            "unit": "Requests per second",
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
          "id": "38c9ab06150e2fc322357705f8c40c13b1915648",
          "message": "Add LTP syscall tests",
          "timestamp": "2025-06-04T02:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/38c9ab06150e2fc322357705f8c40c13b1915648"
        },
        "date": 1749093865725,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2728.27",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3217.91",
            "unit": "Requests per second",
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
          "id": "01328ee4040930274dcd30725be7b223198c18cc",
          "message": "Fix panic when mount with invalid file system type",
          "timestamp": "2025-06-06T09:52:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/01328ee4040930274dcd30725be7b223198c18cc"
        },
        "date": 1749640036219,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7919.48",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6645.08",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5f28b48ca4afc7cece79d004370f3174b1ba4bda",
          "message": "Assign framebuffer code owners",
          "timestamp": "2025-06-10T05:24:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f28b48ca4afc7cece79d004370f3174b1ba4bda"
        },
        "date": 1749642528503,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7922.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5555.46",
            "unit": "Requests per second",
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
          "id": "3e32a38316a9b134bea3121fb89887c41eb93dc8",
          "message": "Add sys_close_range",
          "timestamp": "2025-06-01T10:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/3e32a38316a9b134bea3121fb89887c41eb93dc8"
        },
        "date": 1749687691889,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6012.53",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4625.65",
            "unit": "Requests per second",
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
          "id": "b605bed5764ec21ec847f0357ed564329f165762",
          "message": "Fix some typos",
          "timestamp": "2025-06-12T03:13:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/b605bed5764ec21ec847f0357ed564329f165762"
        },
        "date": 1749775477507,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 32KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7937.43",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6610.26",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file64KB_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "166a0588c703b2b7238a4b515a601458c75901cb",
          "message": "Reconstruct the integration/OSDK tests for flexible arch support",
          "timestamp": "2025-03-28T06:13:08Z",
          "url": "https://github.com/grief8/asterinas/commit/166a0588c703b2b7238a4b515a601458c75901cb"
        },
        "date": 1743221323003,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6531.09",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4715.46",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "865003738ab733eec4c3a72842e7f95553d89b6b",
          "message": "Enable gvisor xattr syscall test",
          "timestamp": "2025-03-28T06:04:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/865003738ab733eec4c3a72842e7f95553d89b6b"
        },
        "date": 1743229722801,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3569.26",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3405.42",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3c73672f52a8e41cfa948ecf68519067f8990cc6",
          "message": "Rename Benchmark Asterinas to Benchmark x86-64",
          "timestamp": "2025-03-29T01:49:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c73672f52a8e41cfa948ecf68519067f8990cc6"
        },
        "date": 1743246294674,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6522.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4196.33",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2cfb470789077917180da7baca8af9017b0ed9f4",
          "message": "Fix lmbench/ramfs_create_delete_files_0k_ops",
          "timestamp": "2025-03-28T07:20:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/2cfb470789077917180da7baca8af9017b0ed9f4"
        },
        "date": 1743308272402,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4219.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3376.96",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81780e64f87f9f80ee02dbe6db6bc5c7a7904afc",
          "message": "Update test_x86.yml",
          "timestamp": "2025-03-29T06:39:26Z",
          "url": "https://github.com/grief8/asterinas/commit/81780e64f87f9f80ee02dbe6db6bc5c7a7904afc"
        },
        "date": 1743316914588,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3577.92",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3450.24",
            "unit": "Requests per second",
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
          "id": "83b9ebf87d783abdde3ffbb73f12256d77906670",
          "message": "Avoid repetitive locking for clearing cache",
          "timestamp": "2025-03-20T12:22:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/83b9ebf87d783abdde3ffbb73f12256d77906670"
        },
        "date": 1743394851164,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6494.20",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4216.15",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743473808911,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4247.90",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4747.44",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743475884663,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6424.24",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4748.64",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743564106769,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4587.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3488.74",
            "unit": "Requests per second",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743566275614,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6456.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4608.86",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743647891344,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6423.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4195.38",
            "unit": "Requests per second",
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
          "id": "600f13ef78a32c185f6b4f891d6d5aec4b6b1a98",
          "message": "Enforce a task not switched to multiple CPUs",
          "timestamp": "2025-03-31T04:06:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/600f13ef78a32c185f6b4f891d6d5aec4b6b1a98"
        },
        "date": 1743650810191,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3548.58",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3473.87",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743737360769,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6537.82",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4096.01",
            "unit": "Requests per second",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743820498065,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6390.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4332.86",
            "unit": "Requests per second",
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
          "id": "d378dc51ff289387707f60cda10a4dced9fe5f25",
          "message": "Enable `IA32_EFER.NXE` earlier in AP",
          "timestamp": "2025-04-04T08:52:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/d378dc51ff289387707f60cda10a4dced9fe5f25"
        },
        "date": 1743910215801,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3521.93",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3452.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6",
          "message": "Update outdated comments near `switch_to_task`",
          "timestamp": "2025-04-02T14:33:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6"
        },
        "date": 1744010315087,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4402.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3392.80",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744073758168,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6433.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4168.88",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744160223681,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6594.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4249.99",
            "unit": "Requests per second",
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
          "id": "b833ec6ede869b9dbf16863744b9441702d979bd",
          "message": "Implement ReadCString for MultiRead",
          "timestamp": "2025-04-09T06:36:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/b833ec6ede869b9dbf16863744b9441702d979bd"
        },
        "date": 1744245682542,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3555.50",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3429.40",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744364266691,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6525.59",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4258.34",
            "unit": "Requests per second",
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
          "id": "961ad738478518c084bd1d1c560dac56b9c72a81",
          "message": "Poll the correct iface in irq handler",
          "timestamp": "2025-04-22T03:26:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/961ad738478518c084bd1d1c560dac56b9c72a81"
        },
        "date": 1745376289233,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1692.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1612.06",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhenchen Wang",
            "username": "Plucky923",
            "email": "m202372036@hust.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a5f270ee96e77dfc0f54f6b9db945d88260ff89",
          "message": "Made some minor improvements to syscall statx\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>",
          "timestamp": "2025-04-23T08:33:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a5f270ee96e77dfc0f54f6b9db945d88260ff89"
        },
        "date": 1745470658010,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1998.34",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1555.90",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "764e3afa7c9a04b15afbaeb30f2bfa9df891176e",
          "message": "Add a simple test case for OverlayFS",
          "timestamp": "2025-04-24T07:58:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/764e3afa7c9a04b15afbaeb30f2bfa9df891176e"
        },
        "date": 1745552917681,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1677.46",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1550.30",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745635149633,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1722.48",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1572.71",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745719293787,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2225.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2003.76",
            "unit": "Requests per second",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745808153625,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2672.35",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1555.49",
            "unit": "Requests per second",
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
          "id": "88f08de3af80641194f8afbf47c98648e8db3e5a",
          "message": "Refactor framebuffer",
          "timestamp": "2025-04-29T08:45:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/88f08de3af80641194f8afbf47c98648e8db3e5a"
        },
        "date": 1745981920407,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2484.48",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2776.63",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746067318983,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2314.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1694.50",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746152767286,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2350.57",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1573.78",
            "unit": "Requests per second",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746242549006,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2960.55",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1979.07",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746325581911,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2234.32",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1488.19",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746411733755,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2142.04",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1561.54",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746503379020,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2739.81",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1459.81",
            "unit": "Requests per second",
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
          "id": "18df0f6ec94f018e3fc14b4bded6257d507611c4",
          "message": "Fix the linear mapping size if the IO range is high",
          "timestamp": "2025-05-06T09:26:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/18df0f6ec94f018e3fc14b4bded6257d507611c4"
        },
        "date": 1746584799986,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2150.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1856.96",
            "unit": "Requests per second",
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
          "id": "2961b89caa380f049766020b01e2c1af7930ec3d",
          "message": "Bump Docker image version to 0.14.1-20250507",
          "timestamp": "2025-05-07T08:34:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2961b89caa380f049766020b01e2c1af7930ec3d"
        },
        "date": 1746672425524,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1725.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1643.28",
            "unit": "Requests per second",
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
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747103274553,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2845.49",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1986.18",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747194408249,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2169.36",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1748.10",
            "unit": "Requests per second",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747276061543,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2693.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1864.75",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf",
          "message": "Assign some library code owners",
          "timestamp": "2025-05-14T04:28:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf"
        },
        "date": 1747364119404,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2786.03",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2161.55",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747449578280,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2845.28",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2220.28",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747534695884,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2892.86",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1880.47",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747623554159,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2063.76",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1759.47",
            "unit": "Requests per second",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747714621587,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1775.32",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1704.66",
            "unit": "Requests per second",
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
          "id": "12d693d7b4618b12f1617fa03dc2ce514226cc43",
          "message": "Optimize Docker builds by skipping existing images",
          "timestamp": "2025-05-19T11:50:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/12d693d7b4618b12f1617fa03dc2ce514226cc43"
        },
        "date": 1747799396904,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1818.41",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1677.29",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "e81053b9dcfba903be8395b1987883a058f5c486",
          "message": "Remove unnecessary `_rdtsc` uses",
          "timestamp": "2025-05-21T07:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e81053b9dcfba903be8395b1987883a058f5c486"
        },
        "date": 1747884275306,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2668.63",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1962.11",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908",
          "message": "Refactor interrupt remapping in OSTD",
          "timestamp": "2025-05-21T05:12:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908"
        },
        "date": 1747965168691,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2690.33",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1941.61",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "d4afe3a035481f3a36d4c4f930ac8794690c87dc",
          "message": "Avoid Rust references of IRT entries",
          "timestamp": "2025-05-09T03:39:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4afe3a035481f3a36d4c4f930ac8794690c87dc"
        },
        "date": 1748054971709,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1930.10",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2108.13",
            "unit": "Requests per second",
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
          "id": "79b3f6889262bc606e38f0f3f313b3cbe8933d41",
          "message": "Make the RCU lifetime of page tables explicit",
          "timestamp": "2025-05-20T03:39:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/79b3f6889262bc606e38f0f3f313b3cbe8933d41"
        },
        "date": 1748146129421,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2879.67",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1546.62",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748230581786,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2717.16",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1498.52",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748319477624,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2814.37",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1960.14",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748401281262,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2872.19",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2108.28",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748486361386,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2807.17",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2055.12",
            "unit": "Requests per second",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffb40974364c74ee3adaffdf8a7063b575233807",
          "message": "Add RISC-V timer support",
          "timestamp": "2025-04-28T03:04:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffb40974364c74ee3adaffdf8a7063b575233807"
        },
        "date": 1748577982313,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2059.96",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1845.54",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "6dc0189e432add7a5acea9f5615bc8c31461e6e2",
          "message": "Remove unnecssary overflow checks",
          "timestamp": "2025-05-27T03:08:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/6dc0189e432add7a5acea9f5615bc8c31461e6e2"
        },
        "date": 1748665449907,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1623.51",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1338.80",
            "unit": "Requests per second",
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
          "id": "58e4f45bb17dff6ea0dbe266f9045155ee54edb8",
          "message": "Add per-CPU counters and track RSS for each `Vmar`",
          "timestamp": "2025-06-03T14:05:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/58e4f45bb17dff6ea0dbe266f9045155ee54edb8"
        },
        "date": 1749024201633,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2703.01",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2194.62",
            "unit": "Requests per second",
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
          "id": "38c9ab06150e2fc322357705f8c40c13b1915648",
          "message": "Add LTP syscall tests",
          "timestamp": "2025-06-04T02:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/38c9ab06150e2fc322357705f8c40c13b1915648"
        },
        "date": 1749093815635,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2348.39",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1599.32",
            "unit": "Requests per second",
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
          "id": "01328ee4040930274dcd30725be7b223198c18cc",
          "message": "Fix panic when mount with invalid file system type",
          "timestamp": "2025-06-06T09:52:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/01328ee4040930274dcd30725be7b223198c18cc"
        },
        "date": 1749639984950,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5404.60",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3314.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
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
          "id": "5f28b48ca4afc7cece79d004370f3174b1ba4bda",
          "message": "Assign framebuffer code owners",
          "timestamp": "2025-06-10T05:24:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f28b48ca4afc7cece79d004370f3174b1ba4bda"
        },
        "date": 1749642475895,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4051.91",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4492.11",
            "unit": "Requests per second",
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
          "id": "3e32a38316a9b134bea3121fb89887c41eb93dc8",
          "message": "Add sys_close_range",
          "timestamp": "2025-06-01T10:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/3e32a38316a9b134bea3121fb89887c41eb93dc8"
        },
        "date": 1749687638680,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4012.65",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4585.07",
            "unit": "Requests per second",
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
          "id": "b605bed5764ec21ec847f0357ed564329f165762",
          "message": "Fix some typos",
          "timestamp": "2025-06-12T03:13:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/b605bed5764ec21ec847f0357ed564329f165762"
        },
        "date": 1749775425533,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance (virtio-net, 16KB file size)",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5305.75",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4527.18",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_req10k_conc1_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "166a0588c703b2b7238a4b515a601458c75901cb",
          "message": "Reconstruct the integration/OSDK tests for flexible arch support",
          "timestamp": "2025-03-28T06:13:08Z",
          "url": "https://github.com/grief8/asterinas/commit/166a0588c703b2b7238a4b515a601458c75901cb"
        },
        "date": 1743221742271,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14653.40",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4870.49",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "865003738ab733eec4c3a72842e7f95553d89b6b",
          "message": "Enable gvisor xattr syscall test",
          "timestamp": "2025-03-28T06:04:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/865003738ab733eec4c3a72842e7f95553d89b6b"
        },
        "date": 1743229968962,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8556.01",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4252.33",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3c73672f52a8e41cfa948ecf68519067f8990cc6",
          "message": "Rename Benchmark Asterinas to Benchmark x86-64",
          "timestamp": "2025-03-29T01:49:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c73672f52a8e41cfa948ecf68519067f8990cc6"
        },
        "date": 1743246575471,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13947.56",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4616.22",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2cfb470789077917180da7baca8af9017b0ed9f4",
          "message": "Fix lmbench/ramfs_create_delete_files_0k_ops",
          "timestamp": "2025-03-28T07:20:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/2cfb470789077917180da7baca8af9017b0ed9f4"
        },
        "date": 1743309004433,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14660.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4835.46",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81780e64f87f9f80ee02dbe6db6bc5c7a7904afc",
          "message": "Update test_x86.yml",
          "timestamp": "2025-03-29T06:39:26Z",
          "url": "https://github.com/grief8/asterinas/commit/81780e64f87f9f80ee02dbe6db6bc5c7a7904afc"
        },
        "date": 1743317159884,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14234.04",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4625.56",
            "unit": "Kbytes/sec",
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
          "id": "83b9ebf87d783abdde3ffbb73f12256d77906670",
          "message": "Avoid repetitive locking for clearing cache",
          "timestamp": "2025-03-20T12:22:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/83b9ebf87d783abdde3ffbb73f12256d77906670"
        },
        "date": 1743395101879,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14249.57",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4519.09",
            "unit": "Kbytes/sec",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743473870765,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "9115.81",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4113.00",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743475961139,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14234.33",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4078.51",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743564186791,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14294.53",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4623.63",
            "unit": "Kbytes/sec",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743566350432,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14330.47",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4328.91",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743647959161,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14119.85",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4451.23",
            "unit": "Kbytes/sec",
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
          "id": "600f13ef78a32c185f6b4f891d6d5aec4b6b1a98",
          "message": "Enforce a task not switched to multiple CPUs",
          "timestamp": "2025-03-31T04:06:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/600f13ef78a32c185f6b4f891d6d5aec4b6b1a98"
        },
        "date": 1743650884546,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14340.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4708.42",
            "unit": "Kbytes/sec",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743737351210,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14307.72",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4771.98",
            "unit": "Kbytes/sec",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743820487682,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8531.98",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4081.59",
            "unit": "Kbytes/sec",
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
          "id": "d378dc51ff289387707f60cda10a4dced9fe5f25",
          "message": "Enable `IA32_EFER.NXE` earlier in AP",
          "timestamp": "2025-04-04T08:52:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/d378dc51ff289387707f60cda10a4dced9fe5f25"
        },
        "date": 1743910204737,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14209.98",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4746.44",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6",
          "message": "Update outdated comments near `switch_to_task`",
          "timestamp": "2025-04-02T14:33:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6"
        },
        "date": 1744010301155,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8843.56",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4845.23",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744073745241,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7739.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4039.66",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744160210343,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14356.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4731.31",
            "unit": "Kbytes/sec",
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
          "id": "b833ec6ede869b9dbf16863744b9441702d979bd",
          "message": "Implement ReadCString for MultiRead",
          "timestamp": "2025-04-09T06:36:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/b833ec6ede869b9dbf16863744b9441702d979bd"
        },
        "date": 1744245668684,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14044.90",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4563.54",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744364249580,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "8988.96",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4017.35",
            "unit": "Kbytes/sec",
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
          "id": "961ad738478518c084bd1d1c560dac56b9c72a81",
          "message": "Poll the correct iface in irq handler",
          "timestamp": "2025-04-22T03:26:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/961ad738478518c084bd1d1c560dac56b9c72a81"
        },
        "date": 1745376267806,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6697.94",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2563.85",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhenchen Wang",
            "username": "Plucky923",
            "email": "m202372036@hust.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a5f270ee96e77dfc0f54f6b9db945d88260ff89",
          "message": "Made some minor improvements to syscall statx\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>",
          "timestamp": "2025-04-23T08:33:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a5f270ee96e77dfc0f54f6b9db945d88260ff89"
        },
        "date": 1745470634849,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4811.58",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2811.35",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "764e3afa7c9a04b15afbaeb30f2bfa9df891176e",
          "message": "Add a simple test case for OverlayFS",
          "timestamp": "2025-04-24T07:58:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/764e3afa7c9a04b15afbaeb30f2bfa9df891176e"
        },
        "date": 1745552894670,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3990.66",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2369.54",
            "unit": "Kbytes/sec",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745635125663,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5435.72",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3284.93",
            "unit": "Kbytes/sec",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745719269317,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5130.07",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3304.88",
            "unit": "Kbytes/sec",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745808128986,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5087.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2705.02",
            "unit": "Kbytes/sec",
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
          "id": "88f08de3af80641194f8afbf47c98648e8db3e5a",
          "message": "Refactor framebuffer",
          "timestamp": "2025-04-29T08:45:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/88f08de3af80641194f8afbf47c98648e8db3e5a"
        },
        "date": 1745981895618,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6507.07",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1924.59",
            "unit": "Kbytes/sec",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746067293902,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6716.03",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3049.80",
            "unit": "Kbytes/sec",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746152741149,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4647.79",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2492.80",
            "unit": "Kbytes/sec",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746242521397,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4906.68",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2244.46",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746325554164,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4392.55",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2835.62",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746411703791,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5131.67",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2258.50",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746503347814,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6873.31",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2659.41",
            "unit": "Kbytes/sec",
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
          "id": "18df0f6ec94f018e3fc14b4bded6257d507611c4",
          "message": "Fix the linear mapping size if the IO range is high",
          "timestamp": "2025-05-06T09:26:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/18df0f6ec94f018e3fc14b4bded6257d507611c4"
        },
        "date": 1746584768104,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4017.69",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2296.01",
            "unit": "Kbytes/sec",
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
          "id": "2961b89caa380f049766020b01e2c1af7930ec3d",
          "message": "Bump Docker image version to 0.14.1-20250507",
          "timestamp": "2025-05-07T08:34:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2961b89caa380f049766020b01e2c1af7930ec3d"
        },
        "date": 1746672394571,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3985.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2698.63",
            "unit": "Kbytes/sec",
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
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747103243104,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6756.82",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3222.10",
            "unit": "Kbytes/sec",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747194373906,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7279.70",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3052.25",
            "unit": "Kbytes/sec",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747276027015,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5698.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3121.72",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf",
          "message": "Assign some library code owners",
          "timestamp": "2025-05-14T04:28:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf"
        },
        "date": 1747364085566,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6005.30",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2671.84",
            "unit": "Kbytes/sec",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747449543064,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5659.87",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3011.44",
            "unit": "Kbytes/sec",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747534659260,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6882.45",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2919.24",
            "unit": "Kbytes/sec",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747623517700,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5591.40",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3037.16",
            "unit": "Kbytes/sec",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747714583949,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6008.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2932.41",
            "unit": "Kbytes/sec",
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
          "id": "12d693d7b4618b12f1617fa03dc2ce514226cc43",
          "message": "Optimize Docker builds by skipping existing images",
          "timestamp": "2025-05-19T11:50:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/12d693d7b4618b12f1617fa03dc2ce514226cc43"
        },
        "date": 1747799357830,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6361.99",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3066.39",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "e81053b9dcfba903be8395b1987883a058f5c486",
          "message": "Remove unnecessary `_rdtsc` uses",
          "timestamp": "2025-05-21T07:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e81053b9dcfba903be8395b1987883a058f5c486"
        },
        "date": 1747884235432,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5111.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2369.05",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908",
          "message": "Refactor interrupt remapping in OSTD",
          "timestamp": "2025-05-21T05:12:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908"
        },
        "date": 1747965128190,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5975.62",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3170.06",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "d4afe3a035481f3a36d4c4f930ac8794690c87dc",
          "message": "Avoid Rust references of IRT entries",
          "timestamp": "2025-05-09T03:39:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4afe3a035481f3a36d4c4f930ac8794690c87dc"
        },
        "date": 1748054929090,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5420.84",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2721.84",
            "unit": "Kbytes/sec",
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
          "id": "79b3f6889262bc606e38f0f3f313b3cbe8933d41",
          "message": "Make the RCU lifetime of page tables explicit",
          "timestamp": "2025-05-20T03:39:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/79b3f6889262bc606e38f0f3f313b3cbe8933d41"
        },
        "date": 1748146087335,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "7193.48",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3240.90",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748230538122,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4955.66",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2888.76",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748319432781,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6609.77",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2662.85",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748401236228,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6910.58",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3066.11",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748486314144,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5329.79",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2297.50",
            "unit": "Kbytes/sec",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffb40974364c74ee3adaffdf8a7063b575233807",
          "message": "Add RISC-V timer support",
          "timestamp": "2025-04-28T03:04:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffb40974364c74ee3adaffdf8a7063b575233807"
        },
        "date": 1748577934186,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6453.41",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3116.28",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "6dc0189e432add7a5acea9f5615bc8c31461e6e2",
          "message": "Remove unnecssary overflow checks",
          "timestamp": "2025-05-27T03:08:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/6dc0189e432add7a5acea9f5615bc8c31461e6e2"
        },
        "date": 1748665400946,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5999.87",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3317.37",
            "unit": "Kbytes/sec",
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
          "id": "58e4f45bb17dff6ea0dbe266f9045155ee54edb8",
          "message": "Add per-CPU counters and track RSS for each `Vmar`",
          "timestamp": "2025-06-03T14:05:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/58e4f45bb17dff6ea0dbe266f9045155ee54edb8"
        },
        "date": 1749024151365,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "6780.44",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2878.95",
            "unit": "Kbytes/sec",
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
          "id": "38c9ab06150e2fc322357705f8c40c13b1915648",
          "message": "Add LTP syscall tests",
          "timestamp": "2025-06-04T02:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/38c9ab06150e2fc322357705f8c40c13b1915648"
        },
        "date": 1749093765981,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "5429.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2807.06",
            "unit": "Kbytes/sec",
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
          "id": "01328ee4040930274dcd30725be7b223198c18cc",
          "message": "Fix panic when mount with invalid file system type",
          "timestamp": "2025-06-06T09:52:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/01328ee4040930274dcd30725be7b223198c18cc"
        },
        "date": 1749639933883,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13142.13",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4135.80",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "5f28b48ca4afc7cece79d004370f3174b1ba4bda",
          "message": "Assign framebuffer code owners",
          "timestamp": "2025-06-10T05:24:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f28b48ca4afc7cece79d004370f3174b1ba4bda"
        },
        "date": 1749642423617,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13208.11",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4493.32",
            "unit": "Kbytes/sec",
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
          "id": "3e32a38316a9b134bea3121fb89887c41eb93dc8",
          "message": "Add sys_close_range",
          "timestamp": "2025-06-01T10:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/3e32a38316a9b134bea3121fb89887c41eb93dc8"
        },
        "date": 1749687585058,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13200.91",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2953.79",
            "unit": "Kbytes/sec",
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
          "id": "b605bed5764ec21ec847f0357ed564329f165762",
          "message": "Fix some typos",
          "timestamp": "2025-06-12T03:13:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/b605bed5764ec21ec847f0357ed564329f165762"
        },
        "date": 1749775373506,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "13322.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4523.21",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_req10k_conc20_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "166a0588c703b2b7238a4b515a601458c75901cb",
          "message": "Reconstruct the integration/OSDK tests for flexible arch support",
          "timestamp": "2025-03-28T06:13:08Z",
          "url": "https://github.com/grief8/asterinas/commit/166a0588c703b2b7238a4b515a601458c75901cb"
        },
        "date": 1743221958224,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19822.08",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5473.50",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "865003738ab733eec4c3a72842e7f95553d89b6b",
          "message": "Enable gvisor xattr syscall test",
          "timestamp": "2025-03-28T06:04:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/865003738ab733eec4c3a72842e7f95553d89b6b"
        },
        "date": 1743230149794,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15831.56",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5593.11",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3c73672f52a8e41cfa948ecf68519067f8990cc6",
          "message": "Rename Benchmark Asterinas to Benchmark x86-64",
          "timestamp": "2025-03-29T01:49:52Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c73672f52a8e41cfa948ecf68519067f8990cc6"
        },
        "date": 1743246700104,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19649.70",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5635.42",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2cfb470789077917180da7baca8af9017b0ed9f4",
          "message": "Fix lmbench/ramfs_create_delete_files_0k_ops",
          "timestamp": "2025-03-28T07:20:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/2cfb470789077917180da7baca8af9017b0ed9f4"
        },
        "date": 1743309228225,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "31936.58",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5911.02",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "81780e64f87f9f80ee02dbe6db6bc5c7a7904afc",
          "message": "Update test_x86.yml",
          "timestamp": "2025-03-29T06:39:26Z",
          "url": "https://github.com/grief8/asterinas/commit/81780e64f87f9f80ee02dbe6db6bc5c7a7904afc"
        },
        "date": 1743317286968,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19459.65",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5886.45",
            "unit": "Kbytes/sec",
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
          "id": "83b9ebf87d783abdde3ffbb73f12256d77906670",
          "message": "Avoid repetitive locking for clearing cache",
          "timestamp": "2025-03-20T12:22:48Z",
          "url": "https://github.com/asterinas/asterinas/commit/83b9ebf87d783abdde3ffbb73f12256d77906670"
        },
        "date": 1743395224623,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "31531.04",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5869.54",
            "unit": "Kbytes/sec",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743473937939,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19768.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5722.40",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743475998086,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "33500.88",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5654.42",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743564218640,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20025.41",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5839.51",
            "unit": "Kbytes/sec",
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
          "id": "09a8ab8800c930a4b8c89a70b61f52e85333c15e",
          "message": "Respect local X2Apic MADT entry",
          "timestamp": "2025-03-29T11:21:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/09a8ab8800c930a4b8c89a70b61f52e85333c15e"
        },
        "date": 1743566388198,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "33805.02",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5902.83",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f4e79d99d04757347a6eaa05f6acb41b8898c927",
          "message": "Enforce the suitable width of badge",
          "timestamp": "2025-03-31T00:48:12Z",
          "url": "https://github.com/grief8/asterinas/commit/f4e79d99d04757347a6eaa05f6acb41b8898c927"
        },
        "date": 1743647994371,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19889.07",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5307.96",
            "unit": "Kbytes/sec",
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
          "id": "600f13ef78a32c185f6b4f891d6d5aec4b6b1a98",
          "message": "Enforce a task not switched to multiple CPUs",
          "timestamp": "2025-03-31T04:06:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/600f13ef78a32c185f6b4f891d6d5aec4b6b1a98"
        },
        "date": 1743650924484,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19599.80",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5576.22",
            "unit": "Kbytes/sec",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743737346334,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "31873.64",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5832.12",
            "unit": "Kbytes/sec",
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
          "id": "9915978d35cf5ee0cbc4561ec718e0a4a16441fb",
          "message": "Enable vfork gVisor test",
          "timestamp": "2025-04-01T08:38:55Z",
          "url": "https://github.com/asterinas/asterinas/commit/9915978d35cf5ee0cbc4561ec718e0a4a16441fb"
        },
        "date": 1743820482601,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19626.51",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5350.03",
            "unit": "Kbytes/sec",
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
          "id": "d378dc51ff289387707f60cda10a4dced9fe5f25",
          "message": "Enable `IA32_EFER.NXE` earlier in AP",
          "timestamp": "2025-04-04T08:52:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/d378dc51ff289387707f60cda10a4dced9fe5f25"
        },
        "date": 1743910199391,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "31310.73",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5810.98",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6",
          "message": "Update outdated comments near `switch_to_task`",
          "timestamp": "2025-04-02T14:33:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/5ed5647d421cd7b38cd1d3f10018d6b7e4029dd6"
        },
        "date": 1744010294019,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19585.11",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5907.87",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744073738855,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15857.75",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5593.90",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Caiyi Shyu",
            "username": "Cai1Hsu",
            "email": "cai1hsu@outlook.com"
          },
          "committer": {
            "name": "Junyang Zhang",
            "username": "junyang-zh",
            "email": "user@junyang.me"
          },
          "id": "3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c",
          "message": "feat(osdk): add LoongArch64 variant in `Arch` enum",
          "timestamp": "2025-03-10T11:01:23Z",
          "url": "https://github.com/asterinas/asterinas/commit/3c2c31ceb0af7bfe0f8ec63fd04fbb92e7233b9c"
        },
        "date": 1744160203515,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "31633.30",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5908.81",
            "unit": "Kbytes/sec",
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
          "id": "b833ec6ede869b9dbf16863744b9441702d979bd",
          "message": "Implement ReadCString for MultiRead",
          "timestamp": "2025-04-09T06:36:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/b833ec6ede869b9dbf16863744b9441702d979bd"
        },
        "date": 1744245661474,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19287.34",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5654.26",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabian LI",
            "username": "grief8",
            "email": "lifabing1349212501@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e9c2886a84698efd3493dcacf8f6563cde139c40",
          "message": "Fix platform definition",
          "timestamp": "2025-04-10T08:27:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/e9c2886a84698efd3493dcacf8f6563cde139c40"
        },
        "date": 1744364241334,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15990.18",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5680.95",
            "unit": "Kbytes/sec",
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
          "id": "961ad738478518c084bd1d1c560dac56b9c72a81",
          "message": "Poll the correct iface in irq handler",
          "timestamp": "2025-04-22T03:26:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/961ad738478518c084bd1d1c560dac56b9c72a81"
        },
        "date": 1745376257307,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22223.31",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5166.89",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhenchen Wang",
            "username": "Plucky923",
            "email": "m202372036@hust.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "3a5f270ee96e77dfc0f54f6b9db945d88260ff89",
          "message": "Made some minor improvements to syscall statx\n\nSigned-off-by: Zhenchen Wang <m202372036@hust.edu.cn>",
          "timestamp": "2025-04-23T08:33:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/3a5f270ee96e77dfc0f54f6b9db945d88260ff89"
        },
        "date": 1745470622899,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16173.08",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4835.13",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "764e3afa7c9a04b15afbaeb30f2bfa9df891176e",
          "message": "Add a simple test case for OverlayFS",
          "timestamp": "2025-04-24T07:58:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/764e3afa7c9a04b15afbaeb30f2bfa9df891176e"
        },
        "date": 1745552882774,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "18614.32",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4643.86",
            "unit": "Kbytes/sec",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745635113855,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16025.52",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3955.17",
            "unit": "Kbytes/sec",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745719257352,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15328.92",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3861.84",
            "unit": "Kbytes/sec",
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
          "id": "7def2649bab2131315b62b8d5340e1f3da97842e",
          "message": "Enable timerfd gvisor test",
          "timestamp": "2025-04-25T08:16:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/7def2649bab2131315b62b8d5340e1f3da97842e"
        },
        "date": 1745808116621,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15505.32",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3680.54",
            "unit": "Kbytes/sec",
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
          "id": "88f08de3af80641194f8afbf47c98648e8db3e5a",
          "message": "Refactor framebuffer",
          "timestamp": "2025-04-29T08:45:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/88f08de3af80641194f8afbf47c98648e8db3e5a"
        },
        "date": 1745981883134,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19823.22",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2854.52",
            "unit": "Kbytes/sec",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746067281514,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22501.44",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4797.42",
            "unit": "Kbytes/sec",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746152727907,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15795.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5090.24",
            "unit": "Kbytes/sec",
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
          "id": "725a46fe72546af880ea183cf6d4b35349b709c6",
          "message": "Modify VMO usages and fix the atomic-mode issue during handling page fault",
          "timestamp": "2025-04-30T02:09:38Z",
          "url": "https://github.com/asterinas/asterinas/commit/725a46fe72546af880ea183cf6d4b35349b709c6"
        },
        "date": 1746242507916,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19612.34",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5189.28",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746325539971,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "19338.32",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3709.62",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746411687732,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15721.52",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4068.11",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "54bd64269bd688b149b7f48f063f0e8cf2704a01",
          "message": "Rename `systree` to `aster-systree`",
          "timestamp": "2025-04-30T12:59:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/54bd64269bd688b149b7f48f063f0e8cf2704a01"
        },
        "date": 1746503332363,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16112.13",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4623.46",
            "unit": "Kbytes/sec",
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
          "id": "18df0f6ec94f018e3fc14b4bded6257d507611c4",
          "message": "Fix the linear mapping size if the IO range is high",
          "timestamp": "2025-05-06T09:26:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/18df0f6ec94f018e3fc14b4bded6257d507611c4"
        },
        "date": 1746584752591,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "23817.57",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3855.69",
            "unit": "Kbytes/sec",
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
          "id": "2961b89caa380f049766020b01e2c1af7930ec3d",
          "message": "Bump Docker image version to 0.14.1-20250507",
          "timestamp": "2025-05-07T08:34:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/2961b89caa380f049766020b01e2c1af7930ec3d"
        },
        "date": 1746672379079,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20827.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3726.75",
            "unit": "Kbytes/sec",
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
          "id": "ad6aa4960c11a712c56213bd30f0e271875337e5",
          "message": "Bump the project version",
          "timestamp": "2025-05-09T09:21:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/ad6aa4960c11a712c56213bd30f0e271875337e5"
        },
        "date": 1747103227033,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15850.13",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5242.34",
            "unit": "Kbytes/sec",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747194356846,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15848.74",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5145.74",
            "unit": "Kbytes/sec",
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
          "id": "d71ea25c06ed7ed427917cec77d3761ddc67d686",
          "message": "Publish the heap allocator after updating the version",
          "timestamp": "2025-05-13T04:56:07Z",
          "url": "https://github.com/asterinas/asterinas/commit/d71ea25c06ed7ed427917cec77d3761ddc67d686"
        },
        "date": 1747276009855,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15790.47",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4264.13",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf",
          "message": "Assign some library code owners",
          "timestamp": "2025-05-14T04:28:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/ecb33ca98d2b2ac680daf1d2a48e4d011db2fbcf"
        },
        "date": 1747364068635,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16103.11",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5268.04",
            "unit": "Kbytes/sec",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747449524964,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14715.97",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4020.58",
            "unit": "Kbytes/sec",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747534639148,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "16767.26",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3927.11",
            "unit": "Kbytes/sec",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747623499429,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15306.62",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4327.53",
            "unit": "Kbytes/sec",
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
          "id": "dec7ac1346649a0ef1a1256da258cd2f9f11ac4b",
          "message": "Add safety check to `stop_guest` function to prevent killing non-existent processes",
          "timestamp": "2025-05-16T01:17:00Z",
          "url": "https://github.com/asterinas/asterinas/commit/dec7ac1346649a0ef1a1256da258cd2f9f11ac4b"
        },
        "date": 1747714565088,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15370.23",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4887.96",
            "unit": "Kbytes/sec",
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
          "id": "12d693d7b4618b12f1617fa03dc2ce514226cc43",
          "message": "Optimize Docker builds by skipping existing images",
          "timestamp": "2025-05-19T11:50:39Z",
          "url": "https://github.com/asterinas/asterinas/commit/12d693d7b4618b12f1617fa03dc2ce514226cc43"
        },
        "date": 1747799338599,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "17116.78",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4862.02",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "e81053b9dcfba903be8395b1987883a058f5c486",
          "message": "Remove unnecessary `_rdtsc` uses",
          "timestamp": "2025-05-21T07:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e81053b9dcfba903be8395b1987883a058f5c486"
        },
        "date": 1747884215635,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15659.57",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4806.53",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "3329907643@qq.com"
          },
          "id": "d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908",
          "message": "Refactor interrupt remapping in OSTD",
          "timestamp": "2025-05-21T05:12:50Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4872af3c78769ed5ea7a1a1bbbe310fcd6d2908"
        },
        "date": 1747965107908,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15363.50",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4266.10",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "d4afe3a035481f3a36d4c4f930ac8794690c87dc",
          "message": "Avoid Rust references of IRT entries",
          "timestamp": "2025-05-09T03:39:19Z",
          "url": "https://github.com/asterinas/asterinas/commit/d4afe3a035481f3a36d4c4f930ac8794690c87dc"
        },
        "date": 1748054907655,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14252.41",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4270.03",
            "unit": "Kbytes/sec",
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
          "id": "79b3f6889262bc606e38f0f3f313b3cbe8933d41",
          "message": "Make the RCU lifetime of page tables explicit",
          "timestamp": "2025-05-20T03:39:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/79b3f6889262bc606e38f0f3f313b3cbe8933d41"
        },
        "date": 1748146066191,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15768.64",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5233.85",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748230516728,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22771.33",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5259.47",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748319410555,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "14548.95",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4992.07",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748401213383,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15271.11",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4039.90",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "758c80c32170cd3cc6d62bd2d867a1c902843d0f",
          "message": "Pull code from `arch/*/irq.rs` to `trap/irq.rs`",
          "timestamp": "2025-05-23T15:18:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/758c80c32170cd3cc6d62bd2d867a1c902843d0f"
        },
        "date": 1748486290930,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "22238.95",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4927.54",
            "unit": "Kbytes/sec",
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
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffb40974364c74ee3adaffdf8a7063b575233807",
          "message": "Add RISC-V timer support",
          "timestamp": "2025-04-28T03:04:29Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffb40974364c74ee3adaffdf8a7063b575233807"
        },
        "date": 1748577910007,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21840.18",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4322.19",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "6dc0189e432add7a5acea9f5615bc8c31461e6e2",
          "message": "Remove unnecssary overflow checks",
          "timestamp": "2025-05-27T03:08:47Z",
          "url": "https://github.com/asterinas/asterinas/commit/6dc0189e432add7a5acea9f5615bc8c31461e6e2"
        },
        "date": 1748665376363,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15663.24",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5263.31",
            "unit": "Kbytes/sec",
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
          "id": "58e4f45bb17dff6ea0dbe266f9045155ee54edb8",
          "message": "Add per-CPU counters and track RSS for each `Vmar`",
          "timestamp": "2025-06-03T14:05:34Z",
          "url": "https://github.com/asterinas/asterinas/commit/58e4f45bb17dff6ea0dbe266f9045155ee54edb8"
        },
        "date": 1749024126003,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15829.98",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "5222.45",
            "unit": "Kbytes/sec",
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
          "id": "38c9ab06150e2fc322357705f8c40c13b1915648",
          "message": "Add LTP syscall tests",
          "timestamp": "2025-06-04T02:15:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/38c9ab06150e2fc322357705f8c40c13b1915648"
        },
        "date": 1749093741204,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "15856.47",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "4887.53",
            "unit": "Kbytes/sec",
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
          "id": "01328ee4040930274dcd30725be7b223198c18cc",
          "message": "Fix panic when mount with invalid file system type",
          "timestamp": "2025-06-06T09:52:08Z",
          "url": "https://github.com/asterinas/asterinas/commit/01328ee4040930274dcd30725be7b223198c18cc"
        },
        "date": 1749639908335,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "20915.05",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6015.88",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
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
          "id": "5f28b48ca4afc7cece79d004370f3174b1ba4bda",
          "message": "Assign framebuffer code owners",
          "timestamp": "2025-06-10T05:24:21Z",
          "url": "https://github.com/asterinas/asterinas/commit/5f28b48ca4afc7cece79d004370f3174b1ba4bda"
        },
        "date": 1749642397272,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "21067.49",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6103.94",
            "unit": "Kbytes/sec",
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
          "id": "3e32a38316a9b134bea3121fb89887c41eb93dc8",
          "message": "Add sys_close_range",
          "timestamp": "2025-06-01T10:11:06Z",
          "url": "https://github.com/asterinas/asterinas/commit/3e32a38316a9b134bea3121fb89887c41eb93dc8"
        },
        "date": 1749687558586,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "33473.93",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6043.47",
            "unit": "Kbytes/sec",
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
          "id": "b605bed5764ec21ec847f0357ed564329f165762",
          "message": "Fix some typos",
          "timestamp": "2025-06-12T03:13:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/b605bed5764ec21ec847f0357ed564329f165762"
        },
        "date": 1749775347456,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": false,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "36218.65",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "6143.97",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}