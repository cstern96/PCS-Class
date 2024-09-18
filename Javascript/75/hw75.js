/* global $*/
(function () {
    'use strict';
    const pageForm = $('#pageForm');
    let status;

    pageForm.on('submit', e => {
        e.preventDefault();
    });

    $('#submitButton').click(() => {
        const page = $('#fileName').val();
        $('#loading').show();
        setTimeout(
            fetch(page)
                .then(r => {
                    if (r.status < 400) {
                        return r.text();

                    } else {
                        status = r.status;
                        console.log(r);
                        throw new Error(`${r.status} - ${r.statusText}`);
                    }
                })
                .then(value => {
                    document.body.append(value);
                    $('#loading').hide();
                })
                .catch(e => {
                    console.error('oops', e);
                    console.log(status);
                }), 2000);


    });



}());