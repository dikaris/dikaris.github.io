/* Dikaris website: mobile menu and contact form. */
(function () {
  'use strict';

  /* ---------- Mobile menu ---------- */
  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('mobile-menu');

  if (btn && menu) {
    var iconOpen = btn.querySelector('.icon-open');
    var iconClose = btn.querySelector('.icon-close');

    var setMenu = function (open) {
      menu.hidden = !open;
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? btn.dataset.labelOpen : btn.dataset.labelClosed);
      if (iconOpen) iconOpen.hidden = open;
      if (iconClose) iconClose.hidden = !open;
    };

    btn.addEventListener('click', function () {
      setMenu(menu.hidden);
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) {
        setMenu(false);
        btn.focus();
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 760 && !menu.hidden) setMenu(false);
    });
  }

  /* ---------- Contact form ----------
     If data-endpoint on the form is filled in (for example a Formspree URL),
     the form is sent there. If it is empty, the visitor's email app opens
     with the message ready to send to the address in data-mailto. */
  var form = document.getElementById('contact-form');

  if (form) {
    var status = form.querySelector('.form-status');

    var showStatus = function (text, isError) {
      if (!status) return;
      status.textContent = text;
      status.style.color = isError ? '#8A1C1C' : '#3D4C36';
      status.hidden = false;
    };

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var endpoint = (form.dataset.endpoint || '').trim();
      var submitBtn = form.querySelector('button[type="submit"]');

      if (endpoint) {
        if (submitBtn) submitBtn.disabled = true;
        fetch(endpoint, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        })
          .then(function (res) {
            if (!res.ok) throw new Error('Request failed');
            form.reset();
            showStatus(form.dataset.msgSent, false);
          })
          .catch(function () {
            showStatus(form.dataset.msgError, true);
          })
          .then(function () {
            if (submitBtn) submitBtn.disabled = false;
          });
        return;
      }

      var lines = [
        (data.get('message') || '').toString(),
        '',
        '---',
        (data.get('name') || '').toString(),
        (data.get('organisation') || '').toString(),
        (data.get('email') || '').toString()
      ];
      var href = 'mailto:' + form.dataset.mailto +
        '?subject=' + encodeURIComponent(form.dataset.subject || '') +
        '&body=' + encodeURIComponent(lines.join('\n'));
      window.location.href = href;
      showStatus(form.dataset.msgMailto, false);
    });
  }
})();
