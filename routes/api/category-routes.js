const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
Category.findAll ({})
.then (parsedData => {
  res.json(parsedData)
})
.catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne ({
    where: {
      id: req.params.id
    },
    attributes: {
      include: ["products"]
    }
  }).then((categoryData) => {
    res.json(categoryData);
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((newCatrgory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
Category.update(
  {
    id: req.body.id,
    category_name: req.body.category_name,
  },
  {
where: {
  id: req.body.id,
  },
}
)
.then ((updatedCategory) => {
  res.json(updatedCategory);
})
.catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
