/**
 * Created by jedi on 11-Feb-16.
 */

var Transition = function(from, to) {
    'use strict';
    this._from  = from;
    this._to = to;
};

Transition.prototype = {
};

Transition.prototype.constructor = Transition;

Transition.prototype.getFrom = function () {
    'use strict';
    return this._from;
};

Transition.prototype.getTo = function () {
    'use strict';
    return this._to;
};

module.exports = Transition;