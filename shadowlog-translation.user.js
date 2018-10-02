// ==UserScript==
// @name         Shadowlog Translation
// @namespace    https://github.com/zeluqa/
// @version      0.4
// @description  Shadowlog english translation userscript
// @author       zeluqa
// @match        *://shadowlog.com/*
// @grant        GM_addStyle
// @run-at       document-end
// ==/UserScript==

GM_addStyle ( `
    *{
        letter-spacing: 0px;
    }
    table.form .format-column input[type=radio] + label{
        font-size: 9px;
        position:relative;
        top: -3px;
        margin-right: 5px;
    }
    table.form textarea{
         font-family: Hiragino Kaku Gothic ProN;
    }
    table.search label{
         font-size: 10px !important;
    }
    table.search input[type=checkbox i]{
         position:relative !important;
         top: 2px !important;
    }
` );


(function() {
    'use strict';
    /* Prototype for chart data translation
    // This function is going to be stringified, and injected in the page
    var code = function() {
        // window is identical to the page's window, since this script is injected
        Object.defineProperty(window, 'pieData', {
            value: [{"value":24.8,"color":"#6C7A89","label":"Blood"},{"value":21.1,"color":"#a979ad","label":"Shadow"},{"value":12,"color":"#3A539B","label":"Rune"},{"value":11.4,"color":"#aadbf2","label":"Sword"},{"value":10.3,"color":"#D2527F","label":"Haven"},{"value":9.7,"color":"#cd5638","label":"Dragon"},{"value":7.9,"color":"#7fc170","label":"Forest"},{"value":3,"color":"#0077C0","label":"Portal"}]
        });
    };
    var script = document.createElement('script');
    script.textContent = '(' + code + ')()';
    (document.head||document.documentElement).appendChild(script);
    script.parentNode.removeChild(script);*/

    var words_overlay = {
        '先週の対戦解析ログ':'Last Week\'s Match Data',
        '配信まとめ':'Broadcasters',
        'サイトの使い方':'Site Usage',
        'ログアウト':'Log Out',
        'マイページ':'My Page',
    };
    var words_trends = {
        /* Use \\* to match actual asterisks instead of using it as a wildcard
        Syntax: 'Search word' : 'Replace word',
        '/\\bD\\b/g' : '[D]',
        More complex words/text should be on top to prevent incomplete text replacement*/

        //Words exclusive in https://shadowlog.com/trend/
        '全ランク帯':'All Ranks',
        '総合 対戦解析ログ':'All Class Match Data',
        '総合 デッキ別の勝率解析':'All Class Deck Archetypes Win Rate',
        '算出に使った対戦数':'Total Recorded Number of Matches',
        '環境での各リーダーの使用割合':'Class Play Rate Comparison',
        '環境での各リーダーの勝率比較':'Class Win Rate Comparison',
        '使用されたリーダー':'Class Used',
        '使用数順':'Order by Matches',
        '勝利数順':'Order by Victories',
        '勝率順':'Order by Win Rate',
        '使用数':'Matches',
        '勝利数':'Victories',
        '先攻勝率':'1st Win Rate',
        '後攻勝率':'2nd Win Rate',
        '使用デッキタイプ':'Used Deck Archetype',
        'ランクマッチ':'Ranked',
        '2Pick対戦':'Take Two',
        '対戦解析ログ':'Match Data'
    };
    var words_mypage = {
        //Words exclusive in https://shadowlog.com/mypage/add
        '新しい戦績を追加':'Add New Record',
        'マイデッキ管理':'Manage Deck',
        'プロフィール編集':'Edit Profile',
        'ターン数表示':'Show turns',
        '省略している項目を開く':'Show omitted details',
        '常に｢省略している項目｣を開いた状態にしておく':'Show omitted details by default',
        '対戦で記録しておきたい事項をメモできます。(最大200文字)':'Note about the match (Max. 200 char)',
        '戦績の追加・編集に失敗しました。':'Failed to add add/edit your entry.',
        '相手のリーダーを正しく選んで下さい。':'Please select enemy class.',
        '自分のリーダーを正しく選んで下さい。':'Please select your class.',
        '先攻・後攻を正しく選んで下さい。':'Please select play order.',

        //Words exclusive in https://shadowlog.com/mypage/
        'あなたの戦績一覧':'Match Record Summary',
        '使用リーダー解析':'My Class Analysis',
        '対戦相手の解析':'Enemy Analysis',
        'あなたの勝率推移':'My Win Rate Analysis',
        'デッキの勝率解析':'Deck Win Rate Analysis',
        '2Pickの戦績':'Take Two Records',
        '新しく戦績を記録する':'Add a new match record',
        '記録した戦績を修正する':'Edit past match record',
        'この戦績を削除する':'Delete this entry',
        '自分のリーダー':'My Class',
        '相手のリーダー':'Enemy Class',
        '自分のデッキタイプを細かく指定':'My Deck Archetype',
        '相手のデッキタイプを細かく指定':'Enemy Deck Archetype',
        'この日から..':'From',
        'この日まで..':'To',
        '絞り込む':'Search',
        '手番':'Order',
        '対戦形式':'Format',
        'アンリミテッド':'Unlimited',
        'ローテーション':'Rotation',
        'AAランク':'AA Rank',
        'Aランク':'A Rank',
        'Bランク':'B Rank',
        'C以下':'C or Lower',
        'フリー':'Private',
        '2Pick':'Take Two',
        'ターン数':'Number of Turns',
        '対戦日時':'Date of Match',
        'メモ':'Note',
        'デッキタイプ':'Deck Archetype',
        //'「十禍絶傑」に対応しました。随時新デッキタイプ追加していきます。':'Omen of the Ten',
    };
    var words_archetypes = {
        //Forest Archetypes
        'エルフ全般':'Forest in General',
        'ミッドレンジエルフ':'Midrange Forest',
        'アグロエルフ':'Aggro Forest',
        'OTKエルフ':'OTK Forest',
        'テンポエルフ':'Tempo Forest',
        'コントロールエルフ':'Control Forest',
        'ニュートラルエルフ':'Neutral Forest',
        '冥府エルフ':'Path to Purgatory Forest',
        '白狼エルフ':'White Wolf Forest',
        '薔薇エルフ':'Thorn Burst Forest',
        '白銀エルフ':'Silver Bolt Forest',

        //Sword Archetypes
        'ロイヤル全般':'Sword in General',
        'ミッドレンジロイヤル':'Midrange Sword',
        'フェイスロイヤル':'Face Sword',
        'アグロロイヤル':'Aggro Sword',
        'コントロールロイヤル':'Control Sword',
        'ニュートラルロイヤル':'Neutral Sword',
        '指揮官ロイヤル':'Commander Sword',
        'カエルロイヤル':'Frog Sword',
        '御旗ロイヤル':'Royal Banner Sword',
        '潜伏ロイヤル':'Ambush Sword',
        '冥府ロイヤル':'Path to Purgatory Sword',
        '援護射撃ロイヤル':'Support Cannon Sword',

        //Dragon Archetypes
        'ドラゴン全般':'Dragon in General',
        '疾走ランプドラゴン':'Storm Ramp Dragon',
        'ランプドラゴン':'Ramp Dragon',
        'リントヴルムドラゴン':'Lindworm Dragon',
        'ジャバウォックドラゴ*':'Jabberwock Dragon',
        'ミッドレンジドラゴン':'Midrange Dragon',
        '原初ドラゴン':'Prime Dragon Keeper Dragon',
        'ニュートラルドラゴン':'Neutral Dragon',
        '竜爪ドラゴン':'Dragonclaw Pendant Dragon',
        'OTKドラゴン':'OTK Dragon',
        'ディスカードドラゴン':'Discard Dragon',
        'フェイスドラゴン':'Face Dragon',
        'サタンドラゴン':'Prince of Darkness Dragon',
        '疾走ドラゴン':'Storm Dragon',
        '庭園ドラゴン':'Phoenix Roost Dragon',

        //Shadow Archetypes
        'ネクロマンサー全般':'Shadow in General',
        'リアニメイトネクロ':'Reanimate Shadow',
        'ミッドレンジネクロ':'Midrange Shadow',
        'アグロネクロ':'Aggro Shadow',
        '骸ネクロ':'Atomy Shadow',
        'ネフティスネクロ':'Nephthys Shadow',
        'コントロールネクロ':'Control Shadow',
        'ラストワードネクロ':'Last Words Shadow',
        'ニュートラルネクロ':'Neutral Shadow',
        'タイラントネクロ':'Tyrant Shadow',
        '冥府ネクロ':'Path to Purgatory Shadow',

        //Rune Archetypes
        'ウィッチ全般':'Rune in General',
        'ドロシー超越ウィッチ':'Daria DShift Rune',
        '暗黒ウィッチ':'Abyss Summoner Rune',
        'マナリアウィッチ':'Mysteria Rune',
        'ギガントキマイラウィ*':'Giant Chimera Rune',
        '超越ウィッチ':'Dimension Shift Rune',
        '秘術ウィッチ':'Dirt Rune',
        'ドロシーウィッチ':'Daria Rune',
        'ニュートラルウィッチ':'Neutral Rune',
        'アグロウィッチ':'Aggro Rune',
        '冥府ウィッチ':'Path to Purgatory Rune',
        '魔導ウィッチ':'Hulking Giant Rune',

        //Blood Archetypes
        'ヴァンパイア全般':'Blood in General',
        'ミッドレンジヴァンプ':'Midrange Blood',
        'コントロールヴァンプ':'Control Blood',
        '蝙蝠ヴァンパイア':'Darkfeast Bat Blood',
        'ヨルムンガンドヴァン*':'Jormungand Blood',
        'アグロヴァンパイア':'Aggro Blood',
        '復讐ヴァンパイア':'Vengeance Blood',
        'OTKヴァンパイア':'OTK Blood',
        'ニュートラルヴァンプ':'Neutral Blood',
        '疾走ヴァンパイア':'Storm Blood',
        '冥府ヴァンパイア':'Path to Purgatory Blood',

        //Haven Archetypes
        'ビショップ全般':'Haven in General',
        'エイラセラフビショッ*':'Elana Seraph Haven',
        '天狐ビショップ':'Tenko Haven',
        '聖獅子ビショップ':'Holy Lion Haven',
        '疾走ビショップ':'Storm Haven',
        'イージスビショップ':'Aegis Haven',
        '教会ビショップ':'Summit Temple Haven',
        'ニュートラルビショッ*':'Neutral Haven',
        'コントロールビショッ*':'Control Haven',
        '陽光ビショップ':'Guardian Sun Haven',
        '燭台ビショップ':'Candelabra Haven',
        'セラフビショップ':'Seraph Haven',
        'エイラビショップ':'Elana Haven',
        'カウントビショップ':'Countdown Amulet Haven',
        '冥府ビショップ':'Path to Purgatory Haven',
        'レリアビショップ':'Laelia Haven',
        '聖杯ビショップ':'Tarnished Grail Haven',

        //Portal Archetype
        'ネメシス全般':'Portal in General',
        '操り人形ネメシス':'Puppet Portal',
        'ミッドレンジネメシス':'Midrange Portal',
        'クロノスネメシス':'Chronos Portal',
        'アーティファクトネメ*':'Artifact Portal',
        'アグロネメシス':'Aggro Portal',
        'コントロールネメシス':'Control Portal',
    };
    var words_classes = {
        //Class Names
        'エルフ':'Forest',
        'ロイヤル':'Sword',
        'ドラゴン':'Dragon',
        'ネクロマンサー':'Shadow',
        'ネクロ':'Shadow',
        'ウィッチ':'Rune',
        'ヴァンパイア':'Blood',
        'ヴァンプ':'Blood',
        'ビショップ':'Haven',
        'ネメシス':'Portal',
        '総合':'All Class',
    };
    var words_login = {
        'ログイン画面へ':'Log in',
        'ログイン画面':'Log In',
        'ログインに失敗しました。':'Log in failed.',
        '登録メールアドレスでログイン':'Log In',
        'OpenIDでログイン':'Log In Using OpenID',
        'Twitterアカウント':'Twitter Account',
        'Facebookアカウント':'Facebook Account',
        'Googleアカウント':'Google Account',
        'でログイン':'Log In',
        'パスワードを忘れてしまった..':'Forgot Password',
        '変更する':'Reset Password',
        'パスワードリマインダー':'Password Reset',
        'メールアドレスを入力...':'Email Address',
        'ログインパスワードがわからないという方へ':'Log In Password Reset',
        'ユーザー名が一致しません。もう1度正しく入力して下さい。':'Your inputted username is wrong, please try again.',
        '登録したメールアドレスからパスワードの変更を行うことができます。':'You can reset your registered account\'s password.',
        '以下のフォームにメールアドレスを正しく入力して下さい。':'Please enter your email address in the form below.',
        'パスワード変更用URLを送信しました。':'URL to reset your password has been sent to your email address.',
        'メールアドレスへパスワード変更用のURLを記載したメールを送信しました。':'Please check your email address for the URL to reset your password.',
        'メールアドレスもわからない、上手くメールが届かないという方は':'In case of forgotten email address or mail not being sent properly,',
        'お手数ですが':'Please use the',
        'お問い合わせ':'Inqury',
        'へご連絡下さい。':'function to contact us.',
        'パスワードの変更を行います。':'Password will be resetted.',
        '以下の項目を全て入力して下さい。':'Please fill out the form below.',
        'あなたのユーザー名':'Username',
        '新しく設定したいパスワードを入力してください。':'New Password',
        '確認のためパスワードをもう1度入力してください。':'New Password Confirmation',
        'パスワードは正しく変更されました。':'Password is successfully resetted.',
        '変更が失敗してしまう場合は':'When password resetting failed, please use the',
        'からご連絡下さい。':'function to contact us.',
    };
    var words_register = {
        '新規アカウントを登録する':'Sign Up',
        'このサイトのサービスを利用するためには、簡単なユーザー登録を行って頂く必要があります。':'Please create an account to use the services provided by this site.',
        '会員登録にかかる費用は全て無料です。':'You can register an account for free.',
        '登録に失敗しました。':'Registration failed.',
        'は既に登録済みです。':' is already registered.',
        '登録したいユーザー名':'Username',
        '登録したいメールアドレス':'Email Address',
        'OpenIDでアカウント登録':'Sign Up Using OpenID',
        'で登録する':'Sign Up',
        'まだ戦績の記録がありません。':'You don\'t have any match recorded yet.',
        '画面左上の':'Use the',
        'ボタンを押して戦績を追加して下さい。':'button to add matches.',
    };
    var words_main = {
        '新規ユーザー登録':'New User Registration',
    }
    var words_basic = {
        //Collection of words/texts that are used in more than one phrasing
        '先':'1st',
        '後':'2nd',
        'ローテ':'Rotation',
        '勝率':'Win Rate',
        '使用割合':'Play Rate',
        '自分のデッキ':'My Deck',
        '相手のデッキ':'Enemy Deck',
        'ログイン':'Log in',
        'ユーザー登録':'Register',
        'メールアドレス':'Email Address',
        'ユーザー名':'Username',
        'パスワード':'Password',
        'ユーザー新規登録':'User Registration',
        '編集':'Edit',
        '勝敗':'Win',

        '年':'/',
        '月':'/',
        '日':'',
        '時':':',
        '分':'',

        /* Alternative Translation but looks bad
        '年':'Year,',
        '月':'Month,',
        '日':'Date,',
        '時':'Hour,',
        '分':'Minute', */
    };

    var words = {}; //Combined words list
    for(var key in words_overlay) words[key] = words_overlay[key];
    for(key in words_trends) words[key] = words_trends[key];
    for(key in words_mypage) words[key] = words_mypage[key];
    for(key in words_archetypes) words[key] = words_archetypes[key];
    for(key in words_classes) words[key] = words_classes[key];
    for(key in words_login) words[key] = words_login[key];
    for(key in words_register) words[key] = words_register[key];
    for(key in words_main) words[key] = words_main[key];
    for(key in words_basic) words[key] = words_basic[key];

    var regexs = [], replacements = [],
        tagsWhitelist = ['PRE', 'BLOCKQUOTE', 'CODE', 'INPUT', 'BUTTON', 'TEXTAREA'],
        rIsRegexp = /^\/(.+)\/([gim]+)?$/,
        word, text, texts, i, j, len, userRegexp;

    // used to take a string and ready it for use in new RegExp()
    function prepareRegex(string) {
        return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, '\\$1');
    }

    // function to decide whether a parent tag will have its text replaced or not
    function isTagOk(tag) {
        return tagsWhitelist.indexOf(tag) === -1;
    }

    delete words['']; // Delete empty key/value pair

    // convert the 'words' JSON object to an Array
    for (word in words) {
        if ( typeof word === 'string' && words.hasOwnProperty(word) ) {
            userRegexp = word.match(rIsRegexp);

            // add the search/needle/query
            if (userRegexp) {
                regexs.push(
                    new RegExp(userRegexp[1], 'g')
                );
            } else {
                regexs.push(
                    new RegExp(prepareRegex(word).replace(/\\?\*/g, function (fullMatch) {
                        return fullMatch === '\\*' ? '*' : '[^ ]*';
                    }), 'g')
                );
            }

            // add the replacement
            replacements.push( words[word] );
        }
    }

    //Translation method using regexp
    //More flexible but higher complexity
    function translate_regexp() {
        //Text replacement
        texts = document.evaluate('//input|//textarea|//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
        for (i = 0; text = texts.snapshotItem(i); i++) {
            if ( isTagOk(text.parentNode.tagName) ) {
                if(text.tagName) {
                    for (j = 0, len = regexs.length; j < len; j++) {
                        if (text.getAttribute("value")) text.setAttribute("value", text.getAttribute("value").replace(regexs[j], replacements[j]));
                        if (text.getAttribute("placeholder")) text.setAttribute("placeholder", text.getAttribute("placeholder").replace(regexs[j], replacements[j]));
                    }
                } else {
                    for (j = 0, len = regexs.length; j < len; j++) {
                        text.data = text.data.replace( regexs[j], replacements[j] );
                    }
                }
            }
        }
    }

    //Translation method using json key value
    //Less complexity but needs exact string match
    function translate_json() {
        //Text replacement
        texts = document.evaluate('//input|//textarea|//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
        for (i = 0; text = texts.snapshotItem(i); i++) {
            if ( isTagOk(text.parentNode.tagName) ) {
                if(text.tagName) {
                    if(words[text.getAttribute("placeholder")]) text.setAttribute("placeholder", words[text.getAttribute("placeholder")]);
                    if(words[text.getAttribute("value")]) text.setAttribute("value", words[text.getAttribute("value")]);
                } else {
                    if(words[text.data]) text.data = words[text.data];
                }
            }
        }
    }

    //Overlay text for 1st 2nd play order in /mypage/add
    if ((window.location.href).match("/mypage/add")){
        (document.querySelector("label[for=ord1]")).setAttribute("style", "position:relative;");
        (document.querySelector("label[for=ord2]")).setAttribute("style", "position:relative;");
        //Add 1st text overlay
        if (!((document.querySelector("label[for=ord1]").innerHTML).match("h3"))) {
            document.querySelector("label[for=ord1]").innerHTML = document.querySelector("label[for=ord1]").innerHTML + `<h3 style="position: absolute;color: #d8d8d8;left: 28%;bottom: 82%;">1st</h3>`
        }
        //Add 2nd text overlay
        if (!((document.querySelector("label[for=ord2]").innerHTML).match("h3"))) {
            document.querySelector("label[for=ord2]").innerHTML = document.querySelector("label[for=ord2]").innerHTML + `<h3 style="position: absolute;color: #d8d8d8;left: 25%;bottom: 82%;">2nd</h3>`
        }
    }

    window.addEventListener("load", function(){translate_regexp()}, false);
    var form_button = document.querySelector("table.form");
    if (form_button) form_button.addEventListener('change', function(){translate_regexp()}, false); //Handles list change in /mypage/add
})();