## 1.项目简介

使用React编写的网易云音乐PC Web项目，接口来源于 [开源接口](https://binaryify.github.io/NeteaseCloudMusicApi/#/) 。

项目已完成功能如下：

推荐页面：

- 轮播图
- 热门推荐
- 新碟上架
- 榜单

[recommend-page1]

[recommend-page2]

歌曲播放：

- 目前实现了榜单中歌曲的点击播放（同时加入播放列表）
- 歌曲的播放控制：暂停、播放、上一首、下一首、改变进度
- 播放顺序切换：顺序播放、随机播放、单曲循环
- 对歌词进行解析，用 [message组件](https://ant.design/components/message-cn/#header) 进行单句展示

## 2.项目运行

安装项目依赖：

```js
yarn install
```

项目运行：

```js
yarn start
```
