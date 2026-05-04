// data/templates.js - Master Version
// เทมเพลตทั้งหมด 90+ รายการ (60 เดิม + 30 ใหม่) พร้อมฟีเจอร์ Master

const templates = [
  // ===== WRITING (10) - เดิม + เพิ่มตัวแปร =====
  { 
    cat:'writing', tag:'writing', title:'นักเขียนบล็อกมืออาชีพ', desc:'เขียนบทความบล็อกให้น่าสนใจ มีโครงสร้างชัดเจน จบด้วย CTA', 
    prompt:'คุณเป็นนักเขียนบล็อกมืออาชีพที่มีประสบการณ์ [จำนวนปี] ปี จงเขียนบทความเรื่อง "[หัวข้อ]" ให้มีโครงสร้างดังนี้:\n1. หัวข้อเปิดที่ดึงดูด attention\n2. บทนำ 2-3 ย่อหน้าสร้างความน่าสนใจ\n3. เนื้อหาหลัก แบ่งเป็น [จำนวนหัวข้อย่อย] หัวข้อย่อย พร้อมตัวอย่างประกอบ\n4. สรุปปิดท้ายพร้อม Call-to-Action\n\nสไตล์: [โทน]\nความยาว: [ความยาว] คำ\nกลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\nภาษาที่ใช้: [ภาษา]\nจุดประสงค์: [จุดประสงค์]\nLSI keywords: [LSI keywords]', 
    favorite: false, rating: 0, tags: ['blog'], variables: [
      { name: "หัวข้อ", placeholder: "ใส่หัวข้อบทความ" },
      { name: "กลุ่มเป้าหมาย", placeholder: "เช่น วัยรุ่น, ผู้ประกอบการ" },
      { name: "จำนวนปี", placeholder: "10/15/20" },
      { name: "จำนวนหัวข้อย่อย", placeholder: "3-5" },
      { name: "โทน", placeholder: "เป็นกันเอง/ทางการ/ให้ความรู้" },
      { name: "ความยาว", placeholder: "800-1200" },
      { name: "ภาษา", placeholder: "ไทย/อังกฤษ" },
      { name: "จุดประสงค์", placeholder: "เพื่อขายของ/สร้างแบรนด์" },
      { name: "LSI keywords", placeholder: "คำที่เกี่ยวข้อง เช่น AI, Prompt" }
    ]
  },
  // ===== NEW: Advanced Blog Template with many variables =====
  { 
    cat:'writing', tag:'writing', title:'นักเขียนบล็อกมืออาชีพ (ตัวแปรหลากหลาย)', desc:'เขียนบทความบล็อกให้น่าสนใจ มีโครงสร้างชัดเจน จบด้วย CTA พร้อมตัวแปรหลากหลาย', 
    prompt:'คุณเป็นนักเขียนบล็อกมืออาชีพที่มีประสบการณ์ 10 ปี จงเขียนบทความเรื่อง "[หัวข้อ]" ให้มีโครงสร้างดังนี้:\n1. หัวข้อเปิดที่ดึงดูด attention\n2. บทนำ 2-3 ย่อหน้าสร้างความน่าสนใจ\n3. เนื้อหาหลัก แบ่งเป็น [จำนวนหัวข้อย่อย] หัวข้อย่อย พร้อมตัวอย่างประกอบ\n4. สรุปปิดท้ายพร้อม Call-to-Action\n\nสไตล์: [โทน], ใช้ภาษา[ภาษาที่ใช้], มีเรื่องเล่าแทรก\nความยาว: [ความยาว] คำ\nกลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\nคีย์เวิร์ดหลัก: [คีย์เวิร์ดหลัก]\nจุดประสงค์: [จุดประสงค์]', 
    favorite: false, rating: 0, tags: ['advanced', 'variables'], variables: [
      { name: "หัวข้อ", placeholder: "ใส่หัวข้อบทความ" },
      { name: "กลุ่มเป้าหมาย", placeholder: "เช่น วัยรุ่น, ผู้ประกอบการ" },
      { name: "คีย์เวิร์ดหลัก", placeholder: "เช่น AI, Prompt Engineering" },
      { name: "ความยาว", placeholder: "800-1200 คำ" },
      { name: "โทน", placeholder: "เป็นกันเอง/ทางการ/ให้ความรู้" },
      { name: "จำนวนหัวข้อย่อย", placeholder: "3-5 หัวข้อ" },
      { name: "ภาษาที่ใช้", placeholder: "ไทย/อังกฤษ" },
      { name: "จุดประสงค์", placeholder: "เพื่อขายของ/สร้างแบรนด์" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'นักเล่าเรื่องแนวซ่อนเงื่อน', desc:'เขียนเรื่องสั้น มีพล็อตหักมุม ตอนจบพลิกคาดเดา', 
    prompt:'จงเขียนเรื่องสั้นแนวซ่อนเงื่อน โดยมีเงื่อนไขดังนี้:\n- ธีมหลัก: "[ธีม]" (เช่น ความลับ, การแก้แค้น, ความจริงที่ซ่อนอยู่)\n- ตัวละครหลัก: [คำอธิบายตัวละคร]\n- ฉาก: [สถานที่/ยุคสมัย]\n- พล็อตหักมุม: ตอนจบต้องทำให้ผู้อ่านตกใจและกลับไปอ่านใหม่เพื่อหาเบาะแส\n- ความยาว: [ความยาว] คำ\n- ใช้มุมมองบุคคลที่ [มุมมอง]\n- แทรกเบาะแสซ่อน [จำนวนเบาะแส] จุดที่บอกว่าจบจะเป็นอย่างไร\n- โทนเรื่อง: [โทน]\n- กลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]', 
    favorite: false, rating: 0, tags: ['story', 'mystery'], variables: [
      { name: "ธีม", placeholder: "ความลับ/การแก้แค้น" },
      { name: "คำอธิบายตัวละคร", placeholder: "ชายวัยกลางคนที่มีความลับ" },
      { name: "สถานที่/ยุคสมัย", placeholder: "คฤหาสน์เก่าในกรุงเทพ" },
      { name: "ความยาว", placeholder: "500-800" },
      { name: "มุมมอง", placeholder: "1 (บุคคลที่ 1)" },
      { name: "จำนวนเบาะแส", placeholder: "3" },
      { name: "โทน", placeholder: "ลึกลับ/ตื่นเต้น" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น/ผู้ใหญ่" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'SEO Content Writer', desc:'เขียนบทความ SEO ที่ติดอันดับ Google', 
    prompt:'คุณเป็น SEO Content Writer จงเขียนบทความเรื่อง "[หัวข้อ]" โดยมี keyword หลักคือ "[keyword]"\n\nข้อกำหนด:\n- ความยาว [ความยาว] คำ\n- ใช้ keyword หลักใน H1, first paragraph, และ 2-3 ครั้งในเนื้อหา\n- ใช้ LSI keywords อย่างน้อย [จำนวน LSI] คำ (เช่น: [LSI keywords])\n- มีหัวข้อย่อย (H2) อย่างน้อย [จำนวนหัวข้อ] หัวข้อ\n- มีตารางเปรียบเทียบ [จำนวนตาราง] ตาราง\n- มี list อย่างน้อย [จำนวน list] จุด\n- เขียน Meta Description (150-160 ตัวอักษร): "[Meta Description]"\n- เพิ่ม FAQ [จำนวน FAQ] ข้อท้ายบทความ\n- ใช้โทน: [โทน]\n- กลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\n- ภาษาที่ใช้: [ภาษา]', 
    favorite: false, rating: 0, tags: ['seo', 'advanced'], variables: [
      { name: "หัวข้อ", placeholder: "ใส่หัวข้อบทความ" },
      { name: "keyword", placeholder: "คีย์เวิร์ดหลัก" },
      { name: "โทน", placeholder: "เป็นกันเอง/ทางการ/ให้ความรู้" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น/วัยทำงาน" },
      { name: "ความยาว", placeholder: "1500-2000 คำ" },
      { name: "จำนวน LSI", placeholder: "5" },
      { name: "LSI keywords", placeholder: "คำที่เกี่ยวข้อง เช่น AI, Prompt" },
      { name: "จำนวนหัวข้อ", placeholder: "5" },
      { name: "จำนวนตาราง", placeholder: "1" },
      { name: "จำนวน list", placeholder: "2" },
      { name: "Meta Description", placeholder: "สรุปสั้นๆ 150 ตัวอักษร" },
      { name: "จำนวน FAQ", placeholder: "3-5" },
      { name: "ภาษา", placeholder: "ไทย/อังกฤษ" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'จดหมายธุรกิจทางการ', desc:'ร่างจดหมายราชการ/ธุรกิจ ด้วยรูปแบบถูกต้อง ภาษาสุภาพ', 
    prompt:'จงเขียนจดหมายธุรกิจตามสถานการณ์:\n\nผู้ส่ง: [ชื่อ, ตำแหน่ง, บริษัท]\nผู้รับ: [ชื่อ, ตำแหน่ง, บริษัท]\nเรื่อง: [หัวข้อ]\nวัตถุประสงค์: [วัตถุประสงค์]\n\nรูปแบบ:\n- ที่อยู่และวันที่\n- คำขึ้นต้น/ลงท้ายสุภาพ\n- เนื้อหากระชับ แบ่งย่อหน้า\n- ระบุสิ่งที่ต้องการชัดเจน\n- แนบเอกสาร (ถ้ามี)\nภาษาทางการ ห้ามใช้ศัพท์แสลง', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อ, ตำแหน่ง, บริษัท", placeholder: "ข้อมูลผู้ส่ง" },
      { name: "วัตถุประสงค์", placeholder: "แจ้ง/ขอ/ติดตาม" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'สุนทรพจน์สร้างแรงบันดาลใจ', desc:'เขียนสุนทรพจน์สำหรับพิธีเปิด/ปิด หรือสร้างขวัญกำลังใจ', 
    prompt:'จงเขียนสุนทรพจน์สำหรับโอกาส "[โอกาส]" ให้กับ "[ผู้พูด]" ต่อหน้าผู้ฟัง "[กลุ่มเป้าหมาย]"\n\nโครงสร้าง:\n1. ทักทาย เกริ่นนำ\n2. เล่าเรื่องส่วนตัว 1 เรื่อง\n3. เนื้อหาหลัก 3 ประเด็น (บทเรียน, แนวคิด)\n4. สร้างแรงบันดาลใจ\n5. ปิดท้ายด้วยคำขอบคุณและพลังบวก\n\nความยาว: 500-700 คำ\nโทน: อบอุ่น, จริงใจ, มีพลัง', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "โอกาส", placeholder: "พิธีเปิด/สัมมนา" },
      { name: "ผู้พูด", placeholder: "ชื่อและตำแหน่ง" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'สรุปเนื้อหาหนังสือ', desc:'สรุปหนังสือให้กระชับ ครบประเด็น พร้อมข้อคิด', 
    prompt:'จงสรุปหนังสือ "[ชื่อหนังสือ]" โดย "[ชื่อผู้แต่ง]" ความยาว 600-800 คำ\n\nรูปแบบ:\n- เกริ่นนำ: หนังสือเล่มนี้เกี่ยวกับอะไร\n- 5 แนวคิดสำคัญ\n- 3 ข้อคิดที่นำไปใช้ได้จริง\n- บทเรียนที่ได้\n- สรุปสั้น ๆ ว่าใครควรอ่าน\n\nเขียนแบบกันเอง อ่านง่าย', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อหนังสือ", placeholder: "ใส่ชื่อหนังสือ" },
      { name: "ชื่อผู้แต่ง", placeholder: "ชื่อผู้แต่ง" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'แผนการสอน', desc:'ออกแบบแผนการสอน สำหรับครู/วิทยากร', 
    prompt:'คุณเป็นครูผู้เชี่ยวชาญ จงเขียนแผนการสอนสำหรับวิชา "[วิชา]" ระดับชั้น "[ระดับ]" เวลา "[จำนวนคาบ]"\n\nหัวข้อ: "[หัวข้อ]"\nวัตถุประสงค์การเรียนรู้: [ระบุ]\n\nแผนประกอบด้วย:\n1. ขั้นนำ (5-10 นาที)\n2. ขั้นสอน (เนื้อหา วิธีการสอน สื่อ)\n3. ขั้นฝึกปฏิบัติ (กิจกรรมเดี่ยว/กลุ่ม)\n4. ขั้นสรุป\n5. การวัดและประเมินผล\n6. การบ้าน\n\nให้เขียนละเอียดทุกขั้นตอน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "วิชา", placeholder: "คณิตศาสตร์/ภาษาไทย" },
      { name: "ระดับ", placeholder: "ประถม/มัธยม" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'รีวิวสินค้ามืออาชีพ', desc:'เขียนรีวิวสินค้าให้น่าเชื่อถือ ครบถ้วนทุกด้าน', 
    prompt:'จงเขียนรีวิวสินค้า "[ชื่อสินค้า]" แบบละเอียด\n\nข้อมูล: [ราคา, ฟีเจอร์หลัก, กลุ่มเป้าหมาย]\n\nโครงสร้าง:\n1. เกริ่น (ความคาดหวังก่อนใช้)\n2. แกะกล่อง/ความประทับใจแรก\n3. ฟีเจอร์เด่น 3-5 ข้อ\n4. ข้อดี/ข้อเสีย\n5. ประสบการณ์หลังใช้ 1 สัปดาห์\n6. เปรียบเทียบกับคู่แข่ง 1 ตัว\n7. สรุป: คุ้มค่าหรือไม่ ใครควรซื้อ\n\nแทรกรูปภาพ (ถ้ามี) และให้คะแนนแต่ละด้าน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อสินค้า", placeholder: "ใส่ชื่อสินค้า" },
      { name: "ราคา, ฟีเจอร์หลัก, กลุ่มเป้าหมาย", placeholder: "ข้อมูลสินค้า" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'สคริปต์วิดีโอ YouTube', desc:'เขียนสคริปต์สำหรับวิดีโอ YouTube ความยาว 8-12 นาที', 
    prompt:'จงเขียนสคริปต์วิดีโอ YouTube เรื่อง "[หัวข้อ]" ความยาวประมาณ 10 นาที\n\nรูปแบบ:\n- Intro hook 15 วิ\n- เนื้อหาแบ่งเป็นตอน\n- จังหวะเปลี่ยน scene\n- คำพูดพิธีกร + ข้อความกราฟิก\n- Outro + CTA\n\nให้เวลาในแต่ละส่วน และแทรกมุก/ตัวอย่างสนุก', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "หัวข้อ", placeholder: "ใส่หัวข้อวิดีโอ" }
    ]
  },
  { 
    cat:'writing', tag:'writing', title:'นิยายสั้นแนวสืบสวน', desc:'แต่งเรื่องสืบสวน/ลึกลับ ความยาว 1,200-1,500 คำ', 
    prompt:'จงเขียนเรื่องสืบสวนสั้น ภายใต้เงื่อนไข:\n- นักสืบ: "[ชื่อ, ลักษณะ]"\n- คดี: "[เหตุการณ์]"\n- ผู้ต้องสงสัย: 3 คน\n- เบาะแส: 5 ชิ้น\n- ตอนจบ: เฉลยปมอย่างมีเหตุผล\n\nโครงสร้าง:\n1. เปิดเรื่องด้วยการพบศพ/เหตุการณ์\n2. สอบปากคำผู้เกี่ยวข้อง\n3. ค้นหาหลักฐาน\n4. จับผิดคำให้การ\n5. สรุปคดี\n\nใส่บทสนทนาสมจริง แฝง hint ให้ผู้อ่านได้คิด', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อ, ลักษณะ", placeholder: "ลักษณะนักสืบ" },
      { name: "เหตุการณ์", placeholder: "คดีที่เกิดขึ้น" }
    ]
  },

  // ===== CODE (10) - เดิม + เพิ่มตัวแปร =====
  { 
    cat:'code', tag:'code', title:'Architect วางระบบ', desc:'ออกแบบสถาปัตยกรรมซอฟต์แวร์ พร้อมเหตุผลแต่ละตัวเลือก', 
    prompt:'คุณเป็น Software Architect ที่มีประสบการณ์ 15 ปี จงออกแบบสถาปัตยกรรมสำหรับระบบ "[ชื่อระบบ]" โดยมีรายละเอียดดังนี้:\n\n1. ข้อกำหนด: [รายการฟีเจอร์หลัก]\n2. ผู้ใช้คาดหวัง: [จำนวน/ลักษณะผู้ใช้]\n3. งบประมาณ/ทีม: [ข้อจำกัด]\n\nให้ตอบตามโครงสร้าง:\n- ภาพรวมสถาปัตยกรรม (อธิบายแบบผัง)\n- เทคโนโลยีที่เลือก + เหตุผล\n- แผนภาพข้อมูลไหล (Data Flow)\n- จุดที่ต้องระวัง / Single Point of Failure\n- แผน Scale ในอนาคต\n- คำแนะนำเรื่อง DevOps/CI-CD', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อระบบ", placeholder: "เช่น E-commerce App" },
      { name: "รายการฟีเจอร์หลัก", placeholder: "ฟีเจอร์สำคัญ" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'Code Review คุณภาพสูง', desc:'รีวิวโค้ดเชิงลึก หาบั๊ก แนะนำปรับปรุง', 
    prompt:'คุณเป็น Senior Developer ที่เข้มงวดแต่สร้างสรรค์ จงรีวิวโค้ดต่อไปนี้:\n\n```\n[วางโค้ดที่นี่]\n```\n\nให้ตอบตามหมวด:\n1. **Bugs/Issues** - หาจุดที่อาจทำให้โปรแกรมทำงานผิดพลาด\n2. **Security** - ช่องโหว่ด้านความปลอดภัย\n3. **Performance** - จุดที่ควรเพิ่มประสิทธิภาพ\n4. **Readability** - การตั้งชื่อ, โครงสร้าง, ความเข้าใจง่าย\n5. **Best Practices** - การทำตามมาตรฐาน\n6. **Suggestion** - โค้ดที่ปรับปรุงแล้ว (ถ้ามี)\n\nระดับความเข้ม: [ระดับ]\nภาษาโค้ด: [ภาษา]', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ระดับ", placeholder: "เบา/ปานกลาง/เข้ม" },
      { name: "ภาษา", placeholder: "JavaScript/Python" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'เขียน Unit Test', desc:'สร้าง Unit Test สำหรับฟังก์ชัน/โมดูลที่กำหนด', 
    prompt:'จงเขียน Unit Test สำหรับโค้ดต่อไปนี้:\n\n```[placement]\n[วางโค้ด]\n```\n\nFramework: [Framework]\nภาษา: [ภาษา]\nชื่อฟังก์ชัน: [ชื่อฟังก์ชัน]\n\nให้ทดสอบ:\n- Happy path ([จำนวน happy path] กรณี)\n- Edge cases ([จำนวน edge cases] กรณี)\n- Error handling ([จำนวน error handling] กรณี)\n- Async (ถ้ามี): [async cases]\n\nเขียน test case อย่างน้อย [จำนวนทั้งหมด] กรณี พร้อมคำอธิบายว่าแต่ละกรณีทดสอบอะไร\nMock data: [mock data]', 
    favorite: false, rating: 0, tags: ['test', 'unit'], variables: [
      { name: "Framework", placeholder: "Jest/Mocha/Pytest" },
      { name: "ภาษา", placeholder: "JavaScript/Python" },
      { name: "ชื่อฟังก์ชัน", placeholder: "calculateTotal" },
      { name: "จำนวน happy path", placeholder: "2" },
      { name: "จำนวน edge cases", placeholder: "3" },
      { name: "จำนวน error handling", placeholder: "2" },
      { name: "async cases", placeholder: "ทดสอบ async/await" },
      { name: "จำนวนทั้งหมด", placeholder: "7" },
      { name: "mock data", placeholder: "ข้อมูลจำลองสำหรับทดสอบ" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'Refactor Code', desc:'ปรับปรุงโค้ดให้สะอาด อ่านง่าย มีประสิทธิภาพ', 
    prompt:'คุณเป็น Senior Developer จง refactor โค้ดนี้:\n\n```[language]\n[โค้ดเดิม]\n```\n\nหลักการ:\n- ตั้งชื่อตัวแปร/ฟังก์ชันให้สื่อความหมาย ([จำนวนตัวแปร] ตัวแปร)\n- แยกฟังก์ชันให้เป็น modular ([จำนวนฟังก์ชัน] ฟังก์ชัน)\n- ลบ code ซ้ำ (DRY)\n- เพิ่ม type hint/comment ที่จำเป็น ([จำนวน comment] บรรทัด)\n- รักษาพฤติกรรมเดิม\n- ปรับปรุงประสิทธิภาพ: [เทคนิค]\n\nให้โค้ดเวอร์ชันใหม่ และอธิบายการเปลี่ยนแปลง ([จำนวนข้อเปลี่ยนแปลง] ข้อ)', 
    favorite: false, rating: 0, tags: ['refactor', 'clean'], variables: [
      { name: "language", placeholder: "ภาษาของโค้ด" },
      { name: "จำนวนตัวแปร", placeholder: "5" },
      { name: "จำนวนฟังก์ชัน", placeholder: "3" },
      { name: "จำนวน comment", placeholder: "10" },
      { name: "เทคนิค", placeholder: "ใช้ map แทน loop" },
      { name: "จำนวนข้อเปลี่ยนแปลง", placeholder: "5" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'เขียน API Documentation', desc:'สร้างเอกสาร API แบบ OpenAPI/Swagger จากโค้ด', 
    prompt:'จงเขียน API documentation สำหรับ endpoint ต่อไปนี้:\n\n[HTTP Method] [URL]\nRequest Body/Params: [อธิบาย]\nResponse: [ตัวอย่าง JSON]\nHeaders: [Headers]\n\nให้สร้างเอกสารในรูปแบบ:\n- คำอธิบายสั้น ([จำนวนคำ] คำ)\n- Parameters table ([จำนวน params] พารามิเตอร์)\n- Example request (curl): [curl example]\n- Example response ([จำนวน response fields] ฟิลด์)\n- Error codes ([จำนวน error codes] รหัส)\n- Authentication: [Authentication]\n\nใช้รูปแบบ Markdown หรือ YAML ตามต้องการ: [รูปแบบ]', 
    favorite: false, rating: 0, tags: ['api', 'documentation'], variables: [
      { name: "HTTP Method", placeholder: "GET/POST/PUT" },
      { name: "URL", placeholder: "/api/users" },
      { name: "Headers", placeholder: "Authorization: Bearer token" },
      { name: "จำนวนคำ", placeholder: "50" },
      { name: "จำนวน params", placeholder: "3" },
      { name: "curl example", placeholder: "curl -X GET http://..." },
      { name: "จำนวน response fields", placeholder: "5" },
      { name: "จำนวน error codes", placeholder: "3" },
      { name: "Authentication", placeholder: "JWT Token" },
      { name: "รูปแบบ", placeholder: "Markdown/YAML" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'แปลงโค้ดระหว่างภาษา', desc:'แปลโค้ดจากภาษาหนึ่งไปอีกภาษา พร้อมเทียบความแตกต่าง', 
    prompt:'จงแปลงโค้ดต่อไปนี้จาก [ภาษาต้นทาง] เป็น [ภาษาเป้าหมาย]:\n\n```[ภาษาต้นทาง]\n[โค้ด]\n```\n\nบริบทการใช้งาน: [บริบท]\nเวอร์ชันภาษา: [เวอร์ชัน]\n\nให้อธิบาย:\n- ส่วนที่แปลตรงตัว ([จำนวนตรงตัว] ส่วน)\n- ส่วนที่ต้องปรับเนื่องจาก syntax/library ต่างกัน ([จำนวนปรับเปลี่ยน] ส่วน)\n- ผลลัพธ์ต้องเหมือนเดิม\n- ไลบรารีทดแทน: [ไลบรารี]\n\nเขียนโค้ดใหม่ทั้งหมด ([จำนวนบรรทัด] บรรทัด) พร้อมคอมเมนต์เทียบ', 
    favorite: false, rating: 0, tags: ['convert', 'translation'], variables: [
      { name: "ภาษาต้นทาง", placeholder: "Python" },
      { name: "ภาษาเป้าหมาย", placeholder: "JavaScript" },
      { name: "บริบท", placeholder: "Web API/Data Processing" },
      { name: "เวอร์ชัน", placeholder: "Python 3.10, ES6" },
      { name: "จำนวนตรงตัว", placeholder: "3" },
      { name: "จำนวนปรับเปลี่ยน", placeholder: "2" },
      { name: "ไลบรารี", placeholder: "axios แทน requests" },
      { name: "จำนวนบรรทัด", placeholder: "20" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'ออกแบบฐานข้อมูล', desc:'ออกแบบ Schema ฐานข้อมูล พร้อมความสัมพันธ์', 
    prompt:'คุณเป็น Database Architect จงออกแบบ schema สำหรับระบบ "[ระบบ]" ที่มี entities:\n[list entities]\n\nประเภทฐานข้อมูล: [ประเภท]\nจำนวนผู้ใช้งาน: [จำนวนผู้ใช้งาน] คนต่อวัน\n\nให้สร้าง:\n- ER Diagram (อธิบายด้วยตัวอักษร) ([จำนวน entities] entities)\n- CREATE TABLE statements (SQL) ([จำนวนตาราง] ตาราง)\n- Indexes ที่แนะนำ ([จำนวน indexes] indexes)\n- ตัวอย่าง query ที่ใช้บ่อย ([จำนวน queries] queries)\n- การกำหนด foreign key และ constraints ([จำนวน constraints] constraints)\n- ความสัมพันธ์: [ความสัมพันธ์]', 
    favorite: false, rating: 0, tags: ['database', 'schema'], variables: [
      { name: "ระบบ", placeholder: "เช่น ระบบจัดการสินค้า" },
      { name: "list entities", placeholder: "User, Product, Order" },
      { name: "ประเภท", placeholder: "SQL/NoSQL/PostgreSQL" },
      { name: "จำนวนผู้ใช้งาน", placeholder: "10000" },
      { name: "จำนวน entities", placeholder: "3" },
      { name: "จำนวนตาราง", placeholder: "5" },
      { name: "จำนวน indexes", placeholder: "3" },
      { name: "จำนวน queries", placeholder: "4" },
      { name: "จำนวน constraints", placeholder: "6" },
      { name: "ความสัมพันธ์", placeholder: "1-to-many, many-to-many" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'Debugging Assistant', desc:'วิเคราะห์บั๊กจาก log หรือ error message', 
    prompt:'จงวิเคราะห์ปัญหาจาก error/log ต่อไปนี้:\n\n```\n[error message/log]\n```\n\nสภาพแวดล้อม: [สภาพแวดล้อม]\nเวอร์ชัน: [เวอร์ชัน]\n\nให้อธิบาย:\n1. สาเหตุที่เป็นไปได้ ([จำนวนสาเหตุ] สาเหตุ)\n2. วิธีตรวจสอบเพิ่มเติม ([จำนวนวิธีตรวจสอบ] วิธี)\n3. แนวทางแก้ไข ([จำนวนแนวทาง] วิธี)\n4. โค้ดที่ปรับแก้ ([จำนวนบรรทัด] บรรทัด)\n5. การป้องกันในอนาคต: [การป้องกัน]\n\nภาษา/stack: [ระบุ]', 
    favorite: false, rating: 0, tags: ['debug', 'troubleshoot'], variables: [
      { name: "ระบุ", placeholder: "Node.js/Python/Java" },
      { name: "สภาพแวดล้อม", placeholder: "Production/Staging/Dev" },
      { name: "เวอร์ชัน", placeholder: "Node 18, Python 3.10" },
      { name: "จำนวนสาเหตุ", placeholder: "3" },
      { name: "จำนวนวิธีตรวจสอบ", placeholder: "2" },
      { name: "จำนวนแนวทาง", placeholder: "3" },
      { name: "จำนวนบรรทัด", placeholder: "10" },
      { name: "การป้องกัน", placeholder: "เพิ่ม error handling" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'เขียน Shell Script ขั้นเทพ', desc:'สร้าง Bash/PowerShell script สำหรับงานอัตโนมัติ', 
    prompt:'จงเขียน Shell script สำหรับ [OS] ที่ทำงาน:\n[อธิบายงาน]\n\nชื่อสคริปต์: [ชื่อสคริปต์]\nจำนวนพารามิเตอร์: [จำนวนพารามิเตอร์] ตัว\n\nข้อกำหนด:\n- ตรวจสอบ environment ก่อนรัน ([จำนวน checks] checks)\n- มี error handling ([จำนวน error handling] กรณี)\n- ใช้งาน flag/option ([flags] flags)\n- แสดง progress bar หรือ log ([log format] format)\n- ใช้คำสั่ง native เป็นหลัก\n- จัดการไฟล์: [จัดการไฟล์]\n\nเขียนโค้ดพร้อมคอมเมนต์ ([จำนวนบรรทัด] บรรทัด)', 
    favorite: false, rating: 0, tags: ['shell', 'script'], variables: [
      { name: "OS", placeholder: "Linux/macOS/Windows" },
      { name: "อธิบายงาน", placeholder: "เช่น backup ไฟล์" },
      { name: "ชื่อสคริปต์", placeholder: "backup.sh" },
      { name: "จำนวนพารามิเตอร์", placeholder: "2" },
      { name: "จำนวน checks", placeholder: "3" },
      { name: "จำนวน error handling", placeholder: "2" },
      { name: "flags", placeholder: "-v, -h" },
      { name: "log format", placeholder: "timestamp + message" },
      { name: "จัดการไฟล์", placeholder: "compress, move" },
      { name: "จำนวนบรรทัด", placeholder: "50" }
    ]
  },
  { 
    cat:'code', tag:'code', title:'สร้างโปรเจกต์เรียนรู้', desc:'ออกแบบโปรเจกต์ขนาดเล็กสำหรับฝึกเขียนโค้ด', 
    prompt:'จงออกแบบโปรเจกต์ฝึกหัดสำหรับผู้เริ่มต้นภาษา "[ภาษา]" ในหัวข้อ "[หัวข้อ]"\n\nระดับ: [ระดับ]\nจำนวนชั่วโมง: [จำนวนชั่วโมง] ชั่วโมง\n\nให้ระบุ:\n- โจทย์/ฟีเจอร์ที่ต้องทำ ([จำนวนฟีเจอร์] ฟีเจอร์)\n- Milestone ([จำนวน milestone] ขั้น)\n- ตัวอย่างโค้ดเริ่มต้น ([จำนวนบรรทัด] บรรทัด)\n- Learning outcome ([จำนวนผลลัพธ์] ข้อ)\n- คำแนะนำแหล่งอ้างอิง ([จำนวนแหล่ง] แหล่ง)\n- ทรัพยากรที่ต้องใช้: [ทรัพยากร]\n\nความยาก: [ความยาก]', 
    favorite: false, rating: 0, tags: ['project', 'learning'], variables: [
      { name: "ภาษา", placeholder: "Python/JavaScript" },
      { name: "หัวข้อ", placeholder: "Web Scraping/API" },
      { name: "ระดับ", placeholder: "เริ่มต้น/ปานกลาง" },
      { name: "จำนวนชั่วโมง", placeholder: "10" },
      { name: "จำนวนฟีเจอร์", placeholder: "3" },
      { name: "จำนวน milestone", placeholder: "5" },
      { name: "จำนวนบรรทัด", placeholder: "20" },
      { name: "จำนวนผลลัพธ์", placeholder: "4" },
      { name: "จำนวนแหล่ง", placeholder: "3" },
      { name: "ทรัพยากร", placeholder: "IDE, API key" },
      { name: "ความยาก", placeholder: "ง่าย/ปานกลาง" }
    ]
  },

  // ===== IMAGE (10) - เดิม + เพิ่มตัวแปร =====
  { 
    cat:'image', tag:'image', title:'Midjourney Master', desc:'สร้าง prompt วาดรูปสไตล์ Midjourney ละเอียดทุกมิติ', 
    prompt:'จงสร้าง Midjourney prompt สำหรับภาพ: "[คำอธิบายภาพที่ต้องการ]"\n\nรายละเอียด:\n- Subject หลัก: [subject] (อธิบายละเอียด)\n- สไตล์ศิลปะ: [สไตล์] (เช่น photorealistic, oil painting, cyberpunk, anime, watercolor)\n- แสง/บรรยากาศ: [แสง] (lighting: golden hour, neon, dramatic, soft)\n- มุมกล้อง: [มุมกล้อง] (close-up, wide angle, bird eye, low angle)\n- โทนสี: [โทนสี] (warm, cool, muted, vibrant, monochrome)\n- รายละเอียดพิเศษ: [รายละเอียด] (texture, particles, reflections)\n- Aspect ratio: [aspect ratio] (--ar 16:9 หรืออื่นๆ)\n- Quality tags: [quality] (--q 2 --v 6.0)\n- Camera/ Lens: [กล้อง] (85mm, macro)\n\nเขียนเป็น prompt ภาษาอังกฤษ 1 บรรทัด พร้อมคำอธิบายแยกเป็นภาษาไทย ([จำนวนคำอธิบาย] คำ)', 
    favorite: false, rating: 0, tags: ['midjourney', 'ai-art'], variables: [
      { name: "คำอธิบายภาพที่ต้องการ", placeholder: "เช่น หุ่นยนต์ในป่า" },
      { name: "subject", placeholder: "robot standing in forest" },
      { name: "สไตล์", placeholder: "cyberpunk" },
      { name: "แสง", placeholder: "neon lighting" },
      { name: "มุมกล้อง", placeholder: "wide angle" },
      { name: "โทนสี", placeholder: "cool blue" },
      { name: "รายละเอียด", placeholder: "glowing particles" },
      { name: "aspect ratio", placeholder: "--ar 16:9" },
      { name: "quality", placeholder: "--q 2 --v 6.0" },
      { name: "กล้อง", placeholder: "85mm lens" },
      { name: "จำนวนคำอธิบาย", placeholder: "50" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'Character Designer', desc:'ออกแบบตัวละคร ละเอียดทั้งหน้าตา ชุด อาวุธ บุคลิก', 
    prompt:'จงออกแบบตัวละครสำหรับ [ประเภท] โดยมีคอนเซ็ปต์: "[คอนเซ็ปต์ตัวละคร]"\n\nให้ระบุ:\n1. ชื่อและฉายา: [ชื่อและฉายา]\n2. อายุ: [อายุ], เพศ: [เพศ], เชื้อชาติ/สปีชีส์\n3. รูปร่างหน้าตา: [รูปร่างหน้าตา] (ผม, ตา, ผิว, ความสูง, รูปร่าง)\n4. ชุด/เสื้อผ้า: [ชุด/เสื้อผ้า] (ละเอียดทุกชิ้น สี วัสดุ)\n5. อาวุธ/อุปกรณ์: [อาวุธ/อุปกรณ์] พร้อมความพิเศษ\n6. บุคลิก/นิสัย: [บุคลิก] 3 ข้อ\n7. จุดเด่น/แผนเป็น: [จุดเด่น] 1 จุด\n8. Backstory: [backstory] สั้น 3 บรรทัด\n9. Prompt สำหรับ AI วาดภาพ (ภาษาอังกฤษ): [prompt AI]\n\nให้ครบถ้วนทุกข้อ', 
    favorite: false, rating: 0, tags: ['character', 'design'], variables: [
      { name: "ประเภท", placeholder: "เกม/นิยาย/อนิเมะ" },
      { name: "คอนเซ็ปต์ตัวละคร", placeholder: "นักรบอวกาศ" },
      { name: "ชื่อและฉายา", placeholder: "เคน หมาป่าแห่งอวกาศ" },
      { name: "อายุ", placeholder: "28" },
      { name: "เพศ", placeholder: "ชาย" },
      { name: "รูปร่างหน้าตา", placeholder: "ผมสีเงิน, ตาเหลือง" },
      { name: "ชุด/เสื้อผ้า", placeholder: "เกราะไลท์weight" },
      { name: "บุคลิก", placeholder: "กล้าหาญ, สุขุม" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'Stable Diffusion Prompt', desc:'สร้าง prompt สำหรับ Stable Diffusion เน้นเทคนิคและ negative prompt', 
    prompt:'จงสร้าง Stable Diffusion prompt สำหรับภาพ "[ภาพ]" ในสไตล์ "[สไตล์]"\n\nรายละเอียด:\n- Positive prompt (อังกฤษ, ใส่ค่าน้ำหนักด้วย (word:1.2)): [positive prompt]\n- Negative prompt (สิ่งที่ไม่อยากให้เกิด): [negative prompt]\n- Steps: [steps], Sampler: [sampler], CFG scale: [cfg scale] แนะนำ\n- Seed: [seed] (ถ้าต้องการความคงที่)\n- Resolution: [resolution]\n- Model: [model]\n\nอธิบายเหตุผลแต่ละส่วนเป็นภาษาไทย ([จำนวนคำอธิบาย] คำ)', 
    favorite: false, rating: 0, tags: ['stable-diffusion', 'ai-art'], variables: [
      { name: "ภาพ", placeholder: "ภูมิทัศน์เมือง" },
      { name: "สไตล์", placeholder: "cyberpunk" },
      { name: "positive prompt", placeholder: "cityscape, neon lights" },
      { name: "negative prompt", placeholder: "blurry, low quality" },
      { name: "steps", placeholder: "30" },
      { name: "sampler", placeholder: "DPM++ 2M Karras" },
      { name: "cfg scale", placeholder: "7" },
      { name: "resolution", placeholder: "512x512" },
      { name: "model", placeholder: "v1.5/v2.1" },
      { name: "จำนวนคำอธิบาย", placeholder: "100" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'ออกแบบ Game Environment', desc:'ออกแบบฉาก 3D สำหรับเกม', 
    prompt:'จงออกแบบฉากสำหรับเกม "[แนวเกม]" เช่น ป่า, เมืองไซเบอร์พังค์\n\nรายละเอียด:\n- Mood board description (3-4 ประโยค): [mood board]\n- องค์ประกอบในฉาก: [องค์ประกอบ] (สิ่งก่อสร้าง, พืช, แสง, อุปกรณ์)\n- Palette สี: [palette] (primary, secondary, accent)\n- Lighting setup: [lighting] (ตำแหน่ง, ความเข้ม, สี)\n- Point of interest: [point of interest]\n- Prompt สำหรับ AI image generator: [prompt AI]\n- ขนาดฉาก: [ขนาด] (กว้างxลึก)\n- ธาตุหลัก: [ธาตุหลัก] (ไฟ, น้ำ, ลม, ดิน)\n\nให้ครบถ้วนทุกข้อ', 
    favorite: false, rating: 0, tags: ['game', 'environment'], variables: [
      { name: "แนวเกม", placeholder: "RPG/Action" },
      { name: "mood board", placeholder: "dark forest with glowing mushrooms" },
      { name: "องค์ประกอบ", placeholder: "trees, rocks, river" },
      { name: "palette", placeholder: "green, brown, blue" },
      { name: "lighting", placeholder: "moonlight from above" },
      { name: "point of interest", placeholder: "ancient temple" },
      { name: "prompt AI", placeholder: "fantasy forest environment" },
      { name: "ขนาด", placeholder: "100x100 เมตร" },
      { name: "ธาตุหลัก", placeholder: "nature/earth" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'Infographic Prompt', desc:'สร้างภาพ Infographic อธิบายข้อมูล', 
    prompt:'จงสร้าง Prompt สำหรับ AI วาด Infographic หัวข้อ "[หัวข้อ]"\n\nข้อมูล:\n[ใส่ข้อมูลสำคัญ]\n\nรายละเอียด:\n- ใช้กราฟิกประเภทใด: [กราฟิก] (bar chart, timeline, flowchart)\n- ใช้สี: [สี] (หลัก, รอง, accent)\n- ข้อความสั้นที่แสดง: [ข้อความ]\n- Icon ที่ใช้: [icon]\n- Layout: [layout] (แนวตั้ง/แนวนอน)\n- จำนวนส่วน: [จำนวนส่วน] ส่วน\n- สไตล์: [สไตล์] (minimal, flat, 3D)\n\nเขียนเป็น prompt ภาษาอังกฤษ กระชับ ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['infographic', 'data'], variables: [
      { name: "หัวข้อ", placeholder: "สถิติการใช้งานอินเทอร์เน็ต" },
      { name: "กราฟิก", placeholder: "bar chart, pie chart" },
      { name: "สี", placeholder: "blue, white, orange" },
      { name: "ข้อความ", placeholder: "Growth 50% in 2025" },
      { name: "icon", placeholder: "arrow, chart icons" },
      { name: "layout", placeholder: "แนวตั้ง" },
      { name: "จำนวนส่วน", placeholder: "5" },
      { name: "สไตล์", placeholder: "flat design" },
      { name: "จำนวนคำ", placeholder: "30" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'ภาพประกอบหนังสือเด็ก', desc:'ออกแบบภาพประกอบสำหรับหนังสือนิทาน', 
    prompt:'จงออกแบบภาพประกอบสำหรับหนังสือนิทานเด็ก เรื่อง "[เรื่องย่อ]"\n\nรายละเอียด:\nตัวละคร: [ชื่อ], [ลักษณะ], [อายุ]\nฉาก: [สถานที่]\nอารมณ์ที่ต้องการ: [อารมณ์] (สดใส, อบอุ่น, มหัศจรรย์)\nจำนวนหน้า: [จำนวนหน้า] หน้า\n\nสร้าง prompt สำหรับภาพ:\n- หน้า 1: [คำอธิบาย หน้า 1]\n- หน้า 2: [คำอธิบาย หน้า 2]\n- หน้า 3: [คำอธิบาย หน้า 3]\n\nสไตล์: [สไตล์] (soft watercolor, cute character design)\nโทนสี: [โทนสี] (pastel, bright)\n\nให้ครบทุกหน้า', 
    favorite: false, rating: 0, tags: ['kids', 'illustration'], variables: [
      { name: "เรื่องย่อ", placeholder: "กระต่ายกับนายพราน" },
      { name: "ชื่อ", placeholder: "บันนี่" },
      { name: "ลักษณะ", placeholder: "กระต่ายสีขาว, ใส่ผ้าพันคอสีแดง" },
      { name: "อายุ", placeholder: "5 ขวบ" },
      { name: "สถานที่", placeholder: "ป่าสน" },
      { name: "อารมณ์", placeholder: "สดใส, อบอุ่น" },
      { name: "จำนวนหน้า", placeholder: "3" },
      { name: "สไตล์", placeholder: "soft watercolor" },
      { name: "โทนสี", placeholder: "pastel pink, green" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'NFT Profile Picture', desc:'สร้างภาพ avatar สำหรับ NFT', 
    prompt:'จงสร้าง prompt สำหรับ NFT PFP ในธีม "[ธีม]"\n\nรายละเอียด:\n- Species: [species] (human, animal, robot)\n- Traits 5 อย่าง: [traits] (สีพื้นหลัง, ทรงผม, ตา, เครื่องประดับ, เสื้อผ้า)\n- สไตล์ art: [สไตล์] (pixel art / 3D render / flat vector)\n- จำนวนรูปแบบ: [จำนวนรูปแบบ] (regular/rare/legendary)\n- จำนวน traits: [จำนวน traits] traits\n- Background: [background]\n- Rarity level: [rarity] (common, rare, legendary)\n\nให้ prompt พร้อมคำอธิบาย layer แต่ละแบบ ([จำนวน layer] layers)', 
    favorite: false, rating: 0, tags: ['nft', 'avatar'], variables: [
      { name: "ธีม", placeholder: "นักรบอวกาศ" },
      { name: "species", placeholder: "human/animal/robot" },
      { name: "traits", placeholder: "blue hair, cyber eye" },
      { name: "สไตล์", placeholder: "3D render" },
      { name: "จำนวนรูปแบบ", placeholder: "3" },
      { name: "จำนวน traits", placeholder: "5" },
      { name: "background", placeholder: "space nebula" },
      { name: "rarity", placeholder: "legendary" },
      { name: "จำนวน layer", placeholder: "7" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'ภาพถ่ายสินค้า', desc:'สร้าง prompt สำหรับภาพถ่ายสินค้าแบบมืออาชีพ', 
    prompt:'จงสร้าง AI prompt สำหรับถ่ายภาพสินค้า "[สินค้า]" บนฉากหลัง "[ฉาก]"\n\nรายละเอียด:\n- มุมกล้อง: [มุมกล้อง] (45 องศา, close-up, top-down)\n- แสง: [แสง] (studio softbox, natural light)\n- Props: [props] (อุปกรณ์ประกอบ)\n- Mood: [mood] (premium, minimal, luxury)\n- กล้อง: [กล้อง] (85mm f/1.4, 50mm f/2.8)\n- สีโทน: [โทนสี] (warm, cool, neutral)\n- จำนวนรูป: [จำนวนรูป] รูป\n\nเขียน prompt ภาษาอังกฤษ ([จำนวนคำ] คำ) พร้อมคำอธิบายภาษาไทย', 
    favorite: false, rating: 0, tags: ['product', 'photography'], variables: [
      { name: "สินค้า", placeholder: "นาฬิกา/กระเป๋า" },
      { name: "ฉาก", placeholder: "โต๊ะไม้สีขาว" },
      { name: "มุมกล้อง", placeholder: "close-up" },
      { name: "แสง", placeholder: "studio softbox" },
      { name: "props", placeholder: "กล่องสีดำ, ดอกไม้" },
      { name: "mood", placeholder: "premium, minimal" },
      { name: "กล้อง", placeholder: "85mm f/1.4" },
      { name: "โทนสี", placeholder: "warm brown tones" },
      { name: "จำนวนรูป", placeholder: "3" },
      { name: "จำนวนคำ", placeholder: "50" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'UI/UX Design Mockup', desc:'สร้าง mockup หน้าจอแอป/เว็บ ด้วย AI', 
    prompt:'จงสร้าง prompt สำหรับ AI generate UI mockup ของแอป "[ชื่อแอป]" สำหรับ "[แพลตฟอร์ม]"\n\nรายละเอียด:\nหน้าจอ: [หน้าจอ] (Login/Home/Dashboard)\n- สีหลัก: [สีหลัก] ([hex])\n- สีรอง: [สีรอง] ([hex2])\n- Typography: [typography] (font)\n- Layout: [layout] (grid/list/card)\n- Elements: [elements] (ปุ่ม, input, icon)\n- จำนวนหน้าจอ: [จำนวนหน้าจอ] หน้า\n- Style: [style] (flat, material, glassmorphism)\n\nให้ระบุ detail และ prompt ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['ui', 'ux', 'design'], variables: [
      { name: "ชื่อแอป", placeholder: "แอปส่งอาหาร" },
      { name: "แพลตฟอร์ม", placeholder: "iOS/Android/Web" },
      { name: "หน้าจอ", placeholder: "Home screen" },
      { name: "สีหลัก", placeholder: "สีส้ม" },
      { name: "hex", placeholder: "#FF6600" },
      { name: "สีรอง", placeholder: "สีเทา" },
      { name: "hex2", placeholder: "#666666" },
      { name: "typography", placeholder: "Roboto" },
      { name: "layout", placeholder: "card layout" },
      { name: "elements", placeholder: "button, search bar" },
      { name: "จำนวนหน้าจอ", placeholder: "3" },
      { name: "style", placeholder: "material design" },
      { name: "จำนวนคำ", placeholder: "100" }
    ]
  },
  { 
    cat:'image', tag:'image', title:'Abstract Art Prompt', desc:'สร้างภาพ abstract แนวศิลปะร่วมสมัย', 
    prompt:'จงสร้าง AI prompt สำหรับภาพ abstract art แนว "[แนว]" เช่น expressionism, geometric\n\nรายละเอียด:\nอารมณ์ที่สื่อ: [อารมณ์] (สงบ/ตื่นเต้น/วุ่นวาย)\nส่วนประกอบ: [ส่วนประกอบ] (รูปทรง, เส้น, จุดสี)\nสี: [สี] (กำหนด palette)\nเทคนิค: [เทคนิค] (drip painting, digital glitch, oil texture)\nขนาดภาพ: [ขนาด] (512x512, 1024x1024)\nจำนวนชั้น: [จำนวนชั้น] ชั้น\nสไตล์: [สไตล์] (contemporary, modern)\n\nเขียน prompt อังกฤษและไทย ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['abstract', 'art'], variables: [
      { name: "แนว", placeholder: "expressionism/geometric" },
      { name: "อารมณ์", placeholder: "สงบ/ตื่นเต้น" },
      { name: "ส่วนประกอบ", placeholder: "circles, lines, dots" },
      { name: "สี", placeholder: "blue, yellow, red" },
      { name: "เทคนิค", placeholder: "drip painting" },
      { name: "ขนาด", placeholder: "1024x1024" },
      { name: "จำนวนชั้น", placeholder: "3" },
      { name: "สไตล์", placeholder: "contemporary" },
      { name: "จำนวนคำ", placeholder: "50" }
    ]
  },

  // ===== CHAT (10) - เดิม + เพิ่มตัวแปร =====
  { 
    cat:'chat', tag:'chat', title:'Roleplay Character Card', desc:'สร้างการ์ดตัวละครสำหรับแชท มีบุคลิกครบ', 
    prompt:'จงสร้าง Roleplay Character Card สำหรับ AI แชท โดยมีรายละเอียดดังนี้:\n\nชื่อตัวละคร: "[ชื่อ]"\nบทบาท: "[บทบาท]"\nอายุ: [อายุ], เพศ: [เพศ]\nอาชีพ: [อาชีพ]\n\nให้เขียน:\n1. **Personality** - นิสัย [จำนวนข้อ] ข้อ (บวก+ลบ ผสมกัน): [บุคลิก]\n2. **Speaking Style** - วิธีพูด: [วิธีพูด] (สุภาพ/กึ่งกึ่ง/ไม่เป็นทางการ, ใช้คำว่าอะไรเรียกตัวเอง, ใช้คำว่าอะไรเรียกผู้ใช้)\n3. **Background** - ประวัติสั้น [จำนวนบรรทัด] บรรทัด: [ประวัติ]\n4. **Knowledge** - สิ่งที่รู้ดี: [สิ่งที่รู้ดี] / สิ่งที่ไม่รู้: [สิ่งที่ไม่รู้]\n5. **Rules** - [จำนวนกฎ] ข้อที่ตัวละครต้องไม่ทำ (ขอบเขต): [กฎ]\n6. **Greeting** - ข้อความเปิดแชทแรก [จำนวนบรรทัด] บรรทัด: [Greeting]\n7. **Example Dialog** - [จำนวนตัวอย่าง] คู่ (ผู้ใช้: ... / ตัวละคร: ...)', 
    favorite: false, rating: 0, tags: ['roleplay', 'chat'], variables: [
      { name: "ชื่อ", placeholder: "อาจารย์นภา" },
      { name: "บทบาท", placeholder: "พ่อสอนภาษาไทย" },
      { name: "อายุ", placeholder: "35" },
      { name: "เพศ", placeholder: "หญิง" },
      { name: "อาชีพ", placeholder: "ครูสอนภาษา" },
      { name: "จำนวนข้อ", placeholder: "5" },
      { name: "บุคลิก", placeholder: "ใจดี, อดทน, ชอบสอน" },
      { name: "วิธีพูด", placeholder: "สุภาพ, เรียกตัวเองว่า ครู" },
      { name: "จำนวนบรรทัด", placeholder: "3" },
      { name: "ประวัติ", placeholder: "สอนมาตลอด 10 ปี" },
      { name: "สิ่งที่รู้ดี", placeholder: "ภาษาไทย, วัฒนธรรม" },
      { name: "สิ่งที่ไม่รู้", placeholder: "คณิตศาสตร์" },
      { name: "จำนวนกฎ", placeholder: "3" },
      { name: "กฎ", placeholder: "ห้ามด่า, ห้ามโกหก" },
      { name: "Greeting", placeholder: "สวัสดีนักเรียน วันนี้เรียนเรื่องอะไรดี?" },
      { name: "จำนวนตัวอย่าง", placeholder: "3" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Socratic Tutor', desc:'ติวเตอร์สอนแบบถาม-ตอบ กระตุ้นคิดเอง', 
    prompt:'คุณเป็นติวเตอร์ที่ใช้วิธี Socratic Method ในการสอน\n\nวิชา/หัวข้อ: "[วิชา/หัวข้อ]"\nระดับ: [ระดับ]\n\nกฎ:\n1. ห้ามตอบตรงๆ ต้องถามคำถามนำให้ผู้เรียนคิดเอง\n2. ถ้าผู้เรียนตอบผิด อย่าบอกว่าผิด แต่ถามคำถามที่ทำให้เห็นจุดขัดแย้งเอง\n3. ใช้ตัวอย่าง/การเปรียบเทียบในชีวิตประจำวัน\n4. ทำเป็นบทสนทนาทีละคำถาม รอคำตอบทุกครั้ง\n5. เมื่อผู้เรียนเข้าใจแล้ว สรุปประเด็นสำคัญ 1 บรรทัด\n6. ใช้ภาษาเป็นกันเอง ไม่เกรี้ยวกราด\n\nวัตถุประสงค์การเรียนรู้: [วัตถุประสงค์]\nจำนวนคำถามทีละรอบ: [จำนวนคำถาม]\nภาษาที่ใช้สอน: [ภาษา]\nเวลาต่อคำถาม: [เวลา] นาที\n\nเริ่มต้น: ทักทายและถามว่าผู้เรียนรู้เรื่องนี้มาแค่ไหน', 
    favorite: false, rating: 0, tags: ['tutor', 'education'], variables: [
      { name: "วิชา/หัวข้อ", placeholder: "คณิตศาสตร์/ประวัติศาสตร์" },
      { name: "ระดับ", placeholder: "มัธยม/ปริญญาตรี" },
      { name: "วัตถุประสงค์", placeholder: "เข้าใจแนวคิดหลัก" },
      { name: "จำนวนคำถาม", placeholder: "3-5" },
      { name: "ภาษา", placeholder: "ไทย/อังกฤษ" },
      { name: "เวลา", placeholder: "2-3" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Career Coach', desc:'โค้ชด้านอาชีพ ให้คำแนะนำการหางาน', 
    prompt:'คุณเป็น Career Coach จงให้คำแนะนำเกี่ยวกับ "[หัวข้อ]"\n\nรายละเอียดผู้ใช้:\n- อายุ/ประสบการณ์: [ปี]\n- สาขาที่สนใจ: [สาขา]\n- เป้าหมาย: [เป้าหมาย]\n- กลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\n\nให้ถามคำถามเพิ่มเติมเพื่อเจาะลึก แล้วให้คำแนะนำดังนี้:\n1. วิเคราะห์จุดแข็ง-จุดอ่อน\n2. เส้นทางอาชีพที่น่าสนใจ (จำนวนเส้นทาง: [จำนวนเส้นทาง])\n3. ทักษะที่ควรพัฒนา\n4. แหล่งเรียนรู้ (แหล่งเรียนรู้: [แหล่งเรียนรู้])\n5. วิธีเขียน Resume/Portfolio\n6. แนวทางสัมภาษณ์ (เทคนิค: [เทคนิค])\n\nเป็นกันเอง และกระตุ้นให้ตั้งเป้าหมาย', 
    favorite: false, rating: 0, tags: ['career', 'coach'], variables: [
      { name: "หัวข้อ", placeholder: "การเปลี่ยนงาน/เลื่อนขั้น" },
      { name: "สาขา", placeholder: "IT/การตลาด" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น/วัยทำงาน" },
      { name: "จำนวนเส้นทาง", placeholder: "3" },
      { name: "แหล่งเรียนรู้", placeholder: "Coursera, Udemy" },
      { name: "เทคนิค", placeholder: "STAR Method" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Travel Planner', desc:'วางแผนเที่ยวแบบละเอียด ตามงบและสไตล์', 
    prompt:'คุณเป็น Travel Planner จงวางแผนทริปให้กับผู้ใช้\n\nรายละเอียด:\n- ปลายทาง: [เมือง/ประเทศ]\n- จำนวนวัน: [จำนวนวัน]\n- งบประมาณ: [งบประมาณ] (บาท)\n- สไตล์เที่ยว: [สไตล์]\n- จำนวนคน: [จำนวนคน]\n- ฤดูกาล: [ฤดูกาล]\n\nให้ตอบ:\n1. ตารางเที่ยววันต่อวัน (เช้า-บ่าย-ค่ำ) [จำนวนวัน]\n2. งบประมาณคร่าวๆ ต่อวัน (จำนวนบาท)\n3. ที่พักแนะนำ (จุดเด่น): [ที่พัก]\n4. อาหาร/คาเฟ่ (ร้านดัง): [อาหาร]\n5. เคล็ดลับการเดินทาง (วิธีเดินทาง): [เทคนิค]\n6. แผนสำรอง (กรณีฝน/ปิด): [แผนรอง]\n\nถามข้อมูลเพิ่มหากจำเป็น', 
    favorite: false, rating: 0, tags: ['travel', 'planning'], variables: [
      { name: "เมือง/ประเทศ", placeholder: "เชียงใหม่/ญี่ปุ่น" },
      { name: "จำนวนวัน", placeholder: "3 วัน 2 คืน" },
      { name: "งบประมาณ", placeholder: "15000" },
      { name: "สไตล์", placeholder: "ผจญภัย/ชิลล์/วัฒนธรรม" },
      { name: "จำนวนคน", placeholder: "2 คน" },
      { name: "ฤดูกาล", placeholder: "ฤดูร้อน" },
      { name: "จำนวนวัน", placeholder: "3" },
      { name: "จำนวนบาท", placeholder: "5000" },
      { name: "ที่พัก", placeholder: "โรงแรมริมแม่นำ" },
      { name: "อาหาร", placeholder: "กาแฟชื่อดัง" },
      { name: "เทคนิค", placeholder: "เช่าารถ/รถไฟ" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Personal Finance Advisor', desc:'ให้คำปรึกษาการเงินส่วนบุคคล', 
    prompt:'คุณเป็นที่ปรึกษาการเงิน จงช่วยวางแผนให้กับผู้ใช้\n\nข้อมูล:\n- รายได้ต่อเดือน: [รายได้ต่อเดือน] (บาท)\n- ค่าใช้จ่ายหลัก: [ค่าใช้จ่ายหลัก]\n- เป้าหมาย: [เป้าหมาย]\n- อายุ: [อายุ] ปี\n- หนี้สิน: [หนี้สิน] (ถ้ามี)\n- ระยะเวลาออม: [ระยะเวลาออม]\n\nให้คำแนะนำ:\n1. วิเคราะห์กระแสเงินสด ([จำนวนข้อวิเคราะห์] ข้อ)\n2. สัดส่วนรายได้ที่ควรออม/ใช้ ([สัดส่วน])\n3. แผนปลดหนี้ (ถ้ามี) ([จำนวนขั้นตอน] ขั้น)\n4. การลงทุนที่เหมาะกับความเสี่ยง ([ระดับความเสี่ยง])\n5. แอป/เครื่องมือช่วย ([แอป])\n6. เป้าหมายระยะยาว: [เป้าหมายระยะยาว]\n\nเป็นกันเอง ไม่ใช้ศัพท์เทคนิคมากเกิน ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['finance', 'advisor'], variables: [
      { name: "รายได้ต่อเดือน", placeholder: "30000 บาท" },
      { name: "เป้าหมาย", placeholder: "ออมเงิน/ปลดหนี้/ลงทุน" },
      { name: "อายุ", placeholder: "30" },
      { name: "หนี้สิน", placeholder: "บัตรเครดิต 50000" },
      { name: "ระยะเวลาออม", placeholder: "5 ปี" },
      { name: "จำนวนข้อวิเคราะห์", placeholder: "3" },
      { name: "สัดส่วน", placeholder: "ออม 20%, ใช้ 80%" },
      { name: "จำนวนขั้นตอน", placeholder: "3" },
      { name: "ระดับความเสี่ยง", placeholder: "ปานกลาง" },
      { name: "แอป", placeholder: "Money Lover" },
      { name: "เป้าหมายระยะยาว", placeholder: "ซื้อบ้าน" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Fitness & Nutrition Coach', desc:'โค้ชออกกำลังกายและโภชนาการ', 
    prompt:'คุณเป็นโค้ชฟิตเนสส่วนตัว จงออกแบบโปรแกรมให้กับผู้ใช้\n\nข้อมูล:\n- อายุ: [อายุ], เพศ: [เพศ], น้ำหนัก: [น้ำหนัก], ส่วนสูง: [ส่วนสูง]\n- เป้าหมาย: [เป้าหมาย]\n- อุปกรณ์ที่มี: [อุปกรณ์]\n- ข้อจำกัด: [ข้อจำกัด]\n- วันออกกำลังกาย: [วันออกกำลังกาย] วัน/สัปดาห์\n\nให้ตอบ:\n1. ตารางออกกำลังกาย 1 สัปดาห์ ([จำนวนวัน] วัน)\n2. คำอธิบายท่าแต่ละท่า ([จำนวนท่า] ท่า)\n3. แผนอาหารตัวอย่าง 1 วัน ([จำนวนมื้อ] มื้อ)\n4. เคล็ดลับสร้างวินัย ([จำนวนเคล็ดลับ] ข้อ)\n5. การพักผ่อน: [การพักผ่อน]\n\nใช้ภาษาให้กำลังใจ ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['fitness', 'nutrition'], variables: [
      { name: "อายุ", placeholder: "25" },
      { name: "เพศ", placeholder: "ชาย" },
      { name: "น้ำหนัก", placeholder: "70 กก." },
      { name: "ส่วนสูง", placeholder: "170 ซม." },
      { name: "เป้าหมาย", placeholder: "ลดน้ำหนัก/เพิ่มกล้ามเนื้อ" },
      { name: "อุปกรณ์", placeholder: "ดัมเบล/บอดี้เวท/ไม่มี" },
      { name: "ข้อจำกัด", placeholder: "ปวดเข่า" },
      { name: "วันออกกำลังกาย", placeholder: "4" },
      { name: "จำนวนวัน", placeholder: "4" },
      { name: "จำนวนท่า", placeholder: "5" },
      { name: "จำนวนมื้อ", placeholder: "3" },
      { name: "จำนวนเคล็ดลับ", placeholder: "3" },
      { name: "การพักผ่อน", placeholder: "นอน 8 ชม." },
      { name: "จำนวนคำ", placeholder: "300" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Language Exchange Partner', desc:'ฝึกภาษากับ AI แบบ conversation', 
    prompt:'คุณเป็น Language Partner สำหรับฝึกภาษา "[ภาษา]" (ภาษาเป้าหมาย)\n\nข้อมูล:\n- ระดับผู้เรียน: [ระดับ]\n- หัวข้อสนใจ: [หัวข้อสนใจ]\n- จำนวนคำศัพท์ใหม่ต่อรอบ: [จำนวนคำศัพท์] คำ\n- ความเร็วพูด: [ความเร็ว] (ช้า/ปานกลาง/เร็ว)\n\nกติกา:\n1. คุณจะพูดภาษาเป้าหมายเป็นหลัก ([สัดส่วน]%)\n2. ถ้าผู้ใช้ผิด ให้แก้ไขอย่างสุภาพ ([จำนวนข้อแก้ไข] ข้อ)\n3. เสนอคำศัพท์ใหม่ ๆ ในบริบท ([บริบท])\n4. เปลี่ยนหัวข้อตามความสนใจ ([จำนวนหัวข้อ] หัวข้อ)\n5. หากผู้ใช้ขอแปล ให้แปลเป็นภาษาไทย\n6. ใช้ตัวอย่างประโยค: [ตัวอย่างประโยค]\n\nเริ่มต้น: ทักทาย และถามว่าวันนี้อยากคุยเรื่องอะไร ([จำนวนคำทักทาย] คำ)', 
    favorite: false, rating: 0, tags: ['language', 'learning'], variables: [
      { name: "ภาษา", placeholder: "อังกฤษ/จีน/ญี่ปุ่น" },
      { name: "ระดับ", placeholder: "เริ่มต้น/กลาง/สูง" },
      { name: "หัวข้อสนใจ", placeholder: "ท่องเที่ยว, อาหาร" },
      { name: "จำนวนคำศัพท์", placeholder: "5" },
      { name: "ความเร็ว", placeholder: "ปานกลาง" },
      { name: "สัดส่วน", placeholder: "80" },
      { name: "จำนวนข้อแก้ไข", placeholder: "2" },
      { name: "บริบท", placeholder: "ในร้านอาหาร" },
      { name: "จำนวนหัวข้อ", placeholder: "3" },
      { name: "ตัวอย่างประโยค", placeholder: "How are you today?" },
      { name: "จำนวนคำทักทาย", placeholder: "20" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Emotional Support Companion', desc:'เพื่อนคุยซัพพอร์ตอารมณ์ ฟังและให้กำลังใจ', 
    prompt:'คุณเป็นเพื่อนสนิทที่จริงใจและใส่ใจ จงพูดคุยกับผู้ใช้ที่กำลังรู้สึก "[อารมณ์]"\n\nข้อมูลเพิ่มเติม:\n- สถานการณ์: [สถานการณ์]\n- ระยะเวลาที่รู้สึก: [ระยะเวลา]\n- วิธีช่วยเหลือที่ชอบ: [วิธีช่วยเหลือ]\n\nกติกา:\n1. รับฟังโดยไม่ตัดสิน ([จำนวนข้อรับฟัง] ข้อ)\n2. ถามคำถามเพื่อให้ระบาย ([จำนวนคำถาม] คำถาม)\n3. ให้กำลังใจอย่างนุ่มนวล ([จำนวนวิธีให้กำลังใจ] วิธี)\n4. แนะนำกิจกรรมคลายเครียด ([กิจกรรม])\n5. หากผู้ใช้มีอาการหนัก แนะนำให้พบผู้เชี่ยวชาญ ([ผู้เชี่ยวชาญ])\n6. ใช้คำพูด: [คำพูด]\n\nห้ามออกคำสั่งหรือบังคับ ใช้ภาษาแสดงความเข้าใจ ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['emotional', 'support'], variables: [
      { name: "อารมณ์", placeholder: "เศร้า/เครียด/เหงา" },
      { name: "สถานการณ์", placeholder: "เพิ่งเลิกงาน" },
      { name: "ระยะเวลา", placeholder: "2 สัปดาห์" },
      { name: "วิธีช่วยเหลือ", placeholder: "ฟังอย่างเงียบๆ" },
      { name: "จำนวนข้อรับฟัง", placeholder: "3" },
      { name: "จำนวนคำถาม", placeholder: "2" },
      { name: "จำนวนวิธีให้กำลังใจ", placeholder: "3" },
      { name: "กิจกรรม", placeholder: "ฟังเพลง, เดินเล่น" },
      { name: "ผู้เชี่ยวชาญ", placeholder: "จิตแพทย์" },
      { name: "คำพูด", placeholder: "ฉันเข้าใจความรู้สึกของคุณ" },
      { name: "จำนวนคำ", placeholder: "100" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Tech Support Bot', desc:'ช่วยแก้ปัญหา IT พื้นฐาน', 
    prompt:'คุณเป็น IT Support จงช่วยผู้ใช้แก้ไขปัญหา "[ปัญหา]"\n\nข้อมูล:\nอุปกรณ์/ระบบ: [อุปกรณ์]\nเวอร์ชัน: [เวอร์ชัน]\nระดับความรู้ผู้ใช้: [ระดับความรู้]\n\nวิธีการ:\n1. ถามอาการเพิ่ม ([จำนวนคำถาม] คำถาม)\n2. เสนอแนวทางแก้ไขทีละขั้น ([จำนวนขั้นตอน] ขั้น)\n3. ใช้รูปหรือลิงค์ประกอบ (อธิบาย): [รูป/ลิงค์]\n4. ตรวจสอบว่าสำเร็จหรือไม่ ([วิธีตรวจสอบ])\n5. แนะนำวิธีป้องกัน ([วิธีป้องกัน])\n6. คำศัพท์เทคนิค: [คำศัพท์เทคนิค]\n\nใช้ภาษาง่าย ไม่ technical เกินไป ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['tech', 'support'], variables: [
      { name: "ปัญหา", placeholder: "อินเทอร์เน็ตไม่ทำงาน/คอมพิวเตอร์ช้า" },
      { name: "อุปกรณ์", placeholder: "Windows/Mac/Android" },
      { name: "เวอร์ชัน", placeholder: "Windows 11, Android 13" },
      { name: "ระดับความรู้", placeholder: "เริ่มต้น/ปานกลาง" },
      { name: "จำนวนคำถาม", placeholder: "2" },
      { name: "จำนวนขั้นตอน", placeholder: "3" },
      { name: "รูป/ลิงค์", placeholder: "link to tutorial" },
      { name: "วิธีตรวจสอบ", placeholder: "ping test" },
      { name: "วิธีป้องกัน", placeholder: "อัปเดตระบบสม่ำเสมอ" },
      { name: "คำศัพท์เทคนิค", placeholder: "IP Address, DNS" },
      { name: "จำนวนคำ", placeholder: "150" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'RPG Game Master', desc:'ดำเนินเกมสวมบทบาทด้วย AI', 
    prompt:'คุณเป็น Game Master สำหรับ RPG แนว "[แนว]"\n\nรายละเอียด:\nโลก: "[ชื่อโลก]"\nผู้เล่น: [จำนวนผู้เล่น] คน, คลาส: [คลาส]\nระดับเลเวล: [เลเวล]\n\nกฎ:\n1. อธิบายฉากอย่างมีบรรยากาศ ([จำนวนประโยค] ประโยค)\n2. ให้ทางเลือก [จำนวนทางเลือก] ทาง\n3. ใช้ลูกเต๋า (d20) เมื่อมีการทดสอบ ([จำนวนทดสอบ] ครั้ง)\n4. สร้าง NPC ที่น่าจดจำ ([จำนวน NPC] ตัว): [NPC]\n5. ควบคุม pacing ให้ตื่นเต้น ([เทคนิค pacing])\n6. ระบบค่าพลัง: [ระบบค่าพลัง]\n\nเริ่มด้วยการแนะนำโลกและภารกิจแรก ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['rpg', 'game'], variables: [
      { name: "แนว", placeholder: "แฟนตาซี/ไซไฟ/สยองขวัญ" },
      { name: "ชื่อโลก", placeholder: "อาณาจักรอาร์เธอร์" },
      { name: "จำนวนผู้เล่น", placeholder: "1" },
      { name: "คลาส", placeholder: "นักรบ/พ่อมด" },
      { name: "เลเวล", placeholder: "1" },
      { name: "จำนวนประโยค", placeholder: "3" },
      { name: "จำนวนทางเลือก", placeholder: "3" },
      { name: "จำนวนทดสอบ", placeholder: "2" },
      { name: "จำนวน NPC", placeholder: "2" },
      { name: "NPC", placeholder: "ราชินีเอลาร่า" },
      { name: "เทคนิค pacing", placeholder: "เพิ่มความตึงเครียด" },
      { name: "ระบบค่าพลัง", placeholder: "HP, MP, EXP" },
      { name: "จำนวนคำ", placeholder: "100" }
    ]
  },

  // ===== MARKET (10) - เดิม + เพิ่มตัวแปร =====
  { 
    cat:'market', tag:'market', title:'Marketing Campaign', desc:'วางแผนการตลาดออนไลน์แบบครบวงจร', 
    prompt:'คุณเป็น Marketing Strategist จงวางแผนการตลาดสำหรับ "[สินค้า/บริการ]"\n\nข้อมูลเพิ่มเติม:\n- กลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\n- งบประมาณ: [งบประมาณ] (บาท)\n- ระยะเวลาแคมเปญ: [ระยะเวลา]\n- เป้าหมาย: [เป้าหมาย]\n- สไตล์แบรนด์: [สไตล์แบรนด์]\n- จำนวนคอนเทนต์: [จำนวนคอนเทนต์] ชิ้น\n\nให้ตอบตามโครงสร้าง:\n1. กลยุทธ์หลัก ([จำนวนกลยุทธ์] ข้อ)\n2. ช่องทางที่ใช้ (Social Media, SEO, Email, ฯลฯ) พร้อมเหตุผล ([จำนวนช่องทาง] ช่องทาง)\n3. Content Ideas ([จำนวน Content] ข้อ)\n4. Timeline การปล่อยคอนเทนต์ ([จำนวนวัน] วัน)\n5. วิธีการวัดผล (KPIs): [KPIs]\n6. งบประมาณโดยประมาณแยกตามช่องทาง ([จำนวนช่องทางงบ] ช่องทาง)\n\nเขียนอย่างละเอียด ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['marketing', 'campaign'], variables: [
      { name: "สินค้า/บริการ", placeholder: "เครื่องดื่มเพื่อสุขภาพ" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น/วัยทำงาน" },
      { name: "งบประมาณ", placeholder: "50000" },
      { name: "ระยะเวลา", placeholder: "1 เดือน" },
      { name: "เป้าหมาย", placeholder: "เพิ่มยอดขาย" },
      { name: "สไตล์แบรนด์", placeholder: "ทันสมัย, สดใส" },
      { name: "จำนวนคอนเทนต์", placeholder: "10" },
      { name: "จำนวนกลยุทธ์", placeholder: "3" },
      { name: "จำนวนช่องทาง", placeholder: "3" },
      { name: "จำนวน Content", placeholder: "5" },
      { name: "จำนวนวัน", placeholder: "30" },
      { name: "KPIs", placeholder: "ยอดขาย, Engagement" },
      { name: "จำนวนช่องทางงบ", placeholder: "3" },
      { name: "จำนวนคำ", placeholder: "300" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'Social Media Calendar', desc:'ปฏิทินคอนเทนต์รายเดือนสำหรับโซเชียลมีเดีย', 
    prompt:'จงออกแบบ Social Media Content Calendar สำหรับแบรนด์ "[ชื่อแบรนด์]" ในเดือน "[เดือน]" แพลตฟอร์ม: [แพลตฟอร์ม]\n\nข้อมูลเพิ่มเติม:\n- จำนวนโพสต์ต่อวัน: [จำนวนโพสต์] โพสต์\n- ประเภทคอนเทนต์: [ประเภทคอนเทนต์] (ภาพ, วิดีโอ, สตอรี่)\n- Theme แต่ละสัปดาห์: [theme]\n- กลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\n\nให้ระบุ:\n- Theme แต่ละสัปดาห์ ([จำนวน theme] themes)\n- Caption ตัวอย่าง ([จำนวน caption] อัน)\n- Hashtag แนะนำ ([จำนวน hashtag] hashtags): [hashtags]\n- วัน/เวลาที่โพสต์ดีที่สุด: [วันเวลา]\n- งบประมาณโฆษณา: [งบประมาณ]\n\nเขียนเป็นตารางรายวัน ([จำนวนวัน] วัน)', 
    favorite: false, rating: 0, tags: ['social-media', 'calendar'], variables: [
      { name: "ชื่อแบรนด์", placeholder: "แบรนด์เสื้อผ้า" },
      { name: "แพลตฟอร์ม", placeholder: "Facebook, Instagram, TikTok" },
      { name: "เดือน", placeholder: "มกราคม 2026" },
      { name: "จำนวนโพสต์", placeholder: "2" },
      { name: "ประเภทคอนเทนต์", placeholder: "ภาพ 70%, วิดีโอ 30%" },
      { name: "theme", placeholder: "ความสุข, สุขภาพ" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น 15-25 ปี" },
      { name: "จำนวน theme", placeholder: "4" },
      { name: "จำนวน caption", placeholder: "3" },
      { name: "จำนวน hashtag", placeholder: "5" },
      { name: "hashtags", placeholder: "#fashion #style" },
      { name: "วันเวลา", placeholder: "จันทร์-ศุกร์ 18:00" },
      { name: "งบประมาณ", placeholder: "10000 บาท" },
      { name: "จำนวนวัน", placeholder: "30" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'เขียนอีเมลการตลาด', desc:'ร่างอีเมลแคมเปญ EDM สำหรับลูกค้า', 
    prompt:'จงเขียนอีเมลการตลาดสำหรับแคมเปญ "[ชื่อแคมเปญ]"\n\nรายละเอียด:\nสินค้า/บริการ: [รายละเอียด]\nกลุ่มลูกค้า: [กลุ่ม]\nวัตถุประสงค์: [วัตถุประสงค์]\nจำนวนอีเมลในซีรีย์: [จำนวนอีเมล] ฉบับ\n\nรูปแบบ:\n- Subject line ([จำนวน subject] แบบ): [subject examples]\n- Preheader: [preheader]\n- เนื้อหาอีเมล (HTML แบบง่าย) ([จำนวนคำ] คำ)\n- ปุ่ม CTA: [CTA]\n- ส่วนลด/ข้อเสนอพิเศษ: [ส่วนลด]\n- วันเวลาส่ง: [วันเวลาส่ง]\n\nใช้น้ำเสียง: [น้ำเสียง]', 
    favorite: false, rating: 0, tags: ['email', 'marketing'], variables: [
      { name: "ชื่อแคมเปญ", placeholder: "โปรโมชั่นปีใหม่" },
      { name: "รายละเอียด", placeholder: "สินค้าแฟชั่น" },
      { name: "กลุ่ม", placeholder: "ลูกค้าเก่า" },
      { name: "วัตถุประสงค์", placeholder: "เพิ่มยอดขาย" },
      { name: "จำนวนอีเมล", placeholder: "3" },
      { name: "จำนวน subject", placeholder: "3" },
      { name: "subject examples", placeholder: "ส่วนลด 50% วันนี้ only!" },
      { name: "preheader", placeholder: "อย่าพลาดโอกาส" },
      { name: "จำนวนคำ", placeholder: "150" },
      { name: "CTA", placeholder: "ช็อปเลย" },
      { name: "ส่วนลด", placeholder: "ลด 30%" },
      { name: "วันเวลาส่ง", placeholder: "จันทร์ 10:00" },
      { name: "น้ำเสียง", placeholder: "เป็นกันเอง/หรูหรา/ด่วน" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'วิเคราะห์คู่แข่ง', desc:'วิเคราะห์ SWOT และกลยุทธ์ของคู่แข่ง', 
    prompt:'จงวิเคราะห์คู่แข่งของ "[แบรนด์ของเรา]" ในตลาด "[ตลาด]"\n\nคู่แข่งหลัก [จำนวนคู่แข่ง] ราย:\n1. [ชื่อคู่แข่ง 1]\n2. [ชื่อคู่แข่ง 2]\n3. [ชื่อคู่แข่ง 3]\n\nให้วิเคราะห์:\n- SWOT แต่ละราย ([จำนวน SWOT] ข้อ)\n- ราคา/ช่องทางขาย: [ราคา/ช่องทาง]\n- จุดเด่น/จุดอ่อนเมื่อเทียบกับเรา: [จุดเด่น/จุดอ่อน]\n- กลยุทธ์ที่เรา adapt ได้ ([จำนวนกลยุทธ์] กลยุทธ์)\n- ส่วนแบ่งการตลาด: [ส่วนแบ่งการตลาด]\n\nสรุปเป็นตาราง ([จำนวนตาราง] ตาราง) และข้อเสนอแนะ ([จำนวนข้อเสนอแนะ] ข้อ)', 
    favorite: false, rating: 0, tags: ['competitor', 'analysis'], variables: [
      { name: "แบรนด์ของเรา", placeholder: "แบรนด์ของคุณ" },
      { name: "ตลาด", placeholder: "ตลาดเครื่องสำอาง" },
      { name: "จำนวนคู่แข่ง", placeholder: "3" },
      { name: "ชื่อคู่แข่ง 1", placeholder: "Brand A" },
      { name: "ชื่อคู่แข่ง 2", placeholder: "Brand B" },
      { name: "ชื่อคู่แข่ง 3", placeholder: "Brand C" },
      { name: "จำนวน SWOT", placeholder: "4" },
      { name: "ราคา/ช่องทาง", placeholder: "ราคาสูง, ออนไลน์" },
      { name: "จุดเด่น/จุดอ่อน", placeholder: "แบรนด์แข็งแกร่ง, ราคาสูง" },
      { name: "จำนวนกลยุทธ์", placeholder: "3" },
      { name: "ส่วนแบ่งการตลาด", placeholder: "30%" },
      { name: "จำนวนตาราง", placeholder: "2" },
      { name: "จำนวนข้อเสนอแนะ", placeholder: "3" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'สร้างแบบสอบถามลูกค้า', desc:'ออกแบบแบบสอบถามเพื่อเก็บข้อมูลลูกค้า', 
    prompt:'จงสร้างแบบสอบถามลูกค้าสำหรับธุรกิจ "[ธุรกิจ]"\n\nรายละเอียด:\nวัตถุประสงค์: [วัตถุประสงค์]\nจำนวนข้อ: [จำนวนข้อ] ข้อ\nกลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\nระยะเวลาทำแบบสอบถาม: [ระยะเวลา] นาที\n\nรูปแบบ:\n- คำถามปลายปิด (rating scale) ([จำนวนปลายปิด] ข้อ)\n- คำถามปลายเปิด ([จำนวนปลายเปิด] ข้อ)\n- Demographic ([จำนวน demographic] ข้อ)\n- ข้อเสนอแนะ: [ข้อเสนอแนะ]\n- รางวัลสำหรับตอบ: [รางวัล]\n\nให้เขียนทั้งคำถาม และตัวเลือกตอบ ([จำนวนคำถามทั้งหมด] คำถาม)', 
    favorite: false, rating: 0, tags: ['survey', 'customer'], variables: [
      { name: "ธุรกิจ", placeholder: "ร้านกาแฟ/ร้านเสื้อผ้า" },
      { name: "วัตถุประสงค์", placeholder: "วัดความพึงพอใจ/วิจัยตลาด" },
      { name: "จำนวนข้อ", placeholder: "10" },
      { name: "กลุ่มเป้าหมาย", placeholder: "ลูกค้าปัจจุบัน" },
      { name: "ระยะเวลา", placeholder: "5" },
      { name: "จำนวนปลายปิด", placeholder: "5" },
      { name: "จำนวนปลายเปิด", placeholder: "3" },
      { name: "จำนวน demographic", placeholder: "2" },
      { name: "ข้อเสนอแนะ", placeholder: "แนะนำเพื่อน" },
      { name: "รางวัล", placeholder: "ส่วนลด 10%" },
      { name: "จำนวนคำถามทั้งหมด", placeholder: "10" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'Advertising Copy', desc:'เขียนข้อความโฆษณาสำหรับ Facebook/Google Ads', 
    prompt:'จงเขียน Advertising Copy สำหรับแพลตฟอร์ม "[แพลตฟอร์ม]" สินค้า "[สินค้า]"\n\nรายละเอียด:\nกลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\nงบประมาณ: [งบประมาณ] (ต่อวัน)\nระยะเวลาโฆษณา: [ระยะเวลา]\n\nให้สร้าง:\n- Headline ([จำนวน headline] แบบ): [headline examples]\n- Primary text ([จำนวน primary text] แบบ): [primary text examples]\n- Description (ถ้ามี): [description]\n- Call to Action ([จำนวน CTA] แบบ): [CTA examples]\n- A/B testing idea ([จำนวน A/B] ไอเดีย): [A/B ideas]\n- หลักการ copywriting: [หลักการ] (AIDA, PAS)\n\nใช้ภาษา: [ภาษา]', 
    favorite: false, rating: 0, tags: ['advertising', 'copywriting'], variables: [
      { name: "แพลตฟอร์ม", placeholder: "Facebook/Google" },
      { name: "สินค้า", placeholder: "อุปกรณ์ออกกำลังกาย" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น 20-30 ปี" },
      { name: "งบประมาณ", placeholder: "500" },
      { name: "ระยะเวลา", placeholder: "7 วัน" },
      { name: "จำนวน headline", placeholder: "5" },
      { name: "headline examples", placeholder: "ฟิตเนสที่บ้าน" },
      { name: "จำนวน primary text", placeholder: "2" },
      { name: "primary text examples", placeholder: "ออกกำลังกายง่ายๆ" },
      { name: "description", placeholder: "อุปกรณ์คุณภาพสูง" },
      { name: "จำนวน CTA", placeholder: "3" },
      { name: "CTA examples", placeholder: "ช็อปเลย" },
      { name: "จำนวน A/B", placeholder: "2" },
      { name: "A/B ideas", placeholder: "ทดสอบรูปภาพ" },
      { name: "หลักการ", placeholder: "AIDA" },
      { name: "ภาษา", placeholder: "ไทย/อังกฤษ" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'ไอเดียโปรโมชั่น', desc:'คิดโปรโมชั่นดึงดูดลูกค้า สำหรับร้านค้า', 
    prompt:'จงเสนอไอเดียโปรโมชั่นสำหรับร้าน "[ประเภทร้าน]" ช่วง "[ช่วงเวลา]"\n\nรายละเอียด:\nผลิตภัณฑ์เด่น: [สินค้า]\nกลุ่มลูกค้า: [กลุ่ม]\nงบ: [งบ]\nจำนวนโปรโมชั่น: [จำนวนโปรโมชั่น] โปรโมชั่น\n\nให้ออกแบบ [จำนวนโปรโมชั่น] โปรโมชั่น:\n- ชื่อโปร: [ชื่อโปร]\n- กลไก (ซื้อ 1 แถม 1, ลด %, สะสมแต้ม): [กลไก]\n- ระยะเวลา: [ระยะเวลา]\n- ช่องทางประชาสัมพันธ์ ([จำนวนช่องทาง] ช่องทาง): [ช่องทาง]\n- ข้อดี/ข้อเสีย: [ข้อดี/ข้อเสีย]\n- งบประมาณแต่ละโปร: [งบแต่ละโปร]\n\nให้ครบถ้วนทุกข้อ ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['promotion', 'ideas'], variables: [
      { name: "ประเภทร้าน", placeholder: "ร้านกาแฟ/ร้านอาหาร" },
      { name: "ช่วงเวลา", placeholder: "เทศกาลปีใหม่/ฤดูร้อน" },
      { name: "สินค้า", placeholder: "กาแฟเย็น" },
      { name: "กลุ่ม", placeholder: "วัยรุ่น" },
      { name: "งบ", placeholder: "10000" },
      { name: "จำนวนโปรโมชั่น", placeholder: "5" },
      { name: "ชื่อโปร", placeholder: "ซื้อ 1 แถม 1" },
      { name: "กลไก", placeholder: "ซื้อ 1 แถม 1" },
      { name: "ระยะเวลา", placeholder: "1 เดือน" },
      { name: "จำนวนช่องทาง", placeholder: "3" },
      { name: "ช่องทาง", placeholder: "Facebook, LINE" },
      { name: "ข้อดี/ข้อเสีย", placeholder: "ดูดลูกค้าใหม่, กำไรลด" },
      { name: "งบแต่ละโปร", placeholder: "2000" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'Brand Storytelling', desc:'เล่าเรื่องแบรนด์ให้น่าสนใจ', 
    prompt:'จงเขียน Brand Story สำหรับแบรนด์ "[ชื่อแบรนด์]" ที่ขาย "[สินค้า/บริการ]"\n\nรายละเอียด:\nประวัติผู้ก่อตั้ง: [ประวัติผู้ก่อตั้ง] (สั้น)\nแรงบันดาลใจ: [แรงบันดาลใจ] (เหตุผลที่ก่อตั้ง)\nคุณค่าหลัก: [คุณค่าหลัก] (3 ข้อ)\nกลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\nปีที่ก่อตั้ง: [ปีที่ก่อตั้ง]\n\nรูปแบบ:\n1. เรื่องเล่าที่มาของแบรนด์ ([จำนวนประโยค] ประโยค)\n2. ปัญหาที่แบรนด์แก้: [ปัญหา]\n3. ความแตกต่างจากตลาด ([จำนวนข้อ] ข้อ): [ความแตกต่าง]\n4. วิสัยทัศน์: [วิสัยทัศน์]\n5. สโลแกน: [สโลแกน]\n\nความยาว [ความยาว] คำ', 
    favorite: false, rating: 0, tags: ['brand', 'storytelling'], variables: [
      { name: "ชื่อแบรนด์", placeholder: "แบรนด์ของคุณ" },
      { name: "สินค้า/บริการ", placeholder: "สินค้าที่ขาย" },
      { name: "ประวัติผู้ก่อตั้ง", placeholder: "อดีตพนักงานออฟฟิศ" },
      { name: "แรงบันดาลใจ", placeholder: "อยากมีเวลากับครอบครัว" },
      { name: "คุณค่าหลัก", placeholder: "ซื่อสัตย์, คุณภาพ, นวัตกรรม" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยทำงาน 30-45 ปี" },
      { name: "ปีที่ก่อตั้ง", placeholder: "2020" },
      { name: "จำนวนประโยค", placeholder: "3" },
      { name: "ปัญหา", placeholder: "สินค้าราคาแพง" },
      { name: "จำนวนข้อ", placeholder: "3" },
      { name: "ความแตกต่าง", placeholder: "ราคาย่อมเยาว์" },
      { name: "วิสัยทัศน์", placeholder: "เป็นแบรนด์ระดับประเทศ" },
      { name: "สโลแกน", placeholder: "คุณภาพที่คุณเอื้อมถึง" },
      { name: "ความยาว", placeholder: "300-400" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'SEO Off-page Strategy', desc:'วางแผน Off-page SEO เพื่อเพิ่ม authority', 
    prompt:'จงวางแผน Off-page SEO ให้เว็บ "[URL เว็บ]" ในธุรกิจ "[ประเภทธุรกิจ]"\n\nรายละเอียด:\nปัจจุบัน: [DA/PA] (ถ้ามี)\nเป้าหมาย: [เป้าหมาย]\nระยะเวลา: [ระยะเวลา]\nจำนวน backlinks เป้าหมาย: [จำนวน backlinks] ลิงค์\n\nกลยุทธ์:\n- Link building ([จำนวน link building] วิธี): [link building methods] (guest post, directory, broken link)\n- Social signals ([จำนวน social signals] ช่องทาง): [social signals]\n- Influencer outreach ([จำนวน influencer] คน): [influencer outreach]\n- Content promotion ([จำนวน content] ชิ้น): [content promotion]\n- PR & Branding: [PR & Branding]\n\nให้ทำ action plan [จำนวนเดือน] เดือน ([จำนวนขั้นตอน] ขั้นตอน)', 
    favorite: false, rating: 0, tags: ['seo', 'off-page'], variables: [
      { name: "URL เว็บ", placeholder: "https://example.com" },
      { name: "ประเภทธุรกิจ", placeholder: "E-commerce/บริการ" },
      { name: "DA/PA", placeholder: "DA 20, PA 30" },
      { name: "เป้าหมาย", placeholder: "เพิ่ม DA เป็น 40" },
      { name: "ระยะเวลา", placeholder: "3 เดือน" },
      { name: "จำนวน backlinks", placeholder: "50" },
      { name: "จำนวน link building", placeholder: "3" },
      { name: "link building methods", placeholder: "guest post, directory" },
      { name: "จำนวน social signals", placeholder: "3" },
      { name: "social signals", placeholder: "Facebook, Twitter" },
      { name: "จำนวน influencer", placeholder: "5" },
      { name: "influencer outreach", placeholder: "ส่งสินค้าให้รีวิว" },
      { name: "จำนวน content", placeholder: "10" },
      { name: "content promotion", placeholder: "แจก e-book" },
      { name: "PR & Branding", placeholder: "ออกข่าวสาร" },
      { name: "จำนวนเดือน", placeholder: "1" },
      { name: "จำนวนขั้นตอน", placeholder: "4" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'สร้าง Lead Magnet', desc:'ออกแบบของแจกเพื่อเก็บอีเมลลูกค้า', 
    prompt:'จงออกแบบ Lead Magnet สำหรับธุรกิจ "[ธุรกิจ]" กลุ่มเป้าหมาย "[กลุ่ม]"\n\nรายละเอียด:\nวัตถุประสงค์: [วัตถุประสงค์] (เก็บอีเมล)\nจำนวน Lead Magnet: [จำนวน lead magnet] ไอเดีย\nรูปแบบ: [รูปแบบ] (ebook, checklist, webinar, template)\n\nให้เสนอ [จำนวน lead magnet] ไอเดีย:\n1. ชื่อ Lead Magnet: [ชื่อ lead magnet]\n2. เนื้อหาคร่าวๆ: [เนื้อหา]\n3. Landing page headline: [headline]\n4. วิธีการโปรโมท ([จำนวนวิธี] วิธี): [วิธีโปรโมท]\n5. ระยะเวลาส่ง: [ระยะเวลา]\n\nอธิบายว่าแต่ละอันเหมาะกับกลุ่มเป้าหมายอย่างไร ([จำนวนคำอธิบาย] คำ)', 
    favorite: false, rating: 0, tags: ['lead-magnet', 'email-marketing'], variables: [
      { name: "ธุรกิจ", placeholder: "ร้านกาแฟ/ออนไลน์" },
      { name: "กลุ่ม", placeholder: "วัยรุ่น/วัยทำงาน" },
      { name: "วัตถุประสงค์", placeholder: "เก็บอีเมล 1000 ราย" },
      { name: "จำนวน lead magnet", placeholder: "3" },
      { name: "รูปแบบ", placeholder: "e-book, checklist" },
      { name: "ชื่อ lead magnet", placeholder: "10 วิธีชงกาแฟ" },
      { name: "เนื้อหา", placeholder: "วิธีการชง 10 แบบ" },
      { name: "headline", placeholder: "ดาวน์โหลดฟรี!" },
      { name: "จำนวนวิธี", placeholder: "3" },
      { name: "วิธีโปรโมท", placeholder: "Facebook Ads" },
      { name: "ระยะเวลา", placeholder: "7 วัน" },
      { name: "จำนวนคำอธิบาย", placeholder: "100" }
    ]
  },

  // ===== TERMUX (10) - เดิม + เพิ่มตัวแปร =====
  { 
    cat:'termux', tag:'termux', title:'Termux Automation', desc:'เขียนสคริปต์อัตโนมัติสำหรับ Termux', 
    prompt:'จงเขียน Bash script สำหรับ Termux ที่ทำงานดังนี้:\n[งานที่ต้องการ]\n\nรายละเอียด:\n- ชื่อสคริปต์: [ชื่อสคริปต์]\n- ผู้ใช้: [ผู้ใช้] (whoami)\n- วันที่/เวลา: [วันที่เวลา]\n\nข้อกำหนด:\n- ใช้เฉพาะคำสั่งที่มีใน Termux โดยไม่ต้องติดตั้งแพ็กเกจเพิ่มเติม (ยกเว้นระบุ): [คำสั่งเพิ่มเติม]\n- มีการตรวจสอบข้อผิดพลาด ([จำนวนการตรวจสอบ] ครั้ง)\n- มีการแจ้งเตือนเมื่อทำงานเสร็จ ([วิธีแจ้งเตือน]): termux-notification\n- สามารถรันซ้ำได้โดยไม่เกิดปัญหา ([จำนวนรอบ] รอบ)\n- บันทึก log ไฟล์: [log file]\n\nให้ตอบเป็นโค้ด Bash ([จำนวนบรรทัด] บรรทัด) พร้อมคำอธิบายแต่ละส่วน ([จำนวนคำอธิบาย] คำ)', 
    favorite: false, rating: 0, tags: ['termux', 'automation'], variables: [
      { name: "งานที่ต้องการ", placeholder: "backup ไฟล์/ส่งข้อความ" },
      { name: "ชื่อสคริปต์", placeholder: "backup.sh" },
      { name: "ผู้ใช้", placeholder: "user" },
      { name: "วันที่เวลา", placeholder: "$(date)" },
      { name: "คำสั่งเพิ่มเติม", placeholder: "rsync" },
      { name: "จำนวนการตรวจสอบ", placeholder: "3" },
      { name: "วิธีแจ้งเตือน", placeholder: "termux-notification" },
      { name: "จำนวนรอบ", placeholder: "5" },
      { name: "log file", placeholder: "/sdcard/backup.log" },
      { name: "จำนวนบรรทัด", placeholder: "50" },
      { name: "จำนวนคำอธิบาย", placeholder: "100" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'Termux Hacking Tools', desc:'สคริปต์ติดตั้งเครื่องมือ security testing บน Termux', 
    prompt:'จงเขียนสคริปต์ติดตั้งเครื่องมือสำหรับ Security Testing บน Termux โดยมีรายละเอียด:\n\nเครื่องมือที่ต้องการ ([จำนวนเครื่องมือ] เครื่องมือ):\n- [เครื่องมือ 1]\n- [เครื่องมือ 2]\n- [เครื่องมือ 3]\n- [เครื่องมือ 4] (ถ้าเป็นไปได้)\n- [เครื่องมือ 5]\n\nให้สคริปต์:\n1. อัปเดตแพ็กเกจ ([จำนวน repositories] repositories)\n2. ติดตั้ง dependencies ที่จำเป็น ([จำนวน dependencies] packages): [dependencies]\n3. ติดตั้งเครื่องมือทีละตัว ([จำนวนขั้นตอน] ขั้น)\n4. ตรวจสอบว่าติดตั้งสำเร็จหรือไม่ ([วิธีตรวจสอบ])\n5. แสดงวิธีใช้งานเบื้องต้น ([จำนวนคำสั่ง] คำสั่ง): [คำสั่ง]\n6. ตั้งค่าสภาพแวดล้อม: [สภาพแวดล้อม]\n\nคำเตือน: ใช้เพื่อการศึกษาหรือระบบที่ได้รับอนุญาตเท่านั้น ([จำนวนคำเตือน] คำ)', 
    favorite: false, rating: 0, tags: ['termux', 'security', 'tools'], variables: [
      { name: "จำนวนเครื่องมือ", placeholder: "5" },
      { name: "เครื่องมือ 1", placeholder: "Nmap" },
      { name: "เครื่องมือ 2", placeholder: "Hydra" },
      { name: "เครื่องมือ 3", placeholder: "SQLmap" },
      { name: "เครื่องมือ 4", placeholder: "Metasploit" },
      { name: "เครื่องมือ 5", placeholder: "Nikto" },
      { name: "จำนวน repositories", placeholder: "2" },
      { name: "จำนวน dependencies", placeholder: "3" },
      { name: "dependencies", placeholder: "git, wget, curl" },
      { name: "จำนวนขั้นตอน", placeholder: "5" },
      { name: "วิธีตรวจสอบ", placeholder: "nmap --version" },
      { name: "จำนวนคำสั่ง", placeholder: "3" },
      { name: "คำสั่ง", placeholder: "nmap -sV target.com" },
      { name: "สภาพแวดล้อม", placeholder: "export PATH=$PATH:~/bin" },
      { name: "จำนวนคำเตือน", placeholder: "2" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'ติดตั้ง Web Server', desc:'สคริปต์ติดตั้ง Apache/Nginx บน Termux', 
    prompt:'จงเขียนสคริปต์ติดตั้ง Web Server บน Termux (เลือก [Apache หรือ Nginx])\n\nรายละเอียด:\n- ชื่อสคริปต์: [ชื่อสคริปต์]\n- พอร์ต: [พอร์ต] (80, 8080)\n- ไดเรกทอรีเว็บ: [ไดเรกทอรี]\n\nให้ทำ:\n1. อัปเดต repo ([จำนวน repositories] repositories)\n2. ติดตั้ง package ([จำนวน packages] packages): [packages]\n3. สร้าง virtual host ([จำนวน virtual hosts] hosts)\n4. ตั้งค่า permissions ([สิทธิ์])\n5. สร้างหน้า index.html ทดสอบ ([เนื้อหา])\n6. ตรวจสอบว่า server ทำงาน ([วิธีตรวจสอบ])\n7. แสดงวิธีเข้าใช้งานจาก browser ([URL])\n8. ตั้งค่า auto start: [auto start]\n\nให้ตอบเป็นโค้ด Bash ([จำนวนบรรทัด] บรรทัด)', 
    favorite: false, rating: 0, tags: ['termux', 'web-server'], variables: [
      { name: "Apache หรือ Nginx", placeholder: "Apache/Nginx" },
      { name: "ชื่อสคริปต์", placeholder: "install-web.sh" },
      { name: "พอร์ต", placeholder: "8080" },
      { name: "ไดเรกทอรี", placeholder: "/data/data/com.termux/files/home/www" },
      { name: "จำนวน repositories", placeholder: "1" },
      { name: "จำนวน packages", placeholder: "2" },
      { name: "packages", placeholder: "apache2, curl" },
      { name: "จำนวน virtual hosts", placeholder: "1" },
      { name: "สิทธิ์", placeholder: "chmod 755" },
      { name: "เนื้อหา", placeholder: "Welcome to Termux Web" },
      { name: "วิธีตรวจสอบ", placeholder: "curl localhost:8080" },
      { name: "URL", placeholder: "http://localhost:8080" },
      { name: "auto start", placeholder: "termux-service" },
      { name: "จำนวนบรรทัด", placeholder: "60" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'สร้าง Telegram Bot ด้วย Python', desc:'ติดตั้ง python-telegram-bot และรันบอทเบื้องต้น', 
    prompt:'จงเขียนสคริปต์ Termux เพื่อ:\n\nรายละเอียด:\n- ชื่อบอท: [ชื่อบอท]\n- Token: [token] (เก็บใน env)\n- ภาษาที่ใช้: [ภาษา] (Python version)\n\nให้ทำ:\n1. ติดตั้ง python ([เวอร์ชัน]): [คำสั่งติดตั้ง]\n2. ติดตั้ง python-telegram-bot ([เวอร์ชัน] pip): [pip install]\n3. เขียนโค้ดบอทที่ตอบกลับข้อความ "[ข้อความตอบกลับ]" และ "/help" ([จำนวนบรรทัด] บรรทัด)\n4. ให้ใส่ token ในตัวแปร environment ([ชื่อตัวแปร]): [คำสั่ง export]\n5. วิธีรันบอทใน background ([วิธีรัน]): [คำสั่งรัน]\n6. ตรวจสอบสถานะ: [วิธีตรวจสอบ]\n\nอธิบายการขอ token จาก BotFather ([จำนวนขั้นตอน] ขั้นตอน)', 
    favorite: false, rating: 0, tags: ['termux', 'telegram', 'bot'], variables: [
      { name: "ชื่อบอท", placeholder: "MyBot" },
      { name: "token", placeholder: "123456:ABC-DEF1234ghIkl" },
      { name: "ภาษา", placeholder: "Python 3.10" },
      { name: "เวอร์ชัน", placeholder: "3.10" },
      { name: "คำสั่งติดตั้ง", placeholder: "pkg install python" },
      { name: "pip install", placeholder: "pip install python-telegram-bot" },
      { name: "ข้อความตอบกลับ", placeholder: "สวัสดี!" },
      { name: "จำนวนบรรทัด", placeholder: "30" },
      { name: "ชื่อตัวแปร", placeholder: "TELEGRAM_BOT_TOKEN" },
      { name: "คำสั่ง export", placeholder: "export TELEGRAM_BOT_TOKEN=..." },
      { name: "วิธีรัน", placeholder: "nohup python bot.py &" },
      { name: "วิธีตรวจสอบ", placeholder: "ps aux | grep bot.py" },
      { name: "จำนวนขั้นตอน", placeholder: "3" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'สำรองข้อมูลอัตโนมัติ', desc:'สคริปต์ backup โฟลเดอร์ไปยังที่เก็บข้อมูลอื่น', 
    prompt:'จงเขียนสคริปต์สำรองข้อมูลใน Termux ให้:\n\nรายละเอียด:\n- ชื่อสคริปต์: [ชื่อสคริปต์]\n- โฟลเดอร์ต้นทาง: [โฟลเดอร์ต้นทาง]\n- ปลายทาง: [ปลายทาง] (/sdcard/backup)\n- ชื่อไฟล์: [ชื่อไฟล์] (ตั้งชื่อไฟล์ด้วยวันที่)\n- รูปแบบไฟล์: [รูปแบบไฟล์] (.tar.gz/.zip)\n\nให้ทำ:\n- บีบอัดเป็น [รูปแบบไฟล์] ([จำนวนไฟล์] ไฟล์)\n- ลบไฟล์เก่ากว่า [จำนวนวัน] วัน ([จำนวนลบ] ไฟล์)\n- แจ้งเตือนเมื่อเสร็จ ([วิธีแจ้งเตือน]): termux-notification\n- ตั้งเวลา cron: [ตั้งเวลา] (ทุกวัน 02:00)\n\nใช้คำสั่งที่มีอยู่แล้ว ([จำนวนคำสั่ง] คำสั่ง)', 
    favorite: false, rating: 0, tags: ['termux', 'backup'], variables: [
      { name: "ชื่อสคริปต์", placeholder: "backup.sh" },
      { name: "โฟลเดอร์ต้นทาง", placeholder: "/data/data/com.termux/files/home" },
      { name: "ปลายทาง", placeholder: "/sdcard/backup" },
      { name: "ชื่อไฟล์", placeholder: "backup_$(date +%Y%m%d).tar.gz" },
      { name: "รูปแบบไฟล์", placeholder: ".tar.gz" },
      { name: "จำนวนไฟล์", placeholder: "1" },
      { name: "จำนวนวัน", placeholder: "7" },
      { name: "จำนวนลบ", placeholder: "5" },
      { name: "วิธีแจ้งเตือน", placeholder: "termux-notification" },
      { name: "ตั้งเวลา", placeholder: "0 2 * * *" },
      { name: "จำนวนคำสั่ง", placeholder: "10" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'ใช้งาน GitHub CLI', desc:'ติดตั้งและใช้งาน gh ใน Termux', 
    prompt:'จงเขียนสคริปต์ติดตั้ง GitHub CLI (gh) บน Termux และ:\n\nรายละเอียด:\n- ชื่อ repo: [ชื่อ repo]\n- ประเภท repo: [ประเภท repo] (public/private)\n- ไฟล์ README: [ไฟล์ README]\n\nให้ทำ:\n1. ตรวจสอบการติดตั้ง ([วิธีตรวจสอบ])\n2. แนะนำวิธี login ([วิธี login])\n3. สร้าง repo ใหม่ ([จำนวน repo] repo)\n4. โคลน repo ที่มีอยู่ ([จำนวน clone] repo): [repo clone]\n5. push โค้ด ([จำนวน push] ครั้ง)\n6. สร้าง issue ([จำนวน issue] issues): [issue content]\n7. ตั้งค่า git config: [git config]\n\nให้สคริปต์ทำงานอัตโนมัติทีละขั้น ([จำนวนขั้นตอน] ขั้น)', 
    favorite: false, rating: 0, tags: ['termux', 'github', 'cli'], variables: [
      { name: "ชื่อ repo", placeholder: "my-project" },
      { name: "ประเภท repo", placeholder: "public" },
      { name: "ไฟล์ README", placeholder: "README.md" },
      { name: "วิธีตรวจสอบ", placeholder: "gh --version" },
      { name: "วิธี login", placeholder: "gh auth login" },
      { name: "จำนวน repo", placeholder: "1" },
      { name: "จำนวน clone", placeholder: "1" },
      { name: "repo clone", placeholder: "https://github.com/user/repo" },
      { name: "จำนวน push", placeholder: "1" },
      { name: "จำนวน issue", placeholder: "2" },
      { name: "issue content", placeholder: "Bug fix needed" },
      { name: "git config", placeholder: "git config --global user.name" },
      { name: "จำนวนขั้นตอน", placeholder: "6" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'แปลงไฟล์มีเดีย', desc:'ใช้ ffmpeg แปลงไฟล์เสียง/วิดีโอ', 
    prompt:'จงเขียนสคริปต์ Termux สำหรับแปลงไฟล์มีเดียด้วย ffmpeg\n\nรายละเอียด:\n- ชื่อสคริปต์: [ชื่อสคริปต์]\n- ไฟล์ input: [input file]\n- format output: [output format] (.mp4/.mp3)\n\nติดตั้ง ffmpeg ก่อน ([คำสั่งติดตั้ง])\n\nให้ทำ:\n1. เลือกไฟล์ input ([จำนวนไฟล์] ไฟล์)\n2. เลือก format output ([format 1], [format 2])\n3. ปรับ bitrate/resolution ([bitrate]/[resolution])\n4. แสดง progress ([วิธีแสดง])\n5. ตรวจสอบไฟล์ output ([วิธีตรวจสอบ])\n6. บันทึก log: [log file]\n\nเขียนแบบ interactive (ถามผู้ใช้) ([จำนวนคำถาม] คำถาม)', 
    favorite: false, rating: 0, tags: ['termux', 'ffmpeg', 'media'], variables: [
      { name: "ชื่อสคริปต์", placeholder: "convert.sh" },
      { name: "input file", placeholder: "video.mp4" },
      { name: "output format", placeholder: ".mp3" },
      { name: "คำสั่งติดตั้ง", placeholder: "pkg install ffmpeg" },
      { name: "จำนวนไฟล์", placeholder: "1" },
      { name: "format 1", placeholder: "mp4" },
      { name: "format 2", placeholder: "avi" },
      { name: "bitrate", placeholder: "128k" },
      { name: "resolution", placeholder: "720p" },
      { name: "วิธีแสดง", placeholder: "ffmpeg -progress" },
      { name: "วิธีตรวจสอบ", placeholder: "ffprobe output.mp3" },
      { name: "log file", placeholder: "convert.log" },
      { name: "จำนวนคำถาม", placeholder: "3" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'ตั้งค่า SSH Server', desc:'สคริปต์เปิด SSH server บน Termux', 
    prompt:'จงเขียนสคริปต์สำหรับ Termux เพื่อ:\n\nรายละเอียด:\n- ชื่อสคริปต์: [ชื่อสคริปต์]\n- พอร์ต SSH: [พอร์ต] (default 8022)\n- ผู้ใช้: [ผู้ใช้]\n\nให้ทำ:\n- ติดตั้ง openssh ([คำสั่งติดตั้ง])\n- ตั้งรหัสผ่าน ([วิธีตั้งรหัส]): passwd\n- เปิด sshd ([คำสั่งเปิด])\n- แสดง IP และพอร์ต ([จำนวนวิธีแสดง] วิธี): [คำสั่งแสดง]\n- คำแนะนำการเชื่อมต่อจากเครื่องอื่น ([จำนวนคำแนะนำ] ข้อ): [คำแนะนำ]\n- วิธีปิดเซิร์ฟเวอร์ ([คำสั่งปิด])\n- ใส่ความปลอดภัยพื้นฐาน ([จำนวนความปลอดภัย] ข้อ): เปลี่ยนพอร์ต, ปิด root login\n\nเขียนเป็นโค้ด Bash ([จำนวนบรรทัด] บรรทัด)', 
    favorite: false, rating: 0, tags: ['termux', 'ssh', 'server'], variables: [
      { name: "ชื่อสคริปต์", placeholder: "setup-ssh.sh" },
      { name: "พอร์ต", placeholder: "8022" },
      { name: "ผู้ใช้", placeholder: "termux" },
      { name: "คำสั่งติดตั้ง", placeholder: "pkg install openssh" },
      { name: "วิธีตั้งรหัส", placeholder: "passwd" },
      { name: "คำสั่งเปิด", placeholder: "sshd" },
      { name: "จำนวนวิธีแสดง", placeholder: "2" },
      { name: "คำสั่งแสดง", placeholder: "ifconfig" },
      { name: "จำนวนคำแนะนำ", placeholder: "3" },
      { name: "คำแนะนำ", placeholder: "ssh user@ip -p 8022" },
      { name: "คำสั่งปิด", placeholder: "pkill sshd" },
      { name: "จำนวนความปลอดภัย", placeholder: "2" },
      { name: "จำนวนบรรทัด", placeholder: "40" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'แจ้งเตือนแบตเตอรี่', desc:'สคริปต์ตรวจสอบแบตเตอรี่และแจ้งเตือน', 
    prompt:'จงเขียนสคริปต์ Termux ที่:\n\nรายละเอียด:\n- ชื่อสคริปต์: [ชื่อสคริปต์]\n- ระดับแบตเตอรี่ต่ำสุด: [ระดับต่ำสุด]% (default 20%)\n- ระดับแบตเตอรี่สูงสุด: [ระดับสูงสุด]% (default 100%)\n- ช่วงเวลาตรวจสอบ: [ช่วงเวลา] นาที\n\nให้ทำ:\n- อ่านระดับแบตเตอรี่ทุก [ช่วงเวลา] นาที ([จำนวนรอบ] รอบ)\n- หากต่ำกว่า [ระดับต่ำสุด]% ส่ง notification ([notification ตำ]): termux-notification\n- หากชาร์จเต็ม [ระดับสูงสุด]% ก็แจ้งเตือน ([notification สูง])\n- ทำงานเป็น background service ([วิธีทำงาน])\n- บันทึก log: [log file]\n\nใช้คำสั่ง termux-api ([จำนวนคำสั่ง] คำสั่ง)', 
    favorite: false, rating: 0, tags: ['termux', 'battery', 'notification'], variables: [
      { name: "ชื่อสคริปต์", placeholder: "battery-monitor.sh" },
      { name: "ระดับต่ำสุด", placeholder: "20" },
      { name: "ระดับสูงสุด", placeholder: "100" },
      { name: "ช่วงเวลา", placeholder: "5" },
      { name: "จำนวนรอบ", placeholder: "10" },
      { name: "notification ตำ", placeholder: "แบตต่ำกว่า 20%" },
      { name: "notification สูง", placeholder: "ชาร์จเต็มแล้ว" },
      { name: "วิธีทำงาน", placeholder: "while true; do ...; sleep 300; done &" },
      { name: "log file", placeholder: "/sdcard/battery.log" },
      { name: "จำนวนคำสั่ง", placeholder: "5" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'อ่านค่าเซนเซอร์', desc:'สคริปต์อ่านค่าเซนเซอร์ต่างๆ บน Termux', 
    prompt:'จงเขียนสคริปต์ Termux ที่อ่านค่าเซนเซอร์ "[เซนเซอร์]" (เช่น แสง, ความชื้น, อุณหภูมิ)\n\nรายละเอียด:\n- จำนวนเซนเซอร์: [จำนวนเซนเซอร์] ตัว\n- ช่วงเวลาอ่าน: [ช่วงเวลา] วินาที\n- วิธีแสดงผล: [วิธีแสดง] (terminal/notification)\n- ไฟล์บันทึก: [ไฟล์บันทึก] (ถ้าต้องการ)\n- เกณฑ์แจ้งเตือน: [เกณฑ์] (เมื่อค่าเกิน)\n- จำนวนการตรวจสอบ: [จำนวนการตรวจสอบ] ครั้ง\n\nให้ทำ:\n1. ตรวจสอบเซนเซอร์ที่มี ([จำนวนตรวจสอบ] ครั้ง)\n2. อ่านค่าแบบ real-time ทุก [ช่วงเวลา] วินาที\n3. แสดงผลทาง [วิธีแสดง]\n4. บันทึกลงไฟล์ [ไฟล์บันทึก] (ถ้าต้องการ)\n5. แจ้งเตือนเมื่อค่าเกินเกณฑ์ [เกณฑ์]\n6. ตั้งค่า auto start: [auto start]\n\nใช้คำสั่ง termux-sensor ([จำนวนคำสั่ง] คำสั่ง)', 
    favorite: false, rating: 0, tags: ['termux', 'sensor', 'monitoring'], variables: [
      { name: "เซนเซอร์", placeholder: "แสง/ความชื้น/อุณหภูมิ" },
      { name: "จำนวนเซนเซอร์", placeholder: "3" },
      { name: "ช่วงเวลา", placeholder: "5" },
      { name: "วิธีแสดง", placeholder: "terminal" },
      { name: "ไฟล์บันทึก", placeholder: "/sdcard/sensor.log" },
      { name: "เกณฑ์", placeholder: "แสง > 1000" },
      { name: "จำนวนการตรวจสอบ", placeholder: "10" },
      { name: "จำนวนตรวจสอบ", placeholder: "2" },
      { name: "auto start", placeholder: "termux-service" },
      { name: "จำนวนคำสั่ง", placeholder: "3" }
    ]
  },

  // ===== MUSIC (10) - ใหม่ =====
  { 
    cat:'music', tag:'music', title:'Lyric Writer', desc:'เขียนเนื้อเพลงแนวป๊อป/ร็อค', 
    prompt:'จงเขียนเนื้อเพลงแนว "[แนวเพลง]" หัวข้อ "[หัวข้อ]" ความยาวประมาณ "[ความยาว]" ท่อน\n\nรายละเอียด:\nโครงสร้าง: [โครงสร้าง] (Verse, Chorus, Bridge)\nจำนวนท่อน: [จำนวนท่อน] ท่อน\nโทน: [โทน] (เศร้า/สนุก/รัก)\nภาษา: [ภาษา] (ไทย/อังกฤษ)\nจำนวนคำต่อท่อน: [จำนวนคำ] คำ\n\nโครงสร้าง:\n1. Verse 1 ([จำนวนบรรทัด 1] บรรทัด)\n2. Chorus ([จำนวนบรรทัด 2] บรรทัด) (ห้องโปรด)\n3. Verse 2 ([จำนวนบรรทัด 3] บรรทัด)\n4. Chorus\n5. Bridge ([จำนวนบรรทัด 4] บรรทัด)\n6. Chorus สุดท้าย\n\nให้มีสัมผัสและอารมณ์สอดคล้อง ([จำนวนสัมผัส] สัมผัส)', 
    favorite: false, rating: 0, tags: ['lyrics', 'songwriting'], variables: [
      { name: "แนวเพลง", placeholder: "ป๊อป/ร็อค" },
      { name: "หัวข้อ", placeholder: "ความรัก/การเดินทาง" },
      { name: "ความยาว", placeholder: "3 นาที" },
      { name: "โครงสร้าง", placeholder: "Verse-Chorus-Bridge" },
      { name: "จำนวนท่อน", placeholder: "6" },
      { name: "โทน", placeholder: "เศร้า/สนุก/รัก" },
      { name: "ภาษา", placeholder: "ไทย" },
      { name: "จำนวนคำ", placeholder: "50" },
      { name: "จำนวนบรรทัด 1", placeholder: "4" },
      { name: "จำนวนบรรทัด 2", placeholder: "6" },
      { name: "จำนวนบรรทัด 3", placeholder: "4" },
      { name: "จำนวนบรรทัด 4", placeholder: "2" },
      { name: "จำนวนสัมผัส", placeholder: "5" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Suno Prompt', desc:'สร้าง prompt สำหรับ Suno AI', 
    prompt:'จงสร้าง Suno AI prompt สำหรับเพลง "[ชื่อเพลง]" แนว "[แนว]"\n\nรายละเอียด:\n- ดนตรี: [ดนตรี] (ป๊อป, ร็อค, ลูกทุ่ง, แจ๊ส)\n- เครื่องดนตรี: [เครื่องดนตรี] (กีตาร์, กลอง, คีย์บอร์ด)\n- อารมณ์: [อารมณ์] (สนุก, เศร้า, ตื่นเต้น)\n- จังหวะ: [BPM] BPM\n- โครงสร้างเพลง: [โครงสร้าง] (Verse-Chorus-Bridge)\n- ระดับความดัง: [ระดับความดัง] (soft, medium, loud)\n- จำนวนท่อน: [จำนวนท่อน] ท่อน\n\nเขียน prompt ภาษาอังกฤษสำหรับ Suno ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['sun o', 'ai-music'], variables: [
      { name: "ชื่อเพลง", placeholder: "ความรักครั้งสุดท้าย" },
      { name: "แนว", placeholder: "ป๊อป/ร็อค" },
      { name: "ดนตรี", placeholder: "ป๊อป" },
      { name: "เครื่องดนตรี", placeholder: "กีตาร์, กลอง" },
      { name: "อารมณ์", placeholder: "เศร้า" },
      { name: "BPM", placeholder: "120" },
      { name: "โครงสร้าง", placeholder: "Verse-Chorus-Bridge" },
      { name: "ระดับความดัง", placeholder: "medium" },
      { name: "จำนวนท่อน", placeholder: "4" },
      { name: "จำนวนคำ", placeholder: "50" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Music Production Plan', desc:'วางแผนผลิตเพลง', 
    prompt:'จงวางแผนการผลิตเพลง "[ชื่อเพลง]" แนว "[แนว]" สำหรับศิลปิน "[ชื่อศิลปิน]"\n\nรายละเอียด:\n- งบประมาณ: [งบประมาณ] (บาท)\n- ระยะเวลา: [ระยะเวลา] เดือน\n- จำนวนเพลง: [จำนวนเพลง] เพลง\n\nให้เขียนแผน:\n1. Demo ก่อนบ้าน ([จำนวนขั้นตอน 1] ขั้น)\n2. เลือกโปรดิวเซอร์ ([จำนวนโปรดิวเซอร์] คน): [โปรดิวเซอร์]\n3. เลือกสตูดิโอ ([จำนวนสตูดิโอ] แห่ง): [สตูดิโอ]\n4. ตารางเวลา ([จำนวนวัน] วัน)\n5. งบประมาณ ([จำนวนงบ] ส่วน): [งบแต่ละส่วน]\n6. การตลาด: [การตลาด]\n\nครอบคลุมทุกขั้นตอนจนถึง Master ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['music', 'production'], variables: [
      { name: "ชื่อเพลง", placeholder: "เพลงใหม่" },
      { name: "แนว", placeholder: "ป๊อป" },
      { name: "ชื่อศิลปิน", placeholder: "นักร้องใหม่" },
      { name: "งบประมาณ", placeholder: "50000" },
      { name: "ระยะเวลา", placeholder: "3" },
      { name: "จำนวนเพลง", placeholder: "1" },
      { name: "จำนวนขั้นตอน 1", placeholder: "3" },
      { name: "จำนวนโปรดิวเซอร์", placeholder: "2" },
      { name: "โปรดิวเซอร์", placeholder: "โปรดิวเซอร์ A" },
      { name: "จำนวนสตูดิโอ", placeholder: "2" },
      { name: "สตูดิโอ", placeholder: "สตูดิโอเสียงเพลง" },
      { name: "จำนวนวัน", placeholder: "30" },
      { name: "จำนวนงบ", placeholder: "3" },
      { name: "งบแต่ละส่วน", placeholder: "สตูดิโอ 30000" },
      { name: "การตลาด", placeholder: "โปรโมท Social Media" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Chord Progression', desc:'สร้างชุดคอร์ดเพลง', 
    prompt:'จงสร้างคอร์ดเพลงแนว "[แนว]" กุญแจเสียง "[กุญแจเสียง]" สำหรับอารมณ์ "[อารมณ์]"\n\nรายละเอียด:\nโครงสร้าง: [โครงสร้าง] (ระบุท่อน)\nจังหวะ: [จังหวะ] BPM\nจำนวนท่อน: [จำนวนท่อน] ท่อน\n\nให้ระบุ:\n- คอร์ดหลัก (I, IV, V, vi): [คอร์ดหลัก]\n- เรียงลำดับคอร์ด (มีความหมาย) ([จำนวนคอร์ด] คอร์ด): [ลำดับคอร์ด]\n- ชื่อคอร์ดจริง (C, G, Am): [ชื่อคอร์ดจริง]\n- วิธีการเล่น: [วิธีการเล่น] (strumming/picking)\n- เครื่องดนตรี: [เครื่องดนตรี] (กีตาร์/เปียโน)\n\nใช้กีตาร์/เปียโน ([จำนวนคำแนะนำ] คำ)', 
    favorite: false, rating: 0, tags: ['chord', 'progression'], variables: [
      { name: "แนว", placeholder: "ป๊อป/ร็อค" },
      { name: "กุญแจเสียง", placeholder: "C Major" },
      { name: "อารมณ์", placeholder: "เศร้า/มีความสุข" },
      { name: "โครงสร้าง", placeholder: "Verse-Chorus" },
      { name: "จังหวะ", placeholder: "120" },
      { name: "จำนวนท่อน", placeholder: "4" },
      { name: "คอร์ดหลัก", placeholder: "I, IV, V, vi" },
      { name: "จำนวนคอร์ด", placeholder: "4" },
      { name: "ลำดับคอร์ด", placeholder: "C-G-Am-F" },
      { name: "ชื่อคอร์ดจริง", placeholder: "C, G, Am, F" },
      { name: "วิธีการเล่น", placeholder: "strumming" },
      { name: "เครื่องดนตรี", placeholder: "กีตาร์" },
      { name: "จำนวนคำแนะนำ", placeholder: "50" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Rap Lyrics', desc:'เขียนเนื้อแรปแนว [แนว]', 
    prompt:'จงเขียนเนื้อแรปแนว "[แนว]" หัวข้อ "[หัวข้อ]" สำหรับแรปเปอร์ "[ชื่อ]"\n\nรายละเอียด:\nโครงสร้าง: [โครงสร้าง] (Intro, Verse, Hook, Outro)\nจำนวนท่อน: [จำนวนท่อน] ท่อน\nจังหวะ: [BPM] BPM\n\nโครงสร้าง:\n- Intro ([จำนวนบรรทัด 1] บรรทัด)\n- Verse 1 ([จำนวนจังหวะ 1] จังหวะ): [เนื้อ Intro]\n- Hook ([จำนวนบรรทัด 2] บรรทัด - ติดหู): [เนื้อ Hook]\n- Verse 2 ([จำนวนจังหวะ 2] จังหวะ): [เนื้อ Verse 2]\n- Outro ([จำนวนบรรทัด 3] บรรทัด): [เนื้อ Outro]\n\nโทน: [โทน] (ก้าวร้าว/มั่นใจ/เล่าเรื่อง)\nใช้ภาษา: [ภาษา] (ไทย/อังกฤษ)\nจำนวนคำศัพท์สแลง: [จำนวนสแลง] คำ', 
    favorite: false, rating: 0, tags: ['rap', 'lyrics'], variables: [
      { name: "แนว", placeholder: "Gangsta/Trap/Conscious" },
      { name: "หัวข้อ", placeholder: "ชีวิตในเมือง" },
      { name: "ชื่อ", placeholder: "MC Street" },
      { name: "โครงสร้าง", placeholder: "Intro-Verse-Hook-Verse-Outro" },
      { name: "จำนวนท่อน", placeholder: "5" },
      { name: "BPM", placeholder: "90" },
      { name: "จำนวนบรรทัด 1", placeholder: "4" },
      { name: "จำนวนจังหวะ 1", placeholder: "16" },
      { name: "เนื้อ Intro", placeholder: "Intro เริ่มต้น" },
      { name: "จำนวนบรรทัด 2", placeholder: "4" },
      { name: "เนื้อ Hook", placeholder: "Hook ติดหู" },
      { name: "จำนวนจังหวะ 2", placeholder: "16" },
      { name: "เนื้อ Verse 2", placeholder: "Verse สอง" },
      { name: "จำนวนบรรทัด 3", placeholder: "2" },
      { name: "เนื้อ Outro", placeholder: "Outro จบ" },
      { name: "โทน", placeholder: "ก้าวร้าว" },
      { name: "ภาษา", placeholder: "ไทย" },
      { name: "จำนวนสแลง", placeholder: "5" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Soundtrack Composer', desc:'แต่งเพลงประกอบภาพยนตร์', 
    prompt:'จงแต่งเพลงประกอบฉาก "[ชื่อฉาก]" ในภาพยนตร์แนว "[แนวภาพยนตร์]" ที่มีอารมณ์ "[อารมณ์]"\n\nรายละเอียด:\n- ชื่อเพลง: [ชื่อเพลง]\n- ความยาว: [ความยาว] นาที\n- จังหวะ/เทมโป: [จังหวะ] (Andante, Allegro)\n- จำนวนท่อน: [จำนวนท่อน] ท่อน\n\nให้ระบุ:\n- เครื่องดนตรีหลัก ([จำนวนเครื่อง] ชิ้น): [เครื่องดนตรีหลัก] (Strings, Piano, Synth)\n- โครงสร้าง ([จำนวนโครงสร้าง] ส่วน): [โครงสร้าง] (Intro, Build-up, Climax, Resolution)\n- ระดับความดัง: [ระดับความดัง] (pp, mf, ff)\n- อารมณ์ในแต่ละท่อน: [อารมณ์แต่ละท่อน]\n\nเขียนแนวทางการแต่ง ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['soundtrack', 'composer'], variables: [
      { name: "ชื่อฉาก", placeholder: "ฉากสู้รบสุดท้าย" },
      { name: "แนวภาพยนตร์", placeholder: "แอคชั่น/ระทึกขวัญ" },
      { name: "อารมณ์", placeholder: "ตื่นเต้น/เศร้า" },
      { name: "ชื่อเพลง", placeholder: "Battle Final" },
      { name: "ความยาว", placeholder: "3" },
      { name: "จังหวะ", placeholder: "Allegro" },
      { name: "จำนวนท่อน", placeholder: "4" },
      { name: "จำนวนเครื่อง", placeholder: "3" },
      { name: "เครื่องดนตรีหลัก", placeholder: "Strings, Drums" },
      { name: "จำนวนโครงสร้าง", placeholder: "4" },
      { name: "โครงสร้าง", placeholder: "Intro-Build-Climax-Resolution" },
      { name: "ระดับความดัง", placeholder: "ff" },
      { name: "อารมณ์แต่ละท่อน", placeholder: " tension → release" },
      { name: "จำนวนคำ", placeholder: "100" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Jingle Creator', desc:'สร้างจิงเกิลโฆษณา 30 วิ', 
    prompt:'จงสร้างจิงเกิลโฆษณาของ "[สินค้า/แบรนด์]" ความยาว "[ความยาว]" วิ\n\nรายละเอียด:\n- ทํานองหลัก ( hummable melody): [ทํานอง]\n- เนื้อร้อง (ติดหู, สั้น): [เนื้อร้อง] ([จำนวนคำ] คำ)\n- เสียงประกอบ (SFX): [เสียงประกอบ]\n- โทนเสียง: [โทนเสียง] (male, female, choir)\n- จำนวนท่อน: [จำนวนท่อน] ท่อน\n- จังหวะ: [BPM] BPM\n\nให้ระบุ:\n- ทํานองหลัก ([จำนวนทํานอง] ทํานอง)\n- เนื้อร้อง ([จำนวนบรรทัด] บรรทัด - ติดหู, สั้น)\n- เสียงประกอบ ([จำนวน SFX] SFX): [SFX]\n- โทนเสียง ([จำนวนโทน] โทน): [โทนเสียง]\n\nเขียนเป็นแนวทาง ([จำนวนคำแนะนำ] คำ)', 
    favorite: false, rating: 0, tags: ['jingle', 'commercial'], variables: [
      { name: "สินค้า/แบรนด์", placeholder: "โค้ก/เป๊ปซี่" },
      { name: "ความยาว", placeholder: "30 วิ" },
      { name: "ทํานอง", placeholder: "C-E-G-C" },
      { name: "เนื้อร้อง", placeholder: "สดชื่นทุกคำ" },
      { name: "จำนวนคำ", placeholder: "4" },
      { name: "เสียงประกอบ", placeholder: "เสียงประแดง" },
      { name: "โทนเสียง", placeholder: "female" },
      { name: "จำนวนท่อน", placeholder: "2" },
      { name: "BPM", placeholder: "120" },
      { name: "จำนวนทํานอง", placeholder: "1" },
      { name: "จำนวนบรรทัด", placeholder: "2" },
      { name: "จำนวน SFX", placeholder: "2" },
      { name: "SFX", placeholder: "ding, pop" },
      { name: "จำนวนโทน", placeholder: "1" },
      { name: "จำนวนคำแนะนำ", placeholder: "50" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Vocal Tuning Guide', desc:'แนะนำการปรับแต่งเสียงร้อง', 
    prompt:'จงแนะนำการปรับแต่งเสียงร้อง "[ชื่อเพลง]" ของนักร้อง "[ชื่อ]" โดยมีปัญหา "[ปัญหา]"\n\nรายละเอียด:\n- ซอฟต์แวร์: [ซอฟต์แวร์] (Melodyne, Auto-Tune)\n- ระดับความเข้ม tuning: [ระดับ] (subtle, heavy)\n- จำนวนท่อนที่ต้องแก้: [จำนวนท่อน] ท่อน\n\nให้แนะนำ:\n1. เลือกซอฟต์แวร์ ([จำนวนซอฟต์แวร์] ตัว): [ซอฟต์แวร์แนะนำ]\n2. วิธีแก้ปัญหาแต่ละจุด ([จำนวนจุด] จุด): [วิธีแก้]\n3. ระดับความเข้ม tuning ([จำนวนระดับ] ระดับ): [ระดับแนะนำ]\n4. การทำ Doubling/Harmony ([จำนวนวิธี] วิธี): [วิธีDoubling]\n5. Tips เพิ่มความเป็นธรรมชาติ ([จำนวน Tips] ข้อ): [Tips]\n6. การตั้งค่า: [การตั้งค่า]\n\nใช้ภาษาง่ายเหมาะกับมือใหม่ ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['vocal', 'tuning'], variables: [
      { name: "ชื่อเพลง", placeholder: "เพลงเศร้า" },
      { name: "ชื่อ", placeholder: "นักร้องนำ" },
      { name: "ปัญหา", placeholder: "เสียงเพี้ยน, ไม่นิ่ง" },
      { name: "ซอฟต์แวร์", placeholder: "Auto-Tune" },
      { name: "ระดับ", placeholder: "subtle" },
      { name: "จำนวนท่อน", placeholder: "3" },
      { name: "จำนวนซอฟต์แวร์", placeholder: "2" },
      { name: "ซอฟต์แวร์แนะนำ", placeholder: "Melodyne" },
      { name: "จำนวนจุด", placeholder: "5" },
      { name: "วิธีแก้", placeholder: "ปรับPitch" },
      { name: "จำนวนระดับ", placeholder: "2" },
      { name: "ระดับแนะนำ", placeholder: "subtle" },
      { name: "จำนวนวิธี", placeholder: "2" },
      { name: "วิธีDoubling", placeholder: "เพิ่ม Layer" },
      { name: "จำนวน Tips", placeholder: "3" },
      { name: "Tips", placeholder: "หมั่นหายใจ" },
      { name: "การตั้งค่า", placeholder: "Retune speed: 20" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Music Theory Tutor', desc:'สอนทฤษฎีดนตรีพื้นฐาน', 
    prompt:'จงสอนทฤษฎีดนตรีพื้นฐานให้กับผู้เริ่มต้น "[ระดับ]" โดยเน้น "[หัวข้อ]"\n\nรายละเอียด:\nจำนวนบทเรียน: [จำนวนบทเรียน] บท\nชื่อบทเรียน: [ชื่อบทเรียน]\nเวลาเรียนต่อบท: [เวลา] นาที\n\nให้สอน:\n1. พื้นฐาน ([จำนวนพื้นฐาน] ข้อ): [พื้นฐาน]\n2. ตัวอย่าง: [ตัวอย่าง] (โน๊ต/คอร์ด)\n3. แบบฝึกหัด ([จำนวนแบบฝึกหัด] ข้อ): [แบบฝึกหัด]\n4. สรุป: [สรุป]\n5. แนะนำแหล่งเรียนรู้: [แหล่งเรียนรู้]\n\nใช้ภาษาง่าย เหมาะกับมือใหม่ ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['music-theory', 'tutor'], variables: [
      { name: "ระดับ", placeholder: "เริ่มต้น/ปานกลาง" },
      { name: "หัวข้อ", placeholder: "คอร์ด/จังหวะ/กุญแจเสียง" },
      { name: "จำนวนบทเรียน", placeholder: "5" },
      { name: "ชื่อบทเรียน", placeholder: "บทที่ 1: โน๊ต" },
      { name: "เวลา", placeholder: "30" },
      { name: "จำนวนพื้นฐาน", placeholder: "3" },
      { name: "พื้นฐาน", placeholder: "ชื่อโน๊ต, ระยะห่าง" },
      { name: "ตัวอย่าง", placeholder: "C-D-E-F-G" },
      { name: "จำนวนแบบฝึกหัด", placeholder: "5" },
      { name: "แบบฝึกหัด", placeholder: "ระบุชื่อโน๊ต" },
      { name: "สรุป", placeholder: "โน๊ต 7 ตัว" },
      { name: "แหล่งเรียนรู้", placeholder: "YouTube, หนังสือ" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Playlist Curator', desc:'สร้างเพลย์ลิสต์เพลงตามอารมณ์', 
    prompt:'จงสร้าง Playlist "[ชื่อ Playlist]" สำหรับอารมณ์ "[อารมณ์]" จำนวน [จำนวนเพลง] เพลง\n\nรายละเอียด:\n- แนวเพลง: [แนวเพลง] (3 แนว): [แนวเพลงตัวอย่าง]\n- ศิลปินแนะนำ: [ศิลปิน] (3 คน): [ศิลปินตัวอย่าง]\n- ระดับความดัง: [ระดับ] (soft, medium, loud)\n- จัดลำดับเพลง: [ลำดับ]\n- เหตุผลแต่ละเพลง: [เหตุผล]\n- ความยาวรวม: [ความยาว] นาที\n- จังหวะเฉลี่ย: [BPM] BPM\n\nให้ครบถ้วนทุกข้อ ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['playlist', 'curator'], variables: [
      { name: "ชื่อ Playlist", placeholder: "เช้าแจ่มใส" },
      { name: "อารมณ์", placeholder: "มีความสุข/เศร้า" },
      { name: "จำนวนเพลง", placeholder: "10" },
      { name: "แนวเพลง", placeholder: "ป๊อป, อาร์แอนด์บี" },
      { name: "แนวเพลงตัวอย่าง", placeholder: "Pop, R&B, Jazz" },
      { name: "ศิลปิน", placeholder: "Taylor Swift, Ed Sheeran" },
      { name: "ศิลปินตัวอย่าง", placeholder: "Taylor Swift, Ed Sheeran, John Mayer" },
      { name: "ระดับ", placeholder: "medium" },
      { name: "ลำดับ", placeholder: "เรียงจากช้าสู่เร็ว" },
      { name: "เหตุผล", placeholder: "ให้กำลังใจ" },
      { name: "ความยาว", placeholder: "40" },
      { name: "BPM", placeholder: "90-120" },
      { name: "จำนวนคำ", placeholder: "150" }
    ]
  },

  // ===== VIDEO (10) - ใหม่ =====
  { 
    cat:'video', tag:'video', title:'Short Video Script', desc:'สคริปต์วิดีโอสั้น 60 วิ', 
    prompt:'จงเขียนสคริปต์วิดีโอสั้น ([เวลา] วิ) สำหรับแพลตฟอร์ม "[แพลตฟอร์ม]" หัวข้อ "[หัวข้อ]"\n\nรายละเอียด:\n- จำนวนซีน: [จำนวนซีน] ซีน\n- โทนเสียง: [โทนเสียง] (ตื่นเต้น/สงบ/ตลก)\n\nโครงสร้าง:\n- Hook ([เวลา Hook] วิ): [hook content] ตึงดูดความสนใจ\n- Content ([เวลา Content] วิ): [content] เนื้อหาหลัก\n- CTA ([เวลา CTA] วิ): [CTA] เรียกให้กด Like/Subscribe\n\nให้ระบุ:\n- คำพูด (Dialogue) ([จำนวนบรรทัด] บรรทัด): [dialogue]\n- คำบรรยาย (Caption) ([จำนวนคำ] คำ): [caption]\n- คำแนะนำเสียง/ดนตรี: [เสียง/ดนตรี]\n- Transition: [transition]\n\nใช้ภาษา: [ภาษา] ([จำนวนคำแนะนำ] คำ)', 
    favorite: false, rating: 0, tags: ['short-video', 'script'], variables: [
      { name: "แพลตฟอร์ม", placeholder: "TikTok/Reels/Shorts" },
      { name: "หัวข้อ", placeholder: "เคล็ดลับทำอาหาร" },
      { name: "เวลา", placeholder: "60" },
      { name: "จำนวนซีน", placeholder: "3" },
      { name: "โทนเสียง", placeholder: "ตื่นเต้น" },
      { name: "เวลา Hook", placeholder: "3" },
      { name: "hook content", placeholder: "คุณรู้ไหม?" },
      { name: "เวลา Content", placeholder: "40" },
      { name: "content", placeholder: "วิธีทำ..." },
      { name: "เวลา CTA", placeholder: "5" },
      { name: "CTA", placeholder: "กดไลค์!" },
      { name: "จำนวนบรรทัด", placeholder: "5" },
      { name: "dialogue", placeholder: "สวัสดีครับ" },
      { name: "จำนวนคำ", placeholder: "20" },
      { name: "caption", placeholder: "วิธีทำง่ายๆ" },
      { name: "เสียง/ดนตรี", placeholder: "เพลงสนุก" },
      { name: "transition", placeholder: "fade" },
      { name: "ภาษา", placeholder: "ไทย" },
      { name: "จำนวนคำแนะนำ", placeholder: "100" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Sora Prompt', desc:'สร้าง prompt สำหรับ Sora (OpenAI)', 
    prompt:'จงสร้าง Sora prompt สำหรับวิดีโอ "[หัวข้อวิดีโอ]" ความยาว "[ความยาว]" วินาที\n\nรายละเอียด:\n- ฉาก (location): [location]\n- ตัวละคร (character): [character] ([จำนวนตัวละคร] ตัว)\n- การเคลื่อนไหว (camera movement): [camera movement]\n- แสง/บรรยากาศ: [lighting]\n- สไตล์: [style] (cinematic, anime, realistic)\n- ความละเอียด: [resolution] (1080p, 4K)\n- FPS: [fps] (24, 30, 60)\n\nให้ระบุ:\n- Prompt ภาษาอังกฤษ: [prompt]\n- คำอธิบายภาษาไทย ([จำนวนคำ] คำ): [description]\n- ตัวอย่างเฟรม: [frame example]\n\nเขียน prompt ภาษาอังกฤษ พร้อมคำอธิบายภาษาไทย', 
    favorite: false, rating: 0, tags: ['sora', 'ai-video'], variables: [
      { name: "หัวข้อวิดีโอ", placeholder: "เมืองในอนาคต" },
      { name: "ความยาว", placeholder: "10" },
      { name: "location", placeholder: "futuristic city" },
      { name: "character", placeholder: "robot walking" },
      { name: "จำนวนตัวละคร", placeholder: "2" },
      { name: "camera movement", placeholder: "pan left" },
      { name: "lighting", placeholder: "neon lights" },
      { name: "style", placeholder: "cinematic" },
      { name: "resolution", placeholder: "1080p" },
      { name: "fps", placeholder: "30" },
      { name: "prompt", placeholder: "A robot walking in futuristic city" },
      { name: "จำนวนคำ", placeholder: "50" },
      { name: "description", placeholder: "หุ่นยนต์เดินในเมืองอนาคต" },
      { name: "frame example", placeholder: "เฟรมแรก: หุ่นยนต์..." }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Video Editing Plan', desc:'วางแผนตัดต่อวิดีโอ', 
    prompt:'จงวางแผนการตัดต่อวิดีโอ "[ชื่อวิดีโอ]" แนว "[แนว]" ความยาว "[ความยาว]" นาที\n\nรายละเอียด:\n- โปรแกรมตัดต่อ: [โปรแกรม] (Premiere, Final Cut, DaVinci)\n- จำนวนซีน: [จำนวนซีน] ซีน\n- ลำดับการตัดต่อ: [ลำดับ] (Intro, Content, Outro)\n- Effect/Transition ที่ใช้: [Effect]\n- เพลงประกอบ/ซาวนด์เอฟเฟกต์: [เพลง/ซาวน์]\n- ระยะเวลาตัดต่อ: [ระยะเวลา] (วัน)\n- ความละเอียด: [resolution] (1080p, 4K)\n\nให้ระบุ:\n1. โปรแกรมตัดต่อ ([จำนวนโปรแกรม] ตัว): [โปรแกรมแนะนำ]\n2. ลำดับการตัดต่อ ([จำนวนขั้นตอน] ขั้น): [ลำดับการตัดต่อ]\n3. Effect/Transition ([จำนวน Effect] อัน): [Effect ตัวอย่าง]\n4. เพลงประกอบ ([จำนวนเพลง] เพลง): [เพลงตัวอย่าง]\n5. ระยะเวลาตัดต่อ ([จำนวนวัน] วัน)\n\nเขียนเป็นขั้นตอน ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['video-editing', 'plan'], variables: [
      { name: "ชื่อวิดีโอ", placeholder: "วิดีโอท่องเที่ยว" },
      { name: "แนว", placeholder: "ท่องเที่ยว/รีวิว" },
      { name: "ความยาว", placeholder: "10" },
      { name: "โปรแกรม", placeholder: "DaVinci Resolve" },
      { name: "จำนวนซีน", placeholder: "5" },
      { name: "ลำดับ", placeholder: "Intro-Content-Outro" },
      { name: "Effect", placeholder: "fade, zoom" },
      { name: "เพลง/ซาวน์", placeholder: "เพลงบรรเลง" },
      { name: "ระยะเวลา", placeholder: "3" },
      { name: "resolution", placeholder: "1080p" },
      { name: "จำนวนโปรแกรม", placeholder: "2" },
      { name: "โปรแกรมแนะนำ", placeholder: "DaVinci, Premiere" },
      { name: "จำนวนขั้นตอน", placeholder: "3" },
      { name: "ลำดับการตัดต่อ", placeholder: "1.Intro 2.Content 3.Outro" },
      { name: "จำนวน Effect", placeholder: "3" },
      { name: "Effect ตัวอย่าง", placeholder: "fade, zoom, spin" },
      { name: "จำนวนเพลง", placeholder: "2" },
      { name: "เพลงตัวอย่าง", placeholder: "เพลงบรรเลง 1, เพลง pop 1" },
      { name: "จำนวนวัน", placeholder: "3" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'YouTube Thumbnail', desc:'ออกแบบรูป Thumbnail สำหรับ YouTube', 
    prompt:'จงออกแบบ YouTube Thumbnail สำหรับวิดีโอ "[หัวข้อวิดีโอ]" แนว "[แนว]" กลุ่มเป้าหมาย "[กลุ่มเป้าหมาย]"\n\nรายละเอียด:\n- ขนาดรูป: [ขนาด] (1280x720)\n- ข้อความหลักบนรูป (Text): [text] ([จำนวนคำ] คำ)\n- สีโทนหลัก (Color Palette): [color palette] ([จำนวนสี] สี)\n- ภาพประกอบ: [ภาพประกอบ] (ภาพคน, ภาพผลิตภัณฑ์)\n- Layout: [layout] (ตัวอักษรใหญ่, ภาพเต็มจอ)\n- จุดสีสดใส (Pop of color): [pop of color]\n- ฟอนต์: [font]\n\nให้ระบุ:\n1. คำอธิบายรูป ([จำนวนคำอธิบาย] คำ)\n2. Prompt สำหรับ AI วาดรูป: [prompt AI] ([จำนวน prompt] คำ)\n3. เหตุผลการออกแบบ: [เหตุผล]\n\nเขียนคำอธิบายและ prompt สำหรับ AI วาดรูป', 
    favorite: false, rating: 0, tags: ['youtube', 'thumbnail'], variables: [
      { name: "หัวข้อวิดีโอ", placeholder: "วิธีทำ SEO" },
      { name: "แนว", placeholder: "สอน/รีวิว" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น/วัยทำงาน" },
      { name: "ขนาด", placeholder: "1280x720" },
      { name: "text", placeholder: "SEO ทำง่ายๆ" },
      { name: "จำนวนคำ", placeholder: "3" },
      { name: "color palette", placeholder: "ส้ม, ขาว, ดำ" },
      { name: "จำนวนสี", placeholder: "3" },
      { name: "ภาพประกอบ", placeholder: "ภาพคนกำลังทำงาน" },
      { name: "layout", placeholder: "ตัวอักษรใหญ่ตรงกลาง" },
      { name: "pop of color", placeholder: "ส้มสว่าง" },
      { name: "font", placeholder: "Bold Sans-serif" },
      { name: "จำนวนคำอธิบาย", placeholder: "50" },
      { name: "prompt AI", placeholder: "YouTube thumbnail with text" },
      { name: "จำนวน prompt", placeholder: "30" },
      { name: "เหตุผล", placeholder: "ดึงดูดสายตา" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Documentary Script', desc:'เขียนสคริปต์สารคดี', 
    prompt:'จงเขียนสคริปต์สารคดีเรื่อง "[เรื่อง]" ความยาว [ความยาว]\n\nโครงสร้าง:\n- Introduction\n- 3-5 ตอน (episodes)\n- Interview questions\n- Narration script\n- Outro\n\nให้มีคำอธิบายภาพและเสียง', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "เรื่อง", placeholder: "ประวัติศาสตร์ท้องถิ่น" },
      { name: "ความยาว", placeholder: "30 นาที/1 ชั่วโมง" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Animation Storyboard', desc:'วาดสตอรี่บอร์ดสำหรับแอนิเมชั่น', 
    prompt:'จงวาด Storyboard สำหรับแอนิเมชั่น "[ชื่อแอนิเมชั่น]" แนว "[แนว]" ความยาว "[ความยาว]" นาที\n\nรายละเอียด:\n- จำนวนซีน: [จำนวนซีน] ซีน\n- อัตราส่วนภาพ: [อัตราส่วน] (16:9, 4:3)\n- สไตล์: [สไตล์] (2D, 3D, Stop motion)\n\nให้ระบุ:\n- จำนวนซีน ([จำนวนซีน] ซีน): [รายละเอียดซีน]\n- มุมกล้อง/การเคลื่อนไหว ([จำนวนมุม] มุม): [มุมกล้อง]\n- คำบรรยายแต่ละเฟรม ([จำนวนเฟรม] เฟรม): [คำบรรยาย]\n- ตัวละคร/พื้นหลัง ([จำนวนตัวละคร] ตัว): [ตัวละคร/พื้นหลัง]\n- Sound effects / BGM: [เสียง/BGM]\n- เวลาแต่ละซีน: [เวลาแต่ละซีน] (นาที)\n\nเขียนเป็นตารางทีละซีน ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['storyboard', 'animation'], variables: [
      { name: "ชื่อแอนิเมชั่น", placeholder: "ผจญภัยในป่าดำ" },
      { name: "แนว", placeholder: "แฟนตาซี" },
      { name: "ความยาว", placeholder: "5" },
      { name: "จำนวนซีน", placeholder: "5" },
      { name: "อัตราส่วน", placeholder: "16:9" },
      { name: "สไตล์", placeholder: "2D" },
      { name: "รายละเอียดซีน", placeholder: "ซีน 1: เปิดด้วยป่า" },
      { name: "จำนวนมุม", placeholder: "3" },
      { name: "มุมกล้อง", placeholder: "wide shot, close-up" },
      { name: "จำนวนเฟรม", placeholder: "10" },
      { name: "คำบรรยาย", placeholder: "ตัวเอกเดินเข้าป่า" },
      { name: "จำนวนตัวละคร", placeholder: "2" },
      { name: "ตัวละคร/พื้นหลัง", placeholder: "นักสู้, ป่ามืด" },
      { name: "เสียง/BGM", placeholder: "เสียงนก, เพลงลึกลับ" },
      { name: "เวลาแต่ละซีน", placeholder: "1" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Live Stream Plan', desc:'วางแผนสตรีมมิ่งสด', 
    prompt:'จงวางแผน Live Stream สำหรับ "[หัวข้อ]" แพลตฟอร์ม "[แพลตฟอร์ม]" ระยะเวลา "[ระยะเวลา]" นาที\n\nรายละเอียด:\n- จำนวนผู้ชมคาดหวัง: [จำนวนผู้ชม] คน\n- ช่วงเวลา: [ช่วงเวลา] (Intro, Content, Q&A, Outro)\n- จำนวนกิจกรรม: [จำนวนกิจกรรม] กิจกรรม\n\nให้ระบุ:\n- ช่วงเวลา ([จำนวนช่วง] ช่วง): [ช่วงเวลารายละเอียด]\n- กิจกรรมระหว่างสตรีม ([จำนวนกิจกรรมทำ] กิจกรรม): [กิจกรรม] (Giveaway, Poll)\n- เอาท์จำเป็น (Guest): [guest] ถ้ามี\n- อุปกรณ์ที่ใช้ ([จำนวนอุปกรณ์] ชิ้น): [อุปกรณ์] (กล้อง, ไมค์, ไฟ)\n- Checklist ก่อนสตรีม ([จำนวน checklist] รายการ): [checklist]\n- การโปรโมท: [การโปรโมท]\n\nเขียนเป็นตารางเวลา ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['live-stream', 'planning'], variables: [
      { name: "หัวข้อ", placeholder: "รีวิวสินค้า" },
      { name: "แพลตฟอร์ม", placeholder: "Facebook/TikTok" },
      { name: "ระยะเวลา", placeholder: "60" },
      { name: "จำนวนผู้ชม", placeholder: "1000" },
      { name: "ช่วงเวลา", placeholder: "Intro-Content-Q&A-Outro" },
      { name: "จำนวนกิจกรรม", placeholder: "3" },
      { name: "จำนวนช่วง", placeholder: "4" },
      { name: "ช่วงเวลารายละเอียด", placeholder: "0-5 Intro, 5-45 Content" },
      { name: "จำนวนกิจกรรมทำ", placeholder: "2" },
      { name: "กิจกรรม", placeholder: "Giveaway, Poll" },
      { name: "guest", placeholder: "ผู้เชี่ยวชาญ" },
      { name: "จำนวนอุปกรณ์", placeholder: "3" },
      { name: "อุปกรณ์", placeholder: "กล้อง, ไมค์, ไฟ" },
      { name: "จำนวน checklist", placeholder: "5" },
      { name: "checklist", placeholder: "เช็คเน็ต, เช็คเสียง" },
      { name: "การโปรโมท", placeholder: "โพสต์ก่อนสด 1 ชม." },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Video SEO', desc:'ปรับแต่งวิดีโอให้ติดอันดับ YouTube', 
    prompt:'จงปรับแต่ง SEO ให้วิดีโอ "[หัวข้อวิดีโอ]" ของช่อง "[ชื่อช่อง]"\n\nรายละเอียด:\n- คำสำคัญหลัก: [คำสำคัญหลัก]\n- จำนวนคำสำคัญรอง: [จำนวนคำสำคัญ] คำ\n- ระยะเวลาวิดีโอ: [ระยะเวลา] นาที\n\nให้ระบุ:\n- Title ([จำนวน Title] แบบ): [Title examples]\n- Description ([จำนวนคำ] คำ): [Description]\n- Tags ([จำนวน Tags] Tags): [Tags]\n- Timestamps ([จำนวน Timestamps] จุด): [Timestamps]\n- Thumbnail text ([จำนวน Thumbnail] ข้อ): [Thumbnail text]\n- Playlist แนะนำ ([จำนวน Playlist] Playlist): [Playlist]\n\nใช้คำสำคัญ: [คำสำคัญ] ([จำนวนคำสำคัญใช้] ครั้ง)', 
    favorite: false, rating: 0, tags: ['video-seo', 'youtube'], variables: [
      { name: "หัวข้อวิดีโอ", placeholder: "สอนทำ SEO" },
      { name: "ชื่อช่อง", placeholder: "ช่องสอนเทคนิค" },
      { name: "คำสำคัญหลัก", placeholder: "SEO, YouTube" },
      { name: "จำนวนคำสำคัญ", placeholder: "5" },
      { name: "ระยะเวลา", placeholder: "10" },
      { name: "จำนวน Title", placeholder: "3" },
      { name: "Title examples", placeholder: "SEO ทำง่ายๆ" },
      { name: "จำนวนคำ", placeholder: "200" },
      { name: "Description", placeholder: "วิดีโอสอนทำ SEO..." },
      { name: "จำนวน Tags", placeholder: "15" },
      { name: "Tags", placeholder: "SEO, YouTube, วิธีทำ" },
      { name: "จำนวน Timestamps", placeholder: "5" },
      { name: "Timestamps", placeholder: "0:00 Intro, 1:00 Content" },
      { name: "จำนวน Thumbnail", placeholder: "2" },
      { name: "Thumbnail text", placeholder: "SEO ง่ายๆ" },
      { name: "จำนวน Playlist", placeholder: "2" },
      { name: "Playlist", placeholder: "Playlist สอน YouTube" },
      { name: "คำสำคัญ", placeholder: "SEO" },
      { name: "จำนวนคำสำคัญใช้", placeholder: "3" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Video SEO', desc:'ปรับแต่งวิดีโอให้ติดอันดับ YouTube', 
    prompt:'จงแนะนำวิธีปรับแต่งวิดีโอ "[หัวข้อ]" ให้ติดอันดับ YouTube\n\nแนะนำ:\n- Title ที่ดึงดูด\n- Description ที่มี keyword\n- Tags ที่เหมาะสม\n- Thumbnail ที่คลิกได้\n- Playlist strategy\n\nใช้หลักการ SEO', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "หัวข้อ", placeholder: "หัวข้อวิดีโอ" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Filming Schedule', desc:'ตารางถ่ายทำวิดีโอ', 
    prompt:'จงสร้างตารางถ่ายทำวิดีโอ "[ชื่อโปรเจกต์]" เป็นเวลา [จำนวนวัน] วัน\n\nตาราง:\n- สถานที่ถ่ายทำ\n- ฉากที่จะถ่าย\n- อุปกรณ์ที่ต้องใช้\n- ทีมงานที่ต้องการ\n- เวลาเริ่ม-เลิกแต่ละวัน\n\nให้ครอบคลุมทุกฉาก', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อโปรเจกต์", placeholder: "โปรเจกต์วิดีโอของคุณ" },
      { name: "จำนวนวัน", placeholder: "3 วัน/5 วัน" }
    ]
  },

  // ===== BUSINESS (10) - ใหม่ =====
  { 
    cat:'business', tag:'business', title:'Business Plan', desc:'ร่างแผนธุรกิจสั้น', 
    prompt:'จงร่างแผนธุรกิจ "[ประเภทธุรกิจ]" สำหรับ [ระยะเวลา]\n\nรายละเอียด:\n- งบประมาณ: [งบประมาณ] (บาท)\n- จำนวนพนักงาน: [จำนวนพนักงาน] คน\n- กลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\n\nโครงสร้าง:\n1. Executive Summary ([จำนวนคำ 1] คำ): [executive summary]\n2. Company Description ([จำนวนคำ 2] คำ): [company description]\n3. Market Analysis ([จำนวนคำ 3] คำ): [market analysis]\n4. Products/Services ([จำนวนคำ 4] คำ): [products/services]\n5. Marketing Strategy ([จำนวนคำ 5] คำ): [marketing strategy]\n6. Financial Plan ([จำนวนคำ 6] คำ): [financial plan]\n7. SWOT Analysis ([จำนวนคำ 7] คำ): [swot]\n\nความยาว [ความยาว] คำ', 
    favorite: false, rating: 0, tags: ['business-plan', 'strategy'], variables: [
      { name: "ประเภทธุรกิจ", placeholder: "ร้านกาแฟ/ออนไลน์" },
      { name: "ระยะเวลา", placeholder: "1 ปี/3 ปี" },
      { name: "งบประมาณ", placeholder: "1 ล้านบาท" },
      { name: "จำนวนพนักงาน", placeholder: "10" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น/วัยทำงาน" },
      { name: "จำนวนคำ 1", placeholder: "100" },
      { name: "executive summary", placeholder: "สรุปธุรกิจ" },
      { name: "จำนวนคำ 2", placeholder: "100" },
      { name: "company description", placeholder: "รายละเอียดบริษัท" },
      { name: "จำนวนคำ 3", placeholder: "100" },
      { name: "market analysis", placeholder: "วิเคราะห์ตลาด" },
      { name: "จำนวนคำ 4", placeholder: "100" },
      { name: "products/services", placeholder: "รายการสินค้า" },
      { name: "จำนวนคำ 5", placeholder: "100" },
      { name: "marketing strategy", placeholder: "แผนการตลาด" },
      { name: "จำนวนคำ 6", placeholder: "100" },
      { name: "financial plan", placeholder: "แผนการเงิน" },
      { name: "จำนวนคำ 7", placeholder: "100" },
      { name: "swot", placeholder: "จุดแข็ง/จุดอ่อน" },
      { name: "ความยาว", placeholder: "700" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'HR Policy', desc:'ร่างนโยบายทรัพยากรบุคคล', 
    prompt:'จงร่างนโยบาย "[ชื่อนโยบาย]" สำหรับบริษัท "[ชื่อบริษัท]" จำนวนพนักงาน "[จำนวนพนักงาน]" คน\n\nรายละเอียด:\n- วันที่มีผลบังคับใช้: [วันที่]\n- ระยะเวลาทดลองงาน: [ระยะเวลา] เดือน\n- จำนวนวันลาพักผ่อน: [จำนวนวัน] วัน/ปี\n\nนโยบายต้องมี:\n- วัตถุประสงค์ ([จำนวนวัตถุประสงค์] ข้อ): [วัตถุประสงค์]\n- ขอบเขตการใช้งาน ([จำนวนขอบเขต] ข้อ): [ขอบเขต]\n- ขั้นตอนการปฏิบัติ ([จำนวนขั้นตอน] ขั้น): [ขั้นตอน]\n- สิทธิ์และผลประโยชน์ ([จำนวนสิทธิ์] ข้อ): [สิทธิ์]\n- การลงโทษเมื่อฝ่าฝืน ([จำนวนการลงโทษ] ระดับ): [การลงโทษ]\n- การทบทวนนโยบาย ([จำนวนการทบทวน] ครั้ง/ปี): [การทบทวน]\n- ผู้รับผิดชอบ: [ผู้รับผิดชอบ]\n\nเขียนเป็นภาษาทางการ ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['hr', 'policy'], variables: [
      { name: "ชื่อนโยบาย", placeholder: "นโยบายงานจากบ้าน" },
      { name: "ชื่อบริษัท", placeholder: "บริษัท ABC จำกัด" },
      { name: "จำนวนพนักงาน", placeholder: "50" },
      { name: "วันที่", placeholder: "1 มกราคม 2026" },
      { name: "ระยะเวลา", placeholder: "3" },
      { name: "จำนวนวัน", placeholder: "10" },
      { name: "จำนวนวัตถุประสงค์", placeholder: "3" },
      { name: "วัตถุประสงค์", placeholder: "เพิ่มผลิตภาพ" },
      { name: "จำนวนขอบเขต", placeholder: "2" },
      { name: "ขอบเขต", placeholder: "พนักงานประจำ" },
      { name: "จำนวนขั้นตอน", placeholder: "4" },
      { name: "ขั้นตอน", placeholder: "1.ยื่นคำร้อง 2.อนุมัติ" },
      { name: "จำนวนสิทธิ์", placeholder: "3" },
      { name: "สิทธิ์", placeholder: "ค่าเน็ต, ค่าไฟ" },
      { name: "จำนวนการลงโทษ", placeholder: "2" },
      { name: "การลงโทษ", placeholder: "ตักเตือน, ปรับ" },
      { name: "จำนวนการทบทวน", placeholder: "1" },
      { name: "การทบทวน", placeholder: "ทุกสิ้นปี" },
      { name: "ผู้รับผิดชอบ", placeholder: "HR Manager" },
      { name: "จำนวนคำ", placeholder: "300" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'SWOT Analysis', desc:'วิเคราะห์ SWOT บริษัทของคุณ', 
    prompt:'จงวิเคราะห์ SWOT สำหรับบริษัท "[ชื่อบริษัท]" ในอุตสาหกรรม "[อุตสาหกรรม]"\n\nรายละเอียด:\n- จำนวนพนักงาน: [จำนวนพนักงาน] คน\n- ระยะเวลาดำเนินงาน: [ระยะเวลา] ปี\n- งบประมาณ: [งบประมาณ] บาท\n\nวิเคราะห์:\n- Strengths ([จำนวนข้อ 1] ข้อ): [strengths] (จุดแข็ง)\n- Weaknesses ([จำนวนข้อ 2] ข้อ): [weaknesses] (จุดอ่อน)\n- Opportunities ([จำนวนข้อ 3] ข้อ): [opportunities] (โอกาส)\n- Threats ([จำนวนข้อ 4] ข้อ): [threats] (อุปสรรค)\n- คู่แข่งหลัก: [คู่แข่ง]\n- ส่วนแบ่งตลาด: [ส่วนแบ่งตลาด]%\n\nให้คำแนะนำเชิงกลยุทธ์ ([จำนวนคำแนะนำ] ข้อ): [คำแนะนำ] ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['swot', 'analysis'], variables: [
      { name: "ชื่อบริษัท", placeholder: "บริษัทของคุณ" },
      { name: "อุตสาหกรรม", placeholder: "เทคโนโลยี/อาหาร" },
      { name: "จำนวนพนักงาน", placeholder: "50" },
      { name: "ระยะเวลา", placeholder: "5" },
      { name: "งบประมาณ", placeholder: "10 ล้าน" },
      { name: "จำนวนข้อ 1", placeholder: "3" },
      { name: "strengths", placeholder: "ทีมแข็งแกร่ง" },
      { name: "จำนวนข้อ 2", placeholder: "2" },
      { name: "weaknesses", placeholder: "งบจำกัด" },
      { name: "จำนวนข้อ 3", placeholder: "3" },
      { name: "opportunities", placeholder: "ตลาดใหม่" },
      { name: "จำนวนข้อ 4", placeholder: "2" },
      { name: "threats", placeholder: "คู่แข่งใหม่" },
      { name: "คู่แข่ง", placeholder: "Brand A, Brand B" },
      { name: "ส่วนแบ่งตลาด", placeholder: "15%" },
      { name: "จำนวนคำแนะนำ", placeholder: "3" },
      { name: "คำแนะนำ", placeholder: "ขยายตลาด" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Pricing Strategy', desc:'ตั้งราคาสินค้า/บริการ', 
    prompt:'จงวางแผน Pricing Strategy สำหรับ "[สินค้า/บริการ]" ในตลาด "[ตลาด]" กลุ่มเป้าหมาย "[กลุ่มเป้าหมาย]"\n\nรายละเอียด:\n- ต้นทุนต่อหน่วย: [ต้นทุน] บาท\n- จำนวนคู่แข่ง: [จำนวนคู่แข่ง] ราย\n- ระยะเวลาโปรโมชั่น: [ระยะเวลา] เดือน\n\nให้ระบุ:\n- Cost Structure (ต้นทุน): [cost structure] ([จำนวนข้อ 1] ข้อ)\n- Competitor Pricing (ราคาคู่แข่ง): [competitor pricing] ([จำนวนข้อ 2] ราย)\n- Pricing Model (Cost-plus, Value-based, Dynamic): [pricing model]\n- Price Points (ราคาแต่ละระดับ) ([จำนวนราคา] ระดับ): [price points]\n- Discount Strategy ([จำนวนข้อ 3] ข้อ): [discount strategy]\n- ผลกระทบต่อกำไร: [ผลกระทบ]\n\nเขียนเป็ นตารางและคำอธิบาย ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['pricing', 'strategy'], variables: [
      { name: "สินค้า/บริการ", placeholder: "ซอฟแวร์/คอร์สออนไลน์" },
      { name: "ตลาด", placeholder: "B2B/B2C" },
      { name: "กลุ่มเป้าหมาย", placeholder: "SME/องค์กรใหญ่" },
      { name: "ต้นทุน", placeholder: "500" },
      { name: "จำนวนคู่แข่ง", placeholder: "3" },
      { name: "ระยะเวลา", placeholder: "3" },
      { name: "cost structure", placeholder: "ต้นทุนคงที่, ผันแปร" },
      { name: "จำนวนข้อ 1", placeholder: "3" },
      { name: "competitor pricing", placeholder: "คู่แข่ง A: 1000" },
      { name: "จำนวนข้อ 2", placeholder: "3" },
      { name: "pricing model", placeholder: "Value-based" },
      { name: "จำนวนราคา", placeholder: "3" },
      { name: "price points", placeholder: "Basic: 500, Pro: 1000" },
      { name: "จำนวนข้อ 3", placeholder: "2" },
      { name: "discount strategy", placeholder: "ซื้อ 3 จ่าย 2" },
      { name: "ผลกระทบ", placeholder: "กำไรเพิ่ม 20%" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Meeting Agenda', desc:'สร้างวาระการประชุม', 
    prompt:'จงสร้างวาระการประชุม "[หัวข้อประชุม]" สำหรับ "[ประเภทประชุม]" จำนวน [จำนวนคน] คน\n\nรายละเอียด:\n- วันที่: [วันที่]\n- เวลา: [เวลา] (9:00-12:00)\n- สถานที่: [สถานที่] (Onsite/Zoom)\n- จำนวนวาระ: [จำนวนวาระ] วาระ\n\nให้ระบุ:\n- วาระการประชุม ([จำนวนวาระ] ข้อ): [วาระ]\n- ผู้รับผิดชอบแต่ละวาระ ([จำนวนคน] คน): [ผู้รับผิดชอบ]\n- เวลาแต่ละวาระ ([จำนวนเวลา] นาที): [เวลา]\n- เอกสารประกอบ ([จำนวนเอกสาร] ฉบับ): [เอกสาร]\n- เป้าหมายการประชุม: [เป้าหมาย]\n\nเขียนเป็นตารางเวลา ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['meeting', 'agenda'], variables: [
      { name: "หัวข้อประชุม", placeholder: "วางแผน Q1" },
      { name: "ประเภทประชุม", placeholder: "ทีมขาย/บริหาร" },
      { name: "จำนวนคน", placeholder: "10" },
      { name: "วันที่", placeholder: "1 มกราคม 2026" },
      { name: "เวลา", placeholder: "9:00-12:00" },
      { name: "สถานที่", placeholder: "ห้องประชุม A / Zoom" },
      { name: "จำนวนวาระ", placeholder: "5" },
      { name: "วาระ", placeholder: "1.สรุป Q4, 2.แผน Q1" },
      { name: "จำนวนคน", placeholder: "3" },
      { name: "ผู้รับผิดชอบ", placeholder: "นาย A, นาง B" },
      { name: "จำนวนเวลา", placeholder: "5" },
      { name: "เวลา", placeholder: "30, 45, 20..." },
      { name: "จำนวนเอกสาร", placeholder: "3" },
      { name: "เอกสาร", placeholder: "รายงาน Q4, แผน Q1" },
      { name: "เป้าหมาย", placeholder: "อนุมัติแผน Q1" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Customer Persona', desc:'สร้างบุคลิกภาพลูกค้า', 
    prompt:'จงสร้าง Customer Persona สำหรับธุรกิจ "[ธุรกิจ]" จำนวน [จำนวนคน] คน\n\nรายละเอียดแต่ละคน:\n- ชื่อ, อายุ ([อายุ]), อาชีพ ([อาชีพ])\n- ความต้องการ (needs): [needs]\n- ความเจ็บปวด (pain points): [pain points] ([จำนวน pain points] ข้อ)\n- พฤติกรรมการซื้อ: [behavior]\n- แชannels ที่ใช้ ([จำนวน channels] ช่องทาง): [channels]\n- งบประมาณต่อเดือน: [งบประมาณ] บาท\n- สโลแกนประจำตัว: [สโลแกน]\n\nให้เขียนอย่างละเอียด ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['customer', 'persona'], variables: [
      { name: "ธุรกิจ", placeholder: "ร้านกาแฟ/ออนไลน์" },
      { name: "จำนวนคน", placeholder: "3" },
      { name: "อายุ", placeholder: "25-35 ปี" },
      { name: "อาชีพ", placeholder: "พนักงานออฟฟิศ" },
      { name: "needs", placeholder: "หาที่นั่งทำงาน" },
      { name: "pain points", placeholder: "วifi ช้า" },
      { name: "จำนวน pain points", placeholder: "3" },
      { name: "behavior", placeholder: "ซื้อทุกเช้า" },
      { name: "จำนวน channels", placeholder: "3" },
      { name: "channels", placeholder: "Facebook, Instagram" },
      { name: "งบประมาณ", placeholder: "3000" },
      { name: "สโลแกน", placeholder: "กาแฟเริ่มวันใหม่" },
      { name: "จำนวนคำ", placeholder: "200" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Commercial Ad Script', desc:'สคริปต์โฆษณาทางโทรทัศน์ 30 วิ', 
    prompt:'จงเขียนสคริปต์โฆษณา "[สินค้า/บริการ]" ความยาว "[ความยาว]" วิ\n\nรายละเอียด:\n- จำนวนซีน: [จำนวนซีน] ซีน\n- โทนเสียง: [โทนเสียง] (ตื่นเต้น/สงบ/ตลก)\n\nโครงสร้าง:\n- Hook ([เวลา Hook] วิ - ดึงดูดความสนใจ): [hook content]\n- Product Showcase ([เวลา Showcase] วิ - แสดงสินค้า): [showcase content]\n- Benefits ([เวลา Benefits] วิ - ประโยชน์): [benefits content]\n- CTA ([เวลา CTA] วิ - เรียกให้ดำเนินการ): [CTA content]\n\nให้ระบุ:\n- คำพูด (Voice-over) ([จำนวนบรรทัด] บรรทัด): [voice-over]\n- คำบรรยาย (Caption) ([จำนวนคำ] คำ): [caption]\n- ดนตรี/เสียงประกอบ: [music/sound]\n- Visual style: [visual style]\n\nใช้ภาษา: [ภาษา] ([จำนวนคำแนะนำ] คำ)', 
    favorite: false, rating: 0, tags: ['commercial', 'ad-script'], variables: [
      { name: "สินค้า/บริการ", placeholder: "น้ำหอม/รถยนต" },
      { name: "ความยาว", placeholder: "30" },
      { name: "จำนวนซีน", placeholder: "4" },
      { name: "โทนเสียง", placeholder: "ตื่นเต้น" },
      { name: "เวลา Hook", placeholder: "5" },
      { name: "hook content", placeholder: "คุณเคยไหม?" },
      { name: "เวลา Showcase", placeholder: "15" },
      { name: "showcase content", placeholder: "แสดงสินค้า..." },
      { name: "เวลา Benefits", placeholder: "5" },
      { name: "benefits content", placeholder: "ประโยชน์..." },
      { name: "เวลา CTA", placeholder: "5" },
      { name: "CTA content", placeholder: "ซื้อเลย!" },
      { name: "จำนวนบรรทัด", placeholder: "5" },
      { name: "voice-over", placeholder: "เสียงบรรยาย..." },
      { name: "จำนวนคำ", placeholder: "20" },
      { name: "caption", placeholder: "ซื้อวันนี้!" },
      { name: "music/sound", placeholder: "เพลงสนุก" },
      { name: "visual style", placeholder: "Bright, colorful" },
      { name: "ภาษา", placeholder: "ไทย" },
      { name: "จำนวนคำแนะนำ", placeholder: "100" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Pitch Deck', desc:'สร้างสไลด์นำเสนอขอเงินทุน', 
    prompt:'จงสร้าง Pitch Deck สำหรับ "[ชื่อธุรกิจ]" ที่ต้องการเงิน "[จำนวนเงิน]" บาท\n\nรายละเอียด:\n- จำนวนสไลด์: [จำนวนสไลด์] สไลด์\n- กลุ่มเป้าหมาย: [กลุ่มเป้าหมาย] (นักลงทุน)\n- สไตล์การนำเสนอ: [สไตล์] (มืออาชีพ, น่าสนใจ)\n\nให้มีสไลด์:\n1. Problem ([จำนวนคำ 1] คำ): [problem]\n2. Solution ([จำนวนคำ 2] คำ): [solution]\n3. Market Size ([จำนวนคำ 3] คำ): [market size]\n4. Business Model ([จำนวนคำ 4] คำ): [business model]\n5. Team ([จำนวนคำ 5] คำ): [team]\n6. Financials ([จำนวนคำ 6] คำ): [financials]\n7. Ask ([จำนวนคำ 7] คำ): [ask]\n\nใช้ภาษาน่าสนใจ กระชับ ([จำนวนคำทั้งหมด] คำ)', 
    favorite: false, rating: 0, tags: ['pitch-deck', 'funding'], variables: [
      { name: "ชื่อธุรกิจ", placeholder: "สตาร์ทอัพเทคโนโลยี" },
      { name: "จำนวนเงิน", placeholder: "5 ล้านบาท" },
      { name: "จำนวนสไลด์", placeholder: "10" },
      { name: "กลุ่มเป้าหมาย", placeholder: "นักลงทุน VC" },
      { name: "สไตล์", placeholder: "มืออาชีพ, น่าสนใจ" },
      { name: "จำนวนคำ 1", placeholder: "50" },
      { name: "problem", placeholder: "ปัญหาการขนส่ง" },
      { name: "จำนวนคำ 2", placeholder: "50" },
      { name: "solution", placeholder: "แอปเรียกรถ" },
      { name: "จำนวนคำ 3", placeholder: "30" },
      { name: "market size", placeholder: "ตลาด 1 หมื่นล้าน" },
      { name: "จำนวนคำ 4", placeholder: "50" },
      { name: "business model", placeholder: "ค่าคอมมิชชั่น" },
      { name: "จำนวนคำ 5", placeholder: "30" },
      { name: "team", placeholder: "CEO, CTO" },
      { name: "จำนวนคำ 6", placeholder: "50" },
      { name: "financials", placeholder: "รายได้ 3 ปี" },
      { name: "จำนวนคำ 7", placeholder: "20" },
      { name: "ask", placeholder: "ขอเงิน 5 ล้าน" },
      { name: "จำนวนคำทั้งหมด", placeholder: "300" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Partnership Proposal', desc:'ร่างข้อเสนอความร่วมมือ', 
    prompt:'จงเขียนข้อเสนอความร่วมมือกับ "[ชื่อบริษัท]" สำหรับโปรเจกต์ "[ชื่อโปรเจกต์]"\n\nรายละเอียด:\n- ระยะเวลา: [ระยะเวลา] (6 เดือน/1 ปี)\n- งบประมาณ: [งบประมาณ] บาท\n- จำนวนฝ่ายร่วมมือ: [จำนวนฝ่าย] ฝ่าย\n\nเนื้อหา:\n- วัตถุประสงค์ความร่วมมือ ([จำนวนวัตถุประสงค์] ข้อ): [วัตถุประสงค์]\n- สิ่งที่แต่ละฝ่ายจะได้รับ ([จำนวนสิ่งที่ได้รับ] ข้อ): [สิ่งที่ได้รับ]\n- ระยะเวลาและขั้นตอน ([จำนวนขั้นตอน] ขั้น): [ขั้นตอน]\n- งบประมาณ ([จำนวนงบ] ส่วน): [งบ]\n- การแบ่งผลกำไร ([จำนวนการแบ่ง] แบบ): [การแบ่งผลกำไร]\n- ข้อตกลงทางกฎหมาย ([จำนวนข้อตกลง] ข้อ): [ข้อตกลง]\n- ความเสี่ยง: [ความเสี่ยง]\n\nให้เป็นทางการและชัดเจน ([จำนวนคำ] คำ)', 
    favorite: false, rating: 0, tags: ['partnership', 'proposal'], variables: [
      { name: "ชื่อบริษัท", placeholder: "บริษัทที่จะร่วมมือ" },
      { name: "ชื่อโปรเจกต์", placeholder: "โปรเจกต์ใหม่" },
      { name: "ระยะเวลา", placeholder: "1 ปี" },
      { name: "งบประมาณ", placeholder: "2 ล้านบาท" },
      { name: "จำนวนฝ่าย", placeholder: "2" },
      { name: "จำนวนวัตถุประสงค์", placeholder: "3" },
      { name: "วัตถุประสงค์", placeholder: "เพิ่มยอดขาย" },
      { name: "จำนวนสิ่งที่ได้รับ", placeholder: "2" },
      { name: "สิ่งที่ได้รับ", placeholder: "แบ่งปันลูกค้า" },
      { name: "จำนวนขั้นตอน", placeholder: "4" },
      { name: "ขั้นตอน", placeholder: "1.วางแผน 2.ดำเนินการ" },
      { name: "จำนวนงบ", placeholder: "3" },
      { name: "งบ", placeholder: "บริษัท A 60%, B 40%" },
      { name: "จำนวนการแบ่ง", placeholder: "2" },
      { name: "การแบ่งผลกำไร", placeholder: "แบ่ง 50:50" },
      { name: "จำนวนข้อตกลง", placeholder: "3" },
      { name: "ข้อตกลง", placeholder: "ไม่เปิดเผยข้อมูล" },
      { name: "ความเสี่ยง", placeholder: "ลูกค้าลดลง" },
      { name: "จำนวนคำ", placeholder: "300" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Crisis Management', desc:'แผนรับมือวิกฤตบริษัท', 
    prompt:'จงสร้างแผนรับมือวิกฤตสำหรับบริษัท "[ชื่อบริษัท]" ในสถานการณ์ "[สถานการณ์]"\n\nแผน:\n- ทีมรับมือวิกฤต\n- ขั้นตอนการประเมินสถานการณ์\n- การสื่อสารกับสื่อ/ลูกค้า\n- มาตรการแก้ไข\n- การฟื้นฟูภาพลักษณ์\n\nให้ครอบคลุมทุกด้าน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อบริษัท", placeholder: "บริษัทของคุณ" },
      { name: "สถานการณ์", placeholder: "ข่าวลบ/อุบัติเหตุ" }
    ]
  }
];

// Template UI functions - Master Version
let currentFilter = 'all';
let searchTerm = '';
let favoritesOnly = false;

function renderTemplates() {
  const grid = document.getElementById('templateGrid');
  if (!grid) return;
  
  const filtered = templates.filter(t => {
    const matchFilter = currentFilter === 'all' || t.cat === currentFilter;
    const matchSearch = !searchTerm || t.title.toLowerCase().includes(searchTerm.toLowerCase()) || t.desc.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFavorites = !favoritesOnly || t.favorite;
    return matchFilter && matchSearch && matchFavorites;
  });
  
  grid.innerHTML = filtered.map(t => `
    <div class="template-card" onclick="useTemplate('${t.title.replace(/'/g, "\\'")}')">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="template-tag tag-${t.cat}">${t.cat}</span>
        <i class="fa-heart ${t.favorite ? 'fas favorite' : 'far'}" onclick="event.stopPropagation(); toggleFavorite('${t.title.replace(/'/g, "\\'")}')" style="cursor:pointer; color: ${t.favorite ? 'var(--danger)' : 'var(--muted)'}"></i>
      </div>
      <div class="template-title">${t.title}</div>
      <div class="template-desc">${t.desc}</div>
      <div class="template-rating">
        ${'⭐'.repeat(t.rating)}${'☆'.repeat(5-t.rating)}
        <span style="font-size:10px; color:var(--muted); margin-left:5px;">${t.rating}/5</span>
      </div>
      <div class="template-tags">
        ${t.tags.map(tag => `<span class="template-tag-small">${tag}</span>`).join('')}
      </div>
      <div style="margin-top:8px; display:flex; gap:5px;">
        <button class="btn-sm" onclick="event.stopPropagation(); editTemplate('${t.title.replace(/'/g, "\\'")}')"><i class="fa-solid fa-edit"></i> แก้ไข</button>
        <button class="btn-sm danger" onclick="event.stopPropagation(); deleteTemplate('${t.title.replace(/'/g, "\\'")}')"><i class="fa-solid fa-trash"></i> ลบ</button>
      </div>
    </div>
  `).join('');
}

function useTemplate(title) {
  const template = templates.find(t => t.title === title);
  if (template) {
    if (template.variables && template.variables.length > 0) {
      showVariableModal(template);
    } else {
      document.getElementById('promptInput').value = template.prompt;
      if (typeof updateStats === 'function') updateStats();
      document.querySelector('[data-tab="editor"]').click();
      showToast(`โหลดเทมเพลต "${title}" แล้ว`, 'success');
    }
  }
}

function toggleFavorite(title) {
  const template = templates.find(t => t.title === title);
  if (template) {
    template.favorite = !template.favorite;
    renderTemplates();
    showToast(template.favorite ? 'เพิ่มในรายการโปรดแล้ว' : 'ลบออกจากรายการโปรดแล้ว', 'success');
  }
}

function setFilter(btn, filter) {
  currentFilter = filter;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  renderTemplates();
}

function filterTemplates() {
  searchTerm = document.getElementById('templateSearch').value;
  renderTemplates();
}

function toggleFavorites() {
  favoritesOnly = !favoritesOnly;
  document.getElementById('favBtn').classList.toggle('active', favoritesOnly);
  renderTemplates();
}

// Variable modal functions
let currentTemplateForVar = null;

function showVariableModal(template) {
  currentTemplateForVar = template;
  const modal = document.getElementById('variableModal');
  const form = document.getElementById('variableForm');
  
  form.innerHTML = `
    <h3>กรอกค่าตัวแปรสำหรับ "${template.title}"</h3>
    ${template.variables.map(v => `
      <div style="margin-bottom:12px;">
        <label style="display:block; margin-bottom:4px; font-size:13px; color:var(--fg);">${v.name}</label>
        <input type="text" id="var_${v.name}" placeholder="${v.placeholder || ''}" style="width:100%; padding:8px 12px; border-radius:8px; border:1px solid var(--border); background:var(--bg2); color:var(--fg); font-family:inherit;">
      </div>
    `).join('')}
  `;
  
  modal.classList.add('show');
}

function generatePromptFromVariables() {
  if (!currentTemplateForVar) return;
  
  let prompt = currentTemplateForVar.prompt;
  currentTemplateForVar.variables.forEach(v => {
    const input = document.getElementById(`var_${v.name}`);
    const value = input ? input.value : '';
    prompt = prompt.replace(`[${v.name}]`, value || `[${v.name}]`);
  });
  
  document.getElementById('promptInput').value = prompt;
  if (typeof updateStats === 'function') updateStats();
  closeVariableModal();
  document.querySelector('[data-tab="editor"]').click();
  showToast(`สร้าง Prompt จากเทมเพลต "${currentTemplateForVar.title}" แล้ว`, 'success');
  currentTemplateForVar = null;
}

function closeVariableModal() {
  document.getElementById('variableModal').classList.remove('show');
}

// Template management
function editTemplate(title) {
  const template = templates.find(t => t.title === title);
  if (!template) return;
  
  const newTitle = prompt('แก้ไขชื่อเทมเพลต:', template.title);
  if (newTitle && newTitle !== template.title) {
    template.title = newTitle;
  }
  
  const newDesc = prompt('แก้ไขคำอธิบาย:', template.desc);
  if (newDesc) template.desc = newDesc;
  
  renderTemplates();
  showToast('แก้ไขเทมเพลตแล้ว', 'success');
}

function deleteTemplate(title) {
  if (!confirm(`ต้องการลบเทมเพลต "${title}" หรือไม่?`)) return;
  const index = templates.findIndex(t => t.title === title);
  if (index !== -1) {
    templates.splice(index, 1);
    renderTemplates();
    showToast('ลบเทมเพลตแล้ว', 'success');
  }
}

function addNewTemplate() {
  const title = prompt('ชื่อเทมเพลตใหม่:');
  if (!title) return;
  const desc = prompt('คำอธิบาย:');
  const cat = prompt('หมวดหมู่ (writing/code/image/chat/market/termux/music/video/business):');
  const promptText = prompt('Prompt:');
  
  if (title && cat && promptText) {
    templates.push({
      cat, tag: cat, title, desc: desc || '', prompt: promptText,
      favorite: false, rating: 0, tags: [], variables: []
    });
    renderTemplates();
    showToast('เพิ่มเทมเพลตใหม่แล้ว', 'success');
  }
}

// Prompt Analyzer
function analyzePrompt() {
  const text = document.getElementById('promptInput').value;
  if (!text) {
    showToast('ไม่มีข้อความให้วิเคราะห์', 'error');
    return;
  }
  
  const analysis = {
    length: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
    lines: text.split('\n').length,
    hasVariables: (text.match(/\[.*?\]/g) || []).length,
    clarity: 0,
    suggestions: []
  };
  
  // Simple clarity scoring
  if (analysis.words < 50) analysis.suggestions.push('เพิ่มรายละเอียดให้มากขึ้น (ปัจจุบันมีเพียง ' + analysis.words + ' คำ)');
  if (analysis.hasVariables === 0) analysis.suggestions.push('ลองใช้ตัวแปร [variable] เพื่อให้ prompt ยืดหยุ่นขึ้น');
  if (text.split('.').length < 3) analysis.suggestions.push('แบ่งเป็นประโยคที่ชัดเจนมากขึ้น');
  
  analysis.clarity = Math.min(100, (analysis.words / 10) + (analysis.hasVariables * 20));
  
  const result = `
    ตัวอักษร: ${analysis.length}
    คำ: ${analysis.words}
    บรรทัด: ${analysis.lines}
    ตัวแปร: ${analysis.hasVariables} ตัว
    คะแนนความชัดเจน: ${analysis.clarity.toFixed(1)}/100
    
    ข้อเสนอแนะ:
    ${analysis.suggestions.map(s => '- ' + s).join('\n')}
  `;
  
  alert(result);
}
