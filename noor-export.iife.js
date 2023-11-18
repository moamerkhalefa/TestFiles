(function () {
    debugger;
    "use strict";
    function d() {
        var s;
        if (!window.location.href.includes("noor.moe.gov.sa")) {
            Swal.fire({ icon: "error", title: "عفواً افتح نظام نور لاستخدام هذة الميزة" });
            return;
        }
        const n = document.querySelector(".MSRS-RVC"),
            c = n == null ? void 0 : n.parentElement;
        if (!n || !c) {
            Swal.fire({ icon: "error", title: "عفواً اضغط عرض التقرير لكي يتم تصديرة" });
            return;
        }
        const u = n.id,
            o = document.createElement("div");
        o.setAttribute("style", "padding: 20px; text-align: center;"), o.setAttribute("id", "eduwebdev_dot_net_ExportContainer");
        for (const e of ["pdf", "excel", "word"]) {
            const t = document.createElement("input");
            (t.type = "button"),
                (t.name = "eduwebdev_dot_net_ExportButton_" + e),
                (t.id = "eduwebdev_dot_net_ExportButton_" + e),
                (t.value = `${e.toUpperCase()}`),
                (t.title = `${e.toUpperCase()}`),
                t.classList.add("btnstyle"),
                t.addEventListener("click", () => window.$find(u).exportReport(e === "excel" ? "EXCELOPENXML" : e)),
                o.append(t);
        }
        c.prepend(o);
    }
    (window.EDUWEBDEVDOTNET = d), d();
})();
