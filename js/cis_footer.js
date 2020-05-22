document.addEventListener('DOMContentLoaded', function() {
    //native js
    setTimeout(function() {
        var romFooter = document.querySelector('.create_rom_footer');
        romFooter.insertAdjacentHTML("afterbegin", '<div class="rom__footer"><div class="rom__left"><div class="rom__info"><div class="rom__img"><svg class="rom__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2700 2450"><path d="M1803.6 2c.1 34.3.1 68.7.2 103v247.8C1304.2 644 804.6 935.2 304.9 1226.4c6.4 7 1435.2 841.5 1499.2 875.7 298.3-174 597.1-348.4 897.2-523.4v349.9c-3.2 2-7.1 4.5-11.1 6.8-160.6 93.7-321.2 187.3-481.7 281-132.1 77.1-264.2 154.2-396.2 231.2-2.3 1.3-4.4 2.9-6.7 4.3h-4c-3.9-2.5-7.7-5.2-11.6-7.5-138.7-80.8-277.4-161.7-416.1-242.5-277.1-161.5-554.3-323-831.4-484.5-176.7-103-353.4-206-530.1-308.9-3.4-2-7.2-3.1-10.8-4.6v-352c3.3-1.3 6.9-2.3 9.9-4.1 36.9-21.4 73.7-42.9 110.6-64.4 498.1-290.6 996.3-581.2 1494.4-871.8 57.3-33.4 114.5-66.8 171.8-100.2 3.9-2.3 8.6-4 9.3-9.5 2 .1 4 .1 6 .1z"></path><path d="M2103.1 877.7c-299.9 175.1-599.6 350.2-899.9 525.5-99.5-58.3-198.7-116.5-299.9-175.7C1304 993.7 1703 760.9 2103.1 527.4v350.3zm300 175.3v350.3c-199.6 116.6-399.2 233.2-599.3 350-99.9-58.4-199.6-116.5-300.9-175.7 300.8-175.2 599.7-349.4 900.2-524.6z"></path></svg></div></div><div class="rom__about"><p class="rom__text">ООО «Сервис Логистика»</p></div></div><div class="rom__center"><a href="privacy.html" target="_blank" class="rom__link">Политика конфиденциальности</a><p class="rom__text">г. Киев, Воздвиженская, д. 16</p></div><div class="rom__right"><p class="rom__text">ИНН 7724392813</p><p class="rom__text">ОГРН 5167746390059</p></div></div>');
        var colorText = romFooter.getAttribute('data-color_text'),
            colorLink = romFooter.getAttribute('data-color_link'),
            colorLogo = romFooter.getAttribute('data-color_logo'),
            head = document.querySelector('head'),
            romText = document.querySelectorAll('.rom__text'),
            romLink = document.querySelectorAll('.rom__link'),
            romIcon = document.querySelectorAll('.rom__svg');
        for (let i = 0; i < romText.length; i++) {
            romText[i].style.color = colorText;
        };
        for (let i = 0; i < romLink.length; i++) {
            romLink[i].style.color = colorLink;
        };
        for (let i = 0; i < romIcon.length; i++) {
            romIcon[i].style.fill = colorLogo;
        };
        head.insertAdjacentHTML("afterbegin", '<style>.create_rom_footer{line-height: 1.3}.rom__footer{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;justify-content:space-between;-ms-align-items:center;align-items:center}.rom__text{margin:0;padding:0;font-size:14px}.rom__img{width:30px;height:30px;margin:auto;display:block;margin-right:10px}.rom__link{font-size:14px;text-decoration:none}.rom__link:hover{display:inline-block;text-decoration:underline}.rom__right .rom__text{text-align:right}.rom__center .rom__text{text-align:center}.rom__center{max-width:400px;text-align:center}.rom__left{display:-webkit-flex;display:-moz-flex;display:-ms-flex;display:-o-flex;display:flex;justify-content:flex-start;-ms-align-items:center;align-items:center}@media screen and (max-width:1023px){.rom__right,.rom__text{display:none}.rom__footer{-webkit-flex-direction:column;-moz-flex-direction:column;-ms-flex-direction:column;-o-flex-direction:column;flex-direction:column}.rom__img{margin:0 auto 2px}}</style>')
    });
});