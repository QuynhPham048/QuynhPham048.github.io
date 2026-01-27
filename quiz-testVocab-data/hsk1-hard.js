const VOCAB = [

  // ===== CẢM XÚC – GIAO TIẾP =====
  { vi: "yêu", hanzi: "爱", pinyin: "ài", hanviet: "ái" },
  { vi: "thích", hanzi: "喜欢", pinyin: "xǐhuan", hanviet: "hỉ hoan" },
  { vi: "cảm ơn", hanzi: "谢谢", pinyin: "xièxie", hanviet: "tạ tạ" },
  { vi: "xin lỗi", hanzi: "对不起", pinyin: "duìbuqǐ", hanviet: "đối bất khởi" },
  { vi: "đừng khách khí", hanzi: "不客气", pinyin: "bú kèqi", hanviet: "bất khách khí" },
  { vi: "không sao", hanzi: "没关系", pinyin: "méi guānxi", hanviet: "" },

  // ===== TRẠNG THÁI – TÍNH TỪ =====
  { vi: "đều", hanzi: "都", pinyin: "dōu", hanviet: "đô" },
  { vi: "vui vẻ", hanzi: "高兴", pinyin: "gāoxìng", hanviet: "cao hứng" },

  // ===== ĐỒ VẬT – ĐỊA ĐIỂM =====
  { vi: "đồ vật", hanzi: "东西", pinyin: "dōngxi", hanviet: "đông tây" },
  { vi: "cửa hàng", hanzi: "商店", pinyin: "shāngdiàn", hanviet: "thương điếm" },
  { vi: "ngân hàng", hanzi: "银行", pinyin: "yínháng", hanviet: "ngân hàng" },

  // ===== GIÁO DỤC =====
  { vi: "giáo viên", hanzi: "老师", pinyin: "lǎoshī", hanviet: "lão sư" },
  { vi: "học sinh", hanzi: "学生", pinyin: "xuéshēng", hanviet: "học sinh" },
  { vi: "bạn học", hanzi: "同学", pinyin: "tóngxué", hanviet: "đồng học" },
  { vi: "trường học", hanzi: "学校", pinyin: "xuéxiào", hanviet: "học hiệu" },
  { vi: "đại học", hanzi: "大学", pinyin: "dàxué", hanviet: "đại học" },
  { vi: "sinh viên đại học", hanzi: "大学生", pinyin: "dàxuéshēng", hanviet: "đại học sinh" },
  { vi: "học tập", hanzi: "学习", pinyin: "xuéxí", hanviet: "học tập" },

  // ===== ĐỘNG TỪ =====
  { vi: "muốn", hanzi: "要", pinyin: "yào", hanviet: "yếu" },
  { vi: "nhớ", hanzi: "想", pinyin: "xiǎng", hanviet: "tưởng" },

  // ===== XƯNG HÔ =====
  { vi: "quý ông", hanzi: "先生", pinyin: "xiānsheng", hanviet: "tiên sinh" },
  { vi: "tiểu thư", hanzi: "小姐", pinyin: "xiǎojiě", hanviet: "tiểu thư" },

  // ===== KHÁC =====
  { vi: "thứ (trong tuần)", hanzi: "星期", pinyin: "xīngqī", hanviet: "tinh kỳ" },

  { vi: "tạm biệt", hanzi: "再见", pinyin: "zàijiàn", hanviet: "tái kiến" },
  { vi: "như thế nào", hanzi: "怎么样", pinyin: "zěnmeyàng", hanviet: "chẩm ma dạng" },

  { vi: "công việc", hanzi: "工作", pinyin: "gōngzuò", hanviet: "công tác" },

  // ===== SỐ & THỜI TIẾT =====
  { vi: "số 0", hanzi: "零", pinyin: "líng", hanviet: "linh" },
  { vi: "nóng", hanzi: "热", pinyin: "rè", hanviet: "nhiệt" },
  { vi: "lạnh", hanzi: "冷", pinyin: "lěng", hanviet: "lãnh" },

  // ===== ĐẠI TỪ =====
  { vi: "chúng tôi", hanzi: "我们", pinyin: "wǒmen", hanviet: "ngã môn" },
  { vi: "bọn họ", hanzi: "他们", pinyin: "tāmen", hanviet: "tha môn" },
  { vi: "các bạn", hanzi: "你们", pinyin: "nǐmen", hanviet: "" },

  // ===== ĐỒ ĐIỆN =====
  { vi: "máy tính", hanzi: "电脑", pinyin: "diànnǎo", hanviet: "điện não" },
  { vi: "ti vi", hanzi: "电视", pinyin: "diànshì", hanviet: "điện thị" },

  { vi: "ngôi sao", hanzi: "星星", pinyin: "xīngxing", hanviet: "tinh tinh" },

{ vi: "quả táo", hanzi: "苹果", pinyin: "píngguǒ", hanviet: "bình quả" },
{ vi: "dưa hấu", hanzi: "西瓜", pinyin: "xīguā", hanviet: "tây qua" },

{ vi: "bánh bao", hanzi: "包子", pinyin: "bāozi", hanviet: "bao tử" },
{ vi: "bánh chẻo, sủi cảo", hanzi: "饺子", pinyin: "jiǎozi", hanviet: "" },
{ vi: "màn thầu", hanzi: "馒头", pinyin: "mántou", hanviet: "" },

{ vi: "canh", hanzi: "汤", pinyin: "tāng", hanviet: "thang" },
{ vi: "trứng gà", hanzi: "鸡蛋", pinyin: "jīdàn", hanviet: "kê đản" },

{ vi: "nhà ăn, căng tin", hanzi: "食堂", pinyin: "shítáng", hanviet: "thực đường" },

{ vi: "chưa (rồi chưa)", hanzi: "了吗", pinyin: "le ma", hanviet: "" },

{ vi: "quyển vở", hanzi: "本子", pinyin: "běnzi", hanviet: "bổn tử" },

{ vi: "món ăn, gu...", hanzi: "菜", pinyin: "cài", hanviet: "" },
{ vi: "thư viện", hanzi: "图书馆", pinyin: "túshūguǎn", hanviet: "đồ thư quán" },

{ vi: "đôi đũa", hanzi: "筷子", pinyin: "kuàizi", hanviet: "" },

{ vi: "chậm", hanzi: "慢", pinyin: "màn", hanviet: "mạn" },
{ vi: "nhanh", hanzi: "快", pinyin: "kuài", hanviet: "khoái" },

{ vi: "Việt Nam", hanzi: "越南", pinyin: "Yuènán", hanviet: "Việt Nam" },
{ vi: "nước Đức", hanzi: "德国", pinyin: "Déguó", hanviet: "Đức quốc" },
{ vi: "nước Pháp", hanzi: "法国", pinyin: "Fǎguó", hanviet: "Pháp quốc" },
{ vi: "nước Nga", hanzi: "俄国 / 俄罗斯", pinyin: "Éguó / Éluósī", hanviet: "Nga La Tư" },
{ vi: "nước Nhật", hanzi: "日本", pinyin: "Rìběn", hanviet: "Nhật Bản" },
{ vi: "nước Mỹ", hanzi: "美国", pinyin: "Měiguó", hanviet: "Mỹ quốc" },
{ vi: "nước Anh", hanzi: "英国", pinyin: "Yīngguó", hanviet: "Anh quốc" },

{ vi: "đừng", hanzi: "别", pinyin: "bié", hanviet: "biệt" },

{ vi: "người khác", hanzi: "别人", pinyin: "biéren", hanviet: "" },

{ vi: "không đúng / sai", hanzi: "不对", pinyin: "bú duì", hanviet: "" },

{ vi: "số lượng 2 (dùng với lượng từ)", hanzi: "两", pinyin: "liǎng", hanviet: "lưỡng" },

{ vi: "đói", hanzi: "饿", pinyin: "è", hanviet: "ngạ" },
{ vi: "khát", hanzi: "渴", pinyin: "kě", hanviet: "khát" },

{ vi: "đắt", hanzi: "贵", pinyin: "guì", hanviet: "quý" },

{ vi: "nhân dân tệ", hanzi: "人民币", pinyin: "rénmínbì", hanviet: "nhân dân tệ" },
{ vi: "tệ (đơn vị tiền tệ)", hanzi: "块", pinyin: "kuài", hanviet: "" },

{ vi: "cảm thấy", hanzi: "觉得", pinyin: "juéde", hanviet: "" },

{ vi: "đến / tới đây", hanzi: "来", pinyin: "lái", hanviet: "lai" },

{ vi: "mệt", hanzi: "累", pinyin: "lèi", hanviet: "luy" },

{ vi: "thời tiết", hanzi: "天气", pinyin: "tiānqì", hanviet: "thiên khí" },

{ vi: "làm", hanzi: "做", pinyin: "zuò", hanviet: "tố" },

{ vi: "một chút", hanzi: "一下儿", pinyin: "yíxiàr", hanviet: "" },


];
