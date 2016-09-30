(function($) {
  $.fn.cloneField = function() {
    var
      el = $('.clone.sidebar-inject'),
      sidebar = $('.sidebar-list').first();

      sidebar.append($('<li></li>').append(el));

    el.click(function(e) {
      $.fn.ajax('clone');
      e.preventDefault();
    });
  };

  $.fn.ajax = function(fieldname) {
    var el = $('[data-field="' + fieldname + '"]');
    var input = el.find('.input-clone');
    var newID = input.val().replace(/[\/\\\)\($%^&*<>"'`´:;.\?=]/g, " ");

    var blueprintKey = input.attr('name');
    var base_url = window.location.href.replace(/(\/edit.*)/g, '/field') + '/' + blueprintKey + '/' + fieldname + '/ajax/';

    var container = el.find('span');

    $.ajax({
      url: base_url + encodeURIComponent(newID),
      type: 'GET',
      success: function(response) {
        var r = JSON.parse(response);

        if(r.class == 'error') alert(r.message);
        else if(r.class == 'success' && r.uri) {
          new_url = window.location.href.replace(/(pages\/.*\/edit.*)/g, 'pages/' + r.uri + '/edit/');
          window.location.replace(new_url);
        }
      }
    });
  };
})(jQuery);
