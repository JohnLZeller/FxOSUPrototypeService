# FxOSUPrototypeService

I used [PhoneNumberService](http://mxr.mozilla.org/mozilla-central/source/dom/phonenumberutils/PhoneNumberService.js) as a base, and basically rewrote all of the [PhoneNumberService](http://mxr.mozilla.org/mozilla-central/source/dom/phonenumberutils/PhoneNumberService.js) stuff into my own name, FxOSUPrototypeService.

It seems like I am very close to having this working.

I rebuilt B2G with the new FxOSUPrototypeService, and then launched B2G with jsconsole. From there I called my new API navigator.mozFxOSUPrototypeService and received an error of NS_ERROR_FACTORY_NOT_REGISTERED. I am not sure what else I am missing here. I have used mxr to find all the mentioned of PhoneNumberService, so that I could make sure that my own service is mentioned in the same places. I even places the FxOSUPrototypeService into the package manifests for b2g, browser, and android... since later I'll want to be using those anyway.

Here is the diff of mozilla-central with my changes: http://zeller.pastebin.mozilla.org/8554236

Do you have any idea what I am missing here?

I have added the following files:
	dom/fxosuprototype/FxOSUPrototypeService.js
	dom/fxosuprototype/FxOSUPrototypeService.manifest
	dom/fxosuprototype/moz.build
	dom/webidl/FxOSUPrototypeService.webidl

And I have modified these files:
	b2g/installer/package-manifest.in
	browser/installer/package-manifest.in
	dom/apps/PermissionsTable.jsm
	dom/webidl/moz.build
	mobile/android/installer/package-manifest.in
