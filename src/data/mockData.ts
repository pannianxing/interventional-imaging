import type { TechArticle, CaseItem, Equipment, Expert, ExpertArticle, WechatAccount, WechatArticle } from '../types';

export const techArticles: TechArticle[] = [
  {
    id: 'tech-001',
    title: 'DSA数字减影血管造影技术原理与临床应用',
    category: '基础技术',
    summary: '深入解析DSA技术的成像原理、减影算法及其在心血管、神经介入等领域的临床应用价值。',
    content: `## DSA技术概述\n\n数字减影血管造影（Digital Subtraction Angiography, DSA）是一种通过计算机处理数字化的影像信息，消除骨骼和软组织影像，使血管清晰显影的成像技术。\n\n### 技术原理\n\nDSA的基本原理是将注入造影剂前后拍摄的两帧X线图像经数字化输入图像计算机，通过减影、增强和再成像过程来获得清晰的纯血管影像。\n\n### 临床应用\n\n1. **心血管介入**：冠状动脉造影、支架植入术\n2. **神经介入**：脑血管造影、动脉瘤栓塞\n3. **外周血管**：下肢动脉造影、溶栓治疗\n4. **肿瘤介入**：TACE、消融治疗`,
    author: '李明教授',
    publishDate: '2024-06-15',
    views: 12580,
    tags: ['DSA', '血管造影', '介入放射学'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20imaging%20DSA%20digital%20subtraction%20angiography%20screen%20display%20blood%20vessels%20professional%20hospital%20equipment&image_size=landscape_16_9'
  },
  {
    id: 'tech-002',
    title: '三维旋转血管造影(3D-RA)技术进展',
    category: '高级技术',
    summary: '三维旋转血管造影技术的最新进展，包括高分辨率成像、快速重建、四维血流分析等前沿技术。',
    content: `## 三维旋转血管造影技术\n\n三维旋转血管造影（3D Rotational Angiography, 3D-RA）是近年来介入放射学领域的重要技术突破。\n\n### 技术优势\n\n- 提供三维立体血管结构显示\n- 可进行任意角度重建观察\n- 支持血管径线精确测量\n- 辅助介入治疗方案规划\n\n### 临床应用场景\n\n1. 颅内动脉瘤诊断与治疗规划\n2. 脑血管畸形评估\n3. 颈动脉狭窄测量\n4. 主动脉夹层评估`,
    author: '王芳主任医师',
    publishDate: '2024-06-10',
    views: 8932,
    tags: ['3D-RA', '三维成像', '神经介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D%20rotational%20angiography%20medical%20imaging%20three%20dimensional%20blood%20vessel%20reconstruction%20hospital%20technology&image_size=landscape_16_9'
  },
  {
    id: 'tech-003',
    title: '平板探测器DSA系统技术特点解析',
    category: '设备技术',
    summary: '详细介绍平板探测器技术在DSA系统中的应用优势，包括图像质量、剂量控制、操作效率等方面。',
    content: `## 平板探测器技术\n\n平板探测器（Flat Panel Detector, FPD）技术的出现是DSA发展史上的重要里程碑。\n\n### 技术特点\n\n- 更高的空间分辨率\n- 更宽的动态范围\n- 更快的成像速度\n- 更低的辐射剂量\n\n### 临床价值\n\n平板探测器DSA系统显著提升了介入手术的精准度和安全性，已成为现代介入手术室的标准配置。`,
    author: '张伟工程师',
    publishDate: '2024-06-05',
    views: 6721,
    tags: ['平板探测器', 'FPD', '影像设备'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flat%20panel%20detector%20DSA%20system%20medical%20equipment%20interventional%20radiology%20room%20modern%20hospital&image_size=landscape_16_9'
  },
  {
    id: 'tech-004',
    title: '路图技术(Roadmap)在介入手术中的应用',
    category: '操作技术',
    summary: '路图技术的原理、操作方法及其在复杂血管介入手术中的导航价值和临床技巧。',
    content: `## 路图技术\n\n路图（Roadmap）技术是DSA系统提供的一种实时导航功能，可将血管造影图像叠加在实时透视图像上。\n\n### 操作方法\n\n1. 先注射少量造影剂获得血管影像\n2. 系统将该影像作为"路图"保存\n3. 实时透视图像与路图叠加显示\n4. 指导导管导丝沿血管路径前进\n\n### 临床价值\n\n- 减少造影剂用量\n- 缩短手术时间\n- 提高操作精准度\n- 降低医生和患者辐射剂量`,
    author: '陈杰医师',
    publishDate: '2024-05-28',
    views: 5438,
    tags: ['路图', 'Roadmap', '介入操作'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interventional%20radiology%20roadmap%20technique%20catheter%20guidance%20blood%20vessel%20navigation%20medical%20imaging&image_size=landscape_16_9'
  },
  {
    id: 'tech-005',
    title: '低剂量DSA技术：图像质量与辐射安全的平衡',
    category: '安全技术',
    summary: '探讨如何在保证诊断图像质量的前提下，通过技术优化降低患者和术者的辐射暴露剂量。',
    content: `## 低剂量DSA技术\n\n随着介入手术量的增加，辐射安全问题日益受到重视。低剂量DSA技术成为行业发展趋势。\n\n### 降低辐射的技术手段\n\n- 脉冲透视技术\n- 空间滤过优化\n- 自动亮度控制\n- 迭代重建算法\n- 低剂量DSA协议\n\n### 临床实践建议\n\n1. 遵循ALARA原则\n2. 合理使用防护设备\n3. 优化造影采集方案\n4. 定期进行剂量监测`,
    author: '刘静副主任医师',
    publishDate: '2024-05-20',
    views: 4219,
    tags: ['低剂量', '辐射安全', 'ALARA'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=low%20dose%20medical%20imaging%20radiation%20safety%20protection%20interventional%20radiology%20quality%20balance&image_size=landscape_16_9'
  },
  {
    id: 'tech-006',
    title: 'DSA图像后处理技术与临床应用',
    category: '影像后处理',
    summary: 'DSA图像后处理的主要技术方法，包括血管三维重建、定量分析、功能评估等。',
    content: `## DSA图像后处理技术\n\n现代DSA系统提供了丰富的图像后处理功能，可对采集的影像数据进行深入分析。\n\n### 常用后处理技术\n\n- 多平面重建（MPR）\n- 最大密度投影（MIP）\n- 容积再现（VR）\n- 血管拉直重建\n- 狭窄程度定量分析\n\n### 临床应用价值\n\n图像后处理技术帮助医生更全面地评估病变情况，制定更精准的治疗方案。`,
    author: '赵宏教授',
    publishDate: '2024-05-15',
    views: 3876,
    tags: ['图像后处理', '三维重建', '定量分析'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20image%20post%20processing%203D%20reconstruction%20blood%20vessels%20analysis%20software%20radiology&image_size=landscape_16_9'
  },
  {
    id: 'tech-007',
    title: '冠状动脉造影技术：投照体位选择与操作技巧',
    category: '心血管介入',
    summary: '冠脉造影中常用投照体位的选择原则、操作技巧及不同病变部位的最佳显露体位。',
    content: `## 冠状动脉造影概述\n\n冠状动脉造影是诊断冠心病的"金标准"，通过将造影导管送入冠状动脉开口，注射造影剂使冠脉显影。\n\n### 常用投照体位\n\n**左冠状动脉造影**\n- 左前斜位（LAO）：观察左主干、前降支和回旋支开口\n- 右前斜位（RAO）：观察前降支中段和远段\n- 头位（Cranial）：观察前降支开口和近段\n- 足位（Caudal）：观察回旋支和左主干分叉\n\n**右冠状动脉造影**\n- 左前斜位：显示右冠脉全程\n- 右前斜位+头位：观察右冠脉远端和后降支\n\n### 操作技巧\n\n1. 导管选择与操作\n2. 造影剂注射技巧\n3. 图像采集时机\n4. 压力监测要点`,
    author: '李强主任医师',
    publishDate: '2024-06-18',
    views: 9876,
    tags: ['冠脉造影', '投照体位', '心血管介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coronary%20angiography%20cardiac%20catheterization%20X-ray%20imaging%20heart%20vessels%20cath%20lab&image_size=landscape_16_9'
  },
  {
    id: 'tech-008',
    title: '颅内动脉瘤栓塞技术：弹簧圈选择与操作要点',
    category: '神经介入',
    summary: '颅内动脉瘤弹簧圈栓塞治疗的技术要点，包括弹簧圈选择、栓塞策略及并发症防治。',
    content: `## 颅内动脉瘤栓塞概述\n\n颅内动脉瘤弹簧圈栓塞术是神经介入的核心技术之一，通过微导管将弹簧圈送入动脉瘤腔内，促进血栓形成，闭塞动脉瘤。\n\n### 弹簧圈选择原则\n\n**根据动脉瘤大小选择**\n- 大动脉瘤（>15mm）：选择大直径、柔软的弹簧圈成篮\n- 中动脉瘤（5-15mm）：标准直径弹簧圈\n- 小动脉瘤（<5mm）：选择小直径、柔软弹簧圈\n\n**弹簧圈类型**\n- 三维弹簧圈：用于成篮阶段\n- 二维弹簧圈：用于填充阶段\n- 收尾弹簧圈：用于最后填塞\n\n### 操作要点\n\n1. 微导管塑形与到位\n2. 首枚弹簧圈成篮技术\n3. 填塞密度控制\n4. 术中影像评估`,
    author: '刘海峰教授',
    publishDate: '2024-06-16',
    views: 8765,
    tags: ['神经介入', '动脉瘤', '弹簧圈'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cerebral%20aneurysm%20coiling%20neurointerventional%20radiology%20brain%20blood%20vessels%20treatment&image_size=landscape_16_9'
  },
  {
    id: 'tech-009',
    title: 'TACE操作技术：超选择插管与化疗栓塞策略',
    category: '肿瘤介入',
    summary: '经动脉化疗栓塞术（TACE）的操作技术要点，包括超选择插管技巧和栓塞策略选择。',
    content: `## TACE技术概述\n\n经动脉化疗栓塞术（Transarterial Chemoembolization, TACE）是中晚期肝癌的重要治疗手段。\n\n### 操作步骤\n\n**1. 血管入路建立**\n- 股动脉穿刺最常用\n- 也可选择桡动脉入路\n\n**2. 腹腔干与肝动脉造影**\n- 了解肝脏血供解剖\n- 评估肿瘤供血情况\n- 识别异位供血动脉\n\n**3. 超选择插管**\n- 微导管技术\n- 节段性/亚段性栓塞\n- 保护正常肝组织\n\n### 栓塞材料选择\n\n- 碘化油：化疗药物载体\n- 载药微球：缓释化疗药物\n- 明胶海绵颗粒：近端栓塞\n- PVA颗粒：永久栓塞`,
    author: '陈晓明教授',
    publishDate: '2024-06-14',
    views: 7654,
    tags: ['TACE', '肿瘤介入', '肝癌'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TACE%20liver%20cancer%20transarterial%20chemoembolization%20interventional%20oncology%20treatment&image_size=landscape_16_9'
  },
  {
    id: 'tech-010',
    title: '外周动脉疾病介入治疗：球囊扩张与支架植入技术',
    category: '外周血管介入',
    summary: '下肢动脉硬化闭塞症的介入治疗技术，包括球囊扩张、支架植入及药物涂层球囊应用。',
    content: `## 外周动脉疾病介入治疗概述\n\n外周动脉疾病（Peripheral Arterial Disease, PAD）主要由动脉粥样硬化引起，常累及下肢动脉。\n\n### 常用介入技术\n\n**1. 经皮腔内血管成形术（PTA）**\n- 普通球囊扩张\n- 切割球囊技术\n- 刻痕球囊技术\n\n**2. 支架植入术**\n- 自膨式支架：最常用\n- 球囊扩张式支架：精准定位\n- 药物洗脱支架：降低再狭窄\n\n**3. 特殊技术**\n- 斑块旋切术（DA）\n- 激光血管成形术\n- 药物涂层球囊（DCB）\n\n### 病变部位与策略\n\n- 髂动脉病变：首选支架植入\n- 股腘动脉病变：DCB或支架\n- 膝下动脉病变：DCB优先`,
    author: '王海波主任医师',
    publishDate: '2024-06-12',
    views: 6543,
    tags: ['外周介入', '血管成形术', '下肢动脉'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=peripheral%20arterial%20disease%20angioplasty%20stenting%20lower%20limb%20vascular%20intervention&image_size=landscape_16_9'
  },
  {
    id: 'tech-011',
    title: '血管内超声(IVUS)技术原理与冠脉介入应用',
    category: '心血管介入',
    summary: '血管内超声技术的原理、操作方法及其在冠脉介入中的指导价值和临床应用。',
    content: `## IVUS技术概述\n\n血管内超声（Intravascular Ultrasound, IVUS）是将微型超声探头送入血管腔内，实时显示血管横截面图像的技术。\n\n### 技术原理\n\nIVUS导管顶端装有微型超声换能器，发射超声波并接收反射信号，经计算机处理形成血管横截面图像。\n\n### 临床应用\n\n**术前评估**\n- 病变性质判断（钙化、纤维化、脂质）\n- 血管直径和面积测量\n- 病变长度和累及范围\n\n**术中指导**\n- 支架大小选择\n- 支架释放定位\n- 支架膨胀评估\n- 并发症检测（夹层、血肿）\n\n### 操作要点\n\n1. 导丝到位与IVUS导管推送\n2. 自动回撤成像\n3. 图像分析与测量\n4. 指导介入策略调整`,
    author: '张健教授',
    publishDate: '2024-06-08',
    views: 5432,
    tags: ['IVUS', '血管内超声', '冠脉介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=intravascular%20ultrasound%20IVUS%20coronary%20imaging%20catheter%20cardiac%20intervention&image_size=landscape_16_9'
  },
  {
    id: 'tech-012',
    title: '血流导向装置(FD)治疗颅内动脉瘤技术进展',
    category: '神经介入',
    summary: '血流导向装置的作用原理、适应症选择、操作技术要点及围手术期管理。',
    content: `## 血流导向装置概述\n\n血流导向装置（Flow Diverter, FD）是一种密网支架，通过改变动脉瘤内血流动力学，促进动脉瘤内血栓形成和愈合。\n\n### 作用原理\n\n- **血流重构**：将血流从动脉瘤腔引开\n- **内皮化**：支架表面逐渐内皮化，实现永久闭塞\n- **载瘤动脉重建**：重建载瘤动脉正常管径\n\n### 适应症\n\n**推荐适应症**\n- 颈内动脉大型/巨大型动脉瘤\n- 宽颈动脉瘤（瘤颈>4mm或体颈比<2）\n- 梭形动脉瘤\n- 复发动脉瘤\n\n### 操作要点\n\n1. 准确的工作角度选择\n2. 微导管超选到位\n3. FD释放技术（推送与回收）\n4. 术后双联抗血小板治疗`,
    author: '杨鹏飞教授',
    publishDate: '2024-06-06',
    views: 7890,
    tags: ['血流导向装置', 'FD', '神经介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flow%20diverter%20cerebral%20aneurysm%20treatment%20neurointerventional%20stent%20technology&image_size=landscape_16_9'
  },
  {
    id: 'tech-013',
    title: 'CT引导下经皮穿刺活检技术操作规范',
    category: '综合介入',
    summary: 'CT引导下经皮穿刺活检的适应症、操作流程、并发症防治及病理标本处理。',
    content: `## CT引导穿刺活检概述\n\nCT引导下经皮穿刺活检是获取病理诊断的重要微创手段，广泛应用于全身各部位病变的诊断。\n\n### 适应症\n\n- 肺部结节/肿块的定性诊断\n- 肝脏占位性质鉴别\n- 腹膜后淋巴结肿大\n- 骨骼病变诊断\n- 肾脏及肾上腺病变\n\n### 操作流程\n\n**1. 术前准备**\n- 凝血功能检查\n- 增强CT评估病变血供\n- 患者呼吸训练\n\n**2. 定位与穿刺**\n- 体表标记定位\n- 局部麻醉\n- 分步进针，反复验证\n- 取材满意后拔针\n\n### 并发症防治\n\n- 出血：压迫止血、监测生命体征\n- 气胸：肺活检常见，少量可观察\n- 感染：严格无菌操作`,
    author: '周立平教授',
    publishDate: '2024-06-04',
    views: 4567,
    tags: ['穿刺活检', 'CT引导', '综合介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CT%20guided%20biopsy%20needle%20puncture%20interventional%20radiology%20diagnosis&image_size=landscape_16_9'
  },
  {
    id: 'tech-014',
    title: '食管支架植入术操作技术与并发症处理',
    category: '综合介入',
    summary: '食管良恶性狭窄的支架治疗技术，包括支架选择、操作要点及并发症处理。',
    content: `## 食管支架植入术概述\n\n食管支架植入术是治疗食管狭窄的重要微创方法，可快速缓解吞咽困难症状。\n\n### 适应症\n\n**恶性狭窄**\n- 食管癌致吞咽困难\n- 食管气管瘘\n- 纵隔肿瘤压迫食管\n\n**良性狭窄**\n- 术后吻合口狭窄（难治性）\n- 腐蚀性食管炎后狭窄\n- 贲门失弛缓症（特殊支架）\n\n### 操作要点\n\n1. 术前胃镜/造影评估狭窄程度\n2. 导丝通过狭窄段\n3. 必要时球囊预扩张\n4. 支架定位与释放\n5. 术后造影评估通畅性\n\n### 常见并发症\n\n- 支架移位：选择合适尺寸支架\n- 再狭窄：肿瘤内生长或过度增生\n- 出血：少见，多为少量渗血\n- 食管穿孔：严重并发症，需紧急处理`,
    author: '吴志刚教授',
    publishDate: '2024-06-02',
    views: 3876,
    tags: ['食管支架', '非血管介入', '综合介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=esophageal%20stent%20implantation%20interventional%20radiology%20swallowing%20treatment&image_size=landscape_16_9'
  },
  {
    id: 'tech-015',
    title: '急性缺血性卒中机械取栓技术操作规范',
    category: '神经介入',
    summary: '急性脑梗死血管内机械取栓的适应症、操作流程、技术要点及围手术期管理。',
    content: `## 机械取栓概述\n\n机械取栓（Mechanical Thrombectomy, MT）是急性缺血性卒中的重要治疗手段，可显著改善大血管闭塞患者的预后。\n\n### 适应症\n\n**时间窗内患者**\n- 前循环大血管闭塞，发病6小时内\n- 符合DAWN/DEFUSE 3标准可延长至24小时\n- 后循环闭塞可适当延长时间窗\n\n**影像评估**\n- 核心梗死体积小\n- 存在缺血半暗带\n- 良好的侧支循环\n\n### 取栓技术\n\n**1. 支架取栓（首选）**\n- Solitaire支架\n- 操作：到位→释放→等待→撤出\n\n**2. 抽吸导管取栓**\n- 大口径抽吸导管\n- 接触抽吸技术\n\n**3. 联合技术**\n- 支架+抽吸（Solumbra技术）\n- 提高再通率`,
    author: '李晓阳教授',
    publishDate: '2024-05-30',
    views: 9234,
    tags: ['取栓', '急性卒中', '神经介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mechanical%20thrombectomy%20acute%20ischemic%20stroke%20neurointerventional%20clot%20removal&image_size=landscape_16_9'
  },
  {
    id: 'tech-016',
    title: 'OCT光学相干断层扫描技术与冠脉介入应用',
    category: '心血管介入',
    summary: '光学相干断层扫描的技术原理、图像解读及其在冠脉介入中的指导价值。',
    content: `## OCT技术概述\n\n光学相干断层扫描（Optical Coherence Tomography, OCT）是一种高分辨率血管内成像技术，分辨率可达10-20μm。\n\n### 技术原理\n\nOCT利用近红外光的干涉原理，通过测量光在组织中的反射和散射，生成血管横截面的高分辨率图像。\n\n### 与IVUS比较\n\n**优势**\n- 分辨率更高（10μm vs 100μm）\n- 能清晰显示血管壁分层\n- 更易识别脂质斑块和钙化\n- 评估支架贴壁更准确\n\n**劣势**\n- 穿透深度较浅\n- 需要血液置换（冲洗）\n- 无法穿透钙化观察血管外结构\n\n### 临床应用\n\n1. 易损斑块识别\n2. 支架术后评估（贴壁、夹层、脱垂）\n3. 支架内再狭窄机制判断\n4. 生物可吸收支架随访`,
    author: '王明教授',
    publishDate: '2024-05-26',
    views: 4567,
    tags: ['OCT', '光学相干断层', '冠脉介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=optical%20coherence%20tomography%20OCT%20coronary%20imaging%20intravascular%20cardiology&image_size=landscape_16_9'
  },
  {
    id: 'tech-017',
    title: '射频消融技术在实体肿瘤治疗中的应用',
    category: '肿瘤介入',
    summary: '射频消融治疗实体肿瘤的原理、适应症、操作技术要点及疗效评估方法。',
    content: `## 射频消融技术概述\n\n射频消融（Radiofrequency Ablation, RFA）是一种热消融技术，通过射频电流使组织内离子振荡产热，导致肿瘤细胞凝固性坏死。\n\n### 适应症\n\n**肝脏肿瘤**\n- 原发性肝癌（≤5cm单发或≤3cm3个以内）\n- 肝转移瘤\n\n**肺部肿瘤**\n- 早期肺癌（不能手术或拒绝手术）\n- 肺转移瘤\n\n**其他部位**\n- 肾脏肿瘤\n- 骨肿瘤（止痛为主）\n- 甲状腺结节\n\n### 操作要点\n\n1. 影像引导定位（超声/CT）\n2. 麻醉方式选择\n3. 布针策略（单针/多针、叠加消融）\n4. 实时监测消融范围\n5. 术后并发症观察\n\n### 疗效评估\n\n- 增强CT/MRI：术后1个月评估\n- 完全消融：无强化，边界清晰\n- 残留/复发：病灶边缘结节样强化`,
    author: '黄俊教授',
    publishDate: '2024-05-24',
    views: 5678,
    tags: ['射频消融', 'RFA', '肿瘤介入'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radiofrequency%20ablation%20RFA%20tumor%20treatment%20interventional%20oncology%20heat%20therapy&image_size=landscape_16_9'
  },
  {
    id: 'tech-018',
    title: '下腔静脉滤器植入与回收技术规范',
    category: '外周血管介入',
    summary: '下腔静脉滤器的适应症选择、植入操作技术、回收时机及并发症防治。',
    content: `## 下腔静脉滤器概述\n\n下腔静脉滤器（Inferior Vena Cava Filter, IVCF）用于预防下肢深静脉血栓脱落导致肺栓塞。\n\n### 适应症\n\n**绝对适应症**\n- 抗凝禁忌的DVT/PE患者\n- 充分抗凝下仍发生PE\n- 抗凝治疗出现严重并发症\n\n**相对适应症**\n- 大面积PE高危患者\n- 髂股静脉大量血栓（溶栓前）\n- 骨科大手术VTE高危患者\n\n### 操作要点\n\n**植入技术**\n1. 入路选择（股静脉/颈静脉）\n2. 下腔静脉造影（直径、解剖）\n3. 滤器定位（肾静脉下方）\n4. 释放后造影确认位置\n\n**回收技术**\n1. 评估血栓负荷\n2. 抓捕器抓取滤器钩\n3. 回收鞘内收回滤器\n4. 确认滤器完整回收`,
    author: '徐伟教授',
    publishDate: '2024-05-22',
    views: 3987,
    tags: ['下腔静脉滤器', 'IVCF', '肺栓塞'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=inferior%20vena%20cava%20filter%20IVCF%20implantation%20deep%20vein%20thrombosis%20prevention&image_size=landscape_16_9'
  },
  {
    id: 'tech-019',
    title: '造影剂肾病的预防与处理策略',
    category: '安全技术',
    summary: '造影剂肾病的危险因素、预防措施及发生后的处理方法，保障介入手术安全。',
    content: `## 造影剂肾病概述\n\n造影剂肾病（Contrast-Induced Nephropathy, CIN）是含碘造影剂使用后的重要并发症，表现为急性肾功能损害。\n\n### 危险因素\n\n**患者相关**\n- 慢性肾功能不全（最重要）\n- 糖尿病肾病\n- 脱水/血容量不足\n- 高龄\n- 心衰\n\n**操作相关**\n- 造影剂用量大\n- 短时间内多次造影\n- 使用高渗造影剂\n\n### 预防措施\n\n1. **充分水化**：术前3-12小时至术后6-24小时静脉补液\n2. **选择低渗/等渗造影剂**\n3. **控制造影剂用量**：尽量<100ml\n4. **避免肾毒性药物**：NSAIDs、氨基糖苷类等\n5. **血液滤过**：极高危患者可考虑\n\n### 处理原则\n\n- 轻度：继续水化，监测肾功能\n- 重度：必要时血液透析支持\n- 大多数可在1-2周内恢复`,
    author: '马主任',
    publishDate: '2024-05-18',
    views: 4321,
    tags: ['造影剂肾病', '安全', '并发症'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=contrast%20induced%20nephropathy%20prevention%20kidney%20safety%20medical%20imaging%20safety&image_size=landscape_16_9'
  },
  {
    id: 'tech-020',
    title: 'TAVR经导管主动脉瓣置换术操作技术',
    category: '心血管介入',
    summary: '经导管主动脉瓣置换术的适应症、操作流程、技术要点及并发症处理。',
    content: `## TAVR概述\n\n经导管主动脉瓣置换术（Transcatheter Aortic Valve Replacement, TAVR）是治疗主动脉瓣狭窄的革命性技术。\n\n### 适应症\n\n- 重度主动脉瓣狭窄，外科手术高危或禁忌\n- 年龄通常≥75岁\n- 存在症状（心绞痛、晕厥、心衰）\n\n### 操作流程\n\n**1. 入路建立**\n- 股动脉入路（最常用）\n- 心尖入路\n- 升主动脉入路\n\n**2. 瓣膜释放**\n- 导丝跨瓣\n- 球囊预扩张（部分病例）\n- 瓣膜系统到位\n- 快速起搏下调频\n- 逐步释放瓣膜\n- 造影+超声评估\n\n### 并发症防治\n\n- 传导阻滞：必要时起搏器植入\n- 瓣周漏：多为轻度，可观察\n- 冠脉阻塞：高危患者需预防\n- 血管并发症：入路血管损伤`,
    author: '赵建华教授',
    publishDate: '2024-05-16',
    views: 8765,
    tags: ['TAVR', '结构性心脏病', '主动脉瓣'],
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=TAVR%20transcatheter%20aortic%20valve%20replacement%20cardiac%20intervention%20structural%20heart%20disease&image_size=landscape_16_9'
  }
];

export const cases: CaseItem[] = [
  {
    id: 'case-001',
    title: '急性心肌梗死急诊PCI治疗病例',
    department: '心血管内科',
    technology: '冠状动脉造影',
    difficulty: '中级',
    equipmentBrand: '飞利浦',
    equipmentModel: 'Allura Xper FD20',
    summary: '65岁男性患者，突发胸痛3小时入院，心电图提示急性前壁心肌梗死，行急诊PCI治疗。',
    patientInfo: '患者男性，65岁，有高血压病史10年，糖尿病病史5年，吸烟史30年。',
    diagnosis: '急性ST段抬高型心肌梗死（前壁）',
    treatment: '急诊冠状动脉造影示前降支近段完全闭塞，行血栓抽吸+支架植入术，术后血流恢复TIMI 3级。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coronary%20angiography%20cardiac%20catheterization%20heart%20vessels%20medical%20imaging%20stent%20implantation&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=PCI%20percutaneous%20coronary%20intervention%20balloon%20angioplasty%20stent%20deployment%20cardiology&image_size=landscape_4_3'
    ],
    author: '心内科张主任',
    publishDate: '2024-06-18',
    views: 3456,
    likes: 287
  },
  {
    id: 'case-002',
    title: '颅内动脉瘤栓塞治疗病例分享',
    department: '神经外科',
    technology: '脑血管造影',
    difficulty: '高级',
    equipmentBrand: '西门子',
    equipmentModel: 'Artis zee III biplane',
    summary: '52岁女性患者，因头痛伴动眼神经麻痹入院，DSA提示后交通动脉瘤，行弹簧圈栓塞术。',
    patientInfo: '患者女性，52岁，无明显诱因出现右侧头痛伴右眼睑下垂1周。',
    diagnosis: '右侧后交通动脉瘤（破裂先兆）',
    treatment: '全麻下行右侧颈内动脉造影，确认后交通动脉瘤大小约8mm，采用双微管技术置入弹簧圈6枚，动脉瘤完全栓塞，载瘤动脉通畅。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cerebral%20aneurysm%20embolization%20coiling%20neurointerventional%20radiology%20brain%20blood%20vessels%20DSA&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=3D%20cerebral%20angiography%20posterior%20communicating%20artery%20aneurysm%20neurosurgery%20imaging&image_size=landscape_4_3'
    ],
    author: '神外李教授',
    publishDate: '2024-06-12',
    views: 5621,
    likes: 432
  },
  {
    id: 'case-003',
    title: '下肢动脉硬化闭塞症介入治疗',
    department: '血管外科',
    technology: '外周血管造影',
    difficulty: '中级',
    equipmentBrand: '联影',
    equipmentModel: 'uAngio 960',
    summary: '72岁男性患者，间歇性跛行半年，加重1个月，CTA提示股浅动脉长段闭塞。',
    patientInfo: '患者男性，72岁，高血压病史20年，高脂血症病史10年，有长期吸烟史。',
    diagnosis: '下肢动脉硬化闭塞症（Fontaine IIb期）',
    treatment: '局麻下行下肢动脉造影，确认股浅动脉中段长约12cm闭塞，行斑块旋切+球囊扩张+支架植入术，术后血流恢复通畅，踝肱指数由0.4提升至0.9。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=peripheral%20arterial%20disease%20lower%20limb%20angiography%20femoral%20artery%20stenting%20vascular%20surgery&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lower%20extremity%20angioplasty%20balloon%20dilation%20peripheral%20vascular%20intervention%20DSA%20imaging&image_size=landscape_4_3'
    ],
    author: '血管外科王主任',
    publishDate: '2024-06-08',
    views: 2890,
    likes: 198
  },
  {
    id: 'case-004',
    title: '原发性肝癌TACE治疗病例',
    department: '介入科',
    technology: '肿瘤介入',
    difficulty: '中级',
    equipmentBrand: '飞利浦',
    equipmentModel: 'Allura Clarity',
    summary: '58岁男性患者，体检发现肝右叶占位，AFP升高，诊断原发性肝癌，行TACE治疗。',
    patientInfo: '患者男性，58岁，乙肝病史20年，肝硬化病史5年。',
    diagnosis: '原发性肝癌（BCLC B期）',
    treatment: '局麻下行肝动脉造影，确认肝右叶富血供肿瘤，大小约6cm，行超选择性化疗栓塞术（TACE），术后1个月复查示肿瘤坏死明显，AFP下降。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liver%20cancer%20TACE%20transarterial%20chemoembolization%20hepatic%20artery%20interventional%20oncology&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hepatocellular%20carcinoma%20embolization%20treatment%20liver%20tumor%20DSA%20imaging%20oncology&image_size=landscape_4_3'
    ],
    author: '介入科陈教授',
    publishDate: '2024-06-01',
    views: 4125,
    likes: 356
  },
  {
    id: 'case-005',
    title: '主动脉夹层腔内修复术病例',
    department: '心血管外科',
    technology: '大血管介入',
    difficulty: '高级',
    equipmentBrand: 'GE医疗',
    equipmentModel: 'IGS 730',
    summary: '48岁男性患者，突发胸背部剧痛6小时，CTA提示Stanford B型主动脉夹层。',
    patientInfo: '患者男性，48岁，高血压病史15年，血压控制不佳。',
    diagnosis: 'Stanford B型主动脉夹层',
    treatment: '全麻下行主动脉造影，确认夹层破口位于左锁骨下动脉远端约2cm，行胸主动脉腔内修复术（TEVAR），植入覆膜支架1枚，术后破口完全封闭，假腔血栓化。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aortic%20dissection%20TEVAR%20thoracic%20endovascular%20aneurysm%20repair%20stent%20graft%20vascular%20surgery&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=type%20B%20aortic%20dissection%20endovascular%20treatment%20aorta%20stent%20deployment%20imaging&image_size=landscape_4_3'
    ],
    author: '心外科刘教授',
    publishDate: '2024-05-25',
    views: 6789,
    likes: 543
  },
  {
    id: 'case-006',
    title: '颈动脉狭窄支架植入术病例',
    department: '神经外科',
    technology: '颈动脉介入',
    difficulty: '中级',
    equipmentBrand: '西门子',
    equipmentModel: 'Artis zee III biplane',
    summary: '68岁男性患者，反复短暂性脑缺血发作，超声提示右侧颈内动脉重度狭窄。',
    patientInfo: '患者男性，68岁，高血压病史20年，糖尿病病史10年，吸烟史40年。',
    diagnosis: '右侧颈内动脉起始部重度狭窄（约85%）',
    treatment: '局麻下行全脑血管造影，确认右侧颈内动脉起始部重度狭窄，远端血管显影延迟。放置脑保护装置后，行球囊扩张+支架植入术，术后狭窄解除，血流恢复通畅，患者无神经系统并发症。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=carotid%20artery%20stenting%20carotid%20stenosis%20neurointerventional%20stroke%20prevention&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=carotid%20angioplasty%20stent%20deployment%20cerebral%20protection%20device%20imaging&image_size=landscape_4_3'
    ],
    author: '神外张教授',
    publishDate: '2024-06-20',
    views: 4567,
    likes: 321
  },
  {
    id: 'case-007',
    title: '肺小结节微波消融治疗病例',
    department: '介入科',
    technology: '肿瘤消融',
    difficulty: '中级',
    equipmentBrand: '联影',
    equipmentModel: 'uAngio CT',
    summary: '55岁女性患者，体检发现右肺上叶磨玻璃结节，穿刺活检提示原位腺癌。',
    patientInfo: '患者女性，55岁，无吸烟史，体检CT发现右肺上叶磨玻璃结节，大小约1.2cm。',
    diagnosis: '右肺上叶原位腺癌（T1aN0M0）',
    treatment: 'CT引导下经皮肺穿刺微波消融术。患者取俯卧位，CT定位后局麻，微波天线经皮穿刺精准到达结节部位，设置功率60W，消融时间8分钟。术后复查CT示消融范围覆盖结节，周围少量气胸，无明显出血。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lung%20nodule%20microwave%20ablation%20CT%20guided%20lung%20cancer%20treatment%20minimally%20invasive&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pulmonary%20ablation%20needle%20positioning%20tumor%20treatment%20interventional%20radiology&image_size=landscape_4_3'
    ],
    author: '介入科李主任',
    publishDate: '2024-06-18',
    views: 3876,
    likes: 254
  },
  {
    id: 'case-008',
    title: '肾动脉狭窄支架植入治疗病例',
    department: '血管外科',
    technology: '肾动脉介入',
    difficulty: '中级',
    equipmentBrand: '飞利浦',
    equipmentModel: 'Allura Xper FD20',
    summary: '62岁男性患者，难治性高血压3年，CTA提示右侧肾动脉开口重度狭窄。',
    patientInfo: '患者男性，62岁，高血压病史15年，近3年血压难以控制，服用3种降压药仍波动在170-190/90-100mmHg。',
    diagnosis: '右侧肾动脉开口重度狭窄（约90%），肾血管性高血压',
    treatment: '经股动脉入路行肾动脉造影，确认右侧肾动脉开口处重度狭窄。置入6mmx15mm球囊扩张式支架，术后造影示狭窄解除，肾动脉血流恢复通畅。术后1个月随访血压降至130/80mmHg，降压药减至1种。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=renal%20artery%20stenosis%20stenting%20kidney%20hypertension%20vascular%20intervention&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=renal%20angioplasty%20stent%20deployment%20renal%20artery%20imaging%20treatment&image_size=landscape_4_3'
    ],
    author: '血管外科王主任',
    publishDate: '2024-06-16',
    views: 3456,
    likes: 213
  },
  {
    id: 'case-009',
    title: '脑动静脉畸形栓塞治疗病例',
    department: '神经外科',
    technology: '神经介入',
    difficulty: '高级',
    equipmentBrand: '西门子',
    equipmentModel: 'Artis icono',
    summary: '28岁男性患者，突发头痛伴意识障碍，CT提示脑出血，DSA证实脑动静脉畸形。',
    patientInfo: '患者男性，28岁，既往体健，工作中突发剧烈头痛伴呕吐，随后意识模糊。',
    diagnosis: '右侧额叶脑动静脉畸形（AVM）伴出血，Spetzler-Martin Ⅲ级',
    treatment: '急诊行全脑血管造影，确认右侧额叶AVM，由大脑中动脉和大脑前动脉双重供血，引流至矢状窦。行畸形血管部分栓塞术，经微导管注入Onyx液体栓塞剂，闭塞主要供血动脉和部分畸形团。二期联合伽马刀治疗。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=brain%20arteriovenous%20malformation%20AVM%20embolization%20neurointerventional%20radiology&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cerebral%20AVM%20Onyx%20embolization%20liquid%20embolic%20agent%20neurosurgery&image_size=landscape_4_3'
    ],
    author: '神外李教授',
    publishDate: '2024-06-14',
    views: 5432,
    likes: 398
  },
  {
    id: 'case-010',
    title: '食管恶性狭窄支架植入病例',
    department: '消化介入科',
    technology: '非血管介入',
    difficulty: '中级',
    equipmentBrand: 'GE医疗',
    equipmentModel: 'IGS 730',
    summary: '72岁男性患者，进行性吞咽困难2个月，胃镜+活检确诊食管中段鳞癌。',
    patientInfo: '患者男性，72岁，进行性吞咽困难2月余，目前仅能进流质，体重下降约10kg。',
    diagnosis: '食管中段鳞状细胞癌（T3N1M0），食管狭窄',
    treatment: '患者高龄，合并多种基础疾病，外科手术风险高。在DSA引导下行食管支架植入术，经口送入导丝通过狭窄段，食管造影测量狭窄长度约6cm，植入18mmx80mm镍钛合金覆膜支架。术后患者即可进食半流质，生活质量明显改善。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=esophageal%20cancer%20stent%20implantation%20dysphagia%20treatment%20interventional%20radiology&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=esophageal%20stricture%20stenting%20barium%20swallow%20study%20gastrointestinal%20intervention&image_size=landscape_4_3'
    ],
    author: '消化介入张主任',
    publishDate: '2024-06-12',
    views: 2987,
    likes: 176
  },
  {
    id: 'case-011',
    title: '大咯血支气管动脉栓塞治疗病例',
    department: '介入科',
    technology: '外周介入',
    difficulty: '中级',
    equipmentBrand: '飞利浦',
    equipmentModel: 'Allura Clarity',
    summary: '56岁男性患者，反复大咯血1天，总量约500ml，内科治疗效果不佳。',
    patientInfo: '患者男性，56岁，支气管扩张病史20年，反复咯血，本次咯血量大，内科保守治疗无效。',
    diagnosis: '支气管扩张症伴大咯血',
    treatment: '急诊行支气管动脉造影，发现右侧支气管动脉增粗、迂曲，局部见造影剂外渗。行支气管动脉栓塞术，用明胶海绵颗粒+弹簧圈栓塞责任血管。术后咯血立即停止，观察1周无复发，患者顺利出院。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bronchial%20artery%20embolization%20hemoptysis%20treatment%20interventional%20radiology%20lung&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=massive%20hemoptysis%20bronchial%20angiography%20embolization%20coils%20treatment&image_size=landscape_4_3'
    ],
    author: '介入科陈教授',
    publishDate: '2024-06-10',
    views: 4123,
    likes: 287
  },
  {
    id: 'case-012',
    title: '冠状动脉慢性完全闭塞病变介入治疗病例',
    department: '心血管内科',
    technology: '冠脉介入',
    difficulty: '高级',
    equipmentBrand: '飞利浦',
    equipmentModel: 'Allura Clarity',
    summary: '65岁男性患者，活动后胸闷气短半年，冠脉造影提示前降支慢性完全闭塞。',
    patientInfo: '患者男性，65岁，高血压病史10年，糖尿病病史8年，吸烟史30年。近半年活动耐量明显下降。',
    diagnosis: '冠心病，劳力性心绞痛，前降支慢性完全闭塞（CTO）',
    treatment: '冠脉造影示左前降支近段完全闭塞，可见侧支循环供血。采用前向导丝技术，先后尝试Fielder XT、Gaia系列导丝，在IVUS指导下成功通过闭塞段，球囊扩张后植入药物洗脱支架2枚。术后造影示前降支血流通畅，TIMI 3级。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chronic%20total%20occlusion%20CTO%20coronary%20intervention%20cardiology%20PCI&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=CTO%20PCI%20wire%20crossing%20stent%20deployment%20coronary%20angiography&image_size=landscape_4_3'
    ],
    author: '心内科赵教授',
    publishDate: '2024-06-08',
    views: 6543,
    likes: 432
  },
  {
    id: 'case-013',
    title: '肝血管瘤经动脉栓塞治疗病例',
    department: '介入科',
    technology: '肿瘤介入',
    difficulty: '初级',
    equipmentBrand: '联影',
    equipmentModel: 'uAngio 960',
    summary: '42岁女性患者，体检发现肝右叶巨大血管瘤，直径约12cm，伴右上腹不适。',
    patientInfo: '患者女性，42岁，体检超声发现肝右叶占位，增强CT确诊肝血管瘤，进行性增大。',
    diagnosis: '肝右叶巨大海绵状血管瘤',
    treatment: '行肝动脉造影，确认肝右动脉供血的巨大血管瘤，肿瘤染色明显。行超选择插管至供血动脉，注入平阳霉素+碘化油乳剂栓塞。术后6个月复查CT示血管瘤缩小至5cm，患者症状消失。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hepatic%20hemangioma%20embolization%20liver%20tumor%20interventional%20radiology%20treatment&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liver%20hemangioma%20transarterial%20embolization%20pingyangmycin%20lipiodol&image_size=landscape_4_3'
    ],
    author: '介入科王医生',
    publishDate: '2024-06-06',
    views: 2765,
    likes: 154
  },
  {
    id: 'case-014',
    title: '深静脉血栓导管接触性溶栓病例',
    department: '血管外科',
    technology: '外周血管介入',
    difficulty: '中级',
    equipmentBrand: '西门子',
    equipmentModel: 'Artis zee III biplane',
    summary: '38岁女性患者，左下肢肿胀疼痛3天，超声提示左下肢深静脉血栓形成。',
    patientInfo: '患者女性，38岁，剖宫产术后1周，卧床期间出现左下肢肿胀疼痛，伴皮温升高。',
    diagnosis: '左下肢深静脉血栓形成（中央型+混合型）',
    treatment: '先植入下腔静脉滤器预防肺栓塞，然后经腘静脉入路行导管接触性溶栓（CDT）。将溶栓导管置入血栓内，持续泵入尿激酶溶栓。3天后造影复查示血栓大部分溶解，髂股静脉恢复通畅，撤出溶栓导管和滤器，患者肿胀明显消退。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=deep%20vein%20thrombosis%20DVT%20catheter%20directed%20thrombolysis%20vascular%20surgery&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lower%20limb%20DVT%20thrombolysis%20catheter%20fibrinolysis%20venography&image_size=landscape_4_3'
    ],
    author: '血管外科李主任',
    publishDate: '2024-06-04',
    views: 3543,
    likes: 221
  },
  {
    id: 'case-015',
    title: '急性脑梗死支架取栓治疗病例',
    department: '神经内科',
    technology: '神经介入',
    difficulty: '高级',
    equipmentBrand: '西门子',
    equipmentModel: 'Artis icono',
    summary: '58岁男性患者，突发右侧肢体无力伴言语不清4.5小时，急诊取栓治疗。',
    patientInfo: '患者男性，58岁，高血压病史10年，房颤病史5年，未规律抗凝。',
    diagnosis: '急性缺血性脑卒中（心源性栓塞），左侧大脑中动脉闭塞',
    treatment: '患者NIHSS评分16分，CT平扫未见出血，ASPECTS评分8分。急诊行脑血管造影证实左侧大脑中动脉M1段闭塞。采用Solitaire支架取栓，首次开通成功，mTICI 3级。术后患者肌力明显改善，2周后可独立行走。',
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=acute%20ischemic%20stroke%20mechanical%20thrombectomy%20brain%20artery%20clot%20removal&image_size=landscape_4_3',
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Solitaire%20stent%20retriever%20cerebral%20thrombectomy%20neurointerventional%20stroke&image_size=landscape_4_3'
    ],
    author: '神经内科王教授',
    publishDate: '2024-06-02',
    views: 7654,
    likes: 567
  }
];

export const equipments: Equipment[] = [
  {
    id: 'equip-001',
    brand: '飞利浦',
    model: 'Allura Xper FD20',
    name: 'Allura Xper FD20 平板探测器血管造影系统',
    description: '飞利浦旗舰级心血管造影系统，配备20x20cm大尺寸平板探测器，适用于心脏介入、神经介入、外周血管等多学科应用。',
    parameters: {
      '探测器类型': '碘化铯平板探测器',
      '探测器尺寸': '20 x 20 cm',
      '像素矩阵': '1024 x 1024',
      '空间分辨率': '3.6 lp/mm',
      '机架旋转速度': '60°/s',
      '最大功率': '100 kW',
      '管电压范围': '40-125 kV',
      '管电流范围': '10-1000 mA'
    },
    features: [
      '大尺寸平板探测器，覆盖范围广',
      'ClarityIQ低剂量成像技术',
      '3D-RA三维旋转血管造影',
      'StentBoost支架增强显影技术',
      'iGuide智能导航系统',
      '支持双向透视和电影采集'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Allura%20Xper%20FD20%20DSA%20system%20angiography%20equipment%20interventional%20radiology%20room%20modern%20medical&image_size=landscape_16_9'
    ],
    releaseDate: '2022-03'
  },
  {
    id: 'equip-002',
    brand: '飞利浦',
    model: 'Allura Clarity',
    name: 'Allura Clarity 介入X射线系统',
    description: '新一代Clarity平台，以超低剂量和超高清图像质量为核心，全面提升介入手术的安全性和精准度。',
    parameters: {
      '探测器类型': '新一代平板探测器',
      '探测器尺寸': '30 x 30 cm',
      '像素矩阵': '1536 x 1536',
      '空间分辨率': '4.2 lp/mm',
      '机架旋转速度': '70°/s',
      '低剂量技术': 'ClarityIQ 2.0',
      '3D成像': '支持4D-RA',
      '图像后处理': '集成高级工作站'
    },
    features: [
      'ClarityIQ 2.0低剂量技术，剂量降低可达70%',
      '超大视野平板探测器',
      '4D-RA四维旋转血管造影',
      'AI辅助图像分析',
      '一体化操作工作站',
      '支持复杂结构性心脏病介入'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Allura%20Clarity%20interventional%20X-ray%20system%20modern%20cath%20lab%20high%20end%20medical%20equipment&image_size=landscape_16_9'
    ],
    releaseDate: '2023-06'
  },
  {
    id: 'equip-003',
    brand: '西门子',
    model: 'Artis zee III biplane',
    name: 'Artis zee III 双向平板血管造影系统',
    description: '西门子高端双向平板DSA系统，特别适用于神经介入和心血管介入的复杂手术。',
    parameters: {
      '探测器类型': '双平板探测器',
      '探测器尺寸': '20 x 20 cm（双向）',
      '像素矩阵': '1240 x 1240',
      '空间分辨率': '3.9 lp/mm',
      '机架系统': '落地式双向C臂',
      '旋转采集': '支持双向3D-RA',
      '冷却系统': '直接冷却技术',
      '剂量管理': 'CARE技术平台'
    },
    features: [
      '双向平板探测器，神经介入首选',
      'syngo DynaCT 3D成像',
      'syngo iFlow 彩色血流分析',
      'syngo Needle Guide 穿刺导航',
      'CARE剂量降低技术',
      '支持机器人辅助操作'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20zee%20biplane%20DSA%20system%20neurointerventional%20angiography%20laboratory%20medical%20equipment&image_size=landscape_16_9'
    ],
    releaseDate: '2021-09'
  },
  {
    id: 'equip-004',
    brand: '西门子',
    model: 'Artis icono',
    name: 'Artis icono 血管造影X射线系统',
    description: '西门子最新一代血管造影系统，搭载人工智能辅助功能，为介入手术提供智能化支持。',
    parameters: {
      '探测器类型': 'QuantumMax平板探测器',
      '探测器尺寸': '30 x 30 cm',
      '像素矩阵': '2048 x 2048',
      '空间分辨率': '4.5 lp/mm',
      'AI功能': 'AI图像增强、AI路径规划',
      '机架系统': '七轴机械臂',
      '剂量技术': 'PureVision低剂量平台',
      '支持术式': '全科介入'
    },
    features: [
      'AI驱动的智能成像平台',
      '超高分辨率平板探测器',
      '七轴机械臂，定位精准灵活',
      'AI自动路径规划',
      '术中实时AI辅助诊断',
      '智能工作流优化'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20icono%20AI%20angiography%20system%20smart%20interventional%20lab%20futuristic%20medical%20technology&image_size=landscape_16_9'
    ],
    releaseDate: '2024-01'
  },
  {
    id: 'equip-005',
    brand: '联影',
    model: 'uAngio 960',
    name: 'uAngio 960 平板血管造影系统',
    description: '国产高端DSA系统代表，联影医疗自主研发的高性能血管造影设备，性能对标国际一线品牌。',
    parameters: {
      '探测器类型': '国产高端平板探测器',
      '探测器尺寸': '25 x 25 cm',
      '像素矩阵': '1536 x 1536',
      '空间分辨率': '4.0 lp/mm',
      '机架旋转速度': '65°/s',
      '国产率': '核心部件国产化率90%以上',
      '智能功能': 'uAI智能成像平台',
      '云平台': '支持云端远程会诊'
    },
    features: [
      '自主可控核心技术',
      'uAI智能低剂量成像',
      '三维旋转血管造影',
      '智能路径图功能',
      '支持5G远程介入手术',
      '高性价比，维护成本低'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20960%20Chinese%20DSA%20system%20domestic%20medical%20equipment%20interventional%20angiography&image_size=landscape_16_9'
    ],
    releaseDate: '2022-12'
  },
  {
    id: 'equip-006',
    brand: '联影',
    model: 'uAngio CT',
    name: 'uAngio CT 血管造影与CT一体机',
    description: '全球首创的DSA与CT一体化融合设备，实现介入手术室一站式诊断与治疗。',
    parameters: {
      '系统类型': 'DSA+CT一体化系统',
      'DSA探测器': '25x25cm平板',
      'CT探测器': '128排CT探测器',
      '定位精度': '亚毫米级配准',
      '工作模式': 'DSA模式/CT模式/融合模式',
      '临床应用': '肿瘤介入、神经介入、综合介入',
      '图像融合': '实时多模态融合导航',
      '手术支持': '术中CT评估疗效'
    },
    features: [
      '全球首创DSA+CT一体化设计',
      '术中即时CT评估，无需转运患者',
      '多模态图像融合导航',
      '精准三维穿刺引导',
      '一站式诊疗解决方案',
      '显著提升介入手术效率'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20CT%20integrated%20DSA%20CT%20system%20hybrid%20operating%20room%20advanced%20medical%20technology&image_size=landscape_16_9'
    ],
    releaseDate: '2023-11'
  },
  {
    id: 'equip-007',
    brand: 'GE医疗',
    model: 'IGS 730',
    name: 'IGS 730 智能介入手术平台',
    description: 'GE医疗顶级介入血管造影系统，以创新技术赋能复杂介入手术，提供卓越的图像质量和操作体验。',
    parameters: {
      '探测器类型': 'Gigabox平板探测器',
      '探测器尺寸': '30 x 25 cm',
      '像素矩阵': '1920 x 1600',
      '空间分辨率': '4.3 lp/mm',
      '机架系统': '轨道式双向C臂',
      '3D成像': 'DynaCT+4D成像',
      'AI平台': 'AIR x AI智能平台',
      '剂量管理': 'ASiR DSA迭代重建'
    },
    features: [
      'Gigabox超大容量探测器',
      'AIR x AI人工智能平台',
      'ASiR DSA迭代重建降剂量',
      '4D血管成像功能',
      'AutoRight智能定位系统',
      '支持TAVR等复杂结构性心脏病手术'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20healthcare%20IGS%20730%20interventional%20angiography%20system%20smart%20cath%20lab%20premium%20medical%20equipment&image_size=landscape_16_9'
    ],
    releaseDate: '2022-08'
  },
  {
    id: 'equip-008',
    brand: '东芝',
    model: 'Infinix-i 4D',
    name: 'Infinix-i 4D 血管造影系统',
    description: '佳能医疗（原东芝）高端血管造影系统，搭载4D成像技术，为复杂介入手术提供全面支持。',
    parameters: {
      '探测器类型': '高端平板探测器',
      '探测器尺寸': '30 x 30 cm',
      '像素矩阵': '2048 x 2048',
      '空间分辨率': '4.4 lp/mm',
      '机架系统': '灵活C臂系统',
      '4D成像': '4D-DSA功能',
      '低剂量技术': 'SUREPulse低剂量平台',
      '图像后处理': '高级工作站'
    },
    features: [
      '4D-DSA四维血管成像',
      'SUREPulse智能低剂量技术',
      '超大视野探测器',
      '实时三维路图导航',
      '支持双向成像',
      '全面的介入应用解决方案'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=toshiba%20cannon%20Infinix-i%204D%20angiography%20system%20interventional%20radiology%20medical%20equipment&image_size=landscape_16_9'
    ],
    releaseDate: '2023-03'
  },
  {
    id: 'equip-009',
    brand: '东芝',
    model: 'Infinix Celeve',
    name: 'Infinix Celeve 心血管专用造影系统',
    description: '专为心血管介入设计的紧凑型造影系统，优化的操作空间和心脏介入专用功能。',
    parameters: {
      '探测器类型': '心血管专用平板',
      '探测器尺寸': '25 x 20 cm',
      '像素矩阵': '1536 x 1280',
      '空间分辨率': '4.0 lp/mm',
      '机架设计': '悬吊式C臂',
      '床旁系统': '触摸屏操作',
      '冠脉专用': '冠脉增强软件',
      '电生理': '支持电生理标测'
    },
    features: [
      '专为心脏介入优化设计',
      '悬吊式机架，操作空间大',
      '床旁全触控操作',
      '冠脉支架增强显影',
      '低剂量透视和造影',
      '集成电生理标测系统'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=toshiba%20Infinix%20Celeve%20cardiac%20angiography%20system%20cath%20lab%20cardiovascular%20medical&image_size=landscape_16_9'
    ],
    releaseDate: '2022-11'
  },
  {
    id: 'equip-010',
    brand: '东软',
    model: 'NeuAngio 30C',
    name: 'NeuAngio 30C 平板血管造影系统',
    description: '东软医疗自主研发的高端平板血管造影系统，国产DSA的中坚力量，性能稳定可靠。',
    parameters: {
      '探测器类型': '国产平板探测器',
      '探测器尺寸': '25 x 25 cm',
      '像素矩阵': '1536 x 1536',
      '空间分辨率': '3.8 lp/mm',
      '机架旋转速度': '55°/s',
      '智能功能': '智能低剂量成像',
      '三维成像': '支持3D-RA',
      '国产化率': '核心部件国产化率85%'
    },
    features: [
      '自主研发，全国产化平台',
      '智能剂量管理系统',
      '三维旋转血管造影',
      '智能路径图功能',
      '支持多学科介入应用',
      '高性价比，售后服务便捷'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=neusoft%20NeuAngio%2030C%20chinese%20DSA%20system%20domestic%20medical%20equipment%20angiography&image_size=landscape_16_9'
    ],
    releaseDate: '2023-05'
  },
  {
    id: 'equip-011',
    brand: '飞利浦',
    model: 'Azurion 7 M20',
    name: 'Azurion 7 M20 影像引导治疗系统',
    description: '飞利浦新一代Azurion平台高端机型，7代平台技术，20cm探测器，适用于多学科综合介入手术室。',
    parameters: {
      '探测器类型': '新一代M20平板探测器',
      '探测器尺寸': '20 x 20 cm',
      '像素矩阵': '1280 x 1280',
      '空间分辨率': '4.0 lp/mm',
      '平台技术': 'Azurion 7代平台',
      '低剂量技术': 'ClarityIQ 2.0',
      '操作方式': '双手柄智能控制',
      '工作流': 'SmartConnect智能工作流'
    },
    features: [
      'Azurion新一代智能平台',
      'ClarityIQ超低剂量成像',
      '双手柄精准操控',
      '三维旋转造影功能',
      '智能工作流管理',
      '支持心血管、神经、外周等多学科'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Azurion%207%20M20%20image%20guided%20therapy%20system%20interventional%20angiography%20modern%20medical&image_size=landscape_16_9'
    ],
    releaseDate: '2024-02'
  },
  {
    id: 'equip-012',
    brand: 'GE医疗',
    model: 'IGS 530',
    name: 'IGS 530 通用介入血管造影系统',
    description: 'GE医疗中端通用型介入血管造影系统，性能均衡，适用于综合医院多学科介入应用。',
    parameters: {
      '探测器类型': '高分辨率平板探测器',
      '探测器尺寸': '25 x 20 cm',
      '像素矩阵': '1536 x 1280',
      '空间分辨率': '3.9 lp/mm',
      '机架系统': '单C臂落地式',
      '三维成像': '支持3D-RA',
      '剂量技术': 'ASiR低剂量技术',
      '应用范围': '全科介入'
    },
    features: [
      '高性价比通用平台',
      'ASiR迭代重建降剂量',
      '三维旋转血管造影',
      '操作便捷，学习曲线短',
      '稳定可靠，维护成本低',
      '适合地市级医院使用'
    ],
    images: [
      'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20healthcare%20IGS%20530%20universal%20interventional%20angiography%20system%20general%20hospital%20medical&image_size=landscape_16_9'
    ],
    releaseDate: '2023-01'
  }
];

export const experts: Expert[] = [
  {
    id: 'exp-001',
    name: '葛均波',
    title: '中国科学院院士',
    hospital: '复旦大学附属中山医院',
    department: '心内科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20cardiologist%20professor%20white%20coat%20hospital%20background%20dignified&image_size=square',
    bio: '著名心血管病专家，中国科学院院士，长江学者特聘教授，国家杰出青年科学基金获得者。主要从事冠心病发病机制及防治研究，在冠脉介入治疗领域有突出贡献。',
    articleCount: 42
  },
  {
    id: 'exp-002',
    name: '凌锋',
    title: '主任医师、教授',
    hospital: '首都医科大学宣武医院',
    department: '神经外科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20female%20neurosurgeon%20professor%20white%20coat%20hospital%20background%20confident&image_size=square',
    bio: '著名神经外科专家，中国神经介入外科的开拓者之一。在脑血管病的外科及介入治疗方面有深厚造诣，尤其在脊髓血管畸形和脑动脉瘤治疗领域享誉国内外。',
    articleCount: 58
  },
  {
    id: 'exp-003',
    name: '滕皋军',
    title: '中国科学院院士',
    hospital: '东南大学附属中大医院',
    department: '介入科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20interventional%20radiologist%20professor%20white%20coat%20hospital%20background%20scholarly&image_size=square',
    bio: '著名介入放射学专家，中国科学院院士。在肿瘤介入治疗和非血管介入领域取得多项创新性成果，推动了中国介入放射学的发展和国际影响力提升。',
    articleCount: 67
  },
  {
    id: 'exp-004',
    name: '霍勇',
    title: '主任医师、教授',
    hospital: '北京大学第一医院',
    department: '心内科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20cardiologist%20director%20white%20coat%20hospital%20background%20experienced&image_size=square',
    bio: '著名心血管介入专家，国家卫生计生委心血管疾病介入诊疗技术管理专家工作组组长。长期从事冠心病介入治疗和心血管疾病防治工作，推动了中国冠脉介入技术的规范化发展。',
    articleCount: 35
  },
  {
    id: 'exp-005',
    name: '刘建民',
    title: '主任医师、教授',
    hospital: '海军军医大学长海医院',
    department: '神经外科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20neurosurgeon%20professor%20military%20hospital%20white%20coat%20background&image_size=square',
    bio: '著名神经介入专家，在颅内动脉瘤、脑血管畸形等脑血管疾病的介入治疗方面有丰富经验。率先在国内开展多项神经介入新技术，推动了中国神经介入学科的发展。',
    articleCount: 48
  },
  {
    id: 'exp-006',
    name: '王深明',
    title: '主任医师、教授',
    hospital: '中山大学附属第一医院',
    department: '血管外科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20vascular%20surgeon%20professor%20white%20coat%20hospital%20background%20senior&image_size=square',
    bio: '著名血管外科专家，中华医学会外科学分会血管外科学组组长。在主动脉疾病、外周血管疾病的外科和腔内治疗方面有很深造诣，是中国血管外科学科带头人之一。',
    articleCount: 39
  },
  {
    id: 'exp-007',
    name: '徐克',
    title: '主任医师、教授',
    hospital: '中国医科大学附属第一医院',
    department: '介入科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20interventional%20radiologist%20senior%20professor%20white%20coat%20hospital&image_size=square',
    bio: '著名介入放射学专家，中华医学会放射学分会介入学组前任组长，在肿瘤介入和血管介入领域有深厚造诣，推动了中国介入放射学的规范化发展。',
    articleCount: 52
  },
  {
    id: 'exp-008',
    name: '张小明',
    title: '主任医师、教授',
    hospital: '中国人民解放军总医院',
    department: '放射诊断科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20radiologist%20professor%20military%20hospital%20white%20coat&image_size=square',
    bio: '著名介入放射学专家，中国医师协会介入医师分会会长，在肿瘤介入、神经介入等领域有丰富经验，是中国介入医学的重要推动者。',
    articleCount: 61
  },
  {
    id: 'exp-009',
    name: '毛更生',
    title: '主任医师、教授',
    hospital: '北京天坛医院',
    department: '神经介入科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20neurointerventional%20professor%20white%20coat%20hospital%20background&image_size=square',
    bio: '著名神经介入专家，北京天坛医院神经介入科学科带头人，在颅内动脉瘤、脑血管畸形等疾病的介入治疗方面享誉国内外盛名。',
    articleCount: 45
  },
  {
    id: 'exp-010',
    name: '韩雅玲',
    title: '主任医师、教授',
    hospital: '北部战区总医院',
    department: '心内科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20female%20cardiologist%20director%20white%20coat%20hospital%20background%20experienced&image_size=square',
    bio: '著名心血管病专家，中国医师协会心血管内科医师分会会长，在冠心病介入治疗和抗栓治疗领域有突出贡献。',
    articleCount: 38
  },
  {
    id: 'exp-011',
    name: '滕建',
    title: '主任医师、教授',
    hospital: '上海交通大学医学院附属仁济医院',
    department: '介入科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20interventional%20oncology%20professor%20white%20coat%20hospital&image_size=square',
    bio: '著名肿瘤介入专家，中国抗癌协会肿瘤介入专业委员会主任委员，在肝癌、肺癌等实体肿瘤的微创介入治疗有很深造诣。',
    articleCount: 43
  },
  {
    id: 'exp-012',
    name: '吕伟明',
    title: '主任医师、教授',
    hospital: '复旦大学附属中山医院',
    department: '血管外科',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portrait%20professional%20Chinese%20male%20vascular%20surgeon%20middle%20aged%20white%20coat%20hospital&image_size=square',
    bio: '血管外科专家，在主动脉夹层、腹主动脉瘤等大血管疾病的腔内和外科治疗方面有丰富经验，中国血管外科的中坚力量。',
    articleCount: 33
  }
];

export const expertArticles: ExpertArticle[] = [
  {
    id: 'ea-001',
    expertId: 'exp-001',
    title: '中国冠心病介入治疗现状与未来展望',
    summary: '回顾中国冠脉介入治疗三十年发展历程，分析当前技术应用现状，展望未来发展方向。',
    content: `## 发展历程回顾\n\n中国冠心病介入治疗始于上世纪80年代，历经三十余年的发展，已成为全球最大的PCI手术国家。\n\n## 现状分析\n\n### 手术量持续增长\n\n近年来，中国PCI年手术量已超过100万例，且仍保持增长态势。\n\n### 技术水平不断提升\n\n- 药物洗脱支架广泛应用\n- 功能学评估技术普及\n- 腔内影像学指导精准PCI\n- 复杂病变处理能力提升\n\n## 未来展望\n\n1. 精准PCI时代的到来\n2. 生物可吸收支架的发展\n3. AI在冠脉介入中的应用\n4. 基层医院介入能力建设`,
    publishDate: '2024-06-20',
    views: 15680
  },
  {
    id: 'ea-002',
    expertId: 'exp-002',
    title: '脑血管畸形的介入治疗策略选择',
    summary: '系统阐述脑动静脉畸形、硬脑膜动静脉瘘等脑血管畸形的介入治疗指征、技术要点和策略选择。',
    content: `## 脑血管畸形分类\n\n脑血管畸形是一类先天性脑血管发育异常疾病，主要包括：\n- 脑动静脉畸形（AVM）\n- 硬脑膜动静脉瘘（DAVF）\n- 海绵状血管畸形\n- 毛细血管扩张症\n\n## 介入治疗策略\n\n### 脑动静脉畸形\n\n根据Spetzler-Martin分级选择治疗方案：\n- 低分级：可首选手术或SRS\n- 中高分级：可考虑联合治疗\n- 功能区深部病变：慎重选择\n\n### 硬脑膜动静脉瘘\n\n根据Cognard分级选择入路和栓塞材料。\n\n## 技术进展\n\n- 新型液体栓塞材料\n- 血流导向装置应用\n- 多模态影像融合导航`,
    publishDate: '2024-06-15',
    views: 8923
  },
  {
    id: 'ea-003',
    expertId: 'exp-003',
    title: '肝癌介入治疗的精准化与个体化发展',
    summary: '探讨肝癌介入治疗从标准化向精准化、个体化发展的趋势和技术路径。',
    content: `## 肝癌治疗现状\n\n原发性肝癌是我国高发恶性肿瘤，介入治疗在中晚期肝癌治疗中占据重要地位。\n\n## 精准介入治疗\n\n### 精准评估\n\n- 影像学精准评估肿瘤负荷\n- 肝功能储备精准评估\n- 肿瘤生物学行为评估\n\n### 精准治疗\n\n- 超选择性精准栓塞\n\n- 载药微球的个体化选择\n- 联合治疗方案的制定\n\n## 未来方向\n\n1. 影像组学与AI辅助决策\n2. 免疫介入联合治疗\n3. 个体化治疗方案的优化`,
    publishDate: '2024-06-10',
    views: 11256
  },
  {
    id: 'ea-004',
    expertId: 'exp-001',
    title: '药物洗脱支架时代的支架内再狭窄处理策略',
    summary: 'DES时代支架内再狭窄的发生机制、危险因素及处理策略的最新进展。',
    content: `## 概述\n\n尽管DES显著降低了再狭窄率，但支架内再狭窄（ISR）仍是临床面临的重要问题。\n\n## 发生机制\n\n- 新生内膜增生\n- 支架贴壁不良\n- 支架断裂\n- 血管壁炎症反应\n\n## 处理策略\n\n### 药物球囊扩张\n\n目前推荐的一线治疗方案，尤其适用于小血管、分叉病变等。\n\n### 再次支架植入\n\n对于严重狭窄、夹层等情况，可考虑新一代DES或生物可吸收支架。\n\n### 其他方法\n\n- 切割球囊\n- 准分子激光\n- 旋磨技术`,
    publishDate: '2024-05-28',
    views: 7845
  },
  {
    id: 'ea-005',
    expertId: 'exp-004',
    title: '胸痛中心建设与急性心梗救治体系优化',
    summary: '中国胸痛中心建设的成果与经验，以及如何进一步优化急性心梗的救治体系。',
    content: `## 胸痛中心建设成就\n\n中国胸痛中心建设起步于2011年，经过十余年发展，已建立起较为完善的救治网络。\n\n## 关键数据\n\n- 认证胸痛中心数量持续增长\n- D-to-B时间显著缩短\n- 心梗患者死亡率下降\n\n## 优化方向\n\n1. 基层医院救治能力提升\n2. 区域协同救治体系完善\n3. 质控体系建设\n4. 公众健康教育`,
    publishDate: '2024-05-20',
    views: 6532
  },
  {
    id: 'ea-006',
    expertId: 'exp-005',
    title: '颅内动脉瘤介入治疗的技术进展与争议',
    summary: '颅内动脉瘤介入治疗的最新技术进展，以及当前领域存在的热点争议问题。',
    content: `## 技术进展\n\n### 材料创新\n\n- 血流导向装置（FD）不断迭代\n- 新型弹簧圈材料和设计\n- 液体栓塞材料改进\n\n### 技术进步\n\n- 3D导航辅助精准栓塞\n- AI辅助动脉瘤测量和规划\n- 血管内影像指导治疗\n\n## 热点争议\n\n### 未破裂动脉瘤治疗指征\n\n对于小的未破裂动脉瘤，是否需要积极干预仍有争议。\n\n### FD的适应症\n\n血流导向装置的适应症范围仍在探讨中。`,
    publishDate: '2024-05-15',
    views: 9876
  },
  {
    id: 'ea-007',
    expertId: 'exp-007',
    title: '中国介入放射学发展四十年回顾与展望',
    summary: '回顾中国介入放射学四十年发展历程，总结成就，展望未来发展方向。',
    content: `## 发展历程\n\n中国介入放射学起步于上世纪80年代，历经四十年发展，已成为与内科、外科并列的第三大治疗学科。\n\n## 主要成就\n\n### 技术普及\n\n- 从三甲医院普及到地市级医院\n- 技术水平显著提升\n- 手术量居世界前列\n\n### 学科建设\n\n- 建立完整的培训体系\n- 制定多项指南和规范\n- 国际影响力不断提升\n\n## 未来展望\n\n1. 精准介入时代的到来\n2. AI与介入的深度融合\n3. 更多国产创新器械涌现\n4. 基层介入能力进一步提升`,
    publishDate: '2024-06-18',
    views: 13456
  },
  {
    id: 'ea-008',
    expertId: 'exp-008',
    title: '急性缺血性卒中血管内治疗中国经验',
    summary: '中国急性缺血性卒中血管内治疗的现状、经验与未来发展方向。',
    content: `## 中国现状\n\n近年来，中国急性缺血性卒中血管内治疗发展迅速，取栓中心数量和手术量快速增长。\n\n## 关键数据\n\n- 取栓中心数量持续增加\n- 手术量年增长率超过30%\n- 再通率达到国际先进水平\n\n## 中国经验\n\n### 技术创新\n\n- 多种取栓技术联合应用\n- 适合中国人群的器械选择\n- 麻醉方式优化\n\n### 体系建设\n\n- 卒中中心建设模式\n- 区域协同救治网络\n- 质控体系建设\n\n## 挑战与对策\n\n1. 地区发展不均衡\n2. 时间窗内患者比例低\n3. 技术规范化培训不足`,
    publishDate: '2024-06-16',
    views: 10234
  },
  {
    id: 'ea-009',
    expertId: 'exp-009',
    title: '脑血管畸形介入治疗的技术策略',
    summary: '脑动静脉畸形、硬脑膜动静脉瘘等脑血管畸形的介入治疗策略选择与技术要点。',
    content: `## 脑动静脉畸形（AVM）\n\n### 治疗策略\n\n- 小体积、位置表浅：可首选手术或SRS\n- 深部、功能区：介入治疗或联合治疗\n- 高分级：多学科综合治疗\n\n### 介入技术要点\n\n1. 精准的术前评估\n2. 微导管超选到位技术\n3. 栓塞材料选择\n4. 栓塞程度把握\n\n## 硬脑膜动静脉瘘（DAVF）\n\n### 分型与治疗选择\n\n- 前颅底DAVF：经眼静脉入路\n- 海绵窦区DAVF：经岩下窦入路\n- 横窦乙状窦区DAVF：经动脉+经静脉联合\n\n### 技术进展\n\n- 新型液体栓塞材料\n- 经静脉入路技术普及\n- 多模态影像融合导航`,
    publishDate: '2024-06-14',
    views: 7890
  },
  {
    id: 'ea-010',
    expertId: 'exp-010',
    title: '冠心病抗血小板治疗的精准化探索',
    summary: '冠心病介入治疗后抗血小板治疗的个体化选择与精准化管理。',
    content: `## 抗血小板治疗现状\n\n双联抗血小板治疗（DAPT）是冠脉介入术后的标准方案，但如何平衡缺血和出血风险是临床难点。\n\n## 精准化策略\n\n### 基因检测指导\n\n- CYP2C19基因多态性检测\n- 指导P2Y12抑制剂选择\n- 氯吡格雷慢代谢者换药\n\n### 血小板功能检测\n\n- VerifyNow检测\n- 血栓弹力图\n- 高反应者调整方案\n\n### 疗程个体化\n\n- 高出血风险：缩短DAPT时间\n- 高缺血风险：延长DAPT时间\n- 精准评估风险分层\n\n## 未来方向\n\n1. 更多生物标志物指导\n2. AI辅助风险预测\n3. 新型抗栓药物研发`,
    publishDate: '2024-06-12',
    views: 6789
  },
  {
    id: 'ea-011',
    expertId: 'exp-011',
    title: '肝癌介入治疗的多模式联合策略',
    summary: '中晚期肝癌介入治疗与免疫、靶向、放疗等多种治疗手段的联合应用策略。',
    content: `## 肝癌治疗现状\n\n中晚期肝癌单一治疗效果有限，多模式联合治疗已成为发展趋势。\n\n## 联合治疗策略\n\n### TACE+靶向治疗\n\n- TACE联合索拉非尼/仑伐替尼\n- 提高客观缓解率\n- 延长患者生存时间\n\n### TACE+免疫治疗\n\n- TACE联合PD-1/PD-L1抑制剂\n- 协同增效机制\n- 初步结果令人鼓舞\n\n### TACE+放疗\n\n- 门静脉癌栓的联合治疗\n- 肝外转移的局部处理\n- 提高局部控制率\n\n## 展望\n\n1. 最佳联合方案探索\n2. 生物标志物指导治疗\n3. 新的联合靶点发现`,
    publishDate: '2024-06-10',
    views: 8567
  },
  {
    id: 'ea-012',
    expertId: 'exp-012',
    title: '主动脉夹层腔内治疗的技术进展',
    summary: 'Stanford B型主动脉夹层腔内治疗的技术进展与热点问题探讨。',
    content: `## 技术进展\n\n### 支架技术进步\n\n- 覆膜支架材料和设计改进\n- 定制化支架应用增多\n- 开窗/分支支架技术成熟\n\n### 腔内技术创新\n\n- 烟囱技术（Chimney）\n- 开窗技术（Fenestration）\n- 分支支架技术\n\n## 热点问题\n\n### 夹层急性期vs亚急性期治疗时机\n\n目前倾向于亚急性期（发病2-4周）治疗更安全，但复杂高危患者需早期干预。\n\n### 假腔处理策略\n\n- 假腔血栓化的促进\n- 远端破口的处理\n- 远期假腔重塑\n\n## 未来展望\n\n1. 腔内技术向主动脉弓部拓展\n2. 更多创新器械应用\n3. 长期随访数据积累`,
    publishDate: '2024-06-08',
    views: 7234
  }
];

export const wechatAccounts: WechatAccount[] = [
  {
    id: 'wxa-001',
    name: '介入放射学杂志',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20journal%20logo%20interventional%20radiology%20blue%20professional%20modern%20clean%20design&image_size=square',
    description: '《介入放射学杂志》官方公众号，发布最新学术进展、临床研究、指南共识。',
    followerCount: 85000,
    lastUpdate: '2024-06-20'
  },
  {
    id: 'wxa-002',
    name: '神经介入在线',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=neurointerventional%20logo%20brain%20blood%20vessels%20medical%20blue%20purple%20professional%20design&image_size=square',
    description: '专注神经介入领域的学术交流平台，分享脑血管病介入诊疗新技术、新进展。',
    followerCount: 62000,
    lastUpdate: '2024-06-19'
  },
  {
    id: 'wxa-003',
    name: '心血管介入资讯',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cardiology%20logo%20heart%20medical%20red%20blue%20professional%20modern%20clean%20design&image_size=square',
    description: '心血管介入领域专业资讯平台，提供冠脉介入、电生理、结构性心脏病等最新动态。',
    followerCount: 98000,
    lastUpdate: '2024-06-20'
  },
  {
    id: 'wxa-004',
    name: '中国医学影像技术',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=medical%20imaging%20technology%20logo%20scan%20blue%20green%20professional%20modern%20design&image_size=square',
    description: '《中国医学影像技术》杂志官方平台，涵盖放射、超声、核医学等影像技术。',
    followerCount: 72000,
    lastUpdate: '2024-06-18'
  },
  {
    id: 'wxa-005',
    name: '血管外科资讯',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=vascular%20surgery%20logo%20blood%20vessels%20medical%20red%20professional%20clean%20design&image_size=square',
    description: '血管外科专业资讯，涵盖主动脉疾病、外周血管疾病、腔内治疗技术等。',
    followerCount: 45000,
    lastUpdate: '2024-06-17'
  },
  {
    id: 'wxa-006',
    name: '肿瘤介入在线',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interventional%20oncology%20logo%20cancer%20treatment%20teal%20orange%20medical%20professional%20design&image_size=square',
    description: '肿瘤介入治疗专业平台，分享TACE、消融、粒子植入等肿瘤介入技术进展。',
    followerCount: 38000,
    lastUpdate: '2024-06-16'
  },
  {
    id: 'wxa-007',
    name: '影领介入',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20healthineers%20logo%20blue%20medical%20imaging%20interventional%20professional%20modern%20design&image_size=square',
    description: '西门子医疗介入诊疗官方公众号，分享DSA产品技术、临床应用、操作技巧和前沿解决方案。',
    followerCount: 52000,
    lastUpdate: '2024-06-20'
  },
  {
    id: 'wxa-008',
    name: 'IGTS CAS',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20healthcare%20IGTS%20CAS%20logo%20blue%20interventional%20imaging%20medical%20professional%20modern%20design&image_size=square',
    description: '飞利浦冠脉介入整体解决方案官方平台，提供DSA技术培训、病例分享、操作技巧和介入治疗最新进展。',
    followerCount: 48000,
    lastUpdate: '2024-06-19'
  },
  {
    id: 'wxa-009',
    name: '联影介入',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20logo%20red%20blue%20chinese%20medical%20DSA%20interventional%20professional%20design&image_size=square',
    description: '联影医疗介入事业部官方公众号，发布国产uAngio系列DSA最新技术、临床案例和智慧介入解决方案。',
    followerCount: 35000,
    lastUpdate: '2024-06-20'
  },
  {
    id: 'wxa-010',
    name: 'GE医疗介入',
    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20healthcare%20logo%20blue%20interventional%20radiology%20medical%20equipment%20professional%20design&image_size=square',
    description: 'GE医疗介入诊疗官方账号，分享IGS系列血管机技术特点、临床应用培训及全球前沿介入技术。',
    followerCount: 32000,
    lastUpdate: '2024-06-18'
  }
];

export const wechatArticles: WechatArticle[] = [
  {
    id: 'wxart-001',
    accountId: 'wxa-001',
    accountName: '介入放射学杂志',
    title: '2024版中国肝癌介入治疗指南解读',
    summary: '最新版肝癌介入治疗指南发布，本文对指南更新要点进行详细解读。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liver%20cancer%20interventional%20treatment%20guidelines%20medical%20article%20cover%20professional%20blue%20theme&image_size=landscape_4_3',
    publishDate: '2024-06-20',
    views: 12560,
    category: '指南共识'
  },
  {
    id: 'wxart-002',
    accountId: 'wxa-002',
    accountName: '神经介入在线',
    title: '血流导向装置治疗颅内动脉瘤的长期随访结果',
    summary: '多中心研究显示FD治疗颅内动脉瘤的5年闭塞率达85%以上。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=flow%20diverter%20cerebral%20aneurysm%20treatment%20neurointerventional%20medical%20illustration%20professional&image_size=landscape_4_3',
    publishDate: '2024-06-19',
    views: 8932,
    category: '临床研究'
  },
  {
    id: 'wxart-003',
    accountId: 'wxa-003',
    accountName: '心血管介入资讯',
    title: 'IVUS vs OCT：冠脉介入影像指导的选择策略',
    summary: '血管内超声和光学相干断层扫描各有何优势？如何根据临床情况选择？',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=IVUS%20OCT%20coronary%20imaging%20comparison%20intravascular%20ultrasound%20optical%20coherence%20tomography&image_size=landscape_4_3',
    publishDate: '2024-06-20',
    views: 15234,
    category: '技术讨论'
  },
  {
    id: 'wxart-004',
    accountId: 'wxa-001',
    accountName: '介入放射学杂志',
    title: '载药微球TACE治疗肝癌的疗效分析',
    summary: '回顾性分析200例载药微球TACE治疗的肝细胞癌患者临床数据。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=drug%20eluting%20beads%20TACE%20liver%20cancer%20treatment%20interventional%20oncology%20medical%20research&image_size=landscape_4_3',
    publishDate: '2024-06-18',
    views: 6789,
    category: '临床研究'
  },
  {
    id: 'wxart-005',
    accountId: 'wxa-004',
    accountName: '中国医学影像技术',
    title: 'AI在医学影像诊断中的应用现状与挑战',
    summary: '人工智能技术在放射影像领域的应用进展，以及面临的技术和监管挑战。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=AI%20artificial%20intelligence%20medical%20imaging%20diagnosis%20technology%20futuristic%20healthcare&image_size=landscape_4_3',
    publishDate: '2024-06-17',
    views: 9876,
    category: '技术前沿'
  },
  {
    id: 'wxart-006',
    accountId: 'wxa-005',
    accountName: '血管外科资讯',
    title: '主动脉夹层腔内治疗的十年进展',
    summary: '从第一代覆膜支架到当今的定制化支架，主动脉夹层腔内治疗的发展历程。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=aortic%20dissection%20endovascular%20treatment%20stent%20graft%20vascular%20surgery%20medical%20progress&image_size=landscape_4_3',
    publishDate: '2024-06-15',
    views: 7654,
    category: '综述'
  },
  {
    id: 'wxart-007',
    accountId: 'wxa-006',
    accountName: '肿瘤介入在线',
    title: '微波消融治疗肺磨玻璃结节的临床价值',
    summary: '对于早期肺癌或癌前病变的肺磨玻璃结节，微波消融是一种有效的局部治疗选择。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=microwave%20ablation%20lung%20nodule%20cancer%20treatment%20interventional%20oncology%20minimally%20invasive&image_size=landscape_4_3',
    publishDate: '2024-06-14',
    views: 5432,
    category: '临床研究'
  },
  {
    id: 'wxart-008',
    accountId: 'wxa-002',
    accountName: '神经介入在线',
    title: '急性缺血性卒中血管内治疗的时间窗扩展',
    summary: 'DEFUSE 3和DAWN研究带来的启示：先进影像指导下的时间窗扩展策略。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=acute%20ischemic%20stroke%20endovascular%20treatment%20thrombectomy%20brain%20imaging%20medical%20emergency&image_size=landscape_4_3',
    publishDate: '2024-06-13',
    views: 11234,
    category: '指南解读'
  },
  {
    id: 'wxart-009',
    accountId: 'wxa-007',
    accountName: '影领介入',
    title: '西门子Artis icono DSA系统操作指南：基础设置与日常维护',
    summary: '详细介绍西门子Artis icono DSA系统的开机流程、基本参数设置、日常维护保养要点。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20icono%20DSA%20system%20operation%20guide%20medical%20equipment%20interface%20settings&image_size=landscape_4_3',
    publishDate: '2024-06-20',
    views: 8956,
    category: '操作指南'
  },
  {
    id: 'wxart-010',
    accountId: 'wxa-007',
    accountName: '影领介入',
    title: 'syngo DynaCT 3D成像技术操作技巧与临床应用',
    summary: '手把手教你使用西门子DynaCT三维成像功能，包括参数设置、采集流程、图像后处理技巧。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=syngo%20DynaCT%203D%20imaging%20technique%20neurointerventional%20workstation%20medical%20imaging&image_size=landscape_4_3',
    publishDate: '2024-06-18',
    views: 10234,
    category: '技术教程'
  },
  {
    id: 'wxart-011',
    accountId: 'wxa-007',
    accountName: '影领介入',
    title: '西门子双向平板DSA神经介入手术操作规范',
    summary: '双向平板DSA在神经介入中的优势及标准化操作流程，提升手术效率与安全性。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=biplane%20DSA%20neurointerventional%20surgery%20operating%20room%20neurosurgery%20medical%20procedure&image_size=landscape_4_3',
    publishDate: '2024-06-15',
    views: 7654,
    category: '临床应用'
  },
  {
    id: 'wxart-012',
    accountId: 'wxa-008',
    accountName: 'IGTS CAS',
    title: '飞利浦Azurion 7M20 DSA系统操作入门：界面介绍与基础功能',
    summary: '飞利浦Azurion平台操作界面详解，包括主机操作、床旁触控、图像采集基础流程。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Azurion%20DSA%20system%20user%20interface%20control%20panel%20touchscreen%20medical%20equipment&image_size=landscape_4_3',
    publishDate: '2024-06-19',
    views: 9876,
    category: '操作指南'
  },
  {
    id: 'wxart-013',
    accountId: 'wxa-008',
    accountName: 'IGTS CAS',
    title: '飞利浦DoseWise低剂量技术操作与参数优化指南',
    summary: '如何充分利用飞利浦DoseWise智能低剂量技术，在保证图像质量的同时最大限度降低辐射剂量。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20DoseWise%20low%20dose%20technology%20radiation%20safety%20medical%20imaging%20optimization&image_size=landscape_4_3',
    publishDate: '2024-06-17',
    views: 8234,
    category: '技术教程'
  },
  {
    id: 'wxart-014',
    accountId: 'wxa-008',
    accountName: 'IGTS CAS',
    title: 'StentBoost支架增强显影技术操作流程与临床价值',
    summary: '飞利浦StentBoost技术操作步骤详解，帮助术者更清晰地观察支架贴壁情况和血管重建效果。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=StentBoost%20stent%20enhancement%20technique%20coronary%20angiography%20cardiac%20intervention%20imaging&image_size=landscape_4_3',
    publishDate: '2024-06-14',
    views: 6543,
    category: '临床应用'
  },
  {
    id: 'wxart-015',
    accountId: 'wxa-009',
    accountName: '联影介入',
    title: '联影uAngio 960 DSA开机操作流程与日常巡检指南',
    summary: '国产高端DSA uAngio 960系统详细操作手册：开机自检、系统校准、日常检查项目清单。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20960%20DSA%20system%20startup%20procedure%20daily%20inspection%20guide&image_size=landscape_4_3',
    publishDate: '2024-06-20',
    views: 7890,
    category: '操作指南'
  },
  {
    id: 'wxart-016',
    accountId: 'wxa-009',
    accountName: '联影介入',
    title: '联影"零噪声"纯净影像技术原理与操作设置',
    summary: '深度解析联影独家"零噪声"DSA成像技术原理，以及临床操作中的参数优化技巧。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zero%20noise%20DSA%20imaging%20technology%20united%20imaging%20pure%20image%20quality%20medical&image_size=landscape_4_3',
    publishDate: '2024-06-18',
    views: 9123,
    category: '技术教程'
  },
  {
    id: 'wxart-017',
    accountId: 'wxa-009',
    accountName: '联影介入',
    title: 'uLingo智慧仿生语音系统操作指南：解放双手的智能介入',
    summary: '联影AI语音控制系统使用教程，术者通过语音指令即可完成设备操控，提升手术效率。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=uLingo%20smart%20voice%20control%20system%20AI%20interventional%20surgery%20hands%20free%20operation&image_size=landscape_4_3',
    publishDate: '2024-06-16',
    views: 5678,
    category: '功能介绍'
  },
  {
    id: 'wxart-018',
    accountId: 'wxa-010',
    accountName: 'GE医疗介入',
    title: 'GE Discovery IGS 730系统操作入门：主界面与功能模块介绍',
    summary: 'GE医疗顶级IGS 730介入平台操作指南，系统界面布局与各功能模块详细说明。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20Discovery%20IGS%20730%20system%20main%20interface%20function%20modules%20interventional%20angiography&image_size=landscape_4_3',
    publishDate: '2024-06-19',
    views: 6789,
    category: '操作指南'
  },
  {
    id: 'wxart-019',
    accountId: 'wxa-010',
    accountName: 'GE医疗介入',
    title: 'GE ASSIST增强现实导航系统操作流程详解',
    summary: 'GE独创ASSIST增强现实3D引导技术操作方法，如何将CT影像与实时透视精准融合导航。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20ASSIST%20augmented%20reality%20navigation%20system%20image%20fusion%20interventional%20guidance&image_size=landscape_4_3',
    publishDate: '2024-06-17',
    views: 8456,
    category: '技术教程'
  },
  {
    id: 'wxart-020',
    accountId: 'wxa-010',
    accountName: 'GE医疗介入',
    title: 'ASiR DSA迭代重建技术：低剂量高清成像的操作设置',
    summary: 'GE ASiR DSA迭代重建算法原理与操作设置，在降低辐射剂量的同时保持图像质量。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ASiR%20DSA%20iterative%20reconstruction%20low%20dose%20high%20definition%20imaging%20GE%20healthcare&image_size=landscape_4_3',
    publishDate: '2024-06-15',
    views: 5432,
    category: '临床应用'
  },
  {
    id: 'wxart-021',
    accountId: 'wxa-007',
    accountName: '影领介入',
    title: '西门子Artis zeego机器人DSA复合手术室应用与操作',
    summary: '八轴机器人DSA在复合手术室中的应用优势、操作流程及多学科协作要点。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=siemens%20Artis%20zeego%20robotic%20DSA%20hybrid%20operating%20room%20surgery%20medical&image_size=landscape_4_3',
    publishDate: '2024-06-12',
    views: 6789,
    category: '临床应用'
  },
  {
    id: 'wxart-022',
    accountId: 'wxa-008',
    accountName: 'IGTS CAS',
    title: '飞利浦IntraSight介入应用平台：IVUS与FFR一站式操作指南',
    summary: '飞利浦IntraSight平台如何实现血管内超声和血流储备分数的无缝集成操作。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20IntraSight%20interventional%20platform%20IVUS%20FFR%20integration%20cardiac%20imaging&image_size=landscape_4_3',
    publishDate: '2024-06-13',
    views: 7234,
    category: '功能介绍'
  },
  {
    id: 'wxart-023',
    accountId: 'wxa-009',
    accountName: '联影介入',
    title: '联影uAngio CT一体机操作指南：DSA与CT模式切换详解',
    summary: '全球首创DSA+CT一体化系统操作教程，两种模式切换流程与临床应用场景。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=united%20imaging%20uAngio%20CT%20all%20in%20one%20system%20DSA%20CT%20mode%20switching%20guide&image_size=landscape_4_3',
    publishDate: '2024-06-11',
    views: 8901,
    category: '操作指南'
  },
  {
    id: 'wxart-024',
    accountId: 'wxa-001',
    accountName: '介入放射学杂志',
    title: '2024版中国门静脉高压介入治疗专家共识解读',
    summary: '最新版门静脉高压介入治疗共识发布，TIPS适应症和技术要点更新解读。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=portal%20hypertension%20TIPS%20interventional%20treatment%20consensus%20guidelines%20liver&image_size=landscape_4_3',
    publishDate: '2024-06-09',
    views: 9876,
    category: '指南共识'
  },
  {
    id: 'wxart-025',
    accountId: 'wxa-003',
    accountName: '心血管介入资讯',
    title: '生物可吸收支架研究进展与临床应用现状',
    summary: '从第一代到新一代可吸收支架，技术发展历程与临床数据更新。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=bioresorbable%20scaffold%20BRS%20coronary%20stent%20cardiology%20research%20progress&image_size=landscape_4_3',
    publishDate: '2024-06-09',
    views: 10543,
    category: '技术前沿'
  },
  {
    id: 'wxart-026',
    accountId: 'wxa-002',
    accountName: '神经介入在线',
    title: '颈动脉狭窄内膜剥脱vs支架置入：如何选择',
    summary: 'CEA与CAS两种治疗方式的适应症、禁忌症及个体化选择策略。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=carotid%20artery%20stenosis%20CEA%20vs%20CAS%20endarterectomy%20stenting%20comparison&image_size=landscape_4_3',
    publishDate: '2024-06-08',
    views: 7654,
    category: '临床讨论'
  },
  {
    id: 'wxart-027',
    accountId: 'wxa-006',
    accountName: '肿瘤介入在线',
    title: '肝癌消融治疗：RFA、MWA、Cryoablation如何选',
    summary: '射频、微波、冷冻消融三种技术的原理、优缺点及临床适应症选择。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=liver%20cancer%20ablation%20RFA%20MWA%20cryoablation%20comparison%20interventional%20oncology&image_size=landscape_4_3',
    publishDate: '2024-06-07',
    views: 6543,
    category: '技术对比'
  },
  {
    id: 'wxart-028',
    accountId: 'wxa-005',
    accountName: '血管外科资讯',
    title: '下肢深静脉血栓后综合征的预防与治疗',
    summary: 'DVT后PTS的发生机制、预防策略及介入治疗进展。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=post%20thrombotic%20syndrome%20PTS%20DVT%20prevention%20treatment%20vascular%20surgery&image_size=landscape_4_3',
    publishDate: '2024-06-06',
    views: 5432,
    category: '并发症'
  },
  {
    id: 'wxart-029',
    accountId: 'wxa-004',
    accountName: '中国医学影像技术',
    title: '介入机器人：从概念到临床的发展历程',
    summary: '血管介入机器人技术发展现状、临床应用前景及面临的挑战。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=interventional%20robotics%20robotic%20angiography%20future%20medical%20technology%20AI&image_size=landscape_4_3',
    publishDate: '2024-06-05',
    views: 11234,
    category: '前沿技术'
  },
  {
    id: 'wxart-030',
    accountId: 'wxa-007',
    accountName: '影领介入',
    title: '西门子syngo.via后处理工作站操作技巧：血管分析篇',
    summary: 'syngo.via工作站血管分析功能详解，包括CTA/MRA后处理和三维重建技巧。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=syngo%20via%20workstation%20vascular%20analysis%20post%20processing%203D%20reconstruction&image_size=landscape_4_3',
    publishDate: '2024-06-05',
    views: 7890,
    category: '技术教程'
  },
  {
    id: 'wxart-031',
    accountId: 'wxa-008',
    accountName: 'IGTS CAS',
    title: '飞利浦Allura Clarity冠脉介入高级应用：FFR和IVUS协同操作',
    summary: '如何在Allura Clarity平台上实现FFR压力导丝和IVUS血管内超声的协同操作。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=philips%20Allura%20Clarity%20FFR%20IVUS%20coronary%20intervention%20workflow%20integration&image_size=landscape_4_3',
    publishDate: '2024-06-04',
    views: 6789,
    category: '临床应用'
  },
  {
    id: 'wxart-032',
    accountId: 'wxa-010',
    accountName: 'GE医疗介入',
    title: 'GE IGS 730神经介入高级功能：3D路图与融合导航操作指南',
    summary: 'IGS 730三维路图和多模态影像融合导航功能的操作步骤和临床应用价值。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GE%20IGS%20730%203D%20roadmap%20image%20fusion%20neurointerventional%20navigation%20guide&image_size=landscape_4_3',
    publishDate: '2024-06-03',
    views: 7654,
    category: '功能介绍'
  },
  {
    id: 'wxart-033',
    accountId: 'wxa-009',
    accountName: '联影介入',
    title: '国产DSA崛起：联影uAngio系列临床应用案例集锦',
    summary: '多家三甲医院使用联影uAngio DSA的临床应用案例和医生反馈。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=chinese%20DSA%20united%20imaging%20uAngio%20clinical%20cases%20hospital%20domestic%20equipment&image_size=landscape_4_3',
    publishDate: '2024-06-02',
    views: 9123,
    category: '临床应用'
  },
  {
    id: 'wxart-034',
    accountId: 'wxa-001',
    accountName: '介入放射学杂志',
    title: '肺栓塞介入治疗进展：导管溶栓与机械取栓',
    summary: '急性肺栓塞的介入治疗方法选择，包括CDT导管溶栓和机械取栓的临床应用。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pulmonary%20embolism%20interventional%20treatment%20catheter%20thrombolysis%20mechanical%20thrombectomy&image_size=landscape_4_3',
    publishDate: '2024-06-01',
    views: 8765,
    category: '临床研究'
  },
  {
    id: 'wxart-035',
    accountId: 'wxa-003',
    accountName: '心血管介入资讯',
    title: '冠脉钙化病变处理：旋磨、激光与刻痕球囊的选择',
    summary: '严重冠脉钙化病变的处理策略，各种器械的适应症和操作技巧。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=coronary%20calcification%20rotablation%20laser%20scoring%20balloon%20cardiology%20intervention&image_size=landscape_4_3',
    publishDate: '2024-05-31',
    views: 9234,
    category: '技术讨论'
  },
  {
    id: 'wxart-036',
    accountId: 'wxa-002',
    accountName: '神经介入在线',
    title: '急性缺血性卒中血管内治疗时间窗：从4.5小时到24小时',
    summary: '缺血性卒中取栓时间窗扩展的循证医学证据与临床实践指南更新。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=acute%20ischemic%20stroke%20thrombectomy%20time%20window%2024%20hours%20neurointerventional&image_size=landscape_4_3',
    publishDate: '2024-05-30',
    views: 12345,
    category: '指南解读'
  },
  {
    id: 'wxart-037',
    accountId: 'wxa-004',
    accountName: '中国医学影像技术',
    title: '影像组学与人工智能在介入医学中的应用前景',
    summary: 'AI和影像组学技术如何辅助介入手术规划、疗效预测和术中导航。',
    coverImage: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=radiomics%20artificial%20intelligence%20interventional%20medicine%20AI%20medical%20imaging%20future&image_size=landscape_4_3',
    publishDate: '2024-05-29',
    views: 10987,
    category: '前沿技术'
  }
];

export const techCategories = [
  { id: 'basic', name: '基础技术', count: 36 },
  { id: 'advanced', name: '高级技术', count: 22 },
  { id: 'equipment', name: '设备技术', count: 18 },
  { id: 'operation', name: '操作技术', count: 28 },
  { id: 'safety', name: '安全技术', count: 15 },
  { id: 'postprocessing', name: '影像后处理', count: 12 },
  { id: 'cardiac', name: '心血管介入', count: 48 },
  { id: 'neuro', name: '神经介入', count: 42 },
  { id: 'peripheral', name: '外周血管介入', count: 35 },
  { id: 'oncology', name: '肿瘤介入', count: 38 },
  { id: 'comprehensive', name: '综合介入', count: 25 }
];

export const brands = ['飞利浦', '西门子', '联影', 'GE医疗', '东芝', '东软'];
