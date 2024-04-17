function textImgSep() {
  const [text, setText] = useState('This is some text with an image https://www.shutterstock.com/search/here(https://example.com/image.jpg). Here is more text.');
  const regex = /\[[ ]*image[ ]*here[ ]*\((.*?)\)/g; // Simple regex for image URLs

  const processText = () => {
    const imageMatches = text.match(regex) || [];
    const imageUrls = imageMatches.map(match => match.slice(match.indexOf('(') + 1, match.indexOf(')')));
    const textWithoutImages = text.replace(regex, '');
    return { text: textWithoutImages, images: imageUrls };
  };
};