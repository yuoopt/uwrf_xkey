const genId1 = require('nbna_xid');
const genId2 = require('oevg_xid');
const crypto = require('crypto');

function generateKey() {
	var  sha1 = crypto.createHash('sha1');
	return sha1.update(genId1() + '|oX6osbPG4o|' + genId2()).digest('base64');
}


module.exports = generateKey;
