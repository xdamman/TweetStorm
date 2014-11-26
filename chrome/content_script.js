if(typeof contentScriptLoaded == "undefined") {
  contentScriptLoaded = true;
  console.log("Initializing TweetStorm extension");

  var svg='<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="30" height="22" viewBox="0 0 600 447" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0,447) scale(0.100000,-0.100000)" fill="#fff" stroke="none"> <path d="M4180 4444 c35 -38 85 -58 250 -99 509 -126 898 -340 1005 -551 26 -51 30 -70 30 -139 0 -119 -37 -189 -169 -319 l-101 -98 -7 38 c-30 162 -58 216 -162 320 -125 125 -273 201 -523 269 -105 29 -394 85 -436 85 -21 0 39 -52 108 -94 39 -24 138 -78 220 -121 328 -170 424 -263 401 -389 -16 -84 -138 -206 -284 -283 -43 -24 -82 -43 -85 -43 -3 0 -5 35 -4 79 0 66 -4 87 -27 134 -65 133 -217 222 -401 234 -52 3 -95 3 -95 0 0 -3 40 -35 88 -70 199 -146 228 -247 105 -365 -121 -115 -369 -198 -733 -244 -156 -19 -639 -16 -805 6 -402 53 -627 137 -691 258 -20 39 -17 102 6 149 25 49 84 88 195 129 188 71 211 81 240 105 l30 24 -27 1 c-101 1 -458 -94 -547 -147 -151 -88 -195 -200 -126 -320 13 -24 20 -43 16 -43 -5 0 -44 12 -87 26 -192 62 -347 171 -375 263 -19 63 1 113 71 181 70 68 157 118 382 221 252 115 300 142 281 153 -27 15 -299 -1 -398 -24 -430 -98 -706 -303 -709 -527 -1 -35 -3 -63 -5 -63 -22 0 -149 86 -196 134 -77 77 -106 137 -106 221 -1 162 147 306 467 452 227 103 645 212 947 248 57 6 57 7 57 40 l0 34 -72 -5 c-567 -38 -1069 -156 -1483 -349 -194 -90 -331 -201 -391 -316 -24 -45 -28 -66 -28 -129 0 -93 30 -157 113 -240 119 -119 290 -209 551 -289 90 -28 164 -52 165 -53 1 -2 15 -23 30 -48 38 -60 135 -155 218 -213 161 -111 316 -181 653 -292 873 -289 1743 -422 2449 -375 319 22 731 79 902 125 249 67 412 184 490 352 18 39 33 74 33 77 0 3 -37 -11 -82 -31 -214 -93 -539 -191 -788 -237 -296 -54 -550 -76 -878 -76 -671 1 -1364 119 -2055 351 -236 79 -308 108 -459 186 -149 76 -182 98 -128 83 150 -42 609 -117 890 -144 535 -53 1401 -53 1895 0 510 54 1011 172 1397 330 226 92 330 155 444 268 86 86 123 146 144 235 65 278 -245 553 -853 756 -286 95 -524 144 -932 191 l-50 5 25 -27z"/> <path d="M2765 3209 c-174 -16 -453 -74 -479 -99 -13 -13 38 -93 80 -125 125 -95 389 -139 709 -116 193 14 425 48 495 72 63 21 120 75 120 113 0 35 -59 82 -133 105 -161 49 -539 73 -792 50z"/> <path d="M5656 3075 c-273 -176 -618 -318 -996 -409 -529 -128 -1445 -196 -1880 -141 -258 32 -502 26 -605 -16 -27 -11 -17 -14 115 -30 627 -80 1236 -113 1645 -90 720 40 1270 163 1543 345 83 55 178 153 219 227 32 57 67 153 61 169 -2 5 -48 -20 -102 -55z"/> <path d="M1220 2514 c0 -14 115 -146 176 -204 384 -359 1021 -579 1894 -654 473 -41 1305 -48 1507 -12 240 42 397 128 467 255 24 46 60 160 52 168 -2 3 -40 -14 -84 -36 -210 -106 -467 -178 -774 -218 -166 -21 -622 -24 -808 -4 -446 46 -887 139 -1349 283 -265 82 -291 93 -571 227 -246 119 -346 161 -443 187 -59 16 -67 17 -67 8z"/> <path d="M2225 1641 c51 -53 204 -156 314 -211 251 -125 565 -206 891 -230 360 -26 700 41 911 179 42 28 82 57 89 66 15 19 40 19 -465 -11 -542 -32 -703 -14 -1155 126 -257 80 -391 110 -515 117 l-110 6 40 -42z"/> <path d="M2310 1368 c1 -73 99 -191 239 -287 144 -99 251 -147 412 -186 355 -86 746 -40 981 114 143 94 159 87 -234 94 -189 3 -395 11 -458 17 -339 32 -609 104 -848 224 -88 44 -92 45 -92 24z"/> <path d="M2340 965 c0 -53 25 -104 78 -158 54 -56 168 -136 251 -177 291 -144 695 -97 889 103 l44 45 -109 6 c-59 3 -189 8 -288 11 -99 3 -223 10 -275 16 -184 20 -375 77 -518 155 -34 19 -65 34 -67 34 -3 0 -5 -16 -5 -35z"/> <path d="M2250 538 c0 -5 14 -39 31 -74 65 -137 217 -305 376 -414 l72 -51 7 38 c13 74 62 146 170 254 58 57 114 116 125 130 l19 27 -208 5 c-216 5 -296 16 -499 71 -55 14 -93 20 -93 14z"/> </g> </svg>'; 

  var $tweetBox = document.querySelector('.tweet-box');
  var $tweetCounter = document.querySelector('.tweet-counter');
  var $tweetBtn = document.querySelector('.tweet-action.tweet-btn');
  var $form = document.querySelector('form.tweet-form');
  var $stormBtn = document.createElement('button');
  $stormBtn.innerHTML = '<span class="button-text tweeting-text">'+svg+'</span>';
  $stormBtn.className = 'btn primary-btn';
  $stormBtn.style.display = 'none';
  $stormBtn.style.height = '39px';
  $stormBtn.style.float = 'right';
  $stormBtn.style.marginLeft = '2px';

  $tweetBtn.parentNode.appendChild($stormBtn);


  var counterUpdated = function(e) {
    var value = $tweetCounter.textContent;
    $stormBtn.style.display = (value < 0) ? 'inline-block' : 'none';
  };

  getLastTweetId = function() {
    return document.querySelector('li.stream-item .tweet').dataset.itemId;
  };

  setTweetContent = function(content) {
    if(!content || content.length == 0) {
      $form.classList.add('condensed');
      $form.classList.remove('tweeting');
      content = $form.dataset.condensedText;
    }
    document.querySelector('.tweet-box.rich-editor > div').innerHTML = content; 
  }

  sendTweet = function(e) {
    $form.classList.add('tweeting');
    var tweets = splitTweet();

    console.log("tweets: ", tweets);

    sendNextTweet(tweets, 0, '', function() {
      setTweetContent('');
    });

    return false;

  };

  sendNextTweet = function(tweets, index, previousId, cb) {
    cb = cb || function() {};
    previousId = previousId || '';

    if(index >= tweets.length) return cb();

    sendTweetRequest(tweets[index], previousId, function(err, json) {
      if(json && json.tweet_id) {
        sendNextTweet(tweets, index+1,json.tweet_id, cb);
      }
    });

  };

  sendTweetRequest = function(status, in_reply_to_status_id, cb) {
    var token = document.querySelector('input[name=authenticity_token]').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST','/i/tweet/create',true);
    xhr.setRequestHeader('accept','application/json, text/javascript, */*; q=0.01');
    xhr.setRequestHeader('content-type','application/x-www-form-urlencoded; charset=UTF-8');
    var data = "authenticity_token="+token+"&in_reply_to_status_id="+in_reply_to_status_id+"&place_id=&status="+encodeURIComponent(status)+"&tagged_users=";
    xhr.addEventListener('load', function(e) {
      if(this.status === 200) {
        var json = JSON.parse(this.responseText);
        cb(null, json); 
      }
    }); 
    xhr.send(data);
  }

  openReplyInput = function(tweetid, content) {
    document.querySelector('li.stream-item .ProfileTweet-action--reply').click();
    document.querySelector('li.stream-item form').classList.remove('condensed');
    document.querySelector('li.stream-item .tweet-box.rich-editor > div').innerHTML=content;
    var $btn = document.querySelector('li.stream-item .tweet-btn');
    $btn.click();
  };

  isUrl = function(str) {
    return (typeof str=='string' && str.match(/.+\.[a-z]{2,}/i));
  };

  splitTweet = function() {

    var tweetContent = $tweetBox.querySelector('.tweet-content textarea').value;

    var tweets = [];

    if(tweetContent.length <= 140) {
      tweets[0] = tweetContent;
      return tweets;
    }

    var words = tweetContent.split(' ');
    while(words.length > 0) {
      var tweet = '';
      var tweetLength = 0;
      var nextWordLength = isUrl(words[0]) ? 22 : words[0].length +1;
      while(words.length > 0 && (tweetLength + nextWordLength) <= 140) {
        tweet += ' '+words[0]
        tweetLength += nextWordLength;
        words = words.slice(1);
        if(words.length > 0)
          nextWordLength = isUrl(words[0]) ? 22 : words[0].length +1;
      }
      tweets.push(tweet.substr(1));
    }

    return tweets;

  };

  $stormBtn.addEventListener('click', sendTweet, true);
  $tweetBox.addEventListener('keyup', counterUpdated, true);
}
