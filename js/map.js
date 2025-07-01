// ====== 地圖初始化與城市標記 (js/script.js 或 js/map.js) ======

// 確保 Leaflet 和 DOM 都已載入
document.addEventListener('DOMContentLoaded', function() {
    const mapContainer = document.getElementById('visitedMap');
    if (!mapContainer) {
        console.warn('Map container #visitedMap not found. Skipping map initialization.');
        return;
    }

    const map = L.map('visitedMap').setView([28.0, 105.0], 4); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // 定義去過的城市及其座標和詳細資訊
    const visitedCities = [
        { 
            name_en: "Chengdu", name_zh: "成都", lat: 30.5728, lon: 104.0668,
            details_key: "chengduDetails" // 指向 translations.js 中的鍵
        },
        { 
            name_en: "Shanghai", name_zh: "上海", lat: 31.2304, lon: 121.4737,
            details_key: "shanghaiDetails" 
        },
        { 
            name_en: "Guangzhou", name_zh: "廣州", lat: 23.1291, lon: 113.2644,
            details_key: "guangzhouDetails" 
        },
        { 
            name_en: "Chongqing", name_zh: "重慶", lat: 29.5630, lon: 106.5574,
            details_key: "chongqingDetails" 
        },
        { 
            name_en: "Da Nang", name_zh: "峴港", lat: 16.0545, lon: 108.2022,
            details_key: "danangDetails" 
        },
        { 
            name_en: "Seoul", name_zh: "首爾", lat: 37.5665, lon: 126.9780,
            details_key: "seoulDetails" 
        }
    ];

    const markers = []; // 儲存 markers 實例以便更新 popup

    visitedCities.forEach(city => {
        const marker = L.marker([city.lat, city.lon]).addTo(map);
        markers.push(marker); // 將 marker 加入陣列

        marker.bindPopup(getCityPopupContent(city, currentLang));
    });

    const group = new L.featureGroup(visitedCities.map(city => L.marker([city.lat, city.lon])));
    map.fitBounds(group.getBounds().pad(0.2)); 

    // 輔助函數：根據城市和語言生成彈出視窗的 HTML 內容 (移除圖片部分)
    function getCityPopupContent(city, lang) {
        const cityTranslationKey = city.name_en.toLowerCase();
        const cityName = translations[lang][cityTranslationKey] || translations.zh[city.name_zh]; 
        const details = translations[lang][city.details_key] || translations.zh[city.details_key]; 

        if (!details || !details.points || details.points.length === 0) {
            return `<b>${cityName}</b><br>${translations[lang].noDetailsAvailable || translations.zh.noDetailsAvailable}`;
        }

        let content = `<div style="max-width: 250px;"><h4>${cityName}</h4>`;
        
        // 添加圖片
        if (details.images && details.images.length > 0) {
            content += '<div style="display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 10px;">';
            details.images.forEach(img => {
                content += `<img src="${img.src}" alt="${img.alt}" style="width: 100px; height: 75px; object-fit: cover; border-radius: 4px;">`;
            });
            content += '</div>';
        }
        
        // 只添加景點/事件列表 (不包含圖片)
        content += '<h5>' + (translations[lang].attractions || translations.zh.attractions) + '</h5><ul>';
        details.points.forEach(point => {
            content += `<li>${point}</li>`;
        });
        content += '</ul>';

        content += '</div>';
        return content;
    }

    // 監聽語言切換事件，更新地圖標記的彈出視窗文本
    document.getElementById("toggleLang")?.addEventListener("click", function () {
        markers.forEach((marker, index) => {
            const city = visitedCities[index];
            const newContent = getCityPopupContent(city, currentLang);
            marker.setPopupContent(newContent);
            if (marker.isPopupOpen()) {
                marker.openPopup();
            }
        });
    });

    // ====== 地圖高度動態調整，使其與左側卡片平行 ======
    function adjustMapHeight() {
        // 確保在桌面模式下才進行高度調整，行動裝置通常會堆疊
        const screenWidth = window.innerWidth;
        const desktopBreakpoint = 992; // Materialize 默認的桌面斷點

        if (screenWidth >= desktopBreakpoint) {
            const leftCard = document.querySelector('#life .col.s12.m6.l6 .card'); // 選擇左側的興趣與專長卡片
            const mapCardContent = document.querySelector('#visitedMap').closest('.card-content');
            const mapCard = document.querySelector('#visitedMap').closest('.card');


            if (leftCard && mapContainer && mapCardContent && mapCard) {
                // 計算左側卡片的完整高度 (包括 margin-bottom)
                const leftCardRect = leftCard.getBoundingClientRect();
                const leftCardStyle = window.getComputedStyle(leftCard);
                const leftCardTotalHeight = leftCardRect.height + parseFloat(leftCardStyle.marginBottom);

                // 計算地圖卡片內容的非地圖部分高度（標題 + 上方文字 + 下方文字 + padding）
                const mapTitleHeight = mapCardContent.querySelector('h4').offsetHeight;
                const mapIntroTextHeight = mapCardContent.querySelector('p[data-i18n="favoriteCountries_text_intro"]').offsetHeight;
                const mapLabelHeight = mapCardContent.querySelector('p[data-i18n="visitedCitiesMapLabel"]').offsetHeight;
                
                // 加上 card-content 的 padding-top 和 padding-bottom
                const mapCardContentStyle = window.getComputedStyle(mapCardContent);
                const mapCardContentPaddingTop = parseFloat(mapCardContentStyle.paddingTop);
                const mapCardContentPaddingBottom = parseFloat(mapCardContentStyle.paddingBottom);

                // 估計其他元素的總高度（h4, p, p）+ card-content 的 padding
                const estimatedOtherContentHeight = mapTitleHeight + mapIntroTextHeight + mapLabelHeight + mapCardContentPaddingTop + mapCardContentPaddingBottom;


                // 計算地圖應有的高度
                const mapHeight = leftCardTotalHeight - estimatedOtherContentHeight - (mapCard.offsetHeight - mapCardContent.offsetHeight); 
                // 這裡的 (mapCard.offsetHeight - mapCardContent.offsetHeight) 是指 card 的 padding 和 margin 等。
                // 也可以直接計算 mapCard 的總高與 leftCardTotalHeight 的差額，然後分配給地圖

                // 確保計算結果是正數，且設定高度
                if (mapHeight > 0) {
                    mapContainer.style.height = `${mapHeight}px`;
                    map.invalidateSize(); // 重新計算地圖尺寸，避免灰格
                }
            }
        } else {
            // 行動裝置模式下，重設地圖高度為固定值或 auto，確保堆疊正常
            mapContainer.style.height = '350px'; // 恢復為預設固定高度
            map.invalidateSize();
        }
    }

    // 頁面載入和視窗大小改變時調整地圖高度
    adjustMapHeight();
    window.addEventListener('resize', adjustMapHeight);
});