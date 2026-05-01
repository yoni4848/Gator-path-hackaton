(function () {
  var residencyType = localStorage.getItem('residencyType');
  var studentType   = localStorage.getItem('studentType');
  var checkedItems  = JSON.parse(localStorage.getItem('checkedItems') || '{}');
  var currentItems  = [];

  function init() {
    if (residencyType && studentType && CHECKLISTS[studentType]) {
      showApp(residencyType, studentType);
    } else {
      showOnboarding();
    }
  }

  function showOnboarding() {
    document.getElementById('onboarding').classList.remove('hidden');
    document.getElementById('app').classList.add('hidden');
    showStep(1);

    document.querySelectorAll('[data-residency]').forEach(function (tile) {
      tile.addEventListener('click', function () {
        residencyType = tile.dataset.residency;
        localStorage.setItem('residencyType', residencyType);
        showStep(2);
      });
    });

    document.querySelectorAll('[data-type]').forEach(function (tile) {
      tile.addEventListener('click', function () {
        studentType = tile.dataset.type;
        localStorage.setItem('studentType', studentType);
        showApp(residencyType, studentType);
      });
    });

    document.getElementById('step-back').addEventListener('click', function () {
      showStep(1);
    });
  }

  function showStep(n) {
    document.getElementById('step-1').classList.toggle('hidden', n !== 1);
    document.getElementById('step-2').classList.toggle('hidden', n !== 2);
    var d1 = document.getElementById('dot-1');
    var d2 = document.getElementById('dot-2');
    d1.classList.toggle('active',   n === 1);
    d1.classList.toggle('inactive', n !== 1);
    d2.classList.toggle('active',   n === 2);
    d2.classList.toggle('inactive', n !== 2);
  }

  function showApp(rType, sType) {
    document.getElementById('onboarding').classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');

    document.getElementById('student-type-badge').textContent =
      (RESIDENCY_LABELS[rType] || '') + ' · ' + (TYPE_LABELS[sType] || '');

    setupTabs();
    renderResources(rType);
    renderChecklist(rType, sType);
    setupChat();

    document.getElementById('reset-btn').addEventListener('click', function () {
      localStorage.removeItem('residencyType');
      localStorage.removeItem('studentType');
      localStorage.removeItem('checkedItems');
      location.reload();
    });
  }

  function setupTabs() {
    document.querySelectorAll('.tab-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
        document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
      });
    });
  }

  function renderResources(rType) {
    var all  = RESOURCES_BASE.concat(RESOURCES_BY_RESIDENCY[rType] || []);
    var list = document.getElementById('resource-list');
    list.innerHTML = '';
    all.forEach(function (r) {
      var a = document.createElement('a');
      a.href      = r.url;
      a.target    = '_blank';
      a.rel       = 'noopener';
      a.className = 'resource-card';

      var name = document.createElement('span');
      name.className   = 'resource-card-name';
      name.textContent = r.label;

      var arrow = document.createElement('span');
      arrow.className   = 'resource-card-arrow';
      arrow.textContent = '↗';

      a.appendChild(name);
      a.appendChild(arrow);
      list.appendChild(a);
    });
  }

  function renderChecklist(rType, sType) {
    var residencyData = RESIDENCY_ITEMS[rType] || [];
    var baseData      = CHECKLISTS[sType];
    currentItems      = residencyData.concat(baseData.items);

    document.getElementById('checklist-title').textContent = baseData.title;
    document.getElementById('checklist-sub').textContent   = baseData.sub;

    var ul = document.getElementById('checklist');
    ul.innerHTML = '';

    if (residencyData.length > 0) {
      ul.appendChild(sectionLabel((RESIDENCY_LABELS[rType] || 'Your Status') + ' — Additional Steps'));
    }

    currentItems.forEach(function (item, i) {
      if (i === residencyData.length && residencyData.length > 0) {
        ul.appendChild(sectionLabel('General Steps'));
      }
      ul.appendChild(buildItem(item, i));
    });

    updateProgress();
  }

  function sectionLabel(text) {
    var li = document.createElement('li');
    li.className   = 'checklist-section-label';
    li.textContent = text;
    return li;
  }

  function buildItem(item, i) {
    var isChecked = !!checkedItems[item.id];

    var li = document.createElement('li');
    li.className            = 'checklist-item' + (isChecked ? ' checked' : '');
    // no stagger needed

    var label     = document.createElement('label');
    label.className = 'item-label';

    var checkbox      = document.createElement('input');
    checkbox.type     = 'checkbox';
    checkbox.className = 'item-checkbox';
    checkbox.checked  = isChecked;

    var checkIcon     = document.createElement('span');
    checkIcon.className = 'item-check-icon';

    var content     = document.createElement('div');
    content.className = 'item-content';

    var textSpan      = document.createElement('span');
    textSpan.className = 'item-text';
    textSpan.textContent = item.text;
    content.appendChild(textSpan);

    if (item.tag) {
      var tagColors = TAG_COLORS[item.tag] || ['#E9E3F5', '#4E2A84'];
      var tag      = document.createElement('span');
      tag.className = 'item-tag';
      tag.textContent = item.tag;
      tag.style.background = tagColors[0];
      tag.style.color      = tagColors[1];
      content.appendChild(tag);
    }

    label.appendChild(checkbox);
    label.appendChild(checkIcon);
    label.appendChild(content);
    li.appendChild(label);

    if (item.link) {
      var link      = document.createElement('a');
      link.href     = item.link;
      link.target   = '_blank';
      link.rel      = 'noopener';
      link.className = 'item-link';
      link.textContent = '↗';
      li.appendChild(link);
    }

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        checkedItems[item.id] = true;
        li.classList.add('checked');
      } else {
        delete checkedItems[item.id];
        li.classList.remove('checked');
      }
      localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
      updateProgress();
    });

    return li;
  }

  function updateProgress() {
    var total = currentItems.length;
    var done  = currentItems.filter(function (i) { return checkedItems[i.id]; }).length;
    document.getElementById('progress-fill').style.width = Math.round((done / total) * 100) + '%';
    document.getElementById('progress-label').textContent =
      done === total ? 'All ' + total + ' steps complete' : done + ' / ' + total + ' complete';
  }

  function getBotResponse(input) {
    var lower = input.toLowerCase();
    for (var i = 0; i < FAQS.length; i++) {
      for (var j = 0; j < FAQS[i].keywords.length; j++) {
        if (lower.indexOf(FAQS[i].keywords[j]) !== -1) return FAQS[i].answer;
      }
    }
    return FALLBACK;
  }

  function appendMessage(content, role, isHtml) {
    var container = document.getElementById('chat-messages');
    var div = document.createElement('div');
    div.className = 'message ' + role;
    var p = document.createElement('p');
    if (isHtml) {
      p.innerHTML = content; // trusted: static HTML from data.js, not user input
    } else {
      p.textContent = content;
    }
    div.appendChild(p);
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function handleSend() {
    var input = document.getElementById('chat-input');
    var text  = input.value.trim();
    if (!text) return;
    appendMessage(text, 'user', false);
    input.value = '';
    setTimeout(function () {
      appendMessage(getBotResponse(text), 'bot', true);
    }, 280);
  }

  function setupChat() {
    document.getElementById('chat-send').addEventListener('click', handleSend);
    document.getElementById('chat-input').addEventListener('keypress', function (e) {
      if (e.key === 'Enter') handleSend();
    });
    document.querySelectorAll('.suggestion-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        document.getElementById('chat-input').value = chip.textContent;
        handleSend();
        chip.remove();
      });
    });
  }

  init();
})();
