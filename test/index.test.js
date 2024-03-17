// cdnIntegration.test.js

const assert = require('assert');
const deliverContentViaCDN = require('../src/cdnIntegration');

describe('CDN Integration', function() {
    it('should deliver content via CDN', function() {
        const content = 'image.jpg';
        const cdnUrl = 'https://cdn.example.com';
        const expectedUrl = 'https://cdn.example.com/image.jpg';
        const deliveredUrl = deliverContentViaCDN(content, cdnUrl);
        assert.strictEqual(deliveredUrl, expectedUrl);
    });
});
