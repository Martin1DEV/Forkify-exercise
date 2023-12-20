import icons from 'url:../../img/icons.svg';

class ResultsView {
  _parentEl = document.querySelector('ul.results');
  _data;

  clear() {
    this._parentEl.textContent = '';
  }

  _generateMarkup() {
    const mark = this._data
      .map(recipe => {
        return `<li class="preview">
        <a
          class="preview__link preview__link--active"
          href="#${recipe.id}"
        >
          <figure class="preview__fig">
            <img src="${recipe.imageURL}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${recipe.title}</h4>
            <p class="preview__publisher">${recipe.publisher}</p>

            ${
              recipe.key
                ? ` <div class="preview__user-generated">
            <svg>
              <use href="${icons}.svg#icon-user"></use>
            </svg>
          </div>`
                : ''
            }
           
          </div>
        </a>
      </li>`;
      })
      .join(' ');
    return mark;
  }
  render(recipes) {
    this._data = recipes;
    const markup = this._generateMarkup();
    console.log(markup);

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }
}

export default new ResultsView();
