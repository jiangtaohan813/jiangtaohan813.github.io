// 在这里填写和更新资料。zh 是中文，en 是英文。
// 邮箱、图片、论文链接和 PDF 可由两种语言共用。文件路径相对于网站根目录。
window.homepageContent = {
  // 移动下面各行可调整首页栏目和顶部导航的顺序。
  sectionOrder: [
    "featured", // 代表作
    "publications", // 论文成果
    "research-projects", // 科研项目
    "awards", // 荣誉奖项
    "education", // 教育经历
    "activities", // 近期动态
  ],

  // 首页和专题页共用。颜色可填 "#000000" 这样的十六进制色值。
  colors: {
    background: "#F5F8FD", // 页面底色
    surface: "#FFFFFF", // 页眉、语言切换外框和跳转到正文的底色
    panel: "#EAF2FC", // 代表作卡片、专题页内容框和论文悬停底色
    text: "#172A46", // 标题、正文和加粗作者姓名
    mutedText: "#4B607C", // 导航、身份和学校、论文作者等次要文字
    accent: "#235BA8", // 链接、按钮底色、强调标签和期刊年份等
    onAccent: "#FFFFFF", // 主色背景上的文字，例如“查看专题”
    border: "#CAD9EB", // 分隔线、外框和论文链接下划线
  },

  // 字号可填写 "18px" 或 "1.125rem"。clamp(...) 会随屏幕宽度变化。
  fontSizes: {
    scale: 1, // 全站缩放比例。改为 1.1 可将所有文字放大 10%。

    // 页眉、导航和页脚
    siteName: "1rem", // 页眉中的姓名
    navigation: "0.92rem", // 导航菜单
    languageSwitch: "0.86rem", // 中文 / EN
    skipLink: "1rem", // 键盘导航的“跳转到正文”
    backToTop: "0.9rem", // 回到顶部

    // 个人信息
    profileName: "clamp(2.5rem, 6.2vw, 4.25rem)", // 首页大姓名
    profilePosition: "1.1rem", // 身份和学校
    bioTitle: "1.1rem", // 个人简介标题
    bioText: "1.04rem", // 简介正文及其中的姓名链接
    research: "1.1rem", // 研究方向正文
    researchLabel: "", // “研究方向”标签，留空时跟随正文
    email: "1.1rem", // 邮箱地址
    emailLabel: "", // “邮箱”标签，留空时跟随地址
    imagePlaceholder: "0.87rem", // 头像和代表作图片的占位提示

    // 代表作
    featuredHeading: "clamp(1.6rem, 3.5vw, 2rem)", // 首页的“代表作”栏目标题
    featuredTitle: "clamp(1.4rem, 3vw, 2rem)", // 首页的项目名称
    projectQuestionTitle: "0.9rem", // 两页的“研究问题”标题
    projectQuestionText: "1rem", // 两页的研究问题正文
    projectLink: "0.92rem", // 查看专题
    projectTitle: "clamp(2rem, 5vw, 3.5rem)", // 专题页的主标题
    backToHome: "0.92rem", // 返回首页
    projectResultTitle: "1.3rem", // 研究结果标题
    projectResultText: "1rem", // 研究结果正文
    projectResourcesTitle: "1.3rem", // 相关资源标题
    projectResourceLink: "1rem", // 相关资源链接

    // 论文成果
    publicationsHeading: "clamp(1.6rem, 3.5vw, 2rem)", // “论文成果”栏目标题
    publicationsMore: "", // 查看更多，留空时跟随“查看专题”的字号
    paperYear: "1.75rem", // 年份
    paperVenue: "1.1rem", // 期刊
    paperTitle: "clamp(1.12rem, 2.2vw, 1.35rem)", // 论文标题
    paperAuthors: "1rem", // 论文作者
    paperLink: "0.9rem", // 论文链接
    pdfLink: "", // PDF 链接，留空时跟随论文链接

    // 教育经历、科研项目、荣誉奖项和近期动态
    educationHeading: "", // 教育经历标题，留空时跟随论文成果标题
    researchProjectsHeading: "", // 科研项目标题
    awardsHeading: "", // 荣誉奖项标题
    activitiesHeading: "", // 近期动态标题
    recordsMore: "", // 科研项目和荣誉奖项的查看更多，留空时跟随论文成果按钮字号
    recordTitle: "1.15rem", // 学校、科研项目题目和奖项名称
    recordSummary: "1rem", // 学位与日期、项目类别与角色和获奖等级
    recordDetails: "1rem", // 专业和导师
    galleryHeading: "", // 全部照片页标题，留空时跟随论文成果标题
    galleryCaption: "1rem", // 奖状和活动照片的说明
    galleryMore: "", // 照片区的查看更多，留空时跟随论文成果的按钮字号
  },

  profile: {
    name: { zh: "韩江涛", en: "Jiangtao Han" },
    institution: { zh: "天津大学", en: "Tianjin University" },
    role: { zh: "博士生在读", en: "PhD student" },
    bio: {
      zh: "天津大学管理与经济学部管理科学与工程专业在读博士生，导师为国家级领军人才、天津大学讲席教授马寿峰教授。",
      en: "A PhD student in Management Science and Engineering at the College of Management and Economics, Tianjin University, supervised by Professor Shoufeng Ma, a nationally recognized leading scholar and Chair Professor at Tianjin University.",
    },
    // 左边填简介里的姓名，右边填完整的个人主页网址。留空时显示为普通文字。
    bioLinks: {
      "马寿峰": "https://come.tju.edu.cn/info/1622/6907.htm",
"Shoufeng Ma": "https://come.tju.edu.cn/info/1622/6907.htm",
    },
    research: { zh: "基于大语言模型的仿真；基于交通出行的生成式出行代理；群决策", en: "Agentic city; AI agents; Group decision making" },
    // 多个邮箱用分号隔开。
    email: "jiangtaohan813@outlook.com; hanjt813@163.com",
    photo: "assets/jiangtao.jpg",
  },

  education: [
    {
      title: { zh: "桂林电子科技大学", en: "Guilin University of Electronic Technology" },
      summary: { zh: "硕士 · 2021.09–2024.06", en: "Master’s · 2021.09–2024.06" },
      details: {
        zh: "专业：管理科学与工程\n导师：张发明教授（国家百千万人才工程人选，国家有突出贡献中青年专家）",
        en: "Major: Management Science and Engineering\nAdvisor: Professor Faming Zhang",
      },
      links: {
        "张发明": "https://baike.baidu.com/item/%E5%BC%A0%E5%8F%91%E6%98%8E/19719482",
        "Faming Zhang": "https://baike.baidu.com/item/%E5%BC%A0%E5%8F%91%E6%98%8E/19719482",
      },
    },
    {
      title: { zh: "山西财经大学", en: "Shanxi University of Finance and Economics" },
      summary: { zh: "本科 · 2017.09–2021.06", en: "Bachelor’s · 2017.09–2021.06" },
      details: { zh: "专业：工程管理", en: "Major: Engineering Management" },
    },
  ],

  // title 填项目题目，program 填项目类别，role 填主持或参与。
  researchProjects: [
    {
      title: { zh: "基于信任激励机制的动态群体评价方法及应用研究", en: "Research on Dynamic Group Evaluation Methods Based on Trust Incentive Mechanisms and Their Applications" },
      program: { zh: "广西研究生教育创新计划项目（省级项目）", en: "Guangxi Graduate Education Innovation Program (provincial project)" },
      role: { zh: "主持", en: "Project lead" },
    },
    {
      title: { zh: "人机融合系统的理论及运营、风险管理研究", en: "Human-machine integration system: theory, operation, and risk management" },
      program: { zh: "国家自然科学基金重点项目", en: "Key Project of the National Natural Science Foundation of China" },
      role: { zh: "参与", en: "Participant" },
    },
    {
      title: { zh: "数智驱动的公共服务复杂性机理、运营机制与治理机制研究", en: "Research on the complexity mechanism, operational mechanism, and governance mechanism of data-intelligent driven public services" },
      program: { zh: "国家自然科学基金重点项目", en: "Key Project of the National Natural Science Foundation of China" },
      role: { zh: "参与", en: "Participant" },
    },
    {
      title: { zh: "复杂信息下的动态激励模型与方法研究", en: "Research on Dynamic Incentive Models and Methods under Complex Information Environments" },
      program: { zh: "国家自然科学基金项目", en: "National Natural Science Foundation of China Project" },
      role: { zh: "参与", en: "Participant" },
    },
  ],

  awards: [
    {
      title: { zh: "第十三届全国大学生市场调查与分析大赛", en: "13th National College Student Market Survey and Analysis Competition" },
      summary: { zh: "国家级三等奖", en: "National Third Prize" },
    },
    {
      title: { zh: "全国大学生统计建模大赛研究组", en: "National College Student Statistical Modeling Competition (Research Division)" },
      summary: { zh: "国家二等奖", en: "National Second Prize" },
    },
{
      title: { zh: "“创青春”山西省兴晋挑战杯大学生创业大赛", en: "\"Create Youth\" Shanxi Xingjin Challenge Cup College Student Entrepreneurship Competition" },
      summary: { zh: "金奖", en: "Gold Award" },
    },
{
      title: { zh: "研究生国家奖学金", en: "National Scholarship for Graduate Students" },
      summary: { zh: "国家奖学金", en: "National Scholarship" },
    },
{
      title: { zh: "桂林电子科技大学优秀研究生", en: "Outstanding Graduate Student" },
      summary: { zh: "优秀研究生", en: "Outstanding Graduate Student (2023)" },
    },
{
      title: { zh: "第四届“互联网+”大学生创新创业大赛", en: "4th \"Internet+\" College Student Innovation and Entrepreneurship Competition" },
      summary: { zh: "铜奖", en: "Bronze Award" },
    },
  ],

  // 将奖状照片放入 assets/，例如 image: "assets/certificate-1.jpg"。
  // caption 是照片下的说明。按希望展示的顺序填写，可以继续增加条目。
  certificates: [
    { image: "assets/awards/国奖.png", caption: { zh: "研究生国家奖学金", en: "National Scholarship" } },
    { image: "assets/awards/第九届统计建模大赛国家二等奖.png", caption: { zh: "全国大学生统计建模大赛研究生组国家二等奖", en: "National Second Prize" } },
    { image: "assets/awards/第十三届全国大学生市场调查与分析大赛国家三等奖.png", caption: { zh: "全国大学生市场调查与分析大赛研究生组国家三等奖", en: "National Third Prize" } },
{ image: "assets/awards/2023年桂林电子科技大学研究生市场调查与分析大赛一等奖.png", caption: { zh: "2023年桂林电子科技大学研究生市场调查与分析大赛一等奖", en: "First Prize, 2023 Guilin University of Electronic Technology Graduate Student Market Survey and Analysis Competition" } },
{ image: "assets/awards/2023年优秀研究生.png", caption: { zh: "2023年优秀研究生", en: "Outstanding Graduate Student (2023)" } },
  ],

  // 近期动态的图片和说明。把想在首页优先展示的照片放在前面。
  activities: [
    { image: "assets/recent/CTS-1.jpg", caption: { zh: "第十七届计算交通科学国际研讨会", en: "CTS 2026" } },
    { image: "assets/recent/CTS-2.jpg", caption: { zh: "CTS 2026 分会场汇报", en: "Presentation at CTS 2026" } },
    { image: "assets/recent/复旦大学开放论坛.jpg", caption: { zh: "第三届国家发展与智能治理前沿探索暑期学校", en: "The 3rd Summer School on Frontier Explorations in National Development and Intelligent Governance" } },
  ],

  // 暂不展示代表作时，可以把整个 featuredProject 设为 null。
  featuredProject: {
    title: { zh: "Towards an Agentic City: Rethinking How We Simulate Cities", en: "Towards an Agentic City: Rethinking How We Simulate Cities" },
    // 修改 questionTitle 可以更换首页和专题页的栏目标题。
    questionTitle: { zh: "研究概括", en: "Introduction" },
    question: {
      zh: "We introduce an agentic city as a long-term vision for city-scale multi-AI-agent simulation in which heterogeneous autonomous AI agents interact across urban functional systems.",
      en: "We introduce an agentic city as a long-term vision for city-scale multi-AI-agent simulation in which heterogeneous autonomous AI agents interact across urban functional systems.",
    },
    image: "assets/AC.gif",
    imageAlt: { zh: "", en: "" },
    result: { zh: "", en: "" },
    // 例如 { label: { zh: "查看演示", en: "View demo" }, url: "https://example.com/demo" }
    links: [],
  },

  // 按希望展示的顺序排列。复制一个条目即可添加一篇论文。
  publications: [
    {
      title: { zh: "Reproducing human biases in route choice using large language models: Toward scalable behavioral modeling", en: "Reproducing human biases in route choice using large language models: Toward scalable behavioral modeling" },
      authors: { zh: "韩江涛，马寿峰，徐淑贤，李庚，凌帅，贾宁，贺正冰", en: "Jiangtao Han, Shoufeng Ma, Shuxian Xu, Geng Li, Shuai Ling, Ning Jia, Zhengbing He" },
      venue: { zh: "arXiv", en: "JarXiv" },
      year: "2026",
      paperUrl: "https://arxiv.org/abs/2607.11632",
      pdf: "assets/papers/2607.11632v1.pdf",
    },
{
      title: { zh: "AgenticMobility: An Open-Source Platform for Multi-AI-Agent Mobility Dynamics", en: "AgenticMobility: An Open-Source Platform for Multi-AI-Agent Mobility Dynamics" },
      authors: { zh: "Jiaheng Xiao, Jiangtao Han, Jiachen Wang, Honghai Li, Lijun Sun, Kay Axhausen, Chang Liu, Zhengbing He", en: "Jiaheng Xiao, Jiangtao Han, Jiachen Wang, Honghai Li, Lijun Sun, Kay Axhausen, Chang Liu, Zhengbing He" },
      venue: { zh: "arXiv", en: "JarXiv" },
      year: "2026",
      paperUrl: "https://arxiv.org/abs/2611.01918",
      pdf: "assets/papers/2611.01918v1.pdf",
    },
{
      title: { zh: "社会信任网络下基于T2PLD算子的多属性大群体决策方法", en: "Multi-Attribute Large Group Decision Making Method Based on T2PLD Operator in Social Trust Network"},
      authors: { zh: "张发明，韩江涛，张淋茜，朱姝琪", en: "Faming Zhang, Jiangtao Han, Linqian Zhang, Shuqi Zhu" },
      venue: { zh: "中国管理科学", en: "Chinese Journal of Management Science" },
      year: "2025",
      paperUrl: "https://kns.cnki.net/kcms2/article/abstract?v=phcjkAe6zZgcpTonhefuhHHQeZKPQtkOr-naffXs826jgFdLNq5cYwgMl9mbci5nHYk9KySWs9u3l5v-SA1f2CfCKddr7uihJbUMXygicfAo0KlH72jh4gtRU51kspfbjXY-Zs16q0Na7o5ti0b0ccvua7xwhzNRjD0Zc71Gi3YDKuQ9BTtd3w==",
      pdf: "assets/papers/社会信任网络下基于T2PLD算子的多属性大群体决策方法-韩江涛.pdf",
    },
{
      title: { zh: "社会信任环境下基于激励机制的交互式群体共识达成方法", en: "A method of interactive group consensus reaching based on incentive evaluation mechanism in social trust environment"},
      authors: { zh: "张发明，韩江涛，张淋茜，何斯琪", en: "Faming Zhang, Jiangtao Han, Linqian Zhang, Siqi He" },
      venue: { zh: "系统科学与数学", en: "Journal of Systems Science and Mathematical Sciences" },
      year: "2025",
      paperUrl: "https://kns.cnki.net/kcms2/article/abstract?v=phcjkAe6zZgK2ikVTIeQTbvk6uaeh2TT1AYpiufim5vtX2QUuJ9ezoWeqglD7HL-C-kJTHYypaj9dyr5taI7I-vL1V_nkcHRJAhXrW7kNSFrnAFTTQPDA3dPer0lFXUuMTJQMIxKKn_C3Y6-fQem_-qokEmkLGn0SlmrrvSDk3IWdTWztc9RiA==",
      pdf: "assets/papers/社会信任环境下基于激励机制的交互式群体共识达成方法_韩江涛.pdf",
    },
{
      title: { zh: "基于证据理论的多阶段混合型偏好信息群决策方法", en: "A method for multi-stage group decision making based on evidence theory under hybrid preference information"},
      authors: { zh: "张发明，张淋茜，韩江涛", en: "Faming Zhang, Linqian Zhang, Jiangtao Han" },
      venue: { zh: "系统工程理论与实践", en: "Systems Engineering-Theory & Practice" },
      year: "2023",
      paperUrl: "https://kns.cnki.net/kcms2/article/abstract?v=phcjkAe6zZgK2ikVTIeQTbvk6uaeh2TT1AYpiufim5tj6covh1jVJjD2iopa1bx2bXaBatLJ5uwGB48C-kAR9uoVXTpzlNbWloEFYAjcgdpCeHjuA54ZpFpHvdCAtWHnoKkwE-yJsDjL2hpMsPMPHe2mZXJalfETzIzC4MHVD1hAVPBbO0splA==",
      pdf: "assets/papers/基于证据理论的多阶段混合型偏好信息群决策方法_韩江涛.pdf",
    },
{
      title: { zh: "区块链研究现状、知识演进与趋势分析——基于WOS核心数据库文献的科学计量", en: "A method for multi-stage group decision making based on evidence theory under hybrid preference information"},
      authors: { zh: "李晓武，曲国华，张悦，韩江涛", en: "Xiaowu Li, Guohua Qu, Yue Zhang, Jiangtao Han" },
      venue: { zh: "经济问题", en: "On Economic Problems" },
      year: "2022",
      paperUrl: "https://kns.cnki.net/kcms2/article/abstract?v=phcjkAe6zZjKOFZq6qvcpcjGWQTgO9JQtTVZ0kDTmWD-ohoOTccpkTUQrH280mdrbU82wf4C2mKPzcTh7GxpBNMt_xlFjSa5h3wrDwhZ-UjDaqQ2xqW2xzL0ppXfCB7GJNKOvOYc1GM79SrVpwrQI2lf5reSjpTMQbf7TbVmC41Uya3yC4D9iQ==",
      pdf: "assets/papers/区块链研究现状、知识演进与趋势分析-韩江涛.pdf",
    },
  ],
};
