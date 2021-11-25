import { Router } from 'express';

const router = Router();

const menus: Menu = [
    {id:1, label:"a", url:'/a'},
    {id:2, label:"b", url:'/b'},
    {id:3, label:"c", url:'/c'},
]

router.get('/', (_,res) =>{
    res.status(200).json({
        success:true,
        data:menus || {}
    })
})

module.exports = router