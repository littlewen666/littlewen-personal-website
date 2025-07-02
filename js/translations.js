const translations = {
    en: {
        "websiteTitle": "Wen Cheng-Yu's Personal Website",
        "login_title": "login | Wen Cheng-Yu's Personal Website",
        "about": "About",
        "experience": "Experience",
        "projects": "Projects",
        "education": "Education",
        "contact": "Contact Me",
        "messageBoard": "Message Board",
        "diary": "Diary",
        "resume": "Resume",
        "wenName": "Wen Cheng-Yu",
        "personalWebsite": "Personal Website",
        "recordLife": "Record Life",
        "more": "More",
        "aiAssistant": "AI Assistant: Ask anything about Wen Cheng-Yu",
        "send": "Send",

        "aboutText1": "I am a graduate student in computer science, passionate about problem-solving and development.",
        "aboutText2": "Proficient in Python, C++, and other technologies. Passionate about machine learning and computer vision.",

        "skills": "Skills",
        "language": "Languages: Python, C, C++, HTML/CSS",
        "database": "Database: MySQL",
        "libraries": "Libraries: NumPy, OpenCV",
        "frameworks": "Frameworks: PyTorch, TensorFlow",



        "conference": "Conference<br>Presentation",
        "confPaper_Colon_Diagnosis": "Presented a paper 'Weakly Supervised Learning for Colon Diagnosis on Whole-Slide Imaging', exploring the application of weakly supervised learning techniques in colon diagnosis.(First Author)",
        "journal": "Journal<br>Publication",
        "journalPaper": "Researched and authored 'Multimodal Information Fusion Deep Neural Network for Large Venue Carbon Emission Assessment Model', focusing on multimodal information fusion in carbon emission assessment.(First Author)",
        "journalPaper_Paddy Field Weeds": "Presented a paper《Deep Learning-Based Semantic Segmentation of Paddy Field Weeds: A Comparative Study of Multi-Model Performance and Perspectives for Smart Agriculture》",

        "assistant": "Research Assistant",
        "researchInstitute": "Institute for Information Industry",
        "assistantWork": "Responsible for analyzing model computational requirements (GFLOPS) and optimizing calculations.",

        "cpe": "Collegiate Programming Examination (CPE)",
        "cpeExam": "Programming Exam",
        "cpeResult": "Participated in CPE and achieved a score of 3 problems solved (524/2811), ranking in the top 18.6% nationwide.",
        "itsa": "ITSA Online Programming Test",
        "itsaExam": "Programming Exam",
        "itsaResult": "Completed 6/7 problems in the ITSA online programming assessment",

                // === 經歷項目標題與詳情 ===
        // Journal of Information and Computing - Paddy Weeds (原 journalPaper_Paddy)
        "journalPaper_Paddy_title": "Journal of Information and Computing: Deep Learning for Paddy Field Weeds", // 新增 collapsbile header title
        "journalPaper_Paddy_short": "Deep Learning for Paddy Field Weeds", // 新增 collapsbile header short text
        "journalPaper_Paddy_full_title": "Journal of Information and Computing: Deep Learning-Based Semantic Segmentation of Paddy Field Weeds: A Comparative Study of Multi-Model Performance and Perspectives for Smart Agriculture", // 新增 full title for collapsible body
        "journalPaper_Paddy_detail1": "Presented a paper《Deep Learning-Based Semantic Segmentation of Paddy Field Weeds: A Comparative Study of Multi-Model Performance and Perspectives for Smart Agriculture》(First Author)",
        "journalPaper_Paddy_detail2": "Explored various deep learning models for accurate weed detection in smart agriculture.",
        "journalPaper_Paddy_detail3": "Analyzed multi-model performance and provided insights for practical applications in smart agriculture.",


        // 2024 Taiwan Symposium on Cloud and Services Computing (原 confPaper_Colon_Diagnosis)
        "confPaper_Colon_Diagnosis_title": "2024 Taiwan Symposium on Cloud and Services Computing: Colon Diagnosis",
        "confPaper_Colon_Diagnosis_short": "Colon Diagnosis with Weakly Supervised Learning",
        "confPaper_Colon_Diagnosis_full_title": "2024 Taiwan Symposium on Cloud and Services Computing: Weakly Supervised Learning for Colon Diagnosis on Whole-Slide Imaging",
        "confPaper_Colon_Diagnosis_detail1": "Published a paper《Weakly Supervised Learning for Colon Diagnosis on Whole-Slide Imaging》，discussing weakly supervised learning techniques for colon diagnosis.",
        "confPaper_Colon_Diagnosis_detail2": "Contributed as the first author to this conference publication.", // 根據您的要求，假設是 First Author


        // The 23rd Conference on Information Technology and Application (原 confPaper_Image_Processing)
        "confPaper_Image_Processing_title": "23rd Conference on IT & Application: Steel Defect Detection",
        "confPaper_Image_Processing_short": "Image Processing for Steel Defect Detection",
        "confPaper_Image_Processing_full_title": "The 23rd Conference on Information Technology and Application: Image Processing for Steel Defect Detection in Smart Manufacturing",
        "confPaper_Image_Processing_detail1": "Presented a paper《影像處理應用於智慧製造中的鋼材缺陷檢測》(Second Author)", // 根據您的要求，假設是 Second Author

        // Journal of Information and Computing - Breast Cancer Diagnosis (新增)
        "journalPaper_Breast_Diagnosis_title": "Journal of Information and Computing: Breast Cancer Diagnosis",
        "journalPaper_Breast_Diagnosis_short": "Transparent Breast Cancer Diagnosis with XAI",
        "journalPaper_Breast_Diagnosis_full_title": "Journal of Information and Computing: Transparent Breast Cancer Diagnosis through Causality, Explainability, and Visualization",
        "journalPaper_Breast_Diagnosis_detail1": "Presented a paper《Transparent Breast Cancer Diagnosis through Causality, Explainability, and Visualization》(Second Author)", // 根據您的要求，假設是 Second Author
        "journalPaper_Breast_Diagnosis_detail2": "Focused on enhancing diagnostic transparency using XAI and causal inference.",


        // 資策會 (III)
        "researchInstitute_title": "Institute for Information Industry (III)",
        "researchInstitute_short": "Research Assistant at III",
        "researchInstitute_full_title": "Institute for Information Industry (III)",
        "assistant": "Research Assistant",
        "assistantWork": "Responsible for analyzing model computational requirements (GFLOPS) research report, assisting in evaluation and optimization of computational needs.",

        // 大學程式能力檢定(CPE)
        "cpe_title": "Collegiate Programming Examination (CPE)",
        "cpe_short": "CPE Programming Exam",
        "cpe_full_title": "Collegiate Programming Examination (CPE)",
        "cpeExam": "Programming Exam",
        "cpeResult": "Participated in CPE and achieved a score of 3 problems solved (524/2811), ranking in the top 18.6% nationwide.",

        // ITSA 程式能力線上自我評量
        "itsa_title": "ITSA Online Programming Test",
        "itsa_short": "ITSA Programming Test",
        "itsa_full_title": "ITSA Online Programming Test",
        "itsaExam": "Programming Exam",
        "itsaResult": "Completed 6/7 problems in the ITSA online programming assessment, demonstrating efficient problem-solving skills.",

        "expandMore": "Expand More",

        "project_colon_diagnosis_title": "Weakly Supervised Learning for Colon Diagnosis on Whole-Slide Imaging",
        "project_colon_diagnosis_desc": "Leveraging weak supervision for efficient colon cancer diagnosis from large pathological images.",
        "project_colon_diagnosis_detail1": "Developed Multiple Instance Learning (MIL) based models for whole-slide image analysis.",
        "project_colon_diagnosis_detail2": "Addressed challenges of large image data and limited pixel-level annotations.",
        "project_colon_diagnosis_detail3": "Achieved high diagnostic accuracy with only slide-level labels, reducing annotation burden.",

        "project_breast_cancer_quantification_title": "Unsupervised Quantification of Tumor and Stromal Ratios in Breast Cancer WSI",
        "project_breast_cancer_quantification_desc": "Utilizing unsupervised learning to quantify tumor and stromal ratios in breast cancer whole-slide images.",
        "project_breast_cancer_quantification_detail1": "Applied unsupervised clustering and segmentation techniques to pathological images.",
        "project_breast_cancer_quantification_detail2": "Provided automated quantification of tumor and stromal tissue components.",
        "project_breast_cancer_quantification_detail3": "Aided in pathological assessment and research without requiring manual annotations.",

        "project_paddy_weed_segmentation_title": "Deep Learning-Based Semantic Segmentation of Paddy Field Weeds",
        "project_paddy_weed_segmentation_desc": "Semantic segmentation of paddy field weeds using deep learning for smart agriculture.",
        "project_paddy_weed_segmentation_detail1": "Compared various deep learning models (e.g., U-Net, DeepLab) for weed detection.",
        "project_paddy_weed_segmentation_detail2": "Evaluated model performance on diverse paddy field datasets.",
        "project_paddy_weed_segmentation_detail3": "Explored applications for automated weeding and crop management in smart farming.",

        "project_transparent_breast_diagnosis_title": "Transparent Breast Cancer Diagnosis through Causality, Explainability, and Visualization",
        "project_transparent_breast_diagnosis_desc": "Enhancing breast cancer diagnosis with explainable AI (XAI) and causal inference for transparency.",
        "project_transparent_breast_diagnosis_detail1": "Integrated Explainable AI (XAI) techniques (e.g., Grad-CAM, LIME) to understand model decisions.",
        "project_transparent_breast_diagnosis_detail2": "Explored causal relationships between pathological features and diagnostic outcomes.",
        "project_transparent_breast_diagnosis_detail3": "Provided visual interpretations and causal insights for clinical decision-making.",

        "project_steel_defect_detection_title": "Image Processing for Steel Defect Detection in Smart Manufacturing",
        "project_steel_defect_detection_desc": "Applying image processing techniques for steel defect detection in smart manufacturing.",
        "project_steel_defect_detection_detail1": "Developed robust image processing pipelines for surface defect identification.",
        "project_steel_defect_detection_detail2": "Implemented anomaly detection algorithms for automated quality control.",
        "project_steel_defect_detection_detail3": "Enhanced efficiency and accuracy of quality inspection in industrial settings.",
        
        "accomplishments": "Accomplishments", 

        "educationHistory": "Education History",
        "nttu": "National Taitung University",
        "nttuLocation": "Taitung, Taiwan",
        "nttuDegree": "Bachelor of Computer Science, College of Science and Engineering",
        "nttuModule": "Specialization: Software Design and Applications",
        "nttuResearch": "Research Projects:",
        "nttuThesis": "Unsupervised Learning-based Automatic Quantification of Tumor and Stroma Ratios in Whole-Slide Pathology Images of Breast Cancer",

        "ncu": "National Central University",
        "ncuLocation": "Taoyuan, Taiwan",
        "ncuDegree": "Accepted into  Master's Program in Computer Science",
        "ncuPlan": "Planned Enrollment",

        "contactMe": "Contact Me",
        "yourName": "Your Name:",
        "enterYourName": "Enter your name",
        "yourEmail": "Your Email:",
        "enterYourEmail": "Enter your Email",
        "subject": "Subject:",
        "enterSubject": "Enter subject",
        "message": "Message:",
        "enterMessage": "Enter message content",
        "sendEmail": "Send Email",

        "login" : "login",
        "Email" : "Email",
        "password":"password",
        "login_password" : "Enter your password",
        "no_account" : "Don't have an account? <a href='register.html'>Sign up now</a>",
        "forgotPassword" : "forgot your password",

        "enterquestion": "Enter question...",
        "loginButton" : "Please log in to use the commenting feature.",

        "life": "Life",


        "hobbiesAndExpertise": "Hobbies & Expertise",
        "personalHobbies": "Personal Hobbies",

        "hobby_gaming_intro": "Gaming, primarily mobile games. Here are the games I actively play:", // 新增
        "aov": "Arena of Valor (Battlefield Legend)", 
        "wildrift": "League of Legends: Wild Rift (Master 3)", 
        "kartrider": "KartRider Rush+ (King Racer 3)", // 新增
        "gta5": "Recently playing Grand Theft Auto V (GTA V) Story Mode", // 新增
        "hobby_netflix_intro": "Watching Netflix, my favorites include:", // 新增
        "hobby_netflix": "Watching Netflix, my favorites include:",
        "hobby_netflix_anime": "Anime: Frieren: Beyond Journey's End, Violet Evergarden, Kino's Journey",
        "hobby_netflix_koreandrama": "Korean Dramas: Signal, Lovestruck in the City, Kingdom",
        "hobby_netflix_currently_watching": "Currently considering watching 'Welcome to Samdal-ri'",
        "hobby_youtube": "Browse YouTube randomly",
        "personalExpertise": "Personal Expertise",
        "expertise_AI": "My major, currently specializing in AI and Machine Learning.",
        "expertise_social_sciences": "I was in the liberal arts in high school, so I'm also quite good at social sciences.",
        "clubsAttended": "Clubs Attended",
        "clubsAttended_none": "No content.",
        "favoriteCourses": "Favorite Courses",
        "favoriteCourses_none": "No content.",
        "favoriteCountries": "Favorite Countries",
                "favoriteCountries_text_intro": "Only visited China, South Korea, and Vietnam. I highly recommend Chengdu and Shanghai in China, especially Shanghai's shengjianbao which are delicious.", // 更新此翻譯鍵
        "visitedCitiesMapLabel": "Click on markers to see city names", // 新增
        "chengdu": "Chengdu", // 新增
        "shanghai": "Shanghai", // 新增
        "guangzhou": "Guangzhou", // 新增
        "chongqing": "Chongqing", // 新增
        "da nang": "Da Nang", // 新增
        "seoul": "Seoul", // 新增
                "noDetailsAvailable": "No details available for this city.", // 新增
        "attractions": "Attractions/Memorable Moments:", // 新增

        "chengduDetails": {
            "images": [
                { src: "/assets/img/visited_places/chengdu_example1.jpg", alt: "Chengdu street" },
                
            ],
            "points": [

            ]
        },
        "shanghaiDetails": {
            "images": [
                { src: "/assets/img/visited_places/shanghai_disney.jpg", alt: "Shanghai Disneyland" },
                { src: "/assets/img/visited_places/shanghai_bund.jpg", alt: "The Bund, Shanghai" },
                { src: "/assets/img/visited_places/wuzhen.jpg", alt: "Wuzhen Water Town" },
                { src: "/assets/img/visited_places/shanghai_zhuzhengyuan.jpg", alt: "Humble Administrator's Garden" } 
            ],
            "points": [
                "Shanghai Disneyland",
                "The Bund",
                "Wuzhen Water Town",
                "Humble Administrator's Garden"
            ]
        },
        "guangzhouDetails": {
            "images": [
                { src: "/assets/img/visited_places/guangzhou_example1.jpg", alt: "Guangzhou Tower" }
            ],
            "points": [

            ]
        },
        "chongqingDetails": {
            "images": [
                { src: "/assets/img/visited_places/chongqing_example1.jpg", alt: "Chongqing cityscape" }
            ],
            "points": [
 
            ]
        },
        "danangDetails": {
            "images": [
                { src: "/assets/img/visited_places/danang_example1.jpg", alt: "Da Nang beach" }
            ],
            "points": [

            ]
        },
        "seoulDetails": {
            "images": [
                { src: "/assets/img/visited_places/seoul_example1.jpg", alt: "Gyeongbokgung Palace" }
            ],
            "points": [

            ]
        },
        "recentTroubles": "Recent Troubles",
        "recentTroubles_text": "Feeling a bit anxious about starting graduate school for Computer Science.",
        "exchangeSkills": "Talents for Exchange Learning",
        "exchangeSkills_none": "No content.",
        "thingsToTry": "Things to Try",
        "thingsToTry_japanese": "Recently want to learn Japanese, but I have zero foundation, currently researching.",


        "forgotPasswordTitle": "Forgot Password | Wen Cheng-Yu's Personal Website",
        "forgotPassword": "Forgot Password",
        "Email": "Email",
        "sendResetEmail": "Send Reset Password Email",
        "returnToLogin": "Return to <a href='login.html'>Login</a>",
        "login": "Login",
        "emailRequired": "❌ Please enter your Email!",
        "resetFail": "❌ Failed to send, please try again later!",

        "registerTitle": "Register | Web App",
        "register": "Register an Account",
        "username": "Username",
        "Email": "Email",
        "password": "Password",
        "registerButton": "Register",
        "haveAccount": "Already have an account? <a href='login.html'>Login</a>",
        "login": "Login",
        
        "enterYourName": "Enter your name",
        "enterYourEmail": "Enter your email",
        "enterYourPassword": "Enter your password",


        "resetPasswordTitle": "Reset Password | Web App",
        "resetPassword": "Reset Your Password",
        "newPassword": "New Password",
        "confirmPassword": "Confirm Password",
        "resetButton": "Reset Password",

        "enterNewPassword": "Enter new password",
        "confirmNewPassword": "Confirm new password",


        "accountTitle": "Account Information",
        "accountInfo": "Account Information",
        "password_": "Password:",
        "edit": "Edit",
        "updateInfo": "Update Info",
        "deleteAccount": "Delete Account",
        "logout": "Logout",
        "backHome": "Back to Home",
        
        "enterNewName": "Enter new name",
        "enterNewEmail": "Enter new email",






                
            
    },
    zh: {
        "websiteTitle": "溫政瑜的個人網頁",
        "login_title": "登入 | 溫政瑜的個人網頁",
        "about": "關於",
        "experience": "經歷",
        "projects": "專案",
        "education": "就學",
        "contact": "聯絡我",
        "messageBoard": "留言板",
        "life": "生活aaa",
        "resume": "簡歷",
        "wenName": "溫政瑜",
        "personalWebsite": "個人網頁",
        "recordLife": "紀錄生活",
        "more": "更多",
        "aiAssistant": "AI助理:詢問關於溫政瑜的任何問題",
        "send": "發送",

        "aboutText1": "我是 <b>一位資訊工程準研究生</b>，熱衷於解決問題與開發應用。",
        "aboutText2": "具備 <b>Python、C++</b> 等語言技術。主要研究 <b>機器學習</b> 與 <b>電腦圖像</b>。",

        "skills": "技能",
        "language": "語言: Python, C, C++, HTML/CSS",
        "database": "資料庫: MySQL",
        "libraries": "套件庫: NumPy, OpenCV",
        "frameworks": "框架: PyTorch, TensorFlow",

        "conference": "研討會發表",
        "confPaper_Colon_Diagnosis": "發表論文《Weakly Supervised Learning for Colon Diagnosis on Whole-Slide Imaging》，探討基於弱監督學習技術在結腸診斷上的應用。(First Author)",
        "journalPaper_Paddy Field Weeds": "發表論文《Deep Learning-Based Semantic Segmentation of Paddy Field Weeds: A Comparative Study of Multi-Model Performance and Perspectives for Smart Agriculture》",
        "journal": "期刊發表",
        "journalPaper": "研究並撰寫《Multimodal Information Fusion Deep Neural Network for Large Venue Carbon Emission Assessment Model》，專注於多模態資訊融合深度神經網路在碳排放評估中的應用。(First Author)",
        "assistant": "兼任助理",
        "researchInstitute": "資策會",
        "assistantWork": "負責偵測模型運算需量 (GFLOPS) 研究分析報告，協助評估與最佳化計算需求。",

        "cpe": "大學程式能力檢定(CPE)",
        "cpeExam": "程式能力測驗",
        "cpeResult": "參與CPE並獲得三題成績(524/2811)全國前18.6%。",
        "itsa": "ITSA 程式能力線上自我評量",
        "itsaExam": "程式能力測驗",
        "itsaResult": "在 ITSA 程式能力線上評測中完成 6/7 題",

        // === 經歷項目標題與詳情 ===
        // Journal of Information and Computing - Paddy Weeds
        "journalPaper_Paddy_title": "資訊與計算期刊: 水稻田雜草深度學習分割",
        "journalPaper_Paddy_short": "水稻田雜草深度學習分割",
        "journalPaper_Paddy_full_title": "資訊與計算期刊：基於深度學習的水稻田雜草語義分割：多模型性能比較與智慧農業展望",
        "journalPaper_Paddy_detail1": "發表論文《Deep Learning-Based Semantic Segmentation of Paddy Field Weeds: A Comparative Study of Multi-Model Performance and Perspectives for Smart Agriculture》(第一作者)",
        "journalPaper_Paddy_detail2": "探討多種深度學習模型在智慧農業雜草檢測中的應用。",
        "journalPaper_Paddy_detail3": "分析多模型性能並為智慧農業的實際應用提供見解。",


        // 2024 Taiwan Symposium on Cloud and Services Computing
        "confPaper_Colon_Diagnosis_title": "2024 臺灣雲端與服務運算研討會: 結腸診斷",
        "confPaper_Colon_Diagnosis_short": "弱監督學習結腸診斷",
        "confPaper_Colon_Diagnosis_full_title": "2024 臺灣雲端與服務運算研討會：基於弱監督學習的結腸診斷於全玻片影像",
        "confPaper_Colon_Diagnosis_detail1": "發表論文《Weakly Supervised Learning for Colon Diagnosis on Whole-Slide Imaging》，探討基於弱監督學習技術在結腸診斷上的應用。(第一作者)",
        "confPaper_Colon_Diagnosis_detail2": "作為第一作者參與此研討會發表。",


        // The 23rd Conference on Information Technology and Application
        "confPaper_Image_Processing_title": "第23屆資訊科技與應用研討會: 鋼材缺陷檢測",
        "confPaper_Image_Processing_short": "影像處理鋼材缺陷檢測",
        "confPaper_Image_Processing_full_title": "第23屆資訊科技與應用研討會：影像處理應用於智慧製造中的鋼材缺陷檢測",
        "confPaper_Image_Processing_detail1": "發表論文《影像處理應用於智慧製造中的鋼材缺陷檢測》(第二作者)",

        // Journal of Information and Computing - Breast Cancer Diagnosis
        "journalPaper_Breast_Diagnosis_title": "資訊與計算期刊: 乳癌透明化診斷",
        "journalPaper_Breast_Diagnosis_short": "可解釋性 AI 乳癌診斷",
        "journalPaper_Breast_Diagnosis_full_title": "資訊與計算期刊：基於因果關係、可解釋性與視覺化的透明化乳癌診斷",
        "journalPaper_Breast_Diagnosis_detail1": "發表論文《Transparent Breast Cancer Diagnosis through Causality, Explainability, and Visualization》(第二作者)",
        "journalPaper_Breast_Diagnosis_detail2": "側重於透過可解釋性人工智慧和因果推斷提升診斷透明度。",


        // 資策會 (III)
        "researchInstitute_title": "財團法人資訊工業策進會 (資策會)",
        "researchInstitute_short": "資策會兼任助理",
        "researchInstitute_full_title": "財團法人資訊工業策進會 (資策會)",
        "assistant": "兼任助理",
        "assistantWork": "負責偵測模型運算需量 (GFLOPS) 研究分析報告，協助評估與最佳化計算需求。",

        // 大學程式能力檢定(CPE)
        "cpe_title": "大學程式能力檢定(CPE)",
        "cpe_short": "CPE 程式能力測驗",
        "cpe_full_title": "大學程式能力檢定(CPE)",
        "cpeExam": "程式能力測驗",
        "cpeResult": "參與CPE並獲得三題成績(524/2811)全國前18.6%。",

        // ITSA 程式能力線上自我評量
        "itsa_title": "ITSA 程式能力線上自我評量",
        "itsa_short": "ITSA 程式能力測驗",
        "itsa_full_title": "ITSA 程式能力線上自我評量",
        "itsaExam": "程式能力測驗",
        "itsaResult": "在 ITSA 程式能力線上評測中完成 6/7 題，展現高效的程式解決能力。",

        "expandMore": "展開更多",



        "project_colon_diagnosis_title": "Weakly Supervised Learning for Colon Diagnosis on Whole-Slide Imaging",
        "project_colon_diagnosis_desc": "利用弱監督學習技術，高效診斷結腸癌病理影像。",
        "project_colon_diagnosis_detail1": "開發基於多重實例學習 (MIL) 的模型，用於全玻片影像分析。",
        "project_colon_diagnosis_detail2": "解決了大規模影像數據和有限像素級註釋的挑戰。",
        "project_colon_diagnosis_detail3": "僅利用玻片級標籤，實現了高精度診斷，降低了註釋負擔。",

        "project_breast_cancer_quantification_title": "基於非監督式學習針對乳癌全玻片病理影像中腫瘤與間質比例之自動量化方法",
        "project_breast_cancer_quantification_desc": "利用非監督式學習自動量化乳癌全玻片影像中的腫瘤與間質比例。",
        "project_breast_cancer_quantification_detail1": "將非監督式聚類與分割技術應用於病理影像。",
        "project_breast_cancer_quantification_detail2": "提供了腫瘤與間質組織成分的自動化量化方法。",
        "project_breast_cancer_quantification_detail3": "在無需手動註釋的情況下，輔助病理評估與研究。",

        "project_paddy_weed_segmentation_title": "Deep Learning-Based Semantic Segmentation of Paddy Field Weeds",
        "project_paddy_weed_segmentation_desc": "運用深度學習進行水稻田雜草語義分割，提升智慧農業。",
        "project_paddy_weed_segmentation_detail1": "比較了多種深度學習模型（例如 U-Net, DeepLab）用於雜草檢測。",
        "project_paddy_weed_segmentation_detail2": "評估了模型在不同水稻田數據集上的性能。",
        "project_paddy_weed_segmentation_detail3": "探討了在智慧農業中，自動化除草與作物管理的應用潛力。",

        "project_transparent_breast_diagnosis_title": "Transparent Breast Cancer Diagnosis through Causality, Explainability, and Visualization",
        "project_transparent_breast_diagnosis_desc": "透過因果關係、可解釋性與視覺化，實現透明化乳癌診斷。",
        "project_transparent_breast_diagnosis_detail1": "整合可解釋性人工智慧 (XAI) 技術（例如 Grad-CAM, LIME），以理解模型決策。",
        "project_transparent_breast_diagnosis_detail2": "探討病理特徵與診斷結果之間的因果關係。",
        "project_transparent_breast_diagnosis_detail3": "提供視覺化解釋和因果洞察，以輔助臨床決策。",

        "project_steel_defect_detection_title": "影像處理應用於智慧製造中的鋼材缺陷檢測",
        "project_steel_defect_detection_desc": "在智慧製造中應用影像處理技術進行鋼材缺陷檢測。",
        "project_steel_defect_detection_detail1": "開發了穩健的影像處理管線，用於表面缺陷識別。",
        "project_steel_defect_detection_detail2": "實施異常檢測演算法，實現自動化品質控制。",
        "project_steel_defect_detection_detail3": "提升了工業環境中品質檢測的效率和準確性。",

        "accomplishments": "專案亮點", // 確保這個鍵存在



        "educationHistory": "就學經歷",
        "nttu": "國立臺東大學",
        "nttuLocation": "臺灣.臺東",
        "nttuDegree": "理工學院 資訊工程學士",
        "nttuModule": "專業模組: 軟體設計與應用",
        "nttuResearch": "專題研究:",
        "nttuThesis": "基於非監督式學習針對乳癌全玻片病理影像中腫瘤與間質比例之自動量化方法",

        "ncu": "國立中央大學",
        "ncuLocation": "臺灣.桃園",
        "ncuDegree": "資訊工程AI碩士班 錄取",
        "ncuPlan": "預計就讀",

        "contactMe": "聯絡我",
        "yourName": "您的姓名：",
        "enterYourName": "輸入您的姓名",
        "yourEmail": "您的 Email：",
        "enterYourEmail": "輸入您的電子郵件",
        "subject": "主題：",
        "enterSubject": "輸入主題",
        "message": "訊息：",
        "enterMessage": "輸入訊息內容",
        "sendEmail": "發送 Email",
        



        "login" : "登入",
        "Email": "電子郵件",
        "password":"密碼",
        "login_password" : "請輸入密碼",
        "no_account": "還沒有帳號？<a href='register.html'>立即註冊</a>",
        "forgotPassword" : "忘記密碼?",

        "enterquestion": "輸入問題...",
        "loginButton" : "請登入以使用留言功能",

        "life": "生活",

        "hobbiesAndExpertise": "興趣與專長",
        "personalHobbies": "個人興趣",
        "hobby_gaming_intro": "玩遊戲，以手遊為主，以下是有認真在玩的遊戲:",
        "aov": "傳說對決Arena of Valor(戰場傳說 | S)", 
        "wildrift": "激鬥峽谷League of Legends: Wild Rift(大師III | Master III)", 
        "kartrider": "跑跑卡丁車KartRider Rush+(王者車手III | Genius III)",
        "gta5": "最近在玩Grand Theft Auto V (GTA V) 的故事模式(Story Mode)", 
        "hobby_netflix": "看Netflix，以下是我喜歡的:",
        "hobby_netflix_anime": "動漫 : 葬送的芙利蓮，紫羅蘭的永恆花園，奇諾之旅",
        "hobby_netflix_koreandrama": "韓劇 : 信號，愛在大都會，屍戰朝鮮",
        "hobby_netflix_currently_watching": "最近在考慮要不要看苦盡甘來",
        "hobby_youtube": "到YouTube到處看看",
        "personalExpertise": "個人專長",
        "expertise_AI": "本科，目前專研AI與機器學習相關。",
        "expertise_social_sciences": "另外我高中是文組的，所以社會科也蠻擅長的。",
        "clubsAttended": "曾參加過的社團",
        "clubsAttended_none": "沒有內容。",
        "favoriteCourses": "喜歡的課程",
        "favoriteCourses_none": "沒有內容。",
        "favoriteCountries": "喜歡的國家",

        "favoriteCountries_text_intro": "只去過中國、韓國跟越南，其中中國去了不少次，個人大推成都跟上海，尤其是上海生煎包很好吃。", // 更新此翻譯鍵
        "visitedCitiesMapLabel": "點擊地圖上的標記查看城市名稱", // 新增
        "chengdu": "成都", // 新增
        "shanghai": "上海", // 新增
        "guangzhou": "廣州", // 新增
        "chongqing": "重慶", // 新增
        "da nang": "峴港", // 新增
        "seoul": "首爾", // 新增
                "noDetailsAvailable": "此城市無詳細資訊。",
        "attractions": "景點/難忘回憶:",

        // ====== 城市詳細資訊翻譯 (新增) ======
        "chengduDetails": {
            "images": [
                { src: "/assets/img/visited_places/chengdu_example1.jpg", alt: "樂山大佛" }
            ],
            "points": [
                
                "都江堰",
                "樂山大佛",
                "大熊貓繁育研究基地",
                "峨眉山"
            ]
        },
        "shanghaiDetails": {
            "images": [
                { src: "/assets/img/visited_places/wuzhen.jpg", alt: "烏鎮水鄉" }
            ],
            "points": [
                "上海迪士尼",
                "上海外灘",
                "烏鎮水鄉",
                "拙政園"
            ]
        },
        "guangzhouDetails": {
            "images": [
                { src: "/assets/img/visited_places/guangzhou_example1.jpg", alt: "福建土樓" }
            ],
            "points": [
                "福建土樓"
            ]
        },
        "chongqingDetails": {
            "images": [
                { src: "/assets/img/visited_places/chongqing_example1.jpg", alt: "重慶夜景" }
            ],
            "points": [
                "黃鶴樓",
                "武當山",
                "長江夜游"
            ]
        },
        "danangDetails": {
            "images": [
                { src: "/assets/img/visited_places/danang_example1.jpg", alt: "峴港海灘" }
            ],
            "points": [
                "會安古鎮",
                "五行山",
                "巴拿山"
            ]
        },
        "seoulDetails": {
            "images": [
                { src: "/assets/img/visited_places/seoul_example1.jpg", alt: "滑雪" }
            ],
            "points": [
                "愛寶樂園",
                "明洞購物街",
                "滑雪",
            ]
        },
        "recentTroubles": "自己最近的困擾",
        "recentTroubles_text": "要上資工研究所有點焦慮。",
        "exchangeSkills": "可以交換學習的才藝",
        "exchangeSkills_none": "沒有內容。",
        "thingsToTry": "想嘗試的事情",
        "thingsToTry_japanese": "最近想學日語，但我0基礎，正在研究中。",

        "forgotPasswordTitle": "忘記密碼 | 溫政瑜的個人網頁",
        "forgotPassword": "忘記密碼",
        "sendResetEmail": "發送重設密碼郵件",
        "returnToLogin": "返回 <a href='login.html'>登入</a>",
        "emailRequired": "❌ 請輸入 Email！",
        "resetFail": "❌ 發送失敗，請稍後再試！",

        "registerTitle": "註冊 | Web App",
        "register": "註冊帳號",
        "username": "使用者名稱",
        "Email": "電子郵件",
        "password": "密碼",
        "registerButton": "註冊",
        "haveAccount": "已有帳號？<a href='login.html'>立即登入</a>",
        "login": "登入",
        "enterYourPassword": "請輸入密碼",
        


        "resetPasswordTitle": "重設密碼 | 溫政瑜的個人網頁",
        "resetPassword": "重設您的密碼",
        "newPassword": "新密碼",
        "confirmPassword": "確認新密碼",
        "resetButton": "重設密碼",

        "enterNewPassword": "請輸入新密碼",
        "confirmNewPassword": "請確認新密碼",

        "accountTitle": "帳戶資訊",
        "accountInfo": "帳戶資訊",
        "password_": "密碼:",
        "edit": "修改",
        "updateInfo": "更新資料",
        "deleteAccount": "刪除帳號",
        "logout": "登出",
        "backHome": "返回首頁",
        
        "enterNewName": "修改名稱",
        "enterNewEmail": "修改電子郵件",

        "enterNewPassword": "請輸入新密碼",
        "confirmNewPassword": "請確認新密碼"









    }
};

// 目前語言
let currentLang = localStorage.getItem("language") || "zh";

function updateLanguage(lang) {
    localStorage.setItem("language", lang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key]; 
        }
    });
    
}



document.addEventListener("DOMContentLoaded", function () {
    let savedLang = localStorage.getItem("language");
    if (!savedLang) {
        savedLang = "zh"; // 預設語言
        localStorage.setItem("language", savedLang);
    }
    currentLang = savedLang; // 設定當前語言
    console.log("Current language on load:", currentLang);

    updateLanguage(currentLang);
/* 
    setTimeout(() => {
        updatePlaceholders();
    }, 100);
*/
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("toggleLang")?.addEventListener("click", function () {
        currentLang = currentLang === "zh" ? "en" : "zh";
        localStorage.setItem("language", currentLang); // 更新 localStorage
        updateLanguage(currentLang);

        // --- 新增以下程式碼 ---
        // 嘗試強制 Materialize 側邊導航刷新
        // 舊版 Materialize 可能需要這樣做
        // 首先檢查 sideNav 實例是否存在
        const sideNavInstance = $('.button-collapse');
        if (sideNavInstance.data('sidenav')) { // 檢查是否已初始化
            sideNavInstance.sideNav('destroy'); // 銷毀舊實例
        }
        sideNavInstance.sideNav(); // 重新初始化
        // --- 結束新增程式碼 ---

        //updatePlaceholders(); // 根據您的註釋，這些應該保持註釋
        //checkLoginStatus();
    });
});
