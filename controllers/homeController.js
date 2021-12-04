exports.home = async (req, res) => {
  res.render('index', { title: 'New Dashboard' })
}

exports.login = async (req, res) => {
  res.render('./layouts/auth/login', { layout: './layouts/auth/login' })
}

exports.register = async (req, res) => {
  res.render('./layouts/auth/register', { layout: './layouts/auth/register' })
}

exports.password = async (req, res) => {
  res.render('./layouts/auth/password', { layout: './layouts/auth/password' })
}
