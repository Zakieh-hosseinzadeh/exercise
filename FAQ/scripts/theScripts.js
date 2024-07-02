$('.sec-acc-title').click(function () {
    $('i.fa-angle-up').removeClass('fa-angle-up')
    if ($(this).next().is(":visible")) {
        $(this).find('i').removeClass('fa-angle-up')
    } else {
        $(this).find('i').addClass('fa-angle-up')
    }
    $(this).next().slideToggle('fast').siblings('.sec-acc-content').slideUp('fast')
})
$(document).ready(function () {
    let userClick=false;

    $(document).ready(function () {
        $('.myParagraph').hide();
        $('.myParagraph[id="p3"]').show();

    })
    $('.acc-title').click(function () {
        let index = $(this).data('answer');
        const answer = $(this).data()
        console.log(answer)

        $('.acc-title').removeClass('active');
        if ($(this).is(':visible')) {
            $(this).toggleClass('active');
            $('.myParagraph').hide();
            $('.myParagraph[id="' + index + '"]').show();
        }
        userClick=true;
        $(this).next().slideToggle('fast').siblings('.acc-content').slideUp('fast');
    })

    let accordions = document.getElementsByClassName("acc-title");
    let autoOpen;
    let autoOpenEnabled = true;

    function autoOpenAccordions() {
        let index = 0;
        autoOpen = setInterval(function () {
            if (autoOpenEnabled&&!userClick) {
                $('.acc-title').removeClass('active');
                accordions[index].classList.add("active");
                let accContent = accordions[index].nextElementSibling;
                accContent.style.display = "block";

                setTimeout(function () {
                    accordions[index].classList.remove("active");
                    accContent.style.display = "none";
                }, 1000);

                index++;
                if (index >= accordions.length) index = 0;
            }
        }, 3000);
    }

    autoOpenAccordions();

})
