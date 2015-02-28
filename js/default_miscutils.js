/* Memowe */
/* MiscUtils: basic/common functions */
var MiscUtils = {
  getOrientation: function () {
    var El = document.documentElement;
    return El && El.clientWidth / El.clientHeight < 1.1 ? "pt" : "ls";
  },
  storeItem: function (AKey, AValue) {
    if (typeof (localStorage) == 'undefined') return; // No HTML5 localStorage
    try {
      localStorage.setItem(AKey, AValue);
    } catch (e) {
      if (e == QUOTA_EXCEEDED_ERR) {
        // Data save failed (quota exceed). Show error?
      }
    }
  },
  getStoredItem: function (AKey, ADefaultValue) {
    if (typeof (localStorage) == 'undefined') return ADefaultValue; // No HTML5 localStorage
    var LSVal = localStorage.getItem(AKey);
    if (typeof LSVal == 'undefined' || LSVal == null || LSVal == '') return ADefaultValue;
    return LSVal;
  },
  getStoredItemAsBool: function (AKey) {
    return MiscUtils.getStoredItem(AKey)=='true';
  },
  getStoredItemAsInt: function (AKey, ADefaultValue) {
    var LSVal = MiscUtils.getStoredItem(AKey, null);
    if (LSVal == null) return ADefaultValue;
    try {
      return parseInt(LSVal);
    } catch (e) {
      return ADefaultValue;
    }
  },
  getStoredItemAsJSON: function (AKey, ADefaultValue) {
    var LSVal = MiscUtils.getStoredItem(AKey, null);
    if (LSVal == null) return ADefaultValue;
    try {
      return JSON.parse(LSVal);
    } catch (e) {
      return ADefaultValue;
    }
  },
  SanitizeContent: function (AValue) {
    if (AValue.match(/[^a-zA-Z0-9 ]/g)) {
      AValue = AValue.replace(/[^a-zA-Z0-9 ]/g, '');
    }
    return AValue;
  },
  IsValueNumeric: function (AValue) {
    if (AValue != null && !AValue.toString().match(/^[-]?\d*\.?\d*$/)) return false;
    return true;
  },
  GetCurrentSec: function () {
    var Today = new Date();
    var ES = Today.getSeconds();
    var EM = Today.getMinutes();
    var EH = Today.getHours();
    return (ES) + (60 * EM) + (3600 * EH);
  },
  LZ: function (ANumber) {
    if (ANumber < 10) return '0' + ANumber;
    return ANumber;
  },
  FormatTimeFromSecs: function (ASecs) {
    var Mins = parseInt(ASecs / 60);
    var Secs = ASecs % 60;
    return LZ(Mins) + ':' + LZ(Secs);
  },
  Merge: function (first, second) {
    var l = second.length, i = first.length, j = 0;
    if (typeof l === "number") {
      for (; j < l; j++) {
        first[i++] = second[j];
      }
    } else {
      while (second[j] !== undefined) {
        first[i++] = second[j++];
      }
    }
    first.length = i;
    return first;
  },
  GetRandomColor_CssString: function (ARGBOffset, ARGBRange) {
    return 'rgba(' + (Math.floor(Math.random() * ARGBRange) + ARGBOffset) + ',' + (Math.floor(Math.random() * ARGBRange) + ARGBOffset) + ',' + (Math.floor(Math.random() * ARGBRange) + ARGBOffset) + ',1)';
  }
};
// JSON.stringify
JSON.stringify = JSON.stringify || function (obj) {
  var t = typeof (obj);
  if (t != "object" || obj === null) {
    // simple data type
    if (t == "string") obj = '"' + obj + '"';
    return String(obj);
  } else {
    // recurse array or object
    var n, v, json = [], arr = (obj && obj.constructor == Array);
    for (n in obj) {
      v = obj[n]; t = typeof (v);
      if (t == "string") v = '"' + v + '"';
      else if (t == "object" && v !== null) v = JSON.stringify(v);
      json.push((arr ? "" : '"' + n + '":') + String(v));
    }
    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
  }
};