const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Hærtlêss Queen")==0 || (event.body.indexOf("Nupur")==0 || (event.body.indexOf("নুপুর")==0 || (event.body.indexOf("Babu")==0)))) {
		var msg = {
				body: "গ্রুপে এত মেয়ে থাকতে তোর ওকেই কেন মেনশন দিতে হবে বলদা তোর ভাবি লাগে সালাম দে😠 )"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
