$(document).ready(() => {

    const requestList = $('.request-container > .request');

    const selectorList = $('.selector > div');
    $([...selectorList][0]).addClass('selected');


    selectorList.on('click', (e) => {
        const statusCLicked = e.target.dataset.id;
        [...selectorList].forEach(selector => {
            $(selector).removeClass('selected');
        });
        $(e.target).addClass('selected');

        [...requestList].forEach(request => {
            const requestStatus = $(request).attr('data-status');
            if (statusCLicked === requestStatus) {
                $(request).css('display', 'block');
            } else {
                $(request).css('display', 'none');
            };

            if (statusCLicked === 'all') {
                $(request).css('display', 'block');
            }
        });
    })


})