function addNumbers (req, res, next) {
  return res.status(200).send({ total: parseInt(req.params.firstNumber) + parseInt(req.params.secondNumber) })
}

module.exports = {
  addNumbers: addNumbers
}