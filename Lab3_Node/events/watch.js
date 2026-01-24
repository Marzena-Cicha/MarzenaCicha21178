const events = require('events');
const util = require('util');
const fs = require('fs');

function Watcher(watchDir, processedDir) {
  this.watchDir = watchDir;
  this.processedDir = processedDir;
}

util.inherits(Watcher, events.EventEmitter);

Watcher.prototype.watch = function () {
  const watcher = this;
  fs.readdir(this.watchDir, function (err, files) {
    if (err) throw err;
    for (const file of files) {
      watcher.emit('process', file);
    }
  });
};

Watcher.prototype.start = function () {
  const watcher = this;
  fs.watch(this.watchDir, function () {
    watcher.watch();
  });
};

const watchDir = './watch';
const processedDir = './done';

const watcher = new Watcher(watchDir, processedDir);

watcher.on('process', function process(file) {
  const watchFile = this.watchDir + '/' + file;
  const processedFile = this.processedDir + '/' + file.toLowerCase();
  fs.rename(watchFile, processedFile, function (err) {
    if (err) throw err;
    console.log(`Przeniesiono plik ${file} do katalogu done.`);
  });
});

watcher.start();
console.log('Watcher wystartował – wrzuć pliki do katalogu watch/');
