(function ($) {
    'use strict';
    /*[ submit functionality ]
        ===========================================================*/
    
    try {
        var form = $('#mainForm');
        var formObj1 = form.first();
        var formInfo = formObj1[0];

        $(formInfo).submit(function() {
                var name = $("input[name='name']")[0].value;
                var email = $("input[name='email']")[0].value;
                var formMessage = $("input[name='message']")[0].value;

                var emailObj = {
                   sendersEmailAddress : email,
                   sendersName : name,
                   message : formMessage
                };

                const postLocation = 'https://firefastapi.online/contact';
                const init = {
                    method: 'POST',
                    mode: 'no-cors',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(emailObj)
                };

                fetch(postLocation, init).then(response => response.json())
                .then(response => console.log(response));
            }
        );

    } catch (err) {
        console.log(err);
    }



})(jQuery);