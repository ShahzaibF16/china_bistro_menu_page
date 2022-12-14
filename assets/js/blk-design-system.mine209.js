var big_image, navbar_initialized, transparent = !0,
    transparentDemo = !0,
    fixedTop = !1,
    backgroundOrange = !1,
    toggle_initialized = !1,
    $datepicker = $(".datepicker"),
    $collapse = $(".navbar .collapse"),
    $html = $("html");

function hideNavbarCollapse(e) {
    e.addClass("collapsing-out")
}

function hiddenNavbarCollapse(e) {
    e.removeClass("collapsing-out")
}

function debounce(t, o, n) {
    var r;
    return function() {
        var e = this,
            a = arguments;
        clearTimeout(r), r = setTimeout(function() {
            r = null, n || t.apply(e, a)
        }, o), n && !r && t.apply(e, a)
    }
}

function debounce(t, o, n) {
    var r;
    return function() {
        var e = this,
            a = arguments;
        clearTimeout(r), r = setTimeout(function() {
            r = null, n || t.apply(e, a)
        }, o), n && !r && t.apply(e, a)
    }
} - 1 < navigator.platform.indexOf("Win") ? (0 != $(".tab-content .table-responsive").length && $(".table-responsive").each(function() {
    new PerfectScrollbar($(this)[0])
}), $html.addClass("perfect-scrollbar-on")) : $html.addClass("perfect-scrollbar-off"), $(document).ready(function() {
    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip(), $('[data-toggle="popover"]').each(function() {
        color_class = $(this).data("color"), $(this).popover({
            template: '<div class="popover popover-' + color_class + '" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
    });
    var a = document.getElementById("square1"),
        t = document.getElementById("square2"),
        o = document.getElementById("square3"),
        n = document.getElementById("square4"),
        r = document.getElementById("square5"),
        l = document.getElementById("square6"),
        s = document.getElementById("square7"),
        i = document.getElementById("square8");
    0 != $(".square").length && $(document).mousemove(function(e) {
        posX = event.clientX - window.innerWidth / 2, posY = event.clientY - window.innerWidth / 6, a.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", t.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", o.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", n.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", r.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", l.style.transform = "perspective(500px) rotateY(" + .05 * posX + "deg) rotateX(" + -.05 * posY + "deg)", s.style.transform = "perspective(500px) rotateY(" + .02 * posX + "deg) rotateX(" + -.02 * posY + "deg)", i.style.transform = "perspective(500px) rotateY(" + .02 * posX + "deg) rotateX(" + -.02 * posY + "deg)"
    }), blackKit.initNavbarImage(), $navbar = $(".navbar[color-on-scroll]"), scroll_distance = $navbar.attr("color-on-scroll") || 500, 0 != $(".navbar[color-on-scroll]").length && (blackKit.checkScrollForTransparentNavbar(), $(window).on("scroll", blackKit.checkScrollForTransparentNavbar)), $(".form-control").on("focus", function() {
        $(this).parent(".input-group").addClass("input-group-focus")
    }).on("blur", function() {
        $(this).parent(".input-group").removeClass("input-group-focus")
    }), $(".bootstrap-switch").each(function() {
        $this = $(this), data_on_label = $this.data("on-label") || "", data_off_label = $this.data("off-label") || "", $this.bootstrapSwitch({
            onText: data_on_label,
            offText: data_off_label
        })
    }), $(".carousel").carousel({
        interval: !1
    })
}), $collapse.length && ($collapse.on({
    "hide.bs.collapse": function() {
        hideNavbarCollapse($collapse)
    }
}), $collapse.on({
    "hidden.bs.collapse": function() {
        hiddenNavbarCollapse($collapse)
    }
})), $(document).on("click", ".navbar-toggler", function() {
    $toggle = $(this), 1 == blackKit.misc.navbar_menu_visible ? ($("html").removeClass("nav-open"), blackKit.misc.navbar_menu_visible = 0, $("#bodyClick").remove(), setTimeout(function() {
        $toggle.removeClass("toggled")
    }, 550)) : (setTimeout(function() {
        $toggle.addClass("toggled")
    }, 580), div = '<div id="bodyClick"></div>', $(div).appendTo("body").click(function() {
        $("html").removeClass("nav-open"), blackKit.misc.navbar_menu_visible = 0, setTimeout(function() {
            $toggle.removeClass("toggled"), $("#bodyClick").remove()
        }, 550)
    }), $("html").addClass("nav-open"), blackKit.misc.navbar_menu_visible = 1)
}), blackKit = {
    misc: {
        navbar_menu_visible: 0
    },
    checkScrollForTransparentNavbar: debounce(function() {
        $(document).scrollTop() > scroll_distance ? transparent && (transparent = !1, $(".navbar[color-on-scroll]").removeClass("navbar-transparent")) : transparent || (transparent = !0, $(".navbar[color-on-scroll]").addClass("navbar-transparent"))
    }, 17),
    initNavbarImage: function() {
        var e = $(".navbar").find(".navbar-translate").siblings(".navbar-collapse"),
            a = e.data("nav-image");
        $(window).width() < 991 || $("body").hasClass("burger-menu") ? null != a && e.css("background", "url('" + a + "')").removeAttr("data-nav-image").css("background-size", "cover").addClass("has-image") : null != a && e.css("background", "").attr("data-nav-image", "" + a).css("background-size", "").removeClass("has-image")
    },
    initDatePicker: function() {
        0 != $datepicker.length && $datepicker.datetimepicker({
            icons: {
                time: "tim-icons icon-watch-time",
                date: "tim-icons icon-calendar-60",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: "tim-icons icon-minimal-left",
                next: "tim-icons icon-minimal-right",
                today: "fa fa-screenshot",
                clear: "fa fa-trash",
                close: "fa fa-remove"
            }
        })
    },
    initSliders: function() {
        var e = document.getElementById("sliderRegular");
        0 != $("#sliderRegular").length && noUiSlider.create(e, {
            start: 40,
            connect: [!0, !1],
            range: {
                min: 0,
                max: 100
            }
        });
        var a = document.getElementById("sliderDouble");
        0 != $("#sliderDouble").length && noUiSlider.create(a, {
            start: [20, 60],
            connect: !0,
            range: {
                min: 0,
                max: 100
            }
        })
    }
};
//# sourceMappingURL=_site_kit_free/assets/js/kit-free.js.map