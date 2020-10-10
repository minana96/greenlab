var WordPressPopularPosts = function() {
    var c = function() {},
        g = !!HTMLElement.prototype.attachShadow,
        f = function(b, e, a, c) {
            var d = new XMLHttpRequest;
            b = -1 != ["GET", "POST"].indexOf(b) ? b : "GET";
            d.open(b, e + ("GET" == b ? "?" + a : ""), !0);
            "POST" == b && d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            d.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            d.onreadystatechange = function() {
                4 === d.readyState && 200 <= d.status && 300 > d.status && "function" === typeof c && c.call(void 0, d.response)
            };
            d.send("POST" == b ? a :
                null)
        };
    return {
        get: function(b, e, a) {
            a = "function" === typeof a ? a : c;
            f("GET", b, e, a)
        },
        post: function(b, e, a) {
            a = "function" === typeof a ? a : c;
            f("POST", b, e, a)
        },
        ajax: f,
        theme: function(b) {
            if (g) {
                var e = document.createElement("style"),
                    a = document.createElement("a");
                b.parentNode.appendChild(a);
                var c = getComputedStyle(a);
                e.innerHTML = ".wpp-list li a {color: " + c.color + "}";
                b.parentNode.removeChild(a);
                a = b.attachShadow({
                    mode: "open"
                });
                for (a.append(e); b.firstElementChild;) a.append(b.firstElementChild)
            }
        }
    }
}();
if ("undefined" !== typeof wpp_params && 0 < wpp_params.ID) {
    var do_request = !0;
    if ("1" == wpp_params.sampling_active) {
        var num = Math.floor(Math.random() * wpp_params.sampling_rate) + 1;
        do_request = 1 === num
    }
    do_request && WordPressPopularPosts.post(wpp_params.ajax_url, "_wpnonce=" + wpp_params.token + "&wpp_id=" + wpp_params.ID + "&sampling=" + wpp_params.sampling_active + "&sampling_rate=" + wpp_params.sampling_rate, function(c) {
        wpp_params.debug && window.console && window.console.log && window.console.log(JSON.parse(c))
    })
};