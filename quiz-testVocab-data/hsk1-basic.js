const VOCAB = [
  { vi: "tôi", hanzi: "我", pinyin: "wǒ", hanviet: "ngã" },
  { vi: "bạn", hanzi: "你", pinyin: "nǐ", hanviet: "nhĩ" },
  { vi: "anh ấy", hanzi: "他", pinyin: "tā", hanviet: "tha" },
  { vi: "cô ấy", hanzi: "她", pinyin: "tā", hanviet: "tha" },
  { vi: "đàn ông", hanzi: "男", pinyin: "nán", hanviet: "" },

  { vi: "bận", hanzi: "忙", pinyin: "máng", hanviet: "mang" },
  { vi: "đi", hanzi: "去", pinyin: "qù", hanviet: "khứ" },
  { vi: "ở / đang", hanzi: "在", pinyin: "zài", hanviet: "tại" },

  { vi: "kia", hanzi: "那", pinyin: "nà", hanviet: "na" },
  { vi: "đây", hanzi: "这", pinyin: "zhè", hanviet: "giá" },
  { vi: "nào?", hanzi: "哪", pinyin: "nǎ", hanviet: "" },

  { vi: "rồi / đã", hanzi: "了", pinyin: "le", hanviet: "liễu" },
  { vi: "nhé, đi, nha...", hanzi: "吧", pinyin: "ba", hanviet: "" },

  { vi: "một", hanzi: "一", pinyin: "yī", hanviet: "nhất" },
  { vi: "hai", hanzi: "二", pinyin: "èr", hanviet: "nhị" },
  { vi: "ba", hanzi: "三", pinyin: "sān", hanviet: "tam" },
  { vi: "bốn", hanzi: "四", pinyin: "sì", hanviet: "tứ" },
  { vi: "năm", hanzi: "五", pinyin: "wǔ", hanviet: "ngũ" },
  { vi: "sáu", hanzi: "六", pinyin: "liù", hanviet: "lục" },
  { vi: "bảy", hanzi: "七", pinyin: "qī", hanviet: "thất" },
  { vi: "tám", hanzi: "八", pinyin: "bā", hanviet: "bát" },
  { vi: "chín", hanzi: "九", pinyin: "jiǔ", hanviet: "cửu" },
  { vi: "mười", hanzi: "十", pinyin: "shí", hanviet: "thập" },

  { vi: "có", hanzi: "有", pinyin: "yǒu", hanviet: "hữu" },
  { vi: "không có", hanzi: "没有", pinyin: "méi yǒu", hanviet: "vị hữu" },
  { vi: "không", hanzi: "不", pinyin: "bù", hanviet: "bất" },

  { vi: "nhà", hanzi: "家", pinyin: "jiā", hanviet: "gia" },
  { vi: "mấy (bao nhiêu)", hanzi: "几", pinyin: "jǐ", hanviet: "kỷ" },

  { vi: "miệng", hanzi: "口", pinyin: "kǒu", hanviet: "khẩu" },
  { vi: "người", hanzi: "人", pinyin: "rén", hanviet: "nhân" },

  { vi: "sách", hanzi: "书", pinyin: "shū", hanviet: "thư" },

  { vi: "bố", hanzi: "爸爸", pinyin: "bàba", hanviet: "" },
  { vi: "mẹ", hanzi: "妈妈", pinyin: "māma", hanviet: "" },
  { vi: "anh trai", hanzi: "哥哥", pinyin: "gēge", hanviet: "ca ca" },
  { vi: "em trai", hanzi: "弟弟", pinyin: "dìdi", hanviet: "đệ đệ" },
  { vi: "chị gái", hanzi: "姐姐", pinyin: "jiějie", hanviet: "tỷ tỷ" },
  { vi: "em gái", hanzi: "妹妹", pinyin: "mèimei", hanviet: "muội muội" },

  { vi: "tiền", hanzi: "钱", pinyin: "qián", hanviet: "tiền" },

  { vi: "hôm nay", hanzi: "今天", pinyin: "jīntiān", hanviet: "kim thiên" },
  { vi: "ngày mai", hanzi: "明天", pinyin: "míngtiān", hanviet: "minh thiên" },
  { vi: "hôm qua", hanzi: "昨天", pinyin: "zuótiān", hanviet: "tạc thiên" },

  { vi: "tốt", hanzi: "好", pinyin: "hǎo", hanviet: "hảo" },
  { vi: "về", hanzi: "回", pinyin: "huí", hanviet: "hồi" },

  { vi: "nhỏ", hanzi: "小", pinyin: "xiǎo", hanviet: "tiểu" },
  { vi: "to", hanzi: "大", pinyin: "dà", hanviet: "đại" },
  { vi: "rất", hanzi: "很", pinyin: "hěn", hanviet: "ngận" },
  { vi: "lắm, quá", hanzi: "太", pinyin: "tài", hanviet: "thái" },
  

  { vi: "gọi", hanzi: "叫", pinyin: "jiào", hanviet: "khiếu" },
  { vi: "là", hanzi: "是", pinyin: "shì", hanviet: "thị" },

  { vi: "uống", hanzi: "喝", pinyin: "hē", hanviet: "hát" },
  { vi: "ăn", hanzi: "吃", pinyin: "chī", hanviet: "ngật" },

  { vi: "ngài / ông (lịch sự)", hanzi: "您", pinyin: "nín", hanviet: "nẫm" },

  { vi: "hỏi", hanzi: "问", pinyin: "wèn", hanviet: "vấn" },
  { vi: "mời", hanzi: "请", pinyin: "qǐng", hanviet: "thỉnh" },

  { vi: "vào", hanzi: "进", pinyin: "jìn", hanviet: "tiến" },
  { vi: "ngồi", hanzi: "坐", pinyin: "zuò", hanviet: "tọa" },

  { vi: "trà", hanzi: "茶", pinyin: "chá", hanviet: "trà" },
  { vi: "rượu", hanzi: "酒", pinyin: "jiǔ", hanviet: "tửu" },

  { vi: "quyển (lượng từ sách)", hanzi: "本", pinyin: "běn", hanviet: "bản" },

  // sửa: khách → chỉ dùng 客
  { vi: "khách", hanzi: "客", pinyin: "kè", hanviet: "khách" },

  { vi: "của (biểu thị sự sở hữu)", hanzi: "的", pinyin: "de", hanviet: "" },

  { vi: "giờ", hanzi: "点", pinyin: "diǎn", hanviet: "điểm" },
  { vi: "nhiều", hanzi: "多", pinyin: "duō", hanviet: "đa" },

  { vi: "đọc", hanzi: "读", pinyin: "dú", hanviet: "độc" },
  { vi: "viết", hanzi: "写", pinyin: "xiě", hanviet: "tả" },

  { vi: "bao nhiêu", hanzi: "多少", pinyin: "duōshao", hanviet: "đa thiểu" },

  // sửa: con cái → 儿子
  { vi: "con cái / con trai", hanzi: "儿子", pinyin: "érzi", hanviet: "nhi tử" },

  { vi: "con gái", hanzi: "女儿", pinyin: "nǚ’ér", hanviet: "nữ nhi" },

  { vi: "cái (lượng từ)", hanzi: "个", pinyin: "gè", hanviet: "cá" },

  // sửa: con (lượng từ) → 条
  { vi: "con (lượng từ)", hanzi: "条", pinyin: "tiáo", hanviet: "điều" },

  { vi: "tiếng Hán", hanzi: "汉语", pinyin: "hànyǔ", hanviet: "hán ngữ" },
  { vi: "và", hanzi: "和", pinyin: "hé", hanviet: "hòa" },

  // sửa: 会 → thêm nghĩa tiếng Việt
  { vi: "sẽ / hội họp / gặp mặt", hanzi: "会", pinyin: "huì", hanviet: "hội" },

  // bổ sung: gặp
  { vi: "gặp", hanzi: "见", pinyin: "jiàn", hanviet: "kiến" },

  { vi: "mua", hanzi: "买", pinyin: "mǎi", hanviet: "mãi" },
  { vi: "bán", hanzi: "卖", pinyin: "mài", hanviet: "mại" },

  // sửa: cơm → 米饭
  { vi: "cơm", hanzi: "米饭", pinyin: "mǐfàn", hanviet: "mễ phạn" },

  { vi: "tên", hanzi: "名字", pinyin: "míngzi", hanviet: "danh tự" },

  // sửa: ở đâu → thêm 哪儿
  { vi: "ở đâu", hanzi: "哪里 / 哪儿", pinyin: "nǎlǐ / nǎr", hanviet: "na lý" },

  { vi: "ở đây", hanzi: "这里 / 这儿", pinyin: "zhèlǐ / zhèr", hanviet: "giá lý" },


  // sửa: ngày → 日
  { vi: "ngày", hanzi: "日", pinyin: "rì", hanviet: "nhật" },

  { vi: "bạn bè", hanzi: "朋友", pinyin: "péngyou", hanviet: "bằng hữu" },
  { vi: "quen biết", hanzi: "认识", pinyin: "rènshi", hanviet: "nhận thức" },

  { vi: "phía trên", hanzi: "上", pinyin: "shàng", hanviet: "thượng" },
  { vi: "phía dưới", hanzi: "下", pinyin: "xià", hanviet: "hạ" },

  { vi: "cái gì", hanzi: "什么", pinyin: "shénme", hanviet: "thậm ma" },
  { vi: "ai", hanzi: "谁", pinyin: "shéi", hanviet: "thùy" },

  { vi: "tuổi", hanzi: "岁", pinyin: "suì", hanviet: "tuế" },

  // sửa & bổ sung theo yêu cầu
  { vi: "bầu trời", hanzi: "天", pinyin: "tiān", hanviet: "thiên" },

  { vi: "sáng sớm", hanzi: "早上", pinyin: "zǎoshang", hanviet: "tảo thượng" },
  { vi: "buổi sáng", hanzi: "上午", pinyin: "shàngwǔ", hanviet: "thượng ngọ" },
  { vi: "buổi trưa", hanzi: "中午", pinyin: "zhōngwǔ", hanviet: "trung ngọ" },
  { vi: "buổi chiều", hanzi: "下午", pinyin: "xiàwǔ", hanviet: "hạ ngọ" },
  { vi: "buổi tối", hanzi: "晚上", pinyin: "wǎnshang", hanviet: "vãn thượng" },

  { vi: "sớm", hanzi: "早", pinyin: "zǎo", hanviet: "tảo" },
  { vi: "muộn", hanzi: "晚", pinyin: "wǎn", hanviet: "vãn" },

  { vi: "cũng", hanzi: "也", pinyin: "yě", hanviet: "dã" },
  { vi: "khó", hanzi: "难", pinyin: "nán", hanviet: "nan" },
  { vi: "học", hanzi: "学", pinyin: "xué", hanviet: "học" },

  { vi: "Trung Quốc", hanzi: "中国", pinyin: "Zhōngguó", hanviet: "Trung Quốc" },

  { vi: "một trăm", hanzi: "一百", pinyin: "yì bǎi", hanviet: "nhất bách" },

  { vi: "trắng", hanzi: "白", pinyin: "bái", hanviet: "bạch" },

  { vi: "ngựa", hanzi: "马", pinyin: "mǎ", hanviet: "mã" },

  { vi: "trợ từ nghi vấn (không?)", hanzi: "吗", pinyin: "ma", hanviet: "" }
];
