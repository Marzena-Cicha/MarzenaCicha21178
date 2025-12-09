const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if (req.url !== '/') {
    res.writeHead(404);
    return res.end('Not found');
  }
  getTitles(res);
}).listen(8000, '127.0.0.1');

console.log('Serwer callbacków działa na http://127.0.0.1:8000/');

function getTitles(res) {
  fs.readFile('./titles.json', function (err, data) {
    if (err) return hadError(err, res);
    const titles = JSON.parse(data.toString());
    getTemplate(titles, res);
  });
}

function getTemplate(titles, res) {
  fs.readFile('./template.html', function (err, data) {
    if (err) return hadError(err, res);
    formatHtml(titles, data.toString(), res);
  });
}

function formatHtml(titles, tmpl, res) {
  const html = tmpl.replace('%', titles.join('</li><li>'));
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(html);
}

function hadError(err, res) {
  console.error(err);
  res.end('Error');
}
