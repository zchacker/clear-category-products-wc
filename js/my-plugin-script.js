jQuery(document).ready(function($) {
    $('#my-plugin-confirm').on('click', function() {
        var confirmAction = confirm('هل أنت متأكد من حذف المنتجات؟?');
        if (confirmAction) {
            $.ajax({
                url: ajaxurl,
                type: 'POST',
                data: {
                    action: 'my_plugin_run_sql_command'
                },
                success: function(response) {
                    console.log(response);
                    if (response.success == true ){
                        $('#my-plugin-message').html('<div class="notice notice-success"><p>' + response.data + '</p></div>');
                    }else{
                        $('#my-plugin-message').html('<div class="notice notice-error"><p>' + response.data + '</p></div>');
                    }
                },
                error: function(error) {
                    $('#my-plugin-message').html('<div class="notice notice-error"><p>حدث خطأ أثناء تنفيذ الطلب, حاول مرة أخرى.</p></div>');
                    console.error(error);
                }
            });
        }
    });
});
