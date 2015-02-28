var memowe = {  
  LSKey_GameSettings: 'mmw_gamesettings',
  LSKey_GameActive: 'mmw_gameactive',
  LSKey_Cards: 'mmw_cards',
  LSKey_MemoryCards: 'mmw_memorycards',
  LSKey_Turns: 'mmw_turns',
  LSKey_Time: 'mmw_time',
  LSKey_BGColor: 'mmw_bgcolor',
  ST_Static: 'static',
  ST_Symbols: 'symbols',
  ST_Local: 'local',
  ST_Flickr: 'flickr',
  ST_Picasa: 'picasa',
  AT_Default: 'default',
  AT_Android: 'android',
  AT_Tizen: 'tizen',
  EV_Click: 'click',
  EV_Touch: 'touchstart',
  Event_Click: '',
  Facebook: false,
  FacebookScriptLoaded: false,
  FirstLoad: true,
  HelpMenuActive: false,
  C1: null,
  C2: null,
  AgainButton: null,
  MemoryArray: [],
  CheckActive: false,
  GameActive: false,
  GamePaused: false,
  CancelGame: false,
  Again: false,
  AppType: '',
  Turns: 0,
  NrImages: 0,
  NrCards: 0,
  NrCards_OptionsArr: [4, 6, 8, 12],
  CardSizeRem: 10,
  CardsLoaded: 0,
  TO: null,
  CCTO: null,
  StartSec: 0,
  DiffSec: 0,
  SourceType: '',
  Keyword: '',
  CardArray: [],
  localMediaStream: null,
  //canvasContext: null,
  MainVideo: null,
  ResizeImageSettings: {
    maxwidth:500,
    maxheight:500,
    crop:true,
    quality:0.8,
    background:'#ffffff'
  },
  ResizeImageCanvas: null,
  ResizeImageCanvasContext: null,
  FilePickerCurrentID:0,
  KeywordList: ['toys', 'summer', 'winter', 'autumn', 'spring', 'outdoor', 'flowers', 'sports', 'news', 'puppet', 'landmark', 'coast', 'car', 'bike', 'transportation'],
  StaticCards: [
    { 'id': 1, 'src': 'img/card1.jpg', 'cssclass': '', 'visible': true },
    { 'id': 2, 'src': 'img/card2.jpg', 'cssclass': '', 'visible': true },
    { 'id': 3, 'src': 'img/card3.jpg', 'cssclass': '', 'visible': true },
    { 'id': 4, 'src': 'img/card4.jpg', 'cssclass': '', 'visible': true },
    { 'id': 5, 'src': 'img/card5.jpg', 'cssclass': '', 'visible': true },
    { 'id': 6, 'src': 'img/card6.jpg', 'cssclass': '', 'visible': true },
    { 'id': 7, 'src': 'img/card7.jpg', 'cssclass': '', 'visible': true },
    { 'id': 8, 'src': 'img/card8.jpg', 'cssclass': '', 'visible': true },
    { 'id': 9, 'src': 'img/card9.jpg', 'cssclass': '', 'visible': true },
    { 'id': 10, 'src': 'img/card10.jpg', 'cssclass': '', 'visible': true },
    { 'id': 11, 'src': 'img/card11.jpg', 'cssclass': '', 'visible': true },
    { 'id': 12, 'src': 'img/card12.jpg', 'cssclass': '', 'visible': true }
  ],
  StaticCardSymbols: [
    { 'id': 1, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-briefcase', 'visible': true },
    { 'id': 2, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-bullhorn', 'visible': true },
    { 'id': 3, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-book', 'visible': true },
    { 'id': 4, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-cloud', 'visible': true },
    { 'id': 5, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-envelope', 'visible': true },
    { 'id': 6, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-film', 'visible': true },
    { 'id': 7, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-fire', 'visible': true },
    { 'id': 8, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-glass', 'visible': true },
    { 'id': 9, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-glasses', 'visible': true },
    { 'id': 10, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-home', 'visible': true },
    { 'id': 11, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-idea', 'visible': true },
    { 'id': 12, 'src': 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'cssclass': 'el-icon-bell', 'visible': true }
  ],
  MotivationTexts: [
    'Great, now add another one!',
    'Awesome. Another picture?',
    'Please add another picture.',
    'Thanks, we\'ll need another one.',
    'More pictures needed...'
  ],
  init: function (AAppType) {
    memowe.AppType = AAppType;

    if (memowe.AppType == memowe.AT_Default) {
      memowe.Event_Click = memowe.EV_Click;
    } else {
      memowe.Event_Click = memowe.EV_Touch;
    }
    
    var $window = $(window);
    if (memowe.AppType == memowe.AT_Android) {
      $(document).bind('deviceready', function () {
        memowe.loadGameParams();
        $window.bind('resize', memowe.checkResize);
        $window.bind('unload', memowe.pauseGame);
      });
    } else {
      $(document).ready(function () {
        memowe.checkResize();
        memowe.loadGameParams();
        $window.bind('resize', memowe.checkResize);
        $window.bind('unload', memowe.pauseGame);        
      });
    }
    $(document).ready(function () {
      memowe.ResizeImageCanvas = document.createElement('canvas');
      memowe.ResizeImageCanvasContext = memowe.ResizeImageCanvas.getContext('2d');
    });
    memowe.bindEvents();
  },
  bindEvents: function() {
    /* Event handling */
    $(document).ready(function () {
      $('#aAgain').bind(memowe.Event_Click, function () {
        memowe.click_Again();
        return false;
      });
      $('#aNext').bind(memowe.Event_Click, function () {
        memowe.click_Next();
        return false;
      });
      $('#aHome').bind(memowe.Event_Click, function () {
        memowe.click_Back();
        return false;
      });
      $('#aCord').bind(memowe.Event_Click, function () {
        memowe.click_Cord();
        return false;
      });
      $('#aCord, header .content').bind('swipedown swipeup', function () {
        memowe.click_Cord();
        return false;
      });
      $('#aUseImagesAndPlay').bind(memowe.Event_Click, function () {
        memowe.checkCardArray();
        return false;
      });
      $('#inpFiles').bind('change', function () {
        memowe.filePickerFunction(this);
        return false;
      });
      $(document.body).bind('drop', memowe.dropFunction);
      $('#aSourceFiles').bind(memowe.EV_Click, function () {
        memowe.getPicture(true);
        return false;
      });
      $('#aSourceMagic').bind(memowe.EV_Click, function () {
        memowe.getImagesFromMagic();
        return false;
      });
      $('#aSourceCamera').bind(memowe.EV_Click, function () {
        memowe.getImageFromUserMedia();
        return false;
      });
      $('#aTakePicture').bind(memowe.EV_Click, function () {
        memowe.getUserMediaTakePicture();
        return false;
      });
      $('#aCancelTakePicture').bind(memowe.EV_Click, function () {
        memowe.stopUserMedia();
        return false;
      });
      $('#aResetImages').bind(memowe.EV_Click, function () {
        $('#divCards .placeholders div.hasphoto div').each(function () {
          var CardIndex = memowe.getCardArrayIndexByID($(this).attr('data-id'));
          if (CardIndex >= 0) memowe.CardArray.splice(CardIndex, 1);
          $(this).parent().removeClass('hasphoto').find('.card').css('background-image', 'none');          
        });
        $('#divCards .buttons').addClass('hidden');
        return false;
      });
    });
  },
  checkResize: function() {
    memowe.PrevClass = $('html').attr('class');
    $('html').removeClass("pt ls").addClass(MiscUtils.getOrientation());
    if ($('header').css('display')=='block') memowe.hideCord(false);
  },
  hideCord: function (AHide) { AHide ? $('#aCord').removeClass('showcord') : $('#aCord').addClass('showcord'); },
  loadGameParams: function () {
    memowe.SourceType = memowe.ST_Local;
    if (window.location) {
      var WL = window.location + '';
      var QueryParamsStr = null;
      if (WL == '' || WL.indexOf('?') == -1) {
        if (typeof (localStorage) == 'undefined') return; // No HTML5 localStorage
        memowe.CardArray = MiscUtils.getStoredItemAsJSON(memowe.LSKey_Cards, []);
        memowe.NrImages = memowe.CardArray.length;
        // First - check for an active/paused game...
        if (MiscUtils.getStoredItemAsBool(memowe.LSKey_GameActive)) {
          try {
            memowe.GamePaused = true;
            memowe.StartSec = MiscUtils.getStoredItemAsInt(memowe.LSKey_Time, 0);
            memowe.Turns = MiscUtils.getStoredItemAsInt(memowe.LSKey_Turns, 0);            
            memowe.MemoryArray = MiscUtils.getStoredItemAsJSON(memowe.LSKey_MemoryCards, []);
            $('html').removeClass('startup');
            memowe.initGame();
            return;
          } catch (err) {
            MiscUtils.storeItem(memowe.LSKey_GameActive, false);
            memowe.GamePaused = false;
          }
        }
      } else {
        QueryParamsStr = WL.split('?');
        if (QueryParamsStr.length <= 1) return;
        QueryParamsStr = QueryParamsStr[1];
      }
      setTimeout(function () {
        $('#splash .me').css({ 'background-color': MiscUtils.GetRandomColor_CssString(80, 136) }).addClass('active');
        $('#splash .mo').css({ 'background-color': MiscUtils.GetRandomColor_CssString(80, 136) }).addClass('active');
        $('#splash .we').css({ 'background-color': MiscUtils.GetRandomColor_CssString(80, 136) }).addClass('active');
      }, 1200);
      
      setTimeout(memowe.click_Play, 3600);
      
    }
  },
  showHome: function () {
    $('html').removeClass('startup');
    memowe.HelpMenuActive = true;
    memowe.hideCord(true);
    $('#game, header').hide();
    $('header').removeClass('active');
    if (memowe.AppType == memowe.AT_Android) {
      $('#help, #divStartUp').show();
    } else {
      $('#help, #divCards').show();
      $('#divCards .placeholders').html('').removeClass(); //remove previous card placeholders
      
      var ICard;
      for (var i = 0; i < memowe.NrImages; i++) {
        ICard = $('<div/>').attr({ 'data-id': i + 1 }).addClass('card outline el-icon-picture').bind('dragenter dragover', function (e) {
          $(this).addClass('dragover');
          if (e.preventDefault) e.preventDefault();
          memowe.FilePickerCurrentID = $(this).attr('data-id');
          //return false;
        }).bind('dragleave', function (e) {
          memowe.FilePickerCurrentID = 0;
          $(this).removeClass('dragover');
          //return false;
        }).bind(memowe.Event_Click, function () {
          memowe.FilePickerCurrentID = $(this).attr('data-id');
          $(this).addClass('dragover');
          memowe.getPicture(true);
        });

        $('#divCards .placeholders').append($('<div/>').attr('id', 'icard_' + i).addClass('cardcont').append(ICard).append($('<a/>').attr({ href: '#', 'data-id': i + 1 }).addClass('el-icon-remove-sign').bind('click', function () {
          var CardIndex = memowe.getCardArrayIndexByID($(this).attr('data-id'));
          if (CardIndex >= 0) memowe.CardArray.splice(CardIndex, 1);
          $(this).parent().removeClass('hasphoto').find('.card').css('background-image', 'none');
          $('#divCards .buttons').addClass('hidden');
          return false;
        })));
      }
      memowe.getImagesFromArray();
    }
    $(document.body).css('background-color', '#fff');
  },
  preInitGame: function() {
    $('html').removeClass('startup');
    memowe.CancelGame = false;

    if (memowe.CardArray.length <= 0 || !memowe.GameActive) {
      memowe.NrImages = 4;//4;
      memowe.showHome();
      if (memowe.AppType == memowe.AT_Android) {
        return;
      } else {
        return;
      }
    } else if (memowe.SourceType != memowe.ST_Local) {
      var STArr = [memowe.ST_Symbols, memowe.ST_Flickr, memowe.ST_Picasa];
      var RandomNr = Math.floor(Math.random() * (memowe.NrCards_OptionsArr.length - 1));
      NrImages = memowe.NrCards_OptionsArr[RandomNr];
      memowe.SourceType = STArr[Math.floor(Math.random() * (STArr.length - 1))];
    }
    memowe.HelpMenuActive = false;
    memowe.checkResize();
    $('#cards').attr('class', '').addClass('c' + memowe.NrImages);
    memowe.setRandomKeyword();
    $('header p').text(memowe.Keyword).show();

    switch (memowe.SourceType) {
      case memowe.ST_Flickr:
        $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
          tags: memowe.Keyword,
          tagmode: 'any',
          format: 'json'
        }, function (data) {
          if (memowe.CancelGame) return; //do nothing if user cancelled
          memowe.CardArray = [];
          $.each(data.items, function (i, item) {
            memowe.CardArray.push({ 'id': i + 1, 'src': item.media.m, 'cssclass':'', 'visible': true });
            if (i + 1 == memowe.NrImages) return false;
          });
          memowe.checkCardArray();
        });
        break;
      case memowe.ST_Picasa:
        $.getJSON('https://picasaweb.google.com/data/feed/api/all?alt=json', {
          'q': memowe.Keyword,
          'max-results': memowe.NrImages
        }, function (data) {
          if (memowe.CancelGame) return; //do nothing if user cancelled
          memowe.CardArray = [];
          $.each(data.feed.entry, function (i, item) {
            memowe.CardArray.push({ 'id': i + 1, 'src': item.media$group.media$thumbnail[2].url, 'cssclass': '', 'visible': true });
            if (i + 1 == memowe.NrImages) return false;
          });
          memowe.checkCardArray();
        });
        break;
      case memowe.ST_Symbols:
        memowe.CardArray = memowe.StaticCardSymbols.slice(0, memowe.NrImages);
        memowe.initGame();
        break;
      case memowe.ST_Local:
        memowe.checkCardArray();
        break;
      default:
        memowe.CardArray = memowe.StaticCards.slice(0, memowe.NrImages);
        memowe.initGame();
        break;
    }
  },
  setRandomKeyword: function() {
    var rn = Math.floor(Math.random() * (memowe.KeywordList.length - 1));
    if (rn < 0) rn = 0;
    memowe.Keyword = memowe.KeywordList[rn];
    if (memowe.Keyword.match(/[^a-zA-Z0-9 ]/g)) {
      memowe.Keyword = memowe.Keyword.replace(/[^a-zA-Z0-9 ]/g, '');
    }
  },
  dropFunction: function (AEvent) {
    if (!AEvent) var AEvent = window.event; // get window.event if e argument missing (in IE)   
    if (AEvent.preventDefault) AEvent.preventDefault(); // stops the browser from redirecting off to the image
    memowe.getImagesFromFiles(AEvent.dataTransfer.files)
    return false;
  },
  filePickerFunction: function (AThis) {
    memowe.getImagesFromFiles(AThis.files)
    return false;
  },
  getCardArrayIndexByID: function (AID) {
    if (!memowe.CardArray || !memowe.CardArray.length) return -1;
    for (var i = 0; i < memowe.CardArray.length; i++) {
      if (memowe.CardArray[i].id == AID) return i;
    }
    return -1;
  },
  getImagesFromArray: function () {
    if (!memowe.CardArray.length) return;
    var ImageDivArr = memowe.getImageDivArray();
    if (!ImageDivArr) return;
    $.each(memowe.CardArray, function (i, item) {
      $(ImageDivArr[0]).append($('<img/>').load(function () {
        //console.log('image loaded');
        $(this).parents('.cardcont').addClass('hasphoto');
        $(this).parent().css({ 'background-image': 'url(' + item.src + ')' });
      }).attr('src', item.src));
      ImageDivArr = ImageDivArr.slice(1);
      if (!ImageDivArr.length) {
        $('#divCards .buttons').removeClass('hidden');
        return false;
      }
    });
  },
  getImagesFromMagic: function () {
    memowe.setRandomKeyword();
    $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?', {
      tags: memowe.Keyword,
      tagmode: 'any',
      format: 'json'
    }, function (data) {
      if (!data.items.length) return;
      var ImageDivArr = memowe.getImageDivArray();
      if (!ImageDivArr) return;
      if (!$('#divCards .placeholders div.hasphoto div').length) memowe.CardArray = [];
      $.each(data.items, function (i, item) {
        $(ImageDivArr[0]).append($('<img/>').load(function () {
          //console.log('image loaded');
          $(this).parents('.cardcont').addClass('hasphoto');
          $(this).parent().css({ 'background-image': 'url(' + item.media.m + ')' });
          memowe.CardArray.push({ 'id': $(this).parent().attr('data-id'), 'src': item.media.m, 'cssclass': '', 'visible': true });
        }).attr('src', item.media.m));
        ImageDivArr = ImageDivArr.slice(1);
        if (!ImageDivArr.length) {
          $('#divCards .buttons').removeClass('hidden');
          return false;
        }
      });
    });
  },
  getImageFromUserMedia: function () {
    var ImageDivArr = memowe.getImageDivArray();
    if (!ImageDivArr) return;
    navigator.getUserMedia = navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia;
    if (!navigator.getUserMedia) {
      alert('Unfortunately, this is not supported in your browser.');
      return;
    }
    var video = document.querySelector('video');
    navigator.getUserMedia({ video: true }, function (AStream) {
      video.src = window.URL.createObjectURL(AStream);
      setTimeout(function () { $('.cameracontent').css({ 'top': $(ImageDivArr[0]).offset().top + 'px', 'left': $(ImageDivArr[0]).offset().left + 'px' }); }, 500);
      $('.cameracontent, video, canvas').show();
      memowe.localMediaStream = AStream;
    }, function (err) {
      console.log("The following error occured: " + err);
    });
  },
  getUserMediaTakePicture: function() {
    if (memowe.localMediaStream) {
      var video = document.querySelector('video');
      var canvas = document.querySelector('canvas');
      canvas.width = $(video).width();
      canvas.height = $(video).height();
      var ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      var ImageDivArr = memowe.getImageDivArray();
      if (!ImageDivArr) return;
      if (!$('#divCards .placeholders div.hasphoto div').length) memowe.CardArray = [];
      $(ImageDivArr[0]).append($('<img/>').load(function () {
        //console.log('image loaded');
        $(this).parents('.cardcont').addClass('hasphoto');
        $(this).parent().css({ 'background-image': 'url(' + $(this).attr('src') + ')' });
        memowe.CardArray.push({ 'id': $(this).parent().attr('data-id'), 'src': $(this).attr('src'), 'cssclass': '', 'visible': true });
      }).attr('src', canvas.toDataURL('image/webp')));
      ImageDivArr = ImageDivArr.slice(1);
      if (ImageDivArr.length) {
        $('.cameracontent').css({ 'top': $(ImageDivArr[0]).offset().top + 'px', 'left': $(ImageDivArr[0]).offset().left + 'px' });
      } else {
        $('#divCards .buttons').removeClass('hidden');
        memowe.stopUserMedia();
      }
    } else {
      memowe.stopUserMedia();
    }
  },
  stopUserMedia: function () {
    document.querySelector('video').pause();
    memowe.localMediaStream.stop();
    memowe.localMediaStream = null;
    $('.cameracontent, video, canvas').hide();
    return false;
  },
  getImageDivArray: function() {
    var ImageDivs = $('#divCards .placeholders div:not(.hasphoto) div');
    if (!ImageDivs.length) return [];

    var ImageDivArr = []; // convert to 'native' js array
    for (var i = 0; i < ImageDivs.length; i++) ImageDivArr.push(ImageDivs[i]);
    return ImageDivArr;
  },
  getImagesFromFiles: function (AFileList) {
    $('#divCards .placeholders div div').removeClass('dragover');
    if (typeof AFileList == 'undefined' || AFileList.length==0) return;
    var ImageDivArr = memowe.getImageDivArray();
    if (!ImageDivArr) return;
    if (!$('#divCards .placeholders div.hasphoto div').length) memowe.CardArray = [];
    
    var StartIndex = 0;
    if (memowe.FilePickerCurrentID > 0) {
      if ($(ImageDivArr[0]).attr('data-id') != memowe.FilePickerCurrentID) {
        for (var i = 0; i < ImageDivArr.length; i++) {
          if ($(ImageDivArr[i]).attr('data-id') == memowe.FilePickerCurrentID) StartIndex = i;
        }
      }
    }
      
    for (var i = 0; i < AFileList.length; i++) {
      var f = AFileList[i];
      if (!f.type.match('image.*')) continue; // Only process image files.
      var reader = new FileReader();
      reader.addEventListener('loadend', function () {
        var daturi = this.result;
        $(ImageDivArr[StartIndex]).append($('<img/>').load(function () {
          //console.log('image loaded');
          var ResizedImg = memowe.getResizedImgDataURL(this);
          $(this).parents('.cardcont').addClass('hasphoto');
          $(this).parent().css({ 'background-image': 'url(' + ResizedImg + ')' });
          memowe.CardArray.push({ 'id': $(this).parent().attr('data-id'), 'src': ResizedImg, 'cssclass':'', 'visible': true });          
        }).attr('src', daturi));
        ImageDivArr = ImageDivArr.slice(StartIndex+1);
        if (StartIndex != 0) StartIndex = 0;
        if (!ImageDivArr.length) {
          $('#divCards .buttons').removeClass('hidden');
          return false;
        }
      }, false);
      reader.readAsDataURL(f);
    }
    memowe.FilePickerCurrentID = 0;
  },
  getResizedImgDataURL: function (AImage) {
    var c = memowe.ResizeImageCanvas, cx = memowe.ResizeImageCanvasContext, newwidth=memowe.ResizeImageSettings.maxwidth, newheight=memowe.ResizeImageSettings.maxheight;
    c.width = newwidth;
    c.height = newheight;
    var dimensions = memowe.getNewImgDimensions(AImage.width, AImage.height, newwidth, newheight);
    if (memowe.ResizeImageSettings.crop) {
      c.width = dimensions.w;
      c.height = dimensions.h;
      dimensions.x = 0;
      dimensions.y = 0;
    }
    if (memowe.ResizeImageSettings.background !== 'transparent') {
      cx.fillStyle = memowe.ResizeImageSettings.background;
      cx.fillRect(0, 0, newwidth, newheight);
    }
    cx.drawImage(AImage, dimensions.x, dimensions.y, dimensions.w, dimensions.h);
    return c.toDataURL('image/jpeg', memowe.ResizeImageSettings.quality);
  },
  getNewImgDimensions: function (AImgWidth, AImgHeight, AThumbWidth, AThumbHeight) {
    var w = 0, h = 0, x = 0, y = 0,
        widthratio = AImgWidth / AThumbWidth,
        heightratio = AImgHeight / AThumbHeight,
        maxratio = Math.max(widthratio, heightratio);
    if (maxratio > 1) {
      w = AImgWidth / maxratio;
      h = AImgHeight / maxratio;
    } else {
      w = AImgWidth;
      h = AImgHeight;
    }
    x = (AThumbWidth - w) / 2;
    y = (AThumbHeight - h) / 2;
    return { w: w, h: h, x: x, y: y };
  },
  initGame: function() {
    memowe.C1 = null;
    memowe.C2 = null;
    memowe.CheckActive = false;
    memowe.GameActive = false;
    memowe.CancelGame = false;
    memowe.CardsLoaded = 0;
    if (memowe.CCTO != null) clearTimeout(memowe.CCTO);
    if (memowe.TO != null) clearTimeout(memowe.TO);
    var BodyColor = MiscUtils.GetRandomColor_CssString(80, 136);
    if (memowe.GamePaused) {
      memowe.NrCards = memowe.MemoryArray.length;
      $('#time').text(memowe.formatTimeString(memowe.StartSec));
      BodyColor = MiscUtils.getStoredItem(memowe.LSKey_BGColor, BodyColor);
      $(document.body).css('background-color', BodyColor);
    } else {
      memowe.Turns = 0;
      memowe.NrCards = 0;
      memowe.StartSec = 0;
      $('#time').text('00:00');
      
      MiscUtils.storeItem(memowe.LSKey_BGColor, BodyColor)
      $(document.body).css('background-color', BodyColor);

      var CopyCardArray = MiscUtils.Merge([], memowe.CardArray);
      var TempCardArray = MiscUtils.Merge(CopyCardArray, CopyCardArray);
      memowe.MemoryArray = [];
      var randomnumber = 0;
      memowe.NrCards = TempCardArray.length;
      for (i = 0; i < memowe.NrCards; i++) {
        randomnumber = Math.floor(Math.random() * TempCardArray.length);
        memowe.MemoryArray.push(TempCardArray[randomnumber]);
        TempCardArray.splice(randomnumber, 1);
      }
    }
    $('#turns').text(memowe.Turns);
    $('#cards').html('').removeClass(); //remove previous cards

    var MCard, CssOA;
    $.each(memowe.MemoryArray, function (i, item) {
      if (memowe.SourceType == memowe.ST_Symbols) {
        if (!item.bgcolor) item.bgcolor = MiscUtils.GetRandomColor_CssString(80, 136);
        CssOA = { 'background-color': item.bgcolor };
      } else {
        CssOA = { 'background-image': 'url(' + item.src + ')' };
      }
      MCard = $('<div/>').attr('id', 'card' + item.id + '_' + i).addClass('card back ' + item.cssclass).css(CssOA).bind(memowe.Event_Click, function () {
        //if (memowe.GamePaused || $(this).hasClass('empty') || $(this).hasClass('selected')) return;
        if ($(this).hasClass('empty') || $(this).hasClass('selected')) return;
        if (memowe.GamePaused) memowe.GamePaused = false;
        if (memowe.CheckActive) {
          if (memowe.CCTO != null) clearTimeout(memowe.CCTO);
          memowe.checkCards();
        }
        if (!memowe.GameActive) {
          memowe.GameActive = true;
          var Today = new Date();
          var ES = Today.getSeconds();
          var EM = Today.getMinutes();
          var EH = Today.getHours();
          memowe.StartSec = (ES) + (60 * EM) + (3600 * EH) - memowe.StartSec; // Subtract previous loaded secs
          memowe.refreshTimer();
        }
        $(this).removeClass('back').addClass('selected');
        if (memowe.C1 == null) {
          memowe.C1 = { 'id': item.id, 'divid': $(this).attr('id'), 'elem': this };
        } else {
          if ($(this).attr('id') == memowe.C1.divid) return; //click on same card
          memowe.CheckActive = true;
          memowe.C2 = { 'id': item.id, 'divid': $(this).attr('id'), 'elem': this };
          memowe.Turns++;
          $('#turns').text(memowe.Turns);
          memowe.CCTO = setTimeout(memowe.checkCards, 1000);
        }
      });
      if (memowe.GamePaused && !item.visible) MCard.addClass('empty');
      MiscUtils.storeItem(memowe.LSKey_GameSettings, 'nr=' + memowe.NrCards + '&cs=' + memowe.SourceType + '&kw=' + memowe.Keyword);
      if (!memowe.Again) {
        if (memowe.SourceType != memowe.ST_Symbols) {
          MCard.append($('<img/>').load(function () {
            memowe.CardsLoaded++;
            if (memowe.CardsLoaded >= memowe.NrCards) memowe.startGame();
          }).attr('src', item.src));
        } else {
          //MCard.append($('<img/>').attr('src', 'img/transpix.png').addClass('filler'));
        }
      }
      MCard.append($('<img/>').attr('src', 'img/transpix.png').addClass('filler'));
      $('#cards').append(MCard);
    });
    $('#help').hide();
    $('#cards').addClass('c' + memowe.NrCards).append($('<div/>').addClass('clear')).show();
    $('#game, header').show();
    setTimeout(memowe.hideCord, 1000);
    
    if (memowe.Again) memowe.startGame();
  },
  startGame: function() {
    if (memowe.CancelGame) return;
    
    $('#game').show();
    
    MiscUtils.storeItem(memowe.LSKey_GameActive, memowe.GameActive);
  },
  pauseGame: function() {
    memowe.GamePaused = true;
    if (memowe.TO != null) clearTimeout(memowe.TO);
    $.each(memowe.MemoryArray, function (i, item) {
      if ($('#card' + item.id + '_' + i).hasClass('empty')) {
        item.visible = false;
      } else {
        item.visible = true;
      }
    });
    MiscUtils.storeItem(memowe.LSKey_GameActive, memowe.GameActive);
    MiscUtils.storeItem(memowe.LSKey_Cards, JSON.stringify(memowe.CardArray));
    MiscUtils.storeItem(memowe.LSKey_MemoryCards, JSON.stringify(memowe.MemoryArray));
    MiscUtils.storeItem(memowe.LSKey_Turns, memowe.Turns);
    MiscUtils.storeItem(memowe.LSKey_Time, memowe.DiffSec);
  },
  checkCards: function() {
    if (memowe.CCTO != null) clearTimeout(memowe.CCTO);
    if (memowe.C1 == null || memowe.C2 == null) return;
    if (memowe.C1.id == memowe.C2.id) {
      $(memowe.C1.elem).addClass('empty').removeClass('selected');
      $(memowe.C2.elem).addClass('empty').removeClass('selected');
      if ($('.card.empty').length >= memowe.NrCards) {
        memowe.CheckActive = true;
        memowe.GameActive = false;
        MiscUtils.storeItem(memowe.LSKey_GameActive, memowe.GameActive);
        if (memowe.TO != null) clearTimeout(memowe.TO);
        
        $('header').addClass('active');
        $('#rating .stars.front').css({ 'width': '0%' }).hide();
        $('.card.empty').removeClass('empty').removeClass('back').unbind(memowe.Event_Click);
        if (memowe.Turns == memowe.NrImages || memowe.DiffSec<=memowe.NrCards) {
          $('#rating .stars.front').css({'width':'100%'}).show();
        } else if (memowe.Turns == Math.floor(memowe.NrImages + (0.5 * memowe.NrImages))) {
          $('#rating .stars.front').css({ 'width': '33%' }).show();
        }
      }
    } else {
      $(memowe.C1.elem).removeClass('selected').addClass('back');
      $(memowe.C2.elem).removeClass('selected').addClass('back');
    }
    memowe.C1 = memowe.C2 = null;
    memowe.CheckActive = false;
  },
  goBackHome: function () {
    memowe.GamePaused = false;
    memowe.Again = false;
    memowe.CancelGame = true;
    memowe.GameActive = false;
    MiscUtils.storeItem(memowe.LSKey_GameActive, memowe.GameActive);
    if (memowe.CCTO != null) clearTimeout(memowe.CCTO);
    if (memowe.TO != null) clearTimeout(memowe.TO);
    memowe.showHome();
  },
  refreshTimer: function() {
    if (memowe.TO != null) clearTimeout(memowe.TO);
    if (!memowe.GameActive) return;
    var Today = new Date();
    var ES = Today.getSeconds();
    var EM = Today.getMinutes();
    var EH = Today.getHours();
    var EndSec = (ES) + (60 * EM) + (3600 * EH);
    memowe.DiffSec = EndSec - memowe.StartSec;
    $('#time').text(memowe.formatTimeString(memowe.DiffSec));
    memowe.TO = setTimeout(memowe.refreshTimer, 1000);
  },
  formatTimeString: function(ASecs) {
    var Hours = Math.floor(ASecs / 3600);
    var Mins = Math.floor((ASecs / 3600 - Hours) * 60);
    var Secs = Math.round((((ASecs / 3600 - Hours) * 60) - Mins) * 60);
    var TimeStr = '';
    if (Hours > 0) {
      if (Hours < 10) TimeStr = '0';
      TimeStr = +Hours;
    }
    if (TimeStr != '') TimeStr += ':';
    if (Mins < 10) TimeStr += '0';
    TimeStr += Mins;
    TimeStr += ':';
    if (Secs < 10) TimeStr += '0';
    TimeStr += Secs;
    return TimeStr;
  },
  getPicture: function (AUseGallery) {
    if (memowe.AppType == memowe.AT_Android) {
      $('#divStartUp, #divPictures').hide();
      memowe.SourceType = memowe.ST_Local;
      //console.log('getpicture start (1)');
      var CamSourceType = Camera.PictureSourceType.CAMERA;
      if (AUseGallery) CamSourceType = Camera.PictureSourceType.PHOTOLIBRARY;
      //console.log('getpicture (2)');
      navigator.camera.getPicture(function (AImageURI) {
        //Success
        //console.log('getpicture success (3)');
        memowe.CardArray.push({ 'id': memowe.CardArray.length + 1, 'src': AImageURI, 'cssclass':'', 'visible': true });
        //console.log('getpicture success (3b), AImageURI=' + AImageURI);
        if (memowe.CardArray.length < memowe.NrImages) {
          $('#divPictures').show();
          var RandomNr = Math.floor(Math.random() * (memowe.MotivationTexts.length - 1));
          $('#divPictures .motivate').text(memowe.MotivationTexts[RandomNr]);
          $('#divPictures .picturecontainer').show().append($('<div/>').addClass('pic').css('background-image', 'url(' + AImageURI + ')'));
          //GetCameraPicture();
        } else {
          memowe.checkResize();
          memowe.HelpMenuActive = false;
          memowe.click_Play();
        }
      }, function () {
        //console.log('getpicture fail (4)');
        //Fail, revert to symbols
        memowe.NrImages = 4;
        memowe.checkResize();
        memowe.getSymbols();
      }, {
        quality: 50,
        sourceType: CamSourceType,
        destinationType: Camera.DestinationType.FILE_URI
      });
      //console.log('getpicture end (5)');
    } else {
      $('#inpFiles').click();
    }
  },
  getSymbols: function() {
    memowe.HelpMenuActive = false;
    memowe.SourceType = memowe.ST_Symbols;
    memowe.CardArray = memowe.StaticCardSymbols.slice(0, memowe.NrImages);
    $('#cards').attr('class', '').addClass('c' + memowe.NrImages);
    memowe.initGame();
  },
  checkCardArray: function() {
    if (memowe.CardArray.length == memowe.NrImages) {
      memowe.initGame();
    } else {
      if (memowe.CardArray.length < 4) { //minimum nr of cards
        //display error?
        memowe.goBackHome();
      } else {
        if (memowe.CardArray.length > 4) memowe.CardArray = memowe.CardArray.slice(0, 4);
        memowe.initGame();
      }
    }
  },
  getSourceTypeName: function () {
    switch (memowe.SourceType) {
      case memowe.ST_Flickr: return 'Flickr';
      case memowe.ST_Picasa: return 'Picasa';
      default: return '';
    }
  },
  click_NrCards: function(AThis) {
    $('.nrcards label.radio').removeClass('checked');
    $(AThis).addClass('checked');
  },
  click_CardSource: function(AThis) {
    $('.cardsource label.radio').removeClass('checked');
    $(AThis).addClass('checked');
    var CurrentSourceType = $('#' + $(AThis).attr('for')).val();
    switch (CurrentSourceType) {
      case memowe.ST_Flickr:
      case memowe.ST_Picasa:
        $('#fsKeyword').show();
        break;
      case memowe.ST_Static:
        $('#fsKeyword').hide();
        break;
    }
  },
  click_Play: function () {
    memowe.preInitGame();
    return false;
  },
  click_Continue: function() {
    memowe.GamePaused = false;
    $('#pause').hide();
    $('#game .footer').show();
  },
  click_Again: function() {
    memowe.Again = true;
    $('header').removeClass('active');
    memowe.initGame();
  },
  click_Next: function() {
    $('header').removeClass('active').hide();
    $('#game, #cards').hide();
    $('#divCards .buttons').addClass('hidden');
    $(document.body).css('background-color', '#fff');
    memowe.hideCord(true);
    memowe.CardArray = [];
    memowe.click_Play();
  },
  click_Cord: function() {
    if ($('header').hasClass('active')) {
      $('header').removeClass('active');
    } else {
      $('header').addClass('active');
    }
    return false;
  },
  click_Back: function () { memowe.goBackHome(); }
};