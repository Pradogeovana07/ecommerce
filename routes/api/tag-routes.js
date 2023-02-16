const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all categories
  Tag.findAll()
  .then(data=>res.json(data))
  .catch(err=>res.json(err))
  // be sure to include its associated Products
  
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Tag.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data=>res.json(data))
  .catch(err=>res.json(err))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new Tag
  Tag.create(req.body)
  .then(data=>res.json(data))
  .catch(err=>res.json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
