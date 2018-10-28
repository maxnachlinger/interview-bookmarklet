const createWordTag = (doc, { word, weight }) => {
  const minFontSize = 6;
  const maxFontSize = 50;
  const fontSize = minFontSize + weight > maxFontSize ? maxFontSize : minFontSize + weight;

  const style = `display: inline-block; margin-right: 7px; font-size: ${fontSize}pt`;

  const tag = doc.createElement('span');
  tag.innerText = word;
  tag.style = style;
  return tag;
};

export const createTags = (doc, wordStats) => {
  const style = 'width:80%; height:80%; overflow-y: scroll; border:1px solid #c0c0c0; ' +
    'position:fixed; top:0; left:0; background: white; z-index:99999';

  const tagsDiv = doc.createElement('div');
  tagsDiv.setAttribute('id', 'tags-container');
  tagsDiv.setAttribute('style', style);

  wordStats.forEach((word) => {
    tagsDiv.appendChild(createWordTag(doc, word));
  });

  const body = doc.getElementsByTagName('body')[0];
  body.appendChild(tagsDiv);
};
