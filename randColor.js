$.fn.randColorText = function(shade) {
  $(this).each(function() {
    let color;
    switch (shade) {
      case 'all':
        color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        break;
      case 'rainbow':
        color = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'][Math.floor(Math.random() * 6)];
        break;
      case 'red':
        color = `rgb(${Math.floor(Math.random() * 128) + 128}, ${Math.floor(Math.random() * 64)}, ${Math.floor(Math.random() * 64)})`;
        break;
      case 'green':
        color = `rgb(${Math.floor(Math.random() * 64)}, ${Math.floor(Math.random() * 128) + 128}, ${Math.floor(Math.random() * 64)})`;
        break;
      case 'blue':
        color = `rgb(${Math.floor(Math.random() * 64)}, ${Math.floor(Math.random() * 64)}, ${Math.floor(Math.random() * 128) + 128})`;
        break;
      case 'monochrome':
        color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        color = `rgb(${color}, ${color}, ${color})`;
        break;
        case 'rgb':
        color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.random()})`;
        break;
        default:
        return;
    }
    $(this).css('color', color);
  });
  return this;
};