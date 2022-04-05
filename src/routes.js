module.exports = function (app) {
    /////////////////// Admin
    app.use('/api/admin/sections', require('./Routes/Admin/AdminSectionsRoutes'));
    //////////////////// End Admin
    /////////////////// Guest
    app.use('/api/sections', require('./Routes/SectionsRoutes'));
    app.use('/api/posts', require('./Routes/PostsRoutes'));
    //////////////////// End Guest
}

