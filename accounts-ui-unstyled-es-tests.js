// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by accounts-ui-unstyled-es.js.
import { name as packageName } from "meteor/honorcode93:accounts-ui-unstyled-es";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-ui-unstyled-es - example', function (test) {
  test.equal(packageName, "accounts-ui-unstyled-es");
});
