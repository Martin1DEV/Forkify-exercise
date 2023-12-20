class SearchView {
  _parentEl = document.querySelector('.search');

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', e => {
      e.preventDefault();

      const input = this._parentEl.querySelector('input');
      const search = input.value;
      handler(search);
      input.value = '';
    });
  }
}

export default new SearchView();
