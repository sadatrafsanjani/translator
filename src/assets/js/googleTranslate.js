function googleTranslator() {
  new google.translate.TranslateElement({
      pageLanguage: 'en',
      layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
    },
    'translator'
  );
}
