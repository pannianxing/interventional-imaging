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
  }
];

export const techCategories = [
  { id: 'basic', name: '基础技术', count: 28 },
  { id: 'advanced', name: '高级技术', count: 15 },
  { id: 'equipment', name: '设备技术', count: 12 },
  { id: 'operation', name: '操作技术', count: 22 },
  { id: 'safety', name: '安全技术', count: 8 },
  { id: 'postprocessing', name: '影像后处理', count: 10 },
  { id: 'cardiac', name: '心血管介入', count: 35 },
  { id: 'neuro', name: '神经介入', count: 28 },
  { id: 'peripheral', name: '外周血管介入', count: 18 },
  { id: 'oncology', name: '肿瘤介入', count: 24 }
];

export const brands = ['飞利浦', '西门子', '联影', 'GE医疗', '东芝', '东软'];
