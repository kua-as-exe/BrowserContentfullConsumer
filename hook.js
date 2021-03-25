var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var goTo = function goTo(url) {
    return window.location.href = url;
};
var useParams = function useParams() {
    var params = {};
    var url = new URLSearchParams(window.location.search);
    url.forEach(function (value, key) {
        return params[key] = value;
    });
    return params;
};

var Click = function (_React$Component) {
    _inherits(Click, _React$Component);

    function Click() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Click);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Click.__proto__ || Object.getPrototypeOf(Click)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            data: [],
            isLoading: true
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Click, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            fetch(this.props.url).then(function (data) {
                return data.json();
            }).then(function (data) {
                _this2.setState({ isLoading: false, data: data });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                data = _state.data,
                isLoading = _state.isLoading;
            var _props = this.props,
                template = _props.template,
                loading = _props.loading;


            if (isLoading && loading) return loading();
            if (template) {
                if (Array.isArray(data)) return data.map(template);
                return template(data);
            }

            return React.createElement(
                "span",
                null,
                "No hay plantilla"
            );
        }
    }]);

    return Click;
}(React.Component);