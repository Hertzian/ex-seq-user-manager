// @route    GET /
// @access    public
exports.index = async (req, res) => {
  res.render('./front-page/index', { title: 'New Dashboard', layout: false })
}

// @route    GET /login
// @access    public
exports.login = async (req, res) => {
  res.render('./layouts/auth/login', { layout: false })
}

// @route    GET /register
// @access    public
exports.register = async (req, res) => {
  res.render('./layouts/auth/register', { layout: false })
}

// @route    GET /password
// @access    public
exports.password = async (req, res) => {
  res.render('./layouts/auth/password', { layout: false })
}
