const bands = ['The Plot in You', 'The Devil Wears Prada', 'A Skylit Drive', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State'];

function strip(bandName) {
  return bandName.replace(/^(a|the)/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');

console.log(sortedBands);