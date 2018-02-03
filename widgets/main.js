$(function() {

    //For changing the text that appears on the buttons depending on situation
    $("#buttonSaver").click(function() {
        var btn = $(this);
        btn.button("loading");
        setTimeout(function() {
            btn.button("reset");
        }, 1000);
    });

    //Modal functioning
    var okButton = $("#ok");
    var modalRect = $("#mainModal");
    var progressBar = $("#progressBar");
    okButton.click(function() {
        okButton.button("starting");
        var counter = 0;
        var countDown = function() {
            counter++;
            if (counter == 11) {
                okButton.button("reset");
                modalRect.modal("hide");
            } else {
                progressBar.width(counter * 10 + "%");
                setTimeout(countDown, 1000);
            }
        };
        setTimeout(countDown, 1000);
    });

    //For tooltips and Popovers
    $("a[rel='tooltip']").tooltip();
    $("a[rel='popover']").popover().click(function(e) {
        e.preventDefault()
    });

    //Function for typeahead to be completed with ease
    $("#languages").typeahead({ source: ["English", "Telugu", "Hindi", "Malayalam", "Tamil", "Marati", "Urdu", "Others"] });

    //Function for defining the interval for sliding effect in carousel
    $(".carousel").carousel({
        interval: 1000
    });
});