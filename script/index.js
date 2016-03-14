$(document).ready(function () {
    var ME = {
        DOM: {
            $viewContent: $('.view-content'),
            $contentBox: $('.content-box'),
        }
    }
    ME.DOM.$viewContent.parallax();
    ME.DOM.$contentBox.parallax();
});
