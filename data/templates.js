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
    prompt:'คุณเป็นที่ปรึกษาการเงิน จงช่วยวางแผนให้กับผู้ใช้\n\nข้อมูล:\n- รายได้ต่อเดือน: [บาท]\n- ค่าใช้จ่าย: [รายการหลัก]\n- เป้าหมาย: [เป้าหมาย]\n\nให้คำแนะนำ:\n1. วิเคราะห์กระแสเงินสด\n2. สัดส่วนรายได้ที่ควรออม/ใช้\n3. แผนปลดหนี้ (ถ้ามี)\n4. การลงทุนที่เหมาะกับความเสี่ยง\n5. แอป/เครื่องมือช่วย\n\nเป็นกันเอง ไม่ใช้ศัพท์เทคนิคมากเกิน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "รายได้ต่อเดือน", placeholder: "30000 บาท" },
      { name: "เป้าหมาย", placeholder: "ออมเงิน/ปลดหนี้/ลงทุน" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Fitness & Nutrition Coach', desc:'โค้ชออกกำลังกายและโภชนาการ', 
    prompt:'คุณเป็นโค้ชฟิตเนสส่วนตัว จงออกแบบโปรแกรมให้กับผู้ใช้\n\nข้อมูล:\n- อายุ, เพศ, น้ำหนัก, ส่วนสูง\n- เป้าหมาย: [เป้าหมาย]\n- อุปกรณ์ที่มี: [อุปกรณ์]\n- ข้อจำกัด: [ข้อจำกัด]\n\nให้ตอบ:\n1. ตารางออกกำลังกาย 1 สัปดาห์\n2. คำอธิบายท่าแต่ละท่า\n3. แผนอาหารตัวอย่าง 1 วัน\n4. เคล็ดลับสร้างวินัย\n\nใช้ภาษาให้กำลังใจ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "เป้าหมาย", placeholder: "ลดน้ำหนัก/เพิ่มกล้ามเนื้อ" },
      { name: "อุปกรณ์", placeholder: "ดัมเบล/บอดี้เวท/ไม่มี" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Language Exchange Partner', desc:'ฝึกภาษากับ AI แบบ conversation', 
    prompt:'คุณเป็น Language Partner สำหรับฝึกภาษา "[ภาษา]"\n\nระดับผู้เรียน: [ระดับ]\n\nกติกา:\n1. คุณจะพูดภาษาเป้าหมายเป็นหลัก\n2. ถ้าผู้ใช้ผิด ให้แก้ไขอย่างสุภาพ\n3. เสนอคำศัพท์ใหม่ ๆ ในบริบท\n4. เปลี่ยนหัวข้อตามความสนใจ\n5. หากผู้ใช้ขอแปล ให้แปลเป็นภาษาไทย\n\nเริ่มต้น: ทักทาย และถามว่าวันนี้อยากคุยเรื่องอะไร', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ภาษา", placeholder: "อังกฤษ/จีน/ญี่ปุ่น" },
      { name: "ระดับ", placeholder: "เริ่มต้น/กลาง/สูง" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Emotional Support Companion', desc:'เพื่อนคุยซัพพอร์ตอารมณ์ ฟังและให้กำลังใจ', 
    prompt:'คุณเป็นเพื่อนสนิทที่จริงใจและใส่ใจ จงพูดคุยกับผู้ใช้ที่กำลังรู้สึก "[อารมณ์]"\n\nกติกา:\n1. รับฟังโดยไม่ตัดสิน\n2. ถามคำถามเพื่อให้ระบาย\n3. ให้กำลังใจอย่างนุ่มนวล\n4. แนะนำกิจกรรมคลายเครียด\n5. หากผู้ใช้มีอาการหนัก แนะนำให้พบผู้เชี่ยวชาญ\n\nห้ามออกคำสั่งหรือบังคับ ใช้ภาษาแสดงความเข้าใจ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "อารมณ์", placeholder: "เศร้า/เครียด/เหงา" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'Tech Support Bot', desc:'ช่วยแก้ปัญหา IT พื้นฐาน', 
    prompt:'คุณเป็น IT Support จงช่วยผู้ใช้แก้ไขปัญหา "[ปัญหา]"\n\nอุปกรณ์/ระบบ: [อุปกรณ์]\n\nวิธีการ:\n1. ถามอาการเพิ่ม\n2. เสนอแนวทางแก้ไขทีละขั้น\n3. ใช้รูปหรือลิงค์ประกอบ (อธิบาย)\n4. ตรวจสอบว่าสำเร็จหรือไม่\n5. แนะนำวิธีป้องกัน\n\nใช้ภาษาง่าย ไม่ technical เกินไป', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ปัญหา", placeholder: "อินเทอร์เน็ตไม่ทำงาน/คอมพิวเตอร์ช้า" },
      { name: "อุปกรณ์", placeholder: "Windows/Mac/Android" }
    ]
  },
  { 
    cat:'chat', tag:'chat', title:'RPG Game Master', desc:'ดำเนินเกมสวมบทบาทด้วย AI', 
    prompt:'คุณเป็น Game Master สำหรับ RPG แนว "[แนว]"\nโลก: "[ชื่อโลก]"\nผู้เล่น: [จำนวน/คลาส]\n\nกฎ:\n1. อธิบายฉากอย่างมีบรรยากาศ\n2. ให้ทางเลือก 2-3 ทาง\n3. ใช้ลูกเต๋า (d20) เมื่อมีการทดสอบ\n4. สร้าง NPC ที่น่าจดจำ\n5. ควบคุม pacing ให้ตื่นเต้น\n\nเริ่มด้วยการแนะนำโลกและภารกิจแรก', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "แนว", placeholder: "แฟนตาซี/ไซไฟ/สยองขวัญ" },
      { name: "ชื่อโลก", placeholder: "อาณาจักรอาร์เธอร์" }
    ]
  },

  // ===== MARKET (10) - เดิม + เพิ่มตัวแปร =====
  { 
    cat:'market', tag:'market', title:'Marketing Campaign', desc:'วางแผนการตลาดออนไลน์แบบครบวงจร', 
    prompt:'คุณเป็น Marketing Strategist จงวางแผนการตลาดสำหรับ "[สินค้า/บริการ]"\n\nข้อมูลเพิ่มเติม:\n- กลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\n- งบประมาณ: [จำนวน]\n- ระยะเวลาแคมเปญ: [ระยะเวลา]\n- เป้าหมาย: [เป้าหมาย]\n\nให้ตอบตามโครงสร้าง:\n1. กลยุทธ์หลัก\n2. ช่องทางที่ใช้ (Social Media, SEO, Email, ฯลฯ) พร้อมเหตุผล\n3. Content Ideas 5 ข้อ\n4. Timeline การปล่อยคอนเทนต์\n5. วิธีการวัดผล (KPIs)\n6. งบประมาณโดยประมาณแยกตามช่องทาง', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "สินค้า/บริการ", placeholder: "เครื่องดื่มเพื่อสุขภาพ" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น/วัยทำงาน" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'Social Media Calendar', desc:'ปฏิทินคอนเทนต์รายเดือนสำหรับโซเชียลมีเดีย', 
    prompt:'จงออกแบบ Social Media Content Calendar สำหรับแบรนด์ "[ชื่อแบรนด์]" ในเดือน "[เดือน]" แพลตฟอร์ม: [แพลตฟอร์ม]\n\nให้ระบุ:\n- Theme แต่ละสัปดาห์\n- จำนวนโพสต์ต่อวัน\n- ประเภทคอนเทนต์ (ภาพ, วิดีโอ, สตอรี่)\n- Caption ตัวอย่าง 3 อัน\n- Hashtag แนะนำ\n- วัน/เวลาที่โพสต์ดีที่สุด\n\nเขียนเป็นตารางรายวัน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อแบรนด์", placeholder: "แบรนด์เสื้อผ้า" },
      { name: "แพลตฟอร์ม", placeholder: "Facebook, Instagram, TikTok" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'เขียนอีเมลการตลาด', desc:'ร่างอีเมลแคมเปญ EDM สำหรับลูกค้า', 
    prompt:'จงเขียนอีเมลการตลาดสำหรับแคมเปญ "[ชื่อแคมเปญ]"\n\nสินค้า/บริการ: [รายละเอียด]\nกลุ่มลูกค้า: [กลุ่ม]\nวัตถุประสงค์: [วัตถุประสงค์]\n\nรูปแบบ:\n- Subject line (3 แบบ)\n- Preheader\n- เนื้อหาอีเมล (HTML แบบง่าย)\n- ปุ่ม CTA\n- ส่วนลด/ข้อเสนอพิเศษ\n\nใช้น้ำเสียง: [น้ำเสียง]', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อแคมเปญ", placeholder: "โปรโมชั่นปีใหม่" },
      { name: "น้ำเสียง", placeholder: "เป็นกันเอง/หรูหรา/ด่วน" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'วิเคราะห์คู่แข่ง', desc:'วิเคราะห์ SWOT และกลยุทธ์ของคู่แข่ง', 
    prompt:'จงวิเคราะห์คู่แข่งของ "[แบรนด์ของเรา]" ในตลาด "[ตลาด]"\n\nคู่แข่งหลัก 3 ราย:\n1. [ชื่อ]\n2. [ชื่อ]\n3. [ชื่อ]\n\nให้วิเคราะห์:\n- SWOT แต่ละราย\n- ราคา/ช่องทางขาย\n- จุดเด่น/จุดอ่อนเมื่อเทียบกับเรา\n- กลยุทธ์ที่เรา adapt ได้\n\nสรุปเป็นตารางและข้อเสนอแนะ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "แบรนด์ของเรา", placeholder: "แบรนด์ของคุณ" },
      { name: "ตลาด", placeholder: "ตลาดเครื่องสำอาง" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'สร้างแบบสอบถามลูกค้า', desc:'ออกแบบแบบสอบถามเพื่อเก็บข้อมูลลูกค้า', 
    prompt:'จงสร้างแบบสอบถามลูกค้าสำหรับธุรกิจ "[ธุรกิจ]"\n\nวัตถุประสงค์: [วัตถุประสงค์]\nจำนวนข้อ: 10-12 ข้อ\n\nรูปแบบ:\n- คำถามปลายปิด (rating scale)\n- คำถามปลายเปิด\n- Demographic\n- ข้อเสนอแนะ\n\nให้เขียนทั้งคำถาม และตัวเลือกตอบ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ธุรกิจ", placeholder: "ร้านกาแฟ/ร้านเสื้อผ้า" },
      { name: "วัตถุประสงค์", placeholder: "วัดความพึงพอใจ/วิจัยตลาด" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'Advertising Copy', desc:'เขียนข้อความโฆษณาสำหรับ Facebook/Google Ads', 
    prompt:'จงเขียน Advertising Copy สำหรับแพลตฟอร์ม "[แพลตฟอร์ม]" สินค้า "[สินค้า]"\n\nกลุ่มเป้าหมาย: [กลุ่มเป้าหมาย]\nงบประมาณ: [ต่อวัน]\n\nให้สร้าง:\n- Headline 5 แบบ\n- Primary text 2 แบบ\n- Description (ถ้ามี)\n- Call to Action\n- A/B testing idea\n\nใช้หลักการ copywriting เช่น AIDA, PAS', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "แพลตฟอร์ม", placeholder: "Facebook/Google" },
      { name: "สินค้า", placeholder: "อุปกรณ์ออกกำลังกาย" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'ไอเดียโปรโมชั่น', desc:'คิดโปรโมชั่นดึงดูดลูกค้า สำหรับร้านค้า', 
    prompt:'จงเสนอไอเดียโปรโมชั่นสำหรับร้าน "[ประเภทร้าน]" ช่วง "[ช่วงเวลา]"\n\nผลิตภัณฑ์เด่น: [สินค้า]\nกลุ่มลูกค้า: [กลุ่ม]\nงบ: [งบ]\n\nให้ออกแบบ 5 โปรโมชั่น:\n- ชื่อโปร\n- กลไก (ซื้อ 1 แถม 1, ลด %, สะสมแต้ม)\n- ระยะเวลา\n- ช่องทางประชาสัมพันธ์\n- ข้อดี/ข้อเสีย', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ประเภทร้าน", placeholder: "ร้านกาแฟ/ร้านอาหาร" },
      { name: "ช่วงเวลา", placeholder: "เทศกาลปีใหม่/ฤดูร้อน" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'Brand Storytelling', desc:'เล่าเรื่องแบรนด์ให้น่าสนใจ', 
    prompt:'จงเขียน Brand Story สำหรับแบรนด์ "[ชื่อแบรนด์]" ที่ขาย "[สินค้า/บริการ]"\n\nประวัติผู้ก่อตั้ง: [สั้น]\nแรงบันดาลใจ: [เหตุผลที่ก่อตั้ง]\nคุณค่าหลัก: [3 ข้อ]\n\nรูปแบบ:\n1. เรื่องเล่าที่มาของแบรนด์\n2. ปัญหาที่แบรนด์แก้\n3. ความแตกต่างจากตลาด\n4. วิสัยทัศน์\n\nความยาว 300-400 คำ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อแบรนด์", placeholder: "แบรนด์ของคุณ" },
      { name: "สินค้า/บริการ", placeholder: "สินค้าที่ขาย" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'SEO Off-page Strategy', desc:'วางแผน Off-page SEO เพื่อเพิ่ม authority', 
    prompt:'จงวางแผน Off-page SEO ให้เว็บ "[URL เว็บ]" ในธุรกิจ "[ประเภทธุรกิจ]"\n\nปัจจุบัน: [DA/PA ถ้ามี]\nเป้าหมาย: [เป้าหมาย]\n\nกลยุทธ์:\n- Link building (guest post, directory, broken link)\n- Social signals\n- Influencer outreach\n- Content promotion\n\nให้ทำ action plan 1 เดือน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "URL เว็บ", placeholder: "https://example.com" },
      { name: "ประเภทธุรกิจ", placeholder: "E-commerce/บริการ" }
    ]
  },
  { 
    cat:'market', tag:'market', title:'สร้าง Lead Magnet', desc:'ออกแบบของแจกเพื่อเก็บอีเมลลูกค้า', 
    prompt:'จงออกแบบ Lead Magnet สำหรับธุรกิจ "[ธุรกิจ]" กลุ่มเป้าหมาย "[กลุ่ม]"\n\nวัตถุประสงค์: เก็บอีเมล\n\nให้เสนอ 3 ไอเดีย:\n1. ชื่อ Lead Magnet\n2. รูปแบบ (ebook, checklist, webinar, template)\n3. เนื้อหาคร่าวๆ\n4. Landing page headline\n5. วิธีการโปรโมท\n\nอธิบายว่าแต่ละอันเหมาะกับกลุ่มเป้าหมายอย่างไร', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ธุรกิจ", placeholder: "ร้านกาแฟ/ออนไลน์" },
      { name: "กลุ่ม", placeholder: "วัยรุ่น/วัยทำงาน" }
    ]
  },

  // ===== TERMUX (10) - เดิม + เพิ่มตัวแปร =====
  { 
    cat:'termux', tag:'termux', title:'Termux Automation', desc:'เขียนสคริปต์อัตโนมัติสำหรับ Termux', 
    prompt:'จงเขียน Bash script สำหรับ Termux ที่ทำงานดังนี้:\n[งานที่ต้องการ]\n\nข้อกำหนด:\n- ใช้เฉพาะคำสั่งที่มีใน Termux โดยไม่ต้องติดตั้งแพ็กเกจเพิ่มเติม (ยกเว้นระบุ)\n- มีการตรวจสอบข้อผิดพลาด\n- มีการแจ้งเตือนเมื่อทำงานเสร็จ\n- สามารถรันซ้ำได้โดยไม่เกิดปัญหา\n\nให้ตอบเป็นโค้ด Bash พร้อมคำอธิบายแต่ละส่วน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "งานที่ต้องการ", placeholder: "backup ไฟล์/ส่งข้อความ" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'Termux Hacking Tools', desc:'สคริปต์ติดตั้งเครื่องมือ security testing บน Termux', 
    prompt:'จงเขียนสคริปต์ติดตั้งเครื่องมือสำหรับ Security Testing บน Termux โดยมีรายละเอียด:\n\nเครื่องมือที่ต้องการ:\n- Nmap\n- Hydra\n- SQLmap\n- Metasploit (ถ้าเป็นไปได้)\n- Nikto\n\nให้สคริปต์:\n1. อัปเดตแพ็กเกจ\n2. ติดตั้ง dependencies ที่จำเป็น\n3. ติดตั้งเครื่องมือทีละตัว\n4. ตรวจสอบว่าติดตั้งสำเร็จหรือไม่\n5. แสดงวิธีใช้งานเบื้องต้น\n\nคำเตือน: ใช้เพื่อการศึกษาหรือระบบที่ได้รับอนุญาตเท่านั้น', 
    favorite: false, rating: 0, tags: [], variables: []
  },
  { 
    cat:'termux', tag:'termux', title:'ติดตั้ง Web Server', desc:'สคริปต์ติดตั้ง Apache/Nginx บน Termux', 
    prompt:'จงเขียนสคริปต์ติดตั้ง Web Server บน Termux (เลือก Apache หรือ Nginx)\n\nให้ทำ:\n1. อัปเดต repo\n2. ติดตั้ง package\n3. สร้าง virtual host\n4. ตั้งค่า permissions\n5. สร้างหน้า index.html ทดสอบ\n6. ตรวจสอบว่า server ทำงาน\n7. แสดงวิธีเข้าใช้งานจาก browser', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "Apache หรือ Nginx", placeholder: "Apache/Nginx" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'สร้าง Telegram Bot ด้วย Python', desc:'ติดตั้ง python-telegram-bot และรันบอทเบื้องต้น', 
    prompt:'จงเขียนสคริปต์ Termux เพื่อ:\n1. ติดตั้ง python\n2. ติดตั้ง python-telegram-bot\n3. เขียนโค้ดบอทที่ตอบกลับข้อความ "สวัสดี" และ "/help"\n4. ให้ใส่ token ในตัวแปร environment\n5. วิธีรันบอทใน background\n\nอธิบายการขอ token จาก BotFather', 
    favorite: false, rating: 0, tags: [], variables: []
  },
  { 
    cat:'termux', tag:'termux', title:'สำรองข้อมูลอัตโนมัติ', desc:'สคริปต์ backup โฟลเดอร์ไปยังที่เก็บข้อมูลอื่น', 
    prompt:'จงเขียนสคริปต์สำรองข้อมูลใน Termux ให้:\n- เลือกโฟลเดอร์ต้นทาง (ระบุ)\n- ปลายทาง: /sdcard/backup\n- ตั้งชื่อไฟล์ด้วยวันที่\n- บีบอัดเป็น .tar.gz\n- ลบไฟล์เก่ากว่า 7 วัน\n- แจ้งเตือนเมื่อเสร็จ\n\nใช้คำสั่งที่มีอยู่แล้ว', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "โฟลเดอร์ต้นทาง", placeholder: "/data/data/com.termux/files/home" }
    ]
  },
  { 
    cat:'termux', tag:'termux', title:'ใช้งาน GitHub CLI', desc:'ติดตั้งและใช้งาน gh ใน Termux', 
    prompt:'จงเขียนสคริปต์ติดตั้ง GitHub CLI (gh) บน Termux และ:\n1. ตรวจสอบการติดตั้ง\n2. แนะนำวิธี login\n3. สร้าง repo ใหม่\n4. โคลน repo ที่มีอยู่\n5. push โค้ด\n6. สร้าง issue\n\nให้สคริปต์ทำงานอัตโนมัติทีละขั้น', 
    favorite: false, rating: 0, tags: [], variables: []
  },
  { 
    cat:'termux', tag:'termux', title:'แปลงไฟล์มีเดีย', desc:'ใช้ ffmpeg แปลงไฟล์เสียง/วิดีโอ', 
    prompt:'จงเขียนสคริปต์ Termux สำหรับแปลงไฟล์มีเดียด้วย ffmpeg\n\nติดตั้ง ffmpeg ก่อน\n\nให้ทำ:\n1. เลือกไฟล์ input\n2. เลือก format output\n3. ปรับ bitrate/resolution\n4. แสดง progress\n5. ตรวจสอบไฟล์ output\n\nเขียนแบบ interactive (ถามผู้ใช้)', 
    favorite: false, rating: 0, tags: [], variables: []
  },
  { 
    cat:'termux', tag:'termux', title:'ตั้งค่า SSH Server', desc:'สคริปต์เปิด SSH server บน Termux', 
    prompt:'จงเขียนสคริปต์สำหรับ Termux เพื่อ:\n- ติดตั้ง openssh\n- ตั้งรหัสผ่าน\n- เปิด sshd\n- แสดง IP และพอร์ต\n- คำแนะนำการเชื่อมต่อจากเครื่องอื่น\n- วิธีปิดเซิร์ฟเวอร์\n\nใส่ความปลอดภัยพื้นฐาน (เปลี่ยนพอร์ต, ปิด root login)', 
    favorite: false, rating: 0, tags: [], variables: []
  },
  { 
    cat:'termux', tag:'termux', title:'แจ้งเตือนแบตเตอรี่', desc:'สคริปต์ตรวจสอบแบตเตอรี่และแจ้งเตือน', 
    prompt:'จงเขียนสคริปต์ Termux ที่:\n- อ่านระดับแบตเตอรี่ทุก 5 นาที\n- หากต่ำกว่า 20% ส่ง notification (termux-notification)\n- หากชาร์จเต็ม 100% ก็แจ้งเตือน\n- ทำงานเป็น background service\n\nใช้คำสั่ง termux-api', 
    favorite: false, rating: 0, tags: [], variables: []
  },
  { 
    cat:'termux', tag:'termux', title:'รัน Jupyter Notebook', desc:'ติดตั้งและรัน Jupyter Notebook บน Termux', 
    prompt:'จงเขียนสคริปต์ Termux สำหรับติดตั้ง Jupyter Notebook:\n1. ติดตั้ง python, pip\n2. ลง jupyter\n3. สร้าง directory workspace\n4. รัน notebook server\n5. วิธีเข้าใช้งานจาก browser บนมือถือ\n6. ติดตั้ง kernel เพิ่ม (เช่น bash)\n\nมีคำอธิบายทุกขั้น', 
    favorite: false, rating: 0, tags: [], variables: []
  },

  // ===== MUSIC (10) - ใหม่ =====
  { 
    cat:'music', tag:'music', title:'Lyric Writer', desc:'เขียนเนื้อเพลงแนวป๊อป/ร็อค', 
    prompt:'จงเขียนเนื้อเพลงแนว [แนว] เรื่อง [เรื่อง] ความยาว 3 นาที\n\nโครงสร้าง:\n- Verse 1\n- Chorus\n- Verse 2\n- Chorus\n- Bridge\n- Chorus\n\nให้มีสัมผัสและจังหวะที่ดี', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "แนว", placeholder: "ป๊อป/ร็อค/ลูกทุ่ง" },
      { name: "เรื่อง", placeholder: "ความรัก/กำลังใจ" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Suno Prompt', desc:'สร้าง prompt สำหรับ Suno AI', 
    prompt:'จงสร้าง Suno AI prompt สำหรับเพลง "[ชื่อเพลง]" แนว [แนว]\n\nให้ระบุ:\n- Genre: [genre]\n- Mood: [mood]\n- Tempo: [BPM]\n- Instruments: [instruments]\n- Lyrics style: [style]\n\nเขียนเป็น prompt ภาษาอังกฤษ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อเพลง", placeholder: "ความทรงจำ" },
      { name: "แนว", placeholder: "Pop/Rock/EDM" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Music Production Plan', desc:'วางแผนผลิตเพลง', 
    prompt:'จงวางแผนผลิตเพลง "[ชื่อเพลง]" สำหรับศิลปิน "[ชื่อศิลปิน]"\n\nขั้นตอน:\n1. แต่งเนื้อ/ทำนอง\n2. บันทึกเสียง\n3. Mixing\n4. Mastering\n5. ส่งออกไฟล์\n\nให้ระบุอุปกรณ์และซอฟต์แวร์ที่แนะนำ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อเพลง", placeholder: "เพลงใหม่" },
      { name: "ชื่อศิลปิน", placeholder: "ชื่อศิลปิน" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Chord Progression', desc:'สร้างชุดคอร์ดเพลง', 
    prompt:'จงสร้างชุดคอร์ดสำหรับเพลงแนว [แนว] อารมณ์ [อารมณ์]\n\nให้ระบุ:\n- คอร์ดหลัก (I, IV, V, vi)\n- เรียงลำดับคอร์ด\n- ตัวอย่าง旋律 (melody)\n- ความยาว 4-8 ห้อง', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "แนว", placeholder: "ป๊อป/แจ๊ส" },
      { name: "อารมณ์", placeholder: "เศร้า/สนุก" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Rap Lyrics', desc:'เขียนเนื้อแรปแนว [แนว]', 
    prompt:'จงเขียนเนื้อแรปเรื่อง "[เรื่อง]" แนว [แนว]\n\nให้มี:\n- Flow ที่ชัดเจน\n- Rhyme scheme\n- Punchlines\n- 3 verses + Chorus', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "เรื่อง", placeholder: "ชีวิตในเมือง" },
      { name: "แนว", placeholder: "Trap/Boombap" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Soundtrack Composer', desc:'แต่งเพลงประกอบภาพยนตร์', 
    prompt:'จงแต่งเพลงประกอบฉาก "[ฉาก]" อารมณ์ [อารมณ์]\n\nให้ระบุ:\n- เครื่องดนตรีที่ใช้\n- ช่วงเสียง (key)\n- ความยาว\n- จังหวะ (tempo)\n\nเขียนคำอธิบายโครงสร้างเพลง', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ฉาก", placeholder: "ฉากต่อสู้/ฉากรัก" },
      { name: "อารมณ์", placeholder: "ตื่นเต้น/ซาบซึ้ง" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Jingle Creator', desc:'สร้างจิงเกิลโฆษณา 30 วิ', 
    prompt:'จงสร้างจิงเกิล 30 วิ สำหรับแบรนด์ "[ชื่อแบรนด์]" สินค้า "[สินค้า]"\n\nให้มี:\n- ท่อนที่ติดหู (hook)\n- ข้อความสินค้า\n- ทำนองที่จดจำง่าย\n- เรียบเรียงอย่างง่าย', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อแบรนด์", placeholder: "แบรนด์ของคุณ" },
      { name: "สินค้า", placeholder: "เครื่องดื่ม/อาหาร" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Vocal Tuning Guide', desc:'แนะนำการปรับแต่งเสียงร้อง', 
    prompt:'จงแนะนำการปรับแต่งเสียงร้องสำหรับเพลง "[ชื่อเพลง]" ด้วยซอฟต์แวร์ [ซอฟต์แวร์]\n\nขั้นตอน:\n1. เตรียมเสียง\n2. Pitch correction\n3. Time correction\n4. Effects (reverb, delay)\n5. Final mix', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อเพลง", placeholder: "เพลงของคุณ" },
      { name: "ซอฟต์แวร์", placeholder: "Auto-Tune/Melodyne" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Music Theory Tutor', desc:'สอนทฤษฎีดนตรีพื้นฐาน', 
    prompt:'คุณเป็นครูสอนดนตรี จงสอนหัวข้อ "[หัวข้อ]" ระดับ [ระดับ]\n\nเนื้อหา:\n- ทฤษฎีพื้นฐาน\n- ตัวอย่างบนคีย์บอร์ด/กีตาร์\n- แบบฝึกหัด\n- เคล็ดลับการจำ\n\nใช้ภาษาง่าย เข้าใจง่าย', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "หัวข้อ", placeholder: "คอร์ด/สเกล" },
      { name: "ระดับ", placeholder: "เริ่มต้น/กลาง" }
    ]
  },
  { 
    cat:'music', tag:'music', title:'Playlist Curator', desc:'สร้างเพลย์ลิสต์เพลงตามอารมณ์', 
    prompt:'จงสร้างเพลย์ลิสต์ "[ชื่อเพลย์ลิสต์]" สำหรับอารมณ์ "[อารมณ์]" แนว [แนว]\n\nให้มี:\n- 10 เพลงแนะนำ\n- ทำไมถึงเลือกเพลงเหล่านี้\n- ลำดับการฟัง\n- คำอธิบายสั้นๆ ต่อเพลง', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อเพลย์ลิสต์", placeholder: "เพลย์ลิสต์ออกกำลังกาย" },
      { name: "อารมณ์", placeholder: "กระปรี้กระเปร่า/ผ่อนคลาย" }
    ]
  },

  // ===== VIDEO (10) - ใหม่ =====
  { 
    cat:'video', tag:'video', title:'Short Video Script', desc:'สคริปต์วิดีโอสั้น 60 วิ', 
    prompt:'จงเขียนสคริปต์วิดีโอ TikTok/Shorts เรื่อง "[หัวข้อ]" แนว [แนว]\n\nโครงสร้าง:\n- Hook (0-3 วิ)\n- Content (4-50 วิ)\n- CTA (51-60 วิ)\n\nให้มีคำพูดและคำอธิบายภาพ (visual)', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "หัวข้อ", placeholder: "เทรนด์ปัจจุบัน" },
      { name: "แนว", placeholder: "ตลก/เรียนรู้/ไลฟ์สไตล์" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Sora Prompt', desc:'สร้าง prompt สำหรับ Sora (OpenAI)', 
    prompt:'จงสร้าง Sora prompt สำหรับวิดีโอ "[คำอธิบายวิดีโอ]" ความยาว [ความยาว]\n\nให้ระบุ:\n- Subject หลัก\n- Motion/Action\n- Camera angle\n- Lighting\n- Style (realistic/animation)\n- Aspect ratio\n\nเขียนเป็น prompt ภาษาอังกฤษ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "คำอธิบายวิดีโอ", placeholder: "แมวเล่นกับลูกบอล" },
      { name: "ความยาว", placeholder: "5 วินาที/10 วินาที" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Video Editing Plan', desc:'วางแผนตัดต่อวิดีโอ', 
    prompt:'จงวางแผนตัดต่อวิดีโอ "[ชื่อวิดีโอ]" ความยาว [ความยาว]\n\nขั้นตอน:\n1. เลือกคลิป\n2. ตัดต่อลำดับ\n3. เพิ่ม effect/transition\n4. ใส่เสียง/เพลง\n5. Color grading\n6. Export\n\nให้ระบุซอฟต์แวร์ที่แนะนำ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อวิดีโอ", placeholder: "วิดีโอของคุณ" },
      { name: "ความยาว", placeholder: "5 นาที/10 นาที" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'YouTube Thumbnail', desc:'ออกแบบรูป Thumbnail สำหรับ YouTube', 
    prompt:'จงออกแบบ Thumbnail สำหรับวิดีโอ "[หัวข้อ]" แนว [แนว]\n\nให้มี:\n- ภาพหลัก (main image)\n- ข้อความ (text)\n- สีที่ดึงดูด\n- Layout ที่อ่านง่าย\n\nสร้าง prompt สำหรับ AI วาดภาพ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "หัวข้อ", placeholder: "หัวข้อวิดีโอ" },
      { name: "แนว", placeholder: "สอนทำ/รีวิว" }
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
    cat:'video', tag:'video', title:'Commercial Ad Script', desc:'สคริปต์โฆษณาทางโทรทัศน์ 30 วิ', 
    prompt:'จงเขียนสคริปต์โฆษณา 30 วิ สำหรับสินค้า "[สินค้า]" แนว [แนว]\n\nให้มี:\n- Hook (0-5 วิ)\n- Product showcase (6-25 วิ)\n- Offer/CTA (26-30 วิ)\n\nระบุคำพูด นักแสดง และภาพ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "สินค้า", placeholder: "สมาร์ทโฟน/รถยนต์" },
      { name: "แนว", placeholder: "ดรามา/ตลก" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Live Stream Plan', desc:'วางแผนสตรีมมิ่งสด', 
    prompt:'จงวางแผนสตรีมมิ่งสด "[หัวข้อ]" บนแพลตฟอร์ม [แพลตฟอร์ม]\n\nแผน:\n- หัวข้อที่จะคุย\n- ช่วงโต้ตอบกับผู้ชม\n- ของรางวัล (giveaway)\n- Technical setup (กล้อง, ไมค์)\n- Promotion ก่อนสตรีม', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "หัวข้อ", placeholder: "สอนเขียนโปรแกรม" },
      { name: "แพลตฟอร์ม", placeholder: "Facebook/TikTok/YouTube" }
    ]
  },
  { 
    cat:'video', tag:'video', title:'Animation Storyboard', desc:'วาดสตอรี่บอร์ดสำหรับแอนิเมชั่น', 
    prompt:'จงวาดสตอรี่บอร์ดสำหรับแอนิเมชั่นเรื่อง "[เรื่อง]" ความยาว [ความยาว]\n\nให้มี:\n- ภาพสเก็ตช์แต่ละฉาก\n- คำอธิบายการเคลื่อนไหว\n- เสียง/ดนตรีประกอบ\n- หมายเลขฉาก/ช็อต\n\nเขียนคำอธิบายละเอียด', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "เรื่อง", placeholder: "เทพนิยายใหม่" },
      { name: "ความยาว", placeholder: "5 นาที/10 นาที" }
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
    prompt:'จงร่างแผนธุรกิจ "[ประเภทธุรกิจ]" สำหรับ [ระยะเวลา]\n\nโครงสร้าง:\n1. Executive Summary\n2. Company Description\n3. Market Analysis\n4. Products/Services\n5. Marketing Strategy\n6. Financial Plan\n\nความยาว 500-800 คำ', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ประเภทธุรกิจ", placeholder: "ร้านกาแฟ/ออนไลน์" },
      { name: "ระยะเวลา", placeholder: "1 ปี/3 ปี" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Pitch Deck', desc:'สร้างสไลด์นำเสนอขอเงินทุน', 
    prompt:'จงสร้าง Pitch Deck สำหรับธุรกิจ "[ชื่อธุรกิจ]" จำนวน 10 สไลด์\n\nสไลด์:\n1. Title Slide\n2. Problem\n3. Solution\n4. Market Size\n5. Product\n6. Business Model\n7. Team\n8. Financials\n9. Competition\n10. Ask\n\nให้มีคำอธิบายสั้นๆ ต่อสไลด์', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อธุรกิจ", placeholder: "แบรนด์ของคุณ" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'SWOT Analysis', desc:'วิเคราะห์ SWOT บริษัทของคุณ', 
    prompt:'จงวิเคราะห์ SWOT สำหรับบริษัท "[ชื่อบริษัท]" ในอุตสาหกรรม "[อุตสาหกรรม]"\n\nวิเคราะห์:\n- Strengths (จุดแข็ง)\n- Weaknesses (จุดอ่อน)\n- Opportunities (โอกาส)\n- Threats (อุปสรรค)\n\nให้คำแนะนำเชิงกลยุทธ์', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อบริษัท", placeholder: "บริษัทของคุณ" },
      { name: "อุตสาหกรรม", placeholder: "เทคโนโลยี/อาหาร" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Pricing Strategy', desc:'ตั้งราคาสินค้า/บริการ', 
    prompt:'จงแนะนำกลยุทธ์การตั้งราคาสำหรับ "[สินค้า/บริการ]" กลุ่มเป้าหมาย "[กลุ่มเป้าหมาย]"\n\nแนะนำ:\n- Cost-plus pricing\n- Value-based pricing\n- Competitive pricing\n- ราคาที่แนะนำ\n- โปรโมชั่นจูงใจ\n\nวิเคราะห์จุดคุ้มทุน (break-even)', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "สินค้า/บริการ", placeholder: "สินค้าของคุณ" },
      { name: "กลุ่มเป้าหมาย", placeholder: "วัยรุ่น/วัยทำงาน" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Meeting Agenda', desc:'สร้างวาระการประชุม', 
    prompt:'จงสร้างวาระการประชุม "[หัวข้อประชุม]" สำหรับ [ประเภทประชุม] ระยะเวลา [เวลา]\n\nวาระ:\n1. เปิดประชุม\n2. เรื่องเก่า (จากการประชุมก่อน)\n3. เรื่องใหม่ (3-5 เรื่อง)\n4. ปัญหาและอุปสรรค\n5. มติที่ประชุม\n6. ปิดประชุม\n\nให้ระบุเวลาต่อเรื่อง', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "หัวข้อประชุม", placeholder: "ประชุมตรวจงานรายเดือน" },
      { name: "ประเภทประชุม", placeholder: "ทีมขาย/ทีมพัฒนา" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Customer Persona', desc:'สร้างบุคลิกภาพลูกค้า', 
    prompt:'จงสร้าง Customer Persona สำหรับธุรกิจ "[ธุรกิจ]" จำนวน 3 คน\n\nแต่ละคนต้องมี:\n- ชื่อ, อายุ, อาชีพ\n- ความต้องการ (needs)\n- ความเจ็บปวด (pain points)\n- พฤติกรรมการซื้อ\n- แชannels ที่ใช้\n\nให้เขียนอย่างละเอียด', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ธุรกิจ", placeholder: "ร้านกาแฟ/ออนไลน์" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Financial Projection', desc:'คาดการณ์การเงิน 3 ปี', 
    prompt:'จงสร้างคาดการณ์การเงินสำหรับธุรกิจ "[ธุรกิจ]" ระยะเวลา 3 ปี\n\nรายงาน:\n- Revenue projection\n- Cost projection\n- Profit & Loss\n- Cash flow\n- Break-even analysis\n\nให้เป็นตารางและกราฟ (อธิบาย)', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ธุรกิจ", placeholder: "ธุรกิจของคุณ" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'HR Policy', desc:'ร่างนโยบายทรัพยากรบุคคล', 
    prompt:'จงร่างนโยบาย HR สำหรับบริษัท "[ชื่อบริษัท]" จำนวนพนักงาน [จำนวนคน]\n\nนโยบาย:\n- การทำงาน (เวลา, remote)\n- ค่าตอบแทนและสวัสดิการ\n- การลา\n- วินัย\n- การอบรมพัฒนา\n\nให้ครอบคลุมตามกฎหมายแรงงาน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อบริษัท", placeholder: "บริษัทของคุณ" },
      { name: "จำนวนคน", placeholder: "10-50 คน" }
    ]
  },
  { 
    cat:'business', tag:'business', title:'Partnership Proposal', desc:'ร่างข้อเสนอความร่วมมือ', 
    prompt:'จงเขียนข้อเสนอความร่วมมือกับ "[ชื่อบริษัท]" สำหรับโปรเจกต์ "[ชื่อโปรเจกต์]"\n\nเนื้อหา:\n- วัตถุประสงค์ความร่วมมือ\n- สิ่งที่แต่ละฝ่ายจะได้รับ\n- ระยะเวลาและขั้นตอน\n- งบประมาณ\n- การแบ่งผลกำไร\n- ข้อตกลงทางกฎหมาย\n\nให้เป็นทางการและชัดเจน', 
    favorite: false, rating: 0, tags: [], variables: [
      { name: "ชื่อบริษัท", placeholder: "บริษัทที่จะร่วมมือ" },
      { name: "ชื่อโปรเจกต์", placeholder: "โปรเจกต์ใหม่" }
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
