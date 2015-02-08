/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const DEBUG = false;
function debug(s) { dump("-*- FxOSUPrototypeService.js: " + s + "\n"); }

const Cc = Components.classes;
const Ci = Components.interfaces;
const Cu = Components.utils;

Cu.import("resource://gre/modules/XPCOMUtils.jsm");
Cu.import("resource://gre/modules/Services.jsm");
Cu.import("resource://gre/modules/DOMRequestHelper.jsm");
Cu.import("resource://gre/modules/PhoneNumberUtils.jsm");
Cu.import("resource://gre/modules/PhoneNumberNormalizer.jsm");

XPCOMUtils.defineLazyServiceGetter(this, "cpmm",
                                   "@mozilla.org/childprocessmessagemanager;1",
                                   "nsIMessageSender");

// FxOSUPrototypeService

function FxOSUPrototypeService()
{
  if (DEBUG) debug("Constructor");
}

FxOSUPrototypeService.prototype = {
  __proto__: DOMRequestIpcHelper.prototype,

  helloWorld: function() {
    return "hello world!";
  },

  classID : Components.ID("{9c72ce25-06d6-4fb8-ae9c-431652fce848}"),
  contractID : "@mozilla.org/fxosuPrototypeService;1",
  QueryInterface : XPCOMUtils.generateQI([Ci.nsISupportsWeakReference,
                                          Ci.nsIObserver]),
}

this.NSGetFactory = XPCOMUtils.generateNSGetFactory([FxOSUPrototypeService]);
