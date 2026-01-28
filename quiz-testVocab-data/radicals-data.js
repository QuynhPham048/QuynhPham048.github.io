const RADICALS = [
  {
    hanzi: "目",
    pinyin: "mù",
    name: "Mục",
    meaning: "Mắt",
    note: "Liên quan đến nhìn, thấy, mắt (看, 睛, 眠...)"
  },
  {
    hanzi: "月",
    pinyin: "yuè",
    name: "Nguyệt",
    meaning: "Mặt trăng, tháng",
    note: "Chỉ thời gian (tháng) hoặc mặt trăng"
  },
  {
    hanzi: "人 ( 亻)",
    pinyin: "rén",
    name: "Nhân",
    meaning: "Người",
    note: "亻 là biến thể đứng của 人, liên quan đến con người, hành động của người (你, 他, 住...)"
  },
  {
    hanzi: "口",
    pinyin: "kǒu",
    name: "Khẩu",
    meaning: "Miệng",
    note: "Nói năng, ăn uống (吃, 喝, 问...)"
  },
  {
    hanzi: "心 ( 忄)",
    pinyin: "xīn",
    name: "Tâm",
    meaning: "Tim, lòng",
    note: "Cảm xúc, suy nghĩ (想, 忘, 忙...)"
  },
  {
    hanzi: "肉 ( 月 )",
    pinyin: "ròu",
    name: "Nhục",
    meaning: "Thịt, cơ thể",
    note: `- 月: là biến thể của bộ Nhục (肉), dùng cho cơ thể, nội tạng 
⚠️ Hình dạng rất giống bộ Nguyệt nên dễ nhầm
    `
  },
  {
  hanzi: "儿",
  pinyin: "ér",
  name: "Nhi",
  meaning: "Trẻ con",
  note: "Liên quan đến trẻ em, con cái (儿子, 女儿)"
},
{
  hanzi: "头",
  pinyin: "tóu",
  name: "Đầu",
  meaning: "Cái đầu",
  note: "Chỉ đầu, trí óc, phía trên (头发, 点头)"
},
{
  hanzi: "宀",
  pinyin: "mián",
  name: "Miên",
  meaning: "Mái nhà",
  note: "Liên quan đến nhà cửa, nơi ở (家, 室, 安)"
},
{
  hanzi: "冖",
  pinyin: "mì",
  name: "Mịch",
  meaning: "Che phủ",
  note: "Ý che đậy, bao phủ (写, 冠)"
},
{
  hanzi: "冰 (冫)",
  pinyin: "bīng",
  name: "Băng",
  meaning: "Nước đá, lạnh",
  note: "冫 là biến thể, liên quan đến lạnh, băng (冷, 冬)"
},
{
  hanzi: "己",
  pinyin: "jǐ",
  name: "Kỷ",
  meaning: "Bản thân",
  note: "Chỉ chính mình (自己, 已经)"
},
{
  hanzi: "刀 (刂)",
  pinyin: "dāo",
  name: "Đao",
  meaning: "Dao",
  note: "刂 là biến thể đứng bên phải, liên quan cắt, chém (切, 别)"
},
{
  hanzi: "力",
  pinyin: "lì",
  name: "Lực",
  meaning: "Sức lực",
  note: "Liên quan sức mạnh, lao động (男, 办)"
},
{
  hanzi: "包",
  pinyin: "bāo",
  name: "Bao",
  meaning: "Bao bọc",
  note: "Ý bao, gói, chứa (包子, 包含)"
},
{
  hanzi: "手 ( 扌)",
  pinyin: "shǒu",
  name: "Thủ",
  meaning: "Tay",
  note: "扌 là biến thể, liên quan hành động bằng tay (打, 拿)"
},
{
  hanzi: "子",
  pinyin: "zǐ",
  name: "Tử",
  meaning: "Con, hạt",
  note: "Con cái, sự sinh trưởng (孩子, 字)"
},
{
  hanzi: "又",
  pinyin: "yòu",
  name: "Hựu",
  meaning: "Lặp lại, tay phải",
  note: "Liên quan hành động, lặp lại (友, 双)"
},
{
  hanzi: "囗",
  pinyin: "wéi",
  name: "Vi",
  meaning: "Bao quanh",
  note: "Bao khung bên ngoài, không phải bộ Khẩu (国, 园)"
},
{
  hanzi: "土",
  pinyin: "tǔ",
  name: "Thổ",
  meaning: "Đất",
  note: "Đất đai, nơi chốn (地, 在)"
},
{
  hanzi: "士",
  pinyin: "shì",
  name: "Sĩ",
  meaning: "Người có học",
  note: "Chỉ người trí thức, địa vị (老师, 志)"
},
{
  hanzi: "夕",
  pinyin: "xī",
  name: "Tịch",
  meaning: "Buổi tối",
  note: "Liên quan đêm tối (外, 多)"
},
{
  hanzi: "廴",
  pinyin: "yǐn",
  name: "Dẫn",
  meaning: "Bước dài, đi",
  note: "Liên quan đến đi lại, kéo dài (建, 延...)"
},
{
  hanzi: "大",
  pinyin: "dà",
  name: "Đại",
  meaning: "To, lớn",
  note: "Chỉ kích thước lớn (天, 太...)"
},
{
  hanzi: "女",
  pinyin: "nǚ",
  name: "Nữ",
  meaning: "Con gái, phụ nữ",
  note: "Liên quan nữ giới (妈, 姐, 好...)"
},
{
  hanzi: "子",
  pinyin: "zǐ",
  name: "Tử",
  meaning: "Con, đứa trẻ",
  note: "Con cái, học tập (字, 学...)"
},
{
  hanzi: "小",
  pinyin: "xiǎo",
  name: "Tiểu",
  meaning: "Nhỏ",
  note: "Kích thước nhỏ (少, 当...)"
},
{
  hanzi: "寸",
  pinyin: "cùn",
  name: "Thốn",
  meaning: "Tấc",
  note: "Đơn vị đo, tay, hành động (对, 寺...)"
},
{
  hanzi: "山",
  pinyin: "shān",
  name: "Sơn",
  meaning: "Núi",
  note: "Địa hình, núi non (峰, 岛...)"
},
{
  hanzi: "工",
  pinyin: "gōng",
  name: "Công",
  meaning: "Công việc, thợ",
  note: "Lao động, kỹ thuật (巧, 江...)"
},
{
  hanzi: "斤",
  pinyin: "jīn",
  name: "Cân",
  meaning: "Cái rìu, cân",
  note: "Liên quan chặt, đo (新, 断...)"
},
{
  hanzi: "广",
  pinyin: "guǎng",
  name: "Nghiễm (Quảng)",
  meaning: "Mái nhà rộng",
  note: "Nhà cửa, quảng trường, che phủ (店, 床...)"
},
{
  hanzi: "弓",
  pinyin: "gōng",
  name: "Cung",
  meaning: "Cái cung",
  note: "Vũ khí, kéo (张, 强...)"
},
{
  hanzi: "彳",
  pinyin: "chì",
  name: "Xích",
  meaning: "Bước chân trái",
  note: "Đi lại, hành động (行, 很...)"
},
{
  hanzi: "手",
  pinyin: "shǒu",
  name: "Thủ",
  meaning: "Tay",
  note: "Hành động bằng tay (打, 拿...)"
},
{
  hanzi: "攵",
  pinyin: "pū",
  name: "Phộc",
  meaning: "Đánh, gõ",
  note: "Hành động, tác động (教, 放...)"
},
{
  hanzi: "文",
  pinyin: "wén",
  name: "Văn",
  meaning: "Văn chương, chữ viết",
  note: "Liên quan đến văn hóa, chữ nghĩa (文, 斌, 纹...)"
},
{
  hanzi: "言 (讠)",
  pinyin: "yán",
  name: "Ngôn",
  meaning: "Lời nói",
  note: "讠 là biến thể giản thể, liên quan nói năng (说, 话, 讲...)"
},
{
  hanzi: "斤",
  pinyin: "jīn",
  name: "Cân",
  meaning: "Cái rìu, đơn vị cân",
  note: "Liên quan công cụ, đo lường (新, 断...)"
},
{
  hanzi: "日",
  pinyin: "rì",
  name: "Nhật",
  meaning: "Mặt trời, ngày",
  note: "Liên quan thời gian, ánh sáng (明, 时, 晚...)"
},
{
  hanzi: "聿",
  pinyin: "yù",
  name: "Viết",
  meaning: "Cây bút",
  note: "Liên quan viết lách (书, 律...)"
},
{
  hanzi: "木",
  pinyin: "mù",
  name: "Mộc",
  meaning: "Cây, gỗ",
  note: "Liên quan cây cối, đồ gỗ (林, 桌, 杯...)"
},
{
  hanzi: "毛",
  pinyin: "máo",
  name: "Mao",
  meaning: "Lông",
  note: "Liên quan lông, tóc (毫...)"
},
{
  hanzi: "示 (礻)",
  pinyin: "shì",
  name: "Thị",
  meaning: "Thần linh, lễ nghi",
  note: "礻 là biến thể, liên quan tín ngưỡng (神, 礼, 祖...)"
},
{
  hanzi: "气",
  pinyin: "qì",
  name: "Khí",
  meaning: "Hơi, khí",
  note: "Liên quan khí, thời tiết, năng lượng (气, 气候...)"
},
{
  hanzi: "水 (氵)",
  pinyin: "shuǐ",
  name: "Thủy",
  meaning: "Nước",
  note: "氵 là biến thể thường dùng bên trái (河, 洗, 海...)"
},
{
  hanzi: "火 (灬)",
  pinyin: "huǒ",
  name: "Hỏa",
  meaning: "Lửa",
  note: "灬 là biến thể ở dưới (热, 然...)"
},
{
  hanzi: "父",
  pinyin: "fù",
  name: "Phụ",
  meaning: "Cha",
  note: "Liên quan gia đình, người lớn (爸...)"
},
{
  hanzi: "牛 (牜)",
  pinyin: "niú",
  name: "Ngưu",
  meaning: "Trâu, bò",
  note: "牜 là biến thể bên trái (物, 特...)"
},
{
  hanzi: "犬 (犭)",
  pinyin: "quǎn",
  name: "Khuyển",
  meaning: "Chó",
  note: "犭 là biến thể, liên quan động vật (狗, 猫...)"
},
{
  hanzi: "玉 (王)",
  pinyin: "yù",
  name: "Ngọc",
  meaning: "Ngọc, đá quý",
  note: "王 là biến thể thường gặp (理, 珠...)"
},
{
  hanzi: "田",
  pinyin: "tián",
  name: "Điền",
  meaning: "Ruộng",
  note: "Liên quan nông nghiệp, đất đai (男, 留...)"
},
{
  hanzi: "疒",
  pinyin: "nè",
  name: "Nạch",
  meaning: "Bệnh tật",
  note: "Liên quan bệnh, y học (病, 疼, 痛...)"
},
{
  hanzi: "白",
  pinyin: "bái",
  name: "Bạch",
  meaning: "Trắng",
  note: "Liên quan màu trắng, sáng (百, 的...)"
},
{
  hanzi: "石",
  pinyin: "shí",
  name: "Thạch",
  meaning: "Đá",
  note: "Liên quan đá, khoáng vật (矿, 码...)"
},
{
  hanzi: "禾",
  pinyin: "hé",
  name: "Hòa",
  meaning: "Lúa",
  note: "Liên quan nông nghiệp, lúa gạo (秋, 种...)"
},
{
  hanzi: "立",
  pinyin: "lì",
  name: "Lập",
  meaning: "Đứng",
  note: "Liên quan đứng, thiết lập (位, 音...)"
},
{
  hanzi: "竹 (⺮)",
  pinyin: "zhú",
  name: "Trúc",
  meaning: "Tre",
  note: "⺮ là biến thể, liên quan đồ tre, công cụ (笔, 箱...)"
},
{
  hanzi: "米",
  pinyin: "mǐ",
  name: "Mễ",
  meaning: "Gạo",
  note: "Liên quan gạo, hạt (饭, 粉...)"
},
{
  hanzi: "冖",
  pinyin: "mì",
  name: "Mịch",
  meaning: "Che phủ",
  note: "Chỉ sự che đậy, bao phủ (写, 军...)"
},
{
  hanzi: "羊",
  pinyin: "yáng",
  name: "Dương",
  meaning: "Dê",
  note: "Liên quan động vật, tốt đẹp (美, 群...)"
},
{
  hanzi: "艮",
  pinyin: "gèn",
  name: "Cấn",
  meaning: "Dừng lại",
  note: "Liên quan dừng, cứng, giới hạn (很, 根...)"
},
{
  hanzi: "虫",
  pinyin: "chóng",
  name: "Trùng",
  meaning: "Côn trùng",
  note: "Liên quan sâu bọ, sinh vật nhỏ (蛇, 蚂...)"
},
{
  hanzi: "衣 (衤)",
  pinyin: "yī",
  name: "Y",
  meaning: "Quần áo",
  note: "衤 là biến thể, liên quan trang phục (裤, 裤...)"
},
{
  hanzi: "见",
  pinyin: "jiàn",
  name: "Kiến",
  meaning: "Thấy",
  note: "Liên quan nhìn, gặp (现, 观...)"
},
{
  hanzi: "矢",
  pinyin: "shǐ",
  name: "Thỉ",
  meaning: "Mũi tên",
  note: "Liên quan bắn, thẳng, nhanh (知, 医...)"
},
{
  hanzi: "贝",
  pinyin: "bèi",
  name: "Bối",
  meaning: "Vỏ sò, tiền",
  note: "Liên quan tiền bạc, giao dịch (买, 贵...)"
},
{
  hanzi: "足 (⻊)",
  pinyin: "zú",
  name: "Túc",
  meaning: "Chân",
  note: "⻊ là biến thể, liên quan đi lại (跑, 路...)"
},
{
  hanzi: "车",
  pinyin: "chē",
  name: "Xa",
  meaning: "Xe",
  note: "Liên quan phương tiện (转, 轻...)"
},
{
  hanzi: "邑 (阝)",
  pinyin: "yì",
  name: "Ấp",
  meaning: "Đất phong, làng, thành",
  note: "阝 (bên phải) là biến thể của Ấp, liên quan địa danh, thành thị (都, 那...)"
},
{
  hanzi: "金 (钅)",
  pinyin: "jīn",
  name: "Kim",
  meaning: "Kim loại, vàng",
  note: "钅 là biến thể, liên quan kim loại, tiền bạc (钱, 银...)"
},
{
  hanzi: "门",
  pinyin: "mén",
  name: "Môn",
  meaning: "Cửa",
  note: "Liên quan cửa, lối vào, không gian (问, 间...)"
},
{
  hanzi: "阜 (阝)",
  pinyin: "fù",
  name: "Phụ",
  meaning: "Gò đất, đồi",
  note: "阝 (bên trái) là biến thể của Phụ ⚠️ KHÁC bộ Ấp (邑)"
},
{
  hanzi: "隹",
  pinyin: "zhuī",
  name: "Chuy",
  meaning: "Chim đuôi ngắn",
  note: "Liên quan chim chóc, hoặc dùng làm thành phần biểu ý trong nhiều chữ (谁, 难, 集...)"
},
{
  hanzi: "雨",
  pinyin: "yǔ",
  name: "Vũ",
  meaning: "Mưa",
  note: "Liên quan thời tiết, mưa gió (雪, 雷...)"
},
{
  hanzi: "食 (饣)",
  pinyin: "shí",
  name: "Thực",
  meaning: "Ăn, thức ăn",
  note: "饣 là biến thể, liên quan ăn uống (饭, 饿...)"
},
{
  hanzi: "马",
  pinyin: "mǎ",
  name: "Mã",
  meaning: "Ngựa",
  note: "Liên quan động vật, di chuyển (骑, 驾...)"
},
{
  hanzi: "鱼",
  pinyin: "yú",
  name: "Ngư",
  meaning: "Cá",
  note: "Liên quan cá, thủy sản (鲜, 鲜...)"
},
{
  hanzi: "鸟",
  pinyin: "niǎo",
  name: "Điểu",
  meaning: "Chim",
  note: "Liên quan chim chóc (鸡, 鸭...)"
},
{
  hanzi: "艹",
  pinyin: "cǎo",
  name: "Thảo đầu",
  meaning: "Cỏ, cây",
  note: "Đứng trên đầu chữ, liên quan thực vật (花, 茶...)"
}

];
