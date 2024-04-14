// ==UserScript==
// @name            Bypass Paywalls Clean - en
// @version         3.6.5.5
// @description     Bypass Paywalls of news sites
// @author          magnolia1234
// @downloadURL     https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.en.user.js
// @updateURL       https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.en.user.js
// @homepageURL     https://github.com/bpc-clone/bypass-paywalls-clean-filters
// @supportURL      https://github.com/bpc-clone/bypass-paywalls-clean-filters
// @license         MIT; https://github.com/bpc-clone/bypass-paywalls-clean-filters/blob/main/LICENSE
// @match           *://*.com/*
// @match           *://*.co.uk/*
// @match           *://*.com.au/*
// @match           *://*.co/*
// @match           *://*.io/*
// @match           *://*.net/*
// @match           *://*.net.au/*
// @match           *://*.org/*
// @match           *://*.pub/*
// @match           *://*.businessinsider.com.pl/*
// @match           *://*.businesspost.ie/*
// @match           *://*.epoch.org.il/*
// @match           *://*.europower.no/*
// @match           *://*.fiskeribladet.no/*
// @match           *://*.haaretz.co.il/*
// @match           *://*.hindutamil.in/*
// @match           *://*.independent.ie/*
// @match           *://*.indiatoday.in/*
// @match           *://*.intrafish.no/*
// @match           *://*.ipolitics.ca/*
// @match           *://*.japantimes.co.jp/*
// @match           *://*.livelaw.in/*
// @match           *://*.nautil.us/*
// @match           *://*.niagarafallsreview.ca/*
// @match           *://*.newsweek.pl/*
// @match           *://*.nzherald.co.nz/*
// @match           *://*.rp.pl/*
// @match           *://*.sloanreview.mit.edu/*
// @match           *://*.stcatharinesstandard.ca/*
// @match           *://*.uxdesign.cc/*
// @match           *://*.wellandtribune.ca/*
// @connect         archive.fo
// @connect         archive.is
// @connect         archive.li
// @connect         archive.md
// @connect         archive.ph
// @connect         archive.vn
// @connect         archive.fo
// @connect         webcache.googleusercontent.com
// @exclude         *://*.dwcdn.net/*
// @exclude         *://*.google.com/*
// @exclude         *://*.mediafire.com/*
// @exclude         *://*.youtube.com/*
// @exclude         *://*.argusdelassurance.com/*
// @exclude         *://*.artsenkrant.com/*
// @exclude         *://*.cambiocolombia.com/*
// @exclude         *://*.clarin.com/*
// @exclude         *://*.connaissancedesarts.com/*
// @exclude         *://*.cronista.com/*
// @exclude         *://*.diariocordoba.com/*
// @exclude         *://*.diariovasco.com/*
// @exclude         *://*.diepresse.com/*
// @exclude         *://*.elconfidencial.com/*
// @exclude         *://*.elcorreo.com/*
// @exclude         *://*.elespanol.com/*
// @exclude         *://*.elespectador.com/*
// @exclude         *://*.elmercurio.com/*
// @exclude         *://*.elpais.com/*
// @exclude         *://elpais.com/*
// @exclude         *://*.elperiodico.com/*
// @exclude         *://*.elperiodicodearagon.com/*
// @exclude         *://*.elperiodicoextremadura.com/*
// @exclude         *://*.elperiodicomediterraneo.com/*
// @exclude         *://*.eltiempo.com/*
// @exclude         *://*.eltribuno.com/*
// @exclude         *://*.exame.com/*
// @exclude         *://*.expansion.com/*
// @exclude         *://*.faz.net/*
// @exclude         *://*.globo.com/*
// @exclude         *://*.journaldunet.com/*
// @exclude         *://*.la-croix.com/*
// @exclude         *://*.larioja.com/*
// @exclude         *://*.lasegunda.com/*
// @exclude         *://*.latercera.com/*
// @exclude         *://*.lavenir.net/*
// @exclude         *://*.ledevoir.com/*
// @exclude         *://*.lesinrocks.com/*
// @exclude         *://*.levante-emv.com/*
// @exclude         *://*.loeildelaphotographie.com/*
// @exclude         *://*.marca.com/*
// @exclude         *://*.marianne.net/*
// @exclude         *://*.parismatch.com/*
// @exclude         *://*.politicaexterior.com/*
// @exclude         *://*.pourleco.com/*
// @exclude         *://*.projectcargojournal.com/*
// @exclude         *://*.quotidiano.net/*
// @exclude         *://*.railfreight.cn/*
// @exclude         *://*.railfreight.com/*
// @exclude         *://*.railtech.com/*
// @exclude         *://*.revistaoeste.com/*
// @exclude         *://*.science-et-vie.com/*
// @exclude         *://*.topagrar.com/*
// @exclude         *://*.tt.com/*
// @exclude         *://*.tuttosport.com/*
// @exclude         *://*.usinenouvelle.com/*
// @exclude         *://*.wochenblatt.com/*
// @grant           GM.xmlHttpRequest
// ==/UserScript==

(function() {
  'use strict';

if (matchDomain('nzherald.co.nz')) {
  function nzherald_main() {
    if (window.Fusion)
      window.Fusion.globalContent.isPremium = false;
  }
  window.setTimeout(function () {
    insert_script(nzherald_main);
  }, 100);
}

else if (matchDomain(['thehindu.com', 'thehindubusinessline.com'])) {
  function hindu_main() {
    if (window) {
      window.Adblock = false;
      window.isNonSubcribed = false;
    }
  }
  window.setTimeout(function () {
    insert_script(hindu_main);
  }, 100);
}

var func_post;

window.setTimeout(function () {

var domain;
var mobile = window.navigator.userAgent.toLowerCase().includes('mobile');
var csDoneOnce;

var overlay = document.querySelector('body.didomi-popup-open');
if (overlay)
  overlay.classList.remove('didomi-popup-open');
var ads = 'div.OUTBRAIN, div[id^="taboola-"], div.ad, div.ad-container, div[class*="-ad-container"], div[class*="_ad-container"], div.arc_ad, div[id^="poool-"]';
hideDOMStyle(ads, 10);

var ca_torstar_domains = ['niagarafallsreview.ca', 'stcatharinesstandard.ca', 'thepeterboroughexaminer.com', 'therecord.com', 'thespec.com', 'thestar.com', 'wellandtribune.ca'];
var medium_custom_domains = ['betterprogramming.pub', 'towardsdatascience.com'];
var no_nhst_media_domains = ['europower.no', 'fiskeribladet.no', 'intrafish.com', 'intrafish.no', 'rechargenews.com', 'tradewindsnews.com', 'upstreamonline.com'];
var pl_ringier_domains = ['auto-swiat.pl', 'businessinsider.com.pl', 'forbes.pl', 'komputerswiat.pl', 'newsweek.pl', 'onet.pl'];
var sg_sph_media_domains = ['straitstimes.com'];
var timesofindia_domains = ['epaper.indiatimes.com', 'timesofindia.com', 'timesofindia.indiatimes.com'];
var uk_incisive_media_domains = ['businessgreen.com', 'internationalinvestment.net', 'investmentweek.co.uk', 'professionaladviser.com', 'professionalpensions.com'];
var uk_nat_world_domains = ['scotsman.com', 'yorkshirepost.co.uk'];
var usa_adv_local_domains = ['al.com', 'cleveland.com', 'lehighvalleylive.com', 'masslive.com', 'mlive.com', 'nj.com', 'oregonlive.com', 'pennlive.com', 'silive.com', 'syracuse.com'];
var usa_arizent_custom_domains = ['accountingtoday.com', 'benefitnews.com', 'bondbuyer.com', 'dig-in.com', 'financial-planning.com', 'nationalmortgagenews.com'];
var usa_conde_nast_domains = ['architecturaldigest.com', 'bonappetit.com', 'cntraveler.com', 'epicurious.com', 'gq.com' , 'newyorker.com', 'vanityfair.com', 'vogue.co.uk', 'vogue.com', 'wired.com'];
var usa_craincomm_domains = ['360dx.com', 'adage.com', 'autonews.com', 'chicagobusiness.com', 'crainscleveland.com', 'crainsdetroit.com', 'crainsgrandrapids.com', 'crainsnewyork.com', 'european-rubber-journal.com', 'genomeweb.com', 'modernhealthcare.com', 'pionline.com', 'plasticsnews.com', 'precisionmedicineonline.com', 'rubbernews.com', 'sustainableplastics.com', 'tirebusiness.com', 'utech-polyurethane.com'];
var usa_gannett_domains = ['azcentral.com', 'cincinnati.com', 'commercialappeal.com', 'courier-journal.com', 'democratandchronicle.com', 'desmoinesregister.com', 'detroitnews.com', 'dispatch.com', 'freep.com', 'indystar.com', 'jacksonville.com', 'jsonline.com', 'knoxnews.com', 'news-press.com', 'northjersey.com', 'oklahoman.com', 'statesman.com', 'tennessean.com'];
var usa_hearst_comm_domains = ['ctpost.com', 'expressnews.com', 'houstonchronicle.com', 'nhregister.com', 'sfchronicle.com', 'timesunion.com'];
var usa_lee_ent_domains = ['buffalonews.com', 'journalnow.com', 'journalstar.com', 'madison.com', 'nwitimes.com', 'omaha.com', 'richmond.com', 'stltoday.com', 'tucson.com', 'tulsaworld.com'];
var usa_mcc_domains = ['bnd.com', 'charlotteobserver.com', 'elnuevoherald.com', 'fresnobee.com', 'kansas.com', 'kansascity.com', 'kentucky.com', 'mcclatchydc.com', 'miamiherald.com', 'newsobserver.com', 'sacbee.com', 'star-telegram.com', 'thestate.com', 'tri-cityherald.com'];
var usa_mng_domains =   ['bostonherald.com', 'denverpost.com', 'eastbaytimes.com', 'mercurynews.com', 'ocregister.com', 'pressenterprise.com', 'twincities.com'];
var usa_nymag_domains = ['curbed.com', 'grubstreet.com', 'nymag.com', 'thecut.com', 'vulture.com'];
var usa_outside_mag_domains = ["backpacker.com", "betamtb.com", "betternutrition.com", "cleaneatingmag.com", "climbing.com", "outsideonline.com", "oxygenmag.com", "skimag.com", "trailrunnermag.com", "triathlete.com", "vegetariantimes.com", "womensrunning.com", "yogajournal.com"];
var usa_tribune_domains = ['baltimoresun.com', 'chicagotribune.com', 'courant.com', 'dailypress.com', 'mcall.com', 'nydailynews.com', 'orlandosentinel.com', 'pilotonline.com', 'sun-sentinel.com'];

if (matchDomain('gitlab.com') && window.location.pathname.startsWith('/magnolia1234')) {
  let bio = document.querySelector('p.profile-user-bio');
  if (bio) {
    let split = bio.innerText.split(/(https:[\w\-/.]+)|\|/g).filter(x => x && x.trim());
    bio.innerText = '';
    for (let part of split) {
      let elem;
      if (part.startsWith('https')) {
        elem = document.createElement('a');
        elem.innerText = part;
        elem.href = part;
        elem.appendChild(document.createElement('br'));
      } else {
        elem = document.createElement('b');
        elem.appendChild(document.createTextNode(part));
        if (!part.includes(':'))
          elem.appendChild(document.createElement('br'));
      }
      bio.appendChild(elem);
    }
  }
}

if (matchDomain('medium.com') || matchDomain(medium_custom_domains) || (!matchDomain('webcache.googleusercontent.com') && document.querySelector('head > link[href*=".medium.com/"]'))) {
  let url = window.location.href;
  let paywall = document.querySelector('article.meteredContent');
  if (paywall) {
    paywall.removeAttribute('class');
    paywall.firstChild.before(freediumLink(url));
    paywall.firstChild.before(googleWebcacheLink(url));
  }
  window.setTimeout(function () {
    let banner = pageContains('div > div > p', /author made this story available to/);
    if (banner.length)
      removeDOMElement(banner[0].parentNode.parentNode);
  }, 1000);
}

else if (window.location.hostname.match(/\.(com|net)\.au$/) || matchDomain('inc-aus.com')) {//australia

if (domain = matchDomain(['crikey.com.au', 'inc-aus.com', 'smartcompany.com.au', 'themandarin.com.au'])) {
  if (matchDomain('themandarin.com.au')) {
    if (true)
      getJsonUrl('div[data-enterprise-agreement-paywall="true"]', '', 'div.paywall-mandy');
  } else {
    setCookie('blaize_session', '', domain, '/', 0);
    let ads = '.advert';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('forbes.com.au')) {
  setCookie('blaize_session', '', 'forbes.com.au', '/', 0);
  if (true)
    getJsonUrl('div[class*="_gate"]', '', 'div.article-page__content-body');
  let fade = document.querySelector('div[style*="background-image: linear-gradient"]');
  removeDOMElement(fade);
}

else if (matchDomain('macrobusiness.com.au')) {
  let paywall = pageContains('div > p', 'The full text of this article is available');
  if (paywall[0]) {
    let fade = document.querySelector('div.bg-gradient-to-t');
    removeDOMElement(paywall[0].parentNode, fade);
    let json_script = document.querySelector('script#__NUXT_DATA__');
    if (json_script) {
      try {
        let json = JSON.parse(json_script.text);
        let json_text = json.filter(x => typeof x === 'string' && x.match(/(<|\\u003C)p>/))[0];
        let parser = new DOMParser();
        let doc = parser.parseFromString('<div>' + json_text + '</div>', 'text/html');
        let content_new = doc.querySelector('div');
        let article = document.querySelector('div.content');
        if (article) {
          article.innerHTML = '';
          article.appendChild(content_new);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

else if (matchDomain('spectator.com.au')) {
  getJsonUrl('section.paywall', '', 'div.article-body', {art_append: true});
}

else if (matchDomain('thesaturdaypaper.com.au')) {
  let hide_end = document.querySelector('div.hide-end');
  if (hide_end)
    refreshCurrentTab();
  let paywall = document.querySelector('div.paywall-hard-always-show');
  removeDOMElement(paywall);
}

else if (matchDomain(['brisbanetimes.com.au', 'smh.com.au', 'theage.com.au', 'watoday.com.au'])) {
  if (!window.location.hostname.startsWith('amp.')) {
    amp_redirect('head > meta[content^="FOR SUBSCRIBERS"], #paywall_prompt');
  } else {
    amp_unhide_subscr_section();
  }
}

else {
  // Australian Community Media newspapers
  let au_comm_media_domains = ['bendigoadvertiser.com.au', 'bordermail.com.au', 'canberratimes.com.au', 'centralwesterndaily.com.au', 'dailyadvertiser.com.au', 'dailyliberal.com.au', 'examiner.com.au', 'illawarramercury.com.au', 'newcastleherald.com.au', 'northerndailyleader.com.au', 'standard.net.au', 'theadvocate.com.au', 'thecourier.com.au', 'westernadvocate.com.au'];
  let au_comm_media_link = document.querySelector('a[href^="https://austcommunitymedia.my.site.com/"]');
  if (matchDomain(au_comm_media_domains) || au_comm_media_link) {
    let mask = document.querySelector('div[class^="gradient-mask-"]');
    if (mask) {
      mask.removeAttribute('class');
      let div_hidden = document.querySelectorAll('div.flex-col div.hidden');
      for (let elem of div_hidden)
        elem.classList.remove('hidden');
    } else {
      let subscribe_truncate = document.querySelector('.subscribe-truncate');
      if (subscribe_truncate)
        subscribe_truncate.classList.remove('subscribe-truncate');
      let subscriber_hiders = document.querySelectorAll('.subscriber-hider');
      for (let subscriber_hider of subscriber_hiders)
        subscriber_hider.classList.remove('subscriber-hider');
    }
    let noscroll = document.querySelectorAll('html[style], body[style]');
    for (let elem of noscroll)
      elem.removeAttribute('style');
    let story_generic_iframe = '.story-generic__iframe';
    let blocker = 'div.blocker';
    let overlays = 'div.transition-all, div[id^="headlessui-dialog"]';
    let ads = '.ad-placeholder, .sticky, [id*="-container"], #hindsight-ads-iframe';
    hideDOMStyle(story_generic_iframe + ', ' + blocker + ', ' + overlays + ', ' + ads);
  } else if (window.location.hostname.endsWith('.com.au')) {
    // Australia News Corp
    let au_news_corp_domains = ['adelaidenow.com.au', 'cairnspost.com.au', 'codesports.com.au', 'couriermail.com.au', 'dailytelegraph.com.au', 'geelongadvertiser.com.au', 'goldcoastbulletin.com.au', 'heraldsun.com.au', 'ntnews.com.au', 'theaustralian.com.au', 'thechronicle.com.au', 'themercury.com.au', 'townsvillebulletin.com.au', 'weeklytimesnow.com.au'];
    let au_news_corp_no_amp_fix = ['ntnews.com.au'];
    if (matchDomain(au_news_corp_domains)) {
      let url = window.location.href;
      if (url.includes('/subscribe/') && !matchDomain(au_news_corp_no_amp_fix)) {
        if (!url.includes('/digitalprinteditions') && url.includes('dest=') && url.split('dest=')[1].split('&')[0]) {
          let url_new = decodeURIComponent(url.split('dest=')[1].split('&')[0]) + '?amp';
          window.setTimeout(function () {
            window.location.href = url_new;
          }, 500);
        }
      } else if (window.location.search.match(/[&\?]amp/)) {
        amp_unhide_subscr_section('amp-ad, amp-embed, [id^="ad-mrec-"]', false);
        let figure_stretch = document.querySelectorAll('figure.stretch');
        for (let elem of figure_stretch)
          elem.classList.remove('stretch');
        let comments = document.querySelector('#comments-load, .comments-module');
        removeDOMElement(comments);
      } else {
        if (window.location.pathname.includes('/video/') && document.querySelector('div.vms-premium-video'))
          header_nofix(document.querySelector('div.video-hub'));
        let ads = '.header_ads-container, .ad-block';
        hideDOMStyle(ads);
      }
    } else {
      // Australian Seven West Media
      if (matchDomain('thewest.com.au') || document.querySelector('head > link[href="https://images.thewest.com.au"]')) {
        function thewest_main(node) {
          let scripts = document.querySelectorAll('script:not([src]):not([type])');
          let json_script;
          for (let script of scripts) {
            if (script.text.includes('window.PAGE_DATA =')) {
              json_script = script;
              break;
            }
          }
          if (json_script) {
            let json_text = json_script.text.split('window.PAGE_DATA =')[1].split('</script')[0];
            json_text = json_text.replace(/:undefined([,}])/g, ':"undefined"$1');
            try {
              let json_article = JSON.parse(json_text);
              let json_pub;
              for (let key in json_article) {
                let json_resolution = json_article[key].data.result.resolution;
                if (json_resolution && json_resolution.publication) {
                  json_pub = json_resolution.publication;
                  break;
                }
              }
              let json_content = [];
              let url_loaded;
              if (json_pub) {
                json_content = json_pub.content.blocks;
                url_loaded = json_pub._self;
              } else
                refreshCurrentTab();
              //let json_video = json_pub.mainVideo;
              let url = window.location.href;
              if (!url_loaded || !url.includes(url_loaded.slice(-10)))
                refreshCurrentTab();
              let par_elem, par_sub1, par_sub2;
              let par_dom = document.createElement('div');
              let tweet_id = 1;
              for (let par of json_content) {
                par_elem = '';
                if (par.kind === 'text') {
                  par_elem = document.createElement('p');
                  par_elem.innerText = par.text;
                } else if (par.kind === 'subhead') {
                  par_elem = document.createElement('h2');
                  par_elem.innerText = par.text;
                } else if (par.kind === 'pull-quote') {
                  par_elem = document.createElement('i');
                  par_elem.innerText = (par.attribution ? par.attribution + ': ' : '') + par.text;
                } else if (par.kind === 'embed') {
                  if (par.reference.includes('https://omny.fm/') || par.reference.includes('https://docdro.id/')) {
                    par_elem = document.createElement('embed');
                    par_elem.src = par.reference;
                    par_elem.style = 'height:500px; width:100%';
                    par_elem.frameborder = '0';
                  } else {
                    par_elem = document.createElement('a');
                    par_elem.href = par.reference;
                    par_elem.innerText = par.reference.split('?')[0];
                    console.log('embed: ' + par.reference);
                  }
                } else if (par.kind === 'unordered-list') {
                  if (par.items) {
                    par_elem = document.createElement('ul');
                    for (let item of par.items)
                      if (item.text) {
                        par_sub1 = document.createElement('li');
                        if (item.intentions[0] && item.intentions[0].href) {
                          par_sub2 = document.createElement('a');
                          par_sub2.href = item.intentions[0].href;
                        } else {
                          par_sub2 = document.createElement('span');
                        }
                        par_sub2.innerText = item.text;
                        par_sub1.appendChild(par_sub2);
                        par_elem.appendChild(par_sub1);
                      }
                  }
                } else if (par.kind === 'inline') {
                  if (par.asset.kind === 'image') {
                    par_elem = document.createElement('figure');
                    par_sub1 = document.createElement('img');
                    par_sub1.src = par.asset.original.reference;
                    par_sub1.style = 'width:100%';
                    par_elem.appendChild(par_sub1);
                    if (par.asset.captionText) {
                      par_sub2 = document.createElement('figcaption');
                      par_sub2.innerText = par.asset.captionText + ' ' + (par.asset.copyrightByline ? par.asset.copyrightByline : '') +
                        ((par.asset.copyrightCredit && par.asset.captionText !== par.asset.copyrightByline) ? '/' + par.asset.copyrightCredit : '');
                      par_elem.appendChild(par_sub2);
                    }
                  }
                } else if (par.kind === 'inline-related') {
                  par_elem = document.createElement('p');
                  if (par.publications) {
                    for (let elem of par.publications) {
                      let par_link = document.createElement('a');
                      par_link.href = elem._self;
                      par_link.innerText = elem.heading;
                      par_elem.appendChild(par_link);
                      par_elem.appendChild(document.createElement('br'));
                    }
                  }
                } else {
                  par_elem = document.createElement('p');
                  par_elem.innerText = par.text;
                  console.log(par.kind);
                }
                if (par_elem)
                  par_dom.appendChild(par_elem);
              }
              let content = document.querySelector('div[class*="StyledArticleContent"]');
              if (content) {
                content.innerHTML = '';
                content.appendChild(par_dom);
              } else {
                par_dom.setAttribute('style', 'margin: 20px;');
                node.before(par_dom);
              }
            } catch (err) {
              console.log(err);
            }
          }
          removeDOMElement(node);
        }
        let paywall_sel = 'div.paywall div[data-testid*="BreachScreen"], div[class*="StyledBreachWallContent"]';
        let paywall = document.querySelector(paywall_sel);
        if (paywall)
          thewest_main(paywall);
        else {
          waitDOMElement(paywall_sel, 'DIV', thewest_main, true);
        }
        let ads = 'div.headerAdvertisement';
        hideDOMStyle(ads);
      } else if (document.querySelector('head > link[rel="dns-prefetch"][href="//static.ew.mmg.navigacloud.com"]')) { // McPherson Media Group
        let paywall = document.querySelector('div#content-Load-message');
        if (paywall) {
          removeDOMElement(paywall);
          let lockable = document.querySelectorAll('div[id^="lockable-"]');
          for (let elem of lockable) {
            elem.removeAttribute('style');
            elem.removeAttribute('id');
          }
          let gradient = document.querySelector('div.gradienttext');
          if (gradient)
            gradient.removeAttribute('class');
        }
      }
    }
  }
}

} else if ((window.location.hostname.match(/\.(ie|uk)$/) && !matchDomain(['investmentweek.co.uk', 'vogue.co.uk'])) || matchDomain(['apollo-magazine.com', 'autosport.com', 'citywire.com', 'ft.com', 'granta.com', 'scotsman.com', 'tes.com', 'unherd.com'])) {//united kingdom/ireland

if (matchDomain('apollo-magazine.com')) {
  setCookie('blaize_session', '', 'apollo-magazine.com', '/', 0);
  let banner = document.querySelector('#subscribe-ribbon');
  removeDOMElement(banner);
}

else if (matchDomain('autocar.co.uk')) {
  let url = window.location.href;
  getGoogleWebcache(url, 'div.ms-block, div.register-block', '', 'div.content-wrapper');
}

else if (matchDomain('autosport.com')) {
  let paywall = document.querySelector('div.ms-piano_article-banner');
  if (paywall) {
    removeDOMElement(paywall);
    header_nofix(document.querySelector('div.ms-article-content > p'));
  }
}

else if (matchDomain(['belfasttelegraph.co.uk', 'independent.ie'])) {
  let flip_pay = document.querySelector('div#flip-pay');
  if (flip_pay && flip_pay.hasChildNodes()) {
    let content = document.querySelector('script[data-fragment-type="ArticleContent"]');
    if (content) {
      let fade = document.querySelector('div[class*="_fadetowhite"]');
      removeDOMElement(flip_pay, fade);
      let intro = document.querySelector('div > div[data-auth-intro="article"]');
      if (intro) {
        let intro_par = intro.querySelector('p[class]');
        let intro_par_class;
        if (intro_par)
          intro_par_class = intro_par.getAttribute('class');
        let content_text = content.innerText;
        if (content_text.includes('__PRELOADED_STATE_GRAPH')) {
          content_text = content_text.replace(/window\["__PRELOADED_STATE_GRAPH__.+"\]\s=\s/, '');
          try {
            let json = JSON.parse(content_text);
            if (Object.keys(json).length) {
              let key = Object.keys(json)[0];
              let pars = json[key].data.article.body;
              let parser = new DOMParser();
              for (let par of pars) {
                for (let type in par) {
                  let item = par[type];
                  let elem = document.createElement('p');
                  elem.setAttribute('style', "margin: 10px;");
                  if (type === 'bullet_list') {
                    let ul = document.createElement('ul');
                    for (let sub_item of item) {
                      let li = document.createElement('li');
                      li.innerText = sub_item;
                      ul.appendChild(li);
                    }
                    elem.appendChild(ul);
                  } else if (type === 'image') {
                    let figure = document.createElement('figure');
                    let img = document.createElement('img');
                    img.src = item.url;
                    if (item.cropped && item.cropped.url)
                      img.src = item.cropped.url;
                    figure.appendChild(img);
                    let caption = document.createElement('figcaption');
                    caption.innerText = item.caption;
                    figure.appendChild(caption);
                    elem.appendChild(figure);
                  } else if (type === 'related') {
                    if (item.articles) {
                      let articles = item.articles;
                      for (let article of articles) {
                        let elem_link = document.createElement('a');
                        elem_link.href = article.webcmsRelativeUrl;
                        elem_link.innerText = article.title;
                        elem.appendChild(elem_link);
                        elem.appendChild(document.createElement('br'));
                      }
                    }
                  } else if (!['ad', 'quote', 'streamone'].includes(type)) {
                    let html = parser.parseFromString('<p class="' + intro_par_class + '">' + item + '</p>', 'text/html');
                    elem = html.querySelector('p');
                    if (!['p', 'subhead', 'legacy-ml'].includes(type)) {
                      console.log(type);
                      console.log(item);
                    }
                  }
                  window.setTimeout(function () {
                    if (elem)
                      intro.parentNode.appendChild(elem);
                  }, 500);
                }
              }
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    }
  }
  let ads = 'div[id^="ad_article"]';
  hideDOMStyle(ads);
}

else if (matchDomain('businesspost.ie')) {
  function bpie_main() {
    if ($) {
      let article_id_dom = document.querySelector('article[id]');
      let article_id;
      if (article_id_dom)
        article_id = article_id_dom.id;
      if (article_id) {
        let bp_ajaxurl = 'https://www.businesspost.ie/wp-admin/admin-ajax.php';
        let data_ajax = {
          action: 'fetch_article_content',
          type: 'POST',
          data: {
            id: article_id
          },
          dataType: 'json',
          contentType: 'application/json'
        };
        $.ajax({
          type: 'POST',
          url: bp_ajaxurl,
          data: data_ajax,
          success: function (data) {
            $('main article .article-body-section').html(data);
          }
        });
      }
    } else
      refreshCurrentTab();
  }
  window.setTimeout(function () {
    let paywall = document.querySelector('div#bp_paywall_content');
    let article_id_dom = document.querySelector('article[id]');
    let article_id;
    if (article_id_dom)
      article_id = article_id_dom.id;
    if (paywall || article_id) {
      removeDOMElement(paywall);
      insert_script(bpie_main);
    }
  }, 500);
}

else if (matchDomain('citywire.com')) {
  let url = window.location.href;
  getGoogleWebcache(url, 'div#lockedLoginPanel', '', 'div#newsArticleBody');
  let ads = 'div.cw-top-advert';
  hideDOMStyle(ads);
}

else if (matchDomain('ft.com')) {
  let url = window.location.href;
  getArchive(url, 'div[data-component="unlockBanner"], img[src*="icons/padlock_icon.svg"]', '', 'div#barrier-page', '', 'article#site-content', 'article#article-body');
}

else if (matchDomain('gbnews.com')) {
  let ads = 'div.ad--billboard, div.ad--placeholder';
  hideDOMStyle(ads);
}

else if (matchDomain('granta.com')) {
  getJsonUrl('div.article-sign-up-container', '', 'div.article-excerpt');
}

else if (matchDomain('independent.co.uk')) {
  func_post = function () {
    let lazy_images = document.querySelectorAll('img[loading="lazy"][width]');
    for (let elem of lazy_images) {
      elem.removeAttribute('width');
      elem.style = 'width: 100%;';
    }
  }
  let url = window.location.href;
  if (window.location.search.match(/(\?|&)amp/)) {
    let ads = 'amp-ad, amp-embed, [id^="ad-"]';
    hideDOMStyle(ads);
  } else {
    let related = document.querySelector('div.related');
    if (!related) {
      getArchive(url, 'div.article-premium', {rm_class: 'article-premium'}, 'div#main');
    }
  }
}

else if (matchDomain('literaryreview.co.uk')) {
  getJsonUrl('p.subscribe-for-more', '', 'div#_articlereview');
}

else if (matchDomain('prospectmagazine.co.uk')) {
  let url = window.location.href;
  getGoogleWebcache(url, 'div.paywall_overlay_blend, div.paywall', '', 'main');
  let ads = '.ad-banner, .advert';
  hideDOMStyle(ads);
}

else if (matchDomain('spectator.co.uk')) {
  let url = window.location.href;
  getArchive(url, 'section.paywall', '', 'article');
  let ads = '#subscribe-ribbon, div.ad-slot';
  hideDOMStyle(ads);
}

else if (matchDomain('stylist.co.uk')) {
  let paywall = document.querySelector('div[data-testid="paywall-component"]');
  if (paywall) {
    removeDOMElement(paywall);
    let json_script = document.querySelector('script#__NEXT_DATA__');
    if (json_script) {
      try {
        let json = JSON.parse(json_script.text);
        if (json.props.pageProps.data.post.acf.widgets) {
          let url_next = json.props.pageProps.data.post.id;
          if (url_next && !window.location.pathname.endsWith(url_next))
            refreshCurrentTab();
          let pars = json.props.pageProps.data.post.acf.widgets;
          let first_par = document.querySelector('main div[data-column="true"] > p');
          if (first_par) {
            let article = first_par.parentNode;
            let teaser = article.querySelectorAll('div > p:not([class])');
            removeDOMElement(...teaser);
            if (article) {
              let parser = new DOMParser();
              for (let par of pars) {
                let elem = document.createElement('p');
                if (par.paragraph) {
                  let content = par.paragraph;
                  let content_new = parser.parseFromString('<div>' + content + '</div>', 'text/html');
                  elem = content_new.querySelector('div');
                } else if (par.acf_fc_layout === 'heading') {
                  if (par.text)
                    elem.appendChild(document.createTextNode(par.text));
                } else if (['image', 'interactive_image'].includes(par.acf_fc_layout)) {
                  let image_array = [];
                  if (par.image)
                    image_array = [par.image];
                  else if (par.image_collection)
                    image_array = par.image_collection;
                  for (let img_elem of image_array) {
                    let figure = document.createElement('figure');
                    let img = document.createElement('img');
                    img.src = img_elem.url;
                    img.alt = img_elem.alt;
                    img.style = 'width: 95%;';
                    figure.appendChild(img);
                    if (img_elem.caption || img_elem.description || img_elem.alt) {
                      let caption = document.createElement('figcaption');
                      caption.innerText = img_elem.caption ? (img_elem.caption + ' ' + img_elem.description) : img_elem.alt;
                      figure.appendChild(caption);
                    }
                    elem.appendChild(figure);
                  }
                } else if (par.acf_fc_layout === 'listicle') {
                  let ul = document.createElement('ul');
                  for (let sub_item of par.item) {
                    let li = document.createElement('li');
                    if (sub_item.url) {
                      let par_link = document.createElement('a');
                      par_link.href = sub_item.url;
                      par_link.innerText = sub_item.title;
                      par_link.target = '_blank';
                      li.appendChild(par_link);
                    } else
                      li.innerText = sub_item.title;
                    if (sub_item.paragraph) {
                      let content = sub_item.paragraph;
                      let content_new = parser.parseFromString('<div>' + content + '</div>', 'text/html');
                      let par_elem = content_new.querySelector('div');
                      li.appendChild(par_elem);
                    }
                    if (sub_item.image) {
                      let img = document.createElement('img');
                      img.src = sub_item.image.url;
                      img.alt = sub_item.image.alt;
                      img.style = 'width: 95%;';
                      li.appendChild(img);
                      li.appendChild(document.createElement('br'));
                    }
                    li.style = 'font-size: 20px; margin: 20px 0px;';
                    ul.appendChild(li);
                  }
                  elem.appendChild(ul);
                } else if (par.embed_link) {
                  let par_link = document.createElement('a');
                  par_link.href = par.embed_link;
                  par_link.innerText = 'Embedded link: ' + par.embed_link;
                  par_link.target = '_blank';
                  elem.appendChild(par_link);
                } else if (par.acf_fc_layout === 'divider') {
                  elem.appendChild(document.createElement('hr'));
                } else if (par.acf_fc_layout === 'related_articles') {
                  if (par.posts) {
                    for (let post of par.posts) {
                      if (post.link && post.title.rendered) {
                        let par_link = document.createElement('a');
                        par_link.href = post.link;
                        par_link.innerText = 'You may also like: ' + post.title.rendered;
                        elem.appendChild(par_link);
                        elem.appendChild(document.createElement('br'));
                      }
                    }
                  }
                } else if (!['newsletter_signup', 'pull-quote'].includes(par.acf_fc_layout))
                  console.log(par);
                if (elem.hasChildNodes()) {
                  elem.style = 'font-family: "Source Serif Pro"; font-size: 20px; line-height: 34px;';
                  article.appendChild(elem);
                }
              }
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

else if (matchDomain('telegraph.co.uk')) {
  if (window.location.pathname.endsWith('/amp/')) {
    let paywall = document.querySelectorAll('.premium-paywall');
    if (paywall.length) {
      let truncated_content = document.querySelector('.truncated-content');
      removeDOMElement(...paywall, truncated_content);
      amp_unhide_access_hide('="c.result=\'ALLOW_ACCESS\'"', '', 'amp-ad, amp-embed', false);
    } else {
      let ads = 'amp-ad, amp-embed';
      hideDOMStyle(ads);
    }
  } else {
    let subwall = '[class^="subwall"]';
    let ads = '.advert, .commercial-unit';
    hideDOMStyle(subwall + ', ' + ads);
  }
}

else if (matchDomain('tes.com')) {
  let paywall = document.querySelector('div.tg-paywall-message');
  if (paywall) {
    removeDOMElement(paywall);
    let overlay = document.querySelector('div.tg-paywall-body-overlay');
    if (overlay)
      overlay.removeAttribute('class');
  }
  let banner = document.querySelector('div.js-paywall-info');
  removeDOMElement(banner);
}

else if (matchDomain('the-tls.co.uk')) {
  getJsonUrl('div.tls-single-article__closed-paywall', '', 'div.tls-article-body', {art_class: 'tls-article-body'});
  let fade = 'div.tls-single-article__closed-paywall-wrapper';
  let ads = 'div[class*="tls-single-article__ad-slot"]';
  hideDOMStyle(fade + ', ' + ads);
}

else if (matchDomain('theneweuropean.co.uk')) {
  let paywall = document.querySelector('div[data-show-fade-on-noaccess]');
  if (paywall) {
    removeDOMElement(paywall);
    let content = document.querySelector('div[data-show-has-access]');
    if (content)
      content.removeAttribute('data-show-has-access');
  }
  let banners = document.querySelectorAll('div[data-show-subs-blocked]');
  removeDOMElement(...banners);
}

else if (matchDomain('thetimes.co.uk')) {
  let url = window.location.href;
  if (window.location.hostname !== 'epaper.thetimes.co.uk') {
    func_post = function () {
      let figure = document.querySelector('figure > div[style] > div[style]');
      if (figure) {
        figure.removeAttribute('style');
        figure.parentNode.removeAttribute('style');
      }
      let style_new = 'display: block; margin-left: auto; margin-right: auto; width: 90%;';
      let inline_images = document.querySelectorAll('img[style][src^="https"]');
      for (let elem of inline_images) {
        elem.style = style_new;
        elem.parentNode.removeAttribute('style');
      }
      let headers = document.querySelectorAll('article:not([id]) div[style*="text-align"]');
      for (let elem of headers)
        elem.style = style_new + ' text-align: center;';
      for (let n = 0; n < 5; n++) {
        window.setTimeout(function () {
          let page_scroll = document.querySelectorAll('html, body');
          for (let elem of page_scroll)
            elem.removeAttribute('style');
        }, n * 500);
      }
    }
    if (!url.includes('?shareToken=')) {
      let teaser = document.querySelector('body[data-view-name="teaser-article"]');
      if (teaser) {
        getArchive(url, 'div#paywall-portal-article-footer', '', 'article:not([id])');
      }
    }
    let paywall_page = document.querySelector('div#paywall-portal-page-footer');
    let block = document.querySelector('.subscription-block');
    removeDOMElement(paywall_page, block);
    let ads = '#ad-article-inline, div#sticky-ad-header, div[class*="InlineAdWrapper"], div[class*="NativeAd"], div.gyLkkj';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('unherd.com')) {
  let preview = document.querySelector('div#premiumpreview');
  if (preview) {
    removeDOMElement(preview);
    let premium = document.querySelector('div#premiumcontent');
    if (premium)
      premium.removeAttribute('id');
  }
}

else if (matchDomain(uk_nat_world_domains) || document.querySelector('footer > div a[href^="https://www.nationalworldplc.com"]')) {
  let premium = document.querySelector('div.premium');
  if (premium)
    premium.removeAttribute('class');
  let amp_images = document.querySelectorAll('article amp-img[src^="https://"]');
  for (let amp_image of amp_images) {
    let elem = document.createElement('img');
    Object.assign(elem, {
      src: amp_image.getAttribute('src'),
      alt: amp_image.getAttribute('alt')
    });
    amp_image.parentNode.replaceChild(elem, amp_image);
  }
  let ads = 'div[class^="MarkupAds__Container-"], div[class*="_AdContainer-"], div[class^="Dailymotion__Wrapper-"]';
  hideDOMStyle(ads);
}

} else {

if (matchDomain(usa_adv_local_domains)) {
  if (window.location.search.startsWith('?outputType=amp')) {
    let ads = 'amp-embed';
    hideDOMStyle(ads);
  } else {
    let paywall_sel = 'div.paywall';
    let paywall = document.querySelector(paywall_sel);
    let article = document.querySelector('div.entry-content');
    if (paywall && article) {
      let fusion_script = document.querySelector('script#fusion-metadata');
      if (fusion_script && fusion_script.text.includes('Fusion.globalContent=')) {
        paywall.classList.remove('paywall');
        try {
          let json = JSON.parse(fusion_script.text.split('Fusion.globalContent=')[1].split(';Fusion.')[0]);
          if (json) {
            article.innerHTML = '';
            let parser = new DOMParser();
            let pars = json.content_elements;
            for (let par of pars) {
              let par_new;
              if (['header', 'text'].includes(par.type)) {
                if (par.content) {
                  let doc = parser.parseFromString('<p class="article__paragraph">' + par.content + '</p>', 'text/html');
                  par_new = doc.querySelector('p');
                }
              } else if (par.image_type) {
                if (par.url) {
                  par_new = document.createElement('figure');
                  par_new.className = 'article__image';
                  par_new.style = 'width: 75%; margin-left: auto; margin-right: auto;';
                  let img = document.createElement('img');
                  img.src = par.url;
                  if (par.alt_text)
                    img.alt = par.alt_text;
                  par_new.appendChild(img);
                  let caption = document.createElement('figcaption');
                  caption.className = 'article__image-caption';
                  let cap_par = document.createElement('p');
                  cap_par.innerText = par.caption;
                  if (par.credits && par.credits.by && par.credits.by[0] && par.credits.by[0].byline)
                    cap_par.innerText += ' - ' + par.credits.by[0].byline;
                  caption.appendChild(cap_par);
                  par_new.appendChild(caption);
                }
              } else if (!['raw_html'].includes(par.type)) {
                console.log(par);
              }
              if (par_new)
                article.appendChild(par_new);
            }
          }
        } catch (err) {
          console.log(err);
        }
      } else
        amp_redirect(paywall_sel, '', window.location.pathname + '?outputType=amp');
    }
  }
}

else if (matchDomain('adweek.com')) {
  setCookie('blaize_session', '', '.www.adweek.com', '/', 0);
  let url = window.location.href;
  getGoogleWebcache(url, 'div#paywall-subscribe', '', 'div.adw-article-body');
}

else if (matchDomain('americanbanker.com') || matchDomain(usa_arizent_custom_domains)) {
  let inline_gate = document.querySelector('.inline-gate');
  if (inline_gate) {
    inline_gate.classList.remove('inline-gate');
    let inline_gated = document.querySelectorAll('.inline-gated');
    for (let elem of inline_gated)
      elem.classList.remove('inline-gated');
  }
}

else if (matchDomain('artnet.com')) {
  if (window.location.pathname.endsWith('/amp-page')) {
    amp_unhide_subscr_section();
  } else {
    let body_hidden = document.querySelector('.article-body');
    if (body_hidden)
      body_hidden.style = 'display:block;';
    let banner = document.querySelector('div[id^="issuem-leaky-paywall-"]');
    removeDOMElement(banner);
  }
}

else if (matchDomain('asia.nikkei.com')) {
  setCookie('xbc', '', 'nikkei.com', '/', 0);
  let paywall = document.querySelector('div#paywall-offer > div.tp-container-inner');
  if (paywall) {
    removeDOMElement(paywall);
    refreshCurrentTab();
  }
  let popup = document.querySelector('#pianoj_ribbon');
  removeDOMElement(popup);
}

else if (matchDomain('axios.com')) {
  function axios_noscroll(node) {
    node.removeAttribute('style');
    let overlay = 'div[class^="Modal_paywallContainer"]';
    hideDOMStyle(overlay, 2);
  }
  waitDOMAttribute('html', 'HTML', 'style', axios_noscroll, true);
  let banners = 'div[data-cy="pro-paywall"], div.apexAd';
  hideDOMStyle(banners);
}

else if (matchDomain('balkaninsight.com')) {
  getJsonUrl('div.subscribeWrapper', '', 'div.post_teaser', {art_append: true, art_hold: true});
}

else if (matchDomain(['barandbench.com', 'thenewsminute.com'])) {
  let paywall = document.querySelector('div[id*="paywall-banner"]');
  if (paywall) {
    removeDOMElement(paywall);
    let article = document.querySelector('div[class^="paywall-story-"]');
    if (article) {
      let article_new = getArticleQuintype();
      if (article_new && article.parentNode)
        article.parentNode.replaceChild(article_new, article);
    }
  }
}

else if (matchDomain('barrons.com')) {
  if (!window.location.pathname.startsWith('/amp/')) {
    amp_redirect('div#cx-interstitial-snippet', '', '/amp' + window.location.pathname);
    let continue_buttons = document.querySelectorAll('button.snippet__buttons--continue');
    for (let elem of continue_buttons)
      elem.addEventListener('click', function () { window.location.reload(); });
    let ads = 'div[class*="_AdWrapper-"], div[class*="-adWrapper-"]';
    hideDOMStyle(ads);
  } else {
    amp_unhide_subscr_section('.wsj-ad, amp-ad');
    amp_images_replace();
    let login = document.querySelector('div.login-section-container');
    removeDOMElement(login);
  }
}

else if (matchDomain('billboard.com')) {
  if (window.location.pathname.endsWith('/amp/')) {
    amp_unhide_subscr_section('amp-ad, amp-embed');
  }
}

else if (matchDomain('bizjournals.com')) {
  window.setTimeout(function () {
  let paywall = document.querySelector('div[data-dev="CxWidget_article:wall"]');
  if (paywall) {
    removeDOMElement(paywall);
    let hidden_content = document.querySelector('article div[style="display: none;"]');
    if (hidden_content)
      hidden_content.removeAttribute('style');
  } else {
    let paywall = document.querySelector('div#cxense-paywall');
    if (paywall) {
      removeDOMElement(paywall);
      let paywalled_content = document.querySelectorAll('.paywalled-content[style]');
      for (let elem of paywalled_content)
        elem.removeAttribute('style');
    }
  }
  let dialog = document.querySelector('div[id^="headlessui-dialog-"]');
  if (dialog) {
    removeDOMElement(dialog);
    let body = document.querySelector('body');
    if (body)
      body.click();
  }
  }, 1000);
  let ads = 'div.adwrap';
  hideDOMStyle(ads);
}

else if (matchDomain('bloomberg.com')) {
  let paywall_sel = 'div[id^="fortress-"]';
  let paywall = paywall_sel;
  let leaderboard = 'div[id^="leaderboard"], div[class^="leaderboard"], div.canopy-container';
  let ads = 'div[data-ad-status], div[data-ad-type], div[class^="FullWidthAd_"], div.adWrapper';
  hideDOMStyle(paywall + ', ' + leaderboard + ', ' + ads);
  waitDOMElement(paywall_sel, 'DIV', removeDOMElement, true);
  waitDOMAttribute('body', 'BODY', 'data-paywall-overlay-status', node => node.removeAttribute('data-paywall-overlay-status'), true);
  if (window.location.pathname.startsWith('/live/')) {
    setInterval(function () {
      window.localStorage.clear();
    }, 15 * 60 * 1000);
  } else
    window.localStorage.clear();
  window.setTimeout(function () {
    let shimmering = document.querySelector('article.first-story div[class^="Placeholder_placeholderParagraphWrapper-"]');
    if (shimmering) {
      header_nofix(shimmering.parentNode, 'BPC > disable Dark Reader or enable Javascript for site');
    }
  }, 5000);
}

else if (matchDomain('bloombergadria.com')) {
  let article_hidden = document.querySelector('article[style]');
  if (article_hidden)
    article_hidden.removeAttribute('style');
  let ads = '.banner';
  hideDOMStyle(ads);
}

else if (matchDomain('bostonglobe.com')) {
  if (window.location.search.startsWith('?outputType=amp'))
    amp_unhide_subscr_section();
}

else if (matchDomain('business-standard.com')) {
  function bs_main(node) {
    removeDOMElement(node);
    let json_script = document.querySelector('script#__NEXT_DATA__');
    if (json_script) {
      try {
        let json = JSON.parse(json_script.text);
        if (json && json.props.pageProps.data.htmlContent) {
          let json_text = json.props.pageProps.data.htmlContent;
          let content = document.querySelector('div[class^="MainStory_storycontent__"');
          if (json_text && content) {
            content.innerHTML = '';
            let intro = content.querySelectorAll('div:not([class]');
            removeDOMElement(...intro);
            let parser = new DOMParser();
            let doc = parser.parseFromString('<div>' + json_text + '</div>', 'text/html');
            let content_new = doc.querySelector('div');
            window.setTimeout(function () {
              content.appendChild(content_new);
            }, 1000);
          }
        } else
          refreshCurrentTab();
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!window.location.pathname.startsWith('/amp/')) {
    if (true) {
      let paywall_sel = 'div.subscribe-page';
      let paywall = document.querySelector(paywall_sel);
      if (paywall) {
        bs_main(paywall)
      } else {
        waitDOMElement(paywall_sel, 'DIV', bs_main, false);
      }
    }
    let banner = 'section.sbcrbtmlfull';
    let ads = 'div.advertisement-bg, div[id^="between_article_content_"]';
    hideDOMStyle(banner + ', ' + ads);
  } else
    ampToHtml();
}

else if (matchDomain('businessinsider.com')) {
  let ads = 'div.l-ad, div.in-post-sticky, aside.has-video-ad, div.ad-callout-wrapper';
  hideDOMStyle(ads);
}

else if (matchDomain('businessoffashion.com')) {
  if (window.location.search.startsWith('?outputType=amp')) {
    amp_unhide_access_hide();
  } else {
    let ads = 'div[class^="default__AdsBlockWrapper"]';
    hideDOMStyle(ads);
  }
}

else if (matchDomain(['chronicle.com', 'philanthropy.com'])) {
  let preview = document.querySelector('div[data-content-summary]');
  removeDOMElement(preview);
  let article_hidden = document.querySelector('div.contentBody[hidden]');
  if (article_hidden) {
    let attributes = article_hidden.attributes;
    for (let elem of attributes) {
      let name = elem.name;
      if (name !== 'class')
        article_hidden.removeAttribute(name);
    }
  }
}

else if (matchDomain('cnbc.com')) {
  let paywall = document.querySelector('div.ArticleGate-proGate');
  if (paywall) {
    removeDOMElement(paywall);
    let article = document.querySelector('div.ArticleBody-articleBody');
    if (article)
      article.style = "margin: 20px 0px; font-family: Lyon,Helvetica,Arial,sans-serif; font-size: 18px; line-height: 1.66";
    let span_hidden = document.querySelectorAll('span[hidden]');
    for (let elem of span_hidden) {
      elem.removeAttribute('hidden');
      elem.removeAttribute('class');
    }
  }
}

else if (matchDomain('cnn.com')) {
  let regwall_keys = Object.keys(window.localStorage).filter(x => x.match(/reg_?wall/i));
  for (let item of regwall_keys)
    window.localStorage.removeItem(item);
  let ads = 'div[class^="ad-slot-"], div.container__ads';
  hideDOMStyle(ads);
}

else if (matchDomain('columbian.com')) {
  setCookie('blaize_session', '', 'columbian.com', '/', 0);
  let url = window.location.href;
  func_post = function () {
    let modal = document.querySelector('div.modal');
    let fade = document.querySelector('div[style*="background-image: linear-gradient"]');
    removeDOMElement(modal, fade);
  }
  getGoogleWebcache(url, 'div#inline-paywall', '', 'div[itemprop="articleBody"]');
}

else if (matchDomain('csmonitor.com')) {
  let paywall = document.querySelector('div.paywall');
  removeDOMElement(paywall);
  window.localStorage.clear();
}

else if (matchDomain('dailywire.com')) {
  let paywall = document.querySelector('#post-body-text > div > div[class]');
  if (paywall)
    paywall.removeAttribute('class');
}

else if (matchDomain('dallasnews.com')) {
  if (window.location.search.startsWith('?outputType=amp')) {
    amp_unhide_subscr_section('amp-ad, amp-embed');
  }
}

else if (matchDomain('dealstreetasia.com')) {
  let paywall = document.querySelectorAll('div.subscribe-now, div.overlay');
  if (paywall.length) {
    removeDOMElement(...paywall);
    let json_script = document.querySelector('script#__NEXT_DATA__');
    if (json_script) {
      try {
        let json = JSON.parse(json_script.innerText);
        if (json && json.props.pageProps.wpData.content) {
          let content_new = json.props.pageProps.wpData.content;
          let article = document.querySelector('article');
          if (article) {
            article.innerHTML = '';
            let parser = new DOMParser();
            let doc = parser.parseFromString('<div>' + content_new + '</div>', 'text/html');
            let article_new = doc.querySelector('div');
            article.appendChild(article_new);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

else if (matchDomain('defector.com')) {
  let paywall = document.querySelector('div[class^="ContentGate_wrapper__"]');
  if (paywall) {
    removeDOMElement(paywall);
    let article_sel = 'div[class^="PostContent_wrapper__"]';
    let article = document.querySelector(article_sel);
    if (article) {
      window.setTimeout(function () {
        let pars = article.querySelectorAll('p');
        if (pars.length < 3) {
          let url = window.location.href.split('?')[0];
          replaceDomElementExt(url, false, false, article_sel);
        }
      }, 1000);
    }
  }
}

else if (matchDomain(['digiday.com', 'glossy.co', 'modernretail.co'])) {
  let ads = 'div[class^="ad_"]';
  hideDOMStyle(ads);
}

else if (matchDomain('discovermagazine.com')) {
  window.setTimeout(function () {
    let body = document.querySelector('body');
    if (body)
      body.style = 'overflow: auto !important;';
    let banners = 'div.fIkXwQ, div[style*="fadeIn"], div[role="button"][aria-label="Dismiss Dialog"]';
    hideDOMStyle(banners);
  }, 1000);
}

else if (matchDomain('dwell.com')) {
  if (window.location.pathname.startsWith('/article/')) {
    let paywall = document.querySelector('div#mainPanel div[class^="FCR_"]');
    if (!window.location.search.startsWith('?rel=plus')) {
      if (paywall) {
        removeDOMElement(paywall);
        window.location.href = window.location.pathname + '?rel=plus';
      }
    } else {
      let article = document.querySelector('div > section[class]');
      if (paywall && article) {
        removeDOMElement(paywall);
        article.classList.remove('_2S7l9_l2eDI5b8DSR29ijf');
        let scripts = document.querySelectorAll('script:not([src]):not([type])');
        let json_script;
        for (let script of scripts) {
          if (script.text.match(/window.INITIAL_STATE\s?=\s?/)) {
            json_script = script;
            break;
          }
        }
        if (json_script) {
          let split1 = json_script.text.split(/window.INITIAL_STATE\s?=\s?/)[1];
          let state = (split1.split('};')[0] + '}').split('</script>')[0];
          if (state) {
            try {
              let json = JSON.parse(state);
              if (json) {
                let items = json.articles.items;
                let id = Object.keys(items)[0];
                let photos = json.photos ? json.photos.items : '';
                let json_text = items[id].attributes.body.replace(/(<br>|<span style=".+;">|<\/span>)/g, '');
                function find_img_url(match, p1, p2, offset, string) {
                  let contributorId;
                  let format;
                  if (photos && photos[p1]) {
                    contributorId = photos[p1].attributes.userId;
                    format = photos[p1].attributes.format;
                  }
                  let result = '<p>missing photo: ' + p1 + '</p>';
                  if (contributorId)
                    result = '<figure><img src="https://images2.dwell.com/photos/' + contributorId + '/' + p1 + '/original.' + format + '?auto=format&q=35&w=1280"><figcaption>' + p2 + '</figcaption></figure>';
                  return result;
                }
                json_text = json_text.replace(/<dwell-photo photoId="(\d+)"\scaption="([^"]+)"[^<]+photoUserId="\d*"\/>/g, find_img_url);
                let parser = new DOMParser();
                let doc = parser.parseFromString('<section class="' + article.className + '">' + json_text + '</section>', 'text/html');
                let article_new = doc.querySelector('section');
                article.parentNode.replaceChild(article_new, article);
              }
            } catch (err) {
              console.log(err);
            }
          }
        }
      }
      let photo_links = document.querySelectorAll('div > a[href^="' + window.location.pathname.replace(/\/\d{8,}/, '') + '"]');
      for (let elem of photo_links)
        elem.href += '?rel=plus';
      let close_button = document.querySelector('header > div > span > svg');
      if (!document.querySelector('a#bpc_close') && close_button) {
        let elem = document.createElement('a');
        elem.href = window.location.pathname.split('?')[0].replace(/\/\d{8,}/, '');
        elem.id = 'bpc_close';
        elem.innerText = 'close';
        elem.style.color = 'white';
        close_button.parentNode.parentNode.appendChild(elem);
      }
    }
  }
  let ads = 'div.EYrS5iukqzJMkNAcFQ0ho';
  hideDOMStyle(ads);
}

else if (matchDomain('economictimes.com')) {
  if (window.location.pathname.includes('/amp_')) {
    let paywall = document.querySelector('.paywall_wrap');
    if (paywall) {
      let content = document.querySelector('.paywall[style="display:none;"]');
      if (content) {
        let parser = new DOMParser();
        let doc = parser.parseFromString('<div style="margin: 20px 0px;">' + content.innerText + '</div>', 'text/html');
        let content_new = doc.querySelector('div');
        if (content_new && content.parentNode)
          content.parentNode.replaceChild(content_new, content);
      } else
        window.location.href = 'https://economictimes.indiatimes.com' + window.location.pathname.replace('amp_prime', 'prime');
      let intro = document.querySelector('.art_wrap');
      let article_blocker = document.querySelector('.articleBlocker');
      removeDOMElement(paywall, intro, article_blocker);
      let ads = 'amp-ad';
      hideDOMStyle(ads);
    }
  } else {
    window.setTimeout(function () {
      let paywall = document.querySelector('div#blocker_layer');
      let data_prime = document.querySelector('div[data-prime="1"]');
      let amphtml = document.querySelector('head > link[rel="amphtml"]');
      if (paywall || data_prime) {
        removeDOMElement(paywall);
        if (data_prime)
          data_prime.removeAttribute('data-prime');
        if (amphtml)
          amp_redirect_not_loop(amphtml);
        else if (window.location.pathname.startsWith('/epaper/'))
          window.location.href = 'https://economictimes.indiatimes.com' + window.location.pathname;
      } else {
        let ads = '.adContainer';
        hideDOMStyle(ads);
      }
    }, 500);
  }
}

else if (matchDomain('economictimes.indiatimes.com')) {
  let paywall = document.querySelector('section.prime_paywall');
  if (paywall) {
    removeDOMElement(paywall);
    let content = document.querySelector('div.content1, div.artText');
    let full_text = document.querySelector('div.paywall.p1');
    if (content && full_text)
      content.innerText = full_text.innerText;
    let page_content = document.querySelector('div.pageContent:not([style])');
    if (page_content)
      page_content.setAttribute('style', 'height: auto !important;');
    let article_wrap = document.querySelector('div.article_wrap[style]');
    if (article_wrap)
      article_wrap.removeAttribute('style');
  }
}

else if (matchDomain('economist.com')) {
  if (window.location.pathname.startsWith('/interactive/')) {
    let paywall = document.querySelector('div.paywall');
    if (paywall) {
      let hide_style = document.querySelector('body > style');
      removeDOMElement(paywall, hide_style);
    }
  } else {
    let url = window.location.href;
    getGoogleWebcache(url, 'div#tp-regwall', '', 'section[data-body-id]');
  }
  let ads = 'div[class*="_advert__"]';
  hideDOMStyle(ads);
}

else if (matchDomain('enotes.com')) {
  let paywall = document.querySelectorAll('section.c-cta-section');
  if (paywall.length) {
    removeDOMElement(...paywall);
    let blurred = document.querySelectorAll('div[class^="_"]');
    for (let elem of blurred)
      elem.removeAttribute('class');
    let intro = document.querySelectorAll('div.o-rte-text > p:not([class]), div.o-rte-text > h3');
    for (let elem of intro)
      removeDOMElement(elem);
    let section_words = pageContains('p[class="u-align--center"]', /\(The entire section contains/);
    let ads = document.querySelectorAll('.ad-hfu');
    hideDOMElement(...section_words, ...ads);
  }
}

else if (matchDomain('epoch.org.il')) {
  getJsonUrl('div.register-login-box', '', 'div.paywall');
}

else if (matchDomain('espn.com')) {
  let url = window.location.href;
  let paywall = document.querySelector('aside.espn-plus-container-wrapper');
  if (paywall) {
    removeDOMElement(paywall);
    replaceDomElementExt(url, false, false, 'div.article-body');
  }
}

else if (matchDomain('euobserver.com')) {
  let div_hidden = document.querySelector('div.membership-upsell.show');
  if (div_hidden)
    div_hidden.classList.remove('show');
}

else if (matchDomain('fastcompany.com')) {
  let paywall = document.querySelector('div.paywall');
  if (paywall) {
    removeDOMElement(paywall);
    let scripts = document.querySelectorAll('script:not([src]):not([type])');
    let json_script;
    for (let script of scripts) {
      if (script.text.match(/window\.appState\s=\s/)) {
        json_script = script;
        break;
      }
    }
    if (json_script) {
      try {
        let json = JSON.parse(json_script.text.split(/window\.appState\s=\s/)[1].split('};')[0].replace(/:undefined([,}])/g, ':"undefined"$1') + '}');
        if (json) {
          let pars_array = json.post.data.post.content;
          let article = document.querySelector('article');
          if (pars_array.length && article) {
            article.innerHTML = '';
            article.classList.remove('post__article--lock');
            let parser = new DOMParser();
            for (let par_array of pars_array) {
              for (let par of par_array) {
                let content_new = parser.parseFromString('<div>' + par + '</div>', 'text/html');
                let elem = content_new.querySelector('div');
                article.appendChild(elem);
              }
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  let ads = 'div[class*="ad-wrapper"]';
  hideDOMStyle(ads);
}

else if (matchDomain('fieldandstream.com')) {
  let overlay = document.querySelectorAll('div[class^="mailmunch-"]');
  removeDOMElement(...overlay);
  let noscroll = document.querySelector('html.mailmunch-pop-open');
  if (noscroll)
    noscroll.removeAttribute('class');
}

else if (matchDomain('financialexpress.com')) {
  let paywall = document.querySelector('div.paywall');
  if (paywall)
    paywall.classList.remove('paywall');
  let register = 'div.pcl-wrap';
  let ads_selector = window.location.pathname.endsWith('/lite/') ? 'amp-ad, amp-embed, .ad-bg-container' : 'div[class*="-ads-blocks-ad-unit"]';
  hideDOMStyle(register + ', ' + ads_selector);
}

else if (matchDomain('forbes.com')) {
  waitDOMAttribute('body', 'body', 'class', node => node.removeAttribute('class'), true);
  if (window.location.pathname.startsWith('/newsletters/')) {
    let paywall = document.querySelector('div > div.newsletter-teaser');
    if (paywall) {
      paywall.classList.remove('newsletter-teaser');
      let header = paywall.parentNode;
      header_nofix(header);
    }
  }
  let ads = 'fbs-ad';
  hideDOMStyle(ads);
}

else if (matchDomain('foreignaffairs.com')) {
  let paywall = document.querySelector('.paywall');
  let loading_indicator = document.querySelector('.loading-indicator');
  let msg_bottom = document.querySelector('.messages--container--bottom');
  removeDOMElement(paywall, loading_indicator, msg_bottom);
  let article_dropcap = document.querySelectorAll('.article-dropcap');
  for (let elem of article_dropcap)
    elem.classList.add('loaded');
}

else if (matchDomain('foreignpolicy.com')) {
  let content_ungated = document.querySelector('div.content-ungated');
  if (content_ungated) {
    removeDOMElement(content_ungated);
    let content_gated = document.querySelector('div.content-gated');
    if (content_gated) {
      let insider = document.querySelector('body.is-fp-insider');
      if (insider) {
        getJsonUrl('div.content-gated', {rm_class: 'content-gated'}, 'div.content-gated');
        window.setTimeout(function () {
          let lazy_images = document.querySelectorAll('img[loading="lazy"]');
          for (let elem of lazy_images)
            elem.removeAttribute('loading');
        }, 1000);
      } else
        content_gated.classList.remove('content-gated');
    }
  }
}

else if (matchDomain('fortune.com')) {
  let paywall = document.querySelector('div.paywallActive');
  if (window.location.pathname.match(/\/amp(\/)?/)) {
    amp_unhide_access_hide('="NOT p.showRegWall AND NOT p.showPayWall"', '="p.showPayWall"', '[class^="amp-ad"], div.paywall');
  } else {
    if (paywall)
      paywall.removeAttribute('class');
  }
}

else if (matchDomain('foxnews.com')) {
  let paywall = document.querySelector('div.article-gating-wrapper');
  removeDOMElement(paywall);
  let overlay = document.querySelector('div[class*="gated-overlay"]');
  if (overlay)
    overlay.removeAttribute('class');
}

else if (matchDomain(['haaretz.co.il', 'haaretz.com', 'themarker.com'])) {
  window.setTimeout(function () {
  let url = window.location.href;
  let body_wrapper_sel = 'section[data-testid="article-body-wrapper"]';
  let paywall_sel = 'div[data-test="paywallMidpage"], ' + body_wrapper_sel + ' a[href^="https://promotion."]';
  let article_sel = 'div[data-test="articleBody"], ' + body_wrapper_sel;
  let article_link_sel = 'article header, main.article-page p, ' + article_sel;
  if (window.location.pathname.includes('/.')) {
    func_post = function () {
      let article_link = document.querySelector(article_link_sel);
      if (article_link) {
        let article_new = document.querySelector(article_sel);
        let paywall = article_new.querySelector(paywall_sel);
        if (paywall) {
          removeDOMElement(paywall);
          article_link.firstChild.before(googleSearchToolLink(url));
        }
      }
    }
    getArchive(url, paywall_sel, '', article_sel, '', article_sel, article_link_sel);
  } else if (window.location.pathname.includes('/ty-article-live/')) {
    let paywall = document.querySelector(paywall_sel);
    if (paywall) {
      removeDOMElement(paywall);
      let article = document.querySelector(article_sel);
      if (article) {
        //article.before(archiveLink_renew(url));
        article.before(archiveLink(url));
      }
    }
  } else if (window.location.pathname === '/') {
    let overlays = document.querySelectorAll('div > div > svg[data-test="IconAlefLogoTransparent"]');
    for (let elem of overlays)
      removeDOMElement(elem.parentNode.parentNode);
    let inert_links = document.querySelectorAll('article[inert]');
    for (let elem of inert_links)
      elem.removeAttribute('inert');
  }
  }, 2000);
}

else if (matchDomain('harpers.org')) {
  setCookie('hr_session', '', 'harpers.org', '/', 0);
}

else if (matchDomain('hbr.org')) {
  function hbr_main() {
    window.top.postMessage({type: 'article-paywall:full-content'}, '*');
  }
  let popup = document.querySelector('.persistent-banner');
  removeDOMElement(popup);
  let paywall = document.querySelector('div#paywall');
  if (paywall) {
    removeDOMElement(paywall);
    insert_script(hbr_main);
  }
}

else if (matchDomain('hilltimes.com')) {
  function hilltimes_main(node) {
    getJsonUrl('div.paywallcont', '', 'div#entry-content');
  }
  let paywall_sel = 'div.paywallcont';
  let paywall = document.querySelector(paywall_sel);
  if (true) {
    if (paywall)
      hilltimes_main(paywall);
    else
      waitDOMElement(paywall_sel, 'DIV', hilltimes_main, false);
  }
  let banner = 'section.hide_this_section';
  hideDOMStyle(banner);
}

else if (matchDomain('hindustantimes.com')) {
  let paywall = document.querySelector('.freemium-card');
  if (paywall) {
    removeDOMElement(paywall);
    let freemium_text = document.querySelector('.freemiumText');
    if (freemium_text)
      freemium_text.classList.remove('freemiumText');
  }
  let noscroll = document.querySelector('body.open-popup');
  if (noscroll)
    noscroll.classList.remove('open-popup');
  let close_story = '.closeStory';
  let ads = 'div[class^="adHeight"]';
  hideDOMStyle(close_story + ', ' + ads);
}

else if (matchDomain('hindutamil.in')) {
  if (!window.location.pathname.startsWith('/amp/')) {
    amp_redirect('div.premium-class-bt');
  }
}

else if (matchDomain('historyextra.com')) {
  let article_masked = document.querySelector('.template-article__masked');
  if (article_masked) {
    let extra_pars = document.querySelectorAll('div.template-article__masked > p');
    removeDOMElement(...extra_pars);
    article_masked.classList.remove('template-article__masked');
  }
  let ad_banner = document.querySelector('.ad-banner-container');
  removeDOMElement(ad_banner);
}

else if (matchDomain('inc42.com')) {
  if (window.location.pathname.endsWith('/amp/')) {
    amp_unhide_access_hide('="status"', '="NOT status"', 'amp-ad, amp-embed, div.wru-widget');
  } else {
    let div_hidden = document.querySelector('div.single-post-content');
    if (div_hidden)
      div_hidden.removeAttribute('class');
    let banner = 'div[id*="_leaderboard_"]';
    hideDOMStyle(banner);
  }
}

else if (matchDomain('indianexpress.com')) {
  if (window.location.pathname.endsWith('/lite/'))
    amp_unhide_access_hide('="metering.result=\'ALLOW_ACCESS\'"', '', 'div.amp-ad, amp-embed');
  else {
    let ads = 'div[class^="adsbox"], div.adboxtop, div.add-first, div.osv-ad-class, div.ie-int-campign-ad';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('indiatoday.in')) {
  if (window.location.pathname.match(/(\/amp)?\/magazine\//)) {
    let url = window.location.href;
    if (!url.includes('/amp/')) {
      amp_redirect('div#csc-paywall');
    } else {
      amp_unhide_access_hide('="granted"', '="NOT NOT granted"', 'amp-ad, amp-embed');
    }
  }
}

else if (matchDomain('infzm.com')) {
  let url = window.location.href;
  if (url.includes('/wap/#/')) {
    let container = document.querySelector('section.container');
    if (container)
      container.classList.remove('container');
    let overlay = document.querySelector('div.article-content[style]');
    if (overlay)
      overlay.removeAttribute('style');
  } else if (url.includes('.com/contents/')) {
    window.setTimeout(function () {
      window.location.href = url.replace('.com/contents/', '.com/wap/#/content/');
    }, 500);
  }
}

else if (matchDomain('inkl.com')) {
  let url = window.location.href;
  if (url.includes('/signin?') && url.includes('redirect_to=')) {
    window.setTimeout(function () {
      window.location.href = 'https://www.inkl.com' + decodeURIComponent(url.split('redirect_to=')[1]);
    }, 500);
  } else {
    let paywall = document.querySelector('div.paywall');
    if (paywall) {
      paywall.removeAttribute('class');
      let gradient_container = document.querySelector('div.gradient-container');
      removeDOMElement(gradient_container);
    }
    let what_is_inkl = document.querySelector('.what-is-inkl-container, .features-panel');
    let signup = document.querySelectorAll('.article-signup-container, .locked-sign-up-container, div[class*="/inkl-watermark.svg"]');
    let shared_banner = document.querySelector('div.shared-article-inline-banner');
    removeDOMElement(what_is_inkl, ...signup, shared_banner);
    let dismiss_button = document.querySelector('div.dismiss-button-container button.btn');
    if (dismiss_button)
      dismiss_button.click();
    let dive_deeper_summary_bodies = document.querySelectorAll('div.dive-deeper-container div.summary-body');
    if (dive_deeper_summary_bodies) {
      for (let summary_body of dive_deeper_summary_bodies) {
        if (!summary_body.querySelector('a')) {
          let ng_click = summary_body.getAttribute('ng-click').replace("showArticle('", '').replace("')", '');
          let weblink = document.createElement('a');
          weblink.text = 'open';
          weblink.href = 'https://www.inkl.com/news/' + ng_click;
          summary_body.appendChild(weblink);
        }
      }
    }
  }
}

else if (matchDomain('insidehighered.com')) {
  let ads = 'div[id^="block-dfptag"], div.wp-block-ihe-ad, section.section-ad_slot, div#roadblock';
  hideDOMStyle(ads);
}

else if (matchDomain('institutionalinvestor.com')) {
  let url = window.location.href;
  getGoogleWebcache(url, 'div.call_to_action', '', 'div.Page-articleBody');
  let fade = document.querySelector('div[style*="background-image: linear-gradient"]');
  removeDOMElement(fade);
}

else if (matchDomain('ipolitics.ca')) {
  let login = document.querySelector('div.login');
  if (login) {
    removeDOMElement(login);
    let json_script = document.querySelector('script#__NEXT_DATA__');
    if (json_script) {
      try {
        let json = JSON.parse(json_script.innerText);
        if (json && json.props.pageProps.post && json.props.pageProps.post.content) {
          let url_next = json.props.pageProps.post.slug;
          if (url_next && !window.location.pathname.includes(url_next))
            refreshCurrentTab();
          let article_new = json.props.pageProps.post.content;
          let article = document.querySelector('.post-body');
          if (article) {
            article.innerHTML = '';
            article.classList.remove('locked');
            let parser = new DOMParser();
            let doc = parser.parseFromString('<div>' + article_new + '</div>', 'text/html');
            let content_new = doc.querySelector('div');
            article.appendChild(content_new);
          }
        } else {
          refreshCurrentTab();
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

else if (matchDomain('janes.com')) {
  let articles = document.querySelectorAll('div.article-box');
  for (let article of articles) {
    let gated_text = article.querySelector('div > div.gated-text');
    if (gated_text) {
      let art_link = article.querySelector('a[href^="mailto:"][href*="&body="]');
      if (art_link) {
        let url = decodeURIComponent(art_link.href.split('&body=')[1]);
        let url_pathname = new URL(url).pathname;
        let og_url = url_pathname.match(/\/[\w-]+\//)[0] + 'news-detail' + url_pathname.match(/\/[\w-]+$/)[0];
        let par = document.createElement('p');
        let weblink = document.createElement('a');
        weblink.href = og_url;
        weblink.innerText = 'BPC > full text';
        par.appendChild(weblink);
        gated_text.parentNode.replaceChild(par, gated_text);
      }
    }
  }
}

else if (matchDomain('japantimes.co.jp')) {
  setCookie('xbc', '', 'japantimes.co.jp', '/', 0);
  if (!window.location.pathname.endsWith('/amp')) {
    window.setTimeout(function () {
      let paywall = document.querySelector('div.subscribe');
      if (paywall) {
        let banner = document.querySelector('div.blocker > div.tp-container-inner');
        removeDOMElement(paywall, banner);
        let article = document.querySelector('div.article-body');
        if (article) {
          let url = window.location.href;
          article.firstChild.before(nftLink(url));
        }
      }
    }, 2000);
  } else
    ampToHtml();
}

else if (matchDomain('jazziz.com')) {
  if (true) {
    let art_options = {};
    if (window.location.pathname.startsWith('/jazziz-discovery-'))
      art_options = {art_append: true, art_hold: true};
    getJsonUrl('div.emoxie-pay-wall', '', 'div.restricted-content', art_options);
    window.setTimeout(function () {
      let slideshow = document.querySelector('div[data-slider-id][style]');
      if (slideshow)
        slideshow.removeAttribute('style');
    }, 1000);
  }
}

else if (matchDomain('jpost.com')) {
  let premium_banners = document.querySelectorAll('.hide-for-premium, #hiddenPremiumForm, #hiddenLink');
  removeDOMElement(...premium_banners);
}

else if (matchDomain(['latimes.com', 'sandiegouniontribune.com'])) {
  let subscribers = pageContains('div.infobox > p.infobox-title', /subscribers/i);
  if (subscribers.length)
    removeDOMElement(subscribers[0].parentNode);
  let ads = 'div.google-dfp-ad-wrapper, div.revcontent';
  hideDOMStyle(ads);
}

else if (matchDomain('livelaw.in')) {
  let paywall = document.querySelector('div#subscription_paid_message, div.subscribeNow');
  if (paywall) {
    let intro = document.querySelector('div.story');
    removeDOMElement(paywall, intro);
    let restricted_message = document.querySelector('div.restricted_message');
    if (restricted_message)
      restricted_message.classList.remove('restricted_message');
    let paywall_content = document.querySelector('div.paywall-content.hide');
    if (paywall_content)
      paywall_content.classList.remove('hide');
  }
  let ads = 'inside-post-ad, amp-ad';
  hideDOMStyle(ads);
}

else if (matchDomain('livemint.com')) {
  if (window.location.pathname.includes('/amp-')) {
    let paywall = document.querySelectorAll('[amp-access="NOT subscribed"]');
    removeDOMElement(...paywall);
  } else {
    let paywall = document.querySelector('div.paywall');
    if (paywall)
      paywall.classList.remove('paywall');
    let ads = '[class^="ad"], [id^="ad"], #subscribeAd, .taboolaHeight';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('magazine.atavist.com')) {
  let bottom_notification = document.querySelector('div.bottom-notification');
  let overlay = document.querySelector('div.notification-overlay');
  removeDOMElement(bottom_notification, overlay);
  let paywall = document.querySelector('body.paywall-notification-visible');
  if (paywall)
    paywall.classList.remove('paywall-notification-visible');
  window.localStorage.clear();
}

else if (matchDomain('marketwatch.com')) {
  if (!window.location.pathname.startsWith('/amp/')) {
    amp_redirect('div#cx-snippet');
  } else {
    let meter = document.querySelector('div.meter');
    let container_sponsored = document.querySelector('div.container--sponsored');
    removeDOMElement(meter, container_sponsored);
    amp_unhide_subscr_section('.display-ad');
  }
  let ads = 'div.element--ad, div.j-ad';
  hideDOMStyle(ads);
}

else if (matchDomain('medscape.com')) {
  let ads = '.AdUnit, [id^="ads-"]';
  hideDOMStyle(ads);
}

else if (matchDomain('mexiconewsdaily.com')) {
  let div_hidden = document.querySelector('body.single div.td-post-content > div.tdb-block-inner');
  if (div_hidden)
    div_hidden.classList.remove('tdb-block-inner');
}

else if (matchDomain('mid-day.com')) {
  if (window.location.pathname.startsWith('/amp/')) {
    amp_unhide_access_hide('="granted"', '="NOT granted"', 'amp-ad, amp-embed, [class*="BannerAd"], div.midday-wrapper');
  } else {
    amp_redirect('div.modal.fade');
    let read_more = document.querySelector('#read-more-my');
    if (read_more)
      read_more.click();
  }
}

else if (matchDomain('nationalgeographic.com')) {
  function natgeo_func(node) {
    removeDOMElement(node);
    let body = document.querySelector('body[class]');
    if (body) {
      body.removeAttribute('class');
      body.removeAttribute('style');
    }
  }
  let paywall = document.querySelector('div[id^="fittPortal"]');
  if (paywall)
    natgeo_func(paywall);
  waitDOMElement('div[id^="fittPortal"]', 'DIV', natgeo_func, false);
  window.setTimeout(function () {
    let url = window.location.href;
    let subscribed = document.querySelector('div.Article__Content--gated');
    let msg = document.querySelector('div#bpc_archive');
    if (subscribed && !msg) {
      subscribed.appendChild(archiveLink(url));
      subscribed.setAttribute('style', 'overflow: visible !important;');
    }
    let overlay = document.querySelector('div.Article__Content__Overlay--gated');
    if (overlay)
      overlay.classList.remove('Article__Content__Overlay--gated');
  }, 2000);
  let ads = 'div.ad-slot, div.InsertedAd, div.natgeo-ad';
  hideDOMStyle(ads);
}

else if (matchDomain('nautil.us')) {
  setCookie(['arc', 'sfa'], '');
  let banners = document.querySelectorAll('div[class^="a__sc-np"], div.subscibe-bar');
  removeDOMElement(...banners);
}

else if (matchDomain('ndtvprofit.com')) {
  if (window.location.pathname.startsWith('/amp/')) {
    amp_unhide_subscr_section();
  } else {
    window.setTimeout(function () {
      amp_redirect('div[class^="hard-paywall"], div[class*="geotag-container_"]');
    }, 1000);
  }
  let ads = 'div.responsive-ad';
  hideDOMStyle(ads);
}

else if (matchDomain('newleftreview.org')) {
  let url = window.location.href;
  getGoogleWebcache(url, 'div.promo-wrapper', '', 'div.article-page');
}

else if (matchDomain('newrepublic.com')) {
  let modal = document.querySelector('div.article-scheduled-modal');
  let pw_popups = document.querySelector('div#pwPopups');
  removeDOMElement(modal, pw_popups);
  let ads = '.ad-unit';
  hideDOMStyle(ads);
}

else if (matchDomain('newscientist.com')) {
  let url = window.location.href;
  func_post = function () {
    let lazy_images = document.querySelectorAll('img.lazyload[data-src]:not([src])');
    for (let elem of lazy_images)
      elem.src = elem.getAttribute('data-src').split('?')[0] + '?width=800';
    let break_pre_array = pageContains('div.non-paywall > p', /…\s?$/);
    if (break_pre_array.length) {
      let break_pre = break_pre_array[0];
      let break_post = document.querySelector('div.paywall > p');
      if (break_post) {
        let parser = new DOMParser();
        let doc = parser.parseFromString('<p>' + break_pre.innerHTML.replace(/\s?…\s?/, ' ') + break_post.innerHTML + '</p>', 'text/html');
        let content_new = doc.querySelector('p');
        break_pre.parentNode.replaceChild(content_new, break_pre);
        removeDOMElement(break_post);
      }
    }
  }
  getGoogleWebcache(url, 'section#subscription-barrier', '', 'div.article-body, article');
  let ads = 'div[class*="Advert"]';
  hideDOMStyle(ads);
}

else if (matchDomain('newsday.com')) {
  if (window.location.pathname.startsWith('/amp/')) {
    amp_unhide_access_hide('="AccessLevel = \'Full Content Access\' OR Error = true"', '="Error != true AND UserState != \'Subscribed\'"');
  } else {
    let nd_lock = document.querySelector('html[class]');
    if (nd_lock)
      nd_lock.removeAttribute('class');
    let ads = 'div[class^="ad_full-banner_"]';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('newslaundry.com')) {
  let paywall = document.querySelector('div > div > img[alt^="paywall"]');
  if (paywall) {
    let banner = document.querySelector('div.FrsvM');
    removeDOMElement(paywall.parentNode.parentNode, banner);
    let json_script = getArticleJsonScript();
    if (json_script) {
      let json = JSON.parse(json_script.text);
      if (json) {
        let json_text = parseHtmlEntities(json.articleBody);
        let article = document.querySelector('div.story-element-text');
        if (json_text && article) {
          let parser = new DOMParser();
          let doc = parser.parseFromString('<div>' + json_text + '</div>', 'text/html');
          let article_new = doc.querySelector('div');
          article.innerHTML = '';
          article.appendChild(article_new);
        }
      }
    }
  }
}

else if (matchDomain('newsweek.com')) {
  let ads = 'div#topad, div[id^="dfp-ad-"]';
  hideDOMStyle(ads);
}

else if (matchDomain(['nola.com', 'theadvocate.com'])) {
  if (window.location.pathname.endsWith('.amp.html')) {
    let body_hidden = document.querySelector('.site-container');
    if (body_hidden)
      body_hidden.setAttribute('style', 'display:block;');
    let ads = 'amp-ad, amp-embed';
    hideDOMStyle(ads);
  } else {
    let ads = 'div.tnt-ads-container, div.asset-breakout-ads';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('nybooks.com')) {
  let paywall_article = document.querySelector('.paywall-article');
  if (paywall_article)
    paywall_article.classList.remove('paywall-article');
  let banners = 'div.toast-cta, div.inline-ad';
  hideDOMStyle(banners);
}

else if (matchDomain('nytimes.com')) {
  waitDOMElement('div#dock-container', 'DIV', removeDOMElement, false);
  let banners = 'div[data-testid="inline-message"], div[id^="ad-"], div.pz-ad-box';
  hideDOMStyle(banners);
}

else if (matchDomain('nzherald.co.nz')) {
  // use bpc adblocker filter
  let premium_toaster = '#premium-toaster';
  hideDOMStyle(premium_toaster);
}

else if (matchDomain('outlookbusiness.com')) {
  let paywall = document.querySelector('div#csc-paywall');
  if (paywall) {
    removeDOMElement(paywall);
    let json_script = document.querySelector('script#__NEXT_DATA__');
    if (json_script) {
      let json = JSON.parse(json_script.innerText);
      if (json && json.props.initialState.dashboard.ARTICLE_POST_DETAIL_API.data.article_data.description) {
        let article_new = json.props.initialState.dashboard.ARTICLE_POST_DETAIL_API.data.article_data.description;
        let article = document.querySelector('div.story-content');
        if (article) {
          article.innerHTML = '';
          let parser = new DOMParser();
          let doc = parser.parseFromString('<div>' + article_new + '</div>', 'text/html');
          let content_new = doc.querySelector('div');
          article.appendChild(content_new);
        }
      }
    }
  }
}

else if (matchDomain('outlookindia.com')) {
  let paywall = document.querySelector('div.paywall');
  if (paywall) {
    removeDOMElement(paywall);
    let json_script = getArticleJsonScript();
    if (json_script) {
      let json = JSON.parse(json_script.text);
      if (json) {
        let json_text = parseHtmlEntities(json.articleBody).replace(/\n/g, "$&\r\n");
        let content = document.querySelector('div#articleBody');
        if (json_text && content) {
          content.innerHTML = '';
          let article_new = document.createElement('p');
          article_new.innerText = json_text;
          content.appendChild(article_new);
        }
      }
    }
  }
}

else if (matchDomain(pl_ringier_domains)) {
  if (matchDomain('businessinsider.com.pl')) {
    setCookie('xbc', '', 'businessinsider.com.pl', '/', 0);
    let paywall = document.querySelector('div#content-premium-offer');
    removeDOMElement(paywall);
  } else if (matchDomain('newsweek.pl')) {
    let premium = document.querySelector('div.contentPremium[style]');
    if (premium) {
      premium.removeAttribute('class');
      premium.removeAttribute('style');
    }
    let premium_videos = document.querySelectorAll('div.videoPremiumWrapper > div.embed__mainVideoWrapper');
    for (let video of premium_videos) {
      video.removeAttribute('class');
      video.parentNode.removeAttribute('class');
    }
    let placeholder = document.querySelector('div#contentPremiumPlaceholder[class]');
    if (placeholder)
      placeholder.removeAttribute('class');
  } else if (matchDomain('onet.pl')) {
    function onet_main(node) {
      removeDOMElement(node);
      let json_script = document.querySelector('script#__NEXT_DATA__');
      if (json_script) {
        try {
          let json = JSON.parse(json_script.text);
          if (json) {
            let article = document.querySelector('section[class^="Body_content__"] > div') || document.querySelector('article section');
            if (article) {
              let parser = new DOMParser();
              let blocks = json.props.pageProps.story ? json.props.pageProps.story.blocks : json.props.pageProps.blocks;
              let pars = blocks.find(x => x.type === 'contentPremium').elements;
              for (let par of pars) {
                let par_elem;
                if (['heading', 'paragraph'].includes(par.type)) {
                  if (par.text) {
                    let doc = parser.parseFromString('<div style="margin: 25px 0px;">' + par.text + '</div>', 'text/html');
                    par_elem = doc.querySelector('div');
                  }
                } else if (par.type === 'unordered_list') {
                  if (par.entries) {
                    par_elem = document.createElement('ul');
                    par_elem.style = 'list-style-type: disc;';
                    for (let item of par.entries) {
                      let doc = parser.parseFromString('<li>' + item + '</li>', 'text/html');
                      par_item = doc.querySelector('li');
                      par_elem.appendChild(par_item);
                    }
                  }
                } else if (par.parameters) {
                  if (par.parameters.embedCode) {
                    let doc = parser.parseFromString('<div style="margin: 25px 0px;">' + par.parameters.embedCode + '</div>', 'text/html');
                    par_elem = doc.querySelector('div');
                  }
                } else if (!(par.slotId || ['commentsButton'].includes(par.type)))
                  console.log(par);
                if (par_elem)
                  article.appendChild(par_elem);
              }
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
    let tp_container_sel = ' div.tp-container-inner';
    waitDOMElement('div#pianoOffer' + tp_container_sel + ', div.contentPremium' + tp_container_sel, 'DIV', onet_main);
  } else {
    function archive_main(node) {
      removeDOMElement(node);
      let article_sel;
      if (matchDomain('forbes.pl'))
        article_sel = 'div[data-run-module="local/main_amd.premiumPlaceholder"]';
      else if (matchDomain('auto-swiat.pl'))
        article_sel = 'div[data-header="header#pageHeader"]';
      else if (matchDomain('komputerswiat.pl'))
        article_sel = 'div[data-run-module="local/main.adult"] > div:nth-last-of-type(1) article';
      let url = window.location.href;
      let url_archive = 'https://' + archiveRandomDomain() + '/' + url.split(/[#\?]/)[0];
      replaceDomElementExt(url_archive, true, false, article_sel);
    }
    waitDOMElement('div.contentPremium div.tp-container-inner', 'DIV', archive_main);
  }
  let ads = 'div[class^="AdPlaceholder_"], div[data-placeholder-caption], div[data-run-module$=".floatingAd"], aside[data-ad-container], [class^="pwAds"], .hide-for-paying, div.onet-ad, div.bottomBar';
  hideDOMStyle(ads);
}

else if (matchDomain('project-syndicate.org')) {
  let url = window.location.href;
  let paywall_sel = 'div.paywall--base';
  let paywall = document.querySelector(paywall_sel);
  if (paywall) {
    let article_sel = 'div[data-page-area="article-body"]';
    let article = document.querySelector(article_sel);
    if (article)
      getArchive(url, paywall_sel, '', article_sel);
    else {
      removeDOMElement(paywall);
      let split_top = document.querySelector('div.split-top');
      if (split_top)
        split_top.after(archiveLink(url));
    }
  }
}

else if (matchDomain('reuters.com')) {
  let ads = 'div[data-testid="ResponsiveAdSlot"], div[data-testid="Dianomi"]';
  hideDOMStyle(ads);
}

else if (matchDomain('rp.pl')) {
  setCookie('blaize_session', '', 'rp.pl', '/', 0);
  let url = window.location.href;
  getGoogleWebcache(url, 'div.paywallComponentWrapper', '', 'div.main--content--body');
}

else if (matchDomain('rugbypass.com')) {
  if (window.location.pathname.startsWith('/plus/')) {
    let paywall = document.querySelector('.premium-fold-bottom');
    if (paywall) {
      paywall.classList.remove('premium-fold-bottom');
      let offer = document.querySelector('.plus-article-offer');
      removeDOMElement(offer);
      let fade = document.querySelector('.fade');
      if (fade)
        fade.classList.remove('fade');
    }
  }
}

else if (matchDomain('science.org')) {
  let paywall = document.querySelector('div.alert-read-limit');
  removeDOMElement(paywall);
  let overlay = document.querySelector('body.alert-read-limit__overlay');
  if (overlay)
    overlay.classList.remove('alert-read-limit__overlay');
}

else if (matchDomain('scmp.com')) {
  if (window.location.hostname.startsWith('amp.')) {
    amp_unhide_subscr_section('amp-ad, div.ad-banner, div.advert-fly-carpet-container, div.inline-advert');
    let default_meters = document.querySelectorAll('div[id^="default-meter-page-views"]');
    removeDOMElement(...default_meters);
  } else {
    let section_hidden = document.querySelectorAll('section[data-qa="ContentBody-ContentBodyContainer"][class]');
    for (let elem of section_hidden)
      elem.removeAttribute('class');
    let paywalled = document.querySelector('div.paywalled-content');
    if (paywalled)
      paywalled.removeAttribute('class');
    let ads = 'div[data-qa*="AdSlot"], div.adblock-message';
    hideDOMStyle(ads);
  }
}

else if (matchDomain('seattletimes.com')) {
  let ads = '.top-ad-wrapper';
  hideDOMStyle(ads);
}

else if (matchDomain('seekingalpha.com')) {
  if (window.location.pathname.match(/^\/(article|news)\//)) {
    let article_sel = 'article div > section[data-test-id="card-container"]';
    let article = document.querySelector(article_sel);
    if (article) {
      function sa_main(node) {
        hideDOMElement(node);
        let parser = new DOMParser();
        let url = window.location.href.split(/[#\?]/)[0];
        fetch(url)
        .then(response => {
          if (response.ok) {
            response.text().then(html => {
              if (html.includes(article_sel.split(/[\[\]]/)[1])) {
                let doc = parser.parseFromString(html, 'text/html');
                let article_new = doc.querySelector(article_sel);
                if (article_new && article.parentNode)
                  article.parentNode.replaceChild(article_new, article);
              }
            });
          }
        }).catch(function (err) {
          false;
        });
        let unfade = document.querySelector('head > style#fade');
        if (!unfade && document.head) {
          let sheet = document.createElement('style');
          sheet.id = 'fade';
          sheet.innerText = 'div.vibB6, div.bg-share-card-bg {position:unset !important;}';
          document.head.appendChild(sheet);
        }
      }
      let paywall_sel = 'div[role="dialog"]';
      let paywall = document.querySelector(paywall_sel);
      if (paywall) {
        sa_main(paywall);
      } else {
        waitDOMElement(paywall_sel, 'DIV', sa_main, true);
      }
      function sa_noscroll(node) {
        node.removeAttribute('style');
        node.removeAttribute('class');
      }
      let body = document.querySelector('body');
      if (body)
        sa_noscroll(body);
      waitDOMAttribute('body', 'BODY', 'style', sa_noscroll, true);
      waitDOMAttribute('body', 'BODY', 'class', sa_noscroll, true);
    }
  }
}

else if (matchDomain(sg_sph_media_domains)) {
  let url = window.location.href;
  getArchive(url, 'div#nocx_paywall_area', '', 'main#content');
  let ads = 'div.ads, div[id^="dfp-ad-"], div.cx_paywall_placeholder';
  hideDOMStyle(ads);
}

else if (matchDomain('slate.com')) {
  let slate_roadblock = '.slate-roadblock';
  let ads = 'section[class*="-ad"]';
  hideDOMStyle(slate_roadblock + ', ' + ads);
}

else if (matchDomain('slideshare.net')) {
  window.localStorage.clear();
  let limit_overlay = document.querySelector('.limit-overlay');
  if (limit_overlay)
    limit_overlay.classList.remove('limit-overlay');
}

else if (matchDomain('sloanreview.mit.edu')) {
  let url = window.location.href;
  let article_sel = 'div.article-content';
  func_post = function () {
    let pars = document.querySelectorAll(article_sel + ' > p');
    if (pars.length < 5) {
      let article = document.querySelector(article_sel);
      if (article)
        article.firstChild.before(archiveLink(url));
    }
  }
  getGoogleWebcache(url, 'body.is-paywall', {rm_class: 'is-paywall'}, article_sel);
}

else if (matchDomain('sofrep.com')) {
  setCookie('sofrep_news_ids', '', 'sofrep.com', '/', 0);
  let paywall = document.querySelector('div.paywall');
  if (paywall) {
    paywall.removeAttribute('class');
    let intro = document.querySelector('div.non-paywall');
    removeDOMElement(intro);
    waitDOMElement('div#paywall_wrap', 'DIV', node => removeDOMElement(node.parentNode));
  }
  let banners = document.querySelectorAll('#scrollerCTA, #botCta');
  removeDOMElement(...banners);
}

else if (matchDomain('spglobal.com')) {
  let overlay = document.querySelector('.article__overlay');
  removeDOMElement(overlay);
  let html_noscroll = document.querySelector('html[class]');
  if (html_noscroll)
    html_noscroll.removeAttribute('class');
}

else if (matchDomain('sportico.com')) {
  if (window.location.pathname.endsWith('/amp/'))
    amp_unhide_subscr_section('amp-ad, amp-embed');
}

else if (matchDomain('staradvertiser.com')) {
  let paywall = document.querySelectorAll('div.fade');
  if (paywall.length) {
    removeDOMElement(...paywall);
    let div_hidden = document.querySelector('div#hsa-paywall-content[style]');
    if (div_hidden)
      div_hidden.removeAttribute('style');
    let noscroll = document.querySelector('body.overflow-hidden');
    if (noscroll)
      noscroll.classList.remove('overflow-hidden');
  }
  let ads = 'div.promo-container, div.teads-inread';
  hideDOMStyle(ads);
}

else if (matchDomain('startribune.com')) {
  let noscroll = document.querySelector('body[class]');
  if (noscroll)
    noscroll.style = 'overflow: auto !important; position: static !important;';
  let modal = document.querySelector('div.modal-backdrop');
  removeDOMElement(modal);
}

else if (matchDomain('stereogum.com')) {
  let paywall = document.querySelector('div.members-only-overlay-wrapper');
  if (paywall) {
    removeDOMElement(paywall);
    let json_url_dom = document.querySelector('head > link[rel="alternate"][type="application/json"][href]');
    if (json_url_dom) {
      let json_url = json_url_dom.href;
      fetch(json_url)
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            try {
              let json_text = json.acf.article_modules[0].copy.replace(/data-src/g, 'src');
              let content = document.querySelector('div.article__content div.text-block__inner');
              if (json_text && content) {
                let parser = new DOMParser();
                let doc = parser.parseFromString('<div>' + json_text + '</div>', 'text/html');
                let content_new = doc.querySelector('div');
                content.innerHTML = '';
                content.appendChild(content_new);
              }
            } catch (err) {
              console.log(err);
            }
          });
        }
      });
      }
  }
}

else if (matchDomain('stocknews.com')) {
  let hideme = document.querySelector('div#hideme');
  removeDOMElement(hideme);
  let blurmes = document.querySelectorAll('div[id^="blurme"]');
  for (let i = 0; i < blurmes.length; i++)
    blurmes[i].setAttribute('id', 'blurmenot' + i);
}

else if (matchDomain('stratfor.com')) {
  let url = window.location.href;
  getArchive(url, 'div#paywallCTAContainer', '', 'main', '', 'main', 'h1');
}

else if (matchDomain('studocu.com')) {
  window.setTimeout(function () {
    let paywall = document.querySelector('button[data-test-selector^="preview-banner-"]');
    if (paywall) {
      let paywall_banner = document.querySelector('#document-wrapper > div:not([style])');
      let banners = document.querySelectorAll('div.pf > :not(.page-content), div#premium-page-header');
      removeDOMElement(paywall_banner, ...banners);
      window.setTimeout(function () {
        let blurred_pages = document.querySelectorAll('div.page-content[style]');
        for (let blurred_page of blurred_pages) {
          let page = document.createElement('span');
          page.setAttribute('class', 'page-content');
          page.appendChild(blurred_page.firstChild);
          blurred_page.parentNode.replaceChild(page, blurred_page);
        }
      }, 2000);
    }
  }, 1000);
}

else if (matchDomain('study.com')) {
  let faded_content = document.querySelector('div.faded-content');
  if (faded_content)
    faded_content.removeAttribute('class');
  let div_hidden = document.querySelector('div.hidden[ng-non-bindable]');
  if (div_hidden)
    div_hidden.removeAttribute('class');
  let banners = document.querySelectorAll('div.article-cutoff-div');
  removeDOMElement(...banners);
}

else if (matchDomain('swarajyamag.com')) {
  if (!window.location.pathname.startsWith('/amp/')) {
    let paywall = pageContains('h2', /Please Sign In To Continue Reading/);
    let amphtml = document.querySelector('head > link[rel="amphtml"]');
    if (paywall.length) {
      removeDOMElement(...paywall);
      if (amphtml)
        amp_redirect_not_loop(amphtml);
    }
  }
}

else if (matchDomain(['techtarget.com', 'computerweekly.com'])) {
  let paywall = document.querySelector('div.paywall');
  if (paywall) {
    paywall.classList.remove('paywall');
    let banners = document.querySelectorAll('p#firstP, div#inlineRegistrationWrapper');
    removeDOMElement(...banners);
  }
}

else if (matchDomain('the-american-interest.com')) {
  let counter = document.getElementById('article-counter');
  removeDOMElement(counter);
}

else if (matchDomain('the-scientist.com')) {
  let paywall = document.querySelector('div.paywall');
  if (paywall) {
    paywall.classList.remove('paywall');
    let fader = document.querySelector('div.gated-fader');
    let modal = document.querySelector('div#Modal');
    removeDOMElement(fader, modal);
  }
}

else if (matchDomain('theamericanconservative.com')) {
  let paywall_sel = 'section.c-blog-post__body--locked';
  let paywall = document.querySelector(paywall_sel);
  if (paywall) {
    let art_options = {
      art_append: true,
      func_text: function (json_text) {
        if (json_text.includes('<p class="has-drop-cap">')) {
          let split = json_text.split(/(<p class="has-drop-cap">)/);
          json_text = split[1] + split[2];
        };
        return json_text;
      }
    };
    getJsonUrl(paywall_sel, {rm_class: 'c-blog-post__body--locked'}, 'div.c-blog-post__content', art_options);
  } else {
    let img_dark = document.querySelector('div.c-hero-article__image-img.o-image');
    if (img_dark)
      img_dark.removeAttribute('class');
  }
  let modal = document.querySelector('div#emailsub-modal');
  removeDOMElement(modal);
  let noscroll = document.querySelector('body.modal-open');
  if (noscroll)
    noscroll.classList.remove('modal-open');
}

else if (matchDomain('theathletic.com')) {
  if (!(window.location.search.match(/(\?|&)amp/) && !document.querySelector('head > link[rel="amphtml"]'))) {
    function theathletic_func(node) {
      removeDOMElement(node);
      let overlays = 'div[id*="overlay"], div:empty:not([data-rjs])';
      hideDOMStyle(overlays);
      let body = document.querySelector('body');
      if (body) {
        body.style.overflow = 'visible';
        body.style.position = 'relative';
        window.scrollTo(0, 1000);
      }
    }
    waitDOMElement('div[id^="slideup-"]', 'DIV', theathletic_func);
  } else {
    amp_unhide_subscr_section();
    amp_unhide_access_hide('', '*="NOT granted"');
  }
  let apron = document.querySelector('div#free-apron-cta, div.slideup-free-apron-container');
  removeDOMElement(apron);
}

else if (matchDomain('theatlantic.com')) {
  setCookie('articleViews', '', 'theatlantic.com', '/', 0);
  let lazy_images = document.querySelectorAll('img[class*="Image_lazy__"]');
  for (let elem of lazy_images)
    removeClassesByPrefix(elem, 'Image_lazy__');
  let videos = document.querySelectorAll('iframe[data-src]:not([src])');
  for (let video of videos)
    video.src = video.getAttribute('data-src');
  let banners = 'aside#paywall, div[class^="LostInventoryMessage_"]';
  hideDOMStyle(banners);
}

else if (matchDomain('thebulletin.org')) {
  getJsonUrl('div.article--cropped', '', 'div#body-copy', {art_append: true});
}

else if (matchDomain('thedailybeast.com')) {
  let paywall = document.querySelector('div.Body__paywall-container');
  if (paywall) {
    removeDOMElement(paywall);
    let json_script = document.querySelector('script[displayName="initialState"]');
    if (json_script) {
      let json_str = json_script.text.substring(json_script.textContent.indexOf('{'));
      try {
        let json = JSON.parse(json_str);
        if (json.body) {
          let pars = json.body.sections;
          let cards = json.body.cards;
          if (pars) {
            let mobile_doc = document.querySelector('div.Mobiledoc');
            if (mobile_doc) {
              let mobile_doc_text = mobile_doc.innerText.replace(/(\r|\n)/g, '');
              for (let elem of pars) {
                let par_elem = '';
                if (elem[0] === 1) {
                  if (elem[1] === 'p') {
                    let par = '';
                    for (let part of elem[2])
                      par += part[3];
                    if (par && !mobile_doc_text.includes(par)) {
                      par_elem = document.createElement('p');
                      par_elem.innerText = par;
                    }
                  }
                } else if (elem[0] === 10) {
                  if (cards && cards[elem[1]]) {
                    let card = cards[elem[1]];
                    if (card[0] === 'pt-image') {
                      par_elem = document.createElement('p');
                      let par_fig = document.createElement('figure');
                      let par_img = document.createElement('img');
                      par_img.src = card[1].url;
                      par_fig.appendChild(par_img);
                      par_elem.appendChild(par_fig);
                      let par_cap = document.createElement('figcaption');
                      par_cap.innerText = card[1].title + ' ' + card[1].credit;
                      par_elem.appendChild(par_cap);
                    } else if (card[0] === 'pt-fancy-links-card') {
                      par_elem = document.createElement('p');
                      let par_link = document.createElement('a');
                      par_link.href = card[1].links;
                      par_link.innerText = card[1].linksData[0].long_headline;
                      par_elem.appendChild(par_link);
                    }
                  }
                }
                if (par_elem)
                  mobile_doc.appendChild(par_elem);
              }
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  let ads = 'aside.AdSlot, div.FooterAd';
  hideDOMStyle(ads);
}

else if (matchDomain('thediplomat.com')) {
  if (matchDomain('magazine.thediplomat.com')) {
    let preview = document.querySelector('article.dpl-preview');
    if (preview)
      preview.classList.remove('dpl-preview');
  }
}

else if (matchDomain('theglobeandmail.com')) {
  let lazy_images = document.querySelectorAll('img[src^="data:image/"][data-src]');
  for (let elem of lazy_images)
    elem.src = elem.getAttribute('data-src');
  let ads = 'div.c-ad, div[class^="BaseAd__"]';
  hideDOMStyle(ads);
}

else if (matchDomain(['thehindu.com', 'thehindubusinessline.com'])) {
  if (!window.location.pathname.endsWith('/amp/')) {
    let counter = '#test';
    let ads = 'div.article-ad, div.dfp-ad, div#paywallbox, div[id^="piano-art-"]';
    hideDOMStyle(counter + ', ' + ads);
  } else {
    let ads = 'amp-ad, amp-embed, [class^="height"], [class^="advt"], [id^="piano"]';
    hideDOMStyle(ads);
  }
  function hindu_main() {
    if (window) {
      window.Adblock = false;
      window.isNonSubcribed = false;
    }
  }
  insert_script(hindu_main);
}

else if (matchDomain(['thejuggernaut.com', 'jgnt.co'])) {
  let paywall = pageContains('div.font-mono', /(Read this article and many more by subscribing today|Join today to read the full story)/);
  if (paywall.length) {
    removeDOMElement(paywall[0].parentNode);
    let json_script = document.querySelector('script#__NEXT_DATA__');
    if (json_script) {
      try {
        let json = JSON.parse(json_script.text);
        if (json && json.props.pageProps.post) {
          let url_next = json.query.slug;
          if (url_next && !window.location.pathname.includes(url_next))
            refreshCurrentTab();
          let pars = json.props.pageProps.post.fields.textEssay.fields.body.content;
          window.setTimeout(function () {
          let article = document.querySelector('div[class*="opacity-"]');
          if (article) {
            article.innerHTML = '';
            article.removeAttribute('class');
            let fade = document.querySelectorAll('div.bg-gradient-to-b');
            for (let elem of fade)
              elem.removeAttribute('class');
            let modal = document.querySelector('div#headlessui-portal-root');
            removeDOMElement(modal);
            let par_first = true;
            function attach_text(sub_item, elem) {
              if (sub_item.value) {
                let sub_elem = document.createElement('span');
                sub_elem.innerText = sub_item.value;
                if (sub_item.marks && sub_item.marks.length) {
                  let style = '';
                  for (let mark of sub_item.marks) {
                    if (mark.type === 'bold')
                      style += 'font-weight: bold;';
                    else if (mark.type === 'italic')
                      style += 'font-style: italic;';
                    else if (mark.type === 'underline')
                      style += 'text-decoration: underline;';
                  }
                  sub_elem.style = style;
                }
                elem.appendChild(sub_elem);
              }
            }
            function attach_hyperlink(sub_item, elem) {
              if (sub_item.content && sub_item.content[0] && sub_item.content[0].value && sub_item.data && sub_item.data.uri) {
                let sub_elem = document.createElement('a');
                sub_elem.href = sub_item.data.uri;
                sub_elem.innerText = sub_item.content[0].value;
                if (!matchUrlDomain(['thejuggernaut.com', 'jgnt.co'], sub_item.data.uri))
                  sub_elem.target = '_blank';
                sub_elem.style = 'text-decoration: underline;';
                elem.appendChild(sub_elem);
              }
            }
            function attach_paragraph(par, elem) {
              if (par.content && par.content.length) {
                let span_elem = document.createElement('span');
                for (let item of par.content) {
                  if (item.nodeType === 'text') {
                    attach_text(item, span_elem);
                  } else if (item.nodeType === 'hyperlink') {
                    attach_hyperlink(item, span_elem);
                  } else
                    console.log(item);
                }
                elem.appendChild(span_elem);
              }
            }
            for (let par of pars) {
              let elem = document.createElement('p');
              if (par.nodeType.match(/^(paragraph|heading-\d)$/)) {
                attach_paragraph(par, elem);
              } else if (['blockquote'].includes(par.nodeType)) {
                if (par.content && par.content.length) {
                  for (let item of par.content) {
                    if (item.nodeType === 'paragraph') {
                      elem.style = 'margin: 0px 20px; font-style: italic;';
                      attach_paragraph(item, elem);
                    } else
                      console.log(item);
                  }
                }
              } else if (par.nodeType === 'hr') {
                elem.appendChild(document.createElement('hr'));
              } else if (par.nodeType === 'embedded-asset-block') {
                if (!par_first) {
                  if (par.data && par.data.target && par.data.target.fields) {
                    if (par.data.target.fields.file && par.data.target.fields.file.url) {
                      let figure = document.createElement('figure');
                      let img = document.createElement('img');
                      img.src = par.data.target.fields.file.url;
                      figure.appendChild(img);
                      if (par.data.target.fields.description) {
                        let caption = document.createElement('figcaption');
                        caption.innerText = par.data.target.fields.description;
                        figure.appendChild(caption);
                      }
                      elem.appendChild(figure);
                    }
                  }
                } else
                  par_first = false;
              } else if (par.nodeType === 'unordered-list') {
                if (par.content && par.content.length) {
                  let ul = document.createElement('ul');
                  for (let item of par.content) {
                    if (item.nodeType === 'list-item') {
                      if (item.content) {
                        for (let sub_item_par of item.content) {
                          if (sub_item_par.nodeType === 'paragraph') {
                            let li = document.createElement('li');
                            attach_paragraph(sub_item_par, li);
                            ul.appendChild(li);
                          }
                        }
                      }
                    } else
                      console.log(item);
                  }
                  elem.appendChild(ul);
                }
              } else {
                console.log(par);
              }
              if (elem.hasChildNodes()) {
                article.appendChild(document.createElement('br'));
                article.appendChild(elem);
              }
            }
          }
          }, 1000);
        } else
          refreshCurrentTab();
      } catch (err) {
        console.log(err);
      }
    }
  }
}

else if (matchDomain('thelampmagazine.com')) {
  let paywall = document.querySelector('div.paywall-gradient');
  if (paywall) {
    paywall.removeAttribute('class');
    let banner = document.querySelector('section.p-8');
    removeDOMElement(banner);
  }
  let login = document.querySelectorAll('a.js-login-modal-trigger');
  for (let elem of login) {
    elem.removeAttribute('class');
    let url_search = '/search?q=' + elem.innerText.replace(/\s/g, '+');
    elem.href = url_search;
    elem.onclick = x => window.location.href = url_search;
  }
}

else if (matchDomain('thenewatlantis.com')) {
  let article_gated = document.querySelector('.article-gated');
  if (article_gated)
    article_gated.classList.remove('article-gated');
}

else if (matchDomain('thenewsminute.com')) {
  let paywall = document.querySelector('div#paywall-banner');
  if (paywall) {
    removeDOMElement(paywall);
    let fade = document.querySelector('div[class^="paywall-story-styles-"]');
    if (fade)
      fade.removeAttribute('class');
    let json_script = getArticleJsonScript();
    if (json_script) {
      let json = JSON.parse(json_script.text);
      if (json) {
        let json_text = breakText(parseHtmlEntities(json.articleBody.replace(/\.\./g, '.\r\n\r\n')));
        let article = document.querySelector('div.arr--story-page-card-wrapper');
        if (json_text && article) {
          article.innerHTML = '';
          let article_new = document.createElement('p');
          article_new.innerText = json_text;
          article.appendChild(article_new);
        }
      }
    }
  }
}

else if (matchDomain('thepointmag.com')) {
  setCookie('monthly_history', '', 'thepointmag.com', '/', 0);
  let overlay = document.querySelectorAll('div.overlay, div#tpopup-');
  removeDOMElement(...overlay);
}

else if (matchDomain('thequint.com')) {
  let lock = document.querySelector('div > img[alt^="lock"]');
  if (lock) {
    lock.removeAttribute('alt');
    window.setTimeout(function () {
      let paywall = document.querySelector('div#paywall-widget');
      if (paywall) {
        removeDOMElement(paywall);
        let article = document.querySelector('div.story-element');
        if (article) {
          let article_new = getArticleQuintype();
          if (article_new && article.parentNode)
            article.parentNode.replaceChild(article_new, article);
        }
      }
      let body_hidden = document.querySelector('div#story-body-wrapper');
      if (body_hidden) {
        body_hidden.removeAttribute('class');
        body_hidden.removeAttribute('style');
      }
    }, 4000);
    function thequint_unhide(node) {
      node.removeAttribute('style');
    }
    waitDOMAttribute('div#story-body-wrapper', 'DIV', 'style', thequint_unhide, true);
  }
}

else if (matchDomain('theverge.com')) {
  let paywall = document.querySelector('div.bg-paywall-fade');
  if (paywall) {
    removeDOMElement(paywall);
    let json_script = document.querySelector('script#__NEXT_DATA__');
    if (json_script) {
      try {
        let json = JSON.parse(json_script.text);
        let article = document.querySelector('div.duet--article--article-body-component-container');
        if (json && article) {
          let json_pars = json.props.pageProps.hydration.responses[0].data.entryRevision.body.components;
          article.innerHTML = '';
          let parser = new DOMParser();
          for (let par of json_pars) {
            let elem = document.createElement('p');
            elem.style = 'margin: 20px 0px;';
            let type = par.__typename;
            if (['EntryBodyParagraph', 'EntryBodyHeading'].includes(type)) {
              if (par.contents && par.contents.html) {
                if (type === 'EntryBodyHeading')
                  elem.style = 'font-weight: bold;';
                let doc = parser.parseFromString('<div>' + par.contents.html + '</div>', 'text/html');
                elem.appendChild(doc.querySelector('div'));
              }
            } else if (type === 'EntryBodyHorizontalRule') {
              elem.appendChild(document.createElement('hr'));
            } else if (type === 'EntryBodyImage') {
              if (par.image && par.image.url) {
                let figure = document.createElement('figure');
                if (par.image.asset && par.image.asset.title)
                  figure.appendChild(document.createTextNode(par.image.asset.title));
                let img = document.createElement('img');
                img.src = par.image.url;
                figure.appendChild(img);
                if (par.image.caption && par.image.caption.html) {
                  let caption = document.createElement('figcaption');
                  caption.innerText = par.image.caption.html;
                  if (par.image.credit && par.image.credit.html)
                    caption.innerText += ' - ' + par.image.credit.html;
                  figure.appendChild(caption);
                }
                elem.appendChild(figure);
              }
            } else if (type === 'EntryBodyPullquote') {
              if (par.quote && par.quote.html) {
                let doc = parser.parseFromString('<div>' + par.quote.html + '</div>', 'text/html');
                elem.appendChild(doc.querySelector('div'));
              }
            } else if (type === 'EntryBodyBlockquote') {
              if (par.paragraphs) {
                for (let quote_par of par.paragraphs) {
                  if (quote_par.contents && quote_par.contents.html) {
                    let doc = parser.parseFromString('<div>' + quote_par.contents.html + '</div>', 'text/html');
                    elem.appendChild(doc.querySelector('div'));
                  }
                }
              }
            } else if (type === 'EntryBodyList') {
              if (par.items) {
                let ul = document.createElement('ul');
                for (let item of par.items) {
                  if (item.line && item.line.html) {
                    let li = document.createElement('li');
                    let doc = parser.parseFromString('<div>' + item.line.html + '</div>', 'text/html');
                    li.appendChild(doc.querySelector('div'));
                    ul.appendChild(li);
                  }
                }
                elem.appendChild(ul);
              }
            } else
              console.log(par);
            if (elem.hasChildNodes())
              article.appendChild(elem);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

else if (matchDomain('theweek.com')) {
  let paywall = document.querySelector('div.kiosq-main-layer');
  removeDOMElement(paywall);
  let locker = document.querySelector('div.paywall-locker');
  if (locker)
    locker.classList.remove('paywall-locker');
}

else if (matchDomain('thewrap.com')) {
  setCookie('blaize_session', '', 'thewrap.com', '/', 0);
  getJsonUrl('div#zephr-payment-form-root', '', 'div.entry-content', {art_append: true});
  let fade = document.querySelector('div.content-area div[style*="background-image: linear-gradient"]');
  removeDOMElement(fade);
}

else if (matchDomain('timeshighereducation.com')) {
  let paywall_cta = document.querySelector('div.paywall-cta');
  if (paywall_cta) {
    paywall_cta.removeAttribute('style');
    let hidden_divs = document.querySelectorAll('div[style="display: none;"]');
    for (let hidden_div of hidden_divs)
      hidden_div.removeAttribute('style');
    let paywall_fade = document.querySelector('div.paywall-fade');
    if (paywall_fade)
      paywall_fade.classList.remove('paywall-fade');
  }
  let hidden_images = document.querySelectorAll('img.b-lazy[src^="data:image/"][data-src]');
  for (let hidden_image of hidden_images) {
    hidden_image.setAttribute('src', hidden_image.getAttribute('data-src'));
    hidden_image.classList.remove('b-lazy');
    hidden_image.parentElement.classList.remove('media--loading');
  }
  let ads = 'div[id^="div-gpt-in-article-ad-"], div[class^="the-dfp__in-article-ATD"]';
  hideDOMStyle(ads);
}

else if (matchDomain(timesofindia_domains)) {
  if (matchDomain('epaper.indiatimes.com')) {
    let blocker = document.querySelector('div.epaperBlockerWrap');
    removeDOMElement(blocker);
    if (window.location.pathname.startsWith('/english-news-paper-today-toi-print-edition/')) {
      let paywall = document.querySelector('section#blocker');
      if (paywall) {
        let fq = document.querySelector('section#fq');
        removeDOMElement(paywall, fq);
        let json_script = getArticleJsonScript();
        if (json_script) {
          let json = JSON.parse(json_script.text);
          if (json) {
            let json_text = json.articleBody;
            let content = document.querySelector('section[type="synopsis"]');
            if (json_text && content) {
              let article_new = document.createElement('p');
              article_new.innerText = breakText(json_text);
              content.innerHTML = '';
              let sheet = document.createElement('style');
              sheet.innerText = '[type="synopsis"]::after {background: none !important;}';
              document.head.appendChild(sheet);
              content.appendChild(article_new);
            }
          }
        }
      }
    }
  } else {
    let url = window.location.href;
    let region_block = document.querySelector('div.plan-popup.active');
    if (region_block) {
      removeDOMElement(region_block);
      let overflow = document.querySelector('html[style]');
      if (overflow)
        overflow.removeAttribute('style');
    }
    if (!window.location.pathname.includes('/amp_')) {
      let paywall = document.querySelector('div[id^="story-blocker"]');
      if (paywall) {
        removeDOMElement(paywall);
        let json_script = getArticleJsonScript();
        if (json_script) {
          try {
            let json = JSON.parse(json_script.text);
            if (json) {
              let json_text = json.articleBody;
              let article = document.querySelector('div.paywall');
              if (json_text && article) {
                article.innerText = breakText(json_text);
                let sheet = document.createElement('style');
                sheet.innerText = 'div.paywall::after {background-image: none !important;}';
                document.head.appendChild(sheet);
              }
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    } else {
      ampToHtml();
    }
  }
}

else if (matchDomain(no_nhst_media_domains)) {
  let url = window.location.href;
  if (url.includes('.tradewindsnews.com/markets/')) {
    let paywall = document.querySelector('iframe[src]');
    removeDOMElement(paywall);
    let overflow = document.querySelector('body[style]');
    if (overflow)
      overflow.removeAttribute('style');
    let blurred = document.querySelector('body > div[style]');
    if (blurred)
      blurred.removeAttribute('style');
  } else if (matchDomain('upstreamonline.com')) {
    window.setTimeout(function () {
      let paywall = document.querySelector('div.dn-paywall > div#sub-paywall-container');
      if (paywall) {
        removeDOMElement(paywall.parentNode);
        let article = document.querySelector('div#dn-content');
        let json_script = document.querySelector('script#__NUXT_DATA__');
        if (json_script) {
          try {
            let pars = JSON.parse(json_script.text);
            let article_id_index = pars.indexOf('global-article') + 1;
            if (article_id_index) {
              let article_id = pars[article_id_index];
              if (article_id && !window.location.pathname.endsWith(article_id)) {
                refreshCurrentTab();
                return;
              }
            }
            article.innerHTML = '';
            article.classList.remove('shadow');
            let img_first = true;
            let parser = new DOMParser();
            for (let par of pars) {
              let elem;
              if (par.type) {
                let type = pars[par.type];
                if (['text', 'subhead'].includes(type)) {
                  if (par.html || par.value) {
                    let index = par.html || par.value;
                    let json_text = pars[index];
                    let content_new = parser.parseFromString('<p class="dn-text">' + json_text + '</p>', 'text/html');
                    elem = content_new.querySelector('p');
                    if (par.value)
                      elem.style = 'font-weight: bold;';
                  }
                } else if (type === 'picture') {
                  if (img_first)
                    img_first = false;
                  else {
                    elem = document.createElement('figure');
                    elem.className = 'dn-image';
                    let img = document.createElement('img');
                    img.src = pars[par.src];
                    elem.appendChild(img);
                    if (par.caption) {
                      let caption = document.createElement('p');
                      caption.innerText = pars[par.caption];
                      if (par.credit)
                        caption.innerText += ' (' + pars[par.credit] + ')';
                      elem.appendChild(caption);
                    }
                  }
                } else if (type === 'news' && par.title && par.url) {
                  elem = document.createElement('a');
                  elem.href = pars[par.url];
                  elem.innerText = 'Related: ' + pars[par.title];
                  elem.style = 'font-weight: bold;';
                } else if (!['ad', 'author', 'break', 'Location', 'news', 'Organisation', 'promobox', 'Person', 'Region', 'Regions', 'related', 'Sectors'].includes(type)) {
                  for (let item in par) {
                    console.log(item);
                    console.log(pars[par[item]]);
                  }
                }
                if (elem)
                  article.appendChild(elem);
              }
            }
          } catch (err) {
            console.log(err);
          }
        }
      }
    }, 1000);
  } else {
    let fade = document.querySelector('div[style*="background-image: linear-gradient"]');
    if (fade) {
      removeDOMElement(fade);
      let header = document.querySelector('div.article-body > div');
      header_nofix(header);
    }
  }
}

else if (matchDomain(uk_incisive_media_domains)) {
  let url = window.location.href;
  let paywall_sel = 'div#d-wrapper';
  let paywall = document.querySelector(paywall_sel);
  if (paywall) {
    let live_blog = document.querySelector('head > meta[name="description"][content^="In this live blog"]');
    let article_sel = 'div.article-content';
    let article = document.querySelector(article_sel);
    if (article) {
      if (live_blog) {
        removeDOMElement(paywall);
        article.firstChild.before(googleWebcacheLink(url));
      } else {
        getGoogleWebcache(url, 'div#d-wrapper', '', article_sel);
      }
    }
  }
}

else if (matchDomain(usa_conde_nast_domains)) {
  let banners = document.querySelectorAll('aside.paywall-bar, div[class^="MessageBannerWrapper-"], div.ad-stickyhero');
  removeDOMElement(...banners);
}

else if (matchDomain(usa_craincomm_domains)) {
  if (matchDomain('european-rubber-journal.com')) {
    let paywall = document.querySelector('div.article-overlay');
    if (paywall) {
      let fade = document.querySelector('div.gradient');
      removeDOMElement(paywall, fade);
      let truncated = document.querySelector('div.truncated');
      if (truncated)
        truncated.classList.remove('truncated');
    }
  } else {
    let body_hidden = document.querySelector('body[class]');
    if (body_hidden)
      body_hidden.removeAttribute('class');
    let lazy_images = document.querySelectorAll('img.lazy[data-src]');
    for (let lazy_image of lazy_images) {
      lazy_image.src = lazy_image.getAttribute('data-src');
      lazy_image.removeAttribute('class');
    }
    let lazy_sources = document.querySelectorAll('source[srcset^="data:image"]');
    removeDOMElement(...lazy_sources);
    let sponsored_article = document.querySelector('div.sponsored-article');
    if (sponsored_article)
      sponsored_article.classList.remove('sponsored-article');
  }
  let ads = 'div.footer__ads-footer';
  hideDOMStyle(ads);
}

else if (matchDomain(usa_nymag_domains)) {
  let ads = 'div.m-ad';
  hideDOMStyle(ads);
}

else if (matchDomain(usa_outside_mag_domains)) {
  let ads = 'div.js-ad';
  hideDOMStyle(ads);
}

else if (matchDomain(usa_tribune_domains)) {
  let overlay = document.querySelector('div#zephr-overlay');
  removeDOMElement(overlay);
}

else if (matchDomain('usatoday.com')) {
  if (window.location.hostname.startsWith('amp.')) {
    amp_unhide_access_hide('="gup.hasAssetAccess"', '', 'div[class*="ad-"]');
  } else {
    amp_redirect('div.gnt_rb');
    let roadblock = document.querySelector('.roadblock-container');
    if (roadblock) {
      removeDOMElement(roadblock);
      article_next = document.querySelector('article.next-in-depth-story > div.article-inner');
      if (article_next) {
        let url = article_next.getAttribute('data-url');
        let weblink = document.createElement('a');
        weblink.href = url;
        weblink.innerText = 'open next in-depth story';
        article_next.appendChild(weblink);
      }
    }
  }
}

else if (matchDomain('vikatan.com')) {
  window.setTimeout(function () {
    let paywall = document.querySelector('div#paywallDisplay');
    if (paywall) {
      removeDOMElement(paywall);
      let json_script = getArticleJsonScript();
      if (json_script) {
        let json = JSON.parse(json_script.text);
        if (json) {
          let json_text = parseHtmlEntities(json.articleBody);
          let content = document.querySelector('div.story-element > div');
          if (json_text && content) {
            let parser = new DOMParser();
            let doc = parser.parseFromString('<div>' + json_text + '</div>', 'text/html');
            let content_new = doc.querySelector('div');
            content.parentNode.replaceChild(content_new, content);
          }
        }
      }
    }
    let story_hidden = document.querySelector('div[class^="styles-m__story-card-wrapper_"]');
    if (story_hidden)
      story_hidden.removeAttribute('class');
  }, 500);
}

else if (domain = matchDomain('voguebusiness.com')) {
  setCookie('userId', '', domain, '/', 0);
  let article_sel = 'div[data-testid="ArticlePageChunks"]';
  let article = document.querySelector(article_sel);
  if (article) {
    let pars = article.querySelectorAll('p');
    if (pars.length < 5) {
      let url = window.location.href;
      let url_archive = 'https://' + archiveRandomDomain() + '/' + url.split(/[#\?]/)[0];
      replaceDomElementExt(url_archive, true, false, article_sel);
    }
  }
}

else if (matchDomain('washingtonpost.com')) {
  let leaderboard = '#leaderboard-wrapper';
  let ads = 'div[data-qa$="-ad"]';
  hideDOMStyle(leaderboard + ', ' + ads);
}

else if (matchDomain('winnipegfreepress.com')) {
  let ads = '.billboard-ad-space, .article-ad, .fixed-sky';
  hideDOMStyle(ads);
}

else if (matchDomain('wsj.com')) {
  if (window.location.pathname.startsWith('/livecoverage/')) {
    window.setTimeout(function () {
      let paywall = document.querySelector('div#cx-lc-snippet');
      let amphtml = document.querySelector('head > link[rel="amphtml"]');
      if (paywall) {
        removeDOMElement(paywall);
        if (amphtml) {
          amp_redirect_not_loop(amphtml);
        } else {
          let fade = document.querySelectorAll('div[class*="-CardWrapper"]');
          for (let elem of fade)
            elem.removeAttribute('class');
        }
      }
    }, 1000);
  } else {
    let url_article = window.location.pathname.includes('/articles/');
    let path_article = window.location.pathname.match(/((\w)+(\-)+){3,}\w+/);
    if (url_article || path_article) {
      if (window.location.pathname.startsWith('/amp/')) {
        amp_unhide_subscr_section();
      } else {
        let paywall_sel = '.snippet-promotion, div[id^="cx-snippet-overlay"]';
        let paywall = document.querySelector(paywall_sel);
        if (paywall) {
          if (!matchDomain('www.wsj.com')) {
            removeDOMElement(paywall);
            if (url_article)
              window.location.href = window.location.href.replace('wsj.com', 'wsj.com/amp');
            else
              window.location.href = '/amp/articles/' + path_article[0];
          } else if (true) {
            let url = window.location.href;
            let article_sel = 'article section';
            let wsj_pro = paywall.querySelector('a[href^="https://wsjpro.com/"]');
            if (wsj_pro)
              article_sel = 'article';
            let video_sel = 'div[data-type="video"]';
            let video = document.querySelector(video_sel);
            let schema_script = document.querySelector('script#articleschema');
            func_post = function () {
              if (video) {
                let video_new = document.querySelector(video_sel);
                if (video_new && video_new.parentNode)
                  video_new.parentNode.replaceChild(video, video_new);
              }
              let inline_videos = document.querySelectorAll('div[id^="video"]');
              for (let inline_video of inline_videos) {
                let video_id = inline_video.id.replace('video', '');
                if (video_id && schema_script) {
                  try {
                    let video_data = JSON.parse(schema_script.text).find(x => x['@type'] === 'VideoObject' && x.embedUrl.includes(video_id));
                    if (video_data && inline_video.parentNode) {
                      let elem = document.createElement('iframe');
                      elem.src = video_data.embedUrl;
                      elem.style = 'width: ' + inline_video.offsetWidth + 'px; height: ' + inline_video.offsetWidth * 3 / 4 + 'px;';
                      inline_video.parentNode.replaceChild(elem, inline_video);
                    }
                  } catch (err) {
                    console.log(err);
                  }
                }
              }
              if (mobile) {
                let inline_images = document.querySelectorAll('div[style] > figure > picture > img');
                for (let elem of inline_images) {
                  elem.style = 'width: 100%;';
                  elem.removeAttribute('height');
                  elem.removeAttribute('width');
                  elem.parentNode.removeAttribute('style');
                  elem.parentNode.parentNode.parentNode.removeAttribute('style');
                }
                let inline_data = document.querySelectorAll('div[data-layout="inline"][style]');
                for (let elem of inline_data)
                  elem.removeAttribute('style');
              }
              let read_next = document.querySelector('div#cx-what-to-read-next');
              removeDOMElement(read_next);
              let inline_wrappers = document.querySelectorAll('div[style*="background-position"] > div[id^="wrapper-INLINEIMM_"]');
              for (let elem of inline_wrappers)
                removeDOMElement(elem.parentNode);
            }
            getArchive(url, paywall_sel, '', article_sel);
          }
        }
      }
    }
  }
  let ads = 'div.wsj-ad, div.adWrapper, div.css-xgokil-Box';
  hideDOMStyle(ads);
}

else if (matchDomain('zerohedge.com')) {
  let paywall = document.querySelector('div[class^="PremiumOverlay_container__"]');
  if (paywall) {
    removeDOMElement(paywall);
    let json_script = document.querySelector('script#__NEXT_DATA__');
    if (json_script) {
      try {
        let json = JSON.parse(json_script.innerText);
        if (json && json.props.pageProps.node.body) {
          let article_new = parseHtmlEntities(decode_utf8(atob(json.props.pageProps.node.body.substring(21))));
          let article = document.querySelector('div[class^="NodeContent_mainContent__"');
          if (article) {
            article.innerHTML = '';
            let parser = new DOMParser();
            let doc = parser.parseFromString('<div>' + article_new + '</div>', 'text/html');
            let content_new = doc.querySelector('div');
            article.appendChild(content_new);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}

else if ((domain = matchDomain(usa_gannett_domains)) || document.querySelector('head > link[href*=".gannettdigital.com/"], head > link[href*=".gannett-cdn.com/"]')) {
  if (!domain)
    domain = window.location.hostname.replace(/^(www|amp|eu)\./, '');
  setCookie('firefly_akamai_meter', '', domain, '/', 0);
  if (window.location.pathname.endsWith('/restricted/') && window.location.search.startsWith('?return=')) {
    let url = decodeURIComponent(window.location.href.split('?return=')[1]);
    let paywall = pageContains('div.message', 'This content is only available to subscribers.');
    if (paywall.length) {
      removeDOMElement(...paywall);
      let article = document.querySelector('article');
      if (article)
        article.firstChild.before(archiveLink(url));
    }
  }
}

else if (matchDomain(usa_hearst_comm_domains) || document.querySelector('head > script[src*="/treg.hearstnp.com/"]')) {
  let overlay = document.querySelector('div > div#modalOuter');
  if (overlay) {
    hideDOMElement(overlay.parentNode);
    let noscroll = document.querySelector('body[style]');
    if (noscroll)
      noscroll.removeAttribute('style');
  }
  let ads = pageContains('div > div > p', 'Article continues below this ad');
  for (let elem of ads)
    hideDOMElement(elem.parentNode.parentNode);
}

else if ((domain = matchDomain(usa_lee_ent_domains)) || matchDomain(ca_torstar_domains.concat(['abqjournal.com'])) || document.querySelector('head > meta[name="tncms-access-version"]')) {
  if (window.location.pathname.endsWith('.amp.html')) {
    amp_unhide_access_hide('="hasAccess"', '="NOT hasAccess"', 'amp-ad, amp-embed, .amp-ads-container');
    let elem_hidden = document.querySelectorAll('html[class], body[class]');
    for (let elem of elem_hidden)
      elem.removeAttribute('class');
    let amp_images = document.querySelectorAll('div.main-content amp-img[src^="https://"]');
    for (let amp_image of amp_images) {
      let elem = document.createElement('img');
      Object.assign(elem, {
        src: amp_image.getAttribute('src'),
        alt: amp_image.getAttribute('alt'),
        height: '400'
      });
      amp_image.parentNode.replaceChild(elem, amp_image);
    }
  } else {
    if (!domain) {
      function unscramble(t) {
        for (var n = "", i = 0, r = t.length; i < r; i++) {
          var s = t.charCodeAt(i);
          if (s >= 33 && s <= 126) {
            var sTmp = String.fromCharCode(33 + (s - 33 + 47) % 94);
            n += sTmp;
          } else
            n += t.charAt(i);
        }
        return n;
      }
      let paywall = document.querySelector('div.subscriber-offers');
      removeDOMElement(paywall);
      let subscriber_only = document.querySelectorAll('div.subscriber-only');
      for (let elem of subscriber_only) {
        if (elem.classList.contains('encrypted-content')) {
          elem.innerHTML = unscramble(elem.textContent);
        }
        elem.removeAttribute('style');
        elem.removeAttribute('class');
      }
      let banners = document.querySelectorAll('div.subscription-required, div.redacted-overlay');
      removeDOMElement(...banners);
    }
    let ads = 'div.tnt-ads-container, div[class*="adLabelWrapper"]';
    hideDOMStyle(ads);
  }
}

else if ((domain = matchDomain(usa_mcc_domains)) ||
  (window.location.hostname.startsWith('account.') && document.querySelector('script[src*=".mcclatchyinteractive.com/"]')) ||
  (window.location.href.match(/\/\/amp\..+\.com\/(.+\/)?article(\d){8,}\.html/) && document.querySelector('a[href^="https://classifieds.mcclatchy.com/"]'))) {
  let url = window.location.href;
  let hostname = window.location.hostname;
  if (!domain)
    domain = hostname.replace(/^(www|account|amp)\./, '');
  setCookie('sessionz', '', domain, '/', 0);
  if (hostname.startsWith('account.') && window.location.search.startsWith('?resume=')) {
    window.setTimeout(function () {
      window.location.href = 'https://amp.' + domain + '/article' + url.split('resume=')[1].split(/[#&]/)[0] + '.html';
    }, 500);
  } else if (hostname.startsWith('amp.')) {
    amp_unhide_subscr_section('amp-ad, amp-embed');
    let subscriptions_action = document.querySelector('div[subscriptions-action][subscriptions-display="NOT data.hasError"]');
    if (subscriptions_action)
      subscriptions_action.removeAttribute('subscriptions-action');
    let subscr_tag = document.querySelector('div#subscriber-exclusive-tag');
    let amp_players = document.querySelectorAll('amp-connatix-player, amp-iframe.trinity-player');
    removeDOMElement(subscr_tag, ...amp_players);
    let amp_images = document.querySelectorAll('amp-img[srcset]:not([src])');
    for (let elem of amp_images) {
      let img = document.createElement('img');
      img.src = elem.getAttribute('srcset').split(' ')[0],
      img.alt = elem.getAttribute('alt'),
      img.style = 'width: 100%;';
      elem.parentNode.replaceChild(img, elem);
    }
  }
  let premium_svgs = document.querySelectorAll('h3 > a > svg');
  let premium_link;
  for (let premium_svg of premium_svgs) {
    premium_link = premium_svg.parentElement;
    if (premium_link.href.includes('www.'))
      premium_link.href = premium_link.href.replace('www.', 'amp.');
  }
  let ads = 'div[id^="zone-el-"]';
  hideDOMStyle(ads);
}

else if (matchDomain(usa_mng_domains) || document.querySelector('head > link[rel="stylesheet"][id^="dfm-accuweather-"], footer li > a[href^="https://www.medianewsgroup.com"]')) {
  if (window.location.pathname.endsWith('/amp/'))
    amp_unhide_subscr_section('amp-ad, amp-embed, div.ampWrapperInside, div#paywall');
  else if (true) {
    getJsonUrl('#server-paywall', '', 'div.body-copy', {art_append: 1});
    let ads = 'div.dfp-ad';
    hideDOMStyle(ads);
  }
}

else if (document.querySelector('script[src*=".axate.io/"]')) {
  let premium = document.querySelector('.premium, div[class*="-premium"]');
  if (premium)
    premium.removeAttribute('class');
}

else if (document.querySelector('head > meta[property][content^="https://cdn.forumcomm.com/"]')) {
  let ads = 'div.GoogleDfpAd-Content';
  hideDOMStyle(ads);
}

else if (document.querySelector('head > link[href*="/leaky-paywall"], script[src*="/leaky-paywall"], div[id^="issuem-leaky-paywall-"]')) {
  let js_cookie = document.querySelector('script#leaky_paywall_cookie_js-js-extra');
  if (js_cookie && js_cookie.text.includes('"post_container":"')) {
    let post_sel = js_cookie.text.split('"post_container":"')[1].split('"')[0];
    if (post_sel) {
      let post = document.querySelector(post_sel);
      if (post)
        post.removeAttribute('class');
    }
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

function urlHost(url) {
  if (/^http/.test(url)) {
    try {
      return new URL(url).hostname;
    } catch (e) {
      console.log(`url not valid: ${url} error: ${e}`);
    }
  }
  return url;
}

function matchUrlDomain(domains, url) {
  return matchDomain(domains, urlHost(url));
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

function waitDOMElement(selector, tagName = '', callback, multiple = false) {
  new window.MutationObserver(function (mutations) {
    for (let mutation of mutations) {
      for (let node of mutation.addedNodes) {
        if (!tagName || (node.tagName === tagName)) {
          if (node.matches(selector)) {
            callback(node);
            if (!multiple)
              this.disconnect();
          }
        }
      }
    }
  }).observe(document, {
    subtree: true,
    childList: true
  });
}

function waitDOMAttribute(selector, tagName = '', attributeName = '', callback, multiple = false) {
  let targetNode = document.querySelector(selector);
  if (!targetNode)
    return;
  new window.MutationObserver(function (mutations) {
    for (let mutation of mutations) {
      if (mutation.target.attributes[attributeName]) {
        callback(mutation.target);
        if (!multiple)
          this.disconnect();
      }
    }
  }).observe(targetNode, {
    attributes: true,
    attributeFilter: [attributeName]
  });
}

function getSelectorLevel(selector) {
  if (selector.replace(/,\s+/g, ',').match(/[>\s]+/))
    selector = selector.replace(/,\s+/g, ',').split(',').map(x => x.match(/[>\s]+/) ? x + ', ' + x.split(/[>\s]+/).pop() : x).join(', ');
  return selector;
}

function getArticleSrc(url, url_src, proxy, base64, selector, text_fail = '', selector_source = selector, selector_archive = selector) {
  let url_fetch = url_src || url;
  GM.xmlHttpRequest({
    method: "GET",
    url: url_fetch,
    onload: function (response) {
      let html = response.responseText;
      if (proxy && base64) {
        html = decode_utf8(atob(html));
        selector_source = 'body';
      }
      let recursive;
      if (url.startsWith('https://archive.')) {
        if (url_fetch.includes('/https')) {
          if (html.includes('<div class="TEXT-BLOCK"')) {
            url_src = html.split('<div class="TEXT-BLOCK"')[1].split('</div>')[0].split('href="')[1].split('"')[0];
            getArticleSrc(url, url_src, proxy, base64, selector, text_fail, selector_source, selector_archive);
            recursive = true;
          } else
            html = '';
        }
      }
      if (!recursive)
        replaceDomElementExtSrc(url, url_src, html, proxy, base64, selector, text_fail, selector_source, selector_archive);
    }
  });
}

function replaceDomElementExt(url, proxy, base64, selector, text_fail = '', selector_source = selector, selector_archive = selector) {
  let article = document.querySelector(selector);
  if (!article)
    return;
  if (proxy) {
    if (!text_fail) {
      if (url.startsWith('https://webcache.googleusercontent.com'))
        text_fail = 'BPC > failed to load from Google webcache:\r\n';
      else if (url.startsWith('https://archive.'))
        text_fail = 'BPC > Try for full article text (no need to report issue for external site):\r\n';
    }
    getArticleSrc(url, '', proxy, base64, selector, text_fail, selector_source, selector_archive);
  } else {
    let options = {};
    if (matchUrlDomain('espn.com', url))
      options.headers = {
        'X-Forwarded-For': randomIP(185, 185)
      };
    fetch(url, options)
    .then(response => {
      let article = document.querySelector(selector);
      if (response.ok) {
        response.text().then(html => {
          replaceDomElementExtSrc(url, '', html, false, base64, selector, text_fail, selector_source);
        });
      } else {
        replaceTextFail(url, article, proxy, text_fail);
      }
    }).catch(function (err) {
      false;
    });
  }
}

function replaceDomElementExtSrc(url, url_src, html, proxy, base64, selector, text_fail = '', selector_source = selector, selector_archive = selector) {
  let article = document.querySelector(selector);
  let no_content_msg = '&nbsp;| no article content found! | :';
  if (html) {
    if (!proxy && base64) {
      html = decode_utf8(atob(html));
      selector_source = 'body';
    }
    let parser = new DOMParser();
    window.setTimeout(function () {
      if (url.startsWith('https://archive.') && url_src) {
        let domain_archive = url.match(/^https:\/\/(archive\.\w{2})/)[1];
        let pathname = new URL(url_src).pathname;
        html = html.replace(new RegExp('https:\\/\\/' + domain_archive.replace('.', '\\.') + '\\/o\\/\\w+\\/', 'g'), '').replace(new RegExp("(src=\"|background-image:url\\(')" + pathname.replace('/', '\\/'), 'g'), "$1" + 'https://' + domain_archive + pathname);
      }
      let doc = parser.parseFromString(html, 'text/html');
      let article_new = doc.querySelector(getSelectorLevel(selector_source));
      if (article_new) {
        if (article && article.parentNode) {
          if (url.startsWith('https://archive.')) {
            let arch_dom = (selector_archive !== selector) ? (article_new.querySelector(selector_archive) || document.querySelector(selector_archive)) : article_new;
            if (arch_dom) {
              if (arch_dom.firstChild)
                arch_dom = arch_dom.firstChild;
              let arch_div = document.createElement('div');
              //arch_div.appendChild(archiveLink_renew(window.location.href));
              arch_div.appendChild(archiveLink(window.location.href, 'BPC > Full article text fetched from (no need to report issue for external site):\r\n'));
              arch_div.style = 'margin: 0px 0px 50px;';
              arch_dom.before(arch_div);
            }
            let targets = article_new.querySelectorAll('a[target="_blank"][href^="' + window.location.origin + '"]');
            for (let elem of targets)
              elem.removeAttribute('target');
            let invalid_links = article_new.querySelectorAll('link[rel="preload"]:not([href]');
            removeDOMElement(...invalid_links);
          }
          window.setTimeout(function () {
            if (article.parentNode) {
              article.parentNode.replaceChild(article_new, article);
              if (func_post)
                func_post();
            }
          }, 200);
        }
      } else
        replaceTextFail(url, article, proxy, text_fail.replace(':', no_content_msg));
    }, 200);
  } else {
    replaceTextFail(url, article, proxy, url_src ? text_fail.replace(':', no_content_msg) : text_fail);
  }
}

function replaceTextFail(url, article, proxy, text_fail) {
  if (text_fail && article) {
    let text_fail_div = document.createElement('div');
    text_fail_div.setAttribute('style', 'margin: 0px 50px; font-weight: bold; color: red;');
    text_fail_div.appendChild(document.createTextNode(text_fail));
    if (proxy) {
      if (url.startsWith('https://archive.')) {
        text_fail_div = archiveLink(url.replace(/^https:\/\/archive\.\w{2}\//, ''), text_fail);
      } else {
        let a_link = document.createElement('a');
        a_link.innerText = url;
        a_link.href = url;
        a_link.target = '_blank';
        text_fail_div.appendChild(a_link);
      }
    }
    if (article.firstChild)
      article.firstChild.before(text_fail_div);
    else
      article.appendChild(text_fail_div);
  }
}

function getGoogleWebcache(url, paywall_sel, paywall_action = '', selector, selector_source = selector) {
  let url_cache = 'https://webcache.googleusercontent.com/search?q=cache:' + url.split(/[#\?]/)[0];
  let paywall = document.querySelectorAll(paywall_sel);
  if (paywall.length) {
    clearPaywall(paywall, paywall_action);
    replaceDomElementExt(url_cache, true, false, selector, '', selector_source);
  }
}

function randomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomIP(range_low = 0, range_high = 223) {
  let rndmIP = [];
  for (let n = 0; n < 4; n++) {
    if (n === 0)
      rndmIP.push(range_low + randomInt(range_high - range_low + 1));
    else
      rndmIP.push(randomInt(255) + 1);
  }
  return rndmIP.join('.');
}

function archiveRandomDomain() {
  let tld_array = ['fo', 'is', 'li', 'md', 'ph', 'vn'];
  let tld = tld_array[randomInt(6)];
  return 'archive.' + tld;
}

function getArchive(url, paywall_sel, paywall_action = '', selector, text_fail = '', selector_source = selector, selector_archive = selector) {
  let url_archive = 'https://' + archiveRandomDomain() + '/' + url.split(/[#\?]/)[0];
  let paywall = document.querySelectorAll(paywall_sel);
  if (paywall.length) {
    clearPaywall(paywall, paywall_action);
    replaceDomElementExt(url_archive, true, false, selector, text_fail, selector_source, selector_archive);
  }
}

function archiveLink(url, text_fail = 'BPC > Try for full article text (no need to report issue for external site):\r\n') {
  return externalLink(['archive.today', archiveRandomDomain()], 'https://{domain}?run=1&url={url}', url, text_fail);
}

function archiveLink_renew(url, text_fail = 'BPC > Only use to renew if text is incomplete or updated:\r\n') {
  return externalLink([archiveRandomDomain()], 'https://{domain}?renew=1&url={url}', url, text_fail);
}

function googleWebcacheLink(url, text_fail = 'BPC > Try for full article text:\r\n') {
  if (!matchUrlDomain(['hbrchina.org'], url))
    url = url.split('?')[0];
  return externalLink(['webcache.googleusercontent.com'], 'https://{domain}/search?q=cache:{url}', url, text_fail);
}

function googleSearchToolLink(url, text_fail = 'BPC > Full article text (test url & copy html (tab) code to [https://codebeautify.org/htmlviewer]):\r\n') {
  return externalLink(['search.google.com'], 'https://search.google.com/test/rich-results?url={url}', encodeURIComponent(url), text_fail);
}

function nftLink(url, text_fail = 'BPC > Full article text:\r\n') {
  return externalLink(['1ft.io'], 'https://{domain}/{url}', url, text_fail);
}

function freediumLink(url, text_fail = 'BPC > Try for full article text:\r\n') {
  return externalLink(['freedium.cfd'], 'https://{domain}/{url}', url, text_fail);
}

function externalLink(domains, ext_url_templ, url, text_fail = 'BPC > Full article text:\r\n') {
  let text_fail_div = document.createElement('div');
  text_fail_div.id = 'bpc_archive';
  text_fail_div.setAttribute('style', 'margin: 20px; font-size: 20px; font-weight: bold; color: red;');
  let parser = new DOMParser();
  text_fail = text_fail.replace(/\[(?<url>[^\]]+)\]/g, function (match, url) {
    return "<a href='" + url + "' target='_blank' style='color: red'>" + new URL(url).hostname + "</a>";
  });
  let doc = parser.parseFromString('<span>' + text_fail + '</span>', 'text/html');
  let elem = doc.querySelector('span');
  text_fail_div.appendChild(elem);
  for (let domain of domains) {
    let ext_url = ext_url_templ.replace('{domain}', domain).replace('{url}', url.split('?')[0]);
    let a_link = document.createElement('a');
    a_link.innerText = domain;
    a_link.href = ext_url;
    a_link.target = '_blank';
    text_fail_div.appendChild(document.createTextNode(' | '));
    text_fail_div.appendChild(a_link);
  }
  return text_fail_div;
}

function removeClassesByPrefix(el, prefix) {
  let el_classes = el.classList;
  for (let el_class of el_classes) {
    if (el_class.startsWith(prefix))
      el_classes.remove(el_class);
  }
}

function removeClassesList(list) {
  for (let class_item of list) {
    let elems = document.querySelectorAll('.' + class_item);
    for (let elem of elems)
      elem.classList.remove(class_item);
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
    amp_iframes_replace(amp_iframe_link, source, false);
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

function breakText(str, headers = false) {
  str = str.replace(/(?:^|[A-Za-z\"\“\)])(\.+|\?|!)(?=[A-ZÖÜ\„\d][A-Za-zÀ-ÿ\„\d]{1,})/gm, "$&\n\n");
  if (headers)
    str = str.replace(/(([a-z]{2,}|[\"\“]))(?=[A-Z](?=[A-Za-zÀ-ÿ]+))/gm, "$&\n\n");
  return str;
}

function parseHtmlEntities(encodedString) {
  let parser = new DOMParser();
  let doc = parser.parseFromString('<textarea>' + encodedString + '</textarea>', 'text/html');
  let dom = doc.querySelector('textarea');
  return dom.value;
}

function encode_utf8(str) {
  return unescape(encodeURIComponent(str));
}

function decode_utf8(str) {
  return decodeURIComponent(escape(str));
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

function insert_script(func, insertAfterDom) {
  let bpc_script = document.querySelector('script#bpc_script');
  if (!bpc_script) {
    let script = document.createElement('script');
    script.setAttribute('id', 'bpc_script');
    script.appendChild(document.createTextNode('(' + func + ')();'));
    let insertAfter = insertAfterDom ? insertAfterDom : (document.body || document.head || document.documentElement);
    insertAfter.appendChild(script);
  }
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

function getArticleQuintype() {
  let article_new;
  let json_script = document.querySelector('script#static-page');
  if (json_script) {
    try {
      article_new = document.createElement('div');
      let parser = new DOMParser();
      let json = JSON.parse(json_script.text);
      let pars = json.qt.data.story.cards;
      for (let par of pars) {
        let story_elements = par['story-elements'];
        for (let elem of story_elements) {
          let par_elem;
          if (['text', 'title'].includes(elem.type) && elem.text) {
            let doc = parser.parseFromString('<div style="margin: 25px 0px">' + elem.text + '</div>', 'text/html');
            par_elem = doc.querySelector('div');
          } else if (elem.type === 'image') {
            if (elem['image-s3-key']) {
              par_elem = document.createElement('figure');
              let img = document.createElement('img');
              img.src = 'https://media.assettype.com/' + elem['image-s3-key'];
              par_elem.appendChild(img);
              if (elem.title) {
                let caption = document.createElement('figcaption');
                if (elem.title.includes('</')) {
                  let doc = parser.parseFromString('<div>' + elem.title + '</div>', 'text/html');
                  caption.appendChild(doc.querySelector('div'));
                } else
                  caption.innerText = elem.title;
                caption.innerText = elem.title;
                par_elem.appendChild(caption);
              }
            }
          } else if (elem.type === 'jsembed') {
            if (elem.subtype === 'tweet') {
              if (elem.metadata && elem.metadata['tweet-url']) {
                par_elem = document.createElement('a');
                par_elem.href = par_elem.innerText = elem.metadata['tweet-url'];
                par_elem.target = '_blank';
              } else
                console.log(elem);
            }
          } else if (elem.type === 'youtube-video') {
            if (elem['embed-url']) {
              par_elem = document.createElement('iframe');
              par_elem.src = elem['embed-url'];
              par_elem.style = 'width: 100%; height: 400px;';
            }
          } else if (!['widget'].includes(elem.type))
            console.log(elem);
          if (par_elem)
            article_new.appendChild(par_elem);
        }
      }
      if (!article_new.hasChildNodes())
        article_new = '';
    } catch (err) {
      console.log(err);
    }
  }
  return article_new;
}

function getJsonUrlText(article, callback, article_id = '') {
  let json_url_dom = document.querySelector('head > link[rel="alternate"][type="application/json"][href]');
  let json_url;
  if (json_url_dom)
    json_url = json_url_dom.href;
  if (!json_url && article_id)
    json_url = window.location.origin + '/wp-json/wp/v2/posts/' + article_id;
  if (json_url) {
    fetch(json_url)
    .then(response => {
      if (response.ok) {
        response.json().then(json => {
          try {
            let json_text = parseHtmlEntities(json.content.rendered);
            callback(json_text, article);
          } catch (err) {
            console.log(err);
          }
        });
      }
    });
  }
}

function getJsonUrlAdd(json_text, article, art_options = {}) {
  let art_type = 'div';
  let art_attrib = '';
  if (Object.keys(art_options).length) {
    if (art_options.art_type)
      art_type = art_options.art_type;
    if (art_options.art_class)
      art_attrib += ' class="' + art_options.art_class + '"';
    if (art_options.art_id)
      art_attrib += ' id="' + art_options.art_id + '"';
    if (art_options.art_style)
      art_attrib += ' style="' + art_options.art_style + '"';
    if (art_options.func_text)
      json_text = art_options.func_text(json_text);
  }
  let parser = new DOMParser();
  let doc = parser.parseFromString('<' + art_type + art_attrib + '>' + json_text + '</' + art_type + '>', 'text/html');
  let article_new = doc.querySelector(art_type);
  if (art_options.art_append || !article.parentNode) {
    if (!art_options.art_hold)
      article.innerHTML = '';
    article.appendChild(article_new);
  } else
    article.parentNode.replaceChild(article_new, article);
}

function getJsonUrl(paywall_sel, paywall_action = '', article_sel, art_options = {}, article_id = '') {
  let paywall = document.querySelectorAll(paywall_sel);
  let article = document.querySelector(article_sel);
  if (paywall.length && article) {
    clearPaywall(paywall, paywall_action);
    getJsonUrlText(article, (json_text, article) => {
      if (json_text && article)
        getJsonUrlAdd(json_text, article, art_options);
    }, article_id);
  }
}

function pageContains(selector, text) {
  let elements = document.querySelectorAll(selector);
  return Array.prototype.filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}

})();
