import './modules/select';
import headerInit from './modules/header';
import modalInit from './modules/modal';
import formInit from './modules/form';
import scrollInit from './modules/scroll';

jQuery(document).ready(function() {
  scrollInit();
  headerInit();
  modalInit();
  formInit();

  $('.select').on('changeData', function(e) {
    switch ($(this).data('selected')) {
      case 0:
        $('.card__inner').addClass('362');
        $('.card__header .title').text('Места хватит каждому');
        $('.card__content .text').html(
          'Четырехуровневый паркинг на&nbsp;362&nbsp;места. У&nbsp;вас не&nbsp;возникнет проблем с&nbsp;поиском места для парковки. Место найдется и&nbsp;для ваших гостей. На&nbsp;первом уровне&nbsp;&mdash; 92&nbsp;места, куплено меньше&nbsp;40.'
        );
        break;

      case 1:
        $('.card__inner').addClass('362');
        $('.card__header .title').text('Безопасность превыше всего');
        $('.card__content .text').html(
          'Круглосуточная охрана и&nbsp;видеонаблюдение защитят ваш автомобиль. Ключи от&nbsp;паркинга есть только у&nbsp;жильцов комплекса. Второй уровень паркинга оборудован 90&nbsp;местами. Большая часть свободна в&nbsp;ожидании вас.'
        );
        break;

      case 2:
        $('.card__inner').addClass('362');
        $('.card__header .title').text('Продлите жизнь вашему авто');
        $('.card__content .text').html(
          'Дождь, снег, холод, ветер, яркое солнце&nbsp;&mdash; на&nbsp;паркинге ваш автомобиль будет защищен от&nbsp;любых сюрпризов природы. На&nbsp;3-м уровне паркинга из&nbsp;90&nbsp;мест осталось только 10. Успевайте!'
        );
        break;

      case 3:
        $('.card__inner').addClass('362');
        $('.card__header .title').text('Забирайте машину с комфортом');
        $('.card__content .text').html(
          'Удобный лифт доставит вас прямо на&nbsp;4-й уровень паркинга. Для жителей предусмотрены 2&nbsp;входа: с&nbsp;улицы и&nbsp;со&nbsp;двора комплекса. Из&nbsp;90&nbsp;мест 4-го уровня продано уже 87. Поторопитесь!'
        );
        break;

      default:
        $('.card__inner').addClass('362');
        $('.card__header .title').text('Места хватит каждому');
        $('.card__content .text').html(
          'Четырехуровневый паркинг на&nbsp;362&nbsp;места. У&nbsp;вас не&nbsp;возникнет проблем с&nbsp;поиском места для парковки. Место найдется и&nbsp;для ваших гостей. На&nbsp;первом уровне&nbsp;&mdash; 92&nbsp;места, куплено меньше&nbsp;40.'
        );
        break;
    }
  });
});
