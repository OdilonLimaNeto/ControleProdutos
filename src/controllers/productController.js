const mongoose = require('mongoose');
const Product = mongoose.model('Product');
module.exports = {
  // Lista todos os produtos
  async index(req, res) {
    const { page = 1} = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });
    return res.json(products);
  },
  // Cria um novo produto
  //Coleta os dados de um novo produto e cria (.create(req.body))
  async store(req, res) {
    const product = await Product.create(req.body)
    return res.json(product);
  },
  // Exibe detalhes de um produto
  // Busca os dados de um produto pelo id (findById(req.params.id))
  async show(req, res) {
    const product = await Product.findById(req.params.id)

    return res.json(product);
  },
  // Atualiza dados de um produto
  // Acha o produto pelo id (findByIdAndUpdate(req.params.id), exibe detalhes desse produto (req.body), e atualiza com os novos dados({ new: true })
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(product);
  },
  // Removendo um dado inserido no banco de dados (findOneAndRemove(req.params.id) = Busca o produto através do id e remove)
  async destroy(req, res) {
    await Product.findOneAndRemove(req.params.id);
    return res.send();
  }
};