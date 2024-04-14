// ==UserScript==
// @name            Bypass Paywalls Clean - es/pt/south america
// @version         3.6.5.3
// @description     Bypass Paywalls of news sites
// @author          magnolia1234
// @downloadURL     https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.es.pt.user.js
// @updateURL       https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.es.pt.user.js
// @homepageURL     https://github.com/bpc-clone/bypass-paywalls-clean-filters
// @supportURL      https://github.com/bpc-clone/bypass-paywalls-clean-filters
// @license         MIT; https://github.com/bpc-clone/bypass-paywalls-clean-filters/blob/main/LICENSE
// @match           *://*.es/*
// @match           *://*.abril.com.br/*
// @match           *://*.ara.cat/*
// @match           *://*.arabalears.cat/*
// @match           *://*.cambiocolombia.com/*
// @match           *://*.cartacapital.com.br/*
// @match           *://*.clarin.com/*
// @match           *://*.cmjornal.pt/*
// @match           *://*.correiodopovo.com.br/*
// @match           *://*.cronista.com/*
// @match           *://*.diaridegirona.cat/*
// @match           *://*.diariocordoba.com/*
// @match           *://*.diariocorreo.pe/*
// @match           *://*.diariovasco.com/*
// @match           *://*.elcomercio.pe/*
// @match           *://*.elconfidencial.com/*
// @match           *://*.elcorreo.com/*
// @match           *://*.elespanol.com/*
// @match           *://*.elespectador.com/*
// @match           *://*.elmercurio.com/*
// @match           *://*.elobservador.com.uy/*
// @match           *://*.elpais.com/*
// @match           *://*.elperiodico.com/*
// @match           *://*.elperiodicodearagon.com/*
// @match           *://*.elperiodicoextremadura.com/*
// @match           *://*.elperiodicomediterraneo.com/*
// @match           *://*.eltiempo.com/*
// @match           *://*.eltribuno.com/*
// @match           *://*.em.com.br/*
// @match           *://*.emporda.info/*
// @match           *://*.estadao.com.br/*
// @match           *://*.exame.com/*
// @match           *://*.expansion.com/*
// @match           *://*.expresso.pt/*
// @match           *://*.gazetadopovo.com.br/*
// @match           *://*.gestion.pe/*
// @match           *://*.globo.com/*
// @match           *://*.lanacion.com.ar/*
// @match           *://*.larioja.com/*
// @match           *://*.lasegunda.com/*
// @match           *://*.latercera.com/*
// @match           *://*.lavoz.com.ar/*
// @match           *://*.levante-emv.com/*
// @match           *://*.losandes.com.ar/*
// @match           *://*.marca.com/*
// @match           *://*.politicaexterior.com/*
// @match           *://*.record.pt/*
// @match           *://*.regio7.cat/*
// @match           *://*.revistaoeste.com/*
// @match           *://*.sabado.pt/*
// @match           *://*.uol.com.br/*
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
var ads = 'div.OUTBRAIN, div[id^="taboola-"], div.ad, div.ad-container, div[class*="-ad-container"], div[class*="_ad-container"], div.arc_ad, div[id^="poool-"]';
hideDOMStyle(ads, 10);

var ar_grupo_clarin_domains =['clarin.com', 'lavoz.com.ar', 'losandes.com.ar'];
var es_epiberica_domains = ['diariodemallorca.es', 'eldia.es', 'elperiodico.com', 'epe.es', 'farodevigo.es', 'informacion.es', 'laprovincia.es', 'levante-emv.com', 'lne.es', 'mallorcazeitung.es', 'superdeporte.es'];
var es_epiberica_custom_domains = ['diaridegirona.cat', 'diariocordoba.com', 'diariodeibiza.es', 'elcorreogallego.es', 'elperiodicodearagon.com', 'elperiodicoextremadura.com', 'elperiodicomediterraneo.com', 'emporda.info', 'laopinioncoruna.es', 'laopiniondemalaga.es', 'laopiniondemurcia.es', 'laopiniondezamora.es', 'regio7.cat'];
var es_grupo_vocento_domains = ['abc.es', 'canarias7.es', 'diariosur.es', 'diariovasco.com', 'elcomercio.es', 'elcorreo.com', 'eldiariomontanes.es', 'elnortedecastilla.es', 'hoy.es', 'ideal.es', 'larioja.com', 'lasprovincias.es', 'laverdad.es', 'lavozdigital.es'];
var es_unidad_domains = ['elmundo.es', 'expansion.com', 'marca.com'];
var pe_grupo_elcomercio_domains = ['diariocorreo.pe', 'elcomercio.pe', 'gestion.pe'];

if (window.location.hostname.match(/\.(es|pt|cat)$/) || matchDomain(['diariocordoba.com', 'diariovasco.com', 'elconfidencial.com', 'elcorreo.com', 'elespanol.com', 'elpais.com', 'elperiodico.com', 'elperiodicodearagon.com', 'elperiodicoextremadura.com', 'elperiodicomediterraneo.com', 'emporda.info', 'expansion.com', 'larioja.com', 'levante-emv.com', 'marca.com', 'politicaexterior.com'])) {//spain/portugal

if (matchDomain(['ara.cat', 'arabalears.cat'])) {
  if (!window.location.pathname.endsWith('.amp.html')) {
    amp_redirect('div.paywall');
    let ads = 'div.advertising';
    hideDOMStyle(ads);
  }
}

else if (matchDomain(['cmjornal.pt', 'record.pt', 'sabado.pt'])) {
  if (!window.location.pathname.includes('/amp/')) {
    amp_redirect('.bloqueio_exclusivos, .container_assinatura, .bloco_bloqueio');
  } else {
    amp_unhide_access_hide('="subscriber"', '="NOT subscriber"', 'amp-ad, amp-embed, amp-consent, .detalheAds, .exclusivos_bar');
    let amp_links = document.querySelectorAll('a[href^="https://www-cmjornal-pt.cdn.ampproject.org/c/s/"]');
    for (let amp_link of amp_links)
      amp_link.href = amp_link.href.replace('www-cmjornal-pt.cdn.ampproject.org/c/s/', '');
  }
}

else if (matchDomain('elconfidencial.com')) {
  let premium = document.querySelector('div.newsType__content--closed');
  if (premium)
    premium.classList.remove('newsType__content--closed');
  let ads = 'div[id^="mega_"], div[id^="roba_"]';
  hideDOMStyle(ads);
}

else if (matchDomain('eldiario.es')) {
  if (window.location.pathname.endsWith('.amp.html')) {
    amp_unhide_access_hide('^="access"', '="NOT access"');
  } else {
    amp_redirect('aside.paywall');
    let ads = 'div.edi-advertising, div.header-ad';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('elespanol.com')) {
  if (window.location.pathname.endsWith('.amp.html')) {
    amp_unhide_subscr_section('amp-ad, amp-embed');
  } else {
    let paywall = document.querySelector('div.full-suscriptor-container');
    if (paywall) {
      removeDOMElement(paywall);
      let content_hidden = document.querySelector('div.content-not-granted-paywall');
      if (content_hidden)
        content_hidden.classList.remove('content-not-granted-paywall');
    }
    let ads = '[id*="superior"], [class*="adv"]';
    hideDOMStyle(ads);
  }
}

else if (matchDomain(es_unidad_domains)) {
  if (!window.location.hostname.match(/^amp(-[a-z]{2})?\./)) {
    let url = window.location.href;
    if (!window.location.pathname.startsWith('/mejores-colegios')) {
      amp_redirect('div.ue-c-article__premium', '', url.replace('/www.', '/amp.'));
    } else if (matchDomain('elmundo.es')) {
      let paywall = document.querySelector('div.ue-c-article__premium');
      if (paywall) {
        removeDOMElement(paywall);
        header_nofix(document.querySelector('main p'));
      } else {
        paywall = document.querySelector('div.ue-c-paywall');
        if (paywall) {
          removeDOMElement(paywall);
          let article = document.querySelector('table');
          if (article)
            article.before(googleWebcacheLink(url));
        }
      }
    }
  } else {
    amp_unhide_access_hide('="authorized=true"', '="authorized!=true"');
    amp_unhide_subscr_section('amp-ad, amp-embed, .advertising, div.ue-c-ad');
  }
}

else if (matchDomain('elpais.com')) {
  if (window.location.pathname.endsWith('.amp.html') || window.location.search.match(/(\?|&)outputType=amp/)) {
    amp_unhide_access_hide('="vip"], [amp-access="success"', '="NOT vip"], [amp-access="NOT success"');
  } else {
    let paywall = document.querySelector('div#ctn_freemium_article, div#ctn_premium_article');
    removeDOMElement(paywall);
  }
}

else if (matchDomain(es_grupo_vocento_domains)) {
  let paywall_sel = 'div.voc-paywall, div.container-wall-exclusive__content-login';
  let paywall = document.querySelector(paywall_sel);
  if (!window.location.pathname.endsWith('_amp.html')) {
    if (!matchDomain(['eldiariomontanes.es'])) {
      amp_redirect(paywall_sel, '', window.location.pathname.replace('.html', '_amp.html'));
    } else {
      if (paywall) {
        let url = window.location.href;
        paywall.before(archiveLink(url));
        removeDOMElement(paywall);
      }
    }
    let banners = 'div.voc-advertising, div.voc-ob-wrapper, div.voc-discounts, div.ev-em-modal, span.mega-superior, div.v-adv';
    hideDOMStyle(banners);
  } else {
    amp_unhide_access_hide('="result=\'ALLOW_ACCESS\'"', '="result!=\'ALLOW_ACCESS\'"', 'amp-ad, amp-embed, div.v-adv');
    let body_top = document.querySelector('body#top');
    if (body_top)
      body_top.removeAttribute('id');
  }
}

else if (matchDomain(es_epiberica_domains) || matchDomain(es_epiberica_custom_domains)) {
  if (window.location.href.includes('.amp.html')) {
    let truncated = document.querySelector('div.article-body--truncated');
    if (truncated)
      truncated.classList.remove('article-body--truncated');
    amp_unhide_access_hide('="NOT access"], [amp-access="FALSE"', '="access"', 'amp-ad, amp-embed, span.ad-signature');
  } else if (['amp.elperiodico.com', 'amp.epe.es'].includes(window.location.hostname)) {
    amp_unhide_access_hide('="loggedIn"', '="NOT loggedIn"', 'amp-ad, amp-embed, amp-next-page');
    let amp_images = document.querySelectorAll('div > amp-img[src]');
    for (let amp_image of amp_images) {
      let elem = document.createElement('img');
      elem.src = amp_image.getAttribute('src');
      elem.style = 'width: 75%; margin: 0px 50px;';
      amp_image.parentNode.replaceChild(elem, amp_image);
    }
  } else {
    let paywall = document.querySelector('div.ft-helper-closenews');
    if (paywall)
      paywall.removeAttribute('class');
    let ads = 'div.commercial-up-full__wrapper, aside.ft-ad, div[class^="_mo_recs"]';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('expresso.pt')) {
  if (!window.location.hostname.startsWith('amp.')) {
    let article_sel = 'div.article-content';
    let paywall = document.querySelector(article_sel + ' > div.g-premium-blocker');
    if (paywall) {
      removeDOMElement(paywall);
      let article = document.querySelector(article_sel);
      if (article) {
        let url = window.location.href.split(/[#\?]/)[0];
        fetch(url)
        .then(response => {
          if (response.ok) {
            response.text().then(html => {
              if (html.match(/window\.__INITIAL_DATA__\s?=\s?/)) {
                try {
                  article.innerHTML = '';
                  let json = JSON.parse(html.split(/window\.__INITIAL_DATA__\s?=\s?/)[1].split(';window.')[0].replace(/":undefined([,}])/g, "\":\"undefined\"$1")).nodes;
                  let pars = [];
                  for (let elem in json) {
                    let item = json[elem];
                    if (item.type === 'Layout') {
                      for (let elem of item.nodes) {
                        if (elem.type === 'MainBody')
                          pars = elem.nodes[0].data.content.contents;
                      }
                      break;
                    }
                  }
                  let parser = new DOMParser();
                  for (let par of pars) {
                    let par_new;
                    if (par.html) {
                      let doc = parser.parseFromString('<div>' + par.html + '</div>', 'text/html');
                      par_new = doc.querySelector('div');
                    } else if (par.type === 'PICTURE') {
                      if (par.urlOriginal) {
                        par_new = document.createElement('figure');
                        let img = document.createElement('img');
                        img.src = par.urlOriginal;
                        img.style = 'width:100%';
                        par_new.appendChild(img);
                        if (par.caption) {
                          let caption = document.createElement('p');
                          caption.innerText = par.caption;
                          par_new.appendChild(caption);
                        }
                      }
                    } else if (par.link && par.title) {
                      if (par.contents) {
                        par_new = document.createElement('div');
                        for (let elem of par.contents) {
                          let elem_new;
                          if (elem.html) {
                            let doc = parser.parseFromString('<div>' + elem.html + '</div>', 'text/html');
                            elem_new = doc.querySelector('div');
                          } else if (elem.urlOriginal) {
                            elem_new = document.createElement('figure');
                            let img = document.createElement('img');
                            img.src = elem.urlOriginal;
                            img.style = 'width:100%';
                            elem_new.appendChild(img);
                            if (elem.caption) {
                              let caption = document.createElement('p');
                              caption.innerText = elem.caption;
                              elem_new.appendChild(caption);
                            }
                          }
                          if (elem_new)
                            par_new.appendChild(elem_new);
                        }
                      } else {
                        par_new = document.createElement('p');
                        let art_link = document.createElement('a');
                        art_link.innerText = par.title;
                        art_link.href = par.link;
                        par_new.appendChild(art_link);
                      }
                    }
                    if (par_new)
                      article.appendChild(par_new);
                    else
                      console.log(par);
                  }
                } catch (err) {
                  console.log(err);
                }
              }
            });
          }
        }).catch(function (err) {
          false;
        });
      }
    }
  } else
    ampToHtml();
}

else if (matchDomain(['lavanguardia.com', 'mundodeportivo.com'])) {
  let ads = 'span.content-ad, span.hidden-ad, span.ad-unit, div.ad-div';
  hideDOMStyle(ads);
}

else if (matchDomain('observador.pt')) {
  let ads = 'div.obs-ad-placeholder';
  hideDOMStyle(ads);
}

else if (matchDomain('politicaexterior.com')) {
  let paywall = document.querySelector('div[class^="paywall-"]');
  if (paywall) {
    let article = document.querySelector('div.entry-content-text');
    let json = document.querySelector('script[type="application/ld+json"]:not([class])');
    if (json) {
      let json_text = JSON.parse(json.text).description.replace(/&amp;nbsp;/g, '');
      let article_new = document.createElement('div');
      article_new.setAttribute('class', 'entry-content-text');
      article_new.innerText = '\r\n' + json_text;
      article.parentNode.replaceChild(article_new, article);
    }
    removeDOMElement(paywall);
  }
}

else if (matchDomain('publico.es')) {
  let ads = 'div.pb-ads';
  hideDOMStyle(ads);
}

else if (window.location.hostname.endsWith('.es')) {// Sport Life Ibérica sites
  if (document.querySelector('div > ul > li > a[href="https://www.sportlife.es/"]')) {
    let paywall = document.querySelector('div.c-paywall');
    if (paywall) {
      let article = document.querySelector('div.c-mainarticle__body');
      let json_script = getArticleJsonScript();
      if (json_script) {
        let json_text = JSON.parse(json_script.text).articleBody;
        let article_new = document.createElement('div');
        article_new.innerText = json_text;
        article.parentNode.replaceChild(article_new, article);
      }
      removeDOMElement(paywall);
    }
  }
}

} else if (window.location.hostname.match(/\.(ar|br|cl|pe|uy)$/) || matchDomain(['cambiocolombia.com', 'clarin.com', 'cronista.com', 'elespectador.com', 'elmercurio.com', 'eltiempo.com', 'eltribuno.com', 'exame.com', 'globo.com', 'lasegunda.com', 'latercera.com', 'revistaoeste.com'])) {//south america

if (matchDomain('abril.com.br')) {
  if (window.location.pathname.endsWith('/amp/')) {
    let paywall = document.querySelector('.piano-modal');
    removeDOMElement(paywall);
    let ads = 'amp-ad, amp-embed';
    hideDOMStyle(ads);
  } else {
    let ads = 'div.ads, div[class^="ads-"], div.MGID';
    hideDOMStyle(ads);
  }
}

else if (matchDomain(ar_grupo_clarin_domains)) {
  let ads = 'div.ad-slot, div.box-adv, div.wrapperblock, div.banner, div[id^="div-gpt-ad-flotante"]';
  hideDOMStyle(ads);
  let ads_inline = document.querySelectorAll('div > div.sticky, div > div[id^="div-gpt-ad-inread"], div > div[id^="div-gpt-ad-caja"], div > div[id^="div-gpt-ad-horizontal"]');
  for (let ad of ads_inline)
    hideDOMElement(ad.parentNode);
}

else if (matchDomain('cambiocolombia.com')) {
  if (!window.location.pathname.startsWith('/amp/')) {
    let paywall = document.querySelector('div#require-access');
    if (paywall) {
      removeDOMElement(paywall);
      window.location.href = '/amp' + window.location.pathname;
    }
  } else {
    amp_unhide_subscr_section('amp-ad, amp-embed');
  }
}

else if (matchDomain('cartacapital.com.br')) {
  if (!window.location.pathname.endsWith('/amp/')) {
    let paywall = document.querySelector('aside.paywall');
    if (paywall) {
      removeDOMElement(paywall);
      let json_script = getArticleJsonScript();
      if (json_script) {
        try {
          let json = JSON.parse(json_script.text);
          if (json) {
            let json_text = json[1].articleBody.replace(/\s{2,}/g, '\r\n\r\n');
            let content = document.querySelector('section.s-content__text');
            if (json_text && content) {
              content.innerHTML = '';
              let article_new = document.createElement('p');
              article_new.innerText = json_text;
              content.appendChild(article_new);
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      let content_soft = document.querySelector('div.contentSoft');
      if (content_soft) {
        content_soft.removeAttribute('class');
        let freemium = document.querySelectorAll('div[class^="s-freemium"], div.maggazine-add');
        removeDOMElement(...freemium);
      }
    }
    let ads = 'div.div_ros_topo';
    hideDOMStyle(ads);
  } else
    ampToHtml();
}

else if (matchDomain('cronista.com')) {
  let ads = 'div#ad-slot-header, div.ad-slot-intext, div#selectMediaNota, div.b-suscription-container';
  hideDOMStyle(ads);
}

else if (matchDomain(pe_grupo_elcomercio_domains)) {
  let paywall = document.querySelector('.paywall');
  if (paywall) {
    paywall.removeAttribute('class');
    paywall.removeAttribute('style');
    let fade = document.querySelector('p.story-contents--fade');
    if (fade)
      fade.classList.remove('story-contents--fade');
  }
  let ads = 'div[class^="content_gpt"]';
  hideDOMStyle(ads);
}

else if (matchDomain('elespectador.com')) {
  if (window.location.search.match(/(\?|&)outputType=amp/)) {
    amp_unhide_subscr_section('amp-ad, amp-embed, [class^="Widget"], amp-fx-flying-carpet');
  } else {
    amp_redirect('div.exclusive_validation');
  }
}

else if (matchDomain(['elmercurio.com', 'lasegunda.com'])) {
  window.setTimeout(function () {
    let elem_hidden = document.querySelectorAll('[style="visibility:hidden"]');
    for (let elem of elem_hidden)
      elem.removeAttribute('style');
    let page_pdf_content = document.querySelector('div.page_pdf_content');
    let close_html = document.querySelector('div.close_html');
    let cont_page_full = document.querySelector('div.cont_page_full');
    removeDOMElement(page_pdf_content, close_html, cont_page_full);
  }, 1000);
  window.setTimeout(function () {
    let cont_articlelight = document.querySelector('div.cont_articlelight');
    if (cont_articlelight)
      cont_articlelight.setAttribute('style', 'height: 100% !important; width: 90% !important');
  }, 3000);
  if (window.location.pathname.startsWith('/mobile')) {
    let lessreadmore = document.querySelectorAll('article.lessreadmore');
    for (let article of lessreadmore)
      article.classList.remove('lessreadmore');
    let bt_readmore = document.querySelectorAll('div[id*="bt_readmore_"]');
    removeDOMElement(...bt_readmore);
  }
}

else if (matchDomain('elobservador.com.uy')) {
  if (window.location.pathname.endsWith('/amp')) {
    amp_unhide_access_hide('="observador.mostrarNota"');
    let amp_images = document.querySelectorAll('div.fixed-container > amp-img.null');
    for (let amp_image of amp_images) {
      let elem = document.createElement('img');
      Object.assign(elem, {
        src: amp_image.getAttribute('src'),
        alt: amp_image.getAttribute('alt'),
        title: amp_image.getAttribute('title')
      });
      amp_image.parentNode.replaceChild(elem, amp_image);
    }
  } else {
    let paywall = document.querySelector('div.mensaje_member');
    if (paywall) {
      removeDOMElement(paywall);
      window.location.href = window.location.pathname + '/amp';
    }
  }
}

else if (matchDomain('eltiempo.com')) {
  let modulos = document.querySelector('div.modulos');
  if (modulos)
    modulos.classList.remove('modulos');
}

else if (matchDomain('eltribuno.com')) {
  let lazy_images = document.querySelectorAll('img.lazyload[data-src]:not([src])');
  for (let elem of lazy_images) {
    elem.src = elem.getAttribute('data-src');
    elem.classList.remove('lazyload');
  }
}

else if (matchDomain('em.com.br')) {
  if (!window.location.pathname.endsWith('/amp.html')) {
    amp_redirect('.news-blocked-content');
    hideDOMStyle(ads);
  } else {
    amp_unhide_subscr_section('amp-ad, amp-embed, amp-fx-flying-carpet');
    let compress_text = document.querySelector('div.compress-text');
    if (compress_text)
      compress_text.classList.remove('compress-text');
  }
}

else if (matchDomain('estadao.com.br')) {
  if (window.location.pathname.match(/(\.amp$|^\/amp\/)/) || window.location.search.startsWith('?amp')) {
    amp_unhide_access_hide('="outputValue=\'hide_paywall\'"', '="outputValue=\'show_paywall\'"', 'amp-ad, amp-embed, amp-fx-flying-carpet, div[class^="pAd"], div.ads-container');
  } else {
    let paywall = document.getElementById('paywall-wrapper-iframe-estadao');
    removeDOMElement(paywall);
    let ads = 'div[class^="styles__Container-sc-"]';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('exame.com')) {
  window.localStorage.removeItem('pywllcount');
  let ads = 'div[id^="ads_"]';
  hideDOMStyle(ads);
}

else if (matchDomain('uol.com.br')) {
  if (matchDomain('folha.uol.com.br')) {
    if (window.location.pathname.startsWith('/amp/')) {
      amp_unhide_subscr_section('amp-ad, amp-sticky-ad, amp-embed');
    } else {
      let signup = document.querySelector('.c-top-signup');
      removeDOMElement(signup);
    }
  }
  let ads = 'div[class*="advertising"], div.jupiter-ads, div.up-floating, div[data-cp-id$="asfads"]';
  hideDOMStyle(ads);
}

else if (matchDomain('gazetadopovo.com.br')) {
  if (window.location.pathname.endsWith('/amp/')) {
    amp_unhide_subscr_section('div.ads-amp, amp-embed, div.tpl-wrapper', false);
  } else {
    let ads = 'div.c-ads';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('globo.com')) {
  if (matchDomain('valor.globo.com')) {
    if (!window.location.pathname.startsWith('/google/amp/')) {
      amp_redirect('div.paywall');
    } else {
      amp_unhide_subscr_section('amp-ad, amp-embed');
      amp_images_replace();
    }
  } else if (window.location.pathname.includes('/amp/'))
    ampToHtml();
  if (!window.location.pathname.includes('/amp/')) {
    let ads = 'div[id^="ad-container"], div.content-ads, div[class^="block__advertising"], div#pub-in-text-wrapper, div.area_publicidade_container';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('lanacion.com.ar')) {
  setCookie(/^metering_arc/, '', 'lanacion.com.ar', '/', 0);
  let ads = 'div.mod-banner';
  hideDOMStyle(ads);
}

else if (matchDomain('latercera.com')) {
  let subscr_banner = document.querySelector('.empty');
  removeDOMElement(subscr_banner);
}

else if (matchDomain('revistaoeste.com')) {
  if (window.location.pathname.startsWith('/revista/')) {
    let intro = document.querySelector('div.is-locked');
    let sub_panel = document.querySelector('div.subscribe-panel');
    removeDOMElement(intro, sub_panel);
    let div_hidden = document.querySelector('div.hidden[data-url]');
    if (div_hidden)
      div_hidden.classList.remove('hidden');
  } else {
    let div_expandable = document.querySelector('div.expandable');
    if (div_expandable)
      div_expandable.classList.remove('expandable');
  }
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

function cookieExists(name) {
  return document.cookie.split(';').some(ck => ck.trim().indexOf(name + '=') === 0)
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

function amp_images_replace() {
  window.setTimeout(function () {
    let amp_images = document.querySelectorAll('figure amp-img[src^="http"]');
    for (let amp_image of amp_images) {
      let elem = document.createElement('img');
      elem.src = amp_image.getAttribute('src');
      elem.alt = amp_image.getAttribute('alt');
      elem.style = 'width: 100%;';
      amp_image.parentNode.replaceChild(elem, amp_image);
    }
  }, 1000);
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
  for (let elem of access_hide)
    elem.removeAttribute('amp-access-hide');
  if (amp_access_not) {
    let amp_access_not_dom = document.querySelectorAll('[amp-access' + amp_access_not + ']');
    removeDOMElement(...amp_access_not_dom);
  }
  hideDOMStyle(amp_ads_sel, 6);
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
