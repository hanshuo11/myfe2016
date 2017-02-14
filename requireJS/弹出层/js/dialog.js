define(["jquery"], function ($) {
    function Dialog() {
        this.defaultSettings = {
            width: 600,
            height: 500,
            title: "HaHa",
            content: ""
        }

        this.container = $('<div class="dialog-container"></div>');
        this.mask = $('<div class="dialog-mask"></div>');
        this.box = $('<div class="dialog-box"></div>');
        this.title = $('<div class="dialog-title">');
        this.item = $('<div class="dialog-title-item"></div>');
        this.close = $('<div class="dialog-title-close">[X]</div>');
        this.content = $('<div class="dialog-content"></div>');
    }

    Dialog.prototype.open = function (options) {
        $.extend(this.defaultSettings, options);
        this.item.html(this.defaultSettings.title);
        this.title.append(this.item).append(this.close);
        this.content.css({
            height: this.defaultSettings.height - 30
        });

        if(this.defaultSettings.content){
            this.content.load(this.defaultSettings.content);
        }

        this.box.append(this.title).append(this.content).css({
            width: this.defaultSettings.width,
            height: this.defaultSettings.height
        });

        this.container.append(this.mask).append(this.box);
        $(document.body).append(this.container);


        var that = this;
        this.close.on('click', function () {
            that.closeDialog();
        })

        //var aDialog = document.getElementsByClassName('dialog-box');
        //var zIndex = 4;
        //for (var i = 0; i < aDialog.length; i++) {
        //    aDialog[i].style.left = aDialog[i].offsetLeft + 'px';
        //    aDialog[i].style.top = aDialog[i].offsetTop + 'px';
        //    aDialog[i].pos = {
        //        left: aDialog[i].offsetLeft,
        //        top: aDialog[i].offsetTop
        //    };
        //}
        //for (var i = 0; i < aDialog.length; i++) {
        //    aDialog[i].style.position = 'absolute';
        //    turg(aDialog[i]);
        //}
        //function turg(idem) {
        //    var iDisX = iDisY = 0;
        //    idem.onmousedown = function (e) {
        //        idem.style.zIndex = zIndex++;
        //        e = e || window.event;
        //        iDisX = e.clientX - idem.offsetLeft;
        //        iDisY = e.clientY - idem.offsetTop;
        //        document.onmousemove = function (e) {
        //            e = e || window.event;
        //            var iLeft = e.clientX - iDisX;
        //            var iTop = e.clientY - iDisY;
        //            if (iLeft <= 0) {
        //                iLeft = 0;
        //            }
        //            if (iLeft >= document.documentElement.clientWidth - idem.offsetWidth) {
        //                iLeft = document.documentElement.clientWidth - idem.offsetWidth;
        //            }
        //            idem.style.left = iLeft + 'px';
        //            idem.style.top = iTop + 'px';
        //            return false;
        //        }
        //        document.onmouseup = function () {
        //            document.onmousemove = null;
        //            document.onmouseup = null;
        //        };
        //    }
        //
        //}

    }
    Dialog.prototype.closeDialog = function () {
        this.container.remove();
    };
    return Dialog;
})


















