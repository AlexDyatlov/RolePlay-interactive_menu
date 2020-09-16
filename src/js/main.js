$(function(){

  // start Табы
  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

  });
  // end Табы

  // анимация кнопок
  let showButtons = false

  $('.interactive__item[data-buttons]').click(function(){
    let buttonsId           = $(this).attr('data-buttons'),
        animationClass      = 'buttons-box--active',
        buttonsBlocks       = $('.buttons-box'),
        currentButtonsBlock = $(`.buttons-box[data-id=${buttonsId}]`);

    
    if (!currentButtonsBlock.hasClass(animationClass) && showButtons) {
      buttonsBlocks.removeClass(animationClass)
      setTimeout(() => {
        currentButtonsBlock.toggleClass(animationClass)
      }, 500)
    } 
  });

  $('.tabs-content[data-buttons]').click(function() {
  	showButtons = !showButtons

    let buttonsId           = $(this).attr('data-buttons'),
        currentButtonsBlock = $(`.buttons-box[data-id=${buttonsId}]`);
        
    currentButtonsBlock.toggleClass('buttons-box--active')
  });
    // анимация кнопок

});