// ==UserScript==
// @name         Shadowlog Translation
// @namespace    https://github.com/zeluqa/
// @version      0.2
// @description  Shadowlog english translation userscript
// @author       zeluqa
// @match        *://shadowlog.com/mypage/*
// @match        *://shadowlog.com/trend/*
// @match        *://shadowlog.com/user/*
// @grant        GM_addStyle
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
        '編集':'Edit',
        '勝敗':'Win',
        'ターン数表示':'Show turns',
        '省略している項目を開く':'Show omitted details',
        '常に｢省略している項目｣を開いた状態にしておく':'Show omitted details by default',
        //'対戦で記録しておきたい事項をメモできます。(最大200文字)':'Note about the match (Max. 200 char)',

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
        'ログイン画面':'Log In Screen',
        'OpenIDでログイン':'Log In Using OpenID',
        'Twitterアカウント':'Twitter Account',
        'Facebookアカウント':'Facebook Account',
        'Googleアカウント':'Google Account',
        'でログイン':'Log In',
        'パスワードを忘れてしまった..':'Forgot Password',
    };
    var words_register = {
        'このサイトのサービスを利用するためには、簡単なユーザー登録を行って頂く必要があります。':'Please create an account to use the services provided by this site.',
        '会員登録にかかる費用は全て無料です。':'You can register an account for free.',
        'ユーザー新規登録':'User Registration',
        '登録したいユーザー名':'Username',
        '登録したいメールアドレス':'Email Address',
        'OpenIDでアカウント登録':'Sign Up Using OpenID',
        'で登録する':'Sign Up',
    };
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
        'パスワード':'Password',

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
    for(key in words_basic) words[key] = words_basic[key];

    function translate() {
        //alert(typeof(window.location.href));
        var regexs = [], replacements = [],
            tagsWhitelist = ['PRE', 'BLOCKQUOTE', 'CODE', 'INPUT', 'BUTTON', 'TEXTAREA'],
            rIsRegexp = /^\/(.+)\/([gim]+)?$/,
            word, text, texts, i, userRegexp;

        // prepareRegex by JoeSimmons
        // used to take a string and ready it for use in new RegExp()
        function prepareRegex(string) {
            return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g, '\\$1');
        }

        // function to decide whether a parent tag will have its text replaced or not
        function isTagOk(tag) {
            return tagsWhitelist.indexOf(tag) === -1;
        }

        delete words['']; // so the user can add each entry ending with a comma,
        // I put an extra empty key/value pair in the object.
        // so we need to remove it before continuing

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

        //Text replacement
        texts = document.evaluate('//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
        for (i = 0; text = texts.snapshotItem(i); i += 1) {
            if ( isTagOk(text.parentNode.tagName) ) {
                regexs.forEach(function (value, index) {
                    text.data = text.data.replace( value, replacements[index] );
                });
            }
        }

        //HTML attribute replacement
        //Log in button
        if (window.location.href.match("user/login")) (document.querySelector("table.form input[type=submit]")).setAttribute("value", "Log In");
        //Sign up button
        if (window.location.href.match("user/signup")) (document.querySelector("table.form input[type=submit]")).setAttribute("value", "Sign Up");
        //Change placeholder text in /mypage/
        if (document.querySelector("#date1")) (document.querySelector("#date1")).setAttribute("placeholder", "From");
        if (document.querySelector("#date2")) (document.querySelector("#date2")).setAttribute("placeholder", "To");
        //Submit button text in /mypage/
        if (document.querySelector(".submBtn")) (document.querySelector(".submBtn")).setAttribute("value", "Search");
        //Memo in /mypage/add/
        if (document.querySelector(".memo")) (document.querySelector(".memo")).setAttribute("placeholder", "Note about the match (Max. 200 char)");
    }

    window.addEventListener("load", function(){translate()}, false);
    document.addEventListener('change', function(){translate()}, false);

})();