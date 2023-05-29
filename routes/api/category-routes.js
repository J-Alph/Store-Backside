const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories

  const categoryData = await Category.findAll().catch((err) =>{
    res.json(err);
  });
  
  res.json(categoryData);
  });

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const categoryData = await Category.findOne({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new category
 try{
 
  const newCategory = await Category.create(req.body)
  res.json(newCategory);
 }catch (err){
  res.status(500).json(err);
 }
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  const categoryId = await Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
    res.json(categoryId);
});



router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value

  const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(categoryData);
});




module.exports = router;
