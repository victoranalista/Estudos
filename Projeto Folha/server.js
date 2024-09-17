
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'UA-115667928-1');

function abreMenu(a) {
  if (a.classList.contains('ativo')) {
    a.classList.remove('ativo');
  } else {
    var lista = document.getElementById("itensMenu").getElementsByClassName("item-menu");
    for (var i = 0; i < lista.length; i++) {
      lista[i].classList.remove('ativo');
    }
    a.classList.add('ativo');
  }
}

function setToastrOption() {
  toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "7500",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
}

setToastrOption();

function closeModalOnClick() {
  setTimeout(function () {
    $('.wicket-mask-dark').on('click', function () {
      $('.w_close').click()
    });
  }, 500);
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    if (successful) {
      toastr['success']('Copiado!', '');
    }
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function () {
    toastr['success']('Copiado!', '');
  }, function (err) {
    console.error('Async: Could not copy text: ', err);
  });
}
