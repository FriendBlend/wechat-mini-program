Page({
  data: {
    activeTab: 0,
    pastEvents: [
      { date: "2022-12-31", name: "跨年派对", info: "欢迎来到新的一年！" },
      { date: "2022-12-31", name: "跨年派对", info: "欢迎来到新的一年！" },
      { date: "2022-12-31", name: "跨年派对", info: "欢迎来到新的一年！" },
      { date: "2022-12-31", name: "跨年派对", info: "欢迎来到新的一年！" },
      { date: "2022-12-31", name: "跨年派对", info: "欢迎来到新的一年！" },
      { date: "2022-12-31", name: "跨年派对", info: "欢迎来到新的一年！" },
      { date: "2022-12-31", name: "跨年派对", info: "欢迎来到新的一年！" },
      { date: "2022-12-31", name: "跨年派对", info: "欢迎来到新的一年！" }
    ],
    futureEvents: [
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" },
      { date: "2023-07-31", name: "生日聚会", info: "欢迎来庆祝我的生日！" }
    ],
  },
  switchTab(event) {
    const index = event.currentTarget.dataset.index;
    this.setData({
      activeTab: parseInt(index),
    });
  },
});
