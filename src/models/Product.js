const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//Criando uma tabela de produto
const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  url: {
    type: String,
    required: true
  },

  creatAt: {
    type: Date,
    default: Date.now
  },
});

//controlar paginação dentro de api, tornando a exibição mais performática
ProductSchema.plugin(mongoosePaginate);

//tornando a tabela (Schema) disponivel
mongoose.model('Product', ProductSchema);