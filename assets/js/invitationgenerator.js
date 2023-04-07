$(document).ready(function() {
    $('.sendvia input').click(function() {
        $val = $(this).val();
        console.log($val);
        $("#nav-onerecp form").removeClass("show");
        $("#nav-onerecp form#onerecep-" + $val).addClass("show");
     });

     var clicked = false;

     $('.zim_btn').click(function(e) {
        $('#intro').addClass('hidden');
        $('#generator').addClass("show");
        if(!clicked) {
            var tabcontent = $('#nav-tabContent');
            tabcontent.css('minHeight', tabcontent[0].offsetHeight);
            clicked = true;
        }

    });

    $('#onerecep-whatsapp').submit(function(e) {
        e.preventDefault();
        const whatsappForm = $("#onerecep-whatsapp");
        const recipientName = whatsappForm.find('#recipient_name');
        const message = whatsappForm.find("#message");
        const text = encodeURI(`Dear ${recipientName.val()},`) + '%0a' + encodeURI(message.val()) + '%0a https://oanglelab.com/zimmer-uat-1/';

        window.open(`https://api.whatsapp.com/send?text=${text}`);
    });

    $('.upload-btn').click(function(e) {
        $('#myCSV').click();
    });


    $('#myCSV').on('change', function(e) {
        $('.file-name').text(this.files[0].name);
        $('.upload-btn').text('Re-Upload CSV');
        $('.file-name').css('display', 'block');
    });

    $('input[name="multiple-email"]').click(function(e) {
        const multipleEmail = $("#multiple-email");
        const multipleEmailText = multipleEmail.find('#your-email');
        const multipleEmailFile = multipleEmail.find("#myCSV");
        if(multipleEmailFile.val() !== '' && multipleEmailText.val() !== '') {
            $('.loading').css('opacity', '1');
        }
    });
    domain = 'https://oanglelab.com/oa173-zimmer';

    $('#onerecep-email').submit(function(e) {
        e.preventDefault();
        const yourEmail = $(this).find('#your_email').val(),
        reciName = $(this).find('#recipient_name').val(),
        reciEmail = $(this).find('#recipient_email').val(),
        message = $(this).find('textarea').val();
        $(this).find('.loading').css("opacity", 1);
        $('.thanks').css('display', 'none');
        $.ajax({
            url: `${domain}/submit.php`,
            method: 'post',
            data: {
                action: 'one-recipient-send',
                your_email : yourEmail,
                recipient_name: reciName,
                recipient_email: reciEmail,
                message: message
            }
        }).done(function(res) {
            if(res) {
                $('#onerecep-email').find('#recipient_name').val('');
                $('#onerecep-email').find('#recipient_email').val('');
                $('#onerecep-email').find('#your_email').val('');
                $('#onerecep-email').find('textarea').val('');
                $('.loading').css("opacity", 0);
                $('.thanks').css('display', 'block');
            }
        });

        return false;
    });

    $('#multiple-email').submit(function(e) {
        e.preventDefault();

        var file_data = $(this).find('#myCSV')[0].files[0];   
        var form_data = new FormData();        
        form_data.append('your-email', $(this).find('#your-email').val());
        form_data.append('myfile', file_data);
        form_data.append('action', 'sendmail_from_csv');

        $.ajax({
            url: `${domain}/submit.php`,
            type: 'POST',
            data: form_data,
            cache: false,
            processData: false, // Don't process the files
            contentType: false,
        }).done(function(res) {
            if(Boolean(res)) {
                $('.loading').css("opacity", 0);
                $('.thanks').css('display', 'block');
            }
        });

        return false;
    });
});