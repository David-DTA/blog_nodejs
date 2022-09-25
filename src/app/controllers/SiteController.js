class SiteController {
    //[GET] /
    index(req, res) {
        res.render('home');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController(); //xuất ra ngoài
//export cái gì khi require sẽ nhận được cái đó
