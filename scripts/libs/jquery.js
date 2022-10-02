//topへ戻るボタン
jQuery(function () {
  let appear = false;
  let pagetop = $("#page_top,#page-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      //100pxスクロールしたら
      if (appear == false) {
        appear = true;
        pagetop.stop().animate(
          {
            bottom: "0",
          },
          500
        ); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate(
          {
            bottom: "-50px", //下から-50pxの位置に
          },
          300
        ); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
  $(".glowAnime").each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("glow");
    } else {
      $(this).removeClass("glow");
    }
  });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  GlowAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  //spanタグを追加する
  var element = $(".glowAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split("").forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox +=
            '<span style="animation-delay:.' + i + 's;">' + t + "</span>";
        } else {
          var n = i / 10;
          textbox +=
            '<span style="animation-delay:' + n + 's;">' + t + "</span>";
        }
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  GlowAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//ページ内リンクの位置調整
$(function () {
  var headerHight = 20; //ヘッダーの高さを指定しheaderHightに代入
  $('a[href^="#"]').click(function () {
    //アンカーリンクをクリックでイベント処理
    var href = $(this).attr("href"); //アンカーリンクの属性を取得
    var target = $(href == "#" || href == "" ? "html" : href); //hrefの値が"#"または""だった場合"html"が、それ以外の場合はhrefをtargetに代入
    var position = target.offset().top - headerHight; //画面上部からターゲット要素までの距離 - ヘッダー高さをpositionに代入
    $("html, body").animate({ scrollTop: position }, 500, "swing"); // 取得したpositionの位置まで0.5秒でゆっくり移動
    return false; //clickイベント実行後にaタグのhrefリンクを打ち消す
  });
});
