const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/api/tags", async (req, res) => {
  // find all tags
  // be sure to include its associated Product data

  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }, { model: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/api/tags/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findOne({
      include: [{ model: Product }, { model: ProductTag }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/api/tags", async (req, res) => {
  // create a new tag
  try {
    const newtag = Tag.create(req.body);
    res.json(newtag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/api/tags/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const tagId = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
    res.json(tagId);
});

router.delete("/api/tags/:id", async (req, res) => {
  // delete on tag by its `id` value

  const tagData = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(tagData);
});





module.exports = router;
