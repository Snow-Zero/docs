window.$docsify = {
    loadNavbar: true,
    loadSidebar: true,
    coverpage: true,//激活封面功能。如果为true，则会从中加载_coverpage.md。
    auto2top: true, //当路线改变时，滚动到屏幕的顶部。
    autoHeader: true,
    mergeNavbar: true,
    relativePath: true,
    maxLevel: 3,
    subMaxLevel: 3,
    name: 'YR-Client-Team Docs',
    repo: '',
    homepage: "index.md",
    themeColor: '#9900EE',
    el: '#loading',
    basePath: "/docs/",
    plugins: [
        EditOnGithubPlugin.create("//github.com/YR-Client-Team/docs/"),
        function (hook, vm) {
            hook.beforeEach(function (html) {
                return html
                    + '\n\n----  \n'
                    + '`YR-Client-Team Docs` Powered by [`docsify`](//docsify.js.org)  \n\n'
                    + '----';
            });
            hook.afterEach(function (html) {
                if (vm.route.path === '/') {
                    return html;
                }
                return html;
            });
        }
    ]
}