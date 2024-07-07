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
    let userClick = false;

    $(document).ready(function () {
        $('.myParagraph').hide();
        $('.myParagraph[id="p1"]').show();
        $('.acc-title:first-child').addClass('active');
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
        userClick = true;
        // console.log(userClick)
        $(this).next().slideToggle('fast').siblings('.acc-content').slideUp('fast');
    })

    let accordions = document.getElementsByClassName("acc-title");
    let autoOpen;
    let autoOpenEnabled = true;

    function autoOpenAccordions() {
        let index = 0;
        autoOpen = setInterval(function () {
            if (autoOpenEnabled && !userClick) {
                $('.acc-title').removeClass('active');
                $('.acc-content').slideUp('fast')

                accordions[index].classList.add("active");
                console.log(accordions[index])
                $(accordions[index]).next().slideDown('fast')



                // let accContent = accordions[index].nextElementSibling;
                // accContent.style.display = "block";

                // setTimeout(function () {
                //     accordions[index].classList.remove("active");
                //     accContent.style.display = "none";
                // }, 5000);

                let contentid=$(accordions[index]).data('answer');
                console.log(contentid)
                $('.myParagraph').hide();
                $('.myParagraph[id="'+contentid+'"]').show()

                index++;
                if (index >= accordions.length) index = 0;
            }
        }, 5000);
    }

    autoOpenAccordions();

})
