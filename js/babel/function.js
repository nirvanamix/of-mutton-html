"use strict";

jQuery(document).ready(function ($) {
  /******* info for widnow *******/
  var info_windows = {
    fun: function fun() {
      $('body').append('<div class="info_block"><div class="w"></div><div class="h"></div><div class="s"></div></div>');

      var function_info = function function_info() {
        $('.info_block .w').text("w: ".concat($(window).outerWidth()));
        $('.info_block .h').text("h: ".concat($(window).outerHeight()));
        var m = $(window).outerWidth();
        n = $(window).outerHeight();
        M = m, N = n;

        for (var i = 2; i <= m; i++) {
          if (m % i === 0 && n % i === 0) M = m / i, N = n / i;
        }

        $('.info_block .s').text("s: ".concat(M, ":").concat(N));
      };

      function_info();
      $(window).resize(function () {
        function_info();
      }); // style

      $('.info_block').css({
        position: 'fixed',
        top: '150px',
        right: 0,
        color: '#fff',
        textShadow: '0px 0px 1px #000',
        background: 'rgba(101,101,101, 0.8)',
        zIndex: '999999',
        padding: '2px 2px 2px 2px',
        fontSize: '10px',
        lineHeight: '12px',
        textAlign: 'right',
        userSelect: 'none',
        fontFamily: 'Arial',
        fontWeight: '400'
      });
    }
  };
  info_windows.fun();
  /******* info for widnow *******/

  var mobile_menu = {
    fun: function fun() {
      $('nav .nav-ul > li').each(function (index, el) {
        if ($(this).find('ul').length > 0) $(this).addClass('has-ul').append("<div class=\"drob-nav\"><svg width=\"11\" height=\"9\" viewBox=\"0 0 11 9\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.9371 0.294827C10.8905 0.205964 10.8204 0.131537 10.7345 0.079579C10.6486 0.0276209 10.5502 0.000104669 10.4498 0H0.548875C0.448679 0.000413863 0.350492 0.0281333 0.264873 0.080177C0.179253 0.132221 0.109441 0.20662 0.0629425 0.295374C0.0164444 0.384127 -0.0049797 0.483877 0.000974029 0.583896C0.00692776 0.683915 0.0400341 0.780419 0.0967328 0.86303L5.04719 8.01369C5.09765 8.08698 5.16518 8.14691 5.24394 8.1883C5.32271 8.2297 5.41035 8.25133 5.49933 8.25133C5.58832 8.25133 5.67596 8.2297 5.75473 8.1883C5.83349 8.14691 5.90101 8.08698 5.95148 8.01369L10.9019 0.86303C10.9592 0.780589 10.9927 0.684028 10.999 0.583849C11.0052 0.483669 10.9838 0.383705 10.9371 0.294827ZM5.49933 6.73427L1.59837 1.1001H9.4003L5.49933 6.73427Z\" /></svg></div>");
      });
      $('.mobile-nav').click(function (event) {
        $(this).toggleClass('active');
        $('header .mobile-wr').toggleClass('active');
      });
      jQuery(document).click(function (event) {
        if (jQuery(event.target).closest(".mobile-nav, header").length) return;
        $('.mobile-nav').removeClass('active');
        $('header .mobile-wr').removeClass('active');
        event.stopPropagation();
      });
      $('header .drob-nav').click(function (event) {
        $('header .drob-nav').not($(this)).parent('li').removeClass('active');
        $(this).parent('li').toggleClass('active');
      });
      jQuery(document).click(function (event) {
        if (jQuery(event.target).closest(".nav-ul").length) return;
        $('.nav-ul li').removeClass('active');
        event.stopPropagation();
      });
    }
  };
  mobile_menu.fun();
});