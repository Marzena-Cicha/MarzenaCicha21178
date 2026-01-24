const { Worker } = require('worker_threads');

function runWorker(limit) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./sumWorker.js', { workerData: { limit } });

    const start = Date.now();

    worker.on('message', (sum) => {
      const time = Date.now() - start;
      resolve({ limit, sum, time });
    });

    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker stopped with code ${code}`));
    });
  });
}

async function main() {
  const limits = [1e6, 2e6, 3e6, 4e6];

  const promises = limits.map((l) => runWorker(l));
  const results = await Promise.all(promises);

  results.forEach((r) => {
    console.log(`Limit: ${r.limit}, suma: ${r.sum}, czas: ${r.time} ms`);
  });
}

main().catch(console.error);
