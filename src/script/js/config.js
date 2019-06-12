//require.config({  })   配置模块
require.config({
    baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/', //基路径，模块的共有的路径。
    paths: { ////引入模块的地址，文件不能添加扩展名
        'jquery': 'jquery/3.4.0/jquery.min',
        'jqcookie': 'jquery-cookie/1.4.1/jquery.cookie.min',
        'validate': 'jquery-validate/1.19.0/jquery.validate.min',

    },
    shim: { //非AMD规范的JS文件module2,就需要使用Require中的shim.
        // exports: 'lazyload', //exports 表示输出的对象名
        // exports: 'jquery'
    }
});