module.exports = {
    index: async(req, res) => {
        try {
            // render view (tidak perlu menuliskan folder ataupun extensionnya)
            res.render('index')
        } catch (error) {
            console.log(err);
        }
    }
}