$(document).ready(function () {
    $('body').gradientify({
        gradients: [
            { start: [19, 98, 173], stop: [53, 118, 181] },
            { start: [0, 128, 128], stop: [51, 160, 160] },
            { start: [136, 177, 75], stop: [179, 215, 126] }
        ]
    });
    $('.tooltip').tooltipster();

});
