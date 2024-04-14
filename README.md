# Bypass Paywalls Clean filters

Adblocker list which allows you to read articles from (supported) sites that implement a paywall (for a lot of sites you also need to install an userscript).\
For some sites it will log you out (or block you to log in); caused by removing cookies or blocking general paywall-scripts.

Disclaimer: the list doesn't support as many sites as the extension/add-on does though (and even less on iOS).\
On iOS you can also use [Shortcuts](https://apps.apple.com/us/app/shortcuts/id915249334) app with [Unpaywall](https://www.icloud.com/shortcuts/71648f5ad34f4d8f972718e5f3621ffe) shortcut for some unsupported sites.

### Installation

#### adblocker filters

Use a browser which supports extensions/add-ons and install an adblocker (like uBlock Origin or AdGuard).\
Now add custom (content)filter (copy link):
[Bypass Paywalls Clean filters](https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/bpc-paywall-filter.txt)\
Or subscribe:
[subscribe on filterlists.com](https://filterlists.com/lists/bypass-paywalls-clean-filter) -
[subscribe for AdGuard](https://subscribe.adblockplus.org/?location=https%3A%2F%2Fgithub.com%2Fbpc-clone%2Fbypass-paywalls-clean-filters%2Fraw%2Fmain%2Fbpc-paywall-filter.txt&title=Bypass%20Paywalls%20Clean%20filters)
https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main

Brave browser has only incorporated the filterlist (many sites also need userscript): enable it in [settings](brave://adblock)\
On Android you can use [Via Browser](https://play.google.com/store/apps/details?id=mark.via.gp) which supports custom filterlists & userscripts.

You can also install an app like AdGuard* (on Android & iOS/macOS) or [AdLock](https://apps.apple.com/us/app/adlock-ads-blocker-privacy/id1506604517) (on iOS).\
This way you can use it with Chrome/Firefox (on Android) or Safari (on iOS/macOS).

\* [AdGuard Content Blocker](https://play.google.com/store/apps/details?id=com.adguard.android.contentblocker) (on Android) only works with Yandex Browser or Samsung Internet Browser when you add the filter (url) to user rules (manual update of filter required).\
Or use [AdGuard app](https://adguard.com/adguard-android/overview.html) (from their site) which works for all apps (and automatically updates filter).

An external app may work less effective (timing/refresh issues).\
On iOS there may be no support for scriptlets (for removing cookies, attributes and/or classes), but works with for example AdGuard Premium (paid feature).

#### userscripts

Some fixes also require an app to run an additional userscript to work.\
For example amp-redirect (also disable amp-to-html extension for these sites), unhide text/images and more.

Example apps or extensions/add-ons you can use:

* Android: [AdGuard app](https://adguard.com/adguard-android/overview.html) (load as extension)
* iOS: [Hyperweb](https://apps.apple.com/us/app/hyperweb/id1581824571) or [Userscripts](https://apps.apple.com/us/app/userscripts/id1463298887)
* macOS: [AdGuard app](https://adguard.com/en/adguard-mac/overview.html)
* Windows/ChromeOS: Tampermonkey [Chrome extension](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) or [Firefox add-on](https://addons.mozilla.org/firefox/addon/tampermonkey/)

Userscripts for different languages:

[English (& other)](https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.en.user.js) -
[Dutch](https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.nl.user.js) -
[Finnish/Swedish](https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.fi.se.user.js) -
[French](https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.fr.user.js) -
[German](https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.de.user.js) -
[Italian](https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.it.user.js) -
[Spanish/Portugese](https://github.com/bpc-clone/bypass-paywalls-clean-filters/raw/main/userscript/bpc.es.pt.user.js)
