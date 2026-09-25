// Optional startup bridge for hosts that require CommonJS.
import('./server.mjs').catch(error => { console.error(error); process.exit(1); });
