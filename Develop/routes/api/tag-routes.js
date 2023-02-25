const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product}],
    });
    res.status(200).json(tagsData);
  }
  catch (err) 
  {
    res.status(500).json(err);
  }
 
});

router.get('/:id', async (req, res) => { 
  try{
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    }
    );
    if (!tagData){
      res.status(404).json({ message: 'No tag has this id'})
      return;
    }
    res.status(200).json(tagData);
  }
  catch (err){
    res.status(500).json(err);
  }
  
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  }
  catch(err){
    res.status(400).json(err);
  }
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try{
    const updateTag = await Tag.update(req.body, {
      where:{
        id:req.params.id,
      },
    });
    res.status(200).json(updateTag);
  } catch(err){
    res.status(500).json(err);

  }
  if(!updateTag[0]) {
    res.status(404).json({ message: 'No tag with this id'});
    return;
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async(req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where:{
        id: req.params.id,
      },
    });
    res.status(200).json(deleteCategory)
  }
  catch(err){
    res.status(500).json(err);
    if (!deleteTag) {
      res.status(404).json({ message: 'No tag with this id'});
      return;
    }
  }
  // delete on tag by its `id` value
});

module.exports = router;
