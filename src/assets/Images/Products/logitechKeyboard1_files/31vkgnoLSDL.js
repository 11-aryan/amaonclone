(function(f){var g=window.AmazonUIPageJS||window.P,k=g._namespace||g.attributeErrors,b=k?k("DetailPagePostPurchaseAssets",""):g;b.guardFatal?b.guardFatal(f)(b,window):b.execute(function(){f(b,window)})})(function(f,g,k){f.when("A","jQuery","post-purchase-side-sheet-constants","post-purchase-side-sheet-tab-selector","post-purchase-side-sheet-controller","post-purchase-side-sheet-action-handler-info-tab","post-purchase-side-sheet-action-handler-video-tab").register("post-purchase-side-sheet-action-handler",
function(b,e,a,d,c){b.declarative(a.PP_SIDE_SHEET_OPEN_ACTION,"click",function(e){b.show(a.PP_SIDE_SHEET_FOREGROUND_SELECTOR);b.show(a.PP_SIDE_SHEET_BACKGROUND_SELECTOR);c.openSideSheet();d.tabSelector(e.data.tab)});b.declarative(a.PP_SIDE_SHEET_CLOSE_ACTION,"click",function(a){c.closeSideSheet()});e(a.PP_SIDE_SHEET_SCROLL_CONTAINER_SELECTOR).find("div.a-box-inner").css("padding","14px 0px");c.showIngressLink1stAttempt();b.on("PageRefresh:ATF",function(){c.showIngressLink1stAttempt()});b.on("a:pageUpdate",
function(){c.showIngressLink2ndAttempt()})});f.when("A","jQuery","post-purchase-side-sheet-constants","post-purchase-csm-counters","ready").execute("postpurchase-anchor-link-check",function(b,e,a,d){e(a.PP_INFO_LINK_SELECTOR).click(function(){d.incrementCounterOncePerSession(a.PP_INFO_LINK_CLICK_CSM)});e(a.PP_SIDE_SHEET_DOC_WIDGET_LINK_SELECTOR).click(function(){d.incrementCounterOncePerSession(a.PP_SIDE_SHEET_DOC_CLICK_CSM)});e(a.PP_SIDE_SHEET_PRODUCT_SUPPORT_LINK_SECTION_SELECTOR).click(function(){d.incrementCounterOncePerSession(a.PP_PRODUCT_SUPPORT_LINK_CLICK_CSM)});
b.on("a:tabs:"+a.PP_SIDE_SHEET_TAB_SET+":select",function(b){b.selectedTab.tabName!==a.PP_SIDE_SHEET_TAB_INFO_EVENT&&d.incrementCounterOncePerSession(a.PP_TAB_SELECT_CSM+b.selectedTab.tabName)})});f.register("post-purchase-side-sheet-action-handler-info-tab");"use strict";f.when("A","jQuery","post-purchase-side-sheet-constants","post-purchase-side-sheet-tab-selector","post-purchase-side-sheet-controller","post-purchase-side-sheet-videos-ajax-load").register("post-purchase-side-sheet-action-handler-video-tab",
function(b,e,a,d,c,h){b.declarative(a.PP_SIDE_SHEET_OPEN_ACTION,"click",function(a){h.getPostPurchaseVideos()})});"use strict";f.declare("post-purchase-side-sheet-constants",{PP_ATTRIBUTION:"post-purchase",PP_LOG_LEVEL_ERROR:"ERROR",PP_SIDE_SHEET_OPEN_ACTION:"pp-sidesheet-open-action",PP_SIDE_SHEET_CLOSE_ACTION:"pp-sidesheet-close-action",PP_SIDE_SHEET_CLOSE_LINK_SELECTOR:"#pp-sidesheet-close-link",PP_SIDE_SHEET_FOREGROUND_SELECTOR:"#pp-sidesheet-foreground-content-div",PP_SIDE_SHEET_BACKGROUND_SELECTOR:"#pp-sidesheet-background-close-div",
PP_SIDE_SHEET_TAB_INFO_EVENT:"info",PP_SIDE_SHEET_TAB_VIDEO_EVENT:"video",PP_SIDE_SHEET_TAB_CONTACT_EVENT:"contact",PP_SIDE_SHEET_TAB_SET:"pp-sidesheet-tabs",PP_SIDE_SHEET_DESKTOP_WIDTH:"580px",PP_ANIMATION_SLIDE_TIME:100,PP_SIDE_SHEET_HIDE_WIDTH_CHANGE:50,PP_INFO_LINK_SELECTOR:"#pp-sidesheet-open-link-info",PP_SIDE_SHEET_CLOSE_ACTION_BACKGROUND_SELECTOR:"#pp-sidesheet-close-action-bg",PP_SIDE_SHEET_CLOSE_ACTION_ICON_SELECTOR:"#pp-sidesheet-close-action-icon",PP_SIDE_SHEET_SCROLL_CONTAINER_SELECTOR:"#postpurchase-sidesheet-display-scroller",
PP_SIDE_SHEET_DOC_WIDGET_LINK_SELECTOR:"#postpurchase-sidesheet-product-documents \x3e .postpurchase-sidesheet-feature-content \x3e .postpurchase-sidesheet-doc-list-item \x3e a",PP_SIDE_SHEET_PRODUCT_SUPPORT_LINK_SECTION_SELECTOR:"#postpurchase-sidesheet-product-support-link-section a",PP_INFO_LINK_CLICK_CSM:"dp:postPurchase:anchorLinks:openInfoTabClick",PP_INFO_LINK_CLICK_NO_SIDE_SHEET_CSM:"dp:postPurchase:anchorLinks:openInfoTabClickFailureBtf",PP_PRODUCT_SUPPORT_LINK_CLICK_CSM:"dp:postPurchase:sideSheet:productSupportLinkClick",
PP_SIDE_SHEET_DOC_CLICK_CSM:"dp:postPurchase:sideSheet:productDocumentsClick",PP_VIDEOS_DIV_HOLDER:"#pp-sidesheet-videos-holder",PP_VIDEOS_HIDDEN_ASIN_FIELD:"#ppSideSheetVideoAsin",PP_VIDEOS_HIDDEN_MARKETPLACE_ID_FIELD:"#ppSideSheetVideoMarketplaceId",PP_VIDEOS_HIDDEN_LOCALE_FIELD:"#ppSideSheetVideoLocale",PP_VIDEOS_CUSTOMER_ID:"#ppSideSheetVideoCustomerId",PP_VIDEOS_REQUEST_ID:"#ppSideSheetVideoRequestId",PP_VIDEOS_EMPTY_VIEW:"#pp-sidesheet-videos-empty-view",PP_VIDEOS_RESULT_EMPTY:"#vse-successful-empty",
PP_VIDEOS_LOAD_URI:"/vap/ew/componentbuilder",PP_VIDEOS_REQUESTER:"VideoShoppingExperience",PP_VIDEOS_CLIENT_PREFIX:"ppvs",PP_VIDEOS_PAGE:"Detail",PP_VIDEOS_PLACEMENT:"PostPurchase",PP_VIDEOS_COUNT:10,DEVICE_MOBILE:"Mobile",DEVICE_DESKTOP:"Desktop",PP_VIDEO_REQUEST_CSM:"dp:postPurchase:sideSheet:video:requestVideo",PP_VIDEO_REQUEST_SUCCESS_CSM:"dp:postPurchase:sideSheet:video:requestVideoSuccess",PP_VIDEO_REQUEST_ERROR_CSM:"dp:postPurchase:sideSheet:video:requestVideoError",PP_VIDEO_REQUEST_LATENCY_CSM:"dp:postPurchase:sideSheet:video:requestVideoLatency",
PP_VIDEO_REQUEST_ERROR_CODE_4XX_CSM:"dp:postPurchase:sideSheet:video:requestVideoErrorCode:4XX",PP_VIDEO_REQUEST_ERROR_CODE_5XX_CSM:"dp:postPurchase:sideSheet:video:requestVideoErrorCode:5XX",PP_TAB_SELECT_CSM:"dp:postPurchase:sideSheet:tabSelect:"});"use strict";f.when("A","jQuery","post-purchase-side-sheet-constants","post-purchase-csm-counters").register("post-purchase-side-sheet-controller",function(b,e,a,d){function c(d,c){b.animate(e(a.PP_SIDE_SHEET_FOREGROUND_SELECTOR),d,a.PP_ANIMATION_SLIDE_TIME,
"ease-out",c)}function h(a){b.show(a.closest(".iou-ingress-link"));b.show(a)}return{openSideSheet:function(){e(a.PP_SIDE_SHEET_FOREGROUND_SELECTOR).show(function(){c({right:"0px"})})},closeSideSheet:function(){b.hide(a.PP_SIDE_SHEET_BACKGROUND_SELECTOR);var d=e(a.PP_SIDE_SHEET_FOREGROUND_SELECTOR).width()+a.PP_SIDE_SHEET_HIDE_WIDTH_CHANGE;c({right:"-"+d+"px"},function(){e(a.PP_SIDE_SHEET_FOREGROUND_SELECTOR).css({display:"none"})})},showIngressLink1stAttempt:function(){var d=e(a.PP_INFO_LINK_SELECTOR),
c=e(a.PP_SIDE_SHEET_FOREGROUND_SELECTOR);0<d.length&&0<c.length&&"function"===typeof b.show&&h(d)},showIngressLink2ndAttempt:function(){var c=e(a.PP_INFO_LINK_SELECTOR);0<c.length&&c.is(":hidden")&&"function"===typeof b.show&&(0< !e(a.PP_SIDE_SHEET_FOREGROUND_SELECTOR).length?(d.logError("Post Purchase Side Sheet selector "+a.PP_SIDE_SHEET_FOREGROUND_SELECTOR+" not present"),d.incrementCounterOncePerSession(a.PP_INFO_LINK_CLICK_NO_SIDE_SHEET_CSM)):h(c))}}});"use strict";f.when("A","jQuery","post-purchase-side-sheet-constants").register("post-purchase-side-sheet-tab-selector",
function(b,e,a){return{tabSelector:function(d){var c=e(a.PP_SIDE_SHEET_FOREGROUND_SELECTOR).find("li[data-a-tab-name\x3d"+d+"]");d=a.PP_SIDE_SHEET_TAB_SET;var h=c.data("a-tab-name"),f=c.closest(".a-tab-container").find(".a-box-tab");h&&f&&(e("li.a-active",c.closest(".a-tabs")).removeClass("a-active"),c.closest("li").addClass("a-active"),f.not(".a-hidden").addClass("a-hidden"),f.filter('[data-a-name\x3d"'+h+'"]').removeClass("a-hidden"),c={$tab:c,tabName:h,tabSetName:d},b.trigger("a:tabs:"+d+":select",
{selectedTab:c}),b.trigger("a:tabs:"+d+":"+h+":select",{selectedTab:c}))}}});"use strict";f.when("A","post-purchase-side-sheet-constants").register("post-purchase-csm-counters",function(b,e){var a={};return{incrementCounterOncePerSession:function(b,c){a.hasOwnProperty(b)||(a[b]=!0,g.ue&&g.ue.count&&(c=c||1,c=(g.ue.count(b)||0)+c,g.ue.count(b,c)))},logError:function(a){f.log(a,e.PP_LOG_LEVEL_ERROR,e.PP_ATTRIBUTION)}}});"use strict";f.when("A","jQuery","post-purchase-side-sheet-constants","post-purchase-csm-counters").register("post-purchase-side-sheet-utils",
function(b,e,a,d){return{makeIdempotent:function(a){var b=!1;return function(){b||(a.apply(this,arguments),b=!0)}},getValueFromInputField:function(a){var b=e(a);if(0<b.length)return b.val();d.logError("Input field for the selector "+a+" not found");return null}}});f.when("jQuery","A","post-purchase-side-sheet-constants","post-purchase-csm-counters","post-purchase-side-sheet-utils","ready").register("post-purchase-side-sheet-videos-ajax-load",function(b,e,a,d,c){function f(){var c=b(a.PP_VIDEOS_HIDDEN_ASIN_FIELD).val(),
d=b(a.PP_VIDEOS_HIDDEN_MARKETPLACE_ID_FIELD).val(),g=b(a.PP_VIDEOS_HIDDEN_LOCALE_FIELD).val(),h=b(a.PP_VIDEOS_CUSTOMER_ID).val(),k=b(a.PP_VIDEOS_REQUEST_ID).val();return{requester:a.PP_VIDEOS_REQUESTER,clientPrefix:a.PP_VIDEOS_CLIENT_PREFIX,device:e.capabilities.mobile?a.DEVICE_MOBILE:a.DEVICE_DESKTOP,locale:g,page:a.PP_VIDEOS_PAGE,placement:a.PP_VIDEOS_PLACEMENT,marketplaceID:d,isTwisterRequest:"false",videoCount:a.PP_VIDEOS_COUNT,product:{contentID:c,contentIDType:"ASIN"},customerID:h,requestID:k}}
function g(){b(a.PP_VIDEOS_EMPTY_VIEW).removeClass("aok-hidden");b(a.PP_VIDEOS_EMPTY_VIEW+" .a-alert-container").removeAttr("style")}function k(c){var f=e.now()-l;d.incrementCounterOncePerSession(a.PP_VIDEO_REQUEST_LATENCY_CSM,f);d.incrementCounterOncePerSession(a.PP_VIDEO_REQUEST_SUCCESS_CSM);b(a.PP_VIDEOS_DIV_HOLDER).html(c);b(a.PP_VIDEOS_DIV_HOLDER+" "+a.PP_VIDEOS_RESULT_EMPTY).length&&g()}var l=null;return{getPostPurchaseVideos:c.makeIdempotent(function(){var c=f(),c={url:a.PP_VIDEOS_LOAD_URI,
type:"POST",contentType:"application/json",data:JSON.stringify(c),success:k,error:function(b,c,e){g();d.logError(a.PP_VIDEO_REQUEST_ERROR_CSM+":"+e);(b=400<=b.status&&500>b.status?a.PP_VIDEO_REQUEST_ERROR_CODE_4XX_CSM:500<=b.status&&600>b.status?a.PP_VIDEO_REQUEST_ERROR_CODE_5XX_CSM:null)&&d.incrementCounterOncePerSession(b,1)}};l=e.now();b.ajax(c);d.incrementCounterOncePerSession(a.PP_VIDEO_REQUEST_CSM)})}})});