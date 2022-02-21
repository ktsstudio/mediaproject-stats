/**
 * Установка пикселя на страницу
 * @param {string} src - ссылка на gif-пиксель
 */
export const sendPixel = (src: string): void => {
  const img: HTMLImageElement = document.createElement('img');
  img.src = src;
  img.setAttribute(
    'style',
    'width:0;height:0;position:absolute;visibility:hidden;'
  );
  document.body.appendChild(img);
};
