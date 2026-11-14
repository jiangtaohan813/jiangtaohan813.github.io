# 个人主页维护说明

解压后，用浏览器打开 `index.html` 预览中文首页。首页和代表作专题页右上角都有「中文 / EN」切换。切换到英文后，刷新、进入专题和返回首页都会保留英文。上线后也可以直接分享带 `?lang=en` 的网址。

## 更新资料

日常更新集中在 `content.js`。双语字段里的 `zh` 和 `en` 分别填中文和英文，保存后刷新页面。论文原题、期刊名等共用文字可以直接写成一个字符串。某种语言的文字留空时，页面会显示已填写的另一种语言。邮箱、图片、论文链接和 PDF 可共用。

1. **个人信息。** 在 `profile` 填写姓名、机构、身份、简介 `bio`、研究方向和公开邮箱。简介显示在身份和机构的下方。将头像放进 `assets/`，把 `photo` 填为对应路径，例如 `assets/portrait.webp`。
2. **代表作。** 在 `featuredProject` 填写项目名 `title`、栏目标题 `questionTitle` 和正文 `question`。首页和专题页共用这三项。将真实结果图或视频封面放进 `assets/`，填入 `image`，并用 `imageAlt` 简述图中关键信息。专题页可以补充 `result` 和 `links`，填入相关论文、代码或视频地址。要暂时隐藏该栏目，将 `featuredProject` 的值设为 `null`。
3. **论文。** 在 `publications` 中复制、删除或移动一组花括号中的条目，就能添加、移除或调整顺序。`authors` 里的作者用逗号或顿号分隔，与 `profile.name` 一致的署名会自动加粗。将论文 PDF 放进 `assets/papers/`，或填写可公开访问的 PDF 链接。把 DOI、期刊页面或预印本页面填入 `paperUrl`。

要给简介里的姓名加链接，在 `profile.bioLinks` 里填写姓名和完整的主页网址。姓名的写法要和简介一致，中英文姓名可以分别添加。

下面是一条论文记录的填写示例。把路径和文字替换为实际资料。

```js
{
  title: { zh: "你的论文题目", en: "Your paper title" },
  authors: { zh: "作者的中文署名", en: "Authors as listed on the paper" },
  venue: "期刊或会议名称",
  year: "发表年份",
  paperUrl: "https://example.com/paper",
  pdf: "assets/papers/your-paper.pdf",
},
```

首页按 `publications` 中的顺序展示前 5 条。超过 5 条时，点击右下角的「查看更多」可打开完整列表。两页共用同一份资料。如果暂无论文，可以写成 `publications: []`，首页栏目和导航会随之隐藏。

教育经历和荣誉奖项分别在 `education` 和 `awards` 里维护。`title` 填学校或奖项名称，`summary` 填学位和日期或获奖等级。教育经历的 `details` 可填写专业和导师，`links` 按「姓名对应网址」填写导师链接。科研项目在 `researchProjects` 里维护，`title` 填项目题目，`program` 填项目类别，`role` 填主持或参与。

科研项目和荣誉奖项在首页各展示前 6 项，按各自在 `content.js` 中的顺序排列。列表右下方的「查看更多」打开完整列表，奖状下方的「查看更多照片」打开相册。

在 `certificates` 和 `activities` 中分别填写奖状照片和近期活动照片。将照片放进 `assets/`，例如把 `image` 填成 `"assets/activity-1.jpg"`。在 `caption` 填写照片下方的中英文说明。首页各取前三张已填写路径的照片，空缺处显示照片位。点「查看更多」可查看该组的全部照片。

代表作图框在首页为 16:10，在专题页为 16:9，共用一张图时可用 1600 × 900 像素，图片会完整显示。奖状和活动照片的图框均为 4:3，可用 1200 × 900 像素。奖状会完整显示，活动照片会裁切到填满图框。

首页栏目顺序由 `content.js` 开头的 `sectionOrder` 决定。从上到下移动各行，保存并刷新后，首页正文和顶部导航会同步换序。个人信息位于首页最上方，未列出的栏目排在末尾。

## 调整字号

在 `content.js` 开头的 `fontSizes` 里调整各页字号，中英文共用。每项旁边有中文说明。单项可以填 `"18px"` 或 `"1.125rem"`，保存后刷新页面。使用 `clamp(...)` 的标题会随屏幕宽度变化。

`scale` 是全站缩放比例，填 `1.1` 可将所有文字放大 10%。研究方向、邮箱、年份和期刊的字号分别对应 `research`、`email`、`paperYear` 和 `paperVenue`。

## 调整配色

在 `content.js` 开头的 `colors` 里改色值，保存后刷新页面。首页和代表作专题页共用这组颜色。比如把 `accent` 改为 `"#000000"`，链接、按钮底色和强调文字就会一起变成黑色。其余各项的用途见旁边的中文注释。悬停底色、占位图网格和阴影会随配色变化。

## 发布到 GitHub Pages

1. 创建公开仓库 `<用户名>.github.io`，把解压目录**里面的文件**上传到仓库根目录，让 `index.html` 位于 `main` 分支顶层。
2. 在仓库的 **Settings → Pages** 选择 **Deploy from a branch → `main` → `/(root)`**。部署完成后点击 **Visit site**。后续提交 `content.js` 和素材变更即可更新网站。 [GitHub Pages 发布设置](https://docs.github.com/zh/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 使用 `www` 自定义域名

1. 注册可用的 `xxx.com`，或使用你已有的域名。在 GitHub 个人设置的 **Pages** 中按提示添加 TXT 记录验证域名。 [域名验证文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
2. 到网站仓库的 **Settings → Pages → Custom domain** 填入 `www.xxx.com`。
3. 到域名服务商的 DNS 设置添加一条 `CNAME`，主机记录为 `www`，记录值为 `<用户名>.github.io`。DNS 检查通过后，在 GitHub 勾选 **Enforce HTTPS**。如果希望 `xxx.com` 也能跳转到 `www.xxx.com`，再按文档设置根域的 DNS 记录。 [自定义域名文档](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
