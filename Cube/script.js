(function($) {
	$(function() {
		
		const SliderInit = function() {
			var rotate = 0,
			frontSide = 0,
			cubeRotate = function() {
				nextSlide();
				getFrontSlide();
				textAnim();
				
				return true;
			},
			autoplaySlides = function() {
				var autoplay = function() { return setInterval(cubeRotate, 7000); },
					sIId = autoplay();

				$('.cube, .next, .prev').on('mouseenter', function() {
					clearInterval(sIId);
					$('.text').animate({
						right: '5%'
					}, 1000);

					$('.caption').animate({
						left: '5%'
					}, 1000);

				});

				$('.cube, .next, .prev').on('mouseleave', function() {
					sIId = autoplay();
					$('.text').delay(6000).animate({
						right: '-860px'
					}, 1000);

					$('.caption').delay(6000).animate({
						left: '-358px'
					}, 1000);
				});

				window.onblur = function() {
					clearInterval(sIId);
				};

				window.onfocus = function() {
					sIId = autoplay();
					textAnim();
				}
			},
			textAnim = function() {

				$('.front .text').animate({
					right: '5%'
				}, 1000).delay(5000).animate({
					right: '-860px'
				}, 1000);

				$('.front .caption').delay(1000).animate({
					left: '4%' 
				}, 1000).delay(4000).animate({
					left: '-358px'
				}, 1000);

			},
			addEvents = function() {
				$('.next').click(function() {
					nextSlide();
					getFrontSlide();
				});

				$('.prev').click(function() {
					prevSlide();
					getFrontSlide();
				});
			},
			getFrontSlide = function() {
				if ($('.front').length > 1) return -1;

				$('.cube').children().removeClass('front');
				$($('.cube').children()[frontSide]).toggleClass('front');
			},
			nextSlide = function() {
				var angle = -90;

					frontSide++;
					rotate+=angle;

					if (frontSide > 3) frontSide = 0;
					$('.cube').css({'transform': 'rotateX(' + rotate + 'deg)'});
			},
			prevSlide = function() {
				var angle = 90;

					frontSide--;
					rotate+=angle;

					if (frontSide < 0) frontSide = 3;
					$('.cube').css({'transform': 'rotateX(' + rotate + 'deg)'});
			};

			getFrontSlide();
			autoplaySlides();
			addEvents();
			textAnim();
		};	
		SliderInit();	
	});
})(jQuery);

