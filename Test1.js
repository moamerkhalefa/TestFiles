(function () {
    "use strict";
    function d() {
        var s;
        if (!window.location.href.includes("noor.moe.gov.sa")) {
            Swal.fire({
                icon: "error22",
                title: "افتح نظام نور لاستخدام هذة الميزة",
                showCloseButton: true,
                footer: '<div style="color: blue;font-size: 14px;font-weight: bold;">موقع مجموعة برامج فؤاد العلي</div>'
            });
            return;
        }
        const n = document.querySelector(".MSRS-RVC"),
            c = n == null ? void 0 : n.parentElement;
        if (!n || !c) {
            Swal.fire({
                icon: "error22",
                title: "اضغط عرض التقرير لكي يتم تصديرة",
                showCloseButton: true,
                confirmButtonText:"إغلاق",
                footer: '<div style="color: blue;font-size: 14px;font-weight: bold;">موقع مجموعة برامج فؤاد العلي</div>'
            });
            return;
        }
        const u = n.id,
            o = document.createElement("div");
        o.setAttribute("style", "padding: 0px 10px 0px 10px;text-align: end;display: inline-flex;float: right;cursor: pointer;"), o.setAttribute("id", "eduwebdev_dot_net_ExportContainer");
        for (const e of ["pdf", "excel", "word"]) {
            const t = document.createElement("div");
            (t.name = "eduwebdev_dot_net_ExportButton_" + e);
            (t.id = "eduwebdev_dot_net_ExportButton_" + e);
            (t.title = `تصدير ${e}`);
            if (e == "pdf") {
                t.setAttribute("style", "cursor: pointer;");
                t.innerHTML = '<i class="fa fa-file-pdf-o" style="font-size: 35px;color: #F44336;"></i>';
            }
            else if (e == "excel") {
                t.setAttribute("style", "margin: 0px 30px; cursor: pointer;");
                t.innerHTML = '<i class="fa fa-file-excel-o" style="font-size: 35px;color: #009688;"></i>';
            }
            else if (e == "word") {
                t.setAttribute("style", "cursor: pointer;");
                t.innerHTML = '<i class="fa fa-file-word-o" style="font-size: 35px;color: #2196F3;"></i>';
            }
            t.addEventListener("click", () => window.$find(u).exportReport(e === "excel" ? "EXCELOPENXML" : e));
            o.append(t);
        }
        const ParentDiv = document.querySelector(".ToolBarButtonsCell");
        ParentDiv.prepend(o);
    }
    (window.EDUWEBDEVDOTNET = d), d();
})();