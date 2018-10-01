// ==UserScript==
// @name         Shadowlog Translation
// @namespace    https://github.com/zeluqa/
// @version      0.1
// @description  Shadowlog english translation userscript
// @author       zeluqa
// @match        *://shadowlog.com/mypage/*
// @match        *://shadowlog.com/trend/*
// @grant        GM_addStyle
// ==/UserScript==

GM_addStyle ( "                                           \
    table.form .format-column input[type=radio] + label{  \
        font-size: 8px;                                   \
        position:relative;                                \
        top: -3px;                                        \
        margin-right: 5px;                                \
    }                                                     \
    table.form textarea{                                  \
         font-family: Hiragino Kaku Gothic ProN;          \
    }                                                     \
    .pie-analyze-list tr th{                              \
        font-size: 10px;                                  \
        letter-spacing: 1px;                              \
    }                                                     \
    .pie-analyze-list span{                               \
        letter-spacing: 1px;                              \
    }                                                     \
    .pie-analyze-list a{                                  \
        letter-spacing: 1px;                              \
    }                                                     \
    table.list tr td{                                     \
        letter-spacing: 0px;                              \
    }                                                     \
    table.list th{                                        \
        letter-spacing: 0px;                              \
    }                                                     \
    table.form th{                                        \
         letter-spacing: 0px;                             \
    }                                                     \
    .deck-type-select{                                    \
         letter-spacing: 1px;                             \
    }                                                     \
    .battle-report h2{                                    \
         letter-spacing: 1px;                             \
    }                                                     \
    .format-list li.sel a{                                \
         letter-spacing: 1px;                             \
    }                                                     \
    .tale-sort-link a{                                    \
         letter-spacing: 0px;                             \
    }                                                     \
    table.search th{                                      \
         letter-spacing: 1px;                             \
    }                                                     \
    table.search label{                                   \
         font-size: 10px !important;                      \
    }                                                     \
    table.search input[type=checkbox i]{                  \
         position:relative !important;                    \
         top: 2px !important;                             \
    }                                                     \
" );


(function() {
    'use strict';
    /*
    NOTE:
        You can use \\* to match actual asterisks instead of using it as a wildcard!
        The examples below show a wildcard in use and a regular asterisk replacement.
    */
    var words = {
        /* Syntax: 'Search word' : 'Replace word',
        'your a' : 'you\'re a',
        'imo' : 'in my opinion',
        'im\\*o' : 'matching an asterisk, not a wildcard',
        '/\\bD\\b/g' : '[D]', */

        '全ランク帯':'All Ranks',
        '総合 対戦解析ログ':'All Class Match Data',
        '総合 デッキ別の勝率解析':'All Class Deck Archetypes Win Rate',
        '算出に使った対戦数':'Total Recorded Number of Matches',
        '使用されたリーダー':'Leader Used',
        '使用数順':'Order by Matches',
        '勝利数順':'Order by Victories',
        '勝率順':'Order by Win Rate',
        '使用割合':'Play Rate',
        '使用数':'Matches',
        '勝利数':'Victories',
        '先攻勝率':'1st Win Rate',
        '後攻勝率':'2nd Win Rate',
        '勝率':'Win Rate',
        '使用デッキタイプ':'Used Deck Archetype',
        'ランクマッチ':'Ranked',
        '2Pick対戦':'Take Two',

        '新しく戦績を記録する':'Add a new match record',
        '記録した戦績を修正する':'Edit past match record',
        'この戦績を削除する':'Delete this entry',
        '自分のリーダー':'My Leader',
        '相手のリーダー':'Enemy Leader',
        '自分のデッキタイプを細かく指定':'My Deck Archetype',
        '相手のデッキタイプを細かく指定':'Enemy Deck Archetype',
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
        '省略している項目を開く':'Show omitted details',
        'マイページ':'My Page',
        '常に｢省略している項目｣を開いた状態にしておく':'Show omitted details by default',
        '対戦で記録しておきたい事項をメモできます。(最大200文字)':'Note about the match (Max. 200 char)',

        '新しい戦績を追加':'Add New Record',
        'マイデッキ管理':'Manage Deck',
        'プロフィール編集':'Edit Profile',
        '編集':'Edit',
        '勝敗':'Win',
        'ターン数表示':'Show turns',
        '自分のデッキ':'My Deck',
        '相手のデッキ':'Enemy Deck',
        '絞り込む':'Search',


        /*
        '年':'Year',
        '月':'Month',
        '日':'Date',
        '時':'Hour',
        '分':'Minute',
        */

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

        '先':'1st',
        '後':'2nd',
        'ローテ':'Rotation',
    };

    function translate() {
        //alert('changed');
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

        // do the replacement
        texts = document.evaluate('//body//text()[ normalize-space(.) != "" ]', document, null, 6, null);
        for (i = 0; text = texts.snapshotItem(i); i += 1) {
            if ( isTagOk(text.parentNode.tagName) ) {
                regexs.forEach(function (value, index) {
                    text.data = text.data.replace( value, replacements[index] );
                });
            }
        }
    }

    window.addEventListener("load", function(){translate()}, false);
    document.addEventListener('change', function(){translate()}, false);


})();