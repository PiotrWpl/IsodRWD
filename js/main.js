(function () {
  var $scheduleList = $('.schedule-list'),
      $togglableList = $('.togglable-list');

  if ($scheduleList.length) {
    var specialistyValue = '',
        semesterValue = '',
        $groupContainer = $('.group-check-container');

    var checkGroup = function () {
      if (specialistyValue !== '' && semesterValue !== '') {
        $groupContainer.html('<a href="#" id="checkAll"><span class="glyphicon glyphicon-check"></span></a>' +
          '<label class="checkbox-inline">' +
            '<input type="checkbox" id="inlineCheckbox2" value="option2">GR1' +
          '</label>' +
          '<label class="checkbox-inline">' +
            '<input type="checkbox" id="inlineCheckbox2" value="option2">GR2' +
          '</label>' +
          '<label class="checkbox-inline">' +
            '<input type="checkbox" id="inlineCheckbox2" value="option2">GR3' +
          '</label>' +
          '<label class="checkbox-inline">' +
            '<input type="checkbox" id="inlineCheckbox2" value="option2">GR4' +
          '</label>' +
          '<label class="checkbox-inline">' +
            '<input type="checkbox" id="inlineCheckbox2" value="option2">GR5' +
          '</label>' +
          '<label class="checkbox-inline">' +
            '<input type="checkbox" id="inlineCheckbox2" value="option2">GR6' +
          '</label>');
      }
      setTimeout(function () {
        $('#checkAll').click(function (ev) {
          ev.preventDefault();
          var $this = $(this);
          $this.toggleClass('checked');
          if ($this.hasClass('checked')) {
            $(':checkbox').each(function () {this.checked = 'checked';});
          } else {
            $(':checkbox').each(function () {this.checked = '';});
          }
        });
      }, 100)
    };

    $('#selectSpeciality').change(function (ev) {
      specialistyValue = ev.target.value;
      checkGroup();
    });

    $('#selectSemester').change(function (ev) {
      semesterValue = ev.target.value;
      checkGroup();
    });
  }
  if ($togglableList.length) {
    $togglableList.find('a.togglable').click(function (ev) {
      ev.preventDefault();
      var $this = $(this),
          $parent = $this.parents('li');

      $parent.toggleClass('show-togglable-details');
    });
  }
})();
