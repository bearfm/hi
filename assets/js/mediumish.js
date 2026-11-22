jQuery(document).ready(function ($) {

    // fix for stupid ie object cover
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        jQuery('.featured-box-img-cover').each(function () {
            var t = jQuery(this),
                s = 'url(' + t.attr('src') + ')',
                p = t.parent(),
                d = jQuery('<div></div>');

            p.append(d);
            d.css({
                'height': '290px',              // FIX: 补上单位
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': '50% 20%',
                'background-image': s
            });
            t.hide();
        });
    }

    // alertbar later
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 280) {
            $('.alertbar').fadeIn();
        } else {
            $('.alertbar').fadeOut();
        }
    });


    // Smooth on external page
    $(function () {
        setTimeout(function () {
            if (location.hash && location.hash.length > 1) {   // FIX: 过滤单独的 "#"
                /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
                window.scrollTo(0, 0);
                var target = location.hash.split('#');
                smoothScrollTo($('#' + target[1]));
            }
        }, 1);

        // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
        $('a[href*=\\#]:not([href=\\#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var hash = this.hash;
                var $target = $(hash);

                // FIX: 支持 <a name="..."> 形式的锚点；找不到则不拦截默认行为
                if (!$target.length && hash.length > 1) {
                    $target = $('[name="' + hash.slice(1) + '"]');
                }

                if ($target.length) {
                    smoothScrollTo($target);
                    return false;
                }
            }
        });

        function smoothScrollTo(target) {
            // FIX: 不再依赖 this.hash，直接判空返回
            if (!target || !target.length) {
                return;
            }
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });


    // Hide Header on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var $nav = $('nav');
    var navbarHeight = $nav.outerHeight() || 0;    // FIX: nav 不存在时不再得到 undefined

    $(window).scroll(function () {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(window).scrollTop();            // FIX: 明确使用 window，不再依赖 this

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $nav.removeClass('nav-down').addClass('nav-up');
            $nav.css('top', -$nav.outerHeight() + 'px');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $nav.removeClass('nav-up').addClass('nav-down');
                $('.nav-up, .nav-down').css('top', '0px');
            }
        }

        lastScrollTop = st;
    }

    // FIX: header 不存在时不写入 "undefinedpx"
    var headerHeight = $('header').outerHeight();
    if (headerHeight) {
        $('.site-content').css('margin-top', headerHeight + 'px');
    }

    // spoilers
    $(document).on('click', '.spoiler', function () {
        $(this).removeClass('spoiler');
    });

});

// deferred style loading
var loadDeferredStyles = function () {
    var addStylesNode = document.getElementById("deferred-styles");

    // FIX: 节点不存在直接退出，避免 null.textContent 报错
    if (!addStylesNode || !document.body) {
        return;
    }

    var replacement = document.createElement("div");
    replacement.innerHTML = addStylesNode.textContent;
    document.body.appendChild(replacement);

    if (addStylesNode.parentElement) {             // FIX: 移除前判空
        addStylesNode.parentElement.removeChild(addStylesNode);
    }
};

var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var runDeferredStyles = function () {
    // FIX: body 还没解析出来时等 DOMContentLoaded
    if (document.body) {
        window.setTimeout(loadDeferredStyles, 0);
    } else {
        document.addEventListener('DOMContentLoaded', function () {
            window.setTimeout(loadDeferredStyles, 0);
        });
    }
};

if (raf) {
    raf(runDeferredStyles);
} else {
    window.addEventListener('load', runDeferredStyles);
}