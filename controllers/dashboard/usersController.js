// @route    GET /
// @access    public
exports.index = async (req, res) => {
  res.render('./admin-panel/users', { title: 'Users' })
}
