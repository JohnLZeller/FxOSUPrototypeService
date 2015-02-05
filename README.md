# FxOSUPrototypeService

# Overview

I used [PhoneNumberService.js](http://mxr.mozilla.org/mozilla-central/source/dom/phonenumberutils/PhoneNumberService.js) and [PhoneNumberService.manifest](http://mxr.mozilla.org/mozilla-central/source/dom/phonenumberutils/PhoneNumberService.manifest) as a base. I then rewrote all of the PhoneNumberService stuff into my own name, FxOSUPrototypeService.

Here is the [diff of mozilla-central with my changes](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/FxOSUPrototypeService.diff) to [mozilla-central](http://hg.mozilla.org/mozilla-central/).

## Current Problems

I am attempting to get access to network stats info, whether it be through [NetworkStatsManager](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMMozNetworkStatsManager), [NetworkStatsData](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMMozNetworkStatsData) or [NetworkStats](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMMozNetworkStats).

I have added 2 lines to my [FxOSUPrototypeService.js](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/fxosuprototype/FxOSUPrototypeService.js), which attempt to use the NetworkStatsService.jsm and the NetworkStatsManager xpcom component. Both fail.

The attempts are:
* Cu.import("resource://gre/modules/NetworkStatsService.jsm");
	* Error is: NS_ERROR_FILE_NOT_FOUND
* var networkStatsManager = Cu["@mozilla.org/networkStatsManager;1"].createInstance(Ci.nsIDOMNetworkStatsManager);
	* Error is: TypeError Cu["@mozilla.org/networkStatsManager;1"] is undefined


## Changes I've Made

I have added the following files:
* dom/fxosuprototype/[FxOSUPrototypeService.js](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/fxosuprototype/FxOSUPrototypeService.js)
* dom/fxosuprototype/[FxOSUPrototypeService.manifest](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/fxosuprototype/FxOSUPrototypeService.manifest)
* dom/fxosuprototype/[moz.build](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/fxosuprototype/moz.build)
* dom/webidl/[FxOSUPrototypeService.webidl](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/webidl/FxOSUPrototypeService.webidl)

And I have modified these files:
* b2g/installer/[package-manifest.in](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/b2g/installer/package-manifest.in#L366-L367) (Lines 366 to 376)
* browser/installer/[package-manifest.in](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/browser/installer/package-manifest.in#L561-L562) (Lines 561 to 562)
* mobile/android/installer/[package-manifest.in](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/mobile/android/installer/package-manifest.in#L303-L304) (Lines 303 to 304)
* dom/apps/[PermissionsTable.jsm](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/apps/PermissionsTable.jsm#L218-L223) (Lines 218 to 223)
* dom/webidl/[moz.build](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/webidl/moz.build#L146) (Line 146)
* dom/[moz.build](https://github.com/JohnLZeller/FxOSUPrototypeService/blob/master/dom/moz.build#L55) (Line 55)
