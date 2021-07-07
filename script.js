$(document).ready(function() {



  // googleform

  let $form = $( '#js-form' )
  $form.submit(function(e) { 
    $.ajax({ 
      url: $form.attr('action'), 
      data: $form.serialize(), 
      type: "POST", 
      dataType: "xml", 
      statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success').slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error').slideDown()
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認

  let $submit = $( '#js-submit' )
  $( '#js-form input, #js-form textarea' ).on( 'change', function(){
    if(
      $( '#js-form input[type="text]' ).val() !== "" &&
      $( '#js-form input[name="entry.1526430659"]' ).prop( 'checked' ) === true
    ) {
      //全て入力された時
      $submit.prop( 'disabled', false )
      $submit.addClass( '-active' )
    } else {
      //入力されていない時
      $submit.prop( 'disabled', true )
      $submit.removeClass( '-active' )
    }
  })
  // disabledが付いている時は、focus、タブ移動が効かない。

    // smoothscroll
  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
      return false;
  });





  // スクロール検知(トップへ戻るボタン)

  jQuery(window).on("scroll", function() {
    // トップから100px以上スクロールしたら
    if (300 < jQuery(this).scrollTop()) {
      // is-showクラスをつける
  jQuery('.to-top').addClass( 'is-show' );
    } else {
      // 100pxを下回ったらis-showクラスを削除
    jQuery('.to-top').removeClass( 'is-show' );
    }
  });


  
  // faqsのスライドコンテンツの開閉

  jQuery('.faqs-box-q').click(function() {
    jQuery(this).next().slideToggle();
    jQuery(this).children('.faqs-icon').toggleClass( 'is-open' );
  });




    // wowjs 起動

    new WOW().init()

 


    // hiraku.jsのメニューナビを動作させるコード
    
    $('a[href^="#"]').click(function() {

      // 画面のロックを解除する
      $('body').css('position', 'static');
      $('body').css('overflow', 'scroll');
      $('body').css('overflow-y', 'scroll');
  
      // メニューを閉じる
      $('.js-hiraku-offcanvas-open').hide();
      $('.js-hiraku-offcanvas-body-right').removeAttr('style');
  
      // ヘッダーの表示を切り替える
      $('header').removeAttr('style');
      $('.hiraku-open-btn').removeAttr('style');
      $('.open-btn').show();
      $('.close-btn').hide();
  
      // classを初期化する
      $('body').removeClass('js-hiraku-offcanvas-body-right');
      $('.hiraku-open-btn').removeClass('js-hiraku-offcanvas-btn-active');
      $('.hiraku-open-btn').attr({'aria-expanded' : 'false'});
      $('.js-hiraku-offcanvas').removeClass('js-hiraku-offcanvas-open');
      $('.js-hiraku-offcanvas-sidebar').removeClass('active');
  
      // styleを初期化
      $('html').removeAttr('style');
      $('body').removeAttr('style');
      $('header').removeAttr('style');
      $('.hiraku-open-btn').removeAttr('style');
      $('.close-btn').removeAttr('style');
      $('.js-hiraku-offcanvas').removeAttr('style');
    });


});
