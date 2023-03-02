const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll ({})
.then (parsedData => {
  res.json(parsedData)
})
.catch(err => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne ({
    where: {
      id: req.params.id
    },
  }).then((tagData) => {
    res.json(tagData);
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag);
  })
  .catch (err => {
    res.status(500).json(err);
  });
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body,{
      where: {
        id: req.params.id,
      },
    })
    res.status(200).json(tagData)
 } catch (err) {
    res.status(500).json(err)
 }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch (err => {
    res.status(500).json(err);
});
});

module.exports = router;
