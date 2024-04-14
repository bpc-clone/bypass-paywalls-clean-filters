// ==UserScript==
// @name            Bypass Paywalls Clean - it
// @version         3.6.4.1
// @description     Bypass Paywalls of news sites
// @author          magnolia1234
// @downloadURL     https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.it.user.js
// @updateURL       https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.it.user.js
// @homepageURL     https://github.com/bpc-clone/bypass-paywalls-clean-filters
// @supportURL      https://github.com/bpc-clone/bypass-paywalls-clean-filters
// @license         MIT; https://github.com/bpc-clone/bypass-paywalls-clean-filters/blob/main/LICENSE
// @match           *://*.it/*
// @match           *://*.eastwest.eu/*
// @match           *://*.italian.tech/*
// @match           *://*.quotidiano.net/*
// @match           *://*.tuttosport.com/*
// ==/UserScript==

(function() {
  'use strict';

window.setTimeout(function () {

var domain;
var mobile = window.navigator.userAgent.toLowerCase().includes('mobile');
var csDoneOnce;

var overlay = document.querySelector('body.didomi-popup-open');
if (overlay)
  overlay.classList.remove('didomi-popup-open');
var ads = 'div.OUTBRAIN, div[id^="taboola-"], div.ad, div.ad-container, div[class*="-ad-container"], div[class*="_ad-container"], div.arc_ad';
hideDOMStyle(ads, 10);

var it_gedi_domains = ['huffingtonpost.it', 'italian.tech', 'lastampa.it', 'lescienze.it', 'moda.it'];
var it_ilmessaggero_domains = ['corriereadriatico.it', 'ilgazzettino.it', 'ilmattino.it', 'ilmessaggero.it', 'quotidianodipuglia.it'];
var it_quotidiano_domains = ['ilgiorno.it', 'ilrestodelcarlino.it', 'iltelegrafolivorno.it', 'lanazione.it', 'quotidiano.net'];

if (matchDomain('corriere.it')) {
  if (window.location.pathname.endsWith('_amp.html')) {
    amp_unhide_subscr_section('amp-ad, amp-embed');
  } else {
    if (window.location.pathname.includes('_preview.shtml') && !window.location.pathname.startsWith('/podcast/')) {
      window.setTimeout(function () {
        window.location.href = window.location.pathname.replace('_preview.shtml', '.shtml');
      }, 500);
    }
  }
}

else if (matchDomain('corrieredellosport.it')) {
  if (!window.location.pathname.startsWith('/amp/')) {
    amp_redirect('div[class^="MainTextTruncated_paragraph__"]');
    let ads = 'div[class^="AdUnit_placeholder"]';
    hideDOMStyle(ads);
  } else {
    let ads = 'amp-ad, amp-embed';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('eastwest.eu')) {
  let paywall = document.querySelector('.paywall');
  if (paywall) {
    paywall.removeAttribute('style');
    paywall.classList.remove('paywall');
    let intro = document.querySelectorAll('div#testo_articolo > p, div#testo_articolo > h3');
    let offerta = document.querySelectorAll('div.offerta_abbonamenti');
    removeDOMElement(...intro, ...offerta);
  }
}

else if (matchDomain('editorialedomani.it')) {
  if (window.location.search.startsWith('?amp=1'))
    ampToHtml();
}

else if (matchDomain('gazzetta.it')) {
  if (window.location.pathname.endsWith('_preview.shtml')) {
    let paywall = document.querySelector('section.bck-freemium__wall');
    if (paywall) {
      removeDOMElement(paywall);
      if (!window.location.search.startsWith('?reason=unauthenticated')) {
        window.location.href = window.location.pathname.replace('_preview', '') + '?gaa_at=g';
      } else {
        let json_script = getArticleJsonScript();
        let header = document.querySelector('div.content > h2');
        if (json_script) {
          let json = JSON.parse(json_script.text);
          if (json) {
            let json_text = json.articleBody.replace(/(\s{3}|&nbsp;)/g, '\r\n\r\n');
            let content = document.querySelector('div.content > p.has-first-letter');
            if (json_text && content) {
              let content_new = document.createElement('p');
              content_new.innerText = json_text;
              content.parentNode.replaceChild(content_new, content);
              let article_body = document.querySelector('section.body-article');
              if (article_body)
                article_body.style = 'height: auto;';
            } else
              header_nofix(header);
          }
        } else
          header_nofix(header);
      }
    }
  } else if (window.location.pathname.endsWith('_amp.shtml'))
    ampToHtml();
}

else if (matchDomain('ilfattoquotidiano.it')) {
  let url = window.location.href;
  if (url.includes('/amp/')) {
    amp_unhide_subscr_section('amp-ad, amp-embed, div#_4sVideoContainer');
    let comments = document.querySelector('div.content.comments');
    removeDOMElement(comments);
  } else if (window.location.pathname.match(/\/\d{4}\/\d{2}\/\d{2}\//)) {
    let paywall = document.querySelector('div.read-more');
    if (paywall) {
      removeDOMElement(paywall);
      window.location.href = window.location.pathname + 'amp';
    }
  }
}

else if (matchDomain('ilfoglio.it')) {
  if (window.location.pathname.endsWith('/amp/')) {
    amp_unhide_subscr_section('amp-ad, [class^="adv-"], div#gmpVideoContainer');
  } else {
    amp_redirect('div.paywall');
    let ads = '.advertisement';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('ilmanifesto.it')) {
  window.setTimeout(function () {
    if (window.location.pathname.match(/((\w)+(\-)+){3,}/)) {
      let paywall = document.querySelector('div[class^="PostPaywall_PostPaywall__"]');
      if (paywall) {
        removeDOMElement(paywall);
        let json_script = document.querySelector('script#__NEXT_DATA__');
        if (json_script) {
          let json = JSON.parse(json_script.innerText);
          if (json && json.props.pageProps.content && json.props.pageProps.content.content) {
            let article_new = json.props.pageProps.content.content;
            let article = document.querySelector('div.ArticleBody');
            if (article) {
              article.innerHTML = '';
              let parser = new DOMParser();
              let doc = parser.parseFromString('<div>' + article_new + '</div>', 'text/html');
              let content_new = doc.querySelector('div');
              article.appendChild(content_new);
            }
          } else
            refreshCurrentTab();
        }
      }
    }
    let service_page = document.querySelector('div.service-page');
    if (service_page) {
      refreshCurrentTab();
    }
  }, 2000);
}

else if (domain = matchDomain(['iltirreno.it', 'lanuovasardegna.it']) || matchDomain(['gazzettadimodena.it', 'gazzettadireggio.it', 'lanuovaferrara.it'])) {
  if (window.location.pathname.includes('/news/')) {
    let paywall = document.querySelector('span > img[alt*="Paywall"]');
    if (paywall) {
      let header = paywall.parentNode.parentNode;
      header_nofix(header);
      removeDOMElement(paywall.parentNode);
    }
    window.setTimeout(function () {
      let banners = document.querySelectorAll('div.MuiSnackbar-root, div.css-16cchgy');
      removeDOMElement(...banners);
    }, 1000);
  }
  setCookie(/__mtr$/, '', domain, '/', 0);
}

else if (matchDomain(it_ilmessaggero_domains)) {
  if (window.location.pathname.toLowerCase().includes('/amp/')) {
    amp_unhide_subscr_section('amp-ad, amp-embed');
  } else {
    let noscroll = document.querySelector('html[style]');
    if (noscroll)
      noscroll.removeAttribute('style');
    let ads = 'div.adv_banner, div.inread_adv, div#outbrain';
    hideDOMStyle(ads);
  }
}

else if (matchDomain(it_quotidiano_domains)) {
  if (window.location.pathname.endsWith('/amp') || window.location.search.startsWith('?amp')) {
    amp_unhide_access_hide('="c.customGranted"', '="NOT c.customGranted"', 'amp-ad, amp-embed, amp-fx-flying-carpet, .watermark-adv, .amp__watermark');
  } else {
    amp_redirect('div[data-testid="paywall-container"], div[class^="Paywall_paywall_"]', '', window.location.pathname + '/amp');
    let ads = 'div[id^="div-gpt-ad"]';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('italiaoggi.it')) {
  let paywall = document.querySelector('div.boxAbb');
  if (paywall) {
    let overlay = document.querySelector('div.article-locked-overlay');
    removeDOMElement(paywall, overlay);
    let article_locked = document.querySelector('div.article-locked');
    if (article_locked) {
      article_locked.classList.remove('article-locked');
      let json_script = getArticleJsonScript();
      if (json_script) {
        let json = JSON.parse(json_script.text);
        if (json) {
          let json_text = json.articleBody;
          let content = article_locked.querySelector('section');
          if (json_text && content) {
            if (json_text && content) {
              let parser = new DOMParser();
              json_text = json_text.replace(/&amp;apos;/g, "'").replace(/;/g, '');
              let doc = parser.parseFromString('<div><section>' + json_text + '</section></div>', 'text/html');
              let content_new = doc.querySelector('div');
              content.parentNode.replaceChild(content_new, content);
            }
          }
        }
      }
    }
  }
}

else if (domain = matchDomain(it_gedi_domains)) {
  if (matchDomain(['huffingtonpost.it', 'lastampa.it'])) {
    if (window.location.pathname.includes('/news/')) {
      if (!window.location.pathname.match(/\amp(\/)?$/)) {
        let paywall = document.querySelector('iframe#__limio_frame');
        if (paywall) {
          setCookie(/blaize_session/, '', domain, '/', 0);
          refreshCurrentTab();
        }
        let modal = document.querySelector('aside#widgetDP');
        removeDOMElement(modal);
      } else
        ampToHtml();
    }
  } else {
    if (!window.location.pathname.match(/\amp(\/)?$/)) {
      let paywall = document.querySelector('div#ph-paywall');
      removeDOMElement(paywall);
      setCookie(/blaize_session/, '', domain, '/', 0);
    } else
      ampToHtml();
  }
  let ads = 'div[id^="adv"]';
  hideDOMStyle(ads);
}

else if (matchDomain('tuttosport.com')) {
  if (!window.location.pathname.startsWith('/amp/')) {
    let article_images = document.querySelectorAll('div > img[data-src]:not([src])');
    for (let elem of article_images) {
      elem.src = elem.getAttribute('data-src');
      elem.removeAttribute('class');
      elem.parentNode.removeAttribute('style');
    }
    let main_images = document.querySelectorAll('div > img[class*="ArticleImage_image__"][src]');
    for (let elem of main_images) {
      elem.removeAttribute('class');
    }
    let video = document.querySelector('div[class^="VideoFloat_videoFloatCont__"]');
    if (video) {
      let og_image = document.querySelector('head > meta[property="og:image"][content]');
      if (og_image) {
        let og_image_url = og_image.getAttribute('content');
        if (og_image_url) {
          let elem = document.createElement('img');
          elem.src = og_image_url;
          elem.style = 'width: 95%;';
          video.parentNode.replaceChild(elem, video);
        }
      }
    }
    let ads = 'div[class^="AdUnit_"]';
    hideDOMStyle(ads);
  } else {
    let ads = 'amp-ad, amp-embed';
    hideDOMStyle(ads);
  }
}

}, 1000);

// General Functions

function matchDomain(domains, hostname) {
  var matched_domain = false;
  if (!hostname)
    hostname = window.location.hostname;
  if (typeof domains === 'string')
    domains = [domains];
  domains.some(domain => (hostname === domain || hostname.endsWith('.' + domain)) && (matched_domain = domain));
  return matched_domain;
}

function matchCookies(name) {
  return document.cookie.split(';').filter(x => x.trim().match(name)).map(y => y.split('=')[0].trim())
}

function setCookie(names, value, domain = '', path = '/', days = 0) {
  var max_age = days * 24 * 60 * 60;
  let ck_names = Array.isArray(names) ? names : [];
  if (names instanceof RegExp)
    ck_names = matchCookies(names);
  else if (typeof names === 'string')
    ck_names = [names];
  for (let ck_name of ck_names) {
    document.cookie = ck_name + "=" + (value || "") + (domain ? "; domain=" + domain : '') + (path ? "; path=" + path : '') + "; max-age=" + max_age;
  }
  window.localStorage.clear();
}

function removeDOMElement(...elements) {
  for (let element of elements) {
    if (element)
      element.remove();
  }
}

function hideDOMElement(...elements) {
  for (let element of elements) {
    if (element)
      element.style = 'display:none !important;';
  }
}

function hideDOMStyle(selector, id = 1) {
  let style = document.querySelector('head > style#ext'+ id);
  if (!style && document.head) {
    let sheet = document.createElement('style');
    sheet.id = 'ext' + id;
    sheet.innerText = selector + ' {display: none !important;}';
    document.head.appendChild(sheet);
  }
}

function clearPaywall(paywall, paywall_action) {
  if (paywall) {
    if (!paywall_action)
      removeDOMElement(...paywall);
    else {
      for (let elem of paywall) {
        if (paywall_action.rm_class)
          elem.classList.remove(paywall_action.rm_class);
        else if (paywall_action.rm_attrib)
          elem.removeAttribute(paywall_action.rm_attrib);
      }
    }
  }
}

function header_nofix(header, msg = 'BPC > no fix') {
  if (header && !document.querySelector('div#bpc_nofix')) {
    let nofix_div = document.createElement('div');
    nofix_div.id = 'bpc_nofix';
    nofix_div.style = 'margin: 20px; font-size: 20px; font-weight: bold; color: red;';
    nofix_div.innerText = msg;
    header.before(nofix_div);
  }
}

function amp_iframes_replace(weblink = false, source = '') {
  let amp_iframes = document.querySelectorAll('amp-iframe' + (source ? '[src*="' + source + '"]' : ''));
  let par, elem;
  for (let amp_iframe of amp_iframes) {
    if (!weblink) {
      if (amp_iframe.offsetHeight > 10) {
        elem = document.createElement('iframe');
        elem.src = amp_iframe.getAttribute('src'),
        elem.style = 'height: ' + amp_iframe.offsetHeight + 'px; width: 100%; border: 0px;';
        if (amp_iframe.getAttribute('sandbox'))
          elem.sandbox = amp_iframe.getAttribute('sandbox');
        amp_iframe.parentNode.replaceChild(elem, amp_iframe);
      }
    } else {
      par = document.createElement('p');
      par.style = 'margin: 20px 0px;';
      elem = document.createElement('a');
      elem.innerText = 'Media-link';
      elem.setAttribute('href', amp_iframe.getAttribute('src'));
      elem.setAttribute('target', '_blank');
      par.appendChild(elem);
      amp_iframe.parentNode.replaceChild(par, amp_iframe);
    }
  }
}

function amp_redirect_not_loop(amphtml) {
  let amp_redirect_date = Number(sessionStorage.getItem('###_amp_redirect'));
  if (!(amp_redirect_date && Date.now() - amp_redirect_date < 2000)) {
    sessionStorage.setItem('###_amp_redirect', Date.now());
    window.location.href = amphtml.href;
  } else {
    let header = (document.body && document.body.firstChild) || document.documentElement;
    header_nofix(header, 'BPC > redirect to amp failed (disable amp-to-html extension/add-on or browser setting)');
  }
}

function amp_redirect(paywall_sel, paywall_action = '', amp_url = '') {
  let paywall = document.querySelectorAll(paywall_sel);
  let amphtml = document.querySelector('head > link[rel="amphtml"]');
  if (!amphtml && amp_url)
    amphtml = {href: amp_url};
  if (paywall.length && amphtml) {
    clearPaywall(paywall, paywall_action);
    amp_redirect_not_loop(amphtml);
  }
}

function amp_unhide_subscr_section(amp_ads_sel = 'amp-ad', replace_iframes = true, amp_iframe_link = false, source = '') {
  let preview = document.querySelectorAll('[subscriptions-section="content-not-granted"]');
  removeDOMElement(...preview);
  let subscr_section = document.querySelectorAll('[subscriptions-section="content"]');
  for (let elem of subscr_section)
    elem.removeAttribute('subscriptions-section');
  hideDOMStyle(amp_ads_sel, 5);
  if (replace_iframes)
    amp_iframes_replace(amp_iframe_link, source);
}

function amp_unhide_access_hide(amp_access = '', amp_access_not = '', amp_ads_sel = 'amp-ad', replace_iframes = true, amp_iframe_link = false, source = '') {
  let access_hide = document.querySelectorAll('[amp-access' + amp_access + '][amp-access-hide]:not([amp-access="error"], [amp-access^="message"], .piano)');
  for (elem of access_hide)
    elem.removeAttribute('amp-access-hide');
  if (amp_access_not) {
    let amp_access_not_dom = document.querySelectorAll('[amp-access' + amp_access_not + ']');
    removeDOMElement(...amp_access_not_dom);
  }
  hideDOMStyle(amp_ads_sel, 6;
  if (replace_iframes)
    amp_iframes_replace(amp_iframe_link, source);
}

function ampToHtml() {
  window.setTimeout(function () {
    let canonical = document.querySelector('head > link[rel="canonical"][href]');
    if (canonical)
      window.location.href = canonical.href;
  }, 1000);
}

function refreshCurrentTab() {
  window.location.reload(true);
}

function getArticleJsonScript() {
  let scripts = document.querySelectorAll('script[type="application/ld+json"]');
  let json_script;
  for (let script of scripts) {
    if (script.innerText.match(/"(articlebody|text)":/i)) {
      json_script = script;
      break;
    }
  }
  return json_script;
}

})();
