new SC_StubQP('Neweggcomcn_s');

function SC_StubQP(n) {
    var t = this,
        w = t.w = window;
    t.d = w.document;
    t._c = 's_t';
    if (!w.s_c_il) { w.s_c_il = [];
        w.s_c_in = 0 }
    t._il = w.s_c_il;
    t._in = w.s_c_in;
    t._il[t._in] = t;
    w.s_c_in++;
    t.tcn = t.l = 0;
    t.stc = function(n) {
        var t =
            this,
            l = t.w.s_c_il,
            i, x;
        t.tcn = n;
        if (l)
            for (i = 0; i < l.length; i++) { x = l[i];
                if (x && x._c == 's_l' && x.tagContainerName == n) t.l = x }
    };
    t.stc(n);
    t.xd = function(s) {
        var t = this,
            x = 0;
        if (
            t.d.implementation && t.d.implementation.createDocument) x = (new DOMParser).parseFromString(s, 'text/xml');
        else if (t.w.ActiveXObject) { x = new ActiveXObject('Microsoft.XMLDOM');
            x.async = 'false';
            x.loadXML(s) }
        return x
    };
    t.xe = function(x, t) {
        var a, b = [],
            i, j;
        for (i = 0; i < 2; i++) {
            if (i > 0) t = t.toLowerCase();
            a = x.getElementsByTagName(t);
            if (a)
                for (j = 0; j < a.length; j++) b[b.length] = a[j] }
        return b };
    t.xt = function(x) {
        var t = this,
            b =
            "",
            l, i;
        l = x.childNodes;
        if (l)
            for (i = 0; i < l.length; i++) b += t.xt(l[i]);
        if (x.data) b += x.data;
        return b
    };
    t.cp = function(x) {
        var t = this,
            tn = Math.floor((new Date).getTime() / 1000),
            ts = x.s,
            te = x.e,
            tp = 1,
            l = t.d.location,
            h =
            l.hostname,
            hm = x.h,
            hp = 1,
            p = l.pathname,
            pm = x.p,
            pp = 1,
            q = l.search,
            qm = x.q,
            qp = 1,
            qi, qv, c = t.d.cookie,
            cm = x.c,
            cp = 1,
            ci, cv, i;
        if (ts) tp = (tn >= ts && (!te || tn <= te));
        if (hm) {
            hp = 0;
            if (h) {
                i = 0;
                while (!hp && i < hm.length) {
                    if (
                        h.indexOf(hm[i]) >= 0) hp = 1;
                    i++
                }
            }
        }
        if (pm) { pp = 0;
            if (p) { i = 0;
                while (!pp && i < pm.length) {
                    if (p.indexOf(pm[i]) >= 0) pp = 1;
                    i++ } } }
        if (qm) {
            qp = 0;
            if (q) {
                if (q.substring(0, 1) == '?') q = q.substring(1);
                q = '&' + q + '&';
                i = 0;
                while (!qp && i < qm.length) {
                    qi = q.indexOf('&' + qm[i].k + '=');
                    if (!qm[i].v && qi < 0) qi = q.indexOf('&' + qm[i].k + '&');
                    if (qi >= 0)
                        if (qm[i].v) {
                            qv = q.substring(qi + qm[i].k.length + 2);
                            qi = qv.indexOf('&');
                            if (qi >= 0) {
                                qv = unescape(
                                    qv.substring(0, qi));
                                if (qv == qm[i].v) qp = 1
                            }
                        } else qp = 1;
                    i++
                }
            }
        }
        if (cm) {
            cp = 0;
            if (c) {
                c = ';' + c + ';';
                c = c.split('; ').join(';');
                i = 0;
                while (!cp && i < cm.length) {
                    ci = c.indexOf(';' + cm[i].k + '=');
                    if (!cm[i].v && ci < 0) ci =
                        c.indexOf(';' + cm[i].k + ';');
                    if (ci >= 0)
                        if (cm[i].v) { cv = c.substring(ci + cm[i].k.length + 2);
                            ci = cv.indexOf(';');
                            if (ci >= 0) { cv = unescape(cv.substring(0, ci));
                                if (cv == cm[i].v) cp = 1 } } else cp = 1;
                    i++
                }
            }
        }
        return (
            tp && hp && pp && qp && cp)
    };
    t.cl = [];
    t.cn = t.cpn = 0;
    t.crt = 0;
    t.bl = [];
    t.crl = function(cn, cpn) {
        var t = this;
        if (cn == t.cn && cpn == t.cpn) t.cr() };
    t.cr = function() {
        var t = this,
            d = t.d,
            b, c, p, n = 1,
            o, u, x, y, l, i;
        if (t.cl.length > 0) {
            if (!d.body) {
                if (!t.crt) t.crt = setTimeout(function() { t.crt = 0;
                    t.cr() }, 13) } else {
                b = d.body;
                while (n && t.cn < t.cl.length) {
                    c = t.cl[t.cn];
                    if (t.cdwb) {
                        u = t.cdwb;
                        t.cdwb = 0;
                        u = '<div>' + u.replace(/&/g, '&amp;').replace(
                            /<img /gi, '<IMG ').replace(/<\/img>/gi, '</IMG>').replace(/<script /gi, '<SCRIPT ').replace(/<script>/gi, '<SCRIPT>').replace(/<\/script>/gi, '</SCRIPT>').replace(/<iframe /gi, '<IFRAME ').replace(
                            /<\/iframe>/gi, '</IFRAME>') + '</div>';
                        x = t.xd(u);
                        l = t.xe(x, 'IMG');
                        for (i = 0; i < l.length; i++) { u = l[i].getAttribute('src');
                            if (u) c.p.splice(t.cpn, 0, { t: 'i', u: u }) }
                        l = t.xe(x, 'SCRIPT');
                        for (i = 0; i < l.length; i++) {
                            u = l[i]
                                .getAttribute('src');
                            if (u) c.p.splice(t.cpn, 0, { t: 's', u: u });
                            else { u = t.xt(l[i]);
                                if (u) c.p.splice(t.cpn, 0, { t: 'c', c: u }) }
                        }
                        l = t.xe(x, 'IFRAME');
                        for (i = 0; i < l.length; i++) {
                            u = l[i].getAttribute('src');
                            if (u) c.p.splice(
                                t.cpn, 0, { t: 'f', u: u })
                        }
                    }
                    if ((t.cpn > 0 || !c.x || t.cp(c.x)) && c.p && t.cpn < c.p.length) {
                        p = c.p[t.cpn];
                        if (p.t == 'b' && p.u) {
                            u = p.u;
                            o = new Image;
                            t.bl[t.bl.length] = o;
                            o.onload = function() {
                                var i;
                                for (i = 0; i < t.bl.length; i++)
                                    if (
                                        t.bl[i] && t.bl[i].src == u) { t.bl.splice(i, 1);
                                        return }
                            };
                            o.src = u
                        }
                        if ((p.t == 's' && p.u) || (p.t == 'c' && p.c)) {
                            n = 0;
                            t.cpn++;
                            u = p.u;
                            o = d.createElement('script');
                            o.type = 'text/javascript';
                            o.setAttribute('async', 'async')
                            x = 's_c_il[' + t._in + ']';
                            y = x + '.crl(' + t.cn + ',' + t.cpn + ')';
                            if (p.t == 's') {
                                o.n = new Function(y);
                                o.t = 0;
                                o.i = setInterval(function() {
                                    if (o.readyState == 'loaded') o.t++;
                                    if (o.readyState == 'complete' || o.t > 2) { o.c();
                                        o.n() } }, 50);
                                o.c = function() {
                                    if (o.i) { clearInterval(o.i);
                                        o.i = 0 } };
                                o.onreadystatechange = function() {
                                    if (o.readyState == 'complete') { o.c();
                                        o.n() } };
                                o.onload = function() { o.c();
                                    o.n() };
                                o.src = u
                            } else o.text = x + '.cdw=' + x +
                                '.d.write;' + x + '.cdwb="";' + x + '.d.write=function(m){' + x + '.cdwb+=m};' + "\n" + p.c + "\n" + x + '.d.write=' + x + '.cdw;' + y;
                            x = b;
                            l = d.getElementsByTagName('HEAD');
                            if (l && l[0]) x = l[0];
                            if (x.firstChild) x.insertBefore(o,
                                x.firstChild);
                            else x.appendChild(o)
                        }
                        if (p.t == 'f' && p.u) {
                            u = p.u;
                            o = d.createElement('IFRAME');
                            o.setAttribute('style', 'display:none');
                            o.setAttribute('width', '0');
                            o.setAttribute('height', '0');
                            o.setAttribute(
                                'src', u);
                            b.appendChild(o)
                        }
                        if (n) t.cpn++
                    } else { t.cn++;
                        t.cpn = 0 }
                }
                if (n && t.l) {
                    for (x in t.l.wl)
                        if (!Object.prototype[x]) {
                            u = t.w[x];
                            x = t.l.wl[x];
                            if (u && x)
                                for (i in x)
                                    if (!Object.prototype[i]) {
                                        if (typeof(x[i]) !=
                                            'function' || ('' + x[i]).indexOf('s_c_il') < 0) u[i] = x[i]
                                    }
                        }
                    for (i = 0; i < t.l.wq.length; i++) {
                        c = t.l.wq[i];
                        u = c.f;
                        if (u)
                            if (c.o) x = t.w[c.o];
                            else x = t.w;
                        if (x[u] && typeof(x[u]) == 'function' && ('' + x[u]).indexOf('s_c_il') < 0) {
                            if (c.a) x[u].apply(x, c.a);
                            else x[u].apply(x)
                        }
                    }
                }
            }
        }
    };
}

/* SiteCatalyst code version: H.26.1.
Copyright 1996-2013 Adobe, Inc. All Rights Reserved
More info available at http://www.omniture.com */
//retail fundamentals s_code as of 2012-01-25
//Specify the Report Suite ID(s) to track here
var __neg_om_local_debug = false;

function __om_acccount() {
    if (/(newegg\d\.cn)|(:)/i.test(window.location.host)) {
        __neg_om_local_debug = true;
        return 'neweggchinadev';
    }

    var c = document.cookie;
    if (c.indexOf(' s_tagEnv=dev') != -1 || c.indexOf(' s_tagEnv=stage') != -1) {
        return "neweggchinadev";
    } else {
        return "neweggchinaprod";
    }
}

var s_account = __om_acccount();
var s = s_gi(s_account)
s.debugTracking = false
s.charSet = "UTF-8"
s.currencyCode = "CNY"
    /************************** CONFIG SECTION **************************/
    /* You may add or alter any code config here. */
    /* Link Tracking Config */
s.trackDownloadLinks = false
    // local set false
s.trackExternalLinks = false;
s.trackInlineStats = true;
s.linkDownloadFileTypes = 'exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx';
s.linkInternalFilters = "javascript:,newegg.cn"
s.linkLeaveQueryString = false;
s.linkTrackVars = 'None';
s.linkTrackEvents = 'None';

/* WARNING: Changing any of the below variables will cause drastic
changes to how your visitor data is collected.  Changes should only be
made when instructed to do so by your account manager.*/
s.visitorNamespace = "newegg"
s.trackingServer = "newegg.d1.sc.omtrdc.net";
s.trackingServerSecure = "";
if (__neg_om_local_debug) {
    s.cookieDomainPeriods = 3;
}

//Setup Clickmap
function s_getObjectID(o) {
    var ID = o.href;
    return ID;
}
s.getObjectID = s_getObjectID;

/************************** PLUGIN CONFIG  **************************/
s.usePlugins = true

function s_doPlugins(s) {
    //Determine bounce rate for all visits
    s.visitstart = s.getVisitStart('s_vs');
    if (s.visitstart && s.visitstart == 1)
        s.firstPage = 'firstpage';
    s.clickPast(s.firstPage, 'event4', 'event5');

    /* Automate Campaign Tracking Code Extraction based on the cm_mmc parameter*/
    if (!s.campaign)
        s.campaign = s.getQueryParam('cm_mmc');
    s.campaign = s.getValOnce(s.campaign, 's_campaign', 0);


    /* Automate eVar37 Tracking Code Extraction based on the cm_mmc parameter*/
    /* Automate eVar63 Tracking Code Extraction based on the cm_mmc parameter*/
    if (s.campaign)
        s.eVar63 = s.eVar37 = s.eVar36 = "D=v0";

    /* Automate Internal Campaign Code Extraction based on icid & cm_sp parameter*/
    if (!s.eVar3)
        s.eVar3 = s.getQueryParam('icid');
    if (!s.eVar3)
        s.eVar3 = s.getQueryParam('cm_sp');

    s.eVar3 = s.getValOnce(s.eVar3, 's_ev3', 0);

    /* Automate Search Keyword Variables and Events*/
    if (s.prop4) {
        s.eVar2 = s.prop4;
        s.events = s.apl(s.events, 'event1', ',', 2);
        if (s.prop5 && (s.prop5 == '0' || s.prop5 == 'zero')) {
            s.prop5 = 'zero';
            s.events = s.apl(s.events, 'event2', ',', 2);
        }
    }
    /* Do not refire search event if the same search term passed in twice in a row */
    var t_search = s.getValOnce(s.eVar2, 's_stv', 0);
    if (t_search == '') {
        var a = s.split(s.events, ',');
        var e = '';
        for (var i = 0; i < a.length; i++) {
            if (a[i] == 'event1' || a[i] == 'event2')
                continue;
            else
                e += a[i] ? a[i] + ',' : a[i];
        }
        s.events = e.substring(0, e.length - 1);
    }

    /* Automate Custom ProdView Event */
    if (s.events && s.events.indexOf('prodView') > -1)
        s.events = s.apl(s.events, 'event3', ',', 2);

    /* Automate OrderID eVar */
    if (s.purchaseID)
        s.eVar11 = s.purchaseID;

    /* URL outomate in evar15 */
    s.eVar15 = "D=g";

    /* Determine Search Location, Add-to-Cart Location and Percentage of Page Viewed via previous page name*/
    s.prop6 = s.getPreviousValue(s.pageName, 'gpv', '');

    if (s.pageName && s.prop6 && s.pageName == s.prop6) {
        s.prop6 = "D=pageName";
    }
    s.eVar31 = s.prop6;
    if (s.events && s.events.indexOf('scAdd') > -1) {
        if (s.prop6)
            s.eVar9 = s.prop6;
    }
    /*if (s.prop6)
    	s.prop7=s.getPercentPageViewed();
    	*/
    /* Determine whether visitor is New or a Repeat visitor within the last 365 days */
    s.eVar10 = s.getNewRepeat(365);

    /* Campaign Pathing*/
    if (s.campaign) {
        var cmpath = s.campaign.substring(0, 3);
        s.prop10 = cmpath + ":" + s.pageName;
    }
    if (!s.campaign) {
        s.prop10 = "none:" + s.pageName;
    }

    /* previous site section */
    if (s.channel)
        s.prop14 = s.getPreviousValue(s.channel, 'gpvch', '');

    /* Automate Finding Method eVar */
    var internalFlag = false;
    if (document.referrer) {
        var filters = s.split(s.linkInternalFilters, ',');
        var docRef = s.split(document.referrer, '/');
        docRef = docRef[2];
        for (var f in filters) {
            if (docRef.indexOf(filters[f]) > -1)
                internalFlag = true;
        }
    }
    if (s.eVar3 && s.eVar3 != 'non-internal campaign') {
        s.eVar1 = 'internal campaign';
        s.eVar2 = 'non-search';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    } else if (s.eVar7 && s.eVar7 != 'non-cross sell') {
        if (s.products)
            s.newProduct = 'true';
        s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar1,eVar2,eVar3,eVar4,eVar5,eVar6', ',', 2);
        s.eVar1 = 'cross-sell';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        if (!s.eVar8)
            s.eVar8 = 'non-product cross-sell click';
    } else if (s.campaign) {
        s.eVar1 = 'external campaign referral';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';

    } else if (document.referrer && !internalFlag) {
        s.eVar1 = 'external natural referral';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    } else if (s.eVar2 && s.eVar2 != 'non-search') {
        s.eVar1 = 'internal keyword search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    }

    // Extra deals section rec_exde
    else if (s.getQueryParam('pfm') == 'rec_exde') {
        s.eVar1 = 'rec:eggxtra deals';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    }
    // New Arrival rec_near
    else if (s.getQueryParam('pfm') == 'rec_near') {
        s.eVar1 = 'rec:new arrival';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    }
    // Whats getting the most attention rec_wgma
    else if (s.getQueryParam('pfm') == 'rec_wgma') {
        s.eVar1 = 'rec:whats getting most attention';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    }
    // Most Wished for Item rec_mwit
    else if (s.getQueryParam('pfm') == 'rec_mwit') {
        s.eVar1 = 'rec:most wished item';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    }
    // Top Viewed New Arrival rec_tvna
    else if (s.getQueryParam('pfm') == 'rec_tvna') {
        s.eVar1 = 'rec:top viewed new arrival';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar4 = 'non-browse';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    } else if (s.eVar4 && s.eVar4 != 'non-browse') {
        s.eVar1 = 'browse';
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        if (!s.eVar5)
            s.eVar5 = s.eVar4
        if (!s.eVar6)
            s.eVar6 = s.eVar5
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    } else if (s.events && s.events.indexOf('purchase') > -1) {
        s.eVar1 = 'unknown at time of purchase';
        s.eVar2 = s.eVar3 = s.eVar4 = s.eVar5 = s.eVar6 = s.eVar7 = s.eVar8 = s.eVar9 = 'D=v1';
    } else if (document.referrer && internalFlag) {
        var referrerArray = s.split(document.referrer, '/');
        var findPageName = null;
        if (referrerArray.length == 3) {
            var doamin = referrerArray[2].toLowerCase();
            if (doamin == 'www.newegg.cn') {
                findPageName = 'HomePage';
            } else if (doamin == 'tuan.newegg.cn') {
                findPageName = 'Group';
            } else if (doamin == 'zhadan.newegg.cn') {
                findPageName = 'TodayBomb';
            }
        } else if (referrerArray.length >= 4) {
            var doamin = referrerArray[2].toLowerCase();
            var firstPath = referrerArray[3].toLowerCase();

            if (doamin == "www.newegg.cn" && firstPath.indexOf("?") == 0) {
                findPageName = 'HomePage';
            } else if (doamin == "tuan.newegg.cn" && firstPath.indexOf("?") == 0) {
                findPageName = 'Group';
            } else if (doamin == "zhadan.newegg.cn" && firstPath.indexOf("?") == 0) {
                findPageName = 'TodayBomb';
            } else if (firstPath.indexOf("bomb-") == 0) {
                findPageName = 'TodayBomb';
            } else if (firstPath.indexOf("countdown.htm") == 0) {
                findPageName = 'CountDown';
            }
        }

        if (findPageName) {
            s.eVar1 = findPageName;
            s.eVar2 = 'non-search';
            s.eVar3 = 'non-internal campaign';
            s.eVar4 = 'non-browse';
            s.eVar5 = 'D=v4';
            s.eVar6 = 'D=v4';
            s.eVar7 = 'non-cross sell';
            s.eVar8 = 'D=v7';
        }
    } else if (s.eVar1) {
        s.eVar2 = 'non-search';
        s.eVar3 = 'non-internal campaign';
        s.eVar2 = 'non-search';
        s.eVar5 = 'D=v4';
        s.eVar6 = 'D=v4';
        s.eVar7 = 'non-cross sell';
        s.eVar8 = 'D=v7';
    }

    /* create productmerch product for merchandising eVar binding */
    if (s.eVar1 && (!s.products || (s.products && s.products.indexOf(';productmerch') > -1) || s.newProduct == 'true') && (s.p_fo('onemerch') == 1 || (s.linkType != '' && s.linkTrackVars.indexOf('eVar1') > -1))) {
        if (!s.c_r('productnum'))
            s.productNum = 1;
        else
            s.productNum = parseInt(s.c_r('productnum')) + 1;
        s.products = ';productmerch' + s.productNum;
        var e = new Date();
        e.setTime(e.getTime() + (30 * 86400000));
        s.c_w('productnum', s.productNum, e);
        s.linkTrackVars = s.apl(s.linkTrackVars, 'events,products', ',', 2);
        s.linkTrackEvents = s.apl(s.linkTrackEvents, 'event6', ',', 2);
        s.events = s.apl(s.events, 'event6', ',', 2);
    }
    if (s.c_r('productnum') && s.events.indexOf('purchase') > -1)
        s.c_w('productnum', '0', 0);

    //time parting (china time zone)
    s.eVar14 = s.getTimeParting('d', '+8') + ' - ' + s.getTimeParting('h', '+8');

    //Blank out products if events isn't set so that we don't inflate prodViews
    if (s.products && !s.events)
        s.products = '';

    //Lowercase all variables
    s.manageVars('lowercaseVars');

    //Setup Clickmap Object IDs
    //s.setupDynamicObjectIDs();

    /*Campaign Stacking*/
    if (s.campaign) {
        s.eVar19 = s.crossVisitParticipation(s.campaign.substring(0, 3), 's_ev19', '90', '10', '>', 0);
    }


    //Get rid of browser plugins.  Not used in SC15/not needed
    s.plugins = '';

    // Plugin Config -TNT 
    s.tnt = s.trackTNT();

    s.usePlugins = false;

    s_propLengthLimit(s);
}
s.doPlugins = s_doPlugins;

/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

function s_getLoadTime() {
    if (!window.s_loadT) {
        var b = new Date().getTime(),
            o = window.performance ? performance.timing : 0,
            a = o ? o.requestStart : window.inHeadTS || 0;
        s_loadT = a ? Math.round((b - a) / 100) : '' }
    return s_loadT }
s_getLoadTime();

function s_propLengthLimit(s) {
    // s prop max length 100
    for (var skey in s) {
        if (skey.indexOf('prop') == 0 && s[skey]) {
            var sValue = s[skey];

            sValue = $.trim(sValue);
            sValue = sValue.replace(/\n/g, '');
            sValue = sValue.replace(/\r/g, '');
            sValue = sValue.replace(/\t/g, '');
            if (s[skey] != sValue) {
                s[skey] = sValue;
            }

        }
        if (skey.indexOf('eVar') == 0 && s[skey]) {
            var sValue = s[skey];

            sValue = $.trim(sValue);
            sValue = sValue.replace(/\n/g, '');
            sValue = sValue.replace(/\r/g, '');
            sValue = sValue.replace(/\t/g, '');
            if (s[skey] != sValue) {
                s[skey] = sValue;
            }
        }
    }
}


/*
 * Plugin: Days since last Visit 1.1 - capture time from last visit
 */
s.getDaysSinceLastVisit = new Function("c", "" + "var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT" + "ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s" + "etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f" + "2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f" + "5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);" + "s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da" + "y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day" + "){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s." + "c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c" + "_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c" + "+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur" + "n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s" + "!=f5) return '';else return cval_s;");

/* 
/************************ Test&Target Plugin Start *************************/
/*
 * TNT Integration Plugin v1.0
 */
s.trackTNT = new Function("v", "p", "b", "" + "var s=this,n='s_tnt',p=p?p:n,v=v?v:n,r='',pm=false,b=b?b:true;if(s." + "getQueryParam){pm=s.getQueryParam(p);}if(pm){r+=(pm+',');}if(s.wd[v" + "]!=undefined){r+=s.wd[v];}if(b){s.wd[v]='';}return r;");

/*********************** Test&Target Plugin End *************************/
/*
 * Utility manageVars v1.4 - clear variable values (requires split 1.5)
 */
s.manageVars = new Function("c", "l", "f", "" + "var s=this,vl,la,vla;l=l?l:'';f=f?f:1 ;if(!s[c])return false;vl='pa" + "geName,purchaseID,channel,server,pageType,campaign,state,zip,events" + ",products,transactionID';for(var n=1;n<76;n++){vl+=',prop'+n+',eVar" + "'+n+',hier'+n;}if(l&&(f==1||f==2)){if(f==1){vl=l;}if(f==2){la=s.spl" + "it(l,',');vla=s.split(vl,',');vl='';for(x in la){for(y in vla){if(l" + "a[x]==vla[y]){vla[y]='';}}}for(y in vla){vl+=vla[y]?','+vla[y]:'';}" + "}s.pt(vl,',',c,0);return true;}else if(l==''&&f==1){s.pt(vl,',',c,0" + ");return true;}else{return false;}");
s.clearVars = new Function("t", "var s=this;s[t]='';");
s.lowercaseVars = new Function("t", "" + "var s=this;if(s[t]&&t!='events'){s[t]=s[t].toString();if(s[t].index" + "Of('D=')!=0){s[t]=s[t].toLowerCase();}}");

/*
 * Plugin: getQueryParam 2.4
 */
s.getQueryParam = new Function("p", "d", "u", "h", "" + "var s=this,v='',i,j,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.loca" + "tion);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0" + "?p.length:i;t=s.p_gpv(p.substring(0,i),u+'',h);if(t){t=t.indexOf('#" + "')>-1?t.substring(0,t.indexOf('#')):t;}if(t)v+=v?d+t:t;p=p.substrin" + "g(i==p.length?i:i+1)}return v");
s.p_gpv = new Function("k", "u", "h", "" + "var s=this,v='',q;j=h==1?'#':'?';i=u.indexOf(j);if(k&&i>-1){q=u.sub" + "string(i+1);v=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf = new Function("t", "k", "" + "if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T" + "rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s." + "epa(v)}return''");

/*
 * Plugin: getValOnce v1.1
 */
s.getValOnce = new Function("v", "c", "e", "t", "" + "var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000" + "0:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e" + "==0?0:a);}return v==k?'':v");

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split = new Function("l", "d", "" + "var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x" + "++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/*
 * Plugin Utility: apl v1.1
 */
s.apl = new Function("l", "v", "d", "u", "" + "var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a." + "length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas" + "e()));}}if(!m)l=l?l+d+v:v;return l");

/*
 * Function - read combined cookies v 0.35
 */
if (!s.__ccucr) {
    s.c_rr = s.c_r;
    s.__ccucr = true;

    function c_r(k) {
        var s = this,
            d = new Date,
            v = s.c_rr(k),
            c = s.c_rr('s_pers'),
            i, m, e;
        if (v) return v;
        k = s.ape(k);
        i = c.indexOf(' ' + k + '=');
        c = i < 0 ? s.c_rr('s_sess') : c;
        i = c.indexOf(' ' + k + '=');
        m = i < 0 ? i : c.indexOf('|', i);
        e = i < 0 ? i : c.indexOf(';', i);
        m = m > 0 ? m : e;
        v = i < 0 ? '' : s.epa(c.substring(i + 2 + k.length, m < 0 ? c.length : m));
        if (m > 0 && m != e)
            if (parseInt(c.substring(m + 1, e < 0 ? c.length : e)) < d.getTime()) { d.setTime(d.getTime() - 60000);
                s.c_w(s.epa(k), '', d);
                v = ''; }
        return v;
    }
    s.c_r = c_r;
}
/*
 * Function - write combined cookies v 0.36
 */
if (!s.__ccucw) {
    s.c_wr = s.c_w;
    s.__ccucw = true;

    function c_w(k, v, e) {
        var s = this,
            d = new Date,
            ht = 0,
            pn = 's_pers',
            sn = 's_sess',
            pc = 0,
            sc = 0,
            pv, sv, c, i, t;
        d.setTime(d.getTime() - 60000);
        if (s.c_rr(k)) s.c_wr(k, '', d);
        k = s.ape(k);
        pv = s.c_rr(pn);
        i = pv.indexOf(' ' + k + '=');
        if (i > -1) { pv = pv.substring(0, i) + pv.substring(pv.indexOf(';', i) + 1);
            pc = 1; }
        sv = s.c_rr(sn);
        i = sv.indexOf(' ' + k + '=');
        if (i > -1) {
            sv = sv.substring(0, i) + sv.substring(sv.indexOf(';', i) + 1);
            sc = 1;
        }
        d = new Date;
        if (e) {
            if (e.getTime() > d.getTime()) {
                pv += ' ' + k + '=' + s.ape(v) + '|' + e.getTime() + ';';
                pc = 1;
            }
        } else { sv += ' ' + k + '=' + s.ape(v) + ';';
            sc = 1; }
        sv = sv.replace(/%00/g, '');
        pv = pv.replace(/%00/g, '');
        if (sc) s.c_wr(sn, sv, 0);
        if (pc) {
            t = pv;
            while (t && t.indexOf(';') != -1) {
                var t1 = parseInt(t.substring(t.indexOf('|') + 1, t.indexOf(';')));
                t = t.substring(t.indexOf(';') + 1);
                ht = ht < t1 ? t1 : ht;
            }
            d.setTime(ht);
            s.c_wr(pn, pv, d);
        }
        return v == s.c_r(s.epa(k));
    }
    s.c_w = c_w;
}

/*
 * DynamicObjectIDs v1.5: Setup Dynamic Object IDs based on URL
 */
s.setupDynamicObjectIDs = new Function("" + "var s=this;if(!s.doi){s.doi=1;if(s.apv>3&&(!s.isie||!s.ismac||s.apv" + ">=5)){if(s.wd.attachEvent)s.wd.attachEvent('onload',s.setOIDs);else" + " if(s.wd.addEventListener)s.wd.addEventListener('load',s.setOIDs,fa" + "lse);else{s.doiol=s.wd.onload;s.wd.onload=s.setOIDs}}s.wd.s_semapho" + "re=1}");
s.setOIDs = new Function("e", "" + "var s=s_c_il[" + s._in + "],b=s.eh(s.wd,'onload'),o='onclick',x,l,u,c,i" + ",a=new Array;if(s.doiol){if(b)s[b]=s.wd[b];s.doiol(e)}if(s.d.links)" + "{for(i=0;i<s.d.links.length;i++){l=s.d.links[i];c=l[o]?''+l[o]:'';b" + "=s.eh(l,o);z=l[b]?''+l[b]:'';u=s.getObjectID(l);if(u&&c.indexOf('s_" + "objectID')<0&&z.indexOf('s_objectID')<0){u=s.repl(u,'\"','');u=s.re" + "pl(u,'\\n','').substring(0,97);l.s_oc=l[o];a[u]=a[u]?a[u]+1:1;x='';" + "if(c.indexOf('.t(')>=0||c.indexOf('.tl(')>=0||c.indexOf('s_gs(')>=0" + ")x='var x=\".tl(\";';x+='s_objectID=\"'+u+'_'+a[u]+'\";return this." + "s_oc?this.s_oc(e):true';if(s.isns&&s.apv>=5)l.setAttribute(o,x);l[o" + "]=new Function('e',x)}}}s.wd.s_semaphore=0;return true");

/*
 * Plugin Utility: Replace v1.0
 */
s.repl = new Function("x", "o", "n", "" + "var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x." + "substring(i+o.length);i=x.indexOf(o,i+l)}return x");

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat = new Function("d", "cn", "" + "var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:" + "'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length=" + "=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct" + "-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N" + "ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue = new Function("v", "c", "el", "" + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");

/*
 * Plugin Utility - first only
 */
s.p_fo = new Function("n", "" + "var s=this;if(!s.__fo){s.__fo=new Object;}if(!s.__fo[n]){s.__fo[n]=" + "new Object;return 1;}else {return 0;}");

/*
 * Plugin: getTimeParting 2.1 
 */
s.getTimeParting = new Function("t", "z", "y", "l", "j", "" + "var s=this,d,A,U,X,Z,W,B,C,D,Y;d=new Date();A=d.getFullYear();Y=U=S" + "tring(A);if(s.dstStart&&s.dstEnd){B=s.dstStart;C=s.dstEnd}else{;U=U" + ".substring(2,4);X='090801|101407|111306|121104|131003|140902|150801" + "|161306|171205|181104|191003';X=s.split(X,'|');for(W=0;W<=10;W++){Z" + "=X[W].substring(0,2);if(U==Z){B=X[W].substring(2,4);C=X[W].substrin" + "g(4,6)}}if(!B||!C){B='08';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;}D" + "=new Date('1/1/2000');if(D.getDay()!=6||D.getMonth()!=0){return'Dat" + "a Not Available'}else{z=z?z:'0';z=parseFloat(z);B=new Date(B);C=new" + " Date(C);W=new Date();if(W>B&&W<C&&l!='0'){z=z+1}W=W.getTime()+(W.g" + "etTimezoneOffset()*60000);W=new Date(W+(3600000*z));X=['Sunday','Mo" + "nday','Tuesday','Wednesday','Thursday','Friday','Saturday'];B=W.get" + "Hours();C=W.getMinutes();D=W.getDay();Z=X[D];U='AM';A='Weekday';X='" + "00';if(C>30){X='30'}if(j=='1'){if(C>15){X='15'}if(C>30){X='30'}if(C" + ">45){X='45'}}if(B>=12){U='PM';B=B-12};if(B==0){B=12};if(D==6||D==0)" + "{A='Weekend'}W=B+':'+X+U;if(y&&y!=Y){return'Data Not Available'}els" + "e{if(t){if(t=='h'){return W}if(t=='d'){return Z}if(t=='w'){return A" + "}}else{return Z+', '+W}}}");

/*
 * Plugin: getPercentPageViewed v1.3

s.getPercentPageViewed=new Function("ext",""
+"var s=this,ext=(arguments.length>0)?ext:0;if(typeof(s.linkType)=='u"
+"ndefined'||s.linkType=='e'){var v=s.c_r('s_ppv');s.c_w('s_ppv','');"
+"var a=(v.indexOf(',')>-1)?v.split(',',3):[];if(ext){return a;}else{"
+"return(a.length>0)?a[0]:'';}}");
s.getPPVCalc=new Function (""
+"var s=s_c_il["+s._in+"],dh=Math.max(Math.max(s.d.body.scrollHeight,"
+"s.d.documentElement.scrollHeight),Math.max(s.d.body.offsetHeight,s."
+"d.documentElement.offsetHeight),Math.max(s.d.body.clientHeight,s.d."
+"documentElement.clientHeight)),vph=s.wd.innerHeight||(s.d.documentE"
+"lement.clientHeight||s.d.body.clientHeight),st=s.wd.pageYOffset||(s"
+".wd.document.documentElement.scrollTop||s.wd.document.body.scrollTo"
+"p),vh=st+vph,pv=Math.min(Math.round(vh/dh*100),100),c=s.c_r('s_ppv'"
+"),a=(c.indexOf(',')>-1)?c.split(',',3):[],cv=(a.length>0)?parseInt("
+"a[0]):0,p0=(a.length>1)?parseInt(a[1]):pv,cy=(a.length>2)?parseInt("
+"a[2]):0;if(pv>0){s.c_w('s_ppv',((pv>cv)?pv:cv)+','+p0+','+((vh>cy)?"
+"vh:cy));}else{s.c_w('s_ppv','');}");
s.getPPVSetup = new Function(""
+"var s=this;if(s.wd.addEventListener){s.wd.addEventListener('load',s"
+".getPPVCalc,false);s.wd.addEventListener('scroll',s.getPPVCalc,fals"
+"e);s.wd.addEventListener('resize',s.getPPVCalc,false);}else if(s.wd"
+".attachEvent){s.wd.attachEvent('onload',s.getPPVCalc);s.wd.attachEv"
+"ent('onscroll',s.getPPVCalc);s.wd.attachEvent('onresize',s.getPPVCa"
+"lc);}");
s.getPPVSetup();
 */
/*
 * Plugin: getVisitStart v2.0 - returns 1 on first page of visit
 * otherwise 0
 */
s.getVisitStart = new Function("c", "" + "var s=this,v=1,t=new Date;t.setTime(t.getTime()+1800000);if(s.c_r(c" + ")){v=0}if(!s.c_w(c,1,t)){s.c_w(c,1,0)}if(!s.c_r(c)){v=0}return v;");

/*                                                                  
 * Plugin: clickPast - version 1.0
 */
s.clickPast = new Function("scp", "ct_ev", "cp_ev", "cpc", "" + "var s=this,scp,ct_ev,cp_ev,cpc,ev,tct;if(s.p_fo(ct_ev)==1){if(!cpc)" + "{cpc='s_cpc';}ev=s.events?s.events+',':'';if(scp){s.events=ev+ct_ev" + ";s.c_w(cpc,1,0);}else{if(s.c_r(cpc)>=1){s.events=ev+cp_ev;s.c_w(cpc" + ",0,0);}}}");

/*
 *	Plug-in: crossVisitParticipation v1.7 - stacks values from
 *	specified variable in cookie and returns value
 */
s.crossVisitParticipation = new Function("v", "cn", "ex", "ct", "dl", "ev", "dv", "" + "var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var" + " ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l" + "ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i" + "f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=escape(" + "v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()" + ";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length; q++){z=a" + "rry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\", '');" + "arry[q] = s.split(z, ',');}}var e=new Date();e.setFullYear(e.getFul" + "lYear()+5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[" + "arry.length-1]=[v,new Date().getTime()];else arry[arry.length]=[v,n" + "ew Date().getTime()];var start=arry.length-ct<0?0:arry.length-ct;va" + "r td=new Date();for(var x=start;x<arry.length;x++){var diff=Math.ro" + "und((td.getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=unescape(a" + "rry[x][0]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{de" + "lim:',',front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.jo" + "in(h,{delim:dl});if(ce)s.c_w(cn,'');return r;");

/*
 * s.join: 1.0 - Joins an array into a string
 */
s.join = new Function("v", "p", "" + "var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back" + ":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0" + ";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el" + "se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");

s.setTagContainer("Neweggcomcn_s");

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code = '',
    s_objectID;

function s_gi(un, pg, ss) {
    var c = "s.version='H.26.1';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function('var e;try{console.log(\"'+s.rep(s.rep(s.rep(m,\"\\\\\",\"\\\\" + "\\\\\"),\"\\n\",\"\\\\n\"),\"\\\"\",\"\\\\\\\"\")+'\");}catch(e){}');tcf()};s.cls=function(x,c){var i,y='';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur" + "n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;ret" + "urn 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(" + "x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.su" + "bstring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+" + "','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00" + "'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unesc" + "ape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r" + ";z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(" + "0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf'" + ",f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visi" + "bilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){whil" + "e(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\")" + ";s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.li" + "nkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostnam" + "e,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'" + ".','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<" + "0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-6" + "0);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':''" + ");return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i" + ";l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tc" + "f=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s" + ".wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0" + ";return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return " + "s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)fo" + "r(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackin" + "gServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+s._in+'_'+un,im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLow" + "erCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.vers" + "ion+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if" + "(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]" + "=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[" + "imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');" + "if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['" + "+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||ta=='_parent'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<" + "500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a" + "){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(" + "x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexO" + "f(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.s" + "p(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.l" + "ength-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(s" + "k in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn" + "++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);n" + "f=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.c" + "ontextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;els" + "e if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){va" + "r s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s" + ".pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (" + "s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>" + "=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.subs" + "tring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationSer" + "ver'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase" + "()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProv" + "ider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='" + "c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionTyp" + "e')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k]" + ",fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='" + "retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop'" + ")q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h" + "){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?'),hi=h.indexOf('#');if(qi>=0){if(hi>=0&&hi<qi)qi=hi;}else qi=hi;h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+" + "1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef" + "=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.inde" + "xOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_" + "il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf" + ")=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s." + "d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEvent" + "Listener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=" + "\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(" + "!t||t==\"_self\"||t==\"_top\"||t==\"_parent\"||(s.wd.name&&t==s.wd.name))){tcf=new Function(\"s\",\"var x;try{n=s.d.createEvent(\\\\\"MouseEvents\\\\\")}catch(x){n=new MouseEvent}return n\");n=tcf(" + "s);if(n){tcf=new Function(\"n\",\"e\",\"var x;try{n.initMouseEvent(\\\\\"click\\\\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.m" + "etaKey,e.button,e.relatedTarget)}catch(x){n=0}return n\");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.tar" + "get;s.bce=n}}}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.p" + "rotocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':''" + ")+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'|" + "|t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(" + "o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'" + "||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oi" + "d};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u=" + "'+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(" + "t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=functio" + "n(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.pro" + "totype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return" + " s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"" + "\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s" + ".b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&((s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent)||(s.n.userAgent.indexOf('Firefox/2')>=0&&s.wd.M" + "ouseEvent))){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.vi" + "sitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>" + "v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i" + "+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=" + "s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=t" + "his;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;i" + "f(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=" + "n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;f" + "or(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"" + "_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m" + "._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m," + "f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}" + "}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;i" + "f(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i" + ">=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s" + ":'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}" + "';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.cre" + "ateElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':" + "'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i" + "(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[" + "k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Dat" + "e,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli" + ")s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.ma" + "xDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floo" + "r(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s." + "applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['" + "+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorI" + "D']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000)" + ":tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+" + "tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x=''," + "c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>" + "=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if" + "(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled" + "()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d" + ".documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"" + "}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<" + "s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHe" + "ight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.a" + "bort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.l" + "nk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t" + "=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQuery" + "String||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;i" + "f(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-" + "id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb" + ">=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==" + "ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;" + "try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oi" + "dt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if" + "(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd." + "s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.li" + "nkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=th" + "is,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c" + "']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_i" + "l')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq." + "length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagN" + "ame('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Oper" + "a')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));els" + "e if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;el" + "se if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fi" + "d,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,ligh" + "tProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomain" + "Periods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events," + "events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.s" + "p(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl" + "_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicA" + "ccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,link" + "TrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){" + "s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",
        w = window,
        l = w.s_c_il,
        n = navigator,
        u = n.userAgent,
        v = n.appVersion,
        e = v.indexOf('MSIE '),
        m = u.indexOf('Netscape6/'),
        a, i, j, x, s;
    if (un) { un = un.toLowerCase();
        if (l)
            for (j = 0; j < 2; j++)
                for (i = 0; i < l.length; i++) { s = l[i];
                    x = s._c;
                    if ((!x || x == 's_c' || (j > 0 && x == 's_l')) && (s.oun == un || (s.fs && s.sa && s.fs(s.oun, un)))) {
                        if (s.sa) s.sa(un);
                        if (x == 's_c') return s } else s = 0 } }
    w.s_an = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    w.s_sp = new Function("x", "d", "var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.subst" + "ring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a");
    w.s_jn = new Function("a", "d", "var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x");
    w.s_rep = new Function("x", "o", "n", "return s_jn(s_sp(x,o),n)");
    w.s_d = function (x) {
    	var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;
    	if(i>0){
    		d=x.substring(0,i);
    		x=x.substring(i+2);
    		l=s_sp(l,'');
    		for(i=0;i<62;i++)
    			l2[l[i]]=i;
    		t=s_sp(t,'');
    		d=s_sp(d,'~');
    		i=0;
    		while(i<5){
    			v=0;
    			if(x.indexOf(t[i])>=0) {
    				x2=s_sp(x,t[i]);
    				for(j=1;j<x2.length;j++){
    					k=x2[j].substring(0,1);
    					w=t[i]+k;
    					if(k!=' '){
    						v=1;
    						w=d[b+l2[k]]
    					}
    					x2[j]=w+x2[j].substring(1)
    				}
    			}
    			if(v)
    				x=s_jn(x2,'');
    			else{
    				w=t[i]+' ';
    				if(x.indexOf(w)>=0)
    					x=s_rep(x,w,t[i]);
    				i++;
    				b+=62
    			}
    		}
    	}
    	return x
    };
    w.s_fe = new Function("c", "return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
    w.s_fa = new Function("f", "var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':" + "a");
    w.s_ft = new Function("c", "c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i" + "f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")" + "'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
    c = s_d(c);
    if (e > 0) { a = parseInt(i = v.substring(e + 5));
        if (a > 3) a = parseFloat(i) } else if (m > 0) a = parseFloat(u.substring(m + 10));
    else a = parseFloat(v);
    if (a < 5 || v.indexOf('Opera') >= 0 || u.indexOf('Opera') >= 0) c = s_ft(c);
    if (!s) { s = new Object;
        if (!w.s_c_in) { w.s_c_il = new Array;
            w.s_c_in = 0 }
        s._il = w.s_c_il;
        s._in = w.s_c_in;
        s._il[s._in] = s;
        w.s_c_in++; }
    s._c = 's_c';
    // (new Function("s", "un", "pg", "ss", c))(s, un, pg, ss);

    (function(s, un, pg, ss) {
    s.version = 'H.26.1';
    s.an = s_an;
    s.logDebug = function(m) {
        var s = this,
            tcf = new Function('var e;try{console.log("' + s.rep(s.rep(s.rep(m, "\\", "\\\\"), "\n", "\\n"), "\"", "\\\"") + '");}catch(e){}');
        tcf()
    };
    s.cls = function(x, c) {
        var i, y = '';
        if (!c)
            c = this.an;
        for (i = 0; i < x.length; i++) {
            n = x.substring(i, i + 1);
            if (c.indexOf(n) >= 0)
                y += n
        }
        return y
    };
    s.fl = function(x, l) {
        return x ? ('' + x).substring(0, l) : x
    };
    s.co = function(o) {
        return o
    };
    s.num = function(x) {
        x = '' + x;
        for (var p = 0; p < x.length; p++)
            if (('0123456789').indexOf(x.substring(p, p + 1)) < 0)
                return 0;
        return 1
    };
    s.rep = s_rep;
    s.sp = s_sp;
    s.jn = s_jn;
    s.ape = function(x) {
        var s = this,
            h = '0123456789ABCDEF',
            f = "+~!*()'",
            i, c = s.charSet,
            n, l, e, y = '';
        c = c ? c.toUpperCase() : '';
        if (x) {
            x = '' + x;
            if (s.em == 3) {
                x = encodeURIComponent(x);
                for (i = 0; i < f.length; i++) {
                    n = f.substring(i, i + 1);
                    if (x.indexOf(n) >= 0)
                        x = s.rep(x, n, "%" + n.charCodeAt(0).toString(16).toUpperCase())
                }
            } else if (c == 'AUTO' && ('').charCodeAt) {
                for (i = 0; i < x.length; i++) {
                    c = x.substring(i, i + 1);
                    n = x.charCodeAt(i);
                    if (n > 127) {
                        l = 0;
                        e = '';
                        while (n || l < 4) {
                            e = h.substring(n % 16, n % 16 + 1) + e;
                            n = (n - n % 16) / 16;
                            l++
                        }
                        y += '%u' + e
                    } else if (c == '+')
                        y += '%2B';
                    else
                        y += escape(c)
                }
                x = y
            } else
                x = s.rep(escape('' + x), '+', '%2B');
            if (c && c != 'AUTO' && s.em == 1 && x.indexOf('%u') < 0 && x.indexOf('%U') < 0) {
                i = x.indexOf('%');
                while (i >= 0) {
                    i++;
                    if (h.substring(8).indexOf(x.substring(i, i + 1).toUpperCase()) >= 0)
                        return x.substring(0, i) + 'u00' + x.substring(i);
                    i = x.indexOf('%', i)
                }
            }
        }
        return x
    };
    s.epa = function(x) {
        var s = this,
            y, tcf;
        if (x) {
            x = s.rep('' + x, '+', ' ');
            if (s.em == 3) {
                tcf = new Function('x', 'var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');
                return tcf(x)
            } else
                return unescape(x)
        }
        return y
    };
    s.pt = function(x, d, f, a) {
        var s = this,
            t = x,
            z = 0,
            y, r;
        while (t) {
            y = t.indexOf(d);
            y = y < 0 ? t.length : y;
            t = t.substring(0, y);
            r = s[f](t, a);
            if (r)
                return r;
            z += y + d.length;
            t = x.substring(z, x.length);
            t = z < x.length ? t : ''
        }
        return ''
    };
    s.isf = function(t, a) {
        var c = a.indexOf(':');
        if (c >= 0) a = a.substring(0, c);
        c = a.indexOf('=');
        if (c >= 0)
            a = a.substring(0, c);
        if (t.substring(0, 2) == 's_')
            t = t.substring(2);
        return (t != '' && t == a)
    };
    s.fsf = function(t, a) {
        var s = this;
        if (s.pt(a, ',', 'isf', t))
            s.fsg += (s.fsg != '' ? ',' : '') + t;
        return 0
    };
    s.fs = function(x, f) {
        var s = this;
        s.fsg = '';
        s.pt(x, ',', 'fsf', f);
        return s.fsg
    };
    s.mpc = function(m, a) {
        var s = this,
            c, l, n, v;
        v = s.d.visibilityState;
        if (!v)
            v = s.d.webkitVisibilityState;
        if (v && v == 'prerender') {
            if (!s.mpq) {
                s.mpq = new Array;
                l = s.sp('webkitvisibilitychange,visibilitychange', ',');
                for (n = 0; n < l.length; n++) {
                    s.d.addEventListener(l[n], new Function('var s=s_c_il[' + s._in + '],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v=="visible"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'), false)
                }
            }
            c = new Object;
            c.m = m;
            c.a = a;
            s.mpq.push(c);
            return 1
        }
        return 0
    };
    s.si = function() {
        var s = this,
            i, k, v, c = s_gi + 'var s=s_gi("' + s.oun + '");s.sa("' + s.un + '");';
        for (i = 0; i < s.va_g.length; i++) {
            k = s.va_g[i];
            v = s[k];
            if (v != undefined) {
                if (typeof(v) != 'number')
                    c += 's.' + k + '="' + s_fe(v) + '";';
                else c += 's.' + k + '=' + v + ';'
            }
        }
        c += "s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';";
        return c
    };
    s.c_d = '';
    s.c_gdf = function(t, a) {
        var s = this;
        if (!s.num(t))
            return 1;
        return 0
    };
    s.c_gd = function() {
        var s = this,
            d = s.wd.location.hostname,
            n = s.fpCookieDomainPeriods,
            p;
        if (!n)
            n = s.cookieDomainPeriods;
        if (d && !s.c_d) {
            n = n ? parseInt(n) : 2;
            n = n > 2 ? n : 2;
            p = d.lastIndexOf('.');
            if (p >= 0) {
                while (p >= 0 && n > 1) {
                    p = d.lastIndexOf('.', p - 1);
                    n--
                }
                s.c_d = p > 0 && s.pt(d, '.', 'c_gdf', 0) ? d.substring(p) : d
            }
        }
        return s.c_d
    };
    s.c_r = function(k) {
        var s = this;
        k = s.ape(k);
        var c = ' ' + s.d.cookie,
            i = c.indexOf(' ' + k + '='),
            e = i < 0 ? i : c.indexOf(';', i),
            v = i < 0 ? '' : s.epa(c.substring(i + 2 + k.length, e < 0 ? c.length : e));
        return v != '[[B]]' ? v : ''
    };
    s.c_w = function(k, v, e) {
        var s = this,
            d = s.c_gd(),
            l = s.cookieLifetime,
            t;
        v = '' + v;
        l = l ? ('' + l).toUpperCase() : '';
        if (e && l != 'SESSION' && l != 'NONE') {
            t = (v != '' ? parseInt(l ? l : 0) : -60);
            if (t) {
                e = new Date;
                e.setTime(e.getTime() + (t * 1000))
            }
        }
        if (k && l != 'NONE') {
            s.d.cookie = k + '=' + s.ape(v != '' ? v : '[[B]]') + '; path=/;' + (e && l != 'SESSION' ? ' expires=' + e.toGMTString() + ';' : '') + (d ? ' domain=' + d + ';' : '');
            return s.c_r(k) == v
        }
        return 0
    };
    s.eh = function(o, e, r, f) {
        var s = this,
            b = 's_' + e + '_' + s._in,
            n = -1,
            l, i, x;
        if (!s.ehl) s.ehl = new Array;
        l = s.ehl;
        for (i = 0; i < l.length && n < 0; i++) {
            if (l[i].o == o && l[i].e == e)
                n = i
        }
        if (n < 0) {
            n = i;
            l[n] = new Object
        }
        x = l[n];
        x.o = o;
        x.e = e;
        f = r ? x.b : f;
        if (r || f) {
            x.b = r ? 0 : o[e];
            x.o[e] = f
        }
        if (x.b) {
            x.o[b] = x.b;
            return b
        }
        return 0
    };
    s.cet = function(f, a, t, o, b) {
        var s = this,
            r, tcf;
        if (s.apv >= 5 && (!s.isopera || s.apv >= 7)) {
            tcf = new Function('s', 'f', 'a', 't', 'var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');
            r = tcf(s, f, a, t)
        } else {
            if (s.ismac && s.u.indexOf('MSIE 4') >= 0)
                r = s[b](a);
            else {
                s.eh(s.wd, 'onerror', 0, o);
                r = s[f](a);
                s.eh(s.wd, 'onerror', 1)
            }
        }
        return r
    };
    s.gtfset = function(e) {
        var s = this;
        return s.tfs
    };
    s.gtfsoe = new Function('e', 'var s=s_c_il[' + s._in + '],c;s.eh(window,"onerror",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');
    s.gtfsfb = function(a) {
        return window
    };
    s.gtfsf = function(w) {
        var s = this,
            p = w.parent,
            l = w.location;
        s.tfs = w;
        if (p && p.location != l && p.location.host == l.host) {
            s.tfs = p;
            return s.gtfsf(s.tfs)
        }
        return s.tfs
    };
    s.gtfs = function() {
        var s = this;
        if (!s.tfs) {
            s.tfs = s.wd;
            if (!s.etfs)
                s.tfs = s.cet('gtfsf', s.tfs, 'gtfset', s.gtfsoe, 'gtfsfb')
        }
        return s.tfs
    };
    s.mrq = function(u) {
        var s = this,
            l = s.rl[u],
            n, r;
        s.rl[u] = 0;
        if (l)
            for (n = 0; n < l.length; n++) {
                r = l[n];
                s.mr(0, 0, r.r, r.t, r.u)
            }
    };
    s.flushBufferedRequests = function() {};
    s.mr = function(sess, q, rs, ta, u) {
        var s = this,
            dc = s.dc,
            t1 = s.trackingServer,
            t2 = s.trackingServerSecure,
            tb = s.trackingServerBase,
            p = '.sc',
            ns = s.visitorNamespace,
            un = s.cls(u ? u : (ns ? ns : s.fun)),
            r = new Object,
            l, imn = 's_i_' + s._in + '_' + un,
            im, b, e;
        if (!rs) {
            if (t1) {
                if (t2 && s.ssl)
                    t1 = t2
            } else {
                if (!tb)
                    tb = '2o7.net';
                if (dc)
                    dc = ('' + dc).toLowerCase();
                else
                    dc = 'd1';
                if (tb == '2o7.net') {
                    if (dc == 'd1')
                        dc = '112';
                    else if (dc == 'd2')
                        dc = '122';
                    p = ''
                }
                t1 = un + '.' + dc + '.' + p + tb
            }
            rs = 'http' + (s.ssl ? 's' : '') + '://' + t1 + '/b/ss/' + s.un + '/' + (s.mobile ? '5.1' : '1') + '/' + s.version + (s.tcn ? 'T' : '') + '/' + sess + '?AQB=1&ndh=1' + (q ? q : '') + '&AQE=1';
            if (s.isie && !s.ismac)
                rs = s.fl(rs, 2047)
        }
        if (s.d.images && s.apv >= 3 && (!s.isopera || s.apv >= 7) && (s.ns6 < 0 || s.apv >= 6.1)) {
            if (!s.rc)
                s.rc = new Object;
            if (!s.rc[un]) {
                s.rc[un] = 1;
                if (!s.rl)
                    s.rl = new Object;
                s.rl[un] = new Array;
                setTimeout('if(window.s_c_il)window.s_c_il[' + s._in + '].mrq("' + un + '")', 750)
            } else {
                l = s.rl[un];
                if (l) { r.t = ta;
                    r.u = un;
                    r.r = rs;
                    l[l.length] = r;
                    return '' }
                imn += '_' + s.rc[un];
                s.rc[un]++
            }
            if (s.debugTracking) {
                var d = 'AppMeasurement Debug: ' + rs,
                    dl = s.sp(rs, '&'),
                    dln;
                for (dln = 0; dln < dl.length; dln++) d += "\n\t" + s.epa(dl[dln]);
                s.logDebug(d) }
            im = s.wd[imn];
            if (!im) im = s.wd[imn] = new Image;
            im.s_l = 0;
            im.onload = new Function('e', 'this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il[' + s._in + '];s.bcr();s.mrq("' + un + '");s.nrs--;if(!s.nrs)s.m_m("rr")}');
            if (!s.nrs) { s.nrs = 1;
                s.m_m('rs') } else s.nrs++;
            im.src = rs;
            if (s.useForcedLinkTracking || s.bcf) {
                if (!s.forcedLinkTrackingTimeout) s.forcedLinkTrackingTimeout = 250;
                setTimeout('if(window.s_c_il)window.s_c_il[' + s._in + '].bcr()', s.forcedLinkTrackingTimeout); } else if ((s.lnk || s.eo) && (!ta || ta == '_self' || ta == '_top' || ta == '_parent' || (s.wd.name && ta == s.wd.name))) { b = e = new Date;
                while (!im.s_l && e.getTime() - b.getTime() < 500) e = new Date }
            return ''
        }
        return '<im' + 'g sr' + 'c="' + rs + '" width=1 height=1 border=0 alt="">'
    };
    s.gg = function(v) {
        var s = this;
        if (!s.wd['s_' + v]) s.wd['s_' + v] = '';
        return s.wd['s_' + v] };
    s.glf = function(t, a) {
        if (t.substring(0, 2) == 's_') t = t.substring(2);
        var s = this,
            v = s.gg(t);
        if (v) s[t] = v };
    s.gl = function(v) {
        var s = this;
        if (s.pg) s.pt(v, ',', 'glf', 0) };
    s.rf = function(x) {
        var s = this,
            y, i, j, h, p, l = 0,
            q, a, b = '',
            c = '',
            t;
        if (x && x.length > 255) { y = '' + x;
            i = y.indexOf('?');
            if (i > 0) { q = y.substring(i + 1);
                y = y.substring(0, i);
                h = y.toLowerCase();
                j = 0;
                if (h.substring(0, 7) == 'http://') j += 7;
                else if (h.substring(0, 8) == 'https://') j += 8;
                i = h.indexOf("/", j);
                if (i > 0) { h = h.substring(j, i);
                    p = y.substring(i);
                    y = y.substring(0, i);
                    if (h.indexOf('google') >= 0) l = ',q,ie,start,search_key,word,kw,cd,';
                    else if (h.indexOf('yahoo.co') >= 0) l = ',p,ei,';
                    if (l && q) { a = s.sp(q, '&');
                        if (a && a.length > 1) {
                            for (j = 0; j < a.length; j++) { t = a[j];
                                i = t.indexOf('=');
                                if (i > 0 && l.indexOf(',' + t.substring(0, i) + ',') >= 0) b += (b ? '&' : '') + t;
                                else c += (c ? '&' : '') + t }
                            if (b && c) q = b + '&' + c;
                            else c = '' }
                        i = 253 - (q.length - c.length) - y.length;
                        x = y + (i > 0 ? p.substring(0, i) : '') + '?' + q } } } }
        return x };
    s.s2q = function(k, v, vf, vfp, f) {
        var s = this,
            qs = '',
            sk, sv, sp, ss, nke, nk, nf, nfl = 0,
            nfn, nfm;
        if (k == "contextData") k = "c";
        if (v) {
            for (sk in v)
                if ((!f || sk.substring(0, f.length) == f) && v[sk] && (!vf || vf.indexOf(',' + (vfp ? vfp + '.' : '') + sk + ',') >= 0) && (!Object || !Object.prototype || !Object.prototype[sk])) { nfm = 0;
                    if (nfl)
                        for (nfn = 0; nfn < nfl.length; nfn++)
                            if (sk.substring(0, nfl[nfn].length) == nfl[nfn]) nfm = 1;
                    if (!nfm) {
                        if (qs == '') qs += '&' + k + '.';
                        sv = v[sk];
                        if (f) sk = sk.substring(f.length);
                        if (sk.length > 0) { nke = sk.indexOf('.');
                            if (nke > 0) { nk = sk.substring(0, nke);
                                nf = (f ? f : '') + nk + '.';
                                if (!nfl) nfl = new Array;
                                nfl[nfl.length] = nf;
                                qs += s.s2q(nk, v, vf, vfp, nf) } else {
                                if (typeof(sv) == 'boolean') {
                                    if (sv) sv = 'true';
                                    else sv = 'false' }
                                if (sv) {
                                    if (vfp == 'retrieveLightData' && f.indexOf('.contextData.') < 0) { sp = sk.substring(0, 4);
                                        ss = sk.substring(4);
                                        if (sk == 'transactionID') sk = 'xact';
                                        else if (sk == 'channel') sk = 'ch';
                                        else if (sk == 'campaign') sk = 'v0';
                                        else if (s.num(ss)) {
                                            if (sp == 'prop') sk = 'c' + ss;
                                            else if (sp == 'eVar') sk = 'v' + ss;
                                            else if (sp == 'list') sk = 'l' + ss;
                                            else if (sp == 'hier') { sk = 'h' + ss;
                                                sv = sv.substring(0, 255) } } }
                                    qs += '&' + s.ape(sk) + '=' + s.ape(sv) } } } } }
            if (qs != '') qs += '&.' + k }
        return qs };
    s.hav = function() {
        var s = this,
            qs = '',
            l, fv = '',
            fe = '',
            mn, i, e;
        if (s.lightProfileID) { l = s.va_m;
            fv = s.lightTrackVars;
            if (fv) fv = ',' + fv + ',' + s.vl_mr + ',' } else { l = s.va_t;
            if (s.pe || s.linkType) { fv = s.linkTrackVars;
                fe = s.linkTrackEvents;
                if (s.pe) { mn = s.pe.substring(0, 1).toUpperCase() + s.pe.substring(1);
                    if (s[mn]) { fv = s[mn].trackVars;
                        fe = s[mn].trackEvents } } }
            if (fv) fv = ',' + fv + ',' + s.vl_l + ',' + s.vl_l2;
            if (fe) { fe = ',' + fe + ',';
                if (fv) fv += ',events,' }
            if (s.events2) e = (e ? ',' : '') + s.events2 }
        for (i = 0; i < l.length; i++) {
            var k = l[i],
                v = s[k],
                b = k.substring(0, 4),
                x = k.substring(4),
                n = parseInt(x),
                q = k;
            if (!v)
                if (k == 'events' && e) { v = e;
                    e = '' }
            if (v && (!fv || fv.indexOf(',' + k + ',') >= 0) && k != 'linkName' && k != 'linkType') {
                if (k == 'timestamp') q = 'ts';
                else if (k == 'dynamicVariablePrefix') q = 'D';
                else if (k == 'visitorID') q = 'vid';
                else if (k == 'pageURL') { q = 'g';
                    if (v.length > 255) { s.pageURLRest = v.substring(255);
                        v = v.substring(0, 255); } } else if (k == 'pageURLRest') q = '-g';
                else if (k == 'referrer') { q = 'r';
                    v = s.fl(s.rf(v), 255) } else if (k == 'vmk' || k == 'visitorMigrationKey') q = 'vmt';
                else if (k == 'visitorMigrationServer') { q = 'vmf';
                    if (s.ssl && s.visitorMigrationServerSecure) v = '' } else if (k == 'visitorMigrationServerSecure') { q = 'vmf';
                    if (!s.ssl && s.visitorMigrationServer) v = '' } else if (k == 'charSet') { q = 'ce';
                    if (v.toUpperCase() == 'AUTO') v = 'ISO8859-1';
                    else if (s.em == 2 || s.em == 3) v = 'UTF-8' } else if (k == 'visitorNamespace') q = 'ns';
                else if (k == 'cookieDomainPeriods') q = 'cdp';
                else if (k == 'cookieLifetime') q = 'cl';
                else if (k == 'variableProvider') q = 'vvp';
                else if (k == 'currencyCode') q = 'cc';
                else if (k == 'channel') q = 'ch';
                else if (k == 'transactionID') q = 'xact';
                else if (k == 'campaign') q = 'v0';
                else if (k == 'resolution') q = 's';
                else if (k == 'colorDepth') q = 'c';
                else if (k == 'javascriptVersion') q = 'j';
                else if (k == 'javaEnabled') q = 'v';
                else if (k == 'cookiesEnabled') q = 'k';
                else if (k == 'browserWidth') q = 'bw';
                else if (k == 'browserHeight') q = 'bh';
                else if (k == 'connectionType') q = 'ct';
                else if (k == 'homepage') q = 'hp';
                else if (k == 'plugins') q = 'p';
                else if (k == 'events') {
                    if (e) v += (v ? ',' : '') + e;
                    if (fe) v = s.fs(v, fe) } else if (k == 'events2') v = '';
                else if (k == 'contextData') { qs += s.s2q('c', s[k], fv, k, 0);
                    v = '' } else if (k == 'lightProfileID') q = 'mtp';
                else if (k == 'lightStoreForSeconds') { q = 'mtss';
                    if (!s.lightProfileID) v = '' } else if (k == 'lightIncrementBy') { q = 'mti';
                    if (!s.lightProfileID) v = '' } else if (k == 'retrieveLightProfiles') q = 'mtsr';
                else if (k == 'deleteLightProfiles') q = 'mtsd';
                else if (k == 'retrieveLightData') {
                    if (s.retrieveLightProfiles) qs += s.s2q('mts', s[k], fv, k, 0);
                    v = '' } else if (s.num(x)) {
                    if (b == 'prop') q = 'c' + n;
                    else if (b == 'eVar') q = 'v' + n;
                    else if (b == 'list') q = 'l' + n;
                    else if (b == 'hier') { q = 'h' + n;
                        v = s.fl(v, 255) } }
                if (v) qs += '&' + s.ape(q) + '=' + (k.substring(0, 3) != 'pev' ? s.ape(v) : v) } }
        return qs };
    s.ltdf = function(t, h) { t = t ? t.toLowerCase() : '';
        h = h ? h.toLowerCase() : '';
        var qi = h.indexOf('?'),
            hi = h.indexOf('#');
        if (qi >= 0) {
            if (hi >= 0 && hi < qi) qi = hi; } else qi = hi;
        h = qi >= 0 ? h.substring(0, qi) : h;
        if (t && h.substring(h.length - (t.length + 1)) == '.' + t) return 1;
        return 0 };
    s.ltef = function(t, h) { t = t ? t.toLowerCase() : '';
        h = h ? h.toLowerCase() : '';
        if (t && h.indexOf(t) >= 0) return 1;
        return 0 };
    s.lt = function(h) {
        var s = this,
            lft = s.linkDownloadFileTypes,
            lef = s.linkExternalFilters,
            lif = s.linkInternalFilters;
        lif = lif ? lif : s.wd.location.hostname;
        h = h.toLowerCase();
        if (s.trackDownloadLinks && lft && s.pt(lft, ',', 'ltdf', h)) return 'd';
        if (s.trackExternalLinks && h.indexOf('#') != 0 && h.indexOf('about:') != 0 && h.indexOf('javascript:') != 0 && (lef || lif) && (!lef || s.pt(lef, ',', 'ltef', h)) && (!lif || !s.pt(lif, ',', 'ltef', h))) return 'e';
        return '' };
    s.lc = new Function('e', 'var s=s_c_il[' + s._in + '],b=s.eh(this,"onclick");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');
    s.bcr = function() {
        var s = this;
        if (s.bct && s.bce) s.bct.dispatchEvent(s.bce);
        if (s.bcf) {
            if (typeof(s.bcf) == 'function') s.bcf();
            else if (s.bct && s.bct.href) s.d.location = s.bct.href }
        s.bct = s.bce = s.bcf = 0 };
    s.bc = new Function('e', 'if(e&&e.s_fe)return;var s=s_c_il[' + s._in + '],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener("click",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener("click",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!="A"&&a.tagName.toUpperCase()!="AREA")a=a.parentNode;if(a){h=a.href;if(h.indexOf("#")==0||h.indexOf("about:")==0||h.indexOf("javascript:")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t=="_self"||t=="_top"||t=="_parent"||(s.wd.name&&t==s.wd.name))){tcf=new Function("s","var x;try{n=s.d.createEvent(\\"MouseEvents\\")}catch(x){n=new MouseEvent}return n");n=tcf(s);if(n){tcf=new Function("n","e","var x;try{n.initMouseEvent(\\"click\\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget)}catch(x){n=0}return n");n=tcf(n,e);if(n){n.s_fe=1;e.stopPropagation();if (e.stopImmediatePropagation) {e.stopImmediatePropagation();}e.preventDefault();s.bct=e.target;s.bce=n}}}}}');
    s.oh = function(o) {
        var s = this,
            l = s.wd.location,
            h = o.href ? o.href : '',
            i, j, k, p;
        i = h.indexOf(':');
        j = h.indexOf('?');
        k = h.indexOf('/');
        if (h && (i < 0 || (j >= 0 && i > j) || (k >= 0 && i > k))) { p = o.protocol && o.protocol.length > 1 ? o.protocol : (l.protocol ? l.protocol : '');
            i = l.pathname.lastIndexOf('/');
            h = (p ? p + '//' : '') + (o.host ? o.host : (l.host ? l.host : '')) + (h.substring(0, 1) != '/' ? l.pathname.substring(0, i < 0 ? 0 : i) + '/' : '') + h }
        return h };
    s.ot = function(o) {
        var t = o.tagName;
        if (o.tagUrn || (o.scopeName && o.scopeName.toUpperCase() != 'HTML')) return '';
        t = t && t.toUpperCase ? t.toUpperCase() : '';
        if (t == 'SHAPE') t = '';
        if (t) {
            if ((t == 'INPUT' || t == 'BUTTON') && o.type && o.type.toUpperCase) t = o.type.toUpperCase();
            else if (!t && o.href) t = 'A'; }
        return t };
    s.oid = function(o) {
        var s = this,
            t = s.ot(o),
            p, c, n = '',
            x = 0;
        if (t && !o.s_oid) { p = o.protocol;
            c = o.onclick;
            if (o.href && (t == 'A' || t == 'AREA') && (!c || !p || p.toLowerCase().indexOf('javascript') < 0)) n = s.oh(o);
            else if (c) { n = s.rep(s.rep(s.rep(s.rep('' + c, "\r", ''), "\n", ''), "\t", ''), ' ', '');
                x = 2 } else if (t == 'INPUT' || t == 'SUBMIT') {
                if (o.value) n = o.value;
                else if (o.innerText) n = o.innerText;
                else if (o.textContent) n = o.textContent;
                x = 3 } else if (o.src && t == 'IMAGE') n = o.src;
            if (n) { o.s_oid = s.fl(n, 100);
                o.s_oidt = x } }
        return o.s_oid };
    s.rqf = function(t, un) {
        var s = this,
            e = t.indexOf('='),
            u = e >= 0 ? t.substring(0, e) : '',
            q = e >= 0 ? s.epa(t.substring(e + 1)) : '';
        if (u && q && (',' + u + ',').indexOf(',' + un + ',') >= 0) {
            if (u != s.un && s.un.indexOf(',') >= 0) q = '&u=' + u + q + '&u=0';
            return q }
        return '' };
    s.rq = function(un) {
        if (!un) un = this.un;
        var s = this,
            c = un.indexOf(','),
            v = s.c_r('s_sq'),
            q = '';
        if (c < 0) return s.pt(v, '&', 'rqf', un);
        return s.pt(un, ',', 'rq', 0) };
    s.sqp = function(t, a) {
        var s = this,
            e = t.indexOf('='),
            q = e < 0 ? '' : s.epa(t.substring(e + 1));
        s.sqq[q] = '';
        if (e >= 0) s.pt(t.substring(0, e), ',', 'sqs', q);
        return 0 };
    s.sqs = function(un, q) {
        var s = this;
        s.squ[un] = q;
        return 0 };
    s.sq = function(q) {
        var s = this,
            k = 's_sq',
            v = s.c_r(k),
            x, c = 0;
        s.sqq = new Object;
        s.squ = new Object;
        s.sqq[q] = '';
        s.pt(v, '&', 'sqp', 0);
        s.pt(s.un, ',', 'sqs', q);
        v = '';
        for (x in s.squ)
            if (x && (!Object || !Object.prototype || !Object.prototype[x])) s.sqq[s.squ[x]] += (s.sqq[s.squ[x]] ? ',' : '') + x;
        for (x in s.sqq)
            if (x && (!Object || !Object.prototype || !Object.prototype[x]) && s.sqq[x] && (x == q || c < 2)) { v += (v ? '&' : '') + s.sqq[x] + '=' + s.ape(x);
                c++ }
        return s.c_w(k, v, 0) };
    s.wdl = new Function('e', 'var s=s_c_il[' + s._in + '],r=true,b=s.eh(s.wd,"onload"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?""+o.onclick:"";if((oc.indexOf("s_gs(")<0||oc.indexOf(".s_oc(")>=0)&&oc.indexOf(".tl(")<0)s.eh(o,"onclick",0,s.lc);}return r');
    s.wds = function() {
        var s = this;
        if (s.apv > 3 && (!s.isie || !s.ismac || s.apv >= 5)) {
            if (s.b && s.b.attachEvent) s.b.attachEvent('onclick', s.bc);
            else if (s.b && s.b.addEventListener) {
                if (s.n && ((s.n.userAgent.indexOf('WebKit') >= 0 && s.d.createEvent) || (s.n.userAgent.indexOf('Firefox/2') >= 0 && s.wd.MouseEvent))) { s.bbc = 1;
                    s.useForcedLinkTracking = 1;
                    s.b.addEventListener('click', s.bc, true) }
                s.b.addEventListener('click', s.bc, false) } else s.eh(s.wd, 'onload', 0, s.wdl) } };
    s.vs = function(x) {
        var s = this,
            v = s.visitorSampling,
            g = s.visitorSamplingGroup,
            k = 's_vsn_' + s.un + (g ? '_' + g : ''),
            n = s.c_r(k),
            e = new Date,
            y = e.getYear();
        e.setYear(y + 10 + (y < 1900 ? 1900 : 0));
        if (v) { v *= 100;
            if (!n) {
                if (!s.c_w(k, x, e)) return 0;
                n = x }
            if (n % 10000 > v) return 0 }
        return 1 };
    s.dyasmf = function(t, m) {
        if (t && m && m.indexOf(t) >= 0) return 1;
        return 0 };
    s.dyasf = function(t, m) {
        var s = this,
            i = t ? t.indexOf('=') : -1,
            n, x;
        if (i >= 0 && m) {
            var n = t.substring(0, i),
                x = t.substring(i + 1);
            if (s.pt(x, ',', 'dyasmf', m)) return n }
        return 0 };
    s.uns = function() {
        var s = this,
            x = s.dynamicAccountSelection,
            l = s.dynamicAccountList,
            m = s.dynamicAccountMatch,
            n, i;
        s.un = s.un.toLowerCase();
        if (x && l) {
            if (!m) m = s.wd.location.host;
            if (!m.toLowerCase) m = '' + m;
            l = l.toLowerCase();
            m = m.toLowerCase();
            n = s.pt(l, ';', 'dyasf', m);
            if (n) s.un = n }
        i = s.un.indexOf(',');
        s.fun = i < 0 ? s.un : s.un.substring(0, i) };
    s.sa = function(un) {
        var s = this;
        if (s.un && s.mpc('sa', arguments)) return;
        s.un = un;
        if (!s.oun) s.oun = un;
        else if ((',' + s.oun + ',').indexOf(',' + un + ',') < 0) s.oun += ',' + un;
        s.uns() };
    s.m_i = function(n, a) {
        var s = this,
            m, f = n.substring(0, 1),
            r, l, i;
        if (!s.m_l) s.m_l = new Object;
        if (!s.m_nl) s.m_nl = new Array;
        m = s.m_l[n];
        if (!a && m && m._e && !m._i) s.m_a(n);
        if (!m) { m = new Object, m._c = 's_m';
            m._in = s.wd.s_c_in;
            m._il = s._il;
            m._il[m._in] = m;
            s.wd.s_c_in++;
            m.s = s;
            m._n = n;
            m._l = new Array('_c', '_in', '_il', '_i', '_e', '_d', '_dl', 's', 'n', '_r', '_g', '_g1', '_t', '_t1', '_x', '_x1', '_rs', '_rr', '_l');
            s.m_l[n] = m;
            s.m_nl[s.m_nl.length] = n } else if (m._r && !m._m) { r = m._r;
            r._m = m;
            l = m._l;
            for (i = 0; i < l.length; i++)
                if (m[l[i]]) r[l[i]] = m[l[i]];
            r._il[r._in] = r;
            m = s.m_l[n] = r }
        if (f == f.toUpperCase()) s[n] = m;
        return m };
    s.m_a = new Function('n', 'g', 'e', 'if(!g)g="m_"+n;var s=s_c_il[' + s._in + '],c=s[g+"_c"],m,x,f=0;if(s.mpc("m_a",arguments))return;if(!c)c=s.wd["s_"+g+"_c"];if(c&&s_d)s[g]=new Function("s",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\'s_\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!="m_"+n)){m._i=f=1;if((""+x).indexOf("function")>=0)x(s);else s.m_m("x",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');
    s.m_m = function(t, n, d, e) { t = '_' + t;
        var s = this,
            i, x, m, f = '_' + t,
            r = 0,
            u;
        if (s.m_l && s.m_nl)
            for (i = 0; i < s.m_nl.length; i++) { x = s.m_nl[i];
                if (!n || x == n) { m = s.m_i(x);
                    u = m[t];
                    if (u) {
                        if (('' + u).indexOf('function') >= 0) {
                            if (d && e) u = m[t](d, e);
                            else if (d) u = m[t](d);
                            else u = m[t]() } }
                    if (u) r = 1;
                    u = m[t + 1];
                    if (u && !m[f]) {
                        if (('' + u).indexOf('function') >= 0) {
                            if (d && e) u = m[t + 1](d, e);
                            else if (d) u = m[t + 1](d);
                            else u = m[t + 1]() } }
                    m[f] = 1;
                    if (u) r = 1 } }
        return r };
    s.m_ll = function() {
        var s = this,
            g = s.m_dl,
            i, o;
        if (g)
            for (i = 0; i < g.length; i++) { o = g[i];
                if (o) s.loadModule(o.n, o.u, o.d, o.l, o.e, 1);
                g[i] = 0 } };
    s.loadModule = function(n, u, d, l, e, ln) {
        var s = this,
            m = 0,
            i, g, o = 0,
            f1, f2, c = s.h ? s.h : s.b,
            b, tcf;
        if (n) { i = n.indexOf(':');
            if (i >= 0) { g = n.substring(i + 1);
                n = n.substring(0, i) } else g = "m_" + n;
            m = s.m_i(n) }
        if ((l || (n && !s.m_a(n, g))) && u && s.d && c && s.d.createElement) {
            if (d) { m._d = 1;
                m._dl = 1 }
            if (ln) {
                if (s.ssl) u = s.rep(u, 'http:', 'https:');
                i = 's_s:' + s._in + ':' + n + ':' + g;
                b = 'var s=s_c_il[' + s._in + '],o=s.d.getElementById("' + i + '");if(s&&o){if(!o.l&&s.wd.' + g + '){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a("' + n + '","' + g + '"' + (e ? ',"' + e + '"' : '') + ')}';
                f2 = b + 'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';
                f1 = new Function('e', b + '}');
                tcf = new Function('s', 'c', 'i', 'u', 'f1', 'f2', 'var e,o=0;try{o=s.d.createElement("script");if(o){o.type="text/javascript";' + (n ? 'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;' : '') + 'o.src=u;c.appendChild(o);' + (n ? 'o.c=0;o.i=setTimeout(f2,100)' : '') + '}}catch(e){o=0}return o');
                o = tcf(s, c, i, u, f1, f2) } else { o = new Object;
                o.n = n + ':' + g;
                o.u = u;
                o.d = d;
                o.l = l;
                o.e = e;
                g = s.m_dl;
                if (!g) g = s.m_dl = new Array;
                i = 0;
                while (i < g.length && g[i]) i++;
                g[i] = o } } else if (n) { m = s.m_i(n);
            m._e = 1 }
        return m };
    s.voa = function(vo, r) {
        var s = this,
            l = s.va_g,
            i, k, v, x;
        for (i = 0; i < l.length; i++) { k = l[i];
            v = vo[k];
            if (v || vo['!' + k]) {
                if (!r && (k == "contextData" || k == "retrieveLightData") && s[k])
                    for (x in s[k])
                        if (!v[x]) v[x] = s[k][x];
                s[k] = v } } };
    s.vob = function(vo) {
        var s = this,
            l = s.va_g,
            i, k;
        for (i = 0; i < l.length; i++) { k = l[i];
            vo[k] = s[k];
            if (!vo[k]) vo['!' + k] = 1 } };
    s.dlt = new Function('var s=s_c_il[' + s._in + '],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m("d")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');
    s.dl = function(vo) {
        var s = this,
            d = new Date;
        if (!vo) vo = new Object;
        s.vob(vo);
        vo._t = d.getTime();
        if (!s.dll) s.dll = new Array;
        s.dll[s.dll.length] = vo;
        if (!s.maxDelay) s.maxDelay = 250;
        s.dlt() };
    s.gfid = function() {
        var s = this,
            d = '0123456789ABCDEF',
            k = 's_fid',
            fid = s.c_r(k),
            h = '',
            l = '',
            i, j, m = 8,
            n = 4,
            e = new Date,
            y;
        if (!fid || fid.indexOf('-') < 0) {
            for (i = 0; i < 16; i++) { j = Math.floor(Math.random() * m);
                h += d.substring(j, j + 1);
                j = Math.floor(Math.random() * n);
                l += d.substring(j, j + 1);
                m = n = 16 }
            fid = h + '-' + l; }
        y = e.getYear();
        e.setYear(y + 2 + (y < 1900 ? 1900 : 0));
        if (!s.c_w(k, fid, e)) fid = 0;
        return fid };
    s.applyADMS = function() {
        var s = this,
            vb = new Object;
        if (s.wd.ADMS && !s.visitorID && !s.admsc) {
            if (!s.adms) s.adms = ADMS.getDefault();
            if (!s.admsq) { s.visitorID = s.adms.getVisitorID(new Function('v', 'var s=s_c_il[' + s._in + '],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));
                if (!s.visitorID) s.admsq = new Array }
            if (s.admsq) { s.vob(vb);
                vb['!visitorID'] = 0;
                s.admsq.push(vb);
                return 1 } else {
                if (s.visitorID == -1) s.visitorID = 0 } }
        return 0 };
    s.track = s.t = function(vo) {
        var s = this,
            trk = 1,
            tm = new Date,
            sed = Math && Math.random ? Math.floor(Math.random() * 10000000000000) : tm.getTime(),
            sess = 's' + Math.floor(tm.getTime() / 10800000) % 10 + sed,
            y = tm.getYear(),
            vt = tm.getDate() + '/' + tm.getMonth() + '/' + (y < 1900 ? y + 1900 : y) + ' ' + tm.getHours() + ':' + tm.getMinutes() + ':' + tm.getSeconds() + ' ' + tm.getDay() + ' ' + tm.getTimezoneOffset(),
            tcf, tfs = s.gtfs(),
            ta = -1,
            q = '',
            qs = '',
            code = '',
            vb = new Object;
        if (s.mpc('t', arguments)) return;
        s.gl(s.vl_g);
        s.uns();
        s.m_ll();
        if (!s.td) {
            var tl = tfs.location,
                a, o, i, x = '',
                c = '',
                v = '',
                p = '',
                bw = '',
                bh = '',
                j = '1.0',
                k = s.c_w('s_cc', 'true', 0) ? 'Y' : 'N',
                hp = '',
                ct = '',
                pn = 0,
                ps;
            if (String && String.prototype) { j = '1.1';
                if (j.match) { j = '1.2';
                    if (tm.setUTCDate) { j = '1.3';
                        if (s.isie && s.ismac && s.apv >= 5) j = '1.4';
                        if (pn.toPrecision) { j = '1.5';
                            a = new Array;
                            if (a.forEach) { j = '1.6';
                                i = 0;
                                o = new Object;
                                tcf = new Function('o', 'var e,i=0;try{i=new Iterator(o)}catch(e){}return i');
                                i = tcf(o);
                                if (i && i.next) { j = '1.7';
                                    if (a.reduce) { j = '1.8';
                                        if (j.trim) { j = '1.8.1';
                                            if (Date.parse) { j = '1.8.2';
                                                if (Object.create) j = '1.8.5' } } } } } } } } }
            if (s.apv >= 4) x = screen.width + 'x' + screen.height;
            if (s.isns || s.isopera) {
                if (s.apv >= 3) { v = s.n.javaEnabled() ? 'Y' : 'N';
                    if (s.apv >= 4) { c = screen.pixelDepth;
                        bw = s.wd.innerWidth;
                        bh = s.wd.innerHeight } }
                s.pl = s.n.plugins } else if (s.isie) {
                if (s.apv >= 4) { v = s.n.javaEnabled() ? 'Y' : 'N';
                    c = screen.colorDepth;
                    if (s.apv >= 5) { bw = s.d.documentElement.offsetWidth;
                        bh = s.d.documentElement.offsetHeight;
                        if (!s.ismac && s.b) { tcf = new Function('s', 'tl', 'var e,hp=0;try{s.b.addBehavior("#default#homePage");hp=s.b.isHomePage(tl)?"Y":"N"}catch(e){}return hp');
                            hp = tcf(s, tl);
                            tcf = new Function('s', 'var e,ct=0;try{s.b.addBehavior("#default#clientCaps");ct=s.b.connectionType}catch(e){}return ct');
                            ct = tcf(s) } } } else r = '' }
            if (s.pl)
                while (pn < s.pl.length && pn < 30) { ps = s.fl(s.pl[pn].name, 100) + ';';
                    if (p.indexOf(ps) < 0) p += ps;
                    pn++ }
            s.resolution = x;
            s.colorDepth = c;
            s.javascriptVersion = j;
            s.javaEnabled = v;
            s.cookiesEnabled = k;
            s.browserWidth = bw;
            s.browserHeight = bh;
            s.connectionType = ct;
            s.homepage = hp;
            s.plugins = p;
            s.td = 1 }
        if (vo) { s.vob(vb);
            s.voa(vo) }
        s.fid = s.gfid();
        if (s.applyADMS()) return '';
        if ((vo && vo._t) || !s.m_m('d')) {
            if (s.usePlugins) s.doPlugins(s);
            if (!s.abort) {
                var l = s.wd.location,
                    r = tfs.document.referrer;
                if (!s.pageURL) s.pageURL = l.href ? l.href : l;
                if (!s.referrer && !s._1_referrer) { s.referrer = r;
                    s._1_referrer = 1 }
                s.m_m('g');
                if (s.lnk || s.eo) {
                    var o = s.eo ? s.eo : s.lnk,
                        p = s.pageName,
                        w = 1,
                        t = s.ot(o),
                        n = s.oid(o),
                        x = o.s_oidt,
                        h, l, i, oc;
                    if (s.eo && o == s.eo) {
                        while (o && !n && t != 'BODY') { o = o.parentElement ? o.parentElement : o.parentNode;
                            if (o) { t = s.ot(o);
                                n = s.oid(o);
                                x = o.s_oidt } }
                        if (!n || t == 'BODY') o = '';
                        if (o) { oc = o.onclick ? '' + o.onclick : '';
                            if ((oc.indexOf('s_gs(') >= 0 && oc.indexOf('.s_oc(') < 0) || oc.indexOf('.tl(') >= 0) o = 0 } }
                    if (o) {
                        if (n) ta = o.target;
                        h = s.oh(o);
                        i = h.indexOf('?');
                        h = s.linkLeaveQueryString || i < 0 ? h : h.substring(0, i);
                        l = s.linkName;
                        t = s.linkType ? s.linkType.toLowerCase() : s.lt(h);
                        if (t && (h || l)) { s.pe = 'lnk_' + (t == 'd' || t == 'e' ? t : 'o');
                            s.pev1 = (h ? s.ape(h) : '');
                            s.pev2 = (l ? s.ape(l) : '') } else trk = 0;
                        if (s.trackInlineStats) {
                            if (!p) { p = s.pageURL;
                                w = 0 }
                            t = s.ot(o);
                            i = o.sourceIndex;
                            if (o.dataset && o.dataset.sObjectId) { s.wd.s_objectID = o.dataset.sObjectId; } else if (o.getAttribute && o.getAttribute('data-s-object-id')) { s.wd.s_objectID = o.getAttribute('data-s-object-id'); } else if (s.useForcedLinkTracking) { s.wd.s_objectID = '';
                                oc = o.onclick ? '' + o.onclick : '';
                                if (oc) {
                                    var ocb = oc.indexOf('s_objectID'),
                                        oce, ocq, ocx;
                                    if (ocb >= 0) { ocb += 10;
                                        while (ocb < oc.length && ("= \t\r\n").indexOf(oc.charAt(ocb)) >= 0) ocb++;
                                        if (ocb < oc.length) { oce = ocb;
                                            ocq = ocx = 0;
                                            while (oce < oc.length && (oc.charAt(oce) != ';' || ocq)) {
                                                if (ocq) {
                                                    if (oc.charAt(oce) == ocq && !ocx) ocq = 0;
                                                    else if (oc.charAt(oce) == "\\") ocx = !ocx;
                                                    else ocx = 0; } else { ocq = oc.charAt(oce);
                                                    if (ocq != '"' && ocq != "'") ocq = 0 }
                                                oce++; }
                                            oc = oc.substring(ocb, oce);
                                            if (oc) { o.s_soid = new Function('s', 'var e;try{s.wd.s_objectID=' + oc + '}catch(e){}');
                                                o.s_soid(s) } } } } }
                            if (s.gg('objectID')) { n = s.gg('objectID');
                                x = 1;
                                i = 1 }
                            if (p && n && t) qs = '&pid=' + s.ape(s.fl(p, 255)) + (w ? '&pidt=' + w : '') + '&oid=' + s.ape(s.fl(n, 100)) + (x ? '&oidt=' + x : '') + '&ot=' + s.ape(t) + (i ? '&oi=' + i : '') } } else trk = 0 }
                if (trk || qs) { s.sampled = s.vs(sed);
                    if (trk) {
                        if (s.sampled) code = s.mr(sess, (vt ? '&t=' + s.ape(vt) : '') + s.hav() + q + (qs ? qs : s.rq()), 0, ta);
                        qs = '';
                        s.m_m('t');
                        if (s.p_r) s.p_r();
                        s.referrer = s.lightProfileID = s.retrieveLightProfiles = s.deleteLightProfiles = '' }
                    s.sq(qs) }
				}
			} 
			else 
				s.dl(vo);
        if (vo) s.voa(vb, 1);
        s.abort = 0;
        s.pageURLRest = s.lnk = s.eo = s.linkName = s.linkType = s.wd.s_objectID = s.ppu = s.pe = s.pev1 = s.pev2 = s.pev3 = '';
        if (s.pg) s.wd.s_lnk = s.wd.s_eo = s.wd.s_linkName = s.wd.s_linkType = '';
        return code };
    s.trackLink = s.tl = function(o, t, n, vo, f) {
        var s = this;
        s.lnk = o;
        s.linkType = t;
        s.linkName = n;
        if (f) { s.bct = o;
            s.bcf = f }
        s.t(vo) };
    s.trackLight = function(p, ss, i, vo) {
        var s = this;
        s.lightProfileID = p;
        s.lightStoreForSeconds = ss;
        s.lightIncrementBy = i;
        s.t(vo) };
    s.setTagContainer = function(n) {
        var s = this,
            l = s.wd.s_c_il,
            i, t, x, y;
        s.tcn = n;
        if (l)
            for (i = 0; i < l.length; i++) { t = l[i];
                if (t && t._c == 's_l' && t.tagContainerName == n) { s.voa(t);
                    if (t.lmq)
                        for (i = 0; i < t.lmq.length; i++) { x = t.lmq[i];
                            y = 'm_' + x.n;
                            if (!s[y] && !s[y + '_c']) { s[y] = t[y];
                                s[y + '_c'] = t[y + '_c'] }
                            s.loadModule(x.n, x.u, x.d) }
                    if (t.ml)
                        for (x in t.ml)
                            if (s[x]) { y = s[x];
                                x = t.ml[x];
                                for (i in x)
                                    if (!Object.prototype[i]) {
                                        if (typeof(x[i]) != 'function' || ('' + x[i]).indexOf('s_c_il') < 0) y[i] = x[i] } }
                    if (t.mmq)
                        for (i = 0; i < t.mmq.length; i++) { x = t.mmq[i];
                            if (s[x.m]) { y = s[x.m];
                                if (y[x.f] && typeof(y[x.f]) == 'function') {
                                    if (x.a) y[x.f].apply(y, x.a);
                                    else y[x.f].apply(y) } } }
                    if (t.tq)
                        for (i = 0; i < t.tq.length; i++) s.t(t.tq[i]);
                    t.s = s;
                    return } } };
    s.wd = window;
    s.ssl = (s.wd.location.protocol.toLowerCase().indexOf('https') >= 0);
    s.d = document;
    s.b = s.d.body;
    if (s.d.getElementsByTagName) { s.h = s.d.getElementsByTagName('HEAD');
        if (s.h) s.h = s.h[0] }
    s.n = navigator;
    s.u = s.n.userAgent;
    s.ns6 = s.u.indexOf('Netscape6/');
    var apn = s.n.appName,
        v = s.n.appVersion,
        ie = v.indexOf('MSIE '),
        o = s.u.indexOf('Opera '),
        i;
    if (v.indexOf('Opera') >= 0 || o > 0) apn = 'Opera';
    s.isie = (apn == 'Microsoft Internet Explorer');
    s.isns = (apn == 'Netscape');
    s.isopera = (apn == 'Opera');
    s.ismac = (s.u.indexOf('Mac') >= 0);
    if (o > 0) s.apv = parseFloat(s.u.substring(o + 6));
    else if (ie > 0) { s.apv = parseInt(i = v.substring(ie + 5));
        if (s.apv > 3) s.apv = parseFloat(i) } else if (s.ns6 > 0) s.apv = parseFloat(s.u.substring(s.ns6 + 10));
    else s.apv = parseFloat(v);
    s.em = 0;
    if (s.em.toPrecision) s.em = 3;
    else if (String.fromCharCode) { i = escape(String.fromCharCode(256)).toUpperCase();
        s.em = (i == '%C4%80' ? 2 : (i == '%U0100' ? 1 : 0)) }
    if (s.oun) s.sa(s.oun);
    s.sa(un);
    s.vl_l = 'timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';
    s.va_l = s.sp(s.vl_l, ',');
    s.vl_mr = s.vl_m = 'timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';
    s.vl_t = s.vl_l + ',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';
    var n;
    for (n = 1; n <= 75; n++) { s.vl_t += ',prop' + n + ',eVar' + n;
        s.vl_m += ',prop' + n + ',eVar' + n }
    for (n = 1; n <= 5; n++) s.vl_t += ',hier' + n;
    for (n = 1; n <= 3; n++) s.vl_t += ',list' + n;
    s.va_m = s.sp(s.vl_m, ',');
    s.vl_l2 = ',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';
    s.vl_t += s.vl_l2;
    s.va_t = s.sp(s.vl_t, ',');
    s.vl_g = s.vl_t + ',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';
    s.va_g = s.sp(s.vl_g, ',');
    s.pg = pg;
    s.gl(s.vl_g);
    s.contextData = new Object;
    s.retrieveLightData = new Object;
    if (!ss) s.wds();
    if (pg) { s.wd.s_co = function(o) {
            return o };
        s.wd.s_gs = function(un) { s_gi(un, 1, 1).t() };
        s.wd.s_dc = function(un) { s_gi(un, 1).t() } }
})(s, un, pg, ss);

    return s
}

function s_giqf() {
    var w = window,
        q = w.s_giq,
        i, t, s;
    if (q)
        for (i = 0; i < q.length; i++) { t = q[i];
            s = s_gi(t.oun);
            s.sa(t.un);
            s.setTagContainer(t.tagContainerName) }
    w.s_giq = 0 }
s_giqf();


/**************************************************************************************************************************
 *
 *                           NEWEGG DEVELOPE
 *
 **************************************************************************************************************************/
function neg_s_tl() {
    s.ntl = function(o, t, n, vo, f) {
        s_propLengthLimit(s);
        if (vo) {
            s_propLengthLimit(vo);
        }
        s.tl(o, t, n, vo, f);
    }
}
neg_s_tl();

(function() {
    function _ne_om() {
        if (typeof(_om_pageinfo) == 'undefined' || typeof(s) == 'undefined') return;

        function dynamicVariable() {
            _om_neg_function.setCustomerLoginStatus();
            _om_neg_function.bannerImpressions();
            _om_neg_function.tab_track();
            _om_neg_function.internalSearchRedirect();
            _om_neg_function.emc_track();
            _om_neg_function.bannerClickTrack();

            _om_neg_function.addCallbackFunc(_om_neg_function.registerOrLoginSuccess);

            s.eVar22 = _om_neg_function.customerID();
            s.eVar43 = s.prop34 = decodeURI(escape($.newegg.cookie.get('CustomerLogin', 'Rank')));
            s.prop36 = $.newegg.cookie.get("__utma");
            s.prop35 = $.newegg.cookie.get("__NVTC");
            s.eVar59 = s.prop37 = s_getLoadTime();
            if (s.prop26) {
                var layout = _om_neg_function.productLayOut();
                if (!layout) {
                    layout = 'Gallery';
                }
                var pageSize = s.getQueryParam('pageSize');
                if (!pageSize) {
                    pageSize = 24;
                }
                s.prop26 = 'page' + s.prop26 + ':' + pageSize + ':' + (layout == 'Row' ? 'List View' : 'Gallery');
            }

            try {
                s.prop29 = s.getDaysSinceLastVisit("s_prop29");
            } catch (e) {}

            _om_neg_function.getReferrer();
        }

        function sendExtPageInfo_TL() {
            if (_om_neg_function.callBackFunc) {
                $.each(_om_neg_function.callBackFunc, function(i, e) {
                    e();
                });
            }

            if (!_om_pageinfo._ext_OrderInfoList) {
                return;
            }

            for (var p in _om_pageinfo._ext_OrderInfoList) {
                var pageInfo = _om_pageinfo._ext_OrderInfoList[p];

                s.linkTrackVars = 'events,products,purchaseID,eVar11,eVar12,eVar13,eVar23,eVar40,eVar25,eVar26,eVar56,zip,state,eVar38';
                s.linkTrackEvents = s.events = pageInfo.events;
                s.products = pageInfo.products;
                s.purchaseID = pageInfo.purchaseID;
                s.eVar11 = pageInfo.eVar11;
                s.eVar12 = pageInfo.eVar12;
                s.eVar13 = pageInfo.eVar13;
                s.eVar23 = pageInfo.eVar23;
                s.eVar40 = pageInfo.eVar40;
                s.eVar38 = pageInfo.eVar38;

                s.ntl(this, 'o', 'order:' + pageInfo.purchaseID);
            }
        }

        for (var item in _om_pageinfo) {
            if (item.indexOf('_ext_') == 0) {
                continue;
            }

            var value = _om_pageinfo[item];
            if (value && typeof(value) == 'string') {
                var index = value.indexOf('_call_function_');
                if (index == 0) {
                    var _callFunctionName = value.substring(index + 15);

                    if (_callFunctionName) {
                        var callFunction = _om_neg_function[_callFunctionName];
                        if (callFunction) {
                            value = callFunction();
                        }
                    }
                }
            }

            if (item.indexOf("_call_only_") == -1) {
                s[item] = value;
            }
        }

        dynamicVariable();
        var s_code = s.t();
        if (s_code) {
            document.write(s_code);
        }

        sendExtPageInfo_TL();
    }

    var _om_neg_function = {
        addCallbackFunc: function(callback) {
            if (typeof callback != 'function') {
                return;
            }

            if (!_om_neg_function.callBackFunc) {
                _om_neg_function.callBackFunc = [];
            }

            _om_neg_function.callBackFunc.push(callback);
        },
        productLayOut: function() {
            return $.newegg.cookie.get("ProductLayOut", "GridRow");
        },
        setCustomerLoginStatus: function() {
            var login = $.newegg.cookie.get("CustomerLogin", "ID");
            s.eVar51 = login ? "Login" : "Non-Login";

            var cid = $.newegg.cookie.get("LoginValidate", "CID");
            s.eVar24 = cid ? "Registered" : "Non-Registered";
            s.eVar24 = s.getValOnce(s.eVar24, 's_eVar24', 1, 'y');
        },
        customerID: function() {
            var cid = decodeURI(escape($.newegg.cookie.get("LoginValidate", "CID")));
            return cid;
        },
        removeShoppingCart: function(element, itemCode, quantity, price) {
            if (!itemCode) {
                return;
            }

            var productCode = '';
            var array = itemCode.split(',');
            if (array.length == 1) {
                if (quantity && price)
                    productCode = ";" + itemCode + ';' + quantity + ';' + price;
                else
                    productCode = ";" + itemCode;
            } else {
                if (quantity && price) {
                    var quantityArray = quantity.split(',');
                    var priceArray = price.split(',');
                }

                for (var i = 0; i < array.length; i++) {
                    if (i > 0) {
                        productCode += ',';
                    }

                    if (quantity && price) {
                        var q = quantityArray.length == 1 ? quantity : quantityArray[i];
                        var p = priceArray.length == 1 ? price : priceArray[i];

                        productCode += ";" + array[i] + ';' + q + ';' + p / array.length;
                    } else
                        productCode += ";" + array[i];
                }
            }

            s.linkTrackVars = 'events,products';
            s.linkTrackEvents = s.events = 'scRemove';

            overrideObject = new Object();
            overrideObject.products = productCode;

            s.ntl(this, 'o', 'removeShoppingCart', overrideObject);
        },
        goCheckout: function(element) {
            s.linkTrackVars = 'events,eVar52';
            s.eVar52 = '+4';
            s.linkTrackEvents = s.events = 'scCheckout,event43';
            s.ntl(this, 'o', 'Checkout Initiated');
        },
        /* 
         * s_crossSell: Record the referring product and cross-sell location
         * when a recommended item is clicked
         */
        crossSell: function(data) {
            _om_neg_function.clickProductElement(data, function(arg) {

                var code = arg.code

                s.linkTrackVars = 'eVar7,eVar8,products';
                s.linkTrackEvents = '';

                s.products = ";" + code;
                if (data.Type) {
                    s.eVar8 = code;
                    s.eVar7 = data.pageName;
                } else {
                    s.eVar8 = data.mainPriductID;
                    s.eVar7 = data.pageName + ":" + data.name;
                }
                s.ntl(this, 'o', 'cross-sell');
            });
        },
        socialShareType: function(data) {
            function send() {
                if (data.login && !_om_neg_function.customerID()) {
                    return;
                }

                if (!data.type) {
                    id = $(this).attr("id") || $(this).attr("name");
                    if (id.indexOf('shareCtner_') != -1) {
                        type = id.substring(11);
                    } else {
                        return;
                    }
                } else {
                    type = data.type;
                }

                s.linkTrackVars = 'eVar39,events,eVar52,eVar46';
                s.linkTrackEvents = s.events = 'event31,event25';

                overrideObject = new Object();
                overrideObject.eVar52 = '+3';
                overrideObject.eVar39 = type;
                overrideObject.eVar46 = s.pageName;
                if (data.productCode) {
                    overrideObject.products = ';' + data.productCode;
                    s.linkTrackVars = s.apl(s.linkTrackVars, 'products', ',', 2);
                }

                s.ntl(this, 'o', 'Social Share Type', overrideObject);
            }

            if (data.live) {
                $(data.container).delegate(data.elementType, 'click', send);
            } else if (data.id) {
                $(data.id).click(send);
            }
            if (data.send) {
                send();
            }
        },
        subScription: function(location) {
            s.linkTrackVars = 'eVar27,events,eVar52';
            s.linkTrackEvents = s.events = 'event21,event25';
            s.eVar27 = location;
            s.eVar52 = '+3';
            s.ntl(this, 'o', 'Email SubScription');
        },
        bannerImpressions: function() {
            var banner = [];
            var bannerSpecific = [];
            $("a").each(function(i, e) {
                e = $(e);
                var cm_sp_link = e.attr("href");
                if (cm_sp_link) {
                    var lowerLink = cm_sp_link.toLowerCase();
                    if (lowerLink.indexOf("cm_sp=") != -1 || lowerLink.indexOf("icid=") != -1) {
                        var cm_sp_value = _om_neg_function.linkQueryString(cm_sp_link)['icid'];
                        if (!cm_sp_value) {
                            cm_sp_value = _om_neg_function.linkQueryString(cm_sp_link)['cm_sp'];
                        }
                        if (cm_sp_value) {
                            cm_sp_value = cm_sp_value.replace(',', '#');
                            if (!check(cm_sp_value)) {
                                banner.push(cm_sp_value);

                                if (e.attr('bi')) {
                                    bannerSpecific.push(cm_sp_value);
                                }
                            }
                        }
                    }
                }
            });

            function check(e) {
                for (var i = 0; i < banner.length; i++) {
                    if (banner[i] == e) {
                        return true;
                    }
                }

                return false;
            }

            if (banner.length) {
                var info = bannerSpecific.length ? bannerSpecific.join(',') : banner.join(',');
                s.list1 = info;
                s.events = s.apl(s.events, 'event8', ',', 2);
            }
        },
        bannerClickTrack: function() { //banner 点击事件
            var banner = [];
            var bannerSpecific = [];
            $("a").each(function(i, e) {
                e = $(e);
                var cm_sp_link = e.attr("href");
                if (cm_sp_link) {
                    var lowerLink = cm_sp_link.toLowerCase();
                    if (lowerLink.indexOf("cm_sp=") != -1 || lowerLink.indexOf("icid=") != -1) {
                        var cm_sp_value = _om_neg_function.linkQueryString(cm_sp_link)['icid'];
                        if (!cm_sp_value) {
                            cm_sp_value = _om_neg_function.linkQueryString(cm_sp_link)['cm_sp'];
                        }
                        if (cm_sp_value) {
                            e.click(function() {
                                s.linkTrackVars = 'list1,events';
                                s.linkTrackEvents = s.events = 'event55';
                                s.list1 = cm_sp_value;
                                s.ntl(this, 'o', 'bannerClick_Track');
                            });

                        }
                    }
                }
            });
        },
        productImpressions: function(e) {
            var products = _om_neg_function.clickProductElement(e.id);
            if (products && products.length) {
                var array = [];

                $.each(products, function(i, element) {
                    var link = $(element);
                    var i = link.data('i');
                    var code = link.data('c');
                    if (!code) {
                        return;
                    }

                    var value = e.pageName + ":" + e.name + ":" + code + ":" + i;
                    if (!check(value)) {
                        array.push(value);
                    }
                });

                function check(e) {
                    for (var i = 0; i < array.length; i++) {
                        if (array[i] == e) {
                            return true;
                        }
                    }

                    return false;
                }

                if (array.length) {
                    overrideObj = new Object();
                    overrideObj.linkTrackVars = 'prop21';
                    overrideObj.linkTrackEvents = '';
                    overrideObj.prop21 = array.join(',');

                    s.ntl(this, 'o', 'ProductImpression_track', overrideObj);
                }
            }
        },
        tab_track: function() {
            if (!_om_pageinfo._ext_pageName) {
                return;
            }
            if (_om_pageinfo._ext_pageName != 'HomePage' && _om_pageinfo._ext_pageName != 'ProductDetail') {
                return;
            }

            $('.tab a').click(tab);
            $('.tabHead a').click(tab);

            function tab() {
                var tab = $(this);
                var tabName = tab[0].innerText || tab[0].textContent;
                if (!tabName) {
                    tabName = tab.attr("href");
                }

                tabName = _om_pageinfo._ext_pageName + ":" + tabName;

                s.linkTrackVars = 'events,prop19';
                s.linkTrackEvents = s.events = 'event40';
                s.prop19 = tabName;
                s.ntl(this, 'o', 'tab_track');
            }
        },
        productdetailAddToCart: function(data) {

            if (data.relAction) {
                data.relAction = data.relAction.replace("Add", "scAdd");
                data.relAction = data.relAction.replace("Open", "scOpen");
                data.relAction = data.relAction.replace("BuyPartner", "event19");
                data.relAction = data.relAction.replace("optionalSaleRule", "event19");
                data.relAction = data.relAction.replace("todaybomb", "event19");
                data.relAction = data.relAction.replace("combo", "event19");

                data.relAction = data.relAction.replace(/:/g, ',');
            }

            overrideObject = new Object();
            if (data.code && data.price && data.count) {
                overrideObject.products = ';' + data.code + ';' + data.count + ';' + data.price * data.count;
                s.eVar9 = s.pageName;
                s.linkTrackEvents = s.events = data.relAction;
                s.linkTrackVars = 'events,products,eVar9';
            }

            s.ntl(this, 'o', 'productdetailAddToCart', overrideObject);
        },
        recommendation_track: function(e) {
            function rec(arg) {
                var i = arg.index;
                var code = arg.code;

                var row = ':Row1';
                if (e.multiLine) {
                    row = Math.ceil(i / 4);
                    var column = i % 4;
                    column = (column == 0) ? 4 : column;

                    row = ':Row' + row;
                    i = column;
                }

                var aindex = '';
                var name = arg.name || e.name;
                if (name) {
                    var tindex = name.indexOf("-||_||-");
                    if (tindex != -1) {
                        aindex = name.substring(0, tindex);
                        aindex = ':Floor' + (parseInt(aindex) + 1);
                        name = name.substring(tindex + 7);
                    }
                }

                s.linkTrackVars = 'prop38,eVar61';
                s.linkTrackEvents = '';
                s.eVar61 = s.prop38 = e.pageName + aindex + ":" + name + ":" + code + ":" + i + row;
                s.ntl(this, 'o', 'recommendation_track');
            }

            _om_neg_function.clickProductElement(e, rec);
        },
        internalSearchRedirect: function() {
            var sr = $.newegg.querystring.get('om_sr');
            if (sr) {
                s.prop5 = s.eVar18 = 'redirect';
            }
        },
        searchProduct: function() {

            function doSearch(arg) {
                var row = _om_neg_function.productLayOut();
                if (row && row == 'Row') {
                    return;
                }

                var i = arg.index;
                var code = arg.code;

                s.linkTrackVars = 'eVar62,products';
                s.linkTrackEvents = s.events = 'event41';

                var row = Math.ceil(i / 4);
                var column = i % 4;
                column = (column == 0) ? 4 : column;

                overrideObject = new Object();
                overrideObject.products = ';' + code;
                overrideObject.eVar62 = 'Row' + row + '-Slot' + column;

                s.ntl(this, 'o', 'Search_Product_track', overrideObject);
            }

            _om_neg_function.clickProductElement('.prolist .cls a', doSearch);
        },
        checkoutError: function(message, from) {
            s.linkTrackVars = 'prop15,eVar29,events,pageName';
            s.linkTrackEvents = s.events = 'event44';

            overrideObject = new Object();
            overrideObject.pageName = "Checkout Page:Error" + (from ? (":" + from) : "");
            overrideObject.prop15 = message;
            overrideObject.eVar29 = from;

            s.ntl(this, 'o', 'CheckoutError_track', overrideObject);
        },
        getReferrer: function() {
            var referrer = document.referrer;
            var host = "";

            function changeReferrer(search, keyword) {
                if (host.indexOf(search) != -1) {
                    var wd = _om_neg_function.linkQueryString(referrer)[keyword];
                    if (wd) {
                        s.referrer = host + "?" + keyword + "=" + wd;
                    }
                }
            }

            if (referrer && referrer.length > 255) {
                var index = referrer.indexOf("?");
                if (index == -1) {
                    host = referrer;
                } else {
                    host = referrer.substring(0, index);
                }

                changeReferrer("baidu.com", "wd");
                changeReferrer("soso.com", "w");
                changeReferrer("sogou.com", "query");
            }
        },
        linkQueryString: function(href) {
            var params = {};

            var index = href.indexOf('?');
            if (index == -1) {
                return params;
            }

            qs = href.substring(index + 1);
            if (!qs || qs.length == 0) return params;
            index = qs.indexOf("#");
            if (index != -1) {
                qs = qs.substring(0, index);
            }

            qs = qs.replace(/\+/g, ' ');
            var args = qs.split('&');
            for (var i = 0, l = args.length; i < l; i++) {
                var pair = args[i].split('=');
                var name = pair[0];

                var value = (pair.length == 2) ? pair[1] : name;
                params[name.toLowerCase()] = value;
            }

            return params;
        },
        clickProductElement: function(selector, clickCallBack) {
            if (typeof(selector) == 'object') {
                if (!(selector instanceof jQuery)) {
                    // live mode
                    if (selector.live) {
                        function clickCheck(name) {
                            var e = $(this);
                            var currentIndex = e.data('i');
                            if (!currentIndex) {
                                return;
                            }
                            var code = e.data('c');
                            if (!code) {
                                return;
                            }

                            if (clickCallBack) {
                                clickCallBack.call(this, { index: currentIndex, code: code, name: name });
                            }
                        }

                        if ($.isArray(selector.container)) {
                            var nameArray = null;
                            if (selector.name && $.isArray(selector.name)) {
                                nameArray = selector.name;
                            }
                            for (var i = 0; i < selector.container.length; i++) {
                                containerClick(selector.container[i], nameArray ? nameArray[i] : null);
                            }
                        } else {
                            containerClick(selector.container);
                        }

                        function containerClick(container, name) {
                            $(container).delegate(selector.elementType, 'click', function() {
                                var om_init = $(container).data('om_init');
                                if (!om_init) {
                                    if (typeof(container) == 'string') {
                                        _om_neg_function._clickProductElement(container + ' ' + selector.elementType);
                                    } else {
                                        _om_neg_function._clickProductElement($(selector.elementType, container));
                                    }

                                    $(container).data('om_init', 'done');
                                }

                                clickCheck.call(this, name);
                            });
                        }

                        // 逻辑结束
                        return;
                    } else if (selector.id) {
                        if ($.isArray(selector.id)) {
                            var nameArray = null;
                            if (selector.name && $.isArray(selector.name)) {
                                nameArray = selector.name;
                            }

                            for (var i = 0; i < selector.id.length; i++) {
                                _om_neg_function._clickProductElement(selector.id[i], clickCallBack, nameArray ? nameArray[i] : null);
                            }
                            return;
                        } else {
                            selector = $(selector.id);
                        }
                    } else {
                        // 不合法
                        return;
                    }
                }
            }

            return _om_neg_function._clickProductElement(selector, clickCallBack);
        },
        _clickProductElement: function(selector, clickCallBack, name) {
            selector = $(selector);
            if (!selector.length) {
                return null;
            }

            var productslist = [];
            var allLink = {};
            var index = 1;
            selector.each(function(i, e) {
                e = $(e);
                var href = e.attr('href');
                var code = _om_neg_function.getProductCode(href);
                if (!code) {
                    return;
                }

                var currentIndex;
                var item = allLink[code];
                if (item) {
                    currentIndex = item;
                } else {
                    currentIndex = index++;
                    allLink[code] = currentIndex;
                }

                e.data('i', currentIndex);
                e.data('c', code);

                productslist.push(e);

                function clickCheck() {
                    var linkItem = $(this);
                    var currentItemIndex = linkItem.data('i');
                    if (!currentItemIndex) {
                        return;
                    }
                    var currentItemCode = linkItem.data('c');
                    if (!currentItemCode) {
                        return;
                    }

                    if (clickCallBack) {
                        clickCallBack.call(this, { index: currentIndex, code: currentItemCode, name: name });
                    }
                }

                if (clickCallBack) {
                    e.click(clickCheck);
                }
            });

            return productslist;
        },
        getProductCode: function(href) {
            var proudctCode = null;
            if (href) {
                //http://www.newegg.cn/Product/A04-026-5LM-02.htm
                var index = href.indexOf("Product/");
                if (index != -1) {
                    var indexEnd = href.indexOf(".", index);
                    proudctCode = href.substring(index + 8, indexEnd);
                    if (proudctCode.indexOf('/') != -1) {
                        proudctCode = null;
                    }
                }

                //http://tuan.newegg.cn/deal/9925.htm
                if (!proudctCode) {
                    index = href.indexOf("deal/");
                    if (index != -1) {
                        indexEnd = href.indexOf(".", index);
                        proudctCode = href.substring(index + 5, indexEnd);
                        if (proudctCode.indexOf('/') != -1) {
                            proudctCode = null;
                        }
                    }
                }

                //http://zhadan.newegg.cn/Bomb-377360.htm
                if (!proudctCode) {
                    var index = href.indexOf("Bomb-");
                    if (index != -1) {
                        var indexEnd = href.indexOf(".", index);
                        proudctCode = href.substring(index + 5, indexEnd);
                        if (proudctCode.indexOf('/') != -1) {
                            proudctCode = null;
                        }
                    }
                }
            }

            return proudctCode;
        },
        registerFormError: function(e) {
            errorItem = $('.reg_form_ul em.input_usrname_wrong:visible');
            if (errorItem && errorItem.length) {
                errorArray = [];
                for (var i = 0; i < errorItem.length; i++) {
                    var item = errorItem[i];
                    var errName = item.innerText || item.textContent;
                    if (errName) {
                        errorArray.push(errName.replace(',', '#'));
                    }
                }

                if (errorArray.length) {
                    s.linkTrackVars = 'prop24,events';
                    s.linkTrackEvents = s.events = 'event44,event43';

                    overrideObject = new Object();
                    overrideObject.prop24 = errorArray.join(',');
                    if (overrideObject.prop24) {
                        s.ntl(e, 'o', 'RegisterFormError_track', overrideObject);
                    }
                }
            }
        },
        navigationTrack: function(e) {
            var item = $('#navigationPanel a');
            if (item && item.length) {
                item.click(function() {
                    var eThis = $(this);

                    var name = eThis[0].innerText || eThis[0].textContent;
                    if (!name) {
                        name = eThis.attr("href");
                    }

                    var href = eThis.attr('href');
                    var prefix = href.indexOf('SubCategory') == -1 ? '一级类:' : '三级类:';

                    s.linkTrackVars = 'prop39,eVar41';
                    s.linkTrackEvents = '';
                    overrideObject = new Object();
                    overrideObject.prop39 = prefix + name;
                    overrideObject.eVar41 = prefix + name;

                    s.ntl(this, 'o', 'Navigation_Track', overrideObject);
                });
            }
        },
        reviewClick: function(data) {
            if (data.type == 'createreview') {
                var items = $(data.id);
                items.click(function() {
                    s.linkTrackVars = 'events';
                    s.linkTrackEvents = s.events = 'event38';
                    s.ntl(this, 'o', 'CreateReview_Track');
                });
            } else {
                var send = false;
                var items = $(data.id);
                items.click(function() {
                    if (send) {
                        return;
                    }

                    send = true;

                    overrideObject = new Object();
                    overrideObject.linkTrackVars = 'eVar52,events';
                    overrideObject.linkTrackEvents = s.events = 'event39,event25';
                    overrideObject.eVar52 = '+3';

                    s.ntl(this, 'o', 'ReviewRate_Track', overrideObject);
                });
            }
        },
        registerOrLoginSuccess: function(e) {
            if (!e) {
                var first = $.newegg.cookie.get('DataInfo', 'first')
                if (first) {
                    $.newegg.cookie.set('DataInfo', { first: '' }, { topdomain: true });
                } else {
                    return;
                }
            }

            var sendEvent;
            if (e && e.register) {
                sendEvent = 'event23,event45,event43';
            } else {
                sendEvent = 'event24';
            }

            s.linkTrackVars = 'events';
            s.linkTrackEvents = s.events = sendEvent;
            s.ntl(this, 'o', 'registerOrLoginSuccess_Track');
        },
        formUnsuccess: function() {
            s.linkTrackVars = 'events';
            s.linkTrackEvents = s.events = 'event44';
            s.ntl(this, 'o', 'formUnsuccess_Track');
        },
        websiteEngagement: function(e) {
            overrideObject = new Object();
            overrideObject.linkTrackVars = 'eVar52,events';
            overrideObject.linkTrackEvents = s.events = 'event25';
            overrideObject.eVar52 = e.source;

            s.ntl(this, 'o', 'websiteEngagement_Track', overrideObject);
        },
        promotion_Product_Track: function() {
            var loc = window.location.href;
            var array = s.split(loc, '/')
            var promotioncode = null;
            if (array.length >= 5) {
                promotioncode = array[4];
                promotioncode = promotioncode.substring(0, promotioncode.indexOf('.'));
            } else if (array.length >= 4) {
                promotioncode = array[3];
            } else {
                promotioncode = s.pageName;
            }

            _om_neg_function.clickProductElement({ id: ['#body a', 'area'] }, function(arg) {
                var code = arg.code;

                s.linkTrackVars = 'eVar69';
                s.linkTrackEvents = '';
                s.eVar69 = promotioncode + ':' + code;
                s.ntl(this, 'o', 'promotion_Product_Track');
            });
        },
        emc_track: function() {
            var emc = s.getQueryParam('cm_mmc');
            if (emc) {
                var emcArray = emc.split('-_-');
                if (emcArray[0].toLowerCase() != 'emc') {
                    return;
                }

                if (emcArray.length > 3) {
                    s.eVar64 = emcArray[3];
                }
                if (emcArray.length > 1) {
                    s.eVar65 = emcArray[1];
                }

                s.events = s.apl(s.events, 'event50', ',', 2);
            }

            var cm_pid = s.getQueryParam('cm_pid');
            if (cm_pid) {
                if (s.eVar65) {
                    s.eVar32 = s.eVar65 + ':' + cm_pid;
                } else {
                    s.eVar32 = 'Empty Name:' + cm_pid;
                }
            }
        },
        product_dig_track: function(data) {
            function send() {
                //产品：格式：productdetail： product: product id:
                //评论：格式：productdetail： productreview: product id:
                s.linkTrackVars = 'eVar66,events';
                s.linkTrackEvents = s.events = 'event54';

                overrideObject = new Object();
                overrideObject.eVar66 = data.pageName + ":" + data.name + ":" + data.productCode;
                s.ntl(this, 'o', 'product_dig_track', overrideObject);
            }

            if (data.live) {
                $(data.container).delegate(data.elementType, 'click', send);
            } else if (data.id) {
                $(data.id).click(send);
            }
        },
        directCall: function(callback) {
            if (callback) {
                callback(s);
            }
        },
        eval_Track: function(arg) {

            s.linkTrackVars = 'prop40';
            s.prop40 = arg.tab + ':' + arg.code + ':' + arg.evalID;
            s.linkTrackEvents = s.events = '';

            s.ntl(this, 'o', 'eval_Track');
        }
    };

    function _om_neg_run() {
        if (typeof(s) == 'undefined' || typeof(s.getValOnce) == 'undefined') {
            setTimeout('_om_pageinfo._om_run()', 100);
        } else {
            _ne_om(s);
            $.newegg._omFinallyTigger();
        }
    }

    _om_pageinfo.func = _om_neg_function;
    _om_pageinfo._om_run = _om_neg_run;
    $(_om_neg_run);
})();
