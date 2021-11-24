import { Router } from 'express';

const router = Router();

const menus: Menu = [
    {id:1, label:"item a", url:'/a'},
    {id:2, label:"item b", url:'/b'},
    {id:3, label:"item c", url:'/c'},
]

router.get('/', (_,res) =>{
    res.status(200).json({
        success:true,
        data:menus || {}
    })
})

module.exports = router