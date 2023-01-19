/* eslint-disable */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).mobiscroll = {}));
})(this, function (e) {
    "use strict";
    var t = { apiKey: "d9a85fa6", apiUrl: "https://trial.mobiscroll.com/" },
        n = function (e, t) {
            return (
                (n =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    }),
                n(e, t)
            );
        };
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function a() {
            this.constructor = e;
        }
        n(e, t), (e.prototype = null === t ? Object.create(t) : ((a.prototype = t.prototype), new a()));
    }
    var s = function () {
        return (
            (s =
                Object.assign ||
                function (e) {
                    for (var t, n = 1, a = arguments.length; n < a; n++) for (var s in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                    return e;
                }),
            s.apply(this, arguments)
        );
    };
    function i(e, t) {
        var n = {};
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (n[a[s]] = e[a[s]]);
        }
        return n;
    }
    var r,
        o,
        l,
        c,
        d = (function () {
            function e() {
                (this.nr = 0), (this.keys = 1), (this.subscribers = {});
            }
            return (
                (e.prototype.subscribe = function (e) {
                    var t = this.keys++;
                    return (this.subscribers[t] = e), this.nr++, t;
                }),
                (e.prototype.unsubscribe = function (e) {
                    this.nr--, delete this.subscribers[e];
                }),
                (e.prototype.next = function (e) {
                    var t = this.subscribers;
                    for (var n in t) t.hasOwnProperty(n) && t[n](e);
                }),
                e
            );
        })(),
        h = [],
        u = !1,
        m = "undefined" != typeof window,
        _ = m && window.matchMedia && window.matchMedia("(prefers-color-scheme:dark)"),
        p = m ? navigator.userAgent : "",
        v = m ? navigator.platform : "",
        f = m ? navigator.maxTouchPoints : 0,
        g = p && p.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        y = p && /Safari/.test(p);
    /Android/i.test(g)
        ? ((r = "android"), (o = p.match(/Android\s+([\d.]+)/i)), (u = !0), o && (h = o[0].replace("Android ", "").split(".")))
        : /iPhone|iPad|iPod/i.test(g) || /iPhone|iPad|iPod/i.test(v) || ("MacIntel" === v && f > 1)
        ? ((r = "ios"), (o = p.match(/OS\s+([\d_]+)/i)), (u = !0), o && (h = o[0].replace(/_/g, ".").replace("OS ", "").split(".")))
        : /Windows Phone/i.test(g)
        ? ((r = "wp"), (u = !0))
        : /Windows|MSIE/i.test(g) && (r = "windows"),
        (l = +h[0]),
        (c = +h[1]);
    var b = {},
        x = {},
        T = {},
        D = {},
        C = new d();
    function S() {
        var e = "",
            t = "",
            n = "";
        for (var a in ((t = "android" === r ? "material" : "wp" === r || "windows" === r ? "windows" : "ios"), T)) {
            if (T[a].baseTheme === t && !1 !== T[a].auto && a !== t + "-dark") {
                e = a;
                break;
            }
            a === t ? (e = a) : n || (n = a);
        }
        return e || n;
    }
    function w(e, t, n) {
        var a = T[t];
        (T[e] = s({}, a, { auto: n, baseTheme: t })), (D.theme = S());
    }
    var k = { majorVersion: l, minorVersion: c, name: r },
        M =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"/></svg>',
        E =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"/></svg>',
        N =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"/></svg>',
        I =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"/></svg>',
        L =
            '<svg xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 17 17" width="17"><path d="M8.5 0a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm3.364 5.005a.7.7 0 00-.99 0l-2.44 2.44-2.439-2.44-.087-.074a.7.7 0 00-.903 1.064l2.44 2.439-2.44 2.44-.074.087a.7.7 0 001.064.903l2.439-2.441 2.44 2.441.087.074a.7.7 0 00.903-1.064l-2.441-2.44 2.441-2.439.074-.087a.7.7 0 00-.074-.903z" fill="currentColor" fill-rule="evenodd"/></svg>',
        H = { clearIcon: L, labelStyle: "inline" };
    (T.ios = {
        Calendar: { nextIconH: N, nextIconV: E, prevIconH: M, prevIconV: I },
        Checkbox: { position: "end" },
        Datepicker: { clearIcon: L, display: "bottom" },
        Dropdown: H,
        Eventcalendar: { chevronIconDown: E, nextIconH: N, nextIconV: E, prevIconH: M, prevIconV: I },
        Input: H,
        Radio: { position: "end" },
        Scroller: { display: "bottom", itemHeight: 34, minWheelWidth: 55, rows: 5, scroll3d: !0 },
        SegmentedGroup: { drag: !0 },
        Select: { clearIcon: L },
        Textarea: H,
    }),
        w("ios-dark", "ios");
    var Y = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        O = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        P = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z"/></svg>',
        z = '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M15 9l-2.12 2.12L19.76 18l-6.88 6.88L15 27l9-9z"/></svg>',
        V =
            '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>',
        F = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>',
        R = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        A = { clearIcon: V, dropdownIcon: Y, inputStyle: "box", labelStyle: "floating", notch: !0, ripple: !0 };
    (T.material = {
        Button: { ripple: !0 },
        Calendar: { downIcon: Y, nextIconH: z, nextIconV: F, prevIconH: P, prevIconV: R, upIcon: O },
        Datepicker: { clearIcon: V, display: "center" },
        Dropdown: A,
        Eventcalendar: { chevronIconDown: F, colorEventList: !0, downIcon: Y, nextIconH: z, nextIconV: F, prevIconH: P, prevIconV: R, upIcon: O },
        Input: A,
        ListItem: { ripple: !0 },
        Scroller: { display: "center", rows: 3 },
        Select: { clearIcon: V, rows: 3 },
        Textarea: A,
    }),
        w("material-dark", "material");
    var W = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.22 10.78l-1.44 1.44 12.5 12.5.72.686.72-.687 12.5-12.5-1.44-1.44L16 22.564 4.22 10.78z"/></svg>',
        U = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19.03 4.28l-11 11-.686.72.687.72 11 11 1.44-1.44L10.187 16l10.28-10.28-1.437-1.44z"/></svg>',
        B = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M12.97 4.28l-1.44 1.44L21.814 16 11.53 26.28l1.44 1.44 11-11 .686-.72-.687-.72-11-11z"/></svg>',
        j = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 6.594l-.72.687-12.5 12.5 1.44 1.44L16 9.437l11.78 11.78 1.44-1.437-12.5-12.5-.72-.686z"/></svg>';
    (T.mobiscroll = { Calendar: { nextIconH: B, nextIconV: W, prevIconH: U, prevIconV: j }, Eventcalendar: { nextIconH: B, nextIconV: W, prevIconH: U, prevIconV: j }, Input: { notch: !0, ripple: !0 } }), w("mobiscroll-dark", "mobiscroll");
    var K = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M15 4v20.063L8.22 17.28l-1.44 1.44 8.5 8.5.72.686.72-.687 8.5-8.5-1.44-1.44L17 24.063V4h-2z"/></svg>',
        J = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M16 4.094l-.72.687-8.5 8.5 1.44 1.44L15 7.936V28h2V7.937l6.78 6.782 1.44-1.44-8.5-8.5-.72-.686z"/></svg>',
        X =
            '<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>',
        G = { clearIcon: X, inputStyle: "box", labelStyle: "stacked" };
    (T.windows = {
        Calendar: { nextIconH: B, nextIconV: K, prevIconH: U, prevIconV: J },
        Checkbox: { position: "start" },
        Datepicker: { clearIcon: X, display: "center" },
        Dropdown: G,
        Eventcalendar: { chevronIconDown: W, nextIconH: B, nextIconV: K, prevIconH: U, prevIconV: J },
        Input: G,
        Scroller: { display: "center", itemHeight: 44, minWheelWidth: 88, rows: 6 },
        Select: { clearIcon: X, rows: 6 },
        Textarea: G,
    }),
        w("windows-dark", "windows"),
        (D.theme = S());
    var q = {
            rtl: !0,
            setText: "تعيين",
            cancelText: "إلغاء",
            clearText: "مسح",
            closeText: "إغلاق",
            selectedText: "{count} المحدد",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"],
            dayNamesShort: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            fromText: "يبدا",
            monthNames: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            monthNamesShort: ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
            amText: "ص",
            pmText: "م",
            timeFormat: "hh:mm A",
            timeWheels: "Ammhh",
            toText: "ينتهي",
            nowText: "الآن",
            firstDay: 0,
            dateText: "تاريخ",
            timeText: "وقت",
            todayText: "اليوم",
            prevMonthText: "الشهر السابق",
            nextMonthText: "الشهر القادم",
            prevYearText: "السنه السابقة",
            nextYearText: "العام القادم",
            allDayText: "اليوم كله",
            noEventsText: "لا توجد احداث",
            eventText: "الحدث",
            eventsText: "أحداث",
            moreEventsText: "واحد آخر",
            moreEventsPluralText: "اثنان آخران {count}",
            weekText: "أسبوع {count}",
            rangeEndHelp: "أختر",
            rangeEndLabel: "ينتهي",
            rangeStartHelp: "أختر",
            rangeStartLabel: "يبدا",
            filterEmptyText: "لا نتيجة",
            filterPlaceholderText: "بحث",
        },
        Z = {
            setText: "Задаване",
            cancelText: "Отмяна",
            clearText: "Изчистване",
            closeText: "затвори",
            selectedText: "{count} подбран",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DD.MM.YYYY",
            dateWheelFormat: "|DDD MM.DD|",
            dayNames: ["Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            fromText: "ОТ",
            monthNames: ["Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"],
            monthNamesShort: ["Яну", "Фев", "Мар", "Апр", "Май", "Юни", "Юли", "Авг", "Сеп", "Окт", "Нов", "Дек"],
            timeFormat: "H:mm",
            toText: "ДО",
            nowText: "Сега",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Дата",
            timeText: "път",
            todayText: "днес",
            prevMonthText: "Предишния месец",
            nextMonthText: "Следващият месец",
            prevYearText: "Предходната година",
            nextYearText: "Следващата година",
            eventText: "Събитие",
            eventsText: "Събития",
            allDayText: "Цял ден",
            noEventsText: "Няма събития",
            moreEventsText: "Още {count}",
            weekText: "Седмица {count}",
            rangeStartLabel: "ОТ",
            rangeEndLabel: "ДО",
            rangeStartHelp: "Избирам",
            rangeEndHelp: "Избирам",
            filterEmptyText: "Без резултат",
            filterPlaceholderText: "Търсене",
        },
        $ = {
            setText: "Acceptar",
            cancelText: "Cancel·lar",
            clearText: "Esborrar",
            closeText: "Tancar",
            selectedText: "{count} seleccionat",
            selectedPluralText: "{count} seleccionats",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"],
            dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            fromText: "Iniciar",
            monthNames: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"],
            timeFormat: "H:mm",
            toText: "Final",
            nowText: "Ara",
            pmText: "pm",
            amText: "am",
            todayText: "Avui",
            firstDay: 1,
            dateText: "Data",
            timeText: "Temps",
            allDayText: "Tot el dia",
            noEventsText: "Cap esdeveniment",
            eventText: "Esdeveniments",
            eventsText: "Esdeveniments",
            moreEventsText: "{count} més",
            weekText: "Setmana {count}",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
            filterEmptyText: "Cap resultat",
            filterPlaceholderText: "Buscar",
        },
        Q = {
            setText: "Zadej",
            cancelText: "Storno",
            clearText: "Vymazat",
            closeText: "Zavřít",
            selectedText: "Označený: {count}",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D.M.YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
            fromText: "Začátek",
            monthNames: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
            monthNamesShort: ["Led", "Úno", "Bře", "Dub", "Kvě", "Čer", "Čvc", "Spr", "Zář", "Říj", "Lis", "Pro"],
            timeFormat: "H:mm",
            toText: "Konec",
            nowText: "Teď",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý den",
            noEventsText: "Žádné události",
            eventText: "Událostí",
            eventsText: "Události",
            moreEventsText: "{count} další",
            weekText: "{count}. týden",
            rangeStartLabel: "Začátek",
            rangeEndLabel: "Konec",
            rangeStartHelp: "Vybrat",
            rangeEndHelp: "Vybrat",
            filterEmptyText: "Žádné výsledky",
            filterPlaceholderText: "Hledat",
        },
        ee = {
            setText: "Sæt",
            cancelText: "Annuller",
            clearText: "Ryd",
            closeText: "Luk",
            selectedText: "{count} valgt",
            selectedPluralText: "{count} valgt",
            dateFormat: "DD/MM/YYY",
            dateFormatLong: "DDD. D. MMM. YYYY.",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH.mm",
            toText: "Slut",
            nowText: "Nu",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen begivenheder",
            eventText: "Begivenheder",
            eventsText: "Begivenheder",
            moreEventsText: "{count} mere",
            weekText: "Uge {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Vælg",
            rangeEndHelp: "Vælg",
            filterEmptyText: "Ingen resultater",
            filterPlaceholderText: "Søg",
        },
        te = {
            setText: "OK",
            cancelText: "Abbrechen",
            clearText: "Löschen",
            closeText: "Schließen",
            selectedText: "{count} ausgewählt",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD. D. MMM. YYYY.",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
            fromText: "Von",
            monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
            monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
            timeFormat: "HH:mm",
            nowText: "Jetzt",
            pmText: "pm",
            amText: "am",
            todayText: "Heute",
            toText: "Bis",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Zeit",
            allDayText: "Ganztägig",
            noEventsText: "Keine Ereignisse",
            eventText: "Ereignis",
            eventsText: "Ereignisse",
            moreEventsText: "{count} weiteres Element",
            moreEventsPluralText: "{count} weitere Elemente",
            weekText: "Woche {count}",
            rangeStartLabel: "Von",
            rangeEndLabel: "Bis",
            rangeStartHelp: "Auswählen",
            rangeEndHelp: "Auswählen",
            filterEmptyText: "Keine Treffer",
            filterPlaceholderText: "Suchen",
        },
        ne = {
            setText: "Ορισμος",
            cancelText: "Ακυρωση",
            clearText: "Διαγραφη",
            closeText: "Κλείσιμο",
            selectedText: "{count} επιλεγμένα",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο"],
            dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            fromText: "Αρχή",
            monthNames: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
            monthNamesShort: ["Ιαν", "Φεβ", "Μαρ", "Απρ", "Μαι", "Ιουν", "Ιουλ", "Αυγ", "Σεπ", "Οκτ", "Νοε", "Δεκ"],
            timeFormat: "H:mm",
            toText: "Τέλος",
            nowText: "τώρα",
            pmText: "μμ",
            amText: "πμ",
            firstDay: 1,
            dateText: "Ημερομηνία",
            timeText: "φορά",
            todayText: "Σήμερα",
            prevMonthText: "Προηγούμενο μήνα",
            nextMonthText: "Επόμενο μήνα",
            prevYearText: "Προηγούμενο έτος",
            nextYearText: "Επόμενο έτος",
            eventText: "Γεγονότα",
            eventsText: "Γεγονότα",
            allDayText: "Ολοήμερο",
            noEventsText: "Δεν υπάρχουν γεγονότα",
            moreEventsText: "{count} ακόμη",
            weekText: "Εβδομάδα {count}",
            rangeStartLabel: "Αρχή",
            rangeEndLabel: "Τέλος",
            rangeStartHelp: "Επιλογή",
            rangeEndHelp: "Επιλογή",
            filterEmptyText: "Κανένα αποτέλεσμα",
            filterPlaceholderText: "Αναζήτηση",
        },
        ae = { dateFormat: "DD/MM/YYYY", dateWheelFormat: "|DDD D MMM|", timeFormat: "H:mm" },
        se = {
            setText: "Aceptar",
            cancelText: "Cancelar",
            clearText: "Borrar",
            closeText: "Cerrar",
            selectedText: "{count} seleccionado",
            selectedPluralText: "{count} seleccionados",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD, MMM. D. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Iniciar",
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            timeFormat: "H:mm",
            toText: "Final",
            nowText: "Ahora",
            pmText: "pm",
            amText: "am",
            todayText: "Hoy",
            firstDay: 1,
            dateText: "Fecha",
            timeText: "Tiempo",
            allDayText: "Todo el día",
            noEventsText: "No hay eventos",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "{count} más",
            weekText: "Semana {count}",
            rangeStartLabel: "Iniciar",
            rangeEndLabel: "Final",
            rangeStartHelp: "Seleccionar",
            rangeEndHelp: "Seleccionar",
            filterEmptyText: "Sin resultados",
            filterPlaceholderText: "Buscar",
        },
        ie = void 0,
        re = ge(3),
        oe = ge(4),
        le = ge(7);
    function ce(e, t, n) {
        return Math.max(t, Math.min(e, n));
    }
    function de(e) {
        return Array.isArray(e);
    }
    function he(e) {
        return e - parseFloat(e) >= 0;
    }
    function ue(e) {
        return "number" == typeof e;
    }
    function me(e) {
        return "string" == typeof e;
    }
    function _e(e) {
        return e === ie || null === e || "" === e;
    }
    function pe(e) {
        return void 0 === e;
    }
    function ve(e) {
        return "object" == typeof e;
    }
    function fe(e) {
        return null !== e && e !== ie && "" + e != "false";
    }
    function ge(e) {
        return Array.apply(0, Array(Math.max(0, e)));
    }
    function ye(e) {
        return e !== ie ? e + (he(e) ? "px" : "") : "";
    }
    function be() {}
    function xe(e, t) {
        void 0 === t && (t = 2);
        for (var n = e + ""; n.length < t; ) n = "0" + n;
        return n;
    }
    function Te(e) {
        return Math.round(e);
    }
    function De(e, t) {
        return Ce(e / t) * t;
    }
    function Ce(e) {
        return Math.floor(e);
    }
    function Se(e, t) {
        var n, a;
        return (
            void 0 === t && (t = 100),
            function () {
                for (var s = [], i = 0; i < arguments.length; i++) s[i] = arguments[i];
                var r = +new Date();
                n && r < n + t
                    ? (clearTimeout(a),
                      (a = setTimeout(function () {
                          (n = r), e.apply(void 0, s);
                      }, t)))
                    : ((n = r), e.apply(void 0, s));
            }
        );
    }
    function we(e, t) {
        var n;
        return (
            void 0 === t && (t = 100),
            function () {
                for (var a = [], s = 0; s < arguments.length; s++) a[s] = arguments[s];
                clearTimeout(n),
                    (n = setTimeout(function () {
                        e.apply(void 0, a);
                    }, t));
            }
        );
    }
    function ke(e, t) {
        if (e === t) return !0;
        if ((e && !t) || (t && !e)) return !1;
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    function Me(e, t) {
        e._cdr ? setTimeout(t) : t();
    }
    function Ee(e, t) {
        return Ie(e, t);
    }
    function Ne(e, t) {
        return Ie(e, t, !0);
    }
    function Ie(e, t, n) {
        for (var a = e.length, s = 0; s < a; s++) {
            var i = e[s];
            if (t(i, s)) return n ? s : i;
        }
        return n ? -1 : ie;
    }
    function Le(e, t) {
        return de(e) ? e.map(t) : t(e, 0, [e]);
    }
    function He(e) {
        var t = [];
        if (e)
            for (var n = 0, a = Object.keys(e); n < a.length; n++) {
                var s = a[n];
                t.push(e[s]);
            }
        return t;
    }
    ge(24);
    var Ye = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        Oe = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    function Pe(e, t, n) {
        var a,
            s = e - 1600,
            i = t - 1,
            r = n - 1,
            o = 365 * s + Ce((s + 3) / 4) - Ce((s + 99) / 100) + Ce((s + 399) / 400);
        for (a = 0; a < i; ++a) o += Ye[a];
        i > 1 && ((s % 4 == 0 && s % 100 != 0) || s % 400 == 0) && ++o;
        var l = (o += r) - 79,
            c = 979 + 33 * Ce(l / 12053) + 4 * Ce((l %= 12053) / 1461);
        for ((l %= 1461) >= 366 && ((c += Ce((l - 1) / 365)), (l = (l - 1) % 365)), a = 0; a < 11 && l >= Oe[a]; ++a) l -= Oe[a];
        return [c, a + 1, l + 1];
    }
    var ze = {
            getYear: function (e) {
                return Pe(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --Pe(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return Pe(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, n, a, s, i, r) {
                t < 0 && ((e += Ce(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Ce(t / 12)), (t %= 12));
                var o = (function (e, t, n) {
                    var a,
                        s = e - 979,
                        i = t - 1,
                        r = n - 1,
                        o = 365 * s + 8 * Ce(s / 33) + Ce(((s % 33) + 3) / 4);
                    for (a = 0; a < i; ++a) o += Oe[a];
                    var l = (o += r) + 79,
                        c = 1600 + 400 * Ce(l / 146097),
                        d = !0;
                    for (
                        (l %= 146097) >= 36525 && ((c += 100 * Ce(--l / 36524)), (l %= 36524) >= 365 ? l++ : (d = !1)), c += 4 * Ce(l / 1461), (l %= 1461) >= 366 && ((d = !1), (c += Ce(--l / 365)), (l %= 365)), a = 0;
                        l >= Ye[a] + (1 === a && d ? 1 : 0);
                        a++
                    )
                        l -= Ye[a] + (1 === a && d ? 1 : 0);
                    return [c, a + 1, l + 1];
                })(e, +t + 1, n);
                return new Date(o[0], o[1] - 1, o[2], a || 0, s || 0, i || 0, r || 0);
            },
            getMaxDayOfMonth: function (e, t) {
                var n,
                    a,
                    s,
                    i = 31;
                for (
                    t < 0 && ((e += Ce(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Ce(t / 12)), (t %= 12));
                    (a = t + 1), (s = i), ((n = e) < 0 || n > 32767 || a < 1 || a > 12 || s < 1 || s > Oe[a - 1] + (12 === a && ((n - 979) % 33) % 4 == 0 ? 1 : 0)) && i > 29;

                )
                    i--;
                return i;
            },
        },
        Ve = {
            setText: "تاييد",
            cancelText: "انصراف",
            clearText: "واضح ",
            closeText: "نزدیک",
            selectedText: "{count} منتخب",
            rtl: !0,
            calendarSystem: ze,
            dateFormat: "YYYY/MM/DD",
            dateFormatLong: "YYYY/MM/DD",
            dateWheelFormat: "|DDDD MMM D|",
            dayNames: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه"],
            dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            fromText: "شروع ",
            monthNames: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            monthNamesShort: ["فروردين", "ارديبهشت", "خرداد", "تير", "مرداد", "شهريور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
            timeFormat: "HH:mm",
            timeWheels: "mmHH",
            toText: "پایان",
            nowText: "اکنون",
            amText: "ب",
            pmText: "ص",
            todayText: "امروز",
            firstDay: 6,
            dateText: "تاریخ ",
            timeText: "زمان ",
            allDayText: "تمام روز",
            noEventsText: "هیچ رویداد",
            eventText: "رویداد",
            eventsText: "رویدادها",
            moreEventsText: "{count} مورد دیگر",
            weekText: "{count} هفته",
            rangeStartLabel: "شروع ",
            rangeEndLabel: "پایان",
            rangeStartHelp: "انتخاب کنید",
            rangeEndHelp: "انتخاب کنید",
            filterEmptyText: "نتیجه ای ندارد",
            filterPlaceholderText: "جستجو کردن",
        },
        Fe = {
            setText: "Aseta",
            cancelText: "Peruuta",
            clearText: "Tyhjennä",
            closeText: "Sulje",
            selectedText: "{count} valita",
            dateFormat: "D. MMMM YYYY",
            dateFormatLong: "DDD, D. MMMM, YYYY",
            dateWheelFormat: "|DDD D. M.|",
            dayNames: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviiko", "Torstai", "Perjantai", "Lauantai"],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
            fromText: "Alkaa",
            monthNames: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
            monthNamesShort: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"],
            timeFormat: "H:mm",
            toText: "Päättyy",
            nowText: "Nyt",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Päiväys",
            timeText: "Aika",
            todayText: "Tänään",
            prevMonthText: "Edellinen kuukausi",
            nextMonthText: "Ensi kuussa",
            prevYearText: "Edellinen vuosi",
            nextYearText: "Ensi vuosi",
            eventText: "Tapahtumia",
            eventsText: "Tapahtumia",
            allDayText: "Koko päivä",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} muu",
            moreEventsPluralText: "{count} muuta",
            weekText: "Viikko {count}",
            rangeStartLabel: "Alkaa",
            rangeEndLabel: "Päättyy",
            rangeStartHelp: "Valitse",
            rangeEndHelp: "Valitse",
            filterEmptyText: "Ei tuloksia",
            filterPlaceholderText: "Haku",
        },
        Re = {
            setText: "Terminer",
            cancelText: "Annuler",
            clearText: "Effacer",
            closeText: "Fermer",
            selectedText: "{count} sélectionné",
            selectedPluralText: "{count} sélectionnés",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
            dayNamesShort: ["Dim.", "Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam."],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Démarrer",
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            monthNamesShort: ["Janv.", "Févr.", "Mars", "Avril", "Mai", "Juin", "Juil.", "Août", "Sept.", "Oct.", "Nov.", "Déc."],
            timeFormat: "HH:mm",
            toText: "Fin",
            nowText: "Maintenant",
            pmText: "pm",
            amText: "am",
            todayText: "Aujourd'hui",
            firstDay: 1,
            dateText: "Date",
            timeText: "Heure",
            allDayText: "Toute la journée",
            noEventsText: "Aucun événement",
            eventText: "Événement",
            eventsText: "Événements",
            moreEventsText: "{count} autre",
            moreEventsPluralText: "{count} autres",
            weekText: "Semaine {count}",
            rangeStartLabel: "Démarrer",
            rangeEndLabel: "Fin",
            rangeStartHelp: "Choisir",
            rangeEndHelp: "Choisir",
            filterEmptyText: "Aucun résultat",
            filterPlaceholderText: "Rechercher",
        },
        Ae = {
            rtl: !0,
            setText: "שמירה",
            cancelText: "ביטול",
            clearText: "נקה",
            closeText: "סגירה",
            selectedText: "{count} נבחר",
            selectedPluralText: "{count} נבחרו",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
            dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
            dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
            fromText: "התחלה",
            monthNames: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
            monthNamesShort: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"],
            amText: "am",
            pmText: "pm",
            timeFormat: "H:mm",
            timeWheels: "mmH",
            toText: "סיום",
            nowText: "עכשיו",
            firstDay: 0,
            dateText: "תאריך",
            timeText: "זמן",
            todayText: "היום",
            allDayText: "כל היום",
            noEventsText: "אין אירועים",
            eventText: "מִקרֶה",
            eventsText: "מִקרֶה",
            moreEventsText: "אירוע אחד נוסף",
            moreEventsPluralText: "{count} אירועים נוספים",
            weekText: "{count} שבוע",
            rangeStartLabel: "התחלה",
            rangeEndLabel: "סיום",
            rangeStartHelp: "בחר",
            rangeEndHelp: "בחר",
            filterEmptyText: "אין תוצאוה",
            filterPlaceholderText: "לחפש",
        },
        We = {
            setText: "सैट करें",
            cancelText: "रद्द करें",
            clearText: "साफ़ को",
            closeText: "बंद",
            selectedText: "{count} चयनित",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"],
            dayNamesShort: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            fromText: "से",
            monthNames: ["जनवरी ", "फरवरी", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अगस्त ", "सितम्बर", "अक्टूबर", "नवम्बर", "दिसम्बर"],
            monthNamesShort: ["जन", "फर", "मार्च", "अप्रेल", "मई", "जून", "जूलाई", "अग", "सित", "अक्ट", "नव", "दि"],
            timeFormat: "H:mm",
            toText: "तक",
            nowText: "अब",
            pmText: "अपराह्न",
            amText: "पूर्वाह्न",
            firstDay: 1,
            dateText: "तिथि",
            timeText: "समय",
            todayText: "आज",
            prevMonthText: "पिछ्ला महिना",
            nextMonthText: "अगले महीने",
            prevYearText: "पिछला साल",
            nextYearText: "अगले वर्ष",
            eventText: "इवेट३",
            eventsText: "इवेट३",
            allDayText: "पूरे दिन",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} और",
            weekText: "सप्ताह {count}",
            rangeStartLabel: "से",
            rangeEndLabel: "तक",
            rangeStartHelp: "चुनें",
            rangeEndHelp: "चुनें",
            filterEmptyText: "कोई परिणाम नही",
            filterPlaceholderText: "खोज",
        },
        Ue = {
            setText: "Postavi",
            cancelText: "Izlaz",
            clearText: "Izbriši",
            closeText: "Zatvori",
            selectedText: "{count} odabran",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D. MMM. YYYY.",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            fromText: "Počinje",
            monthNames: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
            monthNamesShort: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"],
            timeFormat: "H:mm",
            toText: "Završava",
            nowText: "Sada",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Vrijeme",
            todayText: "Danas",
            prevMonthText: "Prethodni mjesec",
            nextMonthText: "Sljedeći mjesec",
            prevYearText: "Prethodni godina",
            nextYearText: "Slijedeće godine",
            eventText: "Događaj",
            eventsText: "događaja",
            allDayText: "Cijeli dan",
            noEventsText: "Bez događaja",
            moreEventsText: "Još {count}",
            weekText: "{count}. tjedan",
            rangeStartLabel: "Počinje",
            rangeEndLabel: "Završava",
            rangeStartHelp: "Odaberite",
            rangeEndHelp: "Odaberite",
            filterEmptyText: "Bez rezultata",
            filterPlaceholderText: "Traži",
        },
        Be = {
            setText: "OK",
            cancelText: "Mégse",
            clearText: "Törlés",
            closeText: "Bezár",
            selectedText: "{count} kiválasztva",
            dateFormat: "YYYY.MM.DD.",
            dateFormatLong: "YYYY. MMM. D., DDD",
            dateWheelFormat: "|MMM. D. DDD|",
            dayNames: ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"],
            dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
            fromText: "Eleje",
            monthNames: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Szep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            toText: "Vége",
            nowText: "Most",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Dátum",
            timeText: "Idő",
            todayText: "Ma",
            prevMonthText: "Előző hónap",
            nextMonthText: "Következő hónap",
            prevYearText: "Előző év",
            nextYearText: "Következő év",
            eventText: "esemény",
            eventsText: "esemény",
            allDayText: "Egész nap",
            noEventsText: "Nincs esemény",
            moreEventsText: "{count} további",
            weekText: "{count}. hét",
            rangeStartLabel: "Eleje",
            rangeEndLabel: "Vége",
            rangeStartHelp: "Válasszon",
            rangeEndHelp: "Válasszon",
            filterEmptyText: "Nincs találat",
            filterPlaceholderText: "Keresés",
        },
        je = {
            setText: "OK",
            cancelText: "Annulla",
            clearText: "Chiarire",
            closeText: "Chiudere",
            selectedText: "{count} selezionato",
            selectedPluralText: "{count} selezionati",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
            dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
            fromText: "Inizio",
            monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
            timeFormat: "HH:mm",
            toText: "Fine",
            nowText: "Ora",
            pmText: "pm",
            amText: "am",
            todayText: "Oggi",
            firstDay: 1,
            dateText: "Data",
            timeText: "Volta",
            allDayText: "Tutto il giorno",
            noEventsText: "Nessun evento",
            eventText: "Evento",
            eventsText: "Eventi",
            moreEventsText: "{count} altro",
            moreEventsPluralText: "altri {count}",
            weekText: "Settimana {count}",
            rangeStartLabel: "Inizio",
            rangeEndLabel: "Fine",
            rangeStartHelp: "Scegli",
            rangeEndHelp: "Scegli",
            filterEmptyText: "Nessun risultato",
            filterPlaceholderText: "Cerca",
        },
        Ke = {
            setText: "セット",
            cancelText: "キャンセル",
            clearText: "クリア",
            closeText: "クローズ",
            selectedText: "{count} 選択",
            dateFormat: "YYYY年MM月DD日",
            dateFormatLong: "YYYY年MM月DD日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            fromText: "開始",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            timeFormat: "H:mm",
            toText: "終わり",
            nowText: "今",
            pmText: "午後",
            amText: "午前",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今日",
            dateText: "日付",
            timeText: "時間",
            allDayText: "終日",
            noEventsText: "イベントはありません",
            eventText: "イベント",
            eventsText: "イベント",
            moreEventsText: "他 {count} 件",
            weekText: "{count}週目",
            rangeStartLabel: "開始",
            rangeEndLabel: "終わり",
            rangeStartHelp: "選択",
            rangeEndHelp: "選択",
            filterEmptyText: "検索結果はありません",
            filterPlaceholderText: "探す",
        },
        Je = {
            setText: "설정",
            cancelText: "취소",
            clearText: "삭제",
            closeText: "닫기",
            selectedText: "{count} 선택된",
            dateFormat: "YYYY년MM월DD일",
            dateFormatLong: "YYYY년MM월DD일",
            dateWheelFormat: "|M월 D일 DDD|",
            dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            fromText: "시작",
            monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
            timeFormat: "H:mm",
            toText: "종료",
            nowText: "지금",
            pmText: "오후",
            amText: "오전",
            yearSuffix: "년",
            monthSuffix: "월",
            daySuffix: "일",
            firstDay: 0,
            dateText: "날짜",
            timeText: "시간",
            todayText: "오늘",
            prevMonthText: "이전 달",
            nextMonthText: "다음 달",
            prevYearText: "이전 년",
            nextYearText: "다음 년",
            eventText: "이벤트",
            eventsText: "이벤트",
            allDayText: "종일",
            noEventsText: "이벤트 없음",
            moreEventsText: "{count}개 더보기",
            weekText: "{count}주차",
            rangeStartLabel: "시작",
            rangeEndLabel: "종료",
            rangeStartHelp: "선택",
            rangeEndHelp: "선택",
            filterEmptyText: "결과가 없다",
            filterPlaceholderText: "찾다",
        },
        Xe = {
            setText: "OK",
            cancelText: "Atšaukti",
            clearText: "Išvalyti",
            closeText: "Uždaryti",
            selectedText: "Pasirinktas {count}",
            selectedPluralText: "Pasirinkti {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "YYYY-MM-DD",
            dateWheelFormat: "|MM-DD DDD|",
            dayNames: ["Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis"],
            dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            fromText: "Nuo",
            monthNames: ["Sausis", "Vasaris", "Kovas", "Balandis", "Gegužė", "Birželis", "Liepa", "Rugpjūtis", "Rugsėjis", "Spalis", "Lapkritis", "Gruodis"],
            monthNamesShort: ["Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugp", "Rugs", "Spa", "Lap", "Gruo"],
            amText: "am",
            pmText: "pm",
            timeFormat: "HH:mm",
            toText: "Iki",
            nowText: "Dabar",
            todayText: "Šiandien",
            firstDay: 1,
            dateText: "Data",
            timeText: "Laikas",
            allDayText: "Visą dieną",
            noEventsText: "Nėra įvykių",
            eventText: "Įvykių",
            eventsText: "Įvykiai",
            moreEventsText: "Dar {count}",
            weekText: "{count} savaitė",
            rangeStartLabel: "Nuo",
            rangeEndLabel: "Iki",
            rangeStartHelp: "Pasirinkti",
            rangeEndHelp: "Pasirinkti",
            filterEmptyText: "Nėra rezultatų",
            filterPlaceholderText: "Paieška",
        },
        Ge = {
            setText: "Instellen",
            cancelText: "Annuleren",
            clearText: "Leegmaken",
            closeText: "Sluiten",
            selectedText: "{count} gekozen",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DD-MM-YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"],
            dayNamesShort: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"],
            dayNamesMin: ["Z", "M", "D", "W", "D", "V", "Z"],
            fromText: "Start",
            monthNames: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            toText: "Einde",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "Vandaag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tijd",
            allDayText: "Hele dag",
            noEventsText: "Geen activiteiten",
            eventText: "Activiteit",
            eventsText: "Activiteiten",
            moreEventsText: "nog {count}",
            weekText: "Week {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Einde",
            rangeStartHelp: "Kies",
            rangeEndHelp: "Kies",
            filterEmptyText: "Niets gevonden",
            filterPlaceholderText: "Zoek",
        },
        qe = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Tømme",
            closeText: "Lukk",
            selectedText: "{count} valgt",
            dateFormat: "DD.MM.YYY",
            dateFormatLong: "DDD. D. MMM. YYYY",
            dateWheelFormat: "|DDD. D. MMM.|",
            dayNames: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"],
            dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"],
            timeFormat: "HH:mm",
            toText: "End",
            nowText: "Nå",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            allDayText: "Hele dagen",
            noEventsText: "Ingen hendelser",
            eventText: "Hendelse",
            eventsText: "Hendelser",
            moreEventsText: "{count} mere",
            weekText: "Uke {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "End",
            rangeStartHelp: "Velg",
            rangeEndHelp: "Velg",
            filterEmptyText: "Ingen treff",
            filterPlaceholderText: "Søk",
        },
        Ze = {
            setText: "Zestaw",
            cancelText: "Anuluj",
            clearText: "Oczyścić",
            closeText: "Zakończenie",
            selectedText: "Wybór: {count}",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD, D.MM.YYYY",
            dateWheelFormat: "|DDD D.MM|",
            dayNames: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
            dayNamesShort: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
            dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
            fromText: "Rozpoczęcie",
            monthNames: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            monthNamesShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"],
            timeFormat: "HH:mm",
            toText: "Koniec",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dzisiaj",
            firstDay: 1,
            dateText: "Data",
            timeText: "Czas",
            allDayText: "Cały dzień",
            noEventsText: "Brak wydarzeń",
            eventText: "Wydarzeń",
            eventsText: "Wydarzenia",
            moreEventsText: "Jeszcze {count}",
            weekText: "Tydzień {count}",
            rangeStartLabel: "Rozpoczęcie",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Wybierz",
            rangeEndHelp: "Wybierz",
            filterEmptyText: "Brak wyników",
            filterPlaceholderText: "Szukaj",
        },
        $e = {
            setText: "Seleccionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            closeText: "Fechar",
            selectedText: "{count} selecionado",
            selectedPluralText: "{count} selecionados",
            dateFormat: "DD-MM-YYYY",
            dateFormatLong: "DDD, D MMM, YYYY",
            dateWheelFormat: "|DDD D de MMM|",
            dayNames: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            fromText: "Início",
            monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
            monthNamesShort: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            timeFormat: "HH:mm",
            toText: "Fim",
            nowText: "Actualizar",
            pmText: "pm",
            amText: "am",
            todayText: "Hoje",
            firstDay: 1,
            dateText: "Data",
            timeText: "Tempo",
            allDayText: "Todo o dia",
            noEventsText: "Nenhum evento",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "Mais {count}",
            weekText: "Semana {count}",
            rangeStartLabel: "Início",
            rangeEndLabel: "Fim",
            rangeStartHelp: "Escolha",
            rangeEndHelp: "Escolha",
            filterEmptyText: "Nenhum resultado",
            filterPlaceholderText: "Pesquisa",
        },
        Qe = s({}, $e, { setText: "Selecionar", dateFormat: "DD/MM/YYYY", nowText: "Agora", allDayText: "Dia inteiro", filterPlaceholderText: "Buscar" }),
        et = {
            setText: "Setare",
            cancelText: "Anulare",
            clearText: "Ştergere",
            closeText: "Închidere",
            selectedText: "{count} selectat",
            selectedPluralText: "{count} selectate",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD., D MMM YYYY",
            dateWheelFormat: "|DDD. D MMM|",
            dayNames: ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"],
            dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            fromText: "Start",
            monthNames: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"],
            monthNamesShort: ["Ian.", "Feb.", "Mar.", "Apr.", "Mai", "Iun.", "Iul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."],
            timeFormat: "HH:mm",
            toText: "Final",
            nowText: "Acum",
            amText: "am",
            pmText: "pm",
            todayText: "Astăzi",
            prevMonthText: "Luna anterioară",
            nextMonthText: "Luna următoare",
            prevYearText: "Anul anterior",
            nextYearText: "Anul următor",
            eventText: "Eveniment",
            eventsText: "Evenimente",
            allDayText: "Toată ziua",
            noEventsText: "Niciun eveniment",
            moreEventsText: "Încă unul",
            moreEventsPluralText: "Încă {count}",
            firstDay: 1,
            dateText: "Data",
            timeText: "Ora",
            weekText: "Săptămâna {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Final",
            rangeStartHelp: "Selectare",
            rangeEndHelp: "Selectare",
            filterEmptyText: "Niciun rezultat",
            filterPlaceholderText: "Căutare",
        },
        tt = {
            setText: "Установить",
            cancelText: "Отмена",
            clearText: "Очистить",
            closeText: "Закрыть",
            selectedText: "{count} Выбрать",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
            fromText: "Начало",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            timeFormat: "HH:mm",
            toText: "Конец",
            nowText: "Сейчас",
            amText: "am",
            pmText: "pm",
            todayText: "Cегодня",
            firstDay: 1,
            dateText: "Дата",
            timeText: "Время",
            allDayText: "Весь день",
            noEventsText: "Нет событий",
            eventText: "Мероприятия",
            eventsText: "Мероприятия",
            moreEventsText: "Ещё {count}",
            weekText: "Неделя {count}",
            rangeStartLabel: "Начало",
            rangeEndLabel: "Конец",
            rangeStartHelp: "выбирать",
            rangeEndHelp: "выбирать",
            filterEmptyText: "Нет результатов",
            filterPlaceholderText: "Поиск",
        },
        nt = s({}, tt, {
            cancelText: "Отменить",
            clearText: "Очиститьr",
            selectedText: "{count} Вібрать",
            monthNamesShort: ["Янв.", "Февр.", "Март", "Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек."],
            filterEmptyText: "Ніякага выніку",
            filterPlaceholderText: "Пошук",
        }),
        at = {
            setText: "Zadaj",
            cancelText: "Zrušiť",
            clearText: "Vymazať",
            closeText: "Zavrieť",
            selectedText: "Označený: {count}",
            dateFormat: "D.M.YYYY",
            dateFormatLong: "DDD D. MMM YYYY",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"],
            dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
            dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
            fromText: "Začiatok",
            monthNames: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "H:mm",
            toText: "Koniec",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            allDayText: "Celý deň",
            noEventsText: "Žiadne udalosti",
            eventText: "Udalostí",
            eventsText: "Udalosti",
            moreEventsText: "{count} ďalšia",
            moreEventsPluralText: "{count} ďalšie",
            weekText: "{count}. týždeň",
            rangeStartLabel: "Začiatok",
            rangeEndLabel: "Koniec",
            rangeStartHelp: "Vybrať",
            rangeEndHelp: "Vybrať",
            filterEmptyText: "Žiadne výsledky",
            filterPlaceholderText: "Vyhľadávanie",
        },
        st = {
            setText: "Постави",
            cancelText: "Откажи",
            clearText: "Обриши",
            selectedText: "{count} изабрана",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DD.MM.YYYY",
            dateWheelFormat: "|DDD D. MMM|",
            dayNames: ["Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота"],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            fromText: "Од",
            monthNames: ["Јануар", "Фебруар", "Март", "Април", "Мај", "Јун", "Јул", "Август", "Септембар", "Октобар", "Новембар", "Децембар"],
            monthNamesShort: ["Јан", "Феб", "Мар", "Апр", "Мај", "Јун", "Јул", "Авг", "Сеп", "Окт", "Нов", "Дец"],
            timeFormat: "HH:mm",
            toText: "До",
            nowText: "сада",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Датум",
            timeText: "време",
            todayText: "Данас",
            prevMonthText: "Претходни мјесец",
            nextMonthText: "Следећег месеца",
            prevYearText: "Претходна године",
            nextYearText: "Следеће године",
            closeText: "Затвори",
            eventText: "Догађај",
            eventsText: "Догађаји",
            allDayText: "Цео дан",
            noEventsText: "Нема догађаја",
            moreEventsText: "Још {count}",
            weekText: "{count}. недеља",
            rangeStartLabel: "Од",
            rangeEndLabel: "До",
            rangeStartHelp: "Изаберите",
            rangeEndHelp: "Изаберите",
            filterEmptyText: "Без резултата",
            filterPlaceholderText: "Претрага",
        },
        it = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Klara",
            closeText: "Stäng",
            selectedText: "{count} vald",
            dateFormat: "YYYY-MM-DD",
            dateFormatLong: "DDD D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
            dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            fromText: "Start",
            monthNames: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
            timeFormat: "HH:mm",
            toText: "Slut",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tid",
            allDayText: "Heldag",
            noEventsText: "Inga aktiviteter",
            eventText: "Händelse",
            eventsText: "Händelser",
            moreEventsText: "{count} till",
            weekText: "Vecka {count}",
            rangeStartLabel: "Start",
            rangeEndLabel: "Slut",
            rangeStartHelp: "Välj",
            rangeEndHelp: "Välj",
            filterEmptyText: "Inga träffar",
            filterPlaceholderText: "Sök",
        },
        rt = {
            setText: "ตั้งค่า",
            cancelText: "ยกเลิก",
            clearText: "ล้าง",
            closeText: "ปิด",
            selectedText: "{count} เลือก",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DD/MM/YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"],
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            fromText: "จาก",
            monthNames: ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"],
            monthNamesShort: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."],
            timeFormat: "HH:mm",
            toText: "ถึง",
            nowText: "ตอนนี้",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "วัน",
            timeText: "เวลา",
            todayText: "วันนี้",
            prevMonthText: "เดือนก่อนหน้า",
            nextMonthText: "เดือนถัดไป",
            prevYearText: "ปีก่อนหน้า",
            nextYearText: "ปีถัดไป",
            eventText: "เหตุการณ์",
            eventsText: "เหตุการณ์",
            allDayText: "ตลอดวัน",
            noEventsText: "ไม่มีกิจกรรม",
            moreEventsText: "อีก {count} กิจกรรม",
            weekText: "สัปดาห์ที่ {count}",
            rangeStartLabel: "จาก",
            rangeEndLabel: "ถึง",
            rangeStartHelp: "เลือก",
            rangeEndHelp: "เลือก",
            filterEmptyText: "ไม่มีผลลัพธ์",
            filterPlaceholderText: "ค้นหา",
        },
        ot = {
            setText: "Seç",
            cancelText: "İptal",
            clearText: "Temizleyin",
            closeText: "Kapatmak",
            selectedText: "{count} seçilmiş",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "D MMMM DDD, YYYY",
            dateWheelFormat: "|D MMM DDD|",
            dayNames: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"],
            dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
            dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
            fromText: "Başla",
            monthNames: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"],
            monthNamesShort: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"],
            timeFormat: "HH:mm",
            toText: "Son",
            nowText: "Şimdi",
            pmText: "pm",
            amText: "am",
            todayText: "Bugün",
            firstDay: 1,
            dateText: "Tarih",
            timeText: "Zaman",
            allDayText: "Tüm gün",
            noEventsText: "Etkinlik Yok",
            eventText: "Etkinlik",
            eventsText: "Etkinlikler",
            moreEventsText: "{count} tane daha",
            weekText: "{count}. Hafta",
            rangeStartLabel: "Başla",
            rangeEndLabel: "Son",
            rangeStartHelp: "Seç",
            rangeEndHelp: "Seç",
            filterEmptyText: "Sonuç Yok",
            filterPlaceholderText: "Arayın",
        },
        lt = {
            setText: "встановити",
            cancelText: "відміна",
            clearText: "очистити",
            closeText: "Закрити",
            selectedText: "{count} вибрані",
            dateFormat: "DD.MM.YYYY",
            dateFormatLong: "DDD, D MMM. YYYY",
            dateWheelFormat: "|DDD D MMM.|",
            dayNames: ["неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"],
            dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            fromText: "від",
            monthNames: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"],
            monthNamesShort: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"],
            timeFormat: "H:mm",
            toText: "кінець",
            nowText: "Зараз",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "дата",
            timeText: "Час",
            todayText: "Сьогодні",
            prevMonthText: "Попередній місяць",
            nextMonthText: "Наступного місяця",
            prevYearText: "Попередній рік",
            nextYearText: "Наступного року",
            eventText: "подія",
            eventsText: "події",
            allDayText: "Увесь день",
            noEventsText: "Жодної події",
            moreEventsText: "та ще {count}",
            weekText: "{count} тиждень",
            rangeStartLabel: "від",
            rangeEndLabel: "кінець",
            rangeEndHelp: "Обрати",
            rangeStartHelp: "Обрати",
            filterEmptyText: "Ніякого результату",
            filterPlaceholderText: "Пошук",
        },
        ct = {
            setText: "Đặt",
            cancelText: "Hủy bò",
            clearText: "Xóa",
            closeText: "Đóng",
            selectedText: "{count} chọn",
            dateFormat: "DD/MM/YYYY",
            dateFormatLong: "DDD D, MMM YYYY",
            dateWheelFormat: "|DDD D MMM|",
            dayNames: ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            fromText: "Từ",
            monthNames: ["Tháng Một", "Tháng Hai", "Tháng Ba", "Tháng Tư", "Tháng Năm", "Tháng Sáu", "Tháng Bảy", "Tháng Tám", "Tháng Chín", "Tháng Mười", "Tháng Mười Một", "Tháng Mười Hai"],
            monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
            timeFormat: "H:mm",
            toText: "Tới",
            nowText: "Bây giờ",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "Ngày",
            timeText: "Hồi",
            todayText: "Hôm nay",
            prevMonthText: "Tháng trước",
            nextMonthText: "Tháng tới",
            prevYearText: "Măm trước",
            nextYearText: "Năm tới",
            eventText: "Sự kiện",
            eventsText: "Sự kiện",
            allDayText: "Cả ngày",
            noEventsText: "Không có sự kiện",
            moreEventsText: "{count} thẻ khác",
            weekText: "Tuần {count}",
            rangeStartLabel: "Từ",
            rangeEndLabel: "Tới",
            rangeStartHelp: "Chọn",
            rangeEndHelp: "Chọn",
            filterEmptyText: "Không kết quả",
            filterPlaceholderText: "Tìm kiếm",
        },
        dt = {
            setText: "确定",
            cancelText: "取消",
            clearText: "明确",
            closeText: "关闭",
            selectedText: "{count} 选",
            dateFormat: "YYYY年M月D日",
            dateFormatLong: "YYYY年M月D日",
            dateWheelFormat: "|M月D日 DDD|",
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            fromText: "开始时间",
            monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            timeFormat: "H:mm",
            toText: "结束时间",
            nowText: "当前",
            pmText: "下午",
            amText: "上午",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今天",
            dateText: "日",
            timeText: "时间",
            allDayText: "全天",
            noEventsText: "无事件",
            eventText: "活动",
            eventsText: "活动",
            moreEventsText: "他 {count} 件",
            weekText: "第 {count} 週",
            rangeStartLabel: "开始时间",
            rangeEndLabel: "结束时间",
            rangeStartHelp: "选取",
            rangeEndHelp: "选取",
            filterEmptyText: "没有结果",
            filterPlaceholderText: "搜索",
        };
    function ht(e) {
        return e < -1e-7 ? Math.ceil(e - 1e-7) : Math.floor(e + 1e-7);
    }
    function ut(e, t, n) {
        var a,
            s,
            i,
            r,
            o = [0, 0, 0];
        return (
            (a =
                e > 1582 || (1582 === e && t > 10) || (1582 === e && 10 === t && n > 14)
                    ? ht((1461 * (e + 4800 + ht((t - 14) / 12))) / 4) + ht((367 * (t - 2 - 12 * ht((t - 14) / 12))) / 12) - ht((3 * ht((e + 4900 + ht((t - 14) / 12)) / 100)) / 4) + n - 32075
                    : 367 * e - ht((7 * (e + 5001 + ht((t - 9) / 7))) / 4) + ht((275 * t) / 9) + n + 1729777),
            (r = ht(((s = a - 1948440 + 10632) - 1) / 10631)),
            (i = ht((10985 - (s = s - 10631 * r + 354)) / 5316) * ht((50 * s) / 17719) + ht(s / 5670) * ht((43 * s) / 15238)),
            (s = s - ht((30 - i) / 15) * ht((17719 * i) / 50) - ht(i / 16) * ht((15238 * i) / 43) + 29),
            (t = ht((24 * s) / 709)),
            (n = s - ht((709 * t) / 24)),
            (e = 30 * r + i - 30),
            (o[2] = n),
            (o[1] = t),
            (o[0] = e),
            o
        );
    }
    var mt = {
            getYear: function (e) {
                return ut(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --ut(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return ut(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, n, a, s, i, r) {
                t < 0 && ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Math.floor(t / 12)), (t %= 12));
                var o = (function (e, t, n) {
                    var a,
                        s,
                        i,
                        r,
                        o,
                        l = new Array(3),
                        c = ht((11 * e + 3) / 30) + 354 * e + 30 * t - ht((t - 1) / 2) + n + 1948440 - 385;
                    return (
                        c > 2299160
                            ? ((i = ht((4 * (a = c + 68569)) / 146097)),
                              (a -= ht((146097 * i + 3) / 4)),
                              (r = ht((4e3 * (a + 1)) / 1461001)),
                              (a = a - ht((1461 * r) / 4) + 31),
                              (s = ht((80 * a) / 2447)),
                              (n = a - ht((2447 * s) / 80)),
                              (t = s + 2 - 12 * (a = ht(s / 11))),
                              (e = 100 * (i - 49) + r + a))
                            : ((o = ht(((s = c + 1402) - 1) / 1461)),
                              (i = ht(((a = s - 1461 * o) - 1) / 365) - ht(a / 1461)),
                              (s = ht((80 * (r = a - 365 * i + 30)) / 2447)),
                              (n = r - ht((2447 * s) / 80)),
                              (t = s + 2 - 12 * (r = ht(s / 11))),
                              (e = 4 * o + i + r - 4716)),
                        (l[2] = n),
                        (l[1] = t),
                        (l[0] = e),
                        l
                    );
                })(e, +t + 1, n);
                return new Date(o[0], o[1] - 1, o[2], a || 0, s || 0, i || 0, r || 0);
            },
            getMaxDayOfMonth: function (e, t) {
                t < 0 && ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)), t > 11 && ((e += Math.floor(t / 12)), (t %= 12));
                return [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][t] + (11 === t && (11 * e + 14) % 30 < 11 ? 1 : 0);
            },
        },
        _t = {},
        pt = {
            ar: q,
            bg: Z,
            ca: $,
            cs: Q,
            da: ee,
            de: te,
            el: ne,
            en: _t,
            "en-GB": ae,
            es: se,
            fa: Ve,
            fi: Fe,
            fr: Re,
            he: Ae,
            hi: We,
            hr: Ue,
            hu: Be,
            it: je,
            ja: Ke,
            ko: Je,
            lt: Xe,
            nl: Ge,
            no: qe,
            pl: Ze,
            "pt-BR": Qe,
            "pt-PT": $e,
            ro: et,
            ru: tt,
            "ru-UA": nt,
            sk: at,
            sr: st,
            sv: it,
            th: rt,
            tr: ot,
            ua: lt,
            vi: ct,
            zh: dt,
        },
        vt = m ? document : ie,
        ft = m ? window : ie,
        gt = ["Webkit", "Moz"],
        yt = vt && vt.createElement("div").style,
        bt = vt && vt.createElement("canvas"),
        xt = bt && bt.getContext && bt.getContext("2d", { willReadFrequently: !0 }),
        Tt = ft && ft.CSS,
        Dt = Tt && Tt.supports,
        Ct = {},
        St =
            (ft && ft.requestAnimationFrame) ||
            function (e) {
                return setTimeout(e, 20);
            },
        wt =
            (ft && ft.cancelAnimationFrame) ||
            function (e) {
                clearTimeout(e);
            },
        kt = yt && yt.animationName !== ie,
        Mt = "ios" === r && !y,
        Et = Mt && ft && ft.webkit && ft.webkit.messageHandlers,
        Nt = (yt && yt.touchAction === ie) || (Mt && !Et),
        It = (function () {
            if (!yt || yt.transform !== ie) return "";
            for (var e = 0, t = gt; e < t.length; e++) {
                var n = t[e];
                if (yt[n + "Transform"] !== ie) return n;
            }
            return "";
        })(),
        Lt = It ? "-" + It.toLowerCase() + "-" : "",
        Ht = Dt && Dt("(transform-style: preserve-3d)"),
        Yt = Dt && (Dt("position", "sticky") || Dt("position", "-webkit-sticky"));
    function Ot(e, t, n, a) {
        e && e.addEventListener(t, n, a);
    }
    function Pt(e, t, n, a) {
        e && e.removeEventListener(t, n, a);
    }
    function zt(e) {
        return m ? (e && e.ownerDocument ? e.ownerDocument : vt) : ie;
    }
    function Vt(e, t) {
        return parseFloat(getComputedStyle(e)[t] || "0");
    }
    function Ft(e) {
        return e.scrollLeft !== ie ? e.scrollLeft : e.pageXOffset;
    }
    function Rt(e) {
        return e.scrollTop !== ie ? e.scrollTop : e.pageYOffset;
    }
    function At(e) {
        return m ? (e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : ft) : ie;
    }
    function Wt(e, t) {
        var n = getComputedStyle(e),
            a = (It ? n[It + "Transform"] : n.transform).split(")")[0].split(", ");
        return +(t ? a[13] || a[5] : a[12] || a[4]) || 0;
    }
    function Ut(e) {
        if (Ct[e]) return Ct[e];
        if (!xt) return "#fff";
        (xt.fillStyle = e), xt.fillRect(0, 0, 1, 1);
        var t = xt.getImageData(0, 0, 1, 1),
            n = t ? t.data : [0, 0, 0],
            a = 0.299 * +n[0] + 0.587 * +n[1] + 0.114 * +n[2] < 130 ? "#fff" : "#000";
        return (Ct[e] = a), a;
    }
    function Bt(e, t, n, a, s, i, r) {
        var o,
            l,
            c = Math.min(1, (+new Date() - t) / 468),
            d = 0.5 * (1 - Math.cos(Math.PI * c));
        s !== ie && ((o = Te(n + (s - n) * d)), (e.scrollLeft = o)),
            i !== ie && ((l = Te(a + (i - a) * d)), (e.scrollTop = l)),
            o !== s || l !== i
                ? St(function () {
                      Bt(e, t, n, a, s, i, r);
                  })
                : r && r();
    }
    function jt(e, t, n, a, s, i) {
        t !== ie && (t = Math.max(0, Te(t))),
            n !== ie && (n = Math.max(0, Te(n))),
            s && t !== ie && (t = -t),
            a ? Bt(e, +new Date(), e.scrollLeft, e.scrollTop, t, n, i) : (t !== ie && (e.scrollLeft = t), n !== ie && (e.scrollTop = n), i && i());
    }
    function Kt(e) {
        var t = e.getBoundingClientRect(),
            n = { left: t.left, top: t.top },
            a = At(e);
        return a !== ie && ((n.top += Rt(a)), (n.left += Ft(a))), n;
    }
    function Jt(e, t) {
        var n = e && (e.matches || e.msMatchesSelector);
        return n && n.call(e, t);
    }
    function Xt(e, t, n) {
        for (; e && !Jt(e, t); ) {
            if (e === n || e.nodeType === e.DOCUMENT_NODE) return null;
            e = e.parentNode;
        }
        return e;
    }
    function Gt(e, t, n) {
        var a;
        try {
            a = new CustomEvent(t, { bubbles: !0, cancelable: !0, detail: n });
        } catch (e) {
            (a = document.createEvent("Event")).initEvent(t, !0, !0), (a.detail = n);
        }
        e.dispatchEvent(a);
    }
    function qt(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n], n);
    }
    var Zt = {},
        $t = [],
        Qt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    function en(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function tn(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    var nn = {
        _catchError: function (e, t) {
            for (var n, a, s; (t = t._parent); )
                if ((n = t._component) && !n._processingException)
                    try {
                        if (((a = n.constructor) && null != a.getDerivedStateFromError && (n.setState(a.getDerivedStateFromError(e)), (s = n._dirty)), null != n.componentDidCatch && (n.componentDidCatch(e), (s = n._dirty)), s))
                            return (n._pendingError = n);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        },
        _vnodeId: 0,
    };
    function an(e, t, n) {
        var a,
            s,
            i,
            r = {};
        for (i in t) "key" == i ? (a = t[i]) : "ref" == i ? (s = t[i]) : (r[i] = t[i]);
        if (arguments.length > 3) for (n = [n], i = 3; i < arguments.length; i++) n.push(arguments[i]);
        if ((null != n && (r.children = n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === r[i] && (r[i] = e.defaultProps[i]);
        return sn(e, r, a, s, null);
    }
    function sn(e, t, n, a, s) {
        var i = { type: e, props: t, key: n, ref: a, _children: null, _parent: null, _depth: 0, _dom: null, _nextDom: void 0, _component: null, _hydrating: null, constructor: void 0, _original: null == s ? ++nn._vnodeId : s };
        return null != nn.vnode && nn.vnode(i), i;
    }
    function rn(e) {
        return e.children;
    }
    function on(e, t) {
        (this.props = e), (this.context = t);
    }
    function ln(e, t) {
        if (null == t) return e._parent ? ln(e._parent, e._parent._children.indexOf(e) + 1) : null;
        for (var n; t < e._children.length; t++) if (null != (n = e._children[t]) && null != n._dom) return n._dom;
        return "function" == typeof e.type ? ln(e) : null;
    }
    function cn(e) {
        var t = e._vnode,
            n = t._dom,
            a = e._parentDom;
        if (a) {
            var s = [],
                i = en({}, t);
            (i._original = t._original + 1), Dn(a, t, i, e._globalContext, void 0 !== a.ownerSVGElement, null != t._hydrating ? [n] : null, s, null == n ? ln(t) : n, t._hydrating), Cn(s, t), t._dom != n && dn(t);
        }
    }
    function dn(e) {
        if (null != (e = e._parent) && null != e._component) {
            e._dom = e._component.base = null;
            for (var t = 0; t < e._children.length; t++) {
                var n = e._children[t];
                if (null != n && null != n._dom) {
                    e._dom = e._component.base = n._dom;
                    break;
                }
            }
            return dn(e);
        }
    }
    (on.prototype.setState = function (e, t) {
        var n;
        (n = null != this._nextState && this._nextState !== this.state ? this._nextState : (this._nextState = en({}, this.state))),
            "function" == typeof e && (e = e(en({}, n), this.props)),
            e && en(n, e),
            null != e && this._vnode && (t && this._renderCallbacks.push(t), _n(this));
    }),
        (on.prototype.forceUpdate = function (e) {
            this._vnode && ((this._force = !0), e && this._renderCallbacks.push(e), _n(this));
        }),
        (on.prototype.render = rn);
    var hn,
        un = [],
        mn = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
    function _n(e) {
        ((!e._dirty && (e._dirty = !0) && un.push(e) && !pn._rerenderCount++) || hn !== nn.debounceRendering) && ((hn = nn.debounceRendering) || mn)(pn);
    }
    function pn() {
        for (var e; (pn._rerenderCount = un.length); )
            (e = un.sort(function (e, t) {
                return e._vnode._depth - t._vnode._depth;
            })),
                (un = []),
                e.some(function (e) {
                    e._dirty && cn(e);
                });
    }
    function vn(e, t, n, a, s, i, r, o, l, c) {
        var d,
            h,
            u,
            m,
            _,
            p,
            v,
            f = (a && a._children) || $t,
            g = f.length;
        for (n._children = [], d = 0; d < t.length; d++)
            if (
                null !=
                (m =
                    null == (m = t[d]) || "boolean" == typeof m
                        ? (n._children[d] = null)
                        : "string" == typeof m || "number" == typeof m || "bigint" == typeof m
                        ? (n._children[d] = sn(null, m, null, null, m))
                        : Array.isArray(m)
                        ? (n._children[d] = sn(rn, { children: m }, null, null, null))
                        : m._depth > 0
                        ? (n._children[d] = sn(m.type, m.props, m.key, null, m._original))
                        : (n._children[d] = m))
            ) {
                if (((m._parent = n), (m._depth = n._depth + 1), null === (u = f[d]) || (u && m.key == u.key && m.type === u.type))) f[d] = void 0;
                else
                    for (h = 0; h < g; h++) {
                        if ((u = f[h]) && m.key == u.key && m.type === u.type) {
                            f[h] = void 0;
                            break;
                        }
                        u = null;
                    }
                Dn(e, m, (u = u || Zt), s, i, r, o, l, c),
                    (_ = m._dom),
                    (h = m.ref) && u.ref != h && (v || (v = []), u.ref && v.push(u.ref, null, m), v.push(h, m._component || _, m)),
                    null != _
                        ? (null == p && (p = _),
                          "function" == typeof m.type && null != m._children && m._children === u._children ? (m._nextDom = l = fn(m, l, e)) : (l = gn(e, m, u, f, _, l)),
                          c || "option" !== n.type ? "function" == typeof n.type && (n._nextDom = l) : (e.value = ""))
                        : l && u._dom == l && l.parentNode != e && (l = ln(u));
            }
        for (n._dom = p, d = g; d--; ) null != f[d] && ("function" == typeof n.type && null != f[d]._dom && f[d]._dom == n._nextDom && (n._nextDom = ln(a, d + 1)), wn(f[d], f[d]));
        if (v) for (d = 0; d < v.length; d++) Sn(v[d], v[++d], v[++d]);
    }
    function fn(e, t, n) {
        for (var a = 0; a < e._children.length; a++) {
            var s = e._children[a];
            s && ((s._parent = e), (t = "function" == typeof s.type ? fn(s, t, n) : gn(n, s, s, e._children, s._dom, t)));
        }
        return t;
    }
    function gn(e, t, n, a, s, i) {
        var r;
        if (void 0 !== t._nextDom) (r = t._nextDom), (t._nextDom = void 0);
        else if (null == n || s != i || null == s.parentNode)
            e: if (null == i || i.parentNode !== e) e.appendChild(s), (r = null);
            else {
                for (var o = i, l = 0; (o = o.nextSibling) && l < a.length; l += 2) if (o == s) break e;
                e.insertBefore(s, i), (r = i);
            }
        return (i = void 0 !== r ? r : s.nextSibling);
    }
    function yn(e, t, n) {
        "-" === t[0] ? e.setProperty(t, n) : null == n ? (e[t] = "") : "number" != typeof n || Qt.test(t) ? (e[t] = n) : (e[t] = n + "px");
    }
    function bn(e, t, n, a, s) {
        var i;
        e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
                if (("string" == typeof a && (e.style.cssText = a = ""), a)) for (t in a) (n && t in n) || yn(e.style, t, "");
                if (n) for (t in n) (a && n[t] === a[t]) || yn(e.style, t, n[t]);
            }
        else if ("o" === t[0] && "n" === t[1])
            if (((i = t !== (t = t.replace(/Capture$/, ""))), (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)), e._listeners || (e._listeners = {}), (e._listeners[t + i] = n), n)) {
                if (!a) {
                    var r = i ? Tn : xn;
                    e.addEventListener(t, r, i);
                }
            } else {
                var o = i ? Tn : xn;
                e.removeEventListener(t, o, i);
            }
        else if ("dangerouslySetInnerHTML" !== t) {
            if (s) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
            else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e)
                try {
                    e[t] = null == n ? "" : n;
                    break e;
                } catch (e) {}
            "function" == typeof n || (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1])) ? e.setAttribute(t, n) : e.removeAttribute(t));
        }
    }
    function xn(e) {
        this._listeners[e.type + !1](nn.event ? nn.event(e) : e);
    }
    function Tn(e) {
        this._listeners[e.type + !0](nn.event ? nn.event(e) : e);
    }
    function Dn(e, t, n, a, s, i, r, o, l) {
        var c,
            d = t.type;
        if (void 0 !== t.constructor) return null;
        null != n._hydrating && ((l = n._hydrating), (o = t._dom = n._dom), (t._hydrating = null), (i = [o])), (c = nn._diff) && c(t);
        try {
            e: if ("function" == typeof d) {
                var h,
                    u,
                    m,
                    _,
                    p,
                    v,
                    f = t.props,
                    g = (c = d.contextType) && a[c._id],
                    y = c ? (g ? g.props.value : c._defaultValue) : a;
                if (
                    (n._component
                        ? (v = (h = t._component = n._component)._processingException = h._pendingError)
                        : ("prototype" in d && d.prototype.render ? (t._component = h = new d(f, y)) : ((t._component = h = new on(f, y)), (h.constructor = d), (h.render = kn)),
                          g && g.sub(h),
                          (h.props = f),
                          h.state || (h.state = {}),
                          (h.context = y),
                          (h._globalContext = a),
                          (u = h._dirty = !0),
                          (h._renderCallbacks = [])),
                    null == h._nextState && (h._nextState = h.state),
                    null != d.getDerivedStateFromProps && (h._nextState == h.state && (h._nextState = en({}, h._nextState)), en(h._nextState, d.getDerivedStateFromProps(f, h._nextState))),
                    (m = h.props),
                    (_ = h.state),
                    u)
                )
                    null == d.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h._renderCallbacks.push(h.componentDidMount);
                else {
                    if (
                        (null == d.getDerivedStateFromProps && f !== m && null != h.componentWillReceiveProps && h.componentWillReceiveProps(f, y),
                        (!h._force && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(f, h._nextState, y)) || t._original === n._original)
                    ) {
                        (h.props = f),
                            (h.state = h._nextState),
                            t._original !== n._original && (h._dirty = !1),
                            (h._vnode = t),
                            (t._dom = n._dom),
                            (t._children = n._children),
                            t._children.forEach(function (e) {
                                e && (e._parent = t);
                            }),
                            h._renderCallbacks.length && r.push(h);
                        break e;
                    }
                    null != h.componentWillUpdate && h.componentWillUpdate(f, h._nextState, y),
                        null != h.componentDidUpdate &&
                            h._renderCallbacks.push(function () {
                                h.componentDidUpdate(m, _, p);
                            });
                }
                (h.context = y),
                    (h.props = f),
                    (h.state = h._nextState),
                    (c = nn._render) && c(t),
                    (h._dirty = !1),
                    (h._vnode = t),
                    (h._parentDom = e),
                    (c = h.render(h.props, h.state, h.context)),
                    (h.state = h._nextState),
                    null != h.getChildContext && (a = en(en({}, a), h.getChildContext())),
                    u || null == h.getSnapshotBeforeUpdate || (p = h.getSnapshotBeforeUpdate(m, _));
                var b = null != c && c.type === rn && null == c.key ? c.props.children : c;
                vn(e, Array.isArray(b) ? b : [b], t, n, a, s, i, r, o, l), (h.base = t._dom), (t._hydrating = null), h._renderCallbacks.length && r.push(h), v && (h._pendingError = h._processingException = null), (h._force = !1);
            } else
                null == i && t._original === n._original
                    ? ((t._children = n._children), (t._dom = n._dom))
                    : (t._dom = (function (e, t, n, a, s, i, r, o) {
                          var l = n.props,
                              c = t.props,
                              d = t.type,
                              h = 0;
                          "svg" === d && (s = !0);
                          if (null != i)
                              for (; h < i.length; h++) {
                                  var u = i[h];
                                  if (u && (u === e || (d ? u.localName == d : 3 == u.nodeType))) {
                                      (e = u), (i[h] = null);
                                      break;
                                  }
                              }
                          if (null == e) {
                              if (null === d) return document.createTextNode(c);
                              (e = s ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, c.is && c)), (i = null), (o = !1);
                          }
                          if (null === d) l === c || (o && e.data === c) || (e.data = c);
                          else {
                              i = i && $t.slice.call(e.childNodes);
                              var m = (l = n.props || Zt).dangerouslySetInnerHTML,
                                  _ = c.dangerouslySetInnerHTML;
                              if (
                                  (o || (null != i && (l = {}), (_ || m) && ((_ && ((m && _.__html == m.__html) || _.__html === e.innerHTML)) || (e.innerHTML = (_ && _.__html) || ""))),
                                  (function (e, t, n, a, s) {
                                      var i;
                                      for (i in n) "children" === i || "key" === i || i in t || bn(e, i, null, n[i], a);
                                      for (i in t) (s && "function" != typeof t[i]) || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || bn(e, i, t[i], n[i], a);
                                  })(e, c, l, s, o),
                                  _)
                              )
                                  t._children = [];
                              else if (((h = t.props.children), vn(e, Array.isArray(h) ? h : [h], t, n, a, s && "foreignObject" !== d, i, r, e.firstChild, o), null != i)) for (h = i.length; h--; ) null != i[h] && tn(i[h]);
                              o ||
                                  ("value" in c && void 0 !== (h = c.value) && (h !== e.value || ("progress" === d && !h)) && bn(e, "value", h, l.value, !1),
                                  "checked" in c && void 0 !== (h = c.checked) && h !== e.checked && bn(e, "checked", h, l.checked, !1));
                          }
                          return e;
                      })(n._dom, t, n, a, s, i, r, l));
            (c = nn.diffed) && c(t);
        } catch (e) {
            (t._original = null), (l || null != i) && ((t._dom = o), (t._hydrating = !!l), (i[i.indexOf(o)] = null)), nn._catchError(e, t, n);
        }
    }
    function Cn(e, t) {
        nn._commit && nn._commit(t, e),
            e.some(function (t) {
                try {
                    (e = t._renderCallbacks),
                        (t._renderCallbacks = []),
                        e.some(function (e) {
                            e.call(t);
                        });
                } catch (e) {
                    nn._catchError(e, t._vnode);
                }
            });
    }
    function Sn(e, t, n) {
        try {
            "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            nn._catchError(e, n);
        }
    }
    function wn(e, t, n) {
        var a, s;
        if ((nn.unmount && nn.unmount(e), (a = e.ref) && ((a.current && a.current !== e._dom) || Sn(a, null, t)), n || "function" == typeof e.type || (n = null != (s = e._dom)), (e._dom = e._nextDom = void 0), null != (a = e._component))) {
            if (a.componentWillUnmount)
                try {
                    a.componentWillUnmount();
                } catch (e) {
                    nn._catchError(e, t);
                }
            a.base = a._parentDom = null;
        }
        if ((a = e._children)) for (var i = 0; i < a.length; i++) a[i] && wn(a[i], t, n);
        null != s && tn(s);
    }
    function kn(e, t, n) {
        return this.constructor(e, n);
    }
    function Mn(e, t, n) {
        nn._root && nn._root(e, t);
        var a = "function" == typeof n,
            s = a ? null : (n && n._children) || t._children,
            i = [];
        Dn(t, (e = ((!a && n) || t)._children = an(rn, null, [e])), s || Zt, Zt, void 0 !== t.ownerSVGElement, !a && n ? [n] : s ? null : t.firstChild ? $t.slice.call(t.childNodes) : null, i, !a && n ? n : s ? s._dom : t.firstChild, a),
            Cn(i, e);
    }
    pn._rerenderCount = 0;
    var En = 0;
    function Nn(e, t) {
        var n = {
            _id: (t = "__cC" + En++),
            _defaultValue: e,
            Consumer: function (e, t) {
                return e.children(t);
            },
            Provider: function (e) {
                if (!this.getChildContext) {
                    var n = [],
                        a = {};
                    (a[t] = this),
                        (this.getChildContext = function () {
                            return a;
                        }),
                        (this.shouldComponentUpdate = function (e) {
                            this.props.value !== e.value && n.some(_n);
                        }),
                        (this.sub = function (e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function () {
                                n.splice(n.indexOf(e), 1), t && t.call(e);
                            };
                        });
                }
                return e.children;
            },
        };
        return (n.Provider._contextRef = n.Consumer.contextType = n);
    }
    var In = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            a(t, e),
            (t.prototype.render = function () {}),
            (t.prototype.shouldComponentUpdate = function (e, t) {
                return Ln(e, this.props) || Ln(t, this.state);
            }),
            t
        );
    })(on);
    function Ln(e, t) {
        for (var n in e) if (e[n] !== t[n]) return !0;
        for (var n in t) if (!(n in e)) return !0;
        return !1;
    }
    var Hn = an;
    nn.vnode = function (e) {
        var t = e.props,
            n = {};
        if (me(e.type)) {
            for (var a in t) {
                var s = t[a];
                /^onAni/.test(a) ? (a = a.toLowerCase()) : /ondoubleclick/i.test(a) && (a = "ondblclick"), (n[a] = s);
            }
            e.props = n;
        }
    };
    var Yn = {},
        On = 0;
    function Pn(e, t, n, a, s) {
        Jt(e, t)
            ? e.__mbscFormInst || zn(n, e, s, a, !0)
            : qt(e.querySelectorAll(t), function (e) {
                  e.__mbscFormInst || zn(n, e, s, a, !0);
              });
    }
    function zn(e, t, n, a, i) {
        var r,
            o,
            l = [],
            c = [],
            d = {},
            h = a || {},
            u = h.renderToParent ? t.parentNode : t,
            m = u.parentNode,
            _ = h.useOwnChildren ? t : u,
            p = t.getAttribute("class"),
            v = t.value,
            f = s({ className: u.getAttribute("class") }, t.dataset, n, {
                ref: function (e) {
                    o = e;
                },
            });
        h.readProps &&
            h.readProps.forEach(function (e) {
                var n = t[e];
                n !== ie && (f[e] = n);
            }),
            h.readAttrs &&
                h.readAttrs.forEach(function (e) {
                    var n = t.getAttribute(e);
                    null !== n && (f[e] = n);
                });
        var g = h.slots;
        if (g)
            for (var y in g)
                if (g.hasOwnProperty(y)) {
                    var b = g[y],
                        x = u.querySelector("[mbsc-" + b + "]");
                    x && ((d[y] = x), x.parentNode.removeChild(x), (f[y] = Hn("span", { className: "mbsc-slot-" + b })));
                }
        if (
            (h.hasChildren &&
                (qt(_.childNodes, function (e) {
                    e !== t && 8 !== e.nodeType && (3 !== e.nodeType || (3 === e.nodeType && /\S/.test(e.nodeValue))) && l.push(e), c.push(e);
                }),
                qt(l, function (e) {
                    _.removeChild(e);
                }),
                l.length && (f.hasChildren = !0)),
            t.id || (t.id = "mbsc-control-" + On++),
            h.before && h.before(t, f, l),
            Mn(Hn(e, f), m, u),
            p &&
                h.renderToParent &&
                (r = t.classList).add.apply(
                    r,
                    p
                        .replace(/^\s+|\s+$/g, "")
                        .replace(/\s+|^\s|\s$/g, " ")
                        .split(" ")
                ),
            h.hasChildren)
        ) {
            var T = "." + h.parentClass,
                D = Jt(u, T) ? u : u.querySelector(T);
            D &&
                qt(l, function (e) {
                    D.appendChild(e);
                });
        }
        if ((h.hasValue && (t.value = v), g)) {
            var C = function (e) {
                if (d.hasOwnProperty(e)) {
                    var t = g[e],
                        n = d[e];
                    qt(u.querySelectorAll(".mbsc-slot-" + t), function (e, t) {
                        var a = t > 0 ? n.cloneNode(!0) : n;
                        e.appendChild(a);
                    });
                }
            };
            for (var y in d) C(y);
        }
        return (
            (o.destroy = function () {
                var e = u.parentNode,
                    n = vt.createComment("");
                e.insertBefore(n, u),
                    Mn(null, u),
                    delete t.__mbscInst,
                    delete t.__mbscFormInst,
                    (u.innerHTML = ""),
                    u.setAttribute("class", f.className),
                    e.replaceChild(u, n),
                    h.hasChildren &&
                        qt(c, function (e) {
                            _.appendChild(e);
                        }),
                    h.renderToParent && t.setAttribute("class", p || "");
            }),
            i ? (t.__mbscInst || (t.__mbscInst = o), (t.__mbscFormInst = o)) : (t.__mbscInst = o),
            o
        );
    }
    function Vn(e) {
        Yn[e._name] = e;
    }
    function Fn(e, t) {
        if (e)
            for (var n in Yn)
                if (Yn.hasOwnProperty(n)) {
                    var a = Yn[n];
                    Pn(e, a._selector, a, a._renderOpt, t);
                }
    }
    var Rn = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._newProps = {}),
                    (t._setEl = function (e) {
                        t._el = e ? e._el || e : null;
                    }),
                    t
                );
            }
            return (
                a(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this.__value;
                    },
                    set: function (e) {
                        this.__value = e;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.componentDidMount = function () {
                    this.__init(), this._init(), this._mounted(), this._updated(), this._enhance();
                }),
                (t.prototype.componentDidUpdate = function () {
                    this._updated(), this._enhance();
                }),
                (t.prototype.componentWillUnmount = function () {
                    this._destroy(), this.__destroy();
                }),
                (t.prototype.render = function () {
                    return this._willUpdate(), this._template(this.s, this.state);
                }),
                (t.prototype.getInst = function () {
                    return this;
                }),
                (t.prototype.setOptions = function (e) {
                    for (var t in e) this.props[t] = e[t];
                    this.forceUpdate();
                }),
                (t.prototype._safeHtml = function (e) {
                    return { __html: e };
                }),
                (t.prototype._init = function () {}),
                (t.prototype.__init = function () {}),
                (t.prototype._emit = function (e, t) {}),
                (t.prototype._template = function (e, t) {}),
                (t.prototype._mounted = function () {}),
                (t.prototype._updated = function () {}),
                (t.prototype._destroy = function () {}),
                (t.prototype.__destroy = function () {}),
                (t.prototype._willUpdate = function () {}),
                (t.prototype._enhance = function () {
                    var e = this._shouldEnhance;
                    e && (Fn(!0 === e ? this._el : e), (this._shouldEnhance = !1));
                }),
                t
            );
        })(In),
        An = new Date(1970, 0, 1),
        Wn = 6e4,
        Un = 36e5,
        Bn = 864e5;
    function jn(e) {
        return !!e._mbsc;
    }
    function Kn(e, t) {
        var n = t.dataTimezone || t.displayTimezone,
            a = t.timezonePlugin;
        if (n && a && jn(e)) {
            var s = e.clone();
            return s.setTimezone(n), s.toISOString();
        }
        return e;
    }
    var Jn = {
            amText: "am",
            dateFormat: "MM/DD/YYYY",
            dateFormatLong: "D DDD MMM YYYY",
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            daySuffix: "",
            firstDay: 0,
            fromText: "Start",
            getDate: da,
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            monthSuffix: "",
            pmText: "pm",
            separator: " ",
            shortYearCutoff: "+10",
            timeFormat: "h:mm A",
            toText: "End",
            todayText: "Today",
            weekText: "Week {count}",
            yearSuffix: "",
            getMonth: function (e) {
                return e.getMonth();
            },
            getDay: function (e) {
                return e.getDate();
            },
            getYear: function (e) {
                return e.getFullYear();
            },
            getMaxDayOfMonth: function (e, t) {
                return 32 - new Date(e, t, 32, 12).getDate();
            },
            getWeekNumber: function (e) {
                var t = new Date(+e);
                t.setHours(0, 0, 0), t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                var n = new Date(t.getFullYear(), 0, 1);
                return Math.ceil(((t - n) / 864e5 + 1) / 7);
            },
        },
        Xn = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[T\s](\d{2}):?(\d{2})(?::?(\d{2})(?:\.(\d{3}))?)?((Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/,
        Gn = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
    function qn(e, t, n) {
        var a,
            s,
            i = { y: 1, m: 2, d: 3, h: 4, i: 5, s: 6, u: 7, tz: 8 };
        if (n) for (a in i) i.hasOwnProperty(a) && (s = e[i[a] - t]) && (n[a] = "tz" === a ? s : 1);
    }
    function Zn(e) {
        return +new Date(1970, 0, 1, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) - +An;
    }
    function $n(e, t, n, a, s) {
        var i = +e,
            r = +n;
        return i < (s && r === +a ? +a + 1 : +a) && (s && i === +t ? +t + 1 : +t) > r;
    }
    function Qn(e, t) {
        var n = pa(e, t);
        return n.setHours(0, 0, 0, 0), n;
    }
    function ea(e, t) {
        var n = pa(e, t);
        return n.setHours(23, 59, 59, 999), n;
    }
    function ta(e, t, n, a, s) {
        return ((!t && !s) || e.exclusiveEndDates) && n && a && n < a ? pa(t ? ie : e, +a - 1) : a;
    }
    function na(e) {
        return e.getFullYear() + "-" + xe(e.getMonth() + 1) + "-" + xe(e.getDate());
    }
    function aa(e, t) {
        return jn(e) && !t ? e.createDate(e.getFullYear(), e.getMonth(), e.getDate()) : da(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function sa(e) {
        return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function ia(e, t) {
        return Te((sa(t) - sa(e)) / Bn);
    }
    function ra(e, t, n, a) {
        for (var s = -1, i = aa(e); i <= aa(t); i.setDate(i.getDate() + 1)) Sa(i.getDay(), n, a) && s++;
        return s;
    }
    function oa(e, t, n) {
        var a = e.getFullYear(),
            s = e.getMonth(),
            i = e.getDay(),
            r = n === ie ? t.firstDay : n;
        return new Date(a, s, r - (r - i > 0 ? 7 : 0) - i + e.getDate());
    }
    function la(e, t) {
        return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
    }
    function ca(e, t, n) {
        return n.getYear(e) === n.getYear(t) && n.getMonth(e) === n.getMonth(t);
    }
    function da(e, t, n, a, s, i, r) {
        var o = new Date(e, t, n, a || 0, s || 0, i || 0, r || 0);
        return 23 === o.getHours() && 0 === (a || 0) && o.setHours(o.getHours() + 2), o;
    }
    function ha(e) {
        return e.getTime;
    }
    function ua(e) {
        return me(e) && Gn.test(e);
    }
    function ma(e, t) {
        return pa(e, t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds());
    }
    function _a(e) {
        return e ? new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()) : e;
    }
    function pa(e, t, n, a, s, i, r, o) {
        return null === t
            ? null
            : t && (ue(t) || me(t)) && pe(n)
            ? va(t, e)
            : e && e.timezonePlugin
            ? e.timezonePlugin.createDate(e, t, n, a, s, i, r, o)
            : ve(t)
            ? new Date(t)
            : pe(t)
            ? new Date()
            : new Date(t, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0);
    }
    function va(e, t, n, a, s) {
        var i;
        if ((me(e) && (e = e.trim()), !e)) return null;
        var r = t && t.timezonePlugin;
        if (r && !s) {
            var o = jn(e) ? e : r.parse(e, t);
            return o.setTimezone(t.displayTimezone), o;
        }
        return ha(e)
            ? e
            : e._isAMomentObject
            ? e.toDate()
            : ue(e)
            ? new Date(e)
            : (i = Gn.exec(e))
            ? (qn(i, 2, a), new Date(1970, 0, 1, i[2] ? +i[2] : 0, i[3] ? +i[3] : 0, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0))
            : (i = Xn.exec(e))
            ? (qn(i, 0, a), new Date(i[1] ? +i[1] : 1970, i[2] ? i[2] - 1 : 0, i[3] ? +i[3] : 1, i[4] ? +i[4] : 0, i[5] ? +i[5] : 0, i[6] ? +i[6] : 0, i[7] ? +i[7] : 0))
            : ba(n, e, t);
    }
    function fa(e, t, n, a, s) {
        var i = (m && window.moment) || t.moment,
            r = t.timezonePlugin && (t.dataTimezone || t.displayTimezone),
            o = r ? "iso8601" : t.returnFormat;
        if (r && s) return Kn(e, t);
        if (e) {
            if ("moment" === o && i) return i(e);
            if ("locale" === o) return ya(n, e, t);
            if ("iso8601" === o)
                return (function (e, t) {
                    var n = "",
                        a = "";
                    return (
                        e &&
                            (t.h && ((a += xe(e.getHours()) + ":" + xe(e.getMinutes())), t.s && (a += ":" + xe(e.getSeconds())), t.u && (a += "." + xe(e.getMilliseconds(), 3)), t.tz && (a += t.tz)),
                            t.y ? ((n += e.getFullYear()), t.m && ((n += "-" + xe(e.getMonth() + 1)), t.d && (n += "-" + xe(e.getDate())), t.h && (n += "T" + a))) : t.h && (n = a)),
                        n
                    );
                })(e, a);
        }
        return e;
    }
    function ga(e, t, n) {
        return ya(e, t, s({}, Jn, b.locale, n));
    }
    function ya(e, t, n) {
        var a,
            s,
            i = "",
            r = !1,
            o = function (t) {
                for (var n = 0, s = a; s + 1 < e.length && e.charAt(s + 1) === t; ) n++, s++;
                return n;
            },
            l = function (e) {
                var t = o(e);
                return (a += t), t;
            },
            c = function (e, t, n) {
                var a = "" + t;
                if (l(e)) for (; a.length < n; ) a = "0" + a;
                return a;
            },
            d = function (e, t, n, a) {
                return 3 === l(e) ? a[t] : n[t];
            };
        for (a = 0; a < e.length; a++)
            if (r) "'" !== e.charAt(a) || l("'") ? (i += e.charAt(a)) : (r = !1);
            else
                switch (e.charAt(a)) {
                    case "D":
                        i += o("D") > 1 ? d("D", t.getDay(), n.dayNamesShort, n.dayNames) : c("D", n.getDay(t), 2);
                        break;
                    case "M":
                        i += o("M") > 1 ? d("M", n.getMonth(t), n.monthNamesShort, n.monthNames) : c("M", n.getMonth(t) + 1, 2);
                        break;
                    case "Y":
                        (s = n.getYear(t)), (i += 3 === l("Y") ? s : (s % 100 < 10 ? "0" : "") + (s % 100));
                        break;
                    case "h":
                        var h = t.getHours();
                        i += c("h", h > 12 ? h - 12 : 0 === h ? 12 : h, 2);
                        break;
                    case "H":
                        i += c("H", t.getHours(), 2);
                        break;
                    case "m":
                        i += c("m", t.getMinutes(), 2);
                        break;
                    case "s":
                        i += c("s", t.getSeconds(), 2);
                        break;
                    case "a":
                        i += t.getHours() > 11 ? n.pmText : n.amText;
                        break;
                    case "A":
                        i += t.getHours() > 11 ? n.pmText.toUpperCase() : n.amText.toUpperCase();
                        break;
                    case "'":
                        l("'") ? (i += "'") : (r = !0);
                        break;
                    default:
                        i += e.charAt(a);
                }
        return i;
    }
    function ba(e, t, n) {
        var a = s({}, Jn, n),
            i = va(a.defaultValue || new Date());
        if (!t) return i;
        e || (e = a.dateFormat + a.separator + a.timeFormat);
        var r,
            o = a.shortYearCutoff,
            l = a.getYear(i),
            c = a.getMonth(i) + 1,
            d = a.getDay(i),
            h = i.getHours(),
            u = i.getMinutes(),
            m = 0,
            _ = -1,
            p = !1,
            v = 0,
            f = function (t) {
                for (var n = 0, a = r; a + 1 < e.length && e.charAt(a + 1) === t; ) n++, a++;
                return n;
            },
            g = function (e) {
                var t = f(e);
                return (r += t), t;
            },
            y = function (e) {
                var n = g(e),
                    a = new RegExp("^\\d{1," + (n >= 2 ? 4 : 2) + "}"),
                    s = t.substr(v).match(a);
                return s ? ((v += s[0].length), parseInt(s[0], 10)) : 0;
            },
            b = function (e, n, a) {
                for (var s = 3 === g(e) ? a : n, i = 0; i < s.length; i++) if (t.substr(v, s[i].length).toLowerCase() === s[i].toLowerCase()) return (v += s[i].length), i + 1;
                return 0;
            },
            x = function () {
                v++;
            };
        for (r = 0; r < e.length; r++)
            if (p) "'" !== e.charAt(r) || g("'") ? x() : (p = !1);
            else
                switch (e.charAt(r)) {
                    case "Y":
                        l = y("Y");
                        break;
                    case "M":
                        c = f("M") < 2 ? y("M") : b("M", a.monthNamesShort, a.monthNames);
                        break;
                    case "D":
                        f("D") < 2 ? (d = y("D")) : b("D", a.dayNamesShort, a.dayNames);
                        break;
                    case "H":
                        h = y("H");
                        break;
                    case "h":
                        h = y("h");
                        break;
                    case "m":
                        u = y("m");
                        break;
                    case "s":
                        m = y("s");
                        break;
                    case "a":
                        _ = b("a", [a.amText, a.pmText], [a.amText, a.pmText]) - 1;
                        break;
                    case "A":
                        _ = b("A", [a.amText, a.pmText], [a.amText, a.pmText]) - 1;
                        break;
                    case "'":
                        g("'") ? x() : (p = !0);
                        break;
                    default:
                        x();
                }
        if (l < 100) {
            var T = void 0;
            (T = l <= (me(o) ? (new Date().getFullYear() % 100) + parseInt(o, 10) : +o) ? 0 : -100), (l += new Date().getFullYear() - (new Date().getFullYear() % 100) + T);
        }
        h = -1 === _ ? h : _ && h < 12 ? h + 12 : _ || 12 !== h ? h : 0;
        var D = a.getDate(l, c - 1, d, h, u, m);
        return a.getYear(D) !== l || a.getMonth(D) + 1 !== c || a.getDay(D) !== d ? i : D;
    }
    function xa(e, t, n) {
        if (e === t) return !0;
        if ((de(e) && !e.length && null === t) || (de(t) && !t.length && null === e)) return !0;
        if (null === e || null === t || e === ie || t === ie) return !1;
        if (me(e) && me(t)) return e === t;
        var a = n && n.dateFormat;
        if (de(e) || de(t)) {
            if (e.length !== t.length) return !1;
            for (var s = 0; s < e.length; s++) {
                var i = e[s],
                    r = t[s];
                if (!(me(i) && me(r) ? i === r : +va(i, n, a) == +va(r, n, a))) return !1;
            }
            return !0;
        }
        return +va(e, n, a) == +va(t, n, a);
    }
    function Ta(e) {
        return jn(e) ? e.clone() : new Date(e);
    }
    function Da(e, t) {
        var n = Ta(e);
        return n.setDate(n.getDate() + t), n;
    }
    function Ca(e, t, n) {
        var a = n.getYear(e),
            s = n.getMonth(e) + t,
            i = n.getMaxDayOfMonth(a, s);
        return ma(n, n.getDate(a, s, Math.min(n.getDay(e), i), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    }
    function Sa(e, t, n) {
        return t > n ? e <= n || e >= t : e >= t && e <= n;
    }
    function wa(e, t) {
        var n = Wn * t,
            a = Ta(e).setHours(0, 0, 0, 0),
            s = a + Math.round((+e - +a) / n) * n;
        return jn(e) ? e.createDate(s) : new Date(s);
    }
    function ka(e, t, n) {
        return t && e < t ? new Date(t) : n && e > n ? new Date(n) : e;
    }
    m && "undefined" == typeof Symbol && (window.Symbol = { toPrimitive: "toPrimitive" }), (x.datetime = { formatDate: ga, parseDate: ba });
    var Ma,
        Ea,
        Na = ft,
        Ia = +new Date(),
        La = {},
        Ha = {};
    function Ya(e) {
        !e._logged &&
            "mbscdemo" !== t.apiKey &&
            vt &&
            ((e._logged = !0),
            (La.components = La.components || []),
            La.components.push(e.constructor._name.toLowerCase()),
            clearTimeout(Ea),
            (Ea = setTimeout(function () {
                if (!t.fwv) {
                    var n = void 0;
                    switch (t.fw) {
                        case "angular":
                            var a = vt.querySelector("[ng-version]");
                            n = a ? a.getAttribute("ng-version") : "N/A";
                            break;
                        case "jquery":
                            n = Na.$.fn && Na.$.fn.jquery;
                    }
                    t.fwv = n || "N/A";
                }
                (La.demo = !!Na.isMbscDemo),
                    (La.fw = t.fw),
                    (La.fwv = t.fwv),
                    (La.theme = e.s.theme),
                    (La.trialCode = t.apiKey),
                    (La.v = e._v.version),
                    Pa("log", null, La, function () {
                        La = {};
                    });
            }, 5e3)));
    }
    function Oa(e) {
        if (e && vt && !vt.getElementById("trial-message")) {
            var t = vt.createElement("div");
            t.setAttribute("id", "trial-message"), t.setAttribute("style", "position: absolute;width: 100%; bottom: 0;left: 0; padding: 10px;box-sizing: border-box;"), t.setAttribute("class", "mbsc-font");
            var n = vt.createElement("div");
            n.setAttribute("style", "padding: 15px 25px; max-width: 400px; margin: 0 auto 10px auto; border-radius: 16px; line-height: 25px; background: #cacaca59; font-size: 15px; color: #151515;"), (n.innerHTML = e.message + " ");
            var a = vt.createElement("a");
            (a.innerHTML = e.button.text),
                a.setAttribute("style", "color: #FF4080;font-weight: 600;"),
                a.setAttribute("href", "https://mobiscroll.com/pricing?ref=trialapp"),
                n.appendChild(a),
                t.appendChild(n),
                vt.body.appendChild(t),
                setTimeout(function () {
                    vt.body.removeChild(t);
                }, 6e3);
        }
    }
    function Pa(e, n, a, s, i, r) {
        if (ft && vt) {
            var o,
                l = vt.createElement("script"),
                c = "mbsc_jsonp_" + (i || ++Ia);
            c = ft[c] ? "mbsc_jsonp_" + ++Ia : c;
            var d = r || 1;
            (ft[c] = function (t, a) {
                clearTimeout(o),
                    l.parentNode.removeChild(l),
                    delete ft[c],
                    (t = t
                        ? JSON.parse(t, function (e, t) {
                              return "string" != typeof t ? t : "function_" === t.substring(0, 9) && n ? n[t.replace("function_", "")] : t.match(Xn) ? va(t) : t;
                          })
                        : {}),
                    "remote" === e && ((Ha.txt = t.__e), delete t.__e),
                    a || s(t);
            }),
                (o = setTimeout(h, 6e3)),
                (l.onerror = h),
                (l.src = t.apiUrl + t.apiKey + "/" + e + "?callback=" + c + "&data=" + encodeURIComponent(JSON.stringify(a))),
                vt.body.appendChild(l);
        } else s({});
        function h() {
            ft && ft[c] && ft[c](null, !0), "remote" === e && (d < 4 ? Pa(e, n, a, s, i, d + 1) : Ma || ((Ma = !0), za()));
        }
    }
    function za() {
        var e = vt.cookie.replace(/(?:(?:^|.*;\s*)ASP.NET_SessionId\s*=\s*([^;]*).*$)|^.*$/, "$1");
        vt.cookie = "mobiscrollClientError=1; expires=" + new Date(new Date().getTime() + 864e5).toUTCString() + "; path=/; SameSite=Strict";
        try {
            ft.name = (ft.name || "") + ";mobiscrollClientError";
        } catch (e) {}
        Pa("error", null, { sessionID: e, trialCode: t.apiKey }, function () {
            vt.cookie = "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            try {
                ft.name = (ft.name || "").replace(/;mobiscrollClientError/g, "");
            } catch (e) {}
        });
    }
    vt &&
        (vt.cookie.replace(/(?:(?:^|.*;\s*)mobiscrollClientError\s*=\s*([^;]*).*$)|^.*$/, "$1") || /mobiscrollClientError/.test(ft.name || "")) &&
        vt.addEventListener("DOMContentLoaded", function () {
            za();
        });
    var Va,
        Fa = new Function(
            "textParam,p",
            (function () {
                var e,
                    t = (function (e, t) {
                        var n,
                            a = (function (e) {
                                var t,
                                    n = e[0];
                                for (t = 0; t < 16; ++t) if ((n * t) % 16 == 1) return [t, e[1]];
                            })(t),
                            s = (function (e, t, n, a) {
                                var s,
                                    i = "0123456789abcdef",
                                    r = "",
                                    o = t.length;
                                for (s = 0; s < o; ++s) r += e ? i[(n * i.indexOf(t[s]) + a) % 16] : i[(((n * i.indexOf(t[s]) - n * a) % 16) + 16) % 16];
                                return r;
                            })(0, e, a[0], a[1]),
                            i = s.length,
                            r = [];
                        for (n = 0; n < i; n += 2) r.push(s[n] + s[n + 1]);
                        return r;
                    })(
                        "3e30313f3ec53a3e52c930c9cd043cc9c67d797f30c53e3530c40aedc93eca0430c9c4cecbcd0a0176edc93eca04cdc93a0a7204727c0632010c0c093ec53a3e52c930c9cd043e3a3e7b0376cec13c02373e31c6c57d00030fcc35c4c73ec1cbc40ac5013f3cc930023e7dc504c6c5c4c33eca06c406307f33cac1c6c50a72097d7d3e013f307dedc93eca04ccc6cbcb300aedc93eca0430c9c4cecbcd0a01083e017f3e0d7d797fc47dc55f3e5d7fc55f3e5d7dc55f305d7fc55f305d7dc43d30c53e3530c402c53d0a5f0332cbc1c43ec5300dc53cc5c43e3778c4cbc4c5030603cec13732c6c93178c0c6cbc7cf09c1cd32cb303ec9c43e03060332cb37c13ec1cbc478c9c037cbc6353ec509c1cd32cb303ec9c43e0306033ecb32787209c1cd32cb303ec9c43e030603c6c5cc3e787209c1cd32cb303ec9c43e030603c0cb3e3ecbcd787209c1cd32cb303ec9c43e03060330c1c3ca3e787209c1cd32cb303ec9c43e030603cdc930c3c1c4787209c1cd32cb303ec9c43e03060332c9cecec1c4c3787209c1cd32cb303ec9c43e030603cccbc43e0d37c138c5787a323a09c1cd32cb303ec9c43e030603c6c1c4c50dcac5c1c3ca3e787970323a0306033ec53a3e0dc9c6c1c3c478c7c5c43ec530030603cb32c9c7c13e3178030f0aedc93eca04ccc6cbcb300aedc93eca0430c9c4cecbcd0a01087072010b7972720f72047a010f0309c1cd32cb303ec9c43e035d0104c8cbc1c40a037f03010f03007456357272757e563572727570563572727e71563572727e79563572727ec7760bcec13c7403780303013dc7c93ec7ca0ac5013f30c53e3530c40203033d8",
                        [7, 2]
                    ),
                    n = "",
                    a = t.length;
                for (e = 0; e < a; e++) n += String.fromCharCode(parseInt(t[e], 16));
                return n;
            })()
        ),
        Ra = "5.21.2",
        Aa = 0,
        Wa = { large: 992, medium: 768, small: 576, xlarge: 1200, xsmall: 0 };
    _ &&
        ((Va = _.matches),
        _.addListener(function (e) {
            (Va = e.matches), C.next();
        }));
    var Ua = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t.s = {}), (t.state = {}), (t._mbsc = !0), (t._v = { version: "5.21.2" }), (t._uid = ++Aa), (t._textParamMulti = {}), (t.__getText = Fa), t;
            }
            return (
                a(t, e),
                Object.defineProperty(t.prototype, "nativeElement", {
                    get: function () {
                        return this._el;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "__getTextParam", {
                    get: function () {
                        return Ha.val;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                Object.defineProperty(t.prototype, "textParam", {
                    get: function () {
                        return void 0 === this._textParam && (this._textParam = this.__getText(Ha, 0.15)), this._safeHtml(this._textParam);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.textParamMulti = function (e) {
                    return void 0 === this._textParamMulti[e] && (this._textParamMulti[e] = this.__getText(Ha, 0.15)), this._safeHtml(this._textParamMulti[e]);
                }),
                (t.prototype.destroy = function () {}),
                (t.prototype._hook = function (e, t) {
                    var n = this.s;
                    if (((t.inst = this), (t.type = e), this._emit(e, t), n[e])) return n[e](t, this);
                }),
                (t.prototype.__init = function () {
                    var e = this;
                    if (this.constructor.defaults) {
                        this._optChange = C.subscribe(function () {
                            e.forceUpdate();
                        });
                        var t = this.props.modules;
                        if (t)
                            for (var n = 0, a = t; n < a.length; n++) {
                                var s = a[n];
                                s.init && s.init(this);
                            }
                    }
                    this._hook("onInit", {});
                }),
                (t.prototype.__destroy = function () {
                    this._optChange !== ie && C.unsubscribe(this._optChange), this._hook("onDestroy", {});
                }),
                (t.prototype._render = function (e, t) {}),
                (t.prototype._willUpdate = function () {
                    this._merge(), this._render(this.s, this.state);
                }),
                (t.prototype._resp = function (e) {
                    var t,
                        n = e.responsive,
                        a = -1,
                        s = this.state.width;
                    if ((s === ie && (s = 375), n && s))
                        for (var i in n)
                            if (n.hasOwnProperty(i)) {
                                var r = n[i],
                                    o = r.breakpoint || Wa[i];
                                s >= o && o > a && ((t = r), (a = o));
                            }
                    return t;
                }),
                (t.prototype._merge = function () {
                    var e,
                        t,
                        n,
                        a = this.constructor,
                        i = a.defaults,
                        o = this._opt || {},
                        l = {};
                    if (((this._prevS = this.s || {}), i)) {
                        for (var c in this.props) this.props[c] !== ie && (l[c] = this.props[c]);
                        var d = l.locale || o.locale || b.locale || {},
                            h = l.calendarSystem || d.calendarSystem || o.calendarSystem || b.calendarSystem,
                            m = l.theme || o.theme || b.theme,
                            _ = l.themeVariant || o.themeVariant || b.themeVariant;
                        ("auto" !== m && m) || (m = D.theme), ("dark" !== _ && (!Va || ("auto" !== _ && _))) || !T[m + "-dark"] || (m += "-dark"), (l.theme = m);
                        var p = (n = T[m]) && T[m][a._name];
                        t = s({}, i, p, d, b, o, h, l);
                        var v = this._resp(t);
                        (this._respProps = v), v && (t = s({}, t, v));
                    } else (t = s({}, this.props)), (n = T[t.theme]);
                    (e = n && n.baseTheme),
                        (t.baseTheme = e),
                        (this.s = t),
                        (this._className = t.cssClass || t.class || t.className || ""),
                        (this._rtl = " mbsc-" + (t.rtl ? "rtl" : "ltr")),
                        (this._theme = " mbsc-" + t.theme + (e ? " mbsc-" + e : "")),
                        (this._touchUi = "auto" === t.touchUi || t.touchUi === ie ? u : t.touchUi),
                        (this._hb = "ios" !== r || ("ios" !== t.theme && "ios" !== e) ? "" : " mbsc-hb");
                }),
                (t.defaults = ie),
                (t._name = ""),
                t
            );
        })(Rn),
        Ba = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._render = function (e) {
                    (this._hasChildren = !me(e.name)),
                        (this._cssClass = this._className + " mbsc-icon" + this._theme + (e.name && !this._hasChildren ? (-1 !== e.name.indexOf(" ") ? " " + e.name : " mbsc-font-icon mbsc-icon-" + e.name) : "")),
                        (this._svg = e.svg ? this._safeHtml(e.svg) : ie);
                }),
                t
            );
        })(Ua);
    var ja,
        Ka,
        Ja = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return Hn("span", { onClick: e.onClick, className: t._cssClass, dangerouslySetInnerHTML: t._svg, "v-html": ie }, t._hasChildren && e.name);
                    })(e, this);
                }),
                t
            );
        })(Ba),
        Xa = "animationstart",
        Ga = "blur",
        qa = "change",
        Za = "click",
        $a = "contextmenu",
        Qa = "dblclick",
        es = "focus",
        ts = "focusin",
        ns = "input",
        as = "keydown",
        ss = "mousedown",
        is = "mousemove",
        rs = "mouseup",
        os = "mouseenter",
        ls = "mouseleave",
        cs = "mousewheel",
        ds = "resize",
        hs = "scroll",
        us = "touchstart",
        ms = "touchmove",
        _s = "touchend",
        ps = "touchcancel",
        vs = "wheel",
        fs = 0;
    function gs(e, t, n) {
        var a = (n ? "page" : "client") + t;
        return e.targetTouches && e.targetTouches[0] ? e.targetTouches[0][a] : e.changedTouches && e.changedTouches[0] ? e.changedTouches[0][a] : e[a];
    }
    function ys(e, t) {
        if (!t.mbscClick) {
            var n = (e.originalEvent || e).changedTouches[0],
                a = document.createEvent("MouseEvents");
            a.initMouseEvent("click", !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                (a.isMbscTap = !0),
                (a.isIonicTap = !0),
                (ja = !0),
                (t.mbscChange = !0),
                (t.mbscClick = !0),
                t.dispatchEvent(a),
                (ja = !1),
                fs++,
                setTimeout(function () {
                    fs--;
                }, 500),
                setTimeout(function () {
                    delete t.mbscClick;
                });
        }
    }
    function bs(e) {
        !fs || ja || e.isMbscTap || ("TEXTAREA" === e.target.nodeName && e.type === ss) || (e.stopPropagation(), e.preventDefault());
    }
    function xs(e) {
        At(e.target).__mbscFocusVisible = !1;
    }
    function Ts(e) {
        At(e.target).__mbscFocusVisible = !0;
    }
    function Ds(e) {
        zt(e.target).__mbscMoveObs.next(e);
    }
    function Cs(e) {
        e &&
            setTimeout(function () {
                (e.style.opacity = "0"),
                    (e.style.transition = "opacity linear .4s"),
                    setTimeout(function () {
                        e && e.parentNode && e.parentNode.removeChild(e);
                    }, 400);
            }, 200);
    }
    function Ss(e, t) {
        var n,
            a,
            s,
            i,
            r,
            o,
            l,
            c,
            h,
            u,
            m,
            _,
            p,
            v,
            f,
            g,
            y = {},
            b = At(e),
            x = zt(e);
        function T(e) {
            if (e.type === us) Ka = !0;
            else if (Ka) return e.type === ss && (Ka = !1), !0;
            return !1;
        }
        function D() {
            l &&
                (Cs(i),
                (i = (function (e, t, n) {
                    var a = e.getBoundingClientRect(),
                        s = t - a.left,
                        i = n - a.top,
                        r = Math.max(s, e.offsetWidth - s),
                        o = Math.max(i, e.offsetHeight - i),
                        l = 2 * Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2)),
                        c = vt.createElement("span");
                    c.classList.add("mbsc-ripple");
                    var d = c.style;
                    return (
                        (d.backgroundColor = getComputedStyle(e).color),
                        (d.width = l + "px"),
                        (d.height = l + "px"),
                        (d.top = n - a.top - l / 2 + "px"),
                        (d.left = t - a.left - l / 2 + "px"),
                        e.appendChild(c),
                        setTimeout(function () {
                            (d.opacity = ".2"), (d.transform = "scale(1)"), (d.transition = "opacity linear .1s, transform cubic-bezier(0, 0, 0.2, 1) .4s");
                        }, 30),
                        c
                    );
                })(e, _, p))),
                t.onPress(),
                (n = !0);
        }
        function C(e, i) {
            (a = !1),
                Cs(e),
                clearTimeout(s),
                (s = setTimeout(function () {
                    n && (t.onRelease(), (n = !1));
                }, i));
        }
        function S(e) {
            if (!T(e) && (e.type !== ss || (0 === e.button && !e.ctrlKey))) {
                if (
                    ((u = gs(e, "X")),
                    (m = gs(e, "Y")),
                    (_ = u),
                    (p = m),
                    (n = !1),
                    (a = !1),
                    (c = !1),
                    (g = !0),
                    (y.moved = c),
                    (y.startX = u),
                    (y.startY = m),
                    (y.endX = _),
                    (y.endY = p),
                    (y.deltaX = 0),
                    (y.deltaY = 0),
                    (y.domEvent = e),
                    (y.isTouch = Ka),
                    Cs(i),
                    t.onStart)
                ) {
                    var r = t.onStart(y);
                    l = r && r.ripple;
                }
                t.onPress && ((a = !0), clearTimeout(s), (s = setTimeout(D, 50))), e.type === ss && (Ot(x, is, w), Ot(x, rs, k)), Ot(x, $a, O);
            }
        }
        function w(e) {
            g &&
                ((_ = gs(e, "X")),
                (p = gs(e, "Y")),
                (v = _ - u),
                (f = p - m),
                !c && (Math.abs(v) > 9 || Math.abs(f) > 9) && ((c = !0), C(i)),
                (y.moved = c),
                (y.endX = _),
                (y.endY = p),
                (y.deltaX = v),
                (y.deltaY = f),
                (y.domEvent = e),
                (y.isTouch = e.type === ms),
                t.onMove && t.onMove(y));
        }
        function k(e) {
            g &&
                (a && !n && (clearTimeout(s), D()),
                (y.domEvent = e),
                (y.isTouch = e.type === _s),
                t.onEnd && t.onEnd(y),
                C(i, 75),
                (g = !1),
                e.type === _s && t.click && Nt && !c && ys(e, e.target),
                e.type === rs && (Pt(x, is, w), Pt(x, rs, k)),
                Pt(x, $a, O));
        }
        function M(e) {
            T(e) || ((o = !0), t.onHoverIn(e));
        }
        function E(e) {
            o && t.onHoverOut(e), (o = !1);
        }
        function N(e) {
            t.onKeyDown(e);
        }
        function I(e) {
            (t.keepFocus || b.__mbscFocusVisible) && ((r = !0), t.onFocus(e));
        }
        function L(e) {
            r && t.onBlur(e), (r = !1);
        }
        function H(e) {
            t.onChange(e);
        }
        function Y(e) {
            (y.domEvent = e), Ka || t.onDoubleClick(y);
        }
        function O(e) {
            Ka && e.preventDefault();
        }
        if ((Ot(e, us, S, { passive: !0 }), Ot(e, ss, S), Ot(e, _s, k), Ot(e, ps, k), x)) {
            var P = x.__mbscMoveCount || 0,
                z = x.__mbscMoveObs || new d();
            0 === P && Ot(x, ms, Ds, { passive: !1 }), (x.__mbscMoveObs = z), (x.__mbscMoveCount = ++P), (h = z.subscribe(w));
        }
        if ((t.onChange && Ot(e, qa, H), t.onHoverIn && Ot(e, os, M), t.onHoverOut && Ot(e, ls, E), t.onKeyDown && Ot(e, as, N), t.onFocus && b && (Ot(e, es, I), !t.keepFocus))) {
            var V = b.__mbscFocusCount || 0;
            0 === V && (Ot(b, ss, xs, !0), Ot(b, as, Ts, !0)), (b.__mbscFocusCount = ++V);
        }
        return (
            t.onBlur && Ot(e, Ga, L),
            t.onDoubleClick && Ot(e, Qa, Y),
            function () {
                if ((clearTimeout(s), t.onFocus && b && !t.keepFocus)) {
                    var n = b.__mbscFocusCount || 0;
                    (b.__mbscFocusCount = --n), n <= 0 && (Pt(b, ss, xs), Pt(b, as, Ts));
                }
                if (x) {
                    var a = x.__mbscMoveCount || 0;
                    (x.__mbscMoveCount = --a), x.__mbscMoveObs && x.__mbscMoveObs.unsubscribe(h), a <= 0 && (delete x.__mbscMoveCount, delete x.__mbscMoveObs, Pt(x, ms, Ds, { passive: !1 }));
                }
                Pt(e, ss, S, { passive: !0 }), Pt(e, _s, k), Pt(e, ps, k), Pt(x, is, w), Pt(x, rs, k), Pt(x, $a, O), Pt(e, qa, H), Pt(e, os, M), Pt(e, ls, E), Pt(e, as, N), Pt(e, us, S), Pt(e, es, I), Pt(e, Ga, L), Pt(e, Qa, Y);
            }
        );
    }
    m &&
        (["mousedown", os, ss, rs, Za].forEach(function (e) {
            vt.addEventListener(e, bs, !0);
        }),
        "android" === r &&
            l < 5 &&
            vt.addEventListener(
                qa,
                function (e) {
                    var t = e.target;
                    fs && "checkbox" === t.type && !t.mbscChange && (e.stopPropagation(), e.preventDefault()), delete t.mbscChange;
                },
                !0
            ));
    var ws = 13,
        ks = 32,
        Ms = 33,
        Es = 34,
        Ns = 35,
        Is = 36,
        Ls = 37,
        Hs = 38,
        Ys = 39,
        Os = 40,
        Ps = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ss(this._el, {
                        click: !0,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function () {
                            e.s.disabled || e.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            e.setState({ hasHover: !1 });
                        },
                        onKeyDown: function (t) {
                            switch (t.keyCode) {
                                case ws:
                                case ks:
                                    e._el.click(), t.preventDefault();
                            }
                        },
                        onPress: function () {
                            e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.setState({ isActive: !1 });
                        },
                        onStart: function () {
                            return { ripple: e.s.ripple && !e.s.disabled };
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    var n = this,
                        a = e.disabled;
                    (this._isIconOnly = !(!e.icon && !e.iconSvg)),
                        (this._hasStartIcon = !(!e.startIcon && !e.startIconSvg)),
                        (this._hasEndIcon = !(!e.endIcon && !e.endIconSvg)),
                        (this._tabIndex = a ? ie : e.tabIndex || 0),
                        (this._cssClass =
                            this._className +
                            " mbsc-reset mbsc-font mbsc-button" +
                            this._theme +
                            this._rtl +
                            " mbsc-button-" +
                            e.variant +
                            (this._isIconOnly ? " mbsc-icon-button" : "") +
                            (a ? " mbsc-disabled" : "") +
                            (e.color ? " mbsc-button-" + e.color : "") +
                            (t.hasFocus && !a ? " mbsc-focus" : "") +
                            (t.isActive && !a ? " mbsc-active" : "") +
                            (t.hasHover && !a ? " mbsc-hover" : "")),
                        (this._iconClass = "mbsc-button-icon" + this._rtl),
                        (this._startIconClass = this._iconClass + " mbsc-button-icon-start"),
                        (this._endIconClass = this._iconClass + " mbsc-button-icon-end"),
                        e.disabled &&
                            t.hasHover &&
                            setTimeout(function () {
                                n.setState({ hasHover: !1 });
                            });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten();
                }),
                (t.defaults = { ripple: !1, role: "button", tag: "button", variant: "standard" }),
                (t._name = "Button"),
                t
            );
        })(Ua);
    var zs = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a = t.props,
                            r = a.ariaLabel;
                        a.children, a.className, a.color;
                        var o = a.endIcon;
                        a.endIconSrc;
                        var l = a.endIconSvg;
                        a.hasChildren;
                        var c = a.icon;
                        a.iconSrc;
                        var d = a.iconSvg;
                        a.ripple, a.rtl;
                        var h = a.role,
                            u = a.startIcon;
                        a.startIconSrc;
                        var m = a.startIconSvg;
                        a.tag, a.tabIndex, a.theme, a.themeVariant, a.variant;
                        var _ = i(a, [
                                "ariaLabel",
                                "children",
                                "className",
                                "color",
                                "endIcon",
                                "endIconSrc",
                                "endIconSvg",
                                "hasChildren",
                                "icon",
                                "iconSrc",
                                "iconSvg",
                                "ripple",
                                "rtl",
                                "role",
                                "startIcon",
                                "startIconSrc",
                                "startIconSvg",
                                "tag",
                                "tabIndex",
                                "theme",
                                "themeVariant",
                                "variant",
                            ]),
                            p = s({ "aria-label": r, className: t._cssClass, ref: t._setEl }, _),
                            v = Hn(
                                rn,
                                null,
                                t._isIconOnly && Hn(Ja, { className: t._iconClass, name: c, svg: d, theme: e.theme }),
                                t._hasStartIcon && Hn(Ja, { className: t._startIconClass, name: u, svg: m, theme: e.theme }),
                                n,
                                t._hasEndIcon && Hn(Ja, { className: t._endIconClass, name: o, svg: l, theme: e.theme })
                            );
                        return "span" === e.tag
                            ? Hn("span", s({ role: h, "aria-disabled": e.disabled, tabIndex: t._tabIndex }, p), v)
                            : "a" === e.tag
                            ? Hn("a", s({ "aria-disabled": e.disabled, tabIndex: t._tabIndex }, p), v)
                            : Hn("button", s({ role: h, tabIndex: t._tabIndex }, p), v);
                    })(e, this, e.children);
                }),
                t
            );
        })(Ps),
        Vs = {
            before: function (e, t) {
                t.tag = e.nodeName.toLowerCase();
            },
            hasChildren: !0,
            parentClass: "mbsc-button",
            readProps: ["disabled"],
            slots: { endIcon: "end-icon", icon: "icon", startIcon: "start-icon" },
        },
        Fs = 1,
        Rs = "month",
        As = "year",
        Ws = "multi-year",
        Us = 296,
        Bs = s({}, Jn, { dateText: "Date", eventText: "event", eventsText: "events", moreEventsText: "{count} more", nextPageText: "Next page", prevPageText: "Previous page", showEventTooltip: !0, showToday: !0, timeText: "Time" });
    function js(e, t) {
        var n = t.refDate ? va(t.refDate) : An,
            a = t.showCalendar ? t.calendarType : t.eventRange,
            s = (t.showCalendar ? ("year" === a ? 1 : "week" === a ? t.weeks : t.size) : t.eventRangeSize) || 1,
            i = t.getDate,
            r = "week" === a ? oa(n, t) : n,
            o = t.getYear(r),
            l = t.getMonth(r),
            c = t.getDay(r);
        switch (a) {
            case "year":
                return i(o + e * s, 0, 1);
            case "week":
                return i(o, l, c + 7 * s * e);
            case "day":
                return i(o, l, c + s * e);
            default:
                return i(o, l + e * s, 1);
        }
    }
    function Ks(e, t) {
        var n,
            a = t.refDate ? va(t.refDate) : An,
            s = t.getYear,
            i = t.getMonth,
            r = t.showCalendar ? t.calendarType : t.eventRange,
            o = (t.showCalendar ? ("year" === r ? 1 : "week" === r ? t.weeks : t.size) : t.eventRangeSize) || 1;
        switch (r) {
            case "year":
                n = s(e) - s(a);
                break;
            case "week":
                n = ia(oa(a, t), oa(e, t)) / 7;
                break;
            case "day":
                n = ia(a, e);
                break;
            case "month":
                n = i(e) - i(a) + 12 * (s(e) - s(a));
                break;
            default:
                return;
        }
        return Ce(n / o);
    }
    function Js(e, t) {
        var n = t.refDate ? va(t.refDate) : An;
        return Ce((t.getYear(e) - t.getYear(n)) / 12);
    }
    function Xs(e, t) {
        var n = t.refDate ? va(t.refDate) : An;
        return t.getYear(e) - t.getYear(n);
    }
    function Gs(e, t) {
        var n = va(e.start || e.date),
            a = va(t.start || e.date),
            s = e.title || e.text,
            i = t.title || t.text,
            r = n ? +n * (e.allDay ? 1 : 10) : 0,
            o = a ? +a * (t.allDay ? 1 : 10) : 0;
        return r === o ? (s > i ? 1 : -1) : r - o;
    }
    function qs(e, t) {
        return "auto" === e ? Math.max(1, Math.min(3, Math.floor(t ? t / Us : 1))) : e ? +e : 1;
    }
    function Zs(e, t, n, a, s, i, r, o, l, c, d, h, u, m) {
        t = t || {};
        for (var _ = {}, p = {}, v = n, f = 0, g = s, y = a; v < a; ) {
            var b = na(v),
                x = v.getDay(),
                T = e.getDay(v),
                D = d && e.getDate(e.getYear(v), e.getMonth(v) + 1, 0),
                C = (l && (x === o || (1 === T && d))) || +v == +n,
                S = oa(v, e),
                w = $s(t[b] || [], c),
                k = void 0,
                M = void 0,
                E = 0,
                N = 0,
                I = 0;
            C && ((p = {}), (y = l ? Da(S, i) : a)),
                r &&
                    (w = w.filter(function (e) {
                        return e.allDay;
                    })),
                -1 === s && (g = w.length + 1);
            var L = w.length,
                H = [];
            for (h && (H.push({ id: "count_" + +v, count: L, placeholder: 0 === L }), (E = g)); L && E < g; ) {
                k = null;
                for (var Y = 0; Y < w.length; Y++) p[E] === w[Y] && ((k = w[Y]), (M = Y));
                if (E === g - 1 && (N < L - 1 || (I === L && !k)) && -1 !== s) {
                    var O = L - N,
                        P = u || "",
                        z = ((O > 1 && m) || P).replace(/{count}/, O);
                    if ((O && H.push({ id: "more_" + ++f, more: z, label: z }), k)) {
                        p[E] = null;
                        for (var V = 0, F = k._days; V < F.length; V++) {
                            var R = F[V],
                                A = P.replace(/{count}/, "1");
                            _[na(R)].data[E] = { id: "more_" + ++f, more: A, label: A };
                        }
                    }
                    N++, E++;
                } else if (k) M === I && I++, la(v, va(k.end, k.allDay ? ie : e)) && (p[E] = null), H.push({ id: k.occurrenceId || k.id, event: k }), E++, N++, k._days.push(v);
                else if (I < L) {
                    var W = w[I],
                        U = W.allDay,
                        B = W.start && va(W.start, U ? ie : e);
                    if (!B || la(v, B) || C) {
                        var j = ta(e, U, B, W.end && va(W.end, U ? ie : e), !0),
                            K = j && !la(B, j),
                            J = D && D < j ? D : j,
                            X = B ? ", " + e.fromText + ": " + ya("DDDD, MMMM D, YYYY", B, e) : "",
                            G = j ? ", " + e.toText + ": " + ya("DDDD, MMMM D, YYYY", j, e) : "";
                        W.id === ie && (W.id = "mbsc_" + Fs++),
                            K && (p[E] = W),
                            (W._days = [v]),
                            H.push({ event: W, id: W.occurrenceId || W.id, label: (W.title || W.text || "") + X + G, lastDay: D ? Da(D, 1) : ie, multiDay: K, showText: !0, width: K ? 100 * Math.min(ia(v, J) + 1, ia(v, y)) : 100 }),
                            E++,
                            N++;
                    }
                    I++;
                } else N < L && H.push({ id: "ph_" + ++f, placeholder: !0 }), E++;
            }
            (_[b] = { data: H, events: w }), (v = aa(Da(v, 1)));
        }
        return _;
    }
    function $s(e, t) {
        return e && e.slice(0).sort(t || Gs);
    }
    var Qs = Nn({}),
        ei = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype.componentWillUnmount = function () {
                    this._changes && this._changes.unsubscribe(this._handler);
                }),
                (t.prototype.render = function () {
                    var e = this,
                        t = this.props,
                        n = t.host,
                        a = t.component,
                        r = t.view,
                        o = i(t, ["host", "component", "view"]),
                        l = r || (n && n._calendarView);
                    return (
                        l &&
                            !this._changes &&
                            ((this._changes = l.s.instanceService.onComponentChange),
                            (this._handler = this._changes.subscribe(function () {
                                e.forceUpdate();
                            }))),
                        Hn(Qs.Consumer, null, function (e) {
                            var t = e.instance || r || (n && n._calendarView);
                            return t && Hn(a, s({ inst: t }, o));
                        })
                    );
                }),
                t
            );
        })(In),
        ti = function (e) {
            var t = e.inst,
                n = e.className;
            return Hn(zs, {
                ariaLabel: t.s.prevPageText,
                className: "mbsc-calendar-button " + (n || ""),
                disabled: t._isPrevDisabled(),
                iconSvg: t._prevIcon,
                onClick: t.prevPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat",
            });
        },
        ni = function (e) {
            var t = e.inst,
                n = e.className;
            return Hn(zs, {
                ariaLabel: t.s.nextPageText,
                disabled: t._isNextDisabled(),
                className: "mbsc-calendar-button " + (n || ""),
                iconSvg: t._nextIcon,
                onClick: t.nextPage,
                theme: t.s.theme,
                themeVariant: t.s.themeVariant,
                type: "button",
                variant: "flat",
            });
        },
        ai = function (e) {
            var t = e.inst,
                n = e.className;
            return Hn(zs, { className: "mbsc-calendar-button mbsc-calendar-button-today " + (n || ""), onClick: t._onTodayClick, theme: t.s.theme, themeVariant: t.s.themeVariant, type: "button", variant: "flat" }, t.s.todayText);
        },
        si = function (e) {
            var t = e.inst,
                n = e.className,
                a = t.s,
                s = t._theme,
                i = t._view;
            return Hn(
                "div",
                { "aria-live": "polite", className: (n || "") + s },
                t._title.map(function (e, n) {
                    return (
                        (1 === t._pageNr || 0 === n || t._hasPicker || i === Rs) &&
                        Hn(
                            zs,
                            { className: "mbsc-calendar-button", "data-index": n, onClick: t._onPickerBtnClick, key: n, theme: a.theme, themeVariant: a.themeVariant, type: "button", variant: "flat" },
                            (t._hasPicker || i === Rs) &&
                                (e.title
                                    ? Hn("span", { className: "mbsc-calendar-title" + s }, e.title)
                                    : Hn(
                                          rn,
                                          null,
                                          t._yearFirst && Hn("span", { className: "mbsc-calendar-title mbsc-calendar-year" + s }, e.yearTitle),
                                          Hn("span", { className: "mbsc-calendar-title mbsc-calendar-month" + s }, e.monthTitle),
                                          !t._yearFirst && Hn("span", { className: "mbsc-calendar-title mbsc-calendar-year" + s }, e.yearTitle)
                                      )),
                            !t._hasPicker && i !== Rs && Hn("span", { className: "mbsc-calendar-title" + s }, t._viewTitle),
                            a.downIcon && 1 === t._pageNr ? Hn(Ja, { svg: i === Rs ? a.downIcon : a.upIcon, theme: a.theme }) : null
                        )
                    );
                })
            );
        },
        ii = function (e) {
            var t = e.calendar,
                n = e.view,
                a = i(e, ["calendar", "view"]);
            return Hn(ei, s({ component: ti, host: t, view: n }, a));
        };
    ii._name = "CalendarPrev";
    var ri = function (e) {
        var t = e.calendar,
            n = e.view,
            a = i(e, ["calendar", "view"]);
        return Hn(ei, s({ component: ni, host: t, view: n }, a));
    };
    ri._name = "CalendarNext";
    var oi = function (e) {
        var t = e.calendar,
            n = e.view,
            a = i(e, ["calendar", "view"]);
        return Hn(ei, s({ component: ai, host: t, view: n }, a));
    };
    oi._name = "CalendarToday";
    var li = function (e) {
        var t = e.calendar,
            n = e.view,
            a = i(e, ["calendar", "view"]);
        return Hn(ei, s({ component: si, host: t, view: n }, a));
    };
    function ci(e) {
        return (
            (this.getChildContext = function () {
                return e.context;
            }),
            e.children
        );
    }
    function di(e) {
        var t = this,
            n = e._container;
        (t.componentWillUnmount = function () {
            Mn(null, t._temp), (t._temp = null), (t._container = null);
        }),
            t._container && t._container !== n && t.componentWillUnmount(),
            e._vnode
                ? (t._temp ||
                      ((t._container = n),
                      (t._temp = {
                          nodeType: 1,
                          parentNode: n,
                          childNodes: [],
                          appendChild: function (e) {
                              this.childNodes.push(e), t._container.appendChild(e);
                          },
                          insertBefore: function (e, n) {
                              this.childNodes.push(e), t._container.appendChild(e);
                          },
                          removeChild: function (e) {
                              this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t._container.removeChild(e);
                          },
                      })),
                  Mn(an(ci, { context: t.context }, e._vnode), t._temp))
                : t._temp && t.componentWillUnmount();
    }
    function hi(e, t) {
        return an(di, { _vnode: e, _container: t });
    }
    li._name = "CalendarNav";
    var ui,
        mi,
        _i = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype.render = function () {
                    var e = this.props.context;
                    return e ? hi(this.props.children, e) : null;
                }),
                t
            );
        })(on),
        pi = 0;
    function vi(e, t, n) {
        var a,
            s,
            i,
            r,
            o,
            l,
            c,
            d = 0;
        function h() {
            (s.style.width = "100000px"), (s.style.height = "100000px"), (a.scrollLeft = 1e5), (a.scrollTop = 1e5), (l.scrollLeft = 1e5), (l.scrollTop = 1e5);
        }
        function u() {
            var e = +new Date();
            (r = 0), c || (e - d > 200 && !a.scrollTop && !a.scrollLeft && ((d = e), h()), r || (r = St(u)));
        }
        function m() {
            o || (o = St(_));
        }
        function _() {
            (o = 0), h(), t();
        }
        return (
            ft && ft.ResizeObserver
                ? (ui ||
                      (ui = new ft.ResizeObserver(function (e) {
                          o ||
                              (o = St(function () {
                                  for (var t = 0, n = e; t < n.length; t++) {
                                      var a = n[t];
                                      a.target.__mbscResize && a.target.__mbscResize();
                                  }
                                  o = 0;
                              }));
                      })),
                  pi++,
                  (e.__mbscResize = function () {
                      n ? n.run(t) : t();
                  }),
                  ui.observe(e))
                : (i = vt && vt.createElement("div")),
            i &&
                ((i.innerHTML = '<div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-x"></div></div><div class="mbsc-resize"><div class="mbsc-resize-i mbsc-resize-y"></div></div>'),
                (i.dir = "ltr"),
                (l = i.childNodes[1]),
                (a = i.childNodes[0]),
                (s = a.childNodes[0]),
                e.appendChild(i),
                Ot(a, "scroll", m),
                Ot(l, "scroll", m),
                n
                    ? n.runOutsideAngular(function () {
                          St(u);
                      })
                    : St(u)),
            {
                detach: function () {
                    ui ? (pi--, delete e.__mbscResize, ui.unobserve(e), pi || (ui = ie)) : (i && (Pt(a, "scroll", m), Pt(l, "scroll", m), e.removeChild(i), wt(o), (i = ie)), (c = !0));
                },
            }
        );
    }
    var fi = "input,select,textarea,button",
        gi = 'textarea,button,input[type="button"],input[type="submit"]',
        yi = fi + ',[tabindex="0"]',
        bi = { enter: ws, esc: 27, space: ks },
        xi = m && /(iphone|ipod)/i.test(p) && l >= 7 && l < 15;
    function Ti(e, t) {
        var n = e.s,
            a = [],
            s = {
                cancel: { cssClass: "mbsc-popup-button-close", name: "cancel", text: n.cancelText },
                close: { cssClass: "mbsc-popup-button-close", name: "close", text: n.closeText },
                ok: { cssClass: "mbsc-popup-button-primary", keyCode: ws, name: "ok", text: n.okText },
                set: { cssClass: "mbsc-popup-button-primary", keyCode: ws, name: "set", text: n.setText },
            };
        if (t && t.length)
            return (
                t.forEach(function (t) {
                    var n = me(t) ? s[t] || { text: t } : t;
                    (n.handler && !me(n.handler)) ||
                        (me(n.handler) && (n.name = n.handler),
                        (n.handler = function (t) {
                            e._onButtonClick({ domEvent: t, button: n });
                        })),
                        a.push(n);
                }),
                a
            );
    }
    function Di(e, t) {
        void 0 === t && (t = 0);
        var n = e._prevModal;
        if (n && n !== e && t < 10) return n.isVisible() ? n : Di(n, t + 1);
    }
    var Ci = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._lastFocus = +new Date()),
                    (t._setActive = function (e) {
                        t._active = e;
                    }),
                    (t._setContent = function (e) {
                        t._content = e;
                    }),
                    (t._setLimitator = function (e) {
                        t._limitator = e;
                    }),
                    (t._setPopup = function (e) {
                        t._popup = e;
                    }),
                    (t._setWrapper = function (e) {
                        t._wrapper = e;
                    }),
                    (t._onOverlayClick = function () {
                        t._isOpen && t.s.closeOnOverlayClick && !t._preventClose && t._close("overlay"), (t._preventClose = !1);
                    }),
                    (t._onDocClick = function (e) {
                        t.s.showOverlay || e.target === t.s.focusElm || mi !== t || t._onOverlayClick();
                    }),
                    (t._onMouseDown = function (e) {
                        t.s.showOverlay || (t._target = e.target);
                    }),
                    (t._onMouseUp = function (e) {
                        t._target && t._popup && t._popup.contains(t._target) && !t._popup.contains(e.target) && (t._preventClose = !0), (t._target = !1);
                    }),
                    (t._onPopupClick = function () {
                        t.s.showOverlay || (t._preventClose = !0);
                    }),
                    (t._onAnimationEnd = function (e) {
                        e.target === t._popup && (t._isClosing && (t._onClosed(), (t._isClosing = !1), t.state.isReady ? t.setState({ isReady: !1 }) : t.forceUpdate()), t._isOpening && (t._onOpened(), (t._isOpening = !1), t.forceUpdate()));
                    }),
                    (t._onButtonClick = function (e) {
                        var n = e.domEvent,
                            a = e.button;
                        t._hook("onButtonClick", { domEvent: n, button: a }), /cancel|close|ok|set/.test(a.name) && t._close(a.name);
                    }),
                    (t._onFocus = function (e) {
                        var n = +new Date();
                        mi === t && e.target.nodeType && t._ctx.contains(e.target) && t._popup && !t._popup.contains(e.target) && n - t._lastFocus > 100 && e.target !== t.s.focusElm && ((t._lastFocus = n), t._active.focus());
                    }),
                    (t._onKeyDown = function (e) {
                        var n = t.s,
                            a = e.keyCode,
                            s = n.focusElm && !n.focusOnOpen ? n.focusElm : ie;
                        if ((((a === ks && !Jt(e.target, fi)) || (t._lock && (a === Hs || a === Os))) && e.preventDefault(), n.focusTrap && 9 === a)) {
                            var i = t._popup.querySelectorAll(yi),
                                r = [],
                                o = -1,
                                l = 0,
                                c = -1,
                                d = ie;
                            qt(i, function (e) {
                                e.disabled || (!e.offsetHeight && !e.offsetWidth) || (r.push(e), o++, e === t._doc.activeElement && (c = o));
                            }),
                                e.shiftKey && ((l = o), (o = 0)),
                                c === o ? (d = s || r[l]) : e.target === s && (d = r[l]),
                                d && (d.focus(), e.preventDefault());
                        }
                    }),
                    (t._onContentScroll = function (e) {
                        !t._lock || (e.type === ms && "stylus" === e.touches[0].touchType) || e.preventDefault();
                    }),
                    (t._onScroll = function (e) {
                        var n = t.s;
                        n.closeOnScroll ? t._close("scroll") : (t._hasContext || "anchored" === n.display) && t.position();
                    }),
                    (t._onWndKeyDown = function (e) {
                        var n = t.s,
                            a = e.keyCode;
                        if (mi === t && a !== ie) {
                            if ((t._hook("onKeyDown", { keyCode: a }), n.closeOnEsc && 27 === a && t._close("esc"), a === ws && Jt(e.target, gi) && !e.shiftKey)) return;
                            if (t._buttons)
                                for (var s = 0, i = t._buttons; s < i.length; s++)
                                    for (var r = i[s], o = 0, l = de(r.keyCode) ? r.keyCode : [r.keyCode]; o < l.length; o++) {
                                        var c = l[o];
                                        if (!r.disabled && c !== ie && (c === a || bi[c] === a)) return void r.handler(e);
                                    }
                        }
                    }),
                    (t._onResize = function () {
                        var e = t._wrapper,
                            n = t._hasContext;
                        if (e) {
                            (t._vpWidth = Math.min(e.clientWidth, n ? 1 / 0 : t._win.innerWidth)),
                                (t._vpHeight = Math.min(e.clientHeight, n ? 1 / 0 : t._win.innerHeight)),
                                (t._maxWidth = t._limitator.offsetWidth),
                                (t._maxHeight = t.s.maxHeight !== ie || t._vpWidth < 768 || t._vpHeight < 650 ? t._limitator.offsetHeight : 600),
                                (t._round = !1 === t.s.touchUi || (t._popup.offsetWidth < t._vpWidth && t._vpWidth > t._maxWidth));
                            var a = { isLarge: t._round, maxPopupHeight: t._maxHeight, maxPopupWidth: t._maxWidth, target: e, windowHeight: t._vpHeight, windowWidth: t._vpWidth };
                            !1 === t._hook("onResize", a) || a.cancel || t.position();
                        }
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype.open = function () {
                    this._isOpen || this.setState({ isOpen: !0 });
                }),
                (t.prototype.close = function () {
                    this._close();
                }),
                (t.prototype.isVisible = function () {
                    return !!this._isOpen;
                }),
                (t.prototype.position = function () {
                    if (this._isOpen) {
                        var e = this.s,
                            t = this.state,
                            n = this._wrapper,
                            a = this._popup,
                            s = this._hasContext,
                            i = e.anchor,
                            r = e.anchorAlign,
                            o = e.rtl,
                            l = Rt(this._scrollCont),
                            c = Ft(this._scrollCont),
                            d = this._vpWidth,
                            h = this._vpHeight,
                            u = this._maxWidth,
                            m = this._maxHeight,
                            _ = Math.min(a.offsetWidth, u),
                            p = Math.min(a.offsetHeight, m),
                            v = e.showArrow;
                        (this._lock = e.scrollLock && this._content.scrollHeight <= this._content.clientHeight), s && ((n.style.top = l + "px"), (n.style.left = c + "px"));
                        var f = !1 === this._hook("onPosition", { isLarge: this._round, maxPopupHeight: m, maxPopupWidth: u, target: this._wrapper, windowHeight: h, windowWidth: d });
                        if ("anchored" !== e.display || f) this.setState({ height: h, isReady: !0, showArrow: v, width: d });
                        else {
                            var g = 0,
                                y = 0,
                                b = ce(t.modalLeft || 0, 8, d - _ - 8),
                                x = t.modalTop || 8,
                                T = "bottom",
                                D = {},
                                C = v ? 16 : 4,
                                S = (n.offsetWidth - d) / 2,
                                w = (n.offsetHeight - h) / 2;
                            if (s) {
                                var k = this._ctx.getBoundingClientRect();
                                (y = k.top), (g = k.left);
                            }
                            if (i && this._ctx.contains(i)) {
                                var M = i.getBoundingClientRect(),
                                    E = M.top - y,
                                    N = M.left - g,
                                    I = i.offsetWidth,
                                    L = i.offsetHeight;
                                if (
                                    ((b = ce((b = ("start" === r && !o) || ("end" === r && o) ? N : ("end" === r && !o) || ("start" === r && o) ? N + I - _ : N - (_ - I) / 2), 8, d - _ - 8)),
                                    (x = E + L + C),
                                    (D = { left: ce(N + I / 2 - b - S, 30, _ - 30) + "px" }),
                                    x + p + C > h)
                                )
                                    if (E - p - C > 0) (T = "top"), (x = E - p - C);
                                    else if (!e.disableLeftRight) {
                                        var H = N - _ - 8 > 0;
                                        (H || N + I + _ + 8 <= d) &&
                                            ((x = ce(E - (p - L) / 2, 8, h - p - 8)) + p + 8 > h && (x = Math.max(h - p - 8, 0)), (D = { top: ce(E + L / 2 - x - w, 30, p - 30) + "px" }), (T = H ? "left" : "right"), (b = H ? N - _ : N + I));
                                    }
                            }
                            ("top" !== T && "bottom" !== T) || (x + p + C > h && ((x = Math.max(h - p - C, 0)), (v = !1))),
                                this.setState({ arrowPos: D, bubblePos: T, height: h, isReady: !0, modalLeft: b, modalTop: x, showArrow: v, width: d });
                        }
                    }
                }),
                (t.prototype._render = function (e, t) {
                    "bubble" === e.display && (e.display = "anchored");
                    var n = e.animation,
                        a = e.display,
                        s = this._prevS,
                        i = "anchored" === a,
                        r = "inline" !== a,
                        o = e.fullScreen && r,
                        l = !!r && (e.isOpen === ie ? t.isOpen : e.isOpen);
                    if (
                        (l && (e.windowWidth !== s.windowWidth || e.display !== s.display || e.showArrow !== s.showArrow || (e.anchor !== s.anchor && "anchored" === e.display)) && (this._shouldPosition = !0),
                        (this._limits = { maxHeight: ye(e.maxHeight), maxWidth: ye(e.maxWidth) }),
                        (this._style = {
                            height: o ? "100%" : ye(e.height),
                            left: i && t.modalLeft ? t.modalLeft + "px" : "",
                            maxHeight: ye(this._maxHeight || e.maxHeight),
                            maxWidth: ye(this._maxWidth || e.maxWidth),
                            top: i && t.modalTop ? t.modalTop + "px" : "",
                            width: o ? "100%" : ye(e.width),
                        }),
                        (this._hasContext = "body" !== e.context && e.context !== ie),
                        (this._needsLock = xi && !this._hasContext && "anchored" !== a && e.scrollLock),
                        (this._isModal = r),
                        (this._flexButtons = "center" === a || (!this._touchUi && !o && ("top" === a || "bottom" === a))),
                        n !== ie && !0 !== n)
                    )
                        this._animation = me(n) ? n : "";
                    else
                        switch (a) {
                            case "bottom":
                                this._animation = "slide-up";
                                break;
                            case "top":
                                this._animation = "slide-down";
                                break;
                            default:
                                this._animation = "pop";
                        }
                    e.buttons ? e.buttons !== s.buttons && (this._buttons = Ti(this, e.buttons)) : (this._buttons = ie),
                        e.headerText !== s.headerText && (this._headerText = e.headerText ? this._safeHtml(e.headerText) : ie),
                        l && !this._isOpen && this._onOpen(),
                        !l && this._isOpen && this._onClose(),
                        (this._isOpen = l),
                        (this._isVisible = l || this._isClosing);
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s,
                        n = this._wrapper;
                    if (
                        vt &&
                        (t.context !== this._prevS.context || !this._ctx) &&
                        ((a = me(t.context) ? vt.querySelector(t.context) : t.context) || (a = vt.body),
                        (a.__mbscLock = a.__mbscLock || 0),
                        (a.__mbscIOSLock = a.__mbscIOSLock || 0),
                        (a.__mbscModals = a.__mbscModals || 0),
                        (this._ctx = a),
                        this._justOpened)
                    )
                        return void Me(this, function () {
                            e.forceUpdate();
                        });
                    if (n) {
                        if (this._justOpened) {
                            var a = this._ctx,
                                s = this._hasContext,
                                i = (this._doc = zt(n)),
                                r = (this._win = At(n)),
                                o = i.activeElement;
                            if (!this._hasWidth && t.responsive) {
                                var l = Math.min(n.clientWidth, s ? 1 / 0 : r.innerWidth),
                                    c = Math.min(n.clientHeight, s ? 1 / 0 : r.innerHeight);
                                if (((this._hasWidth = !0), l !== this.state.width || c !== this.state.height))
                                    return void Me(this, function () {
                                        e.setState({ height: c, width: l });
                                    });
                            }
                            if (
                                ((this._scrollCont = s ? a : r),
                                (this._observer = vi(n, this._onResize, this._zone)),
                                (this._prevFocus = t.focusElm || o),
                                a.__mbscModals++,
                                t.focusOnOpen &&
                                    o &&
                                    setTimeout(function () {
                                        o.blur();
                                    }),
                                this._needsLock)
                            ) {
                                if (!a.__mbscIOSLock) {
                                    var d = Rt(this._scrollCont),
                                        h = Ft(this._scrollCont);
                                    (a.style.left = -h + "px"), (a.style.top = -d + "px"), (a.__mbscScrollLeft = h), (a.__mbscScrollTop = d), a.classList.add("mbsc-popup-open-ios"), a.parentNode.classList.add("mbsc-popup-open-ios");
                                }
                                a.__mbscIOSLock++;
                            }
                            s && a.classList.add("mbsc-popup-ctx"),
                                t.focusTrap && Ot(r, ts, this._onFocus),
                                t.focusElm && !t.focusOnOpen && Ot(t.focusElm, as, this._onKeyDown),
                                Ot(this._scrollCont, ms, this._onContentScroll, { passive: !1 }),
                                Ot(this._scrollCont, vs, this._onContentScroll, { passive: !1 }),
                                Ot(this._scrollCont, cs, this._onContentScroll, { passive: !1 }),
                                setTimeout(function () {
                                    Ot(i, ss, e._onMouseDown), Ot(i, rs, e._onMouseUp), Ot(i, Za, e._onDocClick);
                                }),
                                this._hook("onOpen", { target: this._wrapper });
                        }
                        this._shouldPosition &&
                            Me(this, function () {
                                e._onResize();
                            }),
                            (this._justOpened = !1),
                            (this._justClosed = !1),
                            (this._shouldPosition = !1);
                    }
                }),
                (t.prototype._destroy = function () {
                    this._isOpen && (this._onClosed(), this._unlisten(), mi === this && (mi = Di(this)));
                }),
                (t.prototype._onOpen = function () {
                    var e = this;
                    kt && this._animation ? ((this._isOpening = !0), (this._isClosing = !1)) : this._onOpened(),
                        (this._justOpened = !0),
                        (this._preventClose = !1),
                        mi !== this &&
                            setTimeout(function () {
                                (e._prevModal = mi), (mi = e);
                            });
                }),
                (t.prototype._onClose = function () {
                    var e = this;
                    kt && this._animation
                        ? ((this._isClosing = !0), (this._isOpening = !1))
                        : setTimeout(function () {
                              e._onClosed(), e.setState({ isReady: !1 });
                          }),
                        (this._hasWidth = !1),
                        this._unlisten();
                }),
                (t.prototype._onOpened = function () {
                    var e = this.s;
                    if (e.focusOnOpen) {
                        var t = e.activeElm,
                            n = t ? (me(t) ? this._popup.querySelector(t) || this._active : t) : this._active;
                        n && n.focus && n.focus();
                    }
                    Ot(this._win, as, this._onWndKeyDown), Ot(this._scrollCont, hs, this._onScroll);
                }),
                (t.prototype._onClosed = function () {
                    var e = this,
                        t = this._ctx,
                        n = this._prevFocus,
                        a = this.s.focusOnClose && n && n.focus && n !== this._doc.activeElement;
                    t.__mbscModals--,
                        (this._justClosed = !0),
                        this._needsLock &&
                            (t.__mbscIOSLock--,
                            t.__mbscIOSLock ||
                                (t.classList.remove("mbsc-popup-open-ios"),
                                t.parentNode.classList.remove("mbsc-popup-open-ios"),
                                (t.style.left = ""),
                                (t.style.top = ""),
                                (function (e, t) {
                                    e.scrollTo ? e.scrollTo(t, e.scrollY) : (e.scrollLeft = t);
                                })(this._scrollCont, t.__mbscScrollLeft),
                                (function (e, t) {
                                    e.scrollTo ? e.scrollTo(e.scrollX, t) : (e.scrollTop = t);
                                })(this._scrollCont, t.__mbscScrollTop))),
                        this._hasContext && !t.__mbscModals && t.classList.remove("mbsc-popup-ctx"),
                        this._hook("onClosed", { focus: a }),
                        a && n.focus(),
                        setTimeout(function () {
                            mi === e && (mi = Di(e));
                        });
                }),
                (t.prototype._unlisten = function () {
                    Pt(this._win, as, this._onWndKeyDown),
                        Pt(this._scrollCont, hs, this._onScroll),
                        Pt(this._scrollCont, ms, this._onContentScroll, { passive: !1 }),
                        Pt(this._scrollCont, vs, this._onContentScroll, { passive: !1 }),
                        Pt(this._scrollCont, cs, this._onContentScroll, { passive: !1 }),
                        Pt(this._doc, ss, this._onMouseDown),
                        Pt(this._doc, rs, this._onMouseUp),
                        Pt(this._doc, Za, this._onDocClick),
                        this.s.focusTrap && Pt(this._win, ts, this._onFocus),
                        this.s.focusElm && Pt(this.s.focusElm, as, this._onKeyDown),
                        this._observer && (this._observer.detach(), (this._observer = null));
                }),
                (t.prototype._close = function (e) {
                    this._isOpen && (this.s.isOpen === ie && this.setState({ isOpen: !1 }), this._hook("onClose", { source: e }));
                }),
                (t.defaults = {
                    buttonVariant: "flat",
                    cancelText: "Cancel",
                    closeOnEsc: !0,
                    closeOnOverlayClick: !0,
                    closeText: "Close",
                    contentPadding: !0,
                    display: "center",
                    focusOnClose: !0,
                    focusOnOpen: !0,
                    focusTrap: !0,
                    maxWidth: 600,
                    okText: "Ok",
                    scrollLock: !0,
                    setText: "Set",
                    showArrow: !0,
                    showOverlay: !0,
                }),
                t
            );
        })(Ua),
        Si = _i;
    var wi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n, a) {
                        var i,
                            r,
                            o = n._hb,
                            l = n._rtl,
                            c = n._theme,
                            d = e.display,
                            h = (((i = {}).onKeyDown = n._onKeyDown), i),
                            u = (((r = {}).onAnimationEnd = n._onAnimationEnd), r);
                        return n._isModal
                            ? n._isVisible
                                ? Hn(
                                      Si,
                                      { context: n._ctx },
                                      Hn(
                                          "div",
                                          s(
                                              {
                                                  className:
                                                      "mbsc-font mbsc-popup-wrapper mbsc-popup-wrapper-" +
                                                      d +
                                                      c +
                                                      l +
                                                      " " +
                                                      n._className +
                                                      (e.fullScreen ? " mbsc-popup-wrapper-" + d + "-full" : "") +
                                                      (n._touchUi ? "" : " mbsc-popup-pointer") +
                                                      (n._round ? " mbsc-popup-round" : "") +
                                                      (n._hasContext ? " mbsc-popup-wrapper-ctx" : "") +
                                                      (t.isReady ? "" : " mbsc-popup-hidden"),
                                                  ref: n._setWrapper,
                                              },
                                              h
                                          ),
                                          e.showOverlay &&
                                              Hn("div", {
                                                  className: "mbsc-popup-overlay mbsc-popup-overlay-" + d + c + (n._isClosing ? " mbsc-popup-overlay-out" : "") + (n._isOpening && t.isReady ? " mbsc-popup-overlay-in" : ""),
                                                  onClick: n._onOverlayClick,
                                              }),
                                          Hn("div", { className: "mbsc-popup-limits mbsc-popup-limits-" + d, ref: n._setLimitator, style: n._limits }),
                                          Hn(
                                              "div",
                                              s(
                                                  {
                                                      className:
                                                          "mbsc-popup " +
                                                          c +
                                                          o +
                                                          " mbsc-popup-" +
                                                          d +
                                                          (e.fullScreen ? "-full" : "") +
                                                          (t.bubblePos && t.showArrow && "anchored" === d ? " mbsc-popup-anchored-" + t.bubblePos : "") +
                                                          (n._isClosing ? " mbsc-popup-" + n._animation + "-out" : "") +
                                                          (n._isOpening && t.isReady ? " mbsc-popup-" + n._animation + "-in" : ""),
                                                      role: "dialog",
                                                      "aria-modal": "true",
                                                      ref: n._setPopup,
                                                      style: n._style,
                                                      onClick: n._onPopupClick,
                                                  },
                                                  u
                                              ),
                                              "anchored" === d &&
                                                  t.showArrow &&
                                                  Hn(
                                                      "div",
                                                      { className: "mbsc-popup-arrow-wrapper mbsc-popup-arrow-wrapper-" + t.bubblePos + c },
                                                      Hn("div", { className: "mbsc-popup-arrow mbsc-popup-arrow-" + t.bubblePos + c, style: t.arrowPos })
                                                  ),
                                              Hn("div", { className: "mbsc-popup-focus", tabIndex: -1, ref: n._setActive }),
                                              Hn(
                                                  "div",
                                                  { className: "mbsc-popup-body mbsc-popup-body-" + d + c + o + (e.fullScreen ? " mbsc-popup-body-" + d + "-full" : "") + (n._round ? " mbsc-popup-body-round" : "") },
                                                  n._headerText &&
                                                      Hn("div", { className: "mbsc-popup-header mbsc-popup-header-" + d + c + o + (n._buttons ? "" : " mbsc-popup-header-no-buttons"), dangerouslySetInnerHTML: n._headerText, "v-html": ie }),
                                                  Hn("div", { className: "mbsc-popup-content" + (e.contentPadding ? " mbsc-popup-padding" : ""), ref: n._setContent }, a),
                                                  n._buttons &&
                                                      Hn(
                                                          "div",
                                                          {
                                                              className:
                                                                  "mbsc-popup-buttons mbsc-popup-buttons-" + d + c + l + o + (n._flexButtons ? " mbsc-popup-buttons-flex" : "") + (e.fullScreen ? " mbsc-popup-buttons-" + d + "-full" : ""),
                                                          },
                                                          n._buttons.map(function (t, a) {
                                                              return Hn(
                                                                  zs,
                                                                  {
                                                                      color: t.color,
                                                                      className: "mbsc-popup-button mbsc-popup-button-" + d + l + o + (n._flexButtons ? " mbsc-popup-button-flex" : "") + " " + (t.cssClass || ""),
                                                                      icon: t.icon,
                                                                      disabled: t.disabled,
                                                                      key: a,
                                                                      theme: e.theme,
                                                                      themeVariant: e.themeVariant,
                                                                      variant: t.variant || e.buttonVariant,
                                                                      onClick: t.handler,
                                                                  },
                                                                  t.text
                                                              );
                                                          })
                                                      )
                                              )
                                          )
                                      )
                                  )
                                : null
                            : Hn(rn, null, a);
                    })(e, t, this, e.children);
                }),
                t
            );
        })(Ci),
        ki = {
            before: function (e, t) {
                var n,
                    a,
                    s = this;
                t.onOpen && (n = t.onOpen), t.onClosed && (a = t.onClosed);
                var i = zt(e),
                    r = i && i.createComment("popup");
                r && e.parentNode && e.parentNode.insertBefore(r, e),
                    (e.style.display = "none"),
                    (t.onOpen = function (t, a) {
                        (e.style.display = ""), t.target.querySelector(".mbsc-popup-content").appendChild(e), n && n.call(s, t, a);
                    }),
                    (t.onClosed = function (t, n) {
                        (e.style.display = "none"), r && r.parentNode && r.parentNode.insertBefore(e, r), a && a.call(s, t, n);
                    });
            },
        },
        Mi = {},
        Ei = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        if (t._isDrag) e.stopPropagation();
                        else {
                            t._triggerEvent("onClick", e);
                            var n = t.s,
                                a = Mi[n.id];
                            a && n.selected && a.next({ hasFocus: !1 });
                        }
                    }),
                    (t._onRightClick = function (e) {
                        t._triggerEvent("onRightClick", e);
                    }),
                    (t._onDocTouch = function (e) {
                        Pt(t._doc, us, t._onDocTouch), Pt(t._doc, ss, t._onDocTouch), (t._isDrag = !1), t._hook("onDragModeOff", { data: t.s.event });
                    }),
                    (t._updateState = function (e) {
                        t.s.showText && t.setState(e);
                    }),
                    (t._triggerEvent = function (e, n) {
                        t._hook(e, { domEvent: n, label: t.s.event, target: t._el });
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t = this,
                        n = this.s,
                        a = n.id,
                        i = n.isPicker,
                        r = Mi[a];
                    r || ((r = new d()), (Mi[a] = r)),
                        (this._unsubscribe = r.subscribe(this._updateState)),
                        (this._doc = zt(this._el)),
                        (this._unlisten = Ss(this._el, {
                            keepFocus: !0,
                            onBlur: function () {
                                i || r.next({ hasFocus: !1 });
                            },
                            onDoubleClick: function (e) {
                                e.domEvent.stopPropagation(), t._hook("onDoubleClick", { domEvent: e.domEvent, label: t.s.event, target: t._el });
                            },
                            onEnd: function (n) {
                                if (t._isDrag) {
                                    var a = t.s,
                                        i = s({}, n);
                                    i.domEvent.preventDefault(), (i.data = a.event), a.resize && e ? ((i.resize = !0), (i.direction = e)) : a.drag && (i.drag = !0), t._hook("onDragEnd", i), a.isUpdate || (t._isDrag = !1);
                                }
                                clearTimeout(t._touchTimer), (e = ie);
                            },
                            onFocus: function () {
                                i || r.next({ hasFocus: !0 });
                            },
                            onHoverIn: function (e) {
                                t._isDrag || i || (r.next({ hasHover: !0 }), t._triggerEvent("onHoverIn", e));
                            },
                            onHoverOut: function (e) {
                                r.next({ hasHover: !1 }), t._triggerEvent("onHoverOut", e);
                            },
                            onKeyDown: function (e) {
                                var n = t.s.event;
                                switch (e.keyCode) {
                                    case ws:
                                    case ks:
                                        t._el.click(), e.preventDefault();
                                        break;
                                    case 8:
                                    case 46:
                                        n && !1 !== n.editable && t._hook("onDelete", { domEvent: e, event: n, source: "calendar" });
                                }
                            },
                            onMove: function (n) {
                                var a = t.s,
                                    i = s({}, n);
                                if (((i.data = a.event), e)) (i.resize = !0), (i.direction = e);
                                else {
                                    if (!a.drag) return;
                                    i.drag = !0;
                                }
                                a.event &&
                                    !1 !== a.event.editable &&
                                    (t._isDrag
                                        ? (i.domEvent.preventDefault(), t._hook("onDragMove", i))
                                        : (Math.abs(i.deltaX) > 7 || Math.abs(i.deltaY) > 7) && (clearTimeout(t._touchTimer), i.isTouch || ((t._isDrag = !0), t._hook("onDragStart", i))));
                            },
                            onStart: function (n) {
                                var a = t.s,
                                    i = s({}, n),
                                    r = i.domEvent.target;
                                if (((i.data = a.event), a.resize && r.classList.contains("mbsc-calendar-label-resize"))) (e = r.classList.contains("mbsc-calendar-label-resize-start") ? "start" : "end"), (i.resize = !0), (i.direction = e);
                                else {
                                    if (!a.drag) return;
                                    i.drag = !0;
                                }
                                a.event &&
                                    !1 !== a.event.editable &&
                                    ((!t._isDrag && i.isTouch) || i.domEvent.stopPropagation(),
                                    t._isDrag
                                        ? t._hook("onDragStart", i)
                                        : i.isTouch &&
                                          (t._touchTimer = setTimeout(function () {
                                              t._hook("onDragModeOn", i), t._hook("onDragStart", i), (t._isDrag = !0);
                                          }, 350)));
                            },
                        })),
                        this._isDrag && (Ot(this._doc, us, this._onDocTouch), Ot(this._doc, ss, this._onDocTouch));
                }),
                (t.prototype._destroy = function () {
                    if (this._unsubscribe) {
                        var e = this.s.id,
                            t = Mi[e];
                        t && (t.unsubscribe(this._unsubscribe), t.nr || delete Mi[e]);
                    }
                    this._unlisten && this._unlisten(), Pt(this._doc, us, this._onDocTouch), Pt(this._doc, ss, this._onDocTouch);
                }),
                (t.prototype._render = function (e, t) {
                    var n,
                        a,
                        s,
                        i,
                        r,
                        o,
                        l = e.event,
                        c = new Date(e.date),
                        d = e.render || e.renderContent,
                        h = !1;
                    if (
                        ((this._isDrag = this._isDrag || e.isUpdate),
                        (this._content = ie),
                        (this._title =
                            e.more || e.count || !e.showEventTooltip
                                ? ie
                                : (function (e) {
                                      if (vt && e) {
                                          var t = vt.createElement("div");
                                          return (t.innerHTML = e), t.textContent.trim();
                                      }
                                      return e || "";
                                  })(l.tooltip || l.title || l.text)),
                        (this._tabIndex = e.isActiveMonth && e.showText && !e.count && !e.isPicker ? 0 : -1),
                        l)
                    ) {
                        var u = l.allDay,
                            m = u ? ie : e;
                        (n = l.start ? va(l.start, m) : null), (a = l.end ? va(l.end, m) : null);
                        var _ = n && a && ta(e, u, n, a, !0),
                            p = Da(oa(c, e), 7),
                            v = e.lastDay && e.lastDay < p ? e.lastDay : p;
                        (s = !(h = n && _ && !la(n, _)) || (n && la(n, c))), (i = !h || (_ && la(_, c))), (r = !h || (e.showText ? _ < v : i)), (this._hasResizeStart = e.resize && s), (this._hasResizeEnd = e.resize && r);
                        var f = l.color;
                        if (!f && l.resource && e.resourcesMap) {
                            var g = e.resourcesMap[de(l.resource) ? l.resource[0] : l.resource];
                            f = g && g.color;
                        }
                        e.showText && (this._textColor = f ? Ut(f) : ie), (this._color = e.render || e.template ? ie : l.textColor && !f ? "transparent" : f);
                    }
                    if (l && e.showText && (d || e.contentTemplate || e.template)) {
                        var y = l.allDay || !n || (h && !s && !i);
                        if (((this._data = { end: !y && i && a ? ya(e.timeFormat, a, e) : "", id: l.id, isMultiDay: h, original: l, start: !y && s && n ? ya(e.timeFormat, n, e) : "", title: this._title }), d)) {
                            var b = d(this._data);
                            me(b) ? (o = b) : (this._content = b);
                        }
                    } else o = e.more || e.count || (e.showText && (l.title || l.text)) || "";
                    o !== this._text && ((this._text = o), (this._html = o ? this._safeHtml(o) : ie), (this._shouldEnhance = o && l && e.showText && !!d)),
                        (this._cssClass =
                            "mbsc-calendar-text" +
                            this._theme +
                            this._rtl +
                            ((t.hasFocus && !e.inactive && !e.selected) || (e.selected && e.showText) ? " mbsc-calendar-label-active " : "") +
                            (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-calendar-label-hover") +
                            (e.more ? " mbsc-calendar-text-more" : e.render || e.template ? " mbsc-calendar-custom-label" : " mbsc-calendar-label") +
                            (e.inactive ? " mbsc-calendar-label-inactive" : "") +
                            (e.isUpdate ? " mbsc-calendar-label-dragging" : "") +
                            (e.hidden ? " mbsc-calendar-label-hidden" : "") +
                            (s ? " mbsc-calendar-label-start" : "") +
                            (r ? " mbsc-calendar-label-end" : "") +
                            (l && !1 === l.editable ? " mbsc-readonly-event" : "") +
                            (l && l.cssClass ? " " + l.cssClass : ""));
                }),
                t
            );
        })(Ua);
    var Ni = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n = e.event && !1 !== e.event.editable;
                        return Hn(
                            "div",
                            {
                                "aria-hidden": e.showText ? ie : "true",
                                className: t._cssClass,
                                "data-id": e.showText && e.event ? e.event.id : null,
                                onClick: t._onClick,
                                onContextMenu: t._onRightClick,
                                ref: t._setEl,
                                role: e.showText ? "button" : ie,
                                style: { color: t._color },
                                tabIndex: t._tabIndex,
                                title: t._title,
                            },
                            t._hasResizeStart && n && Hn("div", { className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-start" + t._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-start-touch" : "") }),
                            t._hasResizeEnd && n && Hn("div", { className: "mbsc-calendar-label-resize mbsc-calendar-label-resize-end" + t._rtl + (e.isUpdate ? " mbsc-calendar-label-resize-end-touch" : "") }),
                            e.showText && !e.more && !e.render && Hn("div", { className: "mbsc-calendar-label-background" + t._theme }),
                            e.showText && !e.more && e.render
                                ? t._html
                                    ? Hn("div", { dangerouslySetInnerHTML: t._html })
                                    : t._content
                                : Hn(
                                      "div",
                                      { className: "mbsc-calendar-label-inner" + t._theme, style: { color: t._textColor } },
                                      Hn("div", { "aria-hidden": "true", className: "mbsc-calendar-label-text" + t._theme, dangerouslySetInnerHTML: t._html, style: { color: e.event && e.event.textColor } }, t._content),
                                      e.label && Hn("div", { className: "mbsc-hidden-content" }, e.label)
                                  )
                        );
                    })(e, this);
                }),
                t
            );
        })(Ei),
        Ii = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._cellClick("onDayClick", e);
                    }),
                    (t._onRightClick = function (e) {
                        t._cellClick("onDayRightClick", e);
                    }),
                    (t._onLabelClick = function (e) {
                        t._labelClick("onLabelClick", e);
                    }),
                    (t._onLabelDoubleClick = function (e) {
                        t._labelClick("onLabelDoubleClick", e);
                    }),
                    (t._onLabelRightClick = function (e) {
                        t._labelClick("onLabelRightClick", e);
                    }),
                    (t._onLabelHoverIn = function (e) {
                        t._labelClick("onLabelHoverIn", e);
                    }),
                    (t._onLabelHoverOut = function (e) {
                        t._labelClick("onLabelHoverOut", e);
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n,
                        a = this;
                    this._unlisten = Ss(this._el, {
                        click: !0,
                        onBlur: function () {
                            a.setState({ hasFocus: !1 });
                        },
                        onDoubleClick: function (e) {
                            var t = a.s;
                            t.clickToCreate && "single" !== t.clickToCreate && t.labels && !t.disabled && t.display && (a._hook("onLabelUpdateStart", e), a._hook("onLabelUpdateEnd", e)), a._cellClick("onDayDoubleClick", e.domEvent);
                        },
                        onEnd: function (s) {
                            e && (s.domEvent.preventDefault(), a._hook("onLabelUpdateEnd", s), (e = !1)), clearTimeout(n), (e = !1), (t = !1);
                        },
                        onFocus: function () {
                            a.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function (e) {
                            var t = a.s;
                            t.disabled || a.setState({ hasHover: !0 }), a._hook("onHoverIn", { date: new Date(t.date), domEvent: e, hidden: !t.display, outer: t.outer, target: a._el });
                        },
                        onHoverOut: function (e) {
                            var t = a.s;
                            a.setState({ hasHover: !1 }), a._hook("onHoverOut", { date: new Date(t.date), domEvent: e, hidden: !t.display, outer: t.outer, target: a._el });
                        },
                        onKeyDown: function (e) {
                            switch (e.keyCode) {
                                case ws:
                                case ks:
                                    e.preventDefault(), a._onClick(e);
                            }
                        },
                        onMove: function (s) {
                            e && a.s.dragToCreate
                                ? (s.domEvent.preventDefault(), a._hook("onLabelUpdateMove", s))
                                : t && a.s.dragToCreate && (Math.abs(s.deltaX) > 7 || Math.abs(s.deltaY) > 7)
                                ? ((e = !s.isTouch), a._hook("onLabelUpdateStart", s))
                                : clearTimeout(n);
                        },
                        onStart: function (s) {
                            var i = a.s;
                            ((s.create = !0), i.disabled || (!i.dragToCreate && !i.clickToCreate) || !i.labels || e) ||
                                Xt(s.domEvent.target, ".mbsc-calendar-text", a._el) ||
                                (s.isTouch && i.dragToCreate
                                    ? (n = setTimeout(function () {
                                          a._hook("onLabelUpdateStart", s), a._hook("onLabelUpdateModeOn", s), (e = !0);
                                      }, 350))
                                    : "single" === i.clickToCreate
                                    ? (a._hook("onLabelUpdateStart", s), (e = !0))
                                    : (t = !s.isTouch));
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    var n = pa(e),
                        a = e.date,
                        s = e.colors,
                        i = e.display,
                        r = e.dragData,
                        o = e.hoverEnd,
                        l = e.hoverStart,
                        c = e.labels,
                        d = e.rangeEnd,
                        h = e.rangeStart,
                        u = new Date(a),
                        m = na(u),
                        _ = la(n, u),
                        p = c && c.events,
                        v = s && s[0],
                        f = v && v.background,
                        g = v && v.highlight,
                        y = "",
                        b = "";
                    (this._draggedLabel = r && r.draggedDates && r.draggedDates[m]),
                        (this._draggedLabelOrig = r && r.originDates && r.originDates[m]),
                        (this._todayClass = _ ? " mbsc-calendar-today" : ""),
                        (this._cellStyles = f && i ? { backgroundColor: f, color: Ut(f) } : ie),
                        (this._circleStyles = g ? { backgroundColor: g, color: Ut(v.highlight) } : ie),
                        (this._ariaLabel = "day" === e.type ? (_ ? e.todayText + ", " : "") + e.day + ", " + e.month + " " + e.text + ", " + e.year : "month" === e.type ? e.month : ""),
                        i &&
                            (((h && a >= h && a <= (d || h)) || (d && a <= d && a >= (h || d))) && (b = " mbsc-range-day" + (a === (h || d) ? " mbsc-range-day-start" : "") + (a === (d || h) ? " mbsc-range-day-end" : "")),
                            l && o && a >= l && a <= o && (b += " mbsc-range-hover" + (a === l ? " mbsc-range-hover-start mbsc-hover" : "") + (a === o ? " mbsc-range-hover-end mbsc-hover" : ""))),
                        e.marks &&
                            e.marks.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        s &&
                            s.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        p &&
                            p.forEach(function (e) {
                                y += e.cellCssClass ? " " + e.cellCssClass : "";
                            }),
                        (this._cssClass =
                            "mbsc-calendar-cell mbsc-flex-1-0-0 mbsc-calendar-" +
                            e.type +
                            this._theme +
                            this._rtl +
                            this._hb +
                            y +
                            (c ? " mbsc-calendar-day-labels" : "") +
                            (s ? " mbsc-calendar-day-colors" : "") +
                            (e.outer ? " mbsc-calendar-day-outer" : "") +
                            (e.hasMarks ? " mbsc-calendar-day-marked" : "") +
                            (e.disabled ? " mbsc-disabled" : "") +
                            (i ? "" : " mbsc-calendar-day-empty") +
                            (e.selected ? " mbsc-selected" : "") +
                            (t.hasFocus ? " mbsc-focus" : "") +
                            (!t.hasHover || (a !== l && a !== o && (l || o)) ? "" : " mbsc-hover") +
                            (this._draggedLabel ? " mbsc-calendar-day-highlight" : "") +
                            b),
                        (this._data = { date: u, events: p, selected: e.selected });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten();
                }),
                (t.prototype._cellClick = function (e, t) {
                    var n = this.s;
                    n.display && this._hook(e, { date: new Date(n.date), disabled: n.disabled, domEvent: t, outer: n.outer, selected: n.selected, source: "calendar", target: this._el });
                }),
                (t.prototype._labelClick = function (e, t) {
                    var n = this.s;
                    (t.date = new Date(n.date)), (t.labels = n.labels.events), this._hook(e, t);
                }),
                t
            );
        })(Ua);
    function Li(e, t, n, a, s, i, r) {
        return Hn(Ni, {
            key: r,
            amText: t.amText,
            count: n.count ? n.count + " " + (n.count > 1 ? t.eventsText : t.eventText) : ie,
            date: t.date,
            dataTimezone: t.dataTimezone,
            displayTimezone: t.displayTimezone,
            drag: t.dragToMove,
            resize: t.dragToResize,
            event: n.event,
            exclusiveEndDates: t.exclusiveEndDates,
            firstDay: t.firstDay,
            hidden: s,
            id: n.id,
            inactive: !i && n.event && t.dragData && t.dragData.draggedEvent && n.event.id === t.dragData.draggedEvent.id,
            isActiveMonth: t.isActiveMonth,
            isPicker: t.isPicker,
            isUpdate: i,
            label: n.label,
            lastDay: n.lastDay,
            more: n.more,
            pmText: t.pmText,
            resourcesMap: t.resourcesMap,
            rtl: t.rtl,
            selected: n.event && t.selectedEventsMap && (t.selectedEventsMap[n.id] || t.selectedEventsMap[n.event.id]),
            showEventTooltip: t.showEventTooltip,
            showText: a,
            theme: t.theme,
            timeFormat: t.timeFormat,
            timezonePlugin: t.timezonePlugin,
            render: t.renderLabel,
            renderContent: t.renderLabelContent,
            onClick: e._onLabelClick,
            onDoubleClick: e._onLabelDoubleClick,
            onRightClick: e._onLabelRightClick,
            onHoverIn: e._onLabelHoverIn,
            onHoverOut: e._onLabelHoverOut,
            onDelete: t.onLabelDelete,
            onDragStart: t.onLabelUpdateStart,
            onDragMove: t.onLabelUpdateMove,
            onDragEnd: t.onLabelUpdateEnd,
            onDragModeOn: t.onLabelUpdateModeOn,
            onDragModeOff: t.onLabelUpdateModeOff,
        });
    }
    function Hi(e, t) {
        var n,
            a = t._draggedLabel,
            s = t._draggedLabelOrig,
            i = t._theme;
        return (
            e.renderDay && (n = e.renderDay(t._data)),
            e.renderDayContent && (n = e.renderDayContent(t._data)),
            me(n) && ((n = Hn("div", { dangerouslySetInnerHTML: t._safeHtml(n) })), (t._shouldEnhance = !0)),
            Hn(
                "div",
                { ref: t._setEl, className: t._cssClass, onClick: t._onClick, onContextMenu: t._onRightClick, style: t._cellStyles, tabIndex: e.disabled ? ie : e.active ? 0 : -1 },
                Hn("div", { dangerouslySetInnerHTML: t.textParam }),
                Hn(
                    "div",
                    { className: "mbsc-calendar-cell-inner mbsc-calendar-" + e.type + "-inner" + i + ("day" === e.type ? "" : t._hb) + (e.display ? "" : " mbsc-calendar-day-hidden") },
                    e.renderDay
                        ? n
                        : Hn(
                              rn,
                              null,
                              1 === e.text && Hn("div", { "aria-hidden": "true", className: "mbsc-calendar-month-name" + i + t._rtl }, e.monthShort),
                              Hn("div", { "aria-label": t._ariaLabel, role: "button", "aria-pressed": e.selected, className: "mbsc-calendar-cell-text mbsc-calendar-" + e.type + "-text" + i + t._todayClass, style: t._circleStyles }, e.text),
                              e.marks &&
                                  Hn(
                                      "div",
                                      null,
                                      Hn(
                                          "div",
                                          { className: "mbsc-calendar-marks" + i + t._rtl },
                                          e.marks.map(function (e, t) {
                                              return Hn("div", { className: "mbsc-calendar-mark " + (e.markCssClass || "") + i, key: t, style: { background: e.color } });
                                          })
                                      )
                                  ),
                              e.renderDayContent && n
                          ),
                    e.labels &&
                        Hn(
                            "div",
                            null,
                            s &&
                                s.event &&
                                Hn(
                                    "div",
                                    { className: "mbsc-calendar-labels mbsc-calendar-labels-dragging" },
                                    Hn("div", { style: { width: s.width + "%" || "100%" } }, Li(t, e, { id: 0, event: s.event }, !0, !!e.dragData.draggedDates, !0))
                                ),
                            a &&
                                a.event &&
                                Hn(
                                    "div",
                                    { className: "mbsc-calendar-labels mbsc-calendar-labels-dragging" },
                                    Hn("div", { className: "mbsc-calendar-label-wrapper", style: { width: a.width + "%" || "100%" } }, Li(t, e, { id: 0, event: a.event }, !0, !1, !0))
                                ),
                            Hn(
                                "div",
                                { className: "mbsc-calendar-labels" },
                                e.labels.data.map(function (n) {
                                    return (function (e, t, n) {
                                        var a = n.id;
                                        return n.placeholder
                                            ? Hn("div", { className: "mbsc-calendar-text mbsc-calendar-text-placeholder", key: a })
                                            : n.more || n.count
                                            ? Li(e, t, n, !0, !1, !1, a)
                                            : n.multiDay
                                            ? [Hn("div", { className: "mbsc-calendar-label-wrapper", style: { width: n.width + "%" }, key: a }, Li(e, t, n, !0)), Li(e, t, n, !1, !1, !1, "-" + a)]
                                            : Li(e, t, n, n.showText, !1, !1, a);
                                    })(t, e, n);
                                })
                            ),
                            Hn("div", { className: "mbsc-calendar-text mbsc-calendar-text-placeholder" })
                        )
                )
            )
        );
    }
    var Yi = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return Hi(e, this);
                }),
                t
            );
        })(Ii),
        Oi = function (e) {
            var t = e.firstDay,
                n = e.hidden,
                a = e.rtl,
                s = e.theme,
                i = e.dayNamesShort,
                r = e.showWeekNumbers,
                o = e.hasScroll;
            return Hn(
                "div",
                { "aria-hidden": "true", className: "mbsc-calendar-week-days mbsc-flex" + (n ? " mbsc-hidden" : "") },
                r && Hn("div", { className: "mbsc-calendar-week-day mbsc-flex-none mbsc-calendar-week-nr" + s + a }),
                le.map(function (e, n) {
                    return Hn("div", { className: "mbsc-calendar-week-day mbsc-flex-1-0-0" + s + a, key: n }, i[(n + t) % 7]);
                }),
                o && Hn("div", { className: "mbsc-schedule-fake-scroll-y" })
            );
        },
        Pi = { 0: "SU", 1: "MO", 2: "TU", 3: "WE", 4: "TH", 5: "FR", 6: "SA" },
        zi = { SU: 0, MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6 },
        Vi = { byday: "weekDays", bymonth: "month", bymonthday: "day", bysetpos: "pos", dtstart: "from", freq: "repeat", wkst: "weekStart" };
    function Fi(e, t, n, a) {
        var s = va(t.start, t.allDay ? ie : n),
            i = va(t.end, t.allDay ? ie : n),
            r = i - s;
        for (a && ((t.start = s), (t.end = i)), s = aa(s), i = n.exclusiveEndDates ? i : aa(Da(i, 1)); s < i || !r; ) Ri(e, s, t), (s = Da(s, 1)), (r = 1);
    }
    function Ri(e, t, n) {
        var a = na(t);
        e[a] || ((e[a] = []), (e[a].date = aa(t, !0))), e[a].push(n);
    }
    function Ai(e, t, n, a, s, i) {
        var r = {};
        if (s)
            for (var o = 0, l = Xi(s); o < l.length; o++) {
                r[na(va(l[o]))] = !0;
            }
        if (i)
            for (var c = 0, d = Gi(i, e, t, n, a); c < d.length; c++) {
                r[na(d[c].d)] = !0;
            }
        return r;
    }
    function Wi(e) {
        return me(e) || e.getTime || e.toDate ? e : e.start || e.date;
    }
    function Ui(e) {
        for (var t = {}, n = 0, a = e.split(";"); n < a.length; n++) {
            var s = a[n].split("="),
                i = s[0].trim().toLowerCase(),
                r = s[1].trim();
            t[Vi[i] || i] = r;
        }
        return t;
    }
    function Bi(e) {
        return me(e) ? Ui(e) : s({}, e);
    }
    function ji(e, t, n) {
        var a = Bi(e),
            s = va(t),
            i = va(n),
            r = ia(i, s),
            o = (a.repeat || "").toLowerCase(),
            l = function (e, t, n) {
                var a = e.filter(function (e) {
                    return e !== t;
                });
                return -1 === a.indexOf(n) && a.push(n), a;
            },
            c = function (e, t, n) {
                var a = de(e)
                        ? e
                        : ((e || "") + "").split(",").map(function (e) {
                              return +e;
                          }),
                    s = l(a, t, n);
                return s.length > 1 ? s : s[0];
            },
            d = function () {
                if (a.weekDays) {
                    var e = a.weekDays.split(","),
                        t = Pi[i.getDay()],
                        n = Pi[s.getDay()],
                        r = l(e, t, n);
                    a.weekDays = r.join();
                }
            };
        return (
            "weekly" === o
                ? d()
                : "monthly" === o
                ? a.pos === ie
                    ? (a.day = c(a.day, i.getDate(), s.getDate()))
                    : d()
                : "yearly" === o && (a.pos === ie ? ((a.month = c(a.month, i.getMonth() + 1, s.getMonth() + 1)), (a.day = c(a.day, i.getDate(), s.getDate()))) : d()),
            a.from && (a.from = Da(va(a.from), r)),
            a.until && (a.until = Da(va(a.until), r)),
            a
        );
    }
    function Ki(e, t, n, a) {
        for (var s = null, i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = va(o.start || o.date),
                    c = Gi(o.recurring, l, t, ie, n, o.reccurringException, o.recurringExceptionRule, "first");
                (!s || c < s) && (s = c);
            } else if (o.start && o.end) {
                var d = va(o.start, n, a);
                va(o.end, n, a) > t && (s = d <= t ? t : s && s < d ? s : d);
            } else {
                var h = va(Wi(o), n, a);
                h > t && (!s || h < s) && (s = h);
            }
        }
        return s;
    }
    function Ji(e, t, n, a) {
        var s = t;
        e.sort(function (e, t) {
            return va(Wi(e), n, a) - va(Wi(t), n, a);
        });
        for (var i = 0, r = e; i < r.length; i++) {
            var o = r[i];
            if (o.recurring) {
                var l = va(o.start || o.date),
                    c = Gi(o.recurring, l, t, ie, n, o.reccurringException, o.recurringExceptionRule, "last");
                c > s && (s = c);
            } else if (o.start && o.end) {
                var d = va(o.start, n, a),
                    h = va(o.end, n, a);
                h > s && ia(s, d) <= 1 && (s = h);
            } else {
                var u = va(Wi(o), n, a);
                u > s && ia(s, u) <= 1 && (s = u);
            }
        }
        return s;
    }
    function Xi(e) {
        return e ? (de(e) ? e : me(e) ? e.split(",") : [e]) : [];
    }
    function Gi(e, t, n, a, s, i, r, o) {
        me(e) && (e = Ui(e));
        for (
            var l,
                c,
                d = s.getYear,
                h = s.getMonth,
                u = s.getDay,
                m = s.getDate,
                _ = s.getMaxDayOfMonth,
                p = (e.repeat || "").toLowerCase(),
                v = e.interval || 1,
                f = e.count,
                g = e.from ? va(e.from) : t || (1 !== v || f !== ie ? new Date() : n),
                y = aa(g),
                b = d(g),
                x = h(g),
                T = e.until ? va(e.until) : 1 / 0,
                D = g < n,
                C = D ? n : aa(g),
                S = "first" === o,
                w = "last" === o,
                k = S || w || !a || T < a ? T : a,
                M = f === ie ? 1 / 0 : f,
                E = (e.weekDays || Pi[g.getDay()]).split(","),
                N = zi[(e.weekStart || "MO").trim().toUpperCase()],
                I = de(e.day) ? e.day : ((e.day || u(g)) + "").split(","),
                L = de(e.month) ? e.month : ((e.month || h(g) + 1) + "").split(","),
                H = [],
                Y = e.pos !== ie,
                O = Y ? +e.pos : 1,
                P = [],
                z = a ? Ai(t, n, a, s, i, r) : {},
                V = !0,
                F = 0,
                R = 0,
                A = null,
                W = n,
                U = 0,
                B = E;
            U < B.length;
            U++
        ) {
            var j = B[U];
            P.push(zi[j.trim().toUpperCase()]);
        }
        var K = function () {
                if ((a || (z = Ai(c, c, Da(c, 1), s, i, r)), !z[na(c)] && c >= C))
                    if (S) (A = !A || c < A ? c : A), (V = !1);
                    else if (w) {
                        var e = ia(W, c);
                        (W = c > W && e <= 1 ? c : W), (V = e <= 1);
                    } else H.push({ d: c, i: R });
                R++;
            },
            J = function (e, t) {
                for (var n = [], a = 0, s = P; a < s.length; a++) for (var i = oa(e, { firstDay: s[a] }); i < t; i.setDate(i.getDate() + 7)) i.getMonth() === e.getMonth() && n.push(+i);
                n.sort();
                var r = n[O < 0 ? n.length + O : O - 1];
                (c = r ? new Date(r) : t) < k ? r && K() : (V = !1);
            };
        switch (p) {
            case "daily":
                for (R = f && D ? Ce(ia(g, n) / v) : 0; V; ) (c = m(d(g), h(g), u(g) + R * v)) < k && R < M ? K() : (V = !1);
                break;
            case "weekly":
                var X = P,
                    G = oa(g, { firstDay: N }),
                    q = G.getDay();
                for (
                    X.sort(function (e, t) {
                        return (e = (e -= q) < 0 ? e + 7 : e) - (t = (t -= q) < 0 ? t + 7 : t);
                    });
                    V;

                ) {
                    for (var Z = 0, $ = X; Z < $.length; Z++) {
                        (l = Da(G, (j = $[Z]) < N ? j - N + 7 : j - N)), (c = m(d(l), h(l), u(l) + 7 * F * v)) < k && R < M ? c >= y && K() : (V = !1);
                    }
                    F++;
                }
                break;
            case "monthly":
                for (; V; ) {
                    var Q = _(b, x + F * v);
                    if (Y) J(m(b, x + F * v, 1), m(b, x + F * v + 1, 1));
                    else
                        for (var ee = 0, te = I; ee < te.length; ee++) {
                            var ne = te[ee];
                            (c = m(b, x + F * v, (ce = +ne) < 0 ? Q + ce + 1 : ce)) < k && R < M ? Q >= ne && c >= y && K() : (V = !1);
                        }
                    F++;
                }
                break;
            case "yearly":
                for (; V; ) {
                    for (var ae = 0, se = L; ae < se.length; ae++) {
                        var re = +se[ae];
                        Q = _(b + F * v, re - 1);
                        if (Y) J(m(b + F * v, re - 1, 1), m(b + F * v, re, 1));
                        else
                            for (var oe = 0, le = I; oe < le.length; oe++) {
                                var ce;
                                ne = le[oe];
                                (c = m(b + F * v, re - 1, (ce = +ne) < 0 ? Q + ce + 1 : ce)) < k && R < M ? Q >= ne && c >= y && K() : (V = !1);
                            }
                    }
                    F++;
                }
        }
        return S ? A : w ? W : H;
    }
    function qi(e, t, n, a, i) {
        var r = {},
            o = a.timezonePlugin,
            l = a.dataTimezone || a.displayTimezone,
            c = o ? { displayTimezone: l, timezonePlugin: o } : a;
        if (e) {
            for (var d = 0, h = e; d < h.length; d++) {
                var u = h[d],
                    m = Wi(u),
                    _ = va(m, u.allDay ? ie : a);
                if (u.recurring)
                    for (
                        var p = Gn.test(m) ? null : va(m),
                            v = Da(t, -1),
                            f = Da(n, 1),
                            g = Gi(u.recurring, p, v, f, a, u.recurringException, u.recurringExceptionRule),
                            y = pa(u.allDay ? ie : c, _),
                            b = u.end ? va(u.end, u.allDay ? ie : a) : y,
                            x = +b - +y,
                            T = 0,
                            D = g;
                        T < D.length;
                        T++
                    ) {
                        var C = D[T],
                            S = C.d,
                            w = s({}, u);
                        if (
                            (u.start
                                ? (w.start = pa(u.allDay ? ie : c, S.getFullYear(), S.getMonth(), S.getDate(), y.getHours(), y.getMinutes(), y.getSeconds()))
                                : ((w.allDay = !0), (w.start = pa(ie, S.getFullYear(), S.getMonth(), S.getDate()))),
                            u.end)
                        ) {
                            if (u.allDay) {
                                var k = Da(S, ia(y, b));
                                w.end = new Date(k.getFullYear(), k.getMonth(), k.getDate(), b.getHours(), b.getMinutes(), b.getSeconds());
                            } else w.end = pa(c, +w.start + x);
                            "00:00" === u.end && w.end.setHours(23, 59, 59, 999);
                        }
                        (w.nr = C.i), (w.occurrenceId = w.id + "_" + na(w.start)), (w.original = u), w.start && w.end ? Fi(r, w, a, i) : Ri(r, S, w);
                    }
                else u.start && u.end ? Fi(r, u, a, i) : _ && Ri(r, _, u);
            }
            return r;
        }
    }
    function Zi(e, t, n, a, s, i) {
        var r = na(t);
        if ((s && +t < s) || (i && +t > i)) return !0;
        if (a && a[r]) return !1;
        var o = n && n[r];
        if (o)
            for (var l = 0, c = o; l < c.length; l++) {
                var d = c[l],
                    h = d.start,
                    u = d.end,
                    m = d.allDay;
                if (!h || !u || m) return d;
                var _ = ta(e, m, h, u),
                    p = Qn(e, t),
                    v = ea(e, _);
                if (!la(h, u) && (+h == +p || +_ == +v || (!la(t, h) && !la(t, u) && t > h && t < u))) return d;
            }
        return !1;
    }
    function $i(e, t, n, a, s, i, r) {
        var o,
            l,
            c = !0,
            d = !0,
            h = 0,
            u = 0;
        +e < n && (e = pa(t, n)), +e > a && (e = pa(t, a));
        var m = t.getYear(e),
            _ = t.getMonth(e),
            p = t.getDate(m, _ - 1, 1),
            v = t.getDate(m, _ + 2, 1),
            f = +p > n ? +p : n,
            g = +v < a ? +v : a;
        if ((s || ((i = qi(t.valid, p, v, t, !0)), (s = qi(t.invalid, p, v, t, !0))), !Zi(t, e, s, i, n, a))) return e;
        for (o = e, l = e; c && +o < g && h < 100; ) (c = Zi(t, (o = Da(o, 1)), s, i, n, a)), h++;
        for (; d && +l > f && u < 100; ) (d = Zi(t, (l = Da(l, -1)), s, i, n, a)), u++;
        return c && d ? e : 1 !== r || c ? (-1 !== r || d ? (ca(e, o, t) ? o : ca(e, l, t) ? l : u >= h && !c ? o : l) : l) : o;
    }
    var Qi = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            a(t, e),
            (t.prototype._isActive = function (e) {
                return this.s.isActive && e === this.s.activeDate;
            }),
            (t.prototype._isInvalid = function (e) {
                var t = this.s;
                return Zi(t, ma(t, new Date(e)), t.invalid, t.valid, +t.min, +t.max);
            }),
            (t.prototype._isSelected = function (e) {
                var t = new Date(e),
                    n = ma(this.s, t);
                return !!this.s.selectedDates[+n];
            }),
            (t.prototype._getWeekNr = function (e, t) {
                var n = new Date(t);
                return "" + e.getWeekNumber(e.getDate(n.getFullYear(), n.getMonth(), n.getDate() + ((7 - e.firstDay + 1) % 7)));
            }),
            (t.prototype._render = function (e) {
                var t = e.weeks,
                    n = e.firstDay,
                    a = new Date(e.firstPageDay),
                    s = e.getYear(a),
                    i = e.getMonth(a),
                    r = e.getDay(a),
                    o = e.getDate(s, i, r).getDay(),
                    l = n - o > 0 ? 7 : 0,
                    c = [],
                    d = 0;
                (this._rowHeights = []), (this._rows = []), (this._days = Array.apply(0, Array(7)));
                for (var h = 0; h < 7 * t; h++) {
                    var u = e.getDate(s, i, h + n - l - o + r),
                        m = na(u),
                        _ = e.getMonth(u),
                        p = _ !== i && "week" !== e.calendarType,
                        v = e.marked && e.marked[m],
                        f = v ? (e.showSingleMark ? [{}] : v) : null,
                        g = e.labels && e.labels[m],
                        y = g ? g.data.length : 0,
                        b = h % 7 == 0;
                    if (e.variableRow) {
                        if (b && p && h) break;
                        y > d && (d = y), h % 7 == 6 && (this._rowHeights.push(d * (e.labelHeight || 20) + (e.cellTextHeight || 0) + 3), (d = 0));
                    }
                    b && ((c = []), this._rows.push(c)),
                        c.push({
                            colors: e.colors && e.colors[m],
                            date: +u,
                            day: e.dayNames[u.getDay()],
                            display: !p || e.showOuter,
                            labels: g,
                            marks: f,
                            month: e.monthNames[_],
                            monthShort: e.monthNamesShort[_],
                            outer: p,
                            text: e.getDay(u),
                            year: e.getYear(u),
                        });
                }
            }),
            t
        );
    })(Ua);
    var er = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            a(t, e),
            (t.prototype._template = function (e) {
                return (function (e, t) {
                    var n = e.showWeekNumbers,
                        a = e.showWeekDays ? Hn(Oi, { dayNamesShort: e.dayNamesShort, firstDay: e.firstDay, rtl: t._rtl, showWeekNumbers: n, theme: t._theme }) : null;
                    return Hn(
                        "div",
                        { "aria-hidden": e.isActive ? ie : "true", className: "mbsc-calendar-table mbsc-flex-col mbsc-flex-1-1" + (e.isActive ? " mbsc-calendar-table-active" : "") },
                        a,
                        t._rows.map(function (a, s) {
                            var i = n ? t._getWeekNr(e, a[0].date) : "";
                            return Hn(
                                "div",
                                { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: s, style: { minHeight: t._rowHeights[s] } },
                                n &&
                                    Hn(
                                        "div",
                                        { className: "mbsc-calendar-cell mbsc-flex-none mbsc-calendar-day mbsc-calendar-week-nr" + t._theme },
                                        Hn("div", { "aria-hidden": "true" }, i),
                                        Hn("div", { className: "mbsc-hidden-content" }, e.weekText.replace("{count}", i))
                                    ),
                                a.map(function (n, a) {
                                    return Hn(Yi, {
                                        active: n.display && t._isActive(n.date),
                                        amText: e.amText,
                                        clickToCreate: e.clickToCreate,
                                        colors: n.colors,
                                        date: n.date,
                                        day: n.day,
                                        disabled: t._isInvalid(n.date),
                                        display: n.display,
                                        dataTimezone: e.dataTimezone,
                                        displayTimezone: e.displayTimezone,
                                        dragData: e.dragData,
                                        dragToCreate: e.dragToCreate,
                                        dragToResize: e.dragToResize,
                                        dragToMove: e.dragToMove,
                                        eventText: e.eventText,
                                        eventsText: e.eventsText,
                                        exclusiveEndDates: e.exclusiveEndDates,
                                        firstDay: e.firstDay,
                                        hasMarks: e.hasMarks,
                                        hoverEnd: e.hoverEnd,
                                        hoverStart: e.hoverStart,
                                        isActiveMonth: e.isActive,
                                        isPicker: e.isPicker,
                                        key: n.date,
                                        labels: n.labels,
                                        pmText: e.pmText,
                                        marks: n.marks,
                                        month: n.month,
                                        monthShort: n.monthShort,
                                        onDayClick: e.onDayClick,
                                        onDayDoubleClick: e.onDayDoubleClick,
                                        onDayRightClick: e.onDayRightClick,
                                        onLabelClick: e.onLabelClick,
                                        onLabelDoubleClick: e.onLabelDoubleClick,
                                        onLabelRightClick: e.onLabelRightClick,
                                        onLabelHoverIn: e.onLabelHoverIn,
                                        onLabelHoverOut: e.onLabelHoverOut,
                                        onLabelDelete: e.onLabelDelete,
                                        onLabelUpdateStart: e.onLabelUpdateStart,
                                        onLabelUpdateMove: e.onLabelUpdateMove,
                                        onLabelUpdateEnd: e.onLabelUpdateEnd,
                                        onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                        onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                        outer: n.outer,
                                        renderDay: e.renderDay,
                                        renderDayContent: e.renderDayContent,
                                        renderLabel: e.renderLabel,
                                        renderLabelContent: e.renderLabelContent,
                                        rangeEnd: e.rangeEnd,
                                        rangeStart: e.rangeStart,
                                        resourcesMap: e.resourcesMap,
                                        selectedEventsMap: e.selectedEventsMap,
                                        rtl: e.rtl,
                                        showEventTooltip: e.showEventTooltip,
                                        selected: t._isSelected(n.date),
                                        text: n.text,
                                        theme: e.theme,
                                        timeFormat: e.timeFormat,
                                        timezonePlugin: e.timezonePlugin,
                                        todayText: e.todayText,
                                        type: "day",
                                        year: n.year,
                                        onHoverIn: e.onDayHoverIn,
                                        onHoverOut: e.onDayHoverOut,
                                    });
                                })
                            );
                        })
                    );
                })(e, this);
            }),
            t
        );
    })(Qi);
    function tr(e, t, n, a) {
        var s;
        if (!(t < n || t > a)) {
            if (de(e)) {
                var i = e.length,
                    r = t % i;
                s = e[r >= 0 ? r : r + i];
            } else s = e(t);
            return s;
        }
    }
    var nr = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._currPos = 0),
                (t._delta = 0),
                (t._endPos = 0),
                (t._lastRaf = 0),
                (t._maxSnapScroll = 0),
                (t._margin = 0),
                (t._scrollEnd = we(function () {
                    wt(t._raf), (t._raf = !1), t._onEnd(), (t._hasScrolled = !1);
                }, 200)),
                (t._setInnerEl = function (e) {
                    t._innerEl = e;
                }),
                (t._setScrollEl = function (e) {
                    t._scrollEl = e;
                }),
                (t._setScrollEl3d = function (e) {
                    t._scrollEl3d = e;
                }),
                (t._setScrollbarEl = function (e) {
                    t._scrollbarEl = e;
                }),
                (t._setScrollbarContEl = function (e) {
                    t._scrollbarContEl = e;
                }),
                (t._onStart = function (e) {
                    var n = t.s;
                    t._hook("onStart", {}),
                        (n.changeOnEnd && t._isScrolling) ||
                            (!n.mouseSwipe && !e.isTouch) ||
                            !n.swipe ||
                            ((t._started = !0),
                            (t._hasScrolled = t._isScrolling),
                            (t._currX = e.startX),
                            (t._currY = e.startY),
                            (t._delta = 0),
                            (t._velocityX = 0),
                            (t._velocityY = 0),
                            (t._startPos = Wt(t._scrollEl, t._isVertical)),
                            (t._timestamp = +new Date()),
                            t._isScrolling && (wt(t._raf), (t._raf = !1), t._scroll(t._startPos)));
                }),
                (t._onMove = function (e) {
                    var n = e.domEvent,
                        a = t.s;
                    t._isVertical || a.scrollLock || t._hasScrolled ? n.cancelable && n.preventDefault() : n.type === ms && (Math.abs(e.deltaY) > 7 || !a.swipe) && (t._started = !1),
                        t._started &&
                            ((t._delta = t._isVertical ? e.deltaY : e.deltaX),
                            (t._hasScrolled || Math.abs(t._delta) > t._threshold) &&
                                (t._hasScrolled || t._hook("onGestureStart", {}),
                                (t._hasScrolled = !0),
                                (t._isScrolling = !0),
                                t._raf ||
                                    (t._raf = St(function () {
                                        return t._move(e);
                                    }))));
                }),
                (t._onEnd = function () {
                    if (((t._started = !1), t._hasScrolled)) {
                        var e,
                            n = t.s,
                            a = 17 * (t._isVertical ? t._velocityY : t._velocityX),
                            s = t._maxSnapScroll,
                            i = t._delta;
                        (i += a * a * 0.5 * (a < 0 ? -1 : 1)), s && (i = ce(i, -t._round * s, t._round * s));
                        var r = ce(Te((t._startPos + i) / t._round) * t._round, t._min, t._max),
                            o = Te((-r * t._rtlNr) / n.itemSize) + t._offset,
                            l = i > 0 ? (t._isVertical ? 270 : 360) : t._isVertical ? 90 : 180,
                            c = o - n.selectedIndex;
                        (e = n.time || Math.max(1e3, 3 * Math.abs(r - t._currPos))),
                            t._hook("onGestureEnd", { direction: l, index: o }),
                            (t._delta = 0),
                            t._scroll(r, e),
                            c && !n.changeOnEnd && (t._hook("onIndexChange", { index: o, diff: c }), n.selectedIndex === t._prevIndex && n.selectedIndex !== o && t.forceUpdate());
                    }
                }),
                (t._onClick = function (e) {
                    t._hasScrolled && ((t._hasScrolled = !1), e.stopPropagation(), e.preventDefault());
                }),
                (t._onScroll = function (e) {
                    (e.target.scrollTop = 0), (e.target.scrollLeft = 0);
                }),
                (t._onMouseWheel = function (e) {
                    var n = t._isVertical ? (e.deltaY === ie ? e.wheelDelta || e.detail : e.deltaY) : e.deltaX;
                    if (t._el.contains(e.target) && n && t.s.mousewheel) {
                        if (
                            (e.preventDefault(),
                            t._hook("onStart", {}),
                            t._started || ((t._delta = 0), (t._velocityX = 0), (t._velocityY = 0), (t._startPos = t._currPos), t._hook("onGestureStart", {})),
                            e.deltaMode && 1 === e.deltaMode && (n *= 15),
                            (n = ce(-n, -t._scrollSnap, t._scrollSnap)),
                            (t._delta += n),
                            t._maxSnapScroll && Math.abs(t._delta) > t._round * t._maxSnapScroll && (n = 0),
                            t._startPos + t._delta < t._min && ((t._startPos = t._min), (t._delta = 0), (n = 0)),
                            t._startPos + t._delta > t._max && ((t._startPos = t._max), (t._delta = 0), (n = 0)),
                            t._raf ||
                                (t._raf = St(function () {
                                    return t._move();
                                })),
                            !n && t._started)
                        )
                            return;
                        (t._hasScrolled = !0), (t._isScrolling = !0), (t._started = !0), t._scrollEnd();
                    }
                }),
                (t._onTrackStart = function (e) {
                    e.stopPropagation();
                    var n = { domEvent: e, startX: gs(e, "X", !0), startY: gs(e, "Y", !0) };
                    if ((t._onStart(n), (t._trackStartX = n.startX), (t._trackStartY = n.startY), e.target === t._scrollbarEl)) Ot(t._doc, rs, t._onTrackEnd), Ot(t._doc, is, t._onTrackMove);
                    else {
                        var a = Kt(t._scrollbarContEl).top,
                            s = (n.startY - a) / t._barContSize;
                        (t._startPos = t._currPos = t._max + (t._min - t._max) * s), (t._hasScrolled = !0), t._onEnd();
                    }
                }),
                (t._onTrackMove = function (e) {
                    var n = t._barContSize,
                        a = gs(e, "X", !0),
                        s = gs(e, "Y", !0),
                        i = (t._isVertical ? s - t._trackStartY : a - t._trackStartX) / n;
                    t._isInfinite ? (t._delta = -(t._maxSnapScroll * t._round * 2 + n) * i) : (t._delta = (t._min - t._max - n) * i),
                        (t._hasScrolled || Math.abs(t._delta) > t._threshold) &&
                            (t._hasScrolled || t._hook("onGestureStart", {}),
                            (t._hasScrolled = !0),
                            (t._isScrolling = !0),
                            t._raf ||
                                (t._raf = St(function () {
                                    return t._move({ endX: a, endY: s }, !t._isInfinite);
                                })));
                }),
                (t._onTrackEnd = function () {
                    (t._delta = 0), (t._startPos = t._currPos), t._onEnd(), Pt(t._doc, rs, t._onTrackEnd), Pt(t._doc, is, t._onTrackMove);
                }),
                (t._onTrackClick = function (e) {
                    e.stopPropagation();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype._render = function (e, t) {
                var n = this._prevS,
                    a = e.batchSize,
                    s = e.batchSize3d,
                    i = e.itemNr || 1,
                    r = e.itemSize,
                    o = e.selectedIndex,
                    l = n.selectedIndex,
                    c = t.index === ie ? o : t.index,
                    d = [],
                    h = [],
                    u = o - l,
                    m = c - this._currIndex,
                    _ = e.minIndex,
                    p = e.maxIndex,
                    v = e.items,
                    f = e.offset;
                (this._currIndex = c), (this._isVertical = "Y" === e.axis), (this._threshold = this._isVertical ? e.thresholdY : e.thresholdX), (this._rtlNr = !this._isVertical && e.rtl ? -1 : 1), (this._round = e.snap ? r : 1);
                for (var g = this._round; g > 44; ) g /= 2;
                if (((this._scrollSnap = Te(44 / g) * g), v)) {
                    for (var y = c - a; y < c + i + a; y++) d.push({ key: y, data: tr(v, y, _, p) });
                    if (e.scroll3d) for (y = c - s; y < c + i + s; y++) h.push({ key: y, data: tr(v, y, _, p) });
                    (this.visibleItems = d), (this.visible3dItems = h), (this._maxSnapScroll = a), (this._isInfinite = "function" == typeof v);
                }
                this._offset === ie && (this._offset = o);
                var b = -(o - this._offset) * r * this._rtlNr;
                if (Math.abs(u) > a && b !== this._endPos) {
                    var x = u + a * (u > 0 ? -1 : 1);
                    (this._offset += x), (this._margin -= x);
                }
                if (
                    (f && f !== n.offset && ((this._offset += f), (this._margin -= f)),
                    m && (this._margin += m),
                    (this._max = _ !== ie ? -(_ - this._offset) * r * this._rtlNr : 1 / 0),
                    (this._min = p !== ie ? -(p - this._offset - (e.spaceAround ? 0 : i - 1)) * r * this._rtlNr : -1 / 0),
                    -1 === this._rtlNr)
                ) {
                    var T = this._min;
                    (this._min = this._max), (this._max = T);
                }
                this._min > this._max && (this._min = this._max);
                var D = e.visibleSize * r;
                (this._barContSize = D), (this._barSize = Math.max(20, (D * D) / (this._max - this._min + D))), (this._cssClass = this._className + " mbsc-ltr");
            }),
            (t.prototype._mounted = function () {
                (this._doc = zt(this._el)),
                    Ot(this._el, Za, this._onClick, !0),
                    Ot(this.s.scroll3d ? this._innerEl : this._el, hs, this._onScroll),
                    Ot(this._doc, cs, this._onMouseWheel, { passive: !1, capture: !0 }),
                    Ot(this._doc, vs, this._onMouseWheel, { passive: !1, capture: !0 }),
                    Ot(this._scrollbarContEl, ss, this._onTrackStart),
                    Ot(this._scrollbarContEl, Za, this._onTrackClick),
                    (this._unlisten = Ss(this._el, { onEnd: this._onEnd, onMove: this._onMove, onStart: this._onStart, prevDef: !0 }));
            }),
            (t.prototype._updated = function () {
                var e = this.s,
                    t = e.batchSize,
                    n = e.itemSize,
                    a = e.selectedIndex,
                    s = this._prevIndex,
                    i = !e.prevAnim && ((s !== ie && s !== a) || this._isAnimating),
                    r = -(a - this._offset) * n * this._rtlNr;
                e.margin && (this._scrollEl.style.marginTop = this._isVertical ? (this._margin - t) * n + "px" : ""), this._started || this._scroll(r, i ? this._isAnimating || e.time || 1e3 : 0), (this._prevIndex = a);
            }),
            (t.prototype._destroy = function () {
                Pt(this._el, Za, this._onClick, !0),
                    Pt(this.s.scroll3d ? this._innerEl : this._el, hs, this._onScroll),
                    Pt(this._doc, cs, this._onMouseWheel, { passive: !1, capture: !0 }),
                    Pt(this._doc, vs, this._onMouseWheel, { passive: !1, capture: !0 }),
                    Pt(this._scrollbarContEl, ss, this._onTrackStart),
                    Pt(this._scrollbarContEl, Za, this._onTrackClick),
                    wt(this._raf),
                    (this._raf = !1),
                    this._scroll(0),
                    this._unlisten();
            }),
            (t.prototype._anim = function (e) {
                var t = this;
                return (this._raf = St(function () {
                    var n = t.s,
                        a = +new Date();
                    if (t._raf) {
                        if ((t._currPos - t._endPos) * -e < 4)
                            return (
                                (t._currPos = t._endPos),
                                (t._raf = !1),
                                (t._isAnimating = 0),
                                (t._isScrolling = !1),
                                t._infinite(t._currPos),
                                t._hook("onAnimationEnd", {}),
                                void t._scrollbarContEl.classList.remove("mbsc-scroller-bar-started")
                            );
                        a - t._lastRaf > 100 && ((t._lastRaf = a), (t._currPos = Wt(t._scrollEl, t._isVertical)), n.changeOnEnd || t._infinite(t._currPos)), (t._raf = t._anim(e));
                    }
                }));
            }),
            (t.prototype._infinite = function (e) {
                var t = this.s;
                if (t.itemSize) {
                    var n = Te((-e * this._rtlNr) / t.itemSize) + this._offset,
                        a = n - this._currIndex;
                    a && (t.changeOnEnd ? this._hook("onIndexChange", { index: n, diff: a }) : this.setState({ index: n }));
                }
            }),
            (t.prototype._scroll = function (e, t) {
                var n = this.s,
                    a = n.itemSize,
                    s = this._isVertical,
                    i = this._scrollEl.style,
                    r = It ? It + "T" : "t",
                    o = t ? Lt + "transform " + Te(t) + "ms " + n.easing : "";
                if (((i[r + "ransform"] = "translate3d(" + (s ? "0," + e + "px," : e + "px,0,") + "0)"), (i[r + "ransition"] = o), (this._endPos = e), n.scroll3d)) {
                    var l = this._scrollEl3d.style,
                        c = 360 / (2 * n.batchSize3d);
                    (l[r + "ransform"] = "translateY(-50%) rotateX(" + (-e / a) * c + "deg)"), (l[r + "ransition"] = o);
                }
                if (this._scrollbarEl) {
                    var d = this._scrollbarEl.style,
                        h = this._isInfinite ? (this._maxSnapScroll * this._round - this._delta) / (this._maxSnapScroll * this._round * 2) : (e - this._max) / (this._min - this._max),
                        u = ce((this._barContSize - this._barSize) * h, 0, this._barContSize - this._barSize);
                    (d[r + "ransform"] = "translate3d(" + (s ? "0," + u + "px," : u + "px,0,") + "0)"), (d[r + "ransition"] = o);
                }
                t
                    ? (wt(this._raf), (this._isAnimating = t), this._scrollbarContEl.classList.add("mbsc-scroller-bar-started"), (this._raf = this._anim(e > this._currPos ? 1 : -1)))
                    : ((this._currPos = e), n.changeOnEnd || this._infinite(e));
            }),
            (t.prototype._move = function (e, t) {
                var n = this._currX,
                    a = this._currY,
                    s = this._timestamp,
                    i = this._maxSnapScroll;
                if (e) {
                    (this._currX = e.endX), (this._currY = e.endY), (this._timestamp = +new Date());
                    var r = this._timestamp - s;
                    if (r > 0 && r < 100) {
                        var o = (this._currX - n) / r,
                            l = (this._currY - a) / r;
                        (this._velocityX = 0.7 * o + 0.3 * this._velocityX), (this._velocityY = 0.7 * l + 0.3 * this._velocityY);
                    }
                }
                i && !t && (this._delta = ce(this._delta, -this._round * i, this._round * i)), this._scroll(ce(this._startPos + this._delta, this._min - this.s.itemSize, this._max + this.s.itemSize)), (this._raf = !1);
            }),
            (t.defaults = {
                axis: "Y",
                batchSize: 40,
                easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                mouseSwipe: !0,
                mousewheel: !0,
                prevDef: !0,
                selectedIndex: 0,
                spaceAround: !0,
                stopProp: !0,
                swipe: !0,
                thresholdX: 10,
                thresholdY: 5,
            }),
            t
        );
    })(Ua);
    var ar = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a;
                        return (
                            e.itemRenderer &&
                                ((n = t.visibleItems.map(function (n) {
                                    return e.itemRenderer(n, t._offset);
                                })),
                                e.scroll3d &&
                                    (a = t.visible3dItems.map(function (n) {
                                        return e.itemRenderer(n, t._offset, !0);
                                    }))),
                            Hn(
                                "div",
                                { ref: t._setEl, className: t._cssClass, style: e.styles },
                                Hn("div", { ref: t._setInnerEl, className: e.innerClass, style: e.innerStyles }, Hn("div", { ref: t._setScrollEl, className: "mbsc-scrollview-scroll" + t._rtl }, n)),
                                e.scroll3d && Hn("div", { ref: t._setScrollEl3d, style: { height: e.itemSize + "px" }, className: "mbsc-scroller-items-3d" }, a),
                                Hn(
                                    "div",
                                    {
                                        ref: t._setScrollbarContEl,
                                        className: "mbsc-scroller-bar-cont " + t._rtl + (e.scrollBar && t._barSize !== t._barContSize ? "" : " mbsc-scroller-bar-hidden") + (t._started ? " mbsc-scroller-bar-started" : ""),
                                    },
                                    Hn("div", { className: "mbsc-scroller-bar" + t._theme, ref: t._setScrollbarEl, style: { height: t._barSize + "px" } })
                                )
                            )
                        );
                    })(e, this, e.children);
                }),
                t
            );
        })(nr),
        sr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.state = { height: "sm", pageSize: 0, pickerSize: 0, width: "sm" }),
                    (t._dim = {}),
                    (t._months = [1, 2, 3]),
                    (t._title = []),
                    (t.MONTH_VIEW = Rs),
                    (t.YEAR_VIEW = As),
                    (t.MULTI_YEAR_VIEW = Ws),
                    (t.nextPage = function () {
                        switch ((t._prevDocClick(), t._view)) {
                            case Ws:
                                t._activeYearsChange(1);
                                break;
                            case As:
                                t._activeYearChange(1);
                                break;
                            default:
                                t._activeChange(1);
                        }
                    }),
                    (t.prevPage = function () {
                        switch ((t._prevDocClick(), t._view)) {
                            case Ws:
                                t._activeYearsChange(-1);
                                break;
                            case As:
                                t._activeYearChange(-1);
                                break;
                            default:
                                t._activeChange(-1);
                        }
                    }),
                    (t._changeView = function (e) {
                        var n = t.s,
                            a = t._view,
                            s = t._hasPicker,
                            i = n.selectView,
                            r = "year" === (n.showCalendar ? n.calendarType : n.eventRange);
                        if (!e) {
                            switch (a) {
                                case Rs:
                                    e = Ws;
                                    break;
                                case Ws:
                                    e = As;
                                    break;
                                default:
                                    e = s || i === As ? Ws : Rs;
                            }
                            a === Ws && r && (e = Rs);
                        }
                        var o = s && e === i;
                        t.setState({ view: e, viewClosing: o ? ie : a, viewOpening: o ? ie : e });
                    }),
                    (t._onDayHoverIn = function (e) {
                        t._disableHover ||
                            (t._hook("onDayHoverIn", e),
                            (t._hoverTimer = setTimeout(function () {
                                var n = na(e.date);
                                t._labels && (e.labels = t._labels[n]), t._marked && (e.marked = t._marked[n]), (t._isHover = !0), t._hook("onCellHoverIn", e);
                            }, 150)));
                    }),
                    (t._onDayHoverOut = function (e) {
                        if (!t._disableHover && (t._hook("onDayHoverOut", e), clearTimeout(t._hoverTimer), t._isHover)) {
                            var n = na(e.date);
                            t._labels && (e.labels = t._labels[n]), t._marked && (e.marked = t._marked[n]), (t._isHover = !1), t._hook("onCellHoverOut", e);
                        }
                    }),
                    (t._onLabelClick = function (e) {
                        (t._isLabelClick = !0), t._hook("onLabelClick", e);
                    }),
                    (t._onDayClick = function (e) {
                        (t._shouldFocus = !t._isLabelClick), (t._prevAnim = !1), (t._isLabelClick = !1), t._hook("onDayClick", e);
                    }),
                    (t._onTodayClick = function (e) {
                        (t._prevAnim = !1), t._hook("onActiveChange", { date: +_a(pa(t.s)), today: !0 }), t._hook("onTodayClick", {});
                    }),
                    (t._onMonthClick = function (e) {
                        if (!e.disabled) {
                            var n = e.date,
                                a = t.s;
                            if (a.selectView === As) t._hook("onDayClick", e);
                            else {
                                var s = Ks(n, a);
                                t._changeView(Rs), (t._shouldFocus = !0), (t._prevAnim = !t._hasPicker), t._hook("onActiveChange", { date: +n, nav: !0, pageChange: s !== t._pageIndex });
                            }
                        }
                    }),
                    (t._onYearClick = function (e) {
                        if (!e.disabled) {
                            var n = e.date,
                                a = t.s,
                                s = a.selectView;
                            if (s === Ws) t._hook("onDayClick", e);
                            else if (((t._shouldFocus = !0), (t._prevAnim = s === As), (t._activeMonth = +n), t._changeView(), "year" === (a.showCalendar ? a.calendarType : a.eventRange))) {
                                var i = Ks(n, a);
                                t._hook("onActiveChange", { date: +n, pageChange: i !== t._pageIndex });
                            }
                        }
                    }),
                    (t._onPageChange = function (e) {
                        (t._isSwipeChange = !0), t._activeChange(e.diff);
                    }),
                    (t._onYearPageChange = function (e) {
                        t._activeYearChange(e.diff);
                    }),
                    (t._onYearsPageChange = function (e) {
                        t._activeYearsChange(e.diff);
                    }),
                    (t._onAnimationEnd = function (e) {
                        (t._disableHover = !1), t._isIndexChange && (t._pageLoaded(), (t._isIndexChange = !1));
                    }),
                    (t._onStart = function () {
                        clearTimeout(t._hoverTimer);
                    }),
                    (t._onGestureStart = function (e) {
                        (t._disableHover = !0), t._hook("onGestureStart", e);
                    }),
                    (t._onGestureEnd = function (e) {
                        t._prevDocClick();
                    }),
                    (t._onPickerClose = function () {
                        t.setState({ view: Rs });
                    }),
                    (t._onPickerOpen = function () {
                        var e = t._pickerCont.clientHeight,
                            n = t._pickerCont.clientWidth;
                        t.setState({ pickerSize: t._isVertical ? e : n });
                    }),
                    (t._onPickerBtnClick = function (e) {
                        t._view === Rs && (t._pickerBtn = e.currentTarget), t._prevDocClick(), t._changeView();
                    }),
                    (t._onDocClick = function (e) {
                        var n = t.s.selectView;
                        t._prevClick || t._hasPicker || t._view === n || !t._pickerCont || t._pickerCont.contains(e.target) || t._changeView(n);
                    }),
                    (t._onViewAnimationEnd = function () {
                        t.state.viewClosing && t.setState({ viewClosing: ie }), t.state.viewOpening && t.setState({ viewOpening: ie });
                    }),
                    (t._onResize = function () {
                        if (t._body && m) {
                            var e = t.s,
                                n = t.state,
                                a = e.showCalendar,
                                s = a && t.__getTextParam ? t._body.querySelector(".mbsc-calendar-body-inner") : t._body,
                                i = t._el.offsetWidth,
                                r = t._el.offsetHeight,
                                o = s.clientHeight,
                                l = s.clientWidth,
                                c = t._isVertical ? o : l,
                                d = t._hasPicker ? n.pickerSize : c,
                                h = a !== ie,
                                u = "sm",
                                _ = "sm",
                                p = 1,
                                v = !1,
                                f = 0,
                                g = 0;
                            if ((e.responsiveStyle && !t._isGrid && (o > 300 && (_ = "md"), l > 767 && (u = "md")), u !== n.width || _ !== n.height)) (t._shouldCheckSize = !0), t.setState({ width: u, height: _ });
                            else {
                                if (t._labels && a && t.__getTextParam) {
                                    var y = s.querySelector(".mbsc-calendar-text"),
                                        b = s.querySelector(".mbsc-calendar-day-inner"),
                                        x = b.querySelector(".mbsc-calendar-labels"),
                                        T = y ? Vt(y, "marginBottom") : 2,
                                        D = y ? y.offsetHeight : 18;
                                    (f = x.offsetTop), (v = s.scrollHeight > s.clientHeight), (g = D + T), (p = Math.max(1, Ce((b.clientHeight - f) / g)));
                                }
                                t._hook("onResize", { height: r, target: t._el, width: i }), (e.navigationService.pageSize = c);
                                var C = t._shouldPageLoad ? (n.update || 0) + 1 : n.update;
                                t.setState({ cellTextHeight: f, hasScrollY: v, labelHeight: g, maxLabels: p, pageSize: c, pickerSize: d, ready: h, update: C });
                            }
                        }
                    }),
                    (t._onKeyDown = function (e) {
                        var n,
                            a = t.s,
                            s = t._view,
                            i = s === Rs ? t._active : t._activeMonth,
                            r = new Date(i),
                            o = a.getYear(r),
                            l = a.getMonth(r),
                            c = a.getDay(r),
                            d = a.getDate,
                            h = a.weeks,
                            u = "month" === a.calendarType;
                        if (s === Ws) {
                            var m = void 0;
                            switch (e.keyCode) {
                                case Ls:
                                    m = o - 1 * t._rtlNr;
                                    break;
                                case Ys:
                                    m = o + 1 * t._rtlNr;
                                    break;
                                case Hs:
                                    m = o - 3;
                                    break;
                                case Os:
                                    m = o + 3;
                                    break;
                                case Is:
                                    m = t._getPageYears(t._yearsIndex);
                                    break;
                                case Ns:
                                    m = t._getPageYears(t._yearsIndex) + 11;
                                    break;
                                case Ms:
                                    m = o - 12;
                                    break;
                                case Es:
                                    m = o + 12;
                            }
                            m && t._minYears <= m && t._maxYears >= m && (e.preventDefault(), (t._shouldFocus = !0), (t._prevAnim = !1), (t._activeMonth = +d(m, 0, 1)), t.forceUpdate());
                        } else if (s === As) {
                            switch (e.keyCode) {
                                case Ls:
                                    n = d(o, l - 1 * t._rtlNr, 1);
                                    break;
                                case Ys:
                                    n = d(o, l + 1 * t._rtlNr, 1);
                                    break;
                                case Hs:
                                    n = d(o, l - 3, 1);
                                    break;
                                case Os:
                                    n = d(o, l + 3, 1);
                                    break;
                                case Is:
                                    n = d(o, 0, 1);
                                    break;
                                case Ns:
                                    n = d(o, 11, 1);
                                    break;
                                case Ms:
                                    n = d(o - 1, l, 1);
                                    break;
                                case Es:
                                    n = d(o + 1, l, 1);
                            }
                            n && t._minYear <= n && t._maxYear >= n && (e.preventDefault(), (t._shouldFocus = !0), (t._prevAnim = !1), (t._activeMonth = +n), t.forceUpdate());
                        } else if (s === Rs) {
                            switch (e.keyCode) {
                                case Ls:
                                    n = d(o, l, c - 1 * t._rtlNr);
                                    break;
                                case Ys:
                                    n = d(o, l, c + 1 * t._rtlNr);
                                    break;
                                case Hs:
                                    n = d(o, l, c - 7);
                                    break;
                                case Os:
                                    n = d(o, l, c + 7);
                                    break;
                                case Is:
                                    n = d(o, l, 1);
                                    break;
                                case Ns:
                                    n = d(o, l + 1, 0);
                                    break;
                                case Ms:
                                    n = e.altKey ? d(o - 1, l, c) : u ? d(o, l - 1, c) : d(o, l, c - 7 * h);
                                    break;
                                case Es:
                                    n = e.altKey ? d(o + 1, l, c) : u ? d(o, l + 1, c) : d(o, l, c + 7 * h);
                            }
                            if (n && t._minDate <= n && t._maxDate >= n) {
                                e.preventDefault();
                                var _ = Ks(n, a);
                                (t._shouldFocus = !0), (t._prevAnim = !1), (t._pageChange = a.noOuterChange && _ !== t._pageIndex), t._hook("onActiveChange", { date: +n, pageChange: t._pageChange });
                            }
                        }
                    }),
                    (t._setHeader = function (e) {
                        t._headerElement = e;
                    }),
                    (t._setBody = function (e) {
                        t._body = e;
                    }),
                    (t._setPickerCont = function (e) {
                        t._pickerCont = e;
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._getPageDay = function (e) {
                    return +js(e, this.s);
                }),
                (t.prototype._getPageStyle = function (e, t, n) {
                    var a;
                    return ((a = {})[(It ? It + "T" : "t") + "ransform"] = "translate" + this._axis + "(" + 100 * (e - t) * this._rtlNr + "%)"), (a.width = 100 / (n || 1) + "%"), a;
                }),
                (t.prototype._getPageYear = function (e) {
                    var t = this.s,
                        n = t.refDate ? va(t.refDate) : An;
                    return t.getYear(n) + e;
                }),
                (t.prototype._getPageYears = function (e) {
                    var t = this.s,
                        n = t.refDate ? va(t.refDate) : An;
                    return t.getYear(n) + 12 * e;
                }),
                (t.prototype._getPickerClass = function (e) {
                    var t,
                        n = e === this.s.selectView ? " mbsc-calendar-picker-main" : "",
                        a = "mbsc-calendar-picker",
                        s = this._hasPicker,
                        i = this.state,
                        r = i.viewClosing,
                        o = i.viewOpening;
                    switch (e) {
                        case Rs:
                            t = s ? "" : (o === Rs ? "in-down" : "") + (r === Rs ? "out-down" : "");
                            break;
                        case Ws:
                            t = s && r === Rs ? "" : (o === Ws ? "in-up" : "") + (r === Ws ? "out-up" : "");
                            break;
                        default:
                            t = s && o === Rs ? "" : (o === As ? (r === Ws ? "in-down" : "in-up") : "") + (r === As ? (o === Ws ? "out-down" : "out-up") : "");
                    }
                    return a + n + (kt && t ? " " + a + "-" + t : "");
                }),
                (t.prototype._isNextDisabled = function (e) {
                    if (!this._hasPicker || e) {
                        var t = this._view;
                        if (t === Ws) return this._yearsIndex + 1 > this._maxYearsIndex;
                        if (t === As) return this._yearIndex + 1 > this._maxYearIndex;
                    }
                    return this._pageIndex + 1 > this._maxIndex;
                }),
                (t.prototype._isPrevDisabled = function (e) {
                    if (!this._hasPicker || e) {
                        var t = this._view;
                        if (t === Ws) return this._yearsIndex - 1 < this._minYearsIndex;
                        if (t === As) return this._yearIndex - 1 < this._minYearIndex;
                    }
                    return this._pageIndex - 1 < this._minIndex;
                }),
                (t.prototype._render = function (e, t) {
                    var n = e.getDate,
                        a = e.getYear,
                        s = e.getMonth,
                        i = e.showCalendar,
                        r = e.calendarType,
                        o = e.eventRange,
                        l = e.eventRangeSize || 1,
                        c = e.firstDay,
                        d = "week" === r,
                        h = "month" === r,
                        u = "year" === r ? 12 : e.size || 1,
                        m = u > 1 && !d,
                        _ = i ? (d ? e.weeks : 6) : 0,
                        p = e.activeDate || this._active || +new Date(),
                        v = p !== this._active,
                        f = new Date(p),
                        g = this._prevS,
                        y = e.dateFormat,
                        b = e.monthNames,
                        x = e.yearSuffix,
                        T = he(e.labelList) ? +e.labelList + 1 : "all" === e.labelList ? -1 : 0,
                        D = e.labelList !== g.labelList,
                        C = e.navigationService,
                        S = C.pageIndex,
                        w = C.firstDay,
                        k = C.lastDay,
                        M = C.viewStart,
                        E = C.viewEnd;
                    if (((this._minDate = C.minDate), (this._maxDate = C.maxDate), _e(e.min))) (this._minIndex = -1 / 0), (this._minYears = -1 / 0), (this._minYearsIndex = -1 / 0), (this._minYear = -1 / 0), (this._minYearIndex = -1 / 0);
                    else {
                        var N = aa(this._minDate);
                        (this._minDate = aa(N)), (this._minYear = n(a(N), s(N), 1)), (this._minYears = a(N)), (this._minIndex = Ks(N, e)), (this._minYearIndex = Xs(N, e)), (this._minYearsIndex = Js(N, e));
                    }
                    if (_e(e.max)) (this._maxIndex = 1 / 0), (this._maxYears = 1 / 0), (this._maxYearsIndex = 1 / 0), (this._maxYear = 1 / 0), (this._maxYearIndex = 1 / 0);
                    else {
                        var I = this._maxDate;
                        (this._maxYear = n(a(I), s(I) + 1, 1)), (this._maxYears = a(I)), (this._maxIndex = Ks(I, e)), (this._maxYearIndex = Xs(I, e)), (this._maxYearsIndex = Js(I, e));
                    }
                    var L = r !== g.calendarType || o !== g.eventRange || c !== g.firstDay || e.eventRangeSize !== g.eventRangeSize || e.refDate !== g.refDate || e.showCalendar !== g.showCalendar || e.weeks !== g.weeks;
                    if (
                        (L && this._pageIndex !== ie && (this._prevAnim = !0),
                        v && (this._activeMonth = p),
                        (this._view = t.view || e.selectView),
                        (this._yearsIndex = Js(new Date(this._activeMonth), e)),
                        (this._yearIndex = Xs(new Date(this._activeMonth), e)),
                        this._view === As)
                    )
                        this._viewTitle = this._getPageYear(this._yearIndex) + "";
                    else if (this._view === Ws) {
                        var H = this._getPageYears(this._yearsIndex);
                        this._viewTitle = H + " - " + (H + 11);
                    }
                    var Y = m ? 1 : qs(e.pages, t.pageSize),
                        O = "vertical" === e.calendarScroll && "auto" !== e.pages && (e.pages === ie || 1 === e.pages),
                        P = e.showOuterDays !== ie ? e.showOuterDays : !O && Y < 2 && (d || !u || u < 2),
                        z = y.search(/m/i),
                        V = y.search(/y/i);
                    if (m && ((this._monthsMulti = []), S !== ie)) {
                        for (var F = Ce((0.96 * t.pageSize) / 325.6) || 1; u % F; ) F--;
                        for (var R = 0; R < u / F; ++R) {
                            for (var A = [], W = 0; W < F; ++W) A.push(+n(a(w), s(w) + R * F + W, 1));
                            this._monthsMulti.push(A);
                        }
                    }
                    (r !== g.calendarType ||
                        e.theme !== g.theme ||
                        e.calendarScroll !== g.calendarScroll ||
                        e.hasContent !== g.hasContent ||
                        e.showCalendar !== g.showCalendar ||
                        e.showSchedule !== g.showSchedule ||
                        e.showWeekNumbers !== g.showWeekNumbers ||
                        e.weeks !== g.weeks ||
                        D) &&
                        (this._shouldCheckSize = !0),
                        (g.width === e.width && g.height === e.height) || (this._dim = { height: ye(e.height), width: ye(e.width) }),
                        (this._cssClass =
                            "mbsc-calendar mbsc-font" +
                            this._theme +
                            this._rtl +
                            (t.ready ? "" : " mbsc-hidden") +
                            (m ? " mbsc-calendar-grid-view" : " mbsc-calendar-height-" + t.height + " mbsc-calendar-width-" + t.width) +
                            " " +
                            e.cssClass),
                        (this._dayNames = "sm" === t.width || m ? e.dayNamesMin : e.dayNamesShort),
                        (this._isSwipeChange = !1),
                        (this._yearFirst = V < z),
                        (this._pageNr = Y),
                        (this._variableRow = T);
                    var U = e.pageLoad !== g.pageLoad,
                        B = +M != +this._viewStart || +E != +this._viewEnd;
                    if (
                        (this._pageIndex !== ie && B && (this._isIndexChange = !this._isSwipeChange && !L),
                        S !== ie && (this._pageIndex = S),
                        S !== ie && (e.marked !== g.marked || e.colors !== g.colors || e.labels !== g.labels || e.invalid !== g.invalid || e.valid !== g.valid || t.maxLabels !== this._maxLabels || B || D || U))
                    ) {
                        (this._maxLabels = t.maxLabels || 1), (this._viewStart = M), (this._viewEnd = E);
                        var j = e.labelsMap || qi(e.labels, M, E, e),
                            K = j && Zs(e, j, M, E, this._variableRow || this._maxLabels, 7, !1, c, !0, e.eventOrder, !P, e.showLabelCount, e.moreEventsText, e.moreEventsPluralText);
                        K && !this._labels && (this._shouldCheckSize = !0),
                            ((K && t.maxLabels) || !K) && (this._shouldPageLoad = !this._isIndexChange || this._prevAnim || !i || U),
                            (this._labelsLayout = K),
                            (this._labels = j),
                            (this._marked = !j && (e.marksMap || qi(e.marked, M, E, e))),
                            (this._colors = qi(e.colors, M, E, e)),
                            (this._valid = qi(e.valid, M, E, e, !0)),
                            (this._invalid = qi(e.invalid, M, E, e, !0));
                    }
                    if (B || v || o !== g.eventRange || l !== g.eventRangeSize || e.monthNames !== g.monthNames) {
                        this._title = [];
                        var J = Da(k, -1),
                            X = S === ie ? f : w;
                        if (d) {
                            X = f;
                            for (var G = 0, q = Object.keys(e.selectedDates); G < q.length; G++) {
                                var Z = q[G];
                                if (+Z >= +w && +Z < +k) {
                                    X = new Date(+Z);
                                    break;
                                }
                            }
                        }
                        if (this._pageNr > 1)
                            for (R = 0; R < Y; R++) {
                                var $ = n(a(w), s(w) + R, 1),
                                    Q = a($) + x,
                                    ee = b[s($)];
                                this._title.push({ yearTitle: Q, monthTitle: ee });
                            }
                        else {
                            var te = { yearTitle: a(X) + x, monthTitle: b[s(X)] },
                                ne = e.showSchedule && 1 === l ? o : i ? r : o,
                                ae = o && !i && (!e.showSchedule || l > 1);
                            switch (ne) {
                                case "year":
                                    (te.title = a(w) + x), l > 1 && (te.title += " - " + (a(J) + x));
                                    break;
                                case "month":
                                    if (l > 1 && !i) {
                                        var se = b[s(w)],
                                            re = a(w) + x,
                                            oe = this._yearFirst ? re + " " + se : se + " " + re,
                                            le = b[s(J)],
                                            ce = a(J) + x,
                                            de = this._yearFirst ? ce + " " + le : le + " " + ce;
                                        te.title = oe + " - " + de;
                                    } else m && (te.title = a(w) + x);
                                    break;
                                case "day":
                                case "week":
                                    if (ae) {
                                        var ue = y.search(/d/i) < z ? "D MMM, YYYY" : "MMM D, YYYY";
                                        (te.title = ya(ue, w, e)), ("week" === ne || l > 1) && (te.title += " - " + ya(ue, J, e));
                                    }
                            }
                            this._title.push(te);
                        }
                    }
                    (this._active = p),
                        (this._hasPicker = e.hasPicker || m || !h || !i || ("md" === t.width && !1 !== e.hasPicker)),
                        (this._axis = O ? "Y" : "X"),
                        (this._rtlNr = !O && e.rtl ? -1 : 1),
                        (this._weeks = _),
                        (this._nextIcon = O ? e.nextIconV : e.rtl ? e.prevIconH : e.nextIconH),
                        (this._prevIcon = O ? e.prevIconV : e.rtl ? e.nextIconH : e.prevIconH),
                        (this._mousewheel = e.mousewheel === ie ? O : e.mousewheel),
                        (this._isGrid = m),
                        (this._isVertical = O),
                        (this._showOuter = P);
                }),
                (t.prototype._mounted = function () {
                    (this._observer = vi(this._el, this._onResize, this._zone)), (this._doc = zt(this._el)), Ot(this._doc, Za, this._onDocClick);
                }),
                (t.prototype._updated = function () {
                    var e = this;
                    if (
                        (this._shouldCheckSize
                            ? (setTimeout(function () {
                                  e._onResize();
                              }),
                              (this._shouldCheckSize = !1))
                            : this._shouldPageLoad && (this._pageLoaded(), (this._shouldPageLoad = !1)),
                        this._shouldFocus &&
                            setTimeout(function () {
                                e._focusActive(), (e._shouldFocus = !1);
                            }),
                        this.s.instanceService && this.s.instanceService.onComponentChange.next({}),
                        (this._pageChange = !1),
                        this._variableRow && this._body.firstChild)
                    ) {
                        var t = this._body.firstChild,
                            n = t.scrollHeight > t.clientHeight;
                        n !== this.state.hasScrollY && ((this._shouldCheckSize = !0), this.setState({ hasScrollY: n }));
                    }
                }),
                (t.prototype._destroy = function () {
                    this._observer && this._observer.detach(), Pt(this._doc, Za, this._onDocClick), clearTimeout(this._hoverTimer);
                }),
                (t.prototype._getActiveCell = function () {
                    var e = this._view,
                        t = e === Rs ? this._body : this._pickerCont,
                        n = e === Ws ? "year" : e === As ? "month" : "cell";
                    return t && t.querySelector(".mbsc-calendar-" + n + '[tabindex="0"]');
                }),
                (t.prototype._focusActive = function () {
                    var e = this._getActiveCell();
                    e && e.focus();
                }),
                (t.prototype._pageLoaded = function () {
                    var e = this.s.navigationService;
                    this._hook("onPageLoaded", { activeElm: this._getActiveCell(), firstDay: e.firstPageDay, lastDay: e.lastPageDay, month: "month" === this.s.calendarType ? e.firstDay : ie, viewEnd: e.viewEnd, viewStart: e.viewStart });
                }),
                (t.prototype._activeChange = function (e) {
                    var t = this._pageIndex + e;
                    this._minIndex <= t && this._maxIndex >= t && this.__getTextParam && ((this._prevAnim = !1), (this._pageChange = !0), this._hook("onActiveChange", { date: this._getPageDay(t), dir: e, pageChange: !0 }));
                }),
                (t.prototype._activeYearsChange = function (e) {
                    var t = this._yearsIndex + e;
                    if (this._minYearsIndex <= t && this._maxYearsIndex >= t) {
                        var n = this._getPageYears(t);
                        (this._prevAnim = !1), (this._activeMonth = +this.s.getDate(n, 0, 1)), this.forceUpdate();
                    }
                }),
                (t.prototype._activeYearChange = function (e) {
                    var t = this._yearIndex + e;
                    if (this._minYearIndex <= t && this._maxYearIndex >= t) {
                        var n = this._getPageYear(t);
                        (this._prevAnim = !1), (this._activeMonth = +this.s.getDate(n, 0, 1)), this.forceUpdate();
                    }
                }),
                (t.prototype._prevDocClick = function () {
                    var e = this;
                    (this._prevClick = !0),
                        setTimeout(function () {
                            e._prevClick = !1;
                        });
                }),
                t
            );
        })(Ua),
        ir = 0;
    var rr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n, a) {
                        ir++;
                        var i = n._variableRow,
                            r = n._view !== Rs,
                            o = function (a, i) {
                                return Hn(
                                    er,
                                    s({}, i, {
                                        activeDate: n._active,
                                        amText: e.amText,
                                        calendarType: e.calendarType,
                                        cellTextHeight: t.cellTextHeight,
                                        clickToCreate: e.clickToCreate,
                                        colors: n._colors,
                                        dayNames: e.dayNames,
                                        dayNamesShort: n._dayNames,
                                        dataTimezone: e.dataTimezone,
                                        displayTimezone: e.displayTimezone,
                                        eventText: e.eventText,
                                        eventsText: e.eventsText,
                                        exclusiveEndDates: e.exclusiveEndDates,
                                        firstDay: e.firstDay,
                                        firstPageDay: a,
                                        getDate: e.getDate,
                                        getDay: e.getDay,
                                        getMonth: e.getMonth,
                                        getWeekNumber: e.getWeekNumber,
                                        getYear: e.getYear,
                                        hasMarks: !!n._marked,
                                        hoverEnd: e.hoverEnd,
                                        hoverStart: e.hoverStart,
                                        isPicker: e.isPicker,
                                        invalid: n._invalid,
                                        labels: n._labelsLayout,
                                        labelHeight: t.labelHeight,
                                        marked: n._marked,
                                        max: n._maxDate,
                                        min: n._minDate,
                                        monthNames: e.monthNames,
                                        monthNamesShort: e.monthNamesShort,
                                        onDayClick: n._onDayClick,
                                        onDayDoubleClick: e.onDayDoubleClick,
                                        onDayRightClick: e.onDayRightClick,
                                        onDayHoverIn: n._onDayHoverIn,
                                        onDayHoverOut: n._onDayHoverOut,
                                        onLabelClick: n._onLabelClick,
                                        onLabelDoubleClick: e.onLabelDoubleClick,
                                        onLabelRightClick: e.onLabelRightClick,
                                        onLabelHoverIn: e.onLabelHoverIn,
                                        onLabelHoverOut: e.onLabelHoverOut,
                                        onLabelDelete: e.onLabelDelete,
                                        pmText: e.pmText,
                                        rangeEnd: e.rangeEnd,
                                        rangeStart: e.rangeStart,
                                        resourcesMap: e.resourcesMap,
                                        rtl: e.rtl,
                                        selectedDates: e.selectedDates,
                                        selectedEventsMap: e.selectedEventsMap,
                                        showEventTooltip: e.showEventTooltip,
                                        showOuter: n._showOuter,
                                        showWeekDays: !n._isVertical && !n._variableRow,
                                        showWeekNumbers: e.showWeekNumbers,
                                        showSingleMark: !!e.marksMap,
                                        todayText: e.todayText,
                                        theme: e.theme,
                                        timeFormat: e.timeFormat,
                                        timezonePlugin: e.timezonePlugin,
                                        valid: n._valid,
                                        weeks: n._weeks,
                                        weekText: e.weekText,
                                        renderDay: e.renderDay,
                                        renderDayContent: e.renderDayContent,
                                        renderLabel: e.renderLabel,
                                        renderLabelContent: e.renderLabelContent,
                                        variableRow: n._variableRow,
                                    })
                                );
                            },
                            l =
                                (n._isVertical || (i && 1 == +e.size)) && e.showCalendar
                                    ? Hn(Oi, { dayNamesShort: n._dayNames, rtl: n._rtl, theme: n._theme, firstDay: e.firstDay, hasScroll: t.hasScrollY, hidden: n._view !== Rs && !n._hasPicker, showWeekNumbers: e.showWeekNumbers })
                                    : null,
                            c = {
                                axis: n._axis,
                                batchSize: 1,
                                changeOnEnd: !0,
                                className: "mbsc-calendar-scroll-wrapper" + n._theme,
                                data: ir,
                                easing: "ease-out",
                                itemSize: t.pickerSize,
                                items: n._months,
                                mousewheel: n._mousewheel,
                                prevAnim: n._prevAnim,
                                rtl: e.rtl,
                                snap: !0,
                                time: 200,
                            },
                            d = Hn(
                                "div",
                                { ref: n._setPickerCont, className: n._hasPicker ? "mbsc-calendar-picker-wrapper" : "" },
                                (t.view === Ws || t.viewClosing === Ws || e.selectView === Ws) &&
                                    Hn(
                                        "div",
                                        { onAnimationEnd: n._onViewAnimationEnd, className: n._getPickerClass(Ws) },
                                        Hn(
                                            ar,
                                            s(
                                                {
                                                    key: "years",
                                                    itemRenderer: function (t, a) {
                                                        var s = t.key,
                                                            i = n._getPageYears(s),
                                                            r = e.getYear(new Date(n._active)),
                                                            o = e.getYear(new Date(n._activeMonth));
                                                        return Hn(
                                                            "div",
                                                            { "aria-hidden": n._yearsIndex === s ? ie : "true", className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + n._theme + n._rtl, key: s, style: n._getPageStyle(s, a) },
                                                            Hn(
                                                                "div",
                                                                { className: "mbsc-calendar-table mbsc-flex-col" },
                                                                oe.map(function (t, a) {
                                                                    return Hn(
                                                                        "div",
                                                                        { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: a },
                                                                        re.map(function (t, s) {
                                                                            var l = i + 3 * a + s,
                                                                                c = +e.getDate(l, 0, 1);
                                                                            return Hn(Yi, {
                                                                                active: l === o,
                                                                                date: c,
                                                                                display: !0,
                                                                                selected: l === r,
                                                                                disabled: l < n._minYears || l > n._maxYears,
                                                                                rtl: e.rtl,
                                                                                text: l + e.yearSuffix,
                                                                                theme: e.theme,
                                                                                type: "year",
                                                                                onDayClick: n._onYearClick,
                                                                                key: l,
                                                                            });
                                                                        })
                                                                    );
                                                                })
                                                            )
                                                        );
                                                    },
                                                    maxIndex: n._maxYearsIndex,
                                                    minIndex: n._minYearsIndex,
                                                    onGestureEnd: n._onGestureEnd,
                                                    onIndexChange: n._onYearsPageChange,
                                                    selectedIndex: n._yearsIndex,
                                                },
                                                c
                                            )
                                        )
                                    ),
                                (t.view === As || t.viewClosing === As || e.selectView === As) &&
                                    Hn(
                                        "div",
                                        { onAnimationEnd: n._onViewAnimationEnd, className: n._getPickerClass(As) },
                                        Hn(
                                            ar,
                                            s(
                                                {
                                                    key: "year",
                                                    itemRenderer: function (t, a) {
                                                        var s = t.key,
                                                            i = n._getPageYear(s),
                                                            r = new Date(n._activeMonth),
                                                            o = e.getYear(r),
                                                            l = e.getMonth(r),
                                                            c = new Date(n._active),
                                                            d = e.getYear(c),
                                                            h = e.getMonth(c);
                                                        return Hn(
                                                            "div",
                                                            { "aria-hidden": n._yearIndex === s ? ie : "true", className: "mbsc-calendar-picker-slide mbsc-calendar-slide" + n._theme + n._rtl, key: s, style: n._getPageStyle(s, a) },
                                                            Hn(
                                                                "div",
                                                                { className: "mbsc-calendar-table mbsc-flex-col" },
                                                                oe.map(function (t, a) {
                                                                    return Hn(
                                                                        "div",
                                                                        { className: "mbsc-calendar-row mbsc-flex mbsc-flex-1-0", key: a },
                                                                        re.map(function (t, s) {
                                                                            var r = e.getDate(i, 3 * a + s, 1),
                                                                                c = e.getYear(r),
                                                                                u = e.getMonth(r);
                                                                            return Hn(Yi, {
                                                                                active: c === o && u === l,
                                                                                date: +r,
                                                                                display: !0,
                                                                                selected: c === d && u === h,
                                                                                disabled: r < n._minYear || r >= n._maxYear,
                                                                                month: e.monthNames[u],
                                                                                rtl: e.rtl,
                                                                                text: e.monthNamesShort[u],
                                                                                theme: e.theme,
                                                                                type: "month",
                                                                                onDayClick: n._onMonthClick,
                                                                                key: +r,
                                                                            });
                                                                        })
                                                                    );
                                                                })
                                                            )
                                                        );
                                                    },
                                                    maxIndex: n._maxYearIndex,
                                                    minIndex: n._minYearIndex,
                                                    onGestureEnd: n._onGestureEnd,
                                                    onIndexChange: n._onYearPageChange,
                                                    selectedIndex: n._yearIndex,
                                                },
                                                c
                                            )
                                        )
                                    )
                            );
                        return Hn(
                            "div",
                            { className: n._cssClass, ref: n._setEl, style: n._dim, onClick: be },
                            Hn(
                                "div",
                                { className: "mbsc-calendar-wrapper mbsc-flex-col mbsc-flex-1-1" + n._theme + n._hb + (e.hasContent || !e.showCalendar ? " mbsc-calendar-wrapper-fixed" : "") },
                                Hn(
                                    "div",
                                    { className: "mbsc-calendar-header" + n._theme + n._hb + (n._isVertical || i ? " mbsc-calendar-header-vertical" : ""), ref: n._setHeader },
                                    e.showControls &&
                                        (function () {
                                            var t, a;
                                            if (e.renderHeader) me((t = e.renderHeader())) && (t !== n._headerHTML && ((n._headerHTML = t), (n._shouldEnhanceHeader = !0)), (a = n._safeHtml(t)));
                                            else {
                                                var s = n._pageNr > 1;
                                                t = Hn(
                                                    rn,
                                                    null,
                                                    Hn(li, { className: "mbsc-calendar-title-wrapper" + (s ? " mbsc-calendar-title-wrapper-multi" : "") }),
                                                    Hn(ii, { className: "mbsc-calendar-button-prev" + (s ? " mbsc-calendar-button-prev-multi" : "") }),
                                                    e.showToday && Hn(oi, { className: "mbsc-calendar-header-today" }),
                                                    Hn(ri, { className: "mbsc-calendar-button-next" + (s ? " mbsc-calendar-button-next-multi" : "") })
                                                );
                                            }
                                            var i = Hn("div", { className: "mbsc-calendar-controls" + n._theme, dangerouslySetInnerHTML: a }, t);
                                            return Hn(Qs.Provider, { children: i, value: { instance: n } });
                                        })(),
                                    l
                                ),
                                Hn(
                                    "div",
                                    { className: "mbsc-calendar-body mbsc-flex-col mbsc-flex-1-1" + n._theme, ref: n._setBody, onKeyDown: n._onKeyDown },
                                    e.showCalendar &&
                                        Hn(
                                            "div",
                                            { className: "mbsc-calendar-body-inner mbsc-flex-col mbsc-flex-1-1" + (i ? " mbsc-calendar-body-inner-variable" : "") },
                                            n._isGrid
                                                ? Hn(
                                                      "div",
                                                      { "aria-hidden": r ? "true" : ie, className: "mbsc-calendar-grid mbsc-flex-1-1 mbsc-flex-col" + n._theme + n._hb },
                                                      n._monthsMulti.map(function (t, a) {
                                                          return Hn(
                                                              "div",
                                                              { key: a, className: "mbsc-calendar-grid-row mbsc-flex mbsc-flex-1-1" },
                                                              t.map(function (t, a) {
                                                                  return Hn(
                                                                      "div",
                                                                      { key: a, className: "mbsc-calendar-grid-item mbsc-flex-col mbsc-flex-1-1" + n._theme },
                                                                      Hn("div", { className: "mbsc-calendar-month-title" + n._theme }, e.monthNames[new Date(t).getMonth()]),
                                                                      o(t, { isActive: !0 })
                                                                  );
                                                              })
                                                          );
                                                      })
                                                  )
                                                : i
                                                ? Hn(
                                                      "div",
                                                      { "aria-hidden": r ? "true" : ie, className: "mbsc-calendar-slide mbsc-calendar-slide-active " + n._getPickerClass(Rs) },
                                                      o(+e.navigationService.firstDay, {
                                                          dragData: e.dragData,
                                                          dragToCreate: e.dragToCreate,
                                                          dragToMove: e.dragToMove,
                                                          dragToResize: e.dragToResize,
                                                          isActive: !0,
                                                          onLabelUpdateEnd: e.onLabelUpdateEnd,
                                                          onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                                          onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                                          onLabelUpdateMove: e.onLabelUpdateMove,
                                                          onLabelUpdateStart: e.onLabelUpdateStart,
                                                      })
                                                  )
                                                : e.selectView === Rs &&
                                                  Hn(
                                                      "div",
                                                      { "aria-hidden": r ? "true" : ie, className: n._getPickerClass(Rs), onAnimationEnd: n._onViewAnimationEnd },
                                                      Hn(
                                                          ar,
                                                          s({}, c, {
                                                              itemNr: n._pageNr,
                                                              itemSize: t.pageSize / n._pageNr,
                                                              itemRenderer: function (t, a) {
                                                                  var s = t.key,
                                                                      i = s >= n._pageIndex && s < n._pageIndex + n._pageNr && n._view === Rs,
                                                                      r = {
                                                                          dragData: e.dragData,
                                                                          dragToCreate: e.dragToCreate,
                                                                          dragToMove: e.dragToMove,
                                                                          dragToResize: e.dragToResize,
                                                                          isActive: i,
                                                                          onLabelUpdateEnd: e.onLabelUpdateEnd,
                                                                          onLabelUpdateModeOff: e.onLabelUpdateModeOff,
                                                                          onLabelUpdateModeOn: e.onLabelUpdateModeOn,
                                                                          onLabelUpdateMove: e.onLabelUpdateMove,
                                                                          onLabelUpdateStart: e.onLabelUpdateStart,
                                                                      };
                                                                  return Hn(
                                                                      "div",
                                                                      { className: "mbsc-calendar-slide" + (i ? " mbsc-calendar-slide-active" : "") + n._theme + n._rtl, key: s, style: n._getPageStyle(s, a, n._pageNr) },
                                                                      o(n._getPageDay(s), r)
                                                                  );
                                                              },
                                                              maxIndex: n._maxIndex,
                                                              minIndex: n._minIndex,
                                                              mouseSwipe: e.mouseSwipe,
                                                              onAnimationEnd: n._onAnimationEnd,
                                                              onGestureStart: n._onGestureStart,
                                                              onIndexChange: n._onPageChange,
                                                              onStart: n._onStart,
                                                              selectedIndex: n._pageIndex,
                                                              swipe: e.swipe,
                                                          })
                                                      )
                                                  ),
                                            !n._hasPicker && d
                                        )
                                )
                            ),
                            a,
                            n._hasPicker &&
                                Hn(
                                    wi,
                                    {
                                        anchor: n._pickerBtn,
                                        closeOnScroll: !0,
                                        contentPadding: !1,
                                        context: e.context,
                                        cssClass: "mbsc-calendar-popup",
                                        display: "anchored",
                                        isOpen: n._view !== Rs,
                                        locale: e.locale,
                                        onClose: n._onPickerClose,
                                        onOpen: n._onPickerOpen,
                                        rtl: e.rtl,
                                        scrollLock: !1,
                                        showOverlay: !1,
                                        theme: e.theme,
                                        themeVariant: e.themeVariant,
                                    },
                                    Hn(
                                        "div",
                                        { onKeyDown: n._onKeyDown },
                                        Hn(
                                            "div",
                                            { className: "mbsc-calendar-controls" + n._theme },
                                            Hn(
                                                "div",
                                                { "aria-live": "polite", className: "mbsc-calendar-picker-button-wrapper mbsc-calendar-title-wrapper" + n._theme },
                                                Hn(
                                                    zs,
                                                    { className: "mbsc-calendar-button", onClick: n._onPickerBtnClick, theme: e.theme, themeVariant: e.themeVariant, type: "button", variant: "flat" },
                                                    n._viewTitle,
                                                    e.downIcon && Hn(Ja, { svg: t.view === Ws ? e.downIcon : e.upIcon, theme: e.theme })
                                                )
                                            ),
                                            Hn(zs, {
                                                className: "mbsc-calendar-button",
                                                ariaLabel: e.prevPageText,
                                                disabled: n._isPrevDisabled(!0),
                                                iconSvg: n._prevIcon,
                                                onClick: n.prevPage,
                                                theme: e.theme,
                                                themeVariant: e.themeVariant,
                                                type: "button",
                                                variant: "flat",
                                            }),
                                            Hn(zs, {
                                                className: "mbsc-calendar-button",
                                                ariaLabel: e.nextPageText,
                                                disabled: n._isNextDisabled(!0),
                                                iconSvg: n._nextIcon,
                                                onClick: n.nextPage,
                                                theme: e.theme,
                                                themeVariant: e.themeVariant,
                                                type: "button",
                                                variant: "flat",
                                            })
                                        ),
                                        d
                                    )
                                )
                        );
                    })(e, t, this, e.children);
                }),
                (t.prototype._updated = function () {
                    e.prototype._updated.call(this), this._shouldEnhanceHeader && (Fn(this._headerElement, { view: this }), (this._shouldEnhanceHeader = !1));
                }),
                t
            );
        })(sr),
        or = (function () {
            function e() {
                (this.onInstanceReady = new d()), (this.onComponentChange = new d());
            }
            return (
                Object.defineProperty(e.prototype, "instance", {
                    get: function () {
                        return this.inst;
                    },
                    set: function (e) {
                        (this.inst = e), this.onInstanceReady.next(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                e
            );
        })(),
        lr = (function () {
            function e() {
                (this.pageSize = 0), (this._prevS = {}), (this._s = {});
            }
            return (
                (e.prototype.options = function (e, t) {
                    var n = (this._s = s({}, this._s, e)),
                        a = this._prevS,
                        i = n.getDate,
                        r = n.getYear,
                        o = n.getMonth,
                        l = n.showCalendar,
                        c = n.calendarType,
                        d = n.startDay,
                        h = n.endDay,
                        u = n.firstDay,
                        m = "week" === c,
                        _ = l ? (m ? n.weeks : 6) : 0,
                        p = n.min === a.min && this.minDate ? this.minDate : _e(n.min) ? -1 / 0 : va(n.min),
                        v = n.max === a.max && this.maxDate ? this.maxDate : _e(n.max) ? 1 / 0 : va(n.max),
                        f = n.activeDate || +new Date(),
                        g = ce(f, +p, +v),
                        y = this.forcePageChange || g !== f,
                        b = new Date(g),
                        x = g !== a.activeDate,
                        T =
                            n.calendarType !== a.calendarType ||
                            n.eventRange !== a.eventRange ||
                            n.firstDay !== a.firstDay ||
                            n.eventRangeSize !== a.eventRangeSize ||
                            n.refDate !== a.refDate ||
                            l !== a.showCalendar ||
                            n.size !== a.size ||
                            n.weeks !== a.weeks,
                        D = y || this.pageIndex === ie || T || (!this.preventPageChange && x && (g < +this.firstDay || g >= +this.lastDay)) ? Ks(b, n) : this.pageIndex,
                        C = "year" === c ? 12 : n.size || 1,
                        S = C > 1 && !m,
                        w = S ? 1 : qs(n.pages, this.pageSize),
                        k = "vertical" === n.calendarScroll && "auto" !== n.pages && (n.pages === ie || 1 === n.pages),
                        M = n.showOuterDays !== ie ? n.showOuterDays : !k && w < 2 && (m || !C || C < 2),
                        E = S ? 0 : 1,
                        N = js(D, n),
                        I = js(D + w, n);
                    l || "week" !== n.eventRange || d === ie || h === ie || ((N = Da(N, d - u + (d < u ? 7 : 0))), (I = Da(N, 7 * n.eventRangeSize + h - d + 1 - (h < d ? 0 : 7))));
                    var L = l && M ? oa(N, n) : N,
                        H = S ? i(r(I), o(I) - 1, 1) : js(D + w - 1, n),
                        Y = l && M ? Da(oa(H, n), 7 * _) : I,
                        O = l ? oa(js(D - E, n), n) : N,
                        P = l ? oa(js(D + w + E - 1, n), n) : I,
                        z = l ? Da(S ? oa(H, n) : P, 7 * _) : I,
                        V = this.pageIndex === ie,
                        F = O,
                        R = z;
                    if (!l && "week" === n.resolution && ("year" === n.eventRange || "month" === n.eventRange)) {
                        var A = h - d + 1 + (h < d ? 7 : 0);
                        if (N.getDay() !== d) F = (U = Da((W = oa(N, n, d)), A)) <= N ? Da(W, 7) : W;
                        if (I.getDay() !== d) {
                            var W,
                                U = Da((W = oa(I, n, d)), A);
                            R = W > I ? Da(U, -7) : U;
                        }
                    }
                    var B = !1;
                    D !== ie && ((B = +F != +this.viewStart || +R != +this.viewEnd), (this.pageIndex = D)),
                        (this.firstDay = N),
                        (this.lastDay = I),
                        (this.firstPageDay = L),
                        (this.lastPageDay = Y),
                        (this.viewStart = F),
                        (this.viewEnd = R),
                        (this.forcePageChange = !1),
                        (this.preventPageChange = !1),
                        (this.minDate = p),
                        (this.maxDate = v),
                        (this._prevS = n),
                        D !== ie && (B || t) && (B && !V && this.pageChange(), this.pageLoading(B));
                }),
                (e.prototype.pageChange = function () {
                    this._s.onPageChange &&
                        this._s.onPageChange(
                            { firstDay: this.firstPageDay, lastDay: this.lastPageDay, month: "month" === this._s.calendarType ? this.firstDay : ie, type: "onPageChange", viewEnd: this.viewEnd, viewStart: this.viewStart },
                            null
                        );
                }),
                (e.prototype.pageLoading = function (e) {
                    this._s.onPageLoading &&
                        this._s.onPageLoading(
                            { firstDay: this.firstPageDay, lastDay: this.lastPageDay, month: "month" === this._s.calendarType ? this.firstDay : ie, type: "onPageLoading", viewChanged: e, viewEnd: this.viewEnd, viewStart: this.viewStart },
                            null
                        );
                }),
                e
            );
        })();
    function cr(e, t, n) {
        void 0 === n && (n = 0),
            n > 10
                ? (delete e.__mbscTimer, t(e))
                : (clearTimeout(e.__mbscTimer),
                  (e.__mbscTimer = setTimeout(function () {
                      e.getInputElement
                          ? e.getInputElement().then(function (a) {
                                a ? (delete e.__mbscTimer, t(a)) : cr(e, t, n + 1);
                            })
                          : cr(e, t, n + 1);
                  }, 10)));
    }
    function dr(e, t) {
        if (e)
            if (
                (function (e) {
                    return e.getInputElement || (e.tagName && "ion-input" === e.tagName.toLowerCase());
                })(e)
            )
                cr(e, t);
            else if (e.vInput) t(e.vInput.nativeElement);
            else if (e._el) t(e._el);
            else if (1 === e.nodeType) t(e);
            else if (me(e)) {
                var n = vt.querySelector(e);
                n && t(n);
            }
    }
    function hr(e, t, n, a) {
        if (!e || 1 !== e.nodeType) return be;
        var s,
            i = function () {
                (t.s.showOnClick || t.s.showOnFocus) && _ && !t._allowTyping && (p.readOnly = !0);
            },
            r = function (n) {
                var s = t.s;
                a && a(n), s.showOnClick && !s.disabled && ((t._focusElm = e), (t._anchor = s.anchor || e), t.open());
            },
            o = function (e) {
                t.s.showOnClick && (t.s.showOnFocus && (t._preventShow = !0), t._allowTyping || e.preventDefault());
            },
            l = function (e) {
                t.s.showOnClick && (t._isOpen ? e.keyCode === ws && t._allowTyping && e.stopPropagation() : (e.keyCode === ks && e.preventDefault(), (e.keyCode !== ws && e.keyCode !== ks) || r(e)));
            },
            c = function (e) {
                i(), t.s.showOnFocus && (t._preventShow ? (t._preventShow = !1) : r(e));
            },
            d = function () {
                _ && (p.readOnly = s);
            },
            h = function (e) {
                n && n(e);
            },
            u = function () {
                m.document.activeElement === e && (i(), (t._preventShow = !0));
            },
            m = At(e),
            _ = Jt(e, "input,select"),
            p = e;
        return (
            _ && ((p.autocomplete = "off"), (s = p.readOnly)),
            Ot(e, Za, r),
            Ot(e, ss, o),
            Ot(e, as, l),
            Ot(e, es, c),
            Ot(e, Ga, d),
            Ot(e, qa, h),
            Ot(m, es, u),
            function () {
                _ && (p.readOnly = s), Pt(e, Za, r), Pt(e, ss, o), Pt(e, as, l), Pt(e, es, c), Pt(e, Ga, d), Pt(e, qa, h), Pt(m, es, u);
            }
        );
    }
    var ur = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._nullSupport = !0),
                    (t._onInputChange = function (e, n) {
                        var a = e.detail || (n !== ie ? n : e.target.value);
                        if (a !== t._tempValueText && !t._preventChange) {
                            t._readValue(a, !0), (t._valueTextChange = a !== t._tempValueText);
                            var s = _e(a) ? null : t._get(t._tempValueRep);
                            (t.value = s), t._change(s);
                        }
                        t._preventChange = !1;
                    }),
                    (t._onResize = function (e) {
                        t._hook("onResize", e);
                    }),
                    (t._onWrapperResize = function () {
                        t._wrapper && t._onResize({ windowWidth: t._wrapper.offsetWidth });
                    }),
                    (t._onPopupClose = function (e) {
                        /cancel|esc|overlay|scroll/.test(e.source) && t._hook("onCancel", { value: t.value, valueText: t._valueText }), t.close();
                    }),
                    (t._onPopupClosed = function (e) {
                        e.focus && (t._preventShow = !0), t._hook("onClosed", e), t._onClosed();
                    }),
                    (t._onPopupKey = function (e) {
                        13 === e.keyCode && t._onEnterKey(e);
                    }),
                    (t._onPopupOpen = function (e) {
                        (e.value = t.value), (e.valueText = t._valueText), t._hook("onOpen", e);
                    }),
                    (t._onButtonClick = function (e) {
                        var n = e.domEvent,
                            a = e.button;
                        "set" === a.name && t.set(), t._popup && t._popup._onButtonClick({ domEvent: n, button: a });
                    }),
                    (t._setInput = function (e) {
                        t._el = e && e.nativeElement ? e.nativeElement : e;
                    }),
                    (t._setPopup = function (e) {
                        t._popup = e;
                    }),
                    (t._setWrapper = function (e) {
                        t._wrapper = e;
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype.open = function () {
                    this._inst ? this._inst.open() : this.s.isOpen === ie && this.setState({ isOpen: !0 });
                }),
                (t.prototype.close = function () {
                    if ("inline" !== this.s.display)
                        if (this._inst) this._inst.close();
                        else {
                            var e = { value: this.value, valueText: this._valueText };
                            this.s.isOpen === ie && this.setState({ isOpen: !1 }), this._hook("onClose", e);
                        }
                }),
                (t.prototype.set = function () {
                    (this._valueRep = this._copy(this._tempValueRep)), (this._valueText = this._tempValueText), (this._value = this.value = this._get(this._valueRep)), this._change(this.value);
                }),
                (t.prototype.position = function () {
                    this._inst ? this._inst.position() : this._popup && this._popup.position();
                }),
                (t.prototype.isVisible = function () {
                    return this._inst ? this._inst.isVisible() : !!this._popup && this._popup.isVisible();
                }),
                (t.prototype.getVal = function () {
                    return this._get(this._valueRep);
                }),
                (t.prototype.setVal = function (e) {
                    (this.value = e), this.setState({ value: e });
                }),
                (t.prototype.getTempVal = function () {
                    return this._get(this._tempValueRep);
                }),
                (t.prototype.setTempVal = function (e) {
                    (this._tempValueSet = !0), (this._tempValueRep = this._parse(e)), this._setOrUpdate(!0);
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return !1;
                }),
                (t.prototype._valueEquals = function (e, t) {
                    return e === t;
                }),
                (t.prototype._render = function (e, t) {
                    var n = this,
                        a = this.props || {},
                        s = this._respProps || {},
                        i = this._prevS;
                    this._touchUi || ((e.display = s.display || a.display || b.display || "anchored"), (e.showArrow = s.showArrow || a.showArrow || !1)), "bubble" === e.display && (e.display = "anchored"), (this._scrollLock = e.scrollLock);
                    var r = e.isOpen !== ie ? e.isOpen : t.isOpen,
                        o = e.value !== ie ? e.value : t.value === ie ? e.defaultValue : t.value;
                    if (
                        ((this._showInput = e.showInput !== ie ? e.showInput : "inline" !== e.display && e.element === ie),
                        (!this._buttons || e.buttons !== i.buttons || e.display !== i.display || e.setText !== i.setText || e.cancelText !== i.cancelText || e.closeText !== i.closeText || e.touchUi !== i.touchUi) &&
                            ((this._buttons = Ti(this, e.buttons || ("inline" === e.display || ("anchored" === e.display && !this._touchUi) ? [] : ["cancel", "set"]))), (this._live = !0), this._buttons && this._buttons.length))
                    )
                        for (var l = 0, c = this._buttons; l < c.length; l++) {
                            var d = c[l];
                            ("ok" !== d.name && "set" !== d.name) || (this._live = !1);
                        }
                    if (!this._valueEquals(o, this._value) || this._tempValueRep === ie || this._shouldValidate(e, i) || e.defaultSelection !== i.defaultSelection || e.invalid !== i.invalid || e.valid !== i.valid) {
                        this._readValue(o);
                        var h = this._get(this._tempValueRep),
                            m = !(this._valueEquals(o, h) || (this._nullSupport && _e(o)));
                        this._setHeader(),
                            clearTimeout(this._handler),
                            (this._handler = setTimeout(function () {
                                (n.value = o), m && n._change(h), n._valueEquals(n._tempValue, h) || n._inst !== ie || n._hook("onTempChange", { value: h });
                            }));
                    }
                    if ((e.headerText !== i.headerText && this._setHeader(), r && !this._isOpen)) {
                        if (!this._tempValueSet || this._live) {
                            var _ = this._get(this._tempValueRep),
                                p = this._get(this._valueRep);
                            (this._tempValueRep = this._copy(this._valueRep)),
                                (this._tempValueText = this._format(this._tempValueRep)),
                                (this._tempValue = _),
                                this._setHeader(),
                                this._valueEquals(_, p) ||
                                    setTimeout(function () {
                                        n._hook("onTempChange", { value: p });
                                    });
                        }
                        this._onOpen();
                    }
                    (this._allowTyping = e.inputTyping && !u && !this._touchUi),
                        (this._anchorAlign = e.anchorAlign || (this._touchUi ? "center" : "start")),
                        (this._cssClass = "mbsc-picker " + (e.cssClass || "")),
                        (this._isOpen = r),
                        (this._maxWidth = e.maxWidth),
                        (this._valueTextChange = this._valueTextChange || this._oldValueText !== this._valueText),
                        (this._oldValueText = this._valueText),
                        (this._value = o),
                        (this._shouldInitInput = this._shouldInitInput || e.display !== i.display || e.element !== i.element);
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s,
                        n = this._input;
                    this._shouldInitInput &&
                        !this._inst &&
                        (this._unlisten(),
                        this._wrapper && "inline" === t.display && (this._observer = vi(this._wrapper, this._onWrapperResize, this._zone)),
                        dr(t.element || this._el, function (n) {
                            (e._el = n), "inline" !== t.display && (e._resetEl = hr(n, e, e._onInputChange)), Jt(n, "input,select") && ((e._input = n), e._write(n));
                        })),
                        this._valueTextChange && n && this._write(n),
                        (this._shouldInitInput = !1),
                        (this._valueTextChange = !1),
                        (this._anchor = t.anchor || this._focusElm || t.element || this._el);
                }),
                (t.prototype._writeValue = function (e, t, n) {
                    var a = e.value;
                    return (e.value = t), a !== t;
                }),
                (t.prototype._destroy = function () {
                    this._unlisten(), (this._shouldInitInput = !0);
                }),
                (t.prototype._setHeader = function () {
                    var e = this.s.headerText;
                    this._headerText = e ? e.replace(/\{value\}/i, this._tempValueText || "&nbsp;") : ie;
                }),
                (t.prototype._setOrUpdate = function (e) {
                    var t = this._get(this._tempValueRep);
                    (this._tempValue = t), (this._tempValueText = this._format(this._tempValueRep)), this._setHeader(), e || this._hook("onTempChange", { value: t }), this._live ? this.set() : this.forceUpdate();
                }),
                (t.prototype._copy = function (e) {
                    return e;
                }),
                (t.prototype._format = function (e) {
                    return e;
                }),
                (t.prototype._get = function (e) {
                    return e;
                }),
                (t.prototype._parse = function (e, t) {
                    return e;
                }),
                (t.prototype._validate = function () {}),
                (t.prototype._onClosed = function () {}),
                (t.prototype._onOpen = function () {}),
                (t.prototype._onParse = function () {}),
                (t.prototype._onEnterKey = function (e) {
                    this.set(), this.close();
                }),
                (t.prototype._change = function (e) {
                    this.s.value === ie && this.setState({ value: e }), this._hook("onChange", { value: e, valueText: this._tempValueText });
                }),
                (t.prototype._readValue = function (e, t) {
                    (this._tempValueRep = this._parse(e, t)),
                        this._onParse(),
                        this._validate(),
                        (this._tempValueText = this._format(this._tempValueRep)),
                        (this._valueRep = this._copy(this._tempValueRep)),
                        (this._valueText = _e(e) ? "" : this._tempValueText);
                }),
                (t.prototype._unlisten = function () {
                    this._resetEl && (this._resetEl(), (this._resetEl = ie)), this._observer && (this._observer.detach(), (this._observer = ie));
                }),
                (t.prototype._write = function (e) {
                    var t = this,
                        n = this._value;
                    this._writeValue(e, this._valueText || "", n) &&
                        setTimeout(function () {
                            (t._preventChange = !0), Gt(e, ns), Gt(e, qa);
                        });
                    var a = e.__mbscFormInst;
                    a && a.setOptions({ pickerMap: this.s.valueMap, pickerValue: n });
                }),
                (t.defaults = { cancelText: "Cancel", closeText: "Close", focusOnClose: "android" !== r, okText: "Ok", setText: "Set", showOnFocus: u }),
                t
            );
        })(Ua),
        mr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._navService = new lr()),
                    (t._onDayClick = function (e) {
                        var n = t.s,
                            a = ma(n, e.date),
                            i = +a;
                        if (!e.disabled) {
                            if (n.selectMultiple) {
                                var r = t._tempValueRep;
                                r[i] ? delete r[i] : (n.selectMax === ie || Object.keys(r).length < n.selectMax) && (r[i] = a), (t._tempValueRep = s({}, r));
                            } else n.selectRange || (t._tempValueRep = {}), (t._tempValueRep[i] = a);
                            (t._navService.preventPageChange = n.selectRange), t._hook("onCellClick", e), t._setOrUpdate();
                        }
                    }),
                    (t._onTodayClick = function () {
                        var e = new Date(),
                            n = +e;
                        t.s.selectRange || t.s.selectMultiple || ((t._tempValueRep = {}), (t._tempValueRep[n] = e), t._setOrUpdate());
                    }),
                    (t._onActiveChange = function (e) {
                        (t._navService.forcePageChange = e.pageChange), t._hook("onActiveChange", e);
                    }),
                    (t._setCal = function (e) {
                        t._calendarView = e;
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._valueEquals = function (e, t) {
                    return xa(e, t, this.s);
                }),
                (t.prototype._shouldValidate = function (e, t) {
                    return e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone;
                }),
                (t.prototype._render = function (t, n) {
                    e.prototype._render.call(this, t, n),
                        this._navService.options({
                            activeDate: t.active,
                            calendarType: t.calendarType,
                            firstDay: t.firstDay,
                            getDate: t.getDate,
                            getDay: t.getDay,
                            getMonth: t.getMonth,
                            getYear: t.getYear,
                            max: t.max,
                            min: t.min,
                            onPageChange: t.onPageChange,
                            onPageLoading: t.onPageLoading,
                            pages: t.pages,
                            refDate: t.refDate,
                            showCalendar: !0,
                            showOuterDays: t.showOuterDays,
                            size: t.size,
                            weeks: t.weeks,
                        });
                }),
                (t.prototype._copy = function (e) {
                    return s({}, e);
                }),
                (t.prototype._format = function (e) {
                    var t = this.s,
                        n = [];
                    for (var a in e) e[a] !== ie && null !== e[a] && n.push(ya(t.dateFormat, new Date(+e[a]), t));
                    return t.selectMultiple || t.selectRange ? n.join(", ") : n[0];
                }),
                (t.prototype._parse = function (e) {
                    var t = this.s,
                        n = t.selectRange,
                        a = {},
                        s = [];
                    me(e) ? (s = e.split(",")) : de(e) ? (s = e) : e && !de(e) && (s = [e]);
                    for (var i = 0, r = s; i < r.length; i++) {
                        var o = r[i];
                        if (null !== o) {
                            var l = va(o, t, t.dateFormat);
                            a[n ? +l : +aa(l)] = l;
                        }
                    }
                    return a;
                }),
                (t.prototype._get = function (e) {
                    var t = this.s,
                        n = t.selectRange;
                    if (this.s.selectMultiple || n) {
                        for (var a = [], s = 0, i = Object.keys(e); s < i.length; s++) {
                            var r = i[s];
                            a.push(pa(t, +e[r]));
                        }
                        return a;
                    }
                    var o = Object.keys(e || {});
                    return o.length ? pa(t, e[o[0]]) : null;
                }),
                (t.defaults = s({}, Bs, { calendarScroll: "horizontal", calendarType: "month", selectedText: "{count} selected", showControls: !0, showOnClick: !0, weeks: 1 })),
                (t._name = "Calendar"),
                t
            );
        })(ur);
    var _r = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._instanceService = new or()), t;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return Hn(rr, {
                            ref: t._setCal,
                            refDate: e.refDate,
                            activeDate: e.active,
                            amText: e.amText,
                            cssClass: t._className + " mbsc-flex-1-1 mbsc-calendar-" + e.display,
                            calendarScroll: e.calendarScroll,
                            calendarType: e.calendarType,
                            colors: e.colors,
                            context: e.context,
                            dataTimezone: e.dataTimezone,
                            displayTimezone: e.displayTimezone,
                            timezonePlugin: e.timezonePlugin,
                            downIcon: e.downIcon,
                            exclusiveEndDates: e.exclusiveEndDates,
                            hoverEnd: e.hoverEnd,
                            hoverStart: e.hoverStart,
                            invalid: e.invalid,
                            instanceService: t._instanceService,
                            isPicker: !0,
                            labels: e.labels,
                            marked: e.marked,
                            max: e.max,
                            min: e.min,
                            mousewheel: e.mousewheel,
                            navigationService: t._navService,
                            nextIconH: e.nextIconH,
                            nextIconV: e.nextIconV,
                            nextPageText: e.nextPageText,
                            noOuterChange: e.selectRange,
                            onActiveChange: t._onActiveChange,
                            onCellHoverIn: e.onCellHoverIn,
                            onCellHoverOut: e.onCellHoverOut,
                            onDayClick: t._onDayClick,
                            onDayHoverIn: e.onDayHoverIn,
                            onDayHoverOut: e.onDayHoverOut,
                            onLabelClick: e.onLabelClick,
                            onPageChange: e.onPageChange,
                            onPageLoaded: e.onPageLoaded,
                            onPageLoading: e.onPageLoading,
                            onTodayClick: t._onTodayClick,
                            pages: e.pages,
                            pmText: e.pmText,
                            prevIconH: e.prevIconH,
                            prevIconV: e.prevIconV,
                            prevPageText: e.prevPageText,
                            renderDay: e.renderDay,
                            renderDayContent: e.renderDayContent,
                            renderHeader: e.renderCalendarHeader,
                            rangeEnd: e.rangeEnd,
                            rangeStart: e.rangeStart,
                            rtl: e.rtl,
                            selectedDates: t._tempValueRep,
                            selectView: e.selectView,
                            showCalendar: !0,
                            showControls: e.showControls,
                            showOuterDays: e.showOuterDays,
                            showToday: !1,
                            showWeekNumbers: e.showWeekNumbers,
                            size: e.size,
                            theme: e.theme,
                            themeVariant: e.themeVariant,
                            upIcon: e.upIcon,
                            valid: e.valid,
                            weeks: e.weeks,
                            width: e.width,
                            getDate: e.getDate,
                            getDay: e.getDay,
                            getMaxDayOfMonth: e.getMaxDayOfMonth,
                            getMonth: e.getMonth,
                            getWeekNumber: e.getWeekNumber,
                            getYear: e.getYear,
                            dateFormat: e.dateFormat,
                            dayNames: e.dayNames,
                            dayNamesMin: e.dayNamesMin,
                            dayNamesShort: e.dayNamesShort,
                            eventText: e.eventText,
                            eventsText: e.eventsText,
                            firstDay: e.firstDay,
                            fromText: e.fromText,
                            monthNames: e.monthNames,
                            monthNamesShort: e.monthNamesShort,
                            moreEventsPluralText: e.moreEventsPluralText,
                            moreEventsText: e.moreEventsText,
                            todayText: e.todayText,
                            toText: e.toText,
                            weekText: e.weekText,
                            yearSuffix: e.yearSuffix,
                        });
                    })(e, this);
                }),
                t
            );
        })(mr),
        pr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function () {
                        var e = t.s;
                        e.text === ie || e.isGroup || t._hook("onClick", { index: e.index, selected: e.selected, disabled: e.disabled });
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ss(this._el, {
                        click: !0,
                        keepFocus: !1,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function () {
                            e.s.text !== ie && e.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            e.s.text !== ie && e.setState({ hasHover: !1 });
                        },
                        onKeyDown: function (t) {
                            (t.keyCode === ks || (!e.s.multiple && t.keyCode === ws)) && e._onClick();
                        },
                        onPress: function () {
                            e.s.text !== ie && e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.s.text !== ie && e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten();
                }),
                (t.prototype._render = function (e, t) {
                    var n = e.height;
                    (this._cssClass =
                        "mbsc-scroller-wheel-" +
                        (e.isGroup ? "header" : "item") +
                        this._theme +
                        this._rtl +
                        (e.checkmark && !e.isGroup ? " mbsc-wheel-item-checkmark" : "") +
                        (e.is3d ? " mbsc-scroller-wheel-item-3d" : "") +
                        (e.scroll3d && !e.is3d ? " mbsc-scroller-wheel-item-2d" : "") +
                        (e.selected && !e.is3d ? " mbsc-selected" : "") +
                        (e.selected && e.is3d ? " mbsc-selected-3d" : "") +
                        (e.disabled ? " mbsc-disabled" : "") +
                        (e.multiple && !e.isGroup ? " mbsc-wheel-item-multi" : "") +
                        (t.hasHover ? " mbsc-hover" : "") +
                        (t.hasFocus ? " mbsc-focus" : "") +
                        (t.isActive ? " mbsc-active" : "")),
                        (this._style = { height: n + "px", lineHeight: n + "px" }),
                        (this._checkmarkClass = this._theme + this._rtl + " mbsc-wheel-checkmark" + (e.selected ? " mbsc-selected" : "")),
                        e.is3d && ((this._transform = "rotateX(" + (((e.offset - e.index) * e.angle3d) % 360) + "deg) translateZ(" + (n * e.rows) / 2 + "px)"), (this._style[Lt + "transform"] = this._transform));
                }),
                t
            );
        })(Ua);
    var vr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n;
                        if (e.renderItem && e.data !== ie) {
                            var a = e.renderItem(e.data),
                                s = me(a) ? { __html: a } : ie;
                            n = s ? Hn("div", { dangerouslySetInnerHTML: s }) : Hn("div", null, a);
                        } else n = e.text;
                        return Hn(
                            "div",
                            {
                                "aria-disabled": e.disabled ? "true" : ie,
                                "aria-hidden": n === ie || e.is3d ? "true" : ie,
                                "aria-selected": e.selected ? "true" : ie,
                                ref: t._setEl,
                                tabIndex: e.active ? 0 : ie,
                                className: t._cssClass,
                                role: "option",
                                style: t._style,
                                onClick: t._onClick,
                            },
                            Hn("div", { dangerouslySetInnerHTML: t.textParam }),
                            e.checkmark && Hn("span", { className: t._checkmarkClass }),
                            n
                        );
                    })(e, this);
                }),
                t
            );
        })(pr),
        fr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onIndexChange = function (e) {
                        (e.wheel = t.s.wheel), t._hook("onIndexChange", e);
                    }),
                    (t._onItemClick = function (e) {
                        t._hook("onIndexChange", { click: !0, index: e.index, wheel: t.s.wheel, selected: e.selected });
                    }),
                    (t._onKeyDown = function (e) {
                        var n = 0;
                        e.keyCode === Hs ? (n = -1) : e.keyCode === Os && (n = 1);
                        var a = t.s,
                            s = a.activeIndex + n,
                            i = !(s < a.minIndex || s > a.maxIndex);
                        if ((n && e.preventDefault(), n && i)) {
                            var r = a.selectOnScroll ? "onIndexChange" : "onActiveChange";
                            (t._shouldFocus = !0), t._hook(r, { diff: n, index: s, wheel: a.wheel });
                        } else e.keyCode === ws && a.multiple && t._hook("onSet", {});
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._getText = function (e) {
                    return e !== ie ? (e.display !== ie ? e.display : e) : ie;
                }),
                (t.prototype._getValue = function (e) {
                    return e ? (e.value !== ie ? e.value : e.display !== ie ? e.display : e) : e;
                }),
                (t.prototype._isActive = function (e, t, n) {
                    var a = this.s,
                        s = a.scroll3d && a.multiple ? n : !n;
                    return a.activeIndex === e.key && t && s;
                }),
                (t.prototype._isSelected = function (e) {
                    var t = this.s,
                        n = t.selectedValues,
                        a = this._getValue(e.data);
                    return t.multiple ? !(!n || !n.indexOf) && n.indexOf(a) >= 0 : t.selectOnScroll ? e.key === t.selectedIndex : a !== ie && a === n;
                }),
                (t.prototype._isDisabled = function (e) {
                    var t = this.s.disabled,
                        n = e && e.disabled,
                        a = this._getValue(e);
                    return !!(n || (t && t.get(a)));
                }),
                (t.prototype._render = function (e) {
                    var t = e.rows,
                        n = e.itemHeight,
                        a = e.wheel._key,
                        s = 2 * Te((n - 0.03 * ((n * t) / 2 + 3)) / 2);
                    (this._items = e.wheel.getItem || e.wheel.data || []),
                        (this._batchSize3d = Te(1.8 * t)),
                        (this._angle3d = 360 / (2 * this._batchSize3d)),
                        (this._style = { height: 2 * Te((t * n * (e.scroll3d ? 1.1 : 1)) / 2) + "px" }),
                        (this._itemNr = e.wheel.spaceAround ? 1 : t),
                        (this._innerStyle = { height: (e.scroll3d ? s : e.wheel.spaceAround ? n : n * t) + "px" }),
                        (this._wheelStyle = e.wheelWidth
                            ? { width: (e.wheelWidth[a] || e.wheelWidth) + "px" }
                            : { maxWidth: (de(e.maxWheelWidth) ? e.maxWheelWidth[a] : e.maxWheelWidth) + "px", minWidth: (de(e.minWheelWidth) ? e.minWheelWidth[a] : e.minWheelWidth) + "px" }),
                        e.scroll3d && (this._innerStyle[Lt + "transform"] = "translateY(-50%) translateZ(" + ((n * t) / 2 + 3) + "px");
                }),
                (t.prototype._updated = function () {
                    if (this._shouldFocus) {
                        var e = this._el.querySelector('[tabindex="0"]');
                        e &&
                            setTimeout(function () {
                                e.focus();
                            }),
                            (this._shouldFocus = !1);
                    }
                }),
                t
            );
        })(Ua);
    var gr,
        yr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return Hn(
                            "div",
                            {
                                "aria-multiselectable": e.multiple ? "true" : ie,
                                className: "mbsc-scroller-wheel-wrapper mbsc-scroller-wheel-wrapper-" + e.wheel._key + " " + (e.wheel.cssClass || "") + (e.scroll3d ? " mbsc-scroller-wheel-wrapper-3d" : "") + t._theme + t._rtl,
                                onKeyDown: t._onKeyDown,
                                ref: t._setEl,
                                role: "listbox",
                                style: t._wheelStyle,
                            },
                            Hn(ar, {
                                batchSize3d: t._batchSize3d,
                                className: "mbsc-scroller-wheel" + (e.scroll3d ? " mbsc-scroller-wheel-3d" : "") + t._theme,
                                innerClass: "mbsc-scroller-wheel-cont mbsc-scroller-wheel-cont-" + e.display + (e.scroll3d ? " mbsc-scroller-wheel-cont-3d" : "") + (e.multiple ? " mbsc-scroller-wheel-multi" : "") + t._theme,
                                innerStyles: t._innerStyle,
                                items: t._items,
                                itemSize: e.itemHeight,
                                itemRenderer: function (n, a, s) {
                                    if (n !== ie) {
                                        var i = t._getText(n.data);
                                        return Hn(vr, {
                                            active: t._isActive(n, i, s),
                                            angle3d: t._angle3d,
                                            data: n.data,
                                            disabled: t._isDisabled(n.data),
                                            height: e.itemHeight,
                                            index: n.key,
                                            is3d: s,
                                            isGroup: n.data && n.data.isGroup,
                                            key: n.key,
                                            multiple: e.multiple,
                                            onClick: t._onItemClick,
                                            offset: a,
                                            checkmark: e.wheel.checkmark,
                                            renderItem: e.renderItem,
                                            rows: e.rows,
                                            rtl: e.rtl,
                                            scroll3d: e.scroll3d,
                                            selected: t._isSelected(n),
                                            text: i,
                                            theme: e.theme,
                                        });
                                    }
                                    return null;
                                },
                                itemNr: t._itemNr,
                                margin: !0,
                                maxIndex: e.maxIndex,
                                minIndex: e.minIndex,
                                onIndexChange: t._onIndexChange,
                                offset: e.wheel._offset,
                                rtl: e.rtl,
                                scroll3d: e.scroll3d,
                                scrollBar: !t._touchUi,
                                selectedIndex: e.selectedIndex,
                                snap: !0,
                                spaceAround: e.wheel.spaceAround,
                                styles: t._style,
                                visibleSize: e.rows,
                            })
                        );
                    })(e, this);
                }),
                t
            );
        })(fr),
        br = new d(),
        xr = 0;
    function Tr() {
        clearTimeout(gr),
            (gr = setTimeout(function () {
                br.next();
            }, 100));
    }
    function Dr(e) {
        try {
            return Jt(e, "*:-webkit-autofill");
        } catch (e) {
            return !1;
        }
    }
    var Cr = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._tag = "input"),
                (t._onClick = function () {
                    t._hidePass = !t._hidePass;
                }),
                (t._onMouseDown = function (e) {
                    t.s.tags && (t._preventFocus = !0);
                }),
                (t._onTagClear = function (e, n) {
                    if ((e.stopPropagation(), e.preventDefault(), !t.s.disabled)) {
                        var a = t.s.pickerValue.slice();
                        a.splice(n, 1), Gt(t._el, qa, a);
                    }
                }),
                (t._sizeTextArea = function () {
                    var e,
                        n,
                        a,
                        s = t._el,
                        i = t.s.rows;
                    s.offsetHeight &&
                        ((s.style.height = ""),
                        (a = s.scrollHeight - s.offsetHeight),
                        (e = s.offsetHeight + (a > 0 ? a : 0)),
                        (n = Math.round(e / 24)) > i ? ((e = 24 * i + (e - 24 * n)), (s.style.overflow = "auto")) : (s.style.overflow = ""),
                        e && (s.style.height = e + "px"));
                }),
                (t._onAutoFill = function () {
                    "floating" === t.s.labelStyle && Dr(t._el) && t.setState({ isFloatingActive: !0 });
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype._checkFloating = function () {
                var e = this,
                    t = this._el,
                    n = this.s,
                    a = Dr(t),
                    s = this.state.hasFocus || a || !_e(this.value);
                if (t && "floating" === n.labelStyle) {
                    if ("select" === this._tag) {
                        var i = t,
                            r = i.options[0];
                        s = !!(s || i.multiple || i.value || (i.selectedIndex > -1 && r && r.label));
                    } else if (this.value === ie) {
                        s = !(!s && !t.value);
                    }
                    (this._valueChecked = !0),
                        Me(this, function () {
                            e.setState({ isFloatingActive: s });
                        });
                }
            }),
            (t.prototype._mounted = function () {
                var e,
                    t = this,
                    n = this.s,
                    a = this._el;
                Ot(a, Xa, this._onAutoFill),
                    "textarea" === this._tag && (Ot(a, ns, this._sizeTextArea), (this._unsubscribe = ((e = this._sizeTextArea), xr || Ot(ft, ds, Tr), xr++, br.subscribe(e)))),
                    (this._unlisten = Ss(a, {
                        keepFocus: !0,
                        onBlur: function () {
                            t.setState({ hasFocus: !1, isFloatingActive: !!a.value });
                        },
                        onChange: function (e) {
                            if ("file" === n.type) {
                                for (var a = [], s = 0, i = e.target.files; s < i.length; s++) {
                                    var r = i[s];
                                    a.push(r.name);
                                }
                                t.setState({ files: a.join(", ") });
                            }
                            n.tags && n.value === ie && n.defaultValue === ie && t.setState({ value: e.target.value }), t._checkFloating(), t._emit("onChange", e);
                        },
                        onFocus: function () {
                            t._preventFocus || t.setState({ hasFocus: !0, isFloatingActive: !0 }), (t._preventFocus = !1);
                        },
                        onHoverIn: function () {
                            t._disabled || t.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            t.setState({ hasHover: !1 });
                        },
                    }));
            }),
            (t.prototype._render = function (e, t) {
                var n = !(!e.endIconSvg && !e.endIcon),
                    a = e.pickerValue,
                    s = !(!e.startIconSvg && !e.startIcon),
                    i = e.label !== ie || e.hasChildren,
                    r = e.error,
                    o = e.rtl ? "right" : "left",
                    l = e.rtl ? "left" : "right",
                    c = e.inputStyle,
                    d = e.labelStyle,
                    h = "floating" === d,
                    u = !(!h || !i || (!t.isFloatingActive && _e(e.value))),
                    m = e.disabled === ie ? t.disabled : e.disabled,
                    _ = this._prevS,
                    p = e.modelValue !== ie ? e.modelValue : e.value,
                    v = p !== ie ? p : t.value !== ie ? t.value : e.defaultValue,
                    f = this._theme + this._rtl + (r ? " mbsc-error" : "") + (m ? " mbsc-disabled" : "") + (t.hasHover ? " mbsc-hover" : "") + (t.hasFocus && !m ? " mbsc-focus" : "");
                "file" !== e.type ||
                    n ||
                    ((e.endIconSvg =
                        '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/></svg>'),
                    (n = !0)),
                    e.tags &&
                        (_e(a) && (a = []),
                        de(a) || (a = [a]),
                        (this._tagsArray = e.pickerMap
                            ? a.map(function (t) {
                                  return e.pickerMap.get(t);
                              })
                            : _e(v)
                            ? []
                            : v.split(", "))),
                    e.passwordToggle &&
                        ((n = !0),
                        (this._passIconClass = f + " mbsc-toggle-icon mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + d : "")),
                        (this._hidePass = this._hidePass === ie ? "password" === e.type : this._hidePass)),
                    (this._hasStartIcon = s),
                    (this._hasEndIcon = n),
                    (this._hasError = r),
                    (this._disabled = m),
                    (this._cssClass =
                        this._className +
                        this._hb +
                        f +
                        " mbsc-form-control-wrapper mbsc-textfield-wrapper mbsc-font mbsc-textfield-wrapper-" +
                        c +
                        (m ? " mbsc-disabled" : "") +
                        (i ? " mbsc-textfield-wrapper-" + d : "") +
                        (s ? " mbsc-textfield-wrapper-has-icon-" + o + " " : "") +
                        (n ? " mbsc-textfield-wrapper-has-icon-" + l + " " : "")),
                    i &&
                        (this._labelClass =
                            f +
                            " mbsc-label mbsc-label-" +
                            d +
                            " mbsc-label-" +
                            c +
                            "-" +
                            d +
                            (s ? " mbsc-label-" + c + "-" + d + "-has-icon-" + o + " " : "") +
                            (n ? " mbsc-label-" + c + "-" + d + "-has-icon-" + l + " " : "") +
                            (h && this._animateFloating ? " mbsc-label-floating-animate" : "") +
                            (u ? " mbsc-label-floating-active" : "")),
                    (this._innerClass = f + " mbsc-textfield-inner mbsc-textfield-inner-" + c + (i ? " mbsc-textfield-inner-" + d : "")),
                    s && (this._startIconClass = f + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + o + " mbsc-textfield-icon-" + c + "-" + o + (i ? " mbsc-textfield-icon-" + d : "")),
                    n && (this._endIconClass = f + " mbsc-textfield-icon mbsc-textfield-icon-" + c + " mbsc-textfield-icon-" + l + " mbsc-textfield-icon-" + c + "-" + l + (i ? " mbsc-textfield-icon-" + d : "")),
                    (this._nativeElmClass =
                        f +
                        " " +
                        (e.inputClass || "") +
                        " mbsc-textfield mbsc-textfield-" +
                        c +
                        (e.dropdown ? " mbsc-select" : "") +
                        (i ? " mbsc-textfield-" + d + " mbsc-textfield-" + c + "-" + d : "") +
                        (u ? " mbsc-textfield-floating-active" : "") +
                        (s ? " mbsc-textfield-has-icon-" + o + " mbsc-textfield-" + c + "-has-icon-" + o + (i ? " mbsc-textfield-" + c + "-" + d + "-has-icon-" + o : "") : "") +
                        (n ? " mbsc-textfield-has-icon-" + l + " mbsc-textfield-" + c + "-has-icon-" + l + (i ? " mbsc-textfield-" + c + "-" + d + "-has-icon-" + l : "") : "")),
                    ("select" === this._tag || e.dropdown) &&
                        (this._selectIconClass = "mbsc-select-icon mbsc-select-icon-" + c + this._rtl + this._theme + (i ? " mbsc-select-icon-" + d : "") + (s ? " mbsc-select-icon-" + o : "") + (n ? " mbsc-select-icon-" + l : "")),
                    ("textarea" === this._tag || e.tags) &&
                        ((this._cssClass += " mbsc-textarea-wrapper"),
                        (this._innerClass += " mbsc-textarea-inner"),
                        (this._nativeElmClass += " mbsc-textarea"),
                        "textarea" !== this._tag || (v === this._prevValue && e.inputStyle === _.inputStyle && e.labelStyle === _.labelStyle && e.rows === _.rows && e.theme === _.theme) || (this._shouldSize = !0),
                        (this._prevValue = v)),
                    e.tags && (this._innerClass += " mbsc-textfield-tags-inner"),
                    "file" === e.type && ((this._dummyElmClass = this._nativeElmClass), (this._nativeElmClass += " mbsc-textfield-file")),
                    (this._errorClass =
                        this._theme + this._rtl + " mbsc-error-message mbsc-error-message-" + c + (i ? " mbsc-error-message-" + d : "") + (s ? " mbsc-error-message-has-icon-" + o : "") + (n ? " mbsc-error-message-has-icon-" + l : "")),
                    e.notch &&
                        "outline" === c &&
                        ((this._fieldSetClass = "mbsc-textfield-fieldset" + f + (s ? " mbsc-textfield-fieldset-has-icon-" + o : "") + (n ? " mbsc-textfield-fieldset-has-icon-" + l : "")),
                        (this._legendClass = "mbsc-textfield-legend" + this._theme + (u || (i && "stacked" === d) ? " mbsc-textfield-legend-active" : ""))),
                    e.ripple && "outline" !== e.inputStyle && (this._rippleClass = "mbsc-textfield-ripple" + this._theme + (r ? " mbsc-error" : "") + (t.hasFocus ? " mbsc-textfield-ripple-active" : "")),
                    this._valueChecked && (this._animateFloating = !0);
            }),
            (t.prototype._updated = function () {
                var e = this;
                this._shouldSize &&
                    ((this._shouldSize = !1),
                    Me(this, function () {
                        e._sizeTextArea();
                    })),
                    this._checkFloating();
            }),
            (t.prototype._destroy = function () {
                Pt(this._el, Xa, this._onAutoFill),
                    Pt(this._el, ns, this._sizeTextArea),
                    (function (e) {
                        xr--, br.unsubscribe(e), xr || Pt(ft, ds, Tr);
                    })(this._unsubscribe),
                    this._unlisten();
            }),
            (t.defaults = { dropdown: !1, dropdownIcon: E, hideIcon: "eye-blocked", inputStyle: "underline", labelStyle: "stacked", placeholder: "", ripple: !1, rows: 6, showIcon: "eye", type: "text" }),
            (t._name = "Input"),
            t
        );
    })(Ua);
    var Sr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._el && this._el.value;
                    },
                    set: function (e) {
                        (this._el.value = e), this._checkFloating(), "textarea" === this._tag && this._sizeTextArea();
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n, a) {
                        var r = n.props;
                        r.children;
                        var o = r.dropdown;
                        r.dropdownIcon, r.endIcon, r.endIconSrc, r.endIconSvg, r.error;
                        var l = r.errorMessage,
                            c = r.hasChildren;
                        r.hideIcon,
                            r.hideIconSvg,
                            r.inputClass,
                            r.inputStyle,
                            r.label,
                            r.labelStyle,
                            r.notch,
                            r.passwordToggle,
                            r.pickerMap,
                            r.pickerValue,
                            r.ripple,
                            r.rows,
                            r.rtl,
                            r.showIcon,
                            r.showIconSvg,
                            r.startIcon,
                            r.startIconSrc,
                            r.startIconSvg;
                        var d = r.tags;
                        r.theme, r.themeVariant;
                        var h = r.type,
                            u = i(r, [
                                "children",
                                "dropdown",
                                "dropdownIcon",
                                "endIcon",
                                "endIconSrc",
                                "endIconSvg",
                                "error",
                                "errorMessage",
                                "hasChildren",
                                "hideIcon",
                                "hideIconSvg",
                                "inputClass",
                                "inputStyle",
                                "label",
                                "labelStyle",
                                "notch",
                                "passwordToggle",
                                "pickerMap",
                                "pickerValue",
                                "ripple",
                                "rows",
                                "rtl",
                                "showIcon",
                                "showIconSvg",
                                "startIcon",
                                "startIconSrc",
                                "startIconSvg",
                                "tags",
                                "theme",
                                "themeVariant",
                                "type",
                            ]),
                            m = e.label;
                        return Hn(
                            "label",
                            { className: n._cssClass, onMouseDown: n._onMouseDown },
                            (m || c) && Hn("span", { className: n._labelClass }, c ? "" : m),
                            Hn(
                                "span",
                                { className: n._innerClass },
                                "input" === n._tag &&
                                    Hn("input", s({}, u, { ref: n._setEl, className: n._nativeElmClass + (e.tags ? " mbsc-textfield-hidden" : ""), disabled: n._disabled, type: e.passwordToggle ? (n._hidePass ? "password" : "text") : h })),
                                "file" === h && Hn("input", { className: n._dummyElmClass, disabled: n._disabled, placeholder: e.placeholder, readOnly: !0, type: "text", value: t.files || "" }),
                                "select" === n._tag && Hn("select", s({}, u, { ref: n._setEl, className: "mbsc-select" + n._nativeElmClass, disabled: n._disabled }), a),
                                "textarea" === n._tag && Hn("textarea", s({}, u, { ref: n._setEl, className: n._nativeElmClass, disabled: n._disabled })),
                                d &&
                                    Hn(
                                        "span",
                                        { className: "mbsc-textfield-tags" + n._nativeElmClass },
                                        n._tagsArray.length
                                            ? n._tagsArray.map(function (t, a) {
                                                  return (
                                                      t &&
                                                      Hn(
                                                          "span",
                                                          { key: a, className: "mbsc-textfield-tag" + n._theme + n._rtl },
                                                          Hn("span", { className: "mbsc-textfield-tag-text" + n._theme }, t),
                                                          Hn(Ja, {
                                                              className: "mbsc-textfield-tag-clear",
                                                              onClick: function (e) {
                                                                  return n._onTagClear(e, a);
                                                              },
                                                              svg: e.clearIcon,
                                                              theme: e.theme,
                                                          })
                                                      )
                                                  );
                                              })
                                            : Hn("span", { className: "mbsc-textfield-tags-placeholder" + n._theme }, e.placeholder)
                                    ),
                                ("select" === n._tag || o) && Hn(Ja, { className: n._selectIconClass, svg: e.dropdownIcon, theme: e.theme }),
                                n._hasStartIcon && Hn(Ja, { className: n._startIconClass, name: e.startIcon, svg: e.startIconSvg, theme: e.theme }),
                                n._hasEndIcon && !e.passwordToggle && Hn(Ja, { className: n._endIconClass, name: e.endIcon, svg: e.endIconSvg, theme: e.theme }),
                                e.passwordToggle && Hn(Ja, { onClick: n._onClick, className: n._passIconClass, name: n._hidePass ? e.showIcon : e.hideIcon, svg: n._hidePass ? e.showIconSvg : e.hideIconSvg, theme: e.theme }),
                                n._hasError && Hn("span", { className: n._errorClass }, l),
                                e.notch && "outline" === e.inputStyle && Hn("fieldset", { "aria-hidden": "true", className: n._fieldSetClass }, Hn("legend", { className: n._legendClass }, m && "inline" !== e.labelStyle ? m : "&nbsp;")),
                                e.ripple && "outline" !== e.inputStyle && Hn("span", { className: n._rippleClass })
                            )
                        );
                    })(e, t, this, e.children);
                }),
                t
            );
        })(Cr),
        wr = {
            hasChildren: !0,
            parentClass: "mbsc-label",
            readAttrs: ["placeholder", "rows"],
            readProps: ["disabled", "type"],
            renderToParent: !0,
            slots: { endIcon: "end-icon", label: "label", startIcon: "start-icon" },
            before: function (e, t, n) {
                var a = e.parentNode,
                    s = vt.createElement("span");
                if ((a.insertBefore(s, e), s.appendChild(e), (t.inputClass = e.getAttribute("class") || ""), "SELECT" === e.nodeName && delete t.hasChildren, !t.label && t.hasChildren && (t.label = n[0].textContent), t.label)) {
                    var i = vt.createElement("span");
                    a.insertBefore(i, s);
                }
            },
        },
        kr = s({}, wr, { hasValue: !0, parentClass: "mbsc-select", useOwnChildren: !0 }),
        Mr = s({}, wr, { hasValue: !0 });
    function Er(e, t, n) {
        var a = t.inputComponent,
            i = s({ defaultValue: (e._value && e._valueText) || "", placeholder: t.placeholder, ref: e._setInput }, t.inputProps);
        t.inputComponent ||
            ((a = Sr),
            (i = s(
                {
                    "aria-expanded": !!e._isOpen,
                    "aria-haspopup": "dialog",
                    disabled: t.disabled,
                    dropdown: t.dropdown,
                    endIcon: t.endIcon,
                    endIconSrc: t.endIconSrc,
                    endIconSvg: t.endIconSvg,
                    error: t.error,
                    errorMessage: t.errorMessage,
                    inputStyle: t.inputStyle,
                    label: t.label,
                    labelStyle: t.labelStyle,
                    name: t.name,
                    pickerMap: t.valueMap,
                    pickerValue: e._value,
                    placeholder: t.placeholder,
                    rtl: t.rtl,
                    startIcon: t.startIcon,
                    startIconSrc: t.startIconSrc,
                    startIconSvg: t.startIconSvg,
                    tags: t.tagInput === ie ? t.selectMultiple : t.tagInput,
                    theme: t.theme,
                    themeVariant: t.themeVariant,
                },
                i
            )));
        var r = Hn(a, i);
        return Hn(
            rn,
            null,
            e._showInput && r,
            Hn(
                wi,
                {
                    activeElm: t.activeElm,
                    anchor: e._anchor,
                    anchorAlign: e._anchorAlign,
                    animation: t.animation,
                    buttons: e._buttons,
                    cancelText: t.cancelText,
                    closeOnEsc: t.closeOnEsc,
                    closeOnOverlayClick: t.closeOnOverlayClick,
                    closeOnScroll: t.closeOnScroll,
                    closeText: t.closeText,
                    contentPadding: !1,
                    context: t.context,
                    cssClass: e._cssClass,
                    disableLeftRight: !0,
                    display: t.display,
                    focusElm: e._focusElm,
                    focusOnClose: t.focusOnClose,
                    focusOnOpen: !e._allowTyping,
                    focusTrap: t.focusTrap,
                    fullScreen: t.fullScreen,
                    headerText: e._headerText,
                    height: t.height,
                    isOpen: e._isOpen,
                    maxHeight: t.maxHeight,
                    maxWidth: e._maxWidth,
                    onClose: e._onPopupClose,
                    onClosed: e._onPopupClosed,
                    onKeyDown: e._onPopupKey,
                    onOpen: e._onPopupOpen,
                    onResize: e._onResize,
                    setText: t.setText,
                    showArrow: t.showArrow,
                    showOverlay: !e._allowTyping && t.showOverlay,
                    ref: e._setPopup,
                    rtl: t.rtl,
                    scrollLock: e._scrollLock,
                    theme: t.theme,
                    themeVariant: t.themeVariant,
                    touchUi: e._touchUi,
                    windowWidth: e.state.width,
                    width: t.width,
                },
                n
            )
        );
    }
    function Nr(e, t, n, a) {
        var s = e.min === ie ? -1 / 0 : e.min,
            i = e.max === ie ? 1 / 0 : e.max,
            r = Hr(e, t),
            o = Yr(e, r),
            l = o,
            c = o,
            d = 0,
            h = 0;
        if (n && n.get(o)) {
            for (; r - d >= s && n.get(l) && d < 100; ) l = Yr(e, r - ++d);
            for (; r + h < i && n.get(c) && h < 100; ) c = Yr(e, r + ++h);
            if (n.get(l) && n.get(c)) return o;
            o = ((h < d && h && -1 !== a) || !d || r - d < 0 || 1 === a) && !n.get(c) ? c : l;
        }
        return o;
    }
    function Ir(e) {
        return e !== ie ? (e.value !== ie ? e.value : e.display !== ie ? e.display : e) : e;
    }
    function Lr(e, t) {
        if (e.getItem) return e.getItem(t);
        var n = e.data || [],
            a = n.length,
            s = t % a;
        return e._circular ? n[s >= 0 ? s : s + a] : n[ce(t, 0, a - 1)];
    }
    function Hr(e, t) {
        var n = e.multiple ? (t && t.length && t[0]) || ie : t;
        return (e.getIndex ? +e.getIndex(t) : e._map.get(n)) || 0;
    }
    function Yr(e, t) {
        return Ir(Lr(e, t));
    }
    var Or = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._indexes = []),
                (t._activeIndexes = []),
                (t._wheels = []),
                (t._batches = []),
                (t._lastIndexes = []),
                (t._onSet = function () {
                    t._setOrUpdate();
                }),
                (t._onActiveChange = function (e) {
                    var n = e.wheel,
                        a = e.index,
                        s = n._key;
                    t._activeIndexes[s] = a;
                    var i = t._indexes,
                        r = i[s];
                    t._scroll3d ? (r = a) : a - r >= t._rows ? r++ : a < r && r--, (i[s] = r), t.forceUpdate();
                }),
                (t._onWheelIndexChange = function (e) {
                    var n = t.s,
                        a = e.wheel,
                        s = a._key,
                        i = a.multiple,
                        r = Yr(a, e.index),
                        o = t._disabled && t._disabled[s] && t._disabled[s].get(r),
                        l = [],
                        c = n.selectOnScroll;
                    (c || !e.click) &&
                        ((t._lastIndexes[s] = t._indexes[s] = e.index),
                        t._indexes.forEach(function (e, n) {
                            var a = t._wheelMap[n],
                                s = a.data ? a.data.length : 0;
                            (t._batches[n] = s ? Ce(e / s) : 0), (l[n] = s);
                        })),
                        (t._activeIndexes[s] = e.index);
                    var d = t._get(t._tempValueRep),
                        h = !!e.click && !o,
                        u = c || h;
                    if (i) {
                        if (h) {
                            var m = (t._tempValueRep[s] || []).slice();
                            !1 === e.selected ? m.push(r) : !0 === e.selected && m.splice(m.indexOf(r), 1), (t._tempValueRep[s] = m);
                        }
                    } else u && (t._tempValueRep[s] = r);
                    if (n.onWheelMove && e.index !== ie) {
                        var _ = n.onWheelMove({ dataItem: Lr(a, e.index), selection: u, wheelIndex: s });
                        _ &&
                            _.forEach(function (e, n) {
                                if ((e !== ie && (t._tempValueRep[n] = e), !u)) {
                                    var a = t._wheelMap[n],
                                        s = Hr(a, e);
                                    t._constrainIndex(s, a);
                                }
                            });
                    }
                    u && t._validate(s, e.diff > 0 ? 1 : -1),
                        c &&
                            t._tempValueRep.forEach(function (e, n) {
                                var a = t._wheelMap[n],
                                    s = a.data ? a.data.length : 0,
                                    i = t._indexes[n],
                                    r = Hr(a, e) + t._batches[n] * s;
                                (t._activeIndexes[n] = t._lastIndexes[n] = t._indexes[n] = r), (a._offset = s !== l[n] ? r - i : 0);
                            });
                    var p = t._get(t._tempValueRep),
                        v = !t._valueEquals(d, p);
                    v || (e.click && t._live && !t._valueEquals(t.value, p)) ? t._setOrUpdate(!v) : t.forceUpdate(), t._live && h && a.closeOnTap && t.close();
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype._initWheels = function () {
                var e = this,
                    t = 0,
                    n = this.s.wheels || [];
                (this._wheelMap = []),
                    n.forEach(function (n) {
                        n.forEach(function (n) {
                            e._initWheel(n, t), (e._wheelMap[t] = n), t++;
                        });
                    }),
                    (this._wheels = n);
            }),
            (t.prototype._shouldValidate = function (e, t) {
                return !!e.shouldValidate && e.shouldValidate(e, t);
            }),
            (t.prototype._valueEquals = function (e, t) {
                return this.s.valueEquality ? this.s.valueEquality(e, t) : e === t;
            }),
            (t.prototype._render = function (t, n) {
                var a = this,
                    s = this.props || {},
                    i = this._respProps || {},
                    r = this._prevS,
                    o = !!this._touchUi && t.circular,
                    l = this._touchUi ? t.rows : i.rows || s.rows || 7;
                if (
                    ((this._displayStyle = t.displayStyle || t.display),
                    (this._scroll3d = t.scroll3d && this._touchUi && Ht),
                    (t.itemHeight !== r.itemHeight || l !== this._rows) && ((this._rows = l), (this._lineStyle = { height: t.itemHeight + "px" }), this._scroll3d))
                ) {
                    var c = "translateZ(" + ((t.itemHeight * l) / 2 + 3) + "px";
                    (this._overlayStyle = {}), (this._overlayStyle[Lt + "transform"] = c), (this._lineStyle[Lt + "transform"] = "translateY(-50%) " + c);
                }
                (t.wheels === r.wheels && o === this._circular) || ((this._batches = []), (this._shouldSetIndex = !0), (this._circular = o), this._initWheels()),
                    e.prototype._render.call(this, t, n),
                    this._shouldSetIndex && (this._setIndexes(), (this._shouldSetIndex = this._indexFromValue = !1)),
                    t.wheels !== r.wheels &&
                        r.wheels !== ie &&
                        setTimeout(function () {
                            for (var e = 0, t = a._wheelMap; e < t.length; e++) {
                                var n = t[e];
                                a._onWheelIndexChange({ diff: 0, index: a._indexes[n._key], wheel: n });
                            }
                        });
            }),
            (t.prototype._writeValue = function (t, n, a) {
                return this.s.writeValue ? this.s.writeValue(t, n, a) : e.prototype._writeValue.call(this, t, n, a);
            }),
            (t.prototype._copy = function (e) {
                return e.slice(0);
            }),
            (t.prototype._format = function (e) {
                return this.s.formatValue ? this.s.formatValue(e) : e.join(" ");
            }),
            (t.prototype._get = function (e) {
                return this.s.getValue ? this.s.getValue(e) : e;
            }),
            (t.prototype._parse = function (e) {
                if (this.s.parseValue) return this.s.parseValue(e);
                var t = [],
                    n = [],
                    a = 0;
                return (
                    null !== e && e !== ie && (n = (e + "").split(" ")),
                    this._wheels.forEach(function (e) {
                        e.forEach(function (e) {
                            for (var s = e.data || [], i = s.length, r = Ir(s[0]), o = 0; r != n[a] && o < i; ) (r = Ir(s[o])), o++;
                            t.push(r), a++;
                        });
                    }),
                    t
                );
            }),
            (t.prototype._validate = function (e, t) {
                var n = this;
                if (this.s.validate) {
                    var a = this.s.validate.call(this._el, { direction: t, index: e, values: this._tempValueRep.slice(0), wheels: this._wheelMap });
                    (this._disabled = a.disabled),
                        a.init && this._initWheels(),
                        a.indexes &&
                            a.indexes.forEach(function (e, t) {
                                if (e !== ie) {
                                    var a = n._wheelMap[t],
                                        s = Hr(a, e);
                                    n._constrainIndex(s, a);
                                }
                            }),
                        a.valid
                            ? (this._tempValueRep = a.valid.slice(0))
                            : this._wheelMap.forEach(function (e, a) {
                                  n._tempValueRep[a] = Nr(e, n._tempValueRep[a], n._disabled && n._disabled[a], t);
                              });
                }
            }),
            (t.prototype._onOpen = function () {
                (this._batches = []), (this._shouldSetIndex = !0), (this._indexFromValue = !0);
            }),
            (t.prototype._onParse = function () {
                this._shouldSetIndex = !0;
            }),
            (t.prototype._initWheel = function (e, t) {
                var n = this._circular;
                (e._key = t),
                    (e._map = new Map()),
                    (e._circular = n === ie ? (e.circular === ie ? e.data && e.data.length > this._rows : e.circular) : de(n) ? n[t] : n),
                    e.data &&
                        ((e.min = e._circular ? ie : 0),
                        (e.max = e._circular ? ie : e.data.length - 1),
                        e.data.forEach(function (t, n) {
                            e._map.set(Ir(t), n);
                        }));
            }),
            (t.prototype._setIndexes = function () {
                var e = this,
                    t = this._indexes || [];
                (this._indexes = []),
                    (this._activeIndexes = []),
                    this._tempValueRep.forEach(function (n, a) {
                        var s = e._wheelMap[a],
                            i = s.data ? s.data.length : 0,
                            r = Hr(s, n);
                        if (e.s.selectOnScroll) e._activeIndexes[a] = e._indexes[a] = r + (e._batches[a] || 0) * i;
                        else {
                            var o = r;
                            e._indexFromValue ||
                                ((o = t[a]) !== ie &&
                                    (o =
                                        (function (e, t) {
                                            if (e.getItem && e.getIndex) return e.getIndex(Ir(e.getItem(t)));
                                            var n = (e.data || []).length,
                                                a = t % n;
                                            return n ? (a >= 0 ? a : a + n) : 0;
                                        })(s, o) +
                                        (e._batches[a] || 0) * i)),
                                e._constrainIndex(o, s);
                        }
                    });
            }),
            (t.prototype._constrainIndex = function (e, t) {
                var n = t._key;
                e !== ie && t.data ? (t.spaceAround || (e = ce(e, 0, Math.max(t.data.length - this._rows, 0))), (this._activeIndexes[n] = this._indexes[n] = e)) : (this._activeIndexes[n] = this._indexes[n] = this._lastIndexes[n] || 0);
            }),
            (t.defaults = { itemHeight: 40, rows: 5, selectOnScroll: !0, showOnClick: !0 }),
            (t._name = "Scroller"),
            t
        );
    })(ur);
    var Pr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return Er(
                        this,
                        e,
                        (function (e, t) {
                            var n = e.renderPreContent ? e.renderPreContent(e.preContentData) : "",
                                a = e.renderInContent ? e.renderInContent(e.preContentData) : "";
                            return Hn(
                                rn,
                                null,
                                n,
                                Hn(
                                    "div",
                                    {
                                        className:
                                            "mbsc-scroller mbsc-scroller-" +
                                            t._displayStyle +
                                            t._theme +
                                            t._rtl +
                                            (t._touchUi ? " mbsc-scroller-touch" : " mbsc-scroller-pointer") +
                                            ("inline" === e.display ? " mbsc-font " : " ") +
                                            t._className,
                                    },
                                    a,
                                    t._wheels.map(function (n, a) {
                                        return Hn(
                                            "div",
                                            { key: a, className: "mbsc-scroller-wheel-group-cont" + (e.scroll3d ? " mbsc-scroller-wheel-group-cont-3d" : "") + t._theme },
                                            e.selectOnScroll && Hn("div", { className: "mbsc-scroller-wheel-line" + t._theme, style: t._lineStyle }),
                                            Hn(
                                                "div",
                                                { className: "mbsc-scroller-wheel-group" + (e.scroll3d ? " mbsc-scroller-wheel-group-3d" : "") + t._theme },
                                                Hn("div", { className: "mbsc-scroller-wheel-overlay mbsc-scroller-wheel-overlay-" + t._displayStyle + t._theme, style: t._overlayStyle }),
                                                n.map(function (n, a) {
                                                    return Hn(yr, {
                                                        activeIndex: t._activeIndexes[n._key],
                                                        disabled: t._disabled && t._disabled[n._key],
                                                        display: t._displayStyle,
                                                        key: a,
                                                        itemHeight: e.itemHeight,
                                                        onActiveChange: t._onActiveChange,
                                                        onIndexChange: t._onWheelIndexChange,
                                                        onSet: t._onSet,
                                                        maxIndex: n.max,
                                                        maxWheelWidth: e.maxWheelWidth,
                                                        minIndex: n.min,
                                                        minWheelWidth: e.minWheelWidth,
                                                        multiple: n.multiple,
                                                        renderItem: e.renderItem,
                                                        rows: t._rows,
                                                        scroll3d: t._scroll3d,
                                                        selectedIndex: t._indexes[n._key],
                                                        selectedValues: t._tempValueRep[n._key],
                                                        selectOnScroll: e.selectOnScroll,
                                                        theme: e.theme,
                                                        touchUi: e.touchUi,
                                                        rtl: e.rtl,
                                                        wheel: n,
                                                        wheelWidth: e.wheelWidth,
                                                    });
                                                })
                                            )
                                        );
                                    })
                                )
                            );
                        })(e, this)
                    );
                }),
                t
            );
        })(Or),
        zr = { ios: 50, material: 46, windows: 50 },
        Vr = ["a", "h", "i", "s", "tt"];
    function Fr(e, t, n, a, s, i, r, o, l, c, d, h, u, m, _, p) {
        for (var v = la(u, m), f = v || !la(h, m) ? u : Qn(e, u), g = v || !la(h, u) ? m : ea(e, m), y = i.a(f), b = i.a(g), x = !0, T = !0, D = !1, C = 0, S = 0, w = 0; w < n; w++) {
            var k = a[s[(N = Vr[w])]];
            if (k !== ie) {
                var M = x ? i[N](f) : 0,
                    E = T ? i[N](g) : r[N];
                t && 1 === w && ((M += y ? 12 : 0), (E += b ? 12 : 0), (k += a[s.a] ? 12 : 0)), (x || T) && M < k && k < E && (D = !0), k !== M && (x = !1), k !== E && (T = !1);
            }
        }
        if (!_) {
            for (w = n + 1; w < 4; w++) {
                var N;
                s[(N = Vr[w])] !== ie && (i[N](f) > 0 && x && (C = o[l]), i[N](g) < r[N] && T && (S = o[l]));
            }
            T && p && !S && (S = 999 !== g.getMilliseconds() ? o[l] : 0);
        }
        if (x || T || D) for (M = x && !D ? i[l](f) + C : 0, E = T && !D ? i[l](g) - S : r[l], w = M; w <= E; w += o[l]) c[d].set(w, !_);
    }
    function Rr(e, t) {
        var n = new Date(e);
        return t ? Ce(+n / 864e5) : n.getMonth() + 12 * (n.getFullYear() - 1970);
    }
    function Ar(e) {
        return e.getFullYear() + "-" + xe(e.getMonth() + 1) + "-" + xe(e.getDate());
    }
    function Wr(e) {
        return e.getMilliseconds();
    }
    function Ur(e) {
        return e.getHours() > 11 ? 1 : 0;
    }
    var Br = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._preset = "date"),
                (t._innerValues = {}),
                (t._onChange = function (e) {
                    t.s.value === ie && t.setState({ value: e.value }), t._hook("onChange", e);
                }),
                (t._parseDate = function (e) {
                    var n = t.s;
                    return e || (t._innerValues = {}), t._getArray(va(e || n.defaultSelection || new Date(), n, t._format), !!e);
                }),
                (t._formatDate = function (e) {
                    var n = t._getDate(e);
                    return n ? ya(t._format, n, t.s) : "";
                }),
                (t._getDate = function (e) {
                    var n,
                        a,
                        s = t.s,
                        i = t._getArrayPart,
                        r = t._wheelOrder,
                        o = new Date(new Date().setHours(0, 0, 0, 0));
                    if (null === e || e === ie) return null;
                    if (r.dd !== ie) {
                        var l = e[r.dd].split("-");
                        n = new Date(l[0], l[1] - 1, l[2]);
                    }
                    r.tt !== ie && ((a = n || o), (a = new Date(a.getTime() + (e[r.tt] % 86400) * 1e3)));
                    var c = i(e, "y", n, o),
                        d = i(e, "m", n, o),
                        h = Math.min(i(e, "d", n, o), s.getMaxDayOfMonth(c, d)),
                        u = i(e, "h", a, o);
                    return s.getDate(c, d, h, t._hasAmPm && i(e, "a", a, o) ? u + 12 : u, i(e, "i", a, o), i(e, "s", a, o), i(e, "u", a, o));
                }),
                (t._validate = function (e) {
                    var n = e.direction,
                        a = e.index,
                        s = e.values,
                        i = e.wheels,
                        r = [],
                        o = t.s,
                        l = o.stepHour,
                        c = o.stepMinute,
                        d = o.stepSecond,
                        h = o.mode || t._preset,
                        u = t._wheelOrder,
                        m = t._getDatePart,
                        _ = t._max,
                        p = t._min,
                        v = ma(o, t._getDate(s)),
                        f = o.getYear(v),
                        g = o.getMonth(v),
                        y = o.getDate(f, g - 1, 1),
                        b = o.getDate(f, g + 2, 1);
                    (a !== u.y && a !== u.m && a !== u.d && a !== u.dd && a !== ie) || ((t._valids = qi(o.valid, y, b, o, !0)), (t._invalids = qi(o.invalid, y, b, o, !0)));
                    var x = t._valids,
                        T = t._invalids,
                        D = $i(v, o, p ? +p : -1 / 0, _ ? +_ : 1 / 0, T, x, n),
                        C = t._getArray(D),
                        S = t._wheels && t._wheels[0][u.d],
                        w = m.y(D),
                        k = m.m(D),
                        M = o.getMaxDayOfMonth(w, k),
                        E = { y: p ? p.getFullYear() : -1 / 0, m: 0, d: 1, h: 0, i: 0, s: 0, a: 0, tt: 0 },
                        N = { y: _ ? _.getFullYear() : 1 / 0, m: 11, d: 31, h: De(t._hasAmPm ? 11 : 23, l), i: De(59, c), s: De(59, d), a: 1, tt: 86400 },
                        I = { y: 1, m: 1, d: 1, h: l, i: c, s: d, a: 1, tt: t._timeStep },
                        L = !1,
                        H = !0,
                        Y = !0;
                    if (
                        (["dd", "y", "m", "d", "tt", "a", "h", "i", "s"].forEach(function (e) {
                            var t = E[e],
                                n = N[e],
                                a = m[e](D),
                                s = u[e];
                            if ((H && p && (t = m[e](p)), Y && _ && (n = m[e](_)), a < t && (a = t), a > n && (a = n), "dd" === e || "tt" === e || ("a" === e && s === ie) || (H && (H = a === t), Y && (Y = a === n)), s !== ie)) {
                                if (((r[s] = new Map()), "y" !== e && "dd" !== e)) for (var i = E[e]; i <= N[e]; i += I[e]) (i < t || i > n) && r[s].set(i, !0);
                                if ("d" === e && T)
                                    for (var l in T)
                                        if (!x || !x[l]) {
                                            var c = new Date(l),
                                                d = o.getYear(c),
                                                h = o.getMonth(c);
                                            d === w && h === k && Zi(o, c, T, x) && r[s].set(o.getDay(c), !0);
                                        }
                            }
                        }),
                        /time/i.test(h))
                    ) {
                        var O = T && T[na(D)],
                            P = x && x[na(D)];
                        Vr.forEach(function (e, a) {
                            var s = u[e];
                            if (s !== ie) {
                                var l = o.valid ? P : O;
                                if (l) {
                                    if (o.valid) for (var c = 0; c <= N[e]; c++) r[s].set(c, !0);
                                    for (var d = 0, h = l; d < h.length; d++) {
                                        var _ = h[d],
                                            p = _.start,
                                            v = _.end;
                                        p && v && Fr(o, t._hasAmPm, a, C, u, m, N, I, e, r, s, D, p, v, !!o.valid, o.exclusiveEndDates);
                                    }
                                }
                                C[s] = Nr(i[s], m[e](D), r[s], n);
                            }
                        });
                    }
                    var z = t._dateDisplay;
                    if (S && (S.data.length !== M || /DDD/.test(z))) {
                        for (var V = [], F = z.replace(/[my|]/gi, "").replace(/DDDD/, "{dddd}").replace(/DDD/, "{ddd}").replace(/DD/, "{dd}").replace(/D/, "{d}"), R = 1; R <= M; R++) {
                            var A = o.getDate(w, k, R).getDay(),
                                W = F.replace(/{dddd}/, o.dayNames[A])
                                    .replace(/{ddd}/, o.dayNamesShort[A])
                                    .replace(/{dd}/, xe(R) + o.daySuffix)
                                    .replace(/{d}/, R + o.daySuffix);
                            V.push({ display: W, value: R });
                        }
                        (S.data = V), (L = !0);
                    }
                    return { disabled: r, init: L, valid: C };
                }),
                (t._shouldValidate = function (e, t) {
                    return !!((e.min && +e.min != +t.min) || (e.max && +e.max != +t.max)) || e.wheels !== t.wheels || e.dataTimezone !== t.dataTimezone || e.displayTimezone !== t.displayTimezone;
                }),
                (t._setScroller = function (e) {
                    t._scroller = e;
                }),
                (t._getYearValue = function (e) {
                    return { display: (/yy/i.test(t._dateDisplay) ? e : (e + "").substr(2, 2)) + t.s.yearSuffix, value: e };
                }),
                (t._getYearIndex = function (e) {
                    return +e;
                }),
                (t._getDateIndex = function (e) {
                    return Rr(e, t._hasDay);
                }),
                (t._getDateItem = function (e) {
                    var n = t.s,
                        a = t._hasDay,
                        s = new Date(new Date().setHours(0, 0, 0, 0)),
                        i = a ? new Date(864e5 * e) : new Date(1970, e, 1);
                    return (
                        a && (i = new Date(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate())),
                        { disabled: a && Zi(n, i, t._invalids, t._valids), display: s.getTime() === i.getTime() ? n.todayText : ya(t._dateTemplate, i, n), value: Ar(i) }
                    );
                }),
                (t._getArrayPart = function (e, n, a, s) {
                    var i;
                    return t._wheelOrder[n] === ie || ((i = +e[t._wheelOrder[n]]), isNaN(i)) ? (a ? t._getDatePart[n](a) : t._innerValues[n] !== ie ? t._innerValues[n] : t._getDatePart[n](s)) : i;
                }),
                (t._getHours = function (e) {
                    var n = e.getHours();
                    return De((n = t._hasAmPm && n >= 12 ? n - 12 : n), t.s.stepHour);
                }),
                (t._getMinutes = function (e) {
                    return De(e.getMinutes(), t.s.stepMinute);
                }),
                (t._getSeconds = function (e) {
                    return De(e.getSeconds(), t.s.stepSecond);
                }),
                (t._getFullTime = function (e) {
                    return De(Te((e.getTime() - new Date(e).setHours(0, 0, 0, 0)) / 1e3), t._timeStep || 1);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.getVal = function () {
                return this._value;
            }),
            (t.prototype.setVal = function (e) {
                (this._value = e), this.setState({ value: e });
            }),
            (t.prototype.position = function () {
                this._scroller && this._scroller.position();
            }),
            (t.prototype.isVisible = function () {
                return this._scroller && this._scroller.isVisible();
            }),
            (t.prototype._valueEquals = function (e, t) {
                return xa(e, t, this.s);
            }),
            (t.prototype._render = function (e, t) {
                var n = !1,
                    a = this._prevS,
                    s = e.dateFormat,
                    i = e.timeFormat,
                    r = e.mode || this._preset,
                    o = "datetime" === r ? s + e.separator + i : "time" === r ? i : s;
                (this._value = e.value === ie ? t.value : e.value),
                    (this._minWheelWidth = e.minWheelWidth || ("datetime" === r ? zr[e.baseTheme || e.theme] : ie)),
                    (this._dateWheels = e.dateWheels || ("datetime" === r ? e.dateWheelFormat : s)),
                    (this._dateDisplay = e.dateWheels || e.dateDisplay),
                    (this._timeWheels = e.timeWheels || i),
                    (this._timeDisplay = this._timeWheels),
                    (this._format = o),
                    (this._hasAmPm = /h/.test(this._timeDisplay)),
                    (this._getDatePart = { y: e.getYear, m: e.getMonth, d: e.getDay, h: this._getHours, i: this._getMinutes, s: this._getSeconds, u: Wr, a: Ur, dd: Ar, tt: this._getFullTime }),
                    +va(a.min) != +va(e.min) && ((n = !0), (this._min = _e(e.min) ? ie : va(e.min, e, o))),
                    +va(a.max) != +va(e.max) && ((n = !0), (this._max = _e(e.max) ? ie : va(e.max, e, o))),
                    (e.theme !== a.theme || e.mode !== a.mode || e.locale !== a.locale || e.dateWheels !== a.dateWheels || e.timeWheels !== a.timeWheels || n) && (this._wheels = this._getWheels());
            }),
            (t.prototype._getWheels = function () {
                this._wheelOrder = {};
                var e,
                    t = this.s,
                    n = t.mode || this._preset,
                    a = this._hasAmPm,
                    s = this._dateDisplay,
                    i = this._timeDisplay,
                    r = this._wheelOrder,
                    o = [],
                    l = [],
                    c = [],
                    d = 0;
                if (/date/i.test(n)) {
                    for (var h = 0, u = this._dateWheels.split(/\|/.test(this._dateWheels) ? "|" : ""); h < u.length; h++) {
                        var m = 0;
                        if ((y = u[h]).length)
                            if ((/y/i.test(y) && m++, /m/i.test(y) && m++, /d/i.test(y) && m++, m > 1 && r.dd === ie)) (r.dd = d), d++, l.push(this._getDateWheel(y)), (c = l);
                            else if (/y/i.test(y) && r.y === ie)
                                (r.y = d),
                                    d++,
                                    l.push({
                                        cssClass: "mbsc-datetime-year-wheel",
                                        getIndex: this._getYearIndex,
                                        getItem: this._getYearValue,
                                        max: this._max ? t.getYear(this._max) : ie,
                                        min: this._min ? t.getYear(this._min) : ie,
                                        spaceAround: !0,
                                    });
                            else if (/m/i.test(y) && r.m === ie) {
                                (r.m = d), (e = []), d++;
                                for (var _ = s.replace(/[dy|]/gi, "").replace(/MMMM/, "{mmmm}").replace(/MMM/, "{mmm}").replace(/MM/, "{mm}").replace(/M/, "{m}"), p = 0; p < 12; p++) {
                                    var v = _.replace(/{mmmm}/, t.monthNames[p])
                                        .replace(/{mmm}/, t.monthNamesShort[p])
                                        .replace(/{mm}/, xe(p + 1) + (t.monthSuffix || ""))
                                        .replace(/{m}/, p + 1 + (t.monthSuffix || ""));
                                    e.push({ display: v, value: p });
                                }
                                l.push({ cssClass: "mbsc-datetime-month-wheel", data: e, spaceAround: !0 });
                            } else if (/d/i.test(y) && r.d === ie) {
                                (r.d = d), (e = []), d++;
                                for (p = 1; p < 32; p++) e.push({ display: (/dd/i.test(s) ? xe(p) : p) + t.daySuffix, value: p });
                                l.push({ cssClass: "mbsc-datetime-day-wheel", data: e, spaceAround: !0 });
                            }
                    }
                    o.push(l);
                }
                if (/time/i.test(n)) {
                    for (var f = 0, g = this._timeWheels.split(/\|/.test(this._timeWheels) ? "|" : ""); f < g.length; f++) {
                        var y;
                        m = 0;
                        if (((y = g[f]).length && (/h/i.test(y) && m++, /m/i.test(y) && m++, /s/i.test(y) && m++, /a/i.test(y) && m++), m > 1 && r.tt === ie)) (r.tt = d), d++, c.push(this._getTimeWheel(y));
                        else if (/h/i.test(y) && r.h === ie) {
                            (e = []), (r.h = d), d++;
                            for (p = 0; p < (a ? 12 : 24); p += t.stepHour) e.push({ display: a && 0 === p ? 12 : /hh/i.test(i) ? xe(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-hour-wheel", data: e, spaceAround: !0 });
                        } else if (/m/i.test(y) && r.i === ie) {
                            (e = []), (r.i = d), d++;
                            for (p = 0; p < 60; p += t.stepMinute) e.push({ display: /mm/i.test(i) ? xe(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-minute-wheel", data: e, spaceAround: !0 });
                        } else if (/s/i.test(y) && r.s === ie) {
                            (e = []), (r.s = d), d++;
                            for (p = 0; p < 60; p += t.stepSecond) e.push({ display: /ss/i.test(i) ? xe(p) : p, value: p });
                            c.push({ cssClass: "mbsc-datetime-second-wheel", data: e, spaceAround: !0 });
                        } else
                            /a/i.test(y) &&
                                r.a === ie &&
                                ((r.a = d),
                                d++,
                                c.push({
                                    cssClass: "mbsc-dt-whl-a",
                                    data: /A/.test(y)
                                        ? [
                                              { display: t.amText.toUpperCase(), value: 0 },
                                              { display: t.pmText.toUpperCase(), value: 1 },
                                          ]
                                        : [
                                              { display: t.amText, value: 0 },
                                              { display: t.pmText, value: 1 },
                                          ],
                                    spaceAround: !0,
                                }));
                    }
                    c !== l && o.push(c);
                }
                return o;
            }),
            (t.prototype._getDateWheel = function (e) {
                var t = /d/i.test(e);
                return (
                    (this._hasDay = t),
                    (this._dateTemplate = e),
                    { cssClass: "mbsc-datetime-date-wheel", getIndex: this._getDateIndex, getItem: this._getDateItem, label: "", max: this._max ? Rr(Ar(this._max), t) : ie, min: this._min ? Rr(Ar(this._min), t) : ie, spaceAround: !0 }
                );
            }),
            (t.prototype._getTimeWheel = function (e) {
                var t = this.s,
                    n = [],
                    a = 1;
                /s/i.test(e) ? (a = t.stepSecond) : /m/i.test(e) ? (a = 60 * t.stepMinute) : /h/i.test(e) && (a = 3600 * t.stepHour), (this._timeStep = a);
                for (var s = 0; s < 86400; s += a) {
                    var i = new Date(new Date().setHours(0, 0, 0, 0) + 1e3 * s);
                    n.push({ display: ya(e, i, t), value: s });
                }
                return { data: n, label: "", spaceAround: !0 };
            }),
            (t.prototype._getArray = function (e, t) {
                var n = [],
                    a = this._wheelOrder;
                if (null === e || e === ie) return n;
                for (var s = 0, i = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"]; s < i.length; s++) {
                    var r = i[s],
                        o = this._getDatePart[r](e);
                    a[r] !== ie && (n[a[r]] = o), t && (this._innerValues[r] = o);
                }
                return n;
            }),
            (t.defaults = s({}, Jn, { dateDisplay: "MMMMDDYYYY", dateWheelFormat: "|DDD MMM D|", stepHour: 1, stepMinute: 1, stepSecond: 1 })),
            (t._name = "Datetime"),
            t
        );
    })(Ua);
    var jr = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return Hn(
                            Pr,
                            {
                                disabled: e.disabled,
                                endIcon: e.endIcon,
                                endIconSrc: e.endIconSrc,
                                endIconSvg: e.endIconSvg,
                                error: e.error,
                                errorMessage: e.errorMessage,
                                inputStyle: e.inputStyle,
                                label: e.label,
                                labelStyle: e.labelStyle,
                                placeholder: e.placeholder,
                                name: e.name,
                                startIcon: e.startIcon,
                                startIconSrc: e.startIconSrc,
                                startIconSvg: e.startIconSvg,
                                anchor: e.anchor,
                                animation: e.animation,
                                buttons: e.buttons,
                                cancelText: e.cancelText,
                                clearText: e.clearText,
                                closeOnOverlayClick: e.closeOnOverlayClick,
                                context: e.context,
                                display: e.display,
                                focusOnClose: e.focusOnClose,
                                focusTrap: e.focusTrap,
                                headerText: e.headerText,
                                height: e.height,
                                setText: e.setText,
                                showArrow: e.showArrow,
                                showOverlay: e.showOverlay,
                                width: e.width,
                                circular: e.circular,
                                displayStyle: e.displayStyle,
                                formatValue: t._formatDate,
                                getValue: t._getDate,
                                itemHeight: e.itemHeight,
                                maxWheelWidth: e.maxWheelWidth,
                                minWheelWidth: t._minWheelWidth,
                                parseValue: t._parseDate,
                                ref: t._setScroller,
                                rows: e.rows,
                                rtl: e.rtl,
                                shouldValidate: t._shouldValidate,
                                showOnClick: e.showOnClick,
                                showOnFocus: e.showOnFocus,
                                theme: e.theme,
                                themeVariant: e.themeVariant,
                                touchUi: t._touchUi,
                                validate: t._validate,
                                value: t._value,
                                valueEquality: t._valueEquals,
                                wheels: t._wheels,
                                wheelWidth: e.wheelWidth,
                                onChange: t._onChange,
                            },
                            e.children
                        );
                    })(e, this);
                }),
                t
            );
        })(Br),
        Kr = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._preset = "datetime"), t;
            }
            return a(t, e), t;
        })(jr),
        Jr = Nn({}),
        Xr = {};
    function Gr(e, t) {
        return Xr[e] || (Xr[e] = { change: new d(), selectedIndex: -1 }), Xr[e].change.subscribe(t);
    }
    function qr(e, t) {
        var n = Xr[e];
        n && (n.change.unsubscribe(t), n.change.nr || delete Xr[e]);
    }
    function Zr(e, t, n) {
        var a = Xr[e];
        a && (n !== ie && (a.selectedIndex = n), t !== ie && (a.value = t), a.change.next(a.value));
    }
    function $r(e) {
        return Xr[e] && Xr[e].selectedIndex;
    }
    var Qr = 1,
        eo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._id = "mbsc-segmented-group" + Qr++),
                    (t._onChange = function (e, n) {
                        var a = t.s,
                            s = t.value;
                        if ("multiple" === a.select) {
                            if (s !== ie) {
                                var i = (s = s || []).indexOf(n);
                                -1 !== i ? s.splice(i, 1) : s.push(n), (t.value = s.slice());
                            }
                        } else t.value = n;
                        a.onChange && a.onChange(e);
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._setupDrag = function () {
                    var e,
                        t,
                        n,
                        a,
                        s,
                        i,
                        r = this,
                        o = [],
                        l = [];
                    this._unlisten = Ss(this._el, {
                        onEnd: function () {
                            n && a !== s && !o[a] && r._el.querySelectorAll(".mbsc-segmented-input")[a].click();
                            (n = !1), r.setState({ dragging: !1 });
                        },
                        onMove: function (s) {
                            if (n) {
                                for (var c = Math.min(Math.max(s.endX - t, 0), e), d = 0, h = l[0]; c > h && l.length > d + 1; ) d++, (h += l[d]);
                                (d = r.s.rtl ? l.length - 1 - d : d) === a || o[d] || Zr(i, ie, (a = d));
                            }
                        },
                        onStart: function (c) {
                            var d = Xt(c.domEvent.target, ".mbsc-segmented-item", r._el);
                            if (d) {
                                var h = d.querySelector(".mbsc-segmented-input");
                                if (h.classList.contains("mbsc-selected")) {
                                    (o = []),
                                        qt(r._el.querySelectorAll(".mbsc-segmented-button"), function (e) {
                                            o.push(e.classList.contains("mbsc-disabled"));
                                        }),
                                        (l = []),
                                        qt(r._el.querySelectorAll(".mbsc-segmented-item"), function (e) {
                                            l.push(e.clientWidth);
                                        });
                                    (e = r._el.clientWidth - 30), (t = Kt(r._el).left + 15), (i = h.name), (a = $r(i)), (s = a), l.length && "radio" === h.type && ((n = !0), r.setState({ dragging: !0 }));
                                }
                            }
                        },
                    });
                }),
                (t.prototype._cleanupDrag = function () {
                    this._unlisten && (this._unlisten(), (this._unlisten = null));
                }),
                (t.prototype._render = function (e) {
                    (this._name = e.name === ie ? this._id : e.name),
                        (this._groupClass = "mbsc-segmented " + this._className + this._theme + this._rtl + (e.color ? " mbsc-segmented-" + e.color : "") + (this.state.dragging ? " mbsc-segmented-dragging" : "")),
                        (this._groupOpt = { color: e.color, disabled: e.disabled, name: this._name, onChange: this._onChange, select: e.select, value: e.value });
                }),
                (t.prototype._updated = function () {
                    this.s.drag && "multiple" !== this.s.select ? this._unlisten || this._setupDrag() : this._cleanupDrag();
                }),
                (t.prototype._destroy = function () {
                    this._cleanupDrag();
                }),
                (t.defaults = { select: "single" }),
                (t._name = "SegmentedGroup"),
                t
            );
        })(Ua);
    var to = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return Hn(Jr.Provider, { children: ((t = this), (n = e.children), Hn("div", { className: t._groupClass, ref: t._setEl }, n)), value: this._groupOpt });
                    var t, n;
                }),
                t
            );
        })(eo),
        no = 1,
        ao = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._id = "mbsc-segmented-" + no++),
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = e.target.checked;
                        a !== t._checked && (t._change(a), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(a), n.onChange && n.onChange(e));
                    }),
                    (t._onValueChange = function (e) {
                        var n = t.s,
                            a = t._isMultiple ? e && -1 !== e.indexOf(t._value) : e === t._value;
                        n.checked === ie && a !== t.state.selected ? t.setState({ selected: a }) : t.forceUpdate(), t._change(a);
                    }),
                    (t._setBox = function (e) {
                        t._box = e;
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._groupOptions = function (e) {
                    var t = this,
                        n = e.color,
                        a = e.disabled,
                        s = e.name,
                        i = e.onChange,
                        r = e.select,
                        o = e.value,
                        l = this.s,
                        c = this.state,
                        d = this._checked,
                        h = l.modelValue !== ie ? l.modelValue : l.checked,
                        u = h !== ie ? fe(h) : c.selected === ie ? fe(l.defaultChecked) : c.selected;
                    (this._value = l.value === ie ? this._id : l.value),
                        (this._onGroupChange = i),
                        (this._isMultiple = "multiple" === (r || l.select)),
                        (this._name = s === ie ? l.name : s),
                        (this._disabled = a === ie ? (l.disabled === ie ? c.disabled : fe(l.disabled)) : fe(a)),
                        (this._color = n === ie ? l.color : n),
                        (this._checked = o === ie ? u : this._isMultiple ? o && -1 !== o.indexOf(this._value) : o === this._value),
                        this._name && !this._unsubscribe && (this._unsubscribe = Gr(this._name, this._onValueChange)),
                        this._isMultiple ||
                            d ||
                            !this._checked ||
                            setTimeout(function () {
                                t._checked && Zr(t._name, t._value, t._index);
                            }),
                        (this._selectedIndex = $r(this._name)),
                        (this._cssClass =
                            "mbsc-segmented-item " +
                            this._className +
                            this._theme +
                            this._rtl +
                            (this._checked ? " mbsc-segmented-item-checked" : "") +
                            (c.hasFocus ? " mbsc-focus" : "") +
                            (this._index === this._selectedIndex || (this._index === ie && this._checked) || (this._isMultiple && this._checked) ? " mbsc-segmented-item-selected" : ""));
                }),
                (t.prototype._toggle = function (e) {
                    this.s.checked === ie && this.setState({ selected: e });
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    Ot(this._el, Za, this._onChange),
                        (this._unlisten = Ss(this._el, {
                            onBlur: function () {
                                e.setState({ hasFocus: !1 });
                            },
                            onFocus: function () {
                                e.setState({ hasFocus: !0 });
                            },
                        }));
                }),
                (t.prototype._updated = function () {
                    if (!this._isMultiple) {
                        var e = Xt(this._el, ".mbsc-segmented"),
                            t = -1,
                            n = -1;
                        if (e) for (var a = e.querySelectorAll('.mbsc-segmented-input[name="' + this._name + '"]'), s = 0; s < a.length; s++) a[s] === this._el && (t = s), a[s].checked && (n = s);
                        this._index !== t &&
                            -1 !== n &&
                            (function (e, t) {
                                Xr[e] && (Xr[e].selectedIndex = t);
                            })(this._name, n),
                            -1 !== this._selectedIndex && ((this._box.style.transform = "translateX(" + (this.s.rtl ? -1 : 1) * (this._selectedIndex - t) * 100 + "%)"), (this._animate = !0)),
                            -1 !== t && (this._index = t);
                    }
                }),
                (t.prototype._destroy = function () {
                    qr(this._name, this._unsubscribe), Pt(this._el, Za, this._onChange), this._unlisten();
                }),
                (t.defaults = { select: "single" }),
                (t._name = "Segmented"),
                t
            );
        })(Ua);
    var so = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        this._toggle(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    var n = this;
                    return Hn(Jr.Consumer, null, function (a) {
                        return (function (e, t, n, a, s) {
                            return (
                                n._groupOptions(s),
                                Hn(
                                    "label",
                                    { className: n._cssClass },
                                    Hn("input", {
                                        ref: n._setEl,
                                        "aria-labelledby": n._id,
                                        checked: n._checked,
                                        className: "mbsc-segmented-input mbsc-reset " + (e.inputClass || "") + n._theme + (n._checked ? " mbsc-selected" : ""),
                                        disabled: n._disabled,
                                        name: n._isMultiple ? e.name : n._name,
                                        onChange: be,
                                        type: n._isMultiple ? "checkbox" : "radio",
                                        value: n._value,
                                    }),
                                    Hn(
                                        "div",
                                        { ref: n._setBox, className: "mbsc-segmented-selectbox" + n._theme + (n._animate ? " mbsc-segmented-selectbox-animate" : "") + (n._checked ? " mbsc-selected" : "") },
                                        Hn("div", {
                                            className: "mbsc-segmented-selectbox-inner" + n._theme + (n._index === n._selectedIndex || n._checked ? " mbsc-segmented-selectbox-inner-visible" : "") + (n._checked ? " mbsc-selected" : ""),
                                        })
                                    ),
                                    Hn(
                                        zs,
                                        {
                                            "aria-hidden": !0,
                                            ariaLabel: e.ariaLabel,
                                            className: "mbsc-segmented-button" + (n._checked ? " mbsc-selected" : "") + (t.hasFocus ? " mbsc-focus" : ""),
                                            color: n._color,
                                            disabled: n._disabled,
                                            endIcon: e.endIcon,
                                            endIconSrc: e.endIconSrc,
                                            endIconSvg: e.endIconSvg,
                                            icon: e.icon,
                                            iconSrc: e.iconSrc,
                                            iconSvg: e.iconSvg,
                                            id: n._id,
                                            ripple: e.ripple,
                                            rtl: e.rtl,
                                            startIcon: e.startIcon,
                                            startIconSrc: e.startIconSrc,
                                            startIconSvg: e.startIconSvg,
                                            tag: "span",
                                            tabIndex: -1,
                                            theme: e.theme,
                                            themeVariant: e.themeVariant,
                                        },
                                        a
                                    )
                                )
                            );
                        })(e, t, n, e.children, a);
                    });
                }),
                t
            );
        })(ao),
        io = {
            hasChildren: !0,
            parentClass: "mbsc-segmented-button",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function (e, t) {
                (t.select = "checkbox" === e.type ? "multiple" : "single"), (t.defaultChecked = e.checked), (t.inputClass = e.getAttribute("class") || "");
                var n = e.parentNode,
                    a = n.parentNode;
                if (null === a.getAttribute("mbsc-segmented-group")) {
                    var s = vt.createElement("div");
                    s.setAttribute("mbsc-segmented-group", ""),
                        a.insertBefore(s, n),
                        s.appendChild(n),
                        qt(a.querySelectorAll('input[name="' + e.name + '"]'), function (e) {
                            s.appendChild(e.parentNode);
                        });
                }
            },
        },
        ro = { hasChildren: !0, parentClass: "mbsc-segmented" };
    function oo(e) {
        var t = e.disabled,
            n = e.selected,
            a = e.theme,
            s = e.timeSlot,
            i = e.onClick,
            r = e.onKeyDown;
        return Hn(
            "div",
            {
                className: "mbsc-timegrid-item" + (n ? " mbsc-selected" : "") + (t ? " mbsc-disabled" : "") + a,
                onClick: function () {
                    return i(s);
                },
                onKeyDown: r,
                tabIndex: t ? ie : 0,
                "data-timeslot": s.value,
            },
            s.formattedValue
        );
    }
    var lo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._setTime = function (e) {
                    t._hook("onChange", { value: pa(t.s, e.value) });
                }),
                (t._isDisabled = function (e) {
                    if (e) {
                        var n = na(pa(t.s, e)),
                            a = t._invalids && t._invalids[n],
                            s = t._valids && t._valids[n],
                            i = t.s.exclusiveEndDates;
                        if (s) {
                            for (var r = 0, o = s; r < o.length; r++) {
                                var l = o[r],
                                    c = l.end && (i ? e < +l.end : e <= +l.end);
                                if ((l.start && e >= +l.start && c) || l.allDay) return !1;
                            }
                            return !0;
                        }
                        if (a) {
                            for (var d = 0, h = a; d < h.length; d++) {
                                var u = h[d];
                                c = u.end && (i ? e < +u.end : e <= +u.end);
                                if ((u.start && e >= +u.start && c) || u.allDay) return !0;
                            }
                            return !1;
                        }
                    }
                    return !1;
                }),
                (t._onKeyDown = function (e) {
                    if (e.keyCode === ks) e.target.click(), e.preventDefault();
                }),
                (t._setCont = function (e) {
                    t._gridContEl = e && e.parentElement;
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype._render = function (e, t) {
                var n = this,
                    a = this._prevS;
                this._cssClass = "mbsc-timegrid-container mbsc-font" + this._theme + this._rtl;
                var s = e.min !== a.min,
                    i = e.max !== a.max,
                    r = e.timeFormat,
                    o = (a.value && !e.value) || (e.value && +e.value !== this._value);
                s && (this._min = _e(e.min) ? ie : va(e.min, e, r)), i && (this._max = _e(e.max) ? ie : va(e.max, e, r));
                var l = aa(e.value || pa(e)),
                    c = Da(l, 1),
                    d = this._selectedDate !== +l,
                    h = e.invalid !== a.invalid,
                    u = e.valid !== a.valid;
                (h || d) && (this._invalids = qi(e.invalid, l, c, e, !0)), (u || d) && (this._valids = qi(e.valid, l, c, e, !0)), o && (this._value = e.value && +e.value);
                var m = d || h || s || i || r !== a.timeFormat;
                if (m) {
                    this._selectedDate = +l;
                    var _ = Math.max(+l, +(this._min || -1 / 0)),
                        p = Math.min(+c, +(this._max || 1 / 0) + 1),
                        v = 36e5 * e.stepHour + 6e4 * e.stepMinute;
                    (this._timeSlots = []), (this._validTimes = []);
                    for (var f = [], g = 0, y = +l; y < +c; y += v)
                        if (p >= _ ? y >= _ && y < p : y >= _ || y < p) {
                            var b = { formattedValue: ya(r, pa(e, y), e), value: y };
                            f.push(b), 2 === g && (this._timeSlots.push(f), (f = []), (g = -1)), this._isDisabled(y) || this._validTimes.push(b), g++;
                        }
                    f.length && this._timeSlots.push(f);
                }
                if (
                    this._isDisabled(this._value) ||
                    ((o || m) &&
                        -1 ===
                            Ne(this._validTimes, function (e) {
                                return e.value === n._value;
                            }))
                ) {
                    var x = (function (e, t) {
                        if (null == t || !e.length) return null;
                        for (var n = 0; n < e.length && t >= e[n]; ) n++;
                        if (n === e.length) return e[n - 1];
                        if (0 === n) return e[0];
                        var a = e[n - 1],
                            s = e[n];
                        return t - a < s - t ? a : s;
                    })(
                        this._validTimes.map(function (e) {
                            return e.value;
                        }),
                        this._value
                    );
                    x &&
                        (clearTimeout(this._validationHandle),
                        (this._validationHandle = setTimeout(function () {
                            var e = Ee(n._validTimes, function (e) {
                                return e.value === x;
                            });
                            n._setTime(e);
                        })));
                } else m && clearTimeout(this._validationHandle);
                this._valueChanged = this._valueChanged || o;
            }),
            (t.prototype._updated = function () {
                if (this._value !== ie && (this._valueChanged || (this._isOpen !== this.s.isOpen && this.s.isOpen))) {
                    var e = this._lastValue !== ie,
                        t = this._gridContEl,
                        n = t.querySelector('[data-timeslot="' + this._value + '"]');
                    n &&
                        setTimeout(function () {
                            var a = n.getBoundingClientRect(),
                                s = a.top,
                                i = a.height,
                                r = t.getBoundingClientRect(),
                                o = r.top,
                                l = r.height,
                                c = Rt(t);
                            (s + i > o + l || s < o) && jt(t, ie, s - o + c - 5, e);
                        }),
                        (this._valueChanged = !1),
                        (this._lastValue = this._value);
                }
                this._isOpen = this.s.isOpen;
            }),
            (t.defaults = s({}, Jn, { stepHour: 0, stepMinute: 30 })),
            (t._name = "Timegrid"),
            t
        );
    })(Ua);
    var co,
        ho = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return Hn(
                        "div",
                        { className: (t = this)._cssClass, ref: t._setCont },
                        t._timeSlots.map(function (e, n) {
                            return Hn(
                                "div",
                                { className: "mbsc-timegrid-row", key: n },
                                e.map(function (e, a) {
                                    var s = t._isDisabled(e.value);
                                    return Hn(
                                        "div",
                                        { className: "mbsc-timegrid-cell" + (s ? " mbsc-disabled" : ""), key: a },
                                        Hn("div", { dangerouslySetInnerHTML: t.textParamMulti(3 * n + a) }),
                                        Hn(oo, { disabled: s, onKeyDown: t._onKeyDown, selected: t._value === e.value, timeSlot: e, onClick: t._setTime, theme: t._theme })
                                    );
                                })
                            );
                        })
                    );
                    var t;
                }),
                t
            );
        })(lo);
    function uo(e) {
        return co || (co = _o.luxon.DateTime.local().zoneName), e && "local" !== e ? e : co;
    }
    var mo = (function () {
            function e(e, t) {
                void 0 === t && (t = "utc"), (this._mbsc = !0), (t = uo(t));
                var n = _o.luxon.DateTime,
                    a = { zone: t };
                if (((this.zone = t), pe(e))) this.dt = n.utc().setZone(t);
                else if (ha(e) || ue(e)) this.dt = n.fromMillis(+e, a);
                else if (me(e)) this.dt = n.fromISO(e, a);
                else if (de(e)) {
                    for (var i = ["year", "month", "day", "hour", "minute", "second", "millisecond"], r = {}, o = 0; o < e.length && o < 7; o++) r[i[o]] = e[o] + (1 === o ? 1 : 0);
                    (_o.version =
                        _o.version ||
                        (function (e) {
                            var t = e.fromObject.toString().trim();
                            return /^(function )?\w*\(\w+\)/.test(t) ? 1 : 2;
                        })(n)),
                        1 === _o.version ? (this.dt = n.fromObject(s({}, r, a))) : (this.dt = n.fromObject(r, a));
                }
            }
            return (
                (e.prototype.clone = function () {
                    return new e(this, this.zone);
                }),
                (e.prototype.createDate = function (e, t, n, a, s, i, r) {
                    return _o.createDate({ displayTimezone: this.zone }, e, t, n, a, s, i, r);
                }),
                (e.prototype[Symbol.toPrimitive] = function (e) {
                    return this.dt.toJSDate()[Symbol.toPrimitive](e);
                }),
                (e.prototype.toDateString = function () {
                    return this.dt.toFormat("ccc MMM dd yyyy");
                }),
                (e.prototype.toISOString = function () {
                    return this.dt.toISO();
                }),
                (e.prototype.toJSON = function () {
                    return this.dt.toISO();
                }),
                (e.prototype.valueOf = function () {
                    return this.dt.valueOf();
                }),
                (e.prototype.getDate = function () {
                    return this.dt.day;
                }),
                (e.prototype.getDay = function () {
                    return this.dt.weekday % 7;
                }),
                (e.prototype.getFullYear = function () {
                    return this.dt.year;
                }),
                (e.prototype.getHours = function () {
                    return this.dt.hour;
                }),
                (e.prototype.getMilliseconds = function () {
                    return this.dt.millisecond;
                }),
                (e.prototype.getMinutes = function () {
                    return this.dt.minute;
                }),
                (e.prototype.getMonth = function () {
                    return this.dt.month - 1;
                }),
                (e.prototype.getSeconds = function () {
                    return this.dt.second;
                }),
                (e.prototype.getTime = function () {
                    return this.valueOf();
                }),
                (e.prototype.getTimezoneOffset = function () {
                    return -this.dt.offset;
                }),
                (e.prototype.getUTCDate = function () {
                    return this.dt.toUTC().day;
                }),
                (e.prototype.getUTCDay = function () {
                    return this.dt.toUTC().weekday % 7;
                }),
                (e.prototype.getUTCFullYear = function () {
                    return this.dt.toUTC().year;
                }),
                (e.prototype.getUTCHours = function () {
                    return this.dt.toUTC().hour;
                }),
                (e.prototype.getUTCMilliseconds = function () {
                    return this.dt.toUTC().millisecond;
                }),
                (e.prototype.getUTCMinutes = function () {
                    return this.dt.toUTC().minute;
                }),
                (e.prototype.getUTCMonth = function () {
                    return this.dt.toUTC().month - 1;
                }),
                (e.prototype.getUTCSeconds = function () {
                    return this.dt.toUTC().second;
                }),
                (e.prototype.setMilliseconds = function (e) {
                    return this.setter({ millisecond: e });
                }),
                (e.prototype.setSeconds = function (e, t) {
                    return this.setter({ second: e, millisecond: t });
                }),
                (e.prototype.setMinutes = function (e, t, n) {
                    return this.setter({ minute: e, second: t, millisecond: n });
                }),
                (e.prototype.setHours = function (e, t, n, a) {
                    return this.setter({ hour: e, minute: t, second: n, millisecond: a });
                }),
                (e.prototype.setDate = function (e) {
                    return this.setter({ day: e });
                }),
                (e.prototype.setMonth = function (e, t) {
                    return e++, this.setter({ month: e, day: t });
                }),
                (e.prototype.setFullYear = function (e, t, n) {
                    return this.setter({ year: e, month: t, day: n });
                }),
                (e.prototype.setTime = function (e) {
                    return (this.dt = _o.luxon.DateTime.fromMillis(e)), this.dt.valueOf();
                }),
                (e.prototype.setTimezone = function (e) {
                    (e = uo(e)), (this.zone = e), (this.dt = this.dt.setZone(e));
                }),
                (e.prototype.setUTCMilliseconds = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCSeconds = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCMinutes = function (e, t, n) {
                    return 0;
                }),
                (e.prototype.setUTCHours = function (e, t, n, a) {
                    return 0;
                }),
                (e.prototype.setUTCDate = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCMonth = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCFullYear = function (e, t, n) {
                    return 0;
                }),
                (e.prototype.toUTCString = function () {
                    return "";
                }),
                (e.prototype.toTimeString = function () {
                    return "";
                }),
                (e.prototype.toLocaleDateString = function () {
                    return "";
                }),
                (e.prototype.toLocaleTimeString = function () {
                    return "";
                }),
                (e.prototype.setter = function (e) {
                    return (this.dt = this.dt.set(e)), this.dt.valueOf();
                }),
                e
            );
        })(),
        _o = {
            luxon: ie,
            version: ie,
            parse: function (e, t) {
                return new mo(e, t.dataTimezone || t.displayTimezone);
            },
            createDate: function (e, t, n, a, s, i, r, o) {
                var l = e.displayTimezone;
                return ve(t) || me(t) || pe(n) ? new mo(t, l) : new mo([t || 1970, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0], l);
            },
        };
    function po(e) {
        return e && "local" !== e ? e : fo.moment.tz.guess();
    }
    var vo = (function () {
            function e(e, t) {
                (this._mbsc = !0), (this.timezone = po(t)), this.init(e);
            }
            return (
                (e.prototype.clone = function () {
                    return new e(this, this.timezone);
                }),
                (e.prototype.createDate = function (e, t, n, a, s, i, r) {
                    return fo.createDate({ displayTimezone: this.timezone }, e, t, n, a, s, i, r);
                }),
                (e.prototype[Symbol.toPrimitive] = function (e) {
                    return this.m.toDate()[Symbol.toPrimitive](e);
                }),
                (e.prototype.toDateString = function () {
                    return this.m.format("ddd MMM DD YYYY");
                }),
                (e.prototype.toISOString = function () {
                    return this.m.toISOString(!0);
                }),
                (e.prototype.toJSON = function () {
                    return this.m.toISOString();
                }),
                (e.prototype.valueOf = function () {
                    return this.m.valueOf();
                }),
                (e.prototype.getDate = function () {
                    return this.m.date();
                }),
                (e.prototype.getDay = function () {
                    return this.m.day();
                }),
                (e.prototype.getFullYear = function () {
                    return this.m.year();
                }),
                (e.prototype.getHours = function () {
                    return this.m.hours();
                }),
                (e.prototype.getMilliseconds = function () {
                    return this.m.milliseconds();
                }),
                (e.prototype.getMinutes = function () {
                    return this.m.minutes();
                }),
                (e.prototype.getMonth = function () {
                    return this.m.month();
                }),
                (e.prototype.getSeconds = function () {
                    return this.m.seconds();
                }),
                (e.prototype.getTime = function () {
                    return this.m.valueOf();
                }),
                (e.prototype.getTimezoneOffset = function () {
                    return -this.m.utcOffset();
                }),
                (e.prototype.getUTCDate = function () {
                    return this.utc().date();
                }),
                (e.prototype.getUTCDay = function () {
                    return this.utc().day();
                }),
                (e.prototype.getUTCFullYear = function () {
                    return this.utc().year();
                }),
                (e.prototype.getUTCHours = function () {
                    return this.utc().hours();
                }),
                (e.prototype.getUTCMilliseconds = function () {
                    return this.utc().milliseconds();
                }),
                (e.prototype.getUTCMinutes = function () {
                    return this.utc().minutes();
                }),
                (e.prototype.getUTCMonth = function () {
                    return this.utc().month();
                }),
                (e.prototype.getUTCSeconds = function () {
                    return this.utc().seconds();
                }),
                (e.prototype.setMilliseconds = function (e) {
                    return +this.m.set({ millisecond: e });
                }),
                (e.prototype.setSeconds = function (e, t) {
                    return +this.m.set({ seconds: e, milliseconds: t });
                }),
                (e.prototype.setMinutes = function (e, t, n) {
                    return +this.m.set({ minutes: e, seconds: t, milliseconds: n });
                }),
                (e.prototype.setHours = function (e, t, n, a) {
                    return +this.m.set({ hours: e, minutes: t, seconds: n, milliseconds: a });
                }),
                (e.prototype.setDate = function (e) {
                    return +this.m.set({ date: e });
                }),
                (e.prototype.setMonth = function (e, t) {
                    return +this.m.set({ month: e, date: t });
                }),
                (e.prototype.setFullYear = function (e, t, n) {
                    return +this.m.set({ year: e, month: t, date: n });
                }),
                (e.prototype.setTime = function (e) {
                    return this.init(e), this.m.valueOf();
                }),
                (e.prototype.setTimezone = function (e) {
                    (this.timezone = po(e)), this.m.tz(this.timezone);
                }),
                (e.prototype.setUTCMilliseconds = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCSeconds = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCMinutes = function (e, t, n) {
                    return 0;
                }),
                (e.prototype.setUTCHours = function (e, t, n, a) {
                    return 0;
                }),
                (e.prototype.setUTCDate = function (e) {
                    return 0;
                }),
                (e.prototype.setUTCMonth = function (e, t) {
                    return 0;
                }),
                (e.prototype.setUTCFullYear = function (e, t, n) {
                    return 0;
                }),
                (e.prototype.toUTCString = function () {
                    return "";
                }),
                (e.prototype.toTimeString = function () {
                    return "";
                }),
                (e.prototype.toLocaleDateString = function () {
                    return "";
                }),
                (e.prototype.toLocaleTimeString = function () {
                    return "";
                }),
                (e.prototype.init = function (e) {
                    var t = fo.moment.tz,
                        n = pe(e) || me(e) || ue(e) || de(e) ? e : +e,
                        a = me(e) && Gn.test(e);
                    this.m = a ? t(n, "HH:mm:ss", this.timezone) : t(n, this.timezone);
                }),
                (e.prototype.utc = function () {
                    return this.m.clone().utc();
                }),
                e
            );
        })(),
        fo = {
            moment: ie,
            parse: function (e, t) {
                return new vo(e, t.dataTimezone || t.displayTimezone);
            },
            createDate: function (e, t, n, a, s, i, r, o) {
                var l = e.displayTimezone;
                return ve(t) || me(t) || pe(n) ? new vo(t, l) : new vo([t || 1970, n || 0, a || 1, s || 0, i || 0, r || 0, o || 0], l);
            },
        },
        go = {},
        yo = " - ",
        bo = ["calendar"],
        xo = [{ recurring: { repeat: "daily" } }];
    function To(e) {
        return "start" === e ? "end" : "start";
    }
    function Do(e, t) {
        var n = oa(new Date(e), t, t.firstSelectDay !== ie ? t.firstSelectDay : t.firstDay),
            a = new Date(n.getFullYear(), n.getMonth(), n.getDate() + t.selectSize - 1);
        return { start: n, end: a };
    }
    var Co = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._iso = {}),
                (t._remote = 0),
                (t._onActiveChange = function (e) {
                    (t._active = e.date), t.forceUpdate();
                }),
                (t._onResize = function (e) {
                    var n = e.windowWidth;
                    (e.cancel = t.state.width !== n), t.setState({ isLarge: e.isLarge, maxPopupWidth: e.maxPopupWidth, width: n, widthType: n > 600 ? "md" : "sm" });
                }),
                (t._onDayHoverIn = function (e) {
                    var n = e.date,
                        a = e.hidden;
                    t.setState({ hoverDate: a ? ie : +n });
                }),
                (t._onDayHoverOut = function (e) {
                    var n = e.date;
                    t.state.hoverDate === +n && t.setState({ hoverDate: ie });
                }),
                (t._onCellClick = function (e) {
                    (t._lastSelected = ma(t.s, e.date)), (e.active = t._activeSelect), t._hook("onCellClick", e);
                }),
                (t._onCalendarChange = function (e) {
                    t._tempValueSet = !1;
                    var n = t.s,
                        a = t._copy(t._tempValueRep),
                        s = Le(e.value, function (e) {
                            return ma(n, e);
                        }),
                        i = "preset-range" === n.select,
                        r = "range" === n.select,
                        o = r && t._newSelection,
                        l = (r || i) && n.exclusiveEndDates && !t._hasTime;
                    if ((l && a.end && (a.end = +Qn(n, pa(n, a.end - 1))), t._hasTime && t._selectedTime && !r))
                        if (t.s.selectMultiple) {
                            var c = s[s.length - 1];
                            c && c.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                        } else s.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes());
                    if (r || i) {
                        var d = t._getDate(a),
                            h = d.filter(function (e) {
                                return null !== e;
                            }),
                            u = h.map(function (e) {
                                return +e;
                            }),
                            m = h.map(function (e) {
                                return +aa(e);
                            }),
                            _ = s.filter(function (e) {
                                return m.indexOf(+e) < 0;
                            })[0];
                        if (i) {
                            if (_) {
                                var p = Do(+_, n),
                                    v = p.start,
                                    f = p.end;
                                (a.start = +v), (a.end = +f);
                            }
                        } else {
                            var g = !t._hasTime,
                                y = t._renderControls,
                                b = t._activeSelect,
                                x = To(b);
                            if (_) {
                                switch ((t._hasTime && t._selectedTime && _.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), u.length)) {
                                    case 0:
                                        (a = {})[b] = +_;
                                        break;
                                    case 1:
                                        if (y) {
                                            a[b] = +_;
                                            break;
                                        }
                                        u[0] > +_ || "start" === t._activeSelect ? (t._hasTime ? (a[b] = +_) : ((a = { start: +_ }), (g = !1))) : (a.end = +_);
                                        break;
                                    case 2:
                                        if (y) {
                                            a[b] = +_;
                                            break;
                                        }
                                        u[0] > +_ || "start" === t._activeSelect ? (t._hasTime ? (a[b] = +_) : ((a = { start: +_ }), "end" === t._activeSelect && (g = !1))) : "end" === t._activeSelect && (a.end = +_);
                                }
                                y && a.start && a.end && a.start > a.end && ((a = { start: +_ }), t._setActiveSelect("end"));
                            } else {
                                var T = void 0;
                                (T = 1 === u.length ? pa(n, u[0]) : t._lastSelected),
                                    t._hasTime && t._selectedTime
                                        ? T.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds())
                                        : !n.exclusiveEndDates && !t._hasTime && "end" === t._activeSelect && d[0] && la(T, d[0]) && T.setHours(23, 59, 59, 999),
                                    y || t._hasTime ? (a[b] = +T) : "start" === t._activeSelect ? (a = { start: +T }) : (a.end = +T);
                            }
                            if (a.start && a.end) {
                                if (a.start > a.end) {
                                    var D = pa(n, a.start),
                                        C = pa(n, a.end);
                                    la(D, C) ? (C.setHours(D.getHours(), D.getMinutes(), D.getSeconds(), D.getMilliseconds()), (a.end = +C)) : (a.end = ie);
                                }
                                if (n.minRange && a.end) {
                                    var S = t._hasTime ? a.start + n.minRange : +Da(pa(n, a.start), n.minRange - 1);
                                    a.end < S && (!t._hasTime || "start" === b) && (a.end = ie);
                                }
                                if (n.maxRange && a.end) {
                                    S = t._hasTime ? a.start + n.maxRange : +Da(pa(n, a.start), n.maxRange) - 1;
                                    a.end > S && (!t._hasTime || "start" === b) && (a.end = ie);
                                }
                                if (a.end && "start" === b && !n.inRangeInvalid) {
                                    var w = n.valid ? Da(Ji(n.valid, pa(n, a.start), n), 1) : Ki(n.invalid || [], pa(n, a.start), n);
                                    null !== w && +w < a.end && (a.end = ie);
                                }
                            }
                            g && (t._newSelection || !t._renderControls || (t._newSelection === ie && "inline" === t.s.display)) && (t._setActiveSelect(x), (t._newSelection = !1));
                        }
                    } else if (((a = { date: {} }), t.s.selectMultiple))
                        for (var k = 0, M = s; k < M.length; k++) {
                            var E = M[k];
                            a.date[+E] = E;
                        }
                    else {
                        if (t._hasTime) {
                            var N = t._selectedTime || new Date();
                            s.setHours(N.getHours(), N.getMinutes(), N.getSeconds(), N.getMilliseconds());
                        }
                        a.date[+s] = s;
                    }
                    (t._tempValueRep = a), l && a.end && (a.end = +Qn(n, Da(pa(n, a.end), 1))), t._setOrUpdate(), !t._live || (t.s.selectMultiple && !r) || t._hasTime || (r && (!a.start || !a.end || o)) || t.close();
                }),
                (t._onDatetimeChange = function (e) {
                    var n = t.s,
                        a = "range" === n.select,
                        s = ma(n, e.value),
                        i = t._hasTime ? s : aa(s),
                        r = +i;
                    t._tempValueSet = !1;
                    var o = t._copy(t._tempValueRep),
                        l = a && n.exclusiveEndDates && !t._hasTime;
                    if ((l && o.end && (o.end = +Qn(n, pa(n, o.end - 1))), a))
                        if ("start" === t._activeSelect) {
                            if ((t._hasTime && t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds()), (o.start = r), o.end)) {
                                var c = n.minRange && !t._hasTime ? 24 * (n.minRange - 1) * 60 * 60 * 1e3 - 1 : n.minRange || 0;
                                o.end - o.start < c && (o.end = ie);
                            }
                        } else
                            t._hasTime
                                ? t._selectedTime && i.setHours(t._selectedTime.getHours(), t._selectedTime.getMinutes(), t._selectedTime.getSeconds(), t._selectedTime.getMilliseconds())
                                : o.start !== +aa(i) || n.exclusiveEndDates || i.setHours(23, 59, 59, 999),
                                (o.end = +i);
                    else {
                        if (t._hasTime && t._hasDate && n.controls.indexOf("datetime") < 0) {
                            var d = t._selectedTime || new Date();
                            i.setHours(d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
                        } else t._selectedTime = pa(n, i);
                        (o = { date: {} }).date[+i] = i;
                    }
                    (t._tempValueRep = o), l && o.end && (o.end = +Qn(n, Da(pa(n, o.end), 1))), t._setOrUpdate();
                }),
                (t._onTimePartChange = function (e) {
                    t._tempValueSet = !1;
                    var n = t.s,
                        a = "range" === n.select,
                        s = ma(n, e.value);
                    if (((t._selectedTime = s), a)) {
                        var i = t._getDate(t._tempValueRep),
                            r = "start" === t._activeSelect ? 0 : 1;
                        if (i[r]) (o = pa(n, i[r])).setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), (i[r] = o), "start" === t._activeSelect && +o > +i[1] && (i.length = 1), (t._tempValueRep = t._parse(i));
                        else t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds());
                    } else if (!n.selectMultiple) {
                        var o;
                        (o = t._getDate(t._tempValueRep))
                            ? (o.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), (t._tempValueRep = { date: {} }), (t._tempValueRep.date[+o] = o))
                            : (t._selectedTime.setHours(s.getHours(), s.getMinutes(), s.getSeconds(), s.getMilliseconds()), t._live && t.forceUpdate());
                    }
                    t._setOrUpdate();
                }),
                (t._changeActiveTab = function (e) {
                    t.setState({ activeTab: e.target.value });
                }),
                (t._changeActiveSelect = function (e) {
                    var n = e.target.value;
                    t._setActiveSelect(n), t.setActiveDate(n);
                }),
                (t._clearEnd = function () {
                    (t._tempValueRep.end = ie), t._hasTimegrid && (t._selectedTime = ie), t._setOrUpdate();
                }),
                (t._clearStart = function () {
                    (t._tempValueRep = {}), (t._newSelection = !0), t._hasTimegrid && (t._selectedTime = ie), t._setOrUpdate();
                }),
                (t._proxy = function (e) {
                    t._hook(e.type, e);
                }),
                (t._onInputClickRange = function (e) {
                    var n = e.target === t._startInput || t._renderControls ? "start" : "end";
                    t._setActiveSelect(n);
                }),
                (t._onInputChangeRange = function (e) {
                    var n = t._startInput,
                        a = t._endInput,
                        s = (n ? n.value : "") + (a && a.value ? yo + a.value : "");
                    t._onInputChange(e, s);
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.setActiveDate = function (e) {
                var t = To(e);
                this._activeSelect = e;
                var n = this._tempValueRep[e],
                    a = this._tempValueRep[t];
                (this._tempValueRep.start && this._tempValueRep.end) || (!n && a) ? (this._newSelection = !1) : n && !a && (this._newSelection = !0),
                    n && (this._active = n),
                    !n && this._hasTimegrid && (this._selectedTime = ie),
                    this.forceUpdate();
            }),
            (t.prototype.getTempVal = function () {
                return e.prototype.getTempVal.call(this);
            }),
            (t.prototype.setTempVal = function (t) {
                e.prototype.setTempVal.call(this, t);
            }),
            (t.prototype.navigate = function (e) {
                (this._active = +va(e)), this.forceUpdate();
            }),
            (t.prototype._shouldValidate = function (e, t) {
                return (
                    e.controls !== t.controls ||
                    e.dataTimezone !== t.dataTimezone ||
                    e.displayTimezone !== t.displayTimezone ||
                    e.dateFormat !== t.dateFormat ||
                    e.timeFormat !== t.timeFormat ||
                    e.locale !== t.locale ||
                    e.min !== t.min ||
                    e.max !== t.max
                );
            }),
            (t.prototype._valueEquals = function (e, t) {
                var n = (de(e) && 0 === e.length) || e === ie || null === e,
                    a = (de(t) && 0 === t.length) || t === ie || null === t;
                return (n && n === a) || xa(e, t, this.s);
            }),
            (t.prototype.setVal = function (t) {
                if ("range" === this.s.select) {
                    var n = t[0],
                        a = t[1];
                    (this._savedStartValue = +va(n, this.s, this._valueFormat)), (this._savedEndValue = +va(a, this.s, this._valueFormat));
                }
                e.prototype.setVal.call(this, t);
            }),
            (t.prototype._init = function () {
                this.props.modules &&
                    this.props.modules.forEach(function (e) {
                        go[e._name] = e;
                    });
            }),
            (t.prototype._render = function (t, n) {
                var a = this;
                t.inRangeInvalid && (t.rangeEndInvalid = !1), "preset-range" === t.select && (t.controls = bo), t.exclusiveEndDates === ie && (t.exclusiveEndDates = !!t.displayTimezone);
                var r = this._hasTime,
                    o = (this._hasDate = !!Ee(t.controls, function (e) {
                        return /date|calendar/.test(e);
                    })),
                    l = (this._hasTime = !!Ee(t.controls, function (e) {
                        return /time/.test(e);
                    }));
                l || (t.timezonePlugin = t.dataTimezone = t.displayTimezone = ie), !t.valid || (t.invalid && !l) || (t.invalid = xo);
                var c = this._prevS;
                t.buttons;
                var d = t.calendarSize;
                t.children, t.className;
                var h = t.controls;
                t.cssClass, t.element, t.onDestroy, t.onInit, t.onTempChange, t.responsive;
                var u = t.select,
                    m = t.selectMultiple,
                    _ = t.tabs,
                    p = i(t, ["buttons", "calendarSize", "children", "className", "controls", "cssClass", "element", "onDestroy", "onInit", "onTempChange", "responsive", "select", "selectMultiple", "tabs"]),
                    v = n.widthType || "sm",
                    f = "date" !== u;
                if (((this._renderTabs = h.length > 1 && ("auto" === _ ? "sm" === v : _)), u !== c.select && this._tempValueRep))
                    if (f && this._tempValueRep.date) {
                        var g = Object.keys(this._tempValueRep.date)
                                .map(function (e) {
                                    return +e;
                                })
                                .sort(),
                            y = g[0],
                            b = g[1];
                        (this._tempValueRep.start = y),
                            (this._tempValueRep.end = b),
                            (this._tempValueRep.date = ie),
                            (this._tempValueText = this._format(this._tempValueRep)),
                            setTimeout(function () {
                                a.set();
                            });
                    } else if (!f && (this._tempValueRep.start || this._tempValueRep.end)) {
                        this._tempValueRep.date || (this._tempValueRep.date = {});
                        var x = this._tempValueRep.start || this._tempValueRep.end;
                        this._tempValueRep.date[x] = new Date(x);
                        var T = this._tempValueRep.end || this._tempValueRep.start;
                        T !== x && t.selectMultiple && (this._tempValueRep.date[T] = new Date(T)),
                            (this._tempValueRep.start = ie),
                            (this._tempValueRep.end = ie),
                            (this._tempValueText = this._format(this._tempValueRep)),
                            setTimeout(function () {
                                a.set();
                            });
                    }
                t.min !== c.min && (this._min = _e(t.min) ? ie : va(t.min, t, t.dateFormat)),
                    t.max !== c.max && (this._max = _e(t.max) ? ie : va(t.max, t, t.dateFormat)),
                    t.minTime !== c.minTime && (this._minTime = _e(t.minTime) ? ie : va(t.minTime, t, t.timeFormat)),
                    t.maxTime !== c.maxTime && (this._maxTime = _e(t.maxTime) ? ie : va(t.maxTime, t, t.timeFormat));
                var D = this._tempValueRep && this._tempValueRep.end,
                    C = this._tempValueRep && this._tempValueRep.start,
                    S = (o ? t.dateFormat : "") + (l ? (o ? t.separator : "") + t.timeFormat : ""),
                    w = JSON.stringify(h) !== JSON.stringify(c.controls);
                if (w) {
                    (this._controls = []), (this._controlsClass = "");
                    var k = { c: "datepicker", controls: h, dateFormat: t.dateFormat, dateText: t.dateText, separator: t.separator, timeFormat: t.timeFormat, timeText: t.timeText, v: Ra };
                    this._remote++,
                        Ya(this),
                        Pa(
                            "remote",
                            this,
                            k,
                            function (e) {
                                if ((a._remote--, !a._remote)) {
                                    for (var n in e) e.hasOwnProperty(n) && (a[n] = e[n]);
                                    for (var i = 0, o = a._controls; i < o.length; i++) {
                                        var c = o[i];
                                        (c.Component = go["calendar" === c.name ? "Calendar" : "timegrid" === c.name ? "Timegrid" : "Datetime"]), (a._controlsClass += " mbsc-datepicker-control-" + c.name);
                                    }
                                    if ((Oa(e.notification), l || (a._selectedTime = ie), w && f && t.exclusiveEndDates && l !== r && (D || C))) {
                                        var d = a._savedStartValue,
                                            h = a._savedEndValue;
                                        setTimeout(function () {
                                            if (l) (a._tempValueRep.start = d || C), (a._tempValueRep.end = h || D);
                                            else {
                                                (a._savedStartValue = C), (a._savedEndValue = D), (a._clearSaved = !1);
                                                var e = s({}, t, { dataTimezone: a.props.dataTimezone, displayTimezone: a.props.displayTimezone, timezonePlugin: a.props.timezonePlugin });
                                                if ((C && (a._tempValueRep.start = +_a(Qn(e, pa(e, C)))), D)) {
                                                    var n = pa(e, D - 1);
                                                    a._tempValueRep.end = +_a(pa(e, +ea(e, n) + 1));
                                                }
                                            }
                                            (a._valueText = a._tempValueText = a._format(a._tempValueRep)), (a._valueTextChange = !0), a.set();
                                        }),
                                            (a._valueTextChange = !1);
                                    }
                                    a.forceUpdate();
                                }
                            },
                            "comp_" + this._uid
                        ),
                        (this._hasCalendar = -1 !== h.indexOf("calendar"));
                }
                (this._renderControls = f && "preset-range" !== u && (t.showRangeLabels === ie || t.showRangeLabels)),
                    (this._nullSupport = "inline" !== t.display || "date" !== u || !0 === t.selectMultiple),
                    (this._valueFormat = S),
                    (this._activeTab = n.activeTab || h[0]),
                    e.prototype._render.call(this, t, n);
                var M,
                    E = t.value !== ie ? t.value !== c.value : n.value !== this._prevStateValue;
                if (
                    (f && this._clearSaved && E && (this._savedEndValue = this._savedStartValue = ie),
                    (this._clearSaved = !0),
                    (t.headerText === c.headerText && t.selectCounter === c.selectCounter && t.selectMultiple === c.selectMultiple) || this._setHeader(),
                    (this._scrollLock = t.scrollLock !== ie ? t.scrollLock : !this._hasTimegrid),
                    (this._showInput = t.showInput !== ie ? t.showInput : this._showInput && (!f || (!t.startInput && !t.endInput))),
                    (this._shouldInitInputs = this._shouldInitInputs || u !== c.select || t.startInput !== c.startInput || t.endInput !== c.endInput),
                    (this._shouldInitInput = this._shouldInitInput || this._shouldInitInputs),
                    w || t.dateWheels !== c.dateWheels || t.timeWheels !== c.timeWheels || t.dateFormat !== c.dateFormat || t.timeFormat !== c.timeFormat)
                ) {
                    var N = t.dateWheels || t.dateFormat,
                        I = t.timeWheels || t.timeFormat,
                        L = (this._iso = {});
                    o && (/y/i.test(N) && (L.y = 1), /M/.test(N) && ((L.y = 1), (L.m = 1)), /d/i.test(N) && ((L.y = 1), (L.m = 1), (L.d = 1))), l && (/h/i.test(I) && (L.h = 1), /m/.test(I) && (L.i = 1), /s/i.test(I) && (L.s = 1));
                }
                if ((f ? (this._activeSelect === ie && this._setActiveSelect("start", !0), (M = this._selectionNotReady())) : ((this._activeSelect = ie), (M = !1)), this._buttons)) {
                    var H = Ee(this._buttons, function (e) {
                        return "set" === e.name;
                    });
                    H && H.disabled !== M && ((H.disabled = M), (this._buttons = this._buttons.slice()));
                }
                var Y = this._activeSelect;
                this._needsWidth = ("anchored" === t.display || "center" === t.display || ("inline" !== t.display && n.isLarge) || (h.length > 1 && !_)) && t.width === ie;
                var O = t.max !== ie ? va(t.max, t, S) : ie,
                    P = t.min !== ie ? va(t.min, t, S) : ie;
                (this._maxLimited = O), (this._minLimited = P);
                var z = this._tempValueRep.start;
                if (z && (this._prevStart !== z || c.valid !== t.valid || c.invalid !== t.invalid)) {
                    var V = pa(t, z);
                    this._nextInvalid = t.valid ? Da(Ji(t.valid, V, t), 1) : Ki(t.invalid || [], V, t);
                }
                var F = "end" === Y && z;
                if (F) {
                    if (!t.inRangeInvalid) {
                        var R = this._nextInvalid;
                        R && (t.rangeEndInvalid ? (this._maxLimited = pa(t, +Da(R, 1) - 1)) : (this._maxLimited = pa(t, +R - 1)));
                    }
                    (this._hasCalendar && !l) || ((!this._minLimited || va(this._minLimited, t, S) < pa(t, z)) && (this._minLimited = pa(t, this._tempValueRep.start)));
                }
                if (((this._minTimeLimited = this._minLimited), F)) {
                    if (t.minRange) {
                        var A = l ? this._tempValueRep.start + t.minRange : +Da(pa(t, this._tempValueRep.start), t.minRange) - 1;
                        (!this._minLimited || +va(this._minLimited, t, S) < A) && ((this._minLimited = pa(t, A)), (this._minTimeLimited = this._minLimited));
                    }
                    if ((this._minTimeLimited === ie && this._tempValueRep.start && this._tempValueRep.end && (this._minTimeLimited = pa(t, +this._tempValueRep.start)), t.maxRange !== ie)) {
                        var W = l ? this._tempValueRep.start + t.maxRange : +Da(pa(t, this._tempValueRep.start), t.maxRange) - 1;
                        (!this._maxLimited || +va(this._maxLimited, t, S) > W) && (this._maxLimited = pa(t, W));
                    }
                }
                for (var U = 0, B = this._controls; U < B.length; U++) {
                    var j = B[U],
                        K = s({}, p, { display: "inline", isOpen: t.isOpen || n.isOpen, max: this._maxLimited, min: this._minLimited });
                    if ((t.rangeEndInvalid && F && this._nextInvalid && (K.valid = (K.valid || []).concat([this._nextInvalid])), "calendar" === j.name)) {
                        (K.min = this._minLimited ? aa(this._minLimited) : ie),
                            (K.max = this._maxLimited ? aa(this._maxLimited) : ie),
                            (K.selectRange = f),
                            (K.width = this._needsWidth ? Us * qs(t.pages, n.maxPopupWidth) : ie),
                            "week" === t.calendarType && d ? (K.weeks = d) : (K.size = d);
                        var J = "auto" === t.pages ? 3 : t.pages || 1;
                        if (((this._maxWidth = t.maxWidth || (J > 2 ? Us * J : ie)), f)) {
                            var X = this._getDate(this._tempValueRep),
                                G = X[1];
                            G && t.exclusiveEndDates && !l && (X[1] = pa(t, +G - 1));
                            var q = X.filter(function (e) {
                                return null !== e;
                            })
                                .map(function (e) {
                                    return +aa(e);
                                })
                                .filter(function (e, t, n) {
                                    return n.indexOf(e) === t;
                                })
                                .map(function (e) {
                                    return new Date(e);
                                });
                            if (((K.value = q), t.rangeHighlight))
                                if (((K.rangeStart = X[0] && +aa(_a(X[0]))), (K.rangeEnd = X[1] && +aa(_a(X[1]))), (K.onDayHoverIn = this._onDayHoverIn), (K.onDayHoverOut = this._onDayHoverOut), "preset-range" === u)) {
                                    if (n.hoverDate) {
                                        var Z = Do(n.hoverDate, t);
                                        (y = Z.start), (b = Z.end);
                                        (K.hoverStart = +y), (K.hoverEnd = +b);
                                    }
                                } else
                                    "end" === Y && X[0] && ((K.hoverStart = K.rangeEnd || K.rangeStart), (K.hoverEnd = n.hoverDate)),
                                        "start" === Y && X[1] && this._renderControls && ((K.hoverStart = n.hoverDate), (K.hoverEnd = K.rangeStart || K.rangeEnd));
                        } else (K.selectMultiple = m), (K.value = this._getDate(this._tempValueRep));
                        for (var $ = de(K.value) ? K.value : [K.value], Q = K.min ? +K.min : -1 / 0, ee = K.max ? +K.max : 1 / 0, te = void 0, ne = 0, ae = $; ne < ae.length; ne++) {
                            var se = ae[ne];
                            !te && se >= Q && se <= ee && (te = +se);
                        }
                        !te && f && $.length && (te = +$[0]),
                            (te === this._selectedDate && this._active !== ie && t.min === c.min && t.max === c.max) || ((this._selectedDate = te), (this._active = te ? +aa(new Date(te)) : ce(this._active || +aa(new Date()), Q, ee)));
                        var re = t.dateWheels || t.dateFormat,
                            oe = /d/i.test(re) ? Rs : /m/i.test(re) ? As : /y/i.test(re) ? Ws : Rs;
                        (K.active = this._active),
                            (K.onActiveChange = this._onActiveChange),
                            (K.onChange = this._onCalendarChange),
                            (K.onCellClick = this._onCellClick),
                            (K.onCellHoverIn = this._proxy),
                            (K.onCellHoverOut = this._proxy),
                            (K.onLabelClick = this._proxy),
                            (K.onPageChange = this._proxy),
                            (K.onPageLoaded = this._proxy),
                            (K.onPageLoading = this._proxy),
                            (K.selectView = oe);
                    } else {
                        var le = Object.keys(this._tempValueRep.date || {});
                        if (((K.displayStyle = ("bottom" !== t.display && "top" !== t.display) || (!this._hasCalendar && !this._renderTabs) ? t.display : "center"), (K.mode = j.name), ("time" !== j.name && "timegrid" !== j.name) || !o))
                            if (((K.onChange = this._onDatetimeChange), f)) {
                                var he = this._tempValueRep[Y],
                                    ue = this._tempValueRep[To(Y)];
                                (K.value = he ? pa(t, he) : ue ? pa(t, ue) : null), "end" === Y && t.exclusiveEndDates && !l && (K.value = pa(t, +K.value - 1));
                            } else {
                                var me = this._tempValueRep.date && this._tempValueRep.date[le[0]],
                                    pe = me;
                                me && (l || (pe = aa(me))), (K.value = pe || null);
                            }
                        else {
                            if (((K.onChange = this._onTimePartChange), f)) {
                                var ve = this._tempValueRep[Y],
                                    fe = void 0;
                                this._selectedTime &&
                                    (!this._minTimeLimited || this._selectedTime > this._minTimeLimited
                                        ? (fe = this._selectedTime)
                                        : (fe = pa(t, this._minTimeLimited)).setHours(this._selectedTime.getHours(), this._selectedTime.getMinutes(), this._selectedTime.getSeconds(), this._selectedTime.getMilliseconds()));
                                var ge = pa(t);
                                ge.setSeconds(0, 0), (this._selectedTime = ve ? pa(t, ve) : fe || ("time" === j.name ? ge : ie)), (K.value = this._selectedTime);
                            } else if (!t.selectMultiple) {
                                var ye = (this._tempValueRep.date && this._tempValueRep.date[le[0]]) || this._selectedTime;
                                this._selectedTime = K.value = ye;
                            }
                            (K.min = this._minTimeLimited), (K.max = this._maxLimited);
                        }
                        if ("time" === j.name || "timegrid" === j.name) {
                            var be = K.value || ka(new Date(), K.min, K.max);
                            if (this._minTime) {
                                var xe = this._minTime;
                                Q = new Date(be.getFullYear(), be.getMonth(), be.getDate(), xe.getHours(), xe.getMinutes(), xe.getSeconds(), xe.getMilliseconds());
                                (!K.min || Q > K.min) && (K.min = Q);
                            }
                            if (this._maxTime) {
                                var Te = this._maxTime;
                                ee = new Date(be.getFullYear(), be.getMonth(), be.getDate(), Te.getHours(), Te.getMinutes(), Te.getSeconds(), Te.getMilliseconds());
                                (!K.max || ee < K.max) && (K.max = ee);
                            }
                        }
                    }
                    j.options = K;
                }
                (this._prevStart = this._tempValueRep.start), (this._prevStateValue = n.value);
            }),
            (t.prototype._updated = function () {
                var t = this,
                    n = this.s;
                if (this._shouldInitInputs) {
                    if ((this._resetInputs(), "range" === n.select)) {
                        var a = n.startInput;
                        a && this._setupInput("start", a);
                        var s = n.endInput;
                        s && this._setupInput("end", s), !n.element || (this._startInput !== n.element && this._endInput !== n.element) || ((this._shouldInitInput = !1), clearTimeout(n.element.__mbscTimer));
                    }
                    this._shouldInitInputs = !1;
                }
                var i = this._valueTextChange;
                if ((e.prototype._updated.call(this), "range" === n.select && i)) {
                    var r = function (e, n) {
                        (e.value = n),
                            setTimeout(function () {
                                (t._preventChange = !0), Gt(e, ns), Gt(e, qa);
                            });
                    };
                    this._startInput && r(this._startInput, this._getValueText("start")), this._endInput && r(this._endInput, this._getValueText("end"));
                }
            }),
            (t.prototype._onEnterKey = function (t) {
                this._selectionNotReady() || e.prototype._onEnterKey.call(this, t);
            }),
            (t.prototype._setupInput = function (e, t) {
                var n = this;
                dr(t, function (t) {
                    var a = hr(t, n, n._onInputChangeRange, n._onInputClickRange);
                    "start" === e ? ((n._startInput = t), (n._resetStartInput = a)) : ((n._endInput = t), (n._resetEndInput = a));
                    var s = n._getValueText(e),
                        i = s !== t.value;
                    (t.value = s),
                        i &&
                            setTimeout(function () {
                                (n._preventChange = !0), Gt(t, ns), Gt(t, qa);
                            });
                });
            }),
            (t.prototype._destroy = function () {
                this._resetInputs(), e.prototype._destroy.call(this);
            }),
            (t.prototype._setHeader = function () {
                var t = this.s;
                if (t.selectCounter && t.selectMultiple) {
                    var n = Object.keys((this._tempValueRep && this._tempValueRep.date) || {}).length;
                    this._headerText = ((n > 1 && t.selectedPluralText) || t.selectedText).replace(/{count}/, "" + n);
                } else e.prototype._setHeader.call(this);
            }),
            (t.prototype._validate = function () {
                if (!(this._max <= this._min)) {
                    var e = this.s,
                        t = this._min ? +this._min : -1 / 0,
                        n = this._max ? +this._max : 1 / 0;
                    if ("date" === e.select) {
                        var a = this._tempValueRep.date;
                        if (!e.selectMultiple)
                            for (var s = 0, i = Object.keys(a); s < i.length; s++) {
                                var r = i[s],
                                    o = a[r],
                                    l = $i(o, e, t, n);
                                +l != +o && (delete a[r], (a[+aa(l)] = l));
                            }
                    } else {
                        var c = this._getDate(this._tempValueRep),
                            d = c[0],
                            h = c[1];
                        d && ((d = $i(d, e, t, n)), e.inRangeInvalid || (this._prevStart && this._prevStart === +d) || (this._nextInvalid = e.valid ? Da(Ji(e.valid, d, e), 1) : Ki(e.invalid || [], d, e))),
                            h && (h = !e.inRangeInvalid && this._nextInvalid && this._nextInvalid <= h ? (e.rangeEndInvalid ? this._nextInvalid : Da(this._nextInvalid, -1)) : $i(h, e, t, n)),
                            d && h && d > h && ("end" === this._activeSelect ? (d = h) : (h = d)),
                            d && (this._prevStart = this._tempValueRep.start = +d),
                            h && (this._tempValueRep.end = +h);
                    }
                }
            }),
            (t.prototype._copy = function (e) {
                var t = e.date ? s({}, e.date) : e.date;
                return s({}, e, { date: t });
            }),
            (t.prototype._format = function (e) {
                var t = this.s,
                    n = [];
                if (!t) return "";
                if ("date" === t.select) {
                    var a = e.date;
                    for (var s in a) a[s] !== ie && null !== a[s] && n.push(ya(this._valueFormat, a[s], t));
                    return t.selectMultiple ? n.join(", ") : n[0];
                }
                if ((e.start && n.push(ya(this._valueFormat, pa(t, e.start), t)), e.end)) {
                    n.length || n.push("");
                    var i = pa(t, e.end - (t.exclusiveEndDates && !this._hasTime ? 1 : 0));
                    n.push(ya(this._valueFormat, i, t));
                }
                return (this._tempStartText = n[0] || ""), (this._tempEndText = n[1] || ""), n.join(yo);
            }),
            (t.prototype._parse = function (e, t) {
                var n = this.s,
                    a = {},
                    s = "date" !== n.select,
                    i = n.selectMultiple,
                    r = [];
                if (_e(e)) {
                    var o = n.defaultSelection;
                    e = i || s ? o : null === o || (this._live && "inline" !== n.display) ? null : o || new Date();
                }
                if ((me(e) && (s || i) ? (r = e.split(s ? yo : ",")) : de(e) ? (r = e) : e && !de(e) && (r = [e]), s)) {
                    var l = r[0],
                        c = r[1],
                        d = va(l, n, this._valueFormat, this._iso),
                        h = va(c, n, this._valueFormat, this._iso);
                    (a.start = d ? +d : ie), (a.end = h ? +h : ie);
                } else {
                    a.date = {};
                    for (var u = 0, m = r; u < m.length; u++) {
                        var _ = m[u];
                        if (!_e(_)) {
                            var p = va(_, n, this._valueFormat, this._iso, t);
                            if (p) {
                                t && (p = ma(n, p));
                                var v = +aa(p);
                                (a.date[v] = p), this._hasTime && (this._selectedTime = new Date(p));
                            }
                        }
                    }
                }
                return a;
            }),
            (t.prototype._getDate = function (e) {
                var t = this.s;
                if ("date" !== t.select) {
                    var n = e.start ? pa(t, e.start) : null,
                        a = e.end ? pa(t, e.end) : null;
                    return n || a ? [n, a] : [];
                }
                if (t.selectMultiple) {
                    var s = [],
                        i = e.date;
                    if (i)
                        for (var r = 0, o = Object.keys(i); r < o.length; r++) {
                            var l = o[r];
                            s.push(pa(t, +l));
                        }
                    return s;
                }
                var c = Object.keys(e.date || {});
                return c.length ? pa(t, e.date[c[0]]) : null;
            }),
            (t.prototype._get = function (e) {
                var t = this,
                    n = this.s,
                    a = this._valueFormat,
                    s = this._iso,
                    i = this._getDate(e);
                return de(i)
                    ? i.map(function (e) {
                          return e ? fa(e, n, a, s, t._hasTime) : null;
                      })
                    : null === i
                    ? null
                    : fa(i, n, a, s, this._hasTime);
            }),
            (t.prototype._onClosed = function () {
                (this._active = this._activeSelect = ie), this._hasTimegrid && (this._selectedTime = ie);
            }),
            (t.prototype._onOpen = function () {
                this._newSelection = !0;
            }),
            (t.prototype._resetInputs = function () {
                this._resetStartInput && (this._resetStartInput(), (this._resetStartInput = ie)), this._resetEndInput && (this._resetEndInput(), (this._resetEndInput = ie));
            }),
            (t.prototype._getValueText = function (e) {
                return this._valueText.split(yo)["start" === e ? 0 : 1] || "";
            }),
            (t.prototype._selectionNotReady = function () {
                var e = !1;
                if ("range" === this.s.select) {
                    var t = (this._get(this._tempValueRep || {}) || []).filter(function (e) {
                        return e;
                    });
                    (e = !t.length) || (e = (this._hasCalendar && !this._hasTime) || this._renderControls ? t.length < 2 : !this._tempValueRep[this._activeSelect]);
                }
                return e;
            }),
            (t.prototype._setActiveSelect = function (e, t) {
                var n = this;
                this._activeSelect !== e &&
                    (t
                        ? setTimeout(function () {
                              return n._hook("onActiveDateChange", { active: e });
                          })
                        : this._hook("onActiveDateChange", { active: e })),
                    (this._activeSelect = e);
            }),
            (t.defaults = s({}, Jn, ur.defaults, {
                activeElm: '.mbsc-calendar-cell[tabindex="0"]',
                controls: bo,
                dateText: "Date",
                inRangeInvalid: !1,
                inputTyping: !0,
                rangeEndHelp: "Please select",
                rangeEndLabel: "End",
                rangeHighlight: !0,
                rangeStartHelp: "Please select",
                rangeStartLabel: "Start",
                select: "date",
                selectSize: 7,
                selectedText: "{count} selected",
                showOnClick: !0,
                timeText: "Time",
            })),
            (t._name = "Datepicker"),
            t
        );
    })(ur);
    (go.Datetime = Kr), (go.Calendar = _r), (go.Timegrid = ho);
    var So = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            a(t, e),
            (t.prototype._template = function (e) {
                return Er(
                    this,
                    e,
                    (function (e, t, n) {
                        var a = t._renderTabs,
                            i = t._controls,
                            r = t._activeSelect,
                            o = t._rtl,
                            l = t._theme;
                        return Hn(
                            rn,
                            null,
                            Hn(
                                "div",
                                { className: "mbsc-datepicker mbsc-flex-col mbsc-datepicker-" + e.display + l + ("inline" === e.display ? " " + t._className : "") + t._controlsClass },
                                t._headerText && "inline" === e.display && Hn("div", { className: "mbsc-picker-header" + l + t._hb }, t._headerText),
                                a &&
                                    Hn(
                                        to,
                                        { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: t._activeTab, onChange: t._changeActiveTab },
                                        i.map(function (t, n) {
                                            return Hn(so, { key: n, rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: t.name }, t.title);
                                        })
                                    ),
                                t._renderControls &&
                                    Hn(
                                        "div",
                                        { className: "mbsc-range-control-wrapper" + l },
                                        Hn(
                                            to,
                                            { theme: e.theme, themeVariant: e.themeVariant, rtl: e.rtl, value: r, onChange: t._changeActiveSelect },
                                            Hn(
                                                so,
                                                { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: "start", className: "mbsc-range-start" + (t._tempStartText ? " mbsc-range-value-nonempty" : "") },
                                                Hn("div", { className: "mbsc-range-control-label" + l + o + ("start" === r ? " active" : "") }, e.rangeStartLabel),
                                                Hn(
                                                    "div",
                                                    { className: "mbsc-range-control-value" + l + o + ("start" === r ? " active" : "") + (t._tempStartText ? "" : " mbsc-range-control-text-empty") },
                                                    t._tempStartText || e.rangeStartHelp
                                                ),
                                                "start" === r && t._tempStartText && Hn(Ja, { className: "mbsc-range-label-clear" + o, onClick: t._clearStart, svg: e.clearIcon, theme: e.theme })
                                            ),
                                            Hn(
                                                so,
                                                { rtl: e.rtl, theme: e.theme, themeVariant: e.themeVariant, value: "end", className: "mbsc-range-end" + (t._tempEndText ? " mbsc-range-value-nonempty" : "") },
                                                Hn("div", { className: "mbsc-range-control-label" + l + o + ("end" === r ? " active" : "") }, e.rangeEndLabel),
                                                Hn("div", { className: "mbsc-range-control-value" + l + o + ("end" === r ? " active" : "") + (t._tempEndText ? "" : " mbsc-range-control-text-empty") }, t._tempEndText || e.rangeEndHelp),
                                                "end" === r && t._tempEndText && Hn(Ja, { className: "mbsc-range-label-clear" + o, onClick: t._clearEnd, svg: e.clearIcon, theme: e.theme })
                                            )
                                        )
                                    ),
                                Hn(
                                    "div",
                                    { className: "mbsc-datepicker-tab-wrapper mbsc-flex-1-1" + l, ref: t._setWrapper },
                                    i.map(function (e, n) {
                                        return Hn(
                                            "div",
                                            {
                                                key: n,
                                                className:
                                                    "mbsc-datepicker-tab mbsc-datepicker-tab-" +
                                                    e.name +
                                                    l +
                                                    ((a && e.name === t._activeTab) || !a ? " mbsc-datepicker-tab-active" : "") +
                                                    (a && "time" === e.name ? " mbsc-datepicker-time-modal" : "") +
                                                    (a || 1 === i.length ? " mbsc-datepicker-tab-expand" : ""),
                                            },
                                            Hn(e.Component, s({}, e.options))
                                        );
                                    })
                                )
                            ),
                            n
                        );
                    })(e, this, e.children)
                );
            }),
            t
        );
    })(Co);
    function wo(e) {
        return me(e) ? vt.querySelector(e) : e;
    }
    var ko = {
        before: function (e, t) {
            var n = t.select,
                a = t.startInput,
                s = t.endInput;
            if ("range" === n && a && s) {
                var i = wo(a),
                    r = wo(s),
                    o = i && i.value,
                    l = r && r.value;
                o && l && (t.defaultValue = o + yo + l);
            } else t.defaultValue = e.value;
            t.element = e;
        },
    };
    function Mo(e, t) {
        return function (n, a) {
            var s = {};
            if (me(n)) {
                var i,
                    r = vt.querySelectorAll(n);
                return (
                    qt(r, function (n) {
                        var r = zn(e, n, a, t);
                        (s[n.id] = r), i || (i = r);
                    }),
                    1 === r.length ? i : s
                );
            }
            return zn(e, n, a, t);
        };
    }
    m &&
        (vt.addEventListener("DOMContentLoaded", function () {
            Fn(vt);
        }),
        vt.addEventListener("mbsc-enhance", function (e) {
            Fn(e.target);
        }));
    var Eo = 0;
    function No(e, t, n) {
        "jsonp" === n
            ? (function (e, t) {
                  if (ft) {
                      var n = vt.createElement("script"),
                          a = "mbscjsonp" + ++Eo;
                      (ft[a] = function (e) {
                          n.parentNode.removeChild(n), delete ft[a], e && t(e);
                      }),
                          (n.src = e + (e.indexOf("?") >= 0 ? "&" : "?") + "callback=" + a),
                          vt.body.appendChild(n);
                  }
              })(e, t)
            : (function (e, t) {
                  var n = new XMLHttpRequest();
                  n.open("GET", e, !0),
                      (n.onload = function () {
                          n.status >= 200 && n.status < 400 && t(JSON.parse(n.response));
                      }),
                      (n.onerror = function () {}),
                      n.send();
              })(e, t);
    }
    var Io = { getJson: No };
    x.http = Io;
    var Lo = Mo(So, ko),
        Ho = ", ",
        Yo = "group_0";
    var Oo = (function (e) {
        function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
                (t._options = []),
                (t._selectMap = new Map()),
                (t._onFilterChange = function (e) {
                    var n = e.target.value;
                    clearTimeout(t._debounce),
                        (t._filterInput.value = n),
                        (t._debounce = setTimeout(function () {
                            t._filter(n);
                        }, 300));
                }),
                (t._onFilterClear = function () {
                    var e = t._filterInput;
                    e && (e.value = ""), t._filter("");
                }),
                (t._shouldValidate = function (e, n) {
                    var a = e.selectMultiple !== n.selectMultiple || (!e.filter && e.data !== n.data) || t._groupChanged;
                    return (t._groupChanged = !1), a;
                }),
                (t._writeValue = function (e, n, a) {
                    var s = e.value;
                    if (((e.value = n), t._isSelect)) {
                        de(a) || (a = [a]);
                        for (var i = t.s.selectElement, r = i.options, o = !1, l = 0; l < r.length; l++) {
                            var c = r[l],
                                d = c.selected;
                            (c.selected = a.indexOf(c.value) > -1), d !== c.selected && (o = !0);
                        }
                        return o && Gt(i, qa), o;
                    }
                    return s !== n;
                }),
                (t._onResize = function (e) {
                    t.setState({ width: e.windowWidth });
                }),
                (t._onChange = function (e) {
                    var n = e.value;
                    (t._parsedValue = n), t._saveSelected(n), t._hook("onChange", e);
                }),
                (t._format = function (e) {
                    var n = e[t.s.showGroupWheel ? 1 : 0],
                        a = t.s.selectMultiple ? n : [n];
                    return (
                        (a.map &&
                            a.map(function (e) {
                                return t._map ? t._map.get(e) : ie;
                            })) ||
                        []
                    ).join(Ho);
                }),
                (t._parse = function (e) {
                    var n,
                        a = t._map,
                        s = t._reMap,
                        i = t.s.selectMultiple,
                        r = t.s.defaultSelection,
                        o = i ? (r ? (r.length !== ie ? r : r.slice()) : []) : r !== ie ? r : null;
                    if (((t._parsedValue = e), a))
                        if (i && !_e(e)) {
                            var l = [];
                            if (e.length === ie) l.push(e);
                            else if (me(e))
                                for (var c = 0, d = e.split(Ho); c < d.length; c++) {
                                    var h = d[c],
                                        u = s.get(h);
                                    u !== ie && l.push(u);
                                }
                            else
                                for (var m = 0, _ = e; m < _.length; m++) {
                                    var p = _[m];
                                    a.has(p) && l.push(p);
                                }
                            n = l;
                        } else a.has(e) ? (n = e) : me(e) && s.has(e) && (n = s.get(e));
                    if ((n === ie && (n = o), t.s.showGroupWheel)) {
                        var v = i ? n[0] : n,
                            f = Ee(t._options, function (e) {
                                return e.value === v;
                            });
                        return [f && f.group, n];
                    }
                    return [n];
                }),
                (t._get = function (e) {
                    var n = e[t.s.showGroupWheel ? 1 : 0];
                    return t.s.selectMultiple ? n || [] : n;
                }),
                (t._valueEquals = function (e, n) {
                    return t.s.selectMultiple ? ke(e || [], n || []) : e === n;
                }),
                (t._onWheelMove = function (e) {
                    var n = e.wheelIndex,
                        a = e.selection,
                        s = e.dataItem;
                    if (!t._selectOnScroll && !a && 1 === n) {
                        var i = Ee(t._options, function (e) {
                            return e.value === s.value;
                        });
                        return [s.isGroup ? s.value : i.group];
                    }
                }),
                (t._validate = function (e) {
                    var n = e.values,
                        a = e.direction,
                        s = e.wheels,
                        i = e.index,
                        r = t._disabled,
                        o = t._selectOnScroll,
                        l = t.s.selectMultiple,
                        c = t.s.showGroupWheel,
                        d = c ? [t._disabledGroups, r] : [r],
                        h = c ? 1 : 0,
                        u = t._get(n),
                        m = { disabled: d };
                    if (i === h || i === ie)
                        if (l) {
                            var _ = [];
                            u.forEach(function (e) {
                                r.get(e) || _.push(e);
                            }),
                                (m.valid = t._parse(_)),
                                i !== ie && (m.valid[0] = n[0]);
                        } else {
                            if (_e(u) && !o) return (m.valid = c ? [null, null] : [null]), m;
                            var p = Nr(s[h], n[h], r, a);
                            if (c) {
                                var v = Ee(t._options, function (e) {
                                    return e.value === p;
                                });
                                m.valid = [v.group, p];
                            } else m.valid = [p];
                        }
                    else {
                        var f = Nr(s[0], n[0], d[0], a),
                            g = Ee(t._options, function (e) {
                                return !(e.group !== f || (o && r.get(e.value)));
                            }),
                            y = t._touchUi || g.group === ie ? g.value : g.group;
                        if (o) m.valid = [f, y];
                        else {
                            m.valid = [f, n[1]];
                            var b = l ? [y] : y,
                                x = t._touchUi ? f : ie;
                            m.indexes = [x, b];
                        }
                    }
                    return m;
                }),
                (t._onClose = function (e) {
                    t._hook("onClose", e),
                        t._filterText &&
                            setTimeout(function () {
                                return t._onFilterClear();
                            }, 100);
                }),
                (t._setScroller = function (e) {
                    t._scroller = e;
                }),
                (t._setInput = function (e) {
                    t._filterInput = e && e.nativeElement;
                }),
                (t._saveSelected = function (e) {
                    if (t.s.selectMultiple) {
                        var n = new Map();
                        qt(e, function (e) {
                            var a = t._map.get(e);
                            n.set(e, a);
                        }),
                            (t._selectMap = n);
                    }
                }),
                t
            );
        }
        return (
            a(t, e),
            (t.prototype.reloadOptionElements = function () {
                var e = this;
                (this._optionsReloaded = !0),
                    this._setOptionsFromElm(),
                    setTimeout(function () {
                        e.forceUpdate();
                    });
            }),
            (t.prototype.setVal = function (e) {
                this._proxy("setVal", [e]);
            }),
            (t.prototype.getVal = function () {
                return _e(this._parsedValue) ? this._parsedValue : this._proxy("getVal");
            }),
            (t.prototype.setTempVal = function (e) {
                this._proxy("setTempVal", [e]);
            }),
            (t.prototype.getTempVal = function () {
                return this._proxy("getTempVal");
            }),
            (t.prototype.open = function () {
                this._proxy("open");
            }),
            (t.prototype.close = function () {
                this._proxy("close");
            }),
            (t.prototype._render = function (e) {
                var t = this._prevS,
                    n = this._touchUi && (!e.selectMultiple || "ios" === (e.baseTheme || e.theme)),
                    a = this._touchUi && !e.selectMultiple,
                    s = e.element !== t.element || e.selectElement !== t.selectElement,
                    i = e.data !== t.data,
                    r = i || this._optionsReloaded,
                    o = e.placeholder,
                    l = e.display !== t.display || o !== t.placeholder || a !== this._selectOnScroll,
                    c = r || s || e.invalid !== t.invalid || this._selectOnScroll !== a;
                if (
                    ((this._selectOnScroll = a),
                    e.showGroupWheel !== t.showGroupWheel && (this._groupChanged = !0),
                    (s || l) && ((this._isSelect = e.selectElement !== ie), this._isSelect ? this._setOptionsFromElm() : e.element || (this._options = [])),
                    (i || l) && e.data && this._createOptionList(e.data),
                    c &&
                        ((this._disabled = (function (e, t) {
                            var n = new Map();
                            return (
                                e &&
                                    e.forEach(function (e) {
                                        e.disabled && n.set(e.value, !0);
                                    }),
                                t &&
                                    t.forEach(function (e) {
                                        n.set(e, !0);
                                    }),
                                n
                            );
                        })(this._options, e.invalid)),
                        (this._disabledGroups = (function (e, t) {
                            var n = new Map();
                            return (
                                t &&
                                    t.forEach(function (t) {
                                        var a = t.group,
                                            s = t.value;
                                        a && (n.has(a) || n.set(a, !0), e.get(s) || n.set(a, !1));
                                    }),
                                n
                            );
                        })(this._disabled, a ? this._options : ie))),
                    (c || n !== this._spaceAround || this._groupChanged || e.filter !== t.filter || e.selectMultiple !== t.selectMultiple) && this._createWheels(this._filterText, n),
                    r || e.filter !== t.filter || e.touchUi !== t.touchUi || e.rows !== t.rows)
                ) {
                    var d = e.filter ? 1 / 0 : this._wheels[0][e.showGroupWheel ? 1 : 0].data.length,
                        h = (this._respProps || {}).rows,
                        u = this.props.rows,
                        m = this._touchUi ? e.rows : Math.min(h || u || 7, d);
                    this._rows = u || m;
                }
                (this._groupChanged || e.wheelWidth !== t.wheelWidth || e.filter !== t.filter) && (this._wheelWidth = e.wheelWidth || (e.filter ? (e.showGroupWheel ? [150, 250] : 400) : ie)),
                    (this._spaceAround = n),
                    (this._optionsReloaded = !1);
            }),
            (t.prototype._createOptionList = function (e) {
                var t = this.s,
                    n = t.placeholder,
                    a = [],
                    s = new Map(),
                    i = new Map();
                this._selectMap.forEach(function (e, t) {
                    s.set(t, e);
                });
                var r = !1,
                    o = function (e, n) {
                        (e && e.value !== ie) || (e = { text: e, value: e }), _e(e.value) && (r = !0), t.showGroupWheel && e.group === ie && (e.group = Yo), s.set(e.value, e.text), i.set(e.text, e.value), a.splice(n, 0, e);
                    };
                e.forEach(o), "inline" === t.display && this._selectOnScroll && n && !r && o({ value: "", text: n }, 0), (this._map = s), (this._reMap = i), (this._options = a);
            }),
            (t.prototype._proxy = function (e, t) {
                var n = this._inst || this._scroller;
                if (n) return n[e].apply(n, t);
            }),
            (t.prototype._createWheels = function (e, t) {
                var n = this,
                    a = this.s,
                    s = a.selectMultiple,
                    i =
                        a.filter && e
                            ? (function (e, t) {
                                  if (!t) return e;
                                  var n = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                                      a = new RegExp(n, "i");
                                  return e.filter(function (e) {
                                      return a.test(e.text);
                                  });
                              })(this._options, e)
                            : this._options,
                    r = [],
                    o = [],
                    l = new Map();
                i.forEach(function (e) {
                    var t = e.group,
                        n = t && t !== Yo ? t : "",
                        a = l.get(n),
                        s = { display: e.text, value: e.value, data: e };
                    a ? a.push(s) : l.set(n, [s]);
                });
                var c = l.get("");
                c && (r.push.apply(r, c), this._selectOnScroll && o.push({ display: "", value: Yo })),
                    l.forEach(function (e, t) {
                        t && (r.push({ display: t, isGroup: !0, value: t }), r.push.apply(r, e), o.push({ display: t, value: t }), n._disabled.set(t, !0));
                    });
                var d = { checkmark: !0, circular: !1, closeOnTap: !s, data: r, multiple: s, spaceAround: t },
                    h = { checkmark: !1, circular: !1, cssClass: "mbsc-select-group-wheel" + (s ? " mbsc-select-group-wheel-multi" : ""), data: o, multiple: !1, spaceAround: t };
                (this._noResults = a.filter && !i.length), (this._wheels = a.showGroupWheel ? [[h, d]] : [[d]]);
            }),
            (t.prototype._setOptionsFromElm = function () {
                for (var e = this.s.selectElement, t = e.options, n = [], a = !1, s = !1, i = 0; i < t.length; i++) {
                    var r = t[i],
                        o = r.parentElement,
                        l = "optgroup" === o.nodeName.toLowerCase() ? o.label : ie;
                    "" !== r.value ? n.push({ disabled: r.disabled, group: l, text: r.text, value: r.value }) : (a = !0), r.defaultSelected && (s = !0);
                }
                a || (e.insertBefore(new Option(""), e.childNodes[0] || null), s || (e.value = "")), this._createOptionList(n);
            }),
            (t.prototype._filter = function (e) {
                !1 !== this._hook("onFilter", { filterText: e }) && ((this._filterText = e), this._createWheels(e, this._spaceAround)), this.forceUpdate();
            }),
            (t.defaults = s({}, ur.defaults, { dropdown: !0, filterEmptyText: "No results", filterPlaceholderText: "Search", rows: 5 })),
            (t._name = "Select"),
            t
        );
    })(Ua);
    function Po(e) {
        var t = e.s;
        return Hn(
            "div",
            { className: "mbsc-select-filter-cont" + e._theme + e._rtl },
            Hn(Sr, {
                ref: e._setInput,
                autoComplete: "off",
                className: "mbsc-select-filter",
                inputClass: "mbsc-select-filter-input",
                placeholder: t.filterPlaceholderText,
                onInput: e._onFilterChange,
                theme: t.theme,
                rtl: t.rtl,
                inputStyle: "box",
            }),
            e._filterText ? Hn(Ja, { className: "mbsc-select-filter-clear" + e._rtl, onClick: e._onFilterClear, svg: t.clearIcon, theme: t.theme }) : null
        );
    }
    function zo(e) {
        return e._noResults ? Hn("div", { className: "mbsc-select-empty-text" + e._theme }, e.s.filterEmptyText) : null;
    }
    var Vo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._filterRenderer = function () {
                        return Po(t);
                    }),
                    (t._filterEmptyRenderer = function () {
                        return zo(t);
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a = e.cssClass;
                        e.onInit, e.onDestroy, e.responsive;
                        var r = i(e, ["cssClass", "onInit", "onDestroy", "responsive"]);
                        return Hn(
                            Pr,
                            s({}, r, {
                                className: (a || "") + (t._noResults ? " mbsc-select-empty" : "") + " mbsc-select-scroller mbsc-select-scroller-" + e.display,
                                dropdown: e.dropdown,
                                formatValue: t._format,
                                parseValue: t._parse,
                                renderPreContent: e.filter ? t._filterRenderer : ie,
                                renderInContent: t._filterEmptyRenderer,
                                getValue: t._get,
                                valueEquality: t._valueEquals,
                                valueMap: t._map,
                                validate: t._validate,
                                shouldValidate: t._shouldValidate,
                                writeValue: t._writeValue,
                                ref: t._setScroller,
                                wheels: t._wheels,
                                rows: t._rows,
                                selectOnScroll: t._selectOnScroll,
                                onResize: t._onResize,
                                onClose: t._onClose,
                                onChange: t._onChange,
                                activeElm: e.filter ? ".mbsc-select-filter-input" : ie,
                                wheelWidth: t._wheelWidth,
                                onWheelMove: t._onWheelMove,
                            }),
                            n
                        );
                    })(e, this, e.children);
                }),
                t
            );
        })(Oo),
        Fo = {
            before: function (e, t) {
                if ("select" === e.nodeName.toLowerCase()) {
                    var n = e;
                    (e.style.display = "none"),
                        t.inputElement || "inline" === t.display ? (t.element = t.inputElement || e) : ((t.inputComponent = "input"), (t.showInput = !0)),
                        (t.selectElement = n),
                        t.selectMultiple !== ie ? (n.multiple = t.selectMultiple) : (t.selectMultiple = n.multiple);
                    for (var a = [], s = n.options, i = 0; i < s.length; i++) {
                        var r = s[i];
                        r.defaultSelected && a.push(r.value);
                    }
                    a.length && (t.defaultValue = t.selectMultiple ? a : a[0]);
                } else (t.element = e), (t.defaultValue = e.value);
            },
        },
        Ro = Mo(Vo, Fo),
        Ao = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._render = function (e) {
                    this._cssClass = this._className + this._rtl + " mbsc-font mbsc-list" + this._theme;
                }),
                t
            );
        })(Ua);
    var Wo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return Hn("div", { ref: t._setEl, className: t._cssClass }, e.children);
                    })(e, this);
                }),
                t
            );
        })(Ao),
        Uo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._render = function (e) {
                    this._cssClass = this._className + " mbsc-list-header" + this._theme + this._hb;
                }),
                t
            );
        })(Ua);
    var Bo = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        return Hn("div", { ref: t._setEl, className: t._cssClass }, e.children);
                    })(e, this);
                }),
                t
            );
        })(Uo),
        jo = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._hook("onClick", { domEvent: e }), t.s.selected && t.setState({ hasFocus: !1 });
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n = this;
                    this._unlisten = Ss(this._el, {
                        click: !0,
                        keepFocus: !0,
                        onBlur: function () {
                            n.setState({ hasFocus: !1 });
                        },
                        onEnd: function (a) {
                            if (e) {
                                var i = s({}, a);
                                i.domEvent.preventDefault(), (i.data = n.s.data), (i.drag = !0), n._hook("onDragEnd", i), (e = !1);
                            }
                            clearTimeout(t);
                        },
                        onFocus: function () {
                            n.setState({ hasFocus: !0 });
                        },
                        onHoverIn: function (e) {
                            n.s.actionable && n.setState({ hasHover: !0 }), n._hook("onHoverIn", { domEvent: e });
                        },
                        onHoverOut: function (e) {
                            n.setState({ hasHover: !1 }), n._hook("onHoverOut", { domEvent: e });
                        },
                        onKeyDown: function (e) {
                            var t = n.s.data;
                            switch (e.keyCode) {
                                case ws:
                                case ks:
                                    n._el.click(), e.preventDefault();
                                    break;
                                case 8:
                                case 46:
                                    t && !1 !== t.editable && n._hook("onDelete", { domEvent: e, event: t, source: "agenda" });
                            }
                        },
                        onMove: function (a) {
                            var i = n.s,
                                r = s({}, a);
                            (r.data = i.data),
                                (r.drag = !0),
                                (r.external = !0),
                                (!e && r.isTouch) || r.domEvent.preventDefault(),
                                e ? n._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(t), !r.isTouch && i.drag && !1 !== i.data.editable && ((e = !0), n._hook("onDragStart", r)));
                        },
                        onPress: function () {
                            n.s.actionable && n.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            n.setState({ isActive: !1 });
                        },
                        onStart: function (a) {
                            var i = n.s;
                            return (
                                a.isTouch &&
                                    i.drag &&
                                    !1 !== i.data.editable &&
                                    !e &&
                                    (t = setTimeout(function () {
                                        var t = s({}, a);
                                        (t.data = i.data), (t.drag = !0), n._hook("onDragModeOn", t), n._hook("onDragStart", t), (e = !0);
                                    }, 350)),
                                { ripple: i.actionable && i.ripple }
                            );
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    this._cssClass =
                        this._className +
                        " mbsc-list-item" +
                        this._theme +
                        this._hb +
                        this._rtl +
                        (e.actionable ? " mbsc-list-item-actionable" : "") +
                        (t.hasFocus ? " mbsc-focus" : "") +
                        (t.hasHover ? " mbsc-hover" : "") +
                        (t.isActive ? " mbsc-active" : "") +
                        (e.selected ? " mbsc-selected" : "");
                }),
                (t.prototype._destroy = function () {
                    this._unlisten();
                }),
                (t.defaults = { actionable: !0, ripple: !1 }),
                (t._name = "ListItem"),
                t
            );
        })(Ua);
    var Ko = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n = t.props;
                        n.actionable;
                        var a = n.children;
                        n.className, n.data, n.drag, n.ripple, n.rtl;
                        var r = n.theme;
                        n.themeVariant, n.onHoverIn, n.onHoverOut, n.onDragEnd, n.onDragMove, n.onDragStart, n.onDragModeOn, n.onDragModeOff, n.onDelete, n.onClick;
                        var o = i(n, [
                            "actionable",
                            "children",
                            "className",
                            "data",
                            "drag",
                            "ripple",
                            "rtl",
                            "theme",
                            "themeVariant",
                            "onHoverIn",
                            "onHoverOut",
                            "onDragEnd",
                            "onDragMove",
                            "onDragStart",
                            "onDragModeOn",
                            "onDragModeOff",
                            "onDelete",
                            "onClick",
                        ]);
                        return Hn(
                            "div",
                            s({ tabIndex: 0, ref: t._setEl, onClick: t._onClick, className: t._cssClass }, o),
                            Hn("div", { dangerouslySetInnerHTML: t.textParam }),
                            a,
                            Hn("div", { className: "mbsc-list-item-background mbsc-" + r })
                        );
                    })(0, this);
                }),
                t
            );
        })(jo),
        Jo = "mbsc-def";
    function Xo(e, t, n, a, s, i) {
        for (var r = "start-end" === s, o = i ? n : aa(Da(n, 1)), l = 0, c = Object.keys(e); l < c.length; l++)
            for (var d = e[c[l]], h = aa(t); h < o; h.setDate(h.getDate() + 1)) {
                var u = d[na(h)];
                if (u) {
                    if (u.allDay && (!r || la(h, t) || la(h, n))) return u.allDay;
                    if (!a)
                        for (var m = 0, _ = u.invalids; m < _.length; m++) {
                            var p = _[m];
                            if (r) {
                                if ($n(p.startDate, p.endDate, t, t, !0)) return p.original;
                                if ($n(p.startDate, p.endDate, n, n)) return p.original;
                            } else if ($n(p.startDate, p.endDate, t, n)) return p.original;
                        }
                }
            }
        return !1;
    }
    function Go(e, t, n, a, s, i, r, o) {
        var l = e.allDay || n,
            c = e.startDate;
        if (a && n && !s) {
            var d = o[na(c)];
            return c < i ? i : r[d + (Sa(c.getDay(), t.startDay, t.endDay) ? 0 : 1)].date;
        }
        return l ? pa(t, c.getFullYear(), c.getMonth(), c.getDate()) : c;
    }
    function qo(e, t, n, a, s, i, r, o) {
        var l = e.allDay || n,
            c = e.endDate;
        if (a && n && !s) {
            var d = o[na(ta(t, e.allDay, e.startDate, c))],
                h = c >= i || d >= r.length - 1 ? i : r[d + 1].date;
            return ta(t, !1, e.startDate, h);
        }
        var u = l ? ta(t, e.allDay, e.startDate, c) : c;
        return l ? pa(t, u.getFullYear(), u.getMonth(), u.getDate(), 23, 59, 59, 999) : u;
    }
    function Zo(e, t, n, a, s, i, r, o, l, c, d, h, u) {
        for (var m = n.allDay ? o : l, _ = n.allDay ? c : d, p = Go(n, e, s, i, r, m, h, u), v = qo(n, e, s, i, r, _, h, u), f = !1, g = 0, y = t; g < y.length; g++) {
            for (var b = y[g], x = 0, T = !1, D = void 0, C = 0, S = b; C < S.length; C++) {
                for (var w = S[C], k = !1, M = 0, E = w; M < E.length; M++) {
                    var N = E[M],
                        I = N.allDay ? o : l,
                        L = N.allDay ? c : d;
                    $n(Go(N, e, s, i, r, I, h, u), qo(N, e, s, i, r, L, h, u), p, v, !0) && ((k = !0), (T = !0), D ? (a[n.uid] = a[n.uid] || x) : (a[N.uid] = x + 1));
                }
                k || D || (D = w), x++;
            }
            T && (D ? D.push(n) : b.push([n]), (f = !0));
        }
        f || ((a[n.uid] = 0), t.push([[n]]));
    }
    function $o(e) {
        return (e = Math.abs(Te(e))) > 60
            ? 60 * Te(e / 60)
            : 60 % e == 0
            ? e
            : [6, 10, 12, 15, 20, 30].reduce(function (t, n) {
                  return Math.abs(n - e) < Math.abs(t - e) ? n : t;
              });
    }
    function Qo(e, t, n, a, s, i) {
        a && a > e && (e = a);
        var r = Zn(e);
        return (t > r || (s !== ie && i !== ie && !Sa(e.getDay(), s, i))) && (r = t), (100 * (r - t)) / n;
    }
    function el(e, t, n, a, s) {
        e = e || {};
        var i = Object.keys(e),
            r = {},
            o = t.map(function (e) {
                return e.id;
            }),
            l = n.map(function (e) {
                return e.id;
            });
        o.forEach(function (e) {
            (r[e] = {}),
                l.forEach(function (t) {
                    r[e][t] = {};
                });
        });
        for (
            var c = function (t) {
                    for (
                        var n = function (e) {
                                var n = e.resource,
                                    i = e.slot,
                                    c = n !== ie && a ? (de(n) ? n : [n]) : o,
                                    d = i !== ie && s ? [i] : l;
                                c.forEach(function (n) {
                                    var a = r[n];
                                    a &&
                                        d.forEach(function (n) {
                                            var s = a[n];
                                            s && (s[t] || (s[t] = []), s[t].push(e));
                                        });
                                });
                            },
                            i = 0,
                            c = e[t];
                        i < c.length;
                        i++
                    ) {
                        n(c[i]);
                    }
                },
                d = 0,
                h = i;
            d < h.length;
            d++
        ) {
            c(h[d]);
        }
        return r;
    }
    function tl(e, t) {
        var n = new Date(e),
            a = new Date(+An + t);
        return new Date(n.getFullYear(), n.getMonth(), n.getDate(), a.getHours(), a.getMinutes());
    }
    var nl = {},
        al = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function (e) {
                        t._triggerClick("onClick", e);
                        var n = t.s,
                            a = nl[n.event.uid];
                        a && n.selected && a.next({ hasFocus: !1 });
                    }),
                    (t._onRightClick = function (e) {
                        t._triggerClick("onRightClick", e);
                    }),
                    (t._onDocTouch = function (e) {
                        Pt(t._doc, us, t._onDocTouch), Pt(t._doc, ss, t._onDocTouch), (t._isDrag = !1), t._hook("onDragModeOff", { event: t.s.event.original });
                    }),
                    (t._updateState = function (e) {
                        t.setState(e);
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._render = function (e, t) {
                    var n = e.event,
                        a = new Date(n.date),
                        i = n.position,
                        r = n.startDate,
                        o = ta(e, n.allDay, r, n.endDate),
                        l = e.isTimeline,
                        c = e.isListing,
                        d = c || n.allDay,
                        h = !la(r, o),
                        u = h && la(r, a),
                        m = h && la(o, a),
                        _ = d && (!l || c),
                        p = l ? "timeline" : "schedule",
                        v = e.gridStartTime,
                        f = e.gridEndTime,
                        g = Zn(r),
                        y = Zn(o),
                        b = l && e.slot !== Jo,
                        x = Sa(o.getDay(), e.startDay, e.endDay),
                        T = e.singleDay ? Da(a, 1) : new Date(e.lastDay);
                    n.allDay || (T = ma(e, T)),
                        (this._isStart = b || !h || u),
                        (this._isEnd = b || !h || (d || l ? o < T && x : m)),
                        b || d || !(v > g || f < g) || (this._isStart = !1),
                        b || d || !(f < y || v > y) || (this._isEnd = !1),
                        (this._isDrag = this._isDrag || e.isDrag),
                        (this._content = ie),
                        (this._rangeText = n.start + " - " + n.end),
                        (this._isAllDay = _),
                        (this._host = p),
                        (n.allDay || (!l && h && !u && !m)) && (this._rangeText = n.allDayText),
                        (this._cssClass =
                            "mbsc-schedule-event" +
                            this._theme +
                            this._rtl +
                            (e.render || e.template ? " mbsc-schedule-event-custom" : "") +
                            (l ? " mbsc-timeline-event" : "") +
                            (c ? " mbsc-timeline-event-listing" : "") +
                            (this._isStart ? " mbsc-" + p + "-event-start" : "") +
                            (this._isEnd ? " mbsc-" + p + "-event-end" : "") +
                            (_ ? " mbsc-schedule-event-all-day" : "") +
                            (b ? " mbsc-timeline-event-slot" : "") +
                            ((t.hasFocus && !e.inactive && !e.selected) || e.selected ? " mbsc-schedule-event-active" : "") +
                            (!t.hasHover || e.inactive || this._isDrag ? "" : " mbsc-schedule-event-hover") +
                            (e.isDrag ? " mbsc-schedule-event-dragging" + (l ? " mbsc-timeline-event-dragging" : "") : "") +
                            (e.hidden ? " mbsc-schedule-event-hidden" : "") +
                            (e.inactive ? " mbsc-schedule-event-inactive" : "") +
                            (!1 === n.original.editable ? " mbsc-readonly-event" : "") +
                            (n.original.cssClass ? " " + n.original.cssClass : "")),
                        (this._style = s({}, i, { color: n.color, top: e.eventHeight && i.top !== ie ? i.top * e.eventHeight + "px" : i.top }));
                    var D,
                        C = e.render || e.renderContent;
                    if (C) {
                        var S = C(n);
                        me(S) ? (D = S) : (this._content = S);
                    } else e.contentTemplate || (D = n.html);
                    D !== this._text && ((this._text = D), (this._html = D ? this._safeHtml(D) : ie), (this._shouldEnhance = D && !!C));
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n = this,
                        a = this.s.event.uid,
                        i = nl[a];
                    i || ((i = new d()), (nl[a] = i)),
                        (this._unsubscribe = i.subscribe(this._updateState)),
                        (this._doc = zt(this._el)),
                        (this._unlisten = Ss(this._el, {
                            keepFocus: !0,
                            onBlur: function () {
                                i.next({ hasFocus: !1 });
                            },
                            onDoubleClick: function (e) {
                                e.domEvent.stopPropagation(), n._triggerClick("onDoubleClick", e.domEvent);
                            },
                            onEnd: function (a) {
                                if (n._isDrag) {
                                    var i = n.s,
                                        r = s({}, a);
                                    r.domEvent.preventDefault(),
                                        (r.event = i.event),
                                        (r.resource = i.resource),
                                        (r.slot = i.slot),
                                        i.resize && e ? ((r.resize = !0), (r.direction = e)) : i.drag && (r.drag = !0),
                                        n._hook("onDragEnd", r),
                                        i.isDrag || (n._isDrag = !1),
                                        n._el && r.moved && n._el.blur();
                                }
                                clearTimeout(t), (e = ie);
                            },
                            onFocus: function () {
                                i.next({ hasFocus: !0 });
                            },
                            onHoverIn: function (e) {
                                i.next({ hasHover: !0 }), n._triggerClick("onHoverIn", e);
                            },
                            onHoverOut: function (e) {
                                i.next({ hasHover: !1 }), n._triggerClick("onHoverOut", e);
                            },
                            onKeyDown: function (e) {
                                var t = n.s.event.original;
                                switch (e.keyCode) {
                                    case ws:
                                    case ks:
                                        n._el.click(), e.preventDefault();
                                        break;
                                    case 8:
                                    case 46:
                                        !1 !== t.editable && n._hook("onDelete", { domEvent: e, event: t, source: n._host });
                                }
                            },
                            onMove: function (a) {
                                var i = n.s,
                                    r = s({}, a);
                                if (((r.event = i.event), (r.resource = i.resource), (r.slot = i.slot), e)) (r.resize = !0), (r.direction = e);
                                else {
                                    if (!i.drag) return;
                                    r.drag = !0;
                                }
                                !1 !== i.event.original.editable &&
                                    ((!n._isDrag && r.isTouch) || r.domEvent.preventDefault(),
                                    n._isDrag ? n._hook("onDragMove", r) : (Math.abs(r.deltaX) > 7 || Math.abs(r.deltaY) > 7) && (clearTimeout(t), r.isTouch || ((n._isDrag = !0), n._hook("onDragStart", r))));
                            },
                            onStart: function (a) {
                                var i = n.s,
                                    r = s({}, a),
                                    o = r.domEvent.target;
                                if (((r.event = i.event), (r.resource = i.resource), (r.slot = i.slot), i.resize && o.classList.contains("mbsc-schedule-event-resize")))
                                    (e = o.classList.contains("mbsc-schedule-event-resize-start") ? "start" : "end"), (r.resize = !0), (r.direction = e);
                                else {
                                    if (!i.drag) return;
                                    r.drag = !0;
                                }
                                !1 !== i.event.original.editable &&
                                    (n._isDrag
                                        ? (r.domEvent.stopPropagation(), n._hook("onDragStart", r))
                                        : r.isTouch &&
                                          (t = setTimeout(function () {
                                              n._hook("onDragModeOn", r), n._hook("onDragStart", r), (n._isDrag = !0);
                                          }, 350)));
                            },
                        })),
                        this._isDrag && (Ot(this._doc, us, this._onDocTouch), Ot(this._doc, ss, this._onDocTouch));
                }),
                (t.prototype._destroy = function () {
                    if ((this._el && this._el.blur(), this._unsubscribe)) {
                        var e = this.s.event.uid,
                            t = nl[e];
                        t && (t.unsubscribe(this._unsubscribe), t.nr || delete nl[e]);
                    }
                    this._unlisten && this._unlisten(), Pt(this._doc, us, this._onDocTouch), Pt(this._doc, ss, this._onDocTouch);
                }),
                (t.prototype._triggerClick = function (e, t) {
                    var n = this.s;
                    this._hook(e, { date: n.event.date, domEvent: t, event: n.event.original, resource: n.resource, slot: n.slot, source: this._host });
                }),
                t
            );
        })(Ua);
    var sl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n = e.event,
                            a = t._isAllDay,
                            s = e.isTimeline,
                            i = t._theme,
                            r = e.resize && !1 !== n.original.editable;
                        return Hn(
                            "div",
                            { tabIndex: 0, className: t._cssClass, "data-id": n.id, style: t._style, ref: t._setEl, title: n.tooltip, onClick: t._onClick, onContextMenu: t._onRightClick },
                            t._isStart &&
                                r &&
                                Hn("div", { className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-start" + (s ? " mbsc-timeline-event-resize" : "") + t._rtl + (e.isDrag ? " mbsc-schedule-event-resize-start-touch" : "") }),
                            t._isEnd &&
                                r &&
                                Hn("div", { className: "mbsc-schedule-event-resize mbsc-schedule-event-resize-end" + (s ? " mbsc-timeline-event-resize" : "") + t._rtl + (e.isDrag ? " mbsc-schedule-event-resize-end-touch" : "") }),
                            e.render
                                ? t._html
                                    ? Hn("div", { style: { height: "100%" }, dangerouslySetInnerHTML: t._html })
                                    : t._content
                                : Hn(
                                      rn,
                                      null,
                                      !a && !s && Hn("div", { className: "mbsc-schedule-event-bar" + i + t._rtl }),
                                      Hn("div", {
                                          className: "mbsc-schedule-event-background" + (s ? " mbsc-timeline-event-background" : "") + (a ? " mbsc-schedule-event-all-day-background" : "") + i,
                                          style: { background: n.style.background },
                                      }),
                                      Hn(
                                          "div",
                                          { "aria-hidden": "true", className: "mbsc-schedule-event-inner" + i + (a ? " mbsc-schedule-event-all-day-inner" : "") + (n.cssClass || ""), style: { color: n.style.color } },
                                          Hn("div", { className: "mbsc-schedule-event-title" + (a ? " mbsc-schedule-event-all-day-title" : "") + i, dangerouslySetInnerHTML: t._html }, t._content),
                                          !a && Hn("div", { className: "mbsc-schedule-event-range" + i }, t._rangeText)
                                      ),
                                      n.ariaLabel && Hn("div", { className: "mbsc-hidden-content" }, n.ariaLabel)
                                  ),
                            Hn("div", { dangerouslySetInnerHTML: t.textParam })
                        );
                    })(e, this);
                }),
                t
            );
        })(al),
        il = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._mounted = function () {
                    var e = this;
                    clearInterval(this._timer),
                        (this._timer = setInterval(function () {
                            e._zone
                                ? e._zone.runOutsideAngular(function () {
                                      e.forceUpdate();
                                  })
                                : e.forceUpdate();
                        }, 1e4));
                }),
                (t.prototype._destroy = function () {
                    clearInterval(this._timer);
                }),
                (t.prototype._render = function (e) {
                    var t = pa(e),
                        n = e.rtl,
                        a = e.displayedDays,
                        s = e.displayedTime,
                        i = e.startTime,
                        r = Ce(Zn(t) / Wn) * Wn,
                        o = e.timezones,
                        l = { amText: e.amText, pmText: e.pmText };
                    if (o && jn(t)) {
                        this._times = [];
                        for (var c = 0, d = o; c < d.length; c++) {
                            var h = d[c],
                                u = t.clone();
                            u.setTimezone(h.timezone), this._times.push(ya(e.timeFormat, u, l));
                        }
                    } else this._time = ya(e.timeFormat, t, l);
                    this._cssClass = "mbsc-schedule-time-indicator mbsc-schedule-time-indicator-" + e.orientation + this._theme + this._rtl + " " + (r < i || r > i + s || !Sa(t.getDay(), e.startDay, e.endDay) ? " mbsc-hidden" : "");
                    var m = ra(e.firstDay, t, e.startDay, e.endDay);
                    if ("x" === e.orientation) {
                        var _ = (100 * m) / a + "%",
                            p = o && 4.25 * o.length + "em";
                        (this._pos = { left: o && !n ? p : ie, right: o && n ? p : ie, top: (100 * (r - i)) / s + "%" }), (this._dayPos = { left: n ? "" : _, right: n ? _ : "", width: 100 / a + "%" });
                    } else {
                        var v = (100 * (m * s + r - i)) / (a * s) + "%";
                        this._pos = { left: n ? "" : v, right: n ? v : "" };
                    }
                }),
                t
            );
        })(Ua);
    var rl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n = e.timezones;
                        return Hn(
                            "div",
                            { "aria-hidden": "true", className: t._cssClass, style: t._pos },
                            Hn(
                                "div",
                                { className: (n ? "mbsc-flex " : "") + "mbsc-schedule-time-indicator-time mbsc-schedule-time-indicator-time-" + e.orientation + t._theme + t._rtl },
                                n
                                    ? n.map(function (e, n) {
                                          return Hn("div", { key: n, className: "mbsc-schedule-time-indicator-tz" + t._theme + t._rtl }, t._times[n]);
                                      })
                                    : t._time
                            ),
                            e.showDayIndicator && Hn("div", { className: "mbsc-schedule-time-indicator-day" + t._theme, style: t._dayPos })
                        );
                    })(e, this);
                }),
                t
            );
        })(il),
        ol = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onClick = function () {
                        var e = t.s;
                        e.selectable && e.onClick(e.timestamp);
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._render = function (e, t) {
                    var n = new Date(e.timestamp);
                    (this._cssClass =
                        "mbsc-schedule-header-item " +
                        this._className +
                        this._theme +
                        this._rtl +
                        this._hb +
                        (e.largeNames ? " mbsc-schedule-header-item-large" : "") +
                        (e.selected ? " mbsc-selected" : "") +
                        (t.hasHover ? " mbsc-hover" : "")),
                        (this._data = { date: n, events: e.events, resource: e.resource, selected: e.selected }),
                        (this._day = n.getDay());
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ss(this._el, {
                        onHoverIn: function () {
                            e.s.selectable && e.setState({ hasHover: !0 });
                        },
                        onHoverOut: function () {
                            e.s.selectable && e.setState({ hasHover: !1 });
                        },
                    });
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && this._unlisten();
                }),
                t
            );
        })(Ua);
    var ll = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n) {
                        var a;
                        return (
                            e.renderDay && (a = e.renderDay(n._data)),
                            e.renderDayContent && (a = e.renderDayContent(n._data)),
                            me(a) && ((a = Hn("div", { dangerouslySetInnerHTML: n._safeHtml(a) })), (n._shouldEnhance = !0)),
                            Hn(
                                "div",
                                { ref: n._setEl, className: n._cssClass, onClick: n._onClick },
                                e.renderDay
                                    ? a
                                    : Hn(
                                          rn,
                                          null,
                                          Hn(
                                              "div",
                                              { "aria-hidden": "true", className: "mbsc-schedule-header-dayname" + n._theme + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-dayname-curr" : "") },
                                              e.dayNames[n._day]
                                          ),
                                          Hn(
                                              "div",
                                              {
                                                  "aria-hidden": "true",
                                                  className: "mbsc-schedule-header-day" + n._theme + n._rtl + (e.selected ? " mbsc-selected" : "") + (e.isToday ? " mbsc-schedule-header-day-today" : "") + (t.hasHover ? " mbsc-hover" : ""),
                                              },
                                              e.day
                                          ),
                                          e.label && Hn("div", { className: "mbsc-hidden-content", "aria-pressed": e.selectable ? (e.selected ? "true" : "false") : ie, role: e.selectable ? "button" : ie }, e.label),
                                          e.renderDayContent && a
                                      )
                            )
                        );
                    })(e, t, this);
                }),
                t
            );
        })(ol),
        cl = new d();
    function dl(e) {
        return cl.subscribe(e);
    }
    function hl(e) {
        cl.unsubscribe(e);
    }
    var ul = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._render = function (e) {
                    e.dragData !== this._prevS.dragData && (this._dragData = me(e.dragData) ? JSON.parse(e.dragData.toString()) : e.dragData);
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s.element || this._el;
                    if (this._unlisten === ie && t) {
                        var n, a, i;
                        t.classList.add("mbsc-draggable");
                        var r = zt(t).body,
                            o = function (e) {
                                (n.style.left = e.endX + "px"), (n.style.top = e.endY + "px");
                            };
                        this._unlisten = Ss(t, {
                            onEnd: function (t) {
                                if (a) {
                                    var o = s({}, t);
                                    o.domEvent.preventDefault(), (o.action = "externalDrop"), (o.event = e._dragData), (o.create = !0), (o.eventName = "onDragEnd"), cl.next(o), (a = !1), r.removeChild(n);
                                }
                                clearTimeout(i);
                            },
                            onMove: function (t) {
                                var l = s({}, t);
                                (l.event = e._dragData),
                                    (l.clone = n),
                                    (l.create = !0),
                                    (l.external = !0),
                                    (!a && l.isTouch) || l.domEvent.preventDefault(),
                                    a
                                        ? (o(t), (l.eventName = "onDragMove"), cl.next(l))
                                        : (Math.abs(l.deltaX) > 7 || Math.abs(l.deltaY) > 7) && (clearTimeout(i), l.isTouch || (o(t), r.appendChild(n), (l.eventName = "onDragStart"), cl.next(l), (a = !0)));
                            },
                            onStart: function (l) {
                                var c = s({}, l);
                                a ||
                                    ((n = t.cloneNode(!0)).classList.add("mbsc-drag-clone"),
                                    (c.event = e._dragData),
                                    (c.create = !0),
                                    (c.external = !0),
                                    c.isTouch &&
                                        (i = setTimeout(function () {
                                            o(l), r.appendChild(n), (c.clone = n), (c.eventName = "onDragModeOn"), cl.next(c), (c.eventName = "onDragStart"), cl.next(c), (a = !0);
                                        }, 350)));
                            },
                        });
                    }
                }),
                (t.prototype._destroy = function () {
                    this._unlisten && (this._unlisten(), (this._unlisten = ie));
                }),
                t
            );
        })(Ua),
        ml = 1;
    function _l(e, t, n, a, i, r) {
        var o = n,
            l = a,
            c = new Map(),
            d = [];
        i && (o = va(i, t)), r ? (l = va(r, t)) : i && (l = Da(o, 1));
        var h = qi(e, o, l, t);
        for (var u in h)
            if (u)
                for (var m = 0, _ = h[u]; m < _.length; m++) {
                    var p = _[m],
                        v = va(p.start, t),
                        f = va(p.end, t) || v;
                    if (p.start) {
                        if (!c.has(p) && $n(o, l, v, f)) {
                            var g = s({}, p);
                            (t.dataTimezone || t.displayTimezone) && ((g.start = v.toISOString()), (g.end = f.toISOString())), c.set(p, !0), d.push(g);
                        }
                    } else d.push(p);
                }
        return d;
    }
    function pl() {
        return "mbsc_" + ml++;
    }
    function vl(e, t, n, a, s, i, r, o, l) {
        var c = t.color || (s && s.color),
            d = t.start || t.date,
            h = t.recurring ? t.original.start : t.start,
            u = t.allDay || !h,
            m = d ? va(d, u ? ie : e) : null,
            _ = t.end ? va(t.end, u ? ie : e) : null,
            p = ta(e, t.allDay, m, _, i),
            v = m && p && !la(m, p),
            f = !v || la(m, n),
            g = !v || la(p, n),
            y = u || (!r && v && !f && !g),
            b = "",
            x = "";
        !l && m && _ && (!r || o || l ? u || ((b = ya(e.timeFormat, m, e)), (x = ya(e.timeFormat, _, e))) : ((b = ya(e.dateFormat, m, e)), (x = ya(e.dateFormat, p, e))));
        var T = l || y || (!f && !r) ? "" : b,
            D = l || y || (!g && !r) ? "" : x,
            C = t.title || t.text || "",
            S = C,
            w = S + (y ? "" : ", " + T + " - " + D),
            k = "DDDD, MMMM D, YYYY",
            M = !l && m ? ", " + e.fromText + ": " + ya(k, m, e) + (u ? "" : ", " + b) : "",
            E = !l && _ ? ", " + e.toText + ": " + ya(k, _, e) + (u ? "" : ", " + x) : "",
            N = s && s.name ? ", " + s.name : "";
        return {
            allDay: u,
            allDayText: y ? e.allDayText : "",
            ariaLabel: S + N + M + E,
            color: c,
            currentResource: s,
            date: +n,
            end: D,
            endDate: _ || (m ? new Date(m) : null),
            html: C,
            id: t.id,
            isMultiDay: v,
            lastDay: !y && v && g ? e.toText : "",
            original: t,
            position: {},
            resource: t.resource,
            slot: t.slot,
            start: T,
            startDate: m,
            style: { background: c, color: a && c ? Ut(c) : "" },
            title: S,
            tooltip: e.showEventTooltip ? t.tooltip || w : ie,
            uid: t.occurrenceId ? t.occurrenceId : t.id,
        };
    }
    function fl(e) {
        var t = [];
        if (e)
            for (var n = 0, a = e; n < a.length; n++) {
                var s = a[n];
                s.id === ie && (s.id = pl()), t.push(s);
            }
        return t;
    }
    function gl(e, t, n, a, s, i, r, o, l) {
        if ("start-end" === o) {
            var c = Zi(e, a, t, n, i, r),
                d = Zi(e, s, t, n, i, r);
            if (c) return c;
            if (d) return d;
        } else
            for (var h = l ? s : aa(Da(s, 1)), u = aa(a); u < h; u.setDate(u.getDate() + 1)) {
                var m = Zi(e, u, t, n, i, r);
                if (m) return m;
            }
        return !1;
    }
    var yl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onScroll = function () {}),
                    (t._onMouseLeave = function () {
                        t._cursorTimeCont && !t.state.dragData && ((t._cursorTimeCont.style.visibility = "hidden"), (t._isCursorTimeVisible = !1));
                    }),
                    (t._onMouseMove = function (e, n) {
                        if (t._showCursorTime) {
                            var a = t.s,
                                s = a.rtl,
                                i = t._isTimeline,
                                r = t._scrollCont,
                                o = t._cursorTimeCont;
                            if (
                                (!t._isTouch || t._tempStart
                                    ? !t._isCursorTimeVisible && e && (t._calcGridSizes(), (o.style.visibility = "visible"), (t._isCursorTimeVisible = !0))
                                    : ((o.style.visibility = "hidden"), (t._isCursorTimeVisible = !1)),
                                t._isCursorTimeVisible)
                            ) {
                                var l = e ? e.clientX : t._cursorX || 0,
                                    c = e ? e.clientY : t._cursorY || 0,
                                    d = l + r.scrollLeft - t._resWidth * (s ? -1 : 1),
                                    h = s ? t._gridContRight - d : d - t._gridContLeft,
                                    u = ce(c + r.scrollTop - t._gridContTop, 8, t._colHeight),
                                    m = void 0,
                                    _ = void 0,
                                    p = void 0;
                                if (n !== ie) (_ = pa(a, n < 0 ? t._tempStart : t._tempEnd)), (m = i ? t._dayIndexMap[na(_)] : 0), (p = 0 === (p = Zn(_)) ? (n < 0 ? p : Bn) : p);
                                else {
                                    (m = i ? ce(Ce(h / t._colWidth), 0, t._daysNr - 1) : 0),
                                        (p = t._startTime + De(t._isTimeline ? Ce((t._time * (h - m * t._colWidth)) / t._colWidth) : Ce((t._time * (u - 8)) / (t._colHeight - 16)), a.dragTimeStep * Wn));
                                    var v = t._days[m].date,
                                        f = new Date(+An + p);
                                    _ = pa(a, v.getFullYear(), v.getMonth(), v.getDate(), f.getHours(), f.getMinutes());
                                }
                                var g = t._time * (i ? t._daysNr : 1),
                                    y = i ? (s ? "right" : "left") : "top",
                                    b = o.style;
                                (b[y] = (100 * (m * t._time + p - t._startTime)) / g + "%"), (b[s ? "left" : "right"] = ""), (o.textContent = ya(a.timeFormat, _, a)), (t._cursorX = l), (t._cursorY = c);
                            }
                        }
                    }),
                    (t._onEventDragModeOn = function (e) {
                        var n = e.create ? t._tempEvent : e.event,
                            a = e.create ? t._tempResource : e.resource,
                            s = e.create ? t._tempSlot : e.slot;
                        t.setState({ dragData: { draggedEvent: n, originDates: e.external ? ie : t._getDragDates(n, a, s), resource: a }, isTouchDrag: !0 });
                    }),
                    (t._onEventDragModeOff = function (e) {
                        t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.event, resource: e.resource, slot: e.slot, source: e.source }), t.setState({ dragData: ie, isTouchDrag: !1 });
                    }),
                    (t._onEventDragStart = function (e) {
                        var n = t.s,
                            a = e.click,
                            i = n.eventList,
                            r = t._isTimeline,
                            o = t._visibleResources,
                            l = t._slots,
                            c = n.dragTimeStep,
                            d = e.startX,
                            h = e.startY;
                        (t._scrollY = 0), (t._scrollX = 0), t._calcGridSizes();
                        var u = n.rtl ? t._gridRight - d : d - t._gridLeft,
                            m = ce(h - t._gridTop, 8, t._colHeight - 9),
                            _ = i ? t._cols : t._days,
                            p = _.length,
                            v = t._colWidth,
                            f = v ? Ce(u / v) : 1,
                            g = t._resourceTops,
                            y = 0,
                            b = f,
                            x = 0;
                        if (r)
                            (x = v ? Ce(u / (v / l.length)) % l.length : 1),
                                o.forEach(function (e, t) {
                                    m > g[e.id] && (y = t);
                                });
                        else {
                            var T = t._groupByResource,
                                D = T ? p : t._hasSlots ? t._slots.length : o.length,
                                C = t._el.querySelector(".mbsc-schedule-all-day-wrapper"),
                                S = C && C.getBoundingClientRect();
                            (t._allDayTop = S ? S.top : t._gridContTop), (y = T ? Ce(f / D) : f % D), (b = T ? f % D : Ce(f / D));
                        }
                        var w = e.external ? ie : o[y],
                            k = w ? w.id : ie,
                            M = e.external ? ie : l[x],
                            E = M ? M.id : ie;
                        if (e.create) {
                            b = ce(b, 0, p - 1);
                            var N = !r && n.showAllDay && e.endY < t._gridContTop,
                                I = "day" === n.type && 1 === n.size ? t._firstDay : _[b].date,
                                L = i || (!e.external && !a) ? c * Wn : t._stepCell,
                                H = t._getGridTime(I, u, m, b, a ? t._stepCell / Wn : c),
                                Y = !t._isDailyResolution || N || i ? (N ? I : ma(n, I)) : H,
                                O = "year" === n.resolution ? Ca(Y, 12, n) : "month" === n.resolution ? Ca(Y, 1, n) : "week" === n.resolution ? Da(Y, n.endDay - n.startDay + 1 + (n.endDay < n.startDay ? 7 : 0)) : Da(Y, 1),
                                P = n.exclusiveEndDates ? O : new Date(+O - 1),
                                z = N || i ? P : wa(pa(n, +Y + L), a ? 1 : c),
                                V = n.extendDefaultEvent ? n.extendDefaultEvent({ resource: k, slot: E, start: Y }) : ie,
                                F = s({ allDay: N, end: z, id: pl(), resource: w && k !== Jo ? k : ie, slot: M && E !== Jo ? E : ie, start: Y, title: n.newEventText }, V, e.event),
                                R = t._getEventData(F, I, w);
                            if ((r && k && (R.position.top = ce(Ce((m - g[k]) / t._eventHeight), 0, t._eventRows[k] - 1)), e.event)) {
                                var A = +R.endDate - +R.startDate;
                                (R.startDate = I), (R.endDate = new Date(+I + A));
                            }
                            (t._tempEvent = R), (t._tempResource = k), (t._tempSlot = E);
                        }
                        a || t._hook("onEventDragStart", { domEvent: e.domEvent, event: (e.create ? t._tempEvent : e.event).original, resource: k, slot: E, source: r ? "timeline" : "schedule" });
                    }),
                    (t._onEventDragMove = function (e) {
                        clearTimeout(t._scrollTimer);
                        var n = t.s,
                            a = n.rtl,
                            i = a ? -1 : 1,
                            r = t._isTimeline,
                            o = n.eventList,
                            l = "month" === n.resolution || "year" === n.resolution,
                            c = o ? t._cols : t._days,
                            d = t._colWidth,
                            h = c.length,
                            u = t._slots,
                            m = t._groupByResource,
                            _ = t._visibleResources,
                            p = t.state.dragData,
                            v = n.dragTimeStep,
                            f = n.timeFormat,
                            g = e.startX,
                            y = ce(e.endX, t._gridContLeft, t._gridContRight - 1),
                            b = ce(e.endY, t._gridContTop, t._gridContBottom - 1),
                            x = b - e.startY + t._scrollY,
                            T = a ? g - y + t._scrollX : y - g + t._scrollX,
                            D = r ? T : x,
                            C = r ? d : t._colHeight - 16,
                            S = ce(a ? t._gridRight + t._scrollX - y : y - t._gridLeft + t._scrollX, 0, t._gridRight - t._gridLeft - 1),
                            w = ce(b - t._gridTop + t._scrollY, 8, t._colHeight - 9),
                            k = Ce((a ? t._gridRight - g : g - t._gridLeft) / d),
                            M = Ce(S / d),
                            E = n.showAllDay && e.endY < t._gridContTop,
                            N = t._scrollCont,
                            I = k,
                            L = M,
                            H = 0,
                            Y = 0,
                            O = !1,
                            P = t._gridContBottom - e.endY,
                            z = e.endY - t._gridContTop,
                            V = e.endX - t._gridContLeft,
                            F = t._gridContRight - e.endX,
                            R = (N.scrollWidth - N.clientWidth) * i,
                            A = a ? 0 : R,
                            W = a ? R : 0;
                        if (
                            (P < 30 && N.scrollTop < N.scrollHeight - N.clientHeight && ((N.scrollTop += 5), (t._scrollY += 5), (O = !0)),
                            z < 30 && !E && N.scrollTop > 0 && ((N.scrollTop -= 5), (t._scrollY -= 5), (O = !0)),
                            V < 30 + (a ? 0 : t._resWidth) && N.scrollLeft > W && ((N.scrollLeft -= 5), (t._scrollX -= 5 * i), (O = !0)),
                            F < 30 + (a ? t._resWidth : 0) && N.scrollLeft < A && ((N.scrollLeft += 5), (t._scrollX += 5 * i), (O = !0)),
                            O &&
                                (t._scrollTimer = setTimeout(function () {
                                    t._onEventDragMove(e);
                                }, 20)),
                            r)
                        )
                            (Y = Ce(S / (d / u.length)) % u.length),
                                _.forEach(function (e, n) {
                                    w > t._resourceTops[e.id] && (H = n);
                                });
                        else {
                            var U = m ? h : t._resources.length;
                            (I = m ? k % U : Ce(k / U)), (L = m ? M % U : Ce(M / U)), (H = m ? Ce(M / U) : M % U);
                        }
                        (I = ce(I, 0, h - 1)), (L = ce(L, 0, h - 1));
                        var B,
                            j = e.create ? t._tempEvent : e.event,
                            K = j.startDate,
                            J = j.endDate,
                            X = +J - +K,
                            G = t._time,
                            q = Ce((G * D) / C),
                            Z = u[Y].id,
                            $ = _[H].id,
                            Q = j.allDay,
                            ee = Q ? ie : n,
                            te = Q || o,
                            ne = K,
                            ae = J,
                            se = c[I].date,
                            re = c[L].date,
                            oe = "day" === n.type && 1 === n.size ? 0 : ia(se, re),
                            le = L - I,
                            de = "year" === n.resolution ? 12 : 1,
                            he = oe - le;
                        if (e.drag || e.external)
                            if (r && o && l) (ne = Ca(K, le * de, n)), (ae = Ca(J, le * de, n));
                            else {
                                if (((te = (Q = E || (r && j.allDay)) || o), (ee = Q ? ie : n), (j.allDay && !r && !E) || (e.external && !E))) {
                                    var ue = aa(Da(K, oe));
                                    ne = t._getGridTime(ue, S, w, L, v);
                                } else r && !te ? (ne = wa(pa(n, +K + q + (Bn - G) * oe + G * he), v)) : ((B = Da(K, oe)), (ne = te ? B : wa(pa(ee, +B + q), v)));
                                ae = pa(ee, +ne + X);
                            }
                        else {
                            var me = r ? 0 : M - k,
                                _e = e.create ? (me ? me > 0 : D > 0) : "end" === e.direction,
                                pe = ia(K, J),
                                ve = e.create ? t._tempResource : e.resource;
                            !r && m && ve !== $ && p && p.draggedEvent && (oe = ia(p.draggedEvent.startDate, p.draggedEvent.endDate) * (_e ? 1 : -1)),
                                _e
                                    ? r && o && l
                                        ? (ae = Ca(J, le * de, n))
                                        : r && !te
                                        ? (ae = wa(pa(n, +J + q + oe * (Bn - G) + G * he), v))
                                        : ((B = Da(J, Math.max(-pe, oe))), (ae = te ? B : wa(pa(ee, +B + q), v)), !te && (Zn(ae) > t._endTime + 1 || ae >= Da(aa(B), 1)) && (ae = pa(n, +aa(B) + t._endTime + 1)))
                                    : r && o && l
                                    ? (ne = Ca(K, le * de, n))
                                    : r && !te
                                    ? (ne = wa(pa(n, +K + q + oe * (Bn - G) + G * he), v))
                                    : ((B = Da(K, Math.min(pe, oe))), (ne = te ? B : wa(pa(ee, +B + q), v)), !te && (Zn(ne) < t._startTime || ne < aa(B)) && (ne = pa(n, +aa(B) + t._startTime))),
                                ($ = ve),
                                te && ae < ne && (_e ? (ae = pa(n, ne)) : (ne = pa(n, ae))),
                                !te && (ae < ne || Math.abs(+ae - +ne) < v * Wn) && (_e ? (ae = pa(n, +ne + v * Wn)) : (ne = pa(n, +ae - v * Wn)));
                        }
                        if (t._tempStart !== +ne || t._tempEnd !== +ae || t._tempAllDay !== Q || t._tempResource !== $ || t._tempSlot !== Z) {
                            var fe = s({}, j),
                                ge = void 0,
                                ye = void 0;
                            t._isDailyResolution ? ((ge = ya(f, ne, n)), (ye = ya(f, ae, n))) : ((ge = ya(n.dateFormat, ne, n)), (ye = ya(n.dateFormat, ta(n, Q, ne, ae), n))),
                                (fe.startDate = ne),
                                (fe.endDate = ae),
                                (fe.start = ge),
                                (fe.end = ye),
                                (fe.allDay = Q),
                                (t._tempStart = +ne),
                                (t._tempEnd = +ae),
                                (t._tempAllDay = Q),
                                (t._tempResource = $),
                                (t._tempSlot = Z),
                                Q || t._onMouseMove(e.domEvent, e.drag ? -1 : e.direction ? ("end" === e.direction ? 1 : -1) : D),
                                t.setState({ dragData: { draggedDates: t._getDragDates(fe, $, Z), draggedEvent: fe, originDates: p && p.originDates, resource: $, slot: Z } });
                        }
                    }),
                    (t._onEventDragEnd = function (e) {
                        clearTimeout(t._scrollTimer);
                        var n = t.s,
                            a = e.create,
                            s = t.state,
                            i = s.dragData;
                        if ((a && !i && ((i = {}).draggedEvent = t._tempEvent), i && i.draggedEvent)) {
                            var r = e.event,
                                o = i.draggedEvent,
                                l = o.startDate,
                                c = o.endDate,
                                d = o.allDay,
                                h = o.original,
                                u = e.resource,
                                m = i.resource === ie ? u : i.resource,
                                _ = h.resource === ie ? m : h.resource,
                                p = a ? t._tempSlot : e.slot,
                                v = i.slot === ie ? p : i.slot,
                                f = {},
                                g = t._isTimeline ? "timeline" : "schedule",
                                y = a || +l != +r.startDate || +c != +r.endDate || d !== r.allDay || u !== m || p !== v,
                                b = _,
                                x = void 0;
                            if (u !== m && !a && !t._isSingleResource)
                                if (de(_) && _.length && m) {
                                    var T = _.indexOf(u);
                                    -1 === _.indexOf(m) && (b = _.slice()).splice(T, 1, m);
                                } else b = m;
                            x =
                                b && n.resources
                                    ? de(b)
                                        ? b
                                        : [b]
                                    : t._resources.map(function (e) {
                                          return e.id;
                                      });
                            for (var D = 0, C = x; D < C.length; D++) {
                                var S = C[D];
                                t._invalids[S] && (f[S] = t._invalids[S][v]);
                            }
                            var w = e.action || (s.dragData ? "drag" : "click"),
                                k =
                                    !y ||
                                    n.eventDragEnd({
                                        action: w,
                                        collision: Xo(f, l, c, d, n.invalidateEvent, n.exclusiveEndDates),
                                        create: a,
                                        domEvent: e.domEvent,
                                        event: o,
                                        resource: b !== Jo ? b : ie,
                                        slot: v !== Jo ? v : ie,
                                        source: g,
                                    }),
                                M = s.isTouchDrag && (!a || k);
                            if (k && M && u !== m && !h.color) {
                                var E = Ee(t._resources, function (e) {
                                        return e.id === m;
                                    }),
                                    N = E && E.color;
                                N ? ((o.color = N), (o.style.background = N), (o.style.color = Ut(N))) : ((o.color = ie), (o.style = {}));
                            }
                            M || "click" === w || t._hook("onEventDragEnd", { domEvent: e.domEvent, event: (a ? t._tempEvent : e.event).original, resource: m, slot: v, source: g }),
                                t.setState({ dragData: M ? { draggedEvent: o, originDates: k ? t._getDragDates(o, m, v) : i.originDates } : ie, isTouchDrag: M }),
                                (t._tempStart = 0),
                                (t._tempEnd = 0),
                                (t._tempAllDay = ie);
                        }
                    }),
                    (t._onExternalDrag = function (e) {
                        if (t.s.externalDrop) {
                            var n = e.endY < t._gridContBottom && e.endY > t._allDayTop && e.endX > t._gridContLeft && e.endX < t._gridContRight;
                            switch (e.eventName) {
                                case "onDragModeOff":
                                    t._onEventDragModeOff(e);
                                    break;
                                case "onDragModeOn":
                                    t._onEventDragModeOn(e);
                                    break;
                                case "onDragStart":
                                    t._onEventDragStart(e);
                                    break;
                                case "onDragMove":
                                    var a = e.clone;
                                    n
                                        ? ((a.style.display = "none"), t._onEventDragMove(e), (t._onCalendar = !0))
                                        : t._onCalendar && (clearTimeout(t._scrollTimer), (a.style.display = "table"), t.setState({ dragData: {} }), (t._tempStart = 0), (t._tempEnd = 0), (t._tempAllDay = ie), (t._onCalendar = !1));
                                    break;
                                case "onDragEnd":
                                    n ? t._onEventDragEnd(e) : (t.setState({ dragData: ie, isTouchDrag: !1 }), t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.event, resource: e.resource, slot: e.slot, source: e.source }));
                            }
                        }
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._isToday = function (e) {
                    return la(new Date(e), pa(this.s));
                }),
                (t.prototype._formatTime = function (e, t) {
                    var n = this.s,
                        a = n.timeFormat,
                        s = /a/i.test(a) && this._stepLabel === Un && e % Un == 0 ? a.replace(/.[m]+/i, "") : a,
                        i = new Date(+An + e),
                        r = pa(n, i.getFullYear(), i.getMonth(), i.getDate(), i.getHours(), i.getMinutes());
                    return jn(r) && t && r.setTimezone(t), ya(s, r, n);
                }),
                (t.prototype._getEventPos = function (e, t, n, a) {
                    var s = this.s,
                        i = e.allDay ? ie : s,
                        r = pa(i, t.getFullYear(), t.getMonth(), t.getDate()),
                        o = aa(Da(r, 1)),
                        l = i ? this._firstDayTz : this._firstDay,
                        c = i ? this._lastDayTz : this._lastDay,
                        d = this._isTimeline,
                        h = !d && !this._groupByResource,
                        u = e.allDay,
                        m = this._startTime,
                        _ = this._endTime + 1,
                        p = this._time,
                        v = this._hasSlots,
                        f = this._isDailyResolution,
                        g = s.eventList,
                        y = this._dayIndexMap[n],
                        b = e.start,
                        x = e.end,
                        T = Go(e, s, g, d, f, l, this._cols, this._colIndexMap),
                        D = qo(e, s, g, d, f, c, this._cols, this._colIndexMap),
                        C = +T == +D ? 1 : 0;
                    if (u || d) {
                        if (!a.get(e.original) || v || h) {
                            var S = s.startDay,
                                w = s.endDay,
                                k = u || g,
                                M = !la(T, D),
                                E = this._daysNr;
                            d && M && Zn(T) >= _ && (T = pa(s, +aa(T) + _));
                            var N = Qo(T, m, p, l, S, w),
                                I = (function (e, t, n, a, s, i, r, o, l, c) {
                                    var d = e,
                                        h = t;
                                    d < a && (d = a), h > s && (h = s);
                                    var u = Zn(d),
                                        m = Zn(h);
                                    i > u && (u = i), r < m && (m = r), la(d, h) || (u > r && (u = r), m < i && (m = i));
                                    var _ = 0;
                                    if (la(d, h)) _ = c ? n : m - u;
                                    else for (var p = aa(d); p <= h; p.setDate(p.getDate() + 1)) Sa(p.getDay(), o, l) && (!c && la(p, d) ? (_ += n - u + i) : !c && la(p, h) ? (_ += m - i) : (_ += n));
                                    return (100 * _) / n;
                                })(T, D, p, l, c, m, _, S, w, k);
                            if (d) {
                                var L = 0;
                                if ((g && !f && (y = this._dayIndexMap[na(T)]), "month" === s.resolution)) {
                                    var H = this._days[y].dayDiff,
                                        Y = na(D >= c ? Da(c, -1) : D),
                                        O = this._dayIndexMap[Y];
                                    L = this._days[O].dayDiff - H;
                                }
                                (I = (I + 100 * L) / E), (N = (N + 100 * y) / E);
                            }
                            var P = d
                                    ? k
                                        ? { left: s.rtl ? "" : (v ? "" : (100 * y) / E) + "%", right: s.rtl ? (v ? "" : (100 * y) / E) + "%" : "", width: (v ? "" : I) + "%" }
                                        : { height: this._setRowHeight ? "" : "100%", left: s.rtl ? "" : N + "%", right: s.rtl ? N + "%" : "", top: "0", width: I + "%" }
                                    : { width: (M && !h ? I : 100) + "%" },
                                z = Zn(T) < _ && D > l,
                                V = Zn(D) + C > m;
                            if (k || (M && I > 0) || (z && V)) return a.set(e.original, !0), { end: x, endDate: D, position: P, start: b, startDate: T };
                        }
                    } else if ((T < r && ((b = ""), (T = pa(s, r))), D >= o && ((x = ""), (D = pa(s, +o - 1))), D >= o && (D = pa(s, +o - 1)), Zn(T) < _ && Zn(D) + C > m && D >= T)) {
                        var F = (function (e, t, n, a, s) {
                            var i = Zn(e),
                                r = Zn(t);
                            return a > i && (i = a), s < r && (r = s), (100 * (r - i)) / n;
                        })(T, D, p, m, _);
                        return { cssClass: F < 2 ? " mbsc-schedule-event-small-height" : "", end: x, endDate: D, position: { height: F + "%", top: Qo(T, m, p) + "%", width: "100%" }, start: b, startDate: T };
                    }
                }),
                (t.prototype._getEventData = function (e, t, n, a) {
                    var s = this.s,
                        i = vl(s, e, t, !0, n, !1, this._isTimeline, this._isDailyResolution, a);
                    return e.allDay && s.exclusiveEndDates && +i.endDate == +i.startDate && (i.endDate = aa(Da(i.startDate, 1))), i;
                }),
                (t.prototype._getEvents = function (e) {
                    var t = this,
                        n = this.s,
                        a = this._resources,
                        s = this._slots,
                        i = this._hasSlots,
                        r = this._isTimeline,
                        o = !r,
                        l = {},
                        c = el(e, a, s, !!n.resources, !!n.slots),
                        d = {},
                        h = this._firstDay,
                        u = this._lastDay,
                        m = {};
                    if (n.connections)
                        for (var _ = 0, p = n.connections; _ < p.length; _++) {
                            var v = p[_];
                            (m[v.from] = !0), (m[v.to] = !0);
                        }
                    for (
                        var f = function (a) {
                                var _ = a.id,
                                    p = new Map(),
                                    v = [],
                                    f = 0;
                                l[_] = {};
                                for (
                                    var y = function (s) {
                                            var y = s.id,
                                                b = c[_][y],
                                                x = Object.keys(b).sort();
                                            (l[_][y] = { all: { allDay: [], events: [] } }), o && (d[y] = Zs(n, b, h, u, -1, g._daysNr, !0, n.startDay, !1, n.eventOrder));
                                            for (
                                                var T = function (s) {
                                                        var c = e[s].date;
                                                        if (g._dayIndexMap[s] !== ie && Sa(c.getDay(), n.startDay, n.endDay)) {
                                                            var h = $s(b[s]) || [],
                                                                u = [],
                                                                x = {},
                                                                T = !i && r ? "all" : s,
                                                                D = 0;
                                                            (o || i) && (l[_][y][T] = { allDay: [], events: [] });
                                                            for (var C = 0, S = h; C < S.length; C++) {
                                                                var w = S[C];
                                                                if (!w.allDay || r) {
                                                                    var k = g._getEventData(w, c, a),
                                                                        M = g._getEventPos(k, c, s, p);
                                                                    M &&
                                                                        ((k.cssClass = M.cssClass),
                                                                        (k.position = M.position),
                                                                        o && ((k.showText = !0), Zo(n, u, k, x, n.eventList)),
                                                                        l[_][y][T].events.push(k),
                                                                        v.push(k),
                                                                        D++,
                                                                        (g._eventMap[k.id] = k));
                                                                }
                                                            }
                                                            if ((i && D > f && (f = D), o)) {
                                                                d[y][s] &&
                                                                    d[y][s].data.forEach(function (e) {
                                                                        var n = e.event,
                                                                            i = e.width;
                                                                        if (n) {
                                                                            var r = t._getEventData(n, c, a),
                                                                                o = t._getEventPos(r, c, s, p);
                                                                            (r.position = { width: o ? o.position.width : i }), (r.showText = !!o), l[_][y][T].allDay.push(r);
                                                                        }
                                                                    });
                                                                for (
                                                                    var E = function (e) {
                                                                            var t = e.length;
                                                                            e.forEach(function (e, a) {
                                                                                for (var s = 0, i = e; s < i.length; s++) {
                                                                                    var r = i[s],
                                                                                        o = (((x[r.uid] || t) - a) / t) * 100;
                                                                                    (r.position.width = o + "%"), (r.position[n.rtl ? "right" : "left"] = (100 * a) / t + "%"), (r.position[n.rtl ? "left" : "right"] = "auto");
                                                                                }
                                                                            });
                                                                        },
                                                                        N = 0,
                                                                        I = u;
                                                                    N < I.length;
                                                                    N++
                                                                ) {
                                                                    E(I[N]);
                                                                }
                                                            }
                                                        } else if (n.connections)
                                                            for (var L = 0, H = (h = b[s] || []); L < H.length; L++) {
                                                                var Y = H[L],
                                                                    O = Y.id;
                                                                !g._eventMap[O] && m[O] && (g._eventMap[O] = g._getEventData(Y, c, a));
                                                            }
                                                    },
                                                    D = 0,
                                                    C = x;
                                                D < C.length;
                                                D++
                                            ) {
                                                T(C[D]);
                                            }
                                        },
                                        b = 0,
                                        x = s;
                                    b < x.length;
                                    b++
                                ) {
                                    y(x[b]);
                                }
                                if (r && !i) {
                                    for (var T = [], D = {}, C = g._setRowHeight, S = 0, w = v; S < w.length; S++) {
                                        var k = w[S];
                                        Zo(n, T, k, D, n.eventList, r, g._isDailyResolution, h, g._firstDayTz, u, g._lastDayTz, g._cols, g._colIndexMap);
                                    }
                                    for (
                                        var M = function (e) {
                                                var t = e.length;
                                                C && t > f && (f = t),
                                                    e.forEach(function (e, n) {
                                                        for (var a = 0, s = e; a < s.length; a++) {
                                                            var i = s[a],
                                                                r = (((D[i.uid] || t) - n) / t) * 100;
                                                            (i.position.height = C ? "" : r + "%"), (i.position.top = C ? n : (100 * n) / t + "%");
                                                        }
                                                    });
                                            },
                                            E = 0,
                                            N = T;
                                        E < N.length;
                                        E++
                                    ) {
                                        M(N[E]);
                                    }
                                }
                                g._eventRows[_] = f || 1;
                            },
                            g = this,
                            y = 0,
                            b = a;
                        y < b.length;
                        y++
                    ) {
                        f(b[y]);
                    }
                    return l;
                }),
                (t.prototype._getInvalids = function (e) {
                    for (
                        var t,
                            n = this.s,
                            a = n.eventList,
                            s = {},
                            i = el(e, this._resources, this._slots, !!n.resources, !!n.slots),
                            r = Object.keys(e || {}).sort(),
                            o = a ? aa(new Date(n.minDate)) : new Date(n.minDate),
                            l = a ? aa(Da(new Date(n.maxDate), 1)) : new Date(n.maxDate),
                            c = this._isTimeline,
                            d = 0,
                            h = this._resources;
                        d < h.length;
                        d++
                    ) {
                        var u = h[d],
                            m = u.id,
                            _ = new Map();
                        s[m] = {};
                        for (var p = 0, v = this._slots; p < v.length; p++) {
                            var f = v[p].id,
                                g = { invalids: [] };
                            s[m][f] = { all: g };
                            for (var y = 0, b = r; y < b.length; y++) {
                                var x = b[y],
                                    T = va(x);
                                if (this._dayIndexMap[x] !== ie && Sa(T.getDay(), n.startDay, n.endDay)) {
                                    var D = i[m][f][x] || [],
                                        C = { invalids: [] },
                                        S = [];
                                    (s[m][f][x] = C), T < o && D.push({ end: o, start: new Date(T) }), T >= aa(l) && D.push({ end: new Date(this._lastDay), start: l });
                                    for (var w = 0, k = D; w < k.length; w++) {
                                        var M = k[w];
                                        if (me(M) || ha(M)) {
                                            var E = va(M);
                                            M = { allDay: !0, end: new Date(E), start: E };
                                        }
                                        var N = this._getEventData(M, T, u, !0);
                                        (N.cssClass = M.cssClass ? " " + M.cssClass : ""), (N.position = ie);
                                        var I = this._getEventPos(N, T, x, _);
                                        if (
                                            (I &&
                                                (!c && 0 === Zn(I.startDate) && new Date(+I.endDate + 1) >= Da(T, 1)
                                                    ? (N.allDay = !0)
                                                    : ((N.position = I.position),
                                                      Zn(I.startDate) <= this._startTime && (N.cssClass += " mbsc-schedule-invalid-start"),
                                                      Zn(I.endDate) >= this._endTime && (N.cssClass += " mbsc-schedule-invalid-end")),
                                                S.push(N)),
                                            C.invalids.push(N),
                                            N.allDay)
                                        ) {
                                            c || (N.position = {}), (C.allDay = N), (C.invalids = [N]), (S = [N]);
                                            break;
                                        }
                                    }
                                    (t = g.invalids).push.apply(t, S);
                                }
                            }
                        }
                    }
                    return s;
                }),
                (t.prototype._getColors = function (e) {
                    for (var t = this.s, n = {}, a = el(e, this._resources, this._slots, !!t.resources, !!t.slots), s = Object.keys(e || {}).sort(), i = this._hasSlots, r = this._isTimeline, o = 0, l = this._resources; o < l.length; o++) {
                        var c = l[o],
                            d = c.id,
                            h = new Map();
                        n[d] = {};
                        for (var u = 0, m = this._slots; u < m.length; u++) {
                            var _ = m[u].id;
                            n[d][_] = { all: { colors: [] } };
                            for (var p = 0, v = s; p < v.length; p++) {
                                var f = v[p],
                                    g = va(f);
                                if (this._dayIndexMap[f] !== ie && Sa(g.getDay(), t.startDay, t.endDay)) {
                                    var y = a[d][_][f] || [],
                                        b = !i && r ? "all" : f;
                                    (r && !i) || (n[d][_][b] = { colors: [] });
                                    for (var x = n[d][_][b], T = 0, D = y; T < D.length; T++) {
                                        var C = D[T],
                                            S = this._getEventData(C, g, c, !0);
                                        if (((S.cssClass = C.cssClass ? " " + C.cssClass : ""), S.allDay && !r)) x.allDay = S;
                                        else {
                                            var w = this._getEventPos(S, g, f, h);
                                            w &&
                                                ((S.position = w.position),
                                                Zn(w.startDate) <= this._startTime && (S.cssClass += " mbsc-schedule-color-start"),
                                                Zn(w.endDate) >= this._endTime && (S.cssClass += " mbsc-schedule-color-end"),
                                                x.colors.push(S));
                                        }
                                        (S.position.background = C.background), (S.position.color = C.textColor ? C.textColor : Ut(C.background));
                                    }
                                }
                            }
                        }
                    }
                    return n;
                }),
                (t.prototype._flattenResources = function (e, t, n, a) {
                    for (var s = 0, i = e && e.length ? e : [{ id: Jo }]; s < i.length; s++) {
                        var r = i[s];
                        (r.depth = n), (r.isParent = !(!r.children || !r.children.length)), t.push(r), r.isParent && ((this._hasHierarchy = !0), (r.collapsed && !a) || this._flattenResources(r.children, t, n + 1, a));
                    }
                    return t;
                }),
                (t.prototype._render = function (e, t) {
                    var n = this,
                        a = this._prevS,
                        s = this._isTimeline,
                        i = new Date(e.selected),
                        r = +e.size,
                        o = $o(e.timeLabelStep),
                        l = $o(e.timeCellStep),
                        c = e.firstDay,
                        d = e.startDay,
                        h = e.endDay,
                        u = e.resources,
                        _ = e.slots,
                        p = e.groupBy !== a.groupBy || u !== a.resources,
                        v = !1 === e.virtualScroll,
                        f = e.resolution,
                        g = "day" === f || "hour" === f || !s,
                        y = e.rtl !== a.rtl || p,
                        b = this._startTime,
                        x = this._endTime;
                    if (e.startTime !== a.startTime || e.endTime !== a.endTime || e.timeLabelStep !== a.timeLabelStep || e.timeCellStep !== a.timeCellStep || e.timeFormat !== a.timeFormat || this._startTime === ie || this._endTime === ie) {
                        var T = va(e.startTime || "00:00"),
                            D = new Date(+va(e.endTime || "00:00") - 1);
                        (this._startTime = b = Zn(T)), (this._endTime = x = Zn(D)), (this._time = x - b + 1), (this._timesBetween = ge(Ce(l / o) - 1)), (this._times = []), (this._timeLabels = {});
                        for (
                            var C = l * Wn,
                                S = Ce(b / C) * C,
                                w = function (e) {
                                    if ((k._times.push(e), s)) {
                                        var t = e === S;
                                        (k._timeLabels[e] = t || e % (o * Wn) == 0 ? k._formatTime(t ? b : e) : ""),
                                            k._timesBetween.forEach(function (t, a) {
                                                var s = e + (a + 1) * o * Wn;
                                                n._timeLabels[s] = n._formatTime(s);
                                            });
                                    }
                                },
                                k = this,
                                M = S;
                            M <= x;
                            M += C
                        )
                            w(M);
                        y = !0;
                    }
                    if (
                        p ||
                        d !== a.startDay ||
                        h !== a.endDay ||
                        _ !== a.slots ||
                        e.dayNames !== a.dayNames ||
                        e.eventList !== a.eventList ||
                        e.getDay !== a.getDay ||
                        e.refDate !== a.refDate ||
                        e.rowHeight !== a.rowHeight ||
                        e.selected !== a.selected ||
                        e.size !== a.size ||
                        e.showDays !== a.showDays ||
                        e.type !== a.type ||
                        e.weekNumbers !== a.weekNumbers ||
                        e.displayTimezone !== a.displayTimezone ||
                        e.resolution !== a.resolution
                    ) {
                        var E = _a(pa(e)),
                            N = "day" === e.type,
                            I = "month" === e.type,
                            L = "year" === e.type,
                            H = e.navigationService,
                            Y = e.dateFormat.search(/m/i),
                            O = e.dateFormat.search(/y/i) < Y,
                            P = e.dateFormat.search(/d/i) < Y,
                            z = void 0,
                            V = void 0,
                            F = void 0,
                            R = void 0;
                        if (r > 1 || L || I) (F = z = H.firstDay), (R = V = H.lastDay);
                        else (F = Da(oa(i, e), d - c + (d < c ? 7 : 0))), N && (i < F && (F = Da(F, -7)), i >= Da(F, 7) && (F = Da(F, 7))), (R = Da(F, h - d + 1 + (h < d ? 7 : 0))), (z = N ? aa(i) : F), (V = N ? Da(z, 1) : R);
                        s && "week" === f && (L || I) && ((z = H.viewStart), (V = H.viewEnd)),
                            (this._isMulti = r > 1 || L),
                            (this._hasHierarchy = !1),
                            (this._resources = this._flattenResources(u, [], 0, !0)),
                            (this._visibleResources = this._flattenResources(u, [], 0)),
                            (this._hasSlots = s && !!_ && _.length > 0),
                            (this._slots = _ && _.length ? _ : [{ id: Jo }]),
                            (this._isSingleResource = 1 === this._resources.length),
                            (this._groupByResource = ("date" !== e.groupBy && !(N && r < 2)) || this._isSingleResource),
                            (this._isDailyResolution = g),
                            (this._firstDay = z),
                            (this._lastDay = V),
                            (this._firstDayTz = pa(e, z.getFullYear(), z.getMonth(), z.getDate())),
                            (this._lastDayTz = pa(e, V.getFullYear(), V.getMonth(), V.getDate())),
                            (this._selectedDay = +aa(i)),
                            (this._setRowHeight = e.eventList || "equal" !== e.rowHeight),
                            (this._shouldAnimateScroll = a.selected !== ie),
                            (this._showTimeIndicator = (!s || (s && !I && !L && g)) && !e.eventList && (N && r < 2 ? la(E, i) : z <= E && V >= E)),
                            (this._colIndexMap = {}),
                            (this._cols = []),
                            (this._dayIndexMap = {}),
                            (this._days = []),
                            (this._headerDays = []);
                        var A = 0,
                            W = -1,
                            U = 0,
                            B = 0,
                            j = -1,
                            K = "",
                            J = -1,
                            X = -1,
                            G = "",
                            q = -1,
                            Z = -1,
                            $ = "",
                            Q = z,
                            ee = V,
                            te = N && r < 2;
                        !s && te && ((Q = F), (ee = R));
                        for (M = aa(Q); M < aa(ee); M.setDate(M.getDate() + 1)) {
                            var ne = na(M);
                            if (((this._dayIndexMap[ne] = A), Sa(M.getDay(), d, h))) {
                                var ae = e.getDay(M) === B,
                                    se = "",
                                    re = "",
                                    oe = g;
                                if (s) {
                                    var le = e.getWeekNumber(Da(M, (7 - c + 1) % 7)),
                                        de = e.getMonth(M),
                                        he = e.getYear(M),
                                        ue = e.monthNames[de];
                                    if (
                                        (j !== he && ((j = he), "year" === f && ((oe = !0), (K = "" + j))),
                                        J !== de &&
                                            ("month" === f ? ((K = L && r < 2 ? ue : O ? he + " " + ue : ue + " " + he), (oe = !0)) : g && (se = G = O ? he + " " + ue : ue + " " + he), (X = A), (J = de), (B = e.getMaxDayOfMonth(j, J))),
                                        q !== le && ((Z = A), (q = le), (re = $ = e.weekText.replace(/{count}/, q)), A > 0 && (this._days[A - 1].lastOfWeek = !0)),
                                        M.getDay() === d && "week" === f)
                                    ) {
                                        var me = P ? "D MMM" : "MMM D",
                                            _e = Da(M, h - d + (h < d ? 7 : 0));
                                        (K = ya(me, M, e) + " - " + ya(me, _e, e)), (oe = !0);
                                    }
                                    ae && "month" === f && (U += 31 - B);
                                }
                                var pe = {
                                    columnTitle: K,
                                    date: new Date(M),
                                    dateIndex: A,
                                    dateKey: ne,
                                    dateText: ya(I || this._isMulti ? "D DDD" : e.dateFormatLong, M, e),
                                    day: e.getDay(M),
                                    dayDiff: U,
                                    label: ya("DDDD, MMMM D, YYYY", M, e),
                                    lastOfMonth: ae,
                                    monthIndex: X,
                                    monthText: G,
                                    monthTitle: se,
                                    timestamp: +aa(M),
                                    weekIndex: Z,
                                    weekText: $,
                                    weekTitle: re,
                                };
                                if ((oe && (this._cols.push(pe), W++), te && this._headerDays.push(pe), (te && this._selectedDay !== +M) || this._days.push(pe), ae && "month" === f)) for (var ve = B; ve < 31; ve++) this._days.push(pe), A++;
                                A++;
                            }
                            this._colIndexMap[ne] = W;
                        }
                        (this._colsNr = W + 1), (this._daysNr = te ? 1 : A), (y = !0);
                    }
                    (e.colorsMap !== a.colorsMap || y) && (this._colors = this._getColors(e.colorsMap)),
                        (e.eventMap === a.eventMap && !y && this._events) || ((this._eventMap = {}), (this._eventRows = {}), (this._events = this._getEvents(e.eventMap))),
                        (e.invalidsMap !== a.invalidsMap || y) && (this._invalids = this._getInvalids(e.invalidsMap));
                    var fe = s && e.eventMap !== a.eventMap;
                    if (
                        ((e.height !== a.height || e.width !== a.width || fe || y) && (this._shouldCheckSize = m && !!e.height && !!e.width),
                        e.scroll !== a.scroll && (this._shouldScroll = !0),
                        e.height !== ie && ((this._hasSideSticky = Yt && !e.rtl), (this._hasSticky = Yt)),
                        (this._stepCell = l * Wn),
                        (this._stepLabel = o * Wn),
                        (this._dayNames = t.dayNameWidth > 49 ? e.dayNamesShort : e.dayNamesMin),
                        (this._displayTime = o < 1440 && g),
                        (this._eventHeight = t.eventHeight || (e.eventList ? 24 : 46)),
                        (this._showCursorTime = this._displayTime && !!(e.dragToCreate || e.dragToMove || e.dragToResize)),
                        s)
                    ) {
                        var ye = this._colsNr,
                            be = [],
                            xe = this._daysBatchNr === ie ? ce(Ce(this._stepCell / (this._time / 30)), 1, 30) : this._daysBatchNr,
                            De = this._dayIndexMap[na(i)] || 0,
                            Se = t.batchIndexX !== ie ? t.batchIndexX : Te(De / xe),
                            we = Math.min(Se * xe, ye - 1),
                            ke = v ? 0 : Math.max(0, we - Ce((3 * xe) / 2)),
                            Me = v ? ye : Math.min(ke + 3 * xe, ye),
                            Ee = this._cols[ke].date,
                            Ne = Me < ye ? this._cols[Me].date : this._lastDay;
                        for (A = ke; A < Me; A++) be.push(this._cols[A]);
                        (this._batchStart = pa(e, Ee.getFullYear(), Ee.getMonth(), Ee.getDate())),
                            (this._batchEnd = pa(e, Ne.getFullYear(), Ne.getMonth(), Ne.getDate())),
                            (this._daysBatch = be),
                            (this._daysBatchNr = xe),
                            (this._placeholderSizeX = t.dayWidth * Te(Math.max(0, we - (3 * xe) / 2)) || 0);
                        var Ie = (t.scrollContHeight || 0) - (t.headerHeight || 0),
                            Le = t.rowHeight || 52,
                            He = [],
                            Ye = t.batchIndexY || 0,
                            Oe = this._visibleResources,
                            Pe = [],
                            ze = -1,
                            Ve = 0;
                        Ie &&
                            (t.hasScrollY && (this._resourceTops = {}),
                            Oe.forEach(function (e, a) {
                                var s = n._setRowHeight ? Math.max(n._eventRows[e.id] * n._eventHeight + 16, 52) : Le,
                                    i = Ce(Ve / Ie);
                                t.hasScrollY && (n._resourceTops[e.id] = Ve), i !== ze && (Pe.push({ startIndex: a, top: Ve }), (ze = i)), (Ve += s);
                            }));
                        var Fe = Pe[Ye - 1],
                            Re = Pe[Ye + 2],
                            Ae = Fe ? Fe.startIndex : 0,
                            We = Re ? Re.startIndex : Ve ? Oe.length : 30;
                        (v || (Ve && !t.hasScrollY)) && ((Ae = 0), (We = Oe.length));
                        for (A = Ae; A < We; A++) {
                            var Ue = Oe[A];
                            Ue && He.push(Ue);
                        }
                        (this._gridHeight = Ve), (this._virtualPagesY = Pe), (this._resourcesBatch = He), (this._placeholderSizeY = Fe && !v ? Fe.top : 0);
                    }
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n,
                        a = this;
                    (this._unlisten = Ss(this._el, {
                        onDoubleClick: function (e) {
                            var t = a.s;
                            n && t.clickToCreate && "single" !== t.clickToCreate && ((e.click = !0), a._onEventDragStart(e), a._onEventDragEnd(e));
                        },
                        onEnd: function (n) {
                            !e && t && "single" === a.s.clickToCreate && ((e = !0), (n.click = !0), a._onEventDragStart(n)), e && (n.domEvent.preventDefault(), a._onEventDragEnd(n)), clearTimeout(a._touchTimer), (e = !1), (t = !1);
                        },
                        onMove: function (n) {
                            var s = a.s;
                            e && s.dragToCreate
                                ? (n.domEvent.preventDefault(), a._onEventDragMove(n))
                                : t && s.dragToCreate && (Math.abs(n.deltaX) > 7 || Math.abs(n.deltaY) > 7)
                                ? ((e = !0), a._onEventDragStart(n))
                                : clearTimeout(a._touchTimer);
                        },
                        onStart: function (s) {
                            var i = a.s;
                            if (((s.create = !0), (s.click = !1), (a._isTouch = s.isTouch), !e && (i.dragToCreate || i.clickToCreate))) {
                                var r = (s.domEvent.target && s.domEvent.target.classList) || [];
                                (n = r.contains("mbsc-schedule-item") || r.contains("mbsc-schedule-all-day-item") || r.contains("mbsc-timeline-column")) &&
                                    (s.isTouch && i.dragToCreate
                                        ? (a._touchTimer = setTimeout(function () {
                                              a._onEventDragStart(s), a._onEventDragModeOn(s), (e = !0);
                                          }, 350))
                                        : (t = !s.isTouch));
                            }
                        },
                    })),
                        (this._unsubscribe = dl(this._onExternalDrag));
                }),
                (t.prototype._updated = function () {
                    var e = this,
                        t = this.s,
                        n = this.state;
                    this._shouldCheckSize &&
                        Me(this, function () {
                            var a,
                                s,
                                i,
                                r,
                                o,
                                l,
                                c = e._resCont,
                                d = c ? c.offsetWidth : 0,
                                h = e._headerCont,
                                u = h.offsetHeight,
                                m = e._scrollCont,
                                _ = m.offsetWidth,
                                p = m.offsetHeight,
                                v = m.clientWidth,
                                f = m.clientHeight,
                                g = _ - v,
                                y = p - f,
                                b = _ - d,
                                x = p - u,
                                T = m.scrollHeight > f,
                                D = m.scrollWidth > v,
                                C = n.eventHeight;
                            if (e._isTimeline) {
                                var S = m.querySelector(".mbsc-timeline-day"),
                                    w = m.querySelector(".mbsc-timeline-row"),
                                    k = e._colsNr;
                                if (
                                    ((i = S ? S.offsetWidth : 64),
                                    (l = w ? w.offsetHeight : 52),
                                    i * k < b && (D = !1),
                                    e._gridHeight && e._gridHeight < x && (T = !1),
                                    (i = D ? i : Te(b / k)),
                                    (o = D ? i * k : b),
                                    (s = (e._stepCell * i) / e._time),
                                    (e._gridWidth = o),
                                    (e._daysBatchNr = Math.max(1, Math.ceil(b / i))),
                                    e._hasSticky || (h.style[t.rtl ? "left" : "right"] = g + "px"),
                                    !e._hasSideSticky && c && (c.style.bottom = y + "px"),
                                    e._setRowHeight)
                                ) {
                                    var M = m.querySelector(".mbsc-schedule-event");
                                    M && (C = M.clientHeight);
                                }
                                if (!T) {
                                    e._resourceTops = {};
                                    var E = e._gridCont,
                                        N = E.getBoundingClientRect();
                                    E.querySelectorAll(".mbsc-timeline-row").forEach(function (t, n) {
                                        e._resourceTops[e._visibleResources[n].id] = t.getBoundingClientRect().top - N.top;
                                    });
                                }
                            } else {
                                e._calcGridSizes();
                                var I = e._el.querySelector(".mbsc-schedule-column-inner"),
                                    L = e._el.querySelector(".mbsc-schedule-header-item");
                                (a = I ? (e._stepCell * I.offsetHeight) / e._time : 0), (r = L ? L.offsetWidth : 0);
                            }
                            e._onScroll(),
                                (e._calcConnections = !!t.connections && (e._isParentClick || e._calcConnections || !T)),
                                (e._shouldCheckSize = !1),
                                (e._isCursorTimeVisible = !1),
                                (e._isTouch = !1),
                                e.setState({
                                    cellHeight: a,
                                    cellWidth: s,
                                    dayNameWidth: r,
                                    dayWidth: i,
                                    eventHeight: C,
                                    gridWidth: o,
                                    hasScrollX: D,
                                    hasScrollY: T,
                                    headerHeight: u,
                                    rowHeight: l,
                                    scrollContHeight: D ? f : p,
                                    update: e._calcConnections ? (n.update || 0) + 1 : n.update,
                                });
                        }),
                        !this._shouldScroll ||
                            (!n.dayWidth && this._isTimeline) ||
                            (Me(this, function () {
                                e._scrollToTime(e._shouldAnimateScroll);
                            }),
                            (this._shouldScroll = !1));
                }),
                (t.prototype._destroy = function () {
                    this._unlisten(), hl(this._unsubscribe);
                }),
                (t.prototype._calcGridSizes = function () {
                    var e = this.s,
                        t = this._resources,
                        n = this._isTimeline,
                        a = this._daysNr * (n ? 1 : t.length),
                        s = this._gridCont,
                        i = this._scrollCont,
                        r = s.getBoundingClientRect(),
                        o = i.getBoundingClientRect(),
                        l = n ? r.width : s.scrollWidth;
                    (this._gridLeft = e.rtl ? r.right - l : r.left),
                        (this._gridRight = e.rtl ? r.right : r.left + l),
                        (this._gridTop = r.top),
                        (this._gridContTop = o.top),
                        (this._gridContBottom = o.bottom),
                        (this._gridContLeft = o.left),
                        (this._gridContRight = o.right),
                        (this._allDayTop = this._gridContTop),
                        (this._colWidth = l / (e.eventList ? this._colsNr : a)),
                        (this._colHeight = r.height),
                        (this._resWidth = this._resCont ? this._resCont.offsetWidth : 0);
                }),
                (t.prototype._getDragDates = function (e, t, n) {
                    var a = this.s,
                        i = {},
                        r = new Map(),
                        o = e.allDay ? this._firstDay : this._firstDayTz,
                        l = e.startDate,
                        c = e.endDate;
                    for (l = (l = aa(l)) < o ? o : l, c = ta(a, e.allDay || a.eventList, l, c); l <= c; ) {
                        var d = s({}, e),
                            h = na(l),
                            u = Sa(l.getDay(), a.startDay, a.endDay) && this._getEventPos(e, l, h, r);
                        if (u) {
                            var m = d.resource;
                            this._isTimeline && -1 !== (de(m) ? m : [m]).indexOf(this._tempResource) && (u.position.top = d.position.top);
                            var _ = this._isTimeline && !this._hasSlots ? "all" : h;
                            (d.date = +aa(l, !0)), (d.cssClass = u.cssClass), (d.start = u.start), (d.end = u.end), (d.position = u.position), (i[t + "__" + (this._isTimeline ? n + "__" : "") + _] = d);
                        }
                        l = Da(l, 1);
                    }
                    return i;
                }),
                (t.prototype._getGridTime = function (e, t, n, a, s) {
                    var i = De(this._isTimeline ? Ce((this._time * (t - a * this._colWidth)) / this._colWidth) : Ce((this._time * (n - 8)) / (this._colHeight - 16)), s * Wn),
                        r = new Date(+An + this._startTime + i);
                    return pa(this.s, e.getFullYear(), e.getMonth(), e.getDate(), r.getHours(), r.getMinutes());
                }),
                (t.prototype._scrollToTime = function (e) {
                    var t = this._scrollCont,
                        n = this._gridCont,
                        a = this._isTimeline;
                    if (t) {
                        var s = this.s,
                            i = s.navigateToEvent,
                            r = i && i.start ? wa(new Date(+va(i.start, s) - this._stepCell), s.timeCellStep) : new Date(s.selected);
                        r.setHours(s.eventList ? 0 : r.getHours(), 0);
                        var o = Qo(r, this._startTime, this._time * (a ? this._daysNr : 1)),
                            l = ra(this._firstDay, r, s.startDay, s.endDay),
                            c = ((a ? n.offsetWidth : n.scrollWidth) * ((100 * l) / this._daysNr + (a ? o : 0))) / 100,
                            d = void 0;
                        if (i) {
                            var h = i.resource,
                                u = de(h) ? h[0] : h;
                            if (u)
                                if (a) d = this._resourceTops[u];
                                else {
                                    var m = this._colWidth,
                                        _ = this._visibleResources,
                                        p =
                                            Ne(_, function (e) {
                                                return e.id === u;
                                            }) || 0;
                                    c = this._groupByResource && !this._isSingleResource ? this._daysNr * m * p + m * l : _.length * l * m + p * m;
                                }
                        }
                        if (!a) {
                            var v = t.querySelector(".mbsc-schedule-column-inner");
                            (d = v ? (v.offsetHeight * o) / 100 : 0), !this._groupByResource || this._isSingleResource || i || (c = ie);
                        }
                        jt(t, c, d, e, s.rtl);
                    }
                }),
                t
            );
        })(Ua),
        bl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onScroll = function () {
                        var e = t._scrollCont;
                        if (e) {
                            var n = e.scrollTop,
                                a = "translateX(" + -e.scrollLeft + "px)",
                                s = t._timeCont,
                                i = t._allDayCont,
                                r = t._headerCont,
                                o = (It ? It + "T" : "t") + "ransform";
                            i && (i.style[o] = a), s && (s.style.marginTop = -n + "px"), r && (r.style[o] = a), 0 === n ? t.setState({ showShadow: !1 }) : t.state.showShadow || t.setState({ showShadow: !0 }), t._onMouseMove();
                        }
                    }),
                    (t._setCont = function (e) {
                        t._scrollCont = e;
                    }),
                    (t._setTimeCont = function (e) {
                        t._timeCont = e;
                    }),
                    (t._setAllDayCont = function (e) {
                        t._allDayCont = e;
                    }),
                    (t._setGridCont = function (e) {
                        t._gridCont = e;
                    }),
                    (t._setHeaderCont = function (e) {
                        t._headerCont = e;
                    }),
                    (t._setCursorTimeCont = function (e) {
                        t._cursorTimeCont = e;
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._render = function (t, n) {
                    e.prototype._render.call(this, t, n);
                    var a = this._prevS,
                        s = t.timezones,
                        i = this._stepCell / Wn,
                        r = Ce(this._startTime / Wn) % i,
                        o = (Ce(this._endTime / Wn) % i) + 1;
                    if (s !== a.timezones && ((this._timeWidth = s ? { width: 4.25 * s.length + "em" } : ie), (this._timezones = ie), s)) {
                        for (var l = [], c = 0, d = s; c < d.length; c++) {
                            var h = d[c],
                                u = void 0;
                            if (me(h)) {
                                var m = pa(t, 1970, 0, 1);
                                jn(m) && m.setTimezone(h);
                                var _ = (m.getTimezoneOffset() / 60) * -1;
                                u = { label: "UTC" + (_ > 0 ? "+" : "") + _, timezone: h };
                            } else u = h;
                            l.push(u);
                        }
                        this._timezones = l;
                    }
                    (this._largeDayNames = n.dayNameWidth > 99),
                        (this._startCellStyle = r % i != 0 ? { height: (n.cellHeight || 50) * (((i - r) % i) / i) + "px" } : ie),
                        (this._endCellStyle = o % i != 0 ? { height: ((n.cellHeight || 50) * (o % i)) / i + "px" } : ie);
                }),
                t
            );
        })(yl);
    var xl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e, t) {
                    return (function (e, t, n) {
                        var a = n._colors,
                            i = t.dragData,
                            r = i && i.draggedEvent && i.draggedEvent.id,
                            o = n._events,
                            l = n._invalids,
                            c = n._hb,
                            d = n._rtl,
                            h = n._times,
                            u = n._startTime,
                            m = n._endTime,
                            _ = n._startCellStyle,
                            p = n._endCellStyle,
                            v = n._stepLabel,
                            f = n._theme,
                            g = n._isSingleResource,
                            y = e.eventMap || {},
                            b = "schedule",
                            x = " mbsc-flex-1-0 mbsc-schedule-resource-group" + f + d,
                            T = n._timezones,
                            D = n._groupByResource,
                            C = n._days,
                            S = n._resources,
                            w = { dayNames: n._dayNames, largeNames: n._largeDayNames, onClick: e.onWeekDayClick, renderDay: e.renderDay, renderDayContent: e.renderDayContent, rtl: e.rtl, theme: e.theme },
                            k = function (t) {
                                var a,
                                    s = t.name;
                                return (
                                    e.renderResource && me((s = e.renderResource(t))) && ((a = n._safeHtml(s)), (n._shouldEnhance = !0)),
                                    s &&
                                        Hn(
                                            "div",
                                            { key: t.id, className: "mbsc-schedule-resource" + f + d + c + (!D || ("day" === e.type && 1 === e.size) ? " mbsc-flex-1-0 mbsc-schedule-col-width" : "") },
                                            Hn("div", { dangerouslySetInnerHTML: a, className: "mbsc-schedule-resource-title" }, s)
                                        )
                                );
                            },
                            M = function (t, a, o, l) {
                                var c = o + "__" + a,
                                    d = {
                                        displayTimezone: e.displayTimezone,
                                        drag: e.dragToMove,
                                        endDay: e.endDay,
                                        exclusiveEndDates: e.exclusiveEndDates,
                                        gridEndTime: m,
                                        gridStartTime: u,
                                        lastDay: +n._lastDay,
                                        render: e.renderEvent,
                                        renderContent: e.renderEventContent,
                                        resize: e.dragToResize,
                                        resource: o,
                                        rtl: e.rtl,
                                        singleDay: !D,
                                        slot: Jo,
                                        startDay: e.startDay,
                                        theme: e.theme,
                                        timezonePlugin: e.timezonePlugin,
                                    };
                                return Hn(
                                    rn,
                                    null,
                                    t.map(function (t) {
                                        return t.showText
                                            ? Hn(
                                                  sl,
                                                  s({}, d, {
                                                      event: t,
                                                      key: t.uid,
                                                      inactive: r === t.id,
                                                      selected: e.selectedEventsMap[t.uid] || e.selectedEventsMap[t.id],
                                                      onClick: e.onEventClick,
                                                      onDoubleClick: e.onEventDoubleClick,
                                                      onRightClick: e.onEventRightClick,
                                                      onDelete: e.onEventDelete,
                                                      onHoverIn: e.onEventHoverIn,
                                                      onHoverOut: e.onEventHoverOut,
                                                      onDragStart: n._onEventDragStart,
                                                      onDragMove: n._onEventDragMove,
                                                      onDragEnd: n._onEventDragEnd,
                                                      onDragModeOn: n._onEventDragModeOn,
                                                      onDragModeOff: n._onEventDragModeOff,
                                                  })
                                              )
                                            : Hn(
                                                  "div",
                                                  { key: t.uid, className: "mbsc-schedule-event mbsc-schedule-event-all-day mbsc-schedule-event-all-day-placeholder" },
                                                  Hn("div", { className: "mbsc-schedule-event-all-day-inner" + f })
                                              );
                                    }),
                                    i &&
                                        i.originDates &&
                                        i.originDates[c] &&
                                        !!i.originDates[c].allDay == !!l &&
                                        Hn(
                                            sl,
                                            s({}, d, {
                                                event: i.originDates[c],
                                                hidden: i && !!i.draggedDates,
                                                isDrag: !0,
                                                onDragStart: n._onEventDragStart,
                                                onDragMove: n._onEventDragMove,
                                                onDragEnd: n._onEventDragEnd,
                                                onDragModeOff: n._onEventDragModeOff,
                                            })
                                        ),
                                    i && i.draggedDates && i.draggedDates[c] && !!i.draggedDates[c].allDay == !!l && Hn(sl, s({}, d, { event: i.draggedDates[c], isDrag: !0 }))
                                );
                            },
                            E = function (e) {
                                return h.map(function (t, a) {
                                    var s = !a,
                                        i = a === h.length - 1;
                                    return Hn(
                                        "div",
                                        {
                                            key: a,
                                            className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-time-wrapper" + f + d + (i ? " mbsc-schedule-time-wrapper-end" : "") + ((s && _) || (i && p) ? " mbsc-flex-none" : ""),
                                            style: s ? _ : i ? p : {},
                                        },
                                        Hn("div", { className: "mbsc-flex-1-1 mbsc-schedule-time" + f + d }, s || t % v == 0 ? n._formatTime(s ? u : t, e) : ""),
                                        n._timesBetween.map(function (a, s) {
                                            var i = t + (s + 1) * v;
                                            return i > u && i < m && Hn("div", { key: s, className: "mbsc-flex-1-1 mbsc-schedule-time" + f + d }, n._formatTime(i, e));
                                        }),
                                        i && Hn("div", { className: "mbsc-schedule-time mbsc-schedule-time-end" + f + d }, n._formatTime(m + 1, e))
                                    );
                                });
                            },
                            N = function (e, t, n, s) {
                                var i = l[e][Jo][t] && l[e][Jo][t].allDay,
                                    r = a[e][Jo][t] && a[e][Jo][t].allDay,
                                    h = o[e][Jo][t] && o[e][Jo][t].allDay;
                                return Hn(
                                    "div",
                                    { key: n + "-" + s, className: "mbsc-schedule-all-day-item mbsc-schedule-col-width mbsc-flex-1-0" + f + d + c },
                                    M(h || [], t, e, !0),
                                    i && Hn("div", { className: "mbsc-schedule-invalid mbsc-schedule-invalid-all-day" + i.cssClass + f }, Hn("div", { className: "mbsc-schedule-invalid-text" }, i.title)),
                                    r && Hn("div", { className: "mbsc-schedule-color mbsc-schedule-color-all-day" + r.cssClass + f, style: r.position }, Hn("div", { className: "mbsc-schedule-color-text" }, r.title))
                                );
                            },
                            I = function (t, n, s, i) {
                                var r = l[t][Jo][n] && l[t][Jo][n].invalids,
                                    u = a[t][Jo][n] && a[t][Jo][n].colors,
                                    m = o[t][Jo][n] && o[t][Jo][n].events;
                                return Hn(
                                    "div",
                                    { key: s + "-" + i, className: "mbsc-flex-col mbsc-flex-1-0 mbsc-schedule-column mbsc-schedule-col-width" + f + d + c },
                                    Hn(
                                        "div",
                                        { className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-column-inner" + f + d + c },
                                        Hn("div", { className: "mbsc-schedule-events" + d }, M(m || [], n, t)),
                                        r &&
                                            r.map(function (e, t) {
                                                return (
                                                    e.position &&
                                                    Hn("div", { key: t, className: "mbsc-schedule-invalid" + e.cssClass + f, style: e.position }, Hn("div", { className: "mbsc-schedule-invalid-text" }, e.allDay ? "" : e.title || ""))
                                                );
                                            }),
                                        u &&
                                            u.map(function (e, t) {
                                                return Hn("div", { key: t, className: "mbsc-schedule-color" + e.cssClass + f, style: e.position }, Hn("div", { className: "mbsc-schedule-color-text" }, e.title));
                                            }),
                                        h.map(function (n, a) {
                                            var s = tl(i, n),
                                                r = !a,
                                                o = a === h.length - 1;
                                            return Hn("div", {
                                                key: a,
                                                className: "mbsc-schedule-item mbsc-flex-1-0" + f + c + (o ? " mbsc-schedule-item-last" : "") + ((r && _) || (o && p) ? " mbsc-flex-none" : ""),
                                                onClick: function (n) {
                                                    return e.onCellClick({ date: s, domEvent: n, resource: t, source: b });
                                                },
                                                onDoubleClick: function (n) {
                                                    return e.onCellDoubleClick({ date: s, domEvent: n, resource: t, source: b });
                                                },
                                                onContextMenu: function (n) {
                                                    return e.onCellRightClick({ date: s, domEvent: n, resource: t, source: b });
                                                },
                                                style: r ? _ : o ? p : {},
                                            });
                                        })
                                    )
                                );
                            };
                        return Hn(
                            "div",
                            { ref: n._setEl, className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-wrapper" + f + (n._daysNr > 7 ? " mbsc-schedule-wrapper-multi" : "") },
                            Hn(
                                "div",
                                { className: "mbsc-schedule-header mbsc-flex mbsc-flex-none" + f + c },
                                Hn("div", { className: "mbsc-schedule-time-col mbsc-schedule-time-col-empty" + f + d + c, style: n._timeWidth }),
                                Hn(
                                    "div",
                                    { className: "mbsc-flex-1-1 mbsc-schedule-header-wrapper" },
                                    Hn(
                                        "div",
                                        { ref: n._setHeaderCont, className: "mbsc-flex" },
                                        "day" === e.type && 1 === e.size
                                            ? Hn(
                                                  "div",
                                                  { className: x },
                                                  Hn(
                                                      "div",
                                                      { className: "mbsc-flex" },
                                                      e.showDays &&
                                                          n._headerDays.map(function (e) {
                                                              var t = e.timestamp;
                                                              return Hn(
                                                                  ll,
                                                                  s({}, w, {
                                                                      key: t,
                                                                      cssClass: "mbsc-flex-1-1",
                                                                      day: e.day,
                                                                      events: y[e.dateKey],
                                                                      isToday: n._isToday(t),
                                                                      label: e.label,
                                                                      selectable: !0,
                                                                      selected: n._selectedDay === t,
                                                                      timestamp: t,
                                                                  })
                                                              );
                                                          })
                                                  ),
                                                  e.resources && Hn("div", { className: "mbsc-flex" }, S.map(k))
                                              )
                                            : D
                                            ? S.map(function (t, a) {
                                                  return Hn(
                                                      "div",
                                                      { key: a, className: x },
                                                      k(t),
                                                      Hn(
                                                          "div",
                                                          { className: "mbsc-flex" },
                                                          e.showDays &&
                                                              C.map(function (e) {
                                                                  var a = e.timestamp;
                                                                  return Hn(
                                                                      ll,
                                                                      s({}, w, {
                                                                          key: a,
                                                                          cssClass: "mbsc-flex-1-0 mbsc-schedule-col-width",
                                                                          day: e.day,
                                                                          events: y[e.dateKey],
                                                                          isToday: g && n._isToday(a),
                                                                          label: e.label,
                                                                          resource: t.id,
                                                                          selectable: !1,
                                                                          selected: g && n._isToday(a),
                                                                          timestamp: a,
                                                                      })
                                                                  );
                                                              })
                                                      )
                                                  );
                                              })
                                            : C.map(function (t, a) {
                                                  var i = t.timestamp;
                                                  return Hn(
                                                      "div",
                                                      { key: a, className: x },
                                                      e.showDays && Hn(ll, s({}, w, { key: i, day: t.day, events: y[t.dateKey], isToday: g && n._isToday(i), label: t.label, selectable: !1, selected: n._isToday(i), timestamp: i })),
                                                      e.resources && Hn("div", { className: "mbsc-flex" }, S.map(k))
                                                  );
                                              })
                                    )
                                ),
                                Hn("div", { className: "mbsc-schedule-fake-scroll-y" })
                            ),
                            Hn(
                                "div",
                                { className: "mbsc-schedule-all-day-cont" + (t.showShadow ? " mbsc-schedule-all-day-wrapper-shadow" : "") + f },
                                T &&
                                    Hn(
                                        "div",
                                        { className: "mbsc-flex mbsc-schedule-timezone-labels", style: n._timeWidth },
                                        T.map(function (e, t) {
                                            return Hn("div", { key: t, className: "mbsc-flex-1-0-0 mbsc-schedule-timezone-label" + f + d }, e.label);
                                        })
                                    ),
                                e.showAllDay &&
                                    Hn(
                                        "div",
                                        { className: "mbsc-schedule-all-day-wrapper mbsc-flex-none" + f + c },
                                        Hn(
                                            "div",
                                            { className: "mbsc-flex mbsc-schedule-all-day" + f },
                                            Hn("div", { className: "mbsc-schedule-time-col" + f + d, style: n._timeWidth }, !T && Hn("div", { className: "mbsc-schedule-all-day-text" + f + d }, e.allDayText)),
                                            Hn(
                                                "div",
                                                { className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-all-day-group-wrapper" },
                                                Hn(
                                                    "div",
                                                    { ref: n._setAllDayCont, className: "mbsc-flex mbsc-flex-1-1" },
                                                    D
                                                        ? S.map(function (e, t) {
                                                              return Hn(
                                                                  "div",
                                                                  { key: t, className: "mbsc-flex" + x },
                                                                  C.map(function (t, n) {
                                                                      return N(e.id, t.dateKey, n, t.timestamp);
                                                                  })
                                                              );
                                                          })
                                                        : C.map(function (e, t) {
                                                              return Hn(
                                                                  "div",
                                                                  { key: t, className: "mbsc-flex" + x },
                                                                  S.map(function (t, n) {
                                                                      return N(t.id, e.dateKey, n, e.timestamp);
                                                                  })
                                                              );
                                                          })
                                                )
                                            )
                                        )
                                    )
                            ),
                            Hn(
                                "div",
                                { className: "mbsc-flex mbsc-flex-1-1 mbsc-schedule-grid-wrapper" + f },
                                Hn("div", { dangerouslySetInnerHTML: n.textParam }),
                                Hn(
                                    "div",
                                    { "aria-hidden": "true", className: "mbsc-flex-col mbsc-schedule-time-col mbsc-schedule-time-cont" + f + d, style: n._timeWidth, ref: n._setTimeCont },
                                    Hn(
                                        "div",
                                        { className: "mbsc-flex mbsc-schedule-time-cont-inner" },
                                        Hn(
                                            "div",
                                            { className: "mbsc-flex-col mbsc-flex-1-1" },
                                            Hn(
                                                "div",
                                                { className: "mbsc-flex-1-1 mbsc-schedule-time-cont-pos" + f + (T ? " mbsc-flex" : " mbsc-flex-col mbsc-schedule-time-col-last") },
                                                T
                                                    ? T.map(function (e, t) {
                                                          return Hn("div", { key: t, className: "mbsc-flex-col" + f + (t === T.length - 1 ? " mbsc-schedule-time-col-last" : "") }, E(e.timezone));
                                                      })
                                                    : E(),
                                                n._showTimeIndicator &&
                                                    Hn(rl, {
                                                        amText: e.amText,
                                                        displayedTime: n._time,
                                                        displayedDays: n._daysNr,
                                                        displayTimezone: e.displayTimezone,
                                                        endDay: e.endDay,
                                                        firstDay: n._firstDayTz,
                                                        orientation: "x",
                                                        pmText: e.pmText,
                                                        rtl: e.rtl,
                                                        showDayIndicator: g && !n._isMulti && "week" === e.type,
                                                        startDay: e.startDay,
                                                        startTime: u,
                                                        theme: e.theme,
                                                        timeFormat: e.timeFormat,
                                                        timezones: T,
                                                        timezonePlugin: e.timezonePlugin,
                                                    }),
                                                n._showCursorTime && Hn("div", { ref: n._setCursorTimeCont, className: "mbsc-schedule-cursor-time mbsc-schedule-cursor-time-x" + f + d })
                                            ),
                                            t.hasScrollX && Hn("div", { className: "mbsc-schedule-fake-scroll-x" })
                                        ),
                                        Hn("div", { className: "mbsc-schedule-fake-scroll-y" })
                                    )
                                ),
                                Hn(
                                    "div",
                                    { ref: n._setCont, className: "mbsc-flex-col mbsc-flex-1-1 mbsc-schedule-grid-scroll" + f, onScroll: n._onScroll },
                                    Hn(
                                        "div",
                                        { className: "mbsc-flex mbsc-flex-1-1" },
                                        Hn(
                                            "div",
                                            { className: "mbsc-flex mbsc-schedule-grid", ref: n._setGridCont, onMouseLeave: n._onMouseLeave, onMouseMove: n._onMouseMove },
                                            D
                                                ? S.map(function (e, t) {
                                                      return Hn(
                                                          "div",
                                                          { key: t, className: "mbsc-flex" + x },
                                                          C.map(function (t, n) {
                                                              return I(e.id, t.dateKey, n, t.timestamp);
                                                          })
                                                      );
                                                  })
                                                : C.map(function (e, t) {
                                                      return Hn(
                                                          "div",
                                                          { key: t, className: "mbsc-flex" + x },
                                                          S.map(function (t, n) {
                                                              return I(t.id, e.dateKey, n, e.timestamp);
                                                          })
                                                      );
                                                  })
                                        )
                                    )
                                )
                            ),
                            i && !t.isTouchDrag && Hn("div", { className: "mbsc-calendar-dragging" })
                        );
                    })(e, t, this);
                }),
                t
            );
        })(bl),
        Tl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._isTimeline = !0),
                    (t._onScroll = function () {
                        for (
                            var e = t.s,
                                n = e.rtl,
                                a = t.state,
                                s = t._gridWidth,
                                i = t._scrollCont,
                                r = i.scrollTop,
                                o = i.scrollLeft,
                                l = t._resCont,
                                c = t._headerCont,
                                d = t._stickyHeader,
                                h = t._cols.length,
                                u = n ? -1 : 1,
                                m = n ? "marginRight" : "marginLeft",
                                _ = Te((o * u * (h / t._daysBatchNr)) / s),
                                p = e.renderDay || e.dayTemplate,
                                v = 0,
                                f = t._virtualPagesY || [],
                                g = 0,
                                y = 0;
                            y < f.length && f[y].top - a.scrollContHeight / 2 <= r;

                        )
                            (g = y), y++;
                        if ((!l || (Yt && !n) || (l.scrollTop = r), d && Yt)) {
                            var b = d.style;
                            (b.marginTop = r < 0 ? -r + "px" : ""), (b[m] = o * u < 0 ? -o * u + "px" : "");
                        }
                        if (c && s && t._isDailyResolution) {
                            var x = t._days,
                                T = s / h;
                            v = ce(Ce((o * u) / T), 0, h - 1);
                            var D = function (e, t) {
                                if (e && T) {
                                    (!p || (p && "date" !== t)) && (e.textContent = x[v][t + "Text"]);
                                    var n = e.offsetWidth,
                                        a = e.style,
                                        s = ce(Ce((o * u + n) / T), 0, h - 1);
                                    x[v][t + "Index"] !== x[s][t + "Index"] ? (a[m] = -(o * u + n - x[s][t + "Index"] * T + 1) + "px") : (a[m] = "");
                                }
                            };
                            D(t._stickyDate, "date"), D(t._stickyMonth, "month"), D(t._stickyWeek, "week"), Yt || (c.scrollLeft = o);
                        }
                        s && (_ !== a.batchIndexX || g !== a.batchIndexY || (p && v !== a.dayIndex)) && t.setState({ batchIndexX: _, batchIndexY: g, dayIndex: v }), t._onMouseMove();
                    }),
                    (t._setStickyHeader = function (e) {
                        t._stickyHeader = e;
                    }),
                    (t._setStickyDay = function (e) {
                        t._stickyDate = e;
                    }),
                    (t._setStickyMonth = function (e) {
                        t._stickyMonth = e;
                    }),
                    (t._setStickyWeek = function (e) {
                        t._stickyWeek = e;
                    }),
                    (t._setCont = function (e) {
                        t._scrollCont = e;
                    }),
                    (t._setResCont = function (e) {
                        t._resCont = e;
                    }),
                    (t._setGridCont = function (e) {
                        t._gridCont = e;
                    }),
                    (t._setHeaderCont = function (e) {
                        t._headerCont = e;
                    }),
                    (t._setCursorTimeCont = function (e) {
                        t._cursorTimeCont = e;
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._onParentClick = function (e) {
                    (e.collapsed = !e.collapsed), (this._visibleResources = this._flattenResources(this.s.resources, [], 0)), (this._shouldCheckSize = !0), (this._isParentClick = !0), this.forceUpdate();
                }),
                (t.prototype._render = function (t, n) {
                    e.prototype._render.call(this, t, n);
                    var a = this._prevS,
                        s = this._eventMap,
                        i = this._resourceTops,
                        r = this._stepCell / Wn,
                        o = Ce(this._startTime / Wn) % r,
                        l = (Ce(this._endTime / Wn) % r) + 1;
                    if (
                        ((this._startCellStyle = this._displayTime && o % r != 0 ? { width: (n.cellWidth || 64) * (((r - o) % r) / r) + "px" } : ie),
                        (this._endCellStyle = this._displayTime && l % r != 0 ? { width: ((n.cellWidth || 64) * (l % r)) / r + "px" } : ie),
                        (t.connections === a.connections && t.eventMap === a.eventMap && t.theme === a.theme && t.rtl === a.rtl) || (this._calcConnections = !0),
                        this._hasSlots && (this._connections = ie),
                        this._calcConnections && !this._hasSlots && !this._shouldCheckSize && i)
                    ) {
                        for (
                            var c = [],
                                d = this._eventHeight,
                                h = this._gridWidth,
                                u = n.hasScrollY ? this._gridHeight : n.scrollContHeight - n.headerHeight,
                                m = 1500 / h,
                                _ = !0 === t.rtl,
                                p = _ ? -1 : 1,
                                v = (750 / h) * p,
                                f = (400 / u) * p,
                                g = (100 * d) / u,
                                y = 0,
                                b = t.connections || [];
                            y < b.length;
                            y++
                        ) {
                            var x = b[y],
                                T = s[x.from],
                                D = s[x.to],
                                C = x.arrow,
                                S = x.color,
                                w = x.cssClass || "",
                                k = x.from + "__" + x.to;
                            if (T && D) {
                                var M = T.position,
                                    E = D.position,
                                    N = M.width !== ie,
                                    I = E.width !== ie,
                                    L = T.resource,
                                    H = D.resource;
                                if ((N || I) && i[L] >= 0 && i[H] >= 0) {
                                    var Y = T.endDate,
                                        O = D.startDate,
                                        P = O < Y,
                                        z = P ? O : Y,
                                        V = P ? Y : O,
                                        F = M.top || 0,
                                        R = E.top || 0,
                                        A = _ ? "right" : "left",
                                        W = N ? +M[A].replace("%", "") : P ? 100 : 0,
                                        U = I ? +E[A].replace("%", "") : P ? 0 : 100,
                                        B = N ? +M.width.replace("%", "") : 0,
                                        j = T.resource === D.resource && P && R === F,
                                        K = U - W - B - 2 * m,
                                        J = i[H] - i[L],
                                        X = J < 0 || (!J && R < F) ? -1 : 1,
                                        G = (100 * (J - F * d + R * d + (j ? d : 0))) / u,
                                        q = (_ ? 100 - W : W) + B * p,
                                        Z = (100 * (i[L] + F * d + 3 + d / 2)) / u;
                                    !N ||
                                        ("from" !== C && "bidirectional" !== C) ||
                                        c.push({
                                            color: S,
                                            cssClass: "mbsc-connection-arrow " + w,
                                            endDate: V,
                                            fill: S,
                                            id: k + "__start",
                                            pathD: "M " + q + ", " + Z + " L " + (q + v) + " " + (Z - f) + " L " + (q + v) + " " + (Z + f) + " Z",
                                            startDate: z,
                                        });
                                    var $ = "M " + q + ", " + Z;
                                    (q += m * p),
                                        G && (($ += " H " + q), ($ += " V " + (Z += G - (K < 0 ? g / 2 : 0) * X))),
                                        (q += K * p),
                                        G && ($ += " H " + q),
                                        G && K < 0 && ($ += " V " + (Z += (g / 2) * X * (j ? -1 : 1))),
                                        ($ += " H " + (q += m * p)),
                                        c.push({ color: S, cssClass: w, id: k, pathD: $, startDate: z, endDate: V }),
                                        !I ||
                                            ("to" !== C && "bidirectional" !== C && !0 !== C) ||
                                            c.push({
                                                color: S,
                                                cssClass: "mbsc-connection-arrow " + w,
                                                endDate: V,
                                                fill: S,
                                                id: k + "__end",
                                                pathD: "M " + q + ", " + Z + " L " + (q - v) + " " + (Z - f) + " L " + (q - v) + " " + (Z + f) + " Z",
                                                startDate: z,
                                            });
                                }
                            }
                        }
                        (this._connections = c), (this._calcConnections = !1);
                    }
                }),
                t
            );
        })(yl);
    function Dl(e, t, n) {
        var a,
            i,
            r = t.dragData,
            o = r && r.draggedEvent && r.draggedEvent.id,
            l = n._hasSlots,
            c = n._hb,
            d = n._rtl,
            h = n._times,
            u = n._theme,
            m = n._startTime,
            _ = n._endTime,
            p = n._stepLabel,
            v = n._slots,
            f = "timeline",
            g = e.resources,
            y = e.eventList,
            b = "month" === e.type,
            x = n._stepCell < Bn,
            T = n._startCellStyle,
            D = n._endCellStyle,
            C = n._daysBatch,
            S = { height: t.headerHeight },
            w = n._days,
            k = n._daysNr,
            M = t.dayIndex || 0,
            E = n._isDailyResolution,
            N = function (t, a) {
                var s, i;
                return (
                    e.renderDay ? me((s = e.renderDay({ date: t.date, events: e.eventMap[t.dateKey] }))) && ((i = n._safeHtml(s)), (n._shouldEnhance = !0)) : (s = a ? ie : t.dateText),
                    Hn(
                        "div",
                        {
                            ref: a ? n._setStickyDay : ie,
                            "aria-hidden": "true",
                            dangerouslySetInnerHTML: i,
                            className: (a ? "mbsc-timeline-header-text" : "") + (e.renderDay ? " mbsc-timeline-header-date-cont" : " mbsc-timeline-header-date-text") + u,
                        },
                        s
                    )
                );
            },
            I = function (e, t, a, s, i) {
                for (var r = [], l = 0, c = e[a][Jo].all[t]; l < c.length; l++) {
                    var d = c[l];
                    ((i && o === d.id) || $n(n._batchStart, n._batchEnd, d.startDate, d.endDate, !0)) && r.push(d);
                }
                return s(r, "all", a, Jo);
            },
            L = function (e) {
                return e.map(function (e, t) {
                    return Hn("div", { key: t, className: "mbsc-schedule-color mbsc-timeline-color" + e.cssClass + u, style: e.position }, Hn("div", { className: "mbsc-schedule-color-text" }, e.title));
                });
            },
            H = function (e) {
                return e.map(function (e, t) {
                    return e.position && Hn("div", { key: t, className: "mbsc-schedule-invalid mbsc-timeline-invalid" + e.cssClass + u, style: e.position }, Hn("div", { className: "mbsc-schedule-invalid-text" }, e.title));
                });
            },
            Y = function (t, a, i, l) {
                var c = i + "__" + l + "__" + a,
                    d = {
                        displayTimezone: e.displayTimezone,
                        drag: e.dragToMove,
                        endDay: e.endDay,
                        eventHeight: n._setRowHeight ? n._eventHeight : ie,
                        exclusiveEndDates: e.exclusiveEndDates,
                        gridEndTime: _,
                        gridStartTime: m,
                        isListing: y,
                        isTimeline: !0,
                        lastDay: +n._lastDay,
                        render: e.renderEvent,
                        renderContent: e.renderEventContent,
                        resize: e.dragToResize,
                        resource: i,
                        rtl: e.rtl,
                        slot: l,
                        startDay: e.startDay,
                        theme: e.theme,
                        timezonePlugin: e.timezonePlugin,
                    };
                return Hn(
                    rn,
                    null,
                    t.map(function (t) {
                        return Hn(
                            sl,
                            s({}, d, {
                                event: t,
                                inactive: o === t.id,
                                key: t.uid,
                                selected: e.selectedEventsMap[t.uid] || e.selectedEventsMap[t.id],
                                onClick: e.onEventClick,
                                onDoubleClick: e.onEventDoubleClick,
                                onRightClick: e.onEventRightClick,
                                onHoverIn: e.onEventHoverIn,
                                onHoverOut: e.onEventHoverOut,
                                onDelete: e.onEventDelete,
                                onDragStart: n._onEventDragStart,
                                onDragMove: n._onEventDragMove,
                                onDragEnd: n._onEventDragEnd,
                                onDragModeOn: n._onEventDragModeOn,
                                onDragModeOff: n._onEventDragModeOff,
                            })
                        );
                    }),
                    r &&
                        r.originDates &&
                        r.originDates[c] &&
                        Hn(
                            sl,
                            s({}, d, {
                                event: r.originDates[c],
                                hidden: r && !!r.draggedDates,
                                isDrag: !0,
                                onDragStart: n._onEventDragStart,
                                onDragMove: n._onEventDragMove,
                                onDragEnd: n._onEventDragEnd,
                                onDragModeOff: n._onEventDragModeOff,
                            })
                        ),
                    r && r.draggedDates && r.draggedDates[c] && Hn(sl, s({}, d, { event: r.draggedDates[c], isDrag: !0 }))
                );
            };
        return Hn(
            "div",
            { ref: n._setEl, className: "mbsc-timeline mbsc-flex-1-1 mbsc-flex-col" + (t.cellWidth ? "" : " mbsc-hidden") + (n._hasSticky ? " mbsc-has-sticky" : "") + (g ? "" : " mbsc-timeline-no-resource") + u + d },
            Hn("div", { dangerouslySetInnerHTML: n.textParam }),
            Hn(
                "div",
                { ref: n._setStickyHeader, className: "mbsc-timeline-header-sticky mbsc-flex" },
                g &&
                    Hn(
                        "div",
                        { className: "mbsc-timeline-resource-empty mbsc-timeline-resource-col" + u + d + c, style: S },
                        (e.renderResourceHeader && me((a = e.renderResourceHeader())) && ((i = n._safeHtml(a)), (n._shouldEnhance = !0)), Hn("div", { className: "mbsc-timeline-resource-header", dangerouslySetInnerHTML: i }, a))
                    ),
                E &&
                    Hn(
                        "div",
                        { className: "mbsc-flex-1-1" },
                        n._isMulti && Hn("div", { className: "mbsc-timeline-header-month" + u + d + c }, Hn("div", { ref: n._setStickyMonth, className: "mbsc-timeline-header-text mbsc-timeline-header-month-text" + u })),
                        e.weekNumbers && Hn("div", { className: "mbsc-timeline-header-week" + u + d + c }, Hn("div", { ref: n._setStickyWeek, className: "mbsc-timeline-header-text mbsc-timeline-header-week-text" + u })),
                        (l || x) && Hn("div", { className: "mbsc-timeline-header-date mbsc-flex" + u + d + c }, N(w[M] || w[0], !0))
                    ),
                t.hasScrollY && Hn("div", { className: "mbsc-schedule-fake-scroll-y" })
            ),
            Hn(
                "div",
                { ref: n._setCont, className: "mbsc-timeline-grid-scroll mbsc-flex-col mbsc-flex-1-1" + u + d + c, onScroll: n._onScroll },
                Hn("div", { className: "mbsc-flex-none", style: n._hasSticky ? ie : S }),
                Hn(
                    "div",
                    { className: "mbsc-timeline-header mbsc-flex" + u + d + c, ref: n._setHeaderCont },
                    g && Hn("div", { className: "mbsc-timeline-resource-empty mbsc-timeline-resource-col" + u + d + c }),
                    Hn(
                        "div",
                        { className: "mbsc-timeline-header-bg mbsc-flex-1-0 mbsc-flex" + u },
                        Hn(
                            "div",
                            { className: "mbsc-timeline-time-indicator-cont", style: { height: (t.scrollContHeight || 0) - (t.headerHeight || 0), width: t.hasScrollX ? n._gridWidth : ie } },
                            n._showTimeIndicator &&
                                Hn(rl, {
                                    amText: e.amText,
                                    displayedTime: n._time,
                                    displayedDays: k,
                                    displayTimezone: e.displayTimezone,
                                    endDay: e.endDay,
                                    firstDay: n._firstDayTz,
                                    orientation: "y",
                                    pmText: e.pmText,
                                    rtl: e.rtl,
                                    startDay: e.startDay,
                                    startTime: m,
                                    theme: e.theme,
                                    timeFormat: e.timeFormat,
                                    timezonePlugin: e.timezonePlugin,
                                }),
                            n._showCursorTime && Hn("div", { ref: n._setCursorTimeCont, className: "mbsc-schedule-cursor-time mbsc-schedule-cursor-time-y" + u })
                        ),
                        Hn("div", { className: "mbsc-flex-none", style: { width: n._placeholderSizeX } }),
                        Hn(
                            "div",
                            { className: t.hasScrollX ? "mbsc-flex-none" : "mbsc-flex-1-1" },
                            E
                                ? Hn(
                                      rn,
                                      null,
                                      n._isMulti &&
                                          Hn(
                                              "div",
                                              { className: "mbsc-flex" },
                                              C.map(function (e) {
                                                  var t = e.lastOfMonth;
                                                  return Hn(
                                                      "div",
                                                      { key: e.timestamp, className: "mbsc-timeline-month mbsc-flex-1-0-0" + u + d + c + (e.dateIndex < k - 1 && t ? " mbsc-timeline-day mbsc-timeline-day-border" : "") },
                                                      Hn(
                                                          "div",
                                                          { className: "mbsc-timeline-header-month" + u + d + c + (t ? " mbsc-timeline-header-month-last" : "") },
                                                          Hn("div", { className: "mbsc-timeline-header-month-text" + (t ? " mbsc-timeline-header-month-text-last" : "") }, e.monthTitle)
                                                      )
                                                  );
                                              })
                                          ),
                                      e.weekNumbers &&
                                          Hn(
                                              "div",
                                              { className: "mbsc-flex" },
                                              C.map(function (e) {
                                                  var t = e.lastOfWeek;
                                                  return Hn(
                                                      "div",
                                                      {
                                                          key: e.timestamp,
                                                          className: "mbsc-timeline-month mbsc-flex-1-0-0" + u + d + c + (e.dateIndex < k - 1 && t && (x || e.lastOfMonth) ? " mbsc-timeline-day mbsc-timeline-day-border" : ""),
                                                      },
                                                      Hn(
                                                          "div",
                                                          { className: "mbsc-timeline-header-week" + u + d + c + (t ? " mbsc-timeline-header-week-last" : "") },
                                                          Hn("div", { className: "mbsc-timeline-header-week-text" + (t ? " mbsc-timeline-header-week-text-last" : "") }, e.weekTitle)
                                                      )
                                                  );
                                              })
                                          ),
                                      Hn(
                                          "div",
                                          { className: "mbsc-flex" },
                                          C.map(function (t) {
                                              return Hn(
                                                  "div",
                                                  {
                                                      key: t.timestamp,
                                                      className:
                                                          "mbsc-timeline-day mbsc-flex-1-0-0" +
                                                          u +
                                                          d +
                                                          c +
                                                          (t.dateIndex < k - 1 && (x || t.lastOfMonth) ? " mbsc-timeline-day-border" : "") +
                                                          (b || n._isMulti ? " mbsc-timeline-day-month" : ""),
                                                  },
                                                  Hn("div", { className: "mbsc-timeline-header-date" + u + d + c }, N(t), t.label && Hn("div", { className: "mbsc-hidden-content" }, t.label)),
                                                  l &&
                                                      Hn(
                                                          "div",
                                                          { className: "mbsc-flex mbsc-timeline-slots" + u },
                                                          v.map(function (a) {
                                                              return Hn(
                                                                  "div",
                                                                  { key: a.id, className: "mbsc-timeline-slot mbsc-timeline-slot-header" + d + u },
                                                                  a.name &&
                                                                      (function (t) {
                                                                          var a,
                                                                              s = t.slot,
                                                                              i = s.name;
                                                                          return (
                                                                              e.renderSlot && me((i = e.renderSlot(t))) && ((a = n._safeHtml(i)), (n._shouldEnhance = !0)),
                                                                              Hn("div", { key: s.id, className: "mbsc-timeline-slot-title", dangerouslySetInnerHTML: a }, i)
                                                                          );
                                                                      })({ slot: a, date: t.date })
                                                              );
                                                          })
                                                      ),
                                                  Hn(
                                                      "div",
                                                      { "aria-hidden": "true", className: "mbsc-flex" },
                                                      h.map(function (e, t) {
                                                          var a = !t,
                                                              s = t === h.length - 1;
                                                          return Hn(
                                                              "div",
                                                              {
                                                                  key: t,
                                                                  style: a && !s ? T : s && !a ? D : ie,
                                                                  className:
                                                                      "mbsc-flex mbsc-flex-1-1 mbsc-timeline-header-column" +
                                                                      u +
                                                                      d +
                                                                      c +
                                                                      (!n._displayTime || l ? " mbsc-timeline-no-height" : "") +
                                                                      (p > n._stepCell && h[t + 1] % p ? " mbsc-timeline-no-border" : "") +
                                                                      ((a && T) || (s && D) ? " mbsc-flex-none" : ""),
                                                              },
                                                              Hn("div", { className: "mbsc-timeline-header-time mbsc-flex-1-1 " + u }, n._displayTime ? n._timeLabels[e] : ""),
                                                              n._timesBetween.map(function (t, a) {
                                                                  var s = e + (a + 1) * p;
                                                                  return s > m && s < _ && Hn("div", { key: a, className: "mbsc-timeline-header-time mbsc-flex-1-1 " + u }, n._timeLabels[s]);
                                                              })
                                                          );
                                                      })
                                                  )
                                              );
                                          })
                                      )
                                  )
                                : Hn(
                                      "div",
                                      { className: "mbsc-flex" },
                                      C.map(function (e) {
                                          return Hn(
                                              "div",
                                              { key: e.timestamp, className: "mbsc-timeline-day mbsc-flex-1-0-0" + u + d + c },
                                              Hn(
                                                  "div",
                                                  { className: "mbsc-timeline-header-week mbsc-timeline-header-week-last" + u + d + c },
                                                  Hn("div", { className: "mbsc-timeline-header-week-text mbsc-timeline-header-week-text-last" }, e.columnTitle)
                                              )
                                          );
                                      })
                                  )
                        )
                    )
                ),
                Hn(
                    "div",
                    { className: "mbsc-flex mbsc-flex-1-1" },
                    Hn(
                        "div",
                        { className: "mbsc-flex mbsc-flex-1-1" },
                        g &&
                            Hn(
                                "div",
                                { className: "mbsc-timeline-resources mbsc-timeline-resource-col mbsc-flex-col" + u + d, ref: n._setResCont },
                                Hn("div", { className: "mbsc-flex-none", style: n._hasSideSticky ? ie : S }),
                                Hn(
                                    "div",
                                    { className: "mbsc-timeline-resource-bg mbsc-flex-1-1" + (n._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col") + u },
                                    Hn("div", { style: { height: n._placeholderSizeY }, className: "mbsc-flex-none" }),
                                    n._resourcesBatch.map(function (t) {
                                        var a,
                                            s = t.isParent,
                                            i = n._hasHierarchy ? 1.75 * t.depth + "em" : ie,
                                            r = { minHeight: n._setRowHeight ? n._eventRows[t.id] * n._eventHeight + 16 : ie, paddingLeft: e.rtl ? ie : i, paddingRight: e.rtl ? i : ie },
                                            o = t.name;
                                        return (
                                            e.renderResource && me((o = e.renderResource(t))) && ((a = n._safeHtml(o)), (n._shouldEnhance = !0)),
                                            Hn(
                                                "div",
                                                { key: t.id, className: "mbsc-timeline-resource" + u + d + c + (s ? " mbsc-timeline-parent mbsc-flex" : ""), style: r },
                                                s &&
                                                    Hn(Ja, {
                                                        className: "mbsc-timeline-resource-icon" + d + c,
                                                        svg: t.collapsed ? (e.rtl ? e.nextIconRtl : e.nextIcon) : e.downIcon,
                                                        theme: e.theme,
                                                        onClick: function () {
                                                            return n._onParentClick(t);
                                                        },
                                                    }),
                                                Hn("div", { className: "mbsc-timeline-resource-title" + (s ? " mbsc-flex-1-1" : ""), dangerouslySetInnerHTML: a }, o)
                                            )
                                        );
                                    })
                                )
                            ),
                        g && Hn("div", { className: n._hasSideSticky ? "" : "mbsc-timeline-resource-col" }),
                        Hn(
                            "div",
                            {
                                className: "mbsc-timeline-grid mbsc-flex-1-0" + (n._hasHierarchy || t.hasScrollY ? "" : " mbsc-flex-col"),
                                ref: n._setGridCont,
                                style: { height: t.hasScrollY ? n._gridHeight : ie, width: t.hasScrollX ? n._gridWidth : ie },
                                onMouseLeave: n._onMouseLeave,
                                onMouseMove: n._onMouseMove,
                            },
                            Hn("div", { style: { height: n._placeholderSizeY }, className: "mbsc-flex-none" }),
                            n._resourcesBatch.map(function (a) {
                                var s = a.id;
                                return Hn(
                                    "div",
                                    { key: s, className: "mbsc-flex mbsc-timeline-row" + u + c + (a.isParent ? " mbsc-timeline-parent" : ""), style: { minHeight: n._setRowHeight ? n._eventRows[s] * n._eventHeight + 16 : ie } },
                                    !l && Hn(rn, null, Hn("div", { className: "mbsc-timeline-events" }, I(n._events, "events", s, Y, !0)), I(n._invalids, "invalids", s, H), I(n._colors, "colors", s, L)),
                                    Hn("div", { style: { width: n._placeholderSizeX }, className: "mbsc-flex-none" }),
                                    C.map(function (a) {
                                        var i = a.timestamp,
                                            r = a.dateKey;
                                        return E
                                            ? Hn(
                                                  "div",
                                                  {
                                                      key: i,
                                                      className:
                                                          "mbsc-timeline-day mbsc-flex" +
                                                          u +
                                                          d +
                                                          c +
                                                          (a.dateIndex < k - 1 && (x || a.lastOfMonth) ? " mbsc-timeline-day-border" : "") +
                                                          (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-0-0") +
                                                          (b || n._isMulti ? " mbsc-timeline-day-month" : ""),
                                                  },
                                                  v.map(function (t) {
                                                      var a = t.id,
                                                          o = n._events[s][a][r],
                                                          m = n._colors[s][a][r],
                                                          _ = n._invalids[s][a][r];
                                                      return Hn(
                                                          "div",
                                                          { key: a, className: "mbsc-flex mbsc-flex-1-1" + (l ? " mbsc-timeline-slot" : "") },
                                                          l && Hn(rn, null, Hn("div", { className: "mbsc-timeline-events" }, Y(o ? o.events : [], r, s, a)), _ && H(_.invalids), m && L(m.colors)),
                                                          h.map(function (t, n) {
                                                              var r = tl(i, t),
                                                                  o = !n,
                                                                  l = n === h.length - 1;
                                                              return Hn("div", {
                                                                  key: n,
                                                                  className: "mbsc-timeline-column mbsc-flex-1-1" + u + d + c + ((o && T) || (l && D) ? " mbsc-flex-none" : ""),
                                                                  onClick: function (t) {
                                                                      return e.onCellClick({ date: r, domEvent: t, resource: s, slot: a, source: f });
                                                                  },
                                                                  onDoubleClick: function (t) {
                                                                      return e.onCellDoubleClick({ date: r, domEvent: t, resource: s, slot: a, source: f });
                                                                  },
                                                                  onContextMenu: function (t) {
                                                                      return e.onCellRightClick({ date: r, domEvent: t, resource: s, slot: a, source: f });
                                                                  },
                                                                  style: o && !l ? T : l && !o ? D : ie,
                                                              });
                                                          })
                                                      );
                                                  })
                                              )
                                            : Hn("div", { key: i, className: "mbsc-timeline-day mbsc-timeline-column" + u + d + c + (t.hasScrollX ? " mbsc-flex-none" : " mbsc-flex-1-0-0") });
                                    })
                                );
                            }),
                            n._connections &&
                                Hn(
                                    "svg",
                                    { className: "mbsc-connections" + u, viewBox: "0 0 100 100", preserveAspectRatio: "none" },
                                    n._connections.map(function (e) {
                                        var t,
                                            a = (((t = { className: "mbsc-connection " + e.cssClass + u, d: e.pathD, style: { stroke: e.color, fill: e.fill } })["vector-effect"] = "non-scaling-stroke"), t);
                                        return $n(n._batchStart, n._batchEnd, e.startDate, e.endDate, !0) && Hn("path", s({ key: e.id }, a));
                                    })
                                )
                        )
                    )
                )
            ),
            r && !t.isTouchDrag && Hn("div", { className: "mbsc-calendar-dragging" })
        );
    }
    var Cl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e, t) {
                    return Dl(e, t, this);
                }),
                t
            );
        })(Tl),
        Sl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t.state = { activeDate: ie, eventList: [], popoverList: [], selectedDate: ie }),
                    (t.print = be),
                    (t._navService = new lr()),
                    (t._pageLoad = 0),
                    (t._selectedDates = {}),
                    (t._shouldScrollSchedule = 0),
                    (t._update = 0),
                    (t._onScroll = Se(function () {
                        if (!t._isListScrolling && !t._viewChanged)
                            for (var e in t._listDays)
                                if (t._listDays[e]) {
                                    var n = t._listDays[e];
                                    if (n.offsetTop + n.offsetHeight - t._list.scrollTop > 0) {
                                        +e !== t._selected && ((t._shouldSkipScroll = !0), t.setState({ selectedDate: +e }), t._selectedChange(new Date(+e)));
                                        break;
                                    }
                                }
                    })),
                    (t._isListScrolling = 0),
                    (t._remote = 0),
                    (t._onWeekDayClick = function (e) {
                        e !== t._selected && ((t._skipScheduleScroll = !0), t.setState({ selectedDate: e }), t._selectedChange(new Date(e)));
                    }),
                    (t._onDayClick = function (e) {
                        var n = e.date,
                            a = +n,
                            s = na(n),
                            i = t.state,
                            r = $s(t._eventMap[s], t.s.eventOrder),
                            o = t._showEventPopover,
                            l = o === ie ? !t._showEventLabels && !t._showEventList && !t._showSchedule : o,
                            c = !1 !== o && t._moreLabelClicked,
                            d = (l || c) && (!i.showPopover || (i.showPopover && a !== i.popoverDate)) && r && r.length > 0;
                        (e.events = r),
                            t._isEventClick || t._resetSelection(),
                            (t._navService.preventPageChange = !t._showEventList),
                            t._hook("onCellClick", e),
                            (t._moreLabelClicked = !1),
                            e.disabled || (t.setState({ selectedDate: a }), a !== t._selected && ((t._skipScheduleScroll = !0), t._selectedChange(n))),
                            d &&
                                setTimeout(function () {
                                    (t._anchor = e.target),
                                        (t._popoverClass = t._popoverClass.replace(" mbsc-popover-hidden", "")),
                                        t.setState({
                                            popoverDate: a,
                                            popoverList: r.map(function (e) {
                                                return t._getEventData(e, n);
                                            }),
                                            showPopover: !0,
                                        });
                                }),
                            (t._isEventClick = !1);
                    }),
                    (t._onActiveChange = function (e) {
                        var n = t._getValidDay(e.date, e.dir),
                            a = { activeDate: n };
                        (t._active = n),
                            t._update++,
                            (t._skipScheduleScroll = e.pageChange && !e.nav),
                            (e.pageChange || e.today) && ((a.selectedDate = n), t._selectedChange(new Date(n)), (t._navService.forcePageChange = !0)),
                            t.setState(a);
                    }),
                    (t._onGestureStart = function (e) {
                        t._hidePopover();
                    }),
                    (t._onDayDoubleClick = function (e) {
                        t._dayClick("onCellDoubleClick", e);
                    }),
                    (t._onDayRightClick = function (e) {
                        t._dayClick("onCellRightClick", e);
                    }),
                    (t._onCellHoverIn = function (e) {
                        (e.events = t._eventMap[na(e.date)]), t._hook("onCellHoverIn", e);
                    }),
                    (t._onCellHoverOut = function (e) {
                        (e.events = t._eventMap[na(e.date)]), t._hook("onCellHoverOut", e);
                    }),
                    (t._onEventHoverIn = function (e) {
                        t._hoverTimer = setTimeout(function () {
                            (t._isHover = !0), t._eventClick("onEventHoverIn", e);
                        }, 150);
                    }),
                    (t._onEventHoverOut = function (e) {
                        clearTimeout(t._hoverTimer), t._isHover && ((t._isHover = !1), t._eventClick("onEventHoverOut", e));
                    }),
                    (t._onEventClick = function (e) {
                        var n = t.s;
                        t._handleMultipleSelect(e), !1 === t._eventClick("onEventClick", e) || n.selectMultipleEvents || n.eventDelete || ((n.dragToCreate || n.clickToCreate) && !1 !== n.eventDelete) || t._hidePopover();
                    }),
                    (t._onEventDoubleClick = function (e) {
                        t._eventClick("onEventDoubleClick", e);
                    }),
                    (t._onEventRightClick = function (e) {
                        t._eventClick("onEventRightClick", e);
                    }),
                    (t._onEventDragEnd = function (e) {
                        t._hook("onEventDragEnd", e);
                    }),
                    (t._onEventDragStart = function (e) {
                        t._hook("onEventDragStart", e);
                    }),
                    (t._onLabelHoverIn = function (e) {
                        t._hoverTimer = setTimeout(function () {
                            (t._isHover = !0), t._labelClick("onEventHoverIn", e);
                        }, 150);
                    }),
                    (t._onLabelHoverOut = function (e) {
                        clearTimeout(t._hoverTimer), t._isHover && ((t._isHover = !1), t._labelClick("onEventHoverOut", e));
                    }),
                    (t._onLabelClick = function (e) {
                        t._handleMultipleSelect(e), t._hook("onLabelClick", e), t._labelClick("onEventClick", e), (t._isEventClick = !0), e.label || (t._moreLabelClicked = !0);
                    }),
                    (t._onLabelDoubleClick = function (e) {
                        t._labelClick("onEventDoubleClick", e);
                    }),
                    (t._onLabelRightClick = function (e) {
                        t._labelClick("onEventRightClick", e);
                    }),
                    (t._onCellClick = function (e) {
                        t._resetSelection(), t._cellClick("onCellClick", e);
                    }),
                    (t._onCellDoubleClick = function (e) {
                        t._cellClick("onCellDoubleClick", e);
                    }),
                    (t._onCellRightClick = function (e) {
                        t._cellClick("onCellRightClick", e);
                    }),
                    (t._onPageChange = function (e) {
                        setTimeout(function () {
                            t._hidePopover();
                        }),
                            (t._isPageChange = !0),
                            t._hook("onPageChange", e);
                    }),
                    (t._onPageLoading = function (e) {
                        var n = t.s,
                            a = qi(t._events, e.viewStart, e.viewEnd, n);
                        (t._colorsMap = qi(n.colors, e.viewStart, e.viewEnd, n)),
                            (t._invalidsMap = qi(n.invalid, e.viewStart, e.viewEnd, n, !0)),
                            (t._validsMap = qi(n.valid, e.viewStart, e.viewEnd, n, !0)),
                            (t._eventMap = a),
                            (t._firstDay = oa(e.firstDay, n, t._firstWeekDay)),
                            (t._lastDay = e.lastDay),
                            (t._labelsMap = t._marksMap = ie),
                            n.labels || (!t._showEventLabels && !t._showEventCount) ? n.marked || (t._marksMap = a) : (t._labelsMap = a),
                            e.viewChanged && t._hook("onPageLoading", e);
                    }),
                    (t._onPageLoaded = function (e) {
                        (t._shouldAnimateScroll = t._isPageChange), (t._isPageChange = !1);
                        var n = t._eventListType;
                        if (t._showEventList && (!t._showCalendar || "day" !== n)) {
                            var a = t.s,
                                s = e.month,
                                i = t._showEventList && s && "month" === n,
                                r = i ? s : e.firstDay,
                                o = i ? a.getDate(a.getYear(s), a.getMonth(s) + t._eventListSize, 1) : e.lastDay;
                            t._setEventList(r, o);
                        }
                        t._hook("onPageLoaded", e);
                    }),
                    (t._onPopoverClose = function () {
                        t._hidePopover();
                    }),
                    (t._onResize = function (e) {
                        var n;
                        if (t._showEventList && m) {
                            var a = e.target,
                                s = a.offsetHeight,
                                i = a.getBoundingClientRect().top;
                            n = s - t._list.getBoundingClientRect().top + i > 170;
                        }
                        t.setState({ height: e.height, isListScrollable: n, width: e.width });
                    }),
                    (t._onSelectedEventsChange = function (e) {
                        t._emit("selectedEventsChange", e), t._hook("onSelectedEventsChange", { events: e });
                    }),
                    (t._getDragDates = function (e, n, a) {
                        for (var s = {}, i = t._firstWeekDay, r = ta(t.s, a.allDay, e, n, !0), o = aa(Da(r, 1)), l = aa(e); l < o; l.setDate(l.getDate() + 1)) {
                            var c = l.getDay(),
                                d = i - c > 0 ? 7 : 0;
                            la(e, l) || c === i ? (s[na(l)] = { event: a, width: 100 * Math.min(ia(l, r) + 1, 7 + i - c - d) }) : (s[na(l)] = {});
                        }
                        return s;
                    }),
                    (t._onLabelUpdateModeOn = function (e) {
                        var n = e.create ? t._tempEvent : e.data;
                        if (n) {
                            var a = va(n.start),
                                s = va(n.end || a);
                            t.setState({ isTouchDrag: !0, labelDragData: { draggedEvent: n, originDates: e.external ? ie : t._getDragDates(a, s, n) } });
                        }
                    }),
                    (t._onLabelUpdateModeOff = function (e) {
                        var n = e.create ? t._tempEvent : e.data;
                        t._hook("onEventDragEnd", { domEvent: e.domEvent, event: n, source: "calendar" }), t.setState({ isTouchDrag: !1, labelDragData: ie });
                    }),
                    (t._onLabelUpdateStart = function (e) {
                        var n = t.s,
                            a = t._el,
                            i = t._showWeekNumbers ? a.querySelector(".mbsc-calendar-week-nr").getBoundingClientRect().width : 0,
                            r = a.querySelectorAll(".mbsc-calendar-slide")["all" === t._calendarLabelList || he(t._calendarLabelList) ? 0 : 1],
                            o = r.getBoundingClientRect(),
                            l = a.querySelector(".mbsc-calendar-week-days"),
                            c = r.querySelectorAll(".mbsc-calendar-row"),
                            d = /click/.test(e.domEvent.type);
                        if (((t._areaTop = 0), l)) {
                            var h = l.getBoundingClientRect();
                            t._areaTop = h.top + h.height;
                        }
                        (t._areaLeft = o.left + (n.rtl ? 0 : i)), (t._areaBottom = o.top + o.height), (t._areaRight = t._areaLeft + o.width - (n.rtl ? i : 0)), (t._calCellWidth = (t._areaRight - t._areaLeft) / 7);
                        var u = 0;
                        if (
                            ((t._rowTops = []),
                            c.forEach(function (n, a) {
                                var s = n.getBoundingClientRect().top - t._areaTop;
                                t._rowTops.push(s), e.endY - t._areaTop > s && (u = a);
                            }),
                            e.create)
                        ) {
                            var m = Ce((n.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                                _ = Da(t._firstDay, 7 * u + m),
                                p = new Date(_.getFullYear(), _.getMonth(), _.getDate()),
                                v = Da(p, 1),
                                f = n.exclusiveEndDates ? v : new Date(+v - 1),
                                g = n.extendDefaultEvent ? n.extendDefaultEvent({ start: p }) : ie;
                            t._tempEvent = s({ allDay: !0, end: f, id: pl(), start: p, title: n.newEventText }, e.event, g);
                        }
                        d || t._hook("onEventDragStart", { domEvent: e.domEvent, event: e.create ? t._tempEvent : e.data, source: "calendar" });
                    }),
                    (t._onLabelUpdateMove = function (e) {
                        var n = t.s,
                            a = e.create ? t._tempEvent : e.data,
                            i = a.allDay ? ie : n;
                        if (e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight) {
                            var r = t.state.labelDragData,
                                o = Ce((n.rtl ? t._areaRight - e.endX : e.endX - t._areaLeft) / t._calCellWidth),
                                l = Ce((n.rtl ? t._areaRight - e.startX : e.startX - t._areaLeft) / t._calCellWidth),
                                c = 0,
                                d = 0;
                            t._rowTops.forEach(function (n, a) {
                                e.startY - t._areaTop > n && (d = a), e.endY - t._areaTop > n && (c = a);
                            });
                            var h = 7 * (c - d) + (o - l);
                            if (o !== t._tempDay || c !== t._tempWeek) {
                                var u = va(a.start, i),
                                    m = va(a.end, i) || u,
                                    _ = s({}, a),
                                    p = u,
                                    v = m;
                                if (e.external) {
                                    var f = Zn(u),
                                        g = +m - +u;
                                    (p = pa(n, +Da(t._firstDay, 7 * c + o) + f)), (v = pa(n, +p + g));
                                } else if (e.drag) (p = Da(u, h)), (v = Da(m, h));
                                else {
                                    var y = n.rtl ? -1 : 1,
                                        b = e.create ? (c === d ? e.deltaX * y > 0 : h > 0) : "end" === e.direction,
                                        x = ia(u, m);
                                    b ? (v = Da(m, Math.max(-x, h))) : (p = Da(u, Math.min(x, h))), v < p && (b ? (v = pa(i, p)) : (p = pa(i, v)));
                                }
                                (_.start = p),
                                    (_.end = v),
                                    /mbsc-popover-hidden/.test(t._popoverClass) || (t._popoverClass = t._popoverClass + " mbsc-popover-hidden"),
                                    t.setState({ labelDragData: { draggedDates: t._getDragDates(p, v, _), draggedEvent: _, originDates: r && r.originDates } }),
                                    (t._tempDay = o),
                                    (t._tempWeek = c);
                            }
                        }
                    }),
                    (t._onLabelUpdateEnd = function (e) {
                        var n = t.state,
                            a = e.create,
                            s = n.labelDragData || {},
                            i = a ? t._tempEvent : e.data,
                            r = s.draggedEvent || i,
                            o = va(i.start),
                            l = va(i.end),
                            c = va(r.start),
                            d = va(r.end),
                            h = a || +o != +c || +l != +d,
                            u = { allDay: i.allDay, endDate: d, original: i, startDate: c },
                            m = e.action || (s.draggedEvent ? "drag" : "click"),
                            _ =
                                !h ||
                                t._onEventDragStop({
                                    action: m,
                                    collision: gl(t.s, t._invalidsMap, t._validsMap, c, d, t._minDate, t._maxDate, t.s.invalidateEvent, t.s.exclusiveEndDates),
                                    create: a,
                                    domEvent: e.domEvent,
                                    event: u,
                                    source: "calendar",
                                }),
                            p = n.isTouchDrag && (!a || _);
                        p || "click" === m || t._hook("onEventDragEnd", { domEvent: e.domEvent, event: i, source: "calendar" }),
                            t.setState({ isTouchDrag: p, labelDragData: p ? { draggedEvent: r, originDates: _ ? t._getDragDates(c, d, u.original) : s.originDates } : {} }),
                            e.drag && t._hidePopover(),
                            (t._tempWeek = -1),
                            (t._tempDay = -1);
                    }),
                    (t._onEventDragStop = function (e) {
                        var n = t.s,
                            a = e.action,
                            i = e.resource,
                            r = e.slot,
                            o = e.collision,
                            l = e.create,
                            c = e.source,
                            d = e.event,
                            h = d.original,
                            u = h.recurring ? h.original : h,
                            m = s({}, u),
                            _ = s({}, u),
                            p = Kn(h.start, n),
                            v = Kn(d.startDate, n),
                            f = Kn(d.endDate, n),
                            g = d.allDay,
                            y = _.recurring;
                        y ? (_.recurringException = Xi(_.recurringException).concat([p])) : ((_.allDay = g), (_.start = v), (_.end = f), i !== ie && (_.resource = i), r !== ie && (_.slot = r));
                        var b = !1,
                            x = y ? s({}, u) : u;
                        return (
                            (l || y) &&
                                (y && delete x.recurring,
                                (y || x.id === ie) && (x.id = pl()),
                                i !== ie && (x.resource = i),
                                r !== ie && (x.slot = r),
                                (x.start = v),
                                (x.end = f),
                                (x.allDay = g),
                                (b = !1 !== t._hook("onEventCreate", s({ action: a, domEvent: e.domEvent, event: x, source: c }, y && { originEvent: h }))),
                                !1 !== o && ((b = !1), t._hook("onEventCreateFailed", s({ action: a, event: x, invalid: o, source: c }, y && { originEvent: h })))),
                            (l && !y) ||
                                ((b = !1 !== t._hook("onEventUpdate", s({ domEvent: e.domEvent, event: _, oldEvent: m, source: c }, y && { newEvent: x, oldEventOccurrence: h }))),
                                !1 !== o && ((b = !1), t._hook("onEventUpdateFailed", s({ event: _, invalid: o, oldEvent: m, source: c }, y && { newEvent: x, oldEventOccurrence: h })))),
                            b &&
                                ((l || y) && (t._events.push(x), (t._triggerCreated = { action: a, event: x, source: c })),
                                (l && !y) ||
                                    (y ? ((d.id = x.id), (d.original = x), (u.recurringException = _.recurringException)) : ((u.start = v), (u.end = f), (u.allDay = g), i !== ie && (u.resource = i), r !== ie && (u.slot = r)),
                                    (t._triggerUpdated = { event: u, oldEvent: m, source: c })),
                                (t._refresh = !0),
                                "calendar" !== c && t.forceUpdate()),
                            b
                        );
                    }),
                    (t._onExternalDrag = function (e) {
                        if (t.s.externalDrop && t._showCalendar)
                            switch (e.eventName) {
                                case "onDragModeOff":
                                    t._onLabelUpdateModeOff(e);
                                    break;
                                case "onDragModeOn":
                                    t._onLabelUpdateModeOn(e);
                                    break;
                                case "onDragStart":
                                    t._onLabelUpdateStart(e);
                                    break;
                                case "onDragMove":
                                    var n = e.clone;
                                    e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight
                                        ? ((n.style.display = "none"), t._onLabelUpdateMove(e), (t._onCalendar = !0))
                                        : t._onCalendar && ((n.style.display = "table"), t.setState({ labelDragData: {} }), (t._tempWeek = -1), (t._tempDay = -1), (t._onCalendar = !1));
                                    break;
                                case "onDragEnd":
                                    e.endY > t._areaTop && e.endY < t._areaBottom && e.endX > t._areaLeft && e.endX < t._areaRight
                                        ? t._onLabelUpdateEnd(e)
                                        : (t.setState({ labelDragData: ie }), t._hook("onEventDragEnd", { domEvent: e.domEvent, event: e.event, source: "calendar" }));
                            }
                    }),
                    (t._onEventDelete = function (e) {
                        var n,
                            a = t.s;
                        if ((a.eventDelete !== ie || a.dragToCreate || a.clickToCreate) && !1 !== a.eventDelete) {
                            for (
                                var i, r, o, l = !1, c = !1, d = !1, h = e.event, u = h, m = a.selectMultipleEvents, _ = m ? t._selectedEventsMap : (((n = {})[h.id] = h), n), p = [], v = [], f = [], g = {}, y = [], b = 0, x = He(_);
                                b < x.length;
                                b++
                            ) {
                                var T = x[b];
                                if (T.recurring) {
                                    (u = T), (c = !0);
                                    var D = (i = T.original).id;
                                    g[D] ? (o = g[D]) : ((r = s({}, i)), (o = s({}, i)), v.push(i), p.push(r), f.push(o), (g[D] = o));
                                    var C = Kn(T.start, a);
                                    o.recurringException = Xi(o.recurringException).concat([C]);
                                } else (d = !0), (h = T), y.push(T);
                            }
                            if (c)
                                if (!1 !== t._hook("onEventUpdate", { domEvent: e.domEvent, event: o, events: m ? f : ie, isDelete: !0, oldEvent: m ? ie : r, oldEventOccurrence: u, oldEvents: m ? p : ie })) {
                                    l = !0;
                                    for (var S = 0, w = v; S < w.length; S++) {
                                        var k = w[S],
                                            M = g[k.id];
                                        k.recurringException = M.recurringException;
                                    }
                                    t._triggerUpdated = { event: i, events: m ? v : ie, oldEvent: m ? ie : r, oldEvents: m ? p : ie, source: e.source };
                                }
                            if (d)
                                !1 !== t._hook("onEventDelete", { domEvent: e.domEvent, event: h, events: m ? y : ie }) &&
                                    ((l = !0),
                                    (t._events = t._events.filter(function (e) {
                                        return !_[e.id];
                                    })),
                                    (t._selectedEventsMap = {}),
                                    (t._triggerDeleted = { event: h, events: m ? y : ie, source: e.source }));
                            l && (t._hidePopover(), t.refresh());
                        }
                    }),
                    (t._setEl = function (e) {
                        (t._el = e ? e._el || e : null), (t._calendarView = e);
                    }),
                    (t._setList = function (e) {
                        t._list = e;
                    }),
                    (t._setPopoverList = function (e) {
                        t._popoverList = e && e._el;
                    }),
                    (t._onKeyDown = function (e) {
                        9 === e.keyCode && t._resetSelection();
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype.addEvent = function (e) {
                    for (var t = [], n = 0, a = fl(de(e) ? e : [e]); n < a.length; n++) {
                        var s = a[n];
                        t.push("" + s.id), this._events.push(s);
                    }
                    return this.refresh(), t;
                }),
                (t.prototype.getEvents = function (e, t) {
                    return _l(this._events, this.s, this._firstDay, this._lastDay, e, t);
                }),
                (t.prototype.getInvalids = function (e, t) {
                    return _l(this.s.invalid, this.s, this._firstDay, this._lastDay, e, t);
                }),
                (t.prototype.getSelectedEvents = function () {
                    return He(this._selectedEventsMap);
                }),
                (t.prototype.setEvents = function (e) {
                    for (var t = [], n = fl(e), a = 0, s = n; a < s.length; a++) {
                        var i = s[a];
                        t.push("" + i.id);
                    }
                    return (this._events = n), this.refresh(), t;
                }),
                (t.prototype.setSelectedEvents = function (e) {
                    (this._selectedEventsMap = (e || []).reduce(function (e, t) {
                        return t.occurrenceId ? (e[t.occurrenceId] = t) : (e[t.id] = t), e;
                    }, {})),
                        this.forceUpdate();
                }),
                (t.prototype.removeEvent = function (e) {
                    for (var t = de(e) ? e : [e], n = this._events, a = n.length, s = 0, i = t; s < i.length; s++)
                        for (var r = i[s], o = !1, l = 0; !o && l < a; ) {
                            var c = n[l];
                            (c.id !== r && c.id !== r.id) || ((o = !0), n.splice(l, 1)), l++;
                        }
                    this.refresh();
                }),
                (t.prototype.navigateToEvent = function (e) {
                    (this._navigateToEvent = e), this._shouldScrollSchedule++, this.navigate(e.start, !0);
                }),
                (t.prototype.navigate = function (e, t) {
                    var n = +va(e),
                        a = n !== this._selectedDateTime || this._navigateToEvent !== ie;
                    a && (this._shouldAnimateScroll = !!t),
                        this.s.selectedDate === ie ? ((!this._showSchedule && !this._showTimeline) || a ? this.setState({ selectedDate: n }) : (this._shouldScrollSchedule++, this.forceUpdate())) : a && this._selectedChange(e);
                }),
                (t.prototype.updateEvent = function (e) {
                    for (var t = de(e) ? e : [e], n = this._events, a = n.length, i = 0, r = t; i < r.length; i++)
                        for (var o = r[i], l = !1, c = 0; !l && c < a; ) {
                            n[c].id === o.id && ((l = !0), n.splice(c, 1, s({}, o))), c++;
                        }
                    this.refresh();
                }),
                (t.prototype.refresh = function () {
                    (this._refresh = !0), this.forceUpdate();
                }),
                (t.prototype._render = function (e, t) {
                    var n,
                        a,
                        s,
                        i = this,
                        r = this._prevS,
                        o = this._showDate,
                        l = e.displayTimezone !== r.displayTimezone || e.dataTimezone !== r.dataTimezone,
                        c = !1;
                    if (
                        ((this._colorEventList = e.eventTemplate === ie && e.renderEvent === ie && e.colorEventList),
                        e.exclusiveEndDates === ie && (e.exclusiveEndDates = !!e.displayTimezone),
                        _e(e.min) ? (this._minDate = -1 / 0) : r.min !== e.min && (this._minDate = +va(e.min)),
                        _e(e.max) ? (this._maxDate = 1 / 0) : r.max !== e.max && (this._maxDate = +va(e.max)),
                        e.selectedDate !== ie ? (a = +va(e.selectedDate)) : (this._defaultDate || (this._defaultDate = +(e.defaultSelectedDate !== ie ? va(e.defaultSelectedDate) : _a(pa(e)))), (a = t.selectedDate || this._defaultDate)),
                        (this.eventList = t.eventList),
                        e.data !== r.data && ((this._events = fl(e.data)), (this._refresh = !0)),
                        (e.invalid !== r.invalid || e.colors !== r.colors || l) && (this._refresh = !0),
                        JSON.stringify(e.view) !== JSON.stringify(r.view) || e.firstDay !== r.firstDay || e.dragTimeStep !== r.dragTimeStep)
                    ) {
                        var d = {
                            c: "eventcalendar",
                            dragTimeStep: e.dragTimeStep,
                            eventListSize: this._eventListSize,
                            eventListType: this._eventListType,
                            firstDay: e.firstDay,
                            resourcesLength: e.resources ? e.resources.length : 0,
                            scheduleEndDay: this._scheduleEndDay,
                            scheduleEndTime: this._scheduleEndTime,
                            scheduleStartDay: this._scheduleStartDay,
                            scheduleStartTime: this._scheduleStartTime,
                            scheduleTimeCellStep: this._scheduleTimeCellStep,
                            scheduleTimeLabelStep: this._scheduleTimeLabelStep,
                            scheduleTimezones: this._scheduleTimezones,
                            scheduleType: this._scheduleType,
                            showCalendar: this._showCalendar,
                            showEventCount: this._showEventCount,
                            showEventLabels: this._showEventLabels,
                            showEventList: this._showEventList,
                            showMarked: !!e.marked,
                            showSchedule: this._showSchedule,
                            showScheduleDays: this._showScheduleDays,
                            slotsLength: e.slots ? e.slots.length : 0,
                            timelineEndDay: this._timelineEndDay,
                            timelineEndTime: this._timelineEndTime,
                            timelineListing: this._timelineListing,
                            timelineResolution: this._timelineResolution,
                            timelineStartTime: this._timelineStartTime,
                            timelineTimeCellStep: this._timelineTimeCellStep,
                            timelineTimeLabelStep: this._timelineTimeLabelStep,
                            timelineType: this._timelineType,
                            v: Ra,
                            view: e.view,
                        };
                        this._remote++,
                            Ya(this),
                            Pa(
                                "remote",
                                this,
                                d,
                                function (e) {
                                    if ((i._remote--, !i._remote)) {
                                        for (var t in e) e.hasOwnProperty(t) && (i[t] = e[t]);
                                        Oa(e.notification), (i._viewChanged = !0), i.forceUpdate();
                                    }
                                },
                                "comp_" + this._uid
                            );
                    }
                    (this._firstWeekDay = this._showSchedule ? this._scheduleStartDay : this._showTimeline ? this._timelineStartDay : e.firstDay),
                        (this._showDate = !this._showScheduleDays && ((this._showSchedule && "day" === this._scheduleType) || (this._showEventList && "day" === this._eventListType && this._eventListSize < 2)));
                    var h = this._pageLoad;
                    if (
                        ((this._refresh || e.locale !== r.locale || e.theme !== r.theme) && ((c = !0), this._pageLoad++),
                        e.resources !== r.resources &&
                            (this._resourcesMap = (e.resources || []).reduce(function (e, t) {
                                return (e[t.id] = t), e;
                            }, {})),
                        e.selectMultipleEvents &&
                            e.selectedEvents !== r.selectedEvents &&
                            (this._selectedEventsMap = (e.selectedEvents || []).reduce(function (e, t) {
                                return t.occurrenceId ? (e[t.occurrenceId] = t) : (e[t.id] = t), e;
                            }, {})),
                        this._selectedEventsMap === ie && (this._selectedEventsMap = {}),
                        e.refDate !== r.refDate && (this._refDate = va(e.refDate)),
                        this._refDate || this._showCalendar || (!this._showSchedule && !this._showTimeline) || (this._refDate = aa(new Date())),
                        a !== this._selectedDateTime || this._viewChanged)
                    ) {
                        var u = this._showCalendar && (this._showSchedule || this._showTimeline || this._showEventList) ? +$i(new Date(a), e, this._minDate, this._maxDate, ie, ie, 1) : ce(a, this._minDate, this._maxDate);
                        (u = this._getValidDay(u)),
                            a !== u &&
                                ((a = u),
                                setTimeout(function () {
                                    i._selectedChange(new Date(a));
                                })),
                            this._skipScheduleScroll || a === this._selectedDateTime || this._shouldScrollSchedule++,
                            (this._selectedDateTime = a);
                    }
                    ((n = +(s = aa(new Date(a)))) === this._selected && o === this._showDate && e.locale === r.locale && r.dateFormatLong === e.dateFormatLong) ||
                        (this._selectedDateHeader = this._showDate ? ya(e.dateFormatLong, s, e) : ""),
                        (n === this._selected && e.dataTimezone === r.dataTimezone && e.displayTimezone === r.displayTimezone) ||
                            ((this._shouldScroll = !this._isPageChange && !this._shouldSkipScroll),
                            (this._shouldAnimateScroll = this._shouldAnimateScroll !== ie ? this._shouldAnimateScroll : this._selected !== ie),
                            (this._selected = n),
                            (this._selectedDates = {}),
                            (this._selectedDates[+ma(e, new Date(n))] = !0),
                            (this._active = n),
                            (c = !0)),
                        c && this._showCalendar && ("day" === this._eventListType || "day" === this._scheduleType || "day" === this._timelineType) && this._setEventList(s, Da(s, 1)),
                        this._refresh &&
                            t.showPopover &&
                            setTimeout(function () {
                                i._hidePopover();
                            }),
                        (this._refresh = !1),
                        (this._cssClass =
                            this._className +
                            " mbsc-eventcalendar" +
                            (this._showEventList ? " mbsc-eventcalendar-agenda" : "") +
                            (this._showSchedule ? " mbsc-eventcalendar-schedule" : "") +
                            (this._showTimeline ? " mbsc-eventcalendar-timeline" : "")),
                        this._navService.options(
                            {
                                activeDate: this._active,
                                calendarType: this._calendarType,
                                endDay: this._showSchedule ? this._scheduleEndDay : this._showTimeline ? this._timelineEndDay : this._rangeEndDay,
                                eventRange: this._rangeType,
                                eventRangeSize: this._showSchedule ? this._scheduleSize : this._showTimeline ? this._timelineSize : this._eventListSize,
                                firstDay: e.firstDay,
                                getDate: e.getDate,
                                getDay: e.getDay,
                                getMonth: e.getMonth,
                                getYear: e.getYear,
                                max: e.max,
                                min: e.min,
                                onPageChange: this._onPageChange,
                                onPageLoading: this._onPageLoading,
                                refDate: this._refDate,
                                resolution: this._timelineResolution,
                                showCalendar: this._showCalendar,
                                showOuterDays: this._showOuterDays,
                                size: this._calendarSize,
                                startDay: this._rangeStartDay,
                                weeks: this._calendarSize,
                            },
                            this._pageLoad !== h
                        );
                }),
                (t.prototype._mounted = function () {
                    (this._unsubscribe = dl(this._onExternalDrag)), Ot(this._el, as, this._onKeyDown);
                }),
                (t.prototype._updated = function () {
                    var e = this;
                    if (
                        (this._shouldScroll && this.state.isListScrollable && (this._scrollToDay(), (this._shouldScroll = !1), (this._shouldAnimateScroll = ie)),
                        this._shouldLoadDays &&
                            ((this._shouldLoadDays = !1),
                            qt(this._list.querySelectorAll("[mbsc-timestamp]"), function (t) {
                                e._listDays[t.getAttribute("mbsc-timestamp")] = t;
                            })),
                        this._shouldEnhance && (this._shouldEnhance = "popover" === this._shouldEnhance ? this._popoverList : this._list),
                        this._triggerCreated)
                    ) {
                        var t = this._triggerCreated,
                            n =
                                "calendar" === t.source
                                    ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + t.event.id + '"]')
                                    : this._el.querySelector('.mbsc-schedule-event[data-id="' + t.event.id + '"]');
                        this._hook("onEventCreated", s({}, this._triggerCreated, { target: n })), (this._triggerCreated = null);
                    }
                    if (this._triggerUpdated) {
                        var a = this._triggerUpdated;
                        n =
                            "calendar" === a.source
                                ? this._calendarView._body.querySelector('.mbsc-calendar-table-active .mbsc-calendar-text[data-id="' + a.event.id + '"]')
                                : this._el.querySelector('.mbsc-schedule-event[data-id="' + a.event.id + '"]');
                        this._hook("onEventUpdated", s({}, this._triggerUpdated, { target: n })), (this._triggerUpdated = null);
                    }
                    this._triggerDeleted && (this._hook("onEventDeleted", s({}, this._triggerDeleted)), (this._triggerDeleted = null)),
                        this._viewChanged &&
                            setTimeout(function () {
                                e._viewChanged = !1;
                            }, 10),
                        this._shouldSkipScroll &&
                            setTimeout(function () {
                                e._shouldSkipScroll = !1;
                            }),
                        (this._skipScheduleScroll = !1),
                        (this._navigateToEvent = ie);
                }),
                (t.prototype._destroy = function () {
                    hl(this._unsubscribe), Pt(this._el, as, this._onKeyDown);
                }),
                (t.prototype._resetSelection = function () {
                    this.s.selectMultipleEvents && Object.keys(this._selectedEventsMap).length > 0 && ((this._selectedEventsMap = {}), this._onSelectedEventsChange([]), this.forceUpdate());
                }),
                (t.prototype._getAgendaEvents = function (e, t, n) {
                    var a = this,
                        s = [],
                        i = this.s;
                    if (n && this._showEventList)
                        for (
                            var r = function (e) {
                                    var t = n[na(e)];
                                    if (t && t.length) {
                                        var r = $s(t, i.eventOrder);
                                        s.push({
                                            date: ya(i.dateFormatLong, e, i),
                                            events: r.map(function (t) {
                                                return a._getEventData(t, e);
                                            }),
                                            timestamp: +e,
                                        });
                                    }
                                },
                                o = aa(e);
                            o < t;
                            o.setDate(o.getDate() + 1)
                        )
                            r(o);
                    return s;
                }),
                (t.prototype._getEventData = function (e, t) {
                    var n,
                        a = this.s;
                    if (!e.color && e.resource) {
                        var s = de(e.resource) ? e.resource : [e.resource];
                        n = (this._resourcesMap || {})[s[0]];
                    }
                    var i = vl(a, e, t, this._colorEventList, n, !0);
                    return (i.html = this._safeHtml(i.html)), i;
                }),
                (t.prototype._getValidDay = function (e, t) {
                    void 0 === t && (t = 1);
                    var n = this._rangeStartDay,
                        a = this._rangeEndDay;
                    if (!this._showCalendar && "day" === this._rangeType && n !== ie && a !== ie) {
                        var s = new Date(e),
                            i = s.getDay(),
                            r = 0;
                        if (((a < n ? i > a && i < n : i > a || i < n) && (r = t < 0 ? a - i : n - i), r)) return +Da(s, (r += t < 0 ? (r > 0 ? -7 : 0) : r < 0 ? 7 : 0));
                    }
                    return e;
                }),
                (t.prototype._setEventList = function (e, t) {
                    var n = this;
                    setTimeout(function () {
                        (n._eventListHTML = ie), (n._shouldScroll = !0), (n._listDays = null), n._scrollToDay(0), n.setState({ eventList: n._getAgendaEvents(e, t, n._eventMap) });
                    });
                }),
                (t.prototype._hidePopover = function () {
                    this.state.showPopover && this.setState({ showPopover: !1 });
                }),
                (t.prototype._scrollToDay = function (e) {
                    var t = this;
                    if (this._list) {
                        var n = e,
                            a = void 0;
                        if (e === ie && this._listDays) {
                            var s = this._listDays[this._selected],
                                i = this._navigateToEvent && this._navigateToEvent.id;
                            if (s)
                                if (i !== ie) {
                                    var r = s.querySelector('.mbsc-event[data-id="' + i + '"]'),
                                        o = s.querySelector(".mbsc-event-day");
                                    r && (n = r.offsetTop - (o ? o.offsetHeight : 0) + 1);
                                } else n = s.offsetTop;
                            n !== ie && (a = this._shouldAnimateScroll);
                        }
                        n !== ie &&
                            (this._isListScrolling++,
                            jt(this._list, ie, n, a, !1, function () {
                                setTimeout(function () {
                                    t._isListScrolling--;
                                }, 150);
                            }));
                    }
                }),
                (t.prototype._selectedChange = function (e) {
                    this._emit("selectedDateChange", e), this._hook("onSelectedDateChange", { date: e });
                }),
                (t.prototype._cellClick = function (e, t) {
                    this._hook(e, s({ target: t.domEvent.currentTarget }, t));
                }),
                (t.prototype._dayClick = function (e, t) {
                    var n = na(t.date),
                        a = $s(this._eventMap[n], this.s.eventOrder);
                    (t.events = a), this._hook(e, t);
                }),
                (t.prototype._labelClick = function (e, t) {
                    t.label && this._hook(e, { date: t.date, domEvent: t.domEvent, event: t.label, source: "calendar" });
                }),
                (t.prototype._eventClick = function (e, t) {
                    return (t.date = new Date(t.date)), this._hook(e, t);
                }),
                (t.prototype._handleMultipleSelect = function (e) {
                    var t = e.label || e.event;
                    if (t && this.s.selectMultipleEvents) {
                        var n = e.domEvent,
                            a = n.shiftKey || n.ctrlKey || n.metaKey ? this._selectedEventsMap : {},
                            i = t.occurrenceId || t.id;
                        a[i] ? delete a[i] : (a[i] = t), (this._selectedEventsMap = s({}, a)), this._onSelectedEventsChange(He(a)), this.s.selectedEvents === ie && this.forceUpdate();
                    }
                }),
                (t.defaults = s({}, Bs, { actionableEvents: !0, allDayText: "All-day", data: [], newEventText: "New event", noEventsText: "No events", showControls: !0, showEventTooltip: !0, view: { calendar: { type: "month" } } })),
                (t._name = "Eventcalendar"),
                t
            );
        })(Ua);
    function wl(e, t, n, a, s, i) {
        var r,
            o = !e._colorEventList,
            l = i ? "popover" : "agenda",
            c = !i || e.state.showPopover,
            d = e._theme,
            h = s.renderEventContent ? s.renderEventContent(t) : Hn("div", { className: "mbsc-event-text " + d, title: t.tooltip, dangerouslySetInnerHTML: t.html });
        me(h) ? ((h = Hn("div", { className: "mbsc-event-content" + d, dangerouslySetInnerHTML: { __html: h } })), (e._shouldEnhance = c && l)) : (h = Hn("div", { className: "mbsc-event-content" + d }, h));
        var u = s.renderEvent
            ? s.renderEvent(t)
            : Hn(
                  rn,
                  null,
                  Hn("div", { className: "mbsc-event-color" + d + e._rtl, style: t.style }),
                  h,
                  Hn(
                      "div",
                      { className: "mbsc-event-time" + d + e._rtl },
                      t.allDayText && Hn("div", { className: "mbsc-event-all-day" + d }, t.allDayText),
                      t.lastDay && Hn("div", { className: "mbsc-event-until" + d }, t.lastDay),
                      t.start && Hn("div", { className: "mbsc-event-start" + d }, t.start),
                      t.start && t.end && Hn("div", { className: "mbsc-event-sep" + d }, "-"),
                      t.end && Hn("div", { className: "mbsc-event-end" + d }, t.end)
                  )
              );
        return (
            me(u) && ((r = { __html: u }), (u = ie), (e._shouldEnhance = c && l)),
            Hn(
                Ko,
                {
                    className: "mbsc-event" + (o ? "" : " mbsc-colored-event") + (t.original.cssClass ? " " + t.original.cssClass : ""),
                    "data-id": t.original.id,
                    key: n,
                    actionable: s.actionableEvents,
                    dangerouslySetInnerHTML: r,
                    data: t.original,
                    drag: i && e._showEventLabels && s.dragToMove,
                    rtl: s.rtl,
                    selected: e._selectedEventsMap[t.uid] || e._selectedEventsMap[t.id],
                    style: o ? ie : t.style,
                    theme: s.theme,
                    themeVariant: s.themeVariant,
                    onClick: function (n) {
                        return e._onEventClick({ date: a, domEvent: n.domEvent, event: t.original, source: l });
                    },
                    onDoubleClick: function (n) {
                        return e._onEventDoubleClick({ date: a, domEvent: n, event: t.original, source: l });
                    },
                    onContextMenu: function (n) {
                        return e._onEventRightClick({ date: a, domEvent: n, event: t.original, source: l });
                    },
                    onHoverIn: function (n) {
                        var s = n.domEvent;
                        return e._onEventHoverIn({ date: a, domEvent: s, event: t.original, source: l });
                    },
                    onHoverOut: function (n) {
                        var s = n.domEvent;
                        return e._onEventHoverOut({ date: a, domEvent: s, event: t.original, source: l });
                    },
                    onDelete: e._onEventDelete,
                    onDragEnd: e._onLabelUpdateEnd,
                    onDragModeOff: e._onLabelUpdateModeOff,
                    onDragModeOn: e._onLabelUpdateModeOn,
                    onDragMove: e._onLabelUpdateMove,
                    onDragStart: e._onLabelUpdateStart,
                },
                u
            )
        );
    }
    function kl(e, t, n) {
        var a;
        n._listDays || (n._listDays = {}),
            n._showEventList &&
                ((a = (function (e, t) {
                    var n = e.theme,
                        a = t._listDays,
                        s = t.state.eventList;
                    return e.renderAgenda && t._eventListHTML === ie
                        ? e.renderAgenda(s, e, a)
                        : Hn(
                              Wo,
                              { theme: n, themeVariant: e.themeVariant, rtl: e.rtl },
                              !s.length && Hn("div", { className: "mbsc-event-list-empty" + t._theme }, e.noEventsText),
                              s.map(function (s, i) {
                                  return Hn(
                                      "div",
                                      {
                                          className: "mbsc-event-group" + t._theme,
                                          key: i,
                                          ref: function (e) {
                                              return (a[s.timestamp] = e);
                                          },
                                      },
                                      ("day" !== t._eventListType || t._eventListSize > 1) && Hn(Bo, { theme: n, themeVariant: e.themeVariant, className: "mbsc-event-day" }, s.date),
                                      s.events.map(function (n, a) {
                                          return wl(t, n, a, s.timestamp, e);
                                      })
                                  );
                              })
                          );
                })(e, n)),
                me(a) && ((n._eventListHTML = { __html: a }), (n._shouldLoadDays = !0), (n._shouldEnhance = !0), (a = ie)));
        var i = {
                amText: e.amText,
                clickToCreate: e.clickToCreate,
                dataTimezone: e.dataTimezone,
                dateFormat: e.dateFormat,
                dayNames: e.dayNames,
                dayNamesMin: e.dayNamesMin,
                dayNamesShort: e.dayNamesShort,
                displayTimezone: e.displayTimezone,
                dragToCreate: e.dragToCreate,
                dragToMove: e.dragToMove,
                dragToResize: e.dragToResize,
                eventOrder: e.eventOrder,
                exclusiveEndDates: e.exclusiveEndDates,
                firstDay: e.firstDay,
                fromText: e.fromText,
                getDate: e.getDate,
                getDay: e.getDay,
                getMaxDayOfMonth: e.getMaxDayOfMonth,
                getMonth: e.getMonth,
                getWeekNumber: e.getWeekNumber,
                getYear: e.getYear,
                monthNames: e.monthNames,
                monthNamesShort: e.monthNamesShort,
                pmText: e.pmText,
                refDate: n._refDate,
                renderDay: e.renderDay,
                rtl: e.rtl,
                selectedEventsMap: n._selectedEventsMap,
                showEventTooltip: e.showEventTooltip,
                theme: e.theme,
                themeVariant: e.themeVariant,
                timeFormat: e.timeFormat,
                timezonePlugin: e.timezonePlugin,
                toText: e.toText,
            },
            r = s({}, i, {
                allDayText: e.allDayText,
                colorsMap: n._colorsMap,
                dateFormatLong: e.dateFormatLong,
                dragTimeStep: n._dragTimeStep,
                eventDragEnd: n._onEventDragStop,
                eventMap: n._eventMap,
                extendDefaultEvent: e.extendDefaultEvent,
                externalDrop: e.externalDrop,
                groupBy: e.groupBy,
                height: t.height,
                invalidateEvent: e.invalidateEvent,
                invalidsMap: n._invalidsMap,
                maxDate: n._maxDate,
                minDate: n._minDate,
                navigateToEvent: n._navigateToEvent,
                navigationService: n._navService,
                newEventText: e.newEventText,
                onCellClick: n._onCellClick,
                onCellDoubleClick: n._onCellDoubleClick,
                onCellRightClick: n._onCellRightClick,
                onEventClick: n._onEventClick,
                onEventDelete: n._onEventDelete,
                onEventDoubleClick: n._onEventDoubleClick,
                onEventDragEnd: n._onEventDragEnd,
                onEventDragStart: n._onEventDragStart,
                onEventHoverIn: n._onEventHoverIn,
                onEventHoverOut: n._onEventHoverOut,
                onEventRightClick: n._onEventRightClick,
                renderEvent: e.renderScheduleEvent,
                renderEventContent: e.renderScheduleEventContent,
                renderResource: e.renderResource,
                resources: e.resources,
                scroll: n._shouldScrollSchedule,
                selected: n._selectedDateTime,
                width: t.width,
            });
        return Hn(
            rr,
            s({ ref: n._setEl }, i, {
                activeDate: n._active,
                calendarScroll: n._calendarScroll,
                calendarType: n._calendarType,
                colors: e.colors,
                context: e.context,
                cssClass: n._cssClass,
                downIcon: e.downIcon,
                dragData: t.labelDragData,
                endDay: n._rangeEndDay,
                eventRange: n._rangeType,
                eventRangeSize: n._showSchedule ? n._scheduleSize : n._showTimeline ? n._timelineSize : n._eventListSize,
                hasContent: n._showEventList || n._showSchedule || n._showTimeline,
                hasPicker: !0,
                height: e.height,
                invalid: e.invalid,
                instanceService: n._instanceService,
                labels: e.labels,
                labelList: n._calendarLabelList,
                labelsMap: n._labelsMap,
                marked: e.marked,
                marksMap: n._marksMap,
                max: e.max,
                min: e.min,
                mouseSwipe: (!e.dragToCreate && "single" !== e.clickToCreate) || (!n._showEventLabels && !n._showEventCount),
                mousewheel: e.mousewheel,
                navigationService: n._navService,
                nextIconH: e.nextIconH,
                nextIconV: e.nextIconV,
                nextPageText: e.nextPageText,
                noOuterChange: !n._showEventList,
                onActiveChange: n._onActiveChange,
                onCellHoverIn: n._onCellHoverIn,
                onCellHoverOut: n._onCellHoverOut,
                onDayClick: n._onDayClick,
                onDayDoubleClick: n._onDayDoubleClick,
                onDayRightClick: n._onDayRightClick,
                onGestureStart: n._onGestureStart,
                onLabelClick: n._onLabelClick,
                onLabelDoubleClick: n._onLabelDoubleClick,
                onLabelRightClick: n._onLabelRightClick,
                onLabelHoverIn: n._onLabelHoverIn,
                onLabelHoverOut: n._onLabelHoverOut,
                onLabelDelete: n._onEventDelete,
                onLabelUpdateStart: n._onLabelUpdateStart,
                onLabelUpdateMove: n._onLabelUpdateMove,
                onLabelUpdateEnd: n._onLabelUpdateEnd,
                onLabelUpdateModeOn: n._onLabelUpdateModeOn,
                onLabelUpdateModeOff: n._onLabelUpdateModeOff,
                onPageChange: n._onPageChange,
                onPageLoaded: n._onPageLoaded,
                onPageLoading: n._onPageLoading,
                onResize: n._onResize,
                pageLoad: n._pageLoad,
                prevIconH: e.prevIconH,
                prevIconV: e.prevIconV,
                prevPageText: e.prevPageText,
                resourcesMap: n._resourcesMap,
                responsiveStyle: !0,
                renderHeader: e.renderHeader,
                renderDayContent: e.renderDayContent,
                renderLabel: e.renderLabel,
                renderLabelContent: e.renderLabelContent,
                selectedDates: n._selectedDates,
                selectView: Rs,
                showCalendar: n._showCalendar,
                showControls: e.showControls,
                showLabelCount: n._showEventCount,
                showOuterDays: n._showOuterDays,
                showSchedule: n._showSchedule || n._showTimeline,
                showToday: e.showToday,
                showWeekNumbers: n._showWeekNumbers,
                size: n._calendarSize,
                startDay: n._rangeStartDay,
                swipe: !t.isTouchDrag,
                upIcon: e.upIcon,
                valid: e.valid,
                weeks: n._calendarSize,
                width: e.width,
                eventText: e.eventText,
                eventsText: e.eventsText,
                fromText: e.fromText,
                moreEventsPluralText: e.moreEventsPluralText,
                moreEventsText: e.moreEventsText,
                todayText: e.todayText,
                toText: e.toText,
                weekText: e.weekText,
                yearSuffix: e.yearSuffix,
            }),
            n._showDate &&
                Hn(
                    "div",
                    { className: "mbsc-schedule-date-header mbsc-flex" + n._theme + n._hb },
                    n._showSchedule && !n._showCalendar && e.resources && Hn("div", { className: "mbsc-schedule-time-col" }),
                    Hn("div", { className: "mbsc-schedule-date-header-text mbsc-flex-1-1" + n._theme }, n._selectedDateHeader),
                    n._showSchedule && !n._showCalendar && e.resources && Hn("div", { className: "mbsc-schedule-fake-scroll-y" })
                ),
            n._showEventList && Hn("div", { className: "mbsc-event-list" + (t.isListScrollable ? " mbsc-event-list-scroll" : ""), dangerouslySetInnerHTML: n._eventListHTML, onScroll: n._onScroll, ref: n._setList }, a),
            n._showSchedule &&
                Hn(
                    xl,
                    s({}, r, {
                        endDay: n._scheduleEndDay,
                        endTime: n._scheduleEndTime,
                        renderDayContent: e.renderDayContent,
                        showAllDay: n._showScheduleAllDay,
                        showDays: n._showScheduleDays,
                        size: n._scheduleSize,
                        startDay: n._scheduleStartDay,
                        startTime: n._scheduleStartTime,
                        timeCellStep: n._scheduleTimeCellStep,
                        timeLabelStep: n._scheduleTimeLabelStep,
                        timezones: n._scheduleTimezones,
                        type: n._scheduleType,
                        onWeekDayClick: n._onWeekDayClick,
                    })
                ),
            n._showTimeline &&
                Hn(
                    Cl,
                    s({}, r, {
                        dragToCreate: !e.slots && e.dragToCreate,
                        dragToResize: !e.slots && e.dragToResize,
                        downIcon: e.chevronIconDown,
                        connections: e.connections,
                        endDay: n._timelineEndDay,
                        endTime: n._timelineEndTime,
                        eventList: n._timelineListing,
                        nextIcon: e.nextIconH,
                        nextIconRtl: e.prevIconH,
                        renderResourceHeader: e.renderResourceHeader,
                        renderSlot: e.renderSlot,
                        resolution: n._timelineResolution,
                        rowHeight: n._timelineRowHeight,
                        weekNumbers: n._showTimelineWeekNumbers,
                        weekText: e.weekText,
                        size: n._timelineSize,
                        slots: e.slots,
                        startDay: n._timelineStartDay,
                        startTime: n._timelineStartTime,
                        timeCellStep: n._timelineTimeCellStep,
                        timeLabelStep: n._timelineTimeLabelStep,
                        type: n._timelineType,
                        virtualScroll: !n._print,
                    })
                ),
            Hn(
                wi,
                {
                    anchor: n._anchor,
                    closeOnScroll: !0,
                    contentPadding: !1,
                    context: e.context,
                    cssClass: "mbsc-calendar-popup " + n._popoverClass,
                    display: "anchored",
                    isOpen: t.showPopover,
                    locale: e.locale,
                    maxHeight: "24em",
                    onClose: n._onPopoverClose,
                    rtl: e.rtl,
                    scrollLock: !1,
                    showOverlay: !1,
                    theme: e.theme,
                    themeVariant: e.themeVariant,
                },
                t.popoverList &&
                    Hn(
                        Wo,
                        { ref: n._setPopoverList, theme: e.theme, themeVariant: e.themeVariant, rtl: e.rtl, className: "mbsc-popover-list" },
                        t.popoverList.map(function (a, s) {
                            return wl(n, a, s, t.popoverDate, e, !0);
                        })
                    )
            ),
            t.labelDragData && t.labelDragData.draggedEvent && !t.isTouchDrag && Hn("div", { className: "mbsc-calendar-dragging" })
        );
    }
    var Ml = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._instanceService = new or()), t;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e, t) {
                    return kl(e, t, this);
                }),
                t
            );
        })(Sl),
        El = {
            before: function (e, t) {
                t.selectedDate && ((t.defaultSelectedDate = t.selectedDate), delete t.selectedDate);
            },
        },
        Nl = ((ri._selector = "[mbsc-calendar-next]"), li),
        Il = ((ii._selector = "[mbsc-calendar-prev]"), ri),
        Ll = ((oi._selector = "[mbsc-calendar-today]"), ii),
        Hl = ((li._selector = "[mbsc-calendar-nav]"), oi),
        Yl = Mo(Il),
        Ol = Mo(Ll),
        Pl = Mo(Hl),
        zl = Mo(Nl);
    var Vl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return e.children || "";
                }),
                t
            );
        })(ul),
        Fl = {
            before: function (e, t) {
                t.element = e;
            },
        },
        Rl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-draggable]"), (t._renderOpt = Fl), t;
        })(Vl),
        Al = Mo(Rl, Fl),
        Wl = Mo(Ml, El),
        Ul = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-button]"), (t._renderOpt = Vs), t;
        })(zs),
        Bl = Mo(Ul, Vs),
        jl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = e.target.checked;
                        n.checked === ie && t.setState({ checked: a }), t._change(a), n.onChange && n.onChange(e);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ss(this._input, {
                        click: !0,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onPress: function () {
                            e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._render = function (e, t) {
                    var n = e.disabled === ie ? t.disabled : fe(e.disabled),
                        a = "start" === e.position ? (e.rtl ? "right" : "left") : e.rtl ? "left" : "right",
                        s = e.modelValue !== ie ? e.modelValue : e.checked;
                    (this._disabled = n),
                        (this._checked = s !== ie ? fe(s) : t.checked === ie ? fe(e.defaultChecked) : t.checked),
                        (this._cssClass = "mbsc-checkbox mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-checkbox-" + a + (n ? " mbsc-disabled" : "")),
                        (this._boxClass =
                            "mbsc-checkbox-box" +
                            this._theme +
                            " mbsc-checkbox-box-" +
                            a +
                            (t.hasFocus && !n ? " mbsc-focus" : "") +
                            (t.isActive && !n ? " mbsc-active" : "") +
                            (e.color ? " mbsc-checkbox-box-" + e.color : "") +
                            (n ? " mbsc-disabled" : "") +
                            (this._checked ? " mbsc-checked" : ""));
                }),
                (t.prototype._destroy = function () {
                    this._unlisten();
                }),
                (t.defaults = { position: "start" }),
                (t._name = "Checkbox"),
                t
            );
        })(Ua);
    var Kl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this.setState({ checked: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a = t.props;
                        a.children, a.className, a.color, a.defaultChecked;
                        var r = a.description,
                            o = a.hasChildren;
                        a.inputStyle;
                        var l = a.label;
                        a.onChange, a.position, a.rtl, a.theme, a.themeVariant;
                        var c = i(a, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return Hn(
                            "label",
                            { className: t._cssClass },
                            Hn("input", s({ type: "checkbox", className: "mbsc-form-control-input mbsc-reset", onChange: t._onChange, disabled: t._disabled, checked: t._checked, ref: t._setInput }, c)),
                            Hn("span", { className: t._boxClass }),
                            (l || o) && Hn("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, l),
                            r && Hn("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, r),
                            n
                        );
                    })(0, this, e.children);
                }),
                t
            );
        })(jl),
        Jl = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        Xl = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-checkbox]"), (t._renderOpt = Jl), t;
        })(Kl),
        Gl = Mo(Xl, Jl),
        ql = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._tag = "select"), t;
            }
            return a(t, e), (t._name = "Dropdown"), t;
        })(Sr),
        Zl = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (t._tag = "textarea"), t;
            }
            return a(t, e), (t._name = "Textarea"), t;
        })(Sr),
        $l = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-input]"), (t._renderOpt = wr), t;
        })(Sr),
        Ql = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-dropdown]"), (t._renderOpt = kr), t;
        })(ql),
        ec = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-textarea]"), (t._renderOpt = Mr), t;
        })(Zl),
        tc = Mo($l, wr),
        nc = Mo(Ql, kr),
        ac = Mo(ec, wr),
        sc = [],
        ic = [],
        rc = m && !!ft.Promise;
    function oc(e, t, n, a, i) {
        return s(
            {
                closeOnOverlayClick: !1,
                context: t.context,
                cssClass: "mbsc-alert",
                display: t.display || "center",
                onClose: function () {
                    e.shift();
                },
                onClosed: function () {
                    cc(t, a, i);
                },
                theme: t.theme,
                themeVariant: t.themeVariant,
            },
            n
        );
    }
    function lc(e, t, n, a) {
        return oc(
            ic,
            e,
            {
                animation: e.animation || (a ? "pop" : ie),
                buttons: [],
                closeOnOverlayClick: !1,
                contentPadding: a,
                cssClass: "mbsc-" + (a ? "toast" : "snackbar") + " mbsc-" + (e.color ? e.color : "color-none") + " " + (e.cssClass || ""),
                display: e.display || "bottom",
                focusOnClose: !1,
                focusOnOpen: !1,
                focusTrap: !1,
                onOpen: function (t, n) {
                    !(function (e, t) {
                        !1 !== e.duration &&
                            setTimeout(function () {
                                t.close();
                            }, e.duration || 3e3);
                    })(e, n);
                },
                scrollLock: !1,
                showOverlay: !1,
                touchUi: !0,
            },
            t,
            n
        );
    }
    function cc(e, t, n, a) {
        n && n(a), e.callback && e.callback(a), e.onClose && e.onClose(a), sc.length ? sc[0].open() : ic.length && ic[0].open(), t && t();
    }
    function dc(e, t, n) {
        return lc(e, t, n, !0);
    }
    function hc(e, t, n) {
        return lc(e, t, n, !1);
    }
    function uc(e, t, n) {
        return oc(sc, e, { buttons: ["ok"], cssClass: "mbsc-alert " + (e.cssClass || ""), okText: e.okText || "OK" }, t, n);
    }
    function mc(e, t, n) {
        var a = !1;
        return oc(
            sc,
            e,
            {
                buttons: ["cancel", "ok"],
                cancelText: e.cancelText || "Cancel",
                cssClass: "mbsc-confirm " + (e.cssClass || ""),
                okText: e.okText || "OK",
                onButtonClick: function (e) {
                    "ok" === e.button.name && (a = !0);
                },
                onClosed: function () {
                    cc(e, t, n, a);
                },
            },
            t,
            n
        );
    }
    function _c(e, t, n, a) {
        var s;
        return oc(
            sc,
            e,
            {
                activeElm: "input",
                buttons: ["cancel", "ok"],
                cancelText: e.cancelText || "Cancel",
                cssClass: "mbsc-prompt " + (e.cssClass || ""),
                okText: e.okText || "OK",
                onButtonClick: function (e) {
                    "ok" === e.button.name && (s = !0);
                },
                onClosed: function () {
                    cc(e, t, n, s && a ? a() : null);
                },
            },
            t,
            n
        );
    }
    function pc(e) {
        sc.length || e.open(), sc.push(e);
    }
    function vc(e) {
        var t = ic[0];
        ic.push(e), sc.length || (t ? t.close() : e.open());
    }
    function fc(e, t) {
        var n;
        return (
            rc
                ? (n = new Promise(function (n) {
                      e(t, n);
                  }))
                : e(t, be),
            n
        );
    }
    function gc(e) {
        return Hn("div", { className: "mbsc-alert-content" }, e.title && Hn("h2", { className: "mbsc-alert-title" }, e.title), Hn("p", { className: "mbsc-alert-message" }, " ", e.message || "", " "));
    }
    function yc(e, t) {
        return Hn(
            "div",
            { className: "mbsc-alert-content" },
            e.title && Hn("h2", { className: "mbsc-alert-title" }, e.title),
            Hn("p", { className: "mbsc-alert-message" }, " ", e.message || ""),
            Hn(Sr, { className: "mbsc-prompt-input", label: e.label, onChange: t, placeholder: e.placeholder || "", type: e.inputType, theme: e.theme, themeVariant: e.themeVariant, defaultValue: e.value })
        );
    }
    function bc(e) {
        return Hn("div", { className: "mbsc-toast-background mbsc-toast-message" }, e.message || "");
    }
    function xc(e, t) {
        return Hn(
            "div",
            { className: "mbsc-toast-background mbsc-snackbar-cont" },
            Hn("div", { className: "mbsc-snackbar-message" }, e.message || ""),
            e.button && Hn(zs, { className: "mbsc-snackbar-button", icon: e.button.icon, onClick: t, theme: e.theme, themeVariant: e.themeVariant, variant: "flat" }, e.button.text)
        );
    }
    function Tc(e, t, n, a, i, r, o) {
        if (vt) {
            var l = vt.createElement("div"),
                c = n(
                    t,
                    function () {
                        setTimeout(function () {
                            var e;
                            (e = l)._children && Mn(null, e);
                        });
                    },
                    i,
                    o
                );
            Mn(
                Hn(
                    wi,
                    s(
                        {
                            onInit: function (e, t) {
                                r && r(t), a(t);
                            },
                        },
                        c
                    ),
                    e
                ),
                l
            );
        }
    }
    function Dc(e, t) {
        Tc(bc(e), e, dc, vc, t);
    }
    function Cc(e, t) {
        var n;
        Tc(
            xc(e, function () {
                n && (n.close(), e.button && e.button.action && e.button.action());
            }),
            e,
            hc,
            vc,
            t,
            function (e) {
                n = e;
            }
        );
    }
    function Sc(e, t) {
        Tc(gc(e), e, uc, pc, t);
    }
    function wc(e, t) {
        Tc(gc(e), e, mc, pc, t);
    }
    function kc(e, t) {
        var n = e.value || "";
        Tc(
            yc(e, function (e) {
                n = e.target.value;
            }),
            e,
            _c,
            pc,
            t,
            ie,
            function () {
                return n;
            }
        );
    }
    var Mc = (function (e) {
        function t() {
            return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
            a(t, e),
            (t.prototype._render = function (e) {
                this._cssClass = "mbsc-page mbsc-font " + this._className + this._theme + this._rtl;
            }),
            (t.defaults = {}),
            (t._name = "Page"),
            t
        );
    })(Ua);
    var Ec = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        return Hn(e.tag || "div", { className: t._cssClass, ref: t._setEl }, n);
                    })(e, this, e.children);
                }),
                t
            );
        })(Mc),
        Nc = {
            hasChildren: !0,
            parentClass: "mbsc-page",
            before: function (e, t) {
                t.tag = e.nodeName.toLowerCase();
            },
        },
        Ic = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-page]"), (t._renderOpt = Nc), t;
        })(Ec),
        Lc = Mo(Ic, Nc),
        Hc = 1,
        Yc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._id = "mbsc-radio-" + Hc++),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = e.target.checked;
                        t._change(a), t._onGroupChange && t._onGroupChange(e, t._value), t._toggle(a), n.onChange && n.onChange(e);
                    }),
                    (t._onValueChange = function (e) {
                        var n = t.s,
                            a = e === t._value;
                        n.checked === ie && t.setState({ checked: a }), t._change(a);
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._groupOptions = function (e) {
                    var t = e.color,
                        n = e.disabled,
                        a = e.name,
                        s = e.onChange,
                        i = e.position,
                        r = e.rtl,
                        o = e.value,
                        l = this.s,
                        c = this.state,
                        d = r === ie ? l.rtl : r,
                        h = t === ie ? l.color : t,
                        u = "start" === (i === ie ? l.position : i) ? (l.rtl ? "right" : "left") : l.rtl ? "left" : "right",
                        m = n === ie ? (l.disabled === ie ? c.disabled : fe(l.disabled)) : fe(n),
                        _ = l.modelValue !== ie ? l.modelValue === l.value : l.checked,
                        p = _ !== ie ? fe(_) : c.checked === ie ? fe(l.defaultChecked) : c.checked;
                    (this._value = l.value === ie ? this._id : l.value),
                        (this._onGroupChange = s),
                        (this._name = a === ie ? l.name : a),
                        (this._rtl = d ? " mbsc-rtl" : " mbsc-ltr"),
                        (this._checked = o === ie ? p : o === this._value),
                        (this._disabled = m),
                        (this._cssClass = "mbsc-radio mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-radio-" + u + (m ? " mbsc-disabled" : "")),
                        (this._boxClass =
                            "mbsc-radio-box" +
                            this._theme +
                            " mbsc-radio-box-" +
                            u +
                            (c.hasFocus && !m ? " mbsc-focus" : "") +
                            (c.isActive && !m ? " mbsc-active" : "") +
                            (h ? " mbsc-radio-box-" + h : "") +
                            (m ? " mbsc-disabled" : "") +
                            (this._checked ? " mbsc-checked" : ""));
                }),
                (t.prototype._mounted = function () {
                    var e = this;
                    this._unlisten = Ss(this._input, {
                        click: !0,
                        onBlur: function () {
                            e.setState({ hasFocus: !1 });
                        },
                        onFocus: function () {
                            e.setState({ hasFocus: !0 });
                        },
                        onPress: function () {
                            e.setState({ isActive: !0 });
                        },
                        onRelease: function () {
                            e.setState({ isActive: !1 });
                        },
                    });
                }),
                (t.prototype._toggle = function (e) {
                    this.s.checked === ie && this.setState({ checked: e }), e && Zr(this._name, this._value);
                }),
                (t.prototype._updated = function () {
                    this._name && !this._unsubscribe && (this._unsubscribe = Gr(this._name, this._onValueChange));
                }),
                (t.prototype._destroy = function () {
                    qr(this._name, this._unsubscribe), this._unlisten();
                }),
                (t.defaults = { position: "start" }),
                (t._name = "Radio"),
                t
            );
        })(Ua);
    var Oc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this._toggle(e);
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e, t) {
                    var n = this;
                    return Hn(Jr.Consumer, null, function (t) {
                        return (function (e, t, n, a) {
                            var r = t.props;
                            r.children, r.className, r.color, r.defaultChecked;
                            var o = r.description,
                                l = r.hasChildren,
                                c = r.label;
                            r.onChange, r.position, r.rtl, r.theme, r.themeVariant;
                            var d = i(r, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                            return (
                                t._groupOptions(a),
                                Hn(
                                    "label",
                                    { className: t._cssClass },
                                    Hn("input", s({ checked: t._checked, className: "mbsc-form-control-input mbsc-reset", disabled: t._disabled, name: t._name, onChange: t._onChange, type: "radio", value: t._value, ref: t._setInput }, d)),
                                    Hn("span", { className: t._boxClass }),
                                    (c || l) && Hn("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, c),
                                    o && Hn("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, o),
                                    n
                                )
                            );
                        })(0, n, e.children, t);
                    });
                }),
                t
            );
        })(Yc),
        Pc = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readAttrs: ["value"],
            readProps: ["disabled", "name"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        zc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-radio]"), (t._renderOpt = Pc), t;
        })(Oc),
        Vc = Mo(zc, Pc),
        Fc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-segmented]"), (t._renderOpt = io), t;
        })(so),
        Rc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-segmented-group]"), (t._renderOpt = ro), t;
        })(to),
        Ac = Mo(Fc, io),
        Wc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = t._round(+e.target.value);
                        (e.target.value = a + ""), n.value === ie && t.setState({ value: a }), t._change(a), n.onChange && n.onChange(e);
                    }),
                    (t._onMinusClick = function () {
                        t._setValue(t._value - t._step);
                    }),
                    (t._onPlusClick = function () {
                        t._setValue(t._value + t._step);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._onLabelClick = function (e) {
                        e.preventDefault();
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._mounted = function () {
                    Ot(this._input, qa, this._onChange);
                }),
                (t.prototype._render = function (e, t) {
                    (this._max = _e(e.max) ? 100 : +e.max), (this._min = _e(e.min) ? 0 : +e.min), (this._step = _e(e.step) ? 1 : +e.step);
                    var n = e.disabled === ie ? t.disabled : fe(e.disabled),
                        a = e.defaultValue !== ie ? e.defaultValue : this._min || 0,
                        s = e.modelValue !== ie ? e.modelValue : e.value,
                        i = s !== ie ? s : t.value !== ie ? t.value : a;
                    (this._value = this._round(i)),
                        (this._changed = this._value !== +i),
                        (this._disabled = n),
                        (this._disabledMinus = this._value === this._min || n),
                        (this._disabledPlus = this._value === this._max || n),
                        (this._cssClass = "mbsc-stepper mbsc-form-control-wrapper mbsc-font mbsc-" + (e.color || "color-none") + this._theme + this._rtl + this._hb + " mbsc-stepper-" + e.inputPosition + (n ? " mbsc-disabled" : ""));
                }),
                (t.prototype._updated = function () {
                    (this._input.value = this._value + ""), this._changed && (Gt(this._input, qa), (this._changed = !1));
                }),
                (t.prototype._destroy = function () {
                    Pt(this._input, qa, this._onChange);
                }),
                (t.prototype._round = function (e) {
                    var t = this._step,
                        n = Math.abs(t) < 1 ? (t + "").split(".")[1].length : 0;
                    return +Math.min(this._max, Math.max(Math.round(e / t) * t, this._min)).toFixed(n);
                }),
                (t.prototype._setValue = function (e) {
                    var t = +this._input.value,
                        n = this._round(e);
                    t !== n && ((this._input.value = n + ""), Gt(this._input, qa));
                }),
                (t.defaults = { inputPosition: "center" }),
                (t._name = "Stepper"),
                t
            );
        })(Ua);
    var Uc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                Object.defineProperty(t.prototype, "value", {
                    get: function () {
                        return this._value;
                    },
                    set: function (e) {
                        (this._value = e), this.setState({ value: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t) {
                        var n = t.props;
                        n.children, n.className, n.color, n.defaultValue;
                        var a = n.description;
                        n.inputClass, n.inputPosition;
                        var r = n.label;
                        n.onChange, n.rtl, n.theme, n.themeVariant, n.value;
                        var o = i(n, ["children", "className", "color", "defaultValue", "description", "inputClass", "inputPosition", "label", "onChange", "rtl", "theme", "themeVariant", "value"]),
                            l = t._theme;
                        return Hn(
                            "label",
                            { className: t._cssClass, onClick: t._onLabelClick },
                            Hn(
                                "div",
                                { className: "mbsc-stepper-content" },
                                r && Hn("span", { className: "mbsc-stepper-label" + l + (t._disabled ? " mbsc-disabled" : "") }, r),
                                a && Hn("span", { className: "mbsc-description" + l + (t._disabled ? " mbsc-disabled" : "") }, a)
                            ),
                            Hn(
                                "div",
                                { className: "mbsc-stepper-control" + l + t._rtl },
                                Hn(
                                    zs,
                                    { className: "mbsc-stepper-minus mbsc-stepper-button", disabled: t._disabledMinus, onClick: t._onMinusClick, theme: e.theme, themeVariant: e.themeVariant },
                                    Hn("span", { className: "mbsc-stepper-inner" + l }, "–")
                                ),
                                Hn(
                                    "input",
                                    s(
                                        {
                                            className: "mbsc-stepper-input" + (t._disabled ? " mbsc-disabled" : "") + " " + (e.inputClass || "") + l,
                                            disabled: t._disabled,
                                            max: t._max,
                                            min: t._min,
                                            ref: t._setInput,
                                            step: t._step,
                                            type: "number",
                                        },
                                        o
                                    )
                                ),
                                Hn(
                                    zs,
                                    { className: "mbsc-stepper-plus mbsc-stepper-button", disabled: t._disabledPlus, onClick: t._onPlusClick, theme: e.theme, themeVariant: e.themeVariant },
                                    Hn("span", { className: "mbsc-stepper-inner" + l }, "+")
                                )
                            )
                        );
                    })(e, this);
                }),
                t
            );
        })(Wc),
        Bc = {
            readProps: ["disabled", "type", "min", "max", "step"],
            renderToParent: !0,
            before: function (e, t) {
                var n = e.parentNode,
                    a = vt.createElement("div");
                n.insertBefore(a, e), a.appendChild(e), (t.defaultValue = +e.value), (t.inputClass = e.getAttribute("class") || "");
                var s = vt.createElement("div");
                n.insertBefore(s, a);
            },
        },
        jc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-stepper]"), (t._renderOpt = Bc), t;
        })(Uc),
        Kc = Mo(jc, Bc),
        Jc = (function (e) {
            function t() {
                var t = (null !== e && e.apply(this, arguments)) || this;
                return (
                    (t._onChange = function (e) {
                        var n = t.s,
                            a = e.target.checked;
                        e.stopPropagation(), n.checked === ie && t.setState({ checked: a }), t._change(a), n.onChange && n.onChange(e);
                    }),
                    (t._setInput = function (e) {
                        t._input = e;
                    }),
                    (t._setHandleCont = function (e) {
                        t._handleCont = e;
                    }),
                    (t._setHandle = function (e) {
                        t._handle = e;
                    }),
                    (t._onLabelClick = function (e) {
                        e.preventDefault();
                    }),
                    t
                );
            }
            return (
                a(t, e),
                (t.prototype._change = function (e) {}),
                (t.prototype._setHandleLeft = function (e) {
                    this._handle.style.left = e + "%";
                }),
                (t.prototype._mounted = function () {
                    var e,
                        t,
                        n,
                        a,
                        s,
                        i = this;
                    Ot(this._input, Za, this._onChange),
                        (this._inputUnlisten = Ss(this._input, {
                            onBlur: function () {
                                i.setState({ hasFocus: !1 });
                            },
                            onFocus: function () {
                                i._disabled || i.setState({ hasFocus: !0 });
                            },
                        })),
                        (this._unlisten = Ss(this._el, {
                            click: !1,
                            onEnd: function (e) {
                                if (!i._disabled && !s) {
                                    if (a) {
                                        var t = Math.abs(e.deltaX) < 3 && Math.abs(e.deltaY) < 3,
                                            r = +new Date() - n > 300,
                                            o = t && !r ? !i._checked : i._handleLeft >= 50;
                                        o !== i._checked && (i._input.click(), i._change(o)), (a = !1);
                                    }
                                    i.setState({ dragging: !1, isActive: !1 });
                                }
                            },
                            onMove: function (n) {
                                var r = n.domEvent,
                                    o = i.state.dragging;
                                if (!i._disabled && !s && a && e && (Math.abs(n.deltaX) > 5 && ((o = !0), i.setState({ dragging: !0 })), o)) {
                                    r.cancelable && r.preventDefault();
                                    var l = ((n.startX - t) / e) * 100,
                                        c = Math.max(Math.min(l, 100), 0) + (n.deltaX / e) * 100,
                                        d = Math.max(Math.min(c, 100), 0);
                                    (i._handleLeft = d), i._setHandleLeft(d);
                                }
                                !o && !s && Math.abs(n.deltaY) > 7 && r.type === ms && ((s = !0), i.setState({ isActive: !1 }));
                            },
                            onStart: function (r) {
                                i._disabled ||
                                    ((s = !1),
                                    (e = i._handleCont.clientWidth),
                                    (t = Kt(i._handleCont).left),
                                    (n = +new Date()),
                                    (r.domEvent.target === i._handleCont || i._handleCont.contains(r.domEvent.target)) && (a = !0),
                                    i.setState({ isActive: !0 }));
                            },
                        })),
                        this._setHandleLeft(this._handleLeft);
                }),
                (t.prototype._render = function (e, t) {
                    var n = e.disabled === ie ? t.disabled : fe(e.disabled),
                        a = "start" === e.position ? (e.rtl ? "right" : "left") : e.rtl ? "left" : "right",
                        s = e.color !== ie ? " mbsc-switch-" + e.color : "",
                        i = e.modelValue !== ie ? e.modelValue : e.checked;
                    if (
                        ((this._disabled = n),
                        (this._checked = i !== ie ? fe(i) : t.checked === ie ? fe(e.defaultChecked) : t.checked),
                        (this._cssClass = "mbsc-switch mbsc-form-control-wrapper mbsc-font " + this._className + this._theme + this._rtl + this._hb + " mbsc-switch-" + a + (n ? " mbsc-disabled" : "")),
                        !t.dragging)
                    ) {
                        var r = this._checked ? 100 : 0;
                        r !== this._handleLeft && this._handle && this._setHandleLeft(r), (this._handleLeft = r);
                    }
                    (this._handleContClass =
                        "mbsc-switch-track mbsc-switch-track-" + a + this._theme + s + (this._checked ? " mbsc-checked" : "") + (n ? " mbsc-disabled" : "") + (t.hasFocus ? " mbsc-focus" : "") + (t.isActive ? " mbsc-active" : "")),
                        (this._handleClass =
                            "mbsc-switch-handle" +
                            this._theme +
                            s +
                            (t.dragging ? "" : " mbsc-switch-handle-animate") +
                            (this._checked ? " mbsc-checked" : "") +
                            (this.state.isActive ? " mbsc-active" : "") +
                            (n ? " mbsc-disabled" : "") +
                            (this.state.hasFocus ? " mbsc-focus" : ""));
                }),
                (t.prototype._destroy = function () {
                    this._unlisten(), this._inputUnlisten(), Pt(this._input, Za, this._onChange);
                }),
                (t.defaults = { position: "end" }),
                (t._name = "Switch"),
                t
            );
        })(Ua);
    var Xc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return (
                a(t, e),
                Object.defineProperty(t.prototype, "checked", {
                    get: function () {
                        return this._checked;
                    },
                    set: function (e) {
                        (this._checked = e), this.setState({ checked: e });
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype._template = function (e) {
                    return (function (e, t, n) {
                        var a = t.props;
                        a.children, a.className, a.color, a.defaultChecked;
                        var r = a.description,
                            o = a.hasChildren;
                        a.inputStyle;
                        var l = a.label;
                        a.onChange, a.position, a.rtl, a.theme, a.themeVariant;
                        var c = i(a, ["children", "className", "color", "defaultChecked", "description", "hasChildren", "inputStyle", "label", "onChange", "position", "rtl", "theme", "themeVariant"]);
                        return Hn(
                            "label",
                            { className: t._cssClass, ref: t._setEl, onClick: t._onLabelClick },
                            Hn("input", s({ type: "checkbox", className: "mbsc-form-control-input mbsc-reset", onChange: be, disabled: t._disabled, checked: t._checked, ref: t._setInput }, c)),
                            Hn("span", { className: t._handleContClass, ref: t._setHandleCont }, Hn("span", { className: t._handleClass, ref: t._setHandle })),
                            (l || o) && Hn("span", { className: "mbsc-form-control-label" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, l),
                            r && Hn("span", { className: "mbsc-description" + t._theme + (t._disabled ? " mbsc-disabled" : "") }, r),
                            n
                        );
                    })(0, this, e.children);
                }),
                t
            );
        })(Jc),
        Gc = {
            hasChildren: !0,
            parentClass: "mbsc-form-control-label",
            readProps: ["disabled"],
            renderToParent: !0,
            before: function (e, t) {
                t.defaultChecked = e.checked;
            },
        },
        qc = (function (e) {
            function t() {
                return (null !== e && e.apply(this, arguments)) || this;
            }
            return a(t, e), (t._selector = "[mbsc-switch]"), (t._renderOpt = Gc), t;
        })(Xc),
        Zc = Mo(qc, Gc),
        $c = Mo(wi, ki);
    Vn(Ul),
        Vn(Xl),
        Vn($l),
        Vn(Ql),
        Vn(Rl),
        Vn(ec),
        Vn(Ic),
        Vn(zc),
        Vn(Fc),
        Vn(Rc),
        Vn(jc),
        Vn(qc),
        Vn(Il),
        Vn(Ll),
        Vn(Hl),
        Vn(Nl),
        (t.fw = "javascript"),
        (e.Button = Ul),
        (e.CalendarNav = Nl),
        (e.CalendarNext = Il),
        (e.CalendarPrev = Ll),
        (e.CalendarToday = Hl),
        (e.Checkbox = Xl),
        (e.Datepicker = So),
        (e.Draggable = Rl),
        (e.Dropdown = Ql),
        (e.Eventcalendar = Ml),
        (e.Input = $l),
        (e.Page = Ic),
        (e.Popup = wi),
        (e.Radio = zc),
        (e.Segmented = Fc),
        (e.SegmentedGroup = Rc),
        (e.Select = Vo),
        (e.Stepper = jc),
        (e.Switch = qc),
        (e.Textarea = ec),
        (e.alert = function (e) {
            return fc(Sc, e);
        }),
        (e.autoDetect = D),
        (e.button = Bl),
        (e.calendarNav = zl),
        (e.calendarNext = Yl),
        (e.calendarPrev = Ol),
        (e.calendarToday = Pl),
        (e.checkbox = Gl),
        (e.confirm = function (e) {
            return fc(wc, e);
        }),
        (e.createCustomTheme = w),
        (e.datepicker = Lo),
        (e.draggable = Al),
        (e.dropdown = nc),
        (e.enhance = Fn),
        (e.eventcalendar = Wl),
        (e.formSwitch = Zc),
        (e.formatDate = ga),
        (e.getAlertContent = gc),
        (e.getAutoTheme = S),
        (e.getInst = function (e, t) {
            return t ? e.__mbscFormInst : e.__mbscInst;
        }),
        (e.getJson = No),
        (e.getPromptContent = yc),
        (e.getSnackbarContent = xc),
        (e.getToastContent = bc),
        (e.globalChanges = C),
        (e.hijriCalendar = mt),
        (e.input = tc),
        (e.jalaliCalendar = ze),
        (e.locale = pt),
        (e.localeAr = q),
        (e.localeBg = Z),
        (e.localeCa = $),
        (e.localeCs = Q),
        (e.localeDa = ee),
        (e.localeDe = te),
        (e.localeEl = ne),
        (e.localeEn = _t),
        (e.localeEnGB = ae),
        (e.localeEs = se),
        (e.localeFa = Ve),
        (e.localeFi = Fe),
        (e.localeFr = Re),
        (e.localeHe = Ae),
        (e.localeHi = We),
        (e.localeHr = Ue),
        (e.localeHu = Be),
        (e.localeIt = je),
        (e.localeJa = Ke),
        (e.localeKo = Je),
        (e.localeLt = Xe),
        (e.localeNl = Ge),
        (e.localeNo = qe),
        (e.localePl = Ze),
        (e.localePtBR = Qe),
        (e.localePtPT = $e),
        (e.localeRo = et),
        (e.localeRu = tt),
        (e.localeRuUA = nt),
        (e.localeSk = at),
        (e.localeSr = st),
        (e.localeSv = it),
        (e.localeTh = rt),
        (e.localeTr = ot),
        (e.localeUa = lt),
        (e.localeVi = ct),
        (e.localeZh = dt),
        (e.luxonTimezone = _o),
        (e.momentTimezone = fo),
        (e.options = b),
        (e.page = Lc),
        (e.parseDate = ba),
        (e.platform = k),
        (e.popup = $c),
        (e.prompt = function (e) {
            return fc(kc, e);
        }),
        (e.radio = Vc),
        (e.registerComponent = Vn),
        (e.remote = t),
        (e.segmented = Ac),
        (e.select = Ro),
        (e.setOptions = function (e) {
            for (var t in e) e.hasOwnProperty(t) && (b[t] = e[t]);
            C.next(b);
        }),
        (e.snackbar = function (e) {
            return fc(Cc, e);
        }),
        (e.stepper = Kc),
        (e.textarea = ac),
        (e.themes = T),
        (e.toast = function (e) {
            return fc(Dc, e);
        }),
        (e.updateRecurringEvent = function (e, t, n, a, i, r, o) {
            var l = s({}, e),
                c = null,
                d = n && n.start,
                h = n && n.end,
                u = t && t.start,
                m = Bi(e.recurring);
            switch (i) {
                case "following":
                    var _ = void 0;
                    if ((a ? (a.recurring && (_ = Bi(a.recurring)), delete (c = a).id) : d && u && ((_ = ji(m, d, u)), (c = s({}, n))), (m.until = na(va(u))), m.count)) {
                        var p = (t && t.nr) || 0;
                        _ && (_.count = m.count - p), (m.count = p);
                    }
                    d && _ && (_.from = d), c && _ && (c.recurring = _), (l.recurring = m);
                    break;
                case "all":
                    if ((a ? ((d = a.start), (h = a.end), (l = a)) : n && d && h && u && ((l.allDay = n.allDay), (l.recurring = ji(m, d, u))), d && h)) {
                        var v = r && o ? { displayTimezone: r, timezonePlugin: o } : ie,
                            f = l.allDay ? ie : v,
                            g = e.allDay ? ie : v,
                            y = va(d, f),
                            b = va(h, f),
                            x = e.start,
                            T = e.end,
                            D = e.allDay && !l.allDay,
                            C = x && va(x, g),
                            S = u && va(u, g),
                            w = b - y,
                            k = C && S ? pa(f, +C + (S ? y - S : 0)) : y,
                            M = pa(f, +k + w);
                        ua(x) || (!x && D) ? (l.start = ga("HH:mm", y)) : x && (l.start = f ? k.toISOString() : k), ua(T) || (!T && D) ? (l.end = ga("HH:mm", b)) : T && (l.end = f ? M.toISOString() : M);
                    }
                    break;
                default:
                    var E = e.recurringException,
                        N = de(E) ? E.slice() : E ? [E] : [];
                    u && N.push(u), (l.recurringException = N), (c = a || n);
            }
            return { updatedEvent: l, newEvent: c };
        }),
        (e.util = x),
        Object.defineProperty(e, "__esModule", { value: !0 });
});
