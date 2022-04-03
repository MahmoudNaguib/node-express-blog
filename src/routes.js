module.exports = function (app) {
    app.use('/api/sections', require('./Routes/SectionsRoutes'));
}

