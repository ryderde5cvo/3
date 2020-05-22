window.onload = function() {
    if (typeof HTMLElement != "undefined" && !HTMLElement.prototype.insertAdjacentElement) { HTMLElement.prototype.insertAdjacentElement = function(where, parsedNode) {
            switch (where) {
                case 'beforeBegin':
                    this.parentNode.insertBefore(parsedNode, this);
                    break;
                case 'afterBegin':
                    this.insertBefore(parsedNode, this.firstChild);
                    break;
                case 'beforeEnd':
                    this.appendChild(parsedNode);
                    break;
                case 'afterEnd':
                    if (this.nextSibling) this.parentNode.insertBefore(parsedNode, this.nextSibling);
                    else this.parentNode.appendChild(parsedNode);
                    break; } };
        HTMLElement.prototype.insertAdjacentHTML = function(where, htmlStr) {
            var r = this.ownerDocument.createRange();
            r.setStartBefore(this);
            var parsedHTML = r.createContextualFragment(htmlStr);
            this.insertAdjacentElement(where, parsedHTML); };
        HTMLElement.prototype.insertAdjacentText = function(where, txtStr) {
            var parsedText = document.createTextNode(txtStr);
            this.insertAdjacentElement(where, parsedText); } };

    function bluePhone() { document.body.innerHTML += '<div class="bluePhone"><div class="phone-call cbh-phone cbh-green cbh-show cbh-static" id="clbh_phone_div"><a class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></a></div></div>'; };

    function checkForm() {
        var $code = document.querySelector(".check_popup_code_input"),
            $message = document.querySelector(".js-message"),
            $button = document.querySelector(".button-popup-first");
        var codeValues = /^\d+$/;
        $button.addEventListener("click", function(ev) { ev.preventDefault();
            var $codeLenght = $code.value.length;
            var codeValue = $code.value;
            if (codeValues.test(codeValue) && $codeLenght == 15) {
                return $message.innerHTML = "Данный код верен. Cпасибо, что выбрали нашу продукцию!"; } else if ($code.value !== '' && $code.value !== ' ' && $code.value !== ' ') {
                return $message.innerHTML = "К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт."; } else {
                return $message.innerHTML = "Введите, пожалуйста, код."; } }, false); };

    function bayToday() {
        var d = new Date();
        var result = (d.getHours() * 60 + d.getMinutes()) * 2 + 2000;
        var todayBayElement = document.getElementsByClassName('todayBay');
        console.log(todayBayElement.length);
        for (var i = 0; i < todayBayElement.length; i++) { todayBayElement[i].innerHTML = result; } };

    function createPopUp() {
        function createPopup(popupClassName, clonePopUpId, formId, onsubmitStr) {
            var divClose = document.createElement('div');
            divClose.className = 'close';
            divClose.innerHTML = '×';
            var popUpHead = document.createElement('div');
            popUpHead.className = popupClassName;
            var divModalWindow = document.createElement('div');
            divModalWindow.className = 'modal';
            popUpHead.appendChild(divModalWindow);
            var clonePopUp = document.getElementById('clonePopUp').cloneNode(true);
            clonePopUp.id = clonePopUpId;
            clonePopUp.insertAdjacentElement('afterBegin', divClose);
            popUpHead.appendChild(clonePopUp);
            document.body.appendChild(popUpHead);
            var form = document.querySelector(formId);
            form.setAttribute('onsubmit', onsubmitStr); }

        function close(closeObj) {
            var modalClose = document.querySelectorAll(closeObj);
            for (var j = 0; j < modalClose.length; j++) { modalClose[j].addEventListener('click', function() {
                    for (var i = 0; i < document.querySelectorAll('.pop-up').length; i++) { document.querySelectorAll('.pop-up')[i].style.display = 'none'; } }, false); }; };

        function openPopup(openBtn, openObj) { document.querySelector(openBtn).onclick = function() { document.querySelector(openObj).style.display = 'block'; }; };
        createPopup('pop-up-call-back pop-up call-back-head', 'PopUpHead', 'div#PopUpHead form', headOnsubmit);
        createPopup('pop-up-blue-phone pop-up call-back-phone', 'PopUpPhone', 'div#PopUpPhone form', PhoneOnsubmit);
        createPopup('popup-mouse pop-up mouse-moved-up', 'PopUpMouse', 'div#PopUpMouse form', MouseOnsubmit);
        createPopup('pop-up-call-back-1 pop-up call-back-head', 'PopUpHead1', 'div#PopUpHead1 form', headOnsubmit1);

        close('.modal');
        close('.close');
        openPopup('.phone-call', '.pop-up-blue-phone');
        openPopup('.get-call', '.pop-up-call-back');
        openPopup('.get-call2', '.pop-up-call-back-1');
        document.onkeyup = function(event) {
            if (event.which == '27') {
                for (var i = 0; i < document.querySelectorAll('.pop-up').length; i++) { document.querySelectorAll('.pop-up')[i].style.display = 'none'; } } }; };

    function mouseOut() {
        var divLineTop = document.createElement('div');
        divLineTop.className = 'mouse';
        divLineTop.innerHTML = '<div class="line_top mouse_moved" id="mouse"></div>';
        document.body.appendChild(divLineTop);
        var flag = true;
        var mouseMovedUp = document.getElementById('mouse');
      /*  console.log(mouseMovedUp);*/
        mouseMovedUp.onmouseover = function() {
            if (flag == true) { document.querySelector('.mouse-moved-up').style.display = 'block';
                flag = false;
               /* console.log(flag);*/ } }; };

    function youtubeShowVideo() {
    var i, c, y, v, s, n;
    v = document.getElementsByClassName("youtube");
    if (v.length > 0) {
        s = document.createElement("style");
        s.type = "text/css";
        s.innerHTML = '.youtube{background-color:#000;max-width:100%;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;}';
        document.body.appendChild(s)
    }
    for (n = 0; n < v.length; n++) {
        y = v[n];
        i = document.createElement("img");
        i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
        i.setAttribute("class", "thumb");
        c = document.createElement("div");
        c.setAttribute("class", "play");
        y.appendChild(i);
        y.appendChild(c);
        y.onclick = function () {
            var a = document.createElement("iframe");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            this.parentNode.replaceChild(a, this)
        }
    };
    }

    function scrollTop() {
    $(".scroll1").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href');
        var top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    }

    function safari_windows() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
                var a = 1; } else {
                var tag_css = document.createElement('link');
                var basePath = window.cdn_path || '';
                tag_css.type = 'text/css';
                tag_css.rel = 'stylesheet';
                tag_css.href = basePath + "css/safari.css";
                var tag_head = document.getElementsByTagName('head');
                tag_head[0].appendChild(tag_css); }; }; };

    function internet_explorer() {
        var basePath = window.cdn_path || '';
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
            var tag_css = document.createElement('link');
            tag_css.type = 'text/css';
            tag_css.rel = 'stylesheet';
            tag_css.href = basePath + "css/ie.css";
            var tag_head = document.getElementsByTagName('head');
            tag_head[0].appendChild(tag_css); } else {
            var b = 1; }
        return false; };

    function firefox() {
        var browser = navigator.userAgent.toLowerCase();
        if (browser.indexOf('firefox') > -1) {
            var basePath = window.cdn_path || '';
            var tag_css = document.createElement('link');
            tag_css.type = 'text/css';
            tag_css.rel = 'stylesheet';
            tag_css.href = basePath + "css/firefox.css";
            var tag_head = document.getElementsByTagName('head');
            tag_head[0].appendChild(tag_css); } else {
            var b = 1; }
        return false; };
    if (bluePhoneValue) { bluePhone(); };
    if (checkCodeValue) { checkForm(); };
    if (bayValue) { bayToday(); };
    if (createPopUpValue) { createPopUp(); };
    if (mouseOutValue) { mouseOut(); };
    if (youtubeShowVideo) { youtubeShowVideo(); };
    if (scrollTop) { scrollTop(); };
    if (ieValue) { internet_explorer(); };
    if (firefoxValue) { firefox(); };
    if (safariValue) { safari_windows(); }; };