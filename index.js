
function myPromise(exector) {
    let _this = this;
    _this.status = 'pending'
    _this.value = undefined
    _this.reason = undefined
    _this.onResolveCallbacks = []
    _this.onRejectedCallbacks = []
    function resolve(value) {
        if (_this.status === 'pending') {
            _this.status = 'resolved'
            _this.value = value
            _this.onResolveCallbacks.push(function () {
                onFulfilled(_this.value)
            })
            _this.onResolveCallbacks.forEach(function (fn) {
                fn()
            })
        }
    }
    function reject(reason) {
        if (_this.status === 'pending') {
            _this.status = 'rejected'
            _this.reason = reason
            _this.onRejectedCallbacks.push(function () {
                onRejected(_this.reason)
            })
            _this.onRejectedCallbacks.forEach(function (fn) {
                fn()
            })
        }
    }
    try {
        exector(resolve, reject)  //将这两个方法传到执行器函数中
    } catch (e) {
        reject(e)
    }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
    let _this = this;
    if (_this.status === 'resolved') {
        onFulfilled(_this.value)
    }
    if (_this.status === 'rejected') {
        onRejected(_this.reason)
    }
}

module.exports = Promise
